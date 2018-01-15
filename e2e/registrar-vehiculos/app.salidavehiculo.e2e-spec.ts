import { AppPageVehiculo } from "./app.po";
import { element, by } from "protractor";

describe('parqueadero salida vehiculo',()=>{
    let appPageSalidaVehiculo :AppPageVehiculo;
    let btnsalida,btnconfirmarsalida;
    beforeEach( ()=>{
        appPageSalidaVehiculo = new AppPageVehiculo();
        btnsalida=element(by.className('btn btn-primary'));
        btnconfirmarsalida = element(by.className('btn btn-success'));
    });

    it('salidaVehiculo',()=>{
        appPageSalidaVehiculo.navigateToListaVehiculo();
        btnsalida.click().then(function(){
            btnconfirmarsalida.click().then(function(){
                expect(appPageSalidaVehiculo.getParagraphText()).toEqual('salida del vehiculo correctamente');
            });
        });
    });
});
