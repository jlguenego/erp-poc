import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects: Project[] = this.getProjects();
  protected onRefreshFn: () => void;

  constructor() {
    console.log('start constructor', this.projects);
  }

  getProjects(): Project[] {
    console.log('start getProject');
    const str = localStorage.getItem('projects');
    if (!str) {
      return [];
    }
    const projects = JSON.parse(str);
    return projects;
  }

  save() {
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  add(project: Project): void {
    this.projects.push(project);
    this.save();
  }

  remove(selectedProjects: Project[]) {
    selectedProjects.forEach((p) => {
      const index = this.projects.findIndex((pr) => pr === p);
      if (index === -1) {
        return;
      }
      this.projects.splice(index, 1);
    });
    this.save();
  }

  onRefresh(onRefreshFn: () => void) {
    this.onRefreshFn = onRefreshFn;
  }
}
