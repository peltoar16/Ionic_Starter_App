import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Subject } from 'rxjs';
@Injectable({providedIn: 'root'})
export class PersonsService{
  personsChanged = new Subject <string[]>();
  persons: string[] = [];

  constructor(private http: HttpClient) {

  }

  fetchPersons() {
    this.http.get<any>('https://swapi.dev/api/people').pipe(map(people => {
      return people.results.map((character: { name: any; }) => character.name);
    })).subscribe(people => {
      console.log('HTTP retrieved people: ', people);
      this.personsChanged.next(people)
    });
  }

  addPerson(name: string) {
    this.persons.push(name);
    this.personsChanged.next(this.persons);
    console.log('persons array: ', this.persons);
  }

  removePerson(name: string) {
    this.persons = this.persons.filter(person => {
      console.log(person);
      return person !== name;
    });
    this.personsChanged.next(this.persons);
  }

}
