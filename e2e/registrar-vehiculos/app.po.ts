import { browser, by, element } from 'protractor';
export class AppPageVehiculo {
    navigateTo() {
      return browser.get('vehiculo/agregar');
    }
    getParagraphText() {
        return element(by.className('toast-top-right toast-container')).getText();
    }
    getRandomText(){
        return Math.random().toString(36).substr(2, 3);
    }
    getRandomNumber(){
        return Math.floor(Math.random() * 999) + 1  
    }
    /* salida vehiculo */
    navigateToListaVehiculo(){
        return browser.get('vehiculo/listar');
    }
    getSalidaVehiculoParagraphText() {
        return element(by.className('panel-heading')).getText();
    }
}