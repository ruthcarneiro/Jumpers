import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class MailServiceProvider {

  private API_URL = 'http://18.218.230.177:8080/APIEmail/service/mail';

  constructor(public http: HttpClient) { }
  
  // Esse aqui e o cara responsavel por conversar com a APIEmail.
  // O parametro recebido é justamente a mensage que vai no email
  sendMail(message: String) {

    return new Promise((resolve, reject) => {
      var data = {
        message: message
      };

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
