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
import { getBookings, updateBookingStatus, getAnalytics, autoCleanupBookings } from '../utils/bookingStorage';
import type { Booking } from '../utils/bookingStorage';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Admin = () => {
    const navigate = useNavigate();
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [analytics, setAnalytics] = useState<any>(null);

    const loadData = async () => {
        autoCleanupBookings();
        const [data, analyticsData] = await Promise.all([
            getBookings(),
            getAnalytics()
        ]);

        const sorted = [...data].sort((a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setBookings(sorted);
        setAnalytics(analyticsData);
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
        await updateBookingStatus(id, newStatus);
        await loadData();
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
        <div className="bg-slate-50 min-h-screen p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">Panel de Administración</h1>
                        <p className="text-slate-500">Gestiona tus citas y clientes de un vistazo.</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={handleLogout}
                            className="flex items-center px-4 py-3 bg-white border border-red-100 rounded-2xl text-sm font-bold text-red-600 hover:bg-red-50 hover:border-red-200 transition-all shadow-sm"
                        >
                            <LogOut className="w-4 h-4 mr-2" />
                            Cerrar Sesión
                        </button>
                    </div>
                </div>

                {/* Cuadrícula de Estadísticas - Rediseñada */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500">
                            <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2 transition-transform duration-700 group-hover:scale-150 ${stat.bg.replace('50', '500')}`} />
                            <div className="flex items-center gap-4 relative z-10">
                                <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color} transition-transform group-hover:scale-110 duration-300`}>
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                                    <div className="flex items-baseline gap-2">
                                        <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                                        <Activity className={`w-3 h-3 ${stat.color} opacity-40`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bookings Table */}
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                        <h2 className="text-xl font-bold text-slate-900">Próximas Reservas</h2>
                        <div className="relative">
                            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Buscar por nombre o teléfono..."
                                className="pl-12 pr-6 py-3 border border-slate-100 bg-slate-50/50 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 w-64 transition-all"
                            />
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-slate-50/50 text-slate-500 text-[10px] font-black uppercase tracking-widest">
                                    <th className="px-8 py-5">Cliente</th>
                                    <th className="px-8 py-5">Servicios</th>
                                    <th className="px-8 py-5">Fecha y Hora</th>
                                    <th className="px-8 py-5">Estado</th>
                                    <th className="px-8 py-5 text-right">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {filteredBookings.length > 0 ? filteredBookings.map((booking) => (
                                    <tr key={booking.id} className="hover:bg-slate-50 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="font-semibold text-slate-900">{booking.clientName}</div>
                                            <div className="text-xs text-slate-500">{booking.phone}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col gap-1.5">
                                                {booking.services.map(s => (
                                                    <div key={s.id} className="flex items-center justify-between gap-3 bg-pink-50/50 px-3 py-1 rounded-xl border border-pink-100/50 group-hover:bg-white group-hover:border-pink-200 transition-all">
                                                        <span className="text-[10px] font-bold text-pink-600 truncate max-w-[100px]">
                                                            {s.name}
                                                        </span>
                                                        <span className="text-[10px] font-black text-pink-700/70">
                                                            {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(s.price)}
                                                        </span>
                                                    </div>
                                                ))}
                                                <div className="mt-1 pt-1 border-t border-pink-100 flex justify-between items-center px-1">
                                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Total</span>
                                                    <span className="text-xs font-black text-slate-900">
                                                        {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(booking.totalPrice)}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-slate-400" />
                                                {booking.date}
                                            </div>
                                            <div className="flex items-center gap-2 mt-1">
                                                <Clock className="w-4 h-4 text-slate-400" />
                                                {booking.time}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${booking.status === 'realizada' ? 'bg-green-50 text-green-600' :
                                                booking.status === 'no-asistio' ? 'bg-red-50 text-red-600' :
                                                    booking.status === 'cancelada' ? 'bg-slate-100 text-slate-400' :
                                                        'bg-orange-50 text-orange-600'
                                                }`}>
                                                {booking.status.toUpperCase()}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button
                                                    onClick={() => handleUpdateStatus(booking.id, 'realizada')}
                                                    className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                                                    title="Realizada"
                                                >
                                                    <CheckCircle className="w-5 h-5" />
                                                </button>
                                                <button
                                                    onClick={() => handleUpdateStatus(booking.id, 'no-asistio')}
                                                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                    title="No asistió"
                                                >
                                                    <XCircle className="w-5 h-5" />
                                                </button>
                                                <button
                                                    onClick={() => handleUpdateStatus(booking.id, 'cancelada')}
                                                    className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg transition-colors"
                                                    title="Mandar a historial / Cancelar"
                                                >
                                                    <ArrowRight className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={5} className="px-8 py-20 text-center text-slate-400">
                                            <div className="flex flex-col items-center gap-2">
                                                <Search className="w-8 h-8 opacity-20" />
                                                <p className="font-medium">No se encontraron citas</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="p-8 bg-slate-50/30 border-t border-slate-100 text-center">
                        <p className="text-xs text-slate-400">Mostrando {filteredBookings.length} citas registradas</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
