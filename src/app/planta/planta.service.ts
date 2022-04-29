import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planta } from './planta';

@Injectable({
  providedIn: 'root',
})
export class PlantaService {
  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getPlantas(): Observable<Planta[]> {
    return this.http.get<Planta[]>(this.apiUrl);
  }
}
