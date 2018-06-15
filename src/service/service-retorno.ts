import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {sprintf} from "sprintf-js";
import {Util} from '../providers/util';
import * as Constantes from '../providers/constantes';

@Injectable()
export class ServiceRetorno {

    public urlGaleria: string = Constantes.ADDRESS + "/galeria";
    public urlAcoesFuturas: string = Constantes.ADDRESS + "/acoesfuturas";
    public urlAcoesRealizadas: string = Constantes.ADDRESS + "/acoesrealizadas";

    constructor(
        public http: Http, 
        public util: Util
    ){}

    async getData(params: any, path: string = "/galeria" ) {

    let url = sprintf(this.urlGaleria);

    return new Promise((resolve, reject) => {
        this.http.post(url, params)
            .map(res => res.json())
            .subscribe(data => {
                console.log(data);
                if (data.codigoMensagem == 0) {
                    resolve(data.objeto);
                } else {
                    reject(data.mensagem);
                }
            }, err => {
                reject(err);
            });
        });
    }

    async recuperaAcoesFuturas(params: any) {

        let url = sprintf(this.urlAcoesFuturas);

        return new Promise((resolve, reject) => {
            this.http.post(url, params)
                .map(res => res.json())
                .subscribe(data => {
                    if (data.codigoMensagem == 0) {
                        resolve(data.objeto);
                    } else {
                        reject(data.mensagem);
                    }
                }, err => {
                    reject(err);
                });
        });

    }


    async recuperaAcoesRealizadas(params: any) {

        let url = sprintf(this.urlAcoesRealizadas);

        return new Promise((resolve, reject) => {
            this.http.post(url, params)
                .map(res => res.json())
                .subscribe(data => {
                    if (data.codigoMensagem == 0) {
                        resolve(data.objeto);
                    } else {
                        reject(data.mensagem);
                    }
                }, err => {
                    reject(err);
                });
        });

    }

}