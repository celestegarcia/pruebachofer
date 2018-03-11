import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IniciarSesionPage } from '../iniciar-sesion/iniciar-sesion';
import { InicioPage } from '../inicio/inicio';
import { Inicio2Page } from '../inicio2/inicio2';
import { Solicitud1Page } from '../solicitud1/solicitud1';
import { Solicitud2Page } from '../solicitud2/solicitud2';

@Component({
  selector: 'page-servi-gruas-nayarit',
  templateUrl: 'servi-gruas-nayarit.html'
})
export class ServiGruasNayaritPage {

  constructor(public navCtrl: NavController) {
  }
  goToIniciarSesion(params){
    if (!params) params = {};
    this.navCtrl.push(IniciarSesionPage);
  }goToInicio(params){
    if (!params) params = {};
    this.navCtrl.push(InicioPage);
  }goToInicio2(params){
    if (!params) params = {};
    this.navCtrl.push(Inicio2Page);
  }goToSolicitud1(params){
    if (!params) params = {};
    this.navCtrl.push(Solicitud1Page);
  }goToSolicitud2(params){
    if (!params) params = {};
    this.navCtrl.push(Solicitud2Page);
  }
}
