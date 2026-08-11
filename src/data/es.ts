import type { UI, Person, ChecklistPage, TourPage } from './types';

export const ui: UI = {
  siteTitle: 'Anceu Coliving',
  subtitle: 'Tareas y responsabilidades del equipo · 2026',
  choosePersonLabel: 'Elige una persona para ver sus tareas',
  searchPlaceholder: 'Buscar tarea (ej: basura, froiz, piscina…)',
  searchAriaLabel: 'Buscar tarea',
  searchNoResults: 'Ninguna tarea encontrada',
  backLabel: '← Volver al inicio',
  teamNavLabel: 'Elegir persona del equipo',
  weekly: '📅 Tareas semanales',
  biweekly: '🗓️ Tareas quincenales',
  monthly: '📆 Tareas mensuales',
  situational: '⚡ Tareas según situación',
  noteLabel: 'Nota',
  noteText: 'Los tiempos "semanal" son la suma de cada tarea por una ocurrencia; la carga real depende de las veces que se repita esa tarea en la semana. Las tareas con "—" no tienen estimación asignada aún.',
  footerText: 'Anceu Coliving · Rural Hackers · Anceu, Ponte Caldelas, Galicia · Documento interno del equipo · 2026',
  pageTitlePersonTemplate: '{name} · Anceu Coliving',
  preseasonNav: '🗓 Apertura de temporada',
  onboardingNav: '👋 Tour de onboarding',
  offboardingNav: '🚪 Offboarding',
  checklistResetLabel: 'Resetear',
  checklistProgressTemplate: '{checked} de {total} completadas',
};

