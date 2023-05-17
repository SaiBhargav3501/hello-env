import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'hello-env';
  newapi:any;
  alldata:any;

  constructor(public http:HttpClient){
    
    console.log(environment.apiUrl)
    console.log(environment.common)
    this.newapi=environment.apiUrl
    

    

  }

  ngOnInit(): void {
    this.http.get(this.newapi).subscribe((val)=>{
      this.alldata=val
      
      })
      
  }

  
}
