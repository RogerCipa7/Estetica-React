import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Calendar } from 'lucide-react';

const CTA = () => {
    return (
        <>
            <style>{`
                .cta-section {
                    font-family: 'DM Sans', sans-serif;
                    background: linear-gradient(135deg, #fff5f8 0%, #ffeaf2 100%);
                    position: relative;
                    overflow: hidden;
                }

                .cta-section::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(236,72,153,0.3), transparent);
                }

                /* Blobs - más sutiles en rosa claro */
                .cta-blob {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                    pointer-events: none;
                }
                .cta-blob-1 {
                    width: 600px; height: 600px;
                    background: radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 65%);
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                }
                .cta-blob-2 {
                    width: 320px; height: 320px;
                    background: radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%);
                    top: -60px; left: -40px;
                }
                .cta-blob-3 {
                    width: 280px; height: 280px;
                    background: radial-gradient(circle, rgba(251,207,232,0.2) 0%, transparent 70%);
                    bottom: -40px; right: -40px;
                }

                /* Grid - apenas visible */
                .cta-grid {
                    position: absolute;
                    inset: 0;
                    background-image:
                        linear-gradient(rgba(0,0,0,0.01) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,0.01) 1px, transparent 1px);
                    background-size: 80px 80px;
                    pointer-events: none;
                }

                /* Decorative ring */
                .cta-ring {
                    position: absolute;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    width: 600px; height: 600px;
                    border-radius: 50%;
                    border: 1px solid rgba(236,72,153,0.1);
                    pointer-events: none;
                }
                .cta-ring-2 {
                    width: 420px; height: 420px;
                    border-color: rgba(236,72,153,0.08);
                }

                /* Label */
                .cta-label {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 7px 18px;
                    border-radius: 999px;
                    background: rgba(236,72,153,0.1);
                    border: 1px solid rgba(236,72,153,0.25);
                    color: #be185d;
                    font-size: 0.72rem;
                    font-weight: 600;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    animation: ctaReveal 0.6s ease 0.1s both;
                }

                /* Heading */
                .cta-heading {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 300;
                    font-size: clamp(2.8rem, 6vw, 5rem);
                    line-height: 1.08;
                    color: #1e293b;
                    letter-spacing: -0.02em;
                    animation: ctaReveal 0.6s ease 0.2s both;
                }
                .cta-heading em {
                    font-style: italic;
                    background: linear-gradient(135deg, #f472b6 0%, #ec4899 50%, #c084fc 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .cta-body {
                    color: #4b5563;
                    font-size: 1rem;
                    font-weight: 400;
                    line-height: 1.75;
                    max-width: 420px;
                    margin: 0 auto;
                    animation: ctaReveal 0.6s ease 0.3s both;
                }

                /* Primary button */
                .cta-btn-primary {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 17px 36px;
                    background: linear-gradient(135deg, #f472b6, #ec4899 55%, #db2777);
                    color: white;
                    font-size: 0.95rem;
                    font-weight: 600;
                    letter-spacing: 0.02em;
                    border-radius: 999px;
                    text-decoration: none;
                    position: relative;
                    overflow: hidden;
                    transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1),
                                box-shadow 0.3s ease;
                    box-shadow: 0 8px 32px rgba(236,72,153,0.25),
                                0 1px 0 rgba(255,255,255,0.2) inset;
                    animation: ctaReveal 0.6s ease 0.4s both;
                }
                .cta-btn-primary::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .cta-btn-primary:hover {
                    transform: translateY(-3px) scale(1.02);
                    box-shadow: 0 16px 48px rgba(236,72,153,0.35);
                }
                .cta-btn-primary:hover::before { opacity: 1; }
                .cta-btn-primary:active { transform: translateY(0) scale(1); }
                .cta-btn-primary > * { position: relative; z-index: 1; }

                .cta-arrow {
                    transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
                }
                .cta-btn-primary:hover .cta-arrow { transform: translateX(5px); }

                /* Secondary link */
                .cta-btn-secondary {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 16px 28px;
                    background: rgba(255,255,255,0.7);
                    border: 1px solid rgba(236,72,153,0.3);
                    color: #be185d;
                    font-size: 0.875rem;
                    font-weight: 500;
                    border-radius: 999px;
                    text-decoration: none;
                    backdrop-filter: blur(8px);
                    transition: all 0.25s ease;
                    animation: ctaReveal 0.6s ease 0.5s both;
                }
                .cta-btn-secondary:hover {
                    background: rgba(255,255,255,0.9);
                    border-color: rgba(236,72,153,0.5);
                    color: #9d174d;
                }

                /* Trust row */
                .cta-trust {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 28px;
                    flex-wrap: wrap;
                    animation: ctaReveal 0.6s ease 0.6s both;
                }
                .cta-trust-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: #6b7280;
                    font-size: 0.8rem;
                    font-weight: 400;
                    letter-spacing: 0.02em;
                }
                .cta-trust-dot {
                    width: 5px; height: 5px;
                    border-radius: 50%;
                    background: rgba(236,72,153,0.5);
                }

                /* Bottom border glow */
                .cta-section::after {
                    content: '';
                    position: absolute;
                    bottom: 0; left: 0; right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(236,72,153,0.3), transparent);
                }

                @keyframes ctaReveal {
                    from { opacity: 0; transform: translateY(24px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                /* Sparkle pulse */
                .cta-sparkle {
                    animation: sparklePulse 2.5s ease-in-out infinite;
                }
                @keyframes sparklePulse {
                    0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
                    50%       { transform: scale(1.2) rotate(15deg); opacity: 0.8; }
                }
            `}</style>

            <section className="cta-section py-32">
                <div className="cta-grid" aria-hidden="true" />
                <div className="cta-blob cta-blob-1" aria-hidden="true" />
                <div className="cta-blob cta-blob-2" aria-hidden="true" />
                <div className="cta-blob cta-blob-3" aria-hidden="true" />
                <div className="cta-ring" aria-hidden="true" />
                <div className="cta-ring cta-ring-2" aria-hidden="true" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-10">

                    {/* Label */}
                    <div>
                        <span className="cta-label">
                            <Sparkles className="w-3 h-3 cta-sparkle" />
                            Tu momento es ahora
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="cta-heading">
                        ¿Lista para tu<br />
                        momento <em>Glow</em>?
                    </h2>

                    {/* Body */}
                    <p className="cta-body">
                        Agenda tu cita hoy y descubre una nueva versión de ti. Tu bienestar merece el mejor cuidado.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                        <Link to="/contacto" className="cta-btn-primary">
                            <Calendar className="w-4 h-4" />
                            <span>Reservar Ahora</span>
                            <ArrowRight className="w-4 h-4 cta-arrow" />
                        </Link>
                        <Link to="/servicios" className="cta-btn-secondary">
                            Explorar servicios
                        </Link>
                    </div>

                    {/* Trust signals */}
                    <div className="cta-trust pt-4">
                        <span className="cta-trust-item">
                            <span style={{ color: '#fbbf24' }}>★★★★★</span>
                            5.0 en reseñas
                        </span>
                        <div className="cta-trust-dot" />
                        <span className="cta-trust-item">Sin costo de reserva</span>
                        <div className="cta-trust-dot" />
                        <span className="cta-trust-item">Cancelación flexible</span>
                        <div className="cta-trust-dot" />
                        <span className="cta-trust-item">+500 clientas felices</span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CTA;