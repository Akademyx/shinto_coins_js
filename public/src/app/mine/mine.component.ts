import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  guess: any;
  number = 8;
  msg = '';
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }
  componentMineCoin(){
    if(this.guess === this.number){
      let obs = this._httpService.mineCoin()
      this.guess = 0;
    } else {
      this.msg = "Incorrect Guess"
    }
  }

}
