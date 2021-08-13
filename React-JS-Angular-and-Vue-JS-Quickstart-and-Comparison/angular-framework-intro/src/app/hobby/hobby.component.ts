import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'hobby-component',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent {
  @Input() hobbyName:string = '';
  @Output() hobbyDeleted = new EventEmitter<string>();

  onHobbyDeleted(hobbyName:string) {
    this.hobbyDeleted.emit(hobbyName);
  }
  // Hobbies exercise
};
