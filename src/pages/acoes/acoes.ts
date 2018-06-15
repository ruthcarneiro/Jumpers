import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Util } from "../../providers/util";
import { ServiceRetorno } from "../../service/service-retorno";

@Component({
  selector: 'page-acoes',
  templateUrl: 'acoes.html'
})

export class AcoesPage {

  public acoesrealizadas: any = [];
  public dataset: Array<Array<{ title: string, descricao: string}>>;
  public dataset2: Array<Array<{ title: string, descricao: string}>>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public util: Util,
              public service: ServiceRetorno) {

          this.apresentaDados();

  }
    apresentaDados() {   

          this.dataset = [[{title: "Ação de Páscoa,", 
          "descricao": "A ação ocorreu no sábado de páscoa do ano de 2018, onde foram arrecadados barras de chocolate e confeccionados ovos de páscoa, para crianças carantes. Foi um projeto muito bacana e emocionante."}]];

          
          this.dataset2 = [[{title: "Sopão Solidário,", 
          "descricao": "Sopão realizado nas ruas de Belo Horizonte e região metropolitana, onde foram arrecadados alimentos com diversas pessoas, e produzido grande quantidade de sopa para distribuir a pessoas que necessitavam de alimento."}]];
  }
}

