import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PossiveisDoadoresPorTipoSanguineoService } from './possiveis-doadores-por-tipo-sanguineo.service'; // ajuste o caminho conforme necessário

@Component({
  selector: 'app-possiveis-doadores-por-tipo-sanguineo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './possiveis-doadores-por-tipo-sanguineo.component.html',
  styleUrls: ['./possiveis-doadores-por-tipo-sanguineo.component.scss']
})
export class PossiveisDoadoresPorTipoSanguineoComponent implements OnInit {

  possiveisDoadoresPorTipoSanguineo: { tipoSanguineo: string; quantidade: number }[] = [];

  constructor(private possiveisDoadoresService: PossiveisDoadoresPorTipoSanguineoService) { }

  ngOnInit(): void {
    this.buscarPossiveisDoadoresPorTipoSanguineo();
  }

  buscarPossiveisDoadoresPorTipoSanguineo(): void {
    this.possiveisDoadoresService.buscarPossiveisDoadoresPorTipoSanguineo().subscribe(
      data => {
        this.possiveisDoadoresPorTipoSanguineo = Object.keys(data).map(key => ({
          tipoSanguineo: key,
          quantidade: Number(data[key])
        }));
        console.log('Dados de possíveis doadores por tipo sanguíneo:', this.possiveisDoadoresPorTipoSanguineo);
      },
      error => {
        console.error('Erro ao buscar os dados de possíveis doadores por tipo sanguíneo:', error);
      }
    );
  }
}
