import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { serviceCategories } from '../../data/servicesData';


const ServicesList = () => {
    return (
        <>
            <style>{`
                .sl-section {
                    font-family: 'DM Sans', sans-serif;
                    background: #ffffff;
                    position: relative;
                    overflow: hidden;
                }

                /* Grid de fondo muy sutil */
                .sl-grid-bg {
                    position: absolute;
                    inset: 0;
                    background-image:
                        linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px);
                    background-size: 80px 80px;
                    pointer-events: none;
                }

                /* Category block */
                .sl-category {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                /* Category header */
                .sl-cat-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding-bottom: 16px;
                    border-bottom: 1px solid rgba(0,0,0,0.06);
                    margin-bottom: 4px;
                }

                .sl-cat-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px; height: 40px;
                    border-radius: 12px;
                    background: rgba(236,72,153,0.05);
                    border: 1px solid rgba(236,72,153,0.1);
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }

                .sl-category:hover .sl-cat-icon {
                    transform: rotate(8deg) scale(1.08);
                }

                .sl-cat-title {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 1.7rem;
                    font-weight: 600;
                    color: #1e293b;
                    letter-spacing: -0.01em;
                    line-height: 1;
                }

                /* Service card */
                .sl-card {
                    background: #ffffff;
                    border: 1px solid rgba(0,0,0,0.05);
                    border-radius: 18px;
                    padding: 22px 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.02);
                    transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1),
                                border-color 0.3s ease,
                                box-shadow 0.3s ease;
                }

                .sl-card::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    background: linear-gradient(135deg, rgba(236,72,153,0.02), transparent 60%);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .sl-card:hover {
                    transform: translateY(-4px);
                    border-color: rgba(236,72,153,0.15);
                    box-shadow: 0 12px 28px rgba(236,72,153,0.06);
                }
                .sl-card:hover::before { opacity: 1; }

                /* Card top row */
                .sl-card-top {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 12px;
                    position: relative;
                    z-index: 1;
                }

                .sl-card-name {
                    font-size: 0.975rem;
                    font-weight: 600;
                    color: #334155;
                    line-height: 1.3;
                    transition: color 0.25s ease;
                }
                .sl-card:hover .sl-card-name { color: #ec4899; }

                .sl-card-price {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 1.1rem;
                    font-weight: 600;
                    background: linear-gradient(135deg, #ec4899, #db2777);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    white-space: nowrap;
                    flex-shrink: 0;
                }

                .sl-card-desc {
                    color: #475569;
                    font-size: 0.82rem;
                    font-weight: 400;
                    line-height: 1.65;
                    position: relative;
                    z-index: 1;
                }

                /* Card meta */
                .sl-card-meta {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    padding-top: 10px;
                    border-top: 1px solid rgba(0,0,0,0.05);
                    position: relative;
                    z-index: 1;
                }

                .sl-meta-item {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    color: #64748b;
                    font-size: 0.75rem;
                    font-weight: 400;
                }

                .sl-dot-avail {
                    width: 6px; height: 6px;
                    border-radius: 50%;
                    background: #22c55e;
                    box-shadow: 0 0 6px rgba(34,197,94,0.3);
                    animation: slPulse 2s ease-in-out infinite;
                }
                @keyframes slPulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50%       { opacity: 0.6; transform: scale(0.85); }
                }

                /* Book CTA */
                .sl-book-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    margin-top: auto;
                    padding: 13px 22px;
                    background: linear-gradient(135deg, #f472b6, #ec4899 55%, #db2777);
                    color: white;
                    font-size: 0.82rem;
                    font-weight: 600;
                    border-radius: 999px;
                    text-decoration: none;
                    letter-spacing: 0.02em;
                    transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;
                    box-shadow: 0 4px 20px rgba(236,72,153,0.3);
                    position: relative;
                    z-index: 1;
                }
                .sl-book-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 28px rgba(236,72,153,0.4);
                }
                .sl-book-btn:active { transform: translateY(0); }

                /* Reveal */
                @keyframes slReveal {
                    from { opacity: 0; transform: translateY(24px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .sl-reveal { animation: slReveal 0.6s ease both; }
            `}</style>

            <section className="sl-section py-24">
                <div className="sl-grid-bg" aria-hidden="true" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {serviceCategories.map((cat, idx) => (
                            <div
                                key={cat.id}
                                className="sl-category sl-reveal"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                {/* Category header */}
                                <div className="sl-cat-header">
                                    <div
                                        className="sl-cat-icon"
                                        style={{
                                            background: cat.accentColor,
                                            borderColor: cat.accentColor,
                                        }}
                                    >
                                        <cat.icon className="w-4 h-4 text-pink-400" />
                                    </div>
                                    <span className="sl-cat-title">{cat.name}</span>
                                </div>

                                {/* Service cards */}
                                <div className="flex flex-col gap-4">
                                    {cat.items.map((service) => (
                                        <div key={service.id} className="sl-card">
                                            <div className="sl-card-top">
                                                <span className="sl-card-name">{service.name}</span>
                                                <span className="sl-card-price">{service.price}</span>
                                            </div>

                                            <p className="sl-card-desc">{service.description}</p>

                                            <div className="sl-card-meta">
                                                <span className="sl-meta-item">
                                                    <Clock className="w-3 h-3" />
                                                    {service.duration}
                                                </span>
                                                <span className="sl-meta-item">
                                                    <span className="sl-dot-avail" />
                                                    Disponible
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Book CTA per category */}
                                <Link to="/contacto" className="sl-book-btn">
                                    Agendar en {cat.name}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesList;