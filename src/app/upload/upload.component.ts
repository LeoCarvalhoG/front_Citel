import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file && file.type === 'application/json') {
      this.selectedFile = file;
    } else {
      alert('Por favor, selecione um arquivo JSON.');
      this.selectedFile = null;
    }
  }

  uploadFile() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.http.post('/api/candidatos/adicionar', formData).subscribe(
        response => {
          console.log('Upload de Arquivo Realizado com Sucesso!', response);
        },
        error => {
          console.error('Upload de Arquivo Sem Sucesso!', error);
        }
      );
    }
  }
}
