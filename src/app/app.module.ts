import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { Inicio2Page } from '../pages/inicio2/inicio2';
import { GruaPage } from '../pages/grua/grua';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { ServiGruasNayaritPage } from '../pages/servi-gruas-nayarit/servi-gruas-nayarit';
import { IniciarSesionPage } from '../pages/iniciar-sesion/iniciar-sesion';
import { Solicitud1Page } from '../pages/solicitud1/solicitud1';
import { Solicitud2Page } from '../pages/solicitud2/solicitud2';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    Inicio2Page,
    GruaPage,
    TabsControllerPage,
    ServiGruasNayaritPage,
    IniciarSesionPage,
    Solicitud1Page,
    Solicitud2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    Inicio2Page,
    GruaPage,
    TabsControllerPage,
    ServiGruasNayaritPage,
    IniciarSesionPage,
    Solicitud1Page,
    Solicitud2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}