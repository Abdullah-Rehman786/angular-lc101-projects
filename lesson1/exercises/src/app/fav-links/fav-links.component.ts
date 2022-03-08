import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favLinks: string[] = ['https://www.random.org/colors/hex','https://trex-runner.com/','https://www.nytimes.com/games/wordle/index.html'];

  // favoritelinks: object = {
  //   {
  //     text:"Random Colors",
  //     url:"https://www.random.org/colors/hex"
  //   },
  //   {
  //     text:"Dino Game",
  //     url:"https://trex-runner.com/"
  //   }
  // }

  constructor() { }

  ngOnInit() {
  }

}
