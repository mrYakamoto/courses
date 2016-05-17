import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'

@Component({
    selector: 'my-app',
    template: `
    <h1>Hello Angular</h1>
    <courses></courses>
    <authors></authors>`,
    // specefy directives for components
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent { }