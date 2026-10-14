/**
 * Variantes de industria para la demo de página web rápida.
 * Sin backends — solo cambio de contenido en el cliente.
 */

export type WebVariant = {
  id: string;
  label: string;
  business: string;
  headline: string;
  sub: string;
  cta: string;
  features: { title: string; desc: string }[];
  accent: string;
};

export const webVariants: WebVariant[] = [
  {
    id: 'dental',
    label: 'Clínica dental',
    business: 'Sonrisas MX',
    headline: 'Tu sonrisa, en buenas manos',
    sub: 'Agenda en línea, horarios claros y atención cercana en Guadalajara.',
    cta: 'Agendar cita por WhatsApp',
    accent: '#14b8a6',
    features: [
      { title: 'Agenda fácil', desc: 'Reserva desde el celular en menos de un minuto.' },
      { title: 'Horarios visibles', desc: 'Sabes cuándo estamos abiertos, sin llamar.' },
      { title: 'Ubicación clara', desc: 'Mapa y referencias para llegar sin estrés.' },
    ],
  },
  {
    id: 'resto',
    label: 'Restaurante',
    business: 'Brasa Fina',
    headline: 'Fuego lento, sabor preciso',
    sub: 'Cocina de autor en un ambiente elegante. Reservaciones y menú al instante.',
    cta: 'Reservar mesa',
    accent: '#d4a373',
    features: [
      { title: 'Menú digital', desc: 'Platos y maridajes actualizados, con fotos.' },
      { title: 'Reservas', desc: 'Elige día y hora; confirmación por WhatsApp.' },
      { title: 'Eventos', desc: 'Privados y degustaciones con un solo contacto.' },
    ],
  },
  {
    id: 'retail',
    label: 'Retail local',
    business: 'Casa Norte',
    headline: 'Lo esencial, bien hecho',
    sub: 'Catálogo claro, horarios de tienda y pedidos por WhatsApp.',
    cta: 'Ver catálogo',
    accent: '#38bdf8',
    features: [
      { title: 'Catálogo simple', desc: 'Productos destacados sin tienda complicada.' },
      { title: 'WhatsApp directo', desc: 'El cliente pregunta y compra donde ya está.' },
      { title: 'Presencia seria', desc: 'Dejas de mandar precios solo por foto.' },
    ],
  },
];
