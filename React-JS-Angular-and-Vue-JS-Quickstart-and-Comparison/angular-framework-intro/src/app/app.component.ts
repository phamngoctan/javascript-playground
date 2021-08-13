import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-framework-intro';
  name = 'Max';
  elements:number[] = [];

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
}