export const people: Person[] = [
  {
    id: 'volunteers',
    name: 'Voluntario/a(s)',
    initial: 'V',
    color: 'volunteers',
    summary: '23 tareas semanales · 15h 30min total',
    tasks: {
      weekly: {
        total: 'Total semanal (suma por ocurrencia): 15h 30min',
        items: [
          { name: 'Lista compra coliving', time: '30 min', desc: 'Café, leche, papel horno, etc.', when: 'Viernes antes de las 12:00' },
          { name: 'Tareas de cocina de mañana (fin de semana)', time: '60 min', desc: 'Basura, lavavajillas, tazas, free food, puertas neveras coliver/as', when: 'Sábado y domingo antes de las 10:00' },
          { name: 'Poner lavavajillas después de comer (entre semana)', time: '10 min', when: 'Lunes a viernes a las 16:00' },
          { name: 'Poner lavavajillas después de comer (fin de semana)', time: '10 min', when: 'Sábado y domingo a las 16:00' },
          { name: 'Mandar por Slack planes coliving de la semana', time: '20 min', when: 'Lunes antes de la house meeting' },
          { name: 'Escribir en pizarra planes coliving de la semana', time: '30 min', when: 'Hasta martes antes de las 20:00' },
          { name: 'Gestionar / organizar talleres en el coliving', time: '60 min', desc: 'Ayuda operativa a coliver/as que organizan talleres. Una vez a la semana' },
          { name: 'Ser persona de referencia para coliver/as', time: '60 min', desc: 'Resolver dudas de coliver/as. Una vez a la semana (de media)' },
          { name: 'Onboarding', time: '60 min', desc: 'Dos veces por semana (de media)', href: '/onboarding' },
          { name: 'Posts Instagram', time: '120 min', desc: '1 post/semana · 5 stories/semana' },
          { name: 'Anceu Inn (gestión fotos)', time: '10 min', desc: 'Poner/quitar fotos cuando llegan/se van coliver/as. Dos veces por semana (de media)' },
          { name: 'Recogida de paquetes', time: '10 min', desc: 'Todos los días, una vez (de media)' },
          { name: 'Crear grupos de cenas', time: '20 min', desc: 'Crear los grupos de cenas para la semana. Una vez a la semana' },
          { name: 'Recoger groceries de Froiz', time: '60 min', when: 'Miércoles' },
          { name: 'Conteo de suministros', time: '60 min', desc: 'Ir a suministros.anceu.com y rellenar todo el formulario', when: 'Domingo por la tarde', href: 'https://suministros.anceu.com' },
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
          { name: 'Revisar comida podrida en nevera', time: '30 min', desc: 'Tirar comida abierta mucho tiempo o que huela mal (free food + nevera coliver/as). 1 vez a la semana' },
          { name: 'Offboarding de coliver/a', time: '20 min × 2 = 40 min/sem', desc: 'Quitar comida nevera/despensa, limpiar balda, echar servilleta a lavar. Dos veces por semana (de media)', href: '/offboarding' },
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
    id: 'rosabel',
    name: 'Rosabel',
    initial: 'R',
    color: 'rosabel',
    summary: 'Limpieza y suministros · 25h/semana',
    tasks: {
      weekly: {
        total: 'Total semanal: 25h',
        items: [
          { name: 'Limpieza de habitaciones', time: '8h/sem', desc: 'Limpieza a fondo en entradas y salidas de coliver/as' },
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
  groups: [
    {
      person: 'volunteers',
      label: 'Voluntario/a(s)',
      items: [
        { task: 'Comprobar que el link de invitación de Slack no ha caducado', href: 'https://join.slack.com/t/anceu/shared_invite/zt-jryrz9dd-WcNbXUaBFdP7niKIJ5EM9A' },
        { task: 'Verificar que el canal #da-haus existe en Slack' },
        { task: 'Preparar fotos y hojas para el Anceu Inn' },
        { task: 'Publicar post en Instagram anunciando la reapertura' },
        { task: 'Hacer conteo de suministros de apertura', href: 'https://suministros.anceu.com' },
        { task: 'Revisar armarios de comida de coliver/as', note: 'Que estén limpios' },
        { task: 'Revisar baldas de neveras de coliver/as', note: 'Que estén limpias' },
        { task: 'Comprobar stickers de número de habitación', note: 'Baldas de nevera y armarios de comida' },
        { task: 'Planificar grupos de cenas de la primera semana' },
        { task: 'Programar la primera house meeting' },
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

export const onboarding: TourPage = {
  pageTitle: '👋 Tour de onboarding',
  subtitle: 'Guion del recorrido con la persona coliver nueva. Qué enseñar en cada parada (~60 min). Marca cada paso cuando lo hayáis cubierto.',
  steps: [
    {
      place: 'Cafetería (entrada)',
      teach: [
        'La cafetera tiene un QR (instrucciones de uso).',
        'La leche está en la nevera a la izquierda de la cafetera.',
        'Cuidado al cerrar la nevera: se queda abierta con facilidad.',
        'Tazas, café extra, leche extra, etc. están en la puerta.',
        'Tés, tilas e infusiones están debajo de la barra.',
        'Que escaneen el QR para darse de alta en Slack, Splitwise y coliving info. Es mucha información al principio: acompañarles mientras lo hacen para comprobar que todo va bien.',
        'Si no conocen Slack, pedir que revisen y activen las notificaciones.',
        'Una vez en Anceu, se les añade a #da-haus.',
      ],
    },
    {
      place: 'Call room / mini office',
      teach: [
        'Espacio sobre todo para videollamadas.',
        'Aprovechar para señalar lo bonita que es la vista desde el sofá.',
      ],
    },
    {
      place: 'Zona de comida / cena',
      teach: [
        'Explicar el Anceu Inn.',
        'Señalar los posters de proyectos en la cafetería: muestran el impacto del coliving en la aldea. Merece la pena pararse en por qué este lugar importa más allá de la casa.',
        'Mencionar los posters de rutas / hikes por si quieren explorar por su cuenta.',
        'Mostrar la estantería de proyectos locales con los que colaboramos:',
        'Espazo Cube (Ponte Caldelas): actividades culturales — pueden seguirles en Instagram.',
        'Rural Champs: deporte, entrenamiento de boxeo y baloncesto.',
        'Yoga con Andrea.',
        'Pueden contactarles directamente para preguntar por las clases — hablan inglés.',
        'Explicar el family meeting: cada lunes después de la cena. Encuentro para compartir los planes de Anceu Coliving. Todo es voluntario; pueden proponer lo que les apetezca antes de la reunión.',
        'Decir que sacarán la foto de la persona coliver nueva en cuanto terminen el tour.',
      ],
    },
    {
      place: 'Pasillo — comida seca y servilletas',
      teach: [
        'La comida seca va en los cubículos tagged por habitación.',
        'Mantener el hueco de la despensa limpio — la despensa se limpia todos los lunes.',
        'Usamos servilletas de tela (encima de los cubículos de comida).',
        'Deberían tener el tag de la persona que llega.',
      ],
    },
    {
      place: 'Sala de neveras de bebida',
      teach: [
        'Cervezas y refrescos: 1 €. Vino: 8 €.',
        'Anotar en la pizarra cuando se coge algo.',
        'Explicar Splitwise: gastos extra con el coliving, o cuando se cena fuera — si paga alguien, las deudas se dividen con el resto de coliver/as.',
        'Aquí hay verdura y fruta compartida para las cenas.',
        'Free food fridge — comida disponible para todo el mundo.',
        'Dinner ingredients fridge — no usarla; es para preparar las cenas.',
      ],
    },
    {
      place: 'Cocina',
      teach: [
        'Aquí sucede la magia: enseñar la cocina.',
        'Dejar la cocina limpia después de usarla.',
        'Guardamos las sobras para los cerdos del vecino.',
        'Vaciar los coladores del fregadero después de lavar.',
        'En un par de días ya se harán a dónde están las cosas.',
        'Cenas comunes: lunes, miércoles y viernes (cafetería o patio según el tiempo).',
        'Las cenas comunes cuestan 5 € por cena × 3 por semana = 15 €/semana (proyecto Healthy Co-cooking).',
        'El pan gratis forma parte de la compra semanal.',
        'Decirle a esta persona qué día cocina esta semana y con quién.',
        'El día de su cena communal: cocinan y limpian ellas mismas.',
        'Insistir en healthy cooking: hay QR y recetas en el pasillo.',
        'Una shelf de nevera por persona — etiquetada con el número de habitación.',
        'Free food fridge — antes de irse, mover la comida de su shelf a la free food fridge.',
        'Dinner ingredients fridge — no usarla; es para preparar la cena.',
        'Lavavajillas — solo platos, vasos y cubertería. Aclarar antes de meter. Vaciarlo cuando esté limpio. Para arrancar: vaciar el filtro, insertarlo, ON y luego Play.',
        'Lo grande o voluminoso (sartenes, ollas, tapas, tablas, contenedores grandes, etc.) se lava a mano para no llenar el lavavajillas.',
        'Reciclar: vidrio — vaciar y aclarar botellas y tarros; plástico y aluminio — van juntos, hay que aclararlos; papel — tiene que estar completamente limpio (sin servilletas ni vasos de café de papel).',
        'El agua del grifo es potable.',
        'Guardar cubertería y utensilios secos en su sitio antes de lavar lo tuyo.',
      ],
    },
    {
      place: 'Pasillo — cocina → Chill house (creative corridor)',
      teach: [
        'Maletín de medicinas.',
        'Armario blanco: toallas de playa, materiales craft, crepera, nevera de playa, secadores, cojines para sillas exteriores.',
        'Productos colectivos para garrapatas y mosquitos.',
        'Lost & found está en el armario blanco.',
        'Anceu book — compartir ideas antes de irse.',
      ],
    },
    {
      place: 'Cleaning room',
      teach: [
        'Aquí hay productos de limpieza, papel higiénico, gel de ducha y jabón.',
      ],
    },
    {
      place: 'Chill house',
      teach: [
        'Zona multiusos: tele, leer, trabajar o echar una siesta.',
        'Material de gym / deporte en el armario — enseñar lo que hay.',
        'Dejar la habitación como la encontraron.',
      ],
    },
    {
      place: 'Piscina, finca y coworking pequeño',
      teach: [
        'Piscina y parte de atrás de la finca: para sentarse y pensar.',
        'Recordar coger toallas y ponerlas a secar en lavandería después.',
        'Coworking pequeño: no se pueden recibir llamadas ni pueden entrar perros.',
      ],
    },
    {
      place: 'Makerspace',
      teach: [
        'Hay impresora 3D, cortadora de plotter y máquinas para reciclar plástico (Precious Plastic).',
      ],
    },
    {
      place: 'Coworking grande',
      teach: [
        'Aquí sí se pueden recibir llamadas.',
        'Pueden entrar perros.',
        'Mantener el espacio limpio y tranquilo.',
        'Usar las estanterías para guardar las cosas.',
      ],
    },
    {
      place: 'Lavandería',
      teach: [
        'Horario de lavadora: 11:30 a 20:00.',
        'Lavar: 2 € · Secar en máquina: 1 €.',
        'Anotar en la pizarra.',
        'Los detergentes están en el armario.',
        'También hay hamacas y tumbonas aquí.',
      ],
    },
    {
      place: 'Congelador — bajo el coworking',
      teach: [
        'Enseñar el congelador debajo del coworking (aparte de la sala de neveras de bebida).',
        'Si dejan comida ahí, deben etiquetarla.',
        'Helados: 1 €.',
      ],
    },
    {
      place: 'Habitación de la persona coliver',
      teach: [
        'Llevar a la habitación de esa persona en particular.',
        'Las habitaciones se limpian una vez por semana de 10:00 a 12:00.',
        'Galicia tiene ~70 % de humedad — usar el deshumidificador para que la habitación esté cómoda y sin moho.',
        'El jabón es orgánico de árbol de té, vale para cuerpo y pelo.',
      ],
    },
  ],
};

export const offboarding: TourPage = {
  pageTitle: '🚪 Offboarding',
  subtitle: 'Checklist del equipo cuando se va una persona coliver (~20 min). Marca cada paso cuando esté hecho.',
  steps: [
    {
      place: 'Comida — nevera y despensa',
      teach: [
        'Vaciar la shelf de nevera y el cubículo de comida seca de esa persona.',
        'Lo que quiera dejar → nevera de free food. El resto, tirar si está abierto o caducado.',
        'Limpiar balda y cubículo.',
      ],
    },
    {
      place: 'Servilleta de tela',
      teach: [
        'Recoger la servilleta de tela (tag de la persona) y echarla a lavar.',
      ],
    },
    {
      place: 'Anceu Inn',
      teach: [
        'Quitar la foto / hoja de esa persona del Anceu Inn.',
      ],
    },
    {
      place: 'Habitación',
      teach: [
        'Avisar a Rosabel si hace falta limpieza a fondo (entrada/salida).',
      ],
    },
  ],
};

