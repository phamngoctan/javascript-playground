import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  title = 'angular-framework-intro';
  name = 'Max';
  elements:number[] = [];
  message = '';
  
  // Hobbies exercise
  hobbies:string[] = ['Cooking', 'Sports'];
  hobbyInput = '';
  hobbyDeletedFlag = false;

  onChangeName() {
    this.name = 'AnnA';
  }

  onAddElement() {
    // console.log(typeof this.title);
    this.elements.push(this.elements.length + 1);
  }

  getColor(element:number) {
    return element % 2 === 0 ? 'green' : 'orange';
  }

  onUserWasClicked(userName: string) {
    alert(userName);
  }

  // Hobbies exercise
  onAddingNewHobby() {
    if (!this.hobbyInput) {
      return;
    }

    this.hobbies.push(this.hobbyInput);
    this.hobbyInput = '';
    // console.log(this.hobbies);
  }
  onHobbyDeleted(deletedHobby:string) {
    // for (let item of this.hobbies) {
    // console.log(deletedHobby);
    // for (let i in this.hobbies) {
    //   // console.log(typeof i);
    //   if (this.hobbies[i] == deletedHobby) {
    //     console.log(i);
    //     this.hobbies.splice(Number(i), 1);
    //     break;
    //   }
    // }

    const position = this.hobbies.indexOf(deletedHobby);
    this.hobbies.splice(position, 1);
    this.hobbyDeletedFlag = true;
  }
}
