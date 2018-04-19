import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  value = 0;
  amount = 0;
  selling = 0;
  msg = '';
  constructor(private _httpService: HttpService) { }
  ngOnInit(){
    // console.log("We hit component of sell!")
    this.componentGetData()
  }
  componentGetData(){
    let obs = this._httpService.getData()
    this.value = obs.value;
    this.amount = obs.amount;
  }
  componentSellCoin(){
    if(this.selling > this.amount){
      // console.log("Insufficient Funds")
      this.msg = "Insufficient Funds"
    } else {
      let obs = this._httpService.sellCoin(this.selling)
      // console.log("We now hit Sell Coin", this.selling)
      this.msg = '';
      this.value = obs.value;
      this.amount = obs.amount;
    }
  }
}
