import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: any[];
  imagesFound: boolean = false;
  searching: boolean = false;

  handleSuccess(data) {
    this.imagesFound = true;
    this.images = data.hits;
    console.log(data.hits);
  }

  handleError(error) {
    console.log(error);
  }

  constructor(private _imageService: ImagesService) { }

  ngOnInit() {
  }

  searchImages(query:string) {
    this.searching = true;
    return this._imageService.getImage(query).subscribe(
      //data => console.log(data),
      data => this.handleSuccess(data),
      //error => console.log(error),
      error => this.handleError(error),
      () => this.searching = false
      //() => console.log("Request complete!")
    );
  }

}
