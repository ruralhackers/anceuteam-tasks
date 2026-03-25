import type { UI, Person, ChecklistPage } from './types';

export const ui: UI = {
  siteTitle: 'Anceu Coliving',
  subtitle: 'Team tasks and responsibilities · 2026',
  choosePersonLabel: 'Choose a person to see their tasks',
  searchPlaceholder: 'Search task (e.g. groceries, pool, packages…)',
  searchAriaLabel: 'Search task',
  searchNoResults: 'No tasks found',
  backLabel: '← Back to home',
  teamNavLabel: 'Choose team member',
  weekly: '📅 Weekly tasks',
  biweekly: '🗓️ Biweekly tasks',
  monthly: '📆 Monthly tasks',
  situational: '⚡ Situational tasks',
  noteLabel: 'Note',
  noteText: 'Weekly times are the sum of each task for a single occurrence; the actual workload depends on how many times the task repeats in a week. Tasks with "—" have no time estimate yet.',
  footerText: 'Anceu Coliving · Rural Hackers · Anceu, Ponte Caldelas, Galicia · Internal team document · 2026',
  pageTitlePersonTemplate: '{name} · Anceu Coliving',
  preseasonNav: '🗓 Season opening',
  suppliesNav: '📦 Supplies',
  checklistResetLabel: 'Reset',
  checklistProgressTemplate: '{checked} of {total} completed',
};

