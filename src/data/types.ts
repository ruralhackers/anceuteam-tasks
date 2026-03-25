export interface Task {
  name: string;
  time: string;   // display string as-is: "30 min", "2h/sem", "—"
  desc?: string;
  when?: string;
}

export interface TaskGroup {
  items: Task[];
  total: string;  // full translated display string, e.g. "Total semanal: 14h 30min"
}

export interface Person {
  id: 'bari' | 'se' | 'carmen' | 'rosabel';
  name: string;
  initial: string;
  color: string;  // matches CSS variable name: "bari" | "se" | "carmen" | "rosabel"
  summary: string;
  tasks: {
    weekly: TaskGroup;
    biweekly: TaskGroup;
    monthly: TaskGroup;
    situational: TaskGroup;
  };
}

export interface UI {
  siteTitle: string;
  subtitle: string;
  choosePersonLabel: string;
  searchPlaceholder: string;
  searchAriaLabel: string;
  searchNoResults: string;
  backLabel: string;
  teamNavLabel: string;
  weekly: string;
  biweekly: string;
  monthly: string;
  situational: string;
  noteLabel: string;
  noteText: string;
  footerText: string;
  pageTitlePersonTemplate: string;  // use "{name}" as placeholder
  preseasonNav: string;
  suppliesNav: string;
  checklistResetLabel: string;
  checklistProgressTemplate: string;  // use "{checked}" and "{total}" as placeholders
}

export interface ChecklistItem {
  task: string;
  note?: string;
  href?: string;
}

export interface ChecklistGroup {
  person?: 'bari' | 'se' | 'carmen' | 'rosabel';
  label: string;
  items: ChecklistItem[];
}

export interface ChecklistPage {
  pageTitle: string;
  subtitle: string;
  suppliesLinkLabel?: string;
  groups: ChecklistGroup[];
}
