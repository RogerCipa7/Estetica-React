import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react'

interface NavLink {
    path: string
    label: string
}

const HEADER_HEIGHT = 80

function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isVisible, setIsVisible] = useState<boolean>(true)
    const [lastScrollY, setLastScrollY] = useState<number>(0)
    const [scrolled, setScrolled] = useState<boolean>(false)
    const location = useLocation()

    const navLinks: NavLink[] = [
        { path: '/', label: 'Inicio' },
        { path: '/nosotros', label: 'Nosotros' },
        { path: '/servicios', label: 'Servicios' },
        { path: '/contacto', label: 'Contacto' },
        { path: '/login', label: 'Acceso' },

    ]

    const isActive = (path: string): boolean => location.pathname === path

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            setScrolled(currentScrollY > 20)
            if (currentScrollY > 100) {
                setIsVisible(currentScrollY < lastScrollY)
            } else {
                setIsVisible(true)
            }
            setLastScrollY(currentScrollY)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    useEffect(() => {
        setIsOpen(false)
    }, [location.pathname])

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset'
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    return (
        <>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=DM+Sans:wght@300;400;500;600&display=swap"
            />

            <style>{`
                /* ─── Base ─── */
                .glowbook-header * { box-sizing: border-box; }
                .glowbook-header {
                    font-family: 'DM Sans', sans-serif;
                }

                /* ─── Glass ─── */
                .header-glass {
                    background: rgba(255, 255, 255, 0.22);
                    backdrop-filter: blur(22px) saturate(180%);
                    -webkit-backdrop-filter: blur(22px) saturate(180%);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.28);
                    transition: background 0.4s ease, box-shadow 0.4s ease;
                }
                .header-glass.scrolled {
                    background: rgba(255, 255, 255, 0.45);
                    box-shadow: 0 4px 32px rgba(236, 72, 153, 0.09),
                                0 1px 0 rgba(255, 255, 255, 0.55) inset;
                }

                /* ─── Logo ─── */
                .logo-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    padding: 8px 18px 8px 8px;
                    border-radius: 999px;
                    border: 1px solid transparent;
                    text-decoration: none;
                    transition: border-color 0.3s ease, background 0.3s ease;
                }
                .logo-pill:hover {
                    border-color: rgba(249, 168, 212, 0.35);
                    background: rgba(249, 168, 212, 0.08);
                }

                .sparkle-bg {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 42px;
                    height: 42px;
                    border-radius: 50%;
                    background: linear-gradient(135deg,
                        rgba(249, 168, 212, 0.3),
                        rgba(236, 72, 153, 0.2));
                    border: 1px solid rgba(236, 72, 153, 0.2);
                    flex-shrink: 0;
                    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
                .logo-pill:hover .sparkle-bg {
                    transform: rotate(15deg) scale(1.1);
                }

                .logo-sparkle {
                    color: #ec4899;
                    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
                .logo-pill:hover .logo-sparkle {
                    transform: rotate(20deg) scale(1.15);
                }

                .logo-text {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 600;
                    font-size: 1.75rem;
                    letter-spacing: -0.02em;
                    background: linear-gradient(135deg, #374151, #1f2937);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .logo-pill:hover .logo-text {
                    background: linear-gradient(135deg, #ec4899, #db2777);
                    -webkit-background-clip: text;
                    background-clip: text;
                }

                /* ─── Nav Links (desktop) ─── */
                .nav-link {
                    position: relative;
                    display: inline-block;
                    padding: 10px 20px;
                    font-size: 0.925rem;
                    font-weight: 500;
                    color: #6b7280;
                    border-radius: 999px;
                    letter-spacing: 0.01em;
                    text-decoration: none;
                    transition: color 0.25s ease, background 0.25s ease;
                }
                .nav-link:hover {
                    color: #1f2937;
                    background: rgba(249, 168, 212, 0.15);
                }
                .nav-link.active {
                    color: #db2777;
                    background: rgba(249, 168, 212, 0.2);
                    font-weight: 600;
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: 5px;
                    left: 50%;
                    transform: translateX(-50%) scaleX(0);
                    width: 18px;
                    height: 2px;
                    background: linear-gradient(90deg, #f9a8d4, #ec4899);
                    border-radius: 99px;
                    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
                .nav-link:hover::after,
                .nav-link.active::after {
                    transform: translateX(-50%) scaleX(1);
                }

                /* ─── CTA Button (desktop) ─── */
                .cta-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 13px 26px;
                    background: linear-gradient(135deg, #f472b6 0%, #ec4899 50%, #db2777 100%);
                    color: white;
                    font-size: 0.925rem;
                    font-weight: 600;
                    border-radius: 999px;
                    letter-spacing: 0.015em;
                    text-decoration: none;
                    position: relative;
                    overflow: hidden;
                    transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
                                box-shadow 0.25s ease;
                    box-shadow: 0 4px 20px rgba(236, 72, 153, 0.38),
                                0 1px 0 rgba(255, 255, 255, 0.25) inset;
                }
                .cta-btn::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, #fb7baa 0%, #f472b6 100%);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .cta-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 32px rgba(236, 72, 153, 0.48),
                                0 1px 0 rgba(255, 255, 255, 0.25) inset;
                }
                .cta-btn:hover::before { opacity: 1; }
                .cta-btn:active { transform: translateY(0); }
                .cta-btn > * { position: relative; z-index: 1; }
                .cta-icon {
                    transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
                .cta-btn:hover .cta-icon { transform: translateX(4px); }

                /* ─── Burger (solo móvil) ─── */
                .burger-btn {
                    /* Eliminamos display: flex para no interferir con Tailwind */
                    width: 48px;
                    height: 48px;
                    border-radius: 14px;
                    background: rgba(249, 168, 212, 0.12);
                    border: 1px solid rgba(249, 168, 212, 0.25);
                    color: #9d174d;
                    cursor: pointer;
                    transition: background 0.25s ease, transform 0.25s ease;
                }
                .burger-btn:hover {
                    background: rgba(249, 168, 212, 0.25);
                    transform: scale(1.05);
                }
                .burger-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.3s ease;
                }
                .burger-icon.is-open {
                    transform: rotate(90deg) scale(0.85);
                }

                /* ─── Mobile Overlay ─── */
                .mobile-overlay {
                    position: fixed;
                    inset: 0;
                    z-index: 40;
                    background: rgba(10, 5, 18, 0.28);
                    backdrop-filter: blur(3px);
                    -webkit-backdrop-filter: blur(3px);
                    transition: opacity 0.35s ease, visibility 0.35s ease;
                    opacity: 1;
                    visibility: visible;
                }
                .mobile-overlay.hidden-overlay {
                    opacity: 0;
                    visibility: hidden;
                    pointer-events: none;
                }

                /* ─── Mobile Panel ─── */
                .mobile-panel {
                    position: fixed;
                    top: ${HEADER_HEIGHT + 8}px;
                    left: 12px;
                    right: 12px;
                    z-index: 50;
                    background: rgba(255, 255, 255, 0.92);
                    backdrop-filter: blur(24px) saturate(200%);
                    -webkit-backdrop-filter: blur(24px) saturate(200%);
                    border: 1px solid rgba(249, 168, 212, 0.3);
                    border-radius: 24px;
                    box-shadow: 0 20px 60px rgba(236, 72, 153, 0.15),
                                0 4px 16px rgba(0, 0, 0, 0.08);
                    transform-origin: top center;
                    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                                opacity 0.3s ease;
                    max-height: 80vh;
                    overflow-y: auto;
                }
                .mobile-panel.is-closed {
                    transform: scaleY(0.88) translateY(-12px);
                    opacity: 0;
                    pointer-events: none;
                }

                /* ─── Mobile Nav Links ─── */
                .mobile-nav-link {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 15px 20px;
                    border-radius: 14px;
                    font-size: 0.975rem;
                    font-weight: 500;
                    color: #4b5563;
                    text-decoration: none;
                    opacity: 0;
                    transform: translateX(-10px);
                    transition: background 0.2s ease, color 0.2s ease,
                                opacity 0.3s ease, transform 0.3s ease;
                }
                .mobile-panel.is-open .mobile-nav-link {
                    opacity: 1;
                    transform: translateX(0);
                }
                .mobile-nav-link:hover {
                    background: rgba(249, 168, 212, 0.15);
                    color: #1f2937;
                }
                .mobile-nav-link.active {
                    background: linear-gradient(135deg,
                        rgba(249, 168, 212, 0.25),
                        rgba(236, 72, 153, 0.12));
                    color: #db2777;
                    font-weight: 600;
                }
                .active-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #f472b6, #ec4899);
                    box-shadow: 0 0 8px rgba(236, 72, 153, 0.55);
                    flex-shrink: 0;
                }

                /* ─── Mobile CTA ─── */
                .mobile-cta {
                    display: block;
                    width: 100%;
                    text-align: center;
                    padding: 17px;
                    background: linear-gradient(135deg, #f472b6, #ec4899, #db2777);
                    color: white;
                    font-weight: 600;
                    font-size: 0.975rem;
                    border-radius: 14px;
                    text-decoration: none;
                    letter-spacing: 0.01em;
                    box-shadow: 0 4px 20px rgba(236, 72, 153, 0.38);
                    transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
                                box-shadow 0.25s ease;
                }
                .mobile-cta:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 28px rgba(236, 72, 153, 0.48);
                }
                .mobile-cta:active { transform: translateY(0); }
            `}</style>

            <header
                className={`glowbook-header fixed top-0 left-0 right-0 z-50 w-full header-glass${scrolled ? ' scrolled' : ''}`}
                style={{
                    transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
                    transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
            >
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className="flex justify-between items-center"
                        style={{ height: `${HEADER_HEIGHT}px` }}
                    >
                        {/* Logo */}
                        <Link to="/" className="logo-pill" aria-label="Ir al inicio">
                            <div className="sparkle-bg">
                                <Sparkles className="w-6 h-6 logo-sparkle" />
                            </div>
                            <span className="logo-text">GlowBook</span>
                        </Link>

                        {/* Desktop navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`nav-link${isActive(link.path) ? ' active' : ''}`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden md:flex">
                            <Link to="/contacto" className="cta-btn">
                                <span>Reservar Cita</span>
                                <ArrowRight className="w-4 h-4 cta-icon" />
                            </Link>
                        </div>

                        {/* Botón hamburguesa (solo móvil) - ahora con clases de diseño Tailwind */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="burger-btn md:hidden flex items-center justify-center"
                            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                            aria-expanded={isOpen}
                        >
                            <div className={`burger-icon ${isOpen ? 'is-open' : ''}`}>
                                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </div>
                        </button>
                    </div>
                </nav>
            </header>

            {/* Overlay y panel móvil (solo visibles cuando isOpen es true) */}
            <div
                className={`mobile-overlay ${!isOpen ? 'hidden-overlay' : ''}`}
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
            />

            <div className={`mobile-panel ${isOpen ? 'is-open' : 'is-closed'}`}>
                <div className="p-4 space-y-1">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                            style={{
                                transitionDelay: isOpen ? `${index * 45}ms` : '0ms',
                            }}
                        >
                            <span>{link.label}</span>
                            {isActive(link.path) && <div className="active-dot" />}
                        </Link>
                    ))}

                    <div className="pt-3 mt-2 border-t border-pink-100">
                        <Link
                            to="/contacto"
                            className="mobile-cta"
                            style={{
                                transitionDelay: isOpen ? navLinks.length * 45 + 'ms' : '0ms',
                                opacity: isOpen ? 1 : 0,
                                transform: isOpen ? 'translateY(0)' : 'translateY(8px)',
                                transition: 'opacity 0.3s ease, transform 0.3s ease, box-shadow 0.25s ease',
                            }}
                        >
                            Reservar Cita Ahora
                        </Link>
                    </div>
                </div>
            </div>

            {/* Spacer */}
            <div style={{ height: `${HEADER_HEIGHT}px` }} aria-hidden="true" />
        </>
    )
}

export default Header