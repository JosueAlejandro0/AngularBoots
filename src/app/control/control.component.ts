import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  private url="http://localhost:3000/";
  public list:boolean=false;
  clients: any[];
  dataTable: any;
  constructor(private http: HttpClient,private chRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  onSubmit(Filterform:NgForm){
    console.log(Filterform)
    console.log(Filterform.value)
    
    return this.http.post(this.url,Filterform.value, { headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' }, responseType: 'text'  })
    .subscribe( resp =>{
        console.log(resp);

        this.list=true;
        this.http.get('https://5a5a9e00bc6e340012a03796.mockapi.io/clients').subscribe((data: any[]) => {
        this.clients = data;
        this.chRef.detectChanges();
        const table: any = $('#table');
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
      dom: 'Bfrtip',
      buttons: ['csv']});
    });


    });  
  }
}
