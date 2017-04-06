import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})

export class AdminComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }
  submitForm(title: string, starter: string, description: string, goal: number) {
    var newProject: Project = new Project(title, starter, description, goal);
    this.projectService.addProject(newProject);
    console.log(newProject);
  }

}
