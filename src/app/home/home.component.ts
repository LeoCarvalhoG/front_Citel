import { AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef, Type, ElementRef } from '@angular/core';
import { CandidatosPorEstadoComponent } from '../candidatos-por-estado/candidatos-por-estado.component';
import { GraficoImcMedioComponent } from '../grafico-imc-medio/grafico-imc-medio.component';
import { PercentualObesosPorGeneroComponent } from '../percentual-obesos-por-genero/percentual-obesos-por-genero.component';
import { MediaIdadePorTipoSanguineoComponent } from '../media-idade-por-tipo-sanguineo/media-idade-por-tipo-sanguineo.component';
import { PossiveisDoadoresPorTipoSanguineoComponent } from '../possiveis-doadores-por-tipo-sanguineo/possiveis-doadores-por-tipo-sanguineo.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('candidatosPorEstadoContainer', { read: ViewContainerRef }) candidatosPorEstadoContainer!: ViewContainerRef;
  @ViewChild('imcMedioContainer', { read: ViewContainerRef }) imcMedioContainer!: ViewContainerRef;
  @ViewChild('percentualObesosContainer', { read: ViewContainerRef }) percentualObesosContainer!: ViewContainerRef;
  @ViewChild('mediaIdadeTipoSanguineoContainer', { read: ViewContainerRef }) mediaIdadeTipoSanguineoContainer!: ViewContainerRef;
  @ViewChild('possiveisDoadoresContainer', { read: ViewContainerRef }) possiveisDoadoresContainer!: ViewContainerRef;

  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;

  selectedFile: File | null = null;
  uploadSuccess = false;
  showUploadSuccessMessage = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  carregarCandidatosPorEstado(): void {
    this.loadComponent(CandidatosPorEstadoComponent, this.candidatosPorEstadoContainer, 'buscarCandidatosPorEstado');
  }

  carregarImcMedioPorIdade(): void {
    this.loadComponent(GraficoImcMedioComponent, this.imcMedioContainer, 'buscarDadosIMCMedioPorFaixaEtaria');
  }

  carregarPercentualObesosPorGenero(): void {
    this.loadComponent(PercentualObesosPorGeneroComponent, this.percentualObesosContainer);
  }

  carregarMediaIdadePorTipoSanguineo(): void {
    this.loadComponent(MediaIdadePorTipoSanguineoComponent, this.mediaIdadeTipoSanguineoContainer, 'buscarMediaIdadePorTipoSanguineo');
  }

  carregarPossiveisDoadoresPorTipoSanguineo(): void {
    this.loadComponent(PossiveisDoadoresPorTipoSanguineoComponent, this.possiveisDoadoresContainer, 'buscarPossiveisDoadoresPorTipoSanguineo');
  }

  private loadComponent<T>(component: Type<T>, container: ViewContainerRef, methodName?: string): void {
    if (!container) {
      console.error('Container não inicializado!');
      return;
    }

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    container.clear();
    const componentRef = container.createComponent(componentFactory);

    if (methodName && typeof (componentRef.instance as any)[methodName] === 'function') {
      (componentRef.instance as any)[methodName]();
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      console.log('Arquivo selecionado:', this.selectedFile);
    }
  }

  uploadFile(): void {
    if (!this.selectedFile) {
      console.error('Nenhum arquivo selecionado para upload.');
      return;
    }

    this.simulateFileUpload().then(() => {
      this.uploadSuccess = true;
      this.selectedFile = null;

      setTimeout(() => {
        this.uploadSuccess = false;
      }, 5000);
    });
  }

  private simulateFileUpload(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Arquivo enviado com sucesso!');
        this.showUploadSuccessMessage = true;
        setTimeout(() => {
          this.showUploadSuccessMessage = false;
        }, 5000); 
        resolve();
      }, 2000);
    });
  }

  triggerFileInputClick(): void {
    this.fileInput.nativeElement.click();
  }
}
