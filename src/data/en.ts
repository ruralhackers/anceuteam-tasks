import type { UI, Person, ChecklistPage, TourPage } from './types';

export const ui: UI = {
  siteTitle: 'Anceu Coliving',
  subtitle: 'Team tasks and responsibilities · 2026',
  choosePersonLabel: 'Choose a person to see their tasks',
  searchPlaceholder: 'Search task (e.g. groceries, pool, packages…)',
  searchAriaLabel: 'Search task',
  searchNoResults: 'No tasks found',
  backLabel: '← Back to home',
  teamNavLabel: 'Choose a person from the team',
  weekly: '📅 Weekly tasks',
  biweekly: '🗓️ Biweekly tasks',
  monthly: '📆 Monthly tasks',
  situational: '⚡ Situational tasks',
  noteLabel: 'Note',
  noteText: 'Weekly times are the sum of each task for a single occurrence; the actual workload depends on how many times the task repeats in a week. Tasks with "—" have no time estimate yet.',
  footerText: 'Anceu Coliving · Rural Hackers · Anceu, Ponte Caldelas, Galicia · Internal team document · 2026',
  pageTitlePersonTemplate: '{name} · Anceu Coliving',
  preseasonNav: '🗓 Season opening',
  onboardingNav: '👋 Onboarding tour',
  offboardingNav: '🚪 Offboarding',
  checklistResetLabel: 'Reset',
  checklistProgressTemplate: '{checked} of {total} completed',
};

