import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PercentualObesosPorGeneroService {
  private baseUrl = `${environment.baseUrl}/api/candidatos/percentual-obesos-por-genero`;

  constructor(private http: HttpClient) {}

  buscarPercentualObesosPorGenero(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
    }
}