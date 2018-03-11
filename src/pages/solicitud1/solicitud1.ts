import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Solicitud2Page } from '../solicitud2/solicitud2';
import { InicioPage } from '../inicio/inicio';
import { Inicio2Page } from '../inicio2/inicio2';
import { Solicitud1Page } from '../solicitud1/solicitud1';

@Component({
  selector: 'page-solicitud1',
  templateUrl: 'solicitud1.html'
})
export class Solicitud1Page {

  constructor(public navCtrl: NavController) {
  }
  goToSolicitud2(params){
    if (!params) params = {};
    this.navCtrl.push(Solicitud2Page);
  }goToInicio(params){
    if (!params) params = {};
    this.navCtrl.push(InicioPage);
  }goToInicio2(params){
    if (!params) params = {};
    this.navCtrl.push(Inicio2Page);
  }goToSolicitud1(params){
    if (!params) params = {};
    this.navCtrl.push(Solicitud1Page);
  }
}
