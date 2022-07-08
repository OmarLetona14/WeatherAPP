import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorInterceptor } from './interceptors/interceptor.interceptor';


@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule
  ],
  exports:[
    WeatherComponent
  ],
  providers:[
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true}
  ]
})
export class WeatherModule { }
