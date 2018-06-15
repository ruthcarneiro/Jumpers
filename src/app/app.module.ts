import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, Config, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http'; 
import { BrMaskerModule } from 'brmasker-ionic-3';
import { HttpModule } from '@angular/http';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// IMPORT SERVICES
import { ServiceCadastro } from '../service/service-cadastro';
import { ServiceRetorno } from '../service/service-retorno';

// IMPORT PAGES
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoricoPage } from '../pages/historico/historico';
import { AcoesPage } from '../pages/acoes/acoes';
import { AcoesFuturasPage } from '../pages/acoesfuturas/acoesfuturas';
import { AcoesSugeridasPage } from '../pages/acoessugerir/acoessugerir';
import { GaleriaPage } from '../pages/galeria/galeria';
import { JumpersPage } from '../pages/jumpers/jumpers';
import { JumpersIntegrantePage, JumpersIntegrante } from '../pages/jumpersintegrante/jumpersintegrante';
import { EquipePage } from '../pages/equipe/equipe';
import { MailServiceProvider } from '../providers/mail-service';

// IMPORT PROVIDERS
import { Util } from '../providers/util';

// IMPORT COMPONENTS
import { CustomComponentsModule } from "../componentes/componentes.module";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoricoPage,
    AcoesPage,
    AcoesFuturasPage,
    AcoesSugeridasPage,
    GaleriaPage,
    JumpersPage,
    JumpersIntegrantePage,
    EquipePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
	HttpClientModule,
    BrMaskerModule,
    CustomComponentsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoricoPage,
    AcoesPage,
    AcoesFuturasPage,
    AcoesSugeridasPage,
    GaleriaPage,
    JumpersPage,
    JumpersIntegrantePage,
    EquipePage
  ],
  providers: [
    Util,
    StatusBar,
    SplashScreen,
    ServiceCadastro,
    ServiceRetorno,    
	MailServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
