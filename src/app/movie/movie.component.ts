import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../database.service';
import {SelectionService} from '../selection.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movieDB: any[] = [];
  movieTitle = '';
  movieYear = 0;
  movieSection = 1;

  constructor(private dbService: DatabaseService, private selectionService: SelectionService) {
  }

  ngOnInit() {
    this.getSelection();
    this.onGetMovies();
  }

  onAddMovie() {
    const obj = {title: this.movieTitle, year: this.movieYear};
    this.dbService.createMovie(obj).subscribe(result => {
      this.onGetMovies();
    });
  }

  onGetMovies() {
    this.dbService.getMovies().subscribe((data: any[]) => {
      this.movieDB = data;
    });
  }

  onAddActor(movieId, actorId) {
    const obj = {movieId: movieId, actorId: actorId};
    this.dbService.addActor(obj).subscribe(result => {
      this.onGetMovies();
    });
  }

  onDeleteMovie(id) {
    this.dbService.deleteMovie(id).subscribe(result => {
      this.onGetMovies();
    });
  }

  getSelection() {
    this.movieSection = this.selectionService.getSelection();
    this.resetValues();
  }

  resetValues() {
    this.movieTitle = '';
    this.movieYear = 0;
  }
}

