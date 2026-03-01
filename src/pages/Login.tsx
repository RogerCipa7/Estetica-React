import { useState } from 'react';
import { Mail, Lock, Sparkles, Info, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simular delay para mejor UX
        setTimeout(() => {
            if (email === 'admin@glowbook.com' && password === 'admin123') {
                localStorage.setItem('glowbook_session', 'true');
                navigate('/admin');
            } else {
                alert('Credenciales incorrectas');
                setIsLoading(false);
            }
        }, 800);
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#FAF9F6]">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-200/30 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-200/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-md w-full px-6 relative z-10">
                <div className="bg-white/70 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/50 space-y-8">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl shadow-lg shadow-pink-200 mb-6 rotate-3">
                            <Sparkles className="h-8 w-8 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-2 font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                            Panel <em>Glow</em>
                        </h2>
                        <p className="text-slate-500 text-sm font-medium tracking-tight">Gestiona la belleza de tus clientes</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div className="space-y-5">
                            <div className="group">
                                <label className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400 block mb-2 ml-1">Email Corporativo</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-slate-300 group-focus-within:text-pink-500 transition-colors" />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="block w-full pl-12 pr-4 py-4 bg-slate-50/50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-pink-200 focus:bg-white transition-all text-sm font-medium"
                                        placeholder="admin@glowbook.com"
                                    />
                                </div>
                            </div>
                            <div className="group">
                                <label className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400 block mb-2 ml-1">Contraseña</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-slate-300 group-focus-within:text-pink-500 transition-colors" />
                                    </div>
                                    <input
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="block w-full pl-12 pr-4 py-4 bg-slate-50/50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-pink-200 focus:bg-white transition-all text-sm font-medium"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-slate-900 text-white font-bold py-5 rounded-2xl hover:bg-pink-600 transition-all duration-500 shadow-xl flex items-center justify-center gap-3 disabled:opacity-70 group"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    <span>Acceder al Panel</span>
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Acceso Demo */}
                    <div className="pt-8 mt-2 border-t border-slate-100">
                        <div className="bg-pink-50/50 p-6 rounded-3xl border border-pink-100/50 relative overflow-hidden group hover:bg-pink-50 transition-colors">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-500">
                                <Info className="w-12 h-12 text-pink-500" />
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <Info className="w-4 h-4 text-pink-500" />
                                <span className="text-[10px] uppercase font-black tracking-widest text-pink-600">Acceso de Demostración</span>
                            </div>
                            <div className="space-y-2">
                                <p className="text-xs text-slate-600">
                                    <span className="font-bold">Email:</span> <button onClick={() => setEmail('admin@glowbook.com')} className="hover:text-pink-600 transition-colors">admin@glowbook.com</button>
                                </p>
                                <p className="text-xs text-slate-600">
                                    <span className="font-bold">Pass:</span> <button onClick={() => setPassword('admin123')} className="hover:text-pink-600 transition-colors">admin123</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="mt-8 text-center text-slate-400 text-xs font-medium">
                    &copy; {new Date().getFullYear()} GlowBook Management System
                </p>
            </div>
        </div>
    );
};

export default Login;
