import { Sparkles, Heart } from 'lucide-react'

const AboutHero = () => {
    return (
        <>
            <style>{`
                .ah-section {
                    font-family: 'DM Sans', sans-serif;
                    background: linear-gradient(180deg, #0a0614 0%, #0f0a1e 60%, #0a0614 100%);
                    position: relative;
                    overflow: hidden;
                }

                .ah-section::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(236,72,153,0.3), transparent);
                }

                .ah-grid {
                    position: absolute;
                    inset: 0;
                    background-image:
                        linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px);
                    background-size: 80px 80px;
                    pointer-events: none;
                }

                .ah-blob {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(90px);
                    pointer-events: none;
                }
                .ah-blob-1 {
                    width: 600px; height: 600px;
                    background: radial-gradient(circle, rgba(236,72,153,0.13) 0%, transparent 65%);
                    top: -150px; left: 50%;
                    transform: translateX(-50%);
                    animation: ahFloat 9s ease-in-out infinite;
                }
                .ah-blob-2 {
                    width: 360px; height: 360px;
                    background: radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%);
                    top: 80px; left: -80px;
                    animation: ahFloat 7s ease-in-out infinite reverse;
                }
                .ah-blob-3 {
                    width: 300px; height: 300px;
                    background: radial-gradient(circle, rgba(244,114,182,0.09) 0%, transparent 70%);
                    bottom: -40px; right: -60px;
                    animation: ahFloat 8s ease-in-out 2s infinite;
                }

                @keyframes ahFloat {
                    0%, 100% { transform: translate(0, 0); }
                    50%       { transform: translate(0, -20px); }
                }
                .ah-blob-1 { animation: ahFloat1 9s ease-in-out infinite; }
                @keyframes ahFloat1 {
                    0%, 100% { transform: translateX(-50%) translateY(0); }
                    50%       { transform: translateX(-50%) translateY(-20px); }
                }

                /* Rings */
                .ah-ring {
                    position: absolute;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    border-radius: 50%;
                    border: 1px solid rgba(236,72,153,0.06);
                    pointer-events: none;
                }
                .ah-ring-1 { width: 720px; height: 720px; }
                .ah-ring-2 { width: 520px; height: 520px; border-color: rgba(168,85,247,0.05); }
                .ah-ring-3 { width: 320px; height: 320px; border-color: rgba(236,72,153,0.04); }

                /* Label */
                .ah-label {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 7px 18px;
                    border-radius: 999px;
                    background: rgba(236,72,153,0.08);
                    border: 1px solid rgba(236,72,153,0.2);
                    color: #f9a8d4;
                    font-size: 0.72rem;
                    font-weight: 500;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    animation: ahReveal 0.6s ease 0.1s both;
                }

                .ah-sparkle {
                    animation: ahSpin 3s ease-in-out infinite;
                }
                @keyframes ahSpin {
                    0%, 100% { transform: rotate(0deg) scale(1); }
                    50%       { transform: rotate(15deg) scale(1.2); }
                }

                /* Heading */
                .ah-heading {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 300;
                    font-size: clamp(2.8rem, 6vw, 5.2rem);
                    line-height: 1.08;
                    color: #f8fafc;
                    letter-spacing: -0.02em;
                    animation: ahReveal 0.6s ease 0.2s both;
                }
                .ah-heading em {
                    font-style: italic;
                    background: linear-gradient(135deg, #f9a8d4 0%, #ec4899 50%, #c084fc 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                /* Divider */
                .ah-divider {
                    width: 48px; height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(236,72,153,0.5), transparent);
                    margin: 0 auto;
                    animation: ahReveal 0.6s ease 0.35s both;
                }

                /* Body */
                .ah-body {
                    color: #64748b;
                    font-size: 1rem;
                    font-weight: 300;
                    line-height: 1.8;
                    max-width: 520px;
                    margin: 0 auto;
                    animation: ahReveal 0.6s ease 0.45s both;
                }

                /* Stat pills */
                .ah-stats {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    flex-wrap: wrap;
                    animation: ahReveal 0.6s ease 0.55s both;
                }

                .ah-stat {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 11px 20px;
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.07);
                    border-radius: 999px;
                    transition: border-color 0.3s ease, background 0.3s ease;
                }
                .ah-stat:hover {
                    background: rgba(236,72,153,0.06);
                    border-color: rgba(236,72,153,0.18);
                }

                .ah-stat-num {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 1.3rem;
                    font-weight: 600;
                    background: linear-gradient(135deg, #f9a8d4, #ec4899);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    line-height: 1;
                }
                .ah-stat-label {
                    font-size: 0.78rem;
                    color: #475569;
                    font-weight: 400;
                    letter-spacing: 0.03em;
                }
                .ah-stat-divider {
                    width: 1px; height: 28px;
                    background: rgba(255,255,255,0.07);
                }

                /* Heart pulse */
                .ah-heart {
                    animation: ahHeartbeat 2s ease-in-out infinite;
                }
                @keyframes ahHeartbeat {
                    0%, 100% { transform: scale(1); }
                    14%       { transform: scale(1.2); }
                    28%       { transform: scale(1); }
                    42%       { transform: scale(1.15); }
                    56%       { transform: scale(1); }
                }

                /* Bottom edge */
                .ah-section::after {
                    content: '';
                    position: absolute;
                    bottom: 0; left: 0; right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(168,85,247,0.18), transparent);
                }

                @keyframes ahReveal {
                    from { opacity: 0; transform: translateY(22px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            <section className="ah-section py-36">
                <div className="ah-grid" aria-hidden="true" />
                <div className="ah-blob ah-blob-1" aria-hidden="true" />
                <div className="ah-blob ah-blob-2" aria-hidden="true" />
                <div className="ah-blob ah-blob-3" aria-hidden="true" />
                <div className="ah-ring ah-ring-1" aria-hidden="true" />
                <div className="ah-ring ah-ring-2" aria-hidden="true" />
                <div className="ah-ring ah-ring-3" aria-hidden="true" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-9">

                    {/* Label */}
                    <div>
                        <span className="ah-label">
                            <Sparkles className="w-3 h-3 ah-sparkle" />
                            Conócenos
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="ah-heading">
                        Más que un spa,<br />
                        una experiencia <em>transformadora</em>
                    </h1>

                    {/* Divider */}
                    <div className="ah-divider" />

                    {/* Body */}
                    <p className="ah-body">
                        En GlowBook creemos que el bienestar es un viaje personal. Por eso creamos un espacio donde la belleza y la tranquilidad se encuentran — para que cada visita sea un reencuentro contigo misma.
                    </p>

                    {/* Stats */}
                    <div className="ah-stats">
                        <div className="ah-stat">
                            <span className="ah-stat-num">8</span>
                            <span className="ah-stat-label">Años de experiencia</span>
                        </div>
                        <div className="ah-stat-divider" />
                        <div className="ah-stat">
                            <span className="ah-stat-num">500+</span>
                            <span className="ah-stat-label">Clientas felices</span>
                        </div>
                        <div className="ah-stat-divider" />
                        <div className="ah-stat">
                            <Heart className="w-3.5 h-3.5 ah-heart" style={{ color: '#f472b6', flexShrink: 0 }} />
                            <span className="ah-stat-label">Hecho con amor</span>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default AboutHero