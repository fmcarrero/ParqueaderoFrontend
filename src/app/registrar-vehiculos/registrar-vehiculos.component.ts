import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../entidades/vehiculo';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TipoVehiculoEnum } from '../../utilEnum/tipovehiculoenum';
import { ParqueaderoService } from '../parqueadero.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-registrar-vehiculos',
  templateUrl: './registrar-vehiculos.component.html',
  styleUrls: ['./registrar-vehiculos.component.css']
})
export class RegistrarVehiculosComponent implements OnInit {
  private Vehiculo : Vehiculo;
  automovilForm: FormGroup;
  automovilList = TipoVehiculoEnum;
  public keys;
  constructor(private fb:FormBuilder,private parqueaderoservice : ParqueaderoService,private toastr: ToastrService) {
    this.keys  = Object.keys(this.automovilList).filter(Number);
   }
  get placa() { return this.automovilForm.get('placa'); }
  get color() { return this.automovilForm.get('color');}
  get cilindraje() { return this.automovilForm.get('cilindraje');}
  get observacion() { return this.automovilForm.get('cilindraje');}
  get tipovehiculo() { return this.automovilForm.get('tipovehiculo');}
  ngOnInit() {
     
    this.automovilForm = this.fb.group ({
      placa: new FormControl('',Validators.required),
      color: new FormControl('',Validators.required),
      cilindraje:  new FormControl('',[Validators.required, Validators.min(1)]),
      observacion: new FormControl('',Validators.required),
      tipovehiculo : new FormControl('',Validators.required),     
    });
  }
  focusOutFunctionplaca(){
    var placavalue = this.automovilForm.value.placa;
    if(placavalue!= ''){
      this.parqueaderoservice.getVehiculo(placavalue).subscribe(
        data =>{
            console.log(data);
            this.automovilForm.setValue({placa :data.placa,
                                        cilindraje: data.cilindraje,
                                        color : data.color,
                                        tipovehiculo : data.idTipoVehiculo,
                                        observacion : ''});            
            this.Vehiculo =data;
        }
      )
    }  
    
  }
  public onFormSubmit() {
    if(this.automovilForm.valid) {
        this.Vehiculo = this.automovilForm.value;
        console.log(this.Vehiculo);
        this.parqueaderoservice.agregarVehiculo(this.Vehiculo).subscribe(
          data => { 
                console.log(data);
                this.toastr.success("se guardo correctamente el vehiculo");
                //this.notificationsService.addInfo("se guardo correctamente el vehiculo");
          },
          err => {console.error(err);
                  this.toastr.error(err.error.message);
                  //this.notificationsService.addError("error");
                  console.log(err);
        }
        );
    }
}
  

}
