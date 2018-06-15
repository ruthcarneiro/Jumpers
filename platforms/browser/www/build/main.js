webpackJsonp([0],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceRetorno; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sprintf_js__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_constantes__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ServiceRetorno = (function () {
    function ServiceRetorno(http, util) {
        this.http = http;
        this.util = util;
        this.urlGaleria = __WEBPACK_IMPORTED_MODULE_5__providers_constantes__["a" /* ADDRESS */] + "/galeria";
        this.urlAcoesFuturas = __WEBPACK_IMPORTED_MODULE_5__providers_constantes__["a" /* ADDRESS */] + "/acoesfuturas";
        this.urlAcoesRealizadas = __WEBPACK_IMPORTED_MODULE_5__providers_constantes__["a" /* ADDRESS */] + "/acoesrealizadas";
    }
    ServiceRetorno.prototype.getData = function (params, path) {
        if (path === void 0) { path = "/galeria"; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var url;
            return __generator(this, function (_a) {
                url = Object(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__["sprintf"])(this.urlGaleria);
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.http.post(url, params)
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            console.log(data);
                            if (data.codigoMensagem == 0) {
                                resolve(data.objeto);
                            }
                            else {
                                reject(data.mensagem);
                            }
                        }, function (err) {
                            reject(err);
                        });
                    })];
            });
        });
    };
    ServiceRetorno.prototype.recuperaAcoesFuturas = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var url;
            return __generator(this, function (_a) {
                url = Object(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__["sprintf"])(this.urlAcoesFuturas);
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.http.post(url, params)
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            if (data.codigoMensagem == 0) {
                                resolve(data.objeto);
                            }
                            else {
                                reject(data.mensagem);
                            }
                        }, function (err) {
                            reject(err);
                        });
                    })];
            });
        });
    };
    ServiceRetorno.prototype.recuperaAcoesRealizadas = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var url;
            return __generator(this, function (_a) {
                url = Object(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__["sprintf"])(this.urlAcoesRealizadas);
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.http.post(url, params)
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            if (data.codigoMensagem == 0) {
                                resolve(data.objeto);
                            }
                            else {
                                reject(data.mensagem);
                            }
                        }, function (err) {
                            reject(err);
                        });
                    })];
            });
        });
    };
    ServiceRetorno = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_util__["a" /* Util */]])
    ], ServiceRetorno);
    return ServiceRetorno;
}());

//# sourceMappingURL=service-retorno.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Users\p806238\Documents\Projetos\clean\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="azulLogo">\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    \n    <ion-title ion-text color="light" vertical-align="center" class="fontSegoe">HOME</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="cardColor">  \n  <div><img src="assets/bannerHome2.png" class="imageHome"></div> \n\n  <div class="sobreJumpers">\n      <h1><strong>Bem Vindo,</strong></h1>\n      <p>Vou te contar um pouquinho sobre quem somos, caso queira maiores informações, entre na parte de Nossa História no menu ao lado.</p>\n      <p>Nosso grupo é composto por jovens estudantes e adultos, que estão sempre dispostos a levar alegrias e instalar sorrisos no rostinho de cada um por onde passa.</p>\n      <p>O projeto não têm um público específico, estamos dispostos a mover o mundo e quebrar barreiras para ajudar quem for necessário, independente de idade, região ou raça, viemos trazer o bem para o próximo.</p>\n\n      <p class="semear">Semeando felicidade, colhendo sorrisos.</p>\n  </div>  \n</ion-content>'/*ion-inline-end:"D:\Users\p806238\Documents\Projetos\clean\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoricoPage = (function () {
    function HistoricoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HistoricoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-historico',template:/*ion-inline-start:"D:\Users\p806238\Documents\Projetos\clean\src\pages\historico\historico.html"*/'<ion-header>\n\n  <ion-navbar color="azulLogo">\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    \n\n    <ion-title ion-text color="light" vertical-align="center" class="fontSegoe">QUEM SOMOS</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cardColor">\n\n  <div class="sobreJumpers">\n\n    <h3>Prazer, </h3>\n\n    <h5>Somos os Jumpers da Alegria, e viemos te contar um pouquinho sobre nossa história.</h5>	\n\n    <div align="center"><img src="assets/quemSomos3.jpg"></div>\n\n\n\n    <h6>Como tudo começou...</h6>\n\n    <p>Tudo começou com um grupo de jovens universitários que possuíam um mesmo objetivo. Estes tinha a vontade e o desejo de semear o Bem por onde passassem.</p>\n\n    <p>Com isso o objetivo e a iniciativa foi evoluindo, fizemos visitas em hospitais, levamos comida e roupas as ruas para que assim muitos moradores tivessem o que comer\n\n    e o que vestir, para assim se aquecerem nas noites frias, além disso, já realizamos brincadeiras com várias crianças, o que acabou se tornando incontável, as palhaçadas são constantes, \n\n    com o único objetivo de a alegria semear, são tantas palhaçadas que de muitas não lembramos.</p>\n\n    <p>Quando a causa solicitou, até de palhaço mesmo nos vestimos para um sorriso ganhar. Por aqui muitos já passaram e muitos ainda vão passar, \n\n      são tantas boas pessoas que vira prazeroso lembrar, cada um com seu jeito, independente de onde veio, sempre chegam para somar.</p>\n\n\n\n    <h6>Quem somos atualmente...</h6>\n\n    <p>Atualmente somos um grupo formados por jovens, adultos ou idosos, que podem ou não estarem estudandos e ou empregados, o único critério que realmente importa para fazer parte do \n\n      Jumpers é a vontade de querer fazer o bem, critério esse que muita das vezes é a única semelhança entre nossos integrantes.</p>\n\n    <p>Seja com festas, doações, brincadeiras, visitas, músicas ou simplesmente com um abraço.</p>\n\n    <p>Almejamos a felicidade, não só nossa, mas de todos que pudermos alcançar, a nossa felicidade vem como consequência e um sorriso...aquele sorriso...é nossa maior recompensa.</p>\n\n    <br>\n\n    <h6 align="right">Nossa missão é fazer o bem, venha semear a felicidade conosco! <ion-icon name="md-happy" style="font-size: 30px; margin-left: 10px;"></ion-icon></h6>\n\n\n\n    <!--<div class="col-xs-12 col-sm-12 col-md-4 imagens">		\n\n      <img src="assets/quemSomos1.jpg">\n\n    </div>-->\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\Users\p806238\Documents\Projetos\clean\src\pages\historico\historico.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HistoricoPage);
    return HistoricoPage;
}());

