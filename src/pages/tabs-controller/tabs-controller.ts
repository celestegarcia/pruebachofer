import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { GruaPage } from '../grua/grua';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = InicioPage;
  tab2Root: any = GruaPage;
  constructor(public navCtrl: NavController) {
  }
  
}
