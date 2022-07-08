import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coord, WeatherData } from '@app/shared/interfaces/weather.interface';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly api_url = environment.openWeather.url;
  constructor(private http : HttpClient) { }

  public getWeatherbyCityName(city:string): Observable<WeatherData>{
    const params = new HttpParams()
    .set('q', city)
    return this.http.get<WeatherData>(`${this.api_url}/weather`,{params: params});
  }

  public getWeatherbyCoord(coord:Coord): Observable<WeatherData>{
    const params = new HttpParams()
    .set('lat', coord.latitude)
    .set('lon', coord.longitude)

    return this.http.get<WeatherData>(`${this.api_url}weather`,{params: params});
  }

  
}