//# sourceMappingURL=historico.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_service_retorno__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AcoesPage = (function () {
    function AcoesPage(navCtrl, navParams, util, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.util = util;
        this.service = service;
        this.acoesrealizadas = [];
        this.apresentaDados();
    }
    AcoesPage.prototype.apresentaDados = function () {
        this.dataset = [[{ title: "Ação de Páscoa,",
                    "descricao": "A ação ocorreu no sábado de páscoa do ano de 2018, onde foram arrecadados barras de chocolate e confeccionados ovos de páscoa, para crianças carantes. Foi um projeto muito bacana e emocionante." }]];
        this.dataset2 = [[{ title: "Sopão Solidário,",
                    "descricao": "Sopão realizado nas ruas de Belo Horizonte e região metropolitana, onde foram arrecadados alimentos com diversas pessoas, e produzido grande quantidade de sopa para distribuir a pessoas que necessitavam de alimento." }]];
    };
    AcoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-acoes',template:/*ion-inline-start:"D:\Users\p806238\Documents\Projetos\clean\src\pages\acoes\acoes.html"*/'<ion-header>\n\n  <ion-navbar color="azulLogo">\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    \n\n    <ion-title ion-text color="light" vertical-align="center" class="fontSegoe">AÇÕES JÁ REALIZADAS</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cardColor">  		\n\n  <ion-card class="cardLayout">\n\n    <div class="row">\n\n				<div class="col-xs-12 col-sm-8 col-md-8 componente">\n\n          <ion-card-content>\n\n              <label-generator [data]="dataset"></label-generator>\n\n          </ion-card-content>\n\n				</div>\n\n        <div class="col-xs-12 col-sm-4 col-md-4 imagem">\n\n          <img src="assets/galeria4.jpg">\n\n				</div>\n\n    </div>\n\n  </ion-card>\n\n  <ion-card class="cardLayout">\n\n      <ion-card-content>\n\n          <label-generator [data]="dataset2"></label-generator>\n\n      </ion-card-content>\n\n  </ion-card>  \n\n</ion-content>'/*ion-inline-end:"D:\Users\p806238\Documents\Projetos\clean\src\pages\acoes\acoes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_util__["a" /* Util */],
            __WEBPACK_IMPORTED_MODULE_3__service_service_retorno__["a" /* ServiceRetorno */]])
    ], AcoesPage);
    return AcoesPage;
}());

//# sourceMappingURL=acoes.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcoesFuturasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_service_retorno__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AcoesFuturasPage = (function () {
    function AcoesFuturasPage(navCtrl, navParams, util, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.util = util;
        this.service = service;
        this.acoesfuturas = [];
    }
    AcoesFuturasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-acoesfuturas',template:/*ion-inline-start:"D:\Users\p806238\Documents\Projetos\clean\src\pages\acoesfuturas\acoesfuturas.html"*/'<ion-header>\n\n  <ion-navbar color="azulLogo">\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    \n\n    <ion-title ion-text color="light" vertical-align="center" class="fontSegoe">AÇÕES A SEREM REALIZADAS</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cardColor">\n\n  <p *ngIf="!dataset" style="text-align: center; padding: 10%; font-family: Century Gothic;">INFELIZMENTE NÃO POSSUÍMOS NENHUMA AÇÃO FUTURA AINDA CADASTRADA.</p>\n\n  <ion-card class="cardLayout" *ngIf="dataset">      \n\n      <ion-card-content>\n\n          <label-generator [data]="dataset"></label-generator>\n\n      </ion-card-content>\n\n  </ion-card>  \n\n</ion-content>'/*ion-inline-end:"D:\Users\p806238\Documents\Projetos\clean\src\pages\acoesfuturas\acoesfuturas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_util__["a" /* Util */],
            __WEBPACK_IMPORTED_MODULE_3__service_service_retorno__["a" /* ServiceRetorno */]])
    ], AcoesFuturasPage);
    return AcoesFuturasPage;
}());

//# sourceMappingURL=acoesfuturas.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcoesSugeridasPage; });
/* unused harmony export AcoesSugerir */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_util__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_constantes__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_service_cadastro__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_mail_service__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AcoesSugeridasPage = (function () {
    function AcoesSugeridasPage(util, http, formBuilder, navCtrl, viewCtrl, alertCtrl, service, mailProvider) {
        this.util = util;
        this.http = http;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.mailProvider = mailProvider;
        this.masktelefone = __WEBPACK_IMPORTED_MODULE_2__providers_constantes__["c" /* MTELEFONE */];
        this.submitAttempt = false;
        this.dados = {};
        this.myForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            telefone: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            local: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            resumo: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])]
        });
        this.model = new AcoesSugerir();
    }
    AcoesSugeridasPage.prototype.changeStatus = function (value) {
        if (value == 'Enviar')
            document.getElementById('btnSend').innerText = 'Enviando';
        if (value == 'Enviando')
            document.getElementById('btnSend').innerText = 'Enviar Novo';
    };
    AcoesSugeridasPage.prototype.send = function () {
        var _this = this;
        this.submitAttempt = true;
        var userdata = JSON.parse(JSON.stringify('DESEJO SUGERIR NOVAS AÇÕES PARA O PROJETO. ' +
            '\nE-MAIL: ' + this.dados.email +
            '\nTELEFONE: ' + this.dados.telefone +
            '\nLOCAL: ' + this.dados.local +
            '\nRESUMO SOBRE: ' + this.dados.resumo));
        this.model.message = userdata;
        if (!this.myForm.valid) {
            this.util.showMessageAsToast("Por favor, preencha o formulário corretamente antes de enviar.");
            return;
        }
        else {
            // Quando o cara clicar no botão, já devemos mudar o texto pra indicar que algo está acontecendo realmente
            this.changeStatus('Enviar');
            // Aqui acontece a chamada do provider/service que conversa com a APIEmail.
            // Estamos passando pra lá apenas um parametro, que é a mensagem do email.
            this.mailProvider.sendMail(this.model.message)
                .then(function (result) {
                alert('Email enviado com sucesso? ' + result.status);
                _this.changeStatus('Enviando');
            })
                .catch(function (error) {
                alert('Email enviado com sucesso? ' + error.status);
                _this.changeStatus('Enviando');
            });
        }
    };
    AcoesSugeridasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-acoessugerir',template:/*ion-inline-start:"D:\Users\p806238\Documents\Projetos\clean\src\pages\acoessugerir\acoessugerir.html"*/'﻿<ion-header>\n\n  <ion-navbar color="azulLogo">\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    \n\n    <ion-title ion-text color="light" vertical-align="center" class="fontSegoe">AÇÕES A SEREM SUGERIDAS</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cardColor">\n\n    <div class="textoJumpers">\n\n        <h2>Algumas informações,</h2>\n\n        <p>Antes de sugerir, gostariamos de informar que este é um projeto sério, e que cada sugestão passará por uma avaliação de nossos integrantes. \n\n            Caso sua sugestão seja aprovada, entraremos em contato para obter maiores informações e colocarmos em prática novas ações.</p>\n\n        <p>Desde já, agradecemos sua colaboração, toda ajuda é bem vinda.</p>\n\n    </div>\n\n\n\n    <ion-card class="sobreJumpers">\n\n            <form [formGroup]="myForm" class="marginRight">            \n\n                <ion-item>\n\n                    <ion-label floating>Seu E-Mail</ion-label>\n\n                    <ion-input formControlName="email" maxlength="80" type="text" [(ngModel)]=\'dados.email\' clearInput></ion-input>\n\n                </ion-item>\n\n                <ion-item no-lines *ngIf="!myForm.controls.email.valid && submitAttempt" class="invalid">\n\n                    Campo obrigatório.\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <ion-label floating>Seu Telefone</ion-label>\n\n                    <ion-input formControlName="telefone" maxlength="15" type="text" [(ngModel)]=\'dados.telefone\' [brmasker]="masktelefone" clearInput></ion-input>\n\n                </ion-item>\n\n                <ion-item no-lines *ngIf="!myForm.controls.telefone.valid && submitAttempt" class="invalid">\n\n                    Campo obrigatório.\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <ion-label floating>Local da ação</ion-label>\n\n                    <ion-input formControlName="local" maxlength="100" type="text" [(ngModel)]=\'dados.local\' clearInput></ion-input>\n\n                </ion-item>\n\n                <ion-item no-lines *ngIf="!myForm.controls.local.valid && submitAttempt" class="invalid">\n\n                    Campo obrigatório.\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <ion-label floating>Breve resumo sobre a sugestão</ion-label>\n\n                    <ion-textarea formControlName="resumo" rows="5" maxLength="3000" [(ngModel)]=\'dados.resumo\' clearInput></ion-textarea>\n\n                </ion-item>\n\n\n\n            <div padding class="footer">\n\n                <button ion-button outline right show-when="large" color="azulLogo"\n\n                        id="btnSend" type="submit" (click)="send()">SALVAR\n\n                </button>\n\n                <button ion-button outline block show-when="small" color="azulLogo"\n\n                        id="btnSend" type="submit" (click)="send()">SALVAR\n\n                </button>\n\n            </div>\n\n\n\n            </form>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\Users\p806238\Documents\Projetos\clean\src\pages\acoessugerir\acoessugerir.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_util__["a" /* Util */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__service_service_cadastro__["a" /* ServiceCadastro */],
            __WEBPACK_IMPORTED_MODULE_7__providers_mail_service__["a" /* MailServiceProvider */]])
    ], AcoesSugeridasPage);
    return AcoesSugeridasPage;
}());

