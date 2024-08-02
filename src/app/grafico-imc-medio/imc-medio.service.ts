import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ImcMedioService {
  private baseUrl = `${environment.baseUrl}/api/candidatos/imc-medio-por-faixa-etaria`;

  constructor(private http: HttpClient) {}

  buscarDadosIMCMedioPorFaixaEtaria(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}
