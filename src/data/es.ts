import type { UI, Person, ChecklistPage } from './types';

export const ui: UI = {
  siteTitle: 'Anceu Coliving',
  subtitle: 'Tareas y responsabilidades del equipo · 2026',
  choosePersonLabel: 'Elige una persona para ver sus tareas',
  searchPlaceholder: 'Buscar tarea (ej: basura, carrefour, piscina…)',
  searchAriaLabel: 'Buscar tarea',
  searchNoResults: 'Ninguna tarea encontrada',
  backLabel: '← Volver al inicio',
  teamNavLabel: 'Elegir miembro del equipo',
  weekly: '📅 Tareas semanales',
  biweekly: '🗓️ Tareas quincenales',
  monthly: '📆 Tareas mensuales',
  situational: '⚡ Tareas según situación',
  noteLabel: 'Nota',
  noteText: 'Los tiempos "semanal" son la suma de cada tarea por una ocurrencia; la carga real depende de las veces que se repita esa tarea en la semana. Las tareas con "—" no tienen estimación asignada aún.',
  footerText: 'Anceu Coliving · Rural Hackers · Anceu, Ponte Caldelas, Galicia · Documento interno del equipo · 2026',
  pageTitlePersonTemplate: '{name} · Anceu Coliving',
  preseasonNav: '🗓 Apertura de temporada',
  suppliesNav: '📦 Suministros',
  checklistResetLabel: 'Resetear',
  checklistProgressTemplate: '{checked} de {total} completadas',
};

