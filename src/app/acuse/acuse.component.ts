import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-acuse',
  templateUrl: './acuse.component.html',
  styleUrls: ['./acuse.component.css']
})
export class AcuseComponent implements OnInit {
  private url="http://localhost:3000/";
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  onSubmit(Filterform:NgForm){
    console.log(Filterform)
    console.log(Filterform.value)
    return this.http.post(this.url,Filterform.value, { headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' }, responseType: 'text'  })
    .subscribe( resp =>{
        console.log(resp);
    });  
  }
}
