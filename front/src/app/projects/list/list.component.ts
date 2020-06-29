import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  selectedProjects: Project[] = [];

  constructor(public projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.onRefresh(() => {
      this.selectedProjects.length = 0;
    });
  }

  toggle(p: Project): void {
    console.log('toggle', p);
    const index = this.selectedProjects.findIndex((pr) => pr === p);
    if (index === -1) {
      this.selectedProjects.push(p);
      return;
    }
    this.selectedProjects.splice(index, 1);
  }

  remove() {
    console.log('remove');
    this.projectService.remove(this.selectedProjects);
    this.selectedProjects.length = 0;
  }
}
