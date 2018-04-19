import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  transactions: any;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router:Router) { }

  ngOnInit() {
    this.getTransactions()
    this._route.params.subscribe((params: Params)=>console.log(params['id']))
  }
  getTransactions(){
    let obs = this._httpService.getTrans()
    this.transactions = obs.trans
    // console.log("obs is ", obs)
  }

  details(obj){
    console.log(obj)
    let obs = this._httpService.getDetails(obj)
    this._router.navigate([`/transaction/${obj.id}`])
  }
}
