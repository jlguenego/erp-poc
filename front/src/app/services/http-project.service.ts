import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from './project.service';

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
    this.http.get('http://localhost:3000/ws/chantier').subscribe();
  }
}
