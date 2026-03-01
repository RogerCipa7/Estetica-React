import { Heart, Sparkles } from 'lucide-react'

const AboutStory = () => {
    return (
        <section className="py-20 bg-white" id="historia">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Nuestra historia
                        </h2>
                        <p className="text-lg text-gray-600 mb-4">
                            GlowBook nació en 2020 del sueño de dos amigas apasionadas por el bienestar y la estética. Comenzamos en un pequeño local en el centro de la ciudad, con la visión de ofrecer tratamientos de calidad en un ambiente acogedor.
                        </p>
                        <p className="text-lg text-gray-600 mb-4">
                            Hoy, después de cientos de clientas satisfechas, hemos expandido nuestro equipo y servicios, pero mantenemos la misma esencia: atención personalizada, productos de alta gama y un trato cálido.
                        </p>
                        <div className="flex items-center gap-4 mt-6">
                            <div className="flex items-center gap-2">
                                <Heart className="w-5 h-5 text-pink-500" />
                                <span className="text-gray-700">+500 clientas felices</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-pink-500" />
                                <span className="text-gray-700">6 años de experiencia</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Nuestro equipo"
                            className="rounded-2xl shadow-xl"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                            <p className="text-2xl font-bold text-pink-600">2020</p>
                            <p className="text-sm text-gray-500">Año de fundación</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutStory