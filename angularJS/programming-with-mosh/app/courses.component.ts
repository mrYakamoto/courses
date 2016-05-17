// import decorator 'component'
import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'

// decorators are prefixed w/ @
@Component({
  // selector specifies the css selector for host element. when angular sees this host element it will insert the html
  selector: 'courses',
  // template specifies html to be inserted into the domt
  template: `
    <h2>Courses</h2>
    {{ title }}
    <input type="text" autoGrow />
    <ul>
      <li *ngFor="#course of courses">
        {{ course }}
      </li>
    </ul>
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})

export class CoursesComponent {
  title = "The title of the courses page";
  courses;

   constructor(courseService: CourseService){
     this.courses = courseService.getCourses();
   }
}