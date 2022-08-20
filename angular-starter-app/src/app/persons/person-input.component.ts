import { Component, EventEmitter, Output } from "@angular/core";
import { PersonsService } from "./persons.service";

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
  enteredPersonName = '';

  constructor(private personService: PersonsService) {

  }
  onCreate() {
    console.log('created person: ', this.enteredPersonName);
    this.personService.addPerson(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
