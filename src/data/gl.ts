import type { UI, Person, ChecklistPage, TourPage } from './types';

export const ui: UI = {
  siteTitle: 'Anceu Coliving',
  subtitle: 'Tarefas e responsabilidades do equipo · 2026',
  choosePersonLabel: 'Escolle unha persoa para ver as súas tarefas',
  searchPlaceholder: 'Buscar tarefa (ex: lixo, froiz, piscina…)',
  searchAriaLabel: 'Buscar tarefa',
  searchNoResults: 'Non se atoparon tarefas',
  backLabel: '← Volver ao inicio',
  teamNavLabel: 'Escoller persoa do equipo',
  weekly: '📅 Tarefas semanais',
  biweekly: '🗓️ Tarefas quincenais',
  monthly: '📆 Tarefas mensuais',
  situational: '⚡ Tarefas segundo situación',
  noteLabel: 'Nota',
  noteText: 'Os tempos "semanal" son a suma de cada tarefa por unha ocorrencia; a carga real depende das veces que se repita esa tarefa na semana. As tarefas con "—" non teñen estimación asignada aínda.',
  footerText: 'Anceu Coliving · Rural Hackers · Anceu, Ponte Caldelas, Galicia · Documento interno do equipo · 2026',
  pageTitlePersonTemplate: '{name} · Anceu Coliving',
  preseasonNav: '🗓 Apertura de tempada',
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
    summary: '23 tarefas semanais · 15h 30min total',
    tasks: {
      weekly: {
        total: 'Total semanal (suma por ocorrencia): 15h 30min',
        items: [
          { name: 'Lista compra coliving', time: '30 min', desc: 'Café, leite, papel forno, etc.', when: 'Venres antes das 12:00' },
          { name: 'Tarefas de cociña de mañá (fin de semana)', time: '60 min', desc: 'Lixo, lavalouza, tazas, free food, portas neveiras coliver/as', when: 'Sábado e domingo antes das 10:00' },
          { name: 'Poñer lavalouza despois de comer (entre semana)', time: '10 min', when: 'Luns a venres ás 16:00' },
          { name: 'Poñer lavalouza despois de comer (fin de semana)', time: '10 min', when: 'Sábado e domingo ás 16:00' },
          { name: 'Mandar por Slack plans coliving da semana', time: '20 min', when: 'Luns antes da house meeting' },
          { name: 'Escribir na pizarra plans coliving da semana', time: '30 min', when: 'Ata martes antes das 20:00' },
          { name: 'Xestionar / organizar obradoiros no coliving', time: '60 min', desc: 'Axuda operativa a coliver/as que organizan obradoiros. Unha vez á semana' },
          { name: 'Ser persoa de referencia para coliver/as', time: '60 min', desc: 'Resolver dúbidas de coliver/as. Unha vez á semana (de media)' },
          { name: 'Onboarding', time: '60 min', desc: 'Dúas veces por semana (de media)', href: '/gl/onboarding' },
          { name: 'Posts Instagram', time: '120 min', desc: '1 post/semana · 5 stories/semana' },
          { name: 'Anceu Inn (xestión fotos)', time: '10 min', desc: 'Poñer/quitar fotos cando chegan/marchan coliver/as. Dúas veces por semana (de media)' },
          { name: 'Recollida de paquetes', time: '10 min', desc: 'Todos os días, unha vez (de media)' },
          { name: 'Crear grupos de ceas', time: '20 min', desc: 'Crear os grupos de ceas para a semana. Unha vez á semana' },
          { name: 'Recoller groceries de Froiz', time: '60 min', when: 'Mércores' },
          { name: 'Conteo de subministros', time: '60 min', desc: 'Ir a suministros.anceu.com e encher todo o formulario', when: 'Domingo pola tarde', href: 'https://suministros.anceu.com' },
          { name: 'Baleirar deshumidificador laundry (tarde)', time: '5 min', when: 'Luns a venres ás 16:00' },
          { name: 'Baleirar deshumidificador laundry (noite)', time: '5 min', when: 'Luns a venres ás 22:00' },
          { name: 'Check espazos exteriores (entre semana)', time: '30 min', desc: 'Cenador, patio, piscina, bosque → lost & found. Luns a venres antes das 10:00' },
          { name: 'Check espazos exteriores (fin de semana)', time: '30 min', desc: 'Cenador, patio, piscina, bosque → lost & found. Sábado e domingo antes das 10:00' },
          { name: 'House meeting', time: '30 min', desc: 'Family meeting semanal. Luns ás 21:00' },
          { name: 'Actividades de community building', time: '90 min', desc: 'Martes ou xoves 1h + actividade fin de semana 2h máx. Dúas veces por semana (de media)' },
          { name: 'Reunión semanal co equipo', time: '60 min', desc: 'Reu con Agus e Afri para planear a semana. Luns ás 17:00' },
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
        total: 'Total semanal (segundo frecuencia real): 12h 30min',
        items: [
          { name: 'Tarefas de cociña de mañá (entre semana)', time: '60 min × 5 = 5h/sem', desc: 'Lixo, lavalouza, cacharros, tazas, escorredores, revisar neveira. Luns a venres antes das 10:00' },
          { name: 'Revisar comida podre na neveira', time: '30 min', desc: 'Tirar comida aberta moito tempo ou que cheira mal (free food + neveira coliver/as). 1 vez á semana' },
          { name: 'Offboarding de coliver/a', time: '20 min × 2 = 40 min/sem', desc: 'Quitar comida neveira/despensa, limpar baldas, meter servilleta a lavar. Dúas veces por semana (de media)', href: '/gl/offboarding' },
          { name: 'Xestión de xardinería', time: '180 min', desc: 'Unha vez á semana' },
          { name: 'Xestión de piscina', time: '2h/sem', desc: 'Unha vez á semana' },
          { name: 'Xestión de ovellas', time: '30 min', desc: 'Unha vez á semana' },
          { name: 'Xestión do pan', time: '10 min × 5 = 50 min/sem', desc: 'Sacar pan do conxelador, ver o que falta, facer pedido. Luns a venres antes das 10:00' },
        ],
      },
      biweekly: {
        total: 'Total quincenal: 1h 30min',
        items: [
          { name: 'Limpar o lavalouza', time: '30 min', when: 'Quincenal' },
          { name: 'Limpar o patio', time: '60 min', when: 'Quincenal' },
        ],
      },
      monthly: {
        total: 'Total mensual: 1h',
        items: [
          { name: 'Revisar e limpar conxelador', time: '60 min', when: '1 vez ao mes' },
        ],
      },
      situational: {
        total: 'Total por ocorrencia: 40min',
        items: [
          { name: 'Recoller hamacas e coxíns (cando chove)', time: '20 min', when: 'Cando vaia chover' },
          { name: 'Poñer hamacas e coxíns (cando non chove)', time: '20 min', when: 'Cando non vaia chover' },
        ],
      },
    },
  },
  {
    id: 'rosabel',
    name: 'Rosabel',
    initial: 'R',
    color: 'rosabel',
    summary: 'Limpeza e subministros · 25h/semana',
    tasks: {
      weekly: {
        total: 'Total semanal: 25h',
        items: [
          { name: 'Limpeza de habitacións', time: '8h/sem', desc: 'Limpeza a fondo en entradas e saídas de coliver/as' },
          { name: 'Limpeza de zonas comúns', time: '6h/sem', desc: 'Salón, corredores, zonas de paso' },
          { name: 'Cociña e neveiras', time: '4h/sem', desc: 'Limpeza de cociña e neveiras (revisión neveiras 1 vez por semana)' },
          { name: 'Coworkings', time: '3h/sem', desc: 'Limpeza de espazos de coworking' },
          { name: 'Chill house e baños', time: '3h/sem', desc: 'Limpeza de chill house e baños comúns' },
          { name: 'Pedido semanal de subministros de limpeza e habitacións', time: '1h/sem' },
        ],
      },
      biweekly: { total: '', items: [] },
      monthly: { total: '', items: [] },
      situational: { total: '', items: [] },
    },
  },
];

