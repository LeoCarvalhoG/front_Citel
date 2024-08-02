import { Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { CandidatosPorEstadoComponent } from './candidatos-por-estado/candidatos-por-estado.component';
import { GraficoImcMedioComponent } from './grafico-imc-medio/grafico-imc-medio.component';
import { PercentualObesosPorGeneroComponent } from './percentual-obesos-por-genero/percentual-obesos-por-genero.component';
import { MediaIdadePorTipoSanguineoComponent } from './media-idade-por-tipo-sanguineo/media-idade-por-tipo-sanguineo.component';
import { PossiveisDoadoresPorTipoSanguineoComponent } from './possiveis-doadores-por-tipo-sanguineo/possiveis-doadores-por-tipo-sanguineo.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'candidatos-por-estado', component: CandidatosPorEstadoComponent },
  { path: 'imc-medio-por-faixa-etaria', component: GraficoImcMedioComponent },
  { path: 'percentual-obesos-por-genero', component: PercentualObesosPorGeneroComponent },
  { path: 'media-idade-por-tipo-sanguineo', component: MediaIdadePorTipoSanguineoComponent },
  { path: 'possiveis-doadores-por-tipo-sanguineo', component: PossiveisDoadoresPorTipoSanguineoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
