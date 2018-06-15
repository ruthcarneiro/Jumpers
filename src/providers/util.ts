import {AlertController, Loading, ToastController, ModalController, LoadingController, Events} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class Util {

    loading: Loading;
	private API_URL = 'http://18.218.230.177:8080/APIEmail/service/mail';

    constructor(public alertCtrl: AlertController,
                public modalCtrl: ModalController,
                public toastCtrl: ToastController,
                public events: Events,
				public http: HttpClient,
                private loadingCtrl: LoadingController) {
    }

    showMessageAsToast(text) {
        let alert = this.toastCtrl.create({
            message: text,
            duration: 3000
        });
        alert.present();
    }

    showLoadingProgress() {
        this.loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        this.loading.present();
    }

    hideLoadingProgress() {
        if (this.loading)
            this.loading.dismiss();
    }
	
	sendMail(message : String) {
		return new Promise((resolve, reject) => {
		  var data = { message : message };
		  
		  console.log(data);

		  //  Mano, aqui é onde a conversa acontece de fato, porque a mensagem já tá na mão e aí já passamos 2 caras na requisição POST:
		  //  1 - URL da API + endpoint ( que no caso é o '/send')
		  //  2 - objeto JSON (data) contendo a mensagem do email
		  this.http.post(this.API_URL + '/send', data)
			.subscribe((result: any) => {
			  //Aqui o envio deu bom tá paaeee
			  resolve({"status": true});
			},
			(error: any) =>{
			  //Aqui deu ruim na hora de enviar
			  resolve({"status": false});
			})
		})
  }
	
	
}