var AcoesSugerir = (function () {
    function AcoesSugerir() {
    }
    return AcoesSugerir;
}());

//# sourceMappingURL=acoessugerir.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaleriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GaleriaPage = (function () {
    function GaleriaPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    GaleriaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-galeria',template:/*ion-inline-start:"D:\Users\p806238\Documents\Projetos\clean\src\pages\galeria\galeria.html"*/'<ion-header>\n\n  <ion-navbar color="azulLogo">\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    \n\n    <ion-title ion-text color="light" vertical-align="center" class="fontSegoe">GALERIA DE FOTOS</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cardColor">\n\n   <div class="row sobreJumpersIntegrantes" align="center">\n\n				<div class="col-xs-12 col-sm-6 col-md-6 imagem">		\n\n					<img src="assets/galeria1.jpg">\n\n          <p><strong> Projeto:</strong> Arrecadação de agasalhos para moradores de rua.</p>\n\n				</div>	\n\n\n\n        <div class="col-xs-12 col-sm-6 col-md-6 imagem">		\n\n					<img src="assets/galeria7.jpg">\n\n          <p><strong> Projeto:</strong> Distribuição de sopa para moradores de rua.</p>\n\n				</div>\n\n\n\n        <div class="col-xs-12 col-sm-6 col-md-6 imagens">		\n\n					<img src="assets/galeria2.jpg">\n\n          <p><strong> Projeto:</strong> Caixinha solidária, para arrecadar doações.</p>\n\n				</div>\n\n\n\n         <div class="col-xs-12 col-sm-6 col-md-6 imagens">		\n\n					<img src="assets/galeria4.jpg">\n\n          <p><strong> Projeto:</strong> Entrega de Ovos de Páscoa para crianças carentes.</p>\n\n				</div>\n\n\n\n        <div class="col-xs-12 col-sm-6 col-md-6 imagens">		\n\n					<img src="assets/galeria3.jpg">\n\n          <p><strong> Projeto:</strong> Entrega de Ovos de Páscoa para crianças carentes.</p>\n\n				</div>\n\n\n\n        <div class="col-xs-12 col-sm-6 col-md-6 imagens">		\n\n					<img src="assets/galeria5.jpg">\n\n          <p><strong> Projeto:</strong> Entrega de Ovos de Páscoa para crianças carentes.</p>\n\n				</div>        \n\n		</div>\n\n</ion-content>'/*ion-inline-end:"D:\Users\p806238\Documents\Projetos\clean\src\pages\galeria\galeria.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], GaleriaPage);
    return GaleriaPage;
}());

