import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Ionic2RatingModule } from "ionic2-rating";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rate : any = 0;
  constructor(public navCtrl: NavController) {

  }

  onModelChange(event){
  	this.rate = event;
  	console.log(event);
  }

}
