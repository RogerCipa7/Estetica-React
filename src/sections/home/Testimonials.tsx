import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        quote: 'La mejor experiencia que he tenido. GlowBook realmente entiende lo que necesito y siempre supera mis expectativas.',
        name: 'María Clara',
        role: 'Limpieza Profunda',
        avatar: 'MC',
        rating: 5,
    },
    {
        quote: 'Mi piel nunca lució tan bien. El personal es increíblemente profesional y el ambiente es simplemente mágico.',
        name: 'Isabella R.',
        role: 'Masaje Zen',
        avatar: 'IR',
        rating: 5,
    },
    {
        quote: 'Llevo 2 años viniendo cada mes y nunca me ha decepcionado. Es mi lugar de paz y bienestar.',
        name: 'Valentina M.',
        role: 'Manicura Pro',
        avatar: 'VM',
        rating: 5,
    },
    {
        quote: 'El tratamiento facial fue transformador. Me fui sintiéndome completamente renovada y luminosa.',
        name: 'Sofía D.',
        role: 'Limpieza Profunda',
        avatar: 'SD',
        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <>
            <style>{`
                .ts-section {
                    font-family: 'DM Sans', sans-serif;
                    background: #ffffff;
                    position: relative;
                    overflow: hidden;
                }

                .ts-section::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(168,85,247,0.2), transparent);
                }

                /* Patrón de fondo muy sutil (opcional, se puede eliminar) */
                .ts-grid-bg {
                    position: absolute;
                    inset: 0;
                    background-image:
                        linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px);
                    background-size: 80px 80px;
                    pointer-events: none;
                }

                /* Blobs decorativos muy claros (se pueden omitir si se prefiere minimalismo) */
                .ts-blob {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(110px);
                    pointer-events: none;
                }
                .ts-blob-1 {
                    width: 500px; height: 500px;
                    background: radial-gradient(circle, rgba(168,85,247,0.03) 0%, transparent 70%);
                    top: -80px; left: -80px;
                }
                .ts-blob-2 {
                    width: 400px; height: 400px;
                    background: radial-gradient(circle, rgba(236,72,153,0.03) 0%, transparent 70%);
                    bottom: -60px; right: -60px;
                }

                /* Label "Testimonios" */
                .ts-label {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 7px 16px;
                    border-radius: 999px;
                    background: rgba(168,85,247,0.06);
                    border: 1px solid rgba(168,85,247,0.15);
                    color: #a855f7;
                    font-size: 0.72rem;
                    font-weight: 600;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                }

                /* Heading */
                .ts-heading {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 300;
                    font-size: clamp(2.4rem, 5vw, 3.8rem);
                    line-height: 1.1;
                    color: #1e293b;
                    letter-spacing: -0.02em;
                }
                .ts-heading em {
                    font-style: italic;
                    background: linear-gradient(135deg, #a855f7, #ec4899);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                /* Stars */
                .ts-stars {
                    display: flex;
                    gap: 3px;
                }

                /* Card */
                .ts-card {
                    background: #ffffff;
                    border: 1px solid rgba(0,0,0,0.05);
                    border-radius: 24px;
                    padding: 32px;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.02);
                    transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1),
                                border-color 0.3s ease,
                                box-shadow 0.3s ease;
                }

                .ts-card::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, rgba(168,85,247,0.02), transparent 60%);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .ts-card:hover {
                    transform: translateY(-6px);
                    border-color: rgba(168,85,247,0.25);
                    box-shadow: 0 20px 40px rgba(168,85,247,0.08);
                }
                .ts-card:hover::before { opacity: 1; }

                /* Quote icon */
                .ts-quote-icon {
                    position: absolute;
                    top: 24px;
                    right: 28px;
                    color: rgba(168,85,247,0.1);
                }

                /* Quote text */
                .ts-quote {
                    font-family: 'Cormorant Garamond', serif;
                    font-style: italic;
                    font-size: 1.2rem;
                    font-weight: 400;
                    color: #334155;
                    line-height: 1.65;
                    flex: 1;
                    position: relative;
                    z-index: 1;
                }

                /* Author row */
                .ts-author {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    padding-top: 16px;
                    border-top: 1px solid rgba(0,0,0,0.05);
                    position: relative;
                    z-index: 1;
                }

                .ts-avatar {
                    width: 44px; height: 44px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, rgba(168,85,247,0.1), rgba(236,72,153,0.05));
                    border: 1px solid rgba(168,85,247,0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: #a855f7;
                    letter-spacing: 0.04em;
                    flex-shrink: 0;
                    font-family: 'DM Sans', sans-serif;
                }

                .ts-name {
                    font-weight: 600;
                    font-size: 0.9rem;
                    color: #1e293b;
                    line-height: 1.2;
                }

                .ts-role {
                    font-size: 0.75rem;
                    color: #64748b;
                    font-weight: 400;
                    letter-spacing: 0.03em;
                }

                /* Summary bar */
                .ts-summary {
                    display: flex;
                    align-items: center;
                    gap: 32px;
                    padding: 28px 36px;
                    background: #fafafa;
                    border: 1px solid rgba(0,0,0,0.04);
                    border-radius: 20px;
                    flex-wrap: wrap;
                }

                .ts-summary-stat {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }

                .ts-summary-num {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 2rem;
                    font-weight: 600;
                    background: linear-gradient(135deg, #a855f7, #ec4899);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    line-height: 1;
                }

                .ts-summary-label {
                    font-size: 0.75rem;
                    color: #475569;
                    font-weight: 400;
                    letter-spacing: 0.04em;
                }

                .ts-summary-divider {
                    width: 1px;
                    height: 40px;
                    background: rgba(0,0,0,0.07);
                    flex-shrink: 0;
                }

                .ts-summary-text {
                    flex: 1;
                    font-size: 0.875rem;
                    color: #475569;
                    font-weight: 400;
                    line-height: 1.6;
                    min-width: 200px;
                }

                /* Animations */
                @keyframes tsReveal {
                    from { opacity: 0; transform: translateY(28px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .ts-reveal { animation: tsReveal 0.7s ease both; }
                .ts-d1 { animation-delay: 0.1s; }
                .ts-d2 { animation-delay: 0.2s; }
                .ts-d3 { animation-delay: 0.3s; }
                .ts-d4 { animation-delay: 0.4s; }
                .ts-d5 { animation-delay: 0.5s; }
            `}</style>

            <section className="ts-section py-28">
                <div className="ts-grid-bg" aria-hidden="true" />
                <div className="ts-blob ts-blob-1" aria-hidden="true" />
                <div className="ts-blob ts-blob-2" aria-hidden="true" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    {/* Header */}
                    <div className="text-center space-y-5 mb-16 ts-reveal ts-d1">
                        <span className="ts-label">
                            <Star className="w-3 h-3" />
                            Testimonios
                        </span>
                        <h2 className="ts-heading">
                            Lo que dicen<br />
                            <em>nuestras clientas</em>
                        </h2>
                        <p style={{ color: '#475569', fontSize: '1rem', fontWeight: 400, maxWidth: '440px', margin: '0 auto', lineHeight: 1.7 }}>
                            Cada visita deja una historia. Estas son algunas de las que más nos llenan el corazón.
                        </p>
                    </div>

                    {/* Cards grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                        {testimonials.map((t, i) => (
                            <div key={i} className={`ts-card ts-reveal ts-d${i + 2}`}>
                                {/* Big quote mark */}
                                <Quote className="ts-quote-icon" size={48} />

                                {/* Stars */}
                                <div className="ts-stars">
                                    {Array.from({ length: t.rating }).map((_, j) => (
                                        <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="ts-quote">"{t.quote}"</p>

                                {/* Author */}
                                <div className="ts-author">
                                    <div className="ts-avatar">{t.avatar}</div>
                                    <div>
                                        <div className="ts-name">{t.name}</div>
                                        <div className="ts-role">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary bar */}
                    <div className="ts-summary ts-reveal ts-d5">
                        <div className="ts-summary-stat">
                            <span className="ts-summary-num">5.0</span>
                            <span className="ts-summary-label">Calificación promedio</span>
                        </div>
                        <div className="ts-summary-divider" />
                        <div className="ts-summary-stat">
                            <span className="ts-summary-num">300+</span>
                            <span className="ts-summary-label">Reseñas verificadas</span>
                        </div>
                        <div className="ts-summary-divider" />
                        <div className="ts-summary-stat">
                            <span className="ts-summary-num">98%</span>
                            <span className="ts-summary-label">Recomendarían GlowBook</span>
                        </div>
                        <p className="ts-summary-text">
                            Nos enorgullece mantener un estándar de excelencia que nuestras clientas perciben en cada visita, desde la primera cita hasta la centésima.
                        </p>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Testimonials;