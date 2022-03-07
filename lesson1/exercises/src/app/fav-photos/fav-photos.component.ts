import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My favorite photos';
  image1 = '../assets/Milky-Way-in-Antarctica.jpg';
  image2 = `../assets/camp.jpg`;
  image3 = '../assets/CalvinandHobbes.jpg';

  constructor() { }

  ngOnInit() {
  }

}