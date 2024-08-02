import { Component, OnInit } from '@angular/core';
import { CandidatosPorEstadoService } from './candidatos-por-estado.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candidatos-por-estado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './candidatos-por-estado.component.html',
  styleUrls: ['./candidatos-por-estado.component.scss'] // Corrigido 'styleUrl' para 'styleUrls'
})
export class CandidatosPorEstadoComponent implements OnInit {

  candidatosPorEstado: { estado: string; quantidade: number; }[] = [];
  erro: string | null = null;

  constructor(private candidatosPorEstadoService: CandidatosPorEstadoService) { }

  ngOnInit(): void {

  }

  BuscarCandidatosPorEstado(): void {
    this.buscarCandidatosPorEstado();
  }

  buscarCandidatosPorEstado(): void {
    this.candidatosPorEstadoService.buscarCandidatosPorEstado().subscribe(
      (data) => {
        if (data && typeof data === 'object' && !Array.isArray(data)) {
          this.candidatosPorEstado = Object.entries(data).map(([estado, quantidade]) => ({ estado, quantidade: Number(quantidade) }));
          this.erro = null;
          console.log('Candidatos por Estado:', this.candidatosPorEstado);
        } 
      },
      (error) => {
        this.erro = 'Erro ao buscar candidatos por estado';
        console.error(this.erro, error);
      }
    );
  }
}
