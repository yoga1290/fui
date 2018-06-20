webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.pug":
/***/ (function(module, exports) {

module.exports = "<div id=\"app\"><h1>Loading</h1><div id=\"map\"></div><app-tabs></app-tabs><app-import-tool></app-import-tool></div>"

/***/ }),

/***/ "./src/app/app.component.styl":
/***/ (function(module, exports) {

module.exports = "#map {\n  z-index: 2;\n  position: absolute;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n}\n#app {\n  margin-top: 70px;\n}\n/*# sourceMappingURL=src/app/app.component.css.map */"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.pug"),
            styles: [__webpack_require__("./src/app/app.component.styl")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__import_tool_import_tool_component__ = __webpack_require__("./src/app/import-tool/import-tool.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__drawer_drawer_component__ = __webpack_require__("./src/app/drawer/drawer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_card_card_component__ = __webpack_require__("./src/app/tabs/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs_component__ = __webpack_require__("./src/app/tabs/tabs.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__import_tool_import_tool_component__["a" /* ImportToolComponent */],
                __WEBPACK_IMPORTED_MODULE_5__drawer_drawer_component__["a" /* DrawerComponent */],
                __WEBPACK_IMPORTED_MODULE_6__tabs_card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__tabs_tabs_component__["a" /* TabsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/drawer/drawer.component.pug":
/***/ (function(module, exports) {

module.exports = "<div id=\"drawer\"><aside class=\"mdc-drawer mdc-drawer--temporary mdc-typography\"><nav class=\"mdc-drawer__drawer\"><header class=\"mdc-drawer__header\"><div class=\"mdc-drawer__header-content\">Header here</div></header><nav class=\"mdc-drawer__content mdc-list\" id=\"icon-with-text-demo\"><a class=\"mdc-list-item mdc-list-item--activated\" href=\"#\"><i class=\"material-icons mdc-list-item__graphic\" aria-hidden=\"true\">inbox</i>Inbox</a><a class=\"mdc-list-item\" href=\"#\"><i class=\"material-icons mdc-list-item__graphic\" aria-hidden=\"true\">star</i>Star</a></nav></nav></aside><div class=\"mdc-fab\" (click)=\"openDrawer()\"><div class=\"mdc-fab__icon material-icons\">menu</div></div></div>"

/***/ }),

/***/ "./src/app/drawer/drawer.component.styl":
/***/ (function(module, exports) {

module.exports = "#drawer {\n  z-index: 4;\n}\n.material-icons {\n  font-size: 52px;\n}\n/*# sourceMappingURL=src/app/drawer/drawer.component.css.map */"

/***/ }),

/***/ "./src/app/drawer/drawer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_components_web__ = __webpack_require__("./node_modules/material-components-web/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DrawerComponent = /** @class */ (function () {
    function DrawerComponent() {
    }
    DrawerComponent.prototype.ngOnInit = function () { };
    DrawerComponent.prototype.ngAfterViewInit = function () {
        console.log(__WEBPACK_IMPORTED_MODULE_1_material_components_web__);
        var MDCTemporaryDrawer = __WEBPACK_IMPORTED_MODULE_1_material_components_web__["drawer"].MDCTemporaryDrawer;
        window['_drawer'] = new MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
        // document.querySelector('.menu').addEventListener('click', () => _drawer.open = true);
    };
    DrawerComponent.prototype.openDrawer = function () {
        window['_drawer'].open != window['_drawer'].open;
    };
    DrawerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-drawer',
            template: __webpack_require__("./src/app/drawer/drawer.component.pug"),
            styles: [__webpack_require__("./src/app/drawer/drawer.component.styl")]
        }),
        __metadata("design:paramtypes", [])
    ], DrawerComponent);
    return DrawerComponent;
}());



/***/ }),

/***/ "./src/app/import-tool/import-tool.component.pug":
/***/ (function(module, exports) {

module.exports = "<div id=\"import-tool\"><div class=\"mdc-fab\" (click)=\"importFile()\"><div class=\"mdc-fab__icon material-icons\">cloud_upload</div></div><input type=\"file\" id=\"import-file\" [hidden]=\"true\"/></div>"

/***/ }),

/***/ "./src/app/import-tool/import-tool.component.styl":
/***/ (function(module, exports) {

module.exports = "#import-tool {\n  z-index: 3;\n  position: absolute;\n  bottom: 0px;\n}\n.material-icons {\n  font-size: 52px;\n}\n/*# sourceMappingURL=src/app/import-tool/import-tool.component.css.map */"

/***/ }),

/***/ "./src/app/import-tool/import-tool.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportToolComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

