import { supabase } from './supabase';

export interface Booking {
    id: string;
    clientName: string;
    phone: string;
    services: {
        id: string;
        name: string;
        price: number;
    }[];
    totalPrice: number;
    date: string;
    time: string;
    status: 'recibida' | 'realizada' | 'no-asistio' | 'cancelada';
    createdAt: string;
}

export const getBookings = async (): Promise<Booking[]> => {
    const { data, error } = await supabase
        .from('bookings')
        .select(`
            *,
            booking_services (*)
        `)
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching bookings:', error);
        return [];
    }

    return data.map((b: any) => ({
        id: b.id,
        clientName: b.client_name,
        phone: b.phone,
        services: b.booking_services.map((s: any) => ({
            id: s.service_id,
            name: s.service_name,
            price: Number(s.service_price)
        })),
        totalPrice: Number(b.total_price),
        date: b.date,
        time: b.time,
        status: b.status,
        createdAt: b.created_at
    }));
};

export const isSlotAvailable = async (date: string, time: string): Promise<boolean> => {
    const { data, error } = await supabase
        .from('bookings')
        .select('id')
        .eq('date', date)
        .eq('time', time)
        .neq('status', 'cancelada');

    if (error) {
        console.error('Error checking availability:', error);
        return false;
    }

    return data.length === 0;
};

export const saveBooking = async (booking: Booking): Promise<{ success: boolean; error?: string }> => {
    if (!booking.clientName || !booking.phone || !booking.date || !booking.time) {
        return { success: false, error: 'Datos incompletos' };
    }

    const available = await isSlotAvailable(booking.date, booking.time);
    if (!available) {
        return { success: false, error: 'Este horario ya no está disponible.' };
    }

    // Insertar la reserva principal
    const { error: bookingError } = await supabase
        .from('bookings')
        .insert({
            id: booking.id,
            client_name: booking.clientName.trim().substring(0, 100),
            phone: booking.phone.trim().replace(/[^0-9+\s-]/g, ''),
            total_price: booking.totalPrice,
            date: booking.date,
            time: booking.time,
            status: booking.status
        });

    if (bookingError) {
        console.error('Error saving booking:', bookingError);
        return { success: false, error: 'Error al guardar la reserva en la base de datos.' };
    }

    // Insertar los servicios asociados
    const servicesToInsert = booking.services.map(s => ({
        booking_id: booking.id,
        service_id: s.id,
        service_name: s.name,
        service_price: s.price
    }));

    const { error: servicesError } = await supabase
        .from('booking_services')
        .insert(servicesToInsert);

    if (servicesError) {
        console.error('Error saving booking services:', servicesError);
        // Podríamos intentar borrar la reserva si fallan los servicios, pero el cascade suele manejarlo si fuera al revés.
        return { success: false, error: 'Reserva creada pero hubo un error con los servicios.' };
    }

    return { success: true };
};

export const updateBookingStatus = async (id: string, status: Booking['status']) => {
    const { error } = await supabase
        .from('bookings')
        .update({ status })
        .eq('id', id);

    if (error) {
        console.error('Error updating status:', error);
        throw error;
    }
};

export const calculateAnalytics = (bookings: Booking[]) => {
    const total = bookings.length;
    const realizados = bookings.filter((b: Booking) => b.status === 'realizada').length;
    const noAsistio = bookings.filter((b: Booking) => b.status === 'no-asistio').length;
    const canceladas = bookings.filter((b: Booking) => b.status === 'cancelada').length;

    const ingresosReales = bookings
        .filter((b: Booking) => b.status === 'realizada')
        .reduce((sum: number, b: Booking) => sum + b.totalPrice, 0);

    const ingresosEstimados = bookings
        .filter((b: Booking) => b.status === 'recibida')
        .reduce((sum: number, b: Booking) => sum + b.totalPrice, 0);

    return {
        total,
        realizados,
        noAsistio,
        canceladas,
        ingresosReales,
        ingresosEstimados,
        asistenciaRate: (total - canceladas) > 0 ? (realizados / (total - canceladas)) * 100 : 0
    };
};

export const getAnalytics = async () => {
    const bookings = await getBookings();
    return calculateAnalytics(bookings);
};

export const autoCleanupBookings = () => {
    // Supabase permite manejar esto con cron jobs o simplemente dejarlo.
    // En el cliente lo desactivamos para no interferir con la DB remota sin permiso.
    console.log('[Supabase] La limpieza automática debe ser configurada en el dashboard si es necesaria.');
};

export const clearAllBookings = async () => {
    // Peligroso: Borra todo. Usar con precaución.
    const { error } = await supabase.from('bookings').delete().neq('id', 'void');
    if (error) console.error('Error clearing bookings:', error);
};
