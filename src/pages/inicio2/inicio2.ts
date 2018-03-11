import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Solicitud1Page } from '../solicitud1/solicitud1';
import { Solicitud2Page } from '../solicitud2/solicitud2';
import { InicioPage } from '../inicio/inicio';
import { Inicio2Page } from '../inicio2/inicio2';

@Component({
  selector: 'page-inicio2',
  templateUrl: 'inicio2.html'
})
export class Inicio2Page {

  constructor(public navCtrl: NavController) {
  }
  goToSolicitud1(params){
    if (!params) params = {};
    this.navCtrl.push(Solicitud1Page);
  }goToSolicitud2(params){
    if (!params) params = {};
    this.navCtrl.push(Solicitud2Page);
  }goToInicio(params){
    if (!params) params = {};
    this.navCtrl.push(InicioPage);
  }goToInicio2(params){
    if (!params) params = {};
    this.navCtrl.push(Inicio2Page);
  }
}
