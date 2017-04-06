import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ProjectService {
  projects : FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
  }

  updateProject(localUpdatedProject) {
    var projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
    projectEntryInFirebase.update({title: localUpdatedProject.title, starter: localUpdatedProject.starter, description: localUpdatedProject.description, goal: localUpdatedProject.goal});
  }

  deleteProject(localDeletedProject) {
    var projectEntryInFirebase = this.getProjectById(localDeletedProject.$key);
    projectEntryInFirebase.remove();
  }

  getProjectById(projectId: string) {
    return this.angularFire.database.object('projects/' + projectId);
  }
}
