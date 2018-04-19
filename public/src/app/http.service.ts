import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  value = 20;
  amount = 10;
  package = {value: this.value, amount: this.amount, trans:[]}
  constructor(private _http:HttpClient) { 
  }
  getData(){
    // console.log("Get Data triggered!")
    return this.package
  }

  sellCoin(num){
    // console.log("We hit sellCoin", num)  
    this.package['amount'] -= num
    this.package['value'] -= num
    this.package['trans'].push("Sold")
    return this.getData()
  }
  buyCoin(num){
    this.package['amount'] += num
    this.package['value'] += num
    this.package['trans'].push("Bought")
    return this.getData()
  }
}
