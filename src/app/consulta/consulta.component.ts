import { Component, OnInit, ɵConsole } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})

export class ConsultaComponent implements OnInit {

  private url="http://localhost:3000/";
  todoArray=[];
  public button:boolean = false;
  public alert:boolean = false;
  public alert2:boolean = false;
  public hid:boolean = false;
  public list:boolean=false;
  clients: any[];
  dataTable: any;
  constructor(private http: HttpClient,private chRef: ChangeDetectorRef) { }
 
  addTodo(value){
    try{
      if(value!==null){ 
        if(value.length<12){
          this.alert=true;
        }else{
          if(this.todoArray.length===19){
            this.hid=true;
            this.alert2=true;
          }
          this.todoArray.push(value);
          this.button=true;
          this.alert=false;
        }
      }else{
        this.alert=true;
      }
    }catch(error){console.log(error)}
   }
 
  deleteItem(todo){   
    for(let i=0 ;i<= this.todoArray.length ;i++){
      if(todo== this.todoArray[i]){
        this.todoArray.splice(i,1); 
        this.alert=false;
      }   
    }
    if(this.todoArray.length===0){
      this.button=false;   
    }else if(this.todoArray.length<20){
      this.hid=false;
      this.alert2=false;
    }  
  }
     
  todoSubmit(){
    if((this.todoArray).length==0){
      alert("INGRESA UN CURP")
    }else{
      var JsonPost = this.todoArray;
      this.todoArray=[];
      this.button=false;
      this.alert=false;
      this.hid=false;
      this.alert2=false;
      
      return this.http.post(this.url,JsonPost, { headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' },responseType: 'text'})
      .subscribe( resp =>{
        console.log(resp);
//Primera lista
        this.list=true;
        this.http.get('https://5a5a9e00bc6e340012a03796.mockapi.io/clients').subscribe((data: any[]) => {
        this.clients = data;
        this.chRef.detectChanges();
        const table: any = $('.display');
        this.dataTable = table.DataTable({
        "language": {
            "sProcessing":     "Procesando...",
            "sLengthMenu":     "Mostrar _MENU_ registros",
            "sZeroRecords":    "No se encontraron resultados",
            "sEmptyTable":     "Ningún dato disponible en esta tabla",
            "sInfo":           "Registros del _START_ al _END_ de _TOTAL_",
            "sInfoEmpty":      "Registros del 0 al 0 de 0",
            "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix":    "",
            "sSearch":         "Buscar:",
            "sUrl":            "",
            "sInfoThousands":  ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst":    "Primero",
                "sLast":     "Último",
                "sNext":     "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
               "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }},  
      scrollX: true,
      responsive: true});
    });
//Segunda Lista

      },error=>{
        console.log(error);
          $('#errorModal').modal('show')});   
    }
  }
 
   ngOnInit() {
     
   }
}