function addLand(data) {
    var map = window['map'];
    var colors = ['red', 'green', 'blue', 'yellow', 'orange'];
    data.forEach(function (land) {
        var path = land.path;
        var polygon = new window['google'].maps.Polygon({
            paths: path,
            strokeColor: colors[parseInt(Math.random() * 10 + '') % 5],
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35
        });
        // window['poly'].push(polygon)
        polygon.setMap(map);
        polygon.addListener('click', function () {
            map.setCenter(path[0]);
            onPolygonClickCallback(polygon, land);
        });
    });
    map.setCenter(data[0].path[0]);
}
var onPolygonClickCallback = function (selectedPolygon, selectedLand) { }; //TODO NIY
window['initMap'] = function () {
    console.log('initMap');
    var map = new window['google'].maps.Map(document.getElementById('map'), {
        zoom: 18,
        mapTypeId: 'terrain'
    });
    window['map'] = map;
};
var ImportToolComponent = /** @class */ (function () {
    function ImportToolComponent() {
    }
    ImportToolComponent.prototype.ngOnInit = function () {
    };
    ImportToolComponent.prototype.ngAfterViewInit = function () {
        console.log('ngAfterViewInit');
        if (window['gMapReady']) {
            console.log('gMapReady', window['gMapReady']);
            window['initMap']();
        }
    };
    ImportToolComponent.prototype.importFile = function () {
        document.getElementById("import-file").click();
        document.getElementById("import-file").addEventListener('change', function (e) {
            var files = document.getElementById("import-file")['files'];
            console.log();
            if (files && files[0]) {
                var myFile = files[0];
                var reader = new FileReader();
                reader.addEventListener('load', function (e) {
                    // output.textContent = e.target.result;
                    console.log(e.target.result);
                    try {
                        addLand(JSON.parse(e.target.result));
                    }
                    catch (e) {
                        console.log(e);
                    }
                });
                reader.readAsBinaryString(myFile);
            }
        });
    };
    ImportToolComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-import-tool',
            template: __webpack_require__("./src/app/import-tool/import-tool.component.pug"),
            styles: [__webpack_require__("./src/app/import-tool/import-tool.component.styl")]
        }),
        __metadata("design:paramtypes", [])
    ], ImportToolComponent);
    return ImportToolComponent;
}());



/***/ }),

/***/ "./src/app/tabs/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  card works!\n</p>\n"

/***/ }),

/***/ "./src/app/tabs/card/card.component.styl":
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/tabs/card/card.component.css.map */"

/***/ }),

/***/ "./src/app/tabs/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-card',
            template: __webpack_require__("./src/app/tabs/card/card.component.html"),
            styles: [__webpack_require__("./src/app/tabs/card/card.component.styl")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.component.pug":
/***/ (function(module, exports) {

module.exports = "<div id=\"tabs\"><section id=\"dynamic-demo-toolbar\"><nav class=\"mdc-tab-bar\" id=\"dynamic-tab-bar\" role=\"tablist\"><a *ngFor=\"let t of tabs; let $i=index\" [ngClass]=\"{'mdc-tab': true, 'mdc-tab--active': (selectedTab===$i)}\" role=\"tab\" aria-controls=\"panel-1\" href=\"#panel-1\">Item One</a><span class=\"mdc-tab-bar__indicator\"></span></nav></section><section><div class=\"panels\"><p *ngFor=\"let t of tabs; let $i=index\" [ngClass]=\"{ 'panel': true, 'active': (selectedTab===$i)}\" role=\"tabpanel\" aria-hidden=\"false\" [id]=\"'panel-' + $i\">Item {{$i}}</p></div><div class=\"dots\"><a *ngFor=\"let t of tabs; let $i=index\" [ngClass]=\"{ 'dot': true, 'active': (selectedTab===$i)}\" [data-trigger]=\"'panel-'+$i\" href=\"#panel-1\"></a></div></section></div>"

/***/ }),

/***/ "./src/app/tabs/tabs.component.styl":
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/tabs/tabs.component.css.map */"

/***/ }),

/***/ "./src/app/tabs/tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_components_web__ = __webpack_require__("./node_modules/material-components-web/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.ar = new Array(3).fill(0);
        this.selectedTab = -1;
    }
    TabsComponent.prototype.ngAfterViewInit = function () {
        var MDCTabBar = __WEBPACK_IMPORTED_MODULE_1_material_components_web__["tabs"].MDCTabBar;
        var dynamicTabBar = window['dynamicTabBar'] = new MDCTabBar(document.querySelector('#dynamic-tab-bar'));
        var dots = document.querySelector('.dots');
        var panels = document.querySelector('.panels');
        dynamicTabBar.tabs.forEach(function (tab) {
            tab.preventDefaultOnClick = true;
        });
        dynamicTabBar.listen('MDCTabBar:change', function (_a) {
            var tabs = _a.detail;
            this.selectedTab = tabs.activeTabIndex;
        });
        dots.addEventListener('click', function (evt) {
            if (!evt.target['classList'].contains('dot')) {
                return;
            }
            evt.preventDefault();
            var dotIndex = [].slice.call(dots.querySelectorAll('.dot')).indexOf(evt.target);
            this.selectedTab = dotIndex;
        });
    };
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-tabs',
            template: __webpack_require__("./src/app/tabs/tabs.component.pug"),
            styles: [__webpack_require__("./src/app/tabs/tabs.component.styl")]
        }),
        __metadata("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map