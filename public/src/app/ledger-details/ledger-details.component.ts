import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-ledger-details',
  templateUrl: './ledger-details.component.html',
  styleUrls: ['./ledger-details.component.css']
})
export class LedgerDetailsComponent implements OnInit {
  oneObj: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getOneTrans()
  }
  getOneTrans(){
    let obs = this._httpService.getOneTransaction()
    this.oneObj = obs
    // console.log("This is what we get back when we land on this page", obs)
  }
}
