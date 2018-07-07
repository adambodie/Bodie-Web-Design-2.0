import { Component, OnInit } from '@angular/core';
import {PicturesService} from '../services/pictures.service';
import {Picture} from '../../properties/picture';

@Component({
  selector: 'app-picture-week',
  templateUrl: './picture-week.component.pug',
  styleUrls: ['./picture-week.component.scss']
})
export class PictureWeekComponent implements OnInit {

  constructor(private picturesService: PicturesService ) { }
  pictures: Picture[];
  image = '';
  title = '';
  week = '';
  description = '';
  location = '';
  state = '';
  ngOnInit() {
    this.getPictures();
  }
  getPictures(): void {
    this.pictures = this.picturesService.getPictures();
    this.image = this.pictures[this.pictures.length - 1].image;
    this.title = this.pictures[this.pictures.length - 1].title;
    this.description = this.pictures[this.pictures.length - 1].description;
    this.week = this.pictures[this.pictures.length - 1].week;
    this.location = this.pictures[this.pictures.length - 1].location;
    this.state = this.pictures[this.pictures.length - 1].state;
  }
  updates = [
    { title: "Bellingham Native", description: "Launched April 23, 2018, built with React Native"},   
    { title: "Read Your Fortune Cookie", description: "Upgraded to Angular & TypeScript, January 28, 2018"},
    { title: "Kevin's Fun Facts", description: "Launched January 1, 2018, built with Android and Kotlin"}, 
    { title: "NFL Passer Rating", description: "Reconfigured components to allow flexibility of button colors, January 7, 2018"},      
    { title: "Dreidel Duel", description: "Added new feature, converted syntax to ES6, January 1, 2018" },       
    { title: "Reno Nice 'n' Cool", description: "Launched version 2.0 December 11, 2017, built with Vue.js" },      
    { title: "Adam's Adventures", description: "Launched November 23, 2017, built with React" },
    { title: "Adam's Wild Wild West", description: "Launched October 1, 2017, built with React"}
  ]  
}