export const people: Person[] = [
  {
    id: 'bari',
    name: 'Bari',
    initial: 'B',
    color: 'bari',
    summary: '22 weekly tasks · 14h 30min total',
    tasks: {
      weekly: {
        total: 'Weekly total (sum per occurrence): 14h 30min',
        items: [
          { name: 'Coliving shopping list', time: '30 min', desc: 'Coffee, milk, baking paper, etc.', when: 'Friday before 12:00' },
          { name: 'Morning kitchen tasks (weekend)', time: '60 min', desc: 'Bins, dishwasher, cups, free food, coliver fridge doors', when: 'Saturday and Sunday before 10:00' },
          { name: 'Run dishwasher after lunch (weekdays)', time: '10 min', when: 'Monday to Friday at 16:00' },
          { name: 'Run dishwasher after lunch (weekend)', time: '10 min', when: 'Saturday and Sunday at 16:00' },
          { name: 'Send weekly coliving plans on Slack', time: '20 min', when: 'Monday before the house meeting' },
          { name: 'Write weekly coliving plans on whiteboard', time: '30 min', when: 'By Tuesday before 20:00' },
          { name: 'Manage / organise coliving workshops', time: '60 min', desc: 'Operational support to colivers organising workshops. Once a week' },
          { name: 'Be point of contact for colivers', time: '60 min', desc: 'Answer coliver questions. Once a week (on average)' },
          { name: 'Onboarding', time: '60 min', desc: 'Twice a week (on average)' },
          { name: 'Instagram posts', time: '120 min', desc: '1 post/week · 5 stories/week' },
          { name: 'Anceu Inn (photo management)', time: '10 min', desc: 'Add/remove photos when colivers arrive/leave. Twice a week (on average)' },
          { name: 'Package collection', time: '10 min', desc: 'Every day, once (on average)' },
          { name: 'Create dinner groups', time: '20 min', desc: "Create the week's dinner groups. Once a week" },
          { name: 'Pick up groceries from Carrefour (Pontevedra)', time: '60 min', when: 'Wednesday' },
          { name: 'Empty laundry dehumidifier (afternoon)', time: '5 min', when: 'Monday to Friday at 16:00' },
          { name: 'Empty laundry dehumidifier (night)', time: '5 min', when: 'Monday to Friday at 22:00' },
          { name: 'Check outdoor spaces (weekdays)', time: '30 min', desc: 'Gazebo, patio, pool, forest → lost & found. Monday to Friday before 10:00' },
          { name: 'Check outdoor spaces (weekend)', time: '30 min', desc: 'Gazebo, patio, pool, forest → lost & found. Saturday and Sunday before 10:00' },
          { name: 'House meeting', time: '30 min', desc: 'Weekly family meeting. Monday at 21:00' },
          { name: 'Community building activities', time: '90 min', desc: 'Tue or Thu 1h + weekend activity max 2h. Twice a week (on average)' },
          { name: 'Weekly team meeting', time: '60 min', desc: 'Meeting with Agus and Afri to plan the week. Monday at 17:00' },
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
    summary: 'Weekly 12h 30min · Biweekly 1h 30min · Monthly 1h',
    tasks: {
      weekly: {
        total: 'Weekly total (by actual frequency): 12h 30min',
        items: [
          { name: 'Morning kitchen tasks (weekdays)', time: '60 min × 5 = 5h/week', desc: 'Bins, dishwasher, pots, cups, drainers, check fridge. Monday to Friday before 10:00' },
          { name: 'Check fridge for spoiled food', time: '30 min', desc: 'Throw out food that has been open too long or smells bad (free food + coliver fridge). Once a week' },
          { name: 'Coliver offboarding', time: '20 min × 2 = 40 min/week', desc: 'Remove food from fridge/pantry, clean shelf, put napkin in laundry. Twice a week (on average)' },
          { name: 'Gardening management', time: '180 min', desc: 'Once a week' },
          { name: 'Pool management', time: '2h/week', desc: 'Once a week' },
          { name: 'Sheep management', time: '30 min', desc: 'Once a week' },
          { name: 'Bread management', time: '10 min × 5 = 50 min/week', desc: 'Take bread out of freezer, check what is needed, place order. Monday to Friday before 10:00' },
        ],
      },
      biweekly: {
        total: 'Biweekly total: 1h 30min',
        items: [
          { name: 'Clean the dishwasher', time: '30 min', when: 'Biweekly' },
          { name: 'Clean the patio', time: '60 min', when: 'Biweekly' },
        ],
      },
      monthly: {
        total: 'Monthly total: 1h',
        items: [
          { name: 'Check and clean freezer', time: '60 min', when: 'Once a month' },
        ],
      },
      situational: {
        total: 'Total per occurrence: 40min',
        items: [
          { name: 'Put away hammocks and cushions (when rain)', time: '20 min', when: 'When rain is forecast' },
          { name: 'Set out hammocks and cushions (when dry)', time: '20 min', when: 'When no rain forecast' },
        ],
      },
    },
  },
  {
    id: 'carmen',
    name: 'Carmen',
    initial: 'C',
    color: 'carmen',
    summary: 'Weekly 5h 5min · Biweekly 30min · Monthly 2h 10min',
    tasks: {
      weekly: {
        total: 'Weekly total: 5h 5min',
        items: [
          { name: 'Write dinner groups in Excel', time: '10 min', when: 'Once a week' },
          { name: 'Communicate coliver arrivals/departures', time: '20 min', when: 'Every Friday morning' },
          { name: 'Place Carrefour order', time: '60 min', when: 'Tuesday evening' },
          { name: 'Coliver civil registration', time: '10 min', desc: 'Twice a week (on average)' },
          { name: 'Add colivers to Splitwise and Slack', time: '10 min', desc: 'Before each coliver arrives. Twice a week (on average)' },
          { name: 'Coordinate room cleaning with Rosabel', time: '15 min', desc: 'Check who is arriving/leaving and prepare the schedule. Friday before 12:00' },
          { name: 'Manage coliver arrival times', time: '—', desc: 'Verify 3 days before and send WhatsApp/Slack if time not confirmed. Weekly (based on arrivals)' },
          { name: 'Coworker billing and invoice management', time: '1h/week' },
          { name: 'Return packages and place orders', time: '2h/week' },
        ],
      },
      biweekly: {
        total: 'Biweekly total: 30min',
        items: [
          { name: 'Splitwise management', time: '30 min', desc: 'Settle payments when colivers leave, drinks and laundry expenses with Rosabel. Biweekly' },
        ],
      },
      monthly: {
        total: 'Monthly total: 2h 10min',
        items: [
          { name: 'Heat pump programming', time: '10 min', desc: 'Day before arrival: turn on. Departure day: turn off. Common areas: programme once a year, off in summer. Monthly' },
          { name: 'Create signage', time: '2h/month' },
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
    summary: 'Cleaning and supplies · 25h/week',
    tasks: {
      weekly: {
        total: 'Weekly total: 25h',
        items: [
          { name: 'Room cleaning', time: '8h/week', desc: 'Deep clean on coliver arrivals and departures' },
          { name: 'Common area cleaning', time: '6h/week', desc: 'Living room, corridors, walkways' },
          { name: 'Kitchen and fridges', time: '4h/week', desc: 'Kitchen and fridge cleaning (fridge check once a week)' },
          { name: 'Coworking spaces', time: '3h/week', desc: 'Clean coworking spaces' },
          { name: 'Chill house and bathrooms', time: '3h/week', desc: 'Clean chill house and shared bathrooms' },
          { name: 'Weekly cleaning and room supplies order', time: '1h/week' },
        ],
      },
      biweekly: { total: '', items: [] },
      monthly: { total: '', items: [] },
      situational: { total: '', items: [] },
    },
  },
];

export const preseason: ChecklistPage = {
  pageTitle: '🗓 Season opening',
  subtitle: 'Checklist to prepare the coliving reopening. Tick each task when done.',
  suppliesLinkLabel: '→ View supplies list',
  groups: [
    {
      person: 'bari',
      label: 'Bari',
      items: [
        { task: 'Check that the Slack invitation link has not expired' },
        { task: 'Verify that the #da-haus channel exists on Slack' },
        { task: 'Prepare photos and sheets for the Anceu Inn' },
        { task: 'Post on Instagram announcing the reopening' },
        { task: 'Check opening supplies list', href: '/en/suministros' },
      ],
    },
    {
      person: 'carmen',
      label: 'Carmen',
      items: [
        { task: 'Reset Splitwise balances to 0' },
        { task: 'Verify that the Guardia Civil registration system is still active' },
        { task: 'Check that the shopping Excel (Google Sheets) is up to date and working' },
        { task: 'Place the first Carrefour order for the opening' },
        { task: 'Plan dinner groups for the first week' },
        { task: 'Schedule the first house meeting' },
      ],
    },
    {
      person: 'se',
      label: 'Se',
      items: [
        { task: 'Check the pool', note: 'Water chemistry and cleanliness' },
        { task: 'Check hammocks and cushions', note: 'Condition and cleanliness' },
        { task: 'Check the first-aid kit', note: 'Stock and expiry dates' },
        { task: 'Check atelier materials' },
        { task: 'Check the fridges', note: 'Switched on, correct temperature, clean' },
        { task: 'Check the freezer', note: 'Clean and empty' },
        { task: 'Check the dishwasher', note: 'Filter, salt and tablets' },
      ],
    },
  ],
};

export const supplies: ChecklistPage = {
  pageTitle: '📦 Supplies',
  subtitle: 'Supplies to check weekly. Tick what is in stock.',
  groups: [
    {
      label: 'Kitchen basics',
      items: [
        { task: 'Coffee' },
        { task: 'Tea / herbal infusions' },
        { task: 'Sugar' },
        { task: 'Milk' },
        { task: 'Olive oil' },
        { task: 'Salt' },
        { task: 'Bread (frozen)' },
        { task: 'Baking paper' },
        { task: 'Bin bags (small, medium, large)' },
        { task: 'Cloths and sponges' },
        { task: 'Kitchen roll' },
      ],
    },
    {
      label: 'Dishwasher',
      items: [
        { task: 'Dishwasher tablets' },
        { task: 'Dishwasher salt' },
        { task: 'Rinse aid' },
      ],
    },
    {
      label: 'Drinks',
      items: [
        { task: 'Coca-Cola' },
        { task: 'Shandy' },
        { task: 'Beer' },
        { task: 'Ice creams (1€)' },
      ],
    },
    {
      label: 'Bathrooms & rooms',
      items: [
        { task: 'Toilet paper' },
        { task: 'Hand soap (dispensers)' },
        { task: 'Tea tree soap (rooms)' },
        { task: 'Shower gel / shampoo' },
      ],
    },
    {
      label: 'General cleaning',
      items: [
        { task: 'Multi-purpose cleaner' },
        { task: 'Bathroom / toilet cleaner' },
        { task: 'Floor cleaner' },
        { task: 'Kitchen degreaser' },
        { task: 'Cleaning gloves' },
      ],
    },
    {
      label: 'Laundry',
      items: [
        { task: 'Washing machine detergent' },
        { task: 'Fabric softener' },
      ],
    },
  ],
};
