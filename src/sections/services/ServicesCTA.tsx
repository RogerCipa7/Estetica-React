import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Calendar, Heart } from 'lucide-react';

const ServicesCTA = () => {
    return (
        <>
            <style>{`
                .scta-section {
                    font-family: 'DM Sans', sans-serif;
                    background: #ffffff;
                    position: relative;
                    overflow: hidden;
                }

                .scta-container {
                    position: relative;
                    background: linear-gradient(135deg, #0a0614 0%, #0f0a1e 100%);
                    border-radius: 40px;
                    padding: 80px 40px;
                    overflow: hidden;
                    border: 1px solid rgba(236, 72, 153, 0.2);
                    box-shadow: 0 40px 100px rgba(0, 0, 0, 0.4);
                }

                /* Decorative blobs */
                .scta-blob {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(100px);
                    pointer-events: none;
                    opacity: 0.6;
                }
                .scta-blob-1 {
                    width: 400px; height: 400px;
                    background: radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%);
                    top: -100px; right: -100px;
                }
                .scta-blob-2 {
                    width: 300px; height: 300px;
                    background: radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%);
                    bottom: -50px; left: -50px;
                }

                /* Grid pattern */
                .scta-grid {
                    position: absolute;
                    inset: 0;
                    background-image: 
                        linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
                    background-size: 60px 60px;
                    pointer-events: none;
                }

                /* Heading */
                .scta-h2 {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 300;
                    font-size: clamp(2.5rem, 5vw, 4.5rem);
                    line-height: 1.1;
                    color: #f8fafc;
                    letter-spacing: -0.02em;
                }

                .scta-h2 em {
                    font-style: italic;
                    background: linear-gradient(135deg, #f9a8d4 0%, #ec4899 50%, #c084fc 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .scta-p {
                    color: #94a3b8;
                    font-size: 1.1rem;
                    max-width: 500px;
                    margin: 0 auto;
                    line-height: 1.7;
                }

                /* Primary button */
                .scta-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    padding: 18px 40px;
                    background: linear-gradient(135deg, #f472b6, #ec4899 55%, #db2777);
                    color: white;
                    font-size: 1rem;
                    font-weight: 600;
                    border-radius: 999px;
                    text-decoration: none;
                    box-shadow: 0 10px 40px rgba(236, 72, 153, 0.4);
                    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
                }

                .scta-btn:hover {
                    transform: translateY(-3px) scale(1.02);
                    box-shadow: 0 20px 50px rgba(236, 72, 153, 0.5);
                }

                /* Floating icons */
                .scta-float {
                    position: absolute;
                    color: rgba(236, 72, 153, 0.2);
                    animation: sctaFloat 6s ease-in-out infinite;
                }
                @keyframes sctaFloat {
                    0%, 100% { transform: translateY(0) rotate(0); }
                    50% { transform: translateY(-20px) rotate(15deg); }
                }

                @media (max-width: 768px) {
                    .scta-container {
                        padding: 60px 24px;
                        border-radius: 30px;
                    }
                }
            `}</style>

            <section className="scta-section py-24 px-4 overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <div className="scta-container text-center">
                        <div className="scta-grid" />
                        <div className="scta-blob scta-blob-1" />
                        <div className="scta-blob scta-blob-2" />

                        {/* Decorative floating icons */}
                        <Sparkles className="scta-float" style={{ top: '15%', left: '10%', animationDelay: '0s' }} size={32} />
                        <Heart className="scta-float" style={{ bottom: '20%', right: '12%', animationDelay: '1s' }} size={24} />
                        <Sparkles className="scta-float" style={{ top: '25%', right: '15%', animationDelay: '2s' }} size={20} />

                        <div className="relative z-10 space-y-8">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold tracking-widest uppercase">
                                <Sparkles size={14} />
                                Tu transformación comienza aquí
                            </span>

                            <h2 className="scta-h2">
                                ¿Lista para vivir la<br />
                                experiencia <em>GlowBook</em>?
                            </h2>

                            <p className="scta-p">
                                Agenda tu cita hoy mismo y déjanos cuidar de ti. Resultados garantizados y una experiencia que querrás repetir.
                            </p>

                            <div className="pt-6">
                                <Link to="/contacto" className="scta-btn">
                                    <Calendar size={20} />
                                    Reservar mi Cita
                                    <ArrowRight size={20} />
                                </Link>
                            </div>

                            <p className="text-gray-500 text-xs pt-4">
                                Horario de atención: Lun - Sáb 9:00 AM - 8:00 PM
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesCTA;