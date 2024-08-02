import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private baseUrl = `${environment.baseUrl}/api/candidatos/adicionar`;

  constructor(private http: HttpClient) {}

  uploadFile(formData: FormData): Observable<any> {
    return this.http.post<any>(this.baseUrl, formData);
  }
}
