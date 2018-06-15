import {Http, HttpModule, RequestOptions, Headers} from '@angular/http';
import {Storage} from '@ionic/storage';
import {Injectable} from '@angular/core';

export const STORAGE_USER_KEY = "USER_KEY_DATA";

@Injectable()
export class AppStorageProvider {
    
    constructor(public storage: Storage) {
    }

    setUser(dados) {
        this.storage.set(STORAGE_USER_KEY, dados);
    }

    async getUser() {
        return this.storage.get(STORAGE_USER_KEY);
    }

    //set, getperfil.
    setGaleria(dados) {
        this.storage.set("", dados);
    }

    getGaleria() {
        return this.storage.get("");
    }

    clearStorage() {}

}