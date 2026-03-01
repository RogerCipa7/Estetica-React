import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, MapPin } from 'lucide-react'

const AboutCTA = () => {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-pink-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="text-white space-y-8">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase">
                                <Sparkles size={14} />
                                Únete a la comunidad Glow
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight">
                                ¿Lista para brillar con luz propia?
                            </h2>
                            <p className="text-pink-100 text-lg opacity-90 max-w-md">
                                Estamos aquí para asesorarte y crear el plan de belleza perfecto para ti. Tu primera consulta es personalizada.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Link to="/contacto" className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2 group">
                                    Agendar Cita
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <div className="flex items-center gap-3 text-white/80 px-4">
                                    <MapPin size={20} className="text-pink-200" />
                                    <span className="text-sm">Bogotá, Sector Salud</span>
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:block relative">
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-3xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=800"
                                    alt="Spa GlowBook"
                                    className="w-full h-auto"
                                />
                            </div>
                            {/* Decorative frame */}
                            <div className="absolute -inset-4 border-2 border-white/30 rounded-[2rem] transform -rotate-3" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutCTA
