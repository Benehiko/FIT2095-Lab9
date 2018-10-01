import {Component, OnInit} from '@angular/core';
import {SelectionService} from './selection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  section = 1;

  constructor(private selectionService: SelectionService) {
  }

  changeSection(sectionId) {
    this.section = sectionId;
    this.selectionService.changeSelection(sectionId);
  }
}
