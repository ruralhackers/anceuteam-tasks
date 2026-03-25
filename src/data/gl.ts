import type { UI, Person, ChecklistPage } from './types';

export const ui: UI = {
  siteTitle: 'Anceu Coliving',
  subtitle: 'Tarefas e responsabilidades do equipo · 2026',
  choosePersonLabel: 'Escolle unha persoa para ver as súas tarefas',
  searchPlaceholder: 'Buscar tarefa (ex: lixo, carrefour, piscina…)',
  searchAriaLabel: 'Buscar tarefa',
  searchNoResults: 'Non se atoparon tarefas',
  backLabel: '← Volver ao inicio',
  teamNavLabel: 'Escoller membro do equipo',
  weekly: '📅 Tarefas semanais',
  biweekly: '🗓️ Tarefas quincenais',
  monthly: '📆 Tarefas mensuais',
  situational: '⚡ Tarefas segundo situación',
  noteLabel: 'Nota',
  noteText: 'Os tempos "semanal" son a suma de cada tarefa por unha ocorrencia; a carga real depende das veces que se repita esa tarefa na semana. As tarefas con "—" non teñen estimación asignada aínda.',
  footerText: 'Anceu Coliving · Rural Hackers · Anceu, Ponte Caldelas, Galicia · Documento interno do equipo · 2026',
  pageTitlePersonTemplate: '{name} · Anceu Coliving',
  preseasonNav: '🗓 Apertura de tempada',
  suppliesNav: '📦 Subministros',
  checklistResetLabel: 'Resetear',
  checklistProgressTemplate: '{checked} de {total} completadas',
};

