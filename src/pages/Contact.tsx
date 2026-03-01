import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Calendar, Sparkles, Clock, Check, ArrowRight, XCircle } from 'lucide-react';
import { format, addMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isBefore, startOfToday } from 'date-fns';
import { es } from 'date-fns/locale';
import { serviceCategories } from '../data/servicesData';
import { saveBooking, isSlotAvailable, getBookings } from '../utils/bookingStorage';
import type { Booking } from '../utils/bookingStorage';

const Contact = () => {
    const [selectedServices, setSelectedServices] = useState<Record<string, any>>({});
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState('');
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [clientName, setClientName] = useState('');
    const [phone, setPhone] = useState('');
    const [bookedSlots, setBookedSlots] = useState<string[]>([]);
    const [bookingError, setBookingError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBookedSlots = async () => {
            if (selectedDate) {
                const dateStr = format(selectedDate, 'yyyy-MM-dd');
                const allBookings = await getBookings();
                const booked = allBookings
                    .filter(b => b.date === dateStr && b.status !== 'cancelada')
                    .map(b => b.time);
                setBookedSlots(booked);
                if (booked.includes(selectedTime)) {
                    setSelectedTime('');
                }
            }
        };
        fetchBookedSlots();
    }, [selectedDate, selectedTime]);

    const toggleService = (categoryName: string, service: any) => {
        setSelectedServices(prev => {
            const next = { ...prev };
            if (next[categoryName]?.id === service.id) {
                delete next[categoryName];
            } else {
                next[categoryName] = service;
            }
            return next;
        });
    };

    const hasSelection = Object.keys(selectedServices).length > 0;
    const selectedList = Object.values(selectedServices);

    const parsePrice = (priceStr: string) => {
        return parseInt(priceStr.replace(/[^0-9]/g, '')) || 0;
    };

    const totalPrice = selectedList.reduce((acc, curr: any) => acc + parsePrice(curr.price), 0);
    const formattedTotal = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(totalPrice);

    const daysInMonth = eachDayOfInterval({
        start: startOfMonth(currentMonth),
        end: endOfMonth(currentMonth),
    });

    const firstDayOfMonth = startOfMonth(currentMonth);
    const startDayIndex = (firstDayOfMonth.getDay() + 6) % 7; // Ajuste para que Lunes sea 0 y Domingo sea 6

    const times = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];

    return (
        <div className="bg-[#FAF9F6] min-h-screen pb-32">
            {/* Área de Encabezado / Hero */}
            <div className="bg-[#0a0614] pt-32 pb-48 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                </div>
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold tracking-widest uppercase mb-6">
                        <Calendar size={14} />
                        Reserva tu experiencia
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        Agenda tu momento <em>Glow</em>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Selecciona uno o más tratamientos de diferentes categorías para una experiencia completa.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 -mt-20 md:-mt-32 relative z-20 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-2 space-y-12">
                        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-pink-100/20 border border-pink-50/50 p-8 md:p-12">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-500">
                                    <Sparkles size={24} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">Paso 1: Selecciona tus Servicios</h2>
                                    <p className="text-gray-500 text-sm">Puedes elegir un servicio por categoría</p>
                                </div>
                            </div>

                            <div className="space-y-10">
                                {serviceCategories.map((category) => (
                                    <div key={category.name}>
                                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-100 pb-2 flex justify-between items-center">
                                            {category.name}
                                            {selectedServices[category.name] && (
                                                <span className="text-pink-500 normal-case font-medium text-xs bg-pink-50 px-2 py-0.5 rounded-full">
                                                    Seleccionado
                                                </span>
                                            )}
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {category.items.map((service) => {
                                                const isSelected = selectedServices[category.name]?.id === service.id;
                                                return (
                                                    <button
                                                        key={service.id}
                                                        onClick={() => toggleService(category.name, service)}
                                                        className={`group relative p-6 rounded-2xl border-2 text-left transition-all duration-300 ${isSelected
                                                            ? 'border-pink-500 bg-pink-50/50 shadow-lg shadow-pink-100/50'
                                                            : 'border-gray-50 bg-gray-50/30 hover:border-pink-200 hover:bg-white'
                                                            }`}
                                                    >
                                                        <div className="flex justify-between items-start mb-2">
                                                            <span className={`font-bold transition-colors ${isSelected ? 'text-pink-600' : 'text-gray-900 group-hover:text-pink-600'}`}>
                                                                {service.name}
                                                            </span>
                                                            {isSelected && (
                                                                <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white scale-110">
                                                                    <Check size={14} strokeWidth={3} />
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="flex items-center gap-3 text-sm text-gray-500">
                                                            <span className="flex items-center gap-1">
                                                                <Clock size={12} />
                                                                {service.duration}
                                                            </span>
                                                            <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                                            <span className="font-semibold text-pink-600/80">{service.price}</span>
                                                        </div>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {hasSelection && (
                            <div className="bg-[#0a0614] rounded-[2.5rem] p-8 text-white shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
                                <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
                                    <h3 className="text-xl font-bold flex items-center gap-3">
                                        <Sparkles size={20} className="text-pink-400" />
                                        Tu Selección
                                    </h3>
                                    <div className="text-right">
                                        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Total Estimado</p>
                                        <p className="text-2xl font-bold text-pink-400">{formattedTotal}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {selectedList.map((service: any) => (
                                        <div key={service.id} className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/10 group hover:border-pink-500/30 transition-colors">
                                            <div>
                                                <p className="font-bold text-sm group-hover:text-pink-400 transition-colors">{service.name}</p>
                                                <p className="text-xs text-gray-400">{service.duration}</p>
                                            </div>
                                            <p className="font-bold text-pink-400">{service.price}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-pink-100/20 border border-pink-50/50 p-8 md:p-12">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-500">
                                    <Calendar size={24} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">Paso 2: Fecha y Hora</h2>
                                    <p className="text-gray-500 text-sm">Selecciona el mejor momento para ti</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                <div>
                                    <div className="flex justify-between items-center mb-8">
                                        <span className="font-bold text-gray-900 capitalize text-lg">
                                            {format(currentMonth, 'MMMM yyyy', { locale: es })}
                                        </span>
                                        <div className="flex gap-2">
                                            <button onClick={() => setCurrentMonth(addMonths(currentMonth, -1))} className="p-2 hover:bg-pink-50 rounded-xl text-gray-400 hover:text-pink-500 transition-colors border border-gray-100">
                                                &lt;
                                            </button>
                                            <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} className="p-2 hover:bg-pink-50 rounded-xl text-gray-400 hover:text-pink-500 transition-colors border border-gray-100">
                                                &gt;
                                            </button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">
                                        {['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'].map(d => <div key={d}>{d}</div>)}
                                    </div>
                                    <div className="grid grid-cols-7 gap-2 text-center">
                                        {Array.from({ length: startDayIndex }).map((_, i) => (
                                            <div key={`empty-${i}`} className="aspect-square" />
                                        ))}
                                        {daysInMonth.map(day => {
                                            const disabled = isBefore(day, startOfToday());
                                            const active = selectedDate && isSameDay(day, selectedDate);
                                            const isToday = isSameDay(day, startOfToday());
                                            return (
                                                <button
                                                    key={day.toISOString()}
                                                    disabled={disabled}
                                                    onClick={() => setSelectedDate(day)}
                                                    className={`aspect-square rounded-xl text-sm font-medium transition-all relative flex items-center justify-center ${disabled ? 'text-gray-200 cursor-not-allowed' :
                                                        active ? 'bg-pink-600 text-white shadow-lg shadow-pink-200' :
                                                            'hover:bg-pink-50 text-gray-700'
                                                        } ${isToday && !active ? 'border border-pink-200 text-pink-600' : ''}`}
                                                >
                                                    {format(day, 'd')}
                                                    {isToday && !active && <div className="absolute bottom-1.5 w-1 h-1 bg-pink-500 rounded-full" />}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                                        <Clock size={16} className="text-pink-500" />
                                        Horarios Disponibles
                                    </h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        {times.map(t => {
                                            const isBooked = bookedSlots.includes(t);
                                            return (
                                                <button
                                                    key={t}
                                                    disabled={isBooked}
                                                    onClick={() => {
                                                        setSelectedTime(t);
                                                        setBookingError(null);
                                                    }}
                                                    className={`py-4 rounded-2xl border-2 text-sm font-bold transition-all duration-300 relative ${isBooked
                                                        ? 'bg-gray-100 border-gray-100 text-gray-400 cursor-not-allowed opacity-50'
                                                        : selectedTime === t
                                                            ? 'bg-pink-600 border-pink-600 text-white shadow-lg shadow-pink-200'
                                                            : 'border-gray-50 bg-gray-50/50 hover:border-pink-200 text-gray-600 hover:text-pink-600'
                                                        }`}
                                                >
                                                    {t}
                                                    {isBooked && <span className="absolute -top-1 -right-1 bg-red-400 w-2 h-2 rounded-full border border-white shadow-sm" />}
                                                </button>
                                            );
                                        })}
                                    </div>
                                    <div className="mt-8 p-4 bg-pink-50/50 rounded-2xl border border-pink-100">
                                        <p className="text-xs text-pink-700 leading-relaxed font-medium">
                                            * Los horarios mostrados están disponibles para el {selectedDate ? format(selectedDate, "d 'de' MMMM", { locale: es }) : 'día seleccionado'}.
                                        </p>
                                    </div>

                                    <div className="mt-8 pt-8 border-t border-slate-100 space-y-6">
                                        <h4 className="font-bold text-gray-900 flex items-center gap-2">
                                            <Sparkles size={16} className="text-pink-500" />
                                            Tus Datos de Contacto
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Nombre Completo</label>
                                                <input
                                                    type="text"
                                                    value={clientName}
                                                    onChange={(e) => setClientName(e.target.value)}
                                                    placeholder="Ej: Ana María García"
                                                    className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent focus:border-pink-200 focus:bg-white rounded-2xl text-sm transition-all outline-none"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">WhatsApp / Celular</label>
                                                <input
                                                    type="tel"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    placeholder="Ej: 300 123 4567"
                                                    className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent focus:border-pink-200 focus:bg-white rounded-2xl text-sm transition-all outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            {isSubmitted ? (
                                <div className="bg-white border border-pink-100 p-10 md:p-16 rounded-[3rem] w-full text-center shadow-2xl shadow-pink-200/20 animate-in zoom-in-95 duration-700">
                                    <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-100">
                                        <Check size={48} strokeWidth={3} />
                                    </div>
                                    <h3 className="text-4xl font-bold text-gray-900 mb-4 font-serif">¡Tu cita está en camino!</h3>
                                    <p className="text-gray-500 mb-10 max-w-md mx-auto text-lg">Gracias por elegir GlowBook, <strong>{clientName}</strong>. Nos pondremos en contacto contigo al número {phone} para confirmar los detalles finales.</p>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                        <Link
                                            to="/"
                                            className="px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black transition-all shadow-lg text-sm w-full sm:w-auto"
                                        >
                                            Volver al Inicio
                                        </Link>
                                        <button
                                            onClick={() => {
                                                setIsSubmitted(false);
                                                setSelectedServices({});
                                                setSelectedDate(null);
                                                setSelectedTime('');
                                                setClientName('');
                                                setPhone('');
                                            }}
                                            className="px-8 py-4 bg-pink-50 text-pink-600 font-bold rounded-2xl hover:bg-pink-100 transition-all text-sm w-full sm:w-auto"
                                        >
                                            Agendar otra Cita
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <button
                                        disabled={
                                            !hasSelection ||
                                            !selectedDate ||
                                            !selectedTime ||
                                            clientName.trim().length < 3 ||
                                            // Validación estricta Colombia: Empieza por 3 y tiene 10 dígitos (ignorando espacios/+57)
                                            !/^(?:\+?57)?3\d{9}$/.test(phone.trim().replace(/\s/g, ''))
                                        }
                                        onClick={async () => {
                                            // Reset error
                                            setBookingError(null);

                                            const trimmedName = clientName.trim();
                                            const trimmedPhone = phone.trim().replace(/\s/g, '');

                                            // Validation Logic
                                            if (!hasSelection) {
                                                setBookingError('Por favor selecciona al menos un servicio.');
                                                return;
                                            }
                                            if (!selectedDate) {
                                                setBookingError('Por favor selecciona una fecha en el calendario.');
                                                return;
                                            }
                                            if (!selectedTime) {
                                                setBookingError('Por favor selecciona un horario disponible.');
                                                return;
                                            }

                                            if (!trimmedName || trimmedName.length < 3) {
                                                setBookingError('Por favor ingresa un nombre válido (mínimo 3 letras).');
                                                return;
                                            }
                                            if (!trimmedPhone || !/^(?:\+?57)?3\d{9}$/.test(trimmedPhone)) {
                                                setBookingError('Por favor ingresa un número de teléfono válido (10 dígitos, empieza por 3).');
                                                return;
                                            }

                                            const dateStr = format(selectedDate!, 'yyyy-MM-dd');

                                            if (!(await isSlotAvailable(dateStr, selectedTime))) {
                                                setBookingError('Lo sentimos, este horario acaba de ser reservado. Por favor elige otro.');
                                                return;
                                            }

                                            const newBooking: Booking = {
                                                id: Math.random().toString(36).substr(2, 9),
                                                clientName: trimmedName,
                                                phone: trimmedPhone,
                                                services: selectedList.map(s => ({ id: s.id, name: s.name, price: parsePrice(s.price) })),
                                                totalPrice,
                                                date: dateStr,
                                                time: selectedTime,
                                                status: 'recibida',
                                                createdAt: new Date().toISOString()
                                            };

                                            const result = await saveBooking(newBooking);
                                            if (result.success) {
                                                setIsSubmitted(true);
                                                // Eliminado el scroll automático a petición del usuario
                                            } else {
                                                setBookingError(result.error || 'Ocurrió un error al guardar la reserva.');
                                            }
                                        }}
                                        className="group w-full max-w-md py-6 bg-[#0a0614] text-white font-bold rounded-3xl hover:bg-pink-600 transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed text-xl shadow-2xl flex items-center justify-center gap-3"
                                    >
                                        Confirmar Reserva ({selectedList.length})
                                        <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                                    </button>
                                    {bookingError && (
                                        <div className="mt-6 p-4 bg-red-50 text-red-600 rounded-2xl border border-red-100 text-sm font-bold flex items-center justify-center gap-2 animate-in fade-in slide-in-from-top-2">
                                            <XCircle size={16} />
                                            {bookingError}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-pink-100/10 p-10 border border-gray-50 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-10">Contáctanos</h3>
                            <div className="space-y-8 relative z-10">
                                <div className="flex gap-5 group">
                                    <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                                        <MapPin size={22} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Ubicación</p>
                                        <p className="text-sm text-gray-500 leading-relaxed">Calle 123 #45-67, Envigado<br />Sector Salud, Bogotá</p>
                                    </div>
                                </div>
                                <div className="flex gap-5 group">
                                    <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                                        <Phone size={22} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">WhatsApp</p>
                                        <p className="text-sm text-gray-500">+57 300 123 4567</p>
                                    </div>
                                </div>
                                <div className="flex gap-5 group">
                                    <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                                        <Mail size={22} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Correo</p>
                                        <p className="text-sm text-gray-500">hola@glowbook.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#0a0614] rounded-[2.5rem] shadow-2xl p-10 text-white relative overflow-hidden">
                            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-pink-600/20 rounded-full blur-3xl" />
                            <h3 className="text-2xl font-bold mb-8 font-serif">Horarios</h3>
                            <div className="space-y-6 relative z-10">
                                <div className="flex justify-between items-center text-gray-400">
                                    <span>Lunes - Viernes</span>
                                    <span className="text-white font-medium">9:00 - 18:00</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-400">
                                    <span>Sábados</span>
                                    <span className="text-white font-medium">10:00 - 16:00</span>
                                </div>
                                <div className="flex justify-between items-center text-pink-400 font-bold border-t border-white/5 pt-4">
                                    <span>Domingos</span>
                                    <span>Cerrado</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
