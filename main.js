(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+LOj":
/*!****************************************************!*\
  !*** ./src/app/modules/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/store.service */ "2hfl");
/* harmony import */ var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/topbar/topbar.component */ "N4I/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/nav/nav.component */ "kHlE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/search/search.component */ "KPdS");







function HeaderComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-search", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Customer Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.store.primaryPhone);
} }
class HeaderComponent {
    constructor(store) {
        this.store = store;
        this.layout = 'classic';
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_store_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { layout: "layout" }, decls: 5, vars: 4, consts: [[1, "site-header"], ["class", "site-header__middle container", 4, "ngIf"], [1, "site-header__nav-panel"], ["stickyMode", "pullToShow", 3, "departments", "logo", "search"], [1, "site-header__middle", "container"], [1, "site-header__logo"], ["routerLink", "/"], ["xmlns", "http://www.w3.org/2000/svg", "width", "196px", "height", "26px"], ["d", "M194.797,18 L184,18 C184,18.552 183.552,19 183,19 L182,19 C181.448,19 181,18.552 181,18 L181,16 L178.377,16 C177.708,16 177.119,15.556 176.935,14.912 L173.246,2 L168,2 L168,4 L168.500,4 C169.328,4 170,4.672 170,5.500 L170,24.500 C170,25.328 169.328,26 168.500,26 L165.500,26 C164.672,26 164,25.328 164,24.500 L164,5.500 C164,4.672 164.672,4 165.500,4 L166,4 L166,1.500 C166,0.672 166.672,0 167.500,0 L173.622,0 C174.292,0 174.881,0.444 175.065,1.088 L178.754,14 L181,14 L181,13 C181,12.448 181.448,12 182,12 L183,12 C183.552,12 184,12.448 184,13 L194.797,13 C195.461,13 196,13.539 196,14.203 L196,16.797 C196,17.461 195.461,18 194.797,18 ZM156.783,26 L154.483,26 C153.767,26 153.129,25.552 152.884,24.878 L150.437,18.135 C150.407,18.054 150.331,18 150.245,18 L142.768,18 C142.682,18 142.606,18.054 142.576,18.135 L140.129,24.878 C139.884,25.552 139.245,26 138.530,26 L136.230,26 C135.395,26 134.815,25.169 135.100,24.383 L143.445,1.122 C143.690,0.448 144.328,0 145.044,0 L147.969,0 C148.685,0 149.323,0.448 149.568,1.122 L157.913,24.383 C158.198,25.169 157.618,26 156.783,26 ZM148.472,12.725 L146.698,7.848 C146.633,7.668 146.380,7.668 146.315,7.848 L144.541,12.725 C144.492,12.859 144.591,13 144.733,13 L148.280,13 C148.422,13 148.521,12.859 148.472,12.725 ZM130.493,26 L128.090,26 C127.555,26 127.060,25.714 126.792,25.250 L122.610,18 L120.003,22.520 L120.003,24.500 C120.003,25.328 119.333,26 118.505,26 L116.507,26 C115.680,26 115.009,25.328 115.009,24.500 L115.009,1.500 C115.009,0.672 115.680,0 116.507,0 L118.505,0 C119.333,0 120.003,0.672 120.003,1.500 L120.003,12.520 L126.792,0.750 C127.060,0.286 127.555,0 128.090,0 L130.493,0 C131.646,0 132.367,1.250 131.791,2.250 L125.487,13 L131.791,23.750 C132.367,24.750 131.646,26 130.493,26 ZM103.987,15.775 L103.987,24.500 C103.987,25.328 103.315,26 102.486,26 L100.485,26 C99.656,26 98.984,25.328 98.984,24.500 L98.984,15.775 L98.594,15.100 L91.180,2.250 C90.610,1.250 91.330,0 92.481,0 L94.792,0 C95.322,0 95.823,0.290 96.093,0.750 L101.486,10.090 L106.879,0.750 C107.149,0.290 107.649,0 108.179,0 L110.491,0 C111.641,0 112.362,1.250 111.791,2.250 L103.987,15.775 ZM79,26 C71.821,26 66,20.179 66,13 C66,5.820 71.821,-0.001 79,-0.001 C86.180,-0.001 92.001,5.820 92.001,13 C92.001,20.179 86.180,26 79,26 ZM79,5 C74.582,5 71,8.582 71,13 C71,17.418 74.582,21 79,21 C83.418,21 87,17.418 87,13 C87,8.582 83.418,5 79,5 ZM62.793,23.750 C63.362,24.750 62.643,26 61.494,26 L59.186,26 C58.656,26 58.157,25.710 57.887,25.250 L53.711,18 L49.005,18 L49.005,24.500 C49.005,25.330 48.335,26 47.506,26 L45.508,26 C44.679,26 44.009,25.330 44.009,24.500 L44.009,1.500 C44.009,0.670 44.679,0 45.508,0 L54,0 C58.966,0 62.992,4.030 62.992,9 C62.992,12.240 61.274,15.090 58.706,16.670 L62.793,23.750 ZM54,5 L50.004,5 C49.454,5 49.005,5.450 49.005,6 L49.005,12 C49.005,12.550 49.454,13 50.004,13 L54,13 C56.208,13 57.997,11.210 57.997,9 C57.997,6.790 56.208,5 54,5 ZM39.500,5 L33,5 L33,24.500 C33,25.328 32.328,26 31.500,26 L29.500,26 C28.672,26 28,25.328 28,24.500 L28,5 L21.500,5 C20.672,5 20,4.328 20,3.500 L20,1.500 C20,0.672 20.672,0 21.500,0 L39.500,0 C40.328,0 41,0.672 41,1.500 L41,3.500 C41,4.328 40.328,5 39.500,5 ZM16.487,8 L14.181,8 C13.565,8 13.040,7.611 12.790,7.048 C12.261,5.856 10.765,5 9,5 C6.793,5 5.005,6.340 5.005,8 C5.005,8.940 5.575,9.780 6.483,10.320 C6.706,10.455 6.948,10.574 7.206,10.673 C8.059,11 8.412,12.020 7.955,12.812 L6.948,14.558 C6.573,15.208 5.768,15.499 5.080,15.201 C3.872,14.679 2.815,13.924 1.989,13 C0.751,11.630 0.012,9.890 0.012,8 C0.012,3.580 4.037,0 9,0 C13.254,0 17.017,2.629 17.950,6.163 C18.196,7.095 17.450,8 16.487,8 ZM1.513,18 L3.820,18 C4.435,18 4.960,18.389 5.210,18.952 C5.739,20.144 7.236,21 9,21 C11.207,21 12.995,19.660 12.995,18 C12.995,17.060 12.426,16.220 11.517,15.680 C11.294,15.544 11.052,15.426 10.794,15.327 C9.941,14.999 9.588,13.980 10.045,13.188 L11.053,11.442 C11.427,10.792 12.233,10.501 12.920,10.799 C14.128,11.320 15.185,12.075 16.011,13 C17.249,14.370 17.988,16.110 17.988,18 C17.988,22.420 13.964,26 9,26 C4.747,26 0.983,23.371 0.050,19.837 C-0.196,18.905 0.550,18 1.513,18 Z"], [1, "site-header__search"], ["location", "header"], [1, "site-header__phone"], [1, "site-header__phone-title"], [1, "site-header__phone-number"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_2_Template, 12, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-header-nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layout === "classic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("departments", ctx.layout === "classic")("logo", ctx.layout === "compact")("search", ctx.layout === "compact");
    } }, directives: [_components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_2__["TopbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "+PBj":
/*!***********************************************************************!*\
  !*** ./src/app/modules/blocks/block-brands/block-brands.component.ts ***!
  \***********************************************************************/
/*! exports provided: BlockBrandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockBrandsComponent", function() { return BlockBrandsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/root.service */ "imTr");
/* harmony import */ var _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/direction.service */ "KSSz");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _shared_directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/directives/owl-prevent-click.directive */ "0nhT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");









const _c0 = ["container"];
function BlockBrandsComponent_div_0_div_1_4_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const brand_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r5.root.brand(brand_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", brand_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", brand_r4.name);
} }
function BlockBrandsComponent_div_0_div_1_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BlockBrandsComponent_div_0_div_1_4_ng_template_0_Template, 3, 3, "ng-template", 8);
} }
function BlockBrandsComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "owl-carousel-o", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BlockBrandsComponent_div_0_div_1_4_Template, 1, 0, undefined, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r1.carouselOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.brands);
} }
function BlockBrandsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlockBrandsComponent_div_0_div_1_Template, 5, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showCarousel);
} }
class BlockBrandsComponent {
    constructor(platformId, root, direction) {
        this.platformId = platformId;
        this.root = root;
        this.direction = direction;
        this.brands = [];
        this.showCarousel = true;
        this.carouselOptions = {
            items: 6,
            nav: false,
            dots: false,
            loop: true,
            responsive: {
                1100: { items: 6 },
                920: { items: 5 },
                680: { items: 4 },
                500: { items: 3 },
                0: { items: 2 }
            },
            rtl: this.direction.isRTL()
        };
    }
    ngAfterViewInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            const container = this.container.nativeElement;
            const containerWidth = container.getBoundingClientRect().width;
            window.addEventListener('load', () => {
                const newContainerWidth = container.getBoundingClientRect().width;
                if (containerWidth !== newContainerWidth) {
                    this.showCarousel = false;
                    setTimeout(() => this.showCarousel = true, 0);
                }
            });
        }
    }
}
BlockBrandsComponent.ɵfac = function BlockBrandsComponent_Factory(t) { return new (t || BlockBrandsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_direction_service__WEBPACK_IMPORTED_MODULE_3__["DirectionService"])); };
BlockBrandsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockBrandsComponent, selectors: [["app-block-brands"]], viewQuery: function BlockBrandsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, inputs: { brands: "brands" }, decls: 1, vars: 1, consts: [["class", "block block-brands", 4, "ngIf"], [1, "block", "block-brands"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "block-brands__slider"], ["container", ""], ["appOwlPreventClick", "", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "block-brands__item"], [3, "routerLink"], [3, "src", "alt"]], template: function BlockBrandsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BlockBrandsComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.brands == null ? null : ctx.brands.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"], _shared_directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_5__["OwlPreventClickDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselSlideDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1icmFuZHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "+W2m":
/*!****************************************************************!*\
  !*** ./src/app/shared/functions/rxjs/fromOutsideTouchClick.ts ***!
  \****************************************************************/
/*! exports provided: fromOutsideTouchClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromOutsideTouchClick", function() { return fromOutsideTouchClick; });
/* harmony import */ var _fromGlobalTouchClick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromGlobalTouchClick */ "Uq7R");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


function fromOutsideTouchClick(element) {
    return Object(_fromGlobalTouchClick__WEBPACK_IMPORTED_MODULE_0__["fromGlobalTouchClick"])().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(event => {
        let node = event.target || null;
        while (node) {
            if (node === element) {
                break;
            }
            node = node.parentElement;
        }
        return node === null;
    }));
}


/***/ }),

/***/ "+uwT":
/*!********************************************************************!*\
  !*** ./src/app/modules/footer/components/links/links.component.ts ***!
  \********************************************************************/
/*! exports provided: LinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksComponent", function() { return LinksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



function LinksComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", link_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r1.label);
} }
class LinksComponent {
    constructor() {
        this.links = [];
    }
}
LinksComponent.ɵfac = function LinksComponent_Factory(t) { return new (t || LinksComponent)(); };
LinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LinksComponent, selectors: [["app-footer-links"]], inputs: { header: "header", links: "links" }, decls: 5, vars: 2, consts: [[1, "site-footer__widget", "footer-links"], [1, "footer-links__title"], [1, "footer-links__list"], ["class", "footer-links__item", 4, "ngFor", "ngForOf"], [1, "footer-links__item"], [1, "footer-links__link", 3, "routerLink"]], template: function LinksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LinksComponent_li_4_Template, 3, 2, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaW5rcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "+x8d":
/*!****************************************************************!*\
  !*** ./src/app/pages/page-home-one/page-home-one.component.ts ***!
  \****************************************************************/
/*! exports provided: PageHomeOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHomeOneComponent", function() { return PageHomeOneComponent; });
/* harmony import */ var _data_blog_posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/blog-posts */ "Z6UY");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/api/shop.service */ "lFFw");
/* harmony import */ var _modules_blocks_block_slideshow_block_slideshow_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/blocks/block-slideshow/block-slideshow.component */ "eJNX");
/* harmony import */ var _modules_blocks_block_features_block_features_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/blocks/block-features/block-features.component */ "pOSb");
/* harmony import */ var _modules_blocks_block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/blocks/block-products-carousel/block-products-carousel.component */ "jb21");
/* harmony import */ var _modules_blocks_block_banner_block_banner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modules/blocks/block-banner/block-banner.component */ "alZB");
/* harmony import */ var _modules_blocks_block_products_block_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modules/blocks/block-products/block-products.component */ "XLOE");
/* harmony import */ var _modules_blocks_block_categories_block_categories_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../modules/blocks/block-categories/block-categories.component */ "lLv2");
/* harmony import */ var _modules_blocks_block_posts_block_posts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../modules/blocks/block-posts/block-posts.component */ "ObXf");
/* harmony import */ var _modules_blocks_block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../modules/blocks/block-brands/block-brands.component */ "+PBj");
/* harmony import */ var _modules_blocks_block_product_columns_block_product_columns_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../modules/blocks/block-product-columns/block-product-columns.component */ "JQhK");
/* harmony import */ var _modules_blocks_block_product_columns_block_product_columns_item_block_product_columns_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../modules/blocks/block-product-columns/block-product-columns-item/block-product-columns-item.component */ "ZPbr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
















class PageHomeOneComponent {
    constructor(shop) {
        this.shop = shop;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.posts = _data_blog_posts__WEBPACK_IMPORTED_MODULE_0__["posts"];
    }
    ngOnInit() {
        this.bestsellers$ = this.shop.getBestsellers(7);
        this.brands$ = this.shop.getPopularBrands();
        this.popularCategories$ = this.shop.getCategoriesBySlug([
            'power-tools',
            'hand-tools',
            'machine-tools',
            'power-machinery',
            'measurement',
            'clothes-and-ppe',
        ], 1);
        this.columnTopRated$ = this.shop.getTopRated(3);
        this.columnSpecialOffers$ = this.shop.getSpecialOffers(3);
        this.columnBestsellers$ = this.shop.getBestsellers(3);
        this.featuredProducts = {
            abort$: new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"](),
            loading: false,
            products: [],
            groups: [
                {
                    name: 'All',
                    current: true,
                    products$: this.shop.getFeaturedProducts(null, 8),
                },
                {
                    name: 'Power Tools',
                    current: false,
                    products$: this.shop.getFeaturedProducts('power-tools', 8),
                },
                {
                    name: 'Hand Tools',
                    current: false,
                    products$: this.shop.getFeaturedProducts('hand-tools', 8),
                },
                {
                    name: 'Plumbing',
                    current: false,
                    products$: this.shop.getFeaturedProducts('plumbing', 8),
                },
            ],
        };
        this.groupChange(this.featuredProducts, this.featuredProducts.groups[0]);
        this.latestProducts = {
            abort$: new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"](),
            loading: false,
            products: [],
            groups: [
                {
                    name: 'All',
                    current: true,
                    products$: this.shop.getLatestProducts(null, 8),
                },
                {
                    name: 'Power Tools',
                    current: false,
                    products$: this.shop.getLatestProducts('power-tools', 8),
                },
                {
                    name: 'Hand Tools',
                    current: false,
                    products$: this.shop.getLatestProducts('hand-tools', 8),
                },
                {
                    name: 'Plumbing',
                    current: false,
                    products$: this.shop.getLatestProducts('plumbing', 8),
                },
            ],
        };
        this.groupChange(this.latestProducts, this.latestProducts.groups[0]);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    groupChange(carousel, group) {
        carousel.loading = true;
        carousel.abort$.next();
        group.products$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => carousel.loading = false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.destroy$, carousel.abort$))).subscribe(x => carousel.products = x);
    }
}
PageHomeOneComponent.ɵfac = function PageHomeOneComponent_Factory(t) { return new (t || PageHomeOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_4__["ShopService"])); };
PageHomeOneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PageHomeOneComponent, selectors: [["app-home"]], decls: 19, vars: 27, consts: [[3, "withDepartments"], ["header", "Featured Products", "layout", "grid-4", 3, "loading", "products", "groups", "groupChange"], ["header", "Bestsellers", "layout", "large-first", 3, "products"], ["header", "Popular Categories", "layout", "classic", 3, "categories"], ["header", "New Arrivals", "layout", "horizontal", 3, "rows", "loading", "products", "groups", "groupChange"], ["header", "Latest News", "layout", "list-sm", 3, "posts"], [3, "brands"], ["header", "Top Rated Products", 3, "products"], ["header", "Special Offers", 3, "products"], ["header", "Bestsellers", 3, "products"]], template: function PageHomeOneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-block-slideshow", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-block-features");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "app-block-products-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("groupChange", function PageHomeOneComponent_Template_app_block_products_carousel_groupChange_2_listener($event) { return ctx.groupChange(ctx.featuredProducts, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-block-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-block-products", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-block-categories", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "app-block-products-carousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("groupChange", function PageHomeOneComponent_Template_app_block_products_carousel_groupChange_8_listener($event) { return ctx.groupChange(ctx.latestProducts, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "app-block-posts", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "app-block-brands", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "app-block-product-columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "app-block-product-columns-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "app-block-product-columns-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "app-block-product-columns-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("withDepartments", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("loading", ctx.featuredProducts.loading)("products", ctx.featuredProducts.products)("groups", ctx.featuredProducts.groups);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("products", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 15, ctx.bestsellers$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("categories", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 17, ctx.popularCategories$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rows", 2)("loading", ctx.latestProducts.loading)("products", ctx.latestProducts.products)("groups", ctx.latestProducts.groups);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("posts", ctx.posts);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("brands", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 19, ctx.brands$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("products", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 21, ctx.columnTopRated$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("products", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 23, ctx.columnSpecialOffers$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("products", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 25, ctx.columnBestsellers$));
    } }, directives: [_modules_blocks_block_slideshow_block_slideshow_component__WEBPACK_IMPORTED_MODULE_5__["BlockSlideshowComponent"], _modules_blocks_block_features_block_features_component__WEBPACK_IMPORTED_MODULE_6__["BlockFeaturesComponent"], _modules_blocks_block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_7__["BlockProductsCarouselComponent"], _modules_blocks_block_banner_block_banner_component__WEBPACK_IMPORTED_MODULE_8__["BlockBannerComponent"], _modules_blocks_block_products_block_products_component__WEBPACK_IMPORTED_MODULE_9__["BlockProductsComponent"], _modules_blocks_block_categories_block_categories_component__WEBPACK_IMPORTED_MODULE_10__["BlockCategoriesComponent"], _modules_blocks_block_posts_block_posts_component__WEBPACK_IMPORTED_MODULE_11__["BlockPostsComponent"], _modules_blocks_block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_12__["BlockBrandsComponent"], _modules_blocks_block_product_columns_block_product_columns_component__WEBPACK_IMPORTED_MODULE_13__["BlockProductColumnsComponent"], _modules_blocks_block_product_columns_block_product_columns_item_block_product_columns_item_component__WEBPACK_IMPORTED_MODULE_14__["BlockProductColumnsItemComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWhvbWUtb25lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\ecom_git\ecom\src\main.ts */"zUnb");


/***/ }),

/***/ "0Qu3":
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/collapse.directive.ts ***!
  \*********************************************************/
/*! exports provided: CollapseContentDirective, CollapseItemDirective, CollapseDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseContentDirective", function() { return CollapseContentDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseItemDirective", function() { return CollapseItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseDirective", function() { return CollapseDirective; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class CollapseContentDirective {
    constructor(el, zone) {
        this.el = el;
        this.zone = zone;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    get element() {
        return this.el.nativeElement;
    }
    ngOnInit() {
        this.zone.runOutsideAngular(() => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(this.element, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$)).subscribe(event => {
                if (event.propertyName === 'height') {
                    this.element.style.height = '';
                }
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CollapseContentDirective.ɵfac = function CollapseContentDirective_Factory(t) { return new (t || CollapseContentDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"])); };
CollapseContentDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: CollapseContentDirective, selectors: [["", "appCollapseContent", ""]] });
class CollapseItemDirective {
    constructor(el) {
        this.el = el;
    }
    get class() {
        return this.appCollapseItem;
    }
    get isOpen() {
        return this.element.classList.contains(this.class);
    }
    get element() {
        return this.el.nativeElement;
    }
    toggle() {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    }
    open() {
        if (this.content) {
            const startHeight = this.content.element.getBoundingClientRect().height;
            this.element.classList.add(this.class);
            const endHeight = this.content.element.getBoundingClientRect().height;
            this.content.element.style.height = `${startHeight}px`;
            this.element.getBoundingClientRect(); // force reflow
            this.content.element.style.height = `${endHeight}px`;
        }
        else {
            this.element.classList.add(this.class);
        }
    }
    close() {
        if (this.content) {
            const startHeight = this.content.element.getBoundingClientRect().height;
            this.content.element.style.height = `${startHeight}px`;
            this.element.classList.remove(this.class);
            this.element.getBoundingClientRect(); // force reflow
            this.content.element.style.height = '';
        }
        else {
            this.element.classList.remove(this.class);
        }
    }
}
CollapseItemDirective.ɵfac = function CollapseItemDirective_Factory(t) { return new (t || CollapseItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])); };
CollapseItemDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: CollapseItemDirective, selectors: [["", "appCollapseItem", ""]], contentQueries: function CollapseItemDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, CollapseContentDirective, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, inputs: { appCollapseItem: "appCollapseItem" }, exportAs: ["appCollapseItem"] });
class CollapseDirective {
}
CollapseDirective.ɵfac = function CollapseDirective_Factory(t) { return new (t || CollapseDirective)(); };
CollapseDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: CollapseDirective, selectors: [["", "appCollapse", ""]] });


/***/ }),

/***/ "0nhT":
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/owl-prevent-click.directive.ts ***!
  \******************************************************************/
/*! exports provided: OwlPreventClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlPreventClickDirective", function() { return OwlPreventClickDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





/**
 * This directive adds the "owl-prevent-click" class to the .owl-carousel element when dragging.
 * When the class "owl-prevent-click" is applied to an element, a pseudo-element is created and
 * a mouseup event occurs on it, which prevents clicking.
 */
class OwlPreventClickDirective {
    constructor(platformId, elementRef, zone) {
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.zone = zone;
    }
    get element() {
        return this.elementRef.nativeElement;
    }
    ngOnInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                const children = [].slice.call(this.element.children);
                const owlCarouseElement = children.find(element => element.classList.contains('owl-carousel'));
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(owlCarouseElement, 'mousedown').subscribe(mouseDownEvent => {
                    const timeout = setTimeout(() => {
                        owlCarouseElement.classList.add('owl-prevent-click');
                    }, 250);
                    const mouseUpEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mouseup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(mouseUpEvent$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(mouseMoveEvent => Math.abs(Math.sqrt(Math.pow(mouseDownEvent.clientX - mouseMoveEvent.clientX, 2) +
                        Math.pow(mouseDownEvent.clientY - mouseMoveEvent.clientY, 2)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(distance => distance > 15), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(() => {
                        owlCarouseElement.classList.add('owl-prevent-click');
                    });
                    mouseUpEvent$.subscribe(() => {
                        owlCarouseElement.classList.remove('owl-prevent-click');
                        clearTimeout(timeout);
                    });
                });
            });
        }
    }
}
OwlPreventClickDirective.ɵfac = function OwlPreventClickDirective_Factory(t) { return new (t || OwlPreventClickDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
OwlPreventClickDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: OwlPreventClickDirective, selectors: [["", "appOwlPreventClick", ""]] });


/***/ }),

/***/ "0njA":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/icon/icon.component.ts ***!
  \**********************************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class IconComponent {
    constructor() { }
    set name(value) {
        this.id = value;
    }
    set size(value) {
        const result = /^([0-9]+)(?:x([0-9]+))?$/.exec(value);
        if (result) {
            if (result[2]) {
                this.width = result[1] + 'px';
                this.height = result[2] + 'px';
            }
            else {
                this.width = this.height = result[1] + 'px';
            }
        }
        else {
            this.width = this.height = null;
        }
    }
}
IconComponent.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(); };
IconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconComponent, selectors: [["app-icon"]], inputs: { name: "name", size: "size" }, decls: 2, vars: 3, template: function IconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx.width)("height", ctx.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", "assets/images/sprite.svg#" + ctx.id, null, "xlink");
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaWNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJpY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ "1/JI":
/*!**********************************************!*\
  !*** ./src/fake-server/database/products.ts ***!
  \**********************************************/
/*! exports provided: attributesDef, products, getBestsellers, getTopRated, getSpecialOffers, getFeatured, getLatestProducts, getRelatedProducts, getSuggestions, getProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributesDef", function() { return attributesDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "products", function() { return products; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBestsellers", function() { return getBestsellers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopRated", function() { return getTopRated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpecialOffers", function() { return getSpecialOffers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeatured", function() { return getFeatured; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLatestProducts", function() { return getLatestProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelatedProducts", function() { return getRelatedProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuggestions", function() { return getSuggestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return getProduct; });
/* harmony import */ var _brands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brands */ "rPnU");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories */ "mMGZ");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





let lastProductId = 0;
const attributesDef = [
    {
        name: 'Color',
        slug: 'color',
        values: [
            { name: 'White', slug: 'white' },
            { name: 'Silver', slug: 'silver' },
            { name: 'Light Gray', slug: 'light-gray' },
            { name: 'Gray', slug: 'gray' },
            { name: 'Dark Gray', slug: 'dark-gray' },
            { name: 'Coal', slug: 'coal' },
            { name: 'Black', slug: 'black' },
            { name: 'Red', slug: 'red' },
            { name: 'Orange', slug: 'orange' },
            { name: 'Yellow', slug: 'yellow' },
            { name: 'Pear Green', slug: 'pear-green' },
            { name: 'Green', slug: 'green' },
            { name: 'Emerald', slug: 'emerald' },
            { name: 'Shamrock', slug: 'shamrock' },
            { name: 'Shakespeare', slug: 'shakespeare' },
            { name: 'Blue', slug: 'blue' },
            { name: 'Dark Blue', slug: 'dark-blue' },
            { name: 'Violet', slug: 'violet' },
            { name: 'Purple', slug: 'purple' },
            { name: 'Cerise', slug: 'cerise' },
        ],
    },
    {
        name: 'Speed',
        slug: 'speed',
        values: [
            { name: '750 RPM', slug: '750-rpm' },
        ],
    },
    {
        name: 'Power Source',
        slug: 'power-source',
        values: [
            { name: 'Cordless-Electric', slug: 'cordless-electric' },
        ],
    },
    {
        name: 'Battery Cell Type',
        slug: 'battery-cell-type',
        values: [
            { name: 'Lithium', slug: 'lithium' },
        ],
    },
    {
        name: 'Voltage',
        slug: 'voltage',
        values: [
            { name: '20 Volts', slug: '20-volts' },
        ],
    },
    {
        name: 'Battery Capacity',
        slug: 'battery-capacity',
        values: [
            { name: '2 Ah', slug: '2-Ah' },
        ],
    },
];
const productsDef = [
    {
        slug: 'electric-planer-brandix-kl370090g-300-watts',
        name: 'Electric Planer Brandix KL370090G 300 Watts',
        price: 749,
        images: [
            'assets/images/products/product-1.jpg',
            'assets/images/products/product-1-1.jpg',
        ],
        badges: 'new',
        rating: 4,
        reviews: 12,
        availability: 'in-stock',
        brand: 'brandix',
        categories: ['screwdrivers'],
        attributes: [
            { slug: 'color', values: 'yellow' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'undefined-tool-iradix-dps3000sy-2700-watts',
        name: 'Undefined Tool IRadix DPS3000SY 2700 Watts',
        price: 1019,
        images: [
            'assets/images/products/product-2.jpg',
            'assets/images/products/product-2-1.jpg',
        ],
        badges: 'hot',
        rating: 5,
        reviews: 3,
        availability: 'in-stock',
        brand: 'zosch',
        categories: [],
        attributes: [
            { slug: 'color', values: ['silver', 'cerise'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'drill-screwdriver-brandix-alx7054-200-watts',
        name: 'Drill Screwdriver Brandix ALX7054 200 Watts',
        price: 850,
        images: [
            'assets/images/products/product-3.jpg',
            'assets/images/products/product-3-1.jpg',
        ],
        rating: 4,
        reviews: 8,
        availability: 'in-stock',
        brand: 'brandix',
        categories: [],
        attributes: [
            { slug: 'color', values: 'yellow' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'drill-series-3-brandix-ksr4590pqs-1500-watts',
        name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
        price: 949,
        compareAtPrice: 1189,
        images: [
            'assets/images/products/product-4.jpg',
            'assets/images/products/product-4-1.jpg',
        ],
        badges: 'sale',
        rating: 3,
        reviews: 15,
        availability: 'in-stock',
        brand: 'brandix',
        categories: [],
        attributes: [
            { slug: 'color', values: 'white' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-router-power-tool-2017erxpk',
        name: 'Brandix Router Power Tool 2017ERXPK',
        price: 1700,
        images: [
            'assets/images/products/product-5.jpg',
            'assets/images/products/product-5-1.jpg',
        ],
        rating: 4,
        reviews: 2,
        availability: 'in-stock',
        brand: 'wakita',
        categories: [],
        attributes: [
            { slug: 'color', values: 'dark-blue' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-drilling-machine-dm2019kw4-4kw',
        name: 'Brandix Drilling Machine DM2019KW4 4kW',
        price: 3199,
        images: [
            'assets/images/products/product-6.jpg',
            'assets/images/products/product-6-1.jpg',
        ],
        rating: 3,
        reviews: 21,
        availability: 'in-stock',
        brand: 'wakita',
        categories: [],
        attributes: [
            { slug: 'color', values: 'orange' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-pliers',
        name: 'Brandix Pliers',
        price: 24,
        images: [
            'assets/images/products/product-7.jpg',
            'assets/images/products/product-7-1.jpg',
        ],
        rating: 2,
        reviews: 1,
        availability: 'in-stock',
        brand: 'wevalt',
        categories: [],
        attributes: [
            { slug: 'color', values: 'red' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'water-hose-40cm',
        name: 'Water Hose 40cm',
        price: 15,
        images: [
            'assets/images/products/product-8.jpg',
            'assets/images/products/product-8-1.jpg',
        ],
        rating: 2,
        reviews: 5,
        availability: 'in-stock',
        brand: 'hammer',
        categories: [],
        attributes: [
            { slug: 'color', values: ['pear-green', 'blue'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'spanner-wrench',
        name: 'Spanner Wrench',
        price: 19,
        images: [
            'assets/images/products/product-9.jpg',
            'assets/images/products/product-9-1.jpg',
        ],
        rating: 4,
        reviews: 34,
        availability: 'in-stock',
        brand: 'hammer',
        categories: [],
        attributes: [
            { slug: 'color', values: 'green' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'water-tap',
        name: 'Water Tap',
        price: 15,
        images: [
            'assets/images/products/product-10.jpg',
            'assets/images/products/product-10-1.jpg',
        ],
        rating: 5,
        reviews: 3,
        availability: 'in-stock',
        brand: 'hammer',
        categories: [],
        attributes: [
            { slug: 'color', values: 'gray' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'hand-tool-kit',
        name: 'Hand Tool Kit',
        price: 149,
        images: [
            'assets/images/products/product-11.jpg',
            'assets/images/products/product-11-1.jpg',
        ],
        rating: 4,
        reviews: 7,
        availability: 'in-stock',
        brand: 'hammer',
        categories: [],
        attributes: [
            { slug: 'color', values: 'black' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'ash-s-chainsaw-3.5kw',
        name: 'Ash\'s Chainsaw 3.5kW',
        price: 666.99,
        images: [
            'assets/images/products/product-12.jpg',
            'assets/images/products/product-12-1.jpg',
        ],
        rating: 5,
        reviews: 17,
        availability: 'in-stock',
        brand: 'mitasia',
        categories: [],
        attributes: [
            { slug: 'color', values: 'violet' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-angle-grinder-kzx3890pqw',
        name: 'Brandix Angle Grinder KZX3890PQW',
        price: 649,
        images: [
            'assets/images/products/product-13.jpg',
            'assets/images/products/product-13-1.jpg',
        ],
        rating: 2,
        reviews: 8,
        availability: 'in-stock',
        brand: 'mitasia',
        categories: [],
        attributes: [
            { slug: 'color', values: 'purple' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-air-compressor-deltakx500',
        name: 'Brandix Air Compressor DELTAKX500',
        price: 1800,
        images: [
            'assets/images/products/product-14.jpg',
            'assets/images/products/product-14-1.jpg',
        ],
        rating: 3,
        reviews: 14,
        availability: 'in-stock',
        brand: 'brandix',
        categories: [],
        attributes: [
            { slug: 'color', values: ['light-gray', 'emerald'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-electric-jigsaw-jig7000bq',
        name: 'Brandix Electric Jigsaw JIG7000BQ',
        price: 290,
        images: [
            'assets/images/products/product-15.jpg',
            'assets/images/products/product-15-1.jpg',
        ],
        rating: 2,
        reviews: 1,
        availability: 'in-stock',
        brand: 'brandix',
        categories: [],
        attributes: [
            { slug: 'color', values: ['coal', 'shamrock'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-screwdriver-screw1500acc',
        name: 'Brandix Screwdriver SCREW1500ACC',
        price: 1499,
        images: [
            'assets/images/products/product-16.jpg',
            'assets/images/products/product-16-1.jpg',
            'assets/images/products/product-16-2.jpg',
            'assets/images/products/product-16-3.jpg',
            'assets/images/products/product-16-4.jpg',
        ],
        rating: 5,
        reviews: 3,
        availability: 'in-stock',
        brand: 'metaggo',
        categories: [],
        attributes: [
            { slug: 'color', values: ['dark-gray', 'shakespeare'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    }
];
const products = productsDef.map(productDef => {
    let badges = [];
    if (productDef.badges) {
        badges = typeof productDef.badges === 'string' ? [productDef.badges] : productDef.badges;
    }
    const categories = _categories__WEBPACK_IMPORTED_MODULE_1__["shopCategoriesList"].filter(x => productDef.categories.includes(x.slug)).map(x => (Object.assign(Object.assign({}, x), { parents: null, children: null })));
    const attributes = (productDef.attributes || []).map(productAttributeDef => {
        const attributeDef = attributesDef.find(x => x.slug === productAttributeDef.slug);
        if (!attributeDef) {
            return null;
        }
        let valuesDef = [];
        if (typeof productAttributeDef.values === 'string') {
            valuesDef = [productAttributeDef.values];
        }
        else if (productAttributeDef.values) {
            valuesDef = productAttributeDef.values;
        }
        const values = valuesDef.map(valueSlug => {
            const valueDef = attributeDef.values.find(x => x.slug === valueSlug);
            if (!valueDef) {
                return null;
            }
            return Object.assign(Object.assign({}, valueDef), { customFields: {} });
        }).filter(x => x !== null);
        if (!values.length) {
            return null;
        }
        return {
            name: attributeDef.name,
            slug: attributeDef.slug,
            featured: !!productAttributeDef.featured,
            values,
            customFields: {},
        };
    }).filter(x => x !== null);
    return {
        id: ++lastProductId,
        name: productDef.name,
        sku: '83690/32',
        slug: productDef.slug,
        price: productDef.price,
        compareAtPrice: productDef.compareAtPrice || null,
        images: productDef.images.slice(),
        badges: badges.slice(),
        rating: productDef.rating,
        reviews: productDef.reviews,
        availability: productDef.availability,
        brand: _brands__WEBPACK_IMPORTED_MODULE_0__["brands"].find(x => x.slug === productDef.brand) || null,
        categories,
        attributes,
        customFields: {},
    };
});
function getBestsellers(limit = null) {
    const start = 0;
    const end = limit ? start + limit : undefined;
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(products.slice(start, end));
}
function getTopRated(limit = null) {
    const start = 3;
    const end = limit ? start + limit : undefined;
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(products.slice(start, end));
}
function getSpecialOffers(limit = null) {
    const start = 6;
    const end = limit ? start + limit : undefined;
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(products.slice(start, end));
}
function getFeatured(categorySlug = null, limit = null) {
    let fakeProducts = products.slice();
    if (categorySlug === 'power-tools') {
        fakeProducts = fakeProducts.reverse();
    }
    else if (categorySlug === 'hand-tools') {
        fakeProducts = [...fakeProducts.slice(8), ...fakeProducts.slice(0, 8)];
    }
    else if (categorySlug === 'plumbing') {
        fakeProducts = [...fakeProducts.slice(8), ...fakeProducts.slice(0, 8)].reverse();
    }
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => fakeProducts.slice(0, limit || undefined)));
}
function getLatestProducts(categorySlug = null, limit = null) {
    return getFeatured(categorySlug, limit);
}
// noinspection JSUnusedLocalSymbols
function getRelatedProducts(product) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(products.slice(0, 7));
}
function getSuggestions(query, limit, categorySlug = null) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(products.filter(x => x.name.toLowerCase().includes(query.toLowerCase())).slice(0, limit));
}
function getProduct(productSlug) {
    const product = products.find(x => x.slug === productSlug);
    if (!product) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"]({ status: 404, statusText: 'Page Not Found' }));
    }
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(JSON.parse(JSON.stringify(product)));
}


/***/ }),

/***/ "2hfl":
/*!**************************************************!*\
  !*** ./src/app/shared/services/store.service.ts ***!
  \**************************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class StoreService {
    constructor() {
        this.address = '715 Fake Street, New York 10021 USA';
        this.email = 'stroyka@example.com';
        this.phone = ['(800) 060-0730', '(800) 060-0730'];
        this.hours = 'Mon-Sat 10:00pm - 7:00pm';
    }
    get primaryPhone() {
        return this.phone.length > 0 ? this.phone[0] : null;
    }
}
StoreService.ɵfac = function StoreService_Factory(t) { return new (t || StoreService)(); };
StoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StoreService, factory: StoreService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "37O+":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/post-card/post-card.component.ts ***!
  \********************************************************************/
/*! exports provided: PostCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCardComponent", function() { return PostCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_root_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/root.service */ "imTr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _directives_click_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/click.directive */ "x5hD");





function PostCardComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r0.root.post());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1);
} }
const _c0 = function () { return ["grid-nl", "grid-lg"]; };
const _c1 = function () { return ["list-nl", "list-sm"]; };
const _c2 = function () { return ["grid-nl", "list-nl"]; };
const _c3 = function (a0, a1, a2, a3, a4) { return { "post-card--layout--grid": a0, "post-card--layout--list": a1, "post-card--size--nl": a2, "post-card--size--lg": a3, "post-card--size--sm": a4 }; };
class PostCardComponent {
    constructor(root) {
        this.root = root;
        this.layout = null;
    }
}
PostCardComponent.ɵfac = function PostCardComponent_Factory(t) { return new (t || PostCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_root_service__WEBPACK_IMPORTED_MODULE_1__["RootService"])); };
PostCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostCardComponent, selectors: [["app-post-card"]], inputs: { post: "post", layout: "layout" }, decls: 17, vars: 17, consts: [[1, "post-card", 3, "ngClass"], [1, "post-card__image"], ["appClick", "", 3, "routerLink"], ["alt", "", 3, "src"], [1, "post-card__info"], [1, "post-card__category"], ["appClick", "", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "post-card__name"], [1, "post-card__date"], [1, "post-card__content"], [1, "post-card__read-more"], ["appClick", "", 1, "btn", "btn-secondary", "btn-sm", 3, "routerLink"]], template: function PostCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PostCardComponent_a_6_Template, 2, 2, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](11, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0).includes(ctx.layout), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1).includes(ctx.layout), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2).includes(ctx.layout), ctx.layout === "grid-lg", ctx.layout === "list-sm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.root.post());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.post.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.post.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.root.post());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.root.post());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _directives_click_directive__WEBPACK_IMPORTED_MODULE_4__["ClickDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "41D5":
/*!*********************************************************!*\
  !*** ./src/app/shared/functions/rxjs/fromMatchMedia.ts ***!
  \*********************************************************/
/*! exports provided: fromMatchMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMatchMedia", function() { return fromMatchMedia; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

function fromMatchMedia(query, ignoreInitial = true) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](observer => {
        const mediaQueryList = matchMedia(query);
        const onChange = () => observer.next(mediaQueryList);
        if (!ignoreInitial) {
            observer.next(mediaQueryList);
        }
        if (mediaQueryList.addEventListener) {
            mediaQueryList.addEventListener('change', onChange);
            return () => mediaQueryList.removeEventListener('change', onChange);
        }
        else {
            // noinspection JSDeprecatedSymbols
            mediaQueryList.addListener(onChange);
            // noinspection JSDeprecatedSymbols
            return () => mediaQueryList.removeListener(onChange);
        }
    });
}


/***/ }),

/***/ "45f6":
/*!********************************************************************!*\
  !*** ./src/app/shared/directives/outside-touch-click.directive.ts ***!
  \********************************************************************/
/*! exports provided: OutsideTouchClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutsideTouchClickDirective", function() { return OutsideTouchClickDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _functions_rxjs_fromOutsideTouchClick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/rxjs/fromOutsideTouchClick */ "+W2m");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






class OutsideTouchClickDirective {
    constructor(platformId, elementRef, zone) {
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.zone = zone;
        this.outsideTouchClickZone = false;
        this.appOutsideTouchClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    get element() {
        return this.elementRef.nativeElement;
    }
    ngOnInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                Object(_functions_rxjs_fromOutsideTouchClick__WEBPACK_IMPORTED_MODULE_3__["fromOutsideTouchClick"])(this.element).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(event => {
                    if (this.outsideTouchClickZone) {
                        this.zone.run(() => this.appOutsideTouchClick.emit(event));
                    }
                    else {
                        this.appOutsideTouchClick.emit(event);
                    }
                });
            });
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
OutsideTouchClickDirective.ɵfac = function OutsideTouchClickDirective_Factory(t) { return new (t || OutsideTouchClickDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
OutsideTouchClickDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: OutsideTouchClickDirective, selectors: [["", "appOutsideTouchClick", ""]], inputs: { outsideTouchClickZone: "outsideTouchClickZone" }, outputs: { appOutsideTouchClick: "appOutsideTouchClick" } });


/***/ }),

/***/ "4m+X":
/*!************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-posts/widget-posts.component.ts ***!
  \************************************************************************/
/*! exports provided: WidgetPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetPostsComponent", function() { return WidgetPostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/root.service */ "imTr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function WidgetPostsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r0.root.post());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.postImage(post_r1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r0.root.post());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.date);
} }
class WidgetPostsComponent {
    constructor(root) {
        this.root = root;
        this.posts = [];
    }
    postImage(post) {
        return post.image.replace(/^\.jpg$/, '-thumbnail.jpg');
    }
}
WidgetPostsComponent.ɵfac = function WidgetPostsComponent_Factory(t) { return new (t || WidgetPostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_1__["RootService"])); };
WidgetPostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WidgetPostsComponent, selectors: [["app-widget-posts"]], inputs: { posts: "posts" }, decls: 5, vars: 1, consts: [[1, "widget-posts", "widget"], [1, "widget__title"], [1, "widget-posts__list"], ["class", "widget-posts__item", 4, "ngFor", "ngForOf"], [1, "widget-posts__item"], [1, "widget-posts__image"], [3, "routerLink"], ["alt", "", 3, "src"], [1, "widget-posts__info"], [1, "widget-posts__name"], [1, "widget-posts__date"]], template: function WidgetPostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Latest Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WidgetPostsComponent_div_4_Template, 10, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXQtcG9zdHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "51Pi":
/*!****************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-filters/widget-filters.component.ts ***!
  \****************************************************************************/
/*! exports provided: WidgetFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetFiltersComponent", function() { return WidgetFiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/direction.service */ "KSSz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/root.service */ "imTr");
/* harmony import */ var _shop_services_page_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shop/services/page-category.service */ "Tg9M");
/* harmony import */ var _shared_directives_collapse_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/directives/collapse.directive */ "0Qu3");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/icon/icon.component */ "0njA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular-slider/ngx-slider */ "mgaL");
/* harmony import */ var _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/pipes/currency-format.pipe */ "wGjQ");
/* harmony import */ var _shared_pipes_color_type_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/pipes/color-type.pipe */ "BD8r");
















function WidgetFiltersComponent_div_3_div_1_div_8_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "All Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r9.root.shop());
} }
function WidgetFiltersComponent_div_3_div_1_div_8_li_3_app_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-icon", 24);
} }
function WidgetFiltersComponent_div_3_div_1_div_8_li_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.count);
} }
function WidgetFiltersComponent_div_3_div_1_div_8_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WidgetFiltersComponent_div_3_div_1_div_8_li_3_app_icon_1_Template, 1, 0, "app-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WidgetFiltersComponent_div_3_div_1_div_8_li_3_div_4_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("filter-categories__item filter-categories__item--", item_r11.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.type == "parent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r10.root.category(item_r11.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.type === "child");
} }
const _c0 = function (a0) { return { "filter-categories--root": a0 }; };
function WidgetFiltersComponent_div_3_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WidgetFiltersComponent_div_3_div_1_div_8_li_2_Template, 4, 1, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WidgetFiltersComponent_div_3_div_1_div_8_li_3_Template, 5, 7, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, filter_r2.root));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !filter_r2.root);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", filter_r2.items)("ngForTrackBy", ctx_r4.trackBySlug);
} }
const _c1 = function (a2, a3, a4) { return { animate: false, mouseEventsInterval: 10, rightToLeft: a2, floor: a3, ceil: a4, step: 1 }; };
function WidgetFiltersComponent_div_3_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ngx-slider", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u2013 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const filter_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", filter_r2.slug)("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](8, _c1, ctx_r5.rightToLeft, filter_r2.min, filter_r2.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, ctx_r5.rightToLeft ? _r16.highValue : _r16.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 6, ctx_r5.rightToLeft ? _r16.value : _r16.highValue));
} }
const _c2 = function (a0) { return { "filter-list__item--disabled": a0 }; };
function WidgetFiltersComponent_div_3_div_1_div_10_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const filter_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, ctx_r18.isItemDisabled(filter_r2, item_r19)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r19.slug)("name", "filter_" + filter_r2.slug)("formControlName", item_r19.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r19.count);
} }
function WidgetFiltersComponent_div_3_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WidgetFiltersComponent_div_3_div_1_div_10_label_2_Template, 10, 8, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", filter_r2.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", filter_r2.items)("ngForTrackBy", ctx_r6.trackBySlug);
} }
function WidgetFiltersComponent_div_3_div_1_div_11_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    const filter_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, ctx_r22.isItemDisabled(filter_r2, item_r23)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r23.slug)("formControlName", filter_r2.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx_r22.isItemDisabled(filter_r2, item_r23) ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r23.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r23.count);
} }
function WidgetFiltersComponent_div_3_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WidgetFiltersComponent_div_3_div_1_div_11_label_2_Template, 9, 8, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", filter_r2.items)("ngForTrackBy", ctx_r7.trackBySlug);
} }
const _c3 = function (a0) { return [a0]; };
function WidgetFiltersComponent_div_3_div_1_div_12_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "colorType");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    const filter_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", item_r27.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c3, "input-check-color--" + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, item_r27.color)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r27.slug)("name", "filter_" + filter_r2.slug)("formControlName", item_r27.slug);
} }
function WidgetFiltersComponent_div_3_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WidgetFiltersComponent_div_3_div_1_div_12_label_2_Template, 8, 10, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", filter_r2.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", filter_r2.items)("ngForTrackBy", ctx_r8.trackBySlug);
} }
function WidgetFiltersComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidgetFiltersComponent_div_3_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r3.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WidgetFiltersComponent_div_3_div_1_div_8_Template, 4, 6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WidgetFiltersComponent_div_3_div_1_div_9_Template, 13, 12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WidgetFiltersComponent_div_3_div_1_div_10_Template, 3, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WidgetFiltersComponent_div_3_div_1_div_11_Template, 3, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WidgetFiltersComponent_div_3_div_1_div_12_Template, 3, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", filter_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", filter_r2.type === "categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", filter_r2.type === "range" && ctx_r1.isPlatformBrowser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", filter_r2.type === "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", filter_r2.type === "radio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", filter_r2.type === "color");
} }
function WidgetFiltersComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WidgetFiltersComponent_div_3_div_1_Template, 13, 6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.filtersForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.filters)("ngForTrackBy", ctx_r0.trackBySlug);
} }
const _c4 = function (a0, a1) { return { "widget-filters--offcanvas--always": a0, "widget-filters--offcanvas--mobile": a1 }; };
class WidgetFiltersComponent {
    constructor(platformId, direction, fb, root, pageCategory) {
        this.platformId = platformId;
        this.direction = direction;
        this.fb = fb;
        this.root = root;
        this.pageCategory = pageCategory;
        this.offcanvas = 'mobile';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isPlatformBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId);
        this.rightToLeft = false;
        this.rightToLeft = this.direction.isRTL();
    }
    ngOnInit() {
        this.pageCategory.list$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(x => x.filters), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(filters => {
            this.filters = filters;
            this.filtersForm = this.makeFiltersForm(filters);
            this.filtersForm.valueChanges.subscribe(formValues => {
                this.pageCategory.updateOptions({
                    filterValues: this.convertFormToFilterValues(filters, formValues)
                });
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    trackBySlug(index, item) {
        return item.slug;
    }
    makeFiltersForm(filters) {
        const filtersFromGroup = {};
        filters.forEach(filter => {
            switch (filter.type) {
                case 'range':
                case 'radio':
                    filtersFromGroup[filter.slug] = this.fb.control(filter.value);
                    break;
                case 'check':
                case 'color':
                    filtersFromGroup[filter.slug] = this.makeListFilterForm(filter);
                    break;
            }
        });
        return this.fb.group(filtersFromGroup);
    }
    makeListFilterForm(filter) {
        const group = {};
        filter.items.forEach(item => {
            const control = this.fb.control(filter.value.includes(item.slug));
            // A timeout is needed because sometimes a state change is ignored if performed immediately.
            setTimeout(() => {
                if (this.isItemDisabled(filter, item)) {
                    control.disable({ emitEvent: false });
                }
                else {
                    control.enable({ emitEvent: false });
                }
            }, 0);
            group[item.slug] = control;
        });
        return this.fb.group(group);
    }
    isItemDisabled(filter, item) {
        return item.count === 0 && (filter.type === 'radio' || !filter.value.includes(item.slug));
    }
    convertFormToFilterValues(filters, formValues) {
        const filterValues = {};
        filters.forEach(filter => {
            const formValue = formValues[filter.slug];
            switch (filter.type) {
                case 'range':
                    if (formValue && (formValue[0] !== filter.min || formValue[1] !== filter.max)) {
                        filterValues[filter.slug] = `${formValue[0]}-${formValue[1]}`;
                    }
                    break;
                case 'check':
                case 'color':
                    const filterFormValues = formValue || {};
                    // Reactive forms do not add a values of disabled checkboxes.
                    // This code will add them manually.
                    filter.value.forEach(filterValue => {
                        if (!(filterValue in filterFormValues)) {
                            filterFormValues[filterValue] = true;
                        }
                    });
                    const values = Object.keys(filterFormValues).filter(x => filterFormValues[x]);
                    if (values.length > 0) {
                        filterValues[filter.slug] = values.join(',');
                    }
                    break;
                case 'radio':
                    if (formValue !== filter.items[0].slug) {
                        filterValues[filter.slug] = formValue;
                    }
                    break;
            }
        });
        return filterValues;
    }
    reset() {
        const formValues = {};
        this.filters.forEach(filter => {
            switch (filter.type) {
                case 'range':
                    formValues[filter.slug] = [filter.min, filter.max];
                    break;
                case 'check':
                case 'color':
                    formValues[filter.slug] = {};
                    filter.items.forEach(item => {
                        formValues[filter.slug][item.slug] = false;
                    });
                    break;
                case 'radio':
                    formValues[filter.slug] = filter.items[0].slug;
                    break;
            }
        });
        this.filtersForm.setValue(formValues);
    }
}
WidgetFiltersComponent.ɵfac = function WidgetFiltersComponent_Factory(t) { return new (t || WidgetFiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_direction_service__WEBPACK_IMPORTED_MODULE_4__["DirectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_6__["RootService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shop_services_page_category_service__WEBPACK_IMPORTED_MODULE_7__["PageCategoryService"])); };
WidgetFiltersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WidgetFiltersComponent, selectors: [["app-widget-filters"]], inputs: { offcanvas: "offcanvas" }, decls: 7, vars: 5, consts: [["appCollapse", "", 1, "widget-filters", "widget", 3, "ngClass"], [1, "widget-filters__title", "widget__title"], ["class", "widget-filters__list", 3, "formGroup", 4, "ngIf"], [1, "widget-filters__actions", "d-flex"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "widget-filters__list", 3, "formGroup"], ["class", "widget-filters__item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "widget-filters__item"], ["appCollapseItem", "filter--opened", 1, "filter", "filter--opened"], ["collapse", "appCollapseItem"], ["type", "button", 1, "filter__title", 3, "click"], ["name", "arrow-rounded-down-12x7", "size", "12x7", 1, "filter__arrow"], ["appCollapseContent", "", 1, "filter__body"], [1, "filter__container"], ["class", "filter-categories", 3, "ngClass", 4, "ngIf"], ["class", "filter-price", 4, "ngIf"], ["class", "filter-list", 3, "formGroupName", 4, "ngIf"], ["class", "filter-list", 4, "ngIf"], ["class", "filter-color", 3, "formGroupName", 4, "ngIf"], [1, "filter-categories", 3, "ngClass"], [1, "filter-categories__list"], ["class", "filter-categories__item filter-categories__item--parent", 4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "filter-categories__item", "filter-categories__item--parent"], ["name", "arrow-rounded-left-6x9", "size", "6x9", 1, "filter-categories__arrow"], [3, "routerLink"], ["class", "filter-categories__arrow", "name", "arrow-rounded-left-6x9", "size", "6x9", 4, "ngIf"], ["class", "filter-categories__counter", 4, "ngIf"], [1, "filter-categories__counter"], [1, "filter-price"], [1, "filter-price__slider"], [1, "ngx-slider-custom"], [3, "formControlName", "options"], ["slider", ""], [1, "filter-price__title"], [1, "filter-price__min-value"], [1, "filter-price__max-value"], [1, "filter-list", 3, "formGroupName"], [1, "filter-list__list"], ["class", "filter-list__item", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "filter-list__item", 3, "ngClass"], [1, "filter-list__input", "input-check"], [1, "input-check__body"], ["type", "checkbox", 1, "input-check__input", 3, "value", "name", "formControlName"], [1, "input-check__box"], ["name", "check-9x7", "size", "9x7", 1, "input-check__icon"], [1, "filter-list__title"], [1, "filter-list__counter"], [1, "filter-list"], [1, "filter-list__input", "input-radio"], [1, "input-radio__body"], ["type", "radio", 1, "input-radio__input", 3, "value", "formControlName"], [1, "input-radio__circle"], [1, "filter-color", 3, "formGroupName"], [1, "filter-color__list"], ["class", "filter-color__item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "filter-color__item"], [1, "filter-color__check", "input-check-color", 3, "ngClass"], [1, "input-check-color__body"], ["type", "checkbox", 1, "input-check-color__input", 3, "value", "name", "formControlName"], [1, "input-check-color__box"], ["name", "check-12x9", "size", "12x9", 1, "input-check-color__icon"], [1, "input-check-color__stick"]], template: function WidgetFiltersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WidgetFiltersComponent_div_3_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidgetFiltersComponent_Template_button_click_5_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c4, ctx.offcanvas === "always", ctx.offcanvas === "mobile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filtersForm);
    } }, directives: [_shared_directives_collapse_directive__WEBPACK_IMPORTED_MODULE_8__["CollapseDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _shared_directives_collapse_directive__WEBPACK_IMPORTED_MODULE_8__["CollapseItemDirective"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_9__["IconComponent"], _shared_directives_collapse_directive__WEBPACK_IMPORTED_MODULE_8__["CollapseContentDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_11__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]], pipes: [_shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_12__["CurrencyFormatPipe"], _shared_pipes_color_type_pipe__WEBPACK_IMPORTED_MODULE_13__["ColorTypePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXQtZmlsdGVycy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "5Gal":
/*!********************************************************************************!*\
  !*** ./src/app/modules/mobile/components/mobile-menu/mobile-menu.component.ts ***!
  \********************************************************************************/
/*! exports provided: MobileMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMenuComponent", function() { return MobileMenuComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _data_mobile_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../data/mobile-menu */ "bM9y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_mobile_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/mobile-menu.service */ "QFML");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ "0njA");
/* harmony import */ var _mobile_links_mobile_links_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mobile-links/mobile-links.component */ "Oz7e");








const _c0 = function (a0) { return { "mobilemenu--open": a0 }; };
class MobileMenuComponent {
    constructor(mobilemenu) {
        this.mobilemenu = mobilemenu;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isOpen = false;
        this.links = _data_mobile_menu__WEBPACK_IMPORTED_MODULE_2__["mobileMenu"];
    }
    ngOnInit() {
        this.mobilemenu.isOpen$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.destroy$)).subscribe(isOpen => this.isOpen = isOpen);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    onItemClick(event) {
        if (event.type === 'link') {
            this.mobilemenu.close();
        }
        // if (event.data && event.data.language) {
        //     console.log(event.data.language); // change language
        // }
    }
}
MobileMenuComponent.ɵfac = function MobileMenuComponent_Factory(t) { return new (t || MobileMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_mobile_menu_service__WEBPACK_IMPORTED_MODULE_4__["MobileMenuService"])); };
MobileMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MobileMenuComponent, selectors: [["app-mobile-menu"]], decls: 10, vars: 4, consts: [[1, "mobilemenu", 3, "ngClass"], [1, "mobilemenu__backdrop", 3, "click"], [1, "mobilemenu__body"], [1, "mobilemenu__header"], [1, "mobilemenu__title"], ["type", "button", 1, "mobilemenu__close", 3, "click"], ["name", "cross-20", "size", "20"], [1, "mobilemenu__content"], [3, "links", "itemClick"]], template: function MobileMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MobileMenuComponent_Template_div_click_1_listener() { return ctx.mobilemenu.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MobileMenuComponent_Template_button_click_6_listener() { return ctx.mobilemenu.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "app-mobile-links", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("itemClick", function MobileMenuComponent_Template_app_mobile_links_itemClick_9_listener($event) { return ctx.onItemClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, ctx.isOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("links", ctx.links);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"], _mobile_links_mobile_links_component__WEBPACK_IMPORTED_MODULE_7__["MobileLinksComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2JpbGUtbWVudS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "5at8":
/*!***************************!*\
  !*** ./src/data/theme.ts ***!
  \***************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
const theme = {
    name: 'Stroyka',
    author: {
        name: 'Kos',
        profile_url: 'https://themeforest.net/user/kos9'
    }
};


/***/ }),

/***/ "6c6k":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/social-links/social-links.component.ts ***!
  \**************************************************************************/
/*! exports provided: SocialLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLinksComponent", function() { return SocialLinksComponent; });
/* harmony import */ var _data_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../data/theme */ "5at8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function SocialLinksComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("social-links__link social-links__link--type--", item_r1.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", item_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r1.icon);
} }
class SocialLinksComponent {
    constructor() {
        this.theme = _data_theme__WEBPACK_IMPORTED_MODULE_0__["theme"];
        this.items = [
            { type: 'facebook', url: this.theme.author.profile_url, icon: 'fab fa-facebook-f' },
            { type: 'twitter', url: this.theme.author.profile_url, icon: 'fab fa-twitter' },
            { type: 'youtube', url: this.theme.author.profile_url, icon: 'fab fa-youtube' },
            { type: 'instagram', url: this.theme.author.profile_url, icon: 'fab fa-instagram' },
            { type: 'rss', url: this.theme.author.profile_url, icon: 'fas fa-rss' },
        ];
        this.classSocialLinks = true;
    }
    get classSocialLinksShapeCircle() { return this.shape === 'circle'; }
    get classSocialLinksShapeRounded() { return this.shape === 'rounded'; }
}
SocialLinksComponent.ɵfac = function SocialLinksComponent_Factory(t) { return new (t || SocialLinksComponent)(); };
SocialLinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SocialLinksComponent, selectors: [["app-social-links"]], hostVars: 6, hostBindings: function SocialLinksComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("social-links", ctx.classSocialLinks)("social-links--shape--circle", ctx.classSocialLinksShapeCircle)("social-links--shape--rounded", ctx.classSocialLinksShapeRounded);
    } }, inputs: { shape: "shape" }, decls: 2, vars: 1, consts: [[1, "social-links__list"], ["class", "social-links__item", 4, "ngFor", "ngForOf"], [1, "social-links__item"], ["target", "_blank", 3, "href"], [3, "ngClass"]], template: function SocialLinksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SocialLinksComponent_li_1_Template, 3, 5, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2NpYWwtbGlua3MuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "6t2i":
/*!***************************************************!*\
  !*** ./src/app/modules/widgets/widgets.module.ts ***!
  \***************************************************/
/*! exports provided: WidgetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsModule", function() { return WidgetsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-slider/ngx-slider */ "mgaL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _widget_aboutus_widget_aboutus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widget-aboutus/widget-aboutus.component */ "DeAh");
/* harmony import */ var _widget_categories_widget_categories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widget-categories/widget-categories.component */ "HgAd");
/* harmony import */ var _widget_comments_widget_comments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./widget-comments/widget-comments.component */ "Wd44");
/* harmony import */ var _widget_filters_widget_filters_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./widget-filters/widget-filters.component */ "51Pi");
/* harmony import */ var _widget_newsletter_widget_newsletter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./widget-newsletter/widget-newsletter.component */ "Zrae");
/* harmony import */ var _widget_posts_widget_posts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./widget-posts/widget-posts.component */ "4m+X");
/* harmony import */ var _widget_products_widget_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./widget-products/widget-products.component */ "BEKe");
/* harmony import */ var _widget_search_widget_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./widget-search/widget-search.component */ "M4Y8");
/* harmony import */ var _widget_tags_widget_tags_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./widget-tags/widget-tags.component */ "zWxD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
// modules (angular)



// modules (third-party)

// modules

// widgets










class WidgetsModule {
}
WidgetsModule.ɵfac = function WidgetsModule_Factory(t) { return new (t || WidgetsModule)(); };
WidgetsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: WidgetsModule });
WidgetsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [[
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            // modules (third-party)
            _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_3__["NgxSliderModule"],
            // modules
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](WidgetsModule, { declarations: [
        // widgets
        _widget_aboutus_widget_aboutus_component__WEBPACK_IMPORTED_MODULE_5__["WidgetAboutusComponent"],
        _widget_categories_widget_categories_component__WEBPACK_IMPORTED_MODULE_6__["WidgetCategoriesComponent"],
        _widget_comments_widget_comments_component__WEBPACK_IMPORTED_MODULE_7__["WidgetCommentsComponent"],
        _widget_filters_widget_filters_component__WEBPACK_IMPORTED_MODULE_8__["WidgetFiltersComponent"],
        _widget_newsletter_widget_newsletter_component__WEBPACK_IMPORTED_MODULE_9__["WidgetNewsletterComponent"],
        _widget_posts_widget_posts_component__WEBPACK_IMPORTED_MODULE_10__["WidgetPostsComponent"],
        _widget_products_widget_products_component__WEBPACK_IMPORTED_MODULE_11__["WidgetProductsComponent"],
        _widget_search_widget_search_component__WEBPACK_IMPORTED_MODULE_12__["WidgetSearchComponent"],
        _widget_tags_widget_tags_component__WEBPACK_IMPORTED_MODULE_13__["WidgetTagsComponent"]], imports: [
        // modules (angular)
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        // modules (third-party)
        _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_3__["NgxSliderModule"],
        // modules
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]], exports: [
        // widgets
        _widget_aboutus_widget_aboutus_component__WEBPACK_IMPORTED_MODULE_5__["WidgetAboutusComponent"],
        _widget_categories_widget_categories_component__WEBPACK_IMPORTED_MODULE_6__["WidgetCategoriesComponent"],
        _widget_comments_widget_comments_component__WEBPACK_IMPORTED_MODULE_7__["WidgetCommentsComponent"],
        _widget_filters_widget_filters_component__WEBPACK_IMPORTED_MODULE_8__["WidgetFiltersComponent"],
        _widget_newsletter_widget_newsletter_component__WEBPACK_IMPORTED_MODULE_9__["WidgetNewsletterComponent"],
        _widget_posts_widget_posts_component__WEBPACK_IMPORTED_MODULE_10__["WidgetPostsComponent"],
        _widget_products_widget_products_component__WEBPACK_IMPORTED_MODULE_11__["WidgetProductsComponent"],
        _widget_search_widget_search_component__WEBPACK_IMPORTED_MODULE_12__["WidgetSearchComponent"],
        _widget_tags_widget_tags_component__WEBPACK_IMPORTED_MODULE_13__["WidgetTagsComponent"]] }); })();


/***/ }),

/***/ "9jzM":
/*!*************************************************!*\
  !*** ./src/app/modules/header/header.module.ts ***!
  \*************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _components_account_menu_account_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/account-menu/account-menu.component */ "PhZW");
/* harmony import */ var _components_departments_departments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/departments/departments.component */ "ZdRu");
/* harmony import */ var _components_dropcart_dropcart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dropcart/dropcart.component */ "hmow");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header.component */ "+LOj");
/* harmony import */ var _components_indicator_indicator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/indicator/indicator.component */ "ZOUS");
/* harmony import */ var _components_links_links_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/links/links.component */ "eKC6");
/* harmony import */ var _components_megamenu_megamenu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/megamenu/megamenu.component */ "eOub");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/menu/menu.component */ "U6+l");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/nav/nav.component */ "kHlE");
/* harmony import */ var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/topbar/topbar.component */ "N4I/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
// modules (angular)


// modules

// components












class HeaderModule {
}
HeaderModule.ɵfac = function HeaderModule_Factory(t) { return new (t || HeaderModule)(); };
HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [[
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            // modules
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [
        // components
        _components_account_menu_account_menu_component__WEBPACK_IMPORTED_MODULE_3__["AccountMenuComponent"],
        _components_departments_departments_component__WEBPACK_IMPORTED_MODULE_4__["DepartmentsComponent"],
        _components_dropcart_dropcart_component__WEBPACK_IMPORTED_MODULE_5__["DropcartComponent"],
        _header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _components_indicator_indicator_component__WEBPACK_IMPORTED_MODULE_7__["IndicatorComponent"],
        _components_links_links_component__WEBPACK_IMPORTED_MODULE_8__["LinksComponent"],
        _components_megamenu_megamenu_component__WEBPACK_IMPORTED_MODULE_9__["MegamenuComponent"],
        _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"],
        _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_11__["NavComponent"],
        _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_12__["TopbarComponent"]], imports: [
        // modules (angular)
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        // modules
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]], exports: [
        // components
        _header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _components_dropcart_dropcart_component__WEBPACK_IMPORTED_MODULE_5__["DropcartComponent"]] }); })();


/***/ }),

/***/ "ABis":
/*!***************************************!*\
  !*** ./src/data/header-navigation.ts ***!
  \***************************************/
/*! exports provided: navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigation", function() { return navigation; });
const navigation = [
    { label: 'Megamenu', url: '/shop/catalog', menu: {
            type: 'megamenu',
            size: 'nl',
            columns: [
                { size: 6, items: [
                        { label: 'Power Tools', url: '/shop/catalog', items: [
                                { label: 'Engravers', url: '/shop/catalog' },
                                { label: 'Wrenches', url: '/shop/catalog' },
                                { label: 'Wall Chaser', url: '/shop/catalog' },
                                { label: 'Pneumatic Tools', url: '/shop/catalog' }
                            ] },
                        { label: 'Machine Tools', url: '/shop/catalog', items: [
                                { label: 'Thread Cutting', url: '/shop/catalog' },
                                { label: 'Chip Blowers', url: '/shop/catalog' },
                                { label: 'Sharpening Machines', url: '/shop/catalog' },
                                { label: 'Pipe Cutters', url: '/shop/catalog' },
                                { label: 'Slotting machines', url: '/shop/catalog' },
                                { label: 'Lathes', url: '/shop/catalog' }
                            ] }
                    ] },
                { size: 6, items: [
                        { label: 'Hand Tools', url: '/shop/catalog', items: [
                                { label: 'Screwdrivers', url: '/shop/catalog' },
                                { label: 'Handsaws', url: '/shop/catalog' },
                                { label: 'Knives', url: '/shop/catalog' },
                                { label: 'Axes', url: '/shop/catalog' },
                                { label: 'Multitools', url: '/shop/catalog' },
                                { label: 'Paint Tools', url: '/shop/catalog' }
                            ] },
                        { label: 'Garden Equipment', url: '/shop/catalog', items: [
                                { label: 'Motor Pumps', url: '/shop/catalog' },
                                { label: 'Chainsaws', url: '/shop/catalog' },
                                { label: 'Electric Saws', url: '/shop/catalog' },
                                { label: 'Brush Cutters', url: '/shop/catalog' }
                            ] }
                    ] }
            ]
        } },
];


/***/ }),

/***/ "ATNk":
/*!*********************************************!*\
  !*** ./src/app/shared/api/login.service.ts ***!
  \*********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







class LoginService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    getLoginData(dataLogin) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /**
             * This is what your API endpoint might look like:
             *
             * https://example.com/api/shop/categories/power-tools.json
             *
             * where:
             * - power-tools = slug
             */
            // return this.http.get<Category>(`https://example.com/api/shop/categories/${slug}.json`);
            // This is for demonstration purposes only. Remove it and use the code above.
            console.log("in service ");
            return yield this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/Customer/GetLogin", JSON.stringify(dataLogin), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler)).toPromise();
        });
    }
    // register customer details
    registerCustUserData(dataLogin) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(dataLogin);
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/Customer", JSON.stringify(dataLogin), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler)).toPromise();
        });
    }
    // profile update customer details
    editProfileCust(dataLogin) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("profile update customer details");
            console.log(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/Customer/" + dataLogin.customerId);
            return yield this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/Customer/" + dataLogin.customerId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler)).toPromise();
        });
    }
    // profile update seller
    editProfileSeller(dataLogin) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("profile update seller");
            return yield this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/Seller/" + dataLogin.customerId, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler)).toPromise();
        });
    }
    // register seller details
    registerSellerUserData(dataLogin) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("sellers reg serv");
            return yield this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/Seller", JSON.stringify(dataLogin), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler)).toPromise();
        });
    }
    errorHandler(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Agk8":
/*!***************************************************!*\
  !*** ./src/app/shared/interfaces/returnresult.ts ***!
  \***************************************************/
/*! exports provided: returnresult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "returnresult", function() { return returnresult; });
class returnresult {
}


/***/ }),

/***/ "AytR":
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
    production: false,
    baseUrl: "http://49.50.70.59:8697/api"
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

/***/ "BD8r":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/color-type.pipe.ts ***!
  \*************************************************/
/*! exports provided: ColorTypePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorTypePipe", function() { return ColorTypePipe; });
/* harmony import */ var _helpers_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/color */ "LdIM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ColorTypePipe {
    transform(value) {
        return Object(_helpers_color__WEBPACK_IMPORTED_MODULE_0__["colorType"])(value);
    }
}
ColorTypePipe.ɵfac = function ColorTypePipe_Factory(t) { return new (t || ColorTypePipe)(); };
ColorTypePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "colorType", type: ColorTypePipe, pure: true });


/***/ }),

/***/ "BEKe":
/*!******************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-products/widget-products.component.ts ***!
  \******************************************************************************/
/*! exports provided: WidgetProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetProductsComponent", function() { return WidgetProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/root.service */ "imTr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/pipes/currency-format.pipe */ "wGjQ");





function WidgetProductsComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r2.root.product(product_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r1.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WidgetProductsComponent_div_4_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, product_r1.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, product_r1.compareAtPrice));
} }
function WidgetProductsComponent_div_4_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, product_r1.price), " ");
} }
function WidgetProductsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WidgetProductsComponent_div_4_div_2_Template, 3, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WidgetProductsComponent_div_4_ng_container_8_Template, 8, 7, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WidgetProductsComponent_div_4_ng_container_9_Template, 3, 3, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1.images == null ? null : product_r1.images.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r0.root.product(product_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1.compareAtPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !product_r1.compareAtPrice);
} }
class WidgetProductsComponent {
    constructor(root) {
        this.root = root;
        this.header = '';
        this.products = [];
    }
}
WidgetProductsComponent.ɵfac = function WidgetProductsComponent_Factory(t) { return new (t || WidgetProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_1__["RootService"])); };
WidgetProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WidgetProductsComponent, selectors: [["app-widget-products"]], inputs: { header: "header", products: "products" }, decls: 5, vars: 2, consts: [[1, "widget-products", "widget"], [1, "widget__title"], [1, "widget-products__list"], ["class", "widget-products__item", 4, "ngFor", "ngForOf"], [1, "widget-products__item"], [1, "widget-products__image"], ["class", "product-image", 4, "ngIf"], [1, "widget-products__info"], [1, "widget-products__name"], [3, "routerLink"], [1, "widget-products__prices"], [4, "ngIf"], [1, "product-image"], [1, "product-image__body", 3, "routerLink"], ["alt", "", 1, "product-image__img", 3, "src"], [1, "widget-products__new-price"], [1, "widget-products__old-price"]], template: function WidgetProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WidgetProductsComponent_div_4_Template, 10, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_4__["CurrencyFormatPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXQtcHJvZHVjdHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "BUuc":
/*!*************************************************!*\
  !*** ./src/app/modules/mobile/mobile.module.ts ***!
  \*************************************************/
/*! exports provided: MobileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileModule", function() { return MobileModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _components_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/mobile-header/mobile-header.component */ "Er3l");
/* harmony import */ var _components_mobile_links_mobile_links_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/mobile-links/mobile-links.component */ "Oz7e");
/* harmony import */ var _components_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mobile-menu/mobile-menu.component */ "5Gal");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
// modules (angular)


// modules

// components




class MobileModule {
}
MobileModule.ɵfac = function MobileModule_Factory(t) { return new (t || MobileModule)(); };
MobileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: MobileModule });
MobileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            // modules
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MobileModule, { declarations: [
        // components
        _components_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_3__["MobileHeaderComponent"],
        _components_mobile_links_mobile_links_component__WEBPACK_IMPORTED_MODULE_4__["MobileLinksComponent"],
        _components_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_5__["MobileMenuComponent"]], imports: [
        // modules (angular)
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        // modules
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]], exports: [
        // components
        _components_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_3__["MobileHeaderComponent"],
        _components_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_5__["MobileMenuComponent"]] }); })();


/***/ }),

/***/ "BgzB":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


class PageNotFoundComponent {
    constructor() { }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-not-found"]], decls: 20, vars: 0, consts: [[1, "block"], [1, "container"], [1, "not-found"], [1, "not-found__404"], [1, "not-found__content"], [1, "not-found__title"], [1, "not-found__text"], [1, "not-found__search"], ["type", "text", "placeholder", "Search Query...", 1, "not-found__search-input", "form-control"], ["type", "submit", 1, "not-found__search-button", "btn", "btn-primary"], ["href", "index.html", 1, "btn", "btn-secondary", "btn-sm"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Oops! Error 404 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Page Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " We can't seem to find the page you're looking for.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Try to use the search. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Or go to the home page to start over. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Go To Home Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Bp9c":
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/dropdown.directive.ts ***!
  \*********************************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





class DropdownDirective {
    constructor(platformId, el, zone) {
        this.platformId = platformId;
        this.el = el;
        this.zone = zone;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.appDropdown = '';
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'mousedown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe((event) => {
                    if (!el.nativeElement.contains(event.target)) {
                        this.close();
                    }
                });
            });
        }
    }
    get isOpen() {
        return this.element.classList.contains(this.appDropdown);
    }
    get element() {
        return this.el.nativeElement;
    }
    toggle(force) {
        this.element.classList.toggle(this.appDropdown, force);
    }
    close() {
        this.toggle(false);
    }
    open() {
        this.toggle(true);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
DropdownDirective.ɵfac = function DropdownDirective_Factory(t) { return new (t || DropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
DropdownDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DropdownDirective, selectors: [["", "appDropdown", ""]], inputs: { appDropdown: "appDropdown" }, exportAs: ["appDropdown"] });


/***/ }),

/***/ "ChtM":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/currency.service.ts ***!
  \*****************************************************/
/*! exports provided: CurrencyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyService", function() { return CurrencyService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CurrencyService {
    constructor() {
        this.data = {
            options: {}
        };
        this.changesSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.changes$ = this.changesSubject$.asObservable();
    }
    get options() {
        return this.data.options;
    }
    set options(value) {
        this.data.options = value;
        this.changesSubject$.next(value);
    }
}
CurrencyService.ɵfac = function CurrencyService_Factory(t) { return new (t || CurrencyService)(); };
CurrencyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CurrencyService, factory: CurrencyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "DFQn":
/*!***************************************************!*\
  !*** ./src/app/components/root/root.component.ts ***!
  \***************************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/loading-bar/loading-bar.component */ "SFJx");
/* harmony import */ var _shared_components_quickview_quickview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/quickview/quickview.component */ "UBBk");
/* harmony import */ var _modules_mobile_components_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/mobile/components/mobile-menu/mobile-menu.component */ "5Gal");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _modules_mobile_components_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/mobile/components/mobile-header/mobile-header.component */ "Er3l");
/* harmony import */ var _modules_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/footer/footer.component */ "oC4s");
/* harmony import */ var _modules_header_components_dropcart_dropcart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modules/header/components/dropcart/dropcart.component */ "hmow");
/* harmony import */ var _modules_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modules/header/header.component */ "+LOj");










function RootComponent_app_header_dropcart_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-dropcart", 7);
} }
function RootComponent_header_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("layout", ctx_r1.headerLayout);
} }
class RootComponent {
    constructor(route) {
        this.route = route;
        this.route.data.subscribe(data => {
            this.headerLayout = data.headerLayout;
            this.dropcartType = data.dropcartType || 'dropdown';
        });
    }
}
RootComponent.ɵfac = function RootComponent_Factory(t) { return new (t || RootComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
RootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RootComponent, selectors: [["app-main"]], decls: 12, vars: 2, consts: [["type", "offcanvas", 4, "ngIf"], [1, "site"], [1, "site__header", "d-lg-none"], ["stickyMode", "pullToShow"], ["class", "site__header d-lg-block d-none", 4, "ngIf"], [1, "site__body"], [1, "site__footer"], ["type", "offcanvas"], [1, "site__header", "d-lg-block", "d-none"], [3, "layout"]], template: function RootComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-quickview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-mobile-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RootComponent_app_header_dropcart_3_Template, 1, 0, "app-header-dropcart", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-mobile-header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RootComponent_header_7_Template, 2, 1, "header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "footer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dropcartType === "offcanvas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerLayout);
    } }, directives: [_shared_components_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_2__["LoadingBarComponent"], _shared_components_quickview_quickview_component__WEBPACK_IMPORTED_MODULE_3__["QuickviewComponent"], _modules_mobile_components_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_4__["MobileMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _modules_mobile_components_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_6__["MobileHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _modules_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _modules_header_components_dropcart_dropcart_component__WEBPACK_IMPORTED_MODULE_8__["DropcartComponent"], _modules_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb290LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "DcSL":
/*!****************************************************************************!*\
  !*** ./src/app/pages/page-offcanvas-cart/page-offcanvas-cart.component.ts ***!
  \****************************************************************************/
/*! exports provided: PageOffcanvasCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageOffcanvasCartComponent", function() { return PageOffcanvasCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/root.service */ "imTr");
/* harmony import */ var _shared_services_offcanvas_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/offcanvas-cart.service */ "zCMj");
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/page-header/page-header.component */ "tgey");




const _c0 = function (a1) { return { label: "Home", url: a1 }; };
const _c1 = function () { return { label: "Offcanvas Cart", url: "" }; };
const _c2 = function (a0, a1) { return [a0, a1]; };
class PageOffcanvasCartComponent {
    constructor(root, offcanvasCart) {
        this.root = root;
        this.offcanvasCart = offcanvasCart;
    }
}
PageOffcanvasCartComponent.ɵfac = function PageOffcanvasCartComponent_Factory(t) { return new (t || PageOffcanvasCartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_1__["RootService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_offcanvas_cart_service__WEBPACK_IMPORTED_MODULE_2__["OffcanvasCartService"])); };
PageOffcanvasCartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageOffcanvasCartComponent, selectors: [["app-page-offcanvas-cart"]], decls: 7, vars: 8, consts: [[3, "header", "breadcrumbs"], [1, "block-empty__body"], [1, "block-empty__message"], [1, "block-empty__actions"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"]], template: function PageOffcanvasCartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Click on the button to open the offcanvas cart!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageOffcanvasCartComponent_Template_button_click_5_listener() { return ctx.offcanvasCart.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Open Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", "Offcanvas Cart")("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.root.home()), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1)));
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__["PageHeaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW9mZmNhbnZhcy1jYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "DeAh":
/*!****************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-aboutus/widget-aboutus.component.ts ***!
  \****************************************************************************/
/*! exports provided: WidgetAboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetAboutusComponent", function() { return WidgetAboutusComponent; });
/* harmony import */ var _data_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../data/theme */ "5at8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/social-links/social-links.component */ "6c6k");



class WidgetAboutusComponent {
    constructor() {
        this.theme = _data_theme__WEBPACK_IMPORTED_MODULE_0__["theme"];
    }
}
WidgetAboutusComponent.ɵfac = function WidgetAboutusComponent_Factory(t) { return new (t || WidgetAboutusComponent)(); };
WidgetAboutusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WidgetAboutusComponent, selectors: [["app-widget-aboutus"]], decls: 6, vars: 0, consts: [[1, "widget-aboutus", "widget"], [1, "widget__title"], [1, "widget-aboutus__text"], ["shape", "rounded", 1, "widget-aboutus__socials"]], template: function WidgetAboutusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "About Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-social-links", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_2__["SocialLinksComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXQtYWJvdXR1cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "E3db":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/product/product.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ "Xgv5");
/* harmony import */ var _services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/wishlist.service */ "aCp3");
/* harmony import */ var _services_compare_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/compare.service */ "eGMf");
/* harmony import */ var _services_root_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/root.service */ "imTr");







function ProductComponent_div_0_ng_container_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx_r1.product.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, ctx_r1.product.compareAtPrice));
} }
function ProductComponent_div_0_ng_container_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.product.price), " ");
} }
const _c0 = function (a0) { return { "btn-loading": a0 }; };
const _c1 = function () { return { type: "twitter", label: "Tweet" }; };
const _c2 = function (a1) { return ["facebook", a1, "pinterest"]; };
function ProductComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-product-gallery", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_div_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.addToWishlist(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_div_0_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.addToCompare(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-rating", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Write A Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Speed: 750 RPM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Power Source: Cordless-Electric");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Battery Cell Type: Lithium");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Voltage: 20 Volts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Battery Capacity: 2 Ah");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Availability: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "In Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Brand: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Wakita");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "SKU: 83690/32");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Availability: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "In Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ProductComponent_div_0_ng_container_52_Template, 8, 7, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ProductComponent_div_0_ng_container_53_Template, 3, 3, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "form", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Metal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Wood");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Plastic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "app-input-number", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_div_0_Template_button_click_96_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.addToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_div_0_Template_button_click_99_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.addToWishlist(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "app-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_div_0_Template_button_click_102_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.addToCompare(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "app-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Mounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Electrodes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Chainsaws");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "app-share-buttons", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](114, "absoluteUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](115, "absoluteUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("product product--layout--", ctx_r0.layout, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("productLayout", ctx_r0.layout)("images", ctx_r0.product.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx_r0.addingToWishlist));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c0, ctx_r0.addingToCompare));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.product.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.product.reviews, " Reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.product.compareAtPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.product.compareAtPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 1)("formControl", ctx_r0.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c0, ctx_r0.addingToCart));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c0, ctx_r0.addingToWishlist));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](35, _c0, ctx_r0.addingToCompare));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttons", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c1)))("pageUrl", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](114, 21, ctx_r0.root.product(ctx_r0.product), "angular"))("pageTitle", ctx_r0.product.name)("pageImage", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](115, 24, ctx_r0.product.images[0], "html"));
} }
class ProductComponent {
    constructor(platformId, cart, wishlist, compare, root) {
        this.platformId = platformId;
        this.cart = cart;
        this.wishlist = wishlist;
        this.compare = compare;
        this.root = root;
        this.quantity = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1);
        this.addingToCart = false;
        this.addingToWishlist = false;
        this.addingToCompare = false;
    }
    addToCart() {
        if (!this.addingToCart && this.product && this.quantity.value > 0) {
            this.addingToCart = true;
            this.cart.add(this.product, this.quantity.value).subscribe({ complete: () => this.addingToCart = false });
        }
    }
    addToWishlist() {
        if (!this.addingToWishlist && this.product) {
            this.addingToWishlist = true;
            this.wishlist.add(this.product).subscribe({ complete: () => this.addingToWishlist = false });
        }
    }
    addToCompare() {
        if (!this.addingToCompare && this.product) {
            this.addingToCompare = true;
            this.compare.add(this.product).subscribe({ complete: () => this.addingToCompare = false });
        }
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__["WishlistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_compare_service__WEBPACK_IMPORTED_MODULE_4__["CompareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_root_service__WEBPACK_IMPORTED_MODULE_5__["RootService"])); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], inputs: { layout: "layout", product: "product" }, decls: 1, vars: 1, consts: [[3, "class", 4, "ngIf"], [1, "product__content"], [1, "product__gallery"], [3, "productLayout", "images"], [1, "product__info"], [1, "product__wishlist-compare"], ["type", "button", "data-toggle", "tooltip", "data-placement", "right", "title", "Wishlist", "appClick", "", 1, "btn", "btn-sm", "btn-light", "btn-svg-icon", 3, "ngClass", "click"], ["name", "wishlist-16", "size", "16"], ["type", "button", "data-toggle", "tooltip", "data-placement", "right", "title", "Compare", "appClick", "", 1, "btn", "btn-sm", "btn-light", "btn-svg-icon", 3, "ngClass", "click"], ["name", "compare-16", "size", "16"], [1, "product__name"], [1, "product__rating"], [1, "product__rating-stars"], [3, "value"], [1, "product__rating-legend"], ["href", "", "appClick", ""], [1, "product__description"], [1, "product__features"], [1, "product__meta"], [1, "product__meta-availability"], [1, "text-success"], [1, "product__sidebar"], [1, "product__availability"], [1, "product__prices"], [4, "ngIf"], [1, "product__options"], [1, "form-group", "product__option"], [1, "product__option-label"], [1, "input-radio-color"], [1, "input-radio-color__list"], ["data-toggle", "tooltip", "title", "White", 1, "input-radio-color__item", "input-radio-color__item--white", 2, "color", "#fff"], ["type", "radio", "name", "color"], ["data-toggle", "tooltip", "title", "Yellow", 1, "input-radio-color__item", 2, "color", "#ffd333"], ["data-toggle", "tooltip", "title", "Red", 1, "input-radio-color__item", 2, "color", "#ff4040"], ["data-toggle", "tooltip", "title", "Blue", 1, "input-radio-color__item", "input-radio-color__item--disabled", 2, "color", "#4080ff"], ["type", "radio", "name", "color", "disabled", ""], [1, "input-radio-label"], [1, "input-radio-label__list"], ["type", "radio", "name", "material"], ["type", "radio", "name", "material", "disabled", ""], [1, "product__actions"], [1, "product__actions-item"], ["aria-label", "Quantity", "size", "lg", 1, "product__quantity", 3, "min", "formControl"], [1, "product__actions-item", "product__actions-item--addtocart"], ["type", "button", "appClick", "", 1, "btn", "btn-primary", "btn-lg", 3, "ngClass", "click"], [1, "product__actions-item", "product__actions-item--wishlist"], ["type", "button", "data-toggle", "tooltip", "title", "Wishlist", "appClick", "", 1, "btn", "btn-secondary", "btn-svg-icon", "btn-lg", 3, "ngClass", "click"], [1, "product__actions-item", "product__actions-item--compare"], ["type", "button", "data-toggle", "tooltip", "title", "Compare", "appClick", "", 1, "btn", "btn-secondary", "btn-svg-icon", "btn-lg", 3, "ngClass", "click"], [1, "product__footer"], [1, "product__tags", "tags"], [1, "tags__list"], [1, "product__share-buttons", 3, "buttons", "pageUrl", "pageTitle", "pageImage"], [1, "product__new-price"], [1, "product__old-price"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductComponent_div_0_Template, 116, 40, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "Er3l":
/*!************************************************************************************!*\
  !*** ./src/app/modules/mobile/components/mobile-header/mobile-header.component.ts ***!
  \************************************************************************************/
/*! exports provided: MobileHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileHeaderComponent", function() { return MobileHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_functions_rxjs_fromMatchMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/functions/rxjs/fromMatchMedia */ "41D5");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_services_mobile_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/mobile-menu.service */ "QFML");
/* harmony import */ var _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/wishlist.service */ "aCp3");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ "Xgv5");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ "0njA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/search/search.component */ "KPdS");
/* harmony import */ var _shared_directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/directives/dropdown.directive */ "Bp9c");














const _c0 = ["element"];
const _c1 = ["panelElement"];
const _c2 = function (a0) { return { "mobile-header--sticky": a0 }; };
class MobileHeaderComponent {
    constructor(platformId, menu, wishlist, cart, zone) {
        this.platformId = platformId;
        this.menu = menu;
        this.wishlist = wishlist;
        this.cart = cart;
        this.zone = zone;
        this.stickyMode = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.position = 'static';
        this.visibility = 'hidden';
        this.stuckFrom = null;
        this.staticFrom = null;
        this.scrollPosition = 0;
        this.scrollDistance = 0;
    }
    get element() {
        var _a;
        return (_a = this.elementRef) === null || _a === void 0 ? void 0 : _a.nativeElement;
    }
    get panelElement() {
        var _a;
        return (_a = this.panelElementRef) === null || _a === void 0 ? void 0 : _a.nativeElement;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngAfterViewInit() {
        if (this.stickyMode && Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            this.media = Object(_shared_functions_rxjs_fromMatchMedia__WEBPACK_IMPORTED_MODULE_3__["fromMatchMedia"])('(max-width: 991px)', false).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])({ bufferSize: 1, refCount: true }));
            this.media.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(media => this.onMediaChange(media));
        }
    }
    onScroll() {
        const scrollCurrentPosition = window.pageYOffset;
        const scrollDelta = scrollCurrentPosition - this.scrollPosition;
        // Resets the distance if the scroll changes direction.
        if ((scrollDelta < 0) !== (this.scrollDistance < 0)) {
            this.scrollDistance = 0;
        }
        const distanceToShow = 10; // in pixels
        const distanceToHide = 25; // in pixels
        this.scrollPosition = scrollCurrentPosition;
        this.scrollDistance += scrollDelta;
        if (this.position === 'static' && scrollCurrentPosition >= this.stuckFrom) {
            this.makeSticky();
        }
        if (this.position === 'sticky' && scrollCurrentPosition <= this.staticFrom) {
            this.makeStatic();
        }
        if (this.position === 'sticky') {
            if (this.scrollDistance <= -distanceToShow && this.visibility === 'hidden') {
                this.show();
            }
            if (this.scrollDistance >= distanceToHide && this.visibility === 'shown') {
                this.hide();
            }
        }
    }
    onMediaChange(media) {
        if (media.matches) {
            if (this.stickyMode === 'alwaysOnTop') {
                this.element.classList.add('mobile-header--stuck');
                this.element.classList.add('mobile-header--shown');
                this.panelElement.style.transition = 'none';
                this.panelElement.getBoundingClientRect(); // force reflow
                this.panelElement.style.transition = '';
                this.zone.run(() => this.position = 'sticky');
                this.zone.run(() => this.visibility = 'shown');
            }
            else {
                const takeUntil$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.media.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(x => !x.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()), this.destroy$);
                this.zone.runOutsideAngular(() => {
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'scroll', { passive: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(takeUntil$)).subscribe(() => this.onScroll());
                });
                this.calcBreakpoints();
                this.onScroll();
            }
        }
        else {
            this.makeStatic();
        }
    }
    calcBreakpoints() {
        const elementRect = this.element.getBoundingClientRect();
        this.staticFrom = elementRect.top + window.pageYOffset;
        this.stuckFrom = elementRect.top + elementRect.height + window.pageYOffset + 100;
    }
    makeStatic() {
        this.element.classList.remove('mobile-header--stuck');
        this.element.classList.remove('mobile-header--shown');
        this.panelElement.style.transition = 'none';
        this.panelElement.getBoundingClientRect(); // force reflow
        this.panelElement.style.transition = '';
        this.zone.run(() => this.position = 'static');
        this.zone.run(() => this.visibility = 'hidden');
    }
    makeSticky() {
        this.element.classList.add('mobile-header--stuck');
        this.panelElement.style.transition = 'none';
        this.panelElement.getBoundingClientRect(); // force reflow
        this.panelElement.style.transition = '';
        this.zone.run(() => this.position = 'sticky');
    }
    show() {
        this.element.classList.add('mobile-header--shown');
        this.zone.run(() => this.visibility = 'shown');
    }
    hide() {
        this.element.classList.remove('mobile-header--shown');
        this.zone.run(() => this.visibility = 'hidden');
    }
}
MobileHeaderComponent.ɵfac = function MobileHeaderComponent_Factory(t) { return new (t || MobileHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_mobile_menu_service__WEBPACK_IMPORTED_MODULE_5__["MobileMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_6__["WishlistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
MobileHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobileHeaderComponent, selectors: [["app-mobile-header"]], viewQuery: function MobileHeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.elementRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.panelElementRef = _t.first);
    } }, inputs: { stickyMode: "stickyMode" }, decls: 33, vars: 9, consts: [[1, "mobile-header", 3, "ngClass"], ["element", ""], [1, "mobile-header__panel"], ["panelElement", ""], [1, "container"], [1, "mobile-header__body"], [1, "mobile-header__menu-button", 3, "click"], ["name", "menu-18x14", "size", "18x14"], ["routerLink", "/home", 1, "mobile-header__logo"], ["xmlns", "http://www.w3.org/2000/svg", "width", "120px", "height", "20px"], ["d", "M118.5,20h-1.1c-0.6,0-1.2-0.4-1.4-1l-1.5-4h-6.1l-1.5,4c-0.2,0.6-0.8,1-1.4,1h-1.1c-1,0-1.8-1-1.4-2l1.1-3\n                                 l1.5-4l3.6-10c0.2-0.6,0.8-1,1.4-1h1.6c0.6,0,1.2,0.4,1.4,1l3.6,10l1.5,4l1.1,3C120.3,19,119.5,20,118.5,20z M111.5,6.6l-1.6,4.4\n                                 h3.2L111.5,6.6z M99.5,20h-1.4c-0.4,0-0.7-0.2-0.9-0.5L94,14l-2,3.5v1c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-17\n                                 C88,0.7,88.7,0,89.5,0h1C91.3,0,92,0.7,92,1.5v8L94,6l3.2-5.5C97.4,0.2,97.7,0,98.1,0h1.4c1.2,0,1.9,1.3,1.3,2.3L96.3,10l4.5,7.8\n                                 C101.4,18.8,100.7,20,99.5,20z M80.3,11.8L80,12.3v6.2c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-6.2l-0.3-0.5l-5.5-9.5\n                                 c-0.6-1,0.2-2.3,1.3-2.3h1.4c0.4,0,0.7,0.2,0.9,0.5L76,4.3l2,3.5l2-3.5l2.2-3.8C82.4,0.2,82.7,0,83.1,0h1.4c1.2,0,1.9,1.3,1.3,2.3\n                                 L80.3,11.8z M60,20c-5.5,0-10-4.5-10-10S54.5,0,60,0s10,4.5,10,10S65.5,20,60,20z M60,4c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6\n                                 S63.3,4,60,4z M47.8,17.8c0.6,1-0.2,2.3-1.3,2.3h-2L41,14h-4v4.5c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-17\n                                 C33,0.7,33.7,0,34.5,0H41c0.3,0,0.7,0,1,0.1c3.4,0.5,6,3.4,6,6.9c0,2.4-1.2,4.5-3.1,5.8L47.8,17.8z M42,4.2C41.7,4.1,41.3,4,41,4h-3\n                                 c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1h3c0.3,0,0.7-0.1,1-0.2c0.3-0.1,0.6-0.3,0.9-0.5C43.6,8.8,44,7.9,44,7C44,5.7,43.2,4.6,42,4.2z\n                                  M29.5,4H25v14.5c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5V4h-4.5C15.7,4,15,3.3,15,2.5v-1C15,0.7,15.7,0,16.5,0h13\n                                 C30.3,0,31,0.7,31,1.5v1C31,3.3,30.3,4,29.5,4z M6.5,20c-2.8,0-5.5-1.7-6.4-4c-0.4-1,0.3-2,1.3-2h1c0.5,0,0.9,0.3,1.2,0.7\n                                 c0.2,0.3,0.4,0.6,0.8,0.8C4.9,15.8,5.8,16,6.5,16c1.5,0,2.8-0.9,2.8-2c0-0.7-0.5-1.3-1.2-1.6C7.4,12,7,11,7.4,10.3l0.4-0.9\n                                 c0.4-0.7,1.2-1,1.8-0.6c0.6,0.3,1.2,0.7,1.6,1.2c1,1.1,1.7,2.5,1.7,4C13,17.3,10.1,20,6.5,20z M11.6,6h-1c-0.5,0-0.9-0.3-1.2-0.7\n                                 C9.2,4.9,8.9,4.7,8.6,4.5C8.1,4.2,7.2,4,6.5,4C5,4,3.7,4.9,3.7,6c0,0.7,0.5,1.3,1.2,1.6C5.6,8,6,9,5.6,9.7l-0.4,0.9\n                                 c-0.4,0.7-1.2,1-1.8,0.6c-0.6-0.3-1.2-0.7-1.6-1.2C0.6,8.9,0,7.5,0,6c0-3.3,2.9-6,6.5-6c2.8,0,5.5,1.7,6.4,4C13.3,4.9,12.6,6,11.6,6\n                                 z"], ["appDropdown", "mobile-header__search--open", "location", "mobile-header", 1, "mobile-header__search", 3, "closeButtonClick"], ["search", "search", "searchDropdown", "appDropdown"], [1, "mobile-header__indicators"], [1, "indicator", "indicator--mobile-search", "indicator--mobile", "d-md-none"], [1, "indicator__button", 3, "click"], [1, "indicator__area"], ["name", "search-20", "size", "20"], [1, "indicator", "indicator--mobile", "d-sm-flex", "d-none"], ["routerLink", "/wishlist", 1, "indicator__button"], ["name", "heart-20", "size", "20"], [1, "indicator__value"], [1, "indicator", "indicator--mobile"], ["routerLink", "/cart", 1, "indicator__button"], ["name", "cart-20", "size", "20"]], template: function MobileHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileHeaderComponent_Template_button_click_6_listener() { return ctx.menu.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-search", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeButtonClick", function MobileHeaderComponent_Template_app_search_closeButtonClick_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return _r3.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileHeaderComponent_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); _r3.open(); return _r2.inputElement.focus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx.stickyMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 3, ctx.wishlist.count$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 5, ctx.cart.quantity$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__["IconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"], _shared_directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__["DropdownDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2JpbGUtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "FYjP":
/*!************************************************************!*\
  !*** ./src/app/shared/components/alert/alert.component.ts ***!
  \************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/icon.component */ "0njA");




function AlertComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = ["*"];
class AlertComponent {
    constructor() {
        this.size = null;
        this.dismissible = false;
        this.type = 'info';
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.classAlert = true;
    }
    get classAlertLg() { return this.size === 'lg'; }
    get classAlertDismissible() { return this.dismissible; }
    get classAlertInfo() { return this.type === 'info'; }
    get classAlertPrimary() { return this.type === 'primary'; }
    get classAlertSecondary() { return this.type === 'secondary'; }
    get classAlertSuccess() { return this.type === 'success'; }
    get classAlertDanger() { return this.type === 'danger'; }
    get classAlertWarning() { return this.type === 'warning'; }
    onClose() {
        this.close.emit();
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["app-alert"]], hostVars: 18, hostBindings: function AlertComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("alert", ctx.classAlert)("alert-lg", ctx.classAlertLg)("alert-dismissible", ctx.classAlertDismissible)("alert-info", ctx.classAlertInfo)("alert-primary", ctx.classAlertPrimary)("alert-secondary", ctx.classAlertSecondary)("alert-success", ctx.classAlertSuccess)("alert-danger", ctx.classAlertDanger)("alert-warning", ctx.classAlertWarning);
    } }, inputs: { size: "size", dismissible: "dismissible", type: "type" }, outputs: { close: "close" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [["type", "button", "class", "close", "data-dismiss", "alert", "aria-label", "Close", 3, "click", 4, "ngIf"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["name", "cross-12", "size", "12"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlertComponent_button_1_Template, 2, 0, "button", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dismissible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_2__["IconComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWxlcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0oiLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Fc3L":
/*!***************************************************!*\
  !*** ./src/app/shared/services/header.service.ts ***!
  \***************************************************/
/*! exports provided: HeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderService", function() { return HeaderService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeaderService {
    constructor() {
        this.departmentsAreaValue = null;
        this.departmentsAreaSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.departmentsArea$ = this.departmentsAreaSubject.asObservable();
        this.navPanelPositionValue = 'static';
        this.navPanelPositionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.navPanelPositionState$ = this.navPanelPositionSubject.asObservable();
        this.navPanelVisibilityValue = 'hidden';
        this.navPanelVisibilitySubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.navPanelVisibility$ = this.navPanelVisibilitySubject.asObservable();
    }
    get departmentsArea() {
        return this.departmentsAreaValue;
    }
    set departmentsArea(value) {
        if (this.departmentsAreaValue !== value) {
            this.departmentsAreaValue = value;
            this.departmentsAreaSubject.next(value);
        }
    }
    get navPanelPosition() {
        return this.navPanelPositionValue;
    }
    set navPanelPosition(value) {
        if (this.navPanelPositionValue !== value) {
            this.navPanelPositionValue = value;
            this.navPanelPositionSubject.next(value);
        }
    }
    get navPanelVisibility() {
        return this.navPanelVisibilityValue;
    }
    set navPanelVisibility(value) {
        if (this.navPanelVisibilityValue !== value) {
            this.navPanelVisibilityValue = value;
            this.navPanelVisibilitySubject.next(value);
        }
    }
}
HeaderService.ɵfac = function HeaderService_Factory(t) { return new (t || HeaderService)(); };
HeaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HeaderService, factory: HeaderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "HgAd":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-categories/widget-categories.component.ts ***!
  \**********************************************************************************/
/*! exports provided: WidgetCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetCategoriesComponent", function() { return WidgetCategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/root.service */ "imTr");
/* harmony import */ var _shared_directives_collapse_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/directives/collapse.directive */ "0Qu3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/icon/icon.component */ "0njA");






function WidgetCategoriesComponent_li_4_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidgetCategoriesComponent_li_4_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r2.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WidgetCategoriesComponent_li_4_div_7_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r7.root.category(sub_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_r8.name);
} }
function WidgetCategoriesComponent_li_4_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WidgetCategoriesComponent_li_4_div_7_li_2_Template, 3, 2, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", category_r1.children);
} }
function WidgetCategoriesComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WidgetCategoriesComponent_li_4_button_6_Template, 1, 0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WidgetCategoriesComponent_li_4_div_7_Template, 3, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r0.root.category(category_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", category_r1.children == null ? null : category_r1.children.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", category_r1.children == null ? null : category_r1.children.length);
} }
class WidgetCategoriesComponent {
    constructor(root) {
        this.root = root;
        this.location = 'blog';
        this.categories = [];
    }
}
WidgetCategoriesComponent.ɵfac = function WidgetCategoriesComponent_Factory(t) { return new (t || WidgetCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_1__["RootService"])); };
WidgetCategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WidgetCategoriesComponent, selectors: [["app-widget-categories"]], inputs: { location: "location", categories: "categories" }, decls: 5, vars: 4, consts: [[1, "widget__title"], ["appCollapse", "", 1, "widget-categories__list"], ["class", "widget-categories__item", "appCollapseItem", "widget-categories__item--open", 4, "ngFor", "ngForOf"], ["appCollapseItem", "widget-categories__item--open", 1, "widget-categories__item"], ["collapse", "appCollapseItem"], [1, "widget-categories__row"], [3, "routerLink"], ["name", "arrow-rounded-right-6x9", "size", "6x9", 1, "widget-categories__arrow"], ["class", "widget-categories__expander", "type", "button", 3, "click", 4, "ngIf"], ["class", "widget-categories__subs", "appCollapseContent", "", 4, "ngIf"], ["type", "button", 1, "widget-categories__expander", 3, "click"], ["appCollapseContent", "", 1, "widget-categories__subs"], [4, "ngFor", "ngForOf"]], template: function WidgetCategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WidgetCategoriesComponent_li_4_Template, 8, 4, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("widget-categories widget-categories--location--", ctx.location, " widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_shared_directives_collapse_directive__WEBPACK_IMPORTED_MODULE_2__["CollapseDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_directives_collapse_directive__WEBPACK_IMPORTED_MODULE_2__["CollapseItemDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_directives_collapse_directive__WEBPACK_IMPORTED_MODULE_2__["CollapseContentDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXQtY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "JQhK":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/blocks/block-product-columns/block-product-columns.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: BlockProductColumnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockProductColumnsComponent", function() { return BlockProductColumnsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const _c0 = [[["app-block-product-columns-item"]]];
const _c1 = ["app-block-product-columns-item"];
class BlockProductColumnsComponent {
    constructor() { }
}
BlockProductColumnsComponent.ɵfac = function BlockProductColumnsComponent_Factory(t) { return new (t || BlockProductColumnsComponent)(); };
BlockProductColumnsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockProductColumnsComponent, selectors: [["app-block-product-columns"]], ngContentSelectors: _c1, decls: 4, vars: 0, consts: [[1, "block", "block-product-columns", "d-lg-block", "d-none"], [1, "container"], [1, "row"]], template: function BlockProductColumnsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1wcm9kdWN0LWNvbHVtbnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "K3QE":
/*!***********************************************!*\
  !*** ./src/app/shared/interfaces/category.ts ***!
  \***********************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
class Category {
}


/***/ }),

/***/ "KPdS":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/search/search.component.ts ***!
  \**************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _api_shop_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/shop.service */ "lFFw");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/cart.service */ "Xgv5");
/* harmony import */ var _services_root_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/root.service */ "imTr");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icon/icon.component */ "0njA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/currency-format.pipe */ "wGjQ");













const _c0 = ["input"];
function SearchComponent_select_2_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "option", 14);
} if (rf & 2) {
    const category_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r5.slug)("innerHTML", ctx_r4.getCategoryName(category_r5), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function SearchComponent_select_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function SearchComponent_select_2_Template_select_focus_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.closeSuggestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "All Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchComponent_select_2_option_3_Template, 1, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.categories);
} }
function SearchComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.closeButtonClick.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_li_11_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_li_11_div_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const product_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.addToCart(product_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-loading", ctx_r11.addedToCartProducts.includes(product_r10));
} }
function SearchComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_li_11_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.closeSuggestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SearchComponent_li_11_div_12_Template, 3, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r10 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r10.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r3.root.product(product_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r10.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("SKU: ", product_r10.sku, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, product_r10.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.location === "header");
} }
class SearchComponent {
    constructor(document, fb, elementRef, zone, shop, cart, root) {
        this.document = document;
        this.fb = fb;
        this.elementRef = elementRef;
        this.zone = zone;
        this.shop = shop;
        this.cart = cart;
        this.root = root;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.hasSuggestions = false;
        this.categories = [];
        this.suggestedProducts = [];
        this.addedToCartProducts = [];
        this.escape = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.classSearch = true;
        this.classSearchSuggestionsOpen = false;
    }
    get classSearchLocationHeader() { return this.location === 'header'; }
    get classSearchLocationIndicator() { return this.location === 'indicator'; }
    get classSearchLocationMobileHeader() { return this.location === 'mobile-header'; }
    get classSearchHasSuggestions() { return this.hasSuggestions; }
    get element() { return this.elementRef.nativeElement; }
    get inputElement() { return this.inputElementRef.nativeElement; }
    ngOnChanges(changes) {
        if (changes.location && this.location === 'header') {
            this.shop.getCategories(null, 1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$)).subscribe(categories => this.categories = this.getCategoriesWithDepth(categories));
        }
    }
    ngOnInit() {
        this.form = this.fb.group({
            category: ['all'],
            query: [''],
        });
        this.form.get('query').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["throttleTime"])(250, rxjs__WEBPACK_IMPORTED_MODULE_2__["asyncScheduler"], { leading: true, trailing: true }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(query => query.trim()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(query => {
            if (query) {
                const categorySlug = this.form.value.category !== 'all' ? this.form.value.category : null;
                return this.shop.getSuggestions(query, 5, categorySlug);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$)).subscribe(products => {
            this.hasSuggestions = products.length > 0;
            if (products.length > 0) {
                this.suggestedProducts = products;
            }
        });
        this.zone.runOutsideAngular(() => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.document, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$)).subscribe(event => {
                const activeElement = this.document.activeElement;
                // If the inner element still has focus, ignore the click.
                if (activeElement && activeElement.closest('.search') === this.element) {
                    return;
                }
                // Close suggestion if click performed outside of component.
                if (event.target instanceof HTMLElement && this.element !== event.target.closest('.search')) {
                    this.zone.run(() => this.closeSuggestion());
                }
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.element, 'focusout').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(10), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$)).subscribe(() => {
                if (this.document.activeElement === this.document.body) {
                    return;
                }
                // Close suggestions if the focus received an external element.
                if (this.document.activeElement && this.document.activeElement.closest('.search') !== this.element) {
                    this.zone.run(() => this.closeSuggestion());
                }
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    openSuggestion() {
        this.classSearchSuggestionsOpen = true;
    }
    closeSuggestion() {
        this.classSearchSuggestionsOpen = false;
    }
    getCategoryName(category) {
        return '&nbsp;'.repeat(category.depth * 4) + category.name;
    }
    addToCart(product) {
        if (this.addedToCartProducts.includes(product)) {
            return;
        }
        this.addedToCartProducts.push(product);
        this.cart.add(product, 1).subscribe({
            complete: () => {
                this.addedToCartProducts = this.addedToCartProducts.filter(eachProduct => eachProduct !== product);
            }
        });
    }
    getCategoriesWithDepth(categories, depth = 0) {
        return categories.reduce((acc, category) => [
            ...acc,
            Object.assign(Object.assign({}, category), { depth }),
            ...this.getCategoriesWithDepth(category.children || [], depth + 1),
        ], []);
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_shop_service__WEBPACK_IMPORTED_MODULE_5__["ShopService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_root_service__WEBPACK_IMPORTED_MODULE_7__["RootService"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], viewQuery: function SearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputElementRef = _t.first);
    } }, hostVars: 12, hostBindings: function SearchComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("search", ctx.classSearch)("search--location--header", ctx.classSearchLocationHeader)("search--location--indicator", ctx.classSearchLocationIndicator)("search--location--mobile-header", ctx.classSearchLocationMobileHeader)("search--has-suggestions", ctx.classSearchHasSuggestions)("search--suggestions-open", ctx.classSearchSuggestionsOpen);
    } }, inputs: { location: "location" }, outputs: { escape: "escape", closeButtonClick: "closeButtonClick" }, exportAs: ["search"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 12, vars: 7, consts: [[1, "search__body"], [1, "search__form", 3, "formGroup"], ["class", "search__categories", "aria-label", "Category", "formControlName", "category", 3, "focus", 4, "ngIf"], ["name", "search", "placeholder", "Search over 10,000 products", "aria-label", "Site search", "type", "text", "autocomplete", "off", "formControlName", "query", 1, "search__input", 3, "keydown.escape", "focus"], ["input", ""], ["type", "submit", 1, "search__button", "search__button--type--submit"], ["name", "search-20", "size", "20"], ["class", "search__button search__button--type--close", "type", "button", 3, "click", 4, "ngIf"], [1, "search__border"], [1, "suggestions__list"], ["class", "suggestions__item", 4, "ngFor", "ngForOf"], ["aria-label", "Category", "formControlName", "category", 1, "search__categories", 3, "focus"], ["value", "all"], [3, "value", "innerHTML", 4, "ngFor", "ngForOf"], [3, "value", "innerHTML"], ["type", "button", 1, "search__button", "search__button--type--close", 3, "click"], ["name", "cross-20", "size", "20"], [1, "suggestions__item"], [1, "suggestions__item-image", "product-image"], [1, "product-image__body"], ["alt", "", 1, "product-image__img", 3, "src"], [1, "suggestions__item-info"], [1, "suggestions__item-name", 3, "routerLink", "click"], [1, "suggestions__item-meta"], [1, "suggestions__item-price"], ["class", "suggestions__item-actions", 4, "ngIf"], [1, "suggestions__item-actions"], ["type", "button", "title", "Add to cart", 1, "btn", "btn-primary", "btn-sm", "btn-svg-icon", 3, "click"], ["name", "cart-16", "size", "16"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchComponent_select_2_Template, 4, 1, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.escape", function SearchComponent_Template_input_keydown_escape_3_listener() { return ctx.escape.next(); })("focus", function SearchComponent_Template_input_focus_3_listener() { return ctx.openSuggestion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SearchComponent_button_7_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SearchComponent_li_11_Template, 13, 8, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.location === "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.location === "mobile-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("search__suggestions suggestions suggestions--location--", ctx.location, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.suggestedProducts);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_8__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"]], pipes: [_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_10__["CurrencyFormatPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "KSSz":
/*!******************************************************!*\
  !*** ./src/app/shared/services/direction.service.ts ***!
  \******************************************************/
/*! exports provided: DirectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionService", function() { return DirectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class DirectionService {
    constructor(platformId) {
        this.platformId = platformId;
        this.direction = 'ltr';
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this.direction = getComputedStyle(document.body).direction;
        }
    }
    get value() {
        return this.direction;
    }
    set value(value) {
        this.direction = value;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            document.dir = this.direction;
        }
    }
    isLTR() {
        return this.value === 'ltr';
    }
    isRTL() {
        return this.value === 'rtl';
    }
}
DirectionService.ɵfac = function DirectionService_Factory(t) { return new (t || DirectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
DirectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DirectionService, factory: DirectionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "LdIM":
/*!*****************************************!*\
  !*** ./src/app/shared/helpers/color.ts ***!
  \*****************************************/
/*! exports provided: hexToRgb, luminance, contrast, colorType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return hexToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "luminance", function() { return luminance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contrast", function() { return contrast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorType", function() { return colorType; });
/**
 * https://medium.muz.li/the-science-of-color-contrast-an-expert-designers-guide-33e84c41d156
 * https://www.w3.org/TR/WCAG20-TECHS/G17.html
 * https://www.w3.org/TR/WCAG20/#relativeluminancedef
 */
function hexToRgb(hex) {
    if (!/^#(([A-Fa-f0-9]{3}){1,2})$/.test(hex)) {
        return null;
    }
    hex = hex.substr(1);
    let rgb;
    if (hex.length === 3) {
        rgb = hex.match(/./g).map(x => x + x);
    }
    else {
        rgb = hex.match(/.{2}/g);
    }
    return rgb.map(x => parseInt(x, 16));
}
function luminance(color) {
    let rgb = hexToRgb(color);
    if (!rgb) {
        return null;
    }
    rgb = rgb.map(x => x / 255).map(x => {
        if (x <= 0.03928) {
            return x / 12.92;
        }
        else {
            return Math.pow((x + 0.055) / 1.055, 2.4);
        }
    });
    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}
function contrast(color1, color2) {
    const l1 = luminance(color1);
    const l2 = luminance(color2);
    if (l1 === null || l2 === null) {
        return null;
    }
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}
const cache = {};
function colorType(color) {
    if (color in cache) {
        return cache[color];
    }
    const whiteContras = contrast(color, '#fff');
    const blackContras = contrast(color, '#000');
    let result;
    if (whiteContras === 1 && blackContras === 21) {
        result = 'white';
    }
    else if (whiteContras === 21 && blackContras === 1) {
        result = 'black';
    }
    else if (whiteContras >= 3 && blackContras < 10) {
        result = 'dark';
    }
    else {
        result = 'light';
    }
    return cache[color] = result;
}


/***/ }),

/***/ "LrmW":
/*!*************************************************!*\
  !*** ./src/app/modules/footer/footer.module.ts ***!
  \*************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "y1Wg");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.component */ "oC4s");
/* harmony import */ var _components_links_links_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/links/links.component */ "+uwT");
/* harmony import */ var _components_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/newsletter/newsletter.component */ "PyCx");
/* harmony import */ var _components_totop_totop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/totop/totop.component */ "v7nX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
// modules (angular)


// modules

// components






class FooterModule {
}
FooterModule.ɵfac = function FooterModule_Factory(t) { return new (t || FooterModule)(); };
FooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: FooterModule });
FooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            // modules
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](FooterModule, { declarations: [_components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__["ContactsComponent"],
        _footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _components_links_links_component__WEBPACK_IMPORTED_MODULE_5__["LinksComponent"],
        _components_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_6__["NewsletterComponent"],
        _components_totop_totop_component__WEBPACK_IMPORTED_MODULE_7__["TotopComponent"]], imports: [
        // modules (angular)
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        // modules
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]], exports: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]] }); })();


/***/ }),

/***/ "M4Y8":
/*!**************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-search/widget-search.component.ts ***!
  \**************************************************************************/
/*! exports provided: WidgetSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetSearchComponent", function() { return WidgetSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/icon/icon.component */ "0njA");



class WidgetSearchComponent {
    constructor() { }
}
WidgetSearchComponent.ɵfac = function WidgetSearchComponent_Factory(t) { return new (t || WidgetSearchComponent)(); };
WidgetSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WidgetSearchComponent, selectors: [["app-widget-search"]], decls: 5, vars: 0, consts: [[1, "widget-search"], [1, "widget-search__body"], ["placeholder", "Blog search...", "type", "text", "autocomplete", "off", "spellcheck", "false", 1, "widget-search__input"], ["type", "submit", 1, "widget-search__button"], ["name", "search-20", "size", "20"]], template: function WidgetSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__["IconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXQtc2VhcmNoLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "N4I/":
/*!**********************************************************************!*\
  !*** ./src/app/modules/header/components/topbar/topbar.component.ts ***!
  \**********************************************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_currency_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/currency.service */ "ChtM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/directives/dropdown.directive */ "Bp9c");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ "0njA");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu/menu.component */ "U6+l");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function TopbarComponent_li_38_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function TopbarComponent_li_38_Template_li_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r6.classList.add("menu__item--hover"); })("mouseleave", function TopbarComponent_li_38_Template_li_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r6.classList.remove("menu__item--hover"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarComponent_li_38_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const currency_r5 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29); ctx_r10.setCurrency(currency_r5); return _r1.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const currency_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", currency_r5.name, " ");
} }
function TopbarComponent_li_50_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function TopbarComponent_li_50_Template_li_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r12.classList.add("menu__item--hover"); })("mouseleave", function TopbarComponent_li_50_Template_li_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r12.classList.remove("menu__item--hover"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarComponent_li_50_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41); return _r3.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/images/languages/" + language_r11.image + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("srcset", "assets/images/languages/" + language_r11.image + ".png 1x," + "assets/images/languages/" + language_r11.image + "@2x.png 2x", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", language_r11.name, " ");
} }
const _c0 = function () { return { label: "Dashboard", url: "/account/dashboard" }; };
const _c1 = function () { return { label: "Edit Profile", url: "/account/profile" }; };
const _c2 = function () { return { label: "Order History", url: "/account/orders" }; };
const _c3 = function () { return { label: "Addresses", url: "/account/addresses" }; };
const _c4 = function () { return { label: "Password", url: "/account/password" }; };
const _c5 = function () { return { label: "Logout", url: "/account/login" }; };
const _c6 = function (a0, a1, a2, a3, a4, a5) { return [a0, a1, a2, a3, a4, a5]; };
class TopbarComponent {
    constructor(currencyService) {
        this.currencyService = currencyService;
        this.languages = [
            { name: 'English', image: 'language-1' },
            { name: 'French', image: 'language-2' },
            { name: 'German', image: 'language-3' },
            { name: 'Russian', image: 'language-4' },
            { name: 'Italian', image: 'language-5' }
        ];
        this.currencies = [
            { name: '€ Euro', url: '', code: 'EUR', symbol: '€' },
            { name: '£ Pound Sterling', url: '', code: 'GBP', symbol: '£' },
            { name: '$ US Dollar', url: '', code: 'USD', symbol: '$' },
            { name: '₽ Russian Ruble', url: '', code: 'RUB', symbol: '₽' }
        ];
    }
    setCurrency(currency) {
        this.currencyService.options = {
            code: currency.code,
            display: currency.symbol,
        };
    }
}
TopbarComponent.ɵfac = function TopbarComponent_Factory(t) { return new (t || TopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_currency_service__WEBPACK_IMPORTED_MODULE_1__["CurrencyService"])); };
TopbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopbarComponent, selectors: [["app-header-topbar"]], decls: 51, vars: 17, consts: [[1, "site-header__topbar", "topbar"], [1, "topbar__container", "container"], [1, "topbar__row"], [1, "topbar__item", "topbar__item--link"], ["routerLink", "/site/about-us", 1, "topbar-link"], ["routerLink", "/site/contact-us", 1, "topbar-link"], ["routerLink", "", 1, "topbar-link"], ["routerLink", "/shop/track-order", 1, "topbar-link"], ["routerLink", "/blog", 1, "topbar-link"], [1, "topbar__spring"], [1, "topbar__item"], ["appDropdown", "topbar-dropdown--opened", 1, "topbar-dropdown"], ["accountDropdown", "appDropdown"], ["type", "button", 1, "topbar-dropdown__btn", 3, "click"], ["name", "arrow-rounded-down-7x5", "size", "7x5"], [1, "topbar-dropdown__body"], ["layout", "topbar", 3, "items", "itemClick"], ["currencyDropdown", "appDropdown"], [1, "topbar__item-value"], [1, "menu", "menu--layout--topbar"], [1, "menu__list"], ["class", "menu__item", 3, "mouseover", "mouseleave", 4, "ngFor", "ngForOf"], ["languageDropdown", "appDropdown"], [1, "menu", "menu--layout--topbar", "menu--with-icons"], [1, "menu__item", 3, "mouseover", "mouseleave"], ["menuItem", ""], ["type", "button", 1, "menu__item-link", 3, "click"], [1, "menu__item-icon"], ["alt", "", 3, "src", "srcset"]], template: function TopbarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Store Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Track Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarComponent_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " My Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "app-header-menu", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemClick", function TopbarComponent_Template_app_header_menu_itemClick_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarComponent_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29); return _r1.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Currency: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, TopbarComponent_li_38_Template, 4, 1, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 11, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarComponent_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41); return _r3.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Language: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "EN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "app-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, TopbarComponent_li_50_Template, 6, 3, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](10, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c5)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currencyService.options.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currencies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_3__["DropdownDirective"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3BiYXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "NhFE":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/pagination/pagination.component.ts ***!
  \**********************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/icon.component */ "0njA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function PaginationComponent_li_4_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PaginationComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_4_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const page_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.setPage(page_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaginationComponent_li_4_span_3_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", page_r1 === ctx_r0.current);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", page_r1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", page_r1 === ctx_r0.current);
} }
class PaginationComponent {
    constructor() {
        this.siblings = 1;
        this.current = 1;
        this.total = 1;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pages = [];
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    ngOnInit() {
        this.calc();
    }
    ngOnChanges(changes) {
        this.calc();
    }
    setPage(value, emitEvent = true) {
        this.onTouched();
        if (value < 1 || value > this.total || value === this.current) {
            return;
        }
        if (this.current !== value) {
            this.onChange(value);
        }
        this.current = value;
        this.calc();
        if (emitEvent) {
            this.pageChange.emit(this.current);
        }
    }
    trackByFn(index) {
        return index;
    }
    calc() {
        const min = Math.max(1, this.current - this.siblings - Math.max(0, this.siblings - this.total + this.current));
        const max = Math.min(this.total, min + this.siblings * 2);
        this.pages = [];
        for (let i = min; i <= max; i++) {
            this.pages.push(i);
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(obj) {
        if (typeof obj === 'number') {
            this.setPage(obj, false);
        }
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(); };
PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["app-pagination"]], inputs: { siblings: "siblings", current: "current", total: "total" }, outputs: { pageChange: "pageChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => PaginationComponent),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 6, consts: [[1, "pagination", "justify-content-center"], [1, "page-item"], ["aria-label", "Previous", 1, "page-link", "page-link--with-arrow", 3, "click"], ["aria-hidden", "true", "name", "arrow-rounded-left-8x13", "size", "8x13", 1, "page-link__arrow", "page-link__arrow--left"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["aria-label", "Next", 1, "page-link", "page-link--with-arrow", 3, "click"], ["aria-hidden", "true", "name", "arrow-rounded-right-8x13", "size", "8x13", 1, "page-link__arrow", "page-link__arrow--right"], [1, "page-link", 3, "click"], ["class", "sr-only", 4, "ngIf"], [1, "sr-only"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_a_click_2_listener() { return ctx.setPage(ctx.current - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginationComponent_li_4_Template, 4, 4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_a_click_6_listener() { return ctx.setPage(ctx.current + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.current <= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages)("ngForTrackBy", ctx.trackByFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.current >= ctx.total);
    } }, directives: [_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "ObXf":
/*!*********************************************************************!*\
  !*** ./src/app/modules/blocks/block-posts/block-posts.component.ts ***!
  \*********************************************************************/
/*! exports provided: BlockPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPostsComponent", function() { return BlockPostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/direction.service */ "KSSz");
/* harmony import */ var _components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/block-header/block-header.component */ "Q73p");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _shared_directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/directives/owl-prevent-click.directive */ "0nhT");
/* harmony import */ var _shared_components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/post-card/post-card.component */ "37O+");









const _c0 = ["container"];
function BlockPostsComponent_div_1_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post-card", 9);
} if (rf & 2) {
    const post_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r4);
} }
function BlockPostsComponent_div_1_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BlockPostsComponent_div_1_6_ng_template_0_Template, 1, 1, "ng-template", 8);
} }
function BlockPostsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-block-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("prev", function BlockPostsComponent_div_1_Template_app_block_header_prev_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r2.prev(); })("next", function BlockPostsComponent_div_1_Template_app_block_header_next_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r2.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "owl-carousel-o", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BlockPostsComponent_div_1_6_Template, 1, 0, undefined, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx_r0.header)("arrows", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.carouselOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.posts);
} }
class BlockPostsComponent {
    constructor(platformId, direction) {
        this.platformId = platformId;
        this.direction = direction;
        this.header = '';
        this.layout = 'list-sm';
        this.posts = [];
        this.showCarousel = true;
        this.carouselDefaultOptions = {
            margin: 30,
            nav: false,
            dots: false,
            loop: true,
            rtl: this.direction.isRTL()
        };
        this.carouselOptionsByLayout = {
            'grid-nl': {
                responsive: {
                    930: { items: 3 },
                    690: { items: 2 },
                    0: { items: 1 }
                }
            },
            'list-sm': {
                responsive: {
                    930: { items: 2 },
                    0: { items: 1 }
                }
            }
        };
    }
    get carouselOptions() {
        return Object.assign({}, this.carouselDefaultOptions, this.carouselOptionsByLayout[this.layout]);
    }
    ngAfterViewInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            const container = this.container.nativeElement;
            const containerWidth = container.getBoundingClientRect().width;
            window.addEventListener('load', () => {
                const newContainerWidth = container.getBoundingClientRect().width;
                if (containerWidth !== newContainerWidth) {
                    this.showCarousel = false;
                    setTimeout(() => this.showCarousel = true, 0);
                }
            });
        }
    }
}
BlockPostsComponent.ɵfac = function BlockPostsComponent_Factory(t) { return new (t || BlockPostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_direction_service__WEBPACK_IMPORTED_MODULE_2__["DirectionService"])); };
BlockPostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockPostsComponent, selectors: [["app-block-posts"]], viewQuery: function BlockPostsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, inputs: { header: "header", layout: "layout", posts: "posts" }, decls: 2, vars: 5, consts: [["class", "container", 4, "ngIf"], [1, "container"], [3, "header", "arrows", "prev", "next"], [1, "block-posts__slider"], ["container", ""], ["appOwlPreventClick", "", 3, "options"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [3, "post"]], template: function BlockPostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlockPostsComponent_div_1_Template, 7, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("block block-posts block-posts--layout--", ctx.layout, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-layout", ctx.layout);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCarousel);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_3__["BlockHeaderComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"], _shared_directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_5__["OwlPreventClickDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselSlideDirective"], _shared_components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_6__["PostCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1wb3N0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "OrkT":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/touch-click.directive.ts ***!
  \************************************************************/
/*! exports provided: TouchClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchClickDirective", function() { return TouchClickDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _functions_rxjs_fromTouchClick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/rxjs/fromTouchClick */ "cZB+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






class TouchClickDirective {
    constructor(platformId, elementRef, zone) {
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.zone = zone;
        this.appTouchClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    get element() {
        return this.elementRef.nativeElement;
    }
    ngOnInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                Object(_functions_rxjs_fromTouchClick__WEBPACK_IMPORTED_MODULE_3__["fromTouchClick"])(this.element).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(event => {
                    this.zone.run(() => this.appTouchClick.emit(event));
                });
            });
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
TouchClickDirective.ɵfac = function TouchClickDirective_Factory(t) { return new (t || TouchClickDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
TouchClickDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TouchClickDirective, selectors: [["", "appTouchClick", ""]], outputs: { appTouchClick: "appTouchClick" } });


/***/ }),

/***/ "Oz7e":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/mobile/components/mobile-links/mobile-links.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MobileLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileLinksComponent", function() { return MobileLinksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_directives_collapse_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/directives/collapse.directive */ "0Qu3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ "0njA");






function MobileLinksComponent_li_1_div_1_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileLinksComponent_li_1_div_1_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const link_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onItemClick(link_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", link_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r1.label);
} }
function MobileLinksComponent_li_1_div_1_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileLinksComponent_li_1_div_1_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const link_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onItemClick(link_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r1.label);
} }
function MobileLinksComponent_li_1_div_1_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileLinksComponent_li_1_div_1_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r4.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MobileLinksComponent_li_1_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-mobile-links", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemClick", function MobileLinksComponent_li_1_div_1_div_6_Template_app_mobile_links_itemClick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r19.itemClick.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("links", link_r1.children)("level", ctx_r8.level + 1);
} }
function MobileLinksComponent_li_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MobileLinksComponent_li_1_div_1_a_3_Template, 2, 2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MobileLinksComponent_li_1_div_1_a_4_Template, 2, 1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MobileLinksComponent_li_1_div_1_button_5_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MobileLinksComponent_li_1_div_1_div_6_Template, 2, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r1.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r1.type !== "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r1.children == null ? null : link_r1.children.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r1.children == null ? null : link_r1.children.length);
} }
function MobileLinksComponent_li_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 17);
} }
const _c0 = function () { return ["link", "button"]; };
function MobileLinksComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MobileLinksComponent_li_1_div_1_Template, 7, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MobileLinksComponent_li_1_div_2_Template, 1, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0).includes(link_r1.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r1.type === "divider");
} }
class MobileLinksComponent {
    constructor() {
        this.links = [];
        this.level = 0;
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onItemClick(item) {
        this.itemClick.emit(item);
    }
}
MobileLinksComponent.ɵfac = function MobileLinksComponent_Factory(t) { return new (t || MobileLinksComponent)(); };
MobileLinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobileLinksComponent, selectors: [["app-mobile-links"]], inputs: { links: "links", level: "level" }, outputs: { itemClick: "itemClick" }, decls: 2, vars: 4, consts: [["appCollapse", ""], [4, "ngFor", "ngForOf"], ["class", "mobile-links__item", "appCollapseItem", "mobile-links__item--open", 4, "ngIf"], ["class", "mobile-links__divider", 4, "ngIf"], ["appCollapseItem", "mobile-links__item--open", 1, "mobile-links__item"], ["item", "appCollapseItem"], [1, "mobile-links__item-title"], ["class", "mobile-links__item-link", 3, "routerLink", "click", 4, "ngIf"], ["class", "mobile-links__item-link", 3, "click", 4, "ngIf"], ["class", "mobile-links__item-toggle", "type", "button", 3, "click", 4, "ngIf"], ["class", "mobile-links__item-sub-links", "appCollapseContent", "", 4, "ngIf"], [1, "mobile-links__item-link", 3, "routerLink", "click"], [1, "mobile-links__item-link", 3, "click"], ["type", "button", 1, "mobile-links__item-toggle", 3, "click"], ["name", "arrow-rounded-down-12x7", "size", "12x7", 1, "mobile-links__item-arrow"], ["appCollapseContent", "", 1, "mobile-links__item-sub-links"], [3, "links", "level", "itemClick"], [1, "mobile-links__divider"]], template: function MobileLinksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MobileLinksComponent_li_1_Template, 3, 3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("mobile-links mobile-links--level--", ctx.level, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
    } }, directives: [_shared_directives_collapse_directive__WEBPACK_IMPORTED_MODULE_1__["CollapseDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_directives_collapse_directive__WEBPACK_IMPORTED_MODULE_1__["CollapseItemDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"], _shared_directives_collapse_directive__WEBPACK_IMPORTED_MODULE_1__["CollapseContentDirective"], MobileLinksComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2JpbGUtbGlua3MuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var ngx_red_zoom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-red-zoom */ "bC/r");
/* harmony import */ var _directives_click_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/click.directive */ "x5hD");
/* harmony import */ var _directives_collapse_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/collapse.directive */ "0Qu3");
/* harmony import */ var _directives_departments_area_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/departments-area.directive */ "x2Uf");
/* harmony import */ var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/dropdown.directive */ "Bp9c");
/* harmony import */ var _directives_fake_slides_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/fake-slides.directive */ "V07N");
/* harmony import */ var _directives_outside_touch_click_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/outside-touch-click.directive */ "45f6");
/* harmony import */ var _directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/owl-prevent-click.directive */ "0nhT");
/* harmony import */ var _directives_touch_click_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/touch-click.directive */ "OrkT");
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/alert/alert.component */ "FYjP");
/* harmony import */ var _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/icon/icon.component */ "0njA");
/* harmony import */ var _components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/input-number/input-number.component */ "lKnz");
/* harmony import */ var _components_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/loading-bar/loading-bar.component */ "SFJx");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/page-header/page-header.component */ "tgey");
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pagination/pagination.component */ "NhFE");
/* harmony import */ var _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/post-card/post-card.component */ "37O+");
/* harmony import */ var _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/product-card/product-card.component */ "nS2t");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/product/product.component */ "E3db");
/* harmony import */ var _components_quickview_quickview_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/quickview/quickview.component */ "UBBk");
/* harmony import */ var _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/rating/rating.component */ "gf8J");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/search/search.component */ "KPdS");
/* harmony import */ var _components_share_buttons_share_buttons_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/share-buttons/share-buttons.component */ "g+fx");
/* harmony import */ var _components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/social-links/social-links.component */ "6c6k");
/* harmony import */ var _pipes_absolute_url_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pipes/absolute-url.pipe */ "rZ2s");
/* harmony import */ var _pipes_color_type_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pipes/color-type.pipe */ "BD8r");
/* harmony import */ var _pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pipes/currency-format.pipe */ "wGjQ");
/* harmony import */ var _components_product_gallery_product_gallery_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/product-gallery/product-gallery.component */ "h4zV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/core */ "fXoL");
// modules (angular)




// modules (third-party)



// directives








// components














// pipes








class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineInjector"]({ imports: [[
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            // modules (third-party)
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
            ngx_red_zoom__WEBPACK_IMPORTED_MODULE_6__["RedZoomModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [
        // directives
        _directives_click_directive__WEBPACK_IMPORTED_MODULE_7__["ClickDirective"],
        _directives_collapse_directive__WEBPACK_IMPORTED_MODULE_8__["CollapseContentDirective"],
        _directives_collapse_directive__WEBPACK_IMPORTED_MODULE_8__["CollapseDirective"],
        _directives_collapse_directive__WEBPACK_IMPORTED_MODULE_8__["CollapseItemDirective"],
        _directives_departments_area_directive__WEBPACK_IMPORTED_MODULE_9__["DepartmentsAreaDirective"],
        _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_10__["DropdownDirective"],
        _directives_fake_slides_directive__WEBPACK_IMPORTED_MODULE_11__["FakeSlidesDirective"],
        _directives_outside_touch_click_directive__WEBPACK_IMPORTED_MODULE_12__["OutsideTouchClickDirective"],
        _directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_13__["OwlPreventClickDirective"],
        _directives_touch_click_directive__WEBPACK_IMPORTED_MODULE_14__["TouchClickDirective"],
        // components
        _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_15__["AlertComponent"],
        _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_16__["IconComponent"],
        _components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_17__["InputNumberComponent"],
        _components_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_18__["LoadingBarComponent"],
        _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_19__["PageHeaderComponent"],
        _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_20__["PaginationComponent"],
        _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_21__["PostCardComponent"],
        _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_22__["ProductCardComponent"],
        _components_product_product_component__WEBPACK_IMPORTED_MODULE_23__["ProductComponent"],
        _components_quickview_quickview_component__WEBPACK_IMPORTED_MODULE_24__["QuickviewComponent"],
        _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_25__["RatingComponent"],
        _components_search_search_component__WEBPACK_IMPORTED_MODULE_26__["SearchComponent"],
        _components_share_buttons_share_buttons_component__WEBPACK_IMPORTED_MODULE_27__["ShareButtonsComponent"],
        _components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_28__["SocialLinksComponent"],
        // pipes
        _pipes_absolute_url_pipe__WEBPACK_IMPORTED_MODULE_29__["AbsoluteUrlPipe"],
        _pipes_color_type_pipe__WEBPACK_IMPORTED_MODULE_30__["ColorTypePipe"],
        _pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_31__["CurrencyFormatPipe"],
        _components_product_gallery_product_gallery_component__WEBPACK_IMPORTED_MODULE_32__["ProductGalleryComponent"]], imports: [
        // modules (angular)
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        // modules (third-party)
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"], ngx_red_zoom__WEBPACK_IMPORTED_MODULE_6__["RedZoomModule"]], exports: [
        // directives
        _directives_click_directive__WEBPACK_IMPORTED_MODULE_7__["ClickDirective"],
        _directives_collapse_directive__WEBPACK_IMPORTED_MODULE_8__["CollapseContentDirective"],
        _directives_collapse_directive__WEBPACK_IMPORTED_MODULE_8__["CollapseDirective"],
        _directives_collapse_directive__WEBPACK_IMPORTED_MODULE_8__["CollapseItemDirective"],
        _directives_departments_area_directive__WEBPACK_IMPORTED_MODULE_9__["DepartmentsAreaDirective"],
        _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_10__["DropdownDirective"],
        _directives_fake_slides_directive__WEBPACK_IMPORTED_MODULE_11__["FakeSlidesDirective"],
        _directives_outside_touch_click_directive__WEBPACK_IMPORTED_MODULE_12__["OutsideTouchClickDirective"],
        _directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_13__["OwlPreventClickDirective"],
        _directives_touch_click_directive__WEBPACK_IMPORTED_MODULE_14__["TouchClickDirective"],
        // components
        _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_15__["AlertComponent"],
        _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_16__["IconComponent"],
        _components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_17__["InputNumberComponent"],
        _components_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_18__["LoadingBarComponent"],
        _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_19__["PageHeaderComponent"],
        _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_20__["PaginationComponent"],
        _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_21__["PostCardComponent"],
        _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_22__["ProductCardComponent"],
        _components_product_product_component__WEBPACK_IMPORTED_MODULE_23__["ProductComponent"],
        _components_quickview_quickview_component__WEBPACK_IMPORTED_MODULE_24__["QuickviewComponent"],
        _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_25__["RatingComponent"],
        _components_search_search_component__WEBPACK_IMPORTED_MODULE_26__["SearchComponent"],
        _components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_28__["SocialLinksComponent"],
        // pipes
        _pipes_absolute_url_pipe__WEBPACK_IMPORTED_MODULE_29__["AbsoluteUrlPipe"],
        _pipes_color_type_pipe__WEBPACK_IMPORTED_MODULE_30__["ColorTypePipe"],
        _pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_31__["CurrencyFormatPipe"],
        _components_share_buttons_share_buttons_component__WEBPACK_IMPORTED_MODULE_27__["ShareButtonsComponent"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵsetComponentScope"](_components_product_product_component__WEBPACK_IMPORTED_MODULE_23__["ProductComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _components_product_gallery_product_gallery_component__WEBPACK_IMPORTED_MODULE_32__["ProductGalleryComponent"],
    // directives
    _directives_click_directive__WEBPACK_IMPORTED_MODULE_7__["ClickDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_16__["IconComponent"],
    _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_25__["RatingComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_17__["InputNumberComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _components_share_buttons_share_buttons_component__WEBPACK_IMPORTED_MODULE_27__["ShareButtonsComponent"]], [_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_31__["CurrencyFormatPipe"],
    // pipes
    _pipes_absolute_url_pipe__WEBPACK_IMPORTED_MODULE_29__["AbsoluteUrlPipe"]]);


/***/ }),

/***/ "PbLj":
/*!**********************************************!*\
  !*** ./src/app/shared/interfaces/product.ts ***!
  \**********************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
}


/***/ }),

/***/ "PhZW":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/header/components/account-menu/account-menu.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AccountMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountMenuComponent", function() { return AccountMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_interfaces_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/interfaces/login */ "UAsX");
/* harmony import */ var src_app_shared_BL_login_bl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/BL/login.bl */ "STYi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







function AccountMenuComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Log In to Your Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountMenuComponent_form_1_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.logindetails.customerEmail = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountMenuComponent_form_1_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.logindetails.customerPassword = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Forgot?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountMenuComponent_form_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.get_login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountMenuComponent_form_1_Template_a_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.closeMenu.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Create An Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.logindetails.customerEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.logindetails.customerPassword);
} }
function AccountMenuComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountMenuComponent_div_2_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.closeMenu.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountMenuComponent_div_2_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.closeMenu.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Edit Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountMenuComponent_div_2_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.closeMenu.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Order History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountMenuComponent_div_2_Template_a_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.closeMenu.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Addresses");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountMenuComponent_div_2_Template_a_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.closeMenu.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountMenuComponent_div_2_Template_a_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r13.logout(); return ctx_r13.closeMenu.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.logindetails.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.logindetails.customerEmail);
} }
class AccountMenuComponent {
    constructor(login_bl_obj) {
        this.login_bl_obj = login_bl_obj;
        this.closeMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.logindetails = new src_app_shared_interfaces_login__WEBPACK_IMPORTED_MODULE_1__["login"]();
        this.message = "message to be written";
        this.message = "";
    }
    ngOnInit() {
        if (sessionStorage.getItem("pkey"))
            this.logindetails.customerId = Number(sessionStorage.getItem("pkey"));
        if (sessionStorage.getItem("Email"))
            this.logindetails.customerEmail = sessionStorage.getItem("Email");
        if (sessionStorage.getItem("Name"))
            this.logindetails.customerName = sessionStorage.getItem("Name");
        if (sessionStorage.getItem("Email"))
            this.logindetails.customerEmail = sessionStorage.getItem("Email");
    }
    ;
    // func for get login details
    get_login() {
        console.log("in login page component...");
        this.login_bl_obj.get_login(this.logindetails).then(u => {
            if (u.status) {
                this.logindetails = u.returnValue;
            }
            alert(u.message);
        });
    }
    logout() {
        sessionStorage.clear();
        this.closeMenu.emit();
    }
}
AccountMenuComponent.ɵfac = function AccountMenuComponent_Factory(t) { return new (t || AccountMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_BL_login_bl__WEBPACK_IMPORTED_MODULE_2__["loginbl"])); };
AccountMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountMenuComponent, selectors: [["app-account-menu"]], outputs: { closeMenu: "closeMenu", logindetails: "logindetails" }, decls: 3, vars: 2, consts: [[1, "account-menu"], ["class", "account-menu__form", 4, "ngIf"], [4, "ngIf"], [1, "account-menu__form"], [1, "account-menu__form-title"], [1, "form-group"], ["for", "header-signin-email", 1, "sr-only"], ["id", "header-signin-email", "type", "email", "placeholder", "Email address", "name", "customerEmail", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["for", "header-signin-password", 1, "sr-only"], [1, "account-menu__form-forgot"], ["id", "header-signin-password", "type", "password", "placeholder", "Password", "name", "customerPassword", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["href", "", 1, "account-menu__form-forgot-link"], [1, "form-group", "account-menu__form-button"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "account-menu__form-link"], ["routerLink", "/account/login", 3, "click"], [1, "account-menu__divider"], ["routerLink", "/account/dashboard", 1, "account-menu__user", 3, "click"], [1, "account-menu__user-avatar"], ["src", "assets/images/avatars/avatar-3.jpg", "alt", ""], [1, "account-menu__user-info"], [1, "account-menu__user-name"], [1, "account-menu__user-email"], [1, "account-menu__links"], ["routerLink", "/account/profile", 3, "click"], ["routerLink", "/account/orders", 3, "click"], ["routerLink", "/account/addresses", 3, "click"], ["routerLink", "/account/password", 3, "click"], ["routerLink", "", 3, "click"]], template: function AccountMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountMenuComponent_form_1_Template, 20, 2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountMenuComponent_div_2_Template, 29, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logindetails.customerId == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logindetails.customerId > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "PyCx":
/*!******************************************************************************!*\
  !*** ./src/app/modules/footer/components/newsletter/newsletter.component.ts ***!
  \******************************************************************************/
/*! exports provided: NewsletterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterComponent", function() { return NewsletterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/social-links/social-links.component */ "6c6k");


class NewsletterComponent {
    constructor() { }
}
NewsletterComponent.ɵfac = function NewsletterComponent_Factory(t) { return new (t || NewsletterComponent)(); };
NewsletterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsletterComponent, selectors: [["app-footer-newsletter"]], decls: 14, vars: 0, consts: [[1, "footer-newsletter"], [1, "footer-newsletter__title"], [1, "footer-newsletter__text"], ["action", "", 1, "footer-newsletter__form"], ["for", "footer-newsletter-address", 1, "sr-only"], ["type", "text", "id", "footer-newsletter-address", "placeholder", "Email Address...", 1, "footer-newsletter__form-input", "form-control"], [1, "footer-newsletter__form-button", "btn", "btn-primary"], [1, "footer-newsletter__text", "footer-newsletter__text--social"], ["shape", "circle", 1, "footer-newsletter__social-links"]], template: function NewsletterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Praesent pellentesque volutpat ex, vitae auctor lorem pulvinar mollis felis at lacinia. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Follow us on social networks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-social-links", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_1__["SocialLinksComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdzbGV0dGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "Q73p":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/blocks/components/block-header/block-header.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BlockHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockHeaderComponent", function() { return BlockHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ "0njA");




const _c0 = function (a0) { return { "block-header__group--active": a0 }; };
function BlockHeaderComponent_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlockHeaderComponent_ul_4_li_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const group_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.setGroup(group_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, group_r3.current));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r3.name);
} }
function BlockHeaderComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlockHeaderComponent_ul_4_li_1_Template, 3, 4, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.groups);
} }
function BlockHeaderComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlockHeaderComponent_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.prev.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlockHeaderComponent_div_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.next.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class BlockHeaderComponent {
    constructor() {
        this.arrows = false;
        this.groups = [];
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.prev = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.groupChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    setGroup(group) {
        this.groups.forEach(g => g.current = g === group);
        this.groupChange.emit(group);
    }
}
BlockHeaderComponent.ɵfac = function BlockHeaderComponent_Factory(t) { return new (t || BlockHeaderComponent)(); };
BlockHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockHeaderComponent, selectors: [["app-block-header"]], inputs: { header: "header", arrows: "arrows", groups: "groups" }, outputs: { next: "next", prev: "prev", groupChange: "groupChange" }, decls: 6, vars: 3, consts: [[1, "block-header"], [1, "block-header__title"], [1, "block-header__divider"], ["class", "block-header__groups-list", 4, "ngIf"], ["class", "block-header__arrows-list", 4, "ngIf"], [1, "block-header__groups-list"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "block-header__group", 3, "ngClass", "click"], [1, "block-header__arrows-list"], ["type", "button", 1, "block-header__arrow", "block-header__arrow--left", 3, "click"], ["name", "arrow-rounded-left-7x11", "size", "7x11"], ["type", "button", 1, "block-header__arrow", "block-header__arrow--right", 3, "click"], ["name", "arrow-rounded-right-7x11", "size", "7x11"]], template: function BlockHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BlockHeaderComponent_ul_4_Template, 2, 1, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BlockHeaderComponent_div_5_Template, 5, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.groups == null ? null : ctx.groups.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.arrows);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__["IconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "QFML":
/*!********************************************************!*\
  !*** ./src/app/shared/services/mobile-menu.service.ts ***!
  \********************************************************/
/*! exports provided: MobileMenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMenuService", function() { return MobileMenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class MobileMenuService {
    constructor(platformId) {
        this.platformId = platformId;
        this.openSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isOpen$ = this.openSubject$.asObservable();
    }
    open() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            const bodyWidth = document.body.offsetWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = (document.body.offsetWidth - bodyWidth) + 'px';
            this.openSubject$.next(true);
        }
    }
    close() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '';
            this.openSubject$.next(false);
        }
    }
    toggle() {
        this.openSubject$.next(!this.openSubject$.value);
    }
}
MobileMenuService.ɵfac = function MobileMenuService_Factory(t) { return new (t || MobileMenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
MobileMenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MobileMenuService, factory: MobileMenuService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "SFJx":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/loading-bar/loading-bar.component.ts ***!
  \************************************************************************/
/*! exports provided: LoadingBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingBarComponent", function() { return LoadingBarComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const _c0 = ["bar"];
class LoadingBarComponent {
    constructor(router, zone) {
        this.router = router;
        this.zone = zone;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    get element() {
        return this.bar.nativeElement;
    }
    ngAfterViewInit() {
        this.zone.runOutsideAngular(() => {
            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(event => {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationStart"]) {
                    this.element.classList.remove('loading-bar--start', 'loading-bar--complete', 'loading-bar--reset');
                    this.element.getBoundingClientRect(); // force reflow
                    this.element.classList.add('loading-bar--start');
                }
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationError"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationCancel"]) {
                    if (this.element.classList.contains('loading-bar--start')) {
                        this.element.classList.remove('loading-bar--start');
                        this.element.classList.add('loading-bar--complete');
                    }
                }
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
LoadingBarComponent.ɵfac = function LoadingBarComponent_Factory(t) { return new (t || LoadingBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"])); };
LoadingBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoadingBarComponent, selectors: [["app-loading-bar"]], viewQuery: function LoadingBarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.bar = _t.first);
    } }, decls: 3, vars: 0, consts: [[1, "loading-bar"], ["bar", ""], [1, "loading-bar__inner"]], template: function LoadingBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkaW5nLWJhci5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ "STYi":
/*!***************************************!*\
  !*** ./src/app/shared/BL/login.bl.ts ***!
  \***************************************/
/*! exports provided: loginbl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginbl", function() { return loginbl; });
/* harmony import */ var _interfaces_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/login */ "UAsX");
/* harmony import */ var _interfaces_returnresult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces/returnresult */ "Agk8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/login.service */ "ATNk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class loginbl {
    constructor(loginservice, router) {
        this.loginservice = loginservice;
        this.router = router;
        this.logindetails = new _interfaces_login__WEBPACK_IMPORTED_MODULE_0__["login"]();
        this._objreturn = new _interfaces_returnresult__WEBPACK_IMPORTED_MODULE_1__["returnresult"]();
    }
    // func for get login details
    get_login(locallogindetailsobj) {
        // console.log("in bl class get login..")
        // console.log(locallogindetailsobj)
        // promise 
        return this.loginservice.getLoginData(locallogindetailsobj).then(response => {
            console.log(response);
            if (response.status == true) {
                if (response.returnValue.isApproved == true) {
                    //this.router.navigate(['']); //navigate to home page 
                    sessionStorage.setItem("pkey", response.returnValue.customerId);
                    sessionStorage.setItem("Name", response.returnValue.customerName);
                    sessionStorage.setItem("Email", response.returnValue.customerEmail);
                    this._objreturn.message = response.message;
                    this._objreturn.returnValue = response.returnValue;
                    this._objreturn.status = true;
                    //  console.log(this._objreturn)
                    // console.log("Inside Login BL")
                    return this._objreturn;
                    //return (message)
                }
                else {
                    // console.log("else wala m")
                    this._objreturn.message = response.returnValue.approvalRemark.toString();
                    this._objreturn.returnValue = response.returnValue;
                    this._objreturn.status = false;
                    return this._objreturn;
                    // console.log(this.message)
                    //return (message)
                }
            }
            else {
                this._objreturn.message = response.message;
                this._objreturn.returnValue = response.returnValue;
                this._objreturn.status = false;
                return this._objreturn;
                //return (message)
            }
        }, error => {
            this._objreturn.message = error;
            this._objreturn.returnValue = error;
            this._objreturn.status = false;
            return this._objreturn;
        });
    }
    ;
    userprofile(locallogindetailsobj) {
        console.log("in bl class get login..");
        let datareturn;
        return this.loginservice.editProfileCust(locallogindetailsobj).then(response => {
            // console.log(response);
            this._objreturn.message = "data";
            this._objreturn.returnValue = response;
            this._objreturn.status = true;
            console.log(this._objreturn.returnValue);
            console.log(this._objreturn);
            console.log("Inside BL");
            return this._objreturn;
        }, error => {
            this._objreturn.message = error;
            this._objreturn.returnValue = error;
            this._objreturn.status = false;
            return this._objreturn;
        });
    }
    ;
    register_user(locallogindetailsobj) {
        // console.log("in registeration service")
        // console.log(locallogindetailsobj)
        // condition check if user is customer or seller
        if (locallogindetailsobj.typeCustomer == 'C') {
            return this.loginservice.registerCustUserData(locallogindetailsobj).then(response => {
                this._objreturn.status = response.status;
                this._objreturn.returnValue = response.returnValue;
                this._objreturn.message = response.message;
                return this._objreturn;
            }, error => {
                this._objreturn.status = false;
                this._objreturn.returnValue = error;
                this._objreturn.message = "Error Occured";
                return this._objreturn;
            });
        }
        else {
            return this.loginservice.registerSellerUserData(this.logindetails).then(response => {
                this._objreturn.status = response.status;
                this._objreturn.returnValue = response.returnValue;
                this._objreturn.message = response.message;
                return this._objreturn;
            }, error => {
                this._objreturn.status = false;
                this._objreturn.returnValue = error;
                this._objreturn.message = "Error Occured";
                return this._objreturn;
            });
        }
    }
}
loginbl.ɵfac = function loginbl_Factory(t) { return new (t || loginbl)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
loginbl.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: loginbl, factory: loginbl.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/cart.service */ "Xgv5");
/* harmony import */ var _shared_services_compare_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/compare.service */ "eGMf");
/* harmony import */ var _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/wishlist.service */ "aCp3");
/* harmony import */ var _shared_services_currency_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/currency.service */ "ChtM");












class AppComponent {
    constructor(platformId, router, toastr, cart, compare, wishlist, zone, scroller, currency) {
        this.platformId = platformId;
        this.router = router;
        this.toastr = toastr;
        this.cart = cart;
        this.compare = compare;
        this.wishlist = wishlist;
        this.zone = zone;
        this.scroller = scroller;
        this.currency = currency;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(() => {
                    const preloader = document.querySelector('.site-preloader');
                    preloader.addEventListener('transitionend', (event) => {
                        if (event.propertyName === 'opacity') {
                            preloader.remove();
                        }
                    });
                    preloader.classList.add('site-preloader__fade');
                });
            });
        }
    }
    ngOnInit() {
        // properties of the CurrencyFormatOptions interface fully complies
        // with the arguments of the built-in pipe "currency"
        // https://angular.io/api/common/CurrencyPipe
        this.currency.options = {
            code: 'USD',
        };
        this.router.events.subscribe((event) => {
            if ((event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                this.scroller.scrollToPosition([0, 0]);
            }
        });
        this.cart.onAdding$.subscribe(product => {
            this.toastr.success(`Product "${product.name}" added to cart!`);
        });
        this.compare.onAdding$.subscribe(product => {
            this.toastr.success(`Product "${product.name}" added to compare!`);
        });
        this.wishlist.onAdding$.subscribe(product => {
            this.toastr.success(`Product "${product.name}" added to wish list!`);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_compare_service__WEBPACK_IMPORTED_MODULE_6__["CompareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_7__["WishlistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_currency_service__WEBPACK_IMPORTED_MODULE_8__["CurrencyService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Tg9M":
/*!****************************************************************!*\
  !*** ./src/app/modules/shop/services/page-category.service.ts ***!
  \****************************************************************/
/*! exports provided: PageCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCategoryService", function() { return PageCategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




/**
 * This service serves as a mediator between the PageCategoryComponent, ProductsViewComponent and WidgetFiltersComponent components.
 */
class PageCategoryService {
    constructor() {
        // isLoading
        this.isLoadingState = false;
        this.isLoadingSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.isLoadingState);
        this.isLoading$ = this.isLoadingSource.asObservable();
        // list
        this.listState = null;
        this.listSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.listState);
        this.list$ = this.listSource.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(x => x !== null));
        // options
        this.optionsState = {};
        this.optionsChange$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get options() {
        return this.optionsState;
    }
    // getters for list
    get items() { return this.listState.items; }
    get page() { return this.listState.page; }
    get limit() { return this.listState.limit; }
    get sort() { return this.listState.sort; }
    get total() { return this.listState.total; }
    get pages() { return this.listState.pages; }
    get from() { return this.listState.from; }
    get to() { return this.listState.to; }
    get filters() { return this.listState.filters; }
    get filterValues() { return this.listState.filterValues; }
    // set functions
    setIsLoading(value) {
        this.isLoadingState = value;
        this.isLoadingSource.next(value);
    }
    setList(list) {
        this.listState = list;
        this.listSource.next(this.listState);
    }
    setOptions(options, emitEvent = true) {
        const diff = this.optionsDiff(options);
        if ('limit' in diff || 'sort' in diff || 'filterValues' in diff) {
            options.page = 1;
        }
        this.optionsState = options;
        if (emitEvent && Object.keys(diff).length > 0) {
            this.optionsChange$.emit(diff);
        }
    }
    updateOptions(options, emitEvent = true) {
        this.setOptions(Object.assign(Object.assign({}, this.optionsState), options), emitEvent);
    }
    /**
     * Returns only different options.
     */
    optionsDiff(curr) {
        const result = {};
        ['page', 'limit', 'sort'].forEach(key => {
            if (key in curr && this[key] !== curr[key]) {
                result[key] = curr[key];
            }
        });
        if ('filterValues' in curr) {
            const filterValues = curr.filterValues;
            if (Object.keys(filterValues).length !== Object.keys(this.filterValues).length) {
                result.filterValues = {};
            }
            Object.keys(filterValues).forEach(key => {
                if (this.filterValues[key] !== filterValues[key]) {
                    if (!('filterValues' in result)) {
                        result.filterValues = {};
                    }
                    result.filterValues[key] = filterValues[key];
                }
            });
        }
        return result;
    }
}
PageCategoryService.ɵfac = function PageCategoryService_Factory(t) { return new (t || PageCategoryService)(); };
PageCategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PageCategoryService, factory: PageCategoryService.ɵfac });


/***/ }),

/***/ "U6+l":
/*!******************************************************************!*\
  !*** ./src/app/modules/header/components/menu/menu.component.ts ***!
  \******************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/direction.service */ "KSSz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ "0njA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_directives_touch_click_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/directives/touch-click.directive */ "OrkT");







const _c0 = ["menuElement"];
const _c1 = ["submenuElement"];
const _c2 = ["itemElement"];
const _c3 = function (a0) { return { "menu__submenu--open": a0 }; };
function MenuComponent_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-header-menu", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemClick", function MenuComponent_ng_container_3_div_1_Template_app_header_menu_itemClick_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onSubItemClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, item_r3 === ctx_r4.hoveredItem));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", item_r3.items);
} }
function MenuComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_ng_container_3_div_1_Template, 3, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.items);
} }
function MenuComponent_li_5_ng_template_2_app_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-icon", 16);
} }
function MenuComponent_li_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_li_5_ng_template_2_app_icon_1_Template, 1, 0, "app-icon", 15);
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r9.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r9.items);
} }
function MenuComponent_li_5_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_li_5_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.itemClick.emit(item_r9); })("appTouchClick", function MenuComponent_li_5_a_4_Template_a_appTouchClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.onTouchClick($event, item_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r9.url)("target", item_r9.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r11);
} }
function MenuComponent_li_5_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_li_5_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.itemClick.emit(item_r9); })("appTouchClick", function MenuComponent_li_5_a_5_Template_a_appTouchClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.onTouchClick($event, item_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r9.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("target", item_r9.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r11);
} }
const _c4 = function (a0) { return { "menu__item--hover": a0 }; };
function MenuComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function MenuComponent_li_5_Template_li_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const item_r9 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.onItemMouseEnter(item_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuComponent_li_5_ng_template_2_Template, 2, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MenuComponent_li_5_a_4_Template, 2, 3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MenuComponent_li_5_a_5_Template, 2, 3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c4, item_r9 === ctx_r2.hoveredItem));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r9.external);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r9.external);
} }
const _c5 = function (a0, a1) { return { "menu--layout--classic": a0, "menu--layout--topbar": a1 }; };
class MenuComponent {
    constructor(direction) {
        this.direction = direction;
        this.layout = 'classic';
        this.items = [];
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hoveredItem = null;
        this.reCalcSubmenuPosition = false;
    }
    get element() {
        return this.elementRef.nativeElement;
    }
    onItemMouseEnter(item) {
        if (this.hoveredItem !== item) {
            this.hoveredItem = item;
            if (item.items) {
                this.reCalcSubmenuPosition = true;
            }
        }
    }
    onMouseLeave() {
        this.hoveredItem = null;
    }
    onTouchClick(event, item) {
        if (event.cancelable) {
            if (this.hoveredItem && this.hoveredItem === item) {
                return;
            }
            if (item.items) {
                event.preventDefault();
                this.hoveredItem = item;
                this.reCalcSubmenuPosition = true;
            }
        }
    }
    onSubItemClick(item) {
        this.hoveredItem = null;
        this.itemClick.emit(item);
    }
    ngAfterViewChecked() {
        if (!this.reCalcSubmenuPosition) {
            return;
        }
        this.reCalcSubmenuPosition = false;
        const itemElement = this.getCurrentItemElement();
        const submenuElement = this.getCurrentSubmenuElement();
        const menuRect = this.element.getBoundingClientRect();
        const itemRect = itemElement.getBoundingClientRect();
        const submenuRect = submenuElement.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const paddingY = 20;
        const paddingBottom = Math.min(viewportHeight - itemRect.bottom, paddingY);
        const maxHeight = viewportHeight - paddingY - paddingBottom;
        submenuElement.style.maxHeight = `${maxHeight}px`;
        const submenuHeight = submenuElement.getBoundingClientRect().height;
        const position = Math.min(Math.max(itemRect.top - menuRect.top, 0), (viewportHeight - paddingBottom - submenuHeight) - menuRect.top);
        submenuElement.style.top = `${position}px`;
        if (this.direction.isRTL()) {
            const submenuLeft = menuRect.left - submenuRect.width;
            submenuElement.classList.toggle('menu__submenu--reverse', submenuLeft < 0);
        }
        else {
            const submenuRight = menuRect.left + menuRect.width + submenuRect.width;
            submenuElement.classList.toggle('menu__submenu--reverse', submenuRight > document.body.clientWidth);
        }
    }
    getCurrentItemElement() {
        if (!this.hoveredItem) {
            return null;
        }
        const index = this.items.indexOf(this.hoveredItem);
        const elements = this.itemElements.toArray();
        if (index === -1 || !elements[index]) {
            return null;
        }
        return elements[index].nativeElement;
    }
    getCurrentSubmenuElement() {
        if (!this.hoveredItem) {
            return null;
        }
        const index = this.items.filter(x => x.items).indexOf(this.hoveredItem);
        const elements = this.submenuElements.toArray();
        if (index === -1 || !elements[index]) {
            return null;
        }
        return elements[index].nativeElement;
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_direction_service__WEBPACK_IMPORTED_MODULE_1__["DirectionService"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-header-menu"]], viewQuery: function MenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.elementRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.submenuElements = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemElements = _t);
    } }, inputs: { layout: "layout", items: "items" }, outputs: { itemClick: "itemClick" }, decls: 6, vars: 6, consts: [[1, "menu", 3, "ngClass", "mouseleave"], ["menuElement", ""], [1, "menu__submenus-container"], [4, "ngFor", "ngForOf"], [1, "menu__list"], ["class", "menu__item", 3, "ngClass", "mouseenter", 4, "ngFor", "ngForOf"], ["class", "menu__submenu", 3, "ngClass", 4, "ngIf"], [1, "menu__submenu", 3, "ngClass"], ["submenuElement", ""], [3, "items", "itemClick"], [1, "menu__item", 3, "ngClass", "mouseenter"], ["itemElement", ""], ["link", ""], ["class", "menu__item-link", 3, "routerLink", "target", "click", "appTouchClick", 4, "ngIf"], ["class", "menu__item-link", 3, "href", "target", "click", "appTouchClick", 4, "ngIf"], ["class", "menu__item-arrow", "name", "arrow-rounded-right-6x9", "size", "6x9", 4, "ngIf"], ["name", "arrow-rounded-right-6x9", "size", "6x9", 1, "menu__item-arrow"], [1, "menu__item-link", 3, "routerLink", "target", "click", "appTouchClick"], [3, "ngTemplateOutlet"], [1, "menu__item-link", 3, "href", "target", "click", "appTouchClick"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function MenuComponent_Template_div_mouseleave_0_listener() { return ctx.onMouseLeave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MenuComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MenuComponent_li_5_Template, 6, 5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c5, ctx.layout === "classic", ctx.layout === "topbar"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], MenuComponent, _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["IconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _shared_directives_touch_click_directive__WEBPACK_IMPORTED_MODULE_5__["TouchClickDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "UAsX":
/*!********************************************!*\
  !*** ./src/app/shared/interfaces/login.ts ***!
  \********************************************/
/*! exports provided: login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
class login {
    constructor() {
        this.customerId = 0;
    }
}


/***/ }),

/***/ "UBBk":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/quickview/quickview.component.ts ***!
  \********************************************************************/
/*! exports provided: QuickviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickviewComponent", function() { return QuickviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_quickview_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/quickview.service */ "royi");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _directives_click_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/click.directive */ "x5hD");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icon/icon.component */ "0njA");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../product/product.component */ "E3db");









const _c0 = ["modal"];
function QuickviewComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuickviewComponent_ng_template_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-product", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", ctx_r1.product);
} }
class QuickviewComponent {
    constructor(quickview, modalService) {
        this.quickview = quickview;
        this.modalService = modalService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngAfterViewInit() {
        this.quickview.show$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(product => {
            if (this.modalRef) {
                this.modalRef.hide();
            }
            this.product = product;
            this.modalRef = this.modalService.show(this.template, { class: 'modal-dialog-centered modal-xl' });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
QuickviewComponent.ɵfac = function QuickviewComponent_Factory(t) { return new (t || QuickviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_quickview_service__WEBPACK_IMPORTED_MODULE_3__["QuickviewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"])); };
QuickviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuickviewComponent, selectors: [["app-quickview"]], viewQuery: function QuickviewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    } }, decls: 2, vars: 0, consts: [["modal", ""], [1, "quickview"], ["type", "button", "appClick", "", 1, "quickview__close", 3, "click"], ["name", "cross-20", "size", "20"], ["layout", "quickview", 3, "product"]], template: function QuickviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, QuickviewComponent_ng_template_0_Template, 4, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_directives_click_directive__WEBPACK_IMPORTED_MODULE_5__["ClickDirective"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWlja3ZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Uq7R":
/*!***************************************************************!*\
  !*** ./src/app/shared/functions/rxjs/fromGlobalTouchClick.ts ***!
  \***************************************************************/
/*! exports provided: fromGlobalTouchClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromGlobalTouchClick", function() { return fromGlobalTouchClick; });
/* harmony import */ var _fromTouchClick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromTouchClick */ "cZB+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


let globalListener = null;
function fromGlobalTouchClick() {
    if (globalListener === null) {
        globalListener = Object(_fromTouchClick__WEBPACK_IMPORTED_MODULE_0__["fromTouchClick"])(document).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])());
    }
    return globalListener;
}


/***/ }),

/***/ "V07N":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/fake-slides.directive.ts ***!
  \************************************************************/
/*! exports provided: FakeSlidesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeSlidesDirective", function() { return FakeSlidesDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");


class FakeSlidesDirective {
    constructor(eventManager, el) {
        this.eventManager = eventManager;
        this.el = el;
        this.appFakeSlides = 0;
        this.slides = [];
        this.slidesCount = 0;
    }
    ngOnInit() {
        this.resizeHandler = this.eventManager.addGlobalEventListener('window', 'resize', () => this.calc());
        this.calc();
    }
    calc() {
        let newFakeSlidesCount = 0;
        if (this.options) {
            let match = -1;
            const viewport = this.el.nativeElement.querySelector('.owl-carousel').clientWidth;
            const overwrites = this.options.responsive;
            if (overwrites) {
                for (const key in overwrites) {
                    if (overwrites.hasOwnProperty(key)) {
                        if (+key <= viewport && +key > match) {
                            match = Number(key);
                        }
                    }
                }
            }
            if (match >= 0) {
                const items = overwrites[match].items;
                newFakeSlidesCount = Math.max(0, items - this.appFakeSlides);
            }
            else if (this.options.items) {
                newFakeSlidesCount = Math.max(0, this.options.items - this.appFakeSlides);
            }
        }
        if (this.slidesCount !== newFakeSlidesCount) {
            this.slides = [];
            this.slidesCount = newFakeSlidesCount;
            for (let i = 0; i < newFakeSlidesCount; i++) {
                this.slides.push(i);
            }
        }
    }
    ngOnChanges(changes) {
        this.calc();
    }
    ngOnDestroy() {
        if (this.resizeHandler) {
            this.resizeHandler();
        }
    }
}
FakeSlidesDirective.ɵfac = function FakeSlidesDirective_Factory(t) { return new (t || FakeSlidesDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["EventManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
FakeSlidesDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FakeSlidesDirective, selectors: [["", "appFakeSlides", ""]], inputs: { options: "options", appFakeSlides: "appFakeSlides" }, exportAs: ["appFakeSlides"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ "Wd44":
/*!******************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-comments/widget-comments.component.ts ***!
  \******************************************************************************/
/*! exports provided: WidgetCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetCommentsComponent", function() { return WidgetCommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



function WidgetCommentsComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "On ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", comment_r1.postTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.postTitle);
} }
class WidgetCommentsComponent {
    constructor() {
        this.comments = [];
    }
}
WidgetCommentsComponent.ɵfac = function WidgetCommentsComponent_Factory(t) { return new (t || WidgetCommentsComponent)(); };
WidgetCommentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WidgetCommentsComponent, selectors: [["app-widget-comments"]], inputs: { comments: "comments" }, decls: 5, vars: 1, consts: [[1, "widget-comments", "widget"], [1, "widget__title"], [1, "widget-comments__list"], ["class", "widget-comments__item", 4, "ngFor", "ngForOf"], [1, "widget-comments__item"], [1, "widget-comments__author"], ["routerLink", "./"], [1, "widget-comments__content"], [1, "widget-comments__meta"], [1, "widget-comments__date"], [1, "widget-comments__name"], ["routerLink", "./", 3, "title"]], template: function WidgetCommentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Latest Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WidgetCommentsComponent_li_4_Template, 13, 5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXQtY29tbWVudHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "XLOE":
/*!***************************************************************************!*\
  !*** ./src/app/modules/blocks/block-products/block-products.component.ts ***!
  \***************************************************************************/
/*! exports provided: BlockProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockProductsComponent", function() { return BlockProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/block-header/block-header.component */ "Q73p");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/product-card/product-card.component */ "nS2t");




function BlockProductsComponent_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-product-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", ctx_r6.large);
} }
function BlockProductsComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BlockProductsComponent_ng_template_4_ng_container_0_Template, 4, 1, "ng-container", 7);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.large !== null);
} }
function BlockProductsComponent_ng_template_6_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r9);
} }
function BlockProductsComponent_ng_template_6_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlockProductsComponent_ng_template_6_div_0_div_1_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.smalls);
} }
function BlockProductsComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BlockProductsComponent_ng_template_6_div_0_Template, 2, 1, "div", 11);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.smalls.length > 0);
} }
function BlockProductsComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 6);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2);
} }
function BlockProductsComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 6);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2);
} }
class BlockProductsComponent {
    constructor() {
        this.layout = 'large-first';
        this.products = [];
    }
    get large() {
        if (this.layout === 'large-first' && this.products.length > 0) {
            return this.products[0];
        }
        else if (this.layout === 'large-last' && this.products.length > 6) {
            return this.products[6];
        }
        return null;
    }
    get smalls() {
        if (this.layout === 'large-first') {
            return this.products.slice(1, 7);
        }
        else {
            return this.products.slice(0, 6);
        }
    }
}
BlockProductsComponent.ɵfac = function BlockProductsComponent_Factory(t) { return new (t || BlockProductsComponent)(); };
BlockProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockProductsComponent, selectors: [["app-block-products"]], inputs: { header: "header", layout: "layout", products: "products" }, decls: 11, vars: 7, consts: [[1, "container"], [3, "header"], [1, "block-products__body"], ["largeTemplate", ""], ["smallsTemplate", ""], [3, "ngTemplateOutlet", 4, "ngIf"], [3, "ngTemplateOutlet"], [4, "ngIf"], [1, "block-products__featured"], [1, "block-products__featured-item"], [3, "product"], ["class", "block-products__list", 4, "ngIf"], [1, "block-products__list"], ["class", "block-products__list-item", 4, "ngFor", "ngForOf"], [1, "block-products__list-item"]], template: function BlockProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-block-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BlockProductsComponent_ng_template_4_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BlockProductsComponent_ng_template_6_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BlockProductsComponent_ng_container_8_Template, 1, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](9, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BlockProductsComponent_ng_container_10_Template, 1, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("block block-products block-products--layout--", ctx.layout, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layout === "large-last");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layout === "large-first");
    } }, directives: [_components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_1__["BlockHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_3__["ProductCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Xgv5":
/*!*************************************************!*\
  !*** ./src/app/shared/services/cart.service.ts ***!
  \*************************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





class CartService {
    constructor(platformId) {
        this.platformId = platformId;
        this.data = {
            items: [],
            quantity: 0,
            subtotal: 0,
            totals: [],
            total: 0
        };
        this.itemsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.data.items);
        this.quantitySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.data.quantity);
        this.subtotalSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.data.subtotal);
        this.totalsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.data.totals);
        this.totalSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.data.total);
        this.onAddingSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.items$ = this.itemsSubject$.asObservable();
        this.quantity$ = this.quantitySubject$.asObservable();
        this.subtotal$ = this.subtotalSubject$.asObservable();
        this.totals$ = this.totalsSubject$.asObservable();
        this.total$ = this.totalSubject$.asObservable();
        this.onAdding$ = this.onAddingSubject$.asObservable();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            this.load();
            this.calc();
        }
    }
    get items() {
        return this.data.items;
    }
    get quantity() {
        return this.data.quantity;
    }
    add(product, quantity, options = []) {
        // timer only for demo
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
            this.onAddingSubject$.next(product);
            let item = this.items.find(eachItem => {
                if (eachItem.product.id !== product.id || eachItem.options.length !== options.length) {
                    return false;
                }
                if (eachItem.options.length) {
                    for (const option of options) {
                        if (!eachItem.options.find(itemOption => itemOption.name === option.name && itemOption.value === option.value)) {
                            return false;
                        }
                    }
                }
                return true;
            });
            if (item) {
                item.quantity += quantity;
            }
            else {
                item = { product, quantity, options };
                this.data.items.push(item);
            }
            this.save();
            this.calc();
            return item;
        }));
    }
    update(updates) {
        // timer only for demo
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
            updates.forEach(update => {
                const item = this.items.find(eachItem => eachItem === update.item);
                if (item) {
                    item.quantity = update.quantity;
                }
            });
            this.save();
            this.calc();
        }));
    }
    remove(item) {
        // timer only for demo
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
            this.data.items = this.data.items.filter(eachItem => eachItem !== item);
            this.save();
            this.calc();
        }));
    }
    calc() {
        let quantity = 0;
        let subtotal = 0;
        this.data.items.forEach(item => {
            quantity += item.quantity;
            subtotal += item.product.price * item.quantity;
        });
        const totals = [];
        totals.push({
            title: 'Shipping',
            price: 25,
            type: 'shipping'
        });
        totals.push({
            title: 'Tax',
            price: subtotal * 0.20,
            type: 'tax'
        });
        const total = subtotal + totals.reduce((acc, eachTotal) => acc + eachTotal.price, 0);
        this.data.quantity = quantity;
        this.data.subtotal = subtotal;
        this.data.totals = totals;
        this.data.total = total;
        this.itemsSubject$.next(this.data.items);
        this.quantitySubject$.next(this.data.quantity);
        this.subtotalSubject$.next(this.data.subtotal);
        this.totalsSubject$.next(this.data.totals);
        this.totalSubject$.next(this.data.total);
    }
    save() {
        localStorage.setItem('cartItems', JSON.stringify(this.data.items));
    }
    load() {
        const items = localStorage.getItem('cartItems');
        if (items) {
            this.data.items = JSON.parse(items);
        }
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "YFrV":
/*!*****************************************************************!*\
  !*** ./src/app/modules/blocks/block-map/block-map.component.ts ***!
  \*****************************************************************/
/*! exports provided: BlockMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockMapComponent", function() { return BlockMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BlockMapComponent {
    constructor() { }
}
BlockMapComponent.ɵfac = function BlockMapComponent_Factory(t) { return new (t || BlockMapComponent)(); };
BlockMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockMapComponent, selectors: [["app-block-map"]], decls: 3, vars: 0, consts: [[1, "block-map", "block"], [1, "block-map__body"], ["src", "https://maps.google.com/maps?q=Holbrook-Palmer%20Park&t=&z=13&ie=UTF8&iwloc=&output=embed", "frameborder", "0", "scrolling", "no", "marginheight", "0", "marginwidth", "0"]], template: function BlockMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1tYXAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "YT3J":
/*!**********************************!*\
  !*** ./src/fake-server/index.ts ***!
  \**********************************/
/*! exports provided: getBestsellers, getFeatured, getLatestProducts, getProduct, getRelatedProducts, getSpecialOffers, getTopRated, getShopCategoriesBySlugs, getShopCategoriesTree, getShopCategory, getBlogCategoriesTree, getBrands, getProductsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _database_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database/products */ "1/JI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBestsellers", function() { return _database_products__WEBPACK_IMPORTED_MODULE_0__["getBestsellers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFeatured", function() { return _database_products__WEBPACK_IMPORTED_MODULE_0__["getFeatured"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLatestProducts", function() { return _database_products__WEBPACK_IMPORTED_MODULE_0__["getLatestProducts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return _database_products__WEBPACK_IMPORTED_MODULE_0__["getProduct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRelatedProducts", function() { return _database_products__WEBPACK_IMPORTED_MODULE_0__["getRelatedProducts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSpecialOffers", function() { return _database_products__WEBPACK_IMPORTED_MODULE_0__["getSpecialOffers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTopRated", function() { return _database_products__WEBPACK_IMPORTED_MODULE_0__["getTopRated"]; });

/* harmony import */ var _database_categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database/categories */ "mMGZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShopCategoriesBySlugs", function() { return _database_categories__WEBPACK_IMPORTED_MODULE_1__["getShopCategoriesBySlugs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShopCategoriesTree", function() { return _database_categories__WEBPACK_IMPORTED_MODULE_1__["getShopCategoriesTree"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShopCategory", function() { return _database_categories__WEBPACK_IMPORTED_MODULE_1__["getShopCategory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBlogCategoriesTree", function() { return _database_categories__WEBPACK_IMPORTED_MODULE_1__["getBlogCategoriesTree"]; });

/* harmony import */ var _database_brands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database/brands */ "rPnU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBrands", function() { return _database_brands__WEBPACK_IMPORTED_MODULE_2__["getBrands"]; });

/* harmony import */ var _products_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-list */ "sp1q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProductsList", function() { return _products_list__WEBPACK_IMPORTED_MODULE_3__["getProductsList"]; });







/***/ }),

/***/ "Z6UY":
/*!********************************!*\
  !*** ./src/data/blog-posts.ts ***!
  \********************************/
/*! exports provided: posts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posts", function() { return posts; });
const posts = [
    {
        title: 'Philosophy That Addresses Topics Such As Goodness',
        image: 'assets/images/posts/post-1.jpg',
        categories: ['Special Offers'],
        date: 'October 19, 2019'
    },
    {
        title: 'Logic Is The Study Of Reasoning And Argument Part 2',
        image: 'assets/images/posts/post-2.jpg',
        categories: ['Latest News'],
        date: 'September 5, 2019'
    },
    {
        title: 'Some Philosophers Specialize In One Or More Historical Periods',
        image: 'assets/images/posts/post-3.jpg',
        categories: ['New Arrivals'],
        date: 'August 12, 2019'
    },
    {
        title: 'A Variety Of Other Academic And Non-Academic Approaches Have Been Explored',
        image: 'assets/images/posts/post-4.jpg',
        categories: ['Special Offers'],
        date: 'Jule 30, 2019'
    },
    {
        title: 'Germany Was The First Country To Professionalize Philosophy',
        image: 'assets/images/posts/post-5.jpg',
        categories: ['New Arrivals'],
        date: 'June 12, 2019'
    },
    {
        title: 'Logic Is The Study Of Reasoning And Argument Part 1',
        image: 'assets/images/posts/post-6.jpg',
        categories: ['Special Offers'],
        date: 'May 21, 2019'
    },
    {
        title: 'Many Inquiries Outside Of Academia Are Philosophical In The Broad Sense',
        image: 'assets/images/posts/post-7.jpg',
        categories: ['Special Offers'],
        date: 'April 3, 2019'
    },
    {
        title: 'An Advantage Of Digital Circuits When Compared To Analog Circuits',
        image: 'assets/images/posts/post-8.jpg',
        categories: ['Latest News'],
        date: 'Mart 29, 2019'
    },
    {
        title: 'A Digital Circuit Is Typically Constructed From Small Electronic Circuits',
        image: 'assets/images/posts/post-9.jpg',
        categories: ['New Arrivals'],
        date: 'February 10, 2019'
    },
    {
        title: 'Engineers Use Many Methods To Minimize Logic Functions',
        image: 'assets/images/posts/post-10.jpg',
        categories: ['Special Offers'],
        date: 'January 1, 2019'
    }
];


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _modules_blocks_blocks_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/blocks/blocks.module */ "hhBN");
/* harmony import */ var _modules_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/footer/footer.module */ "LrmW");
/* harmony import */ var _modules_header_header_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/header/header.module */ "9jzM");
/* harmony import */ var _modules_mobile_mobile_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/mobile/mobile.module */ "BUuc");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _modules_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/widgets/widgets.module */ "6t2i");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_root_root_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/root/root.component */ "DFQn");
/* harmony import */ var _pages_page_home_one_page_home_one_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/page-home-one/page-home-one.component */ "+x8d");
/* harmony import */ var _pages_page_home_two_page_home_two_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/page-home-two/page-home-two.component */ "uV8K");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "BgzB");
/* harmony import */ var _pages_page_offcanvas_cart_page_offcanvas_cart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/page-offcanvas-cart/page-offcanvas-cart.component */ "DcSL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");
// import { registerLocaleData } from '@angular/common';
// import localeIt from '@angular/common/locales/it';
//
// registerLocaleData(localeIt, 'it');
// modules (angular)



// modules (third-party)


// modules







// components


// pages







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [
    // { provide: LOCALE_ID, useValue: 'it' }
    ], imports: [[
            // modules (angular)
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            // modules (third-party)
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
            // modules
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _modules_blocks_blocks_module__WEBPACK_IMPORTED_MODULE_6__["BlocksModule"],
            _modules_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"],
            _modules_header_header_module__WEBPACK_IMPORTED_MODULE_8__["HeaderModule"],
            _modules_mobile_mobile_module__WEBPACK_IMPORTED_MODULE_9__["MobileModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _modules_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_11__["WidgetsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [
        // components
        _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
        _components_root_root_component__WEBPACK_IMPORTED_MODULE_13__["RootComponent"],
        // pages
        _pages_page_home_one_page_home_one_component__WEBPACK_IMPORTED_MODULE_14__["PageHomeOneComponent"],
        _pages_page_home_two_page_home_two_component__WEBPACK_IMPORTED_MODULE_15__["PageHomeTwoComponent"],
        _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"],
        _pages_page_offcanvas_cart_page_offcanvas_cart_component__WEBPACK_IMPORTED_MODULE_17__["PageOffcanvasCartComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        // modules (third-party)
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"], 
        // modules
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _modules_blocks_blocks_module__WEBPACK_IMPORTED_MODULE_6__["BlocksModule"],
        _modules_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"],
        _modules_header_header_module__WEBPACK_IMPORTED_MODULE_8__["HeaderModule"],
        _modules_mobile_mobile_module__WEBPACK_IMPORTED_MODULE_9__["MobileModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
        _modules_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_11__["WidgetsModule"]] }); })();


/***/ }),

/***/ "ZOUS":
/*!****************************************************************************!*\
  !*** ./src/app/modules/header/components/indicator/indicator.component.ts ***!
  \****************************************************************************/
/*! exports provided: IndicatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicatorComponent", function() { return IndicatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_functions_rxjs_fromOutsideTouchClick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/functions/rxjs/fromOutsideTouchClick */ "+W2m");
/* harmony import */ var _shared_services_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/header.service */ "Fc3L");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ "0njA");
/* harmony import */ var _shared_directives_touch_click_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/directives/touch-click.directive */ "OrkT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");











const _c0 = ["dropdownElement"];
const _c1 = function (a0) { return { "indicator__icon": a0 }; };
function IndicatorComponent_ng_template_0_app_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-icon", 10);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r6.iconWhenOpen))("name", ctx_r6.icon);
} }
function IndicatorComponent_ng_template_0_app_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-icon", 11);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r7.iconWhenOpen);
} }
function IndicatorComponent_ng_template_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.counter);
} }
function IndicatorComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IndicatorComponent_ng_template_0_app_icon_1_Template, 1, 4, "app-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IndicatorComponent_ng_template_0_app_icon_2_Template, 1, 1, "app-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IndicatorComponent_ng_template_0_span_3_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.iconWhenOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.counter !== null);
} }
function IndicatorComponent_button_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function IndicatorComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndicatorComponent_button_2_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IndicatorComponent_button_2_ng_container_1_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
function IndicatorComponent_a_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function IndicatorComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndicatorComponent_a_3_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onClick($event); })("appTouchClick", function IndicatorComponent_a_3_Template_a_appTouchClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onTouchClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IndicatorComponent_a_3_ng_container_1_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r3.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
function IndicatorComponent_a_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function IndicatorComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndicatorComponent_a_4_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.onClick($event); })("appTouchClick", function IndicatorComponent_a_4_Template_a_appTouchClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.onTouchClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IndicatorComponent_a_4_ng_container_1_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r4.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
const _c2 = ["*"];
class IndicatorComponent {
    constructor(platformId, elementRef, zone, header) {
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.zone = zone;
        this.header = header;
        this.trigger = false;
        this.iconWhenOpen = null;
        this.link = null;
        this.counter = null;
        this.buttonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.stateChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.classIndicator = true;
        this.isOpen = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    get classIndicatorTriggerClick() { return this.trigger === 'click'; }
    get classIndicatorTriggerHover() { return this.trigger === 'hover'; }
    get element() {
        return this.elementRef.nativeElement;
    }
    get dropdownElement() {
        return this.dropdownElementRef.nativeElement;
    }
    ngOnInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mousedown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe((event) => {
                    if (!this.element.contains(event.target)) {
                        this.zone.run(() => this.close());
                    }
                });
            });
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.header.navPanelPositionState$, this.header.navPanelVisibility$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(() => this.close(true));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngAfterViewInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.dropdownElement, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe((event) => {
                    if (this.dropdownElement === event.target &&
                        event.propertyName === 'visibility' &&
                        !this.isOpen) {
                        this.element.classList.remove('indicator--display');
                    }
                });
                Object(_shared_functions_rxjs_fromOutsideTouchClick__WEBPACK_IMPORTED_MODULE_4__["fromOutsideTouchClick"])(this.element).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(() => {
                    if (this.isOpen) {
                        this.zone.run(() => this.close());
                    }
                });
            });
        }
    }
    toggle(force, immediately = false) {
        const newValue = force !== undefined ? force : !this.isOpen;
        if (this.isOpen !== newValue) {
            this.isOpen = newValue;
            if (this.isOpen) {
                this.element.classList.add('indicator--display');
                this.element.getBoundingClientRect(); // force reflow
                this.element.classList.add('indicator--open');
                const dropdownTop = this.dropdownElement.getBoundingClientRect().top;
                const viewportHeight = window.innerHeight;
                const paddingBottom = 20;
                this.dropdownElement.style.maxHeight = `${viewportHeight - dropdownTop - paddingBottom}px`;
                if (immediately) {
                    this.dropdownElement.style.transition = 'none';
                    this.dropdownElement.getBoundingClientRect(); // force reflow
                    this.dropdownElement.style.transition = '';
                }
            }
            else {
                if (immediately) {
                    this.element.classList.remove('indicator--display');
                }
                this.element.classList.remove('indicator--open');
            }
            this.stateChanges.emit(this.isOpen);
        }
    }
    close(immediately = false) {
        this.toggle(false, immediately);
    }
    open(immediately = false) {
        this.toggle(true, immediately);
    }
    onClick(event) {
        this.buttonClick.emit();
        if (this.trigger === 'click') {
            event.preventDefault();
            this.toggle();
        }
    }
    onTouchClick(event) {
        if (event.cancelable) {
            if (this.trigger !== 'hover' || this.isOpen) {
                return;
            }
            event.preventDefault();
            this.open();
        }
    }
    onMouseEnter() {
        this.element.classList.add('indicator--hover');
        if (this.trigger === 'hover') {
            this.open();
        }
    }
    onMouseleave() {
        this.element.classList.remove('indicator--hover');
        if (this.trigger === 'hover') {
            this.close();
        }
    }
}
IndicatorComponent.ɵfac = function IndicatorComponent_Factory(t) { return new (t || IndicatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"])); };
IndicatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndicatorComponent, selectors: [["app-indicator"]], viewQuery: function IndicatorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownElementRef = _t.first);
    } }, hostVars: 6, hostBindings: function IndicatorComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function IndicatorComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function IndicatorComponent_mouseleave_HostBindingHandler() { return ctx.onMouseleave(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("indicator", ctx.classIndicator)("indicator--trigger--click", ctx.classIndicatorTriggerClick)("indicator--trigger--hover", ctx.classIndicatorTriggerHover);
    } }, inputs: { trigger: "trigger", icon: "icon", iconWhenOpen: "iconWhenOpen", link: "link", counter: "counter" }, outputs: { buttonClick: "buttonClick", stateChanges: "stateChanges" }, exportAs: ["appIndicator"], ngContentSelectors: _c2, decls: 8, vars: 3, consts: [["buttonContent", ""], ["type", "button", "class", "indicator__button", 3, "click", 4, "ngIf"], ["class", "indicator__button", 3, "href", "click", "appTouchClick", 4, "ngIf"], ["class", "indicator__button", 3, "routerLink", "click", "appTouchClick", 4, "ngIf"], [1, "indicator__dropdown"], ["dropdownElement", ""], [1, "indicator__area"], ["size", "20", 3, "ngClass", "name", 4, "ngIf"], ["class", "indicator__icon indicator__icon--open", "size", "20", 3, "name", 4, "ngIf"], ["class", "indicator__value", 4, "ngIf"], ["size", "20", 3, "ngClass", "name"], ["size", "20", 1, "indicator__icon", "indicator__icon--open", 3, "name"], [1, "indicator__value"], ["type", "button", 1, "indicator__button", 3, "click"], [4, "ngTemplateOutlet"], [1, "indicator__button", 3, "href", "click", "appTouchClick"], [1, "indicator__button", 3, "routerLink", "click", "appTouchClick"]], template: function IndicatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, IndicatorComponent_ng_template_0_Template, 4, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IndicatorComponent_button_2_Template, 2, 1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IndicatorComponent_a_3_Template, 2, 2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, IndicatorComponent_a_4_Template, 2, 2, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.link === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.link !== null && ctx.trigger === "click");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.link !== null && ctx.trigger !== "click");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _shared_directives_touch_click_directive__WEBPACK_IMPORTED_MODULE_7__["TouchClickDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRpY2F0b3IuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZPbr":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/blocks/block-product-columns/block-product-columns-item/block-product-columns-item.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: BlockProductColumnsItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockProductColumnsItemComponent", function() { return BlockProductColumnsItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/block-header/block-header.component */ "Q73p");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/product-card/product-card.component */ "nS2t");




function BlockProductColumnsItemComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r1);
} }
class BlockProductColumnsItemComponent {
    constructor() {
        this.classCol = true;
        this.products = [];
    }
}
BlockProductColumnsItemComponent.ɵfac = function BlockProductColumnsItemComponent_Factory(t) { return new (t || BlockProductColumnsItemComponent)(); };
BlockProductColumnsItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockProductColumnsItemComponent, selectors: [["app-block-product-columns-item"]], hostVars: 2, hostBindings: function BlockProductColumnsItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("col", ctx.classCol);
    } }, inputs: { header: "header", products: "products" }, decls: 3, vars: 2, consts: [[3, "header"], [1, "block-product-columns__column"], ["class", "block-product-columns__item", 4, "ngFor", "ngForOf"], [1, "block-product-columns__item"], ["layout", "horizontal", 3, "product"]], template: function BlockProductColumnsItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-block-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BlockProductColumnsItemComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_1__["BlockHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_3__["ProductCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1wcm9kdWN0LWNvbHVtbnMtaXRlbS5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ "ZdRu":
/*!********************************************************************************!*\
  !*** ./src/app/modules/header/components/departments/departments.component.ts ***!
  \********************************************************************************/
/*! exports provided: DepartmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsComponent", function() { return DepartmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _data_header_departments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../data/header-departments */ "ft+r");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_functions_rxjs_fromMatchMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/functions/rxjs/fromMatchMedia */ "41D5");
/* harmony import */ var _shared_functions_rxjs_fromOutsideTouchClick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/functions/rxjs/fromOutsideTouchClick */ "+W2m");
/* harmony import */ var _shared_services_header_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/header.service */ "Fc3L");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ "0njA");
/* harmony import */ var _megamenu_megamenu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../megamenu/megamenu.component */ "eOub");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../menu/menu.component */ "U6+l");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_directives_touch_click_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/directives/touch-click.directive */ "OrkT");















const _c0 = ["bodyElement"];
const _c1 = ["containerElement"];
const _c2 = ["submenuElement"];
const _c3 = ["itemElement"];
const _c4 = function (a0) { return { "departments__submenu--open": a0 }; };
function DepartmentsComponent_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-header-megamenu", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemClick", function DepartmentsComponent_ng_container_6_div_1_Template_app_header_megamenu_itemClick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.onSubItemClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("departments__submenu departments__submenu--type--megamenu departments__submenu--size--", item_r4.menu.size, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c4, item_r4 === ctx_r5.hoveredItem));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menu", item_r4.menu);
} }
function DepartmentsComponent_ng_container_6_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-header-menu", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemClick", function DepartmentsComponent_ng_container_6_div_2_Template_app_header_menu_itemClick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.onSubItemClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, item_r4 === ctx_r6.hoveredItem));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", item_r4.menu.items);
} }
function DepartmentsComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DepartmentsComponent_ng_container_6_div_1_Template, 3, 7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DepartmentsComponent_ng_container_6_div_2_Template, 3, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.menu && item_r4.menu.type == "megamenu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.menu && item_r4.menu.type == "menu");
} }
function DepartmentsComponent_li_8_ng_template_2_app_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-icon", 25);
} }
function DepartmentsComponent_li_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DepartmentsComponent_li_8_ng_template_2_app_icon_1_Template, 1, 0, "app-icon", 24);
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r15.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.menu);
} }
function DepartmentsComponent_li_8_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponent_li_8_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.onItemClick(); })("appTouchClick", function DepartmentsComponent_li_8_a_4_Template_a_appTouchClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.onTouchClick($event, item_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r15.url)("target", item_r15.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r17);
} }
function DepartmentsComponent_li_8_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponent_li_8_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.onItemClick(); })("appTouchClick", function DepartmentsComponent_li_8_a_5_Template_a_appTouchClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.onTouchClick($event, item_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r15.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("target", item_r15.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r17);
} }
const _c5 = function (a0, a1) { return { "departments__item--menu": a0, "departments__item--hover": a1 }; };
function DepartmentsComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function DepartmentsComponent_li_8_Template_li_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const item_r15 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.onItemMouseEnter(item_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DepartmentsComponent_li_8_ng_template_2_Template, 2, 2, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DepartmentsComponent_li_8_a_4_Template, 2, 3, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DepartmentsComponent_li_8_a_5_Template, 2, 3, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c5, item_r15.menu && item_r15.menu.type == "menu", item_r15 === ctx_r3.hoveredItem));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r15.external);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.external);
} }
class DepartmentsComponent {
    constructor(platformId, renderer, el, header, zone) {
        this.platformId = platformId;
        this.renderer = renderer;
        this.el = el;
        this.header = header;
        this.zone = zone;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.items = _data_header_departments__WEBPACK_IMPORTED_MODULE_3__["departments"];
        this.hoveredItem = null;
        this.isOpen = false;
        this.fixed = false;
        this.fixedHeight = null;
        this.reCalcSubmenuPosition = false;
    }
    get element() {
        return this.el.nativeElement;
    }
    ngOnInit() {
        const root = this.element.querySelector('.departments');
        const content = this.element.querySelector('.departments__links-wrapper');
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.header.navPanelPositionState$, this.header.navPanelVisibility$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(() => {
            if (this.header.navPanelPosition === 'static' && this.header.departmentsArea !== null) {
                this.open(true);
            }
            else if (this.isOpen) {
                this.close(true);
            }
        });
        this.header.departmentsArea$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(areaElement => {
            if (areaElement) {
                this.fixed = true;
                this.isOpen = true;
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
                    setTimeout(() => {
                        this.fix();
                    }, 0);
                }
                else {
                    this.renderer.addClass(root, 'departments--fixed');
                    this.renderer.addClass(root, 'departments--open');
                }
            }
            else {
                this.fixed = false;
                this.isOpen = false;
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
                    root.classList.remove('departments--open', 'departments--fixed');
                    content.style.maxHeight = '';
                    content.style.height = '';
                    content.style.transition = 'none';
                    content.getBoundingClientRect(); // force reflow
                    content.style.transition = '';
                }
                else {
                    this.renderer.removeClass(root, 'departments--fixed');
                    this.renderer.removeClass(root, 'departments--open');
                }
            }
        });
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            window.addEventListener('load', () => {
                if (!this.header.departmentsArea) {
                    return;
                }
                const areaBottom = this.getAreaBottom();
                const fixedHeight = areaBottom - (content.getBoundingClientRect().top + window.scrollY);
                if (this.fixedHeight === fixedHeight) {
                    return;
                }
                root.classList.remove('departments--open', 'departments--fixed');
                content.style.height = '';
                content.style.transition = 'none';
                content.getBoundingClientRect(); // force reflow
                this.fix();
                content.style.transition = '';
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'mousedown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe((event) => {
                if (event.target instanceof HTMLElement && !this.element.contains(event.target)) {
                    this.close();
                }
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(content, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe((event) => {
                if (event.propertyName === 'height') {
                    root.classList.remove('departments--transition');
                }
            });
            Object(_shared_functions_rxjs_fromMatchMedia__WEBPACK_IMPORTED_MODULE_5__["fromMatchMedia"])('(min-width: 992px)').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(x => x.matches && this.header.departmentsArea !== null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(() => {
                this.fix();
            });
        }
    }
    getAreaBottom() {
        if (!this.header.departmentsArea) {
            return null;
        }
        const areaRect = this.header.departmentsArea.getBoundingClientRect();
        return areaRect.top + areaRect.height + window.scrollY;
    }
    fix() {
        const root = this.element.querySelector('.departments');
        const content = this.element.querySelector('.departments__links-wrapper');
        const areaBottom = this.getAreaBottom();
        root.classList.remove('departments--transition');
        root.classList.add('departments--fixed', 'departments--open');
        this.fixedHeight = areaBottom - (content.getBoundingClientRect().top + window.scrollY);
        content.style.maxHeight = `${this.fixedHeight}px`;
        content.style.height = `${this.fixedHeight}px`;
        content.getBoundingClientRect(); // force reflow
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngAfterViewInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                Object(_shared_functions_rxjs_fromOutsideTouchClick__WEBPACK_IMPORTED_MODULE_6__["fromOutsideTouchClick"])(this.element).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(() => {
                    if (this.isOpen) {
                        this.zone.run(() => this.close());
                    }
                });
            });
        }
    }
    toggle() {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    }
    open(immediately = false) {
        this.isOpen = true;
        const root = this.element.querySelector('.departments');
        const content = root.querySelector('.departments__links-wrapper');
        if (immediately) {
            root.classList.add('departments--open');
            const documentHeight = document.documentElement.clientHeight;
            const paddingBottom = 20;
            const contentRect = content.getBoundingClientRect();
            const areaBottom = this.getAreaBottom();
            const endHeight = this.header.departmentsArea
                ? areaBottom - (contentRect.top + window.scrollY)
                : Math.min(contentRect.height, documentHeight - paddingBottom - contentRect.top);
            content.style.maxHeight = endHeight + 'px';
            content.style.height = endHeight + 'px';
            content.style.transition = 'none';
            content.getBoundingClientRect(); // force reflow
            content.style.transition = '';
        }
        else {
            const startHeight = content.getBoundingClientRect().height;
            root.classList.add('departments--transition', 'departments--open');
            const documentHeight = document.documentElement.clientHeight;
            const paddingBottom = 20;
            const contentRect = content.getBoundingClientRect();
            const endHeight = Math.min(contentRect.height, documentHeight - paddingBottom - contentRect.top);
            content.style.height = startHeight + 'px';
            content.getBoundingClientRect(); // force reflow
            content.style.maxHeight = endHeight + 'px';
            content.style.height = endHeight + 'px';
        }
    }
    close(immediately = false) {
        if ((this.fixed && this.header.navPanelPosition === 'static') || !this.isOpen) {
            return;
        }
        this.isOpen = false;
        const root = this.element.querySelector('.departments');
        const content = root.querySelector('.departments__links-wrapper');
        if (immediately) {
            root.classList.remove('departments--open');
            content.style.transition = 'none';
            content.style.height = '';
            content.style.maxHeight = '';
            content.getBoundingClientRect(); // force reflow
            content.style.transition = '';
        }
        else {
            content.style.height = content.getBoundingClientRect().height + 'px';
            root.classList.add('departments--transition');
            root.classList.remove('departments--open');
            content.getBoundingClientRect(); // force reflow
            content.style.height = '';
            content.style.maxHeight = '';
        }
        this.hoveredItem = null;
    }
    onItemMouseEnter(item) {
        if (this.hoveredItem !== item) {
            this.hoveredItem = item;
            if (item.menu) {
                this.reCalcSubmenuPosition = true;
            }
        }
    }
    onMouseLeave() {
        this.hoveredItem = null;
    }
    onTouchClick(event, item) {
        if (event.cancelable) {
            if (this.hoveredItem && this.hoveredItem === item) {
                return;
            }
            if (item.menu) {
                event.preventDefault();
                this.hoveredItem = item;
                this.reCalcSubmenuPosition = true;
            }
        }
    }
    onItemClick() {
        this.close();
    }
    onSubItemClick() {
        this.close();
        this.hoveredItem = null;
    }
    ngAfterViewChecked() {
        if (!this.reCalcSubmenuPosition) {
            return;
        }
        this.reCalcSubmenuPosition = false;
        const itemElement = this.getCurrentItemElement();
        const submenuElement = this.getCurrentSubmenuElement();
        const viewportHeight = window.innerHeight;
        const paddingBottom = 20;
        if (this.hoveredItem.menu.type === 'megamenu') {
            const submenuTop = submenuElement.getBoundingClientRect().top;
            submenuElement.style.maxHeight = `${viewportHeight - submenuTop - paddingBottom}px`;
        }
        if (this.hoveredItem.menu.type === 'menu') {
            const bodyElement = this.bodyElementRef.nativeElement;
            const containerElement = this.containerElementRef.nativeElement;
            const bodyRect = bodyElement.getBoundingClientRect();
            const maxHeight = viewportHeight - paddingBottom - Math.min(paddingBottom, bodyRect.top);
            submenuElement.style.maxHeight = `${maxHeight}px`;
            const submenuRect = submenuElement.getBoundingClientRect();
            const itemRect = itemElement.getBoundingClientRect();
            const containerRect = containerElement.getBoundingClientRect();
            const top = Math.min(itemRect.top, viewportHeight - paddingBottom - submenuRect.height) - containerRect.top;
            submenuElement.style.top = `${top}px`;
        }
    }
    getCurrentItemElement() {
        if (!this.hoveredItem) {
            return null;
        }
        const index = this.items.indexOf(this.hoveredItem);
        const elements = this.itemElements.toArray();
        if (index === -1 || !elements[index]) {
            return null;
        }
        return elements[index].nativeElement;
    }
    getCurrentSubmenuElement() {
        if (!this.hoveredItem) {
            return null;
        }
        const index = this.items.filter(x => x.menu).indexOf(this.hoveredItem);
        const elements = this.submenuElements.toArray();
        if (index === -1 || !elements[index]) {
            return null;
        }
        return elements[index].nativeElement;
    }
}
DepartmentsComponent.ɵfac = function DepartmentsComponent_Factory(t) { return new (t || DepartmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_header_service__WEBPACK_IMPORTED_MODULE_7__["HeaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
DepartmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DepartmentsComponent, selectors: [["app-header-departments"]], viewQuery: function DepartmentsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.bodyElementRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerElementRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.submenuElements = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemElements = _t);
    } }, decls: 13, vars: 2, consts: [[1, "departments"], [1, "departments__body"], ["bodyElement", ""], [1, "departments__links-wrapper", 3, "mouseleave"], [1, "departments__submenus-container"], ["containerElement", ""], [4, "ngFor", "ngForOf"], [1, "departments__links"], ["class", "departments__item", 3, "ngClass", "mouseenter", 4, "ngFor", "ngForOf"], [1, "departments__button", 3, "click"], ["name", "menu-18x14", "size", "18x14", 1, "departments__button-icon"], ["name", "arrow-rounded-down-9x6", "size", "9x6", 1, "departments__button-arrow"], [3, "class", "ngClass", 4, "ngIf"], ["class", "departments__submenu departments__submenu--type--menu", 3, "ngClass", 4, "ngIf"], [3, "ngClass"], ["submenuElement", ""], [3, "menu", "itemClick"], [1, "departments__submenu", "departments__submenu--type--menu", 3, "ngClass"], [3, "items", "itemClick"], [1, "departments__item", 3, "ngClass", "mouseenter"], ["itemElement", ""], ["link", ""], ["class", "departments__item-link", 3, "routerLink", "target", "click", "appTouchClick", 4, "ngIf"], ["class", "departments__item-link", 3, "href", "target", "click", "appTouchClick", 4, "ngIf"], ["class", "departments__item-arrow", "name", "arrow-rounded-right-6x9", "size", "6x9", 4, "ngIf"], ["name", "arrow-rounded-right-6x9", "size", "6x9", 1, "departments__item-arrow"], [1, "departments__item-link", 3, "routerLink", "target", "click", "appTouchClick"], [3, "ngTemplateOutlet"], [1, "departments__item-link", 3, "href", "target", "click", "appTouchClick"]], template: function DepartmentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function DepartmentsComponent_Template_div_mouseleave_3_listener() { return ctx.onMouseLeave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DepartmentsComponent_ng_container_6_Template, 3, 2, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DepartmentsComponent_li_8_Template, 6, 6, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponent_Template_button_click_9_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Shop By Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _megamenu_megamenu_component__WEBPACK_IMPORTED_MODULE_9__["MegamenuComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], _shared_directives_touch_click_directive__WEBPACK_IMPORTED_MODULE_12__["TouchClickDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBhcnRtZW50cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Zrae":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-newsletter/widget-newsletter.component.ts ***!
  \**********************************************************************************/
/*! exports provided: WidgetNewsletterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetNewsletterComponent", function() { return WidgetNewsletterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


class WidgetNewsletterComponent {
    constructor() { }
}
WidgetNewsletterComponent.ɵfac = function WidgetNewsletterComponent_Factory(t) { return new (t || WidgetNewsletterComponent)(); };
WidgetNewsletterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WidgetNewsletterComponent, selectors: [["app-widget-newsletter"]], decls: 11, vars: 0, consts: [[1, "widget-newsletter", "widget"], [1, "widget-newsletter__title"], [1, "widget-newsletter__text"], ["action", "", 1, "widget-newsletter__form"], ["for", "widget-newsletter-email", 1, "sr-only"], ["id", "widget-newsletter-email", "type", "text", "placeholder", "Email Address", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "mt-3"]], template: function WidgetNewsletterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Our Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Phasellus eleifend sapien felis, at sollicitudin arcu semper mattis. Mauris quis mi quis ipsum tristique lobortis. Nulla vitae est blandit rutrum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXQtbmV3c2xldHRlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "aCp3":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/wishlist.service.ts ***!
  \*****************************************************/
/*! exports provided: WishlistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistService", function() { return WishlistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





class WishlistService {
    constructor(platformId) {
        this.platformId = platformId;
        this.data = {
            items: []
        };
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.itemsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.onAddingSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.items$ = this.itemsSubject$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$));
        this.count$ = this.itemsSubject$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(items => items.length));
        this.onAdding$ = this.onAddingSubject$.asObservable();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            this.load();
        }
    }
    add(product) {
        // timer only for demo
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
            this.onAddingSubject$.next(product);
            const index = this.data.items.findIndex(item => item.id === product.id);
            if (index === -1) {
                this.data.items.push(product);
                this.save();
            }
        }));
    }
    remove(product) {
        // timer only for demo
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
            const index = this.data.items.findIndex(item => item.id === product.id);
            if (index !== -1) {
                this.data.items.splice(index, 1);
                this.save();
            }
        }));
    }
    save() {
        localStorage.setItem('wishlistItems', JSON.stringify(this.data.items));
        this.itemsSubject$.next(this.data.items);
    }
    load() {
        const items = localStorage.getItem('wishlistItems');
        if (items) {
            this.data.items = JSON.parse(items);
            this.itemsSubject$.next(this.data.items);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
WishlistService.ɵfac = function WishlistService_Factory(t) { return new (t || WishlistService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
WishlistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WishlistService, factory: WishlistService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "alZB":
/*!***********************************************************************!*\
  !*** ./src/app/modules/blocks/block-banner/block-banner.component.ts ***!
  \***********************************************************************/
/*! exports provided: BlockBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockBannerComponent", function() { return BlockBannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BlockBannerComponent {
    constructor() { }
}
BlockBannerComponent.ɵfac = function BlockBannerComponent_Factory(t) { return new (t || BlockBannerComponent)(); };
BlockBannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockBannerComponent, selectors: [["app-block-banner"]], decls: 14, vars: 0, consts: [[1, "block", "block-banner"], [1, "container"], ["href", "", 1, "block-banner__body"], [1, "block-banner__image", "block-banner__image--desktop", 2, "background-image", "url('assets/images/banners/banner-1.jpg')"], [1, "block-banner__image", "block-banner__image--mobile", 2, "background-image", "url('assets/images/banners/banner-1-mobile.jpg')"], [1, "block-banner__title"], [1, "block-banner__mobile-br"], [1, "block-banner__text"], [1, "block-banner__button"], [1, "btn", "btn-sm", "btn-primary"]], template: function BlockBannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hundreds ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Hand Tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Hammers, Chisels, Universal Pliers, Nippers, Jigsaws, Saws");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Shop Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1iYW5uZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "bM9y":
/*!*********************************!*\
  !*** ./src/data/mobile-menu.ts ***!
  \*********************************/
/*! exports provided: mobileMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileMenu", function() { return mobileMenu; });
const mobileMenu = [
    { type: 'link', label: 'Home', url: '/', children: [
            { type: 'link', label: 'Home 1', url: '/' },
            { type: 'link', label: 'Home 2', url: '/home-two' },
            { type: 'link', label: 'Offcanvas Cart', url: '/offcanvas-cart' }
        ] },
    { type: 'link', label: 'Categories', url: '/shop/catalog', children: [
            { type: 'link', label: 'Power Tools', url: '/shop/catalog', children: [
                    { type: 'link', label: 'Engravers', url: '/shop/catalog' },
                    { type: 'link', label: 'Wrenches', url: '/shop/catalog' },
                    { type: 'link', label: 'Wall Chaser', url: '/shop/catalog' },
                    { type: 'link', label: 'Pneumatic Tools', url: '/shop/catalog' }
                ] },
            { type: 'link', label: 'Machine Tools', url: '/shop/catalog', children: [
                    { type: 'link', label: 'Thread Cutting', url: '/shop/catalog' },
                    { type: 'link', label: 'Chip Blowers', url: '/shop/catalog' },
                    { type: 'link', label: 'Sharpening Machines', url: '/shop/catalog' },
                    { type: 'link', label: 'Pipe Cutters', url: '/shop/catalog' },
                    { type: 'link', label: 'Slotting machines', url: '/shop/catalog' },
                    { type: 'link', label: 'Lathes', url: '/shop/catalog' }
                ] }
        ] },
    { type: 'link', label: 'Shop', url: '/shop/catalog/power-tools', children: [
            { type: 'link', label: 'Shop Grid', url: '/shop/catalog/power-tools', children: [
                    { type: 'link', label: '3 Columns Sidebar', url: '/shop/catalog/power-tools' },
                    { type: 'link', label: '4 Columns Full', url: '/shop/category-grid-4-columns-full' },
                    { type: 'link', label: '5 Columns Full', url: '/shop/category-grid-5-columns-full' }
                ] },
            { type: 'link', label: 'Shop List', url: '/shop/category-list' },
            { type: 'link', label: 'Shop Right Sidebar', url: '/shop/category-right-sidebar' },
            { type: 'link', label: 'Product', url: '/shop/product-standard', children: [
                    { type: 'link', label: 'Product', url: '/shop/product-standard' },
                    { type: 'link', label: 'Product Alt', url: '/shop/product-columnar' },
                    { type: 'link', label: 'Product Sidebar', url: '/shop/product-sidebar' }
                ] },
            { type: 'link', label: 'Cart', url: '/shop/cart' },
            { type: 'link', label: 'Checkout', url: '/shop/cart/checkout' },
            { type: 'link', label: 'Order Success', url: '/shop/cart/checkout/success' },
            { type: 'link', label: 'Wishlist', url: '/shop/wishlist' },
            { type: 'link', label: 'Compare', url: '/shop/compare' },
            { type: 'link', label: 'Track Order', url: '/shop/track-order' }
        ] },
    { type: 'link', label: 'Account', url: '/account', children: [
            { type: 'link', label: 'Login', url: '/account/login' },
            { type: 'link', label: 'Dashboard', url: '/account/dashboard' },
            { type: 'link', label: 'Edit Profile', url: '/account/profile' },
            { type: 'link', label: 'Order History', url: '/account/orders' },
            { type: 'link', label: 'Order Details', url: '/account/orders/5' },
            { type: 'link', label: 'Address Book', url: '/account/addresses' },
            { type: 'link', label: 'Edit Address', url: '/account/addresses/5' },
            { type: 'link', label: 'Change Password', url: '/account/password' }
        ] },
    { type: 'link', label: 'Blog', url: '/blog', children: [
            { type: 'link', label: 'Blog Classic', url: '/blog/category-classic' },
            { type: 'link', label: 'Blog Grid', url: '/blog/category-grid' },
            { type: 'link', label: 'Blog List', url: '/blog/category-list' },
            { type: 'link', label: 'Blog Left Sidebar', url: '/blog/category-left-sidebar' },
            { type: 'link', label: 'Post Page', url: '/blog/post-classic' },
            { type: 'link', label: 'Post Without Sidebar', url: '/blog/post-full' }
        ] },
    { type: 'link', label: 'Pages', url: '/site', children: [
            { type: 'link', label: 'About Us', url: '/site/about-us' },
            { type: 'link', label: 'Contact Us', url: '/site/contact-us' },
            { type: 'link', label: 'Contact Us Alt', url: '/site/contact-us-alt' },
            { type: 'link', label: '404', url: '/site/not-found' },
            { type: 'link', label: 'Terms And Conditions', url: '/site/terms' },
            { type: 'link', label: 'FAQ', url: '/site/faq' },
            { type: 'link', label: 'Components', url: '/site/components' },
            { type: 'link', label: 'Typography', url: '/site/typography' }
        ] },
    { type: 'button', label: 'Currency', children: [
            { type: 'button', label: '€ Euro', data: { currency: 'EUR' } },
            { type: 'button', label: '£ Pound Sterling', data: { currency: 'GBP' } },
            { type: 'button', label: '$ US Dollar', data: { currency: 'USD' } },
            { type: 'button', label: '₽ Russian Ruble', data: { currency: 'RUB' } }
        ] },
    { type: 'button', label: 'Language', children: [
            { type: 'button', label: 'English', data: { language: 'EN' } },
            { type: 'button', label: 'French', data: { language: 'FR' } },
            { type: 'button', label: 'German', data: { language: 'DE' } },
            { type: 'button', label: 'Russian', data: { language: 'RU' } },
            { type: 'button', label: 'Italian', data: { language: 'IT' } }
        ] }
];


/***/ }),

/***/ "cZB+":
/*!*********************************************************!*\
  !*** ./src/app/shared/functions/rxjs/fromTouchClick.ts ***!
  \*********************************************************/
/*! exports provided: fromTouchClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTouchClick", function() { return fromTouchClick; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

function fromTouchClick(element) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](observer => {
        let touchStartData = null;
        const onTouchStart = (event) => {
            if (event.touches.length !== 1) {
                touchStartData = null;
                return;
            }
            touchStartData = {
                target: event.currentTarget,
                touch: event.changedTouches[0],
                timestamp: (new Date()).getTime(),
            };
        };
        const onTouchEnd = (event) => {
            if (!touchStartData ||
                event.changedTouches.length !== 1 ||
                event.changedTouches[0].identifier !== touchStartData.touch.identifier) {
                return;
            }
            const timestamp = (new Date()).getTime();
            const touch = event.changedTouches[0];
            const distance = Math.abs(Math.sqrt(Math.pow(touchStartData.touch.screenX - touch.screenX, 2) +
                Math.pow(touchStartData.touch.screenY - touch.screenY, 2)));
            if (touchStartData.target === event.currentTarget && timestamp - touchStartData.timestamp < 500 && distance < 10) {
                observer.next(event);
            }
        };
        element.addEventListener('touchstart', onTouchStart);
        element.addEventListener('touchend', onTouchEnd);
        return () => {
            element.removeEventListener('touchstart', onTouchStart);
            element.removeEventListener('touchend', onTouchEnd);
        };
    });
}


/***/ }),

/***/ "eGMf":
/*!****************************************************!*\
  !*** ./src/app/shared/services/compare.service.ts ***!
  \****************************************************/
/*! exports provided: CompareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareService", function() { return CompareService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





class CompareService {
    constructor(platformId) {
        this.platformId = platformId;
        this.data = {
            items: []
        };
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.itemsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.onAddingSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.items$ = this.itemsSubject$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$));
        this.onAdding$ = this.onAddingSubject$.asObservable();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            this.load();
        }
    }
    add(product) {
        // timer only for demo
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
            this.onAddingSubject$.next(product);
            const index = this.data.items.findIndex(item => item.id === product.id);
            if (index === -1) {
                this.data.items.push(product);
                this.save();
            }
        }));
    }
    remove(product) {
        // timer only for demo
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
            const index = this.data.items.findIndex(item => item.id === product.id);
            if (index !== -1) {
                this.data.items.splice(index, 1);
                this.save();
            }
        }));
    }
    save() {
        localStorage.setItem('compareItems', JSON.stringify(this.data.items));
        this.itemsSubject$.next(this.data.items);
    }
    load() {
        const items = localStorage.getItem('compareItems');
        if (items) {
            this.data.items = JSON.parse(items);
            this.itemsSubject$.next(this.data.items);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CompareService.ɵfac = function CompareService_Factory(t) { return new (t || CompareService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
CompareService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CompareService, factory: CompareService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "eJNX":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/blocks/block-slideshow/block-slideshow.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BlockSlideshowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockSlideshowComponent", function() { return BlockSlideshowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/direction.service */ "KSSz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_directives_departments_area_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/directives/departments-area.directive */ "x2Uf");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _shared_directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/directives/owl-prevent-click.directive */ "0nhT");
/* harmony import */ var _shared_directives_click_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/directives/click.directive */ "x5hD");








function BlockSlideshowComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
} }
function BlockSlideshowComponent_owl_carousel_o_6_1_ng_template_0_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Shop Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
function BlockSlideshowComponent_owl_carousel_o_6_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BlockSlideshowComponent_owl_carousel_o_6_1_ng_template_0_span_7_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, "url(" + (ctx_r4.withDepartments ? slide_r3.image_classic : slide_r3.image_full) + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, "url(" + slide_r3.image_mobile + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r4.sanitizer.bypassSecurityTrustHtml(slide_r3.title), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r4.sanitizer.bypassSecurityTrustHtml(slide_r3.text), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.showShopnow);
} }
function BlockSlideshowComponent_owl_carousel_o_6_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BlockSlideshowComponent_owl_carousel_o_6_1_ng_template_0_Template, 8, 9, "ng-template", 10);
} }
function BlockSlideshowComponent_owl_carousel_o_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "owl-carousel-o", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlockSlideshowComponent_owl_carousel_o_6_1_Template, 1, 0, undefined, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r1.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.slides);
} }
const _c1 = function (a0, a1) { return { "block-slideshow--layout--full": a0, "block-slideshow--layout--with-departments": a1 }; };
const _c2 = function (a0, a1) { return { "col-lg-12": a0, "col-lg-9": a1 }; };
class BlockSlideshowComponent {
    // slides = [
    //     {
    //         title: 'Big choice of<br>Plumbing products',
    //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
    //         image_classic: 'assets/images/slides/slide-1.jpg',
    //         image_full: 'assets/images/slides/slide-1-full.jpg',
    //         image_mobile: 'assets/images/slides/slide-1-mobile.jpg'
    //     },
    //     {
    //         title: 'Screwdrivers<br>Professional Tools',
    //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
    //         image_classic: 'assets/images/slides/slide-2.jpg',
    //         image_full: 'assets/images/slides/slide-2-full.jpg',
    //         image_mobile: 'assets/images/slides/slide-2-mobile.jpg'
    //     },
    //     {
    //         title: 'One more<br>Unique header',
    //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
    //         image_classic: 'assets/images/slides/slide-3.jpg',
    //         image_full: 'assets/images/slides/slide-3-full.jpg',
    //         image_mobile: 'assets/images/slides/slide-3-mobile.jpg'
    //     }
    // ];
    constructor(sanitizer, direction) {
        this.sanitizer = sanitizer;
        this.direction = direction;
        this.withDepartments = false;
        this.showShopnow = false;
        this.slides = [] = [];
        this.options = {
            nav: false,
            dots: true,
            loop: true,
            responsive: {
                0: { items: 1 }
            },
            rtl: this.direction.isRTL()
        };
    }
}
BlockSlideshowComponent.ɵfac = function BlockSlideshowComponent_Factory(t) { return new (t || BlockSlideshowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_direction_service__WEBPACK_IMPORTED_MODULE_2__["DirectionService"])); };
BlockSlideshowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockSlideshowComponent, selectors: [["app-block-slideshow"]], inputs: { withDepartments: "withDepartments", showShopnow: "showShopnow", slides: "slides" }, decls: 7, vars: 10, consts: [[1, "block-slideshow", "block", 3, "ngClass"], [1, "container"], [1, "row"], ["class", "col-3 d-lg-block d-none", "appDepartmentsArea", "", 4, "ngIf"], [1, "col-12", 3, "ngClass"], [1, "block-slideshow__body"], ["appOwlPreventClick", "", 3, "options", 4, "ngIf"], ["appDepartmentsArea", "", 1, "col-3", "d-lg-block", "d-none"], ["appOwlPreventClick", "", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], ["href", "", "appClick", "", 1, "block-slideshow__slide"], [1, "block-slideshow__slide-image", "block-slideshow__slide-image--desktop", 3, "ngStyle"], [1, "block-slideshow__slide-image", "block-slideshow__slide-image--mobile", 3, "ngStyle"], [1, "block-slideshow__slide-content"], [1, "block-slideshow__slide-title", 3, "innerHTML"], [1, "block-slideshow__slide-text", 3, "innerHTML"], [1, "block-slideshow__slide-button"], ["class", "btn btn-primary btn-lg", 4, "ngIf"], [1, "btn", "btn-primary", "btn-lg"]], template: function BlockSlideshowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BlockSlideshowComponent_div_3_Template, 1, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BlockSlideshowComponent_owl_carousel_o_6_Template, 2, 2, "owl-carousel-o", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c1, !ctx.withDepartments, ctx.withDepartments));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.withDepartments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c2, !ctx.withDepartments, ctx.withDepartments));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slides == null ? null : ctx.slides.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_directives_departments_area_directive__WEBPACK_IMPORTED_MODULE_4__["DepartmentsAreaDirective"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"], _shared_directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_6__["OwlPreventClickDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["CarouselSlideDirective"], _shared_directives_click_directive__WEBPACK_IMPORTED_MODULE_7__["ClickDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1zbGlkZXNob3cuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "eKC6":
/*!********************************************************************!*\
  !*** ./src/app/modules/header/components/links/links.component.ts ***!
  \********************************************************************/
/*! exports provided: LinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksComponent", function() { return LinksComponent; });
/* harmony import */ var _data_header_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../data/header-navigation */ "ABis");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/direction.service */ "KSSz");
/* harmony import */ var _shared_services_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/header.service */ "Fc3L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_directives_outside_touch_click_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/directives/outside-touch-click.directive */ "45f6");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ "0njA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_directives_touch_click_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/directives/touch-click.directive */ "OrkT");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../menu/menu.component */ "U6+l");
/* harmony import */ var _megamenu_megamenu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../megamenu/megamenu.component */ "eOub");













const _c0 = ["submenuElement"];
const _c1 = ["itemElement"];
function LinksComponent_li_1_ng_template_2_app_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-icon", 11);
} }
function LinksComponent_li_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LinksComponent_li_1_ng_template_2_app_icon_2_Template, 1, 0, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r1.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.menu);
} }
function LinksComponent_li_1_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("appTouchClick", function LinksComponent_li_1_a_4_Template_a_appTouchClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.onTouchClick($event, item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", item_r1.url)("target", item_r1.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function LinksComponent_li_1_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("appTouchClick", function LinksComponent_li_1_a_5_Template_a_appTouchClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r15.onTouchClick($event, item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", item_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("target", item_r1.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
const _c2 = function (a0) { return { "nav-links__submenu--open": a0 }; };
function LinksComponent_li_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "app-header-menu", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("itemClick", function LinksComponent_li_1_div_6_Template_app_header_menu_itemClick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r20.onSubItemClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c2, ctx_r7.hoveredItem === item_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", item_r1.menu.items);
} }
function LinksComponent_li_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "app-header-megamenu", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("itemClick", function LinksComponent_li_1_div_7_Template_app_header_megamenu_itemClick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r24.onSubItemClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("nav-links__submenu nav-links__submenu--type--megamenu nav-links__submenu--size--", item_r1.menu.size, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c2, ctx_r8.hoveredItem === item_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("menu", item_r1.menu);
} }
const _c3 = function (a0, a1) { return { "nav-links__item--has-submenu": a0, "nav-links__item--hover": a1 }; };
function LinksComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseenter", function LinksComponent_li_1_Template_li_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); const item_r1 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r27.onItemMouseEnter(item_r1); })("mouseleave", function LinksComponent_li_1_Template_li_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); const item_r1 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r29.onItemMouseLeave(item_r1); })("appOutsideTouchClick", function LinksComponent_li_1_Template_li_appOutsideTouchClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); const item_r1 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r30.onOutsideTouchClick(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LinksComponent_li_1_ng_template_2_Template, 3, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, LinksComponent_li_1_a_4_Template, 2, 3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, LinksComponent_li_1_a_5_Template, 2, 3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, LinksComponent_li_1_div_6_Template, 3, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, LinksComponent_li_1_div_7_Template, 3, 7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](5, _c3, item_r1.menu, ctx_r0.hoveredItem === item_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r1.external);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.external);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.menu && item_r1.menu.type == "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.menu && item_r1.menu.type == "megamenu");
} }
class LinksComponent {
    constructor(direction, header, zone) {
        this.direction = direction;
        this.header = header;
        this.zone = zone;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.items = _data_header_navigation__WEBPACK_IMPORTED_MODULE_0__["navigation"];
        this.hoveredItem = null;
        this.reCalcSubmenuPosition = false;
    }
    onItemMouseEnter(item) {
        if (this.hoveredItem !== item) {
            this.hoveredItem = item;
            if (item.menu) {
                this.reCalcSubmenuPosition = true;
            }
        }
    }
    onItemMouseLeave(item) {
        if (this.hoveredItem === item) {
            this.hoveredItem = null;
        }
    }
    onTouchClick(event, item) {
        if (event.cancelable) {
            if (this.hoveredItem && this.hoveredItem === item) {
                return;
            }
            if (item.menu) {
                event.preventDefault();
                this.hoveredItem = item;
                this.reCalcSubmenuPosition = true;
            }
        }
    }
    onOutsideTouchClick(item) {
        if (this.hoveredItem === item) {
            this.zone.run(() => this.hoveredItem = null);
        }
    }
    onSubItemClick() {
        this.hoveredItem = null;
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.header.navPanelPositionState$, this.header.navPanelVisibility$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(() => this.hoveredItem = null);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngAfterViewChecked() {
        if (!this.reCalcSubmenuPosition) {
            return;
        }
        this.reCalcSubmenuPosition = false;
        const itemElement = this.getCurrentItemElement();
        const submenuElement = this.getCurrentSubmenuElement();
        const submenuTop = submenuElement.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        const paddingBottom = 20;
        submenuElement.style.maxHeight = `${viewportHeight - submenuTop - paddingBottom}px`;
        // calc megamenu position
        if (this.hoveredItem.menu.type !== 'megamenu') {
            return;
        }
        const container = submenuElement.offsetParent;
        const containerWidth = container.getBoundingClientRect().width;
        const megamenuWidth = submenuElement.getBoundingClientRect().width;
        if (this.direction.isRTL()) {
            const itemPosition = containerWidth - (itemElement.offsetLeft + itemElement.offsetWidth);
            const megamenuPosition = Math.round(Math.min(itemPosition, containerWidth - megamenuWidth));
            submenuElement.style.right = megamenuPosition + 'px';
        }
        else {
            const itemPosition = itemElement.offsetLeft;
            const megamenuPosition = Math.round(Math.min(itemPosition, containerWidth - megamenuWidth));
            submenuElement.style.left = megamenuPosition + 'px';
        }
    }
    getCurrentItemElement() {
        if (!this.hoveredItem) {
            return null;
        }
        const index = this.items.indexOf(this.hoveredItem);
        const elements = this.itemElements.toArray();
        if (index === -1 || !elements[index]) {
            return null;
        }
        return elements[index].nativeElement;
    }
    getCurrentSubmenuElement() {
        if (!this.hoveredItem) {
            return null;
        }
        const index = this.items.filter(x => x.menu).indexOf(this.hoveredItem);
        const elements = this.submenuElements.toArray();
        if (index === -1 || !elements[index]) {
            return null;
        }
        return elements[index].nativeElement;
    }
}
LinksComponent.ɵfac = function LinksComponent_Factory(t) { return new (t || LinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_direction_service__WEBPACK_IMPORTED_MODULE_4__["DirectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"])); };
LinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LinksComponent, selectors: [["app-header-links"]], viewQuery: function LinksComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.submenuElements = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.itemElements = _t);
    } }, decls: 2, vars: 1, consts: [[1, "nav-links__list"], ["class", "nav-links__item", 3, "ngClass", "mouseenter", "mouseleave", "appOutsideTouchClick", 4, "ngFor", "ngForOf"], [1, "nav-links__item", 3, "ngClass", "mouseenter", "mouseleave", "appOutsideTouchClick"], ["itemElement", ""], ["link", ""], ["class", "nav-links__item-link", 3, "routerLink", "target", "appTouchClick", 4, "ngIf"], ["class", "nav-links__item-link", 3, "href", "target", "appTouchClick", 4, "ngIf"], ["class", "nav-links__submenu nav-links__submenu--type--menu", 3, "ngClass", 4, "ngIf"], [3, "class", "ngClass", 4, "ngIf"], [1, "nav-links__item-body"], ["class", "nav-links__item-arrow", "name", "arrow-rounded-down-9x6", "size", "9x6", 4, "ngIf"], ["name", "arrow-rounded-down-9x6", "size", "9x6", 1, "nav-links__item-arrow"], [1, "nav-links__item-link", 3, "routerLink", "target", "appTouchClick"], [3, "ngTemplateOutlet"], [1, "nav-links__item-link", 3, "href", "target", "appTouchClick"], [1, "nav-links__submenu", "nav-links__submenu--type--menu", 3, "ngClass"], ["submenuElement", ""], [3, "items", "itemClick"], [3, "ngClass"], [3, "menu", "itemClick"]], template: function LinksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LinksComponent_li_1_Template, 8, 8, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _shared_directives_outside_touch_click_directive__WEBPACK_IMPORTED_MODULE_7__["OutsideTouchClickDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__["IconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _shared_directives_touch_click_directive__WEBPACK_IMPORTED_MODULE_10__["TouchClickDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"], _megamenu_megamenu_component__WEBPACK_IMPORTED_MODULE_12__["MegamenuComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaW5rcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "eOub":
/*!**************************************************************************!*\
  !*** ./src/app/modules/header/components/megamenu/megamenu.component.ts ***!
  \**************************************************************************/
/*! exports provided: MegamenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MegamenuComponent", function() { return MegamenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




function MegamenuComponent_div_3_li_2_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MegamenuComponent_div_3_li_2_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.itemClick.emit(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r3.url)("target", item_r3.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.label);
} }
function MegamenuComponent_div_3_li_2_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MegamenuComponent_div_3_li_2_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.itemClick.emit(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("target", item_r3.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.label);
} }
function MegamenuComponent_div_3_li_2_ul_3_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MegamenuComponent_div_3_li_2_ul_3_li_1_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const subItem_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r19.itemClick.emit(subItem_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subItem_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", subItem_r16.url)("target", subItem_r16.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subItem_r16.label);
} }
function MegamenuComponent_div_3_li_2_ul_3_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MegamenuComponent_div_3_li_2_ul_3_li_1_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const subItem_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r23.itemClick.emit(subItem_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subItem_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", subItem_r16.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("target", subItem_r16.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subItem_r16.label);
} }
function MegamenuComponent_div_3_li_2_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MegamenuComponent_div_3_li_2_ul_3_li_1_a_1_Template, 2, 3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MegamenuComponent_div_3_li_2_ul_3_li_1_a_2_Template, 2, 3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subItem_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !subItem_r16.external);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r16.external);
} }
function MegamenuComponent_div_3_li_2_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MegamenuComponent_div_3_li_2_ul_3_li_1_Template, 3, 2, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r3.items);
} }
const _c0 = function (a0) { return { "megamenu__item--with-submenu": a0 }; };
function MegamenuComponent_div_3_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MegamenuComponent_div_3_li_2_a_1_Template, 2, 3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MegamenuComponent_div_3_li_2_a_2_Template, 2, 3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MegamenuComponent_div_3_li_2_ul_3_Template, 2, 1, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, item_r3.items));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r3.external);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.external);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.items);
} }
function MegamenuComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MegamenuComponent_div_3_li_2_Template, 4, 6, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("col-", column_r1.size, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", column_r1.items);
} }
class MegamenuComponent {
    constructor() {
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
MegamenuComponent.ɵfac = function MegamenuComponent_Factory(t) { return new (t || MegamenuComponent)(); };
MegamenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MegamenuComponent, selectors: [["app-header-megamenu"]], inputs: { menu: "menu" }, outputs: { itemClick: "itemClick" }, decls: 4, vars: 3, consts: [[1, "megamenu"], [1, "megamenu__body"], [1, "row"], [3, "class", 4, "ngFor", "ngForOf"], [1, "megamenu__links", "megamenu__links--level--0"], ["class", "megamenu__item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "megamenu__item", 3, "ngClass"], [3, "routerLink", "target", "click", 4, "ngIf"], [3, "href", "target", "click", 4, "ngIf"], ["class", "megamenu__links megamenu__links--level--1", 4, "ngIf"], [3, "routerLink", "target", "click"], [3, "href", "target", "click"], [1, "megamenu__links", "megamenu__links--level--1"], ["class", "megamenu__item", 4, "ngFor", "ngForOf"], [1, "megamenu__item"]], template: function MegamenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MegamenuComponent_div_3_Template, 3, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx.menu.image ? "url(" + ctx.menu.image + ")" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menu.columns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWdhbWVudS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "ft+r":
/*!****************************************!*\
  !*** ./src/data/header-departments.ts ***!
  \****************************************/
/*! exports provided: departments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "departments", function() { return departments; });
const departments = [
    { label: 'Power Tools', url: '/shop/catalog', menu: {
            type: 'megamenu',
            size: 'xl',
            image: 'assets/images/megamenu/megamenu-1.jpg',
            columns: [
                { size: 3, items: [
                        { label: 'Power Tools', url: '/shop/catalog', items: [
                                { label: 'Engravers', url: '/shop/catalog' },
                                { label: 'Drills', url: '/shop/catalog' },
                                { label: 'Wrenches', url: '/shop/catalog' },
                                { label: 'Plumbing', url: '/shop/catalog' },
                                { label: 'Wall Chaser', url: '/shop/catalog' },
                                { label: 'Pneumatic Tools', url: '/shop/catalog' },
                                { label: 'Milling Cutters', url: '/shop/catalog' }
                            ] },
                        { label: 'Workbenches', url: '/shop/catalog' },
                        { label: 'Presses', url: '/shop/catalog' },
                        { label: 'Spray Guns', url: '/shop/catalog' },
                        { label: 'Riveters', url: '/shop/catalog' }
                    ] },
                { size: 3, items: [
                        { label: 'Hand Tools', url: '/shop/catalog', items: [
                                { label: 'Screwdrivers', url: '/shop/catalog' },
                                { label: 'Handsaws', url: '/shop/catalog' },
                                { label: 'Knives', url: '/shop/catalog' },
                                { label: 'Axes', url: '/shop/catalog' },
                                { label: 'Multitools', url: '/shop/catalog' },
                                { label: 'Paint Tools', url: '/shop/catalog' }
                            ] },
                        { label: 'Garden Equipment', url: '/shop/catalog', items: [
                                { label: 'Motor Pumps', url: '/shop/catalog' },
                                { label: 'Chainsaws', url: '/shop/catalog' },
                                { label: 'Electric Saws', url: '/shop/catalog' },
                                { label: 'Brush Cutters', url: '/shop/catalog' }
                            ] }
                    ] },
                { size: 3, items: [
                        { label: 'Machine Tools', url: '/shop/catalog', items: [
                                { label: 'Thread Cutting', url: '/shop/catalog' },
                                { label: 'Chip Blowers', url: '/shop/catalog' },
                                { label: 'Sharpening Machines', url: '/shop/catalog' },
                                { label: 'Pipe Cutters', url: '/shop/catalog' },
                                { label: 'Slotting machines', url: '/shop/catalog' },
                                { label: 'Lathes', url: '/shop/catalog' }
                            ] }
                    ] },
                { size: 3, items: [
                        { label: 'Instruments', url: '/shop/catalog', items: [
                                { label: 'Welding Equipment', url: '/shop/catalog' },
                                { label: 'Power Tools', url: '/shop/catalog' },
                                { label: 'Hand Tools', url: '/shop/catalog' },
                                { label: 'Measuring Tool', url: '/shop/catalog' }
                            ] }
                    ] }
            ]
        } },
    { label: 'Hand Tools', url: '/shop/catalog', menu: {
            type: 'megamenu',
            size: 'lg',
            image: 'assets/images/megamenu/megamenu-2.jpg',
            columns: [
                { size: 4, items: [
                        { label: 'Hand Tools', url: '/shop/catalog', items: [
                                { label: 'Screwdrivers', url: '/shop/catalog' },
                                { label: 'Handsaws', url: '/shop/catalog' },
                                { label: 'Knives', url: '/shop/catalog' },
                                { label: 'Axes', url: '/shop/catalog' },
                                { label: 'Multitools', url: '/shop/catalog' },
                                { label: 'Paint Tools', url: '/shop/catalog' }
                            ] },
                        { label: 'Garden Equipment', url: '/shop/catalog', items: [
                                { label: 'Motor Pumps', url: '/shop/catalog' },
                                { label: 'Chainsaws', url: '/shop/catalog' },
                                { label: 'Electric Saws', url: '/shop/catalog' },
                                { label: 'Brush Cutters', url: '/shop/catalog' }
                            ] }
                    ] },
                { size: 4, items: [
                        { label: 'Machine Tools', url: '/shop/catalog', items: [
                                { label: 'Thread Cutting', url: '/shop/catalog' },
                                { label: 'Chip Blowers', url: '/shop/catalog' },
                                { label: 'Sharpening Machines', url: '/shop/catalog' },
                                { label: 'Pipe Cutters', url: '/shop/catalog' },
                                { label: 'Slotting machines', url: '/shop/catalog' },
                                { label: 'Lathes', url: '/shop/catalog' }
                            ] }
                    ] },
                { size: 4, items: [
                        { label: 'Instruments', url: '/shop/catalog', items: [
                                { label: 'Welding Equipment', url: '/shop/catalog' },
                                { label: 'Power Tools', url: '/shop/catalog' },
                                { label: 'Hand Tools', url: '/shop/catalog' },
                                { label: 'Measuring Tool', url: '/shop/catalog' }
                            ] }
                    ] }
            ]
        } },
    { label: 'Machine Tools', url: '/shop/catalog', menu: {
            type: 'megamenu',
            size: 'nl',
            image: 'assets/images/megamenu/megamenu-3.jpg',
            columns: [
                { size: 6, items: [
                        { label: 'Hand Tools', url: '/shop/catalog', items: [
                                { label: 'Screwdrivers', url: '/shop/catalog' },
                                { label: 'Handsaws', url: '/shop/catalog' },
                                { label: 'Knives', url: '/shop/catalog' },
                                { label: 'Axes', url: '/shop/catalog' },
                                { label: 'Multitools', url: '/shop/catalog' },
                                { label: 'Paint Tools', url: '/shop/catalog' }
                            ] },
                        { label: 'Garden Equipment', url: '/shop/catalog', items: [
                                { label: 'Motor Pumps', url: '/shop/catalog' },
                                { label: 'Chainsaws', url: '/shop/catalog' },
                                { label: 'Electric Saws', url: '/shop/catalog' },
                                { label: 'Brush Cutters', url: '/shop/catalog' }
                            ] }
                    ] },
                { size: 6, items: [
                        { label: 'Instruments', url: '/shop/catalog', items: [
                                { label: 'Welding Equipment', url: '/shop/catalog' },
                                { label: 'Power Tools', url: '/shop/catalog' },
                                { label: 'Hand Tools', url: '/shop/catalog' },
                                { label: 'Measuring Tool', url: '/shop/catalog' }
                            ] }
                    ] }
            ]
        } },
    { label: 'Building Supplies', url: '/shop/catalog', menu: {
            type: 'megamenu',
            size: 'sm',
            columns: [
                { size: 12, items: [
                        { label: 'Hand Tools', url: '/shop/catalog', items: [
                                { label: 'Screwdrivers', url: '/shop/catalog' },
                                { label: 'Handsaws', url: '/shop/catalog' },
                                { label: 'Knives', url: '/shop/catalog' },
                                { label: 'Axes', url: '/shop/catalog' },
                                { label: 'Multitools', url: '/shop/catalog' },
                                { label: 'Paint Tools', url: '/shop/catalog' }
                            ] },
                        { label: 'Garden Equipment', url: '/shop/catalog', items: [
                                { label: 'Motor Pumps', url: '/shop/catalog' },
                                { label: 'Chainsaws', url: '/shop/catalog' },
                                { label: 'Electric Saws', url: '/shop/catalog' },
                                { label: 'Brush Cutters', url: '/shop/catalog' }
                            ] }
                    ] }
            ]
        } },
    { label: 'Electrical', url: '/shop/catalog', menu: {
            type: 'menu',
            items: [
                { label: 'Soldering Equipment', url: '/shop/catalog', items: [
                        { label: 'Soldering Station', url: '/shop/catalog' },
                        { label: 'Soldering Dryers', url: '/shop/catalog' },
                        { label: 'Gas Soldering Iron', url: '/shop/catalog' },
                        { label: 'Electric Soldering Iron', url: '/shop/catalog' }
                    ] },
                { label: 'Light Bulbs', url: '/shop/catalog' },
                { label: 'Batteries', url: '/shop/catalog' },
                { label: 'Light Fixtures', url: '/shop/catalog' },
                { label: 'Warm Floor', url: '/shop/catalog' },
                { label: 'Generators', url: '/shop/catalog' },
                { label: 'UPS', url: '/shop/catalog' }
            ]
        } },
    { label: 'Power Machinery', url: '/shop/catalog' },
    { label: 'Measurement', url: '/shop/catalog' },
    { label: 'Clothes & PPE', url: '/shop/catalog' },
    { label: 'Plumbing', url: '/shop/catalog' },
    { label: 'Storage & Organization', url: '/shop/catalog' },
    { label: 'Welding & Soldering', url: '/shop/catalog' }
];


/***/ }),

/***/ "g+fx":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/share-buttons/share-buttons.component.ts ***!
  \****************************************************************************/
/*! exports provided: ShareButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareButtonsComponent", function() { return ShareButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_click_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/click.directive */ "x5hD");





function ShareButtonsComponent_li_1_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("share-buttons__item-icon ", item_r1.icon, "");
} }
function ShareButtonsComponent_li_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.label);
} }
function ShareButtonsComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShareButtonsComponent_li_1_i_2_Template, 1, 3, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShareButtonsComponent_li_1_span_3_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("share-buttons__item share-buttons__item--type--", item_r1.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("share-buttons__item--without-label", !(item_r1.label && ctx_r0.showLabels));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", item_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.icon && ctx_r0.showIcons);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.label && ctx_r0.showLabels);
} }
const shareButtonsDef = {
    facebook: {
        url: 'https://www.facebook.com/sharer/sharer.php?u=%URL%',
        icon: 'fab fa-facebook-f',
        label: 'Like',
    },
    twitter: {
        url: 'https://twitter.com/share?url=%URL%',
        icon: 'fab fa-twitter',
        label: 'Tweet',
    },
    pinterest: {
        url: 'https://pinterest.com/pin/create/button/?url=%URL%&media=%IMAGE%&description=%TITLE%',
        icon: 'fab fa-pinterest',
        label: 'Pin It',
    },
    whatsapp: {
        url: 'https://wa.me/?text=%URL%',
        icon: 'fab fa-whatsapp',
        label: 'Share',
    },
    linkedin: {
        url: 'https://www.linkedin.com/shareArticle?title=%TITLE%&url=%URL%',
        icon: 'fab fa-linkedin',
        label: 'Share',
    },
    ok: {
        url: 'https://connect.ok.ru/offer?url=%URL%&title=%TITLE%&imageUrl=%IMAGE%',
        icon: 'fab fa-odnoklassniki',
        label: 'Share',
    },
    vk: {
        url: 'https://vk.com/share.php?url=%URL%',
        icon: 'fab fa-vk',
        label: 'Share',
    },
    telegram: {
        url: 'https://telegram.me/share/url?url=%URL%&text=%TITLE%',
        icon: 'fas fa-paper-plane',
        label: 'Share',
    },
    email: {
        url: 'mailto:?to=&subject=%TITLE%&body=%URL%',
        icon: 'fas fa-envelope',
        label: 'Share',
    },
};
class ShareButtonsComponent {
    constructor(platformId) {
        this.platformId = platformId;
        this.items = [];
        this.buttons = [];
        this.showIcons = true;
        this.showLabels = true;
        this.classShareLinks = true;
    }
    ngOnChanges(changes) {
        if (changes.buttons || changes.pageUrl || changes.pageTitle || changes.pageImage) {
            this.makeItems();
        }
    }
    makeItems() {
        let value = this.buttons;
        if (typeof value === 'string') {
            value = value.split(',');
        }
        this.items = value.map(x => {
            const userDef = typeof x === 'string' ? { type: x } : x;
            const type = userDef.type;
            const def = shareButtonsDef[type];
            if (!def) {
                return null;
            }
            return {
                type,
                url: this.makeShareUrl(def.url),
                label: typeof userDef.label === 'string' ? userDef.label : def.label,
                icon: typeof userDef.icon === 'string' ? userDef.icon : def.icon,
            };
        }).filter(x => x !== null);
    }
    makeShareUrl(baseUrl) {
        let pageUrl = '';
        let pageTitle = '';
        let pageImage = '';
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            pageUrl = window.location.href;
        }
        pageUrl = this.pageUrl || pageUrl;
        pageTitle = this.pageTitle || pageTitle;
        pageImage = this.pageImage || pageImage;
        return baseUrl
            .replace('%URL%', encodeURIComponent(pageUrl))
            .replace('%TITLE%', encodeURIComponent(pageTitle))
            .replace('%IMAGE%', encodeURIComponent(pageImage));
    }
}
ShareButtonsComponent.ɵfac = function ShareButtonsComponent_Factory(t) { return new (t || ShareButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
ShareButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShareButtonsComponent, selectors: [["app-share-buttons"]], hostVars: 2, hostBindings: function ShareButtonsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("share-buttons", ctx.classShareLinks);
    } }, inputs: { buttons: "buttons", showIcons: "showIcons", showLabels: "showLabels", pageUrl: "pageUrl", pageTitle: "pageTitle", pageImage: "pageImage" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 1, consts: [[1, "share-buttons__list"], [3, "class", "share-buttons__item--without-label", 4, "ngFor", "ngForOf"], ["target", "_blank", "appClick", ""], [3, "class", 4, "ngIf"], ["class", "share-buttons__item-label", 4, "ngIf"], [1, "share-buttons__item-label"]], template: function ShareButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShareButtonsComponent_li_1_Template, 4, 8, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _directives_click_directive__WEBPACK_IMPORTED_MODULE_2__["ClickDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFyZS1idXR0b25zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "gf8J":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/rating/rating.component.ts ***!
  \**************************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


const _c0 = function (a0) { return { "rating__star--active": a0 }; };
function RatingComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "use", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "use", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.value >= i_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.value >= i_r1));
} }
const _c1 = function () { return [1, 2, 3, 4, 5]; };
class RatingComponent {
    constructor() {
        this.value = 0;
    }
}
RatingComponent.ɵfac = function RatingComponent_Factory(t) { return new (t || RatingComponent)(); };
RatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RatingComponent, selectors: [["app-rating"]], inputs: { value: "value" }, decls: 3, vars: 2, consts: [[1, "rating"], [1, "rating__body"], [4, "ngFor", "ngForOf"], ["width", "13px", "height", "12px", 1, "rating__star", 3, "ngClass"], [1, "rating__fill"], [0, "xlink", "href", "assets/images/sprite.svg#star-normal"], [1, "rating__stroke"], [0, "xlink", "href", "assets/images/sprite.svg#star-normal-stroke"], [1, "rating__star", "rating__star--only-edge", 3, "ngClass"], [1, "fake-svg-icon"]], template: function RatingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RatingComponent_ng_container_2_Template, 11, 6, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYXRpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "h4zV":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/product-gallery/product-gallery.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProductGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductGalleryComponent", function() { return ProductGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_photo_swipe_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/photo-swipe.service */ "wiLq");
/* harmony import */ var _services_direction_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/direction.service */ "KSSz");
/* harmony import */ var ngx_red_zoom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-red-zoom */ "bC/r");
/* harmony import */ var _directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../directives/owl-prevent-click.directive */ "0nhT");
/* harmony import */ var _directives_fake_slides_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../directives/fake-slides.directive */ "V07N");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../icon/icon.component */ "0njA");
/* harmony import */ var _directives_click_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../directives/click.directive */ "x5hD");

















const _c0 = ["featuredCarousel"];
const _c1 = ["thumbnailsCarousel"];
const _c2 = ["imageElement"];
function ProductGalleryComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductGalleryComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.openPhotoSwipe(ctx_r7.currentItem); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductGalleryComponent_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductGalleryComponent_5_ng_template_0_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onFeaturedImageClick($event, item_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r9.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r9.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProductGalleryComponent_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductGalleryComponent_5_ng_template_0_Template, 4, 2, "ng-template", 11);
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", item_r9.id);
} }
function ProductGalleryComponent_10_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductGalleryComponent_10_ng_template_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.onThumbnailImageClick(item_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("product-gallery__carousel-item--active", item_r16 === ctx_r17.currentItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r16.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProductGalleryComponent_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductGalleryComponent_10_ng_template_0_Template, 3, 3, "ng-template", 11);
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", item_r16.id);
} }
function ProductGalleryComponent_11_ng_template_0_Template(rf, ctx) { }
function ProductGalleryComponent_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductGalleryComponent_11_ng_template_0_Template, 0, 0, "ng-template", 11);
} if (rf & 2) {
    const i_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "fake-slide-" + i_r22);
} }
class ProductGalleryComponent {
    constructor(platformId, photoSwipe, direction, router) {
        this.platformId = platformId;
        this.photoSwipe = photoSwipe;
        this.direction = direction;
        this.router = router;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.items = [];
        this.currentItem = null;
        this.carouselOptions = {
            dots: false,
            autoplay: false,
            responsive: {
                0: { items: 1 }
            },
            rtl: this.direction.isRTL()
        };
        this.thumbnailsCarouselOptions = {
            dots: false,
            autoplay: false,
            margin: 10,
            items: 5,
            responsive: {
                480: { items: 5 },
                380: { items: 4 },
                0: { items: 3 }
            },
            rtl: this.direction.isRTL()
        };
        this.galleryRef = null;
        this.galleryIsClosed = false;
        this.classProductGallery = true;
    }
    set images(images) {
        this.items = images.map((image, index) => ({ id: `image-${index}`, image }));
        this.currentItem = this.items[0] || null;
    }
    ngOnInit() {
        if (this.productLayout !== 'quickview' && Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            this.photoSwipe.load().subscribe();
        }
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(() => {
            this.galleryIsClosed = true;
            if (this.galleryRef) {
                this.galleryRef.close();
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    featuredCarouselTranslated(event) {
        if (event.slides.length) {
            const activeImageId = event.slides[0].id;
            this.currentItem = this.items.find(x => x.id === activeImageId) || this.items[0] || null;
            if (!this.thumbnailsCarousel.slidesData.find(slide => slide.id === activeImageId && slide.isActive)) {
                this.thumbnailsCarousel.to(activeImageId);
            }
        }
    }
    getDirDependentIndex(index) {
        // we need to invert index id direction === 'rtl' because photoswipe do not support rtl
        if (this.direction.isRTL()) {
            return this.items.length - 1 - index;
        }
        return index;
    }
    onFeaturedImageClick(event, image) {
        if (this.productLayout !== 'quickview') {
            event.preventDefault();
            this.openPhotoSwipe(image);
        }
    }
    onThumbnailImageClick(item) {
        this.featuredCarousel.to(item.id);
        this.currentItem = item;
    }
    openPhotoSwipe(item) {
        if (!item) {
            return;
        }
        const imageElements = this.imageElements.map(x => x.nativeElement);
        const images = this.items.map((eachItem, i) => {
            const tag = imageElements[i];
            const width = parseFloat(tag.dataset.width) || tag.naturalWidth;
            const height = parseFloat(tag.dataset.height) || tag.naturalHeight;
            return {
                src: eachItem.image,
                msrc: eachItem.image,
                w: width,
                h: height,
            };
        });
        if (this.direction.isRTL()) {
            images.reverse();
        }
        // noinspection JSUnusedGlobalSymbols
        const options = {
            getThumbBoundsFn: index => {
                if (this.galleryIsClosed) {
                    return null;
                }
                return this.getThumbBounds(index);
            },
            index: this.getDirDependentIndex(this.items.indexOf(item)),
            bgOpacity: .9,
            history: false,
        };
        this.photoSwipe.open(images, options).subscribe(galleryRef => {
            galleryRef.listen('beforeChange', () => {
                this.featuredCarousel.to(this.items[this.getDirDependentIndex(galleryRef.getCurrentIndex())].id);
            });
            this.galleryRef = galleryRef;
        });
    }
    getThumbBounds(index) {
        const imageElements = this.imageElements.toArray();
        const dirDependentIndex = this.getDirDependentIndex(index);
        if (!imageElements[dirDependentIndex]) {
            return null;
        }
        const tag = imageElements[dirDependentIndex].nativeElement;
        const width = tag.naturalWidth;
        const height = tag.naturalHeight;
        const rect = tag.getBoundingClientRect();
        const ration = Math.min(rect.width / width, rect.height / height);
        const fitWidth = width * ration;
        const fitHeight = height * ration;
        return {
            x: rect.left + (rect.width - fitWidth) / 2 + window.pageXOffset,
            y: rect.top + (rect.height - fitHeight) / 2 + window.pageYOffset,
            w: fitWidth,
        };
    }
}
ProductGalleryComponent.ɵfac = function ProductGalleryComponent_Factory(t) { return new (t || ProductGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_photo_swipe_service__WEBPACK_IMPORTED_MODULE_6__["PhotoSwipeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_direction_service__WEBPACK_IMPORTED_MODULE_7__["DirectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ProductGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductGalleryComponent, selectors: [["app-product-gallery"]], viewQuery: function ProductGalleryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.featuredCarousel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.thumbnailsCarousel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imageElements = _t);
    } }, hostVars: 2, hostBindings: function ProductGalleryComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("product-gallery", ctx.classProductGallery);
    } }, inputs: { productLayout: "productLayout", images: "images" }, decls: 12, vars: 11, consts: [[1, "product-gallery__featured", 3, "redZoomClass", "redZoom", "redZoomThumb", "redZoomLazy"], [1, "product-gallery__featured-inset"], ["class", "product-gallery__zoom", 3, "click", 4, "ngIf"], ["appOwlPreventClick", "", 3, "options", "changed"], ["featuredCarousel", ""], [4, "ngFor", "ngForOf"], [1, "product-gallery__carousel"], ["appOwlPreventClick", "", 3, "options", "appFakeSlides"], ["fakeSlides", "appFakeSlides", "thumbnailsCarousel", ""], [1, "product-gallery__zoom", 3, "click"], ["name", "zoom-in-24", "size", "24"], ["carouselSlide", "", 3, "id"], [1, "product-image", "product-image--location--gallery"], ["appClick", "", "target", "_blank", 1, "product-image__body", 3, "href", "click"], ["alt", "", 1, "product-image__img", 3, "src"], ["imageElement", ""], ["appClick", "", 1, "product-image", "product-gallery__carousel-item", 3, "click"], [1, "product-image__body"], ["alt", "", 1, "product-image__img", "product-gallery__carousel-image", 3, "src"]], template: function ProductGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductGalleryComponent_button_2_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "owl-carousel-o", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function ProductGalleryComponent_Template_owl_carousel_o_changed_3_listener($event) { return ctx.featuredCarouselTranslated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductGalleryComponent_5_Template, 1, 1, undefined, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "owl-carousel-o", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductGalleryComponent_10_Template, 1, 1, undefined, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProductGalleryComponent_11_Template, 1, 1, undefined, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("redZoomClass", "product-red-zoom product-red-zoom--layout--", ctx.productLayout, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("redZoom", ctx.currentItem.image)("redZoomThumb", ctx.currentItem.image)("redZoomLazy", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productLayout !== "quickview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.carouselOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.thumbnailsCarouselOptions)("appFakeSlides", ctx.items.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r3.slides);
    } }, directives: [ngx_red_zoom__WEBPACK_IMPORTED_MODULE_8__["RedZoomDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_9__["OwlPreventClickDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _directives_fake_slides_directive__WEBPACK_IMPORTED_MODULE_10__["FakeSlidesDirective"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_11__["IconComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__["CarouselSlideDirective"], _directives_click_directive__WEBPACK_IMPORTED_MODULE_12__["ClickDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWdhbGxlcnkuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "hhBN":
/*!*************************************************!*\
  !*** ./src/app/modules/blocks/blocks.module.ts ***!
  \*************************************************/
/*! exports provided: BlocksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlocksModule", function() { return BlocksModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _block_banner_block_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block-banner/block-banner.component */ "alZB");
/* harmony import */ var _block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block-brands/block-brands.component */ "+PBj");
/* harmony import */ var _block_categories_block_categories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block-categories/block-categories.component */ "lLv2");
/* harmony import */ var _block_features_block_features_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./block-features/block-features.component */ "pOSb");
/* harmony import */ var _block_map_block_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./block-map/block-map.component */ "YFrV");
/* harmony import */ var _block_posts_block_posts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./block-posts/block-posts.component */ "ObXf");
/* harmony import */ var _block_product_columns_block_product_columns_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./block-product-columns/block-product-columns.component */ "JQhK");
/* harmony import */ var _block_product_columns_block_product_columns_item_block_product_columns_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./block-product-columns/block-product-columns-item/block-product-columns-item.component */ "ZPbr");
/* harmony import */ var _block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./block-products-carousel/block-products-carousel.component */ "jb21");
/* harmony import */ var _block_products_block_products_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./block-products/block-products.component */ "XLOE");
/* harmony import */ var _block_slideshow_block_slideshow_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./block-slideshow/block-slideshow.component */ "eJNX");
/* harmony import */ var _components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/block-header/block-header.component */ "Q73p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");
// modules (angular)


// modules (third-party)

// modules

// blocks











// components


class BlocksModule {
}
BlocksModule.ɵfac = function BlocksModule_Factory(t) { return new (t || BlocksModule)(); };
BlocksModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: BlocksModule });
BlocksModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [[
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            // modules (third-party)
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselModule"],
            // modules
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](BlocksModule, { declarations: [
        // blocks
        _block_banner_block_banner_component__WEBPACK_IMPORTED_MODULE_4__["BlockBannerComponent"],
        _block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_5__["BlockBrandsComponent"],
        _block_categories_block_categories_component__WEBPACK_IMPORTED_MODULE_6__["BlockCategoriesComponent"],
        _block_features_block_features_component__WEBPACK_IMPORTED_MODULE_7__["BlockFeaturesComponent"],
        _block_map_block_map_component__WEBPACK_IMPORTED_MODULE_8__["BlockMapComponent"],
        _block_posts_block_posts_component__WEBPACK_IMPORTED_MODULE_9__["BlockPostsComponent"],
        _block_product_columns_block_product_columns_component__WEBPACK_IMPORTED_MODULE_10__["BlockProductColumnsComponent"],
        _block_product_columns_block_product_columns_item_block_product_columns_item_component__WEBPACK_IMPORTED_MODULE_11__["BlockProductColumnsItemComponent"],
        _block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_12__["BlockProductsCarouselComponent"],
        _block_products_block_products_component__WEBPACK_IMPORTED_MODULE_13__["BlockProductsComponent"],
        _block_slideshow_block_slideshow_component__WEBPACK_IMPORTED_MODULE_14__["BlockSlideshowComponent"],
        // components
        _components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_15__["BlockHeaderComponent"]], imports: [
        // modules (angular)
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        // modules (third-party)
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselModule"],
        // modules
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]], exports: [
        // blocks
        _block_banner_block_banner_component__WEBPACK_IMPORTED_MODULE_4__["BlockBannerComponent"],
        _block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_5__["BlockBrandsComponent"],
        _block_categories_block_categories_component__WEBPACK_IMPORTED_MODULE_6__["BlockCategoriesComponent"],
        _block_features_block_features_component__WEBPACK_IMPORTED_MODULE_7__["BlockFeaturesComponent"],
        _block_map_block_map_component__WEBPACK_IMPORTED_MODULE_8__["BlockMapComponent"],
        _block_posts_block_posts_component__WEBPACK_IMPORTED_MODULE_9__["BlockPostsComponent"],
        _block_product_columns_block_product_columns_component__WEBPACK_IMPORTED_MODULE_10__["BlockProductColumnsComponent"],
        _block_product_columns_block_product_columns_item_block_product_columns_item_component__WEBPACK_IMPORTED_MODULE_11__["BlockProductColumnsItemComponent"],
        _block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_12__["BlockProductsCarouselComponent"],
        _block_products_block_products_component__WEBPACK_IMPORTED_MODULE_13__["BlockProductsComponent"],
        _block_slideshow_block_slideshow_component__WEBPACK_IMPORTED_MODULE_14__["BlockSlideshowComponent"]] }); })();


/***/ }),

/***/ "hmow":
/*!**************************************************************************!*\
  !*** ./src/app/modules/header/components/dropcart/dropcart.component.ts ***!
  \**************************************************************************/
/*! exports provided: DropcartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropcartComponent", function() { return DropcartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_offcanvas_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/offcanvas-cart.service */ "zCMj");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ "Xgv5");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/root.service */ "imTr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ "0njA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/pipes/currency-format.pipe */ "wGjQ");









function DropcartComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropcartComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DropcartComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Shopping Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropcartComponent_div_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DropcartComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your shopping cart is empty! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DropcartComponent_ng_container_7_div_2_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropcartComponent_ng_container_7_div_2_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.closeMenu.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r12.root.product(item_r11.product));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r11.product.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DropcartComponent_ng_container_7_div_2_ul_7_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", option_r18.name, ": ", option_r18.value, "");
} }
function DropcartComponent_ng_container_7_div_2_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DropcartComponent_ng_container_7_div_2_ul_7_li_1_Template, 2, 2, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r11.options);
} }
const _c0 = function (a0) { return { "btn-loading": a0 }; };
function DropcartComponent_ng_container_7_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DropcartComponent_ng_container_7_div_2_a_2_Template, 2, 2, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropcartComponent_ng_container_7_div_2_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.closeMenu.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DropcartComponent_ng_container_7_div_2_ul_7_Template, 2, 1, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropcartComponent_ng_container_7_div_2_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const item_r11 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.remove(item_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.product.images == null ? null : item_r11.product.images.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r8.root.product(item_r11.product));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.options.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 7, item_r11.product.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx_r8.removedItems.includes(item_r11)));
} }
function DropcartComponent_ng_container_7_tr_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, ctx_r9.cart.subtotal$)));
} }
function DropcartComponent_ng_container_7_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const total_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](total_r23.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, total_r23.price));
} }
function DropcartComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DropcartComponent_ng_container_7_div_2_Template, 17, 11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DropcartComponent_ng_container_7_tr_6_Template, 7, 5, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DropcartComponent_ng_container_7_tr_8_Template, 6, 4, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropcartComponent_ng_container_7_Template_a_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.closeMenu.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "View Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropcartComponent_ng_container_7_Template_a_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.closeMenu.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx_r3.cart.items$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, ctx_r3.cart.totals$).length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 10, ctx_r3.cart.totals$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 14, ctx_r3.cart.total$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r3.root.cart());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r3.root.checkout());
} }
const _c1 = function (a1, a2, a3) { return { dropcart: true, "dropcart--style--dropdown": a1, "dropcart--style--offcanvas": a2, "dropcart--open": a3 }; };
class DropcartComponent {
    constructor(state, cart, root) {
        this.state = state;
        this.cart = cart;
        this.root = root;
        this.removedItems = [];
        this.type = 'dropdown';
        this.closeMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    remove(item) {
        if (this.removedItems.includes(item)) {
            return;
        }
        this.removedItems.push(item);
        this.cart.remove(item).subscribe({ complete: () => this.removedItems = this.removedItems.filter(eachItem => eachItem !== item) });
    }
    close() {
        this.state.close();
    }
}
DropcartComponent.ɵfac = function DropcartComponent_Factory(t) { return new (t || DropcartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_offcanvas_cart_service__WEBPACK_IMPORTED_MODULE_1__["OffcanvasCartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_3__["RootService"])); };
DropcartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DropcartComponent, selectors: [["app-header-dropcart"]], inputs: { type: "type" }, outputs: { closeMenu: "closeMenu" }, decls: 9, vars: 16, consts: [["class", "dropcart__backdrop", 3, "click", 4, "ngIf"], [1, "dropcart__body"], ["class", "dropcart__header", 4, "ngIf"], ["class", "dropcart__empty", 4, "ngIf"], [4, "ngIf"], [1, "dropcart__backdrop", 3, "click"], [1, "dropcart__header"], [1, "dropcart__title"], ["type", "button", 1, "dropcart__close", 3, "click"], ["name", "cross-12", "size", "12"], [1, "dropcart__empty"], [1, "dropcart__products-list"], ["class", "dropcart__product", 4, "ngFor", "ngForOf"], [1, "dropcart__totals"], [4, "ngFor", "ngForOf"], [1, "dropcart__buttons"], [1, "btn", "btn-secondary", 3, "routerLink", "click"], [1, "btn", "btn-primary", 3, "routerLink", "click"], [1, "dropcart__product"], [1, "dropcart__product-image", "product-image"], ["class", "product-image__body", 3, "routerLink", "click", 4, "ngIf"], [1, "dropcart__product-info"], [1, "dropcart__product-name"], [3, "routerLink", "click"], ["class", "dropcart__product-options", 4, "ngIf"], [1, "dropcart__product-meta"], [1, "dropcart__product-quantity"], [1, "dropcart__product-price"], ["type", "button", 1, "dropcart__product-remove", "btn", "btn-light", "btn-sm", "btn-svg-icon", 3, "ngClass", "click"], ["name", "cross-10", "size", "10"], [1, "product-image__body", 3, "routerLink", "click"], ["alt", "", 1, "product-image__img", 3, "src"], [1, "dropcart__product-options"]], template: function DropcartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DropcartComponent_div_2_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DropcartComponent_div_4_Template, 5, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DropcartComponent_div_5_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DropcartComponent_ng_container_7_Template, 22, 16, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](12, _c1, ctx.type === "dropdown", ctx.type === "offcanvas", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 6, ctx.state.isOpen$)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "offcanvas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "offcanvas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 8, ctx.cart.items$).length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 10, ctx.cart.items$).length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_7__["CurrencyFormatPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcm9wY2FydC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "imTr":
/*!*************************************************!*\
  !*** ./src/app/shared/services/root.service.ts ***!
  \*************************************************/
/*! exports provided: RootService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootService", function() { return RootService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RootService {
    constructor() { }
    home() {
        return '/';
    }
    shop() {
        return `/shop/catalog`;
    }
    category(category) {
        if (category.type === 'shop') {
            const basePath = this.shop();
            if ('slug' in category) {
                return `${basePath}/${category.slug}`;
            }
            if ('id' in category) {
                return `${basePath}/${category.id}`;
            }
            throw Error('Provide category with "path", "slug" or "id".');
        }
        if (category.type === 'blog') {
            return this.blog();
        }
        throw Error('Provided category with unknown type.');
    }
    product(product) {
        const basePath = '/shop/products';
        if ('slug' in product) {
            return `${basePath}/${product.slug}`;
        }
        if ('id' in product) {
            return `${basePath}/${product.id}`;
        }
        throw Error('Provide product with "slug" or "id".');
    }
    brand(brand) {
        return '/';
    }
    cart() {
        return '/shop/cart';
    }
    checkout() {
        return '/shop/cart/checkout';
    }
    wishlist() {
        return '/shop/wishlist';
    }
    blog() {
        return '/blog';
    }
    post() {
        return `/blog/post-classic`;
    }
    login() {
        return '/account/login';
    }
    terms() {
        return '/site/terms';
    }
    notFound() {
        return `/site/not-found`;
    }
}
RootService.ɵfac = function RootService_Factory(t) { return new (t || RootService)(); };
RootService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RootService, factory: RootService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "jb21":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/blocks/block-products-carousel/block-products-carousel.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: BlockProductsCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockProductsCarouselComponent", function() { return BlockProductsCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/direction.service */ "KSSz");
/* harmony import */ var _components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/block-header/block-header.component */ "Q73p");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _shared_directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/directives/owl-prevent-click.directive */ "0nhT");
/* harmony import */ var _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/product-card/product-card.component */ "nS2t");









const _c0 = ["container"];
function BlockProductsCarouselComponent_div_1_7_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r7);
} }
function BlockProductsCarouselComponent_div_1_7_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlockProductsCarouselComponent_div_1_7_ng_template_0_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", column_r4);
} }
function BlockProductsCarouselComponent_div_1_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BlockProductsCarouselComponent_div_1_7_ng_template_0_Template, 2, 1, "ng-template", 10);
} }
const _c1 = function (a0) { return { "container": a0 }; };
function BlockProductsCarouselComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-block-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("next", function BlockProductsCarouselComponent_div_1_Template_app_block_header_next_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r2.next(); })("prev", function BlockProductsCarouselComponent_div_1_Template_app_block_header_prev_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r2.prev(); })("groupChange", function BlockProductsCarouselComponent_div_1_Template_app_block_header_groupChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.groupChange.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "owl-carousel-o", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BlockProductsCarouselComponent_div_1_7_Template, 1, 0, undefined, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, !ctx_r0.withSidebar));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx_r0.header)("groups", ctx_r0.groups)("arrows", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.carouselOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.columns);
} }
const _c2 = function (a0, a1) { return { "block-products-carousel--loading": a0, "block-products-carousel--has-items": a1 }; };
class BlockProductsCarouselComponent {
    constructor(platformId, direction) {
        this.platformId = platformId;
        this.direction = direction;
        this.layout = 'grid-4';
        this.rows = 1;
        this.products = [];
        this.groups = [];
        this.withSidebar = false;
        this.loading = false;
        this.groupChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.columns = [];
        this.showCarousel = true;
        this.carouselDefaultOptions = {
            items: 4,
            margin: 14,
            nav: false,
            dots: false,
            loop: true,
            stagePadding: 1,
            rtl: this.direction.isRTL()
        };
        this.carouselOptionsByLayout = {
            'grid-4': {
                responsive: {
                    1110: { items: 4, margin: 14 },
                    930: { items: 4, margin: 10 },
                    690: { items: 3, margin: 10 },
                    400: { items: 2, margin: 10 },
                    0: { items: 1 }
                }
            },
            'grid-4-sm': {
                responsive: {
                    820: { items: 4, margin: 14 },
                    640: { items: 3, margin: 10 },
                    400: { items: 2, margin: 10 },
                    0: { items: 1 }
                }
            },
            'grid-5': {
                responsive: {
                    1110: { items: 5, margin: 12 },
                    930: { items: 4, margin: 10 },
                    690: { items: 3, margin: 10 },
                    400: { items: 2, margin: 10 },
                    0: { items: 1 }
                }
            },
            horizontal: {
                items: 3,
                responsive: {
                    1110: { items: 3, margin: 14 },
                    930: { items: 3, margin: 10 },
                    690: { items: 2, margin: 10 },
                    0: { items: 1 }
                }
            }
        };
    }
    get carouselOptions() {
        return Object.assign({}, this.carouselDefaultOptions, this.carouselOptionsByLayout[this.layout]);
    }
    ngOnChanges(changes) {
        const properties = Object.keys(changes);
        if (properties.includes('products') || properties.includes('row')) {
            this.columns = [];
            if (this.products && this.rows > 0) {
                const products = this.products.slice();
                while (products.length > 0) {
                    this.columns.push(products.splice(0, this.rows));
                }
            }
        }
    }
    ngAfterViewInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            const container = this.container.nativeElement;
            const containerWidth = container.getBoundingClientRect().width;
            window.addEventListener('load', () => {
                const newContainerWidth = container.getBoundingClientRect().width;
                if (containerWidth !== newContainerWidth) {
                    this.showCarousel = false;
                    setTimeout(() => this.showCarousel = true, 0);
                }
            });
        }
    }
}
BlockProductsCarouselComponent.ɵfac = function BlockProductsCarouselComponent_Factory(t) { return new (t || BlockProductsCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_direction_service__WEBPACK_IMPORTED_MODULE_2__["DirectionService"])); };
BlockProductsCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockProductsCarouselComponent, selectors: [["app-block-products-carousel"]], viewQuery: function BlockProductsCarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, inputs: { header: "header", layout: "layout", rows: "rows", products: "products", groups: "groups", withSidebar: "withSidebar", loading: "loading" }, outputs: { groupChange: "groupChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 6, consts: [[1, "block", "block-products-carousel", 3, "ngClass"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "header", "groups", "arrows", "next", "prev", "groupChange"], [1, "block-products-carousel__slider"], ["container", ""], [1, "block-products-carousel__preloader"], ["appOwlPreventClick", "", 3, "options"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "block-products-carousel__column"], ["class", "block-products-carousel__cell", 4, "ngFor", "ngForOf"], [1, "block-products-carousel__cell"], [3, "product"]], template: function BlockProductsCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlockProductsCarouselComponent_div_1_Template, 8, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c2, ctx.loading, !!(ctx.columns == null ? null : ctx.columns.length)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-layout", ctx.layout);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCarousel);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_3__["BlockHeaderComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"], _shared_directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_5__["OwlPreventClickDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselSlideDirective"], _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_6__["ProductCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1wcm9kdWN0cy1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "joTW":
/*!******************************************************!*\
  !*** ./src/app/shared/services/resources.service.ts ***!
  \******************************************************/
/*! exports provided: ResourcesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesService", function() { return ResourcesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ResourcesService {
    constructor() {
        this.loaded = {};
        this.libraries = {
            photoSwipe: ResourcesService.parallel(this.styleTask('assets/vendor/photoswipe/photoswipe.css'), this.styleTask('assets/vendor/photoswipe/default-skin/default-skin.css'), this.scriptTask('assets/vendor/photoswipe/photoswipe.min.js'), this.scriptTask('assets/vendor/photoswipe/photoswipe-ui-default.min.js'))
        };
    }
    static series(...tasks) {
        if (!tasks.length) {
            return () => Promise.resolve();
        }
        return () => tasks.shift()().then(ResourcesService.series(...tasks));
    }
    static parallel(...tasks) {
        if (!tasks.length) {
            return () => Promise.resolve();
        }
        return () => Promise.all(tasks.map(task => task())).then(() => { });
    }
    loadScript(url) {
        return this.scriptTask(url)();
    }
    loadStyle(url) {
        return this.styleTask(url)();
    }
    loadLibrary(library) {
        return this.libraries[library]();
    }
    scriptTask(url) {
        return () => {
            if (!this.loaded.hasOwnProperty(url)) {
                this.loaded[url] = new Promise((resolve, reject) => {
                    const script = document.createElement('script');
                    script.onload = () => resolve();
                    script.onerror = () => reject(new Error('Loading error: ' + url));
                    script.src = url;
                    document.head.appendChild(script);
                });
            }
            return this.loaded[url];
        };
    }
    styleTask(url) {
        return () => {
            if (!this.loaded.hasOwnProperty(url)) {
                this.loaded[url] = new Promise((resolve, reject) => {
                    const link = document.createElement('link');
                    link.onload = () => resolve();
                    link.onerror = () => reject(new Error('Loading error: ' + url));
                    link.type = 'text/css';
                    link.rel = 'stylesheet';
                    link.href = url;
                    document.head.appendChild(link);
                });
            }
            return this.loaded[url];
        };
    }
}
ResourcesService.ɵfac = function ResourcesService_Factory(t) { return new (t || ResourcesService)(); };
ResourcesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ResourcesService, factory: ResourcesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kHlE":
/*!****************************************************************!*\
  !*** ./src/app/modules/header/components/nav/nav.component.ts ***!
  \****************************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_functions_rxjs_fromMatchMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/functions/rxjs/fromMatchMedia */ "41D5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_offcanvas_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/offcanvas-cart.service */ "zCMj");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/root.service */ "imTr");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ "Xgv5");
/* harmony import */ var _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/wishlist.service */ "aCp3");
/* harmony import */ var _shared_services_header_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/header.service */ "Fc3L");
/* harmony import */ var _links_links_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../links/links.component */ "eKC6");
/* harmony import */ var _indicator_indicator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../indicator/indicator.component */ "ZOUS");
/* harmony import */ var _account_menu_account_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../account-menu/account-menu.component */ "PhZW");
/* harmony import */ var _departments_departments_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../departments/departments.component */ "ZdRu");
/* harmony import */ var _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/components/search/search.component */ "KPdS");
/* harmony import */ var _dropcart_dropcart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../dropcart/dropcart.component */ "hmow");



















const _c0 = ["element"];
function NavComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r1.root.home());
} }
function NavComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header-departments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_app_indicator_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-indicator", 20, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("stateChanges", function NavComponent_app_indicator_8_Template_app_indicator_stateChanges_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return $event === true ? _r8.inputElement.focus() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-search", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("escape", function NavComponent_app_indicator_8_Template_app_search_escape_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r7.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_app_header_dropcart_14_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header-dropcart", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeMenu", function NavComponent_app_header_dropcart_14_Template_app_header_dropcart_closeMenu_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return _r4.close(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "nav-panel--sticky": a0 }; };
class NavComponent {
    constructor(platformId, route, offcanvasCart, root, cart, wishlist, zone, header) {
        this.platformId = platformId;
        this.route = route;
        this.offcanvasCart = offcanvasCart;
        this.root = root;
        this.cart = cart;
        this.wishlist = wishlist;
        this.zone = zone;
        this.header = header;
        this.departments = true;
        this.logo = false;
        this.search = false;
        this.stickyMode = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.stuckFrom = null;
        this.staticFrom = null;
        this.scrollPosition = 0;
        this.scrollDistance = 0;
    }
    get element() {
        var _a;
        return (_a = this.elementRef) === null || _a === void 0 ? void 0 : _a.nativeElement;
    }
    ngOnInit() {
        this.route.data.subscribe(data => {
            this.dropcartType = data.dropcartType || 'dropdown';
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngAfterViewInit() {
        if (this.stickyMode && Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            this.media = Object(_shared_functions_rxjs_fromMatchMedia__WEBPACK_IMPORTED_MODULE_3__["fromMatchMedia"])('(min-width: 992px)', false).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])({ bufferSize: 1, refCount: true }));
            this.media.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(media => this.onMediaChange(media));
        }
    }
    onCartClick() {
        if (this.dropcartType === 'offcanvas') {
            this.offcanvasCart.open();
        }
    }
    onScroll() {
        const scrollCurrentPosition = window.pageYOffset;
        const scrollDelta = scrollCurrentPosition - this.scrollPosition;
        // Resets the distance if the scroll changes direction.
        if ((scrollDelta < 0) !== (this.scrollDistance < 0)) {
            this.scrollDistance = 0;
        }
        const distanceToShow = 10; // in pixels
        const distanceToHide = 25; // in pixels
        this.scrollPosition = scrollCurrentPosition;
        this.scrollDistance += scrollDelta;
        if (this.header.navPanelPosition === 'static' && scrollCurrentPosition > this.stuckFrom) {
            this.makeSticky();
        }
        if (this.header.navPanelPosition === 'sticky' && scrollCurrentPosition <= this.staticFrom) {
            this.makeStatic();
        }
        if (this.header.navPanelPosition === 'sticky') {
            if (this.stickyMode === 'pullToShow') {
                if (this.scrollDistance <= -distanceToShow && this.header.navPanelVisibility === 'hidden') {
                    this.show();
                }
                if (this.scrollDistance >= distanceToHide && this.header.navPanelVisibility === 'shown') {
                    this.hide();
                }
            }
            else if (this.stickyMode === 'alwaysOnTop' && this.header.navPanelVisibility === 'hidden') {
                this.show();
            }
        }
    }
    onMediaChange(media) {
        if (media.matches) {
            const takeUntil$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.media.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(x => !x.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()), this.destroy$);
            this.header.departmentsArea$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(takeUntil$)).subscribe(() => setTimeout(() => this.calcBreakpoints(), 0));
            this.zone.runOutsideAngular(() => {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'scroll', { passive: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(takeUntil$)).subscribe(() => this.onScroll());
            });
            this.calcBreakpoints();
        }
        else {
            this.makeStatic();
        }
    }
    calcBreakpoints() {
        if (this.header.departmentsArea) {
            const rect = this.header.departmentsArea.getBoundingClientRect();
            this.stuckFrom = rect.top + rect.height + window.screenTop + 50 + window.pageYOffset;
            this.staticFrom = this.stuckFrom;
        }
        else {
            const elementRect = this.element.getBoundingClientRect();
            this.staticFrom = elementRect.top + window.pageYOffset;
            this.stuckFrom = elementRect.top + elementRect.height + window.pageYOffset;
        }
    }
    makeStatic() {
        this.element.classList.remove('nav-panel--stuck');
        this.element.classList.remove('nav-panel--shown');
        this.element.style.transition = 'none';
        this.element.getBoundingClientRect(); // force reflow
        this.element.style.transition = '';
        this.zone.run(() => this.header.navPanelPosition = 'static');
        this.zone.run(() => this.header.navPanelVisibility = 'hidden');
    }
    makeSticky() {
        this.element.classList.add('nav-panel--stuck');
        this.element.style.transition = 'none';
        this.element.getBoundingClientRect(); // force reflow
        this.element.style.transition = '';
        this.zone.run(() => this.header.navPanelPosition = 'sticky');
    }
    show() {
        this.element.classList.add('nav-panel--shown');
        this.zone.run(() => this.header.navPanelVisibility = 'shown');
    }
    hide() {
        this.element.classList.remove('nav-panel--shown');
        this.zone.run(() => this.header.navPanelVisibility = 'hidden');
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_offcanvas_cart_service__WEBPACK_IMPORTED_MODULE_6__["OffcanvasCartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_7__["RootService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_9__["WishlistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_header_service__WEBPACK_IMPORTED_MODULE_10__["HeaderService"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-header-nav"]], viewQuery: function NavComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.elementRef = _t.first);
    } }, inputs: { departments: "departments", logo: "logo", search: "search", stickyMode: "stickyMode" }, decls: 18, vars: 14, consts: [[1, "nav-panel", 3, "ngClass"], ["element", ""], [1, "nav-panel__container", "container"], [1, "nav-panel__row"], ["class", "nav-panel__logo", 4, "ngIf"], ["class", "nav-panel__departments", 4, "ngIf"], [1, "nav-panel__nav-links", "nav-links"], [1, "nav-panel__indicators"], ["icon", "search-20", "iconWhenOpen", "cross-20", "trigger", "click", 3, "stateChanges", 4, "ngIf"], ["icon", "heart-20", 3, "link", "counter"], ["link", "./shop/cart", "icon", "cart-20", "trigger", "click", 3, "counter", "buttonClick"], ["indicator", "appIndicator"], [3, "closeMenu", 4, "ngIf"], ["link", "./account", "icon", "person-20", "trigger", "click"], [3, "closeMenu"], [1, "nav-panel__logo"], [3, "routerLink"], ["xmlns", "http://www.w3.org/2000/svg", "width", "120px", "height", "20px"], ["d", "M118.5,20h-1.1c-0.6,0-1.2-0.4-1.4-1l-1.5-4h-6.1l-1.5,4c-0.2,0.6-0.8,1-1.4,1h-1.1c-1,0-1.8-1-1.4-2l1.1-3\n                                 l1.5-4l3.6-10c0.2-0.6,0.8-1,1.4-1h1.6c0.6,0,1.2,0.4,1.4,1l3.6,10l1.5,4l1.1,3C120.3,19,119.5,20,118.5,20z M111.5,6.6l-1.6,4.4\n                                 h3.2L111.5,6.6z M99.5,20h-1.4c-0.4,0-0.7-0.2-0.9-0.5L94,14l-2,3.5v1c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-17\n                                 C88,0.7,88.7,0,89.5,0h1C91.3,0,92,0.7,92,1.5v8L94,6l3.2-5.5C97.4,0.2,97.7,0,98.1,0h1.4c1.2,0,1.9,1.3,1.3,2.3L96.3,10l4.5,7.8\n                                 C101.4,18.8,100.7,20,99.5,20z M80.3,11.8L80,12.3v6.2c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-6.2l-0.3-0.5l-5.5-9.5\n                                 c-0.6-1,0.2-2.3,1.3-2.3h1.4c0.4,0,0.7,0.2,0.9,0.5L76,4.3l2,3.5l2-3.5l2.2-3.8C82.4,0.2,82.7,0,83.1,0h1.4c1.2,0,1.9,1.3,1.3,2.3\n                                 L80.3,11.8z M60,20c-5.5,0-10-4.5-10-10S54.5,0,60,0s10,4.5,10,10S65.5,20,60,20z M60,4c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6\n                                 S63.3,4,60,4z M47.8,17.8c0.6,1-0.2,2.3-1.3,2.3h-2L41,14h-4v4.5c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-17\n                                 C33,0.7,33.7,0,34.5,0H41c0.3,0,0.7,0,1,0.1c3.4,0.5,6,3.4,6,6.9c0,2.4-1.2,4.5-3.1,5.8L47.8,17.8z M42,4.2C41.7,4.1,41.3,4,41,4h-3\n                                 c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1h3c0.3,0,0.7-0.1,1-0.2c0.3-0.1,0.6-0.3,0.9-0.5C43.6,8.8,44,7.9,44,7C44,5.7,43.2,4.6,42,4.2z\n                                  M29.5,4H25v14.5c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5V4h-4.5C15.7,4,15,3.3,15,2.5v-1C15,0.7,15.7,0,16.5,0h13\n                                 C30.3,0,31,0.7,31,1.5v1C31,3.3,30.3,4,29.5,4z M6.5,20c-2.8,0-5.5-1.7-6.4-4c-0.4-1,0.3-2,1.3-2h1c0.5,0,0.9,0.3,1.2,0.7\n                                 c0.2,0.3,0.4,0.6,0.8,0.8C4.9,15.8,5.8,16,6.5,16c1.5,0,2.8-0.9,2.8-2c0-0.7-0.5-1.3-1.2-1.6C7.4,12,7,11,7.4,10.3l0.4-0.9\n                                 c0.4-0.7,1.2-1,1.8-0.6c0.6,0.3,1.2,0.7,1.6,1.2c1,1.1,1.7,2.5,1.7,4C13,17.3,10.1,20,6.5,20z M11.6,6h-1c-0.5,0-0.9-0.3-1.2-0.7\n                                 C9.2,4.9,8.9,4.7,8.6,4.5C8.1,4.2,7.2,4,6.5,4C5,4,3.7,4.9,3.7,6c0,0.7,0.5,1.3,1.2,1.6C5.6,8,6,9,5.6,9.7l-0.4,0.9\n                                 c-0.4,0.7-1.2,1-1.8,0.6c-0.6-0.3-1.2-0.7-1.6-1.2C0.6,8.9,0,7.5,0,6c0-3.3,2.9-6,6.5-6c2.8,0,5.5,1.7,6.4,4C13.3,4.9,12.6,6,11.6,6\n                                 z"], [1, "nav-panel__departments"], ["icon", "search-20", "iconWhenOpen", "cross-20", "trigger", "click", 3, "stateChanges"], ["location", "indicator", 3, "escape"], ["search", "search"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavComponent_div_4_Template, 4, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavComponent_div_5_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-header-links", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavComponent_app_indicator_8_Template, 4, 0, "app-indicator", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-indicator", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-indicator", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("buttonClick", function NavComponent_Template_app_indicator_buttonClick_11_listener() { return ctx.onCartClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavComponent_app_header_dropcart_14_Template, 1, 0, "app-header-dropcart", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-indicator", 13, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-account-menu", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeMenu", function NavComponent_Template_app_account_menu_closeMenu_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return _r4.close(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, ctx.stickyMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.departments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("link", ctx.root.wishlist())("counter", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 8, ctx.wishlist.count$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("counter", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 10, ctx.cart.quantity$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dropcartType == "dropdown");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _links_links_component__WEBPACK_IMPORTED_MODULE_11__["LinksComponent"], _indicator_indicator_component__WEBPACK_IMPORTED_MODULE_12__["IndicatorComponent"], _account_menu_account_menu_component__WEBPACK_IMPORTED_MODULE_13__["AccountMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _departments_departments_component__WEBPACK_IMPORTED_MODULE_14__["DepartmentsComponent"], _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"], _dropcart_dropcart_component__WEBPACK_IMPORTED_MODULE_16__["DropcartComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "lFFw":
/*!********************************************!*\
  !*** ./src/app/shared/api/shop.service.ts ***!
  \********************************************/
/*! exports provided: ShopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopService", function() { return ShopService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _fake_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../fake-server */ "YT3J");
/* harmony import */ var src_fake_server_database_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/fake-server/database/products */ "1/JI");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







class ShopService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Returns category object by slug.
     *
     * @param slug - Unique human-readable category identifier.
     */
    getCategory(slug) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/categories/power-tools.json
         *
         * where:
         * - power-tools = slug
         */
        // return this.http.get<Category>(`https://example.com/api/shop/categories/${slug}.json`);
        // This is for demonstration purposes only. Remove it and use the code above.
        return Object(_fake_server__WEBPACK_IMPORTED_MODULE_1__["getShopCategory"])(slug);
    }
    /**
     * Returns a category tree.
     *
     * @param parent - If a parent is specified then its descendants will be returned.
     * @param depth  - Maximum depth of category tree.
     */
    getCategories(parent = null, depth = 0) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/categories.json?parent=latest-news&depth=1
         *
         * where:
         * - parent = parent.slug
         * - depth  = depth
         */
        // const params: {[param: string]: string} = {
        //     parent: parent.slug,
        //     depth: depth.toString(),
        // };
        //
        // return this.http.get<Category[]>('https://example.com/api/shop/categories.json', {params});
        // This is for demonstration purposes only. Remove it and use the code above.
        return Object(_fake_server__WEBPACK_IMPORTED_MODULE_1__["getShopCategoriesTree"])(parent ? parent.slug : null, depth);
    }
    /**
     * Returns an array of the specified categories.
     *
     * @param slugs - Array of slugs.
     * @param depth - Maximum depth of category tree.
     */
    getCategoriesBySlug(slugs, depth = 0, categoryList = []) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/categories.json?slugs=power-tools,measurement&depth=1
         *
         * where:
         * - slugs = slugs.join(',')
         * - depth = depth
         */
        // const params: {[param: string]: string} = {
        //     slugs: slugs.join(','),
        //     depth: depth.toString(),
        // };
        //
        // return this.http.get<Category[]>('https://example.com/api/shop/categories.json', {params});
        // This is for demonstration purposes only. Remove it and use the code above.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(categoryList);
        //  return getShopCategoriesBySlugs(slugs, depth);
    }
    /**
     * Returns paginated products list.
     * If categorySlug is null then a list of all products should be returned.
     *
     * @param categorySlug         - Unique human-readable category identifier.
     * @param options              - Options.
     * @param options.page         - Page number (optional).
     * @param options.limit        - Maximum number of items returned at one time (optional).
     * @param options.sort         - The algorithm by which the list should be sorted (optional).
     * @param options.filterValues - An object whose keys are filter slugs and values ​​are filter values (optional).
     */
    getProductsList(categorySlug, options) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/products.json?category=screwdriwers&page=2&limit=12&sort=name_desc&filter_price=500-1000
         *
         * where:
         * - category     = categorySlug
         * - page         = options.page
         * - limit        = options.limit
         * - sort         = options.sort
         * - filter_price = options.filterValues.price
         */
        // const params: {[param: string]: string} = {};
        //
        // if (categorySlug) {
        //     params.category = categorySlug;
        // }
        // if ('page' in options) {
        //     params.page = options.page.toString();
        // }
        // if ('limit' in options) {
        //     params.limit = options.limit.toString();
        // }
        // if ('sort' in options) {
        //     params.sort = options.sort;
        // }
        // if ('filterValues' in options) {
        //     Object.keys(options.filterValues).forEach(slug => params[`filter_${slug}`] = options.filterValues[slug]);
        // }
        //
        // return this.http.get<ProductsList>('https://example.com/api/products.json', {params});
        // This is for demonstration purposes only. Remove it and use the code above.
        return Object(_fake_server__WEBPACK_IMPORTED_MODULE_1__["getProductsList"])(categorySlug, options);
    }
    getProduct(productSlug) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/products/electric-planer-brandix-kl370090g-300-watts.json
         *
         * where:
         * - electric-planer-brandix-kl370090g-300-watts = productSlug
         */
        // return this.http.get<Product>(`https://example.com/api/products/${productSlug}.json`);
        // This is for demonstration purposes only. Remove it and use the code above.
        return Object(_fake_server__WEBPACK_IMPORTED_MODULE_1__["getProduct"])(productSlug);
    }
    /**
     * Returns popular brands.
     */
    getPopularBrands() {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/brands/popular.json
         */
        // return this.http.get<Brand[]>('https://example.com/api/shop/brands/popular.json');
        // This is for demonstration purposes only. Remove it and use the code above.
        return Object(_fake_server__WEBPACK_IMPORTED_MODULE_1__["getBrands"])();
    }
    getBestsellers(limit = null) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/bestsellers.json?limit=3
         *
         * where:
         * - limit = limit
         */
        // const params: {[param: string]: string} = {};
        //
        // if (limit) {
        //     params.limit = limit.toString();
        // }
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/bestsellers.json', {params});
        // This is for demonstration purposes only. Remove it and use the code above.
        return Object(_fake_server__WEBPACK_IMPORTED_MODULE_1__["getBestsellers"])(limit);
    }
    getTopRated(limit = null) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/top-rated.json?limit=3
         *
         * where:
         * - limit = limit
         */
        // const params: {[param: string]: string} = {};
        //
        // if (limit) {
        //     params.limit = limit.toString();
        // }
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/top-rated.json', {params});
        // This is for demonstration purposes only. Remove it and use the code above.
        return Object(_fake_server__WEBPACK_IMPORTED_MODULE_1__["getTopRated"])(limit);
    }
    getSpecialOffers(limit = null) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/special-offers.json?limit=3
         *
         * where:
         * - limit = limit
         */
        // const params: {[param: string]: string} = {};
        //
        // if (limit) {
        //     params.limit = limit.toString();
        // }
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/special-offers.json', {params});
        // This is for demonstration purposes only. Remove it and use the code above.
        return Object(_fake_server__WEBPACK_IMPORTED_MODULE_1__["getSpecialOffers"])(limit);
    }
    getFeaturedProducts(categorySlug = null, limit = null, fakeProducts = []) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/featured.json?category=screwdrivers&limit=3
         *
         * where:
         * - category = categorySlug
         * - limit    = limit
         */
        // const params: {[param: string]: string} = {};
        //
        // if (category) {
        //     params.category = category;
        // }
        // if (limit) {
        //     params.limit = limit.toString();
        // }
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/featured.json', {params});
        // This is for demonstration purposes only. Remove it and use the code above.
        //return getFeatured(categorySlug, limit);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => fakeProducts.slice(0, limit || undefined)));
    }
    getLatestProducts(categorySlug = null, limit = null, fakeProducts = []) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/latest.json?category=screwdrivers&limit=3
         *
         * where:
         * - category = categorySlug
         * - limit    = limit
         */
        // const params: {[param: string]: string} = {};
        //
        // if (category) {
        //     params.category = category;
        // }
        // if (limit) {
        //     params.limit = limit.toString();
        // }
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/latest.json', {params});
        // This is for demonstration purposes only. Remove it and use the code above.
        //return getLatestProducts(categorySlug, limit);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => fakeProducts.slice(0, limit || undefined)));
    }
    getRelatedProducts(product) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/related.json?for=water-tap
         *
         * where:
         * - for = product.slug
         */
        // const params: {[param: string]: string} = {
        //     for: product.slug,
        // };
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/related.json', {params});
        // This is for demonstration purposes only. Remove it and use the code above.
        return Object(_fake_server__WEBPACK_IMPORTED_MODULE_1__["getRelatedProducts"])(product);
    }
    getSuggestions(query, limit, categorySlug = null) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/search/suggestions.json?query=screwdriver&limit=5&category=power-tools
         *
         * where:
         * - query = query
         * - limit = limit
         * - category = categorySlug
         */
        // const params: {[param: string]: string} = {query, limit: limit.toString()};
        //
        // if (categorySlug) {
        //     params.category = categorySlug;
        // }
        //
        // return this.http.get<Product[]>('https://example.com/api/search/suggestions.json', {params});
        // This is for demonstration purposes only. Remove it and use the code above.
        return Object(src_fake_server_database_products__WEBPACK_IMPORTED_MODULE_2__["getSuggestions"])(query, limit, categorySlug);
    }
    //Loading Home Data
    getHomeData(pincode) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/categories/power-tools.json
         *
         * where:
         * - power-tools = slug
         */
        // return this.http.get<Category>(`https://example.com/api/shop/categories/${slug}.json`);
        // This is for demonstration purposes only. Remove it and use the code above.
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/Product/" + "GetHomePageData?PinCode=" + pincode + "&pageNumber=1&pageSize=10");
    }
    //Loading top Product at Home data
    getTopProducts(categorySlug = null, limit = null, fakeProducts = []) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/featured.json?category=screwdrivers&limit=3
         *
         * where:
         * - category = categorySlug
         * - limit    = limit
         */
        // const params: {[param: string]: string} = {};
        //
        // if (category) {
        //     params.category = category;
        // }
        // if (limit) {
        //     params.limit = limit.toString();
        // }
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/featured.json', {params});
        // This is for demonstration purposes only. Remove it and use the code above.
        //return getFeatured(categorySlug, limit);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => fakeProducts.slice(0, limit || undefined)));
    }
    //Loading top Product at Home data
    getOfferProducts(categorySlug = null, limit = null, fakeProducts = []) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/featured.json?category=screwdrivers&limit=3
         *
         * where:
         * - category = categorySlug
         * - limit    = limit
         */
        // const params: {[param: string]: string} = {};
        //
        // if (category) {
        //     params.category = category;
        // }
        // if (limit) {
        //     params.limit = limit.toString();
        // }
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/featured.json', {params});
        // This is for demonstration purposes only. Remove it and use the code above.
        //return getFeatured(categorySlug, limit);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => fakeProducts.slice(0, limit || undefined)));
    }
}
ShopService.ɵfac = function ShopService_Factory(t) { return new (t || ShopService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
ShopService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ShopService, factory: ShopService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "lKnz":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/input-number/input-number.component.ts ***!
  \**************************************************************************/
/*! exports provided: InputNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputNumberComponent", function() { return InputNumberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["inputElement"];
const _c1 = function (a0, a1) { return { "form-control-sm": a0, "form-control-lg": a1 }; };
function parseNumber(value, def) {
    if (typeof value === 'string') {
        value = parseFloat(value);
    }
    else if (typeof value !== 'number') {
        value = def;
    }
    return isNaN(value) ? def : value;
}
class InputNumberComponent {
    constructor() {
        this.options = {
            step: 1,
            min: null,
            max: null,
            disabled: false,
            readonly: false
        };
        this.class = true;
        this.size = null;
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    set step(value) {
        this.options.step = parseNumber(value, 1);
    }
    set min(value) {
        this.options.min = parseNumber(value, null);
    }
    set max(value) {
        this.options.max = parseNumber(value, null);
    }
    set disabled(value) {
        this.options.disabled = !!value;
    }
    set readonly(value) {
        this.options.readonly = !!value;
    }
    get inputElement() {
        return this.inputElementRef.nativeElement;
    }
    get value() {
        return this.inputElement.value === '' ? '' : parseFloat(this.inputElement.value);
    }
    set value(value) {
        this.writeValue(value);
    }
    add() {
        this.change(1);
        this.changeByTimer(1);
    }
    sub() {
        this.change(-1);
        this.changeByTimer(-1);
    }
    input() {
        this.onChange(this.value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    writeValue(obj) {
        if (typeof obj === 'number') {
            this.inputElement.value = obj.toString();
        }
        else {
            this.inputElement.value = '';
        }
    }
    /**
     * @param direction - one of [-1, 1]
     */
    change(direction) {
        let value = (this.value === '' || isNaN(this.value) ? 0 : this.value) + this.options.step * direction;
        if (this.options.max !== null) {
            value = Math.min(this.options.max, value);
        }
        if (this.options.min !== null) {
            value = Math.max(this.options.min, value);
        }
        if (value !== this.value) {
            this.onChange(value);
            this.value = value;
        }
    }
    /**
     * @param direction - one of [-1, 1]
     */
    changeByTimer(direction) {
        let interval;
        const timer = setTimeout(() => {
            interval = setInterval(() => this.change(direction), 50);
        }, 300);
        const documentMouseUp = () => {
            clearTimeout(timer);
            clearInterval(interval);
            document.removeEventListener('mouseup', documentMouseUp, false);
        };
        document.addEventListener('mouseup', documentMouseUp, false);
    }
}
InputNumberComponent.ɵfac = function InputNumberComponent_Factory(t) { return new (t || InputNumberComponent)(); };
InputNumberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputNumberComponent, selectors: [["app-input-number"]], viewQuery: function InputNumberComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputElementRef = _t.first);
    } }, hostVars: 2, hostBindings: function InputNumberComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("input-number", ctx.class);
    } }, inputs: { size: "size", step: "step", min: "min", max: "max", disabled: "disabled", readonly: "readonly" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => InputNumberComponent),
                multi: true
            }
        ])], decls: 4, vars: 9, consts: [["type", "number", 1, "form-control", "input-number__input", 3, "ngClass", "min", "max", "value", "disabled", "readOnly", "input", "blur"], ["inputElement", ""], [1, "input-number__add", 3, "mousedown"], [1, "input-number__sub", 3, "mousedown"]], template: function InputNumberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputNumberComponent_Template_input_input_0_listener() { return ctx.input(); })("blur", function InputNumberComponent_Template_input_blur_0_listener() { return ctx.onTouched(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function InputNumberComponent_Template_div_mousedown_2_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function InputNumberComponent_Template_div_mousedown_3_listener() { return ctx.sub(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c1, ctx.size === "sm", ctx.size === "lg"))("min", ctx.options.min)("max", ctx.options.max)("value", ctx.value)("disabled", ctx.options.disabled)("readOnly", ctx.options.readonly);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dC1udW1iZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "lLv2":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/blocks/block-categories/block-categories.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BlockCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockCategoriesComponent", function() { return BlockCategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/root.service */ "imTr");
/* harmony import */ var _components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/block-header/block-header.component */ "Q73p");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function BlockCategoriesComponent_div_4_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r2.root.category(category_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r3.name);
} }
function BlockCategoriesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BlockCategoriesComponent_div_4_li_10_Template, 3, 2, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Show All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("block-categories__item category-card category-card--layout--", ctx_r0.layout, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r0.root.category(category_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", category_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r0.root.category(category_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", category_r1.children.slice(0, 5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r0.root.category(category_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r1.items, " Products ");
} }
class BlockCategoriesComponent {
    constructor(root) {
        this.root = root;
        this.header = '';
        this.layout = 'classic';
        this.categories = [];
    }
}
BlockCategoriesComponent.ɵfac = function BlockCategoriesComponent_Factory(t) { return new (t || BlockCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_1__["RootService"])); };
BlockCategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockCategoriesComponent, selectors: [["app-block-categories"]], inputs: { header: "header", layout: "layout", categories: "categories" }, decls: 5, vars: 5, consts: [[1, "container"], [3, "header"], [1, "block-categories__list"], [3, "class", 4, "ngFor", "ngForOf"], [1, "category-card__body"], [1, "category-card__image"], [3, "routerLink"], ["alt", "", 3, "src"], [1, "category-card__content"], [1, "category-card__name"], [1, "category-card__links"], [4, "ngFor", "ngForOf"], [1, "category-card__all"], [1, "category-card__products"]], template: function BlockCategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-block-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BlockCategoriesComponent_div_4_Template, 16, 10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("block block--highlighted block-categories block-categories--layout--", ctx.layout, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_2__["BlockHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1jYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "mMGZ":
/*!************************************************!*\
  !*** ./src/fake-server/database/categories.ts ***!
  \************************************************/
/*! exports provided: shopCategoriesTree, shopCategoriesList, blogCategoriesTree, blogCategoriesList, getShopCategoriesTree, getBlogCategoriesTree, getShopCategoriesBySlugs, getShopCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shopCategoriesTree", function() { return shopCategoriesTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shopCategoriesList", function() { return shopCategoriesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blogCategoriesTree", function() { return blogCategoriesTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blogCategoriesList", function() { return blogCategoriesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShopCategoriesTree", function() { return getShopCategoriesTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlogCategoriesTree", function() { return getBlogCategoriesTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShopCategoriesBySlugs", function() { return getShopCategoriesBySlugs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShopCategory", function() { return getShopCategory; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


let lastCategoryId = 0;
const shopCategoriesDef = [
    {
        name: 'Instruments',
        slug: 'instruments',
        items: 272,
        children: [
            {
                name: 'Power Tools',
                slug: 'power-tools',
                image: 'assets/images/categories/category-1.jpg',
                items: 370,
                children: [
                    {
                        name: 'Drills & Mixers',
                        slug: 'drills-mixers',
                        items: 57,
                    },
                    {
                        name: 'Cordless Screwdrivers',
                        slug: 'cordless-screwdrivers',
                        items: 15,
                    },
                    {
                        name: 'Screwdrivers',
                        slug: 'screwdrivers',
                        items: 126,
                    },
                    {
                        name: 'Wrenches',
                        slug: 'wrenches',
                        items: 12,
                    },
                    {
                        name: 'Grinding Machines',
                        slug: 'grinding-machines',
                        items: 25,
                    },
                    {
                        name: 'Milling Cutters',
                        slug: 'milling-cutters',
                        items: 78,
                    },
                    {
                        name: 'Electric Spray Guns',
                        slug: 'electric-spray-guns',
                        items: 3,
                    },
                ],
            },
            {
                name: 'Hand Tools',
                slug: 'hand-tools',
                image: 'assets/images/categories/category-2.jpg',
                items: 134,
                children: [
                    {
                        name: 'Tool Kits',
                        slug: 'tool-kits',
                        items: 57,
                    },
                    {
                        name: 'Hammers',
                        slug: 'hammers',
                        items: 15,
                    },
                    {
                        name: 'Spanners',
                        slug: 'spanners',
                        items: 5,
                    },
                    {
                        name: 'Handsaws',
                        slug: 'handsaws',
                        items: 54,
                    },
                    {
                        name: 'Paint Tools',
                        slug: 'paint-tools',
                        items: 13,
                    },
                ],
            },
            {
                name: 'Machine Tools',
                slug: 'machine-tools',
                image: 'assets/images/categories/category-3.jpg',
                items: 302,
                children: [
                    {
                        name: 'Lathes',
                        slug: 'lathes',
                        items: 104,
                    },
                    {
                        name: 'Milling Machines',
                        slug: 'milling-machines',
                        items: 12,
                    },
                    {
                        name: 'Grinding Machines',
                        slug: 'grinding-machines',
                        items: 67,
                    },
                    {
                        name: 'CNC Machines',
                        slug: 'cnc-machines',
                        items: 5,
                    },
                    {
                        name: 'Sharpening Machines',
                        slug: 'sharpening-machines',
                        items: 88,
                    },
                ],
            },
            {
                name: 'Power Machinery',
                slug: 'power-machinery',
                image: 'assets/images/categories/category-4.jpg',
                items: 79,
                children: [
                    {
                        name: 'Generators',
                        slug: 'generators',
                        items: 23,
                    },
                    {
                        name: 'Compressors',
                        slug: 'compressors',
                        items: 76,
                    },
                    {
                        name: 'Winches',
                        slug: 'winches',
                        items: 43,
                    },
                    {
                        name: 'Plasma Cutting',
                        slug: 'plasma-cutting',
                        items: 128,
                    },
                    {
                        name: 'Electric Motors',
                        slug: 'electric-motors',
                        items: 76,
                    },
                ],
            },
            {
                name: 'Measurement',
                slug: 'measurement',
                image: 'assets/images/categories/category-5.jpg',
                items: 366,
                children: [
                    {
                        name: 'Tape Measure',
                        slug: 'tape-measure',
                        items: 57,
                    },
                    {
                        name: 'Theodolites',
                        slug: 'theodolites',
                        items: 5,
                    },
                    {
                        name: 'Thermal Imagers',
                        slug: 'thermal-imagers',
                        items: 3,
                    },
                    {
                        name: 'Calipers',
                        slug: 'calipers',
                        items: 37,
                    },
                    {
                        name: 'Levels',
                        slug: 'levels',
                        items: 14,
                    },
                ],
            },
            {
                name: 'Clothes and PPE',
                slug: 'clothes-and-ppe',
                image: 'assets/images/categories/category-6.jpg',
                items: 82,
                children: [
                    {
                        name: 'Winter Workwear',
                        slug: 'winter-workwear',
                        items: 24,
                    },
                    {
                        name: 'Summer Workwear',
                        slug: 'summer-workwear',
                        items: 87,
                    },
                    {
                        name: 'Helmets',
                        slug: 'helmets',
                        items: 9,
                    },
                    {
                        name: 'Belts and Bags',
                        slug: 'belts-and-bags',
                        items: 1,
                    },
                    {
                        name: 'Work Shoes',
                        slug: 'work-shoes',
                        items: 0,
                    },
                ],
            },
        ],
    },
    {
        name: 'Electronics',
        slug: 'electronics',
        items: 54,
    },
    {
        name: 'Computers',
        slug: 'computers',
        items: 421,
    },
    {
        name: 'Automotive',
        slug: 'automotive',
        items: 182,
    },
    {
        name: 'Furniture & Appliances',
        slug: 'furniture-appliances',
        items: 15,
    },
    {
        name: 'Music & Books',
        slug: 'music-books',
        items: 89,
    },
    {
        name: 'Health & Beauty',
        slug: 'health-beauty',
        items: 201,
    },
];
const blogCategoriesDef = [
    {
        name: 'Latest News',
        slug: 'latest-news',
    },
    {
        name: 'Special Offers',
        slug: 'special-offers',
        children: [
            {
                name: 'Spring Sales',
                slug: 'spring-sales',
            },
            {
                name: 'Summer Sales',
                slug: 'summer-sales',
            },
            {
                name: 'Autumn Sales',
                slug: 'autumn-sales',
            },
            {
                name: 'Christmas Sales',
                slug: 'christmas-sales',
            },
            {
                name: 'Other Sales',
                slug: 'other-sales',
            }
        ],
    },
    {
        name: 'New Arrivals',
        slug: 'new-arrivals',
    },
    {
        name: 'Reviews',
        slug: 'reviews',
    },
    {
        name: 'Drills and Mixers',
        slug: 'drills-and-mixers',
    },
    {
        name: 'Cordless Screwdrivers',
        slug: 'cordless-screwdrivers',
    },
    {
        name: 'Screwdrivers',
        slug: 'screwdrivers',
    },
    {
        name: 'Wrenches',
        slug: 'wrenches',
    },
];
function walkTree(categoriesType, categoriesDef, parents = []) {
    let list = [];
    const tree = categoriesDef.map(categoryDef => {
        const category = {
            id: ++lastCategoryId,
            type: categoriesType,
            name: categoryDef.name,
            slug: categoryDef.slug,
            path: [...parents.map(x => x.slug), categoryDef.slug].join('/'),
            image: categoryDef.image || null,
            items: categoryDef.items || 0,
            customFields: {},
            parents: parents.slice(),
            children: [],
        };
        const [childrenTree, childrenList] = walkTree(categoriesType, categoryDef.children || [], [...parents, category]);
        category.children = childrenTree;
        list = [...list, category, ...childrenList];
        return category;
    });
    return [tree, list];
}
const [shopCategoriesTree, shopCategoriesList] = walkTree('shop', shopCategoriesDef);
const [blogCategoriesTree, blogCategoriesList] = walkTree('blog', blogCategoriesDef);
function limitDepth(categories, depth) {
    return categories.map(category => {
        return Object.assign(Object.assign({}, category), { parents: null, children: depth !== 0 ? limitDepth(category.children, depth - 1) : null });
    });
}
function getCategoriesTree(categoriesType, parentSlug = null, depth = 0) {
    let categories = [];
    const list = categoriesType === 'shop' ? shopCategoriesList : blogCategoriesList;
    const tree = categoriesType === 'shop' ? shopCategoriesTree : blogCategoriesTree;
    if (parentSlug === null) {
        categories = tree.slice();
    }
    else {
        const parent = list.find(x => x.slug === parentSlug);
        if (!parent) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]({ status: 404, statusText: 'Page Not Found' }));
        }
        categories = parent.children.slice();
    }
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(limitDepth(categories, depth));
}
function getShopCategoriesTree(parentSlug = null, depth = 0) {
    return getCategoriesTree('shop', parentSlug, depth);
}
function getBlogCategoriesTree(parentSlug = null, depth = 0) {
    return getCategoriesTree('blog', parentSlug, depth);
}
function getShopCategoriesBySlugs(slugs, depth = 0) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(limitDepth(shopCategoriesList.filter(x => slugs.includes(x.slug)), depth));
}
function getShopCategory(slug) {
    const category = shopCategoriesList.find(x => x.slug === slug);
    if (!category) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]({ status: 404, statusText: 'Page Not Found' }));
    }
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(JSON.parse(JSON.stringify(Object.assign(Object.assign({}, category), { parents: limitDepth(category.parents, 0), children: limitDepth(category.children, 0) }))));
}


/***/ }),

/***/ "nS2t":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/product-card/product-card.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_root_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/root.service */ "imTr");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cart.service */ "Xgv5");
/* harmony import */ var _services_wishlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/wishlist.service */ "aCp3");
/* harmony import */ var _services_compare_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/compare.service */ "eGMf");
/* harmony import */ var _services_quickview_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/quickview.service */ "royi");
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/currency.service */ "ChtM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_click_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../directives/click.directive */ "x5hD");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../icon/icon.component */ "0njA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../rating/rating.component */ "gf8J");
/* harmony import */ var _pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../pipes/currency-format.pipe */ "wGjQ");















function ProductCardComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Sale");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProductCardComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Hot");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProductCardComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProductCardComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProductCardComponent_div_4_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProductCardComponent_div_4_div_2_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProductCardComponent_div_4_div_3_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.product.badges.includes("sale"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.product.badges.includes("hot"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.product.badges.includes("new"));
} }
function ProductCardComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r1.root.product(ctx_r1.product));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.product.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ProductCardComponent_ul_15_li_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function ProductCardComponent_ul_15_li_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProductCardComponent_ul_15_li_1_ng_container_2_ng_container_2_Template, 2, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const value_r12 = ctx.$implicit;
    const last_r13 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", value_r12.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !last_r13);
} }
function ProductCardComponent_ul_15_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProductCardComponent_ul_15_li_1_ng_container_2_Template, 3, 2, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attribute_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", attribute_r10.name, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", attribute_r10.values);
} }
function ProductCardComponent_ul_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProductCardComponent_ul_15_li_1_Template, 3, 2, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.featuredAttributes);
} }
function ProductCardComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "In Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProductCardComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 3, ctx_r4.product.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 5, ctx_r4.product.compareAtPrice));
} }
function ProductCardComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r5.product.price), " ");
} }
const _c0 = function (a0, a1, a2, a3, a4) { return { "product-card--layout--grid product-card--size--sm": a0, "product-card--layout--grid product-card--size--nl": a1, "product-card--layout--grid product-card--size--lg": a2, "product-card--layout--list": a3, "product-card--layout--horizontal": a4 }; };
const _c1 = function (a0) { return { "product-card__quickview--preload": a0 }; };
const _c2 = function (a0) { return { "btn-loading": a0 }; };
class ProductCardComponent {
    constructor(cd, root, cart, wishlist, compare, quickview, currency) {
        this.cd = cd;
        this.root = root;
        this.cart = cart;
        this.wishlist = wishlist;
        this.compare = compare;
        this.quickview = quickview;
        this.currency = currency;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.layout = null;
        this.addingToCart = false;
        this.addingToWishlist = false;
        this.addingToCompare = false;
        this.showingQuickview = false;
        this.featuredAttributes = [];
    }
    ngOnInit() {
        this.currency.changes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.destroy$)).subscribe(() => {
            this.cd.markForCheck();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngOnChanges(changes) {
        if ('product' in changes) {
            this.featuredAttributes = !this.product ? [] : this.product.attributes.filter(x => x.featured);
        }
    }
    addToCart() {
        if (this.addingToCart) {
            return;
        }
        this.addingToCart = true;
        this.cart.add(this.product, 1).subscribe({
            complete: () => {
                this.addingToCart = false;
                this.cd.markForCheck();
            }
        });
    }
    addToWishlist() {
        if (this.addingToWishlist) {
            return;
        }
        this.addingToWishlist = true;
        this.wishlist.add(this.product).subscribe({
            complete: () => {
                this.addingToWishlist = false;
                this.cd.markForCheck();
            }
        });
    }
    addToCompare() {
        if (this.addingToCompare) {
            return;
        }
        this.addingToCompare = true;
        this.compare.add(this.product).subscribe({
            complete: () => {
                this.addingToCompare = false;
                this.cd.markForCheck();
            }
        });
    }
    showQuickview() {
        if (this.showingQuickview) {
            return;
        }
        this.showingQuickview = true;
        this.quickview.show(this.product).subscribe({
            complete: () => {
                this.showingQuickview = false;
                this.cd.markForCheck();
            }
        });
    }
}
ProductCardComponent.ɵfac = function ProductCardComponent_Factory(t) { return new (t || ProductCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_root_service__WEBPACK_IMPORTED_MODULE_3__["RootService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_wishlist_service__WEBPACK_IMPORTED_MODULE_5__["WishlistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_compare_service__WEBPACK_IMPORTED_MODULE_6__["CompareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_quickview_service__WEBPACK_IMPORTED_MODULE_7__["QuickviewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_currency_service__WEBPACK_IMPORTED_MODULE_8__["CurrencyService"])); };
ProductCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductCardComponent, selectors: [["app-product-card"]], inputs: { product: "product", layout: "layout" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 34, vars: 32, consts: [[1, "product-card", 3, "ngClass"], ["type", "button", "appClick", "", 1, "product-card__quickview", 3, "ngClass", "click"], ["name", "quickview-16", "size", "16"], [1, "fake-svg-icon"], ["class", "product-card__badges-list", 4, "ngIf"], [1, "product-card__image", "product-image"], ["appClick", "", "class", "product-image__body", 3, "routerLink", 4, "ngIf"], [1, "product-card__info"], [1, "product-card__name"], ["appClick", "", 3, "routerLink"], [1, "product-card__rating"], [3, "value"], [1, "product-card__rating-legend"], ["class", "product-card__features-list", 4, "ngIf"], [1, "product-card__actions"], [1, "product-card__availability"], ["class", "text-success", 4, "ngIf"], [1, "product-card__prices"], [4, "ngIf"], [1, "product-card__buttons"], ["type", "button", "appClick", "", 1, "btn", "btn-primary", "product-card__addtocart", 3, "ngClass", "click"], ["type", "button", "appClick", "", 1, "btn", "btn-secondary", "product-card__addtocart", "product-card__addtocart--list", 3, "ngClass", "click"], ["type", "button", "appClick", "", 1, "btn", "btn-light", "btn-svg-icon", "btn-svg-icon--fake-svg", "product-card__wishlist", 3, "ngClass", "click"], ["name", "wishlist-16", "size", "16"], [1, "fake-svg-icon", "fake-svg-icon--wishlist-16"], ["type", "button", "appClick", "", 1, "btn", "btn-light", "btn-svg-icon", "btn-svg-icon--fake-svg", "product-card__compare", 3, "ngClass", "click"], ["name", "compare-16", "size", "16"], [1, "fake-svg-icon", "fake-svg-icon--compare-16"], [1, "product-card__badges-list"], ["class", "product-card__badge product-card__badge--sale", 4, "ngIf"], ["class", "product-card__badge product-card__badge--hot", 4, "ngIf"], ["class", "product-card__badge product-card__badge--new", 4, "ngIf"], [1, "product-card__badge", "product-card__badge--sale"], [1, "product-card__badge", "product-card__badge--hot"], [1, "product-card__badge", "product-card__badge--new"], ["appClick", "", 1, "product-image__body", 3, "routerLink"], ["alt", "", 1, "product-image__img", 3, "src"], [1, "product-card__features-list"], [4, "ngFor", "ngForOf"], [1, "text-success"], [1, "product-card__new-price"], [1, "product-card__old-price"]], template: function ProductCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductCardComponent_Template_button_click_1_listener() { return ctx.showQuickview(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProductCardComponent_div_4_Template, 4, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ProductCardComponent_a_6_Template, 2, 2, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "app-rating", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ProductCardComponent_ul_15_Template, 2, 1, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Availability: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ProductCardComponent_span_19_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ProductCardComponent_ng_container_21_Template, 8, 7, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ProductCardComponent_ng_container_22_Template, 3, 3, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductCardComponent_Template_button_click_24_listener() { return ctx.addToCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Add To Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductCardComponent_Template_button_click_26_listener() { return ctx.addToCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Add To Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductCardComponent_Template_button_click_28_listener() { return ctx.addToWishlist(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "app-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductCardComponent_Template_button_click_31_listener() { return ctx.addToCompare(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "app-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction5"](16, _c0, ctx.layout === "grid-sm", ctx.layout === "grid-nl", ctx.layout === "grid-lg", ctx.layout === "list", ctx.layout === "horizontal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](22, _c1, ctx.showingQuickview));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.product.badges.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.product.images == null ? null : ctx.product.images.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx.root.product(ctx.product));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.product.rating);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.product.reviews, " Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.featuredAttributes.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.product.availability === "in-stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.product.compareAtPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.product.compareAtPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](24, _c2, ctx.addingToCart));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](26, _c2, ctx.addingToCart));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](28, _c2, ctx.addingToWishlist));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](30, _c2, ctx.addingToCompare));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _directives_click_directive__WEBPACK_IMPORTED_MODULE_10__["ClickDirective"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_11__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], _rating_rating_component__WEBPACK_IMPORTED_MODULE_13__["RatingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], pipes: [_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_14__["CurrencyFormatPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ "oC4s":
/*!****************************************************!*\
  !*** ./src/app/modules/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _data_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/theme */ "5at8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "y1Wg");
/* harmony import */ var _components_links_links_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/links/links.component */ "+uwT");
/* harmony import */ var _components_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/newsletter/newsletter.component */ "PyCx");
/* harmony import */ var _components_totop_totop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/totop/totop.component */ "v7nX");






const _c0 = function () { return { label: "About Us", url: "/site/about-us" }; };
const _c1 = function () { return { label: "Delivery Information", url: "/site/terms" }; };
const _c2 = function () { return { label: "Privacy Policy", url: "/site/terms" }; };
const _c3 = function () { return { label: "Brands", url: "" }; };
const _c4 = function () { return { label: "Contact Us", url: "/site/contact-us" }; };
const _c5 = function () { return { label: "Returns", url: "" }; };
const _c6 = function () { return { label: "Site Map", url: "" }; };
const _c7 = function (a0, a1, a2, a3, a4, a5, a6) { return [a0, a1, a2, a3, a4, a5, a6]; };
const _c8 = function () { return { label: "Store Location", url: "" }; };
const _c9 = function () { return { label: "Order History", url: "" }; };
const _c10 = function () { return { label: "Wish List", url: "/shop/wishlist" }; };
const _c11 = function () { return { label: "Newsletter", url: "" }; };
const _c12 = function () { return { label: "Specials", url: "" }; };
const _c13 = function () { return { label: "Gift Cards", url: "" }; };
const _c14 = function () { return { label: "Affiliate", url: "" }; };
class FooterComponent {
    constructor() {
        this.theme = _data_theme__WEBPACK_IMPORTED_MODULE_0__["theme"];
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 23, vars: 34, consts: [[1, "site-footer"], [1, "container"], [1, "site-footer__widgets"], [1, "row"], [1, "col-12", "col-md-6", "col-lg-4"], [1, "col-6", "col-md-3", "col-lg-2"], ["header", "Information", 3, "links"], ["header", "My Account", 3, "links"], [1, "col-12", "col-md-12", "col-lg-4"], [1, "site-footer__widget"], [1, "site-footer__bottom"], [1, "site-footer__copyright"], ["href", "https://angular.io/", "target", "_blank"], ["target", "_blank", 3, "href"], [1, "site-footer__payments"], ["src", "assets/images/payments.png", "alt", ""]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-footer-contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-footer-links", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-footer-links", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-footer-newsletter", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Powered by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " \u2014 Design by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "app-totop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("links", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction7"](11, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c6)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("links", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction7"](26, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c9), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c11), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c12), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](24, _c13), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](25, _c14)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.theme.author.profile_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.theme.author.name);
    } }, directives: [_components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_2__["ContactsComponent"], _components_links_links_component__WEBPACK_IMPORTED_MODULE_3__["LinksComponent"], _components_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_4__["NewsletterComponent"], _components_totop_totop_component__WEBPACK_IMPORTED_MODULE_5__["TotopComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "pOSb":
/*!***************************************************************************!*\
  !*** ./src/app/modules/blocks/block-features/block-features.component.ts ***!
  \***************************************************************************/
/*! exports provided: BlockFeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockFeaturesComponent", function() { return BlockFeaturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/icon/icon.component */ "0njA");


class BlockFeaturesComponent {
    constructor() {
        this.layout = 'classic';
    }
}
BlockFeaturesComponent.ɵfac = function BlockFeaturesComponent_Factory(t) { return new (t || BlockFeaturesComponent)(); };
BlockFeaturesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockFeaturesComponent, selectors: [["app-block-features"]], inputs: { layout: "layout" }, decls: 38, vars: 3, consts: [[1, "container"], [1, "block-features__list"], [1, "block-features__item"], [1, "block-features__icon"], ["name", "fi-free-delivery-48", "size", "48"], [1, "block-features__content"], [1, "block-features__title"], [1, "block-features__subtitle"], [1, "block-features__divider"], ["name", "fi-24-hours-48", "size", "48"], ["name", "fi-payment-security-48", "size", "48"], ["name", "fi-tag-48", "size", "48"]], template: function BlockFeaturesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Free Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "For orders from $50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Support 24/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Call us anytime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "100% Safety");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Only secure payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Hot Offers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Discounts up to 90%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("block block-features block-features--layout--", ctx.layout, "");
    } }, directives: [_shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__["IconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1mZWF0dXJlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "rPnU":
/*!********************************************!*\
  !*** ./src/fake-server/database/brands.ts ***!
  \********************************************/
/*! exports provided: brands, getBrands */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brands", function() { return brands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrands", function() { return getBrands; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

let lastBrandId = 0;
const brandsDef = [
    { name: 'Brandix', slug: 'brandix', image: 'assets/images/logos/logo-1.png' },
    { name: 'Wakita', slug: 'wakita', image: 'assets/images/logos/logo-2.png' },
    { name: 'Zosch', slug: 'zosch', image: 'assets/images/logos/logo-3.png' },
    { name: 'WeVALT', slug: 'wevalt', image: 'assets/images/logos/logo-4.png' },
    { name: 'Hammer', slug: 'hammer', image: 'assets/images/logos/logo-5.png' },
    { name: 'Mitasia', slug: 'mitasia', image: 'assets/images/logos/logo-6.png' },
    { name: 'Metaggo', slug: 'metaggo', image: 'assets/images/logos/logo-7.png' },
];
const brands = brandsDef.map(brandDef => {
    return Object.assign(Object.assign({}, brandDef), { id: ++lastBrandId });
});
function getBrands() {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(brands);
}


/***/ }),

/***/ "rZ2s":
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/absolute-url.pipe.ts ***!
  \***************************************************/
/*! exports provided: AbsoluteUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbsoluteUrlPipe", function() { return AbsoluteUrlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AbsoluteUrlPipe {
    constructor(platformId, router, route) {
        this.platformId = platformId;
        this.router = router;
        this.route = route;
    }
    transform(value, scope = 'html') {
        if (!value || !Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            return value;
        }
        if (scope === 'angular') {
            value = this.router.createUrlTree([value], { relativeTo: this.route }).toString().substr(1);
        }
        const a = document.createElement('a');
        a.href = value;
        return a.href;
    }
}
AbsoluteUrlPipe.ɵfac = function AbsoluteUrlPipe_Factory(t) { return new (t || AbsoluteUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
AbsoluteUrlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "absoluteUrl", type: AbsoluteUrlPipe, pure: true });


/***/ }),

/***/ "royi":
/*!******************************************************!*\
  !*** ./src/app/shared/services/quickview.service.ts ***!
  \******************************************************/
/*! exports provided: QuickviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickviewService", function() { return QuickviewService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class QuickviewService {
    constructor() {
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.showSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.show$ = this.showSubject$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$));
    }
    show(product) {
        // timer only for demo
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => {
            this.showSubject$.next(product);
        }));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
QuickviewService.ɵfac = function QuickviewService_Factory(t) { return new (t || QuickviewService)(); };
QuickviewService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: QuickviewService, factory: QuickviewService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "sp1q":
/*!******************************************!*\
  !*** ./src/fake-server/products-list.ts ***!
  \******************************************/
/*! exports provided: getProductsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsList", function() { return getProductsList; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _database_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database/products */ "1/JI");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _database_categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./database/categories */ "mMGZ");





/**
 * Returns products list.
 *
 * @param categorySlug Unique human-readable category identifier.
 * @param options Options list.
 */
function getProductsList(categorySlug, options) {
    const page = options.page || 1;
    const limit = options.limit || 12;
    const sort = options.sort || 'default';
    const filterValues = options.filterValues || {};
    const filters = [];
    const filtersDef = [
        { type: 'range', slug: 'price', name: 'Price' },
        { type: 'check', slug: 'brand', name: 'Brand' },
        { type: 'radio', slug: 'discount', name: 'With Discount' },
        { type: 'color', slug: 'color', name: 'Color' },
    ];
    let items = _database_products__WEBPACK_IMPORTED_MODULE_2__["products"].slice();
    // Make filters.
    if (categorySlug === null) {
        filters.push({
            type: 'categories',
            slug: 'categories',
            name: 'Categories',
            root: true,
            items: [
                ..._database_categories__WEBPACK_IMPORTED_MODULE_4__["shopCategoriesTree"].map(x => makeCategoryFilterItem('child', x)),
            ],
        });
    }
    else {
        const category = _database_categories__WEBPACK_IMPORTED_MODULE_4__["shopCategoriesList"].find(x => x.slug === categorySlug);
        if (!category) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]({ status: 404, statusText: 'Page Not Found' }));
        }
        filters.push({
            type: 'categories',
            slug: 'categories',
            name: 'Categories',
            root: false,
            items: [
                ...category.parents.map(x => makeCategoryFilterItem('parent', x)),
                makeCategoryFilterItem('current', category),
                ...category.children.map(x => makeCategoryFilterItem('child', x)),
            ],
        });
    }
    makeFilters(filtersDef, items).forEach(x => filters.push(x));
    // Apply values to filters.
    filters.forEach(filter => {
        if (filter.slug in filterValues && 'value' in filter) {
            filter.value = parseFilterValue(filter, filterValues[filter.slug]);
        }
    });
    // Calculate items count for filter values.
    filters.forEach(filter => {
        if (filter.type !== 'check' && filter.type !== 'color' && filter.type !== 'radio') {
            return;
        }
        const counts = calcProductsForFilterValues(filter, filters, items);
        filter.items.forEach(item => {
            if (item.slug in counts) {
                item.count = counts[item.slug];
            }
        });
    });
    // Apply filters to items list.
    items = items.filter(product => {
        return filters.reduce((result, filter) => result && testProduct(filter, product), true);
    });
    // Sort items array.
    items = items.sort((a, b) => {
        if (['name_asc', 'name_desc'].includes(sort)) {
            if (a.name === b.name) {
                return 0;
            }
            return (a.name > b.name ? 1 : -1) * (sort === 'name_asc' ? 1 : -1);
        }
        return 0;
    });
    // Preparing data for a response.
    const start = (page - 1) * limit;
    const end = start + limit;
    const total = items.length;
    const pages = Math.ceil(total / limit);
    const from = (page - 1) * limit + 1;
    const to = Math.max(Math.min(page * limit, total), from);
    items = items.slice(start, end);
    const response = {
        items,
        page,
        limit,
        total,
        pages,
        from,
        to,
        sort,
        filters,
        filterValues,
    };
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(350).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => JSON.parse(JSON.stringify(response))));
}
function getFilterValue(type, slug, product, defaultValue = null) {
    if (type === 'range' && slug === 'price') {
        return product.price;
    }
    else if (type === 'check' && slug === 'brand') {
        if (product.brand && typeof product.brand === 'object') {
            return [{ slug: product.brand.slug, name: product.brand.name }];
        }
    }
    else if (type === 'check' && slug === 'discount') {
        const items = [
            { slug: 'any', name: 'Any' },
        ];
        if (product.compareAtPrice) {
            items.push({ slug: 'yes', name: 'Yes' });
        }
        else {
            items.push({ slug: 'no', name: 'No' });
        }
        return items;
    }
    else if (type === 'check' || type === 'radio') {
        if (!('attributes' in product) || !Array.isArray(product.attributes)) {
            return defaultValue;
        }
        const attribute = product.attributes.find(x => x.slug === slug);
        if (!attribute) {
            return defaultValue;
        }
        return attribute.values.map(x => ({ slug: x.slug, name: x.name }));
    }
    return defaultValue;
}
function getRangeValue(slug, product, defaultValue = null) {
    return getFilterValue('range', slug, product, defaultValue);
}
function getListValues(slug, product, defaultValue = []) {
    return getFilterValue('check', slug, product, defaultValue);
}
function getColorCode(slug) {
    switch (slug) {
        case 'white': return '#fff';
        case 'silver': return '#d9d9d9';
        case 'light-gray': return '#b3b3b3';
        case 'gray': return '#808080';
        case 'dark-gray': return '#666';
        case 'coal': return '#4d4d4d';
        case 'black': return '#262626';
        case 'red': return '#ff4040';
        case 'orange': return '#ff8126';
        case 'yellow': return '#ffd333';
        case 'pear-green': return '#becc1f';
        case 'green': return '#8fcc14';
        case 'emerald': return '#47cc5e';
        case 'shamrock': return '#47cca0';
        case 'shakespeare': return '#47cccc';
        case 'blue': return '#40bfff';
        case 'dark-blue': return '#3d6dcc';
        case 'violet': return '#7766cc';
        case 'purple': return '#b852cc';
        case 'cerise': return '#e53981';
    }
    return '#000';
}
function parseFilterValue(filter, value) {
    switch (filter.type) {
        case 'range':
            return value.split('-').map(x => parseFloat(x));
        case 'check':
        case 'color':
            return value.trim() === '' ? [] : value.split(',').map(x => x.trim());
    }
    return value;
}
function testProduct(filter, product) {
    if (filter.type === 'range') {
        const value = getRangeValue(filter.slug, product);
        if (value === null || value < filter.value[0] || value > filter.value[1]) {
            return false;
        }
    }
    else if (filter.type === 'check' || filter.type === 'color') {
        const values = getListValues(filter.slug, product);
        return filter.value.length < 1 || filter.value.reduce((isMatched, value) => {
            return isMatched || !!values.find(x => x.slug === value);
        }, false);
    }
    else if (filter.type === 'radio') {
        const values = getListValues(filter.slug, product);
        return !!values.find(x => x.slug === filter.value);
    }
    return true;
}
function calcProductsForFilterValues(filter, allFilters, products) {
    const result = {};
    products = products.filter(product => allFilters.reduce((isMatched, eachFilter) => {
        return isMatched && (filter.slug === eachFilter.slug || testProduct(eachFilter, product));
    }, true));
    products.forEach(product => {
        switch (filter.type) {
            case 'check':
            case 'color':
            case 'radio':
                getListValues(filter.slug, product).forEach(value => {
                    if (!(value.slug in result)) {
                        result[value.slug] = 0;
                    }
                    result[value.slug] += 1;
                });
                break;
        }
    });
    return result;
}
function makeFilters(filtersDef, products) {
    const result = [];
    filtersDef.forEach(filterDef => {
        if (filterDef.type === 'range') {
            let max = products.reduce((value, product) => Math.max(value, getRangeValue(filterDef.slug, product, value)), 0);
            let min = products.reduce((value, product) => Math.min(value, getRangeValue(filterDef.slug, product, value)), max);
            /** Calculates the number of digits for rounding. */
            let digit = Math.max(Math.ceil(max).toString().length - 2, 1);
            digit = Math.pow(10, digit);
            max = Math.ceil(max / digit) * digit;
            min = Math.floor(min / digit) * digit;
            result.push({
                type: filterDef.type,
                slug: filterDef.slug,
                name: filterDef.name,
                value: [min, max],
                // options
                min,
                max,
            });
        }
        else if (filterDef.type === 'check' || filterDef.type === 'radio' || filterDef.type === 'color') {
            const itemsBySlug = {};
            let items = [];
            products.forEach(product => {
                getListValues(filterDef.slug, product).forEach(value => {
                    if (value.slug in itemsBySlug) {
                        return;
                    }
                    const item = makeFilterItem(filterDef.type, value);
                    itemsBySlug[value.slug] = item;
                    items.push(item);
                });
            });
            if (items.length < 1 || (filterDef.type === 'radio' && items.length < 2)) {
                return;
            }
            items = sortFilterItems(filterDef.type, filterDef.slug, items);
            result.push({
                type: filterDef.type,
                slug: filterDef.slug,
                name: filterDef.name,
                value: filterDef.type === 'radio' ? items[0].slug : [],
                items,
            });
        }
    });
    return result;
}
function makeFilterItem(filterType, value) {
    switch (filterType) {
        case 'check':
        case 'radio':
            return {
                slug: value.slug,
                name: value.name,
                count: 0,
            };
        case 'color':
            return {
                slug: value.slug,
                name: value.name,
                count: 0,
                color: getColorCode(value.slug),
            };
    }
}
function makeCategoryFilterItem(type, category) {
    return {
        slug: category.slug,
        name: category.name,
        type,
        category: Object.assign(Object.assign({}, category), { children: null, parents: null }),
        count: category.items,
    };
}
function sortFilterItems(filterType, filterSlug, items) {
    if (filterType === 'color' && filterSlug === 'color') {
        const attributeDef = _database_products__WEBPACK_IMPORTED_MODULE_2__["attributesDef"].find(x => x.slug === filterSlug);
        if (attributeDef) {
            const values = attributeDef.values.map(x => x.slug);
            return items.sort((a, b) => {
                return values.indexOf(a.slug) - values.indexOf(b.slug);
            });
        }
    }
    return items;
}


/***/ }),

/***/ "tgey":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/page-header/page-header.component.ts ***!
  \************************************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon/icon.component */ "0njA");




function PageHeaderComponent_ng_container_5_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadcrumb_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", breadcrumb_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumb_r2.label);
} }
function PageHeaderComponent_ng_container_5_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadcrumb_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumb_r2.label);
} }
function PageHeaderComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageHeaderComponent_ng_container_5_li_1_Template, 4, 2, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PageHeaderComponent_ng_container_5_li_2_Template, 2, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const last_r3 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", last_r3);
} }
function PageHeaderComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.header);
} }
class PageHeaderComponent {
    constructor() {
        this.breadcrumbs = [];
    }
}
PageHeaderComponent.ɵfac = function PageHeaderComponent_Factory(t) { return new (t || PageHeaderComponent)(); };
PageHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageHeaderComponent, selectors: [["app-page-header"]], inputs: { header: "header", breadcrumbs: "breadcrumbs" }, decls: 7, vars: 2, consts: [[1, "page-header"], [1, "page-header__container", "container"], [1, "page-header__breadcrumb"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [4, "ngFor", "ngForOf"], ["class", "page-header__title", 4, "ngIf"], ["class", "breadcrumb-item", 4, "ngIf"], ["class", "breadcrumb-item active", "aria-current", "page", 4, "ngIf"], [1, "breadcrumb-item"], [3, "routerLink"], ["name", "arrow-rounded-right-6x9", "size", "6x9", 1, "breadcrumb-arrow"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "page-header__title"]], template: function PageHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PageHeaderComponent_ng_container_5_Template, 3, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PageHeaderComponent_div_6_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breadcrumbs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.header);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["IconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "uV8K":
/*!****************************************************************!*\
  !*** ./src/app/pages/page-home-two/page-home-two.component.ts ***!
  \****************************************************************/
/*! exports provided: PageHomeTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHomeTwoComponent", function() { return PageHomeTwoComponent; });
/* harmony import */ var _data_blog_posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/blog-posts */ "Z6UY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_interfaces_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/interfaces/product */ "PbLj");
/* harmony import */ var _shared_interfaces_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/interfaces/category */ "K3QE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/api/shop.service */ "lFFw");
/* harmony import */ var _modules_blocks_block_slideshow_block_slideshow_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/blocks/block-slideshow/block-slideshow.component */ "eJNX");
/* harmony import */ var _modules_blocks_block_features_block_features_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modules/blocks/block-features/block-features.component */ "pOSb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _modules_blocks_block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../modules/blocks/block-products-carousel/block-products-carousel.component */ "jb21");
/* harmony import */ var _modules_blocks_block_banner_block_banner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../modules/blocks/block-banner/block-banner.component */ "alZB");
/* harmony import */ var _modules_blocks_block_products_block_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../modules/blocks/block-products/block-products.component */ "XLOE");
/* harmony import */ var _modules_blocks_block_posts_block_posts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../modules/blocks/block-posts/block-posts.component */ "ObXf");
/* harmony import */ var _modules_blocks_block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../modules/blocks/block-brands/block-brands.component */ "+PBj");
/* harmony import */ var _modules_blocks_block_product_columns_block_product_columns_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../modules/blocks/block-product-columns/block-product-columns.component */ "JQhK");
/* harmony import */ var _modules_blocks_block_categories_block_categories_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../modules/blocks/block-categories/block-categories.component */ "lLv2");
/* harmony import */ var _modules_blocks_block_product_columns_block_product_columns_item_block_product_columns_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../modules/blocks/block-product-columns/block-product-columns-item/block-product-columns-item.component */ "ZPbr");


















function PageHomeTwoComponent_app_block_categories_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-block-categories", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("categories", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, ctx_r0.popularCategories$));
} }
function PageHomeTwoComponent_app_block_products_carousel_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-block-products-carousel", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("groupChange", function PageHomeTwoComponent_app_block_products_carousel_4_Template_app_block_products_carousel_groupChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.groupChange(ctx_r7.topProduct$[0], $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rows", 2)("loading", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 4, ctx_r1.topProduct$).loading)("products", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 6, ctx_r1.topProduct$).products)("groups", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 8, ctx_r1.topProduct$).groups);
} }
function PageHomeTwoComponent_app_block_products_carousel_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-block-products-carousel", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("groupChange", function PageHomeTwoComponent_app_block_products_carousel_6_Template_app_block_products_carousel_groupChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r9.groupChange(ctx_r9.offerProduct$[0], $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rows", 2)("loading", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 4, ctx_r2.offerProduct$).loading)("products", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 6, ctx_r2.offerProduct$).products)("groups", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 8, ctx_r2.offerProduct$).groups);
} }
function PageHomeTwoComponent_app_block_products_carousel_11_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-block-products-carousel", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("groupChange", function PageHomeTwoComponent_app_block_products_carousel_11_Template_app_block_products_carousel_groupChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.groupChange(ctx_r11.latestProducts$[0], $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rows", 1)("loading", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 4, ctx_r3.latestProducts$).loading)("products", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 6, ctx_r3.latestProducts$).products)("groups", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 8, ctx_r3.latestProducts$).groups);
} }
function PageHomeTwoComponent_app_block_product_columns_item_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-block-product-columns-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("products", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, ctx_r4.columnTopRated$));
} }
function PageHomeTwoComponent_app_block_product_columns_item_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-block-product-columns-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("products", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, ctx_r5.columnSpecialOffers$));
} }
function PageHomeTwoComponent_app_block_product_columns_item_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-block-product-columns-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("products", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, ctx_r6.columnBestsellers$));
} }
class PageHomeTwoComponent {
    constructor(shop) {
        this.shop = shop;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.posts = _data_blog_posts__WEBPACK_IMPORTED_MODULE_0__["posts"];
        this.productlist = Array();
        this.productdetailAll = Array();
        this.grouplist = [];
        this.pcategory = [];
        this.slides = [];
    }
    ngOnInit() {
        this.getHomedata("313002");
        this.brands$ = this.shop.getPopularBrands();
    }
    getHomedata(arg0) {
        this.shop.getHomeData(arg0).subscribe(response => {
            //////console.log(response.returnValue.bannerdtl);
            for (var index in response.returnValue.bannerdtl) {
                //  // ////console.log(this.slides)
                this.slides.push({
                    title: '',
                    text: '',
                    image_classic: response.returnValue.bannerdtl[index].bannerUrl,
                    image_full: response.returnValue.bannerdtl[index].bannerUrl,
                    image_mobile: response.returnValue.bannerdtl[index].bannerUrl
                });
            }
            for (var cat in response.returnValue.pcategory) {
                let data = response.returnValue.pcategory[cat];
                let category = new _shared_interfaces_category__WEBPACK_IMPORTED_MODULE_4__["Category"]();
                category.id = Number(data.pcId);
                category.type = 'shop';
                category.name = data.pcName;
                category.slug = data.pcName;
                category.path = data.pcName;
                category.image = data.pcImage;
                category.items = Number(data.totProducts);
                category.customFields = {};
                category.parents = [];
                category.children = [];
                this.pcategory.push(category);
            }
            this.popularCategories$ = this.shop.getCategoriesBySlug([], 1, this.pcategory);
            var category = "";
            /// Binding New Products
            ////console.log("New Product####################")
            ////console.log(response.returnValue.newproductdtl.sort((a, b) => (a.pcname < b.pcname ? -1 : 1)))
            for (var prod in response.returnValue.newproductdtl.sort((a, b) => (a.pcname < b.pcname ? -1 : 1))) {
                let data = response.returnValue.newproductdtl[prod];
                let productdetail = new _shared_interfaces_product__WEBPACK_IMPORTED_MODULE_3__["Product"]();
                // ////console.log("Stored" + category)
                // ////console.log("Loop" + response.returnValue.newproductdtl[prod].pcname)
                // ////console.log("Outerpart")
                if (response.returnValue.newproductdtl[prod].pcname != category && category != "") {
                    // ////console.log("InnerJoin")
                    this.grouplist.push({
                        name: category,
                        current: true,
                        products$: this.shop.getLatestProducts(category, 100, this.productlist),
                    });
                    this.productlist = new Array();
                }
                let image = new Array();
                image.push(data.primaryImageUrl);
                productdetail.id = Number(data.pid);
                productdetail.slug = data.pcname;
                productdetail.name = data.pname;
                productdetail.sku = data.sellerName;
                productdetail.price = Number(data.sellPrice);
                productdetail.compareAtPrice = null;
                productdetail.images = image;
                productdetail.badges = [];
                productdetail.rating = Number(data.reviewRating);
                productdetail.reviews = Number(data.reviewCount);
                productdetail.availability = (Number(data.currentStock) > 0 ? "In Stock" : "Out of Stock");
                productdetail.brand = data.manufacturerName;
                productdetail.categories = data.pcname;
                productdetail.attributes = [];
                productdetail.customFields = {};
                category = data.pcname;
                this.productlist.push(productdetail);
                // ////console.log(category)
                ////console.log(response.returnValue.newproductdtl.length)
                ////console.log(prod)
                if (response.returnValue.newproductdtl.length == Number(prod) + 1 && category != "") {
                    ////console.log("InnerJoin")
                    this.grouplist.push({
                        name: category,
                        current: true,
                        products$: this.shop.getLatestProducts(category, 100, this.productlist),
                    });
                    this.productlist = new Array();
                }
                this.productdetailAll.push(productdetail);
            }
            this.grouplist.unshift({
                name: "All",
                current: true,
                products$: this.shop.getLatestProducts(null, 100, this.productdetailAll),
            });
            // ////console.log(this.productlist)
            this.latestProducts$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
                abort$: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](),
                loading: false,
                products: [],
                groups: this.grouplist,
            });
            this.latestProducts$.subscribe(i => this.groupChange(i, i.groups[0]));
            ////console.log(this.latestProducts)
            ///Binding Top Product
            category = "";
            this.productlist = new Array();
            this.productdetailAll = new Array();
            this.grouplist = [];
            ////console.log("Top Product $$$$$$$$$$$$$$$$$$$$$$4")
            ////console.log(response.returnValue.topproductdtl.sort((a, b) => (a.pcname < b.pcname ? -1 : 1)))
            for (var prod in response.returnValue.topproductdtl.sort((a, b) => (a.pcname < b.pcname ? -1 : 1))) {
                let data = response.returnValue.topproductdtl[prod];
                let productdetail = new _shared_interfaces_product__WEBPACK_IMPORTED_MODULE_3__["Product"]();
                // ////console.log("Stored" + category)
                // ////console.log("Loop" + response.returnValue.topproductdtl[prod].pcname)
                // ////console.log("Outerpart")
                if (response.returnValue.topproductdtl[prod].pcname != category && category != "") {
                    // ////console.log("InnerJoin")
                    //  this.productlist.push(productdetail)
                    this.grouplist.push({
                        name: category,
                        current: true,
                        products$: this.shop.getTopProducts(category, 100, this.productlist),
                    });
                    this.productlist = new Array();
                }
                let image = new Array();
                image.push(data.primaryImageUrl);
                productdetail.id = Number(data.pid);
                productdetail.slug = data.pcname;
                productdetail.name = data.pname;
                productdetail.sku = data.sellerName;
                productdetail.price = Number(data.sellPrice);
                productdetail.compareAtPrice = null;
                productdetail.images = image;
                productdetail.badges = [];
                productdetail.rating = Number(data.reviewRating);
                productdetail.reviews = Number(data.reviewCount);
                productdetail.availability = (Number(data.currentStock) > 0 ? "In Stock" : "Out of Stock");
                productdetail.brand = data.manufacturerName;
                productdetail.categories = data.pcname;
                productdetail.attributes = [];
                productdetail.customFields = {};
                category = data.pcname;
                // ////console.log(category)
                this.productlist.push(productdetail);
                if (response.returnValue.topproductdtl.length == Number(prod) + 1 && category != "") {
                    ////console.log("InnerJoin")
                    this.grouplist.push({
                        name: category,
                        current: true,
                        products$: this.shop.getTopProducts(category, 100, this.productlist),
                    });
                    this.productlist = new Array();
                }
                this.productdetailAll.push(productdetail);
            }
            this.grouplist.unshift({
                name: "All",
                current: true,
                products$: this.shop.getTopProducts(null, 100, this.productdetailAll),
            });
            // ////console.log(this.productlist)
            this.topProduct$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
                abort$: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](),
                loading: false,
                products: [],
                groups: this.grouplist,
            });
            this.topProduct$.subscribe(i => this.groupChange(i, i.groups[0]));
            this.columnTopRated$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.productdetailAll.sort((a, b) => (a.rating > b.rating ? -1 : 1)).slice(0, 3));
            this.columnBestsellers$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.productdetailAll.sort((a, b) => (a.rating > b.rating ? -1 : 1)).slice(0, 3));
            this.bestsellers$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.productdetailAll.sort((a, b) => (a.rating > b.rating ? -1 : 1)).slice(0, 20));
            //// Binding Offer Product
            this.productlist = new Array();
            this.productdetailAll = new Array();
            this.grouplist = [];
            // ////console.log("Offer Product -------------")
            // ////console.log(response.returnValue.offerproductdtl)
            for (var prod in response.returnValue.offerproductdtl.sort((a, b) => (a.pcname < b.pcname ? -1 : 1))) {
                let data = response.returnValue.offerproductdtl[prod];
                let productdetail = new _shared_interfaces_product__WEBPACK_IMPORTED_MODULE_3__["Product"]();
                // ////console.log("Stored" + category)
                // ////console.log("Loop" + response.returnValue.offerproductdtl[prod].pcname)
                // ////console.log("Outerpart")
                if (response.returnValue.offerproductdtl[prod].pcname != category && category != "") {
                    // ////console.log("InnerJoin")
                    this.grouplist.push({
                        name: category,
                        current: true,
                        products$: this.shop.getOfferProducts(category, 100, this.productlist),
                    });
                    this.productlist = new Array();
                }
                let image = new Array();
                image.push(data.primaryImageUrl);
                productdetail.id = Number(data.pid);
                productdetail.slug = data.pcname;
                productdetail.name = data.pname;
                productdetail.sku = data.sellerName;
                productdetail.price = Number(data.sellPrice);
                productdetail.compareAtPrice = null;
                productdetail.images = image;
                productdetail.badges = [];
                productdetail.rating = Number(data.reviewRating);
                productdetail.reviews = Number(data.reviewCount);
                productdetail.availability = (Number(data.currentStock) > 0 ? "In Stock" : "Out of Stock");
                productdetail.brand = data.manufacturerName;
                productdetail.categories = data.pcname;
                productdetail.attributes = [];
                productdetail.customFields = {};
                category = data.pcname;
                // ////console.log(category)
                //offerproductdtl
                this.productlist.push(productdetail);
                if (response.returnValue.offerproductdtl.length == Number(prod) + 1 && category != "") {
                    ////console.log("InnerJoin")
                    this.grouplist.push({
                        name: category,
                        current: true,
                        products$: this.shop.getOfferProducts(category, 100, this.productlist),
                    });
                    this.productlist = new Array();
                }
                this.productdetailAll.push(productdetail);
            }
            this.grouplist.unshift({
                name: "All",
                current: true,
                products$: this.shop.getOfferProducts(null, 100, this.productdetailAll),
            });
            // ////console.log(this.productlist)
            this.offerProduct$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
                abort$: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](),
                loading: false,
                products: [],
                groups: this.grouplist,
            });
            this.offerProduct$.subscribe(i => this.groupChange(i, i.groups[0]));
            this.columnSpecialOffers$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.productdetailAll.slice(0, 3));
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    groupChange(carousel, group) {
        carousel.loading = true;
        carousel.abort$.next();
        group.products$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => carousel.loading = false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.destroy$, carousel.abort$))).subscribe(x => carousel.products = x);
    }
}
PageHomeTwoComponent.ɵfac = function PageHomeTwoComponent_Factory(t) { return new (t || PageHomeTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_6__["ShopService"])); };
PageHomeTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PageHomeTwoComponent, selectors: [["app-page-home-two"]], decls: 23, vars: 28, consts: [[3, "slides"], ["layout", "boxed"], ["header", "Popular Categories", "layout", "compact", 3, "categories", 4, "ngIf"], ["header", "Items in Cart", "layout", "grid-2", 3, "rows"], ["header", "Top Products", "layout", "grid-5", 3, "rows", "loading", "products", "groups", "groupChange", 4, "ngIf"], ["header", "Offer Products", "layout", "grid-5", 3, "rows", "loading", "products", "groups", "groupChange", 4, "ngIf"], ["hidden", ""], ["header", "Bestsellers", "layout", "large-last", 3, "products"], ["header", "New Arrivals", "layout", "grid-5", 3, "rows", "loading", "products", "groups", "groupChange", 4, "ngIf"], ["header", "Latest News", "layout", "grid-nl", "hidden", "", 3, "posts"], ["hidden", "", 3, "brands"], ["header", "Top Rated Products", 3, "products", 4, "ngIf"], ["header", "Special Offers", 3, "products", 4, "ngIf"], ["header", "Bestsellers", 3, "products", 4, "ngIf"], ["header", "Popular Categories", "layout", "compact", 3, "categories"], ["header", "Top Products", "layout", "grid-5", 3, "rows", "loading", "products", "groups", "groupChange"], ["header", "Offer Products", "layout", "grid-5", 3, "rows", "loading", "products", "groups", "groupChange"], ["header", "New Arrivals", "layout", "grid-5", 3, "rows", "loading", "products", "groups", "groupChange"], ["header", "Top Rated Products", 3, "products"], ["header", "Special Offers", 3, "products"], ["header", "Bestsellers", 3, "products"]], template: function PageHomeTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-block-slideshow", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-block-features", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PageHomeTwoComponent_app_block_categories_2_Template, 2, 3, "app-block-categories", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-block-products-carousel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, PageHomeTwoComponent_app_block_products_carousel_4_Template, 4, 10, "app-block-products-carousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, PageHomeTwoComponent_app_block_products_carousel_6_Template, 4, 10, "app-block-products-carousel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "app-block-banner", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "app-block-products", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, PageHomeTwoComponent_app_block_products_carousel_11_Template, 4, 10, "app-block-products-carousel", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "app-block-posts", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "app-block-brands", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "app-block-product-columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, PageHomeTwoComponent_app_block_product_columns_item_17_Template, 2, 3, "app-block-product-columns-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, PageHomeTwoComponent_app_block_product_columns_item_19_Template, 2, 3, "app-block-product-columns-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, PageHomeTwoComponent_app_block_product_columns_item_21_Template, 2, 3, "app-block-product-columns-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("slides", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.popularCategories$ !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rows", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 12, ctx.topProduct$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 14, ctx.offerProduct$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("products", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 16, ctx.bestsellers$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 18, ctx.latestProducts$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("posts", ctx.posts);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("brands", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 20, ctx.brands$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 22, ctx.columnTopRated$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 24, ctx.columnSpecialOffers$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 26, ctx.columnBestsellers$));
    } }, directives: [_modules_blocks_block_slideshow_block_slideshow_component__WEBPACK_IMPORTED_MODULE_7__["BlockSlideshowComponent"], _modules_blocks_block_features_block_features_component__WEBPACK_IMPORTED_MODULE_8__["BlockFeaturesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _modules_blocks_block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_10__["BlockProductsCarouselComponent"], _modules_blocks_block_banner_block_banner_component__WEBPACK_IMPORTED_MODULE_11__["BlockBannerComponent"], _modules_blocks_block_products_block_products_component__WEBPACK_IMPORTED_MODULE_12__["BlockProductsComponent"], _modules_blocks_block_posts_block_posts_component__WEBPACK_IMPORTED_MODULE_13__["BlockPostsComponent"], _modules_blocks_block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_14__["BlockBrandsComponent"], _modules_blocks_block_product_columns_block_product_columns_component__WEBPACK_IMPORTED_MODULE_15__["BlockProductColumnsComponent"], _modules_blocks_block_categories_block_categories_component__WEBPACK_IMPORTED_MODULE_16__["BlockCategoriesComponent"], _modules_blocks_block_product_columns_block_product_columns_item_block_product_columns_item_component__WEBPACK_IMPORTED_MODULE_17__["BlockProductColumnsItemComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWhvbWUtdHdvLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "v7nX":
/*!********************************************************************!*\
  !*** ./src/app/modules/footer/components/totop/totop.component.ts ***!
  \********************************************************************/
/*! exports provided: TotopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotopComponent", function() { return TotopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ "0njA");






class TotopComponent {
    constructor(platformId, zone) {
        this.platformId = platformId;
        this.zone = zone;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.show = false;
        this.classTotop = true;
    }
    get classTotopShow() { return this.show; }
    ngOnInit() {
        if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            return;
        }
        const showFrom = 300;
        this.zone.runOutsideAngular(() => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'scroll', { passive: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(() => {
                if (window.pageYOffset >= showFrom) {
                    if (!this.show) {
                        this.zone.run(() => this.show = true);
                    }
                }
                else {
                    if (this.show) {
                        this.zone.run(() => this.show = false);
                    }
                }
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    onClick() {
        try {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
        catch (_a) {
            window.scrollTo(0, 0);
        }
    }
}
TotopComponent.ɵfac = function TotopComponent_Factory(t) { return new (t || TotopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
TotopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TotopComponent, selectors: [["app-totop"]], hostVars: 4, hostBindings: function TotopComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("totop", ctx.classTotop)("totop--show", ctx.classTotopShow);
    } }, decls: 6, vars: 0, consts: [[1, "totop__body"], [1, "totop__start"], [1, "totop__container", "container"], [1, "totop__end"], ["type", "button", 1, "totop__button", 3, "click"], ["name", "arrow-rounded-up-13x8", "size", "13x8"]], template: function TotopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TotopComponent_Template_button_click_4_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3RvcC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "BgzB");
/* harmony import */ var _pages_page_home_one_page_home_one_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/page-home-one/page-home-one.component */ "+x8d");
/* harmony import */ var _pages_page_home_two_page_home_two_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-home-two/page-home-two.component */ "uV8K");
/* harmony import */ var _components_root_root_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/root/root.component */ "DFQn");
/* harmony import */ var _pages_page_offcanvas_cart_page_offcanvas_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page-offcanvas-cart/page-offcanvas-cart.component */ "DcSL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    // START / ONLY_FOR_DEMO_YOU_CAN_DELETE_IT
    {
        path: '',
        component: _components_root_root_component__WEBPACK_IMPORTED_MODULE_4__["RootComponent"],
        data: {
            headerLayout: 'compact',
            dropcartType: 'dropdown'
        },
        children: [
            {
                path: '',
                component: _pages_page_home_two_page_home_two_component__WEBPACK_IMPORTED_MODULE_3__["PageHomeTwoComponent"]
            }
        ],
    },
    {
        path: 'offcanvas-cart',
        component: _components_root_root_component__WEBPACK_IMPORTED_MODULE_4__["RootComponent"],
        data: {
            headerLayout: 'classic',
            dropcartType: 'offcanvas'
        },
        children: [
            {
                path: '',
                component: _pages_page_offcanvas_cart_page_offcanvas_cart_component__WEBPACK_IMPORTED_MODULE_5__["PageOffcanvasCartComponent"]
            }
        ],
    },
    // END / ONLY_FOR_DEMO_YOU_CAN_DELETE_IT
    {
        path: '',
        component: _components_root_root_component__WEBPACK_IMPORTED_MODULE_4__["RootComponent"],
        data: {
            // Header layout. Choose one of ['classic', 'compact'].
            headerLayout: 'classic',
            // Dropcart type. Choose one of ['dropdown', 'offcanvas'].
            dropcartType: 'dropdown'
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: _pages_page_home_one_page_home_one_component__WEBPACK_IMPORTED_MODULE_2__["PageHomeOneComponent"]
            },
            {
                path: 'shop',
                loadChildren: () => Promise.all(/*! import() | modules-shop-shop-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-shop-shop-module")]).then(__webpack_require__.bind(null, /*! ./modules/shop/shop.module */ "Km2g")).then(m => m.ShopModule)
            },
            {
                path: 'blog',
                loadChildren: () => __webpack_require__.e(/*! import() | modules-blog-blog-module */ "modules-blog-blog-module").then(__webpack_require__.bind(null, /*! ./modules/blog/blog.module */ "X6tI")).then(m => m.BlogModule)
            },
            {
                path: 'account',
                loadChildren: () => Promise.all(/*! import() | modules-account-account-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-account-account-module")]).then(__webpack_require__.bind(null, /*! ./modules/account/account.module */ "lKKO")).then(m => m.AccountModule)
            },
            {
                path: 'site',
                loadChildren: () => __webpack_require__.e(/*! import() | modules-site-site-module */ "modules-site-site-module").then(__webpack_require__.bind(null, /*! ./modules/site/site.module */ "MO8l")).then(m => m.SiteModule)
            },
            {
                path: '**',
                component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__["PageNotFoundComponent"]
            }
        ],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                initialNavigation: 'enabled',
                relativeLinkResolution: 'legacy'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wGjQ":
/*!******************************************************!*\
  !*** ./src/app/shared/pipes/currency-format.pipe.ts ***!
  \******************************************************/
/*! exports provided: CurrencyFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyFormatPipe", function() { return CurrencyFormatPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/currency.service */ "ChtM");




class CurrencyFormatPipe {
    constructor(locale, service) {
        this.locale = locale;
        this.service = service;
        this.currencyPipe = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"](this.locale);
    }
    transform(value, currencyCode, display, digitsInfo, locale) {
        currencyCode = currencyCode || this.service.options.code;
        display = display || this.service.options.display;
        digitsInfo = digitsInfo || this.service.options.digitsInfo;
        locale = locale || this.service.options.locale;
        return this.currencyPipe.transform(value, currencyCode, display, digitsInfo, locale);
    }
}
CurrencyFormatPipe.ɵfac = function CurrencyFormatPipe_Factory(t) { return new (t || CurrencyFormatPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_currency_service__WEBPACK_IMPORTED_MODULE_2__["CurrencyService"])); };
CurrencyFormatPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "currencyFormat", type: CurrencyFormatPipe, pure: false });


/***/ }),

/***/ "wiLq":
/*!********************************************************!*\
  !*** ./src/app/shared/services/photo-swipe.service.ts ***!
  \********************************************************/
/*! exports provided: PhotoSwipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoSwipeService", function() { return PhotoSwipeService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources.service */ "joTW");



const template = `
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="pswp__bg"></div>
    <div class="pswp__scroll-wrap">
        <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
        </div>
        <div class="pswp__ui pswp__ui--hidden">
            <div class="pswp__top-bar">
                <div class="pswp__counter"></div>
                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                <!--<button class="pswp__button pswp__button&#45;&#45;share" title="Share"></button>-->
                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                      <div class="pswp__preloader__cut">
                        <div class="pswp__preloader__donut"></div>
                      </div>
                    </div>
                </div>
            </div>
            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div class="pswp__share-tooltip"></div>
            </div>
            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
            <div class="pswp__caption">
                <div class="pswp__caption__center"></div>
            </div>
        </div>
    </div>
</div>
`;
class PhotoSwipeService {
    constructor(zone, resources) {
        this.zone = zone;
        this.resources = resources;
        this.initialized = false;
    }
    load() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(this.loadLibrary());
    }
    open(items, options) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](observer => {
            this.zone.runOutsideAngular(() => {
                this.loadLibrary().then(() => {
                    if (observer.closed) {
                        return;
                    }
                    if (!this.initialized) {
                        this.init();
                    }
                    this.createGallery(observer, items, options);
                });
            });
        });
    }
    ngOnDestroy() {
        if (this.initialized) {
            this.element.parentElement.removeChild(this.element);
        }
    }
    createGallery(observer, items, options) {
        let gallery = null;
        gallery = new PhotoSwipe(this.element, PhotoSwipeUI_Default, items, options);
        gallery.listen('destroy', () => this.zone.run(() => {
            gallery = null;
            this.zone.run(() => observer.complete());
        }));
        gallery.init();
        const modelRef = {
            close: () => {
                if (gallery) {
                    gallery.close();
                }
            },
            listen: (eventName, callbackFn) => gallery.listen(eventName, (...args) => {
                this.zone.run(() => callbackFn(...args));
            }),
            getCurrentIndex: () => gallery.getCurrentIndex()
        };
        observer.add(() => {
            if (gallery) {
                gallery.destroy();
            }
        });
        this.zone.run(() => observer.next(modelRef));
    }
    loadLibrary() {
        return this.resources.loadLibrary('photoSwipe');
    }
    init() {
        this.initialized = true;
        const div = document.createElement('div');
        div.innerHTML = template;
        this.element = div.firstElementChild;
        document.body.appendChild(this.element);
    }
}
PhotoSwipeService.ɵfac = function PhotoSwipeService_Factory(t) { return new (t || PhotoSwipeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"])); };
PhotoSwipeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PhotoSwipeService, factory: PhotoSwipeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "x2Uf":
/*!*****************************************************************!*\
  !*** ./src/app/shared/directives/departments-area.directive.ts ***!
  \*****************************************************************/
/*! exports provided: DepartmentsAreaDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsAreaDirective", function() { return DepartmentsAreaDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/header.service */ "Fc3L");


class DepartmentsAreaDirective {
    constructor(el, header) {
        this.el = el;
        this.header = header;
    }
    get element() {
        return this.el.nativeElement;
    }
    ngOnInit() {
        this.header.departmentsArea = this.element;
    }
    ngOnDestroy() {
        this.header.departmentsArea = null;
    }
}
DepartmentsAreaDirective.ɵfac = function DepartmentsAreaDirective_Factory(t) { return new (t || DepartmentsAreaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_1__["HeaderService"])); };
DepartmentsAreaDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DepartmentsAreaDirective, selectors: [["", "appDepartmentsArea", ""]] });


/***/ }),

/***/ "x5hD":
/*!******************************************************!*\
  !*** ./src/app/shared/directives/click.directive.ts ***!
  \******************************************************/
/*! exports provided: ClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickDirective", function() { return ClickDirective; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



/**
 * This directive helps to solve issue related to "iOS hover emulation" when first click
 */
class ClickDirective {
    constructor(el, zone) {
        this.el = el;
        this.zone = zone;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    get element() {
        return this.el.nativeElement;
    }
    ngOnInit() {
        let clicked = false;
        let identifier = null;
        let x = null;
        let y = null;
        this.zone.runOutsideAngular(() => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(this.element, 'touchstart').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$)).subscribe(event => {
                if (event.touches.length !== 1) {
                    return;
                }
                const touch = event.changedTouches[0];
                clicked = true;
                identifier = touch.identifier;
                x = touch.clientX;
                y = touch.clientY;
                setTimeout(() => {
                    clicked = false;
                    identifier = x = y = null;
                }, 300);
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(this.element, 'touchend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$)).subscribe(event => {
                if (clicked && event.changedTouches.length === 1 && event.changedTouches[0].identifier === identifier) {
                    const touch = event.changedTouches[0];
                    const distance = Math.abs(Math.sqrt(Math.pow(x - touch.clientX, 2) +
                        Math.pow(y - touch.clientY, 2)));
                    if (distance < 15) {
                        event.preventDefault();
                        this.element.click();
                    }
                }
                clicked = false;
                identifier = x = y = null;
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
ClickDirective.ɵfac = function ClickDirective_Factory(t) { return new (t || ClickDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"])); };
ClickDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ClickDirective, selectors: [["", "appClick", ""]] });


/***/ }),

/***/ "y1Wg":
/*!**************************************************************************!*\
  !*** ./src/app/modules/footer/components/contacts/contacts.component.ts ***!
  \**************************************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/store.service */ "2hfl");


class ContactsComponent {
    constructor(store) {
        this.store = store;
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_store_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"])); };
ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-footer-contacts"]], decls: 18, vars: 4, consts: [[1, "site-footer__widget", "footer-contacts"], [1, "footer-contacts__title"], [1, "footer-contacts__text"], [1, "footer-contacts__contacts"], [1, "footer-contacts__icon", "fas", "fa-globe-americas"], [1, "footer-contacts__icon", "far", "fa-envelope"], [1, "footer-contacts__icon", "fas", "fa-mobile-alt"], [1, "footer-contacts__icon", "far", "fa-clock"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in feugiat lorem. Pellentque ac placerat tellus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.store.address, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.store.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.store.phone.join(", "), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.store.hours, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "zCMj":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/offcanvas-cart.service.ts ***!
  \***********************************************************/
/*! exports provided: OffcanvasCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffcanvasCartService", function() { return OffcanvasCartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class OffcanvasCartService {
    constructor(platformId) {
        this.platformId = platformId;
        this.openSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isOpen$ = this.openSubject$.asObservable();
    }
    open() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            const bodyWidth = document.body.offsetWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = (document.body.offsetWidth - bodyWidth) + 'px';
            this.openSubject$.next(true);
        }
    }
    close() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
            this.openSubject$.next(false);
        }
    }
    toggle() {
        this.openSubject$.next(!this.openSubject$.value);
    }
}
OffcanvasCartService.ɵfac = function OffcanvasCartService_Factory(t) { return new (t || OffcanvasCartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
OffcanvasCartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OffcanvasCartService, factory: OffcanvasCartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ "zWxD":
/*!**********************************************************************!*\
  !*** ./src/app/modules/widgets/widget-tags/widget-tags.component.ts ***!
  \**********************************************************************/
/*! exports provided: WidgetTagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetTagsComponent", function() { return WidgetTagsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class WidgetTagsComponent {
    constructor() { }
}
WidgetTagsComponent.ɵfac = function WidgetTagsComponent_Factory(t) { return new (t || WidgetTagsComponent)(); };
WidgetTagsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WidgetTagsComponent, selectors: [["app-widget-tags"]], decls: 29, vars: 0, consts: [[1, "widget-tags", "widget"], [1, "widget__title"], [1, "tags", "tags--lg"], [1, "tags__list"], ["routerLink", "./"]], template: function WidgetTagsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tags Cloud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Promotion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Power Tool");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "New Arrivals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Screwdriver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Wrench");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Mounts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Electrodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Chainsaws");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Manometers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Nails");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Air Guns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Cutting Discs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXQtdGFncy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map