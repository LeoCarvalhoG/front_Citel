import { Component, OnInit } from '@angular/core';
import { MediaIdadePorTipoSanguineoService } from './media-idade-por-tipo-sanguineo.service'; // ajuste o caminho conforme necessário
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-media-idade-por-tipo-sanguineo',
  templateUrl: './media-idade-por-tipo-sanguineo.component.html',
  styleUrls: ['./media-idade-por-tipo-sanguineo.component.scss']
})
export class MediaIdadePorTipoSanguineoComponent implements OnInit {

  mediaIdadePorTipoSanguineo: { tipoSanguineo: string; mediaIdade: number }[] = [];

  constructor(private mediaIdadeService: MediaIdadePorTipoSanguineoService) { }

  ngOnInit(): void {
    this.buscarMediaIdadePorTipoSanguineo();
  }

  buscarMediaIdadePorTipoSanguineo(): void {
    this.mediaIdadeService.buscarMediaIdadePorTipoSanguineo().subscribe(
      data => {
        this.mediaIdadePorTipoSanguineo = Object.keys(data).map(key => ({
          tipoSanguineo: key,
          mediaIdade: Number(data[key])
        }));
        console.log('Dados de média de idade por tipo sanguíneo:', this.mediaIdadePorTipoSanguineo);
        this.criarGraficoMediaIdade();
      },
      error => {
        console.error('Erro ao buscar os dados de média de idade por tipo sanguíneo:', error);
      }
    );
  }

  criarGraficoMediaIdade(): void {
    const labels = this.mediaIdadePorTipoSanguineo.map(d => d.tipoSanguineo);
    const data = this.mediaIdadePorTipoSanguineo.map(d => d.mediaIdade);

    const chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Média de Idade',
            data: data,
            backgroundColor: '#FFA726',
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
