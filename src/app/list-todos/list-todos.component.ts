import { Component, OnInit } from '@angular/core';
export class Todo {
  constructor(public id: number,
    public description: string,
    public targetedDate: Date,
    public done: boolean) { }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [
    new Todo(1,"learn angular",new Date(),false),
    new Todo(2,"workout ",new Date(),false),
    new Todo(3,"read",new Date(),false),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
