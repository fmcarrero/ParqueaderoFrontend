import { environment } from '../environments/environment';

export const appApiResources = {
    baseUrl: environment.apiHost,
    allEstacionamiento: createAuthUrl('/api/Vehiculo/'),
    agregarVehiculo : createAuthUrl('/api/Vehiculo/'),
   
  };
  function createAuthUrl(actionName: string): string {
    return `${environment.apiHost}${actionName}`;
  }