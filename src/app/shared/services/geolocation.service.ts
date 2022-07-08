import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  public getPosition():Promise<any>{
    return new Promise((resolve, reject) => {
      const options = {
        enableHighAccurancy: true,
        timeout: 3000,
        maximumAge: 0
      }
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
    
  }
}
