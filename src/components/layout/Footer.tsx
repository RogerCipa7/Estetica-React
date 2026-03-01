import { Link } from 'react-router-dom'
import {
    Sparkles,
    Facebook,
    Instagram,
    Twitter,
    Phone,
    Mail,
    Clock
} from 'lucide-react'

function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center space-x-2 mb-4 group">
                            <Sparkles className="w-7 h-7 text-pink-400 group-hover:text-pink-300 transition-colors" />
                            <span className="text-xl font-bold tracking-tight">GlowBook</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Tu centro de estética profesional. Resalta tu belleza natural con
                            tratamientos personalizados y tecnología de vanguardia.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold mb-4 text-white relative inline-block">
                            Enlaces
                            <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-pink-400 rounded-full"></span>
                        </h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            {[
                                { path: '/servicios', label: 'Servicios' },
                                { path: '/nosotros', label: 'Nosotros' },
                                { path: '/contacto', label: 'Contacto' },

                            ].map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="hover:text-pink-400 transition-colors flex items-center space-x-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-pink-400 transition-colors"></span>
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info - Icons instead of emojis */}
                    <div>
                        <h3 className="font-semibold mb-4 text-white relative inline-block">
                            Contacto
                            <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-pink-400 rounded-full"></span>
                        </h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start space-x-3">
                                <span>Calle 123 #45-67, Envigado</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-pink-400 flex-shrink-0" />
                                <a
                                    href="https://wa.me/573001234567"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-pink-400 transition-colors"
                                >
                                    +57 300 123 4567
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-pink-400 flex-shrink-0" />
                                <a
                                    href="mailto:info@glowbook.com"
                                    className="hover:text-pink-400 transition-colors"
                                >
                                    info@glowbook.com
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Clock className="w-5 h-5 text-pink-400 flex-shrink-0" />
                                <span>Lun - Sáb: 9:00 - 20:00</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social & Newsletter */}
                    <div>
                        <h3 className="font-semibold mb-4 text-white relative inline-block">
                            Síguenos
                            <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-pink-400 rounded-full"></span>
                        </h3>

                        {/* Social Icons */}
                        <div className="flex space-x-4 mb-6">
                            {[
                                { Icon: Facebook, href: '#', label: 'Facebook' },
                                { Icon: Instagram, href: '#', label: 'Instagram' },
                                { Icon: Twitter, href: '#', label: 'Twitter' },
                            ].map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center 
                           text-gray-400 hover:bg-pink-500 hover:text-white transition-all duration-300 
                           hover:scale-110"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>

                        {/* Mini Newsletter */}
                        <div className="space-y-3">
                            <p className="text-gray-400 text-xs">
                                Recibe ofertas exclusivas y consejos de belleza.
                            </p>
                            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Tu email"
                                    className="flex-1 px-3 py-2 text-sm bg-gray-800 border border-gray-700 
                           rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 
                           focus:border-transparent text-white placeholder-gray-500"
                                />
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white text-sm 
                           font-medium rounded-lg transition-colors"
                                >
                                    OK
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} GlowBook. Todos los derechos reservados.
                        </p>
                        <div className="flex space-x-6 text-sm text-gray-400">
                            <span className="hover:text-pink-400 transition-colors cursor-default">
                                Privacidad
                            </span>
                            <span className="hover:text-pink-400 transition-colors cursor-default">
                                Términos
                            </span>
                            <span className="hover:text-pink-400 transition-colors cursor-default">
                                Cookies
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer