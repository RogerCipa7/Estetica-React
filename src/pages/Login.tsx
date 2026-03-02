import { useState } from 'react';
import { Mail, Lock, Sparkles, ArrowRight, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        setTimeout(() => {
            if (email === 'admin@glowbook.com' && password === 'admin123') {
                localStorage.setItem('glowbook_session', 'true');
                navigate('/admin');
            } else {
                setError('Credenciales incorrectas. Verifica tu email y contraseña.');
                setIsLoading(false);
            }
        }, 800);
    };

    const fillDemo = (e: React.MouseEvent) => {
        e.preventDefault();
        setEmail('admin@glowbook.com');
        setPassword('admin123');
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row overflow-hidden font-sans">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap');
                .login-root { font-family: 'Inter', sans-serif; }
                .serif { font-family: 'Cormorant Garamond', serif; }
                @keyframes float-slow { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(5deg); } }
                @keyframes float-slower { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-12px) rotate(-3deg); } }
                @keyframes gradient-shift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
                @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
                .float-slow { animation: float-slow 8s ease-in-out infinite; }
                .float-slower { animation: float-slower 12s ease-in-out infinite; }
                .gradient-animated { background-size: 200% 200%; animation: gradient-shift 8s ease infinite; }
                .input-field { transition: border-color 0.3s, box-shadow 0.3s, background 0.3s; }
                .input-field:focus { box-shadow: 0 0 0 4px rgba(236, 72, 153, 0.08); }
                .btn-glow:hover { box-shadow: 0 8px 30px rgba(236, 72, 153, 0.5); }
                .btn-glow { transition: all 0.3s ease; }
                .glass-card { backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); }
            `}</style>

            {/* ══ LADO IZQUIERDO: Hero Visual ══ */}
            <div className="hidden lg:flex lg:w-[55%] relative overflow-hidden">
                {/* Fondo dark con gradiente premium */}
                <div className="absolute inset-0 bg-[#0D0D12]" />

                {/* Gradiente principal */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-950/60 via-purple-950/40 to-[#0D0D12]" />

                {/* Imagen hero con overlay */}
                <img
                    src="/images/login-hero.png"
                    alt="GlowBook Studio"
                    className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity scale-110"
                />

                {/* Orbes luminosos */}
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-[120px] float-slow" />
                <div className="absolute bottom-[-10%] right-[5%] w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[100px] float-slower" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[80px]" />

                {/* Líneas decorativas */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,1) 40px, rgba(255,255,255,1) 41px)',
                    }}
                />

                {/* Contenido hero */}
                <div className="relative z-10 flex flex-col justify-between p-16 w-full text-white">
                    {/* Logo top */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-pink-900/50">
                            <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white/90 font-semibold text-lg tracking-tight">GlowBook</span>
                    </div>

                    {/* Main text */}
                    <div className="space-y-8 max-w-lg">
                        {/* Pill badge */}
                        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-white/70 text-xs font-medium tracking-widest uppercase">Sistema Activo</span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="serif text-7xl font-semibold leading-[1.05] italic">
                                Bienvenida<br />
                                a la <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent not-italic font-bold">Belleza</span>
                            </h1>
                            <p className="text-base text-white/50 font-light leading-relaxed max-w-sm">
                                Tu plataforma exclusiva de gestión. Diseñada para la excelencia, creada para ti.
                            </p>
                        </div>

                        {/* Stats row */}
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            {[
                                { value: '500+', label: 'Reservas' },
                                { value: '98%', label: 'Satisfacción' },
                                { value: '24/7', label: 'Disponible' },
                            ].map((stat) => (
                                <div key={stat.label} className="bg-white/5 border border-white/8 rounded-2xl p-4">
                                    <div className="serif text-3xl font-semibold text-white">{stat.value}</div>
                                    <div className="text-white/40 text-xs font-medium mt-1 uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center gap-8 text-white/30 text-xs border-t border-white/5 pt-8">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-green-500/70" />
                            <span>Conexión segura</span>
                        </div>
                        <span>© {new Date().getFullYear()} GlowBook Studio</span>
                    </div>
                </div>
            </div>

            {/* ══ LADO DERECHO: Formulario ══ */}
            <div className="login-root flex-1 flex items-center justify-center relative bg-[#F8F6F3] p-8 lg:p-16">
                {/* Fondo sutil */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-20%] right-[-20%] w-[500px] h-[500px] bg-pink-100/40 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[350px] h-[350px] bg-purple-100/30 rounded-full blur-[80px]" />
                </div>

                <div className="max-w-sm w-full relative z-10 space-y-8">
                    {/* Header del formulario */}
                    <div className="space-y-2">
                        {/* Mobile only: logo */}
                        <div className="flex items-center gap-3 mb-8 lg:hidden">
                            <div className="w-9 h-9 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                                <Sparkles className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-semibold text-slate-800 text-lg">GlowBook</span>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 leading-tight">
                            Inicia sesión
                        </h2>
                        <p className="text-slate-500 text-sm">
                            Accede al panel de administración
                        </p>
                    </div>

                    {/* Error */}
                    {error && (
                        <div className="bg-red-50 border border-red-200/60 rounded-2xl p-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
                                </svg>
                            </div>
                            <p className="text-sm text-red-700 font-medium">{error}</p>
                        </div>
                    )}

                    {/* Formulario */}
                    <form onSubmit={handleLogin} className="space-y-5">
                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider block">
                                Email
                            </label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-pink-500 transition-colors duration-200" />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="admin@glowbook.com"
                                    className="input-field w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-pink-400"
                                />
                            </div>
                        </div>

                        {/* Contraseña */}
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider block">
                                Contraseña
                            </label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-pink-500 transition-colors duration-200" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="input-field w-full pl-11 pr-12 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-pink-400"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-pink-500 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        {/* Botón submit */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="btn-glow w-full bg-gradient-to-r from-pink-600 to-purple-600 gradient-animated text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 mt-2"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    <span>Acceder al Panel</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Divisor */}
                    <div className="flex items-center gap-3">
                        <div className="flex-1 h-px bg-slate-200" />
                        <span className="text-xs text-slate-400 font-medium">o continúa con</span>
                        <div className="flex-1 h-px bg-slate-200" />
                    </div>

                    {/* Demo access */}
                    <button
                        onClick={fillDemo}
                        className="w-full group relative bg-white border border-slate-200 hover:border-pink-300 rounded-2xl p-4 flex items-center gap-4 transition-all duration-300 hover:shadow-md hover:shadow-pink-500/5 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative w-10 h-10 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <Sparkles className="w-4 h-4 text-pink-600" />
                        </div>
                        <div className="relative text-left">
                            <div className="text-sm font-semibold text-slate-800">Acceso Rápido Demo</div>
                            <div className="text-xs text-slate-500 mt-0.5">Rellenar credenciales automáticamente</div>
                        </div>
                        <ArrowRight className="relative ml-auto w-4 h-4 text-slate-300 group-hover:text-pink-500 group-hover:translate-x-0.5 transition-all duration-200" />
                    </button>

                    {/* Footer */}
                    <p className="text-center text-slate-400 text-xs pb-4">
                        © {new Date().getFullYear()} GlowBook. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
