import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  id = 0
  package = {value: 20, amount: 10, trans:[]}
  oneObj: any;
  constructor(private _http:HttpClient) { 
  }
  getData(){
    return this.package
  }

  mineCoin(){
    this.package['amount']++
    // this.package['id']++
    this.id++
    this.package['trans'].push({id: this.id, action: "Mine", value: this.package['value'], amount: this.package['amount']})
    return this.getData()
  }
  sellCoin(num){
    // console.log("We hit sellCoin", num)  
    this.id++
    this.package['trans'].push({id: this.id, action: "Sold", value: this.package['value'], amount: num})
    this.package['amount'] -= num
    this.package['value']--
    return this.getData()
  }
  buyCoin(num){
    this.id++
    this.package['trans'].push({id: this.id, action: "Bought", value: this.package['value'], amount: num})
    this.package['amount'] += num
    this.package['value']++
    return this.getData()
  }
  getTrans(){
    // console.log("We hit the transactions")
    return this.getData()
  }
  getDetails(obj){
    this.oneObj = obj
  }

  getOneTransaction(){
    return this.oneObj
  }

}
