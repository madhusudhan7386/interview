import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  userList :any = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.api();
  }


  api(){
this.http.get('assets/data.json').subscribe(res=>{
this.userList = res;

})
  }

}