//# sourceMappingURL=galeria.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JumpersPage; });
/* unused harmony export Jumpers */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_util__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_constantes__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_service_cadastro__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_mail_service__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var JumpersPage = (function () {
    function JumpersPage(util, http, navCtrl, viewCtrl, formBuilder, alertCtrl, service, mailProvider) {
        this.util = util;
        this.http = http;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.mailProvider = mailProvider;
        this.masktelefone = __WEBPACK_IMPORTED_MODULE_2__providers_constantes__["c" /* MTELEFONE */];
        this.submitAttempt = false;
        this.dados = {};
        this.myForm = formBuilder.group({
            nome: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            telefone: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            regiao: [''],
        });
        this.model = new Jumpers();
    }
    JumpersPage.prototype.changeStatus = function (value) {
        if (value == 'Enviar')
            document.getElementById('btnSend').innerText = 'Enviando';
        if (value == 'Enviando')
            document.getElementById('btnSend').innerText = 'Enviar Novo';
    };
    JumpersPage.prototype.send = function () {
        var _this = this;
        this.submitAttempt = true;
        var userdata = JSON.parse(JSON.stringify('DESEJO COLABORAR COM O PROJETO ATRAVÉS DE DOAÇÕES. ' +
            '\nNOME: ' + this.dados.nome +
            '\nE-MAIL: ' + this.dados.email +
            '\nTELEFONE: ' + this.dados.telefone +
            '\nREGIÃO: ' + this.dados.regiao));
        this.model.message = userdata;
        if (!this.myForm.valid) {
            this.util.showMessageAsToast("Por favor, preencha o formulário corretamente antes de enviar.");
            return;
        }
        else {
            // Quando o cara clicar no botão, já devemos mudar o texto pra indicar que algo está acontecendo realmente
            this.changeStatus('Enviar');
            // Aqui acontece a chamada do provider/service que conversa com a APIEmail.
            // Estamos passando pra lá apenas um parametro, que é a mensagem do email.
            this.mailProvider.sendMail(this.model.message)
                .then(function (result) {
                alert('Email enviado com sucesso? ' + result.status);
                _this.changeStatus('Enviando');
            })
                .catch(function (error) {
                alert('Email enviado com sucesso? ' + error.status);
                _this.changeStatus('Enviando');
            });
        }
    };
    JumpersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-jumpers',template:/*ion-inline-start:"D:\Users\p806238\Documents\Projetos\clean\src\pages\jumpers\jumpers.html"*/'<ion-header>\n\n  <ion-navbar color="azulLogo">\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    \n\n    <ion-title ion-text color="light" vertical-align="center" class="fontSegoe">QUERO PARTICIPAR SENDO UM DOADOR</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cardColor">\n\n    <div class="textoJumpers">\n\n        <h2>Como faço para ser um Doador?</h2>\n\n        <p>Olá, você precisa realizar este breve cadastro, para que assim possamos contar com você. Os dados são mínimos para que possamos nos comunicar. </p>\n\n        <p>Através dos seus dados poderemos saber em qual região você deseja realizar sua doação para que possamos deslocar alguém para receber a doação e uma data média, para que próximo \n\n        a essa data possamos entrar em contato e confirmar horário e local. </p>\n\n    </div>\n\n\n\n    <ion-card class="sobreJumpers">\n\n        <form [formGroup]="myForm" class="marginRight">\n\n\n\n            <ion-item>\n\n                <ion-label floating>Nome</ion-label>\n\n                <ion-input formControlName="nome" maxlength="200" type="text" [(ngModel)]=\'dados.nome\' clearInput></ion-input>\n\n            </ion-item>\n\n            <ion-item no-lines *ngIf="!myForm.controls.nome.valid && submitAttempt" class="invalid">\n\n                Campo obrigatório.\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label floating>E-Mail</ion-label>\n\n                <ion-input formControlName="email" maxlength="200" type="text" [(ngModel)]=\'dados.email\' clearInput></ion-input>\n\n            </ion-item>\n\n            <ion-item no-lines *ngIf="!myForm.controls.email.valid && submitAttempt" class="invalid">\n\n                Campo obrigatório.\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label floating>Telefone</ion-label>\n\n                <ion-input formControlName="telefone" maxlength="15" type="text" [brmasker]="masktelefone" [(ngModel)]=\'dados.telefone\' clearInput></ion-input>\n\n            </ion-item>\n\n            <ion-item no-lines *ngIf="!myForm.controls.telefone.valid && submitAttempt" class="invalid">\n\n                Campo obrigatório.\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label floating>Região e Data média</ion-label>\n\n                <ion-textarea formControlName="regiao" rows="3" maxLength="1600" [(ngModel)]=\'dados.regiao\' clearInput></ion-textarea>\n\n            </ion-item>\n\n			\n\n            <div padding class="footer">\n\n                <button ion-button outline right show-when="large" color="azulLogo"\n\n                        id="btnSend" type="submit" (click)="send()">SALVAR\n\n                </button>\n\n                <button ion-button outline block show-when="small" color="azulLogo"\n\n                        id="btnSend" type="submit" (click)="send()">SALVAR\n\n                </button>\n\n            </div>\n\n        </form>\n\n    </ion-card >  \n\n</ion-content>'/*ion-inline-end:"D:\Users\p806238\Documents\Projetos\clean\src\pages\jumpers\jumpers.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_util__["a" /* Util */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__service_service_cadastro__["a" /* ServiceCadastro */],
            __WEBPACK_IMPORTED_MODULE_7__providers_mail_service__["a" /* MailServiceProvider */]])
    ], JumpersPage);
    return JumpersPage;
}());

var Jumpers = (function () {
    function Jumpers() {
    }
    return Jumpers;
}());

