import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userData:any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
    console.log(this.getData())
  }

  getData(){

    this.http.get('assets/data.json').subscribe(res => {
      this.userData = res;
    })

  }

}