export const preseason: ChecklistPage = {
  pageTitle: '🗓 Apertura de tempada',
  subtitle: 'Checklist para preparar a reapertura do coliving. Marca cada tarefa cando estea lista.',
  groups: [
    {
      person: 'volunteers',
      label: 'Voluntario/a(s)',
      items: [
        { task: 'Comprobar que o link de invitación de Slack non caducou', href: 'https://join.slack.com/t/anceu/shared_invite/zt-jryrz9dd-WcNbXUaBFdP7niKIJ5EM9A' },
        { task: 'Verificar que existe o canal #da-haus en Slack' },
        { task: 'Preparar fotos e follas para o Anceu Inn' },
        { task: 'Publicar post en Instagram anunciando a reapertura' },
        { task: 'Facer conteo de subministros de apertura', href: 'https://suministros.anceu.com' },
        { task: 'Revisar armarios de comida das coliver/as', note: 'Que estean limpos' },
        { task: 'Revisar baldas de neveiras das coliver/as', note: 'Que estean limpas' },
        { task: 'Comprobar stickers de número de habitación', note: 'Baldas de neveira e armarios de comida' },
        { task: 'Planificar grupos de ceas da primeira semana' },
        { task: 'Programar a primeira house meeting' },
      ],
    },
    {
      person: 'se',
      label: 'Se',
      items: [
        { task: 'Revisar piscina', note: 'Química da auga e limpeza' },
        { task: 'Revisar hamacas e coxíns', note: 'Estado e limpeza' },
        { task: 'Revisar botiquín', note: 'Stock e datas de caducidade' },
        { task: 'Revisar material do atelier' },
        { task: 'Revisar neveiras', note: 'Acesas, temperatura correcta, limpas' },
        { task: 'Revisar conxelador', note: 'Limpo e valeiro' },
        { task: 'Revisar lavalouza', note: 'Filtro, sal e pastillas' },
      ],
    },
  ],
};