//# sourceMappingURL=jumpers.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JumpersIntegrantePage; });
/* unused harmony export JumpersIntegrante */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_util__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_constantes__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_global__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_service_cadastro__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_mail_service__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var JumpersIntegrantePage = (function () {
    function JumpersIntegrantePage(http, util, formBuilder, navCtrl, viewCtrl, alertCtrl, service, mailProvider) {
        this.http = http;
        this.util = util;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.mailProvider = mailProvider;
        this.masktelefone = __WEBPACK_IMPORTED_MODULE_2__providers_constantes__["c" /* MTELEFONE */];
        this.datemask = __WEBPACK_IMPORTED_MODULE_2__providers_constantes__["b" /* MDATE */];
        this.submitAttempt = false;
        this.dados = {};
        var idadeMinimaData = new Date();
        idadeMinimaData.setHours(0);
        idadeMinimaData.setMinutes(0);
        idadeMinimaData.setSeconds(0);
        idadeMinimaData.setMilliseconds(0);
        idadeMinimaData.setFullYear(idadeMinimaData.getFullYear() - 16);
        this.myForm = formBuilder.group({
            nome: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])],
            dataNascimento: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__validators_global__["a" /* GlobalValidator */].compareDates(idadeMinimaData)])],
            telefone: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])]
        });
        this.model = new JumpersIntegrante();
    }
    JumpersIntegrantePage.prototype.changeStatus = function (value) {
        if (value == 'Enviar')
            document.getElementById('btnSend').innerText = 'Enviando';
        if (value == 'Enviando')
            document.getElementById('btnSend').innerText = 'Enviar Novo';
    };
    JumpersIntegrantePage.prototype.send = function () {
        var _this = this;
        this.submitAttempt = true;
        var userdata = JSON.parse(JSON.stringify('DESEJO FAZER PARTE DO PROJETO, ALEGRANDO TODOS POR ONDE PASSARMOS. ' +
            'NOME: ' + this.dados.nome +
            '\nDATA DE NASCIMENTO: ' + this.dados.dataNascimento +
            '\nE-MAIL: ' + this.dados.email +
            '\nTELEFONE: ' + this.dados.telefone));
        this.model.message = userdata;
        if (!this.myForm.valid) {
            this.util.showMessageAsToast("Por favor, preencha o formulário corretamente antes de enviar.");
            return;
        }
        else {
            // Quando o cara clicar no botão, já devemos mudar o texto pra indicar que algo está acontecendo realmente
            this.changeStatus('Enviar');
            // Aqui acontece a chamada do provider/service que conversa com a APIEmail.
            // Estamos passando pra lá apenas um parametro, que é a mensagem do email.
            this.mailProvider.sendMail(this.model.message)
                .then(function (result) {
                alert('Email enviado com sucesso? ' + result.status);
                _this.changeStatus('Enviando');
            })
                .catch(function (error) {
                alert('Email enviado com sucesso? ' + error.status);
                _this.changeStatus('Enviando');
            });
        }
    };
    JumpersIntegrantePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-jumpersintegrante',template:/*ion-inline-start:"D:\Users\p806238\Documents\Projetos\clean\src\pages\jumpersintegrante\jumpersintegrante.html"*/'<ion-header>\n\n  <ion-navbar color="azulLogo">\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    \n\n    <ion-title ion-text color="light" vertical-align="center" class="fontSegoe">QUERO PARTICIPAR SENDO UM JUMPERS</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cardColor">\n\n    <div class="textoJumpers">\n\n        <h2>Como faço para ser um Jumper?</h2>\n\n        <p>Olá, você precisa realizar este breve cadastro, para que assim possamos contar com você. Os dados são mínimos para que possamos nos comunicar. </p>\n\n        <p>Além do mais, os integrantes Jumpers tem uma aba a mais no menu, onde ele pode sugerir ações a serem realizadas ou projetos a serem apoiados. </p>\n\n    </div>\n\n\n\n    <ion-card class="sobreJumpers">\n\n      <form [formGroup]="myForm" class="marginRight">            \n\n            <ion-item>\n\n                <ion-label floating>Nome</ion-label>\n\n                <ion-input formControlName="nome" maxlength="200" type="text" [(ngModel)]=\'dados.nome\' clearInput></ion-input>\n\n            </ion-item>\n\n            <ion-item no-lines *ngIf="!myForm.controls.nome.valid && submitAttempt" class="invalid">\n\n                Campo obrigatório.\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label floating>Data de Nascimento</ion-label>\n\n                <ion-input formControlName="dataNascimento" maxlength="10" type="text" [brmasker]="datemask" [(ngModel)]=\'dados.dataNascimento\' clearInput></ion-input>\n\n            </ion-item>\n\n            <ion-item no-lines *ngIf="!myForm.controls.dataNascimento.valid && submitAttempt" class="invalid">\n\n                Campo obrigatório.\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label floating>E-Mail</ion-label>\n\n                <ion-input formControlName="email" maxlength="200" type="text" [(ngModel)]=\'dados.email\' clearInput></ion-input>\n\n            </ion-item>\n\n            <ion-item no-lines *ngIf="!myForm.controls.email.valid && submitAttempt" class="invalid">\n\n                Campo obrigatório.\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label floating>Telefone</ion-label>\n\n                <ion-input formControlName="telefone" maxlength="15" type="text" [brmasker]="masktelefone" [(ngModel)]=\'dados.telefone\' clearInput></ion-input>\n\n            </ion-item>\n\n            <ion-item no-lines *ngIf="!myForm.controls.telefone.valid && submitAttempt" class="invalid">\n\n                Campo obrigatório.\n\n            </ion-item>             \n\n\n\n            <div padding class="footer">\n\n                <button ion-button outline right show-when="large" color="azulLogo"\n\n                        id="btnSend" type="submit" (click)="send()">SALVAR\n\n                </button>\n\n                <button ion-button outline block show-when="small" color="azulLogo"\n\n                        id="btnSend" type="submit" (click)="send()">SALVAR\n\n                </button>\n\n            </div>\n\n        </form>        \n\n    </ion-card>  \n\n</ion-content>'/*ion-inline-end:"D:\Users\p806238\Documents\Projetos\clean\src\pages\jumpersintegrante\jumpersintegrante.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__providers_util__["a" /* Util */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__service_service_cadastro__["a" /* ServiceCadastro */],
            __WEBPACK_IMPORTED_MODULE_8__providers_mail_service__["a" /* MailServiceProvider */]])
    ], JumpersIntegrantePage);
    return JumpersIntegrantePage;
}());

var JumpersIntegrante = (function () {
    function JumpersIntegrante() {
    }
    return JumpersIntegrante;
}());

