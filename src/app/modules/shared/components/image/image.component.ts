import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent  {
  @Input() imgSrc: string = 'https://via.placeholder.com/50';
  @Input() imgAlt: string = 'Image';
  isImgLoading = true;
  constructor() { }


}
