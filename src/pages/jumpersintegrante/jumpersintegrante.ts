import { Component } from '@angular/core';
import { Util } from "../../providers/util";
import { Observable } from 'rxjs/Observable';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import * as Constantes from "../../providers/constantes";
import { GlobalValidator } from "../../validators/global";
import { ServiceCadastro } from "../../service/service-cadastro";
import { Http, HttpModule, Headers, RequestOptions } from '@angular/http';
import { FormBuilder, FormControl, AbstractControl, Validators } from '@angular/forms';
import { IonicPage, NavController, ToastController, ViewController, AlertController, NavParams } from 'ionic-angular';
import { MailServiceProvider } from './../../providers/mail-service';

@Component({
  selector: 'page-jumpersintegrante',
  templateUrl: 'jumpersintegrante.html'
})

export class JumpersIntegrantePage {

  public model: JumpersIntegrante;
  
  public masktelefone: any = Constantes.MTELEFONE;
  public datemask = Constantes.MDATE

  public submitAttempt: boolean = false;
  public myForm;

  public data: Observable<any>;
  public dados: any = {};
  
  constructor(public http       : Http,
              public util       : Util,
              public formBuilder: FormBuilder,
              public navCtrl    : NavController,
              public viewCtrl   : ViewController,
              public alertCtrl  : AlertController,
              public service    : ServiceCadastro,
			  private mailProvider: MailServiceProvider) {

    let idadeMinimaData: Date = new Date();
    idadeMinimaData.setHours(0);
    idadeMinimaData.setMinutes(0);
    idadeMinimaData.setSeconds(0);
    idadeMinimaData.setMilliseconds(0);
    idadeMinimaData.setFullYear(idadeMinimaData.getFullYear()-16);
    
   this.myForm = formBuilder.group({
        nome: ['', Validators.compose([Validators.required])],
        email: ['', Validators.compose([Validators.required])],
        dataNascimento: ['', Validators.compose([Validators.required, GlobalValidator.compareDates(idadeMinimaData)])],
        telefone: ['', Validators.compose([Validators.required])]
    });	
	
	this.model = new JumpersIntegrante();
    
  } 
  
  changeStatus(value) {

    if(value == 'Enviar') document.getElementById('btnSend').innerText = 'Enviando';
    if (value == 'Enviando') document.getElementById('btnSend').innerText = 'Enviar Novo';

  }

  send() {
    this.submitAttempt = true;    
	
	let userdata = JSON.parse(JSON.stringify('DESEJO FAZER PARTE DO PROJETO, ALEGRANDO TODOS POR ONDE PASSARMOS. ' +
						 'NOME: ' + this.dados.nome + 
						 '\nDATA DE NASCIMENTO: ' + this.dados.dataNascimento + 
						 '\nE-MAIL: ' + this.dados.email  + 
						 '\nTELEFONE: ' + this.dados.telefone));
						 
	this.model.message = userdata;
	
    if (!this.myForm.valid) {
        this.util.showMessageAsToast("Por favor, preencha o formulário corretamente antes de enviar.");
        return;

    }else{            
        // Quando o cara clicar no botão, já devemos mudar o texto pra indicar que algo está acontecendo realmente
		this.changeStatus('Enviar');

		// Aqui acontece a chamada do provider/service que conversa com a APIEmail.
		// Estamos passando pra lá apenas um parametro, que é a mensagem do email.
		this.mailProvider.sendMail(this.model.message)
		  .then((result: any) => {
			alert('Email enviado com sucesso? ' + result.status);
			this.changeStatus('Enviando');
		  })
		  .catch((error: any) => {
			alert('Email enviado com sucesso? ' + error.status);
			this.changeStatus('Enviando');
		  })
	}
   }
 }
 
 export class JumpersIntegrante {
  message: string;
}


