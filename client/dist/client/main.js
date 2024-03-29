(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_technology_technology_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/technology/technology.component */ "./src/app/components/technology/technology.component.ts");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "./src/app/components/contacts/contacts.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/services/services.component */ "./src/app/components/services/services.component.ts");
/* harmony import */ var _components_lol_lol_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/lol/lol.component */ "./src/app/components/lol/lol.component.ts");
/* harmony import */ var _components_selected_service_selected_service_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/selected-service/selected-service.component */ "./src/app/components/selected-service/selected-service.component.ts");














const sip = 'Строим SIP';
const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], data: { title: sip } },
    { path: 'vanya', redirectTo: 'vanya-login' },
    { path: 'admin', component: _components_lol_lol_component__WEBPACK_IMPORTED_MODULE_10__["LolComponent"] },
    { path: 'admin-page', component: _components_lol_lol_component__WEBPACK_IMPORTED_MODULE_10__["LolComponent"] },
    { path: 'admin-panel', component: _components_lol_lol_component__WEBPACK_IMPORTED_MODULE_10__["LolComponent"] },
    { path: 'vanya-admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"], data: { title: `Страница админа | ${sip}` } },
    { path: 'projects', component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"], data: { title: `Проекты | ${sip}` } },
    { path: 'technology', component: _components_technology_technology_component__WEBPACK_IMPORTED_MODULE_7__["TechnologyComponent"], data: { title: `Технология | ${sip}` } },
    { path: 'contacts', component: _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__["ContactsComponent"], data: { title: `Контакты | ${sip}` } },
    { path: 'vanya-login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], data: { title: `Авторизация админа | ${sip}` } },
    {
        path: 'services', component: _components_services_services_component__WEBPACK_IMPORTED_MODULE_9__["ServicesComponent"],
        data: { title: `Услуги | ${sip}` },
        pathMatch: 'full',
        children: []
    },
    { path: 'services/:selected', component: _components_selected_service_selected_service_component__WEBPACK_IMPORTED_MODULE_11__["SelectedServiceComponent"] },
    { path: '**', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"], data: { title: `Страница не найдена | ${sip}` } }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");








class AppComponent {
    constructor(router, activatedRoute, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.title = 'client';
    }
    ngOnInit() {
        const appTitle = this.titleService.getTitle();
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
            const child = this.activatedRoute.firstChild;
            if (child.snapshot.data['title']) {
                return child.snapshot.data['title'];
            }
            return appTitle;
        })).subscribe((ttl) => {
            this.titleService.setTitle(ttl);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: [".body-spacer[_ngcontent-%COMP%] {\n  margin: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHktc3BhY2VyIHtcbiAgbWFyZ2luOiA1cmVtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_technology_technology_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/technology/technology.component */ "./src/app/components/technology/technology.component.ts");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "./src/app/components/contacts/contacts.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/services/services.component */ "./src/app/components/services/services.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _components_lol_lol_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/lol/lol.component */ "./src/app/components/lol/lol.component.ts");
/* harmony import */ var _components_selected_service_selected_service_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/selected-service/selected-service.component */ "./src/app/components/selected-service/selected-service.component.ts");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
        _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"],
        _components_technology_technology_component__WEBPACK_IMPORTED_MODULE_10__["TechnologyComponent"],
        _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_11__["ContactsComponent"],
        _components_services_services_component__WEBPACK_IMPORTED_MODULE_12__["ServicesComponent"],
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
        _components_lol_lol_component__WEBPACK_IMPORTED_MODULE_19__["LolComponent"],
        _components_selected_service_selected_service_component__WEBPACK_IMPORTED_MODULE_20__["SelectedServiceComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
                    _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                    _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"],
                    _components_technology_technology_component__WEBPACK_IMPORTED_MODULE_10__["TechnologyComponent"],
                    _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_11__["ContactsComponent"],
                    _components_services_services_component__WEBPACK_IMPORTED_MODULE_12__["ServicesComponent"],
                    _components_about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                    _components_lol_lol_component__WEBPACK_IMPORTED_MODULE_19__["LolComponent"],
                    _components_selected_service_selected_service_component__WEBPACK_IMPORTED_MODULE_20__["SelectedServiceComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]
                ],
                providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 70, vars: 0, consts: [[1, "custom-container"], [1, "about", "d-flex", "w-100", "h-100", "p-3", "mx-auto", "flex-column"], [1, "about-secondary"], [1, "about-primary"], [1, "line", "spacer"], [1, "d-flex", "justify-content-between"], [1, "col"], [1, "element"], [1, "el-head"], [1, "line"], [1, "el-body"], [1, "container"], [1, "row", "about-secondary"], [1, "col-6"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041E \u043D\u0430\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0421\u0442\u0440\u043E\u0438\u043C \u0434\u043E\u043C\u0430 \u043F\u043E \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 SIP \u0438 \u043A\u0430\u0440\u043A\u0430\u0441\u043D\u044B\u0435 \u0434\u043E\u043C\u0430 \u043F\u043E\u0434 \u043A\u043B\u044E\u0447");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0438 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u0412\u0441\u0435 \u044D\u0442\u0430\u043F\u044B \u0440\u0430\u0431\u043E\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u044E\u0442\u0441\u044F \u0431\u0440\u0438\u0433\u0430\u0434\u0430\u043C\u0438 \u0443\u0437\u043A\u043E\u0439 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438, \u0447\u0442\u043E\u0431\u044B \u0434\u043E\u0441\u0442\u0438\u0447\u044C \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0438 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0440\u0430\u0431\u043E\u0442 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u0411\u0440\u0438\u0433\u0430\u0434\u044B \u0438\u0437 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u041F\u043E\u043C\u0438\u043C\u043E \u043F\u043E\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u0445 \u0434\u043E\u043C\u043E\u0432 \u0435\u0441\u0442\u044C \u0431\u0440\u0438\u0433\u0430\u0434\u044B \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0435\u0439 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u0420\u0430\u0437\u0443\u043C\u043D\u044B\u0435 \u0446\u0435\u043D\u044B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u041F\u043E\u043C\u043E\u0449\u044C \u0432 \u0432\u044B\u0431\u043E\u0440\u0435 \u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0438 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u043C\u043E\u043D\u0442\u0430\u0436\u0435 \u0437\u0430 \u0440\u0430\u0437\u0443\u043C\u043D\u044B\u0435 \u0434\u0435\u043D\u044C\u0433\u0438 \u0441 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u043D\u0430 \u043F\u043E\u0434\u0440\u044F\u0434\u043D\u044B\u0435 \u0440\u0430\u0431\u043E\u0442\u044B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u0426\u0435\u043D\u044B \u043D\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043C\u043E\u043D\u0442\u0430\u0436\u0430: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u041D\u0438\u0436\u0435, \u0447\u0435\u043C \u0443 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u041C\u043E\u043D\u0442\u0430\u0436 \u0434\u043E\u043C\u0430 \u0438\u0437 SIP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u041E\u0442 1500 \u0440\u0443\u0431. \u0437\u0430 \u043A\u0432.\u043C.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u041A\u0430\u0440\u043A\u0430\u0441\u043D\u044B\u0435 \u0434\u043E\u043C\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u041E\u0442 2500 \u0440\u0443\u0431. \u0437\u0430 \u043A\u0432.\u043C.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u041A\u0440\u043E\u0432\u043B\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u041E\u0442 700 \u0440\u0443\u0431. \u0437\u0430 \u043A\u0432.\u043C.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u041C\u043E\u043D\u0442\u0430\u0436 \u0438\u043C\u0438\u0442\u0430\u0446\u0438\u0438 \u0431\u0440\u0443\u0441\u0430 \u0438\u043B\u0438 \u0431\u043B\u043E\u043A\u0445\u0430\u0443\u0441\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u041E\u0442 450 \u0440\u0443\u0431.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u041C\u043E\u043D\u0442\u0430\u0436 \u0432\u0430\u0433\u043E\u043D\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\u041E\u0442 400 \u0440\u0443\u0431.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u041F\u043E\u043A\u0440\u0430\u0441\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u041E\u0442 50 \u0440\u0443\u0431. \u043A\u0432.\u043C.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".custom-container[_ngcontent-%COMP%] {\n  background-image: linear-gradient(37deg, #5fa44a 0%, #7fd7ab 100%);\n  color: #fff;\n  padding-bottom: 3em;\n}\n.custom-container[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%] {\n  max-width: 70em;\n}\n.custom-container[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  margin-top: 2em;\n}\n.custom-container[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.custom-container[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 1.5em auto;\n}\n.custom-container[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .about-secondary[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n.custom-container[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .about-primary[_ngcontent-%COMP%] {\n  font-size: 35px;\n  font-weight: bold;\n}\n.custom-container[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  border-bottom: 0.2rem solid #ffffff;\n  width: 100%;\n}\n.custom-container[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  margin: 2em 0 1em;\n}\n.custom-container[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n}\n.custom-container[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  min-width: 150px;\n  margin-top: 1em;\n}\n.custom-container[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .el-head[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n}\n.custom-container[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  border-bottom: 0.2rem solid #ffffff;\n  width: 30%;\n  margin: 0.5em 0;\n}\n@media (max-width: 600px) {\n  ul[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlFLGtFQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7QUFDSjtBQUFJO0VBQ0UsZUFBQTtBQUVOO0FBQVE7RUFDRSxrQkFBQTtBQUVWO0FBQ007RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUdJO0VBQ0UsZUFBQTtBQUROO0FBSUk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFGTjtBQUtJO0VBQ0UsbUNBQUE7RUFDQSxXQUFBO0FBSE47QUFNSTtFQUNFLGlCQUFBO0FBSk47QUFPSTtFQUNFLHFCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQUxOO0FBT007RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFMUjtBQU9RO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBTFY7QUFRUTtFQUNFLG1DQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFOVjtBQWNBO0VBQ0U7SUFDRSx5QkFBQTtFQVhGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCgzN2RlZywgcmdiKDk1LCAxNjQsIDc0KSAwJSwgcmdiKDEyNywgMjE1LCAxNzEpIDEwMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgzN2RlZywgcmdiKDk1LCAxNjQsIDc0KSAwJSwgcmdiKDEyNywgMjE1LCAxNzEpIDEwMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KDM3ZGVnLCByZ2IoOTUsIDE2NCwgNzQpIDAlLCByZ2IoMTI3LCAyMTUsIDE3MSkgMTAwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzN2RlZywgcmdiKDk1LCAxNjQsIDc0KSAwJSwgcmdiKDEyNywgMjE1LCAxNzEpIDEwMCUpO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZy1ib3R0b206IDNlbTtcblxuICAuYWJvdXQge1xuICAgIG1heC13aWR0aDogNzBlbTtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgIC5yb3cge1xuICAgICAgICAuY29sLTYge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmxpbmUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAxLjVlbSBhdXRvO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hYm91dC1zZWNvbmRhcnkge1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgIH1cblxuICAgIC5hYm91dC1wcmltYXJ5IHtcbiAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5saW5lIHtcbiAgICAgIGJvcmRlci1ib3R0b206IC4ycmVtIHNvbGlkICNmZmZmZmY7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuc3BhY2VyIHtcbiAgICAgIG1hcmdpbjogMmVtIDAgMWVtO1xuICAgIH1cblxuICAgIHVsIHtcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xuXG4gICAgICBsaSB7XG4gICAgICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDFlbTtcblxuICAgICAgICAuZWwtaGVhZCB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxpbmUge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IC4ycmVtIHNvbGlkICNmZmZmZmY7XG4gICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICBtYXJnaW46IDAuNWVtIDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgdWwge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_image_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/image-upload.service */ "./src/app/services/image-upload.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











const _c0 = ["fileUpload"];
const _c1 = function (a0) { return { width: a0 }; };
const _c2 = function (a0, a1) { return { "bg-success": a0, "bg-danger": a1 }; };
function AdminComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, (file_r3.progress ? file_r3.progress : 0) + "%"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c2, file_r3.inProgress, !file_r3.inProgress));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", file_r3.data.name, " ");
} }
function AdminComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminComponent_div_35_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const project_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.updateProject(project_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_div_35_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const project_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.deleteProject(project_r4.value.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "textarea", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", project_r4);
} }
const _c3 = function () { return { standalone: true }; };
class AdminComponent {
    constructor(uploadService, tokenService, fb, projectService, router) {
        this.uploadService = uploadService;
        this.tokenService = tokenService;
        this.fb = fb;
        this.projectService = projectService;
        this.router = router;
        this.files = [];
        this.projectList = [];
        this.newProject = {
            name: '',
            description: '',
            endDate: '',
            photos: []
        };
    }
    ngOnInit() {
        if (!this.tokenService.getToken()) {
            this.router.navigate(['vanya-login']).then(r => console.log(r));
        }
        else {
            this.updateProjectList();
        }
    }
    updateProjectList() {
        this.projectService.getProjects().subscribe((projects) => {
            this.projectList = [];
            projects.forEach((project) => {
                const projectForm = this.fb.group({
                    name: [project.name],
                    description: [project.description],
                    endDate: [project.endDate],
                    id: [project._id]
                });
                this.projectList.push(projectForm);
            });
        }, (error) => {
            console.log(error);
        });
    }
    updateProject(project) {
        if (confirm('Вы уверены, что хотите внести эти изменения в текущий проект?')) {
            this.projectService.updateProject(project.value).subscribe((data) => {
                this.updateProjectList();
                alert('Данные успешно обновлены!');
            }, error => {
                console.error(error);
            });
        }
    }
    deleteProject(projectId) {
        if (confirm('Вы уверены, что хотите удалить этот проект?')) {
            this.projectService.deleteProject(projectId).subscribe(data => {
                console.log(data);
                this.updateProjectList();
                alert('Проект успешно удален!');
            }, error => {
                console.error(error);
            });
        }
    }
    uploadFile(file) {
        const formData = new FormData();
        formData.append('file', file.data);
        file.inProgress = true;
        this.uploadService.uploadImages(formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(event => {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress:
                    file.progress = Math.round(event.loaded * 100 / event.total);
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response:
                    return event;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            console.log(error);
            file.inProgress = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(`${file.data.name} upload failed.`);
        })).subscribe((event) => {
            if (typeof (event) === 'object') {
                console.log(event.body);
                this.newProject.photos.push(event.body.link);
                //Автоматическая загрузка нового проекта должна делаться с этого момента!!!
            }
        });
    }
    onClick() {
        const fileUpload = this.fileUpload.nativeElement;
        fileUpload.onchange = () => {
            for (let index = 0; index < fileUpload.files.length; index++) {
                const file = fileUpload.files[index];
                this.files.push({ data: file, inProgress: false, progress: 0 });
            }
            this.uploadFiles();
        };
        fileUpload.click();
    }
    uploadFiles() {
        this.fileUpload.nativeElement.value = '';
        this.files.forEach((file) => {
            this.uploadFile(file);
        });
    }
    saveProject() {
        this.projectService.save(this.newProject).subscribe((data) => {
            this.clearNewProjectForm();
            this.updateProjectList();
            alert('Новый проект успешно добавлен!');
        }, error => {
            console.log(error);
            alert('Произошла непредвиденная ошибка. Проверьте консоль...');
        });
    }
    clearNewProjectForm() {
        this.files = [];
        this.newProject = {
            name: '',
            description: '',
            endDate: '',
            photos: []
        };
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_image_upload_service__WEBPACK_IMPORTED_MODULE_4__["ImageUploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], viewQuery: function AdminComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileUpload = _t.first);
    } }, decls: 36, vars: 11, consts: [[1, "header-spacer", "sticky-top"], [1, "container"], [1, "card"], [1, "card-header", "text-center"], [1, "card-body"], [1, "form-group", "row"], ["for", "name", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "id", "name", "aria-label", "Name", "aria-describedby", "Name", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "end-date", 1, "col-sm-2", "col-form-label"], ["type", "date", "id", "end-date", "aria-label", "End-date", "aria-describedby", "End-date", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "description", 1, "col-sm-2", "col-form-label"], ["id", "description", "aria-label", "Description", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "text-center"], [1, "btn", "btn-outline-info", "mb-3", 3, "click"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "card-footer", "text-center"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "file", "id", "fileUpload", "name", "fileUpload", "multiple", "multiple", "accept", "image/*", "aria-describedby", "project-images", 1, "custom-file-input"], ["fileUpload", ""], ["class", "card project", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", 3, "ngStyle", "ngClass"], ["id", "file-label"], [1, "card", "project"], [3, "formGroup", "ngSubmit"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "form-group"], ["for", "inputName"], ["type", "text", "id", "inputName", "formControlName", "name", 1, "form-control"], ["for", "inputDescription"], ["id", "inputDescription", "formControlName", "description", 1, "form-control"], ["for", "inputDate"], ["type", "date", "id", "inputDate", "formControlName", "endDate", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_11_listener($event) { return ctx.newProject.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0414\u0430\u0442\u0430 \u043E\u043D\u043E\u043D\u0447\u0430\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_16_listener($event) { return ctx.newProject.endDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_textarea_ngModelChange_21_listener($event) { return ctx.newProject.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_23_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u043E\u0442\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AdminComponent_li_26_Template, 5, 8, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_28_listener() { return ctx.saveProject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u0420\u0430\u0431\u043E\u0442\u0430 \u0441 \u0441\u0442\u0430\u0440\u044B\u043C\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AdminComponent_div_35_Template, 20, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newProject.name)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newProject.endDate)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newProject.description)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectList);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"]], styles: [".header-spacer[_ngcontent-%COMP%] {\n  height: 8em;\n  background: rgba(108, 184, 112, 0.96);\n  margin-bottom: 2em;\n}\n\n.container[_ngcontent-%COMP%] {\n  color: #297857;\n}\n\n.fileUpload[_ngcontent-%COMP%] {\n  display: none;\n}\n\nul[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.project[_ngcontent-%COMP%] {\n  padding: 2em;\n  margin: 2em 0;\n  background-color: rgba(226, 255, 213, 0.64);\n}\n\n.spacer[_ngcontent-%COMP%] {\n  margin: 0 1em;\n}\n\n@media (min-width: 544px) {\n  .header-spacer[_ngcontent-%COMP%] {\n    height: 4em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQUE7RUFDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItc3BhY2VyIHtcbiAgaGVpZ2h0OiA4ZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMTA4LCAxODQsIDExMiwgMC45Nik7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGNvbG9yOiAjMjk3ODU3O1xufVxuXG4uZmlsZVVwbG9hZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbnVsIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnByb2plY3Qge1xuICBwYWRkaW5nOiAyZW07XG4gIG1hcmdpbjogMmVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI2LCAyNTUsIDIxMywgMC42NCk7XG59XG5cbi5zcGFjZXIge1xuICBtYXJnaW46IDAgMWVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTQ0cHgpIHtcbiAgLmhlYWRlci1zcGFjZXIge1xuICAgIGhlaWdodDogNGVtO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.scss']
            }]
    }], function () { return [{ type: _services_image_upload_service__WEBPACK_IMPORTED_MODULE_4__["ImageUploadService"] }, { type: _services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }, { type: _services_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, { fileUpload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileUpload', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/contacts/contacts.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContactsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(); };
ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], decls: 37, vars: 0, consts: [[1, "main", "text-center"], [1, "d-block", "first-priority"], [1, "d-block", "second-priority"], [1, "body-container"], [1, "container"], [1, "third-priority"], ["href", "viber://chat?number=%2B375447571433", 1, "number"], ["href", "https://wa.me/375447571433", "target", "_blank", 1, "number"], [1, "line", "spacer"], [1, "contacts", "text-center", "second-priority"], ["href", "viber://chat?number=%2B375447571433", 1, "messenger"], [1, "viber"], ["href", "https://wa.me/375447571433", "target", "_blank", 1, "messenger"], [1, "whatsapp"], ["href", "tel:+375447571433", 1, "number"], [1, "line"], ["href", "viber://chat?number=%2B79651386976", 1, "messenger"], ["href", "https://wa.me/79651386976", "target", "_blank", 1, "messenger"], ["href", "tel:+79651386976", 1, "number"], ["href", "mailto:ivanstroimvse@mail.ru", 1, "email"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SIP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "TihonchuckStroi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u0415\u0441\u043B\u0438 \u043D\u0430\u0448\u0438 \u0443\u0441\u043B\u0443\u0433\u0438 \u0412\u0430\u0441 \u0437\u0430\u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432\u0430\u043B\u0438, \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u043C\u0438 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C\u0438 \u0441\u043F\u043E\u0441\u043E\u0431\u0430\u043C\u0438. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0434\u043E\u0431\u043D\u044B\u0439 \u0432\u0430\u043C \u0441\u043F\u043E\u0441\u043E\u0431 \u043D\u0430\u0436\u0430\u0442\u0438\u0435\u043C \u043D\u0430 \u0438\u043A\u043E\u043D\u043A\u0443 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Viber");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "WhatsApp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u0438\u043B\u0438 \u043D\u0430 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D, \u0447\u0442\u043E\u0431\u044B \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u043F\u043E \u0441\u043E\u0442\u043E\u0432\u043E\u0439 \u0441\u0432\u044F\u0437\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "+375447571433");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "+79651386976");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "ivanstroimvse@mail.ru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main[_ngcontent-%COMP%] {\n  background: #02c48d url('contacts-header.jpg') no-repeat center center;\n  background-size: cover;\n  padding: 7rem 0 10rem 0;\n}\n\na[_ngcontent-%COMP%] {\n  color: #c7f1af;\n  transition: color 0.3s;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #36633b;\n  transition: color 0.3s;\n}\n\n.first-priority[_ngcontent-%COMP%] {\n  font-size: 60px;\n  font-weight: bold;\n  line-height: 1.2;\n  margin: 2rem 0;\n}\n\n.second-priority[_ngcontent-%COMP%] {\n  font-size: 35px;\n  line-height: 1.2;\n}\n\n.third-priority[_ngcontent-%COMP%] {\n  font-size: 25px;\n  line-height: 1.2;\n}\n\n.body-container[_ngcontent-%COMP%] {\n  background-image: linear-gradient(37deg, #5fa44a 0%, #7fd7ab 100%);\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n\n.line[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #fff;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  margin: 1.5em 0;\n}\n\n.contacts[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #ffffff;\n  vertical-align: middle;\n  margin: 0.2em auto;\n  text-decoration: none;\n}\n\n.contacts[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: 0.5em auto;\n}\n\n.contacts[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  text-decoration: none;\n  transition: color 0.3s;\n}\n\n.contacts[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  transition: color 0.3s;\n}\n\n.contacts[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]:hover, .contacts[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]:hover {\n  color: #36633b;\n  transition: color 0.3s;\n}\n\n.contacts[_ngcontent-%COMP%]   .viber[_ngcontent-%COMP%] {\n  display: block;\n  background: url('viber.png') no-repeat;\n  width: 32px;\n  height: 32px;\n}\n\n.contacts[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%] {\n  display: block;\n  background: url('whatsapp.png') no-repeat;\n  width: 32px;\n  height: 32px;\n}\n\n.contacts[_ngcontent-%COMP%]   .messenger[_ngcontent-%COMP%] {\n  transition: background-color 0.3s;\n  padding: 0.2em;\n  border-radius: 0.2em;\n}\n\n.contacts[_ngcontent-%COMP%]   .messenger[_ngcontent-%COMP%]:hover {\n  transition: background-color 0.3s;\n  background-color: #36633b;\n}\n\n@media (max-width: 450px) {\n  a[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNFQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBSUUsa0VBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBR0U7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFHRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlFO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtBQUZKOztBQUtFO0VBQ0Usc0JBQUE7QUFISjs7QUFNRTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtBQUpKOztBQU9FO0VBQ0UsY0FBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFMSjs7QUFRRTtFQUNFLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBTko7O0FBU0U7RUFDRSxpQ0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQVBKOztBQVVFO0VBQ0UsaUNBQUE7RUFDQSx5QkFBQTtBQVJKOztBQVlBO0VBQ0U7SUFDRSxlQUFBO0VBVEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gIGJhY2tncm91bmQ6ICMwMmM0OGQgdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY29udGFjdHMtaGVhZGVyLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBhZGRpbmc6IDdyZW0gMCAxMHJlbSAwO1xufVxuXG5hIHtcbiAgY29sb3I6ICNjN2YxYWY7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMzY2MzNiO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xufVxuXG4uZmlyc3QtcHJpb3JpdHkge1xuICBmb250LXNpemU6IDYwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBtYXJnaW46IDJyZW0gMDtcbn1cblxuLnNlY29uZC1wcmlvcml0eSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLnRoaXJkLXByaW9yaXR5IHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG4uYm9keS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCgzN2RlZywgcmdiKDk1LCAxNjQsIDc0KSAwJSwgcmdiKDEyNywgMjE1LCAxNzEpIDEwMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgzN2RlZywgcmdiKDk1LCAxNjQsIDc0KSAwJSwgcmdiKDEyNywgMjE1LCAxNzEpIDEwMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KDM3ZGVnLCByZ2IoOTUsIDE2NCwgNzQpIDAlLCByZ2IoMTI3LCAyMTUsIDE3MSkgMTAwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzN2RlZywgcmdiKDk1LCAxNjQsIDc0KSAwJSwgcmdiKDEyNywgMjE1LCAxNzEpIDEwMCUpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMWVtO1xufVxuXG4ubGluZSB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmZmO1xufVxuXG4uc3BhY2VyIHtcbiAgbWFyZ2luOiAxLjVlbSAwO1xufVxuXG4uY29udGFjdHMge1xuICBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW46IDAuMmVtIGF1dG87XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgLmxpbmUge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luOiAwLjVlbSBhdXRvO1xuICB9XG5cbiAgLmVtYWlsIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbiAgfVxuXG4gIC5udW1iZXIge1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG4gIH1cblxuICAuZW1haWw6aG92ZXIsIC5udW1iZXI6aG92ZXIge1xuICAgIGNvbG9yOiAjMzY2MzNiO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG4gIH1cblxuICAudmliZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdmliZXIucG5nXCIpIG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gIH1cblxuICAud2hhdHNhcHAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvd2hhdHNhcHAucG5nXCIpIG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gIH1cblxuICAubWVzc2VuZ2VyIHtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gICAgcGFkZGluZzogMC4yZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gIH1cblxuICAubWVzc2VuZ2VyOmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2NjMzYjtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgYSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacts',
                templateUrl: './contacts.component.html',
                styleUrls: ['./contacts.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 52, vars: 0, consts: [[1, "footer-distributed", "text-center"], [1, "footer-body"], [1, "footer-left"], ["routerLink", ""], [1, "footer-links"], ["routerLink", "/technology"], ["routerLink", "/projects"], ["routerLink", "/services"], [1, "footer-company-name"], [1, "contacts"], ["href", "viber://chat?number=%2B375447571433", 1, "messenger"], [1, "viber"], ["href", "https://wa.me/375447571433", "target", "_blank", 1, "messenger"], [1, "whatsapp"], ["href", "tel:+375447571433", 1, "number"], ["href", "viber://chat?number=%2B79651386976", 1, "messenger"], ["href", "https://wa.me/79651386976", "target", "_blank", 1, "messenger"], ["href", "tel:+79651386976", 1, "number"], ["href", "mailto:ivanstroimvse@mail.ru", 1, "email"], [1, "row", "justify-content-center"], ["href", "https://ok.ru/profile/587203287049", "target", "_blank", 1, "ok"], [1, "spacer"], ["href", "https://vk.com/id524435526", "target", "_blank", 1, "vk"], [1, "footer-right"], [1, "footer-company-about"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0421\u0442\u0440\u043E\u0438\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "SIP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u00B7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u00B7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u00B7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0423\u0441\u043B\u0443\u0433\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "TihonchuckStroi \u00A9 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "+375447571433");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "+79651386976");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "ivanstroimvse@mail.ru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u043E \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0443 \u0447\u0430\u0441\u0442\u043D\u044B\u0445 \u0434\u043E\u043C\u043E\u0432, \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0437\u0434\u0430\u043D\u0438\u0439 \u0438 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0445 \u0441\u043E\u043E\u0440\u0443\u0436\u0435\u043D\u0438\u0439 \u0441 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435\u043C SIP \u043F\u0430\u043D\u0435\u043B\u0435\u0439 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".footer-distributed[_ngcontent-%COMP%] {\n  background-color: #123123;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\n  box-sizing: border-box;\n  width: 100%;\n  text-align: left;\n}\n.footer-distributed[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%] {\n  max-width: 70em;\n  padding: 1em 0;\n  margin: 0 auto;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%], .footer-distributed[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%], .footer-distributed[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin: 0;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #20c997;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin: 20px 0 12px;\n  padding: 0;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  line-height: 1.8;\n  text-decoration: none;\n  color: inherit;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%]   .footer-company-name[_ngcontent-%COMP%] {\n  color: #8f9296;\n  font-size: 14px;\n  font-weight: normal;\n  margin: 0;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%] {\n  width: 35%;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #ffffff;\n  vertical-align: middle;\n  margin: 0.2em auto;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #20c997;\n  margin-top: 0.25em;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  width: 1em;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .ok[_ngcontent-%COMP%] {\n  display: block;\n  background: url('odnoklassniki.png') no-repeat;\n  width: 32px;\n  height: 32px;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .vk[_ngcontent-%COMP%] {\n  display: block;\n  background: url('vk.png') no-repeat;\n  width: 32px;\n  height: 32px;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   .viber[_ngcontent-%COMP%] {\n  display: block;\n  background: url('viber.png') no-repeat;\n  width: 32px;\n  height: 32px;\n  float: left;\n  margin: 0.1em 0.3em 0 0;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%] {\n  display: block;\n  background: url('whatsapp.png') no-repeat;\n  width: 32px;\n  height: 32px;\n  float: left;\n  margin: 0.1em 0.3em 0 0;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]   .footer-company-about[_ngcontent-%COMP%] {\n  line-height: 20px;\n  color: #92999f;\n  font-size: 13px;\n  font-weight: normal;\n  margin: 0;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]   .footer-company-about[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 0.5em;\n}\n@media (max-width: 880px) {\n  .footer-distributed[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%], .footer-distributed[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%], .footer-distributed[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    margin-bottom: 1em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSwyQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLHFCQUFBO0FBQ0o7QUFFRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUFKO0FBRUk7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBQU47QUFHSTtFQUNFLFVBQUE7QUFETjtBQUdNO0VBQ0UsY0FBQTtFQUNBLFNBQUE7QUFEUjtBQUdRO0VBQ0UsY0FBQTtBQURWO0FBS007RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBSFI7QUFLUTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFIVjtBQU9NO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFMUjtBQVNJO0VBQ0UsVUFBQTtBQVBOO0FBU007RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBUFI7QUFVTTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBUlI7QUFVTTtFQUNFLGdCQUFBO0FBUlI7QUFVTTtFQUNFLFVBQUE7QUFSUjtBQVlRO0VBQ0UsY0FBQTtFQUNBLDhDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFWVjtBQWFRO0VBQ0UsY0FBQTtFQUNBLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFYVjtBQWVNO0VBQ0UsY0FBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFiUjtBQWdCTTtFQUNFLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBZFI7QUFrQkk7RUFDRSxVQUFBO0FBaEJOO0FBa0JNO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQWhCUjtBQWtCUTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFoQlY7QUF1QkE7RUFDRTs7O0lBR0UsY0FBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFQXBCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1kaXN0cmlidXRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjMxMjM7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIC5mb290ZXItYm9keSB7XG4gICAgbWF4LXdpZHRoOiA3MGVtO1xuICAgIHBhZGRpbmc6IDFlbSAwO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgLmZvb3Rlci1sZWZ0LCAuY29udGFjdHMsIC5mb290ZXItcmlnaHQge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB9XG5cbiAgICAuZm9vdGVyLWxlZnQge1xuICAgICAgd2lkdGg6IDQwJTtcblxuICAgICAgaDMge1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiAjMjBjOTk3O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5mb290ZXItbGlua3Mge1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDAgMTJweDtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmZvb3Rlci1jb21wYW55LW5hbWUge1xuICAgICAgICBjb2xvcjogIzhmOTI5NjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNvbnRhY3RzIHtcbiAgICAgIHdpZHRoOiAzNSU7XG5cbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBtYXJnaW46IDAuMmVtIGF1dG87XG4gICAgICB9XG5cbiAgICAgIC5lbWFpbCB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICMyMGM5OTc7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuMjVlbTtcbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuICAgICAgLnNwYWNlciB7XG4gICAgICAgIHdpZHRoOiAxZW07XG4gICAgICB9XG5cbiAgICAgIC5yb3cge1xuICAgICAgICAub2sge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvb2Rub2tsYXNzbmlraS5wbmdcIikgbm8tcmVwZWF0O1xuICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52ayB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy92ay5wbmdcIikgbm8tcmVwZWF0O1xuICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudmliZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy92aWJlci5wbmdcIikgbm8tcmVwZWF0O1xuICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luOiAwLjFlbSAwLjNlbSAwIDA7XG4gICAgICB9XG5cbiAgICAgIC53aGF0c2FwcCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3doYXRzYXBwLnBuZ1wiKSBuby1yZXBlYXQ7XG4gICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBtYXJnaW46IDAuMWVtIDAuM2VtIDAgMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9vdGVyLXJpZ2h0IHtcbiAgICAgIHdpZHRoOiAyMCU7XG5cbiAgICAgIC5mb290ZXItY29tcGFueS1hYm91dCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzkyOTk5ZjtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4ODBweCkge1xuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItYm9keSAuZm9vdGVyLWxlZnQsXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1ib2R5IC5jb250YWN0cyxcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWJvZHkgLmZvb3Rlci1yaWdodCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB9XG5cbiAgLy8uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIGkge1xuICAvLyAgbWFyZ2luLWxlZnQ6IDA7XG4gIC8vfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class HeaderComponent {
    constructor() {
        this.isScrolled = false;
        this.state = 'transparent';
        this.scrollEvent = (event) => {
            const scrollPosition = event.target.scrollingElement.scrollTop;
            this.isScrolled = scrollPosition > 100;
            this.state = this.isScrolled ? 'gradiented' : 'transparent';
        };
    }
    ngOnInit() {
        window.addEventListener('scroll', this.scrollEvent, true);
    }
    ngOnDestroy() {
        window.removeEventListener('scroll', this.scrollEvent, true);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 17, vars: 1, consts: [[1, "header-container", "text-center", "fixed-top"], [1, "cover-container", "d-flex", "w-100", "p-3", "mx-auto", "flex-column"], [1, "masthead", "mb-auto"], [1, "masthead-brand"], ["routerLink", ""], [1, "sip"], [1, "nav", "nav-masthead", "justify-content-center"], ["routerLink", "technology", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "projects", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "services", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "contacts", "routerLinkActive", "active", 1, "nav-link"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0421\u0442\u0440\u043E\u0438\u043C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "SIP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041F\u0440\u043E\u0435\u043A\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0423\u0441\u043B\u0443\u0433\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@gradientedHeader", ctx.state);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  text-decoration: none;\n}\n\n.header-container[_ngcontent-%COMP%] {\n  display: flex;\n  color: #fff;\n  width: 100%;\n}\n\n.header-container[_ngcontent-%COMP%]   .cover-container[_ngcontent-%COMP%] {\n  max-width: 70em;\n}\n\n.header-container[_ngcontent-%COMP%]   .cover-container[_ngcontent-%COMP%]   .masthead[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.header-container[_ngcontent-%COMP%]   .cover-container[_ngcontent-%COMP%]   .masthead[_ngcontent-%COMP%]   .masthead-brand[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-family: \"Gotham Pro Light\", sans-serif;\n}\n\n.header-container[_ngcontent-%COMP%]   .cover-container[_ngcontent-%COMP%]   .masthead[_ngcontent-%COMP%]   .masthead-brand[_ngcontent-%COMP%]   .sip[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.header-container[_ngcontent-%COMP%]   .cover-container[_ngcontent-%COMP%]   .masthead[_ngcontent-%COMP%]   .nav-masthead[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding: 0.25rem 0;\n  font-weight: 400;\n  color: white;\n  background-color: transparent;\n  border-bottom: 0.2rem solid transparent;\n  transition: 0.4s;\n}\n\n.header-container[_ngcontent-%COMP%]   .cover-container[_ngcontent-%COMP%]   .masthead[_ngcontent-%COMP%]   .nav-masthead[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  border-bottom-color: rgba(255, 255, 255, 0.25);\n}\n\n.header-container[_ngcontent-%COMP%]   .cover-container[_ngcontent-%COMP%]   .masthead[_ngcontent-%COMP%]   .nav-masthead[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]    + .nav-link[_ngcontent-%COMP%] {\n  margin-left: 1.5rem;\n}\n\n.header-container[_ngcontent-%COMP%]   .cover-container[_ngcontent-%COMP%]   .masthead[_ngcontent-%COMP%]   .nav-masthead[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #fff !important;\n  border-bottom-color: #fff !important;\n}\n\n@media (min-width: 48em) {\n  .masthead-brand[_ngcontent-%COMP%] {\n    float: left;\n  }\n\n  .nav-masthead[_ngcontent-%COMP%] {\n    float: right;\n  }\n\n  .nav-masthead[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]    + .nav-link[_ngcontent-%COMP%] {\n    margin-left: 0.5em;\n  }\n}\n\n@media (max-width: 405px) {\n  .nav-masthead[_ngcontent-%COMP%] {\n    font-size: 0.9em;\n  }\n}\n\n@media (max-width: 375px) {\n  .nav-masthead[_ngcontent-%COMP%] {\n    font-size: 0.9em;\n  }\n}\n\n@media (max-width: 360px) {\n  .nav-masthead[_ngcontent-%COMP%] {\n    font-size: 0.75em;\n  }\n}\n\n@media (max-width: 325px) {\n  .nav-masthead[_ngcontent-%COMP%] {\n    font-size: 0.7em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxXQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUVFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUNFO0VBQ0UsZUFBQTtBQUNKOztBQUNJO0VBQ0UsbUJBQUE7QUFDTjs7QUFDTTtFQUNFLGdCQUFBO0VBQ0EsMkNBQUE7QUFDUjs7QUFDUTtFQUNFLGdCQUFBO0FBQ1Y7O0FBSVE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtBQUZWOztBQUlVO0VBQ0UsOENBQUE7QUFGWjs7QUFNUTtFQUNFLG1CQUFBO0FBSlY7O0FBT1E7RUFDRSxzQkFBQTtFQUNBLG9DQUFBO0FBTFY7O0FBYUE7RUFDRTtJQUNFLFdBQUE7RUFWRjs7RUFZQTtJQUNFLFlBQUE7RUFURjs7RUFXQTtJQUNFLGtCQUFBO0VBUkY7QUFDRjs7QUFXQTtFQUNFO0lBQ0UsZ0JBQUE7RUFURjtBQUNGOztBQVlBO0VBQ0U7SUFDRSxnQkFBQTtFQVZGO0FBQ0Y7O0FBYUE7RUFDRTtJQUNFLGlCQUFBO0VBWEY7QUFDRjs7QUFjQTtFQUNFO0lBQ0UsZ0JBQUE7RUFaRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSxcbmE6Zm9jdXMsXG5hOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmhlYWRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5jb3Zlci1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNzBlbTtcblxuICAgIC5tYXN0aGVhZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuXG4gICAgICAubWFzdGhlYWQtYnJhbmQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBmb250LWZhbWlseTogJ0dvdGhhbSBQcm8gTGlnaHQnLCBzYW5zLXNlcmlmO1xuXG4gICAgICAgIC5zaXAge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLm5hdi1tYXN0aGVhZCB7XG4gICAgICAgIC5uYXYtbGluayB7XG4gICAgICAgICAgcGFkZGluZzogLjI1cmVtIDA7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAuMnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yNSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm5hdi1saW5rICsgLm5hdi1saW5rIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xuICAubWFzdGhlYWQtYnJhbmQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIC5uYXYtbWFzdGhlYWQge1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuICAubmF2LW1hc3RoZWFkIC5uYXYtbGluayArIC5uYXYtbGluayB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDVweCkge1xuICAubmF2LW1hc3RoZWFkIHtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xuICAubmF2LW1hc3RoZWFkIHtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xuICAubmF2LW1hc3RoZWFkIHtcbiAgICBmb250LXNpemU6IDAuNzVlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzI1cHgpIHtcbiAgLm5hdi1tYXN0aGVhZCB7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbiAgfVxufVxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('gradientedHeader', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('transparent', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ background: 'transparent' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('gradiented', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ background: 'rgba(108, 184, 112, 0.96)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('transparent <=> gradiented', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s'))
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('gradientedHeader', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('transparent', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ background: 'transparent' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('gradiented', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ background: 'rgba(108, 184, 112, 0.96)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('transparent <=> gradiented', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s'))
                    ])
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../about/about.component */ "./src/app/components/about/about.component.ts");




class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 10, vars: 0, consts: [[1, "main", "text-center"], [1, "d-block", "second-priority"], [1, "d-block", "first-priority"], ["routerLink", "projects", 1, "more", "gradient-button"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0421\u0442\u0440\u043E\u0438\u043C \u0434\u043E\u043C\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041F\u043E \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 SIP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0423\u0436\u0435 \u0431\u043E\u043B\u0435\u0435 10 \u043B\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-about");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]], styles: ["@charset \"UTF-8\";\n.main[_ngcontent-%COMP%] {\n  background: #02c48d url('house.png') no-repeat center center;\n  background-size: cover;\n  padding: 7rem 0 10rem 0;\n  color: white;\n}\n.main[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.more[_ngcontent-%COMP%] {\n  padding: 0.6em 2.5em;\n  border-radius: 5em;\n  transition: 0.5s;\n  background-size: 200% auto;\n  color: white;\n  box-shadow: 0 2px 20px -5px grey;\n  cursor: pointer;\n  display: inline-block;\n  margin-top: 3rem;\n}\n.more[_ngcontent-%COMP%]:hover {\n  background-position: right center;\n  \n  color: #ffffff;\n}\n.gradient-button[_ngcontent-%COMP%] {\n  background-image: linear-gradient(37deg, #4a9a3a 0%, #a9f8ce 100%);\n}\n.second-priority[_ngcontent-%COMP%] {\n  font-size: 35px;\n  line-height: 1.2;\n}\n.first-priority[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-weight: bold;\n  line-height: 1.2;\n  margin: 0.5rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsNERBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUVGO0FBREU7RUFDRSxxQkFBQTtBQUdKO0FBQ0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBRUY7QUFDQTtFQUNFLGlDQUFBO0VBQW1DLG9EQUFBO0VBQ25DLGNBQUE7QUFHRjtBQUFBO0VBR0Usa0VBQUE7QUFHRjtBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBR0Y7QUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFHRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICBiYWNrZ3JvdW5kOiAjMDJjNDhkIHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hvdXNlLnBuZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBhZGRpbmc6IDdyZW0gMCAxMHJlbSAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuXG4ubW9yZSB7XG4gIHBhZGRpbmc6IDAuNmVtIDIuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1ZW07XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDIwcHggLTVweCBncmV5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogM3JlbTtcbn1cblxuLm1vcmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7IC8qINC40LfQvNC10L3QuNGC0Ywg0L3QsNC/0YDQsNCy0LvQtdC90LjQtSDQtNCy0LjQttC10L3QuNGPINGG0LLQtdGC0LAg0LzQvtC20L3QviDQt9C00LXRgdGMICovXG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZ3JhZGllbnQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoIDM3ZGVnLCByZ2IoOTUsMTY0LDc0KSAwJSwgcmdiKDEyNywyMTUsMTcxKSAxMDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIDM3ZGVnLCByZ2IoOTUsMTY0LDc0KSAwJSwgcmdiKDEyNywyMTUsMTcxKSAxMDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCAzN2RlZywgcmdiKDc0LCAxNTQsIDU4KSAwJSwgcmdiKDE2OSwgMjQ4LCAyMDYpIDEwMCUpO1xufVxuXG4uc2Vjb25kLXByaW9yaXR5IHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG4uZmlyc3QtcHJpb3JpdHkge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBtYXJnaW46IDAuNXJlbSAwO1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class LoginComponent {
    constructor(authService, tokenService, router) {
        this.authService = authService;
        this.tokenService = tokenService;
        this.router = router;
        this.adminForm = {
            login: '',
            password: ''
        };
    }
    ngOnInit() {
        if (this.tokenService.getToken()) {
            this.router.navigate(['vanya-admin']).then();
        }
    }
    register() {
        console.log(this.adminForm);
        this.authService.registerAdmin(this.adminForm).subscribe((data) => {
            console.log(data);
        }, (error => {
            console.log(error);
        }));
    }
    signIn() {
        this.authService.signInAdmin(this.adminForm).subscribe((user) => {
            console.log(user);
            this.tokenService.saveToken(user.token);
            this.router.navigate(['vanya-admin']);
        }, (error) => {
            console.log(error);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 13, vars: 2, consts: [[1, "form-signin", "text-center"], ["src", "../../../assets/images/building.png", "alt", "", "width", "128", "height", "128", 1, "mb-4"], [1, "h3", "mb-3", "font-weight-normal"], ["for", "inputEmail", 1, "sr-only"], ["type", "email", "id", "inputEmail", "name", "login", "placeholder", "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F", "required", "", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputPassword", 1, "sr-only"], ["type", "password", "id", "inputPassword", "name", "password", "placeholder", "\u041F\u0430\u0440\u043E\u043B\u044C", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-lg", "btn-success", "btn-block", 3, "click", "keyup.enter"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0443\u0439\u0442\u0435\u0441\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_7_listener($event) { return ctx.adminForm.login = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041F\u0430\u0440\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) { return ctx.adminForm.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_11_listener() { return ctx.signIn(); })("keyup.enter", function LoginComponent_Template_button_keyup_enter_11_listener() { return ctx.signIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.adminForm.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.adminForm.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".form-signin[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: 5em auto;\n}\n.form-signin[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: -10%;\n}\n.form-signin[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  z-index: 2;\n}\n.form-signin[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signin[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n@media (min-width: 768px) {\n  .bd-placeholder-img-lg[_ngcontent-%COMP%] {\n    font-size: 3.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxpQkFBQTtBQUNKO0FBRUE7RUFDRSxnQkFBQTtBQUNGO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBRUY7QUFBQTtFQUNFLFVBQUE7QUFHRjtBQURBO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FBSUY7QUFGQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQUtGO0FBRkE7RUFDRTtJQUNFLGlCQUFBO0VBS0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1zaWduaW4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzMzBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiA1ZW0gYXV0bztcblxuICBpbWcge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTAlO1xuICB9XG59XG4uZm9ybS1zaWduaW4ge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICB6LWluZGV4OiAyO1xufVxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJlbWFpbFwiXSB7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmJkLXBsYWNlaG9sZGVyLWltZy1sZyB7XG4gICAgZm9udC1zaXplOiAzLjVyZW07XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }, { type: _services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/lol/lol.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/lol/lol.component.ts ***!
  \*************************************************/
/*! exports provided: LolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LolComponent", function() { return LolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LolComponent {
    constructor() {
    }
    ngOnInit() {
        window.location.href = 'http://img1.liveinternet.ru/images/foto/b/2/111/1823111/f_10770684.jpg';
    }
}
LolComponent.ɵfac = function LolComponent_Factory(t) { return new (t || LolComponent)(); };
LolComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LolComponent, selectors: [["app-lol"]], decls: 2, vars: 0, template: function LolComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "lol works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9sL2xvbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LolComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lol',
                templateUrl: './lol.component.html',
                styleUrls: ['./lol.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
        window.onload = () => {
            document.querySelector('.cont_principal').className = "cont_principal cont_error_active";
        };
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 8, vars: 0, consts: [[1, "cont_principal"], [1, "cont_error"], [1, "cont_aura_1"], [1, "cont_aura_2"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Oops");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u044B \u0438\u0449\u0435\u0442\u0435, \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: 0;\n  text-align: center;\n}\n\n.cont_principal[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: #123123;\n}\n\n.cont_error[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 300px;\n  top: 50%;\n  margin-top: -10em;\n  z-index: 9999;\n}\n\n.cont_error[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 120px;\n  color: #fff;\n  position: relative;\n  left: -100%;\n  transition: all 0.5s;\n}\n\n.cont_error[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 24px;\n  letter-spacing: 5px;\n  color: #dee2e0;\n  position: relative;\n  left: 100%;\n  transition: all 0.5s;\n  transition-delay: 0.5s;\n  -webkit-transition: all 0.5s;\n  -webkit-transition-delay: 0.5s;\n}\n\n.cont_aura_1[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 300px;\n  height: 120%;\n  top: 25px;\n  right: -340px;\n  background-color: #64a069;\n  box-shadow: 0 0 60px 20px rgba(100, 160, 105, 0.5);\n  transition: all 0.5s;\n}\n\n.cont_aura_2[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 300px;\n  right: -10%;\n  bottom: -301px;\n  background-color: rgba(108, 184, 112, 0.96);\n  box-shadow: 0 0 60px 10px rgba(100, 150, 100, 0.5), 0 0 20px 0 rgba(0, 0, 0, 0.1);\n  z-index: 5;\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n}\n\n.cont_error_active[_ngcontent-%COMP%]    > .cont_error[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.cont_error_active[_ngcontent-%COMP%]    > .cont_error[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.cont_error_active[_ngcontent-%COMP%]    > .cont_aura_2[_ngcontent-%COMP%] {\n  animation-name: animation_error_2;\n  animation-duration: 4s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n  transform: rotate(-20deg);\n}\n\n.cont_error_active[_ngcontent-%COMP%]    > .cont_aura_1[_ngcontent-%COMP%] {\n  transform: rotate(20deg);\n  right: -170px;\n  animation-name: animation_error_1;\n  animation-duration: 4s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n\n@keyframes animation_error_1 {\n  from {\n    transform: rotate(20deg);\n  }\n  to {\n    transform: rotate(25deg);\n  }\n}\n\n@keyframes animation_error_2 {\n  from {\n    transform: rotate(-15deg);\n  }\n  to {\n    transform: rotate(-20deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrREFBQTtFQUVBLG9CQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSwyQ0FBQTtFQUNBLGlGQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7QUFBRjs7QUFHQTtFQUNFLE9BQUE7QUFBRjs7QUFHQTtFQUNFLE9BQUE7QUFBRjs7QUFHQTtFQUNFLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUdBO0VBQ0Usd0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7RUFDQSw4QkFBQTtBQUFGOztBQXNDQTtFQUNFO0lBRUUsd0JBQUE7RUFMRjtFQU9BO0lBRUUsd0JBQUE7RUFMRjtBQUNGOztBQTBDQTtFQUNFO0lBRUUseUJBQUE7RUFWRjtFQVlBO0lBRUUseUJBQUE7RUFWRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250X3ByaW5jaXBhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMzEyMztcbn1cblxuLmNvbnRfZXJyb3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICB0b3A6IDUwJTtcbiAgbWFyZ2luLXRvcDogLTEwZW07XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi5jb250X2Vycm9yID4gaDEge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMTAwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cblxuLmNvbnRfZXJyb3IgPiBwIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICBjb2xvcjogI2RlZTJlMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjVzO1xufVxuXG4uY29udF9hdXJhXzEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAxMjAlO1xuICB0b3A6IDI1cHg7XG4gIHJpZ2h0OiAtMzQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAwLCAxNjAsIDEwNSwgMSk7XG4gIGJveC1zaGFkb3c6IDAgMCA2MHB4IDIwcHggcmdiYSgxMDAsIDE2MCwgMTA1LCAwLjUpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLmNvbnRfYXVyYV8yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgcmlnaHQ6IC0xMCU7XG4gIGJvdHRvbTogLTMwMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwOCwgMTg0LCAxMTIsIDAuOTYpO1xuICBib3gtc2hhZG93OiAwIDAgNjBweCAxMHB4IHJnYmEoMTAwLCAxNTAsIDEwMCwgMC41KSwgMCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHotaW5kZXg6IDU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuXG4uY29udF9lcnJvcl9hY3RpdmUgPiAuY29udF9lcnJvciA+IGgxIHtcbiAgbGVmdDogMDtcbn1cblxuLmNvbnRfZXJyb3JfYWN0aXZlID4gLmNvbnRfZXJyb3IgPiBwIHtcbiAgbGVmdDogMDtcbn1cblxuLmNvbnRfZXJyb3JfYWN0aXZlID4gLmNvbnRfYXVyYV8yIHtcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGlvbl9lcnJvcl8yO1xuICBhbmltYXRpb24tZHVyYXRpb246IDRzO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XG59XG5cbi5jb250X2Vycm9yX2FjdGl2ZSA+IC5jb250X2F1cmFfMSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcbiAgcmlnaHQ6IC0xNzBweDtcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGlvbl9lcnJvcl8xO1xuICBhbmltYXRpb24tZHVyYXRpb246IDRzO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRpb25fZXJyb3JfMSB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjVkZWcpO1xuICB9XG59XG5cbkAtby1rZXlmcmFtZXMgYW5pbWF0aW9uX2Vycm9yXzEge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDI1ZGVnKTtcbiAgfVxuXG59XG5cbkAtbW96LWtleWZyYW1lcyBhbmltYXRpb25fZXJyb3JfMSB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjVkZWcpO1xuICB9XG5cbn1cblxuQGtleWZyYW1lcyBhbmltYXRpb25fZXJyb3JfMSB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjVkZWcpO1xuICB9XG59XG5cblxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGlvbl9lcnJvcl8yIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTIwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xuICB9XG59XG5cbkAtby1rZXlmcmFtZXMgYW5pbWF0aW9uX2Vycm9yXzIge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTtcbiAgfVxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XG4gIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIGFuaW1hdGlvbl9lcnJvcl8yIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTIwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0aW9uX2Vycm9yXzIge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTtcbiAgfVxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");





function ProjectsComponent_div_6_div_1_10_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const photo_r5 = ctx_r8.$implicit;
    const i_r6 = ctx_r8.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r7.backendId + photo_r5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "\u0424\u043E\u0442\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u2116", i_r6 + 1, "");
} }
function ProjectsComponent_div_6_div_1_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProjectsComponent_div_6_div_1_10_ng_template_0_Template, 2, 2, "ng-template", 15);
} }
function ProjectsComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngb-carousel", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProjectsComponent_div_6_div_1_10_Template, 1, 0, undefined, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0414\u0430\u0442\u0430 \u043F\u043E\u0441\u0442\u0440\u043E\u0439\u043A\u0438: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 7, project_r3.endDate, "dd.MM.yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("keyboard", true)("pauseOnHover", true)("wrap", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r3.photos);
} }
function ProjectsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsComponent_div_6_div_1_Template, 11, 10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.projects);
} }
function ProjectsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProjectsComponent {
    constructor(projectService) {
        this.projectService = projectService;
        this.backendId = '/api/api/images/';
    }
    ngOnInit() {
        this.getAll();
    }
    getAll() {
        this.projectService.getProjects().subscribe((projects) => {
            this.projects = projects;
            console.log(projects);
        }, error => {
            console.log(error);
        });
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 8, vars: 2, consts: [[1, "main", "text-center"], [1, "d-block", "first-priority"], [1, "d-block", "second-priority"], [1, "body-container"], ["class", "container", 4, "ngIf"], ["class", "body-loader", 4, "ngIf"], [1, "container"], ["class", "project", 4, "ngFor", "ngForOf"], [1, "project"], [1, "second-priority"], [1, "line", "spacer"], [1, "date"], [1, "description"], ["interval", "12000", 3, "keyboard", "pauseOnHover", "wrap"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], ["height", "500px", 3, "src", "alt"], [1, "body-loader"], ["width", "205", "height", "120"], ["d", "M 100.16623,51.415329 C 106.74946,45.082085 113.08279,39.707091 119.16623,35.290329 C 125.24945,30.790433 130.37444,27.790436 134.54123,26.290329 C 138.70777,24.790439 143.24943,24.04044 148.16623,24.040329 C 158.49941,24.04044 166.83274,27.498769 173.16623,34.415329 C 179.58273,41.248756 182.79106,49.540414 182.79123,59.290329 C 182.79106,65.957064 181.37439,72.123725 178.54123,77.790329 C 175.70773,83.457047 171.66607,87.748709 166.41623,90.665329 C 161.24941,93.582037 155.29108,95.040369 148.54123,95.040329 C 139.7911,95.040369 132.12444,93.16537 125.54123,89.415329 C 119.04112,85.665378 110.58279,78.582052 100.16623,68.165329 C 89.332815,78.915385 80.707824,86.082044 74.291229,89.665329 C 67.874504,93.248704 60.416178,95.040369 51.916229,95.040329 C 41.082864,95.040369 32.624539,91.665372 26.541229,84.915329 C 20.541218,78.165385 17.541221,69.623727 17.541229,59.290329 C 17.541221,49.623747 20.707884,41.332089 27.041229,34.415329 C 33.457871,27.498769 41.832863,24.04044 52.166229,24.040329 C 57.166181,24.04044 61.74951,24.790439 65.916229,26.290329 C 70.082835,27.790436 75.166163,30.790433 81.166229,35.290329 C 87.249484,39.707091 93.582811,45.082085 100.16623,51.415329 M 108.29123,59.165329 C 117.12445,67.915396 124.37445,73.873723 130.04123,77.040329 C 135.7911,80.123717 141.49943,81.665382 147.16623,81.665329 C 154.24942,81.665382 159.79108,79.582051 163.79123,75.415329 C 167.79107,71.165392 169.79107,66.040398 169.79123,60.040329 C 169.79107,53.457077 167.79107,48.040416 163.79123,43.790329 C 159.87441,39.457091 154.66608,37.290426 148.16623,37.290329 C 144.49943,37.290426 140.95776,37.957092 137.54123,39.290329 C 134.12444,40.540423 130.04111,42.790421 125.29123,46.040329 C 120.54112,49.207081 114.87446,53.582077 108.29123,59.165329 M 92.041229,59.165329 C 86.041152,54.082076 80.666157,49.915414 75.916229,46.665329 C 71.166167,43.332087 66.999504,40.957089 63.416229,39.540329 C 59.832845,38.123759 55.916182,37.415426 51.666229,37.415329 C 45.582859,37.415426 40.541198,39.540424 36.541229,43.790329 C 32.541206,48.040416 30.541208,53.457077 30.541229,60.040329 C 30.541208,64.623732 31.582873,68.498728 33.666229,71.665329 C 35.749536,74.832055 38.2912,77.290386 41.291229,79.040329 C 44.374527,80.790383 48.207857,81.665382 52.791229,81.665329 C 58.791179,81.665382 64.624507,80.08205 70.291229,76.915329 C 75.957829,73.748723 83.207822,67.832062 92.041229,59.165329", 1, "path"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SIP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0427\u0442\u043E \u043C\u044B \u043F\u043E\u0441\u0442\u0440\u043E\u0438\u043B\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectsComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectsComponent_div_7_Template, 4, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.projects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbSlide"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".body-container[_ngcontent-%COMP%] {\n  background-image: linear-gradient(37deg, #5fa44a 0%, #7fd7ab 100%);\n}\n\n.main[_ngcontent-%COMP%] {\n  background: #02c48d url('projects-header.jpg') no-repeat center center;\n  background-size: cover;\n  padding: 7rem 0 10rem 0;\n}\n\n.project[_ngcontent-%COMP%] {\n  padding: 1em 0;\n}\n\n.first-priority[_ngcontent-%COMP%] {\n  font-size: 60px;\n  font-weight: bold;\n  line-height: 1.2;\n  margin: 2rem 0;\n}\n\n.second-priority[_ngcontent-%COMP%] {\n  font-size: 35px;\n  line-height: 1.2;\n}\n\n.date[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 0.5em;\n}\n\n.line[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #fff;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  margin: 0.75em 0;\n}\n\nngb-carousel[_ngcontent-%COMP%] {\n  max-width: 38em;\n  margin: 50px auto;\n}\n\nngb-carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  outline: none;\n}\n\nngb-carousel[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n}\n\n.carousel-inner[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.carousel-item[_ngcontent-%COMP%] {\n  display: flex !important;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 1.2s ease-in-out, visibility 1.2s;\n  z-index: -1;\n}\n\n.carousel-item.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  z-index: 10;\n}\n\n.carousel-control-prev[_ngcontent-%COMP%] {\n  z-index: 20;\n}\n\n.carousel-control-next[_ngcontent-%COMP%] {\n  z-index: 20;\n}\n\n.carousel-indicators[_ngcontent-%COMP%] {\n  z-index: 20;\n}\n\n.body-loader[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 25em;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.loader[_ngcontent-%COMP%] {\n  margin: 2em;\n  animation: rotate 2s linear infinite normal;\n  height: 4rem;\n  position: relative;\n  width: 4rem;\n}\n\n.loader__ball[_ngcontent-%COMP%] {\n  animation: move1 1s ease-out infinite alternate;\n  background-color: #fff;\n  border-radius: 50%;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n}\n\n.loader__ball[_ngcontent-%COMP%]:nth-of-type(2) {\n  animation-name: move2;\n}\n\n.loader__ball[_ngcontent-%COMP%]:nth-of-type(3) {\n  animation-name: move3;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes move1 {\n  0%, 5% {\n    transform: translate(0, 0);\n  }\n  to {\n    transform: translate(0, -100%);\n  }\n}\n\n@keyframes move2 {\n  0%, 5% {\n    transform: translate(0, 0);\n  }\n  to {\n    transform: translate(100%, 100%);\n  }\n}\n\n@keyframes move3 {\n  0%, 15% {\n    transform: translate(0);\n  }\n  to {\n    transform: translate(-100%, 100%);\n  }\n}\n\nsvg[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n}\n\npath[_ngcontent-%COMP%] {\n  stroke: cyan;\n  stroke-width: 6;\n  stroke-linejoin: round;\n  stroke-linecap: round;\n  stroke-dasharray: 193.904983521;\n  fill: none;\n  animation: load 4s linear infinite, color 3s linear infinite;\n}\n\n@keyframes load {\n  from {\n    stroke-dashoffset: 775.619934082;\n  }\n}\n\n@keyframes color {\n  33% {\n    stroke: #4a9a3a;\n  }\n  66% {\n    stroke: #123123;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlFLGtFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzRUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUNFO0VBQ0UsK0NBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNJO0VBQ0UscUJBQUE7QUFDTjs7QUFFSTtFQUNFLHFCQUFBO0FBQU47O0FBS0E7RUFDRTtJQUNFLG9CQUFBO0VBRkY7RUFJQTtJQUNFLHlCQUFBO0VBRkY7QUFDRjs7QUFLQTtFQUNFO0lBQ0UsMEJBQUE7RUFIRjtFQUtBO0lBQ0UsOEJBQUE7RUFIRjtBQUNGOztBQU1BO0VBQ0U7SUFDRSwwQkFBQTtFQUpGO0VBTUE7SUFDRSxnQ0FBQTtFQUpGO0FBQ0Y7O0FBT0E7RUFDRTtJQUNFLHVCQUFBO0VBTEY7RUFPQTtJQUNFLGlDQUFBO0VBTEY7QUFDRjs7QUFRQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUFORjs7QUFTQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLDREQUNFO0FBUEo7O0FBV0E7RUFDRTtJQUFPLGdDQUFBO0VBUFA7QUFDRjs7QUFTQTtFQUNFO0lBQU0sZUFBQTtFQU5OO0VBT0E7SUFBTSxlQUFBO0VBSk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCgzN2RlZywgcmdiKDk1LCAxNjQsIDc0KSAwJSwgcmdiKDEyNywgMjE1LCAxNzEpIDEwMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgzN2RlZywgcmdiKDk1LCAxNjQsIDc0KSAwJSwgcmdiKDEyNywgMjE1LCAxNzEpIDEwMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KDM3ZGVnLCByZ2IoOTUsIDE2NCwgNzQpIDAlLCByZ2IoMTI3LCAyMTUsIDE3MSkgMTAwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzN2RlZywgcmdiKDk1LCAxNjQsIDc0KSAwJSwgcmdiKDEyNywgMjE1LCAxNzEpIDEwMCUpO1xufVxuXG4ubWFpbiB7XG4gIGJhY2tncm91bmQ6ICMwMmM0OGQgdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMtaGVhZGVyLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBhZGRpbmc6IDdyZW0gMCAxMHJlbSAwO1xufVxuXG4ucHJvamVjdCB7XG4gIHBhZGRpbmc6IDFlbSAwO1xufVxuXG4uZmlyc3QtcHJpb3JpdHkge1xuICBmb250LXNpemU6IDYwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBtYXJnaW46IDJyZW0gMDtcbn1cblxuLnNlY29uZC1wcmlvcml0eSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLmRhdGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuXG4ubGluZSB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmZmO1xufVxuXG4uc3BhY2VyIHtcbiAgbWFyZ2luOiAwLjc1ZW0gMDtcbn1cblxubmdiLWNhcm91c2VsIHtcbiAgbWF4LXdpZHRoOiAzOGVtO1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxubmdiLWNhcm91c2VsIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5uZ2ItY2Fyb3VzZWwge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4uY2Fyb3VzZWwtaW5uZXIge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLmNhcm91c2VsLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjJzIGVhc2UtaW4tb3V0LCB2aXNpYmlsaXR5IDEuMnM7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uY2Fyb3VzZWwtaXRlbS5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XG4gIHotaW5kZXg6IDIwO1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgei1pbmRleDogMjA7XG59XG5cbi5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgei1pbmRleDogMjA7XG59XG5cbi5ib2R5LWxvYWRlciB7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAyNWVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxvYWRlciB7XG4gIG1hcmdpbjogMmVtO1xuICBhbmltYXRpb246IHJvdGF0ZSAycyBsaW5lYXIgaW5maW5pdGUgbm9ybWFsO1xuICBoZWlnaHQ6IDRyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDRyZW07XG5cbiAgJl9fYmFsbCB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlMSAxcyBlYXNlLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgICY6bnRoLW9mLXR5cGUoMikge1xuICAgICAgYW5pbWF0aW9uLW5hbWU6IG1vdmUyO1xuICAgIH1cblxuICAgICY6bnRoLW9mLXR5cGUoMykge1xuICAgICAgYW5pbWF0aW9uLW5hbWU6IG1vdmUzO1xuICAgIH1cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbW92ZTEge1xuICAwJSwgNSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAwJSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBtb3ZlMiB7XG4gIDAlLCA1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIDEwMCUpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbW92ZTMge1xuICAwJSwgMTUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDEwMCUpO1xuICB9XG59XG5cbnN2ZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxucGF0aCB7XG4gIHN0cm9rZTogY3lhbjtcbiAgc3Ryb2tlLXdpZHRoOiA2O1xuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDE5My45MDQ5ODM1MjE7XG4gIGZpbGw6IG5vbmU7XG4gIGFuaW1hdGlvbjpcbiAgICBsb2FkIDRzIGxpbmVhciBpbmZpbml0ZSxcbiAgICBjb2xvciAzcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgbG9hZCB7XG4gIGZyb20geyBzdHJva2UtZGFzaG9mZnNldDogNzc1LjYxOTkzNDA4MjAzMTI7IH1cbn1cblxuQGtleWZyYW1lcyBjb2xvciB7XG4gIDMzJSB7IHN0cm9rZTogIzRhOWEzYTsgfVxuICA2NiUgeyBzdHJva2U6ICMxMjMxMjM7IH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss']
            }]
    }], function () { return [{ type: _services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/selected-service/selected-service.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/selected-service/selected-service.component.ts ***!
  \***************************************************************************/
/*! exports provided: SelectedServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedServiceComponent", function() { return SelectedServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants */ "./src/app/shared/constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





class SelectedServiceComponent {
    constructor(route, router, sanitizer) {
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.sip = 'Строим SIP';
    }
    ngOnInit() {
        this.selectedServiceName = this.route.snapshot.params['selected'];
        this.selectedService = _shared_constants__WEBPACK_IMPORTED_MODULE_1__["SERVICES"][this.selectedServiceName];
        this.checkService();
    }
    checkService() {
        if (!this.selectedService) {
            this.router.navigateByUrl('error').then();
        }
        else {
            this.setTitle();
            this.header = `url(../../../assets/images/${this.selectedService.photo}) no-repeat center center`;
            this.serviceDescription = this.sanitizer.bypassSecurityTrustHtml(this.selectedService.description);
        }
    }
    setTitle() {
        document.title = `${this.selectedService.name} | ${this.sip}`;
    }
}
SelectedServiceComponent.ɵfac = function SelectedServiceComponent_Factory(t) { return new (t || SelectedServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
SelectedServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectedServiceComponent, selectors: [["app-selected-service"]], decls: 20, vars: 5, consts: [[1, "body-container"], [1, "header-spacer"], [1, "main", "text-center"], [1, "d-block", "first-priority"], [1, "container", "text-center"], [1, "second-priority", "text-left"], [1, "line", "spacer"], [1, "text-left", 3, "innerHTML"], [1, ""], ["routerLink", "/contacts"], [1, "spacer"]], template: function SelectedServiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SIP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u0414\u043B\u044F \u0431\u043E\u043B\u0435\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438, \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u043C\u0438 \u043F\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430\u043C, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u043C \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedService.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.serviceDescription, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u044B: ", ctx.selectedService.price, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".main[_ngcontent-%COMP%] {\n  padding: 9rem 0 10rem 0;\n}\n\n.header-spacer[_ngcontent-%COMP%] {\n  height: 4em;\n  margin-bottom: 2em;\n}\n\n.first-priority[_ngcontent-%COMP%] {\n  font-size: 60px;\n  font-weight: bold;\n  line-height: 1.2;\n  margin: 1rem 0;\n}\n\n.second-priority[_ngcontent-%COMP%] {\n  font-size: 35px;\n  line-height: 1.2;\n}\n\n.body-container[_ngcontent-%COMP%] {\n  background-image: linear-gradient(37deg, #5fa44a 0%, #7fd7ab 100%);\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n\n.line[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #fff;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  margin: 1.5em 0;\n}\n\na[_ngcontent-%COMP%] {\n  color: #c7f1af;\n  transition: color 0.3s;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #36633b;\n  transition: color 0.3s;\n}\n\n@media (min-width: 544px) {\n  .header-spacer[_ngcontent-%COMP%] {\n    height: 2em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWxlY3RlZC1zZXJ2aWNlL3NlbGVjdGVkLXNlcnZpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBSUUsa0VBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQUE7RUFDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWxlY3RlZC1zZXJ2aWNlL3NlbGVjdGVkLXNlcnZpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gIHBhZGRpbmc6IDlyZW0gMCAxMHJlbSAwO1xufVxuXG4uaGVhZGVyLXNwYWNlciB7XG4gIGhlaWdodDogNGVtO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG5cbi5maXJzdC1wcmlvcml0eSB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuXG4uc2Vjb25kLXByaW9yaXR5IHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG4uYm9keS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCgzN2RlZywgcmdiKDk1LCAxNjQsIDc0KSAwJSwgcmdiKDEyNywgMjE1LCAxNzEpIDEwMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgzN2RlZywgcmdiKDk1LCAxNjQsIDc0KSAwJSwgcmdiKDEyNywgMjE1LCAxNzEpIDEwMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KDM3ZGVnLCByZ2IoOTUsIDE2NCwgNzQpIDAlLCByZ2IoMTI3LCAyMTUsIDE3MSkgMTAwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzN2RlZywgcmdiKDk1LCAxNjQsIDc0KSAwJSwgcmdiKDEyNywgMjE1LCAxNzEpIDEwMCUpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMWVtO1xufVxuXG4ubGluZSB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmZmO1xufVxuXG4uc3BhY2VyIHtcbiAgbWFyZ2luOiAxLjVlbSAwO1xufVxuXG5hIHtcbiAgY29sb3I6ICNjN2YxYWY7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMzY2MzNiO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTQ0cHgpIHtcbiAgLmhlYWRlci1zcGFjZXIge1xuICAgIGhlaWdodDogMmVtO1xuICB9XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectedServiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-selected-service',
                templateUrl: './selected-service.component.html',
                styleUrls: ['./selected-service.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/services/services.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/services/services.component.ts ***!
  \***********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants */ "./src/app/shared/constants.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function ServicesComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", service_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/images/", ctx_r0.services[service_r1].photo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.services[service_r1].name);
} }
class ServicesComponent {
    constructor() {
        this.serviceNames = Object.keys(this.services);
    }
    get services() {
        return _shared_constants__WEBPACK_IMPORTED_MODULE_1__["SERVICES"];
    }
    ngOnInit() {
    }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 33, vars: 1, consts: [[1, "main", "text-center"], [1, "d-block", "first-priority"], [1, "d-block", "second-priority"], [1, "body-container"], [1, "container"], [1, "spacer"], [1, "text"], [4, "ngFor", "ngForOf"], [1, "line", "spacer"], [1, "service", "text-center", "row", "align-items-center", 3, "routerLink"], [1, "col-custom"], ["width", "200em", "height", "150em", "alt", "Photo", 3, "src"], [1, "col-custom", "service-name"], [1, "second-priority"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SIP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u0414\u043E\u0441\u0442\u043E\u0438\u043D\u0441\u0442\u0432\u0430 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0439, \u0441\u043C\u043E\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043F\u043E \u043A\u0430\u043D\u0430\u0434\u0441\u043A\u043E\u0439 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0438\u0437 \u0421\u0418\u041F-\u043F\u0430\u043D\u0435\u043B\u0435\u0439, \u0434\u0430\u0432\u043D\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u044B \u043D\u0430 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0435. \u041C\u0435\u0442\u043E\u0434 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0434\u043E\u043C\u043E\u0432, \u043F\u0440\u0438\u0433\u043E\u0434\u043D\u044B\u0445 \u0434\u043B\u044F \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u044F \u0432 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 \u0441\u0443\u0440\u043E\u0432\u043E\u0433\u043E \u043A\u043B\u0438\u043C\u0430\u0442\u0430, \u0443\u0441\u043F\u0435\u043B\u0438 \u043E\u0446\u0435\u043D\u0438\u0442\u044C \u0438 \u0432 \u0420\u043E\u0441\u0441\u0438\u0438. \u0420\u043E\u0432\u043D\u044B\u0435 \u0441\u0442\u0435\u043D\u044B, \u043D\u0435 \u043D\u0443\u0436\u0434\u0430\u044E\u0449\u0438\u0435\u0441\u044F \u0432 \u0442\u0435\u043F\u043B\u043E\u0438\u0437\u043E\u043B\u044F\u0446\u0438\u0438, \u2013 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E, \u0443\u043F\u0440\u043E\u0449\u0430\u044E\u0449\u0435\u0435 \u043E\u0442\u0434\u0435\u043B\u043A\u0443 \u0447\u0430\u0441\u0442\u043D\u043E\u0433\u043E \u0434\u043E\u043C\u0430 \u0438\u0437 \u0441\u0438\u043F-\u043F\u0430\u043D\u0435\u043B\u0435\u0439. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u0420\u0430\u0437\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u0438\u0435 \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u0434\u043E\u0431\u0438\u0442\u044C\u0441\u044F \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438. \u041E\u0434\u043D\u0430\u043A\u043E \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0434\u043E\u043C\u0430 \u2013 \u0432\u043E\u043F\u0440\u043E\u0441 \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u044D\u0441\u0442\u0435\u0442\u0438\u043A\u0438, \u043D\u043E \u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438. \u041A \u0432\u044B\u0431\u043E\u0440\u0443 \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u0432 \u043E\u0442\u0434\u0435\u043B\u043A\u0438 \u0441\u0442\u0435\u043D \u0438\u0437 \u0421\u0418\u041F-\u043F\u0430\u043D\u0435\u043B\u0435\u0439, \u043F\u043E\u0442\u043E\u043B\u043A\u0430 \u0438 \u043F\u043E\u043B\u0430 \u0441\u0442\u043E\u0438\u0442 \u043E\u0442\u043D\u0435\u0441\u0442\u0438\u0441\u044C \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E. \u0427\u0442\u043E\u0431\u044B \u0434\u043E\u0431\u0438\u0442\u044C\u0441\u044F \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u0430, \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u043F\u0440\u0438\u0441\u043B\u0443\u0448\u0430\u0442\u044C\u0441\u044F \u043A \u0441\u043E\u0432\u0435\u0442\u0430\u043C \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432, \u043F\u0440\u0438\u043D\u044F\u0432 \u0432\u043E \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0438 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u043F\u043E \u043F\u043E\u0438\u0441\u043A\u0443 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u0438 \u043E\u0431\u043B\u0438\u0446\u043E\u0432\u043E\u0447\u043D\u044B\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432. \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \"\u0421\u0442\u0440\u043E\u0438\u043C SIP\" \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u043E \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0443 \u0447\u0430\u0441\u0442\u043D\u044B\u0445 \u0434\u043E\u043C\u043E\u0432, \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0437\u0434\u0430\u043D\u0438\u0439 \u0438 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0445 \u0441\u043E\u043E\u0440\u0443\u0436\u0435\u043D\u0438\u0439 \u043F\u043E \u0442\u0430\u043A \u043D\u0430\u0437\u044B\u0432\u0430\u0435\u043C\u043E\u0439 \"\u043A\u0430\u043D\u0430\u0434\u0441\u043A\u043E\u0439 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0431\u044B\u0441\u0442\u0440\u043E\u0432\u043E\u0437\u0432\u043E\u0434\u0438\u043C\u043E\u0433\u043E \u0436\u0438\u043B\u044C\u044F\" \u0441 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435\u043C SIP \u043F\u0430\u043D\u0435\u043B\u0435\u0439, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u044D\u0442\u0430\u043F\u044B: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u0444\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442\u043E\u0432 (\u043D\u0430 \u0432\u0438\u043D\u0442\u043E\u0432\u044B\u0445 \u0441\u0432\u0430\u044F\u0445, \u0431\u0443\u0440\u043E\u043D\u0430\u0431\u0438\u0432\u043D\u044B\u0445 \u0441\u0432\u0430\u044F\u0445, \u043B\u0435\u043D\u0442\u043E\u0447\u043D\u044B\u0445 \u043C\u0435\u043B\u043A\u043E\u0437\u0430\u0433\u043B\u0443\u0431\u043B\u0435\u043D\u043D\u044B\u0445, \u043C\u043E\u043D\u043E\u043B\u0438\u0442\u043D\u044B\u0445 \u043F\u043B\u0438\u0442\u0430\u0445); ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0421\u0431\u043E\u0440\u043A\u0430 \u0434\u043E\u043C\u043E\u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430, \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u043D\u0430 \u043D\u0430\u0448\u0435\u043C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u043A\u0440\u043E\u0432\u043B\u0438 \u043B\u044E\u0431\u044B\u043C \u043A\u0440\u043E\u0432\u0435\u043B\u044C\u043D\u044B\u043C \u043F\u043E\u043A\u0440\u044B\u0442\u0438\u0435\u043C (\u0433\u0438\u0431\u043A\u043E\u0439 \u0447\u0435\u0440\u0435\u043F\u0438\u0446\u0435\u0439, \u043C\u0435\u0442\u0430\u043B\u043B\u043E\u0447\u0435\u0440\u0435\u043F\u0438\u0446\u0435\u0439, \u0435\u0432\u0440\u043E\u0448\u0438\u0444\u0435\u0440\u043E\u043C \u0438 \u0442.\u0434.);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u043D\u0430\u0440\u0443\u0436\u043D\u043E\u0439 \u043E\u0442\u0434\u0435\u043B\u043A\u0438 \u043B\u044E\u0431\u044B\u043C \u043E\u0442\u0434\u0435\u043B\u043E\u0447\u043D\u044B\u043C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u043C (\u0441\u0430\u0439\u0434\u0438\u043D\u0433\u043E\u043C \u0432\u0438\u043D\u0438\u043B\u043E\u0432\u044B\u043C, \u0444\u0438\u0431\u0440\u043E\u0446\u0435\u043C\u0435\u043D\u0442\u043D\u044B\u043C, \u0444\u0430\u0441\u0430\u0434\u043D\u043E\u0439 \u0448\u0442\u0443\u043A\u0430\u0442\u0443\u0440\u043A\u043E\u0439, \u0444\u0430\u0441\u0430\u0434\u043D\u043E\u0439 \u043F\u043B\u0438\u0442\u043A\u043E\u0439 \u0438 \u0442.\u0434.); ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0441\u0442\u0435\u043A\u043B\u043E\u043F\u0430\u043A\u0435\u0442\u043E\u0432;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u044B\u0445 \u0441\u0435\u0442\u0435\u0439 - \u043E\u0442\u043E\u043F\u043B\u0435\u043D\u0438\u044F, \u043A\u0430\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438, \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0438\u0438, \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0438 \u0438 \u0441\u0430\u043D\u0442\u0435\u0445\u043D\u0438\u043A\u0438;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0439 \u0447\u0435\u0440\u043D\u043E\u0432\u043E\u0439 \u0438 \u0447\u0438\u0441\u0442\u043E\u0432\u043E\u0439 \u043E\u0442\u0434\u0435\u043B\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0440\u0430\u0431\u043E\u0442 \u043F\u043E \u043A\u0430\u0436\u0434\u043E\u043C\u0443 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u0432\u0437\u044F\u0442\u043E\u043C\u0443 \u043E\u0431\u044A\u0435\u043A\u0442\u0443 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u0441\u043C\u0435\u0442\u0435 \u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0443, \u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442 \u043E\u0431\u044A\u0435\u043C\u043E\u0432, \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438, \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u043C\u044B\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0438 \u0442.\u0434. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ServicesComponent_div_31_Template, 8, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.serviceNames);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".main[_ngcontent-%COMP%] {\n  background: #02c48d url('services-header.webp') no-repeat center center;\n  background-size: cover;\n  padding: 7rem 0 10rem 0;\n}\n\n.text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1.2;\n}\n\n.first-priority[_ngcontent-%COMP%] {\n  font-size: 60px;\n  font-weight: bold;\n  line-height: 1.2;\n  margin: 2rem 0;\n}\n\n.second-priority[_ngcontent-%COMP%] {\n  font-size: 35px;\n  line-height: 1.2;\n}\n\n.body-container[_ngcontent-%COMP%] {\n  background-image: linear-gradient(37deg, #5fa44a 0%, #7fd7ab 100%);\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n\n.line[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #fff;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  margin: 1.5em 0;\n}\n\n.contacts[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #ffffff;\n  vertical-align: middle;\n  margin: 0.2em auto;\n  text-decoration: none;\n}\n\n.contacts[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: 0.5em auto;\n}\n\n.contacts[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.contacts[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  background: url('viber.png') no-repeat;\n  width: 32px;\n  height: 32px;\n  float: left;\n  margin: 0.1em 6px 0 0;\n}\n\n.contacts[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  background: url('whatsapp.png') no-repeat;\n  width: 32px;\n  height: 32px;\n  float: left;\n  margin: 0.1em 6px 0 0;\n}\n\n.row[_ngcontent-%COMP%] {\n  transition: color 0.5s;\n  margin: 0 1em;\n  cursor: pointer;\n}\n\n.row[_ngcontent-%COMP%]:hover {\n  color: #36633b;\n  transition: color 0.5s;\n}\n\n.col-custom[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.service-name[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 0 auto;\n}\n\n@media (max-width: 992px) {\n  .col-custom[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    margin-bottom: 1em;\n  }\n}\n\n@media (max-width: 450px) {\n  a[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVFQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBSUUsa0VBQUE7QUFFRjs7QUFDQTtFQUNFLFlBQUE7QUFFRjs7QUFDQTtFQUNFLDZCQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0FBRUY7O0FBRUU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdFO0VBQ0UscUJBQUE7QUFESjs7QUFNRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esc0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQUpKOztBQU9FO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBTEo7O0FBU0E7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBTkY7O0FBU0E7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7QUFORjs7QUFTQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUFORjs7QUFTQTtFQUNFLFVBQUE7RUFDQSxjQUFBO0FBTkY7O0FBU0E7RUFDRTtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUFORjtBQUNGOztBQVNBO0VBQ0U7SUFDRSxlQUFBO0VBUEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gIGJhY2tncm91bmQ6ICMwMmM0OGQgdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NlcnZpY2VzLWhlYWRlci53ZWJwJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBhZGRpbmc6IDdyZW0gMCAxMHJlbSAwO1xufVxuLnRleHQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5cbi5maXJzdC1wcmlvcml0eSB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIG1hcmdpbjogMnJlbSAwO1xufVxuXG4uc2Vjb25kLXByaW9yaXR5IHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG4uYm9keS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCgzN2RlZywgcmdiKDk1LCAxNjQsIDc0KSAwJSwgcmdiKDEyNywgMjE1LCAxNzEpIDEwMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgzN2RlZywgcmdiKDk1LCAxNjQsIDc0KSAwJSwgcmdiKDEyNywgMjE1LCAxNzEpIDEwMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KDM3ZGVnLCByZ2IoOTUsIDE2NCwgNzQpIDAlLCByZ2IoMTI3LCAyMTUsIDE3MSkgMTAwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzN2RlZywgcmdiKDk1LCAxNjQsIDc0KSAwJSwgcmdiKDEyNywgMjE1LCAxNzEpIDEwMCUpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMWVtO1xufVxuXG4ubGluZSB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmZmO1xufVxuXG4uc3BhY2VyIHtcbiAgbWFyZ2luOiAxLjVlbSAwO1xufVxuXG4uY29udGFjdHMge1xuICBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW46IDAuMmVtIGF1dG87XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgLmxpbmUge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luOiAwLjVlbSBhdXRvO1xuICB9XG5cbiAgLmVtYWlsIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgLy9jb2xvcjogIzIwYzk5NztcbiAgICAvL21hcmdpbi10b3A6IDFlbTtcbiAgfVxuXG4gIC5udW1iZXI6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdmliZXIucG5nXCIpIG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAwLjFlbSA2cHggMCAwO1xuICB9XG5cbiAgLm51bWJlcjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3doYXRzYXBwLnBuZ1wiKSBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMC4xZW0gNnB4IDAgMDtcbiAgfVxufVxuXG4ucm93IHtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC41cztcbiAgbWFyZ2luOiAwIDFlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucm93OmhvdmVyIHtcbiAgY29sb3I6ICMzNjYzM2I7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuNXM7XG59XG5cbi5jb2wtY3VzdG9tIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uc2VydmljZS1uYW1lIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29sLWN1c3RvbSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xuICBhIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-services',
                templateUrl: './services.component.html',
                styleUrls: ['./services.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/technology/technology.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/technology/technology.component.ts ***!
  \***************************************************************/
/*! exports provided: TechnologyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologyComponent", function() { return TechnologyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TechnologyComponent {
    constructor() { }
    ngOnInit() {
    }
}
TechnologyComponent.ɵfac = function TechnologyComponent_Factory(t) { return new (t || TechnologyComponent)(); };
TechnologyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TechnologyComponent, selectors: [["app-technology"]], decls: 59, vars: 0, consts: [[1, "main", "text-center"], [1, "d-block", "first-priority"], [1, "d-block", "second-priority"], [1, "body-container"], [1, "container"], [1, "second-priority"], [1, "line", "spacer"], [1, "text"], [1, "spacer"]], template: function TechnologyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SIP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041D\u0435\u043C\u043D\u043E\u0433\u043E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F SIP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u041A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u043F\u043B\u043E\u0438\u0437\u043E\u043B\u044F\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0441\u044D\u043D\u0434\u0432\u0438\u0447-\u043F\u0430\u043D\u0435\u043B\u044C \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u0434\u0432\u0443\u0445 \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0441\u0442\u0440\u0443\u0436\u0435\u0447\u043D\u044B\u0445 \u043F\u043B\u0438\u0442 (\u041E\u0421\u041F), \u043C\u0435\u0436\u0434\u0443 \u043A\u043E\u0442\u043E\u0440\u044B\u043C\u0438 \u043F\u043E\u0434 \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u043F\u0440\u0438\u043A\u043B\u0435\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0441\u043B\u043E\u0439 \u0442\u0432\u0435\u0440\u0434\u043E\u0433\u043E \u043F\u0435\u043D\u043E\u043F\u043E\u043B\u0438\u0441\u0442\u0438\u0440\u043E\u043B\u0430 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0443\u0442\u0435\u043F\u043B\u0438\u0442\u0435\u043B\u044F. \u0422\u043E\u043B\u0449\u0438\u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u0435\u0439 \u0432 \u0433\u043E\u0442\u043E\u0432\u043E\u043C \u0432\u0438\u0434\u0435 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043E\u0442 124 \u043C\u043C \u0434\u043E 214 \u043C\u043C. \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u043F\u0430\u043D\u0435\u043B\u0438 2,8 \u043C\u0435\u0442\u0440\u0430 \u043D\u0430 1,25 \u043C\u0435\u0442\u0440\u0430. \u0422\u0430\u043A\u0430\u044F \u043F\u0430\u043D\u0435\u043B\u044C \u043E\u0431\u043B\u0430\u0434\u0430\u0435\u0442 \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u044D\u043D\u0435\u0440\u0433\u043E\u0441\u0431\u0435\u0440\u0435\u0433\u0430\u044E\u0449\u0438\u043C\u0438 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430\u043C\u0438 \u0438 \u0438\u043C\u0435\u0435\u0442 \u0432\u044B\u0441\u043E\u043A\u0443\u044E \u043F\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C. \u0421\u0442\u0435\u043D\u044B \u0438 \u0443\u0433\u043B\u044B \u0434\u043E\u043C\u043E\u0432, \u0441\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u043F\u043E \u044D\u0442\u043E\u0439 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438, \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E \u0440\u043E\u0432\u043D\u044B\u0435 \u0438 \u043F\u0440\u044F\u043C\u044B\u0435. \u041A\u0440\u043E\u043C\u0435 \u0442\u043E\u0433\u043E, \u043C\u043E\u043D\u0442\u0430\u0436 \u0434\u043E\u043C\u043E\u0432 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u043B\u044E\u0431\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0433\u043E\u0434\u0430, \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0435 \u0434\u043E\u043C\u0430 \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0442 \u043E\u0442\u043B\u0438\u0447\u043D\u044B\u043C\u0438 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u043C\u0438 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0430\u043C\u0438 \u0438 \u0434\u043E\u043B\u0433\u043E\u0432\u0435\u0447\u043D\u044B.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u0422\u043E\u0440\u0446\u044B \u043F\u0430\u043D\u0435\u043B\u0435\u0439 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0431\u0440\u0443\u0441\u043A\u0430\u043C\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043B\u0443\u0436\u0430\u0442 \u0434\u043B\u044F \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u043F\u043E \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0443 \u00AB\u0448\u0438\u043F-\u043F\u0430\u0437\u00BB.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u041F\u0440\u0438 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0435 \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u0432\u043E\u0437\u0432\u043E\u0434\u0438\u043C\u044B\u0439 \u043A\u0430\u0440\u043A\u0430\u0441 \u0437\u0434\u0430\u043D\u0438\u044F. \u0415\u0433\u043E \u0440\u043E\u043B\u044C \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u044E\u0442 \u0432\u0435\u0440\u0445\u043D\u0438\u0439 \u0438 \u043D\u0438\u0436\u043D\u0438\u0439 \u043E\u0431\u0432\u044F\u0437\u043E\u0447\u043D\u044B\u0439 \u0431\u0440\u0443\u0441 \u0438 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u0435 \u0441\u0442\u043E\u0439\u043A\u0438, \u0441\u043B\u0443\u0436\u0430\u0449\u0438\u0435 \u0434\u043B\u044F \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u043F\u0430\u043D\u0435\u043B\u0435\u0439 \u043C\u0435\u0436\u0434\u0443 \u0441\u043E\u0431\u043E\u0439. \u0416\u0435\u0441\u0442\u043A\u043E\u0441\u0442\u044C \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u0434\u043E\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044F \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430\u043C \u043F\u043B\u0438\u0442 \u041E\u0421\u041F. \u0421\u0430\u043C\u0438 \u043F\u0430\u043D\u0435\u043B\u0438 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u043C \u043D\u0435\u0441\u0443\u0449\u0438\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u043C \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u0414\u043E\u043C\u0430, \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u043F\u043E \u0434\u0430\u043D\u043D\u043E\u0439 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438, \u043C\u043E\u0433\u0443\u0442 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0432 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u043E\u043C \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0435 \u043E\u0442 -80\u00B0\u0421 \u0434\u043E +80\u00B0\u0421 \u0438 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u044E\u0442 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u0434\u0430\u0436\u0435 \u0432 \u0441\u0430\u043C\u044B\u0445 \u0441\u0443\u0440\u043E\u0432\u044B\u0445 \u043A\u043B\u0438\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " SIP \u043F\u0430\u043D\u0435\u043B\u044C - \u0447\u0442\u043E \u044D\u0442\u043E \u0442\u0430\u043A\u043E\u0435? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u0412 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0435 \u0441 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u0433\u043E sip (structural insulated panel) - \u044D\u0442\u043E \u0434\u043E\u0441\u043B\u043E\u0432\u043D\u043E \"\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u043D\u0430\u044F \u0438\u0437\u043E\u043B\u044F\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043F\u0430\u043D\u0435\u043B\u044C\", \u0438\u043B\u0438 \u0432 \u043B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u043E\u043C \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0435 \"\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u043E\u043D\u043D\u0430\u044F (\u0442\u0435\u043F\u043B\u043E)\u0438\u0437\u043E\u043B\u044F\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043F\u0430\u043D\u0435\u043B\u044C\". \u0422\u043E \u0435\u0441\u0442\u044C \u044D\u0442\u043E \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u0438 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B, \u043D\u0435\u0441\u0443\u0449\u0438\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438, \u0438 \u043E\u0433\u0440\u0430\u0436\u0434\u0430\u044E\u0449\u0430\u044F, \u0438\u0437\u043E\u043B\u0438\u0440\u0443\u044E\u0449\u0430\u044F \u043E\u0442 \u0445\u043E\u043B\u043E\u0434\u0430 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u044C. \u042D\u0442\u043E \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u0442\u043E\u043C\u0443, \u0447\u0442\u043E sip \u043F\u0430\u043D\u0435\u043B\u044C - \u044D\u0442\u043E \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0442\u043D\u044B\u0439 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0445 \u043D\u0430\u0434\u0435\u043B\u044F\u0435\u0442 \u043A\u043E\u043D\u0435\u0447\u043D\u044B\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0430\u043C\u0438, \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u044E\u0449\u0438\u043C\u0438 \u0438\u0437\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0435 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438 \u0435\u0433\u043E \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0445. Sip \u043F\u0430\u043D\u0435\u043B\u044C \u0443\u0441\u0442\u0440\u043E\u0435\u043D\u0430 \u043F\u043E \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0443 \u0431\u0443\u0442\u0435\u0440\u0431\u0440\u043E\u0434\u0430-\u0441\u044D\u043D\u0434\u0432\u0438\u0447\u0430 \u0438\u0437 \u0442\u0440\u0435\u0445 \u0441\u043B\u043E\u0435\u0432: \u043B\u0438\u0441\u0442 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 + \u0431\u043B\u043E\u043A \u0438\u0437\u043E\u043B\u0438\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 + \u043B\u0438\u0441\u0442 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u0438\u0434\u043E\u0432 sip \u043F\u0430\u043D\u0435\u043B\u0435\u0439, \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043D\u0430 \u0440\u0430\u0437\u043D\u044B\u0445 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0438 \u0442\u0435\u043F\u043B\u043E\u0438\u0437\u043E\u043B\u044F\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0445. \u0412\u0441\u0435 \u043E\u043D\u0438 \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0442 \u0440\u0430\u0437\u043D\u044B\u043C\u0438 \u043D\u0435\u0441\u0443\u0449\u0438\u043C\u0438 \u0438 \u0442\u0435\u043F\u043B\u043E\u0438\u0437\u043E\u043B\u044F\u0446\u0438\u043E\u043D\u043D\u044B\u043C\u0438 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0430\u043C\u0438, \u0430 \u0442\u0430\u043A \u0436\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u0430\u043C\u0438 (\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0447\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043E \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043D\u044B \u043A \u0440\u0430\u0437\u043C\u0435\u0440\u0430\u043C \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u043F\u043B\u0438\u0442). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u0438 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u041F\u0435\u043D\u043E\u043F\u043E\u043B\u0438\u0441\u0442\u0438\u0440\u043E\u043B - \u0431\u0435\u043B\u043E\u0435 \u043E\u0434\u043D\u043E\u0440\u043E\u0434\u043D\u043E\u0435 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u043E, \u0438\u043C\u0435\u044E\u0449\u0435\u0435 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u0438\u0437 \u0441\u043A\u043B\u0435\u0435\u043D\u043D\u044B\u0445 \u043C\u0435\u0436\u0434\u0443 \u0441\u043E\u0431\u043E\u0439 \u0448\u0430\u0440\u0438\u043A\u043E\u0432, \u0443\u043F\u0440\u0443\u0433\u043E\u0435 \u043D\u0430 \u043E\u0449\u0443\u043F\u044C, \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u0437\u0430\u043F\u0430\u0445\u0430. \u042D\u0442\u043E \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438 \u0447\u0438\u0441\u0442\u044B\u0439, \u043D\u0435\u0442\u043E\u043A\u0441\u0438\u0447\u043D\u044B\u0439, \u0442\u0435\u043F\u043B\u043E- \u0438 \u0437\u0432\u0443\u043A\u043E\u0438\u0437\u043E\u043B\u044F\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B, \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u043C\u044B\u0439 \u0432 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0435 \u043D\u0430 \u043F\u0440\u043E\u0442\u044F\u0436\u0435\u043D\u0438\u0438 \u0443\u0436\u0435 \u0431\u043E\u043B\u0435\u0435 40 \u043B\u0435\u0442.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u041F\u0435\u043D\u043E\u043F\u043E\u043B\u0438\u0441\u0442\u0438\u0440\u043E\u043B \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u043C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u043C, \u043D\u0435 \u0432\u044B\u0434\u0435\u043B\u044F\u044E\u0449\u0438\u043C \u043D\u0438\u043A\u0430\u043A\u0438\u0445 \u0432\u0440\u0435\u0434\u043D\u044B\u0445 \u0434\u043B\u044F \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430 \u0438 \u0435\u0433\u043E \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u044F \u0432\u0435\u0449\u0435\u0441\u0442\u0432 \u0438 \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043D\u043E\u0433\u043E \u0441\u0440\u043E\u043A\u0430 \u0433\u043E\u0434\u043D\u043E\u0441\u0442\u0438. \u041E\u043D \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u043D \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u043D\u0438\u043C, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0432\u0435\u0441\u044C \u043F\u0435\u0440\u0438\u043E\u0434 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u0439 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438. \u041F\u0435\u043D\u043E\u043F\u043E\u043B\u0438\u0441\u0442\u0438\u0440\u043E\u043B \u0434\u043E\u043B\u0433\u043E\u0432\u0435\u0447\u0435\u043D, \u043D\u0435 \u0434\u0430\u0435\u0442 \u0442\u0440\u0435\u0449\u0438\u043D, \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0438\u0442\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0441\u0440\u0435\u0434\u043E\u0439 \u0434\u043B\u044F \u043C\u0438\u043A\u0440\u043E\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u043C\u043E\u0432, \u0433\u0440\u044B\u0437\u0443\u043D\u043E\u0432 \u0438 \u0434\u0440\u0443\u0433\u043E\u0439 \u0436\u0438\u0432\u043D\u043E\u0441\u0442\u0438, \u043D\u0435 \u0437\u0430\u0433\u043D\u0438\u0432\u0430\u0435\u0442, \u043D\u0435 \u043F\u043B\u0435\u0441\u043D\u0435\u0432\u0435\u0435\u0442 \u0438 \u043D\u0435 \u0440\u0430\u0437\u043B\u0430\u0433\u0430\u0435\u0442\u0441\u044F. \u0412\u043E\u0437\u0434\u0443\u0445\u043E\u043F\u0440\u043E\u043D\u0438\u0446\u0430\u0435\u043C\u043E\u0441\u0442\u044C \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0437\u0434\u0430\u043D\u0438\u044E \u0434\u044B\u0448\u0430\u0442\u044C.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u041F\u0435\u043D\u043E\u043F\u043E\u043B\u0438\u0441\u0442\u0438\u0440\u043E\u043B \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0441\u044F \u043A \u0442\u043E\u0439 \u0433\u0440\u0443\u043F\u043F\u0435 \u043F\u043B\u0430\u0441\u0442\u043C\u0430\u0441\u0441, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u0438 \u0433\u043E\u0440\u0435\u043D\u0438\u0438 \u0432\u044B\u0434\u0435\u043B\u044F\u044E\u0442 \u0442\u043E\u0447\u043D\u043E \u0442\u0430\u043A\u0438\u0435 \u0436\u0435 \u0433\u0430\u0437\u044B, \u043A\u0430\u043A \u0438 \u043F\u0440\u0438 \u0441\u0436\u0438\u0433\u0430\u043D\u0438\u0438 \u0434\u0440\u0435\u0432\u0435\u0441\u0438\u043D\u044B \u0438\u043B\u0438 \u043F\u0440\u043E\u0431\u043A\u0438. \u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u043F\u0435\u043D\u043E\u043F\u043B\u0430\u0441\u0442\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u044F\u0442 \u0432 \u043E\u0433\u043D\u0435\u0441\u0442\u043E\u0439\u043A\u043E\u043C (\u0441\u0430\u043C\u043E\u0437\u0430\u0442\u0443\u0445\u0430\u044E\u0449\u0435\u043C) \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " \u0412\u043B\u0430\u0433\u0430 \u043D\u0435 \u0432\u043B\u0438\u044F\u0435\u0442 \u043D\u0430 \u0442\u0435\u043F\u043B\u043E\u0438\u0437\u043E\u043B\u0438\u0440\u0443\u044E\u0449\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u044D\u0442\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0438 \u043D\u0435 \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0432 \u043D\u0435\u043C \u0431\u0430\u043A\u0442\u0435\u0440\u0438\u0439 \u0438 \u043F\u043B\u0435\u0441\u0435\u043D\u0438, \u0447\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0448\u0438\u0440\u043E\u043A\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u0435\u043D\u043E\u043F\u043E\u043B\u0438\u0441\u0442\u0438\u0440\u043E\u043B \u0434\u0430\u0436\u0435 \u0432 \u043F\u0438\u0449\u0435\u0432\u043E\u0439 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u0438.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " \u041E\u0421\u041F (\u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E \u0441\u0442\u0440\u0443\u0436\u0435\u0447\u043D\u044B\u0435 \u043F\u043B\u0438\u0442\u044B) \u0431\u044B\u043B\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u044B \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u043D\u043E\u0432\u0435\u0439\u0448\u0438\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439 \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043E\u043A \u0432 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0434\u0440\u0435\u0432\u0435\u0441\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0438 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0442 \u043A \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u043C \u0438\u0437\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u0438\u044F\u043C \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0434\u0435\u0440\u0435\u0432\u043E\u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u044E\u0449\u0435\u0439 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u0438.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " \u041E\u0421\u041F - \u044D\u0442\u043E \u0441\u043F\u0440\u0435\u0441\u0441\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0434\u0440\u0435\u0432\u0435\u0441\u043D\u043E\u0441\u0442\u0440\u0443\u0436\u0435\u0447\u043D\u0430\u044F \u043F\u043B\u0438\u0442\u0430 \u0441 \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u043F\u043B\u043E\u0441\u043A\u043E\u0439 \u0449\u0435\u043F\u043E\u0439 (\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0415\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u043A\u043E\u043C\u0443 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0443 EN-300-OSB).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " \u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u044B\u0435 \u0443\u0437\u043A\u0438\u0435 \u0449\u0435\u043F\u043A\u0438 \u0442\u043E\u043B\u0449\u0438\u043D\u043E\u0439 0,5 - 0,7 \u043C\u043C \u0438 \u0434\u043B\u0438\u043D\u043E\u0439 \u0434\u043E 140 \u043C\u043C \u0443\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0432 \u0442\u0440\u0438 \u0441\u043B\u043E\u044F, \u043F\u0440\u0438\u0447\u0435\u043C \u0449\u0435\u043F\u0430 \u0432 \u043D\u0430\u0440\u0443\u0436\u043D\u044B\u0445 \u0441\u043B\u043E\u044F\u0445 \u043F\u043B\u0438\u0442\u044B \u0440\u0430\u0441\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u0442\u0441\u044F \u0432\u0434\u043E\u043B\u044C \u0433\u043B\u0430\u0432\u043D\u043E\u0439 \u043E\u0441\u0438 \u043F\u043B\u0438\u0442\u044B, \u0430 \u0432\u043E \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u043C \u0441\u043B\u043E\u0435 - \u043F\u0435\u0440\u043F\u0435\u043D\u0434\u0438\u043A\u0443\u043B\u044F\u0440\u043D\u043E \u0433\u043B\u0430\u0432\u043D\u043E\u0439 \u043E\u0441\u0438. \u041F\u0440\u043E\u0446\u0435\u0441\u0441 \u043F\u0440\u0435\u0441\u0441\u043E\u0432\u043A\u0438 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u0432 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 \u0432\u044B\u0441\u043E\u043A\u043E\u0433\u043E \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0438 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B, \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0444\u0435\u043D\u043E\u043B\u0444\u043E\u0440\u043C\u0430\u043B\u044C\u0434\u0435\u0433\u0438\u0434\u043D\u043E\u0439 \u0432\u043E\u0434\u043E\u0441\u0442\u043E\u0439\u043A\u043E\u0439 \u0441\u043C\u043E\u043B\u044B. \u0417\u0430 \u0441\u0447\u0435\u0442 \u043F\u0440\u043E\u043F\u0438\u0442\u043A\u0438 \u0449\u0435\u043F\u044B \u043A\u043B\u0435\u0435\u043C \u0438 \u0433\u0438\u0434\u0440\u043E\u0444\u043E\u0431\u043D\u043E\u0439 \u044D\u043C\u0443\u043B\u044C\u0441\u0438\u0435\u0439 \u0434\u043E\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044F \u0432\u044B\u0441\u043E\u043A\u0430\u044F \u043F\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0438 \u0431\u043E\u043B\u044C\u0448\u0430\u044F \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u043E\u0441\u0442\u044C \u043A \u0438\u0437\u043C\u0435\u043D\u044F\u044E\u0449\u0438\u043C\u0441\u044F \u043F\u043E\u0433\u043E\u0434\u043D\u044B\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " \u041D\u0435\u0441\u043C\u043E\u0442\u0440\u044F \u043D\u0430 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0441\u0438\u043D\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0432\u044F\u0437\u0443\u044E\u0449\u0438\u0445 \u0434\u043B\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 \u043F\u043B\u0438\u0442, \u041E\u0421\u041F \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438 \u0438 \u0433\u0438\u0433\u0438\u0435\u043D\u0438\u0447\u0435\u0441\u043A\u0438 \u0431\u0435\u0437\u0432\u0440\u0435\u0434\u043D\u044B\u0439 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B (\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043A\u043B\u0430\u0441\u0441\u0443 \u044D\u043C\u0438\u0441\u0441\u0438\u0438 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0433\u043E \u0444\u043E\u0440\u043C\u0430\u043B\u044C\u0434\u0435\u0433\u0438\u0434\u0430 \u04151).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " \u041E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E \u0441\u0442\u0440\u0443\u0436\u0435\u0447\u043D\u0430\u044F \u043F\u043B\u0438\u0442\u0430 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u0432 \u0441\u0435\u0431\u0435 \u043E\u0442\u043B\u0438\u0447\u043D\u044B\u0435 \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u0441 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u043C\u0438 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0430\u043C\u0438. \u041C\u0438\u043A\u0440\u043E\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0441\u043F\u0440\u0435\u0441\u0441\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u043A\u0440\u0443\u043F\u043D\u043E\u0440\u0430\u0437\u043C\u0435\u0440\u043D\u043E\u0439 \u0441\u0442\u0440\u0443\u0436\u043A\u0438 \u043F\u0440\u0435\u0434\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442 \u043A\u0440\u0430\u044F \u043F\u043B\u0438\u0442\u044B \u043E\u0442 \u0441\u043A\u043E\u043B\u043E\u0432 \u043F\u0440\u0438 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0438 \u0438 \u043F\u0440\u0438\u0434\u0430\u0435\u0442 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0443\u044E \u0434\u043B\u044F \u0440\u0430\u0441\u043F\u0438\u043B\u0430 \u0436\u0435\u0441\u0442\u043A\u043E\u0441\u0442\u044C. \u0420\u0430\u0441\u043F\u0438\u043B \u043C\u043E\u0436\u0435\u0442 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u043E\u0431\u044B\u0447\u043D\u044B\u043C \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u043C, \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044B\u043C \u0434\u043B\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u043E\u0439 \u0434\u0440\u0435\u0432\u0435\u0441\u0438\u043D\u044B. \u041F\u0440\u0438 \u0441\u0432\u0435\u0440\u043B\u0435\u043D\u0438\u0438 \u043F\u043B\u0438\u0442 \u041E\u0421\u041F \u0442\u0430\u043A\u0436\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0442 \u0441\u0432\u0435\u0440\u043B\u0430, \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0434\u0435\u0440\u0435\u0432\u0430 \u0442\u0432\u0435\u0440\u0434\u044B\u0445 \u043F\u043E\u0440\u043E\u0434. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".body-container[_ngcontent-%COMP%] {\n  background-image: linear-gradient(37deg, #5fa44a 0%, #7fd7ab 100%);\n}\n\n.main[_ngcontent-%COMP%] {\n  background: #02c48d url('sip-panels.jpg') no-repeat center center;\n  background-size: cover;\n  padding: 7rem 0 10rem 0;\n  color: white;\n}\n\n.main[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.first-priority[_ngcontent-%COMP%] {\n  font-size: 60px;\n  font-weight: bold;\n  line-height: 1.2;\n  margin: 2rem 0;\n}\n\n.second-priority[_ngcontent-%COMP%] {\n  font-size: 35px;\n  line-height: 1.2;\n}\n\n.container[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 1.5;\n  padding: 1.5em 0;\n}\n\n.line[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #fff;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  margin: 0.75em 0;\n}\n\n.text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1.2;\n}\n\n@media (max-width: 700px) {\n  .container[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZWNobm9sb2d5L3RlY2hub2xvZ3kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFJRSxrRUFBQTtBQUNGOztBQUVBO0VBQ0UsaUVBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNFO0VBQ0UscUJBQUE7QUFDSjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsNkJBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFO0lBQ0Usa0JBQUE7RUFBRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90ZWNobm9sb2d5L3RlY2hub2xvZ3kuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCgzN2RlZywgcmdiKDk1LCAxNjQsIDc0KSAwJSwgcmdiKDEyNywgMjE1LCAxNzEpIDEwMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgzN2RlZywgcmdiKDk1LCAxNjQsIDc0KSAwJSwgcmdiKDEyNywgMjE1LCAxNzEpIDEwMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KDM3ZGVnLCByZ2IoOTUsIDE2NCwgNzQpIDAlLCByZ2IoMTI3LCAyMTUsIDE3MSkgMTAwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzN2RlZywgcmdiKDk1LCAxNjQsIDc0KSAwJSwgcmdiKDEyNywgMjE1LCAxNzEpIDEwMCUpO1xufVxuXG4ubWFpbiB7XG4gIGJhY2tncm91bmQ6ICMwMmM0OGQgdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2lwLXBhbmVscy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwYWRkaW5nOiA3cmVtIDAgMTByZW0gMDtcbiAgY29sb3I6IHdoaXRlO1xuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuXG4uZmlyc3QtcHJpb3JpdHkge1xuICBmb250LXNpemU6IDYwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBtYXJnaW46IDJyZW0gMDtcbn1cblxuLnNlY29uZC1wcmlvcml0eSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgcGFkZGluZzogMS41ZW0gMDtcbn1cblxuLmxpbmUge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmZjtcbn1cblxuLnNwYWNlciB7XG4gIG1hcmdpbjogMC43NWVtIDA7XG59XG5cbi50ZXh0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TechnologyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-technology',
                templateUrl: './technology.component.html',
                styleUrls: ['./technology.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");




class AuthenticationService {
    constructor(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.token = 'Bearer ' + this.tokenService.getToken();
        this.options = {
            headers: {
                Authorization: this.token
            }
        };
    }
    registerAdmin(admin) {
        return this.http.post('/api/api/register', admin);
    }
    signInAdmin(admin) {
        return this.http.post('/api/api/signin', admin, this.options);
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/image-upload.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/image-upload.service.ts ***!
  \**************************************************/
/*! exports provided: ImageUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadService", function() { return ImageUploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ImageUploadService {
    constructor(http) {
        this.http = http;
        this.SERVER_URL = '/api/api';
    }
    uploadImages(formData) {
        return this.http.post(`${this.SERVER_URL}/images`, formData, { reportProgress: true, observe: 'events' });
    }
}
ImageUploadService.ɵfac = function ImageUploadService_Factory(t) { return new (t || ImageUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ImageUploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ImageUploadService, factory: ImageUploadService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageUploadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/project.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ProjectService {
    constructor(http) {
        this.http = http;
        this.apiURI = '/api/api';
    }
    save(project) {
        return this.http.post(`${this.apiURI}/projects`, project);
    }
    getProjects() {
        return this.http.get(`${this.apiURI}/projects`);
    }
    updateProject(project) {
        return this.http.put(`${this.apiURI}/projects/${project.id}`, project);
    }
    deleteProject(projectId) {
        return this.http.delete(`${this.apiURI}/projects/${projectId}`);
    }
}
ProjectService.ɵfac = function ProjectService_Factory(t) { return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectService, factory: ProjectService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/token.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/token.service.ts ***!
  \*******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TokenService {
    constructor() {
    }
    saveToken(token) {
        localStorage.setItem('admin', token);
    }
    getToken() {
        const token = localStorage.getItem('admin');
        return token ? token : null;
    }
}
TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(); };
TokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenService, factory: TokenService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/constants.ts":
/*!*************************************!*\
  !*** ./src/app/shared/constants.ts ***!
  \*************************************/
/*! exports provided: SERVICES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICES", function() { return SERVICES; });
const SERVICES = {
    // installation_of_verandas: {
    //   name: 'Монтаж веранд',
    //   description: 'Заказчики для компании «строим все» на первом месте, и мы прилагаем все усилия, чтобы они остались довольны. Что касается этого вида услуг, мы полностью готовы даже к самым сложным проектам и гарантируем безупречное качество работы. Позвоните нам и узнайте, как мы можем вам помочь.',
    //   price: '1 час | $19.99',
    //   photo: 'veranda.jpg'
    // },
    // design_of_verandas: {
    //   name: 'Индивидуальное проектирование веранд',
    //   description: 'Если для вас важно безупречное качество работы, то «строим все» — именно та компания, которую вы ищете. Наши специалисты предложат широкий спектр дополнительных услуг с учетом конкретики проекта и постараются выполнить ваши требования так, чтобы результат превзошел ожидания. Свяжитесь с нами, чтобы узнать подробнее о наших услугах.',
    //   price: '1 час | $19.99',
    //   photo: 'design-veranda.jpg'
    // },
    // installation_of_closed_terraces: {
    //   name: 'Монтаж закрытых террас',
    //   description: 'Ищете надежного подрядчика с большим опытом для своего проекта? «строим все» гарантирует высокое качество работ и индивидуальный подход с учетом специфики и требований каждого заказчика. Если вам нужны квалифицированные услуги в такой сфере, как Монтаж закрытых террас, свяжитесь с нами, чтобы получить консультацию.',
    //   price: '1 час | $19.99',
    //   photo: 'closed-terrace.jpg'
    // },
    exterior_decoration: {
        name: 'Наружная отделка',
        description: 'Компания "Строим SIP" оказывает услуги по устройству наружной отделки частных домов и общественных зданий, построенных как из sip панелей, так и по любой другой строительной технологии. Мы предлагаем отделку фасадов:<br>' +
            '<br>' +
            '<ul>' +
            '<li>Виниловым сайдингом "под дерево";</li>' +
            '<li>Виниловым цокольным сайдингом "под камень" и "под кирпич";</li>' +
            '<li>Металлосайдингом "под дерево";</li>' +
            '<li>Фиброцементным сайдингом "под дерево";</li>' +
            '<li>Цементной плиткой "под кирпич" и "под дерево";</li>' +
            '<li>Минеральной штукатуркой по технологии Текс-Колор;</li>' +
            '<li>Натуральным деревом (вагонка, имитация бруса, блок-хаус)</li>' +
            '</ul>',
        price: 'По каждому объекту рассчитывается согласно смете, и зависит от архитектуры здания, видов работ, объемов, сложности, применяемых материалов и т.д. Приблизительная стоимость работ и материалов по отделке фасада составляет от 900 руб. за квадратный метр фасада.',
        photo: 'narujnaya-otdelka.jpg'
    },
    interior_decoration: {
        name: 'Внутренняя отделка',
        description: 'Удобные в монтаже многослойные плиты нельзя штробить. ' +
            'Любое нарушение целостности конструкции негативно сказывается на эксплуатационных характеристиках СИП-панелей. ' +
            'Маскировка инженерных систем возможна путем оборудования фальш-стен. ' +
            'Гипсокартон – легкий материал, успешно справляющийся с задачей. ' +
            'Допустим монтаж на внутреннюю поверхность СИП-панелей или на каркас. Для декоративной отделки применяется ряд технологий:' +
            '<br><br>' +
            '<ul>' +
            '<li>Покраска. СИП-панели – достаточно дорогой материал, поэтому строительство дома оказывается затратным мероприятием. Но на внутренней отделке легко сэкономить. Окрашивание непосредственно сип-панелей или фальш-стен из гипсокартона – бюджетное решение с безграничными дизайнерскими возможностями.</li><br>' +
            '<li>Поклейка обоев. Традиционный способ интерьерной отделки успешно применяется и в домах из СИП-панелей. Ассортимент обоев рассчитан на любой бюджет. В продаже несложно найти эффектные материалы на бумажной, флизелиновой, текстильной и пробковой основе. Каждый из них обладает своими плюсами.</li><br>' +
            '<li>Оштукатуривание. Нанесение состава с наполнителем требует профессионализма. Даже ровные стены дома из СИП-панелей нуждаются в предварительной изоляции стыков и армировании. Декоративная смесь накладывается поверх основания из строительной штукатурки, формируя гладкий или фактурный слой.</li><br>' +
            '<li>Обшивка сайдингом. Деревянный интерьер загородного дома из СИП-панелей – популярное решение, для реализации которого используется вагонка. Но для отделки стен не возбраняется применять любой другой сайдинг, предназначенный для внутренней обшивки.</li><br>' +
            '<li>Облицовка кафелем. Оформление керамической плиткой кухонного фартука и стен санузла – интерьерная классика. В помещениях с повышенной влажностью перед финишной отделкой обязательна внутренняя гидроизоляция СИП-панелей. Кафель в ванной рекомендуется наклеивать на водостойкий гипсокартон.</li><br>' +
            '<li>Оформление панелями. Ассортимент материалов для облицовки стен постоянно растет. Большинство из них подходит для внутренней обшивки дома. Для достижения разных эффектов применяются покрытия из МДФ, пластика, винила. Можно найти декоративные панели с любым дизайном.</li>' +
            '</ul>',
        price: '1 час | $19.99',
        photo: 'vnutrennyaya-otdelka.jpg'
    },
    construction: {
        name: 'Строительные услуги',
        description: `Компания "Строим SIP" оказывает услуги по строительству частных домов, общественных зданий и промышленных
      сооружений по так называемой "канадской технологии быстровозводимого жилья" с применением SIP панелей, включая
      следующие этапы:
      <br/><br/>
      <ul>
      <li>Устройство фундаментов (на винтовых сваях, буронабивных сваях, ленточных мелкозаглубленных, монолитных
      плитах);</li>
      <li>Сборка домокомплекта;</li>
      <li>Устройство кровли любым кровельным покрытием (гибкой черепицей, металлочерепицей, еврошифером и т.д.);</li>
      <li>Устройство наружной отделки любым отделочным материалом (сайдингом виниловым, фиброцементным, фасадной
      штукатуркой, фасадной плиткой и т.д.);</li>
      <li>Установка стеклопакетов;</li>
      <li>Устройство инженерных сетей - отопления, канализации, вентиляции, электрики и сантехники;</li>
      <li>Устройство внутренней черновой и чистовой отделки</li>
      </ul>`,
        price: 'По каждому отдельно взятому объекту рассчитывается согласно смете' +
            ' и проекту, и зависит от объемов, сложности, применяемых материалов и т.д. ' +
            'Приблизительная же стоимость дома от 150 кв. м, построенного по технологии SIP с чистовой ' +
            'наружной отделкой и черновой внутренней составляет от 18 500 рублей за квадратный ' +
            'метр объекта.',
        photo: 'stroyuslugi.jpg'
    }
};


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ilya.pouh/WebstormProjects/stroim-vse/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map