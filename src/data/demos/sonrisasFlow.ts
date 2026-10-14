/**
 * Motor de reglas del chatbot demo Sonrisas MX.
 * 100% local — sin Dialogflow ni APIs externas.
 * Editar este archivo para cambiar flujos sin tocar la UI.
 */

export type BotOption = {
  label: string;
  next: string;
  value?: string;
};

export type BotStep = {
  id: string;
  bot: string;
  options?: BotOption[];
  /** Si true, genera descarga ICS al llegar aquí */
  schedule?: boolean;
};

export const clinicMeta = {
  name: 'Sonrisas MX',
  tagline: 'Clínica dental · demo interactiva',
  hours: 'Lun–Vie 9:00–19:00 · Sáb 9:00–14:00',
  address: 'Av. Ejemplo 123, Guadalajara, Jal.',
  phone: '+52 33 1234 5678',
  disclaimer: 'Demo de Humo. No es un bot real ni una clínica real.',
};

export const sonrisasFlow: Record<string, BotStep> = {
  start: {
    id: 'start',
    bot: '¡Hola! Soy el asistente de Sonrisas MX 🦷\n¿En qué te puedo ayudar hoy?',
    options: [
      { label: 'Horarios y ubicación', next: 'hours' },
      { label: 'Agendar cita', next: 'book_day' },
      { label: 'Costos / precios', next: 'prices' },
      { label: 'Recordatorio de cita', next: 'remind' },
      { label: 'Cancelar o reprogramar', next: 'cancel' },
    ],
  },
  hours: {
    id: 'hours',
    bot: `Estamos abiertos:\n${clinicMeta.hours}\n\n📍 ${clinicMeta.address}\n\n¿Quieres agendar una cita?`,
    options: [
      { label: 'Sí, agendar', next: 'book_day' },
      { label: 'Ver precios', next: 'prices' },
      { label: 'Menú principal', next: 'start' },
    ],
  },
  prices: {
    id: 'prices',
    bot: 'Precios orientativos (demo):\n• Limpieza — desde $650\n• Revisión general — $400\n• Blanqueamiento — desde $2,800\n\nEl costo final lo confirma el doctor en consulta.',
    options: [
      { label: 'Agendar cita', next: 'book_day' },
      { label: 'Menú principal', next: 'start' },
    ],
  },
  book_day: {
    id: 'book_day',
    bot: 'Perfecto. ¿Qué día te acomoda?',
    options: [
      { label: 'Mañana', next: 'book_time', value: 'mañana' },
      { label: 'Pasado mañana', next: 'book_time', value: 'pasado mañana' },
      { label: 'Este jueves', next: 'book_time', value: 'jueves' },
      { label: 'Menú principal', next: 'start' },
    ],
  },
  book_time: {
    id: 'book_time',
    bot: '¿A qué hora prefieres?',
    options: [
      { label: '10:00', next: 'book_confirm', value: '10:00' },
      { label: '12:30', next: 'book_confirm', value: '12:30' },
      { label: '16:30', next: 'book_confirm', value: '16:30' },
      { label: '18:00', next: 'book_confirm', value: '18:00' },
      { label: 'Elegir otro día', next: 'book_day' },
    ],
  },
  book_confirm: {
    id: 'book_confirm',
    bot: '¡Cita registrada en esta demo!\nTe dejo un archivo de calendario (.ics) para guardarla en tu teléfono.\n\nEn un bot real esto también llegaría al sistema de la clínica.',
    schedule: true,
    options: [
      { label: 'Agendar otra cita', next: 'book_day' },
      { label: 'Menú principal', next: 'start' },
    ],
  },
  remind: {
    id: 'remind',
    bot: 'Puedo enviarte un recordatorio 24 h antes por WhatsApp.\n¿Lo activamos para tu próxima cita?',
    options: [
      { label: 'Sí, activar recordatorio', next: 'remind_ok' },
      { label: 'Primero agendar', next: 'book_day' },
      { label: 'Menú principal', next: 'start' },
    ],
  },
  remind_ok: {
    id: 'remind_ok',
    bot: 'Listo. En producción el recordatorio saldría automático por WhatsApp. Aquí solo simulamos el flujo.',
    options: [{ label: 'Menú principal', next: 'start' }],
  },
  cancel: {
    id: 'cancel',
    bot: 'Para cancelar o reprogramar en un bot real pediríamos tu nombre o folio.\nEn esta demo puedes simular:',
    options: [
      { label: 'Cancelar cita (simulado)', next: 'cancel_ok' },
      { label: 'Reprogramar', next: 'book_day' },
      { label: 'Menú principal', next: 'start' },
    ],
  },
  cancel_ok: {
    id: 'cancel_ok',
    bot: 'Cita cancelada (simulación). El horario quedaría libre en la agenda de la clínica.',
    options: [{ label: 'Menú principal', next: 'start' }],
  },
};
