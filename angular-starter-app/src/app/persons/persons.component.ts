import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { PersonsService } from "./persons.service";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit, OnDestroy {

  isFetching = false;
  personList: string[] = [];
  private personListSubs: Subscription = new Subscription;

  constructor(private prsService: PersonsService) {
    // this.personList = prsService.persons;
  }

  ngOnInit() {
      this.personListSubs = this.prsService.personsChanged.subscribe(persons => {
        this.personList = persons;
        this.isFetching = false;

      });
      this.isFetching = true;
      this.prsService.fetchPersons();

  }

  ngOnDestroy() {
      this.personListSubs.unsubscribe();
  }

  onremovePerson(personName: string) {
    this.prsService.removePerson(personName);
  }
}
