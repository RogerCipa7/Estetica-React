import { Instagram, Star, Award } from 'lucide-react'

const team = [
    {
        name: 'Laura García',
        role: 'Fundadora & Esteticista Senior',
        bio: 'Especialista en tratamientos faciales avanzados con más de 10 años de trayectoria.',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400',
    },
    {
        name: 'Ana Martínez',
        role: 'Especialista en Color & Estilismo',
        bio: 'Experta en colorometría y diseño de imagen personalizada para cada tipo de rostro.',
        image: 'https://images.unsplash.com/photo-1590642916589-592bca10dfbf?auto=format&fit=crop&q=80&w=400',
    },
    {
        name: 'Sofía Rodríguez',
        role: 'Terapeuta Spa & Masajista',
        bio: 'Dedicada a proporcionar relajación profunda y bienestar muscular a través de técnicas orientales.',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    }
]

const AboutTeam = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="text-pink-500 font-semibold tracking-widest uppercase text-xs">Nuestro Equipo</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        Manos expertas al cuidado de tu belleza
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Contamos con profesionales altamente capacitados y apasionados por ofrecer resultados excepcionales en cada visita.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {team.map((member, index) => (
                        <div key={index} className="group">
                            <div className="relative mb-6 overflow-hidden rounded-3xl aspect-[4/5]">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                    <div className="flex gap-4">
                                        <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-pink-500 transition-colors">
                                            <Instagram size={20} />
                                        </a>
                                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                                            <Award size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                                <p className="text-pink-600 font-medium text-sm">{member.role}</p>
                                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                                <div className="flex text-amber-400 gap-1 pt-2">
                                    <Star size={14} fill="currentColor" />
                                    <Star size={14} fill="currentColor" />
                                    <Star size={14} fill="currentColor" />
                                    <Star size={14} fill="currentColor" />
                                    <Star size={14} fill="currentColor" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutTeam
