import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from './pages/weather/services/weather.service';
import { WeatherData } from './shared/interfaces/weather.interface';
import { GeolocationService } from './shared/services/geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private readonly weatherServ : WeatherService, private readonly geoService:GeolocationService){
    this.getLocation();
  }
  public weather$!: Observable<WeatherData>;
  public onSearch(search:string):void{
    this.weather$ = this.weatherServ.getWeatherbyCityName(search);
  }

  private async getLocation():Promise<void>{
    try {
      const {coords} = await this.geoService.getPosition();
      this.weather$ = this.weatherServ.getWeatherbyCoord(coords);
    } catch (error) {
      console.log(error)
    }
  }
}


