import { Sparkles, Heart, Leaf, Zap, Star, Droplets } from 'lucide-react';

export const serviceCategories = [
    {
        id: 'cat1',
        name: 'Faciales',
        icon: Sparkles,
        accentColor: 'rgba(236,72,153,0.1)',
        glowColor: 'rgba(236,72,153,0.05)',
        items: [
            { id: 'f1', name: "Limpieza Profunda", duration: "60 min", price: "$45.000 COP", description: 'Elimina impurezas, puntos negros y exceso de sebo. Deja la piel renovada, suave y con un aspecto saludable desde la primera sesión.' },
            { id: 'f2', name: "Hidratación Glow", duration: "45 min", price: "$35.000 COP", description: 'Tratamiento intensivo de hidratación con ácido hialurónico y vitamina C. Aporta luminosidad instantánea y efecto jugoso al rostro.' },
            { id: 'f3', name: "Peeling Enzimático", duration: "50 min", price: "$50.000 COP", description: 'Exfoliación suave con enzimas naturales que uniforman el tono, minimizan poros y estimulan la renovación celular sin irritar.' },
            { id: 'f4', name: "Lifting Facial", duration: "75 min", price: "$75.000 COP", description: 'Técnica de tensado no invasiva con radiofrecuencia y masaje facial profundo que redefine el contorno y reduce la flacidez.' },
        ]
    },
    {
        id: 'cat2',
        name: 'Uñas',
        icon: Heart,
        accentColor: 'rgba(168,85,247,0.1)',
        glowColor: 'rgba(168,85,247,0.05)',
        items: [
            { id: 'u1', name: "Manicura Spa", duration: "50 min", price: "$25.000 COP", description: 'Cuidado completo para manos y uñas: exfoliación, masaje, hidratación y esmaltado a tu elección. Resultados impecables.' },
            { id: 'u2', name: "Pedicura Médica", duration: "60 min", price: "$40.000 COP", description: 'Tratamiento profundo para pies cansados. Incluye baño de sales, eliminación de callosidades y masaje relajante con aceites.' },
            { id: 'u3', name: "Uñas en Gel", duration: "70 min", price: "$55.000 COP", description: 'Extensiones o esmaltado semipermanente en gel de larga duración. Acabado brillante y resistente por hasta 3 semanas.' },
            { id: 'u4', name: "Nail Art Diseño", duration: "90 min", price: "$65.000 COP", description: 'Diseños personalizados a mano alzada o con plantillas. Desde minimalismo elegante hasta arte detallado. Tu estilo, tus reglas.' },
        ]
    },
    {
        id: 'cat3',
        name: 'Corporales',
        icon: Leaf,
        accentColor: 'rgba(34,197,94,0.1)',
        glowColor: 'rgba(34,197,94,0.05)',
        items: [
            { id: 'c1', name: "Masaje Relajante", duration: "90 min", price: "$60.000 COP", description: 'Técnica sueca de effleurage y petrissage con aceites esenciales de lavanda. Libera tensión muscular y reduce el estrés profundo.' },
            { id: 'c2', name: "Drenaje Linfático", duration: "60 min", price: "$55.000 COP", description: 'Masaje manual de baja presión que activa el sistema linfático, mejora la circulación, reduce retención de líquidos y desinfla el cuerpo.' },
            { id: 'c3', name: "Envoltura Detox", duration: "75 min", price: "$70.000 COP", description: 'Tratamiento de barro volcánico o algas marinas que purifica la piel, activa la circulación y elimina toxinas desde adentro.' },
            { id: 'c4', name: "Masaje Piedras Calientes", duration: "80 min", price: "$80.000 COP", description: 'Piedras de basalto volcánico a temperatura controlada para un masaje de profundidad media con efecto térmico descontracturante.' },
        ]
    },
    {
        id: 'cat4',
        name: 'Depilación',
        icon: Zap,
        accentColor: 'rgba(251,191,36,0.1)',
        glowColor: 'rgba(251,191,36,0.05)',
        items: [
            { id: 'd1', name: "Depilación con Cera", duration: "30 min", price: "$20.000 COP", description: 'Depilación con cera tibia hipoalergénica. Resultados duraderos hasta 4 semanas con piel suave y libre de irritación.' },
            { id: 'd2', name: "Depilación Laser", duration: "45 min", price: "$90.000 COP", description: 'Tecnología de diodo de última generación para reducción permanente del vello. Sin dolor, efectiva en todos los fototipos.' },
            { id: 'd3', name: "Cejas & Diseño", duration: "25 min", price: "$18.000 COP", description: 'Diseño personalizado según la morfología de tu rostro con hilo, pinza y cera. Incluye tinte si lo deseas.' },
            { id: 'd4', name: "Depilación Corporal Completa", duration: "90 min", price: "$75.000 COP", description: 'Sesión completa de depilación de piernas, axilas, zona bikini y abdomen con cera de alta calidad.' },
        ]
    },
    {
        id: 'cat5',
        name: 'Cabello',
        icon: Star,
        accentColor: 'rgba(236,72,153,0.1)',
        glowColor: 'rgba(236,72,153,0.05)',
        items: [
            { id: 'h1', name: "Corte & Styling", duration: "60 min", price: "$45.000 COP", description: 'Corte personalizado según la forma de tu rostro y tipo de cabello. Incluye lavado, tratamiento y brushing profesional.' },
            { id: 'h2', name: "Coloración", duration: "120 min", price: "$95.000 COP", description: 'Coloración completa con tintes sin amoniaco o técnicas como balayage, highlights y degradados. Asesoría de color incluida.' },
            { id: 'h3', name: "Tratamiento Keratina", duration: "150 min", price: "$120.000 COP", description: 'Alisado semi-permanente con keratina que elimina el frizz, aporta brillo y facilita el manejo del cabello por hasta 4 meses.' },
            { id: 'h4', name: "Hidratación Capilar", duration: "50 min", price: "$40.000 COP", description: 'Mascarilla nutritiva de alta penetración con aceites de argán y proteínas de seda. Recupera la fibra capilar dañada.' },
        ]
    },
    {
        id: 'cat6',
        name: 'Bienestar',
        icon: Droplets,
        accentColor: 'rgba(56,189,248,0.1)',
        glowColor: 'rgba(56,189,248,0.05)',
        items: [
            { id: 'b1', name: "Aromaterapia", duration: "60 min", price: "$50.000 COP", description: 'Sesión de bienestar con difusión de aceites esenciales puros y masaje suave. Equilibra mente, cuerpo y emociones.' },
            { id: 'b2', name: "Reflexología Podal", duration: "50 min", price: "$45.000 COP", description: 'Presión terapéutica en puntos reflejos de los pies que estimula órganos y sistemas. Profundamente relajante y sanador.' },
            { id: 'b3', name: "Ritual Novias", duration: "180 min", price: "$180.000 COP", description: 'Paquete completo para novias: facial, manicura, pedicura, maquillaje y peinado. Tu día especial merece lo mejor.' },
            { id: 'b4', name: "Día de Spa", duration: "240 min", price: "$220.000 COP", description: 'Experiencia completa con limpieza facial, masaje corporal, envolvimiento, manicura y pedicura. El regalo perfecto para ti.' },
        ]
    },
];

export const getFeaturedServices = () => {
    // Retornamos 3 servicios destacados (como en FeaturedServices.tsx)
    return [
        { ...serviceCategories[0].items[0], icon: Sparkles, tag: 'Más solicitado', iconBg: 'bg-pink-100', iconColor: 'text-pink-600', borderHover: 'hover:border-pink-300', shadowHover: 'hover:shadow-pink-100' },
        { ...serviceCategories[1].items[0], icon: Heart, tag: 'Tendencia', iconBg: 'bg-purple-100', iconColor: 'text-purple-600', borderHover: 'hover:border-purple-300', shadowHover: 'hover:shadow-purple-100' },
        { ...serviceCategories[2].items[0], icon: Star, tag: 'Favorito', iconBg: 'bg-amber-100', iconColor: 'text-amber-600', borderHover: 'hover:border-amber-300', shadowHover: 'hover:shadow-amber-100' },
    ];
};
