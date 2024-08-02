import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PossiveisDoadoresPorTipoSanguineoService {
  private baseUrl = `${environment.baseUrl}/api/candidatos/possiveis-doadores-por-tipo-sanguineo`;

  constructor(private http: HttpClient) {}

    buscarPossiveisDoadoresPorTipoSanguineo(): Observable<any> {
      return this.http.get<any>(this.baseUrl)
      .pipe(
        tap(data => {
          console.log('Dados recebidos:', data);
        }),
        catchError(this.handleError)
      );
  }

private handleError(error: HttpErrorResponse) {
  console.error('Erro ao buscar Possiveis Doadores Por Tipo Sanguineo:', error);
  return throwError('Erro ao buscar Possiveis Doadores Por Tipo Sanguineo, por favor, tente novamente mais tarde.');
  }

}

