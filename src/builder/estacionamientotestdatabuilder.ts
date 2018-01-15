
import * as Factory from 'factory.ts'
import { Vehiculo } from '../entidades/vehiculo';
import { Estacionamiento } from '../entidades/estacionamiento';
import { TipoVehiculoEnum } from '../utilEnum/tipovehiculoenum';

export const VehiculoFactory = Factory.makeFactory<Vehiculo>({
    placa  :'wer-456',
    color : 'azul',
    cilindraje : 123,
    idTipoVehiculo :TipoVehiculoEnum.CARRO,
    estacionamiento : new Estacionamiento()
})

export const EstacionamientoFactory =  Factory.makeFactory<Estacionamiento>({
    placa : 'wer-456',
    vehiculo : this.VehiculoFactory ,
    fechaHoraInicio : new Date(),
    observacion : 'ninguna',
    ValorAPagar :0
  });


   