import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects;
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.projectService.getProjects().subscribe( (projects) => {
      this.projects = projects;
      console.log(projects);
    }, error => {
      console.log(error);
    });
  }
}