export const people: Person[] = [
  {
    id: 'bari',
    name: 'Bari',
    initial: 'B',
    color: 'bari',
    summary: '22 tarefas semanais · 14h 30min total',
    tasks: {
      weekly: {
        total: 'Total semanal (suma por ocorrencia): 14h 30min',
        items: [
          { name: 'Lista compra coliving', time: '30 min', desc: 'Café, leite, papel forno, etc.', when: 'Venres antes das 12:00' },
          { name: 'Tarefas de cociña de mañá (fin de semana)', time: '60 min', desc: 'Lixo, lavalouza, tazas, free food, portas neveiras colivers', when: 'Sábado e domingo antes das 10:00' },
          { name: 'Poñer lavalouza despois de comer (entre semana)', time: '10 min', when: 'Luns a venres ás 16:00' },
          { name: 'Poñer lavalouza despois de comer (fin de semana)', time: '10 min', when: 'Sábado e domingo ás 16:00' },
          { name: 'Mandar por Slack plans coliving da semana', time: '20 min', when: 'Luns antes da house meeting' },
          { name: 'Escribir na pizarra plans coliving da semana', time: '30 min', when: 'Ata martes antes das 20:00' },
          { name: 'Xestionar / organizar obradoiros no coliving', time: '60 min', desc: 'Axuda operativa a colivers que organizan obradoiros. Unha vez á semana' },
          { name: 'Ser persoa de referencia para colivers', time: '60 min', desc: 'Resolver dúbidas de colivers. Unha vez á semana (de media)' },
          { name: 'Onboarding', time: '60 min', desc: 'Dúas veces por semana (de media)' },
          { name: 'Posts Instagram', time: '120 min', desc: '1 post/semana · 5 stories/semana' },
          { name: 'Anceu Inn (xestión fotos)', time: '10 min', desc: 'Poñer/quitar fotos cando chegan/marchan colivers. Dúas veces por semana (de media)' },
          { name: 'Recollida de paquetes', time: '10 min', desc: 'Todos os días, unha vez (de media)' },
          { name: 'Crear grupos de ceas', time: '20 min', desc: 'Crear os grupos de ceas para a semana. Unha vez á semana' },
          { name: 'Recoller groceries de Carrefour (Pontevedra)', time: '60 min', when: 'Mércores' },
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
          { name: 'Revisar comida podre na neveira', time: '30 min', desc: 'Tirar comida aberta moito tempo ou que cheira mal (free food + neveira colivers). 1 vez á semana' },
          { name: 'Offboarding de coliver', time: '20 min × 2 = 40 min/sem', desc: 'Quitar comida neveira/despensa, limpar baldas, meter servilleta a lavar. Dúas veces por semana (de media)' },
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
    id: 'carmen',
    name: 'Carmen',
    initial: 'C',
    color: 'carmen',
    summary: 'Semanal 5h 5min · Quincenal 30min · Mensual 2h 10min',
    tasks: {
      weekly: {
        total: 'Total semanal: 5h 5min',
        items: [
          { name: 'Escribir grupos de ceas en Excel', time: '10 min', when: 'Unha vez á semana' },
          { name: 'Comunicación entradas/saídas de colivers', time: '20 min', when: 'Cada venres de mañá' },
          { name: 'Facer o pedido de Carrefour', time: '60 min', when: 'Martes de noite' },
          { name: 'Garda Civil colivers', time: '10 min', desc: 'Dúas veces por semana (de media)' },
          { name: 'Meter en Splitwise e Slack a colivers', time: '10 min', desc: 'Antes da chegada de cada coliver. Dúas veces por semana (de media)' },
          { name: 'Xestión de limpeza de habitacións con Rosabel', time: '15 min', desc: 'Ver quen entra/sae e deixar cadro listo. Venres antes das 12:00' },
          { name: 'Xestión de horas de chegadas de colivers', time: '—', desc: 'Verificar 3 días antes e enviar WhatsApp/Slack se non confirmaron hora. Semanal (segundo chegadas)' },
          { name: 'Facturación de coworkers e xestión de facturas', time: '1h/sem' },
          { name: 'Devolución de paquetes e facer pedidos', time: '2h/sem' },
        ],
      },
      biweekly: {
        total: 'Total quincenal: 30min',
        items: [
          { name: 'Xestión de Splitwise', time: '30 min', desc: 'Aclarar pagos ao marchar colivers, gastos bebidas e lavandería con Rosabel. Quincenal' },
        ],
      },
      monthly: {
        total: 'Total mensual: 2h 10min',
        items: [
          { name: 'Programación aerotermia', time: '10 min', desc: 'Día antes de chegada: acender. Día de saída: apagar. Zonas comúns: programar 1 vez ao ano, apagar en verán. Mensual' },
          { name: 'Facer carteis', time: '2h/mes' },
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
    summary: 'Limpeza e subministros · 25h/semana',
    tasks: {
      weekly: {
        total: 'Total semanal: 25h',
        items: [
          { name: 'Limpeza de habitacións', time: '8h/sem', desc: 'Limpeza a fondo en entradas e saídas de colivers' },
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
  suppliesLinkLabel: '→ Ver lista de subministros',
  groups: [
    {
      person: 'bari',
      label: 'Bari',
      items: [
        { task: 'Comprobar que o link de invitación de Slack non caducou' },
        { task: 'Verificar que existe o canal #da-haus en Slack' },
        { task: 'Preparar fotos e follas para o Anceu Inn' },
        { task: 'Publicar post en Instagram anunciando a reapertura' },
        { task: 'Revisar lista de subministros de apertura', href: '/gl/subministros' },
      ],
    },
    {
      person: 'carmen',
      label: 'Carmen',
      items: [
        { task: 'Resetear saldos de Splitwise a 0' },
        { task: 'Verificar que o sistema da Garda Civil segue activo' },
        { task: 'Revisar que o Excel de compras (Google Sheets) está actualizado e funciona' },
        { task: 'Facer o primeiro pedido de Carrefour para a apertura' },
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

export const supplies: ChecklistPage = {
  pageTitle: '📦 Subministros',
  subtitle: 'Lista de subministros a revisar semanalmente. Marca o que estea correcto.',
  groups: [
    {
      label: 'Básicos da cociña',
      items: [
        { task: 'Café' },
        { task: 'Té / infusións' },
        { task: 'Azucre' },
        { task: 'Leite' },
        { task: 'Aceite de oliva' },
        { task: 'Sal' },
        { task: 'Pan (conxelado)' },
        { task: 'Papel forno' },
        { task: 'Bolsas do lixo (pequenas, medianas, grandes)' },
        { task: 'Trapos e estropallos' },
        { task: 'Papel de cociña' },
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
        { task: 'Cervexa' },
        { task: 'Xeados (1€)' },
      ],
    },
    {
      label: 'Baños e habitacións',
      items: [
        { task: 'Papel hixiénico' },
        { task: 'Xabón de mans (dispensadores)' },
        { task: 'Xabón tea tree (habitacións)' },
        { task: 'Xel de ducha / champú' },
      ],
    },
    {
      label: 'Limpeza xeral',
      items: [
        { task: 'Limpador multiusos' },
        { task: 'Limpador baños / WC' },
        { task: 'Fregachans' },
        { task: 'Desengrasante cociña' },
        { task: 'Luvas de limpeza' },
      ],
    },
    {
      label: 'Lavandería',
      items: [
        { task: 'Deterxente lavadora' },
        { task: 'Suavizante' },
      ],
    },
  ],
};