//# sourceMappingURL=jumpersintegrante.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EquipePage = (function () {
    function EquipePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EquipePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-equipe',template:/*ion-inline-start:"D:\Users\p806238\Documents\Projetos\clean\src\pages\equipe\equipe.html"*/'<ion-header>\n\n  <ion-navbar color="azulLogo">\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    \n\n    <ion-title ion-text color="light" vertical-align="center" class="fontSegoe">NOSSA EQUIPE</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cardColor">\n\n   <div class="row sobreJumpersIntegrantes" align="center">\n\n				<div class="col-xs-12 col-sm-6 col-md-6 imagem">		\n\n					<img src="assets/carolyne.jpg">\n\n          <p><strong> Nome:</strong> Carolyne Carvalho</p>\n\n          <p><strong> Idade:</strong> 18 anos</p>\n\n          <p><strong> Outros:</strong> Estudante de Fisioterapia</p>\n\n          <p><strong> Porque ser um Jumpers:</strong> Me sinto feliz e com muita ânsia de sucesso, espero que seja o começo de um grupo que vá atingir e levar alegria para todos\n\n          que encontrarmos e ajudarmos.</p>\n\n				</div>	\n\n\n\n        <div class="col-xs-12 col-sm-6 col-md-6 imagem">		\n\n					<img src="assets/isabella.jpg">\n\n          <p><strong> Nome:</strong> Isabella Cristina</p>\n\n          <p><strong> Idade:</strong> 20 anos</p>\n\n          <p><strong> Outros:</strong> Estudante de Fisioterapia</p>\n\n          <p><strong> Porque ser um Jumpers:</strong> Cada degrau um sorriso, cada evolução uma conquista e é assim que o sonho começa a se realizar.</p>\n\n				</div>\n\n\n\n        <div class="col-xs-12 col-sm-6 col-md-6 imagens">		\n\n					<img src="assets/juliana.jpg">\n\n          <p><strong> Nome:</strong> Juliana</p>\n\n          <p><strong> Idade:</strong> 32 anos</p>\n\n          <p><strong> Outros:</strong> Estudante de Fisioterapia</p>\n\n          <p><strong> Porque ser um Jumpers:</strong> É muito importante ajudar as pessoas, me sinto muito feliz podendo ajudar com o pouco que tenho, às vezes o pouco para nós é muito para o outro.</p>\n\n				</div>\n\n\n\n         <div class="col-xs-12 col-sm-6 col-md-6 imagens">		\n\n					<img src="assets/tatiane.jpg">\n\n          <p><strong> Nome:</strong> Tatiane Stephanie</p>\n\n          <p><strong> Idade:</strong> 19 anos</p>\n\n          <p><strong> Outros:</strong> Estudante de Fisioterapia</p>\n\n          <p><strong> Porque ser um Jumpers:</strong> O projeto vem despertando em mim o lado mais humano, aquela alegria que as vezes no dia a dia não sabemos expressar.</p>\n\n				</div>\n\n\n\n        <div class="col-xs-12 col-sm-6 col-md-6 imagens">		\n\n					<img src="assets/thalita.jpg">\n\n          <p><strong> Nome:</strong> Thalita Gomes</p>\n\n          <p><strong> Idade:</strong> 25 anos</p>\n\n          <p><strong> Outros:</strong> Estudante de Fisioterapia</p>\n\n          <p><strong> Porque ser um Jumpers:</strong> Quando resolvi juntar todos para criar o Jumpers da Alegria nada mais era do que levar alegria á aqueles que \n\n          necessitam de um pouco de amor e carinho. A sensação de estar proporcionando algo de bom para o próximo é surpreendente. É algo que beneficia outras pessoas e também quem faz. \n\n          Afinal, a melhor maneira de ser feliz é contribuir para a felicidade do outro.</p>\n\n				</div>\n\n\n\n        <div class="col-xs-12 col-sm-6 col-md-6 imagens">		\n\n					<img src="assets/yanka.jpg">\n\n          <p><strong> Nome:</strong> Yanka Coelho</p>\n\n          <p><strong> Idade:</strong> 19 anos</p>\n\n          <p><strong> Outros:</strong> Estudante de Fisioterapia</p>\n\n          <p><strong> Porque ser um Jumpers:</strong> É um imenso prazer poder fazer parte deste projeto!!! Jumpers da Alegria é um meio de fazer o bem para diversas pessoas, sem esperar\n\n          nada em troca. Ou melhor... Esperar a gratidão em forma de um sorriso.</p>\n\n				</div>     \n\n\n\n        <div class="col-xs-12 col-sm-6 col-md-6 imagens">		\n\n					<img src="assets/hycaro.jpg">\n\n          <p><strong> Nome:</strong> Hycaro Portinary</p>\n\n          <p><strong> Idade:</strong> 19 anos</p>\n\n          <p><strong> Outros:</strong> Estudante de Fisioterapia</p>\n\n          <p><strong> Porque ser um Jumpers:</strong> Poder levar alegria as pessoas e fazer elas sorrirem sem ao menos esperar nada em troca, resgatando aquele último fio de esperança que elas têm. \n\n          Não tem preço se dedicar ao próximo sem esperar nada é a maior maravilha do mundo.</p>\n\n				</div>\n\n\n\n        <div class="col-xs-12 col-sm-6 col-md-6 imagens">		\n\n					<img src="assets/samir.jpg">\n\n          <p><strong> Nome:</strong> Samir</p>\n\n          <p><strong> Idade:</strong> 22 anos</p>\n\n          <p><strong> Outros:</strong> Estudante de Fisioterapia</p>\n\n          <p><strong> Porque ser um Jumpers:</strong> Estou no grupo para transmitir tudo que Deus tem me abençoado, trazendo alegrias, amor e felicidades as pessoas.</p>\n\n				</div>\n\n        \n\n        <!--<div class="col-xs-12 col-sm-6 col-md-6 imagens">		\n\n					<img src="assets/daniel.jpg">\n\n          <p><strong> Nome:</strong> Daniel Eykel</p>\n\n          <p><strong> Idade:</strong> 22 anos</p>\n\n          <p><strong> Outros:</strong >Estudante de Análise de Sistemas</p>\n\n          <p><strong> Porque ser um Jumpers:</strong> </p>\n\n				</div>\n\n\n\n        <div class="col-xs-12 col-sm-6 col-md-6 imagens">		\n\n					<img src="assets/fabio.jpg" style="max-height: 485px;">\n\n          <p><strong> Nome:</strong> Fábio Rodrigues</p>\n\n          <p><strong> Idade:</strong> 19 anos</p>\n\n          <p><strong> Outros:</strong >Estudante de Fisioterapia</p>\n\n          <p><strong> Porque ser um Jumpers:</strong> Esse projeto, vaio na hora certa, sempre tive vontade de fazer parte de uma equipe que leva alegria a quem precisa e encontrei \n\n          no Jumpers da Alegria exatamente o que eu procurava. Vou dar o meu melhor, e espero levar o máximo de alegria a quem precisar.</p>\n\n				</div>-->\n\n		</div>\n\n</ion-content>'/*ion-inline-end:"D:\Users\p806238\Documents\Projetos\clean\src\pages\equipe\equipe.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], EquipePage);
    return EquipePage;
}());

//# sourceMappingURL=equipe.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_brmasker_ionic_3__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_service_cadastro__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_service_retorno__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_historico_historico__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_acoes_acoes__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_acoesfuturas_acoesfuturas__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_acoessugerir_acoessugerir__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_galeria_galeria__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_jumpers_jumpers__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_jumpersintegrante_jumpersintegrante__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_equipe_equipe__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_mail_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_util__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__componentes_componentes_module__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// IMPORT SERVICES


// IMPORT PAGES











// IMPORT PROVIDERS

