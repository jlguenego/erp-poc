import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProjectService } from './project.service';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root',
})
export class HttpProjectService extends ProjectService {
  constructor(private http: HttpClient) {
    super();
    console.log('http service constructor');
    this.refresh();
  }

  refresh() {
    this.http.get<Project[]>('/ws/chantier').subscribe({
      next: (data) => {
        console.log('data: ', data);
        this.projects$.next(data);
      },
      error: (err) => {
        console.log('err: ', err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  add(project: Project): void {
    super.add(project);
    this.http
      .post<Project>('/ws/chantier', project)
      .subscribe({
        next: (data) => {
          console.log('data: ', data);
          this.refresh();
        },
        error: (err) => {
          console.log('err: ', err);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }

  remove(selectedProjects: Project[]) {
    const ids = selectedProjects.map((p) => p.id);
    super.remove(selectedProjects);
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: ids,
    };
    this.http
      .delete<void>('/ws/chantier', options)
      .subscribe({
        next: () => {
          this.refresh();
        },
        error: (err) => {
          console.log('err: ', err);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }
}
