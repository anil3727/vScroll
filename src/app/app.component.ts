import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'vScroll';
  data = [];

  constructor(private dataService: DataService){

  }

  ngOnInit(){
    this.dataService.getData().subscribe((res)=>{
      this.data = [...this.data, ...res];
    });
  }
  
}
