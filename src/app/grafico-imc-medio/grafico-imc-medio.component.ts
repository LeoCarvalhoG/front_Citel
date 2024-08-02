import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ImcMedioService } from './imc-medio.service';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-grafico-imc-medio',
  templateUrl: './grafico-imc-medio.component.html',
  styleUrls: ['./grafico-imc-medio.component.scss']
})
export class GraficoImcMedioComponent implements OnInit {
  @ViewChild('imcMedioChart', { static: true }) imcMedioChart!: ElementRef<HTMLCanvasElement>;

  imcMedioPorFaixaEtaria: { faixaEtaria: string; imcMedio: number }[] = [];
  chart!: Chart;

  constructor(private imcMedioService: ImcMedioService) {}

  ngOnInit(): void {
    this.buscarDadosIMCMedioPorFaixaEtaria();
  }

  buscarDadosIMCMedioPorFaixaEtaria(): void {
    this.imcMedioService.buscarDadosIMCMedioPorFaixaEtaria().subscribe(
      data => {
        this.imcMedioPorFaixaEtaria = Object.keys(data).map(key => ({
          faixaEtaria: key,
          imcMedio: Number(data[key])
        }));
        console.log('Dados do IMC médio por faixa etária:', this.imcMedioPorFaixaEtaria);
        this.criarGraficoIMCMedio();
      },
      error => {
        console.error('Erro ao buscar os dados do IMC médio por faixa etária:', error);
      }
    );
  }

  criarGraficoIMCMedio(): void {
    const labels = this.imcMedioPorFaixaEtaria.map(d => d.faixaEtaria);
    const data = this.imcMedioPorFaixaEtaria.map(d => d.imcMedio);

    const context = this.imcMedioChart.nativeElement.getContext('2d');
    if (!context) {
      console.error('Não foi possível obter o contexto do canvas');
      return;
    }

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(context, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'IMC Médio',
            data: data,
            backgroundColor: '#42A5F5',
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