export const people: Person[] = [
  {
    id: 'bari',
    name: 'Bari',
    initial: 'B',
    color: 'bari',
    summary: '22 tareas semanales · 14h 30min total',
    tasks: {
      weekly: {
        total: 'Total semanal (suma por ocurrencia): 14h 30min',
        items: [
          { name: 'Lista compra coliving', time: '30 min', desc: 'Café, leche, papel horno, etc.', when: 'Viernes antes de las 12:00' },
          { name: 'Tareas de cocina de mañana (fin de semana)', time: '60 min', desc: 'Basura, lavavajillas, tazas, free food, puertas neveras colivers', when: 'Sábado y domingo antes de las 10:00' },
          { name: 'Poner lavavajillas después de comer (entre semana)', time: '10 min', when: 'Lunes a viernes a las 16:00' },
          { name: 'Poner lavavajillas después de comer (fin de semana)', time: '10 min', when: 'Sábado y domingo a las 16:00' },
          { name: 'Mandar por Slack planes coliving de la semana', time: '20 min', when: 'Lunes antes de la house meeting' },
          { name: 'Escribir en pizarra planes coliving de la semana', time: '30 min', when: 'Hasta martes antes de las 20:00' },
          { name: 'Gestionar / organizar talleres en el coliving', time: '60 min', desc: 'Ayuda operativa a colivers que organizan talleres. Una vez a la semana' },
          { name: 'Ser persona de referencia para colivers', time: '60 min', desc: 'Resolver dudas de colivers. Una vez a la semana (de media)' },
          { name: 'Onboarding', time: '60 min', desc: 'Dos veces por semana (de media)' },
          { name: 'Posts Instagram', time: '120 min', desc: '1 post/semana · 5 stories/semana' },
          { name: 'Anceu Inn (gestión fotos)', time: '10 min', desc: 'Poner/quitar fotos cuando llegan/se van colivers. Dos veces por semana (de media)' },
          { name: 'Recogida de paquetes', time: '10 min', desc: 'Todos los días, una vez (de media)' },
          { name: 'Crear grupos de cenas', time: '20 min', desc: 'Crear los grupos de cenas para la semana. Una vez a la semana' },
          { name: 'Recoger groceries de Carrefour (Pontevedra)', time: '60 min', when: 'Miércoles' },
          { name: 'Vaciar deshumidificador laundry (tarde)', time: '5 min', when: 'Lunes a viernes a las 16:00' },
          { name: 'Vaciar deshumidificador laundry (noche)', time: '5 min', when: 'Lunes a viernes a las 22:00' },
          { name: 'Check espacios exteriores (entre semana)', time: '30 min', desc: 'Cenador, patio, piscina, bosque → lost & found. Lunes a viernes antes de las 10:00' },
          { name: 'Check espacios exteriores (fin de semana)', time: '30 min', desc: 'Cenador, patio, piscina, bosque → lost & found. Sábado y domingo antes de las 10:00' },
          { name: 'House meeting', time: '30 min', desc: 'Family meeting semanal. Lunes a las 21:00' },
          { name: 'Actividades de community building', time: '90 min', desc: 'Martes o jueves 1h + actividad fin de semana 2h máx. Dos veces por semana (de media)' },
          { name: 'Reunión semanal con el equipo', time: '60 min', desc: 'Reu con Agus y Afri para planear la semana. Lunes a las 17:00' },
        ],
      },
      biweekly: { total: '', items: [] },
      monthly: { total: '', items: [] },
      situational: { total: '', items: [] },
    },
  },
  {
    id: 'se',
    name: 'Se',
    initial: 'S',
    color: 'se',
    summary: 'Semanal 12h 30min · Quincenal 1h 30min · Mensual 1h',
    tasks: {
      weekly: {
        total: 'Total semanal (según frecuencia real): 12h 30min',
        items: [
          { name: 'Tareas de cocina de mañana (entre semana)', time: '60 min × 5 = 5h/sem', desc: 'Basura, lavavajillas, cacharros, tazas, escurridores, revisar nevera. Lunes a viernes antes de las 10:00' },
          { name: 'Revisar comida podrida en nevera', time: '30 min', desc: 'Tirar comida abierta mucho tiempo o que huela mal (free food + nevera colivers). 1 vez a la semana' },
          { name: 'Offboarding de coliver', time: '20 min × 2 = 40 min/sem', desc: 'Quitar comida nevera/despensa, limpiar balda, echar servilleta a lavar. Dos veces por semana (de media)' },
          { name: 'Gestión de jardinería', time: '180 min', desc: 'Una vez a la semana' },
          { name: 'Gestión de piscina', time: '2h/sem', desc: 'Una vez a la semana' },
          { name: 'Gestión de ovejas', time: '30 min', desc: 'Una vez a la semana' },
          { name: 'Gestión del pan', time: '10 min × 5 = 50 min/sem', desc: 'Sacar pan del congelador, ver lo que falta, hacer pedido. Lunes a viernes antes de las 10:00' },
        ],
      },
      biweekly: {
        total: 'Total quincenal: 1h 30min',
        items: [
          { name: 'Limpiar el lavavajillas', time: '30 min', when: 'Quincenal' },
          { name: 'Limpiar el patio', time: '60 min', when: 'Quincenal' },
        ],
      },
      monthly: {
        total: 'Total mensual: 1h',
        items: [
          { name: 'Revisar y limpiar congelador', time: '60 min', when: '1 vez al mes' },
        ],
      },
      situational: {
        total: 'Total por ocurrencia: 40min',
        items: [
          { name: 'Recoger hamacas y cojines (cuando llueve)', time: '20 min', when: 'Cuando vaya a llover' },
          { name: 'Poner hamacas y cojines (cuando no llueve)', time: '20 min', when: 'Cuando no vaya a llover' },
        ],
      },
    },
  },
  {
    id: 'carmen',
    name: 'Carmen',
    initial: 'C',
    color: 'carmen',
    summary: 'Semanal 5h 5min · Quincenal 30min · Mensual 2h 10min',
    tasks: {
      weekly: {
        total: 'Total semanal: 5h 5min',
        items: [
          { name: 'Escribir grupos de cenas en Excel', time: '10 min', when: 'Una vez a la semana' },
          { name: 'Comunicación entradas/salidas de colivers', time: '20 min', when: 'Cada viernes de mañana' },
          { name: 'Hacer el pedido de Carrefour', time: '60 min', when: 'Martes de noche' },
          { name: 'Guardia Civil colivers', time: '10 min', desc: 'Dos veces por semana (de media)' },
          { name: 'Meter en Splitwise y Slack a colivers', time: '10 min', desc: 'Antes de la llegada de cada coliver. Dos veces por semana (de media)' },
          { name: 'Gestión de limpieza de habitaciones con Rosabel', time: '15 min', desc: 'Ver quién entra/sale y dejar cuadrante listo. Viernes antes de las 12:00' },
          { name: 'Gestión de horas de llegadas de colivers', time: '—', desc: 'Verificar 3 días antes y enviar WhatsApp/Slack si no han confirmado hora. Semanal (según llegadas)' },
          { name: 'Facturación de coworkers y gestión de facturas', time: '1h/sem' },
          { name: 'Devolución de paquetes y hacer pedidos', time: '2h/sem' },
        ],
      },
      biweekly: {
        total: 'Total quincenal: 30min',
        items: [
          { name: 'Gestión de Splitwise', time: '30 min', desc: 'Aclarar pagos al irse colivers, gastos bebidas y lavandería con Rosabel. Quincenal' },
        ],
      },
      monthly: {
        total: 'Total mensual: 2h 10min',
        items: [
          { name: 'Programación aerotermia', time: '10 min', desc: 'Día antes de llegada: encender. Día de salida: apagar. Zonas comunes: programar 1 vez al año, apagar en verano. Mensual' },
          { name: 'Hacer cartelería', time: '2h/mes' },
        ],
      },
      situational: { total: '', items: [] },
    },
  },
  {
    id: 'rosabel',
    name: 'Rosabel',
    initial: 'R',
    color: 'rosabel',
    summary: 'Limpieza y suministros · 25h/semana',
    tasks: {
      weekly: {
        total: 'Total semanal: 25h',
        items: [
          { name: 'Limpieza de habitaciones', time: '8h/sem', desc: 'Limpieza a fondo en entradas y salidas de colivers' },
          { name: 'Limpieza de zonas comunes', time: '6h/sem', desc: 'Salón, pasillos, zonas de paso' },
          { name: 'Cocina y neveras', time: '4h/sem', desc: 'Limpieza de cocina y neveras (revisión neveras 1 vez por semana)' },
          { name: 'Coworkings', time: '3h/sem', desc: 'Limpieza de espacios de coworking' },
          { name: 'Chill house y baños', time: '3h/sem', desc: 'Limpieza de chill house y baños comunes' },
          { name: 'Pedido semanal de suministros de limpieza y habitaciones', time: '1h/sem' },
        ],
      },
      biweekly: { total: '', items: [] },
      monthly: { total: '', items: [] },
      situational: { total: '', items: [] },
    },
  },
];

