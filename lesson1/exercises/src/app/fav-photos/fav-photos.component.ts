import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Images';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://4.bp.blogspot.com/-lH8lmsyN9kE/UAkL17rkI1I/AAAAAAAAAbo/Nwc4phMuxuE/s1600/pipe+organ.jpg';
  image3 = 'https://www.klaviano.com/files/images/double%20keyboard.jpg';

  constructor() { }

  ngOnInit() {
  }

}