export const people: Person[] = [
  {
    id: 'volunteers',
    name: 'Volunteer(s)',
    initial: 'V',
    color: 'volunteers',
    summary: '23 weekly tasks · 15h 30min total',
    tasks: {
      weekly: {
        total: 'Weekly total (sum per occurrence): 15h 30min',
        items: [
          { name: 'Coliving shopping list', time: '30 min', desc: 'Coffee, milk, baking paper, etc.', when: 'Friday before 12:00' },
          { name: 'Morning kitchen tasks (weekend)', time: '60 min', desc: 'Bins, dishwasher, cups, free food, coliver fridge doors', when: 'Saturday and Sunday before 10:00' },
          { name: 'Run dishwasher after lunch (weekdays)', time: '10 min', when: 'Monday to Friday at 16:00' },
          { name: 'Run dishwasher after lunch (weekend)', time: '10 min', when: 'Saturday and Sunday at 16:00' },
          { name: 'Send weekly coliving plans on Slack', time: '20 min', when: 'Monday before the house meeting' },
          { name: 'Write weekly coliving plans on whiteboard', time: '30 min', when: 'By Tuesday before 20:00' },
          { name: 'Manage / organise coliving workshops', time: '60 min', desc: 'Operational support to colivers organising workshops. Once a week' },
          { name: 'Be point of contact for colivers', time: '60 min', desc: 'Answer coliver questions. Once a week (on average)' },
          { name: 'Onboarding', time: '60 min', desc: 'Twice a week (on average)', href: '/en/onboarding' },
          { name: 'Instagram posts', time: '120 min', desc: '1 post/week · 5 stories/week' },
          { name: 'Anceu Inn (photo management)', time: '10 min', desc: 'Add/remove photos when colivers arrive/leave. Twice a week (on average)' },
          { name: 'Package collection', time: '10 min', desc: 'Every day, once (on average)' },
          { name: 'Create dinner groups', time: '20 min', desc: "Create the week's dinner groups. Once a week" },
          { name: 'Pick up groceries from Froiz', time: '60 min', when: 'Wednesday' },
          { name: 'Supplies count', time: '60 min', desc: 'Go to suministros.anceu.com and fill in the whole form', when: 'Sunday afternoon', href: 'https://suministros.anceu.com' },
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
          { name: 'Coliver offboarding', time: '20 min × 2 = 40 min/week', desc: 'Remove food from fridge/pantry, clean shelf, put napkin in laundry. Twice a week (on average)', href: '/en/offboarding' },
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
  groups: [
    {
      person: 'volunteers',
      label: 'Volunteer(s)',
      items: [
        { task: 'Check that the Slack invitation link has not expired', href: 'https://join.slack.com/t/anceu/shared_invite/zt-jryrz9dd-WcNbXUaBFdP7niKIJ5EM9A' },
        { task: 'Verify that the #da-haus channel exists on Slack' },
        { task: 'Prepare photos and sheets for the Anceu Inn' },
        { task: 'Post on Instagram announcing the reopening' },
        { task: 'Do opening supplies count', href: 'https://suministros.anceu.com' },
        { task: 'Check coliver food cupboards', note: 'Make sure they are clean' },
        { task: 'Check coliver fridge shelves', note: 'Make sure they are clean' },
        { task: 'Check room number stickers', note: 'Fridge shelves and food cupboards' },
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

export const onboarding: TourPage = {
  pageTitle: '👋 Onboarding tour',
  subtitle: 'Script for the walkthrough with the new coliver. What to teach at each stop (~60 min). Tick each step when you have covered it.',
  steps: [
    {
      place: 'Café (entrance)',
      teach: [
        'The coffee machine has a QR code (how to use it).',
        'Milk is in the fridge to the left of the coffee machine.',
        'Careful when closing the fridge — it often stays slightly open.',
        'Mugs, extra coffee, extra milk, etc. are by the door.',
        'Teas, herbal infusions, etc. are under the bar.',
        'Have them scan the QR to sign up for Slack, Splitwise, and coliving info. There’s a lot of information at the start — walk them through it with you so you can check everything works.',
        'If they’re not familiar with Slack, ask them to check notifications and make sure they’re turned on.',
      ],
    },
    {
      place: 'Call room / mini office',
      teach: [
        'Mainly for video calls.',
        'Point out how nice the view is from the sofa.',
      ],
    },
    {
      place: 'Dining area',
      teach: [
        'Explain the Anceu Inn.',
        'Point out the project posters in the café — they show the impact of the coliving on the village. Worth pausing on why this place matters beyond the house itself.',
        'Mention the walking / hike route posters in case they want to explore on their own.',
        'Say they will take the new coliver’s photo as soon as the tour ends.',
      ],
    },
    {
      place: 'Hallway — dry food & napkins',
      teach: [
        'Dry food goes in the cubbies tagged by room.',
        'We use cloth napkins (above the food cubbies).',
        'They should have the arriving person’s tag.',
      ],
    },
    {
      place: 'Drinks fridge room',
      teach: [
        'Beers and soft drinks: €1.',
        'Explain Splitwise: extra coliving expenses, or when dining out — if someone pays, debts are split with the other colivers.',
      ],
    },
    {
      place: 'Kitchen',
      teach: [
        'Where the magic happens — show the kitchen.',
        'Everything is tagged by name; fridges have one shelf per person.',
        'In a couple of days they will know where things are.',
        'Explain communal dinners (use the posters): tell this person which day they cook this week and with whom.',
        'On their communal dinner day: they cook and they clean.',
        'Dishwasher: cutlery and plates only.',
        'Big or bulky items (pans, pots, lids, boards, large containers, etc.) are washed by hand so they don’t fill the dishwasher.',
        'If they see the dishwasher has already finished, help empty it and let the other colivers know.',
        'For communal dinners, stress healthy cooking: there’s a QR and recipes in the hallway.',
      ],
    },
    {
      place: 'Hallway — kitchen → Chill house',
      teach: [
        'Medicine kit.',
        'Shared hair dryers.',
        'Towels.',
        'Shared products for ticks and mosquitoes.',
        'Lost & found area.',
      ],
    },
    {
      place: 'Chill house',
      teach: [
        'Multi-use space: TV, reading, working, or a nap.',
        'Show the sports / outdoor gear available to use.',
      ],
    },
    {
      place: 'Pool, grounds & small coworking',
      teach: [
        'Pool and the back of the grounds: a place to sit and think.',
        'Remind them to take towels and hang them to dry in the laundry afterwards.',
        'Small coworking: no calls and no dogs.',
      ],
    },
    {
      place: 'Makerspace',
      teach: [
        'We have a 3D printer, a plotter cutter, and plastic-recycling machines (Precious Plastic).',
      ],
    },
    {
      place: 'Large coworking',
      teach: [
        'Calls are allowed here.',
        'Dogs are allowed.',
      ],
    },
    {
      place: 'Freezer — under the coworking',
      teach: [
        'Show the freezer under the coworking.',
        'If they leave food there, they should tag it.',
        'Ice creams: €1.',
      ],
    },
    {
      place: 'Coliver’s room',
      teach: [
        'Take them to that person’s room.',
      ],
    },
  ],
};

export const offboarding: TourPage = {
  pageTitle: '🚪 Offboarding',
  subtitle: 'Team checklist when a coliver leaves (~20 min). Tick each step when done.',
  steps: [
    {
      place: 'Food — fridge and pantry',
      teach: [
        'Clear that person’s fridge shelf and dry-food cubby.',
        'Anything they want to leave → free food fridge. Throw out open or expired food.',
        'Clean the shelf and cubby.',
      ],
    },
    {
      place: 'Cloth napkin',
      teach: [
        'Collect their cloth napkin (name tag) and put it in the laundry.',
      ],
    },
    {
      place: 'Anceu Inn',
      teach: [
        'Remove that person’s photo / sheet from the Anceu Inn.',
      ],
    },
    {
      place: 'Room',
      teach: [
        'Tell Rosabel if a deep clean is needed (arrival/departure).',
      ],
    },
  ],
};

