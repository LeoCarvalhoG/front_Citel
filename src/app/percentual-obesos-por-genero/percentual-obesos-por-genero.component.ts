import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PercentualObesosPorGeneroService } from './percentual-obesos-por-genero.service';
import { Chart, registerables } from 'chart.js';

// Registra todos os componentes do Chart.js
Chart.register(...registerables);

@Component({
  selector: 'app-percentual-obesos-por-genero',
  templateUrl: './percentual-obesos-por-genero.component.html',
  styleUrls: ['./percentual-obesos-por-genero.component.scss']
})
export class PercentualObesosPorGeneroComponent implements OnInit {
  @ViewChild('percentualObesosChart', { static: true }) percentualObesosChart!: ElementRef<HTMLCanvasElement>;

  percentualObesosPorGenero: { genero: string; percentual: number }[] = [];
  chart!: Chart;

  constructor(private percentualObesosService: PercentualObesosPorGeneroService) {}

  ngOnInit(): void {
    this.buscarPercentualObesosPorGenero();
  }

  buscarPercentualObesosPorGenero(): void {
    this.percentualObesosService.buscarPercentualObesosPorGenero().subscribe(
      data => {
        this.percentualObesosPorGenero = Object.keys(data).map(key => ({
          genero: key,
          percentual: Number(data[key])
        }));
        console.log('Dados do percentual de obesos por gênero:', this.percentualObesosPorGenero);
        this.criarGraficoPercentualObesos();
      },
      error => {
        console.error('Erro ao buscar os dados do percentual de obesos por gênero:', error);
      }
    );
  }

  criarGraficoPercentualObesos(): void {
    const labels = this.percentualObesosPorGenero.map(d => d.genero);
    const data = this.percentualObesosPorGenero.map(d => d.percentual);

    const context = this.percentualObesosChart.nativeElement.getContext('2d');
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
            label: 'Percentual de Obesos',
            data: data,
            backgroundColor: ['#FF6384', '#36A2EB'],
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
