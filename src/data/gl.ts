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
    id: 'uxia',
    name: 'Uxía',
    initial: 'U',
    color: 'uxia',
    summary: 'Operativa · Gardas de luns a venres',
    tasks: {
      weekly: {
        total: 'Total semanal (suma por ocorrencia): 5h 50min',
        items: [
          { name: 'Poñer lavalouza despois de comer (entre semana)', time: '10 min', when: 'Luns a venres ás 16:00' },
          { name: 'Crear grupos de ceas', time: '20 min', desc: 'Crear os grupos de ceas para a semana. Unha vez á semana', href: 'https://docs.google.com/spreadsheets/d/10UqAY6viSQRJCRfWLWxSIlObrsQHH5AyaVLpmm9fseo/edit' },
          { name: 'Recoller groceries de Froiz', time: '60 min', when: 'Luns' },
          { name: 'Conteo de subministros e lista de compra coliving', time: '60 min', desc: 'Ir a suministros.anceu.com e encher todo o formulario para preparar a compra', when: 'Domingo pola tarde', href: 'https://suministros.anceu.com' },
          { name: 'Escribir na pizarra plans coliving da semana', time: '30 min', when: 'Ata martes antes das 20:00' },
          { name: 'Baleirar deshumidificador laundry (tarde)', time: '5 min', when: 'Luns a venres ás 16:00' },
          { name: 'Baleirar deshumidificador laundry (noite)', time: '5 min', when: 'Luns a venres ás 22:00' },
          { name: 'Check espazos exteriores (entre semana)', time: '30 min', desc: 'Cenador, patio, piscina, bosque → lost & found. Luns a venres antes das 10:00' },
          { name: 'Revisión e orde de espazos interiores (entre semana)', time: '30 min', desc: 'Comprobar que non haxa cousas tiradas, que os coxíns estean ordenados nos sofás, que a Chill House estea ordenada e que non haxa tazas, roupa ou obxectos esquecidos nas zonas comúns. Deixar os espazos visualmente ordenados.', when: 'Luns a venres antes das 10:00' },
          { name: 'Actividades de community building (rotación)', time: '90 min', desc: 'Unha actividade entre semana e outra a fin de semana. Uxía, Petra e Karen rotan a facilitación.' },
          { name: 'Reunión semanal co equipo', time: '60 min', desc: 'Reu con Agus e Afri para planear a semana. Luns ás 17:00' },
        ],
      },
      biweekly: { total: '', items: [] },
      monthly: { total: '', items: [] },
      situational: {
        total: 'Tarefas puntuais e compartidas',
        items: [
          { name: 'Preparar balda de neveira e espazo de comida seca para unha chegada', time: '15 min', desc: 'Antes de que chegue alguén, limpar os seus dous espazos asignados. Por exemplo, se chega unha persoa á habitación 105, a balda de neveira marcada como 105 e o espazo 105 de comida seca deben estar limpos.', when: 'Antes de cada chegada' },
          { name: 'Recollida de paquetes (tarefa compartida)', time: '1h/sem compartida', desc: 'Tarefa compartida entre Uxía, Petra e Karen. Recoller os paquetes cando cheguen.' },
        ],
      },
    },
  },
  {
    id: 'petra',
    name: 'Petra',
    initial: 'P',
    color: 'petra',
    summary: 'Comunidade e onboardings · Gardas de fin de semana',
    tasks: {
      weekly: {
        total: 'Total semanal (suma por ocorrencia): 7h 25min',
        items: [
          { name: 'Tarefas de cociña de mañá (fin de semana)', time: '60 min', desc: 'Baleirar o lavalouza, tirar o lixo, tirar a comida que estea mala nas neveiras e levar as tazas á cafetería.', when: 'Sábado e domingo antes das 10:00' },
          { name: 'Poñer lavalouza despois de comer (fin de semana)', time: '10 min', when: 'Sábado e domingo ás 16:00' },
          { name: 'Mandar por Slack plans coliving da semana', time: '20 min', when: 'Luns antes da house meeting' },
          { name: 'Mandar recordatorio por Slack antes da house meeting', time: '10 min', desc: 'Pedir que, se alguén quere propoñer un plan, fale con alguén do equipo.', when: 'Luns antes da house meeting' },
          { name: 'Xestionar / organizar obradoiros no coliving', time: '60 min', desc: 'Axuda operativa a coliver/as que organizan obradoiros. Unha vez á semana' },
          { name: 'Onboarding', time: '60 min', desc: 'Liderar os primeiros onboardings con Karen e ensinarlle o proceso. Dúas veces por semana (de media)', href: '/gl/onboarding' },
          { name: 'Check espazos exteriores (fin de semana)', time: '30 min', desc: 'Cenador, patio, piscina, bosque → lost & found. Sábado e domingo antes das 10:00' },
          { name: 'Revisión e orde de espazos interiores (fin de semana)', time: '30 min', desc: 'Comprobar que non haxa cousas tiradas, que os coxíns estean ordenados nos sofás, que a Chill House estea ordenada e que non haxa tazas, roupa ou obxectos esquecidos nas zonas comúns. Deixar os espazos visualmente ordenados.', when: 'Sábado e domingo antes das 10:00' },
          { name: 'House meeting', time: '15 min', desc: 'Preparar e facilitar a family meeting semanal. Non debe durar máis de 15 minutos.', when: 'Luns ás 21:00' },
          { name: 'Actividades de community building (rotación)', time: '90 min', desc: 'Unha actividade entre semana e outra a fin de semana. Uxía, Petra e Karen rotan a facilitación.' },
          { name: 'Reunión semanal co equipo', time: '60 min', desc: 'Reu con Agus e Afri para planear a semana. Luns ás 17:00' },
        ],
      },
      biweekly: { total: '', items: [] },
      monthly: { total: '', items: [] },
      situational: {
        total: 'Tarefa compartida',
        items: [
          { name: 'Recollida de paquetes (tarefa compartida)', time: '1h/sem compartida', desc: 'Tarefa compartida entre Uxía, Petra e Karen. Recoller os paquetes cando cheguen.' },
        ],
      },
    },
  },
  {
    id: 'karen',
    name: 'Karen',
    initial: 'K',
    color: 'karen',
    summary: 'Contido, fotografía e apoio nos onboardings',
    tasks: {
      weekly: {
        total: 'Total semanal (suma por ocorrencia): 7h 40min',
        items: [
          { name: 'Aprender e apoiar os onboardings', time: '60 min', desc: 'Facer os primeiros onboardings con Petra para aprender o proceso', href: '/gl/onboarding' },
          { name: 'Posts Instagram', time: '120 min', desc: 'Liderar o contido: 1 post/semana · 5 stories/semana. Comprobar que as fotos se suban ao álbum de Google Photos.' },
          { name: 'Escribir un post semanal para o blog', time: '120 min', desc: 'Escribir o borrador nun Google Doc e mandárllelo a Agus e Afri para que o revisen.', when: 'Unha vez por semana' },
          { name: 'Anceu Inn (xestión fotos)', time: '10 min', desc: 'Poñer/quitar fotos cando chegan/marchan coliver/as. Dúas veces por semana (de media)' },
          { name: 'Actividades de community building (rotación)', time: '90 min', desc: 'Unha actividade entre semana e outra a fin de semana. Uxía, Petra e Karen rotan a facilitación.' },
          { name: 'Reunión semanal co equipo', time: '60 min', desc: 'Reu con Agus e Afri para planear a semana. Luns ás 17:00' },
        ],
      },
      biweekly: { total: '', items: [] },
      monthly: { total: '', items: [] },
      situational: {
        total: 'Tarefas puntuais e compartidas',
        items: [
          { name: 'Fotografar todos os espazos de Anceu', time: '120 min', desc: 'Facer fotos actualizadas de todos os espazos interiores e exteriores e subilas ao álbum de Google Photos.', when: 'Durante a primeira semana' },
          { name: 'Recollida de paquetes (tarefa compartida)', time: '1h/sem compartida', desc: 'Tarefa compartida entre Uxía, Petra e Karen. Recoller os paquetes cando cheguen.' },
        ],
      },
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
          { name: 'Tarefas de cociña de mañá (entre semana)', time: '60 min × 5 = 5h/sem', desc: 'Baleirar o lavalouza, tirar o lixo, tirar a comida que estea mala nas neveiras e levar as tazas á cafetería.', when: 'Luns a venres antes das 10:00' },
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
      person: 'uxia',
      label: 'Uxía',
      items: [
        { task: 'Facer conteo de subministros de apertura', href: 'https://suministros.anceu.com' },
        { task: 'Revisar armarios de comida das coliver/as', note: 'Que estean limpos' },
        { task: 'Revisar baldas de neveiras das coliver/as', note: 'Que estean limpas' },
        { task: 'Planificar grupos de ceas da primeira semana' },
      ],
    },
    {
      person: 'petra',
      label: 'Petra',
      items: [
        { task: 'Comprobar que o link de invitación de Slack non caducou', href: 'https://join.slack.com/t/anceu/shared_invite/zt-jryrz9dd-WcNbXUaBFdP7niKIJ5EM9A' },
        { task: 'Verificar que existe o canal #da-haus en Slack' },
        { task: 'Programar a primeira house meeting' },
        { task: 'Preparar o primeiro onboarding con Karen' },
      ],
    },
    {
      person: 'karen',
      label: 'Karen',
      items: [
        { task: 'Preparar fotos e follas para o Anceu Inn' },
        { task: 'Publicar post en Instagram anunciando a reapertura' },
        { task: 'Comprobar stickers de número de habitación', note: 'Baldas de neveira e armarios de comida' },
        { task: 'Fotografar todos os espazos interiores e exteriores de Anceu' },
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
        'Coidado ao pechar a neveira: queda aberta con facilidade.',
        'Tazas, café extra, leite extra, etc. están na porta.',
        'Tés, tilas e infusións están debaixo da barra.',
        'Que escaneen o QR para darse de alta en Slack, Splitwise e coliving info. É moita información ao principio: acompañalas mentres o fan para comprobar que todo vai ben.',
        'Se non coñecen Slack, pedir que revisen e activen as notificacións.',
        'Unha vez en Anceu, engádeselles a #da-haus.',
      ],
    },
    {
      place: 'Call room / mini office',
      teach: [
        'Espazo sobre todo para videchamadas.',
        'Aproveitar para sinalar o bonita que é a vista dende o sofá.',
      ],
    },
    {
      place: 'Zona de comida / cea',
      teach: [
        'Explicar o Anceu Inn.',
        'Sinalar os pósters de proxectos na cafetería: amosan o impacto do coliving na aldea. Merece a pena pararse en por que este lugar importa máis aló da casa.',
        'Mencionar os pósters de rutas / hikes por se queren explorar pola súa conta.',
        'Amosar a estantería de proxectos locais cos que colaboramos:',
        'Espazo Cube (Ponte Caldelas): actividades culturais — poden seguilos en Instagram.',
        'Rural Champs: deporte, adestramento de boxeo e baloncesto.',
        'Ioga con Andrea.',
        'Poden contactalos directamente para preguntar polas clases — falan inglés.',
        'Explicar o family meeting: cada luns despois da cea. Encontro para compartir os plans de Anceu Coliving. Todo é voluntario; poden propoñer o que lles apeteza antes da reunión.',
        'Dicir que sacarán a foto da persoa coliver nova en canto rematen o tour.',
      ],
    },
    {
      place: 'Pasillo — comida seca e servilletas',
      teach: [
        'A comida seca vai nos cubículos tagged por habitación.',
        'Manter o oco da despensa limpo — a despensa límpase todos os luns.',
        'Usamos servilletas de tea (enriba dos cubículos de comida).',
        'Deberían ter o tag da persoa que chega.',
      ],
    },
    {
      place: 'Sala de neveiras de bebida',
      teach: [
        'Cervexas e refrescos: 1 €. Viño: 8 €.',
        'Anotar na pizarra cando se colla algo.',
        'Explicar Splitwise: gastos extra co coliving, ou cando se cea fóra — se paga alguén, as débedas divídense co resto de coliver/as.',
        'Aquí hai verdura e froita compartida para as ceas.',
        'Free food fridge — comida dispoñible para todo o mundo.',
        'Dinner ingredients fridge — non usala; é para preparar as ceas.',
      ],
    },
    {
      place: 'Cociña',
      teach: [
        'Aquí sucede a maxia: ensinar a cociña.',
        'Deixar a cociña limpa despois de usala.',
        'Gardamos as sobras para os porcos do veciño.',
        'Baleirar os coadores do fregadeiro despois de lavar.',
        'Nun par de días xa se farán a onde están as cousas.',
        'Ceas comúns: luns, mércores e venres (cafetería ou patio segundo o tempo).',
        'As ceas comúns custan 5 € por cea × 3 por semana = 15 €/semana (proxecto Healthy Co-cooking).',
        'O pan gratis forma parte da compra semanal.',
        'Dicirlle a esta persoa que día cociña esta semana e con quen.',
        'O día da súa cea communal: cociñan e limpan elas mesmas.',
        'Insistir en healthy cooking: hai QR e receitas no pasillo.',
        'Unha shelf de neveira por persoa — etiquetada co número de habitación.',
        'Free food fridge — antes de marchar, mover a comida da súa shelf á free food fridge.',
        'Dinner ingredients fridge — non usala; é para preparar a cea.',
        'Lavavaixillas — só pratos, vasos e cubertos. Aclarar antes de meter. Baleiralo cando estea limpo. Para arrancar: baleirar o filtro, insertalo, ON e logo Play.',
        'O grande ou voluminoso (tixolas, olas, tapas, táboas, contedores grandes, etc.) lávase á man para non encher o lavavaixillas.',
        'Reciclar: vidro — baleirar e aclarar botellas e potes; plástico e aluminio — van xuntos, hai que acláralos; papel — ten que estar completamente limpo (sen servilletas nin vasos de café de papel).',
        'A auga da billa é potable.',
        'Gardar cubertos e utensilios secos no seu sitio antes de lavar o teu.',
      ],
    },
    {
      place: 'Pasillo — cociña → Chill house (creative corridor)',
      teach: [
        'Maletín de medicinas.',
        'Armario branco: toallas de praia, materiais craft, crepeira, neveira de praia, secadores, coxíns para cadeiras exteriores.',
        'Produtos colectivos para carrachas e mosquitos.',
        'Lost & found está no armario branco.',
        'Anceu book — compartir ideas antes de marchar.',
      ],
    },
    {
      place: 'Cleaning room',
      teach: [
        'Aquí hai produtos de limpeza, papel hixiénico, xel de ducha e xabón.',
      ],
    },
    {
      place: 'Chill house',
      teach: [
        'Zona multiusos: tele, ler, traballar ou botar unha sesta.',
        'Material de gym / deporte no armario — ensinar o que hai.',
        'Deixar a habitación como a atoparon.',
      ],
    },
    {
      place: 'Piscina, finca e coworking pequeno',
      teach: [
        'Piscina e parte de atrás da finca: para sentarse e pensar.',
        'Lembrar coller toallas e poñelas a secar na lavandería despois.',
        'Coworking pequeno: non se poden recibir chamadas nin poden entrar cans.',
      ],
    },
    {
      place: 'Conxelador — baixo o coworking',
      teach: [
        'Ensinar o conxelador debaixo do coworking (aparte da sala de neveiras de bebida).',
        'Se deixan comida alí, deben etiquetala.',
        'Xeados: 1 € e hai que anotalos na pizarra.',
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
        'Manter o espazo limpo e tranquilo.',
        'Usar as estanterías para gardar as cousas.',
      ],
    },
    {
      place: 'Lavandería',
      teach: [
        'Horario de lavadora: 11:30 a 20:00.',
        'Lavar: 2 € · Secar en máquina: 1 €.',
        'Anotar na pizarra.',
        'Os deterxentes están no armario.',
        'Tamén hai hamacas e tumbonas aquí.',
      ],
    },
    {
      place: 'Habitación da persoa coliver',
      teach: [
        'Levar á habitación desa persoa en particular.',
        'As habitacións límpanse unha vez por semana de 10:00 a 12:00.',
        'Galicia ten ~70 % de humidade — usar o deshumidificador para que a habitación estea cómoda e sen mofo.',
        'O xabón é orgánico de árbore do té, vale para corpo e pelo.',
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