// IMPORT COMPONENTS

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_historico_historico__["a" /* HistoricoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_acoes_acoes__["a" /* AcoesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_acoesfuturas_acoesfuturas__["a" /* AcoesFuturasPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_acoessugerir_acoessugerir__["a" /* AcoesSugeridasPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_galeria_galeria__["a" /* GaleriaPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_jumpers_jumpers__["a" /* JumpersPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_jumpersintegrante_jumpersintegrante__["a" /* JumpersIntegrantePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_equipe_equipe__["a" /* EquipePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_22__componentes_componentes_module__["a" /* CustomComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_historico_historico__["a" /* HistoricoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_acoes_acoes__["a" /* AcoesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_acoesfuturas_acoesfuturas__["a" /* AcoesFuturasPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_acoessugerir_acoessugerir__["a" /* AcoesSugeridasPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_galeria_galeria__["a" /* GaleriaPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_jumpers_jumpers__["a" /* JumpersPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_jumpersintegrante_jumpersintegrante__["a" /* JumpersIntegrantePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_equipe_equipe__["a" /* EquipePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__providers_util__["a" /* Util */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__service_service_cadastro__["a" /* ServiceCadastro */],
                __WEBPACK_IMPORTED_MODULE_9__service_service_retorno__["a" /* ServiceRetorno */],
                __WEBPACK_IMPORTED_MODULE_20__providers_mail_service__["a" /* MailServiceProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Util; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Util = (function () {
    function Util(alertCtrl, modalCtrl, toastCtrl, events, http, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.API_URL = 'http://18.218.230.177:8080/APIEmail/service/mail';
    }
    Util.prototype.showMessageAsToast = function (text) {
        var alert = this.toastCtrl.create({
            message: text,
            duration: 3000
        });
        alert.present();
    };
    Util.prototype.showLoadingProgress = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        this.loading.present();
    };
    Util.prototype.hideLoadingProgress = function () {
        if (this.loading)
            this.loading.dismiss();
    };
    Util.prototype.sendMail = function (message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = { message: message };
            console.log(data);
            //  Mano, aqui é onde a conversa acontece de fato, porque a mensagem já tá na mão e aí já passamos 2 caras na requisição POST:
            //  1 - URL da API + endpoint ( que no caso é o '/send')
            //  2 - objeto JSON (data) contendo a mensagem do email
            _this.http.post(_this.API_URL + '/send', data)
                .subscribe(function (result) {
                //Aqui o envio deu bom tá paaeee
                resolve({ "status": true });
            }, function (error) {
                //Aqui deu ruim na hora de enviar
                resolve({ "status": false });
            });
        });
    };
    Util = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* LoadingController */]])
    ], Util);
    return Util;
}());

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_historico_historico__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_acoes_acoes__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_acoesfuturas_acoesfuturas__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_acoessugerir_acoessugerir__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_galeria_galeria__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_jumpers_jumpers__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_jumpersintegrante_jumpersintegrante__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_equipe_equipe__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.paginas = [
            { titulo: 'Ações', componente: __WEBPACK_IMPORTED_MODULE_6__pages_acoes_acoes__["a" /* AcoesPage */] },
            { titulo: 'Galeria', componente: __WEBPACK_IMPORTED_MODULE_9__pages_galeria_galeria__["a" /* GaleriaPage */] },
            { titulo: 'Nossa História', componente: __WEBPACK_IMPORTED_MODULE_5__pages_historico_historico__["a" /* HistoricoPage */] },
            { titulo: 'Os Jumpers', componente: __WEBPACK_IMPORTED_MODULE_10__pages_jumpers_jumpers__["a" /* JumpersPage */] }
        ];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    /* SABER QUAL A PÁGINA QUE SERÁ CHAMADA DEPENDENDO DA OPÇÃO SELECIONADA */
    /*abrePagina(pagina){
      this.nav.setRoot(pagina.componente);
    }*/
    MyApp.prototype.acoesRealizadas = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_acoes_acoes__["a" /* AcoesPage */]);
    };
    MyApp.prototype.acoesRealizadasFuturas = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_acoesfuturas_acoesfuturas__["a" /* AcoesFuturasPage */]);
    };
    MyApp.prototype.acoesRealizadasSugerir = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_acoessugerir_acoessugerir__["a" /* AcoesSugeridasPage */]);
    };
    MyApp.prototype.galeria = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_galeria_galeria__["a" /* GaleriaPage */]);
    };
    MyApp.prototype.nossaHistoria = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_historico_historico__["a" /* HistoricoPage */]);
    };
    MyApp.prototype.nossaEquipe = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_equipe_equipe__["a" /* EquipePage */]);
    };
    MyApp.prototype.osJumpers = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_jumpers_jumpers__["a" /* JumpersPage */]);
    };
    MyApp.prototype.osJumpersIntegrante = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_jumpersintegrante_jumpersintegrante__["a" /* JumpersIntegrantePage */]);
    };
    MyApp.prototype.goHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Users\p806238\Documents\Projetos\clean\src\app\app.html"*/'<ion-split-pane>\n    <ion-menu when="xs" [content]="content" class="tirarScroll">\n    <ion-header class="headerPane">\n        <ion-navbar color="azulLogo" class="fontSegoe no-border" (click)="goHome();">\n            <ion-title text-center class="menuTitle fontSegoe">JUMPERS<img class="imagemQuebraCbc" src="assets/logo_palhaco_azul.jpg">ALEGRIA</ion-title>\n        </ion-navbar> \n    </ion-header>\n\n    <ion-content class="fontSegoe no-border">\n        <ion-list id="sidenav" class="cardColor fontSegoe">\n            <b ion-item menuClose class="menuButton"><strong>AÇÕES</strong></b>\n            <ion-item-group submenu [class.visible]="showSubmenu">\n                <ion-item no-lines submenu-item class="submenu" (click)="acoesRealizadas()" menuClose><ion-avatar item-left><img style="margin-left: 10px; width: 35px; height: auto; margin-top: 3px;" src="assets/logo_palhaco_pt_branco.jpg"></ion-avatar>AÇÕES PASSADAS</ion-item>\n                <ion-item no-lines submenu-item class="submenu" (click)="acoesRealizadasFuturas()" menuClose><ion-avatar item-left><img style="margin-left: 10px; width: 35px; height: auto; margin-top: 3px;" src="assets/logo_palhaco_pt_branco.jpg"></ion-avatar>AÇÕES FUTURAS</ion-item>\n                <ion-item submenu-item class="submenu" (click)="acoesRealizadasSugerir()" menuClose><ion-avatar item-left><img style="margin-left: 10px; width: 35px; height: auto; margin-top: 3px;" src="assets/logo_palhaco_pt_branco.jpg"></ion-avatar>SUGERIR AÇÕES</ion-item>\n            </ion-item-group>\n\n            <b ion-item menuClose class="menuButton"><strong>GALERIA</strong></b>\n            <ion-item-group submenu [class.visible]="showSubmenu">                \n                <ion-item submenu-item no-lines class="submenu" (click)="galeria()" menuClose><ion-avatar item-left><img style="margin-left: 10px; width: 35px; height: auto; margin-top: 3px;" src="assets/logo_palhaco_pt_branco.jpg"></ion-avatar>FOTOS DO PROJETO</ion-item>\n            </ion-item-group>\n\n            <b ion-item menuClose class="menuButton"><strong>QUEM SOMOS</strong></b>\n            <ion-item-group submenu [class.visible]="showSubmenu">                \n                <ion-item no-lines submenu-item class="submenu" (click)="nossaHistoria()" menuClose><ion-avatar item-left><img style="margin-left: 10px; width: 35px; height: auto; margin-top: 3px;" src="assets/logo_palhaco_pt_branco.jpg"></ion-avatar>CONHEÇA MAIS SOBRE</ion-item>\n                <ion-item no-lines submenu-item class="submenu" (click)="nossaEquipe()" menuClose><ion-avatar item-left><img style="margin-left: 10px; width: 35px; height: auto; margin-top: 3px;" src="assets/logo_palhaco_pt_branco.jpg"></ion-avatar>CONHEÇA NOSSA EQUIPE</ion-item>\n            </ion-item-group>\n\n            <b ion-item menuClose class="menuButton"><strong>QUERO PARTICIPAR</strong></b>\n            <ion-item-group submenu [class.visible]="showSubmenu">\n                <ion-item submenu-item no-lines class="submenu" (click)="osJumpers()" menuClose><ion-avatar item-left><img style="margin-left: 10px; width: 35px; height: auto; margin-top: 3px;" src="assets/logo_palhaco_pt_branco.jpg"></ion-avatar>QUERO SER UM DOADOR</ion-item>\n                <ion-item submenu-item no-lines class="submenu" (click)="osJumpersIntegrante()" menuClose><ion-avatar item-left><img style="margin-left: 10px; width: 35px; height: auto; margin-top: 3px;" src="assets/logo_palhaco_pt_branco.jpg"></ion-avatar>QUERO SER UM JUMPERS</ion-item>\n            </ion-item-group>           \n        </ion-list>        \n    </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" main #content></ion-nav> \n</ion-split-pane>\n'/*ion-inline-end:"D:\Users\p806238\Documents\Projetos\clean\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalValidator; });
