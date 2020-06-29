import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects$ = new BehaviorSubject<Project[]>(this.getProjects());

  constructor() {
    this.projects$.subscribe((projects) => {
      localStorage.setItem('projects', JSON.stringify(projects));
    });
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

  add(project: Project): void {
    const projects = this.projects$.value;
    projects.push(project);
    this.projects$.next(projects);
  }

  remove(selectedProjects: Project[]) {
    const projects = this.projects$.value;
    selectedProjects.forEach((p) => {
      const index = projects.findIndex((pr) => pr === p);
      if (index === -1) {
        return;
      }
      projects.splice(index, 1);
    });
    this.projects$.next(projects);
  }
}
