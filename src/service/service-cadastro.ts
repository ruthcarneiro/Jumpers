import {Http, HttpModule, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {sprintf} from "sprintf-js";
import {Util} from '../providers/util';
import {Injectable} from '@angular/core';
import * as Constantes from '../providers/constantes';
//import {AppStorageProvider} from './app-storage-provider';

@Injectable()
export class ServiceCadastro {

    public url: string = Constantes.ADDRESS;

    constructor(public http: Http, 
                public util: Util) { }

    async salvarIntegrante(integrante: any) {
        let url = sprintf(this.url);

        let param: any;

        param = integrante.nome, integrante.email, integrante.dataNascimento, integrante.telefone;

        return new Promise((resolve, reject) => {
            this.http.post(url, param)
                .map(res => res.json())
                .subscribe(data => {
                        resolve(data.param);
                }, err => {
                    reject(err);
                });
        });
    }

    /*salva(agendamento){
        return agendamento.nome, agendamento.dataNascimento, agendamento.email, agendamento.telefone
    }

    cadastrarIntegrante(agendamento){
        let api = this.url;
        return agendamento.nome, agendamento.dataNascimento, agendamento.email, agendamento.telefone
            .then(data => {
                if(data){
                    return this.http
                    .get(api)
                    .toPromise()
                    .then(() => this.salva(agendamento))
                    .then(() => agendamento.confirmado);
                }else{
                    return this.http
                    .get(api)
                    .toPromise()
                    .then(() => this.salva(agendamento))
                    .then(() => agendamento.confirmado);
                };
            })
    };*/
}
