export interface Project {
  id?: string;
  code: string;
  label: string;
  status: 'En cours' | 'Cloturé' | 'Devis';
}
