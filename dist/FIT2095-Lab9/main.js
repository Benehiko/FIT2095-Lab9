(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actor/actor.component.css":
/*!*******************************************!*\
  !*** ./src/app/actor/actor.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/actor/actor.component.html":
/*!********************************************!*\
  !*** ./src/app/actor/actor.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>Actors DB System</h1>\n</div>\n<!-- The navigation bar -->\n<nav class=\"navbar navbar-expand-sm bg-light\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\" style=\"padding-left:0.2in\">\n      <a class=\"btn btn-primary\" (click)=\"changeSection(1)\">Home</a>\n    </li>\n    <li class=\"nav-item\" style=\"padding-left:0.2in\">\n      <a class=\"btn btn-primary\" (click)=\"changeSection(2)\">Add Actor</a>\n    </li>\n    <li class=\"nav-item\" style=\"padding-left:0.2in\">\n      <a class=\"btn btn-primary\" (click)=\"changeSection(3)\">Update Actor</a>\n    </li>\n    <li class=\"nav-item\" style=\"padding-left:0.2in\">\n      <a class=\"btn btn-primary\" (click)=\"changeSection(4)\">Delete Actor</a>\n    </li>\n  </ul>\n</nav>\n<!-- First section: Display all in a tble -->\n<div class=\"section\" *ngIf=\"section==1\">\n  <table class=\"table table-striped\">\n    <tr>\n      <th>Name</th>\n      <th>Birth Year</th>\n    </tr>\n    <tr *ngFor=\"let item of actorsDB\">\n      <td>{{item.name}}</td>\n      <td>{{item.bYear}}</td>\n    </tr>\n  </table>\n</div>\n<!-- Second Section: Add new actor -->\n<div class=\"section\" *ngIf=\"section==2\">\n  <div class=\"form-group\">\n    <label for=\"actorName\">Full Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"actorName\" [(ngModel)]=\"fullName\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"actorName\">Birth Year</label>\n    <input type=\"number\" class=\"form-control\" id=\"actorName\" [(ngModel)]=\"bYear\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSaveActor()\">Save Actor</button>\n</div>\n<!-- Section 3: Update actor -->\n<div class=\"section\" *ngIf=\"section==3\">\n  <table class=\"table table-striped\">\n    <tr>\n      <th>Name</th>\n      <th>Birth Year</th>\n      <th>Select!</th>\n    </tr>\n    <tr *ngFor=\"let item of actorsDB\">\n      <td>{{item.name}}</td>\n      <td>{{item.bYear}}</td>\n      <td>\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSelectUpdate(item)\">Update</button>\n      </td>\n    </tr>\n  </table>\n  <hr>\n  <div *ngIf=\"actorsDB.length>0\">\n    <div class=\"form-group\">\n      <label for=\"actorName\">Full Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"actorName\" [(ngModel)]=\"fullName\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"actorName\">Birth Year</label>\n      <input type=\"number\" class=\"form-control\" id=\"actorName\" [(ngModel)]=\"bYear\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onUpdateActor()\">Update Actor</button>\n  </div>\n</div>\n<!-- Section 4: Delete Actor -->\n<div class=\"section\" *ngIf=\"section==4\">\n  <table class=\"table table-striped\">\n    <tr>\n      <th>Name</th>\n      <th>Birth Year</th>\n      <th>Delete?</th>\n    </tr>\n    <tr *ngFor=\"let item of actorsDB\">\n      <td>{{item.name}}</td>\n      <td>{{item.bYear}}</td>\n      <td>\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onDeleteActor(item)\">Delete</button>\n      </td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/actor/actor.component.ts":
/*!******************************************!*\
  !*** ./src/app/actor/actor.component.ts ***!
  \******************************************/
/*! exports provided: ActorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorComponent", function() { return ActorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActorComponent = /** @class */ (function () {
    function ActorComponent(dbService) {
        this.dbService = dbService;
        this.actorsDB = [];
        this.section = 1;
        this.fullName = '';
        this.bYear = 0;
        this.actorId = '';
    }
    // Get all Actors
    ActorComponent.prototype.onGetActors = function () {
        var _this = this;
        this.dbService.getActors().subscribe(function (data) {
            _this.actorsDB = data;
        });
    };
    // Create a new Actor, POST request
    ActorComponent.prototype.onSaveActor = function () {
        var _this = this;
        var obj = { name: this.fullName, bYear: this.bYear };
        this.dbService.createActor(obj).subscribe(function (result) {
            _this.onGetActors();
        });
    };
    // Update an Actor
    ActorComponent.prototype.onSelectUpdate = function (item) {
        this.fullName = item.name;
        this.bYear = item.bYear;
        this.actorId = item._id;
    };
    ActorComponent.prototype.onUpdateActor = function () {
        var _this = this;
        var obj = { name: this.fullName, bYear: this.bYear };
        this.dbService.updateActor(this.actorId, obj).subscribe(function (result) {
            _this.onGetActors();
        });
    };
    // Delete Actor
    ActorComponent.prototype.onDeleteActor = function (item) {
        var _this = this;
        this.dbService.deleteActor(item._id).subscribe(function (result) {
            _this.onGetActors();
        });
    };
    // This lifecycle callback function will be invoked with the component get initialized by Angular.
    ActorComponent.prototype.ngOnInit = function () {
        this.onGetActors();
    };
    ActorComponent.prototype.changeSection = function (sectionId) {
        this.section = sectionId;
        this.resetValues();
    };
    ActorComponent.prototype.resetValues = function () {
        this.fullName = '';
        this.bYear = 0;
        this.actorId = '';
    };
    ActorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-actor',
            template: __webpack_require__(/*! ./actor.component.html */ "./src/app/actor/actor.component.html"),
            styles: [__webpack_require__(/*! ./actor.component.css */ "./src/app/actor/actor.component.css")]
        }),
        __metadata("design:paramtypes", [_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]])
    ], ActorComponent);
    return ActorComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-actor></app-actor>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'FIT2095-Lab9';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _actor_actor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actor/actor.component */ "./src/app/actor/actor.component.ts");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./database.service */ "./src/app/database.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _actor_actor_component__WEBPACK_IMPORTED_MODULE_3__["ActorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/database.service.ts":
/*!*************************************!*\
  !*** ./src/app/database.service.ts ***!
  \*************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
};
var DatabaseService = /** @class */ (function () {
    function DatabaseService(http) {
        this.http = http;
    }
    DatabaseService.prototype.getActors = function () {
        return this.http.get('/actors');
    };
    DatabaseService.prototype.getActor = function (id) {
        var url = '/actors/' + id;
        return this.http.get(url);
    };
    DatabaseService.prototype.createActor = function (data) {
        return this.http.post('/actors', data, httpOptions);
    };
    DatabaseService.prototype.updateActor = function (id, data) {
        var url = '/actors/' + id;
        return this.http.put(url, data, httpOptions);
    };
    DatabaseService.prototype.deleteActor = function (id) {
        var url = '/actors/' + id;
        return this.http.delete(url, httpOptions);
    };
    DatabaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DatabaseService);
    return DatabaseService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/benehiko/Documents/IntelliJ/FIT2095-Lab9/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map