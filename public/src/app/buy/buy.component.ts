import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  value = 0;
  amount = 0;
  bought = 0;
  constructor(private _httpService:HttpService) { }

  ngOnInit() {
    this.componentGetData()
  }
  componentGetData() {
    let obs = this._httpService.getData()
    this.value = obs.value;
    this.amount = obs.amount;
  }
  componentBuyCoin(){
    let obs = this._httpService.buyCoin(this.bought)
    this.value = obs.value;
    this.amount = obs.amount;
  }
}
