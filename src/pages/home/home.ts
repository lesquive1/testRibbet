import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: any;
  cards: any;
  
  //public products:Array<Product> = [];

  segmentoptions: string = "foryou";

  constructor(public navCtrl: NavController,
              public http: Http) {
    //https://ribbettest.herokuapp.com
    this.http.get('https://ribbettest.herokuapp.com/api').map(res => res.json()).subscribe(data => {
        this.posts = data.reward_points;
        this.cards = data.cards;
        console.log(this.cards);
    });

  }

}
