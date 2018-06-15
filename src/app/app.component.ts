import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { HistoricoPage } from '../pages/historico/historico';
import { AcoesPage } from '../pages/acoes/acoes';
import { AcoesFuturasPage } from '../pages/acoesfuturas/acoesfuturas';
import { AcoesSugeridasPage, AcoesSugerir } from '../pages/acoessugerir/acoessugerir';
import { GaleriaPage } from '../pages/galeria/galeria';
import { JumpersPage, Jumpers } from '../pages/jumpers/jumpers';
import { JumpersIntegrantePage } from '../pages/jumpersintegrante/jumpersintegrante';
import { EquipePage } from '../pages/equipe/equipe';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = HomePage;

  public paginas = [
    {titulo: 'Ações', componente: AcoesPage},
    {titulo: 'Galeria', componente: GaleriaPage},
    {titulo: 'Nossa História', componente: HistoricoPage},    
    {titulo: 'Os Jumpers', componente: JumpersPage}
  ];

  //ACESSAR ELEMENTOS FILHOS QUE TIVEREM RELACIONADOS AO NAV <ION-NAV> POR EXEMPLO
  @ViewChild(Nav) public nav : Nav;

  constructor( platform: Platform, 
               statusBar: StatusBar, 
               splashScreen: SplashScreen ) {

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  /* SABER QUAL A PÁGINA QUE SERÁ CHAMADA DEPENDENDO DA OPÇÃO SELECIONADA */
  /*abrePagina(pagina){
    this.nav.setRoot(pagina.componente);
  }*/

  acoesRealizadas(){
    this.nav.setRoot(AcoesPage);
  }

  acoesRealizadasFuturas(){
    this.nav.setRoot(AcoesFuturasPage);
  }

  acoesRealizadasSugerir(){
    this.nav.setRoot(AcoesSugeridasPage);
  }

  galeria(){
    this.nav.setRoot(GaleriaPage);
  }

  nossaHistoria(){
    this.nav.setRoot(HistoricoPage);
  }

  nossaEquipe(){
    this.nav.setRoot(EquipePage);
  }

  osJumpers(){
    this.nav.setRoot(JumpersPage);
  }

  osJumpersIntegrante(){
    this.nav.setRoot(JumpersIntegrantePage);
  }

  goHome(){
        this.nav.setRoot(HomePage);
  }
}