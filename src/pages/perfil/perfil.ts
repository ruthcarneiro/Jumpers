import {Http} from '@angular/http';
import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, ModalController, ViewController, AlertController, NavParams} from 'ionic-angular';
import * as Constantes from "../../providers/constantes";
import {FormBuilder, FormControl, AbstractControl, Validators} from '@angular/forms';
import {GlobalValidator} from "../../validators/global";
import {Util} from "../../providers/util";
import sha256 from 'crypto-js/sha256';
import { AppStorageProvider } from '../../service/app-storage-provider';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})

export class PerfilPage {

  public masktelefone: any = Constantes.MTELEFONE;
  public datemask = Constantes.MDATE

  public submitAttempt: boolean = false;
  public myForm;

  @ViewChild('file') file: any;
  public dados: any = {};

  // CONFIRMAR SENHA DE USUÁRIO
  public controlSenha: FormControl;
  public controlConfirmSenha: FormControl;

  constructor(public navCtrl: NavController,
              public http: Http,
              public alertCtrl: AlertController,
              public viewCtrl: ViewController,
              public formBuilder: FormBuilder,
              public util: Util,
              public dataStorage: AppStorageProvider,
              public modalCtrl: ModalController,) {

    this.controlSenha = new FormControl("", Validators.compose([Validators.required, Validators.minLength(6)]));
    this.controlConfirmSenha = new FormControl("", Validators.compose([Validators.required, Validators.minLength(6)]));

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
  }

  getUserPicture() {
        /*if (this.dados && this.dados.foto != null) {
            return this.dados.foto;
        } else {*/
            return "assets/jumpers_quebraCabeca.png";
        /*}*/
  }

  upload(file){
      console.log(file);
      let image:any = new Image();
      let myReader:FileReader = new FileReader();
      let self = this;
      myReader.onloadend = function (loadEvent:any) {
          self.file.nativeElement.value = "";
          let modal = self.modalCtrl.create("ImageCropperPage", {src: loadEvent.target.result});
          modal.onDidDismiss((data)=> {
              if(data && data.image) {
                  self.dados.foto = data.image;
              }
          });
          modal.present();
      };

      if(file && file[0])
          myReader.readAsDataURL(file[0]);
  }

  removerFoto(){
      //this.dados.foto = null;
  }

  recuperaPerfil() {
    this.dataStorage.getUser().then(user => {
    this.dados = user || {};

        if (this.dados && this.dados.foto != null) {
            this.dados.foto = "data:image/jpg;base64," + this.dados.foto
        }

    });
  }

  salvar() {
    this.submitAttempt = true;

    let userdata = JSON.parse(JSON.stringify(this.dados));

    if(userdata.foto) {
        userdata.foto = userdata.foto.replace("data:image/jpeg;base64,", "");
        userdata.foto = userdata.foto.replace("data:image/jpg;base64,", "");
        userdata.foto = userdata.foto.replace("data:image/png;base64,", "");
    }

    if(this.dados.senha){
       userdata.senha = sha256(this.dados.senha).toString();
    }

    if (!this.myForm.valid) {
        this.util.showMessageAsToast("Por favor, preencha o formulário corretamente antes de enviar.");
        return;
        //console.log("Por favor, preencha o formulário corretamente antes de enviar.");
    }else{
      // AQUI IRÁ REALIZAR O CADASTRO QUANDO ESTIVER COM A API PRONTA.
        this.util.showMessageAsToast("Cadastro realizado com sucesso.");
        return;
    }  
  }
}

export class PasswordValidation {

  static MatchPassword(AC: AbstractControl) {
      let password = AC.get('senha').value; // to get value in input tag
      let confirmPassword = AC.get('confirmarsenha').value; // to get value in input tag
      if(password != confirmPassword) {
          AC.get('confirmarsenha').setErrors( {MatchPassword: true} )
      } else {
          return null
      }
  }
}
