import { Target, Eye, Shield, Sparkles } from 'lucide-react'

const AboutMission = () => {
    const items = [
        {
            icon: Target,
            title: 'Misión',
            description: 'Brindar experiencias de bienestar integrales que realcen la belleza natural de cada persona a través de tratamientos innovadores y un servicio excepcional.'
        },
        {
            icon: Eye,
            title: 'Visión',
            description: 'Ser el centro de estética referente en la región, reconocido por nuestra excelencia, ética profesional y por transformar la vida de nuestras clientas.'
        },
        {
            icon: Shield,
            title: 'Valores',
            description: 'Compromiso, honestidad, innovación constante y una pasión inquebrantable por el cuidado de los detalles en cada uno de nuestros tratamientos.'
        }
    ]

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Soft decorative glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-xs font-bold tracking-widest uppercase mb-4">
                        <Sparkles size={14} />
                        Nuestro Propósito
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        Comprometidos con tu bienestar
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center mb-6 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                                <item.icon className="w-7 h-7 text-pink-500 group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutMission
