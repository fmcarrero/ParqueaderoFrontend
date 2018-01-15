import { AppPageVehiculo } from "./app.po";
import { element, by } from "protractor";


let placa,color, cilindraje, observacion,tipovehiculo,btnRegistrar;
let VEHICULONOPERMITIDO= 'Vehiculo no permitido';


describe('parqueadero registrar vehiculo',()=>{
    let appPageRegistrarVehiculo :AppPageVehiculo;
    by.addLocator('formControlName', function(value, opt_parentElement) {
        var using = opt_parentElement || document;      
        return using.querySelectorAll('[formControlName="' + value +'"]');
    });

    beforeEach(() => {
        appPageRegistrarVehiculo = new AppPageVehiculo();
        placa = element(by.formControlName('placa'));
        color = element(by.formControlName('color'));
        cilindraje = element(by.formControlName('cilindraje'));
        observacion = element(by.formControlName('observacion'));
        tipovehiculo = element(by.formControlName('tipovehiculo'));
        btnRegistrar = element(by.className('btn btn-primary'));
       
    });

    it('mesange creando vehiculo ok', () => {
       
        appPageRegistrarVehiculo.navigateTo();
        placa.sendKeys(appPageRegistrarVehiculo.getRandomText() + '-' + appPageRegistrarVehiculo.getRandomNumber());    
        color.sendKeys('Rojo');    
        cilindraje.sendKeys(20);        
        tipovehiculo.sendKeys('MOTO');
        observacion.sendKeys('prueba desde protractor');
        btnRegistrar.click().then(function(){
            expect(appPageRegistrarVehiculo.getParagraphText()).toEqual('se guardo correctamente el vehiculo');
        });        
    });  
});