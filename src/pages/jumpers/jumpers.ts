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
  selector: 'page-jumpers',
  templateUrl: 'jumpers.html'
})

export class JumpersPage {
	
  public model : Jumpers;
  public masktelefone: any = Constantes.MTELEFONE;

  public submitAttempt: boolean = false;
  public myForm;

  public dados: any = {};

  constructor(public util       : Util,
              public http       : Http,
              public navCtrl    : NavController,
              public viewCtrl   : ViewController,
              public formBuilder: FormBuilder,
              public alertCtrl  : AlertController,        
              public service    : ServiceCadastro,
			  private mailProvider: MailServiceProvider) {

    this.myForm = formBuilder.group({
        nome: ['', Validators.compose([Validators.required])],
        email: ['', Validators.compose([Validators.required])],
        telefone: ['', Validators.compose([Validators.required])],
        regiao: [''],
    });
  
	this.model = new Jumpers();

  }
  
  changeStatus(value) {

    if(value == 'Enviar') document.getElementById('btnSend').innerText = 'Enviando';
    if (value == 'Enviando') document.getElementById('btnSend').innerText = 'Enviar Novo';

  }

  send() {
    this.submitAttempt = true;

    let userdata = JSON.parse(JSON.stringify('DESEJO COLABORAR COM O PROJETO ATRAVÉS DE DOAÇÕES. ' +
											 '\nNOME: ' + this.dados.nome +                               
											 '\nE-MAIL: ' + this.dados.email  + 
											 '\nTELEFONE: ' + this.dados.telefone + 
											 '\nREGIÃO: ' + this.dados.regiao));
	
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

export class Jumpers {
  message: string;
}

