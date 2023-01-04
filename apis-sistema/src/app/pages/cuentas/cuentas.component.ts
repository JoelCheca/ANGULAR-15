import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cuentas } from 'src/app/entities/cuentas';
import { Operaciones } from 'src/app/entities/operaciones';
import { CuentasService } from 'src/app/services/cuentas.service';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {
  listaCuentas: Cuentas[]|undefined;
  cuentasDepositar: Cuentas | undefined;
  columnaOrden: String ="Saldo";
  reversa: boolean =false;
  mensaje: Cuentas[];

  constructor(private cuentasServicio: CuentasService) { }



  cuentasUpdateForm = new FormGroup({
    Id: new FormControl(),
    Monto: new FormControl(),
    Fecha: new FormControl(),
    IdTarjeta: new FormControl(),
    IdCuentaOri: new FormControl(),
    IdCuentaDst: new FormControl(),
    Tipo: new FormControl(),

  })
  

  transferirInsertForm = new FormGroup({
    Monto: new FormControl(),
    Fecha: new FormControl(),
    IdTarjeta: new FormControl(),
    IdCuentaOri: new FormControl(),
    IdCuentaDst: new FormControl(),
    tipo: new FormControl(),

  })

  operacion : Operaciones = new Operaciones();

  ngOnInit(): void {
    this.cuentasServicio.cuentasSelect().subscribe(      
      (res)=>{
        console.log(res)
        this.listaCuentas = JSON.parse(JSON.stringify(res))      
      }
    )
  }

  operacionesTransferir(){  
    this.transferirOperacion();
    
  }


  transferirOperacion(){
    this.cuentasServicio.cuentasTransferir(this.operacion).subscribe(
      res =>{
           
        this.transferirInsertForm.reset();  
        this.mensaje =JSON.parse(JSON.stringify(res)) ;
        document.getElementById("btn-cerrar-insert")!.click()        
        console.log(res)  
        this.ngOnInit();    
      }
    );
  }

  depositarCuenta(item: Cuentas) {
    console.log(item);
    this.cuentasDepositar = item;

  }
    //depositar  cuenta
    cuentasUpdateDepositar(values: any) {
      console.log(values);
      this.cuentasServicio.cuentasUpdateDepositar(values.Id=(values.IdCuentaDst),values.tipo=('DEPOSITO'), values).subscribe(dato => {
        this.cuentasUpdateForm.reset();
        this.mensaje =JSON.parse(JSON.stringify(dato)) ;
        document.getElementById("btn-cerrar-update")!.click()
        this.ngOnInit();    
      });
     
    }


     //depositar  cuenta
     cuentasUpdateRetirar(values: any) {
      console.log(values);
      this.cuentasServicio.cuentasUpdateRetirar(values.Id=(values.IdCuentaDst),values.tipo=('RETIRO'), values).subscribe(dato => {
        this.cuentasUpdateForm.reset();
        this.mensaje =JSON.parse(JSON.stringify(dato)) ;
        document.getElementById("btn-cerrar-retirar")!.click()
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
