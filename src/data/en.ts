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
    id: 'uxia',
    name: 'Uxía',
    initial: 'U',
    color: 'uxia',
    summary: 'Operations · Monday–Friday duty',
    tasks: {
      weekly: {
        total: 'Weekly total (sum per occurrence): 7h',
        items: [
          { name: 'Coliving shopping list', time: '30 min', desc: 'Coffee, milk, baking paper, etc.', when: 'Friday before 12:00' },
          { name: 'Run dishwasher after lunch (weekdays)', time: '10 min', when: 'Monday to Friday at 16:00' },
          { name: 'Create dinner groups', time: '20 min', desc: "Create the week's dinner groups. Once a week" },
          { name: 'Pick up groceries from Froiz', time: '60 min', when: 'Wednesday' },
          { name: 'Supplies count', time: '60 min', desc: 'Go to suministros.anceu.com and fill in the whole form', when: 'Sunday afternoon', href: 'https://suministros.anceu.com' },
          { name: 'Empty laundry dehumidifier (afternoon)', time: '5 min', when: 'Monday to Friday at 16:00' },
          { name: 'Empty laundry dehumidifier (night)', time: '5 min', when: 'Monday to Friday at 22:00' },
          { name: 'Check outdoor spaces (weekdays)', time: '30 min', desc: 'Gazebo, patio, pool, forest → lost & found. Monday to Friday before 10:00' },
          { name: 'Check and tidy indoor spaces (weekdays)', time: '30 min', desc: 'Check that nothing is left lying around, sofa cushions are arranged, the Chill House is tidy, and there are no forgotten cups, clothes or objects in common areas. Leave the spaces visually tidy.', when: 'Monday to Friday before 10:00' },
          { name: 'Package collection (weekdays)', time: '10 min', desc: 'Check and collect packages from Monday to Friday' },
          { name: 'Be point of contact for colivers (weekdays)', time: '60 min', desc: 'Answer coliver questions from Monday to Friday' },
          { name: 'Community building activities (rotation)', time: '90 min', desc: 'One weekday activity and one weekend activity. Uxía, Petra and Karen rotate facilitation.' },
          { name: 'Weekly team meeting', time: '60 min', desc: 'Meeting with Agus and Afri to plan the week. Monday at 17:00' },
        ],
      },
      biweekly: { total: '', items: [] },
      monthly: { total: '', items: [] },
      situational: {
        total: 'Total per arrival: 15 min',
        items: [
          { name: 'Prepare fridge shelf and dry-food space for an arrival', time: '15 min', desc: 'Before someone arrives, clean both assigned spaces. For example, if a person is arriving in room 105, the fridge shelf tagged 105 and the dry-food space tagged 105 must be clean.', when: 'Before every arrival' },
        ],
      },
    },
  },
  {
    id: 'petra',
    name: 'Petra',
    initial: 'P',
    color: 'petra',
    summary: 'Community and onboardings · Weekend duty',
    tasks: {
      weekly: {
        total: 'Weekly total (sum per occurrence): 8h 35min',
        items: [
          { name: 'Morning kitchen tasks (weekend)', time: '60 min', desc: 'Empty the dishwasher, take out the bins, throw away spoiled food from the fridges and take cups back to the cafeteria.', when: 'Saturday and Sunday before 10:00' },
          { name: 'Run dishwasher after lunch (weekend)', time: '10 min', when: 'Saturday and Sunday at 16:00' },
          { name: 'Send weekly coliving plans on Slack', time: '20 min', when: 'Monday before the house meeting' },
          { name: 'Send a Slack reminder before the house meeting', time: '10 min', desc: 'Ask anyone who wants to suggest a plan to speak with someone from the team.', when: 'Monday before the house meeting' },
          { name: 'Manage / organise coliving workshops', time: '60 min', desc: 'Operational support to colivers organising workshops. Once a week' },
          { name: 'Onboarding', time: '60 min', desc: 'Lead the first onboardings with Karen and teach her the process. Twice a week (on average)', href: '/en/onboarding' },
          { name: 'Package collection (weekend)', time: '10 min', desc: 'Check and collect packages on Saturday and Sunday' },
          { name: 'Check outdoor spaces (weekend)', time: '30 min', desc: 'Gazebo, patio, pool, forest → lost & found. Saturday and Sunday before 10:00' },
          { name: 'Check and tidy indoor spaces (weekend)', time: '30 min', desc: 'Check that nothing is left lying around, sofa cushions are arranged, the Chill House is tidy, and there are no forgotten cups, clothes or objects in common areas. Leave the spaces visually tidy.', when: 'Saturday and Sunday before 10:00' },
          { name: 'Be point of contact for colivers (weekend)', time: '60 min', desc: 'Answer coliver questions on Saturday and Sunday' },
          { name: 'House meeting', time: '15 min', desc: 'Prepare and facilitate the weekly family meeting. It must not last more than 15 minutes.', when: 'Monday at 21:00' },
          { name: 'Community building activities (rotation)', time: '90 min', desc: 'One weekday activity and one weekend activity. Uxía, Petra and Karen rotate facilitation.' },
          { name: 'Weekly team meeting', time: '60 min', desc: 'Meeting with Agus and Afri to plan the week. Monday at 17:00' },
        ],
      },
      biweekly: { total: '', items: [] },
      monthly: { total: '', items: [] },
      situational: { total: '', items: [] },
    },
  },
  {
    id: 'karen',
    name: 'Karen',
    initial: 'K',
    color: 'karen',
    summary: 'Content, photography and onboarding support',
    tasks: {
      weekly: {
        total: 'Weekly total (sum per occurrence): 6h 10min',
        items: [
          { name: 'Write weekly coliving plans on whiteboard', time: '30 min', when: 'By Tuesday before 20:00' },
          { name: 'Learn and support onboardings', time: '60 min', desc: 'Do the first onboardings with Petra to learn the process', href: '/en/onboarding' },
          { name: 'Instagram posts', time: '120 min', desc: 'Lead content: 1 post/week · 5 stories/week. Make sure photos are uploaded to the Google Photos album.' },
          { name: 'Anceu Inn (photo management)', time: '10 min', desc: 'Add/remove photos when colivers arrive/leave. Twice a week (on average)' },
          { name: 'Community building activities (rotation)', time: '90 min', desc: 'One weekday activity and one weekend activity. Uxía, Petra and Karen rotate facilitation.' },
          { name: 'Weekly team meeting', time: '60 min', desc: 'Meeting with Agus and Afri to plan the week. Monday at 17:00' },
        ],
      },
      biweekly: { total: '', items: [] },
      monthly: { total: '', items: [] },
      situational: {
        total: 'Opening task: 2h',
        items: [
          { name: 'Photograph all Anceu spaces', time: '120 min', desc: 'Take updated photos of all indoor and outdoor spaces and upload them to the Google Photos album.', when: 'During the first week' },
        ],
      },
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
          { name: 'Morning kitchen tasks (weekdays)', time: '60 min × 5 = 5h/week', desc: 'Empty the dishwasher, take out the bins, throw away spoiled food from the fridges and take cups back to the cafeteria.', when: 'Monday to Friday before 10:00' },
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
      person: 'uxia',
      label: 'Uxía',
      items: [
        { task: 'Do opening supplies count', href: 'https://suministros.anceu.com' },
        { task: 'Check coliver food cupboards', note: 'Make sure they are clean' },
        { task: 'Check coliver fridge shelves', note: 'Make sure they are clean' },
        { task: 'Plan dinner groups for the first week' },
      ],
    },
    {
      person: 'petra',
      label: 'Petra',
      items: [
        { task: 'Check that the Slack invitation link has not expired', href: 'https://join.slack.com/t/anceu/shared_invite/zt-jryrz9dd-WcNbXUaBFdP7niKIJ5EM9A' },
        { task: 'Verify that the #da-haus channel exists on Slack' },
        { task: 'Schedule the first house meeting' },
        { task: 'Prepare the first onboarding with Karen' },
      ],
    },
    {
      person: 'karen',
      label: 'Karen',
      items: [
        { task: 'Prepare photos and sheets for the Anceu Inn' },
        { task: 'Post on Instagram announcing the reopening' },
        { task: 'Check room number stickers', note: 'Fridge shelves and food cupboards' },
        { task: 'Photograph all indoor and outdoor spaces at Anceu' },
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
        'Once they’re in Anceu, they’ll be added to #da-haus.',
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
        'Show the shelf with local projects we collaborate with:',
        'Espazo Cube (Ponte Caldelas): cultural activities — they can follow them on Instagram.',
        'Rural Champs: sports, boxing and basketball training.',
        'Yoga with Andrea.',
        'They can contact them directly to ask about classes — they speak English.',
        'Explain the family meeting: every Monday after dinner. It’s a gathering to share the plans happening from Anceu Coliving. Everything is voluntary, and they can propose whatever they’d like before the meeting.',
        'Say they will take the new coliver’s photo as soon as the tour ends.',
      ],
    },
    {
      place: 'Hallway — dry food & napkins',
      teach: [
        'Dry food goes in the cubbies tagged by room.',
        'Keep your pantry space clean — the pantry is cleaned every Monday.',
        'We use cloth napkins (above the food cubbies).',
        'They should have the arriving person’s tag.',
      ],
    },
    {
      place: 'Drinks fridge room',
      teach: [
        'Beers and soft drinks: €1. Wine: €8.',
        'Write a note on the board when you take something.',
        'Explain Splitwise: extra coliving expenses, or when dining out — if someone pays, debts are split with the other colivers.',
        'Shared vegetables and fruit for dinners are here.',
        'Free food fridge — food available for everyone.',
        'Dinner ingredients fridge — please don’t use it; it’s for preparing dinners.',
      ],
    },
    {
      place: 'Kitchen',
      teach: [
        'Where the magic happens — show the kitchen.',
        'Leave the kitchen clean after yourself.',
        'We save leftovers for our neighbor’s pigs.',
        'Empty the sink strainers after washing.',
        'In a couple of days they will know where things are.',
        'Common dinners: Monday, Wednesday and Friday (cafeteria or patio depending on weather).',
        'Common dinners cost €5 per dinner × 3 per week = €15/week (Healthy Co-cooking project).',
        'Free bread is part of the weekly groceries.',
        'Tell this person which day they cook this week and with whom.',
        'On their communal dinner day: they cook and they clean.',
        'Stress healthy cooking: there’s a QR and recipes in the hallway.',
        'One fridge shelf per person — labelled with your room number.',
        'Free food fridge — before you leave, move your food from your shelf to the free food fridge.',
        'Dinner ingredients fridge — please don’t use these, they’re for preparing dinner.',
        'Dishwasher — for dishes, glasses, and cutlery only. Rinse items before loading. Empty it once clean. To start: empty the filter, insert it, press ON, then press Play.',
        'Big or bulky items (pans, pots, lids, boards, large containers, etc.) are washed by hand so they don’t fill the dishwasher.',
        'Recycle your waste: glass — empty and rinse bottles and jars; plastic & aluminium — goes together, needs to be rinsed; paper — must be completely clean (no napkins, no paper coffee cups).',
        'Tap water is drinkable.',
        'Put dry kitchen cutlery and utensils in storage before washing your things.',
      ],
    },
    {
      place: 'Hallway — kitchen → Chill house (creative corridor)',
      teach: [
        'Medicine kit.',
        'White cupboard: beach towels, craft materials, crepe maker, beach fridge, hairdryers, cushions for outdoor chairs.',
        'Shared products for ticks and mosquitoes.',
        'Lost & found box is in the white cupboard.',
        'Anceu book — share your ideas before leaving.',
      ],
    },
    {
      place: 'Cleaning room',
      teach: [
        'Cleaning products, toilet paper, shower gel, and soap are here.',
      ],
    },
    {
      place: 'Chill house',
      teach: [
        'Multi-use space: TV, reading, working, or a nap.',
        'Gym / sports equipment is in the cupboard — show what’s available.',
        'Leave the room as you found it.',
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
      place: 'Freezer — under the coworking',
      teach: [
        'Show the freezer under the coworking (separate from the drinks fridge room).',
        'Any food stored there must be labelled.',
        'Ice creams: €1 and must be written on the board.',
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
        'Keep the space clean and quiet.',
        'Use the shelves to store your things.',
      ],
    },
    {
      place: 'Laundry',
      teach: [
        'Washing machine hours: 11:30 am to 8:00 pm.',
        'Washing: €2 · Machine drying: €1.',
        'Write a note on the board.',
        'Laundry detergents are in the cupboard.',
        'Hammocks and sun beds are available here too.',
      ],
    },
    {
      place: 'Coliver’s room',
      teach: [
        'Take them to that person’s room.',
        'Rooms are cleaned once per week from 10:00 to 12:00.',
        'Galicia has ~70% humidity — use the dehumidifier to keep the room comfortable and mold-free.',
        'The soap is organic tea tree soap, suitable for body and hair.',
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
