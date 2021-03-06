import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Estacionamiento } from '../../entidades/estacionamiento';
import { Subject } from 'rxjs/Subject';
import { ParqueaderoService } from '../parqueadero.service';
import { HttpClient } from '@angular/common/http';
import { appApiResources } from '../app.constants';
import 'rxjs/add/operator/map';
import { TipoVehiculoEnum } from '../../utilEnum/tipovehiculoenum';


@Component({
  selector: 'app-listarvehiculos',
  templateUrl: './listarvehiculos.component.html',
  styleUrls: ['./listarvehiculos.component.css']
})

export class ListarvehiculosComponent implements OnInit {

  TipoVehiculoEnum = TipoVehiculoEnum;
  myValue : TipoVehiculoEnum;
  estacionamiento: Estacionamiento[];
  listado = 'Listado Vehiculos';
  constructor(private parqueaderoservice : ParqueaderoService) { }  
  
  ngOnInit() : void{
    this.getVehiculosEstacionados();
  }

  getVehiculosEstacionados(){
    this.parqueaderoservice.listAllVehiculos()
      .subscribe(        
      data => { this.estacionamiento= data
            console.log(this.estacionamiento);      
                  
          },     
      err => console.error(err),
    
     
    );
  }

}
