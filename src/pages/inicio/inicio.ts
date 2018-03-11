import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Inicio2Page } from '../inicio2/inicio2';
import { Solicitud1Page } from '../solicitud1/solicitud1';
import { Solicitud2Page } from '../solicitud2/solicitud2';


@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

  constructor(public navCtrl: NavController) {
  }
  goToInicio2(params){
    if (!params) params = {};
    this.navCtrl.push(Inicio2Page);
  }goToSolicitud1(params){
    if (!params) params = {};
    this.navCtrl.push(Solicitud1Page);
  }goToSolicitud2(params){
    if (!params) params = {};
    this.navCtrl.push(Solicitud2Page);
  }goToInicio(params){
    if (!params) params = {};
    this.navCtrl.push(InicioPage);
  }
}