export const preseason: ChecklistPage = {
  pageTitle: '🗓 Apertura de temporada',
  subtitle: 'Checklist para preparar la reapertura del coliving. Marca cada tarea cuando esté lista.',
  suppliesLinkLabel: '→ Ver lista de suministros',
  groups: [
    {
      person: 'bari',
      label: 'Bari',
      items: [
        { task: 'Comprobar que el link de invitación de Slack no ha caducado' },
        { task: 'Verificar que el canal #da-haus existe en Slack' },
        { task: 'Preparar fotos y hojas para el Anceu Inn' },
        { task: 'Publicar post en Instagram anunciando la reapertura' },
        { task: 'Revisar lista de suministros de apertura', href: '/suministros' },
        { task: 'Revisar armarios de comida de colivers', note: 'Que estén limpios' },
        { task: 'Revisar baldas de neveras de colivers', note: 'Que estén limpias' },
        { task: 'Comprobar stickers de número de habitación', note: 'Baldas de nevera y armarios de comida' },
      ],
    },
    {
      person: 'carmen',
      label: 'Carmen',
      items: [
        { task: 'Resetear saldos de Splitwise a 0' },
        { task: 'Verificar que el sistema de Guardia Civil sigue activo' },
        { task: 'Revisar que el Excel de compras (Google Sheets) está actualizado y funciona' },
        { task: 'Hacer el primer pedido de Carrefour para la apertura' },
        { task: 'Planificar grupos de cenas de la primera semana' },
        { task: 'Programar la primera house meeting' },
        { task: 'Crear el álbum de fotos de la temporada' },
        { task: 'Gestionar hora de llegada de colivers y avisar a Bari' },
      ],
    },
    {
      person: 'se',
      label: 'Se',
      items: [
        { task: 'Revisar piscina', note: 'Química del agua y limpieza' },
        { task: 'Revisar hamacas y cojines', note: 'Estado y limpieza' },
        { task: 'Revisar botiquín', note: 'Stock y fechas de caducidad' },
        { task: 'Revisar material del atelier' },
        { task: 'Revisar neveras', note: 'Encendidas, temperatura correcta, limpias' },
        { task: 'Revisar congelador', note: 'Limpio y vacío' },
        { task: 'Revisar lavalouza', note: 'Filtro, sal y pastillas' },
      ],
    },
  ],
};

export const supplies: ChecklistPage = {
  pageTitle: '📦 Suministros',
  subtitle: 'Lista de suministros a revisar semanalmente. Marca lo que esté correcto.',
  groups: [
    {
      label: 'Cocina básicos',
      items: [
        { task: 'Café' },
        { task: 'Té / infusiones' },
        { task: 'Azúcar' },
        { task: 'Leche' },
        { task: 'Aceite de oliva' },
        { task: 'Sal' },
        { task: 'Pan (congelado)' },
        { task: 'Papel horno' },
        { task: 'Bolsas de basura (pequeñas, medianas, grandes)' },
        { task: 'Bayetas y estropajos' },
        { task: 'Papel de cocina' },
      ],
    },
    {
      label: 'Lavalouza',
      items: [
        { task: 'Pastillas lavalouza' },
        { task: 'Sal lavalouza' },
        { task: 'Abrillantador lavalouza' },
      ],
    },
    {
      label: 'Bebidas',
      items: [
        { task: 'Coca-Cola' },
        { task: 'Shandy' },
        { task: 'Cerveza' },
        { task: 'Helados (1€)' },
      ],
    },
    {
      label: 'Baños y habitaciones',
      items: [
        { task: 'Papel higiénico' },
        { task: 'Jabón de manos (dispensadores)' },
        { task: 'Jabón tea tree (habitaciones)' },
        { task: 'Gel de ducha / champú' },
      ],
    },
    {
      label: 'Limpieza general',
      items: [
        { task: 'Limpiahogar multiusos' },
        { task: 'Limpiador baños / WC' },
        { task: 'Fregasuelos' },
        { task: 'Desengrasante cocina' },
        { task: 'Guantes de limpieza' },
      ],
    },
    {
      label: 'Lavandería',
      items: [
        { task: 'Detergente lavadora' },
        { task: 'Suavizante' },
      ],
    },
  ],
};
