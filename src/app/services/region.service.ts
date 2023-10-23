import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
_url= 'https://dev.matiivilla.cl/duoc/location/region'
  constructor(
    private http:HttpClient
  ) {
    console.log('Regiones')
  }
  getRegions(){
    let header= new HttpHeaders()
      .set('Type-content','aplication/json')  
    return this.http.get(this._url,{
      headers:header
    });
  }
}
