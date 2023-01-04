import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Operaciones } from 'src/app/entities/operaciones';
import { OperacionesService } from 'src/app/services/operaciones.service';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent implements OnInit {
  listaOperaciones: Operaciones[]|undefined;
  depositar:Operaciones[] |undefined;;
  datos: Operaciones[] | undefined;
  operacionesEliminar: Operaciones | undefined;
  textoBuscar: String="";

  columnaOrden: String ="Monto";
  reversa: boolean =false;
  pagina: number=1;

  transferirInsertForm = new FormGroup({
    Monto: new FormControl(),
    Fecha: new FormControl(),
    IdTarjeta: new FormControl(),
    IdCuentaOri: new FormControl(),
    IdCuentaDst: new FormControl(),
    tipo: new FormControl(),

  })
  
  depositarInsertForm = new FormGroup({
    Id: new FormControl(),
    Monto: new FormControl(),
    Fecha: new FormControl(),
    IdTarjeta: new FormControl(),
    IdCuentaOri: new FormControl(),
    IdCuentaDst: new FormControl(),
    Tipo: new FormControl(),

  })

  operacion : Operaciones = new Operaciones();

  constructor(private operacionesService:OperacionesService) { }

  ngOnInit(): void {

    this.operacionesService.operacionesSelect().subscribe(      
      (res)=>{
        console.log(res)
        this.listaOperaciones = JSON.parse(JSON.stringify(res)) 
        this.datos = JSON.parse(JSON.stringify(res))     
      }
    )
  }




  eliminarOperaciones(item:Operaciones){  
    //console.log(item);    
    this.operacionesEliminar = item;
    
  }


  //eliminar  empleado
 operacionEliminar(values: any) {
      //console.log(item); 
      this.operacionesService.operacionesDelete(values.Id).subscribe(dato => {
        this.ngOnInit();
      });
  
    }
    
      
      setOrder=(value: String)=>{
        
        if(this.columnaOrden=value){
          this.reversa=!this.reversa
        }
        else{
          this.columnaOrden = value
        };
      }

}