var GlobalValidator = (function () {
    function GlobalValidator() {
    }
    GlobalValidator.mailFormat = function (control) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control && control.value && control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }
        return null;
    };
    GlobalValidator.datePtBr = function (control) {
        var REGEXP = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/;
        var testValidDate = function (d) {
            var dates = d.split("/");
            var finalDate = dates[2] + "-" + dates[1] + "-" + dates[0];
            return !isNaN(Date.parse(finalDate + "T00:00:00"));
        };
        if (control && control.value && control.value != "" && (control.value.length < 10 || !REGEXP.test(control.value) || !testValidDate(control.value))) {
            return { "invalidDate": true };
        }
        return null;
    };
    GlobalValidator.parseShortTermStringToDate = function (s) {
        var dates = s.split("/");
        var finalDate = dates[2] + "-" + dates[1] + "-" + dates[0];
        return new Date(Date.parse(finalDate + "T00:00:00"));
    };
    GlobalValidator.compareDates = function (dB) {
        return function (control) {
            var REGEXP = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/;
            var testValidDate = function (d) {
                var dates = d.split("/");
                var finalDate = dates[2] + "-" + dates[1] + "-" + dates[0];
                return !isNaN(Date.parse(finalDate + "T00:00:00"));
            };
            if (control && control.value && control.value != "") {
                if (control.value.length < 7 || !REGEXP.test(control.value) || !testValidDate(control.value)) {
                    return { "invalidDate": true };
                }
                var dA = GlobalValidator.parseShortTermStringToDate(control.value);
                if (dA.getTime() > dB.getTime()) {
                    return { "previousDate": true };
                }
            }
            return null;
        };
    };
    return GlobalValidator;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__labelgenerator_labelgenerator__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomComponentsModule = (function () {
    function CustomComponentsModule() {
    }
    CustomComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__labelgenerator_labelgenerator__["a" /* LabelGenerator */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__labelgenerator_labelgenerator__["a" /* LabelGenerator */],
            ]
        })
    ], CustomComponentsModule);
    return CustomComponentsModule;
}());

//# sourceMappingURL=componentes.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelGenerator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LabelGenerator = (function () {
    function LabelGenerator() {
    }
    LabelGenerator.prototype.executeClick = function (props) {
        if (props && props.click) {
            props.click();
        }
    };
    LabelGenerator.prototype.getPropClassName = function (props) {
        if (props && props.classname) {
            return props.classname;
        }
        else {
            return "";
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], LabelGenerator.prototype, "data", void 0);
    LabelGenerator = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'label-generator',template:/*ion-inline-start:"D:\Users\p806238\Documents\Projetos\clean\src\componentes\labelgenerator\labelgenerator.html"*/'<ion-grid>\n\n  <ion-row *ngFor="let rows of data">\n\n      <ion-col *ngFor="let cols of rows">\n\n        <ion-item no-lines [ngClass]="getPropClassName(cols.props)" (click)="executeClick(cols.props);" text-wrap>\n\n          <h2 style="font-family: Century Gothic"><strong>{{cols.title}}</strong></h2>\n\n          <p style="text-align: justify; padding-top: 10px;font-family: Century Gothic">{{cols.descricao}}</p>\n\n        </ion-item>\n\n      </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n'/*ion-inline-end:"D:\Users\p806238\Documents\Projetos\clean\src\componentes\labelgenerator\labelgenerator.html"*/
        })
    ], LabelGenerator);
    return LabelGenerator;
}());

//# sourceMappingURL=labelgenerator.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VERSION */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MTELEFONE; });
var VERSION = "1.0.0";
var ADDRESS = "http://18.218.230.177:8080/APIEmail/service/mail/send";
//Masks
var MDATE = { mask: '00/00/0000', len: 10 };
var MTELEFONE = { mask: '(00) 00000-0000', len: 15 };
//# sourceMappingURL=constantes.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceCadastro; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprintf_js__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_constantes__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






//import {AppStorageProvider} from './app-storage-provider';
var ServiceCadastro = (function () {
    function ServiceCadastro(http, util) {
        this.http = http;
        this.util = util;
        this.url = __WEBPACK_IMPORTED_MODULE_5__providers_constantes__["a" /* ADDRESS */];
    }
    ServiceCadastro.prototype.salvarIntegrante = function (integrante) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var url, param;
            return __generator(this, function (_a) {
                url = Object(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__["sprintf"])(this.url);
                param = integrante.nome, integrante.email, integrante.dataNascimento, integrante.telefone;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.http.post(url, param)
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            resolve(data.param);
                        }, function (err) {
                            reject(err);
                        });
                    })];
            });
        });
    };
    ServiceCadastro = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_util__["a" /* Util */]])
    ], ServiceCadastro);
    return ServiceCadastro;
}());

//# sourceMappingURL=service-cadastro.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MailServiceProvider = (function () {
    function MailServiceProvider(http) {
        this.http = http;
        this.API_URL = 'http://18.218.230.177:8080/APIEmail/service/mail';
    }
    // Esse aqui e o cara responsavel por conversar com a APIEmail.
    // O parametro recebido é justamente a mensage que vai no email
    MailServiceProvider.prototype.sendMail = function (message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = {
                message: message
            };
            //  Mano, aqui é onde a conversa acontece de fato, porque a mensagem já tá na mão e aí já passamos 2 caras na requisição POST:
            //  1 - URL da API + endpoint ( que no caso é o '/send')
            //  2 - objeto JSON (data) contendo a mensagem do email
            _this.http.post(_this.API_URL + '/send', data)
                .subscribe(function (result) {
                //Aqui o envio deu bom tá paaeee
                resolve({ "status": true });
            }, function (error) {
                //Aqui deu ruim na hora de enviar
                resolve({ "status": false });
            });
        });
    };
    MailServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MailServiceProvider);
    return MailServiceProvider;
}());

//# sourceMappingURL=mail-service.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map