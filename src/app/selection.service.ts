import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  constructor() {
  }

  static selection;

  changeSelection(selectionID) {
    SelectionService.selection = selectionID;
    console.log(SelectionService.selection);
    return true;
  }

  getSelection() {
    console.log(SelectionService.selection);
    return SelectionService.selection;
  }
}
