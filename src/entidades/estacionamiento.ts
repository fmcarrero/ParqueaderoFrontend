import { Vehiculo } from "./vehiculo";
import { Time } from "@angular/common/src/i18n/locale_data_api";

export class Estacionamiento {
    placa : string;
    vehiculo : Vehiculo; 
    fechaHoraInicio : Date ; 
    observacion : string;
}