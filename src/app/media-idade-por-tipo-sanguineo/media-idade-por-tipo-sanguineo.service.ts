import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class MediaIdadePorTipoSanguineoService {
  private baseUrl = `${environment.baseUrl}/api/candidatos/media-idade-por-tipo-sanguineo`;

  constructor(private http: HttpClient) {}

  buscarMediaIdadePorTipoSanguineo(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}
