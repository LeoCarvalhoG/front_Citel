import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CandidatosPorEstadoService {
  private baseUrl = `${environment.baseUrl}/api/candidatos/por-estado`; 

  constructor(private http: HttpClient) {}

  buscarCandidatosPorEstado(): Observable<{ estado: string, quantidade: number }[]> {
    return this.http.get<{ estado: string, quantidade: number }[]>(this.baseUrl)
      .pipe(
        tap(data => {
          console.log('Dados recebidos:', data);
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Erro ao buscar candidatos por estado:', error);
    return throwError('Erro ao buscar candidatos por estado, por favor, tente novamente mais tarde.');
  }
}
