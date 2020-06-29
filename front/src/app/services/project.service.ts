import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects: Project[] = [];

  constructor() {}

  add(project: Project) {
    this.projects.push(project);
  }
}
