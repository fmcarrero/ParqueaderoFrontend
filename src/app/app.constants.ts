import { environment } from '../environments/environment';

export const appApiResources = {
    baseUrl: environment.apiHost,
    allEstacionamiento: createAuthUrl('/api/Vehiculo/'),
    agregarVehiculo : createAuthUrl('/api/Vehiculo/'),
    buscarVehiculoEstacionado:createAuthUrl('/api/Vehiculo'),
    salidavehiculos : createAuthUrl('/api/SalidaVehiculo/')   
  };
  function createAuthUrl(actionName: string): string {
    return `${environment.apiHost}${actionName}`;
  }