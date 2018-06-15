import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Util } from "../../providers/util";
import { ServiceRetorno } from "../../service/service-retorno";

@Component({
  selector: 'page-acoesfuturas',
  templateUrl: 'acoesfuturas.html'
})

export class AcoesFuturasPage {

  public acoesfuturas: any = [];
  public dataset: Array<Array<{ title: string, descricao: string}>>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public util: Util,
              public service: ServiceRetorno) {

  }  
}