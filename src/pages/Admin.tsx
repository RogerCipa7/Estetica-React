import { useState } from 'react';
import {
    Users,
    Calendar,
    CheckCircle,
    XCircle,
    Clock,
    ArrowRight,
    TrendingUp as RevenueIcon,
    LogOut,
    Activity,
    Search
} from 'lucide-react';
import { getBookings, updateBookingStatus, calculateAnalytics, autoCleanupBookings } from '../utils/bookingStorage';
import type { Booking } from '../utils/bookingStorage';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Admin = () => {
    const navigate = useNavigate();
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [analytics, setAnalytics] = useState<any>(null);
    const [processingId, setProcessingId] = useState<string | null>(null);
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    const showToast = (message: string, type: 'success' | 'error' = 'success') => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    const loadData = async () => {
        autoCleanupBookings();
        try {
            const data = await getBookings();
            const sorted = [...data].sort((a, b) =>
                new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
            setBookings(sorted);
            setAnalytics(calculateAnalytics(data));
        } catch (err) {
            console.error('Error loading data:', err);
            showToast('Error al cargar los datos', 'error');
        }
    };

    useEffect(() => {
        const isAuth = localStorage.getItem('glowbook_session');
        if (!isAuth) {
            navigate('/login');
        } else {
            loadData();
        }
    }, [navigate]);

    const handleUpdateStatus = async (id: string, newStatus: Booking['status']) => {
        setProcessingId(id);
        try {
            await updateBookingStatus(id, newStatus);

            // Actualización optimista del estado local
            setBookings(prev => {
                const updated = prev.map(b => b.id === id ? { ...b, status: newStatus } : b);
                // Actualizar analíticas inmediatamente con los nuevos datos locales
                setAnalytics(calculateAnalytics(updated));
                return updated;
            });

            showToast(`Reserva marcada como ${newStatus.replace('-', ' ')}`);
        } catch (err) {
            console.error('Error updating status:', err);
            showToast('Error al actualizar el estado', 'error');
        } finally {
            setProcessingId(null);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('glowbook_session');
        navigate('/login');
    };

    const filteredBookings = bookings.filter(b =>
        b.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.phone.includes(searchTerm)
    );

    const stats = [
        { label: 'Reservas Totales', value: analytics?.total.toString() || '0', icon: Calendar, color: 'text-blue-600', bg: 'bg-blue-50' },
        { label: 'Efectividad', value: `${analytics?.asistenciaRate.toFixed(1) || '0'}%`, icon: Users, color: 'text-purple-600', bg: 'bg-purple-50' },
        { label: 'Ingresos Reales', value: new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(analytics?.ingresosReales || 0), icon: RevenueIcon, color: 'text-green-600', bg: 'bg-green-50' },
        { label: 'Pendientes', value: ((analytics?.total || 0) - (analytics?.realizados || 0) - (analytics?.noAsistio || 0) - (analytics?.canceladas || 0)).toString(), icon: Clock, color: 'text-orange-600', bg: 'bg-orange-50' },
    ];

    return (
        <div className="bg-slate-50 min-h-screen p-4 md:p-8 relative">
            {/* Simple Toast System */}
            {toast && (
                <div className={`fixed top-8 right-8 z-[100] px-6 py-4 rounded-2xl shadow-2xl border flex items-center gap-3 animate-in fade-in slide-in-from-right-8 duration-300 ${toast.type === 'success' ? 'bg-white border-green-100 text-green-800' : 'bg-white border-red-100 text-red-800'
                    }`}>
                    {toast.type === 'success' ? <CheckCircle className="w-5 h-5 text-green-500" /> : <XCircle className="w-5 h-5 text-red-500" />}
                    <span className="text-sm font-bold">{toast.message}</span>
                </div>
            )}

            <div className="max-w-7xl mx-auto space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Panel de Administración</h1>
                        <p className="text-slate-500 font-medium">Gestiona tus citas y clientes de un vistazo.</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={handleLogout}
                            className="flex items-center px-5 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-600 hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-all shadow-sm active:scale-95"
                        >
                            <LogOut className="w-4 h-4 mr-2" />
                            Cerrar Sesión
                        </button>
                    </div>
                </div>

                {/* Cuadrícula de Estadísticas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500">
                            <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2 transition-transform duration-700 group-hover:scale-150 ${stat.bg.replace('50', '500')}`} />
                            <div className="flex items-center gap-4 relative z-10">
                                <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color} transition-transform group-hover:scale-110 duration-300`}>
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">{stat.label}</p>
                                    <div className="flex items-baseline gap-2 mt-0.5">
                                        <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                                        <Activity className={`w-3 h-3 ${stat.color} opacity-40`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bookings Table */}
                <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
                    <div className="p-8 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-6 bg-pink-500 rounded-full" />
                            <h2 className="text-xl font-black text-slate-900">Próximas Reservas</h2>
                        </div>
                        <div className="relative w-full sm:w-80">
                            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Buscar por nombre o teléfono..."
                                className="w-full pl-12 pr-6 py-3.5 bg-slate-50/50 border border-slate-100 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all"
                            />
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-slate-50/50 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
                                    <th className="px-8 py-5">Cliente</th>
                                    <th className="px-8 py-5">Servicios</th>
                                    <th className="px-8 py-5">Fecha y Hora</th>
                                    <th className="px-8 py-5">Estado</th>
                                    <th className="px-8 py-5 text-right">Acciones de Control</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {filteredBookings.length > 0 ? filteredBookings.map((booking) => (
                                    <tr key={booking.id} className="hover:bg-slate-50/50 transition-colors group">
                                        <td className="px-8 py-6">
                                            <div className="font-bold text-slate-900 text-base">{booking.clientName}</div>
                                            <div className="text-xs text-slate-500 font-medium mt-0.5">{booking.phone}</div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex flex-col gap-1.5">
                                                {booking.services.map(s => (
                                                    <div key={s.id} className="flex items-center justify-between gap-4 bg-pink-50/30 px-3 py-1.5 rounded-xl border border-pink-100/50 group-hover:bg-white transition-all">
                                                        <span className="text-[10px] font-bold text-pink-600 truncate max-w-[120px]">
                                                            {s.name}
                                                        </span>
                                                        <span className="text-[10px] font-black text-pink-700/60">
                                                            {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(s.price)}
                                                        </span>
                                                    </div>
                                                ))}
                                                <div className="mt-1 pt-1.5 border-t border-slate-100 flex justify-between items-center px-1">
                                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Inversión Total</span>
                                                    <span className="text-sm font-black text-slate-900">
                                                        {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(booking.totalPrice)}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="space-y-1.5">
                                                <div className="flex items-center gap-2.5 text-slate-600 font-bold text-xs">
                                                    <Calendar className="w-4 h-4 text-pink-400" />
                                                    {booking.date}
                                                </div>
                                                <div className="flex items-center gap-2.5 text-slate-500 font-medium text-xs">
                                                    <Clock className="w-4 h-4 text-slate-300" />
                                                    {booking.time}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${booking.status === 'realizada' ? 'bg-green-50 text-green-600 border border-green-100' :
                                                booking.status === 'no-asistio' ? 'bg-red-50 text-red-600 border border-red-100' :
                                                    booking.status === 'cancelada' ? 'bg-slate-50 text-slate-400 border border-slate-100' :
                                                        'bg-orange-50 text-orange-600 border border-orange-100'
                                                }`}>
                                                {booking.status.replace('-', ' ')}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <div className="flex justify-end gap-2 text-right">
                                                {processingId === booking.id ? (
                                                    <div className="w-8 h-8 border-2 border-pink-100 border-t-pink-500 rounded-full animate-spin" />
                                                ) : (
                                                    <>
                                                        <button
                                                            onClick={() => handleUpdateStatus(booking.id, 'realizada')}
                                                            className={`p-2.5 rounded-xl transition-all active:scale-95 group/btn ${booking.status === 'realizada' ? 'bg-green-500 text-white' : 'bg-green-50 text-green-600 hover:bg-green-500 hover:text-white border border-green-100'
                                                                }`}
                                                            title="Cita Realizada"
                                                        >
                                                            <CheckCircle className="w-5 h-5" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleUpdateStatus(booking.id, 'no-asistio')}
                                                            className={`p-2.5 rounded-xl transition-all active:scale-95 group/btn ${booking.status === 'no-asistio' ? 'bg-red-500 text-white' : 'bg-red-50 text-red-600 hover:bg-red-500 hover:text-white border border-red-100'
                                                                }`}
                                                            title="No Asistió"
                                                        >
                                                            <XCircle className="w-5 h-5" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleUpdateStatus(booking.id, 'cancelada')}
                                                            className={`p-2.5 rounded-xl transition-all active:scale-95 group/btn ${booking.status === 'cancelada' ? 'bg-slate-400 text-white' : 'bg-slate-50 text-slate-400 hover:bg-slate-400 hover:text-white border border-slate-200'
                                                                }`}
                                                            title="Anular / Historial"
                                                        >
                                                            <ArrowRight className="w-5 h-5" />
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={5} className="px-8 py-24 text-center">
                                            <div className="flex flex-col items-center gap-4">
                                                <div className="p-4 bg-slate-50 rounded-full">
                                                    <Search className="w-10 h-10 text-slate-200" />
                                                </div>
                                                <p className="font-bold text-slate-400 text-lg">No se encontraron citas</p>
                                                <p className="text-sm text-slate-300">Intenta con otro término de búsqueda</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="p-8 bg-slate-50/30 border-t border-slate-50 flex items-center justify-between">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Registro de Actividad</p>
                        <p className="text-xs font-bold text-slate-500">Mostrando {filteredBookings.length} resultados dinámicos</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