export const onboarding: TourPage = {
  pageTitle: '👋 Tour de onboarding',
  subtitle: 'Guión do percorrido coa persoa coliver nova. Que ensinar en cada parada (~60 min). Marca cada paso cando o teñades cuberto.',
  steps: [
    {
      place: 'Cafetería (entrada)',
      teach: [
        'A cafetera ten un QR (instrucións de uso).',
        'O leite está na neveira á esquerda da cafetera.',
        'Tazas, café extra, leite extra, etc. están na porta.',
        'Tés, tilas e infusións están debaixo da barra.',
      ],
    },
    {
      place: 'Call room / mini office',
      teach: [
        'Espazo sobre todo para videchamadas.',
        'Aproveitar para sinalar o bonita que é a vista dende o sofá.',
        'Esa mesa úsase para comer/cear cando somos 14 ou máis persoas.',
      ],
    },
    {
      place: 'Zona de comida / cea',
      teach: [
        'Explicar o Anceu Inn.',
        'Dicir que sacarán a foto da persoa coliver nova en canto rematen o tour.',
      ],
    },
    {
      place: 'Pasillo — comida seca e servilletas',
      teach: [
        'A comida seca vai nos cubículos tagged por habitación.',
        'Usamos servilletas de tea (enriba dos cubículos de comida).',
        'Deberían ter o tag da persoa que chega.',
      ],
    },
    {
      place: 'Sala de neveiras de bebida',
      teach: [
        'Cervexas e refrescos: 1 €.',
        'Explicar Splitwise: gastos extra co coliving, ou cando se cea fóra — se paga alguén, as débedas divídense co resto de coliver/as.',
      ],
    },
    {
      place: 'Cociña',
      teach: [
        'Aquí sucede a maxia: ensinar a cociña.',
        'Todo está tagged por nome; as neveiras teñen unha shelf por persoa.',
        'Nun par de días xa se farán a onde están as cousas.',
        'Explicar as ceas e dicirlle a esta persoa que día fai a cea esta semana e con quen.',
      ],
    },
    {
      place: 'Chill house',
      teach: [
        'Zona multiusos: tele, ler, traballar ou botar unha sesta.',
      ],
    },
    {
      place: 'Piscina, finca e coworking pequeno',
      teach: [
        'Piscina e parte de atrás da finca: para sentarse e pensar.',
        'Coworking pequeno: non se poden recibir chamadas nin poden entrar cans.',
      ],
    },
    {
      place: 'Makerspace',
      teach: [
        'Hai impresora 3D, cortadora de plotter e máquinas para reciclar plástico (Precious Plastic).',
      ],
    },
    {
      place: 'Coworking grande',
      teach: [
        'Aquí si se poden recibir chamadas.',
        'Poden entrar cans.',
      ],
    },
    {
      place: 'Habitación da persoa coliver',
      teach: [
        'Levar á habitación desa persoa en particular.',
      ],
    },
  ],
};

export const offboarding: TourPage = {
  pageTitle: '🚪 Offboarding',
  subtitle: 'Checklist do equipo cando marcha unha persoa coliver (~20 min). Marca cada paso cando estea feito.',
  steps: [
    {
      place: 'Comida — neveira e despensa',
      teach: [
        'Baleirar a shelf de neveira e o cubículo de comida seca desa persoa.',
        'O que queira deixar → neveira de free food. O resto, tirar se está aberto ou caducado.',
        'Limpar balda e cubículo.',
      ],
    },
    {
      place: 'Servilleta de tea',
      teach: [
        'Recoller a servilleta de tea (tag da persoa) e metela a lavar.',
      ],
    },
    {
      place: 'Anceu Inn',
      teach: [
        'Quitar a foto / folla desa persoa do Anceu Inn.',
      ],
    },
    {
      place: 'Habitación',
      teach: [
        'Avisar a Rosabel se fai falta limpeza a fondo (entrada/saída).',
      ],
    },
  ],
};

