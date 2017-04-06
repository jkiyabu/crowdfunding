import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';
import { ProjectService } from './project.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Pipe({
  name: 'goal',
  pure: false
})
export class GoalPipe implements PipeTransform {
  projects: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');
  }



  transform(input: Project[], desiredGoal) {
    var output: Project[] = [];
    if(desiredGoal === "lowGoal") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].goal <= 1000000) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredGoal === "highGoal") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].goal > 1000000) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
