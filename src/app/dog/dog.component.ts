import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  dog?: Dog;

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
  }

  getDog() {
    this.dogService.getDog().subscribe(dog => this.dog = dog)
  }

}
