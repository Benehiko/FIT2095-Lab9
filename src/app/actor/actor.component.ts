import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../database.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  actorsDB: any[] = [];
  section = 1;
  fullName = '';
  bYear = 0;
  actorId = '';

  constructor(private dbService: DatabaseService) {
  }

  // Get all Actors
  onGetActors() {
    this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
  }

  // Create a new Actor, POST request
  onSaveActor() {
    const obj = {name: this.fullName, bYear: this.bYear};
    this.dbService.createActor(obj).subscribe(result => {
      this.onGetActors();
    });
  }

  // Update an Actor
  onSelectUpdate(item) {
    this.fullName = item.name;
    this.bYear = item.bYear;
    this.actorId = item._id;
  }

  onUpdateActor() {
    const obj = {name: this.fullName, bYear: this.bYear};
    this.dbService.updateActor(this.actorId, obj).subscribe(result => {
      this.onGetActors();
    });
  }

  // Delete Actor
  onDeleteActor(item) {
    this.dbService.deleteActor(item._id).subscribe(result => {
      this.onGetActors();
    });
  }

  // This lifecycle callback function will be invoked with the component get initialized by Angular.
  ngOnInit() {
    this.onGetActors();
  }

  changeSection(sectionId) {
    this.section = sectionId;
    this.resetValues();
  }

  resetValues() {
    this.fullName = '';
    this.bYear = 0;
    this.actorId = '';
  }

}
