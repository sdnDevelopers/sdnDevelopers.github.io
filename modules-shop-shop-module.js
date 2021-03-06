(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-shop-shop-module"],{

/***/ "09c7":
/*!**************************************************************************!*\
  !*** ./src/app/modules/shop/resolvers/products-list-resolver.service.ts ***!
  \**************************************************************************/
/*! exports provided: parseProductsListParams, ProductsListResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseProductsListParams", function() { return parseProductsListParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListResolverService", function() { return ProductsListResolverService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/root.service */ "imTr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/api/shop.service */ "lFFw");







function parseProductsListParams(params) {
    const options = {};
    if (params.page) {
        options.page = parseFloat(params.page);
    }
    if (params.limit) {
        options.limit = parseFloat(params.limit);
    }
    if (params.sort) {
        options.sort = params.sort;
    }
    for (const param of Object.keys(params)) {
        const mr = param.match(/^filter_([-_A-Za-z0-9]+)$/);
        if (!mr) {
            continue;
        }
        const filterSlug = mr[1];
        if (!('filterValues' in options)) {
            options.filterValues = {};
        }
        options.filterValues[filterSlug] = params[param];
    }
    return options;
}
class ProductsListResolverService {
    constructor(root, router, shop) {
        this.root = root;
        this.router = router;
        this.shop = shop;
    }
    resolve(route, state) {
        const categorySlug = route.params.categorySlug || route.data.categorySlug || null;
        return this.shop.getProductsList(categorySlug, parseProductsListParams(route.queryParams)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"] && error.status === 404) {
                this.router.navigate([this.root.notFound()]).then();
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_0__["EMPTY"];
        }));
    }
}
ProductsListResolverService.??fac = function ProductsListResolverService_Factory(t) { return new (t || ProductsListResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_4__["RootService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_6__["ShopService"])); };
ProductsListResolverService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({ token: ProductsListResolverService, factory: ProductsListResolverService.??fac, providedIn: 'root' });


/***/ }),

/***/ "3Bam":
/*!*********************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-cart/page-cart.component.ts ***!
  \*********************************************************************/
/*! exports provided: PageCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCartComponent", function() { return PageCartComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/root.service */ "imTr");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ "Xgv5");
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ "tgey");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/input-number/input-number.component */ "lKnz");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ "0njA");
/* harmony import */ var _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/pipes/currency-format.pipe */ "wGjQ");













function PageCartComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4, "Your shopping cart is empty!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](7, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", ctx_r0.root.shop());
} }
function PageCartComponent_div_2_tr_17_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](2, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", ctx_r6.root.product(item_r5.cartItem.product));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("src", item_r5.cartItem.product.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_3__["????sanitizeUrl"]);
} }
function PageCartComponent_div_2_tr_17_ul_6_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const option_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate2"]("", option_r10.name, ": ", option_r10.value, "");
} }
function PageCartComponent_div_2_tr_17_ul_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "ul", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, PageCartComponent_div_2_tr_17_ul_6_li_1_Template, 2, 2, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", item_r5.cartItem.options);
} }
const _c0 = function (a0) { return { "btn-loading": a0 }; };
function PageCartComponent_div_2_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, PageCartComponent_div_2_tr_17_div_2_Template, 3, 2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](6, PageCartComponent_div_2_tr_17_ul_6_Template, 2, 1, "ul", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](9, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](11, "app-input-number", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](14, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function PageCartComponent_div_2_tr_17_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r13); const item_r5 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2); return ctx_r12.remove(item_r5.cartItem); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](17, "app-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", item_r5.cartItem.product.images == null ? null : item_r5.cartItem.product.images.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", ctx_r2.root.product(item_r5.cartItem.product));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](item_r5.cartItem.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", item_r5.cartItem.options.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](9, 9, item_r5.cartItem.product.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formControl", item_r5.quantityControl)("min", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](14, 11, item_r5.cartItem.product.price * item_r5.quantity));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](13, _c0, ctx_r2.removedItems.includes(item_r5.cartItem)));
} }
function PageCartComponent_div_2_thead_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "thead", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](6, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](6, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](7, 3, ctx_r3.cart.subtotal$)));
} }
function PageCartComponent_div_2_tbody_39_tr_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function PageCartComponent_div_2_tbody_39_tr_1_div_6_Template_a_click_1_listener($event) { return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "Calculate Shipping");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function PageCartComponent_div_2_tbody_39_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](5, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](6, PageCartComponent_div_2_tbody_39_tr_1_div_6_Template, 3, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const total_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](total_r15.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](5, 3, total_r15.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", total_r15.type === "shipping");
} }
function PageCartComponent_div_2_tbody_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "tbody", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, PageCartComponent_div_2_tbody_39_tr_1_Template, 7, 5, "tr", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, ctx_r4.cart.totals$));
} }
function PageCartComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "thead", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](10, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](12, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](14, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](15, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "tbody", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](17, PageCartComponent_div_2_tr_17_Template, 18, 15, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "form", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](21, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](22, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](24, "Apply Coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](27, "Continue Shopping");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](28, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function PageCartComponent_div_2_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r18.update(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](29, "Update Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](31, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](32, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](33, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "h3", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](35, "Cart Totals");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](36, "table", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](37, PageCartComponent_div_2_thead_37_Template, 8, 5, "thead", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](38, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](39, PageCartComponent_div_2_tbody_39_Template, 3, 3, "tbody", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](40, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](41, "tfoot", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](42, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](43, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](44, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](47, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](48, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](49, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](50, "Proceed to checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](14, _c0, ctx_r1.updating))("disabled", !ctx_r1.needUpdate());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](38, 6, ctx_r1.cart.totals$).length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](40, 8, ctx_r1.cart.totals$).length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](47, 10, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](48, 12, ctx_r1.cart.total$)));
} }
const _c1 = function (a1) { return { label: "Home", url: a1 }; };
const _c2 = function () { return { label: "Shopping Cart", url: "" }; };
const _c3 = function (a0, a1) { return [a0, a1]; };
class PageCartComponent {
    constructor(root, cart) {
        this.root = root;
        this.cart = cart;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.removedItems = [];
        this.items = [];
        this.updating = false;
    }
    ngOnInit() {
        this.cart.items$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(cartItems => cartItems.map(cartItem => {
            return {
                cartItem,
                quantity: cartItem.quantity,
                quantityControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](cartItem.quantity, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
            };
        }))).subscribe(items => this.items = items);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    remove(item) {
        if (this.removedItems.includes(item)) {
            return;
        }
        this.removedItems.push(item);
        this.cart.remove(item).subscribe({ complete: () => this.removedItems = this.removedItems.filter(eachItem => eachItem !== item) });
    }
    update() {
        this.updating = true;
        this.cart.update(this.items
            .filter(item => item.quantityControl.value !== item.quantity)
            .map(item => ({
            item: item.cartItem,
            quantity: item.quantityControl.value
        }))).subscribe({ complete: () => this.updating = false });
    }
    needUpdate() {
        let needUpdate = false;
        for (const item of this.items) {
            if (!item.quantityControl.valid) {
                return false;
            }
            if (item.quantityControl.value !== item.quantity) {
                needUpdate = true;
            }
        }
        return needUpdate;
    }
}
PageCartComponent.??fac = function PageCartComponent_Factory(t) { return new (t || PageCartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_4__["RootService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"])); };
PageCartComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: PageCartComponent, selectors: [["app-cart"]], decls: 3, vars: 10, consts: [[3, "header", "breadcrumbs"], ["class", "block block-empty", 4, "ngIf"], ["class", "cart block", 4, "ngIf"], [1, "block", "block-empty"], [1, "container"], [1, "block-empty__body"], [1, "block-empty__message"], [1, "block-empty__actions"], [1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], [1, "cart", "block"], [1, "cart__table", "cart-table"], [1, "cart-table__head"], [1, "cart-table__row"], [1, "cart-table__column", "cart-table__column--image"], [1, "cart-table__column", "cart-table__column--product"], [1, "cart-table__column", "cart-table__column--price"], [1, "cart-table__column", "cart-table__column--quantity"], [1, "cart-table__column", "cart-table__column--total"], [1, "cart-table__column", "cart-table__column--remove"], [1, "cart-table__body"], ["class", "cart-table__row", 4, "ngFor", "ngForOf"], [1, "cart__actions"], [1, "cart__coupon-form"], ["for", "input-coupon-code", 1, "sr-only"], ["type", "text", "id", "input-coupon-code", "placeholder", "Coupon Code", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "cart__buttons"], ["routerLink", "/", 1, "btn", "btn-light"], ["type", "button", 1, "btn", "btn-primary", "cart__update-button", 3, "ngClass", "disabled", "click"], [1, "row", "justify-content-end", "pt-5"], [1, "col-12", "col-md-7", "col-lg-6", "col-xl-5"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "cart__totals"], ["class", "cart__totals-header", 4, "ngIf"], ["class", "cart__totals-body", 4, "ngIf"], [1, "cart__totals-footer"], ["routerLink", "./checkout", 1, "btn", "btn-primary", "btn-xl", "btn-block", "cart__checkout-button"], ["class", "product-image", 4, "ngIf"], [1, "cart-table__product-name", 3, "routerLink"], ["class", "cart-table__options", 4, "ngIf"], ["data-title", "Price", 1, "cart-table__column", "cart-table__column--price"], ["data-title", "Quantity", 1, "cart-table__column", "cart-table__column--quantity"], [3, "formControl", "min"], ["data-title", "Total", 1, "cart-table__column", "cart-table__column--total"], ["type", "button", 1, "btn", "btn-light", "btn-sm", "btn-svg-icon", 3, "ngClass", "click"], ["name", "cross-12", "size", "12"], [1, "product-image"], [1, "product-image__body", 3, "routerLink"], ["alt", "", 1, "product-image__img", 3, "src"], [1, "cart-table__options"], [4, "ngFor", "ngForOf"], [1, "cart__totals-header"], [1, "cart__totals-body"], ["class", "cart__calc-shipping", 4, "ngIf"], [1, "cart__calc-shipping"], ["href", "", 3, "click"]], template: function PageCartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, PageCartComponent_div_1_Template, 8, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, PageCartComponent_div_2_Template, 51, 16, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("header", "Shopping Cart")("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](7, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](4, _c1, ctx.root.home()), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](6, _c2)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !ctx.items.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.items.length);
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__["PageHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_9__["InputNumberComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__["IconComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_11__["CurrencyFormatPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWNhcnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "5+iJ":
/*!*********************************************************************!*\
  !*** ./src/app/modules/shop/resolvers/category-resolver.service.ts ***!
  \*********************************************************************/
/*! exports provided: CategoryResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryResolverService", function() { return CategoryResolverService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/root.service */ "imTr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/api/shop.service */ "lFFw");







class CategoryResolverService {
    constructor(root, router, shop) {
        this.root = root;
        this.router = router;
        this.shop = shop;
    }
    resolve(route, state) {
        const categorySlug = route.params.categorySlug || route.data.categorySlug || null;
        if (categorySlug === null) {
            return null;
        }
        return this.shop.getCategory(categorySlug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"] && error.status === 404) {
                this.router.navigateByUrl(this.root.notFound()).then();
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_0__["EMPTY"];
        }));
    }
}
CategoryResolverService.??fac = function CategoryResolverService_Factory(t) { return new (t || CategoryResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_4__["RootService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_6__["ShopService"])); };
CategoryResolverService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({ token: CategoryResolverService, factory: CategoryResolverService.??fac, providedIn: 'root' });


/***/ }),

/***/ "5RG6":
/*!******************************************!*\
  !*** ./src/app/shared/helpers/filter.ts ***!
  \******************************************/
/*! exports provided: parseFilterValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseFilterValue", function() { return parseFilterValue; });
function parseFilterValue(filterType, value) {
    switch (filterType) {
        case 'range':
            return value.split('-').map(x => parseFloat(x));
        case 'check':
        case 'color':
            return value.trim() === '' ? [] : value.split(',');
    }
    return value;
}


/***/ }),

/***/ "8VvP":
/*!********************************************************************************!*\
  !*** ./src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.ts ***!
  \********************************************************************************/
/*! exports provided: ShopSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopSidebarComponent", function() { return ShopSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_functions_rxjs_fromMatchMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/functions/rxjs/fromMatchMedia */ "41D5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/api/shop.service */ "lFFw");
/* harmony import */ var _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/shop-sidebar.service */ "D5am");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ "0njA");
/* harmony import */ var _widgets_widget_filters_widget_filters_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../widgets/widget-filters/widget-filters.component */ "51Pi");
/* harmony import */ var _widgets_widget_products_widget_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../widgets/widget-products/widget-products.component */ "BEKe");












function ShopSidebarComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-widget-products", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("products", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, ctx_r0.bestsellers$));
} }
const _c0 = function (a0, a1, a2) { return { "block-sidebar--offcanvas--always": a0, "block-sidebar--offcanvas--mobile": a1, "block-sidebar--open": a2 }; };
class ShopSidebarComponent {
    constructor(shop, sidebar, platformId) {
        this.shop = shop;
        this.sidebar = sidebar;
        this.platformId = platformId;
        /**
         * Indicates when filters will be offcanvas.
         * - always: https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/classic/shop/category-grid-4-columns-full
         * - mobile: https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/classic/shop/category-grid-3-columns-sidebar
         */
        this.offcanvas = 'mobile';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isOpen = false;
    }
    ngOnInit() {
        this.bestsellers$ = this.shop.getBestsellers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(x => x.slice(0, 5)));
        this.sidebar.isOpen$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(isOpen => {
            if (isOpen) {
                this.open();
            }
            else {
                this.close();
            }
        });
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            Object(_shared_functions_rxjs_fromMatchMedia__WEBPACK_IMPORTED_MODULE_3__["fromMatchMedia"])('(max-width: 991px)').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(media => {
                if (this.offcanvas === 'mobile' && this.isOpen && !media.matches) {
                    this.close();
                }
            });
        }
    }
    ngOnDestroy() {
        this.close();
        this.destroy$.next();
        this.destroy$.complete();
    }
    open() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            const bodyWidth = document.body.offsetWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = (document.body.offsetWidth - bodyWidth) + 'px';
        }
        this.isOpen = true;
    }
    close() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }
        this.isOpen = false;
    }
}
ShopSidebarComponent.??fac = function ShopSidebarComponent_Factory(t) { return new (t || ShopSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_5__["ShopService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_6__["ShopSidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
ShopSidebarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ShopSidebarComponent, selectors: [["app-shop-sidebar"]], inputs: { offcanvas: "offcanvas" }, decls: 11, vars: 7, consts: [[1, "block", "block-sidebar", 3, "ngClass"], [1, "block-sidebar__backdrop", 3, "click"], [1, "block-sidebar__body"], [1, "block-sidebar__header"], [1, "block-sidebar__title"], ["type", "button", 1, "block-sidebar__close", 3, "click"], ["name", "cross-20", "size", "20"], [1, "block-sidebar__item"], [3, "offcanvas"], ["class", "block-sidebar__item d-none d-lg-block", 4, "ngIf"], [1, "block-sidebar__item", "d-none", "d-lg-block"], ["header", "Latest Products", 3, "products"]], template: function ShopSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ShopSidebarComponent_Template_div_click_1_listener() { return ctx.sidebar.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ShopSidebarComponent_Template_button_click_6_listener() { return ctx.sidebar.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "app-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "app-widget-filters", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, ShopSidebarComponent_div_10_Template, 3, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction3"](3, _c0, ctx.offcanvas === "always", ctx.offcanvas === "mobile", ctx.isOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("offcanvas", ctx.offcanvas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.offcanvas === "mobile");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__["IconComponent"], _widgets_widget_filters_widget_filters_component__WEBPACK_IMPORTED_MODULE_8__["WidgetFiltersComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _widgets_widget_products_widget_products_component__WEBPACK_IMPORTED_MODULE_9__["WidgetProductsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wLXNpZGViYXIuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ "Bjd0":
/*!***************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-compare/page-compare.component.ts ***!
  \***************************************************************************/
/*! exports provided: PageCompareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCompareComponent", function() { return PageCompareComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/root.service */ "imTr");
/* harmony import */ var _shared_services_compare_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/compare.service */ "eGMf");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ "Xgv5");
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ "tgey");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/rating/rating.component */ "gf8J");
/* harmony import */ var _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/pipes/currency-format.pipe */ "wGjQ");











function PageCompareComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "You have not chosen any products to compare!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function PageCompareComponent_div_2_td_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const product_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("src", product_r9.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_2__["????sanitizeUrl"]);
} }
function PageCompareComponent_div_2_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, PageCompareComponent_div_2_td_8_div_2_Template, 3, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const product_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", ctx_r2.root.product(product_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", product_r9.images == null ? null : product_r9.images.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](product_r9.name);
} }
function PageCompareComponent_div_2_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "app-rating", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const product_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", product_r12.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", product_r12.reviews, " Reviews ");
} }
function PageCompareComponent_div_2_td_16_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "In Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function PageCompareComponent_div_2_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, PageCompareComponent_div_2_td_16_span_1_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const product_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", product_r13.availability === "in-stock");
} }
function PageCompareComponent_div_2_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](2, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const product_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](2, 1, product_r15.price));
} }
const _c0 = function (a0) { return { "btn-loading": a0 }; };
function PageCompareComponent_div_2_td_24_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function PageCompareComponent_div_2_td_24_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r18); const product_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2); return ctx_r17.addToCart(product_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Add To Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const product_r16 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](1, _c0, ctx_r6.addedToCartProducts.includes(product_r16)));
} }
function PageCompareComponent_div_2_tr_25_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const product_r21 = ctx.$implicit;
    const feature_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](feature_r19.values[product_r21.id] || "\u2014");
} }
function PageCompareComponent_div_2_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, PageCompareComponent_div_2_tr_25_td_3_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const feature_r19 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](feature_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r7.products);
} }
function PageCompareComponent_div_2_td_28_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function PageCompareComponent_div_2_td_28_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r25); const product_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2); return ctx_r24.remove(product_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const product_r23 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](1, _c0, ctx_r8.removedProducts.includes(product_r23)));
} }
function PageCompareComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](8, PageCompareComponent_div_2_td_8_Template, 5, 3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](11, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](12, PageCompareComponent_div_2_td_12_Template, 5, 2, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15, "Availability");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](16, PageCompareComponent_div_2_td_16_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](20, PageCompareComponent_div_2_td_20_Template, 3, 3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](23, "Add To Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](24, PageCompareComponent_div_2_td_24_Template, 3, 3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](25, PageCompareComponent_div_2_tr_25_Template, 4, 2, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](28, PageCompareComponent_div_2_td_28_Template, 3, 3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r1.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r1.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r1.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r1.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r1.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r1.features);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r1.products);
} }
const _c1 = function () { return { label: "Home", url: "/" }; };
const _c2 = function () { return { label: "Comparison", url: "" }; };
const _c3 = function (a0, a1) { return [a0, a1]; };
class PageCompareComponent {
    constructor(root, compare, cart) {
        this.root = root;
        this.compare = compare;
        this.cart = cart;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.products = [];
        this.features = [];
        this.addedToCartProducts = [];
        this.removedProducts = [];
    }
    ngOnInit() {
        this.compare.items$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$)).subscribe(products => {
            const features = [];
            products.forEach(product => product.attributes.forEach(productAttribute => {
                let feature = features.find(eachFeature => eachFeature.name === productAttribute.name);
                if (!feature) {
                    feature = {
                        name: productAttribute.name,
                        values: {}
                    };
                    features.push(feature);
                }
                feature.values[product.id] = productAttribute.values.map(x => x.name).join(', ');
            }));
            this.products = products;
            this.features = features;
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
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
    remove(product) {
        if (this.removedProducts.includes(product)) {
            return;
        }
        this.removedProducts.push(product);
        this.compare.remove(product).subscribe({
            complete: () => {
                this.removedProducts = this.removedProducts.filter(eachProduct => eachProduct !== product);
            }
        });
    }
}
PageCompareComponent.??fac = function PageCompareComponent_Factory(t) { return new (t || PageCompareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_3__["RootService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_shared_services_compare_service__WEBPACK_IMPORTED_MODULE_4__["CompareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"])); };
PageCompareComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: PageCompareComponent, selectors: [["app-compare"]], decls: 3, vars: 9, consts: [[3, "header", "breadcrumbs"], ["class", "block block-empty", 4, "ngIf"], ["class", "block", 4, "ngIf"], [1, "block", "block-empty"], [1, "container"], [1, "block-empty__body"], [1, "block-empty__message"], [1, "block-empty__actions"], ["routerLink", "/", 1, "btn", "btn-primary", "btn-sm"], [1, "block"], [1, "table-responsive"], [1, "compare-table"], [4, "ngFor", "ngForOf"], [1, "compare-table__product-link", 3, "routerLink"], ["class", "compare-table__product-image product-image", 4, "ngIf"], [1, "compare-table__product-name"], [1, "compare-table__product-image", "product-image"], [1, "product-image__body"], ["alt", "", 1, "product-image__img", 3, "src"], [1, "compare-table__product-rating"], [3, "value"], [1, "compare-table__product-rating-legend"], ["class", "compare-table__product-badge badge badge-success", 4, "ngIf"], [1, "compare-table__product-badge", "badge", "badge-success"], [1, "btn", "btn-primary", 3, "ngClass", "click"], [1, "btn", "btn-secondary", "btn-sm", 3, "ngClass", "click"]], template: function PageCompareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, PageCompareComponent_div_1_Template, 8, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, PageCompareComponent_div_2_Template, 29, 7, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("header", "Comparison")("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction2"](6, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](4, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](5, _c2)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx.products.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.products.length);
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__["PageHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _shared_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_9__["RatingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], pipes: [_shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_10__["CurrencyFormatPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWNvbXBhcmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "CtwS":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/shop/components/products-view/products-view.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsViewComponent", function() { return ProductsViewComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shop-sidebar.service */ "D5am");
/* harmony import */ var _services_page_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/page-category.service */ "Tg9M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ "0njA");
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/pagination/pagination.component */ "NhFE");
/* harmony import */ var _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/product-card/product-card.component */ "nS2t");










function ProductsViewComponent_div_3_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r2.filtersCount);
} }
function ProductsViewComponent_div_3_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "app-product-card", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("product", product_r4);
} }
const _c0 = function (a0, a1) { return { "view-options--offcanvas--always": a0, "view-options--offcanvas--mobile": a1 }; };
const _c1 = function (a0) { return { "layout-switcher__button--active": a0 }; };
function ProductsViewComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ProductsViewComponent_div_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r5.sidebar.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "app-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "Filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](8, ProductsViewComponent_div_3_span_8_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ProductsViewComponent_div_3_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r7.setLayout("grid"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](13, "app-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ProductsViewComponent_div_3_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r8.setLayout("grid-with-features"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](15, "app-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ProductsViewComponent_div_3_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r9.setLayout("list"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](17, "app-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](20, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](23, "Sort By");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](27, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](29, "Name (A-Z)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](31, "Name (Z-A)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](34, "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](38, "12");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](40, "24");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](42, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](43, ProductsViewComponent_div_3_div_43_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](44, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](45, "app-pagination", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction2"](13, _c0, ctx_r0.offcanvas === "always", ctx_r0.offcanvas === "mobile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r0.filtersCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](16, _c1, ctx_r0.layout === "grid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](18, _c1, ctx_r0.layout === "grid-with-features"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](20, _c1, ctx_r0.layout === "list"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate3"](" Showing ", ctx_r0.pageService.from, "\u2013", ctx_r0.pageService.to, " of ", ctx_r0.pageService.total, " results ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????attribute"]("data-layout", ctx_r0.layout != "list" ? ctx_r0.grid : ctx_r0.layout)("data-with-features", ctx_r0.layout == "grid-with-features" ? "true" : "false");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r0.pageService.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("siblings", 2)("total", ctx_r0.pageService.pages);
} }
function ProductsViewComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "No matching items");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "Try resetting the filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ProductsViewComponent_div_4_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r10.resetFilters(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Reset filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
const _c2 = function (a0) { return { "products-view--loading": a0 }; };
class ProductsViewComponent {
    constructor(fb, sidebar, pageService) {
        this.fb = fb;
        this.sidebar = sidebar;
        this.pageService = pageService;
        this.layout = 'grid';
        this.grid = 'grid-3-sidebar';
        this.offcanvas = 'mobile';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.filtersCount = 0;
    }
    ngOnInit() {
        this.listOptionsForm = this.fb.group({
            page: this.fb.control(this.pageService.page),
            limit: this.fb.control(this.pageService.limit),
            sort: this.fb.control(this.pageService.sort),
        });
        this.listOptionsForm.valueChanges.subscribe(value => {
            value.limit = parseFloat(value.limit);
            this.pageService.updateOptions(value);
        });
        this.pageService.list$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.destroy$)).subscribe(({ page, limit, sort, filterValues }) => {
            this.filtersCount = Object.keys(filterValues).length;
            this.listOptionsForm.setValue({ page, limit, sort }, { emitEvent: false });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    setLayout(value) {
        this.layout = value;
    }
    resetFilters() {
        this.pageService.updateOptions({ filterValues: {} });
    }
}
ProductsViewComponent.??fac = function ProductsViewComponent_Factory(t) { return new (t || ProductsViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["ShopSidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_services_page_category_service__WEBPACK_IMPORTED_MODULE_5__["PageCategoryService"])); };
ProductsViewComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: ProductsViewComponent, selectors: [["app-products-view"]], inputs: { layout: "layout", grid: "grid", offcanvas: "offcanvas" }, decls: 5, vars: 8, consts: [[1, "products-view", 3, "ngClass", "formGroup"], [1, "products-view__loader"], ["class", "products-view__content", 4, "ngIf"], ["class", "products-view__empty", 4, "ngIf"], [1, "products-view__content"], [1, "products-view__options"], [1, "view-options", 3, "ngClass"], [1, "view-options__filters-button"], ["type", "button", 1, "filters-button", 3, "click"], ["name", "filters-16", "size", "16", 1, "filters-button__icon"], [1, "filters-button__title"], ["class", "filters-button__counter", 4, "ngIf"], [1, "view-options__layout"], [1, "layout-switcher"], [1, "layout-switcher__list"], ["title", "Grid", "type", "button", 1, "layout-switcher__button", 3, "ngClass", "click"], ["name", "layout-grid-16x16", "size", "16"], ["title", "Grid With Features", "type", "button", 1, "layout-switcher__button", 3, "ngClass", "click"], ["name", "layout-grid-with-details-16x16", "size", "16"], ["title", "List", "type", "button", 1, "layout-switcher__button", 3, "ngClass", "click"], ["name", "layout-list-16x16", "size", "16"], [1, "view-options__legend"], [1, "view-options__divider"], [1, "view-options__control"], ["for", "view-options-sort"], ["id", "view-options-sort", "formControlName", "sort", 1, "form-control", "form-control-sm"], ["value", "default"], ["value", "name_asc"], ["value", "name_desc"], ["for", "view-options-limit"], ["id", "view-options-limit", "formControlName", "limit", 1, "form-control", "form-control-sm"], ["value", "12"], ["value", "24"], [1, "products-view__list", "products-list"], [1, "products-list__body"], ["class", "products-list__item", 4, "ngFor", "ngForOf"], [1, "products-view__pagination"], ["formControlName", "page", 3, "siblings", "total"], [1, "filters-button__counter"], [1, "products-list__item"], [3, "product"], [1, "products-view__empty"], [1, "products-view__empty-title"], [1, "products-view__empty-subtitle"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"]], template: function ProductsViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, ProductsViewComponent_div_3_Template, 46, 22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, ProductsViewComponent_div_4_Template, 7, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](6, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](1, 4, ctx.pageService.isLoading$)))("formGroup", ctx.listOptionsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.pageService.items == null ? null : ctx.pageService.items.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !(ctx.pageService.items == null ? null : ctx.pageService.items.length));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__["IconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__["PaginationComponent"], _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_9__["ProductCardComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0cy12aWV3LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "D5am":
/*!***************************************************************!*\
  !*** ./src/app/modules/shop/services/shop-sidebar.service.ts ***!
  \***************************************************************/
/*! exports provided: ShopSidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopSidebarService", function() { return ShopSidebarService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ShopSidebarService {
    constructor() {
        this.isOpenSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.isOpen$ = this.isOpenSubject$.asObservable();
    }
    open() {
        this.isOpenSubject$.next(true);
    }
    close() {
        this.isOpenSubject$.next(false);
    }
}
ShopSidebarService.??fac = function ShopSidebarService_Factory(t) { return new (t || ShopSidebarService)(); };
ShopSidebarService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: ShopSidebarService, factory: ShopSidebarService.??fac });


/***/ }),

/***/ "DA1V":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/shop/components/product-sidebar/product-sidebar.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProductSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSidebarComponent", function() { return ProductSidebarComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/shop.service */ "lFFw");
/* harmony import */ var _widgets_widget_categories_widget_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../widgets/widget-categories/widget-categories.component */ "HgAd");
/* harmony import */ var _widgets_widget_products_widget_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../widgets/widget-products/widget-products.component */ "BEKe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






class ProductSidebarComponent {
    constructor(shop) {
        this.shop = shop;
    }
    ngOnInit() {
        this.categories$ = this.shop.getCategories(null, 1);
        this.bestsellers$ = this.shop.getBestsellers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(x => x.slice(0, 5)));
    }
}
ProductSidebarComponent.??fac = function ProductSidebarComponent_Factory(t) { return new (t || ProductSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"])); };
ProductSidebarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: ProductSidebarComponent, selectors: [["app-product-sidebar"]], decls: 7, vars: 6, consts: [[1, "block", "block-sidebar"], [1, "block-sidebar__item"], ["location", "shop", 3, "categories"], ["header", "Latest Products", 3, "products"]], template: function ProductSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "app-widget-categories", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "app-widget-products", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("categories", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](3, 2, ctx.categories$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("products", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](6, 4, ctx.bestsellers$));
    } }, directives: [_widgets_widget_categories_widget_categories_component__WEBPACK_IMPORTED_MODULE_3__["WidgetCategoriesComponent"], _widgets_widget_products_widget_products_component__WEBPACK_IMPORTED_MODULE_4__["WidgetProductsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXNpZGViYXIuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ "EBz6":
/*!********************************************************************!*\
  !*** ./src/app/modules/shop/resolvers/product-resolver.service.ts ***!
  \********************************************************************/
/*! exports provided: ProductResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductResolverService", function() { return ProductResolverService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/root.service */ "imTr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/api/shop.service */ "lFFw");







class ProductResolverService {
    constructor(root, router, shop) {
        this.root = root;
        this.router = router;
        this.shop = shop;
    }
    resolve(route, state) {
        const productSlug = route.params.productSlug || route.data.productSlug;
        return this.shop.getProduct(productSlug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"] && error.status === 404) {
                this.router.navigate([this.root.notFound()]).then();
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_0__["EMPTY"];
        }));
    }
}
ProductResolverService.??fac = function ProductResolverService_Factory(t) { return new (t || ProductResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_4__["RootService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_6__["ShopService"])); };
ProductResolverService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({ token: ProductResolverService, factory: ProductResolverService.??fac, providedIn: 'root' });


/***/ }),

/***/ "GbKq":
/*!*****************************************************!*\
  !*** ./src/app/modules/shop/shop-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ShopRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopRoutingModule", function() { return ShopRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/page-category/page-category.component */ "JbOL");
/* harmony import */ var _pages_page_cart_page_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/page-cart/page-cart.component */ "3Bam");
/* harmony import */ var _pages_page_wishlist_page_wishlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-wishlist/page-wishlist.component */ "zjNp");
/* harmony import */ var _pages_page_checkout_page_checkout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-checkout/page-checkout.component */ "minn");
/* harmony import */ var _pages_page_compare_page_compare_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page-compare/page-compare.component */ "Bjd0");
/* harmony import */ var _pages_page_track_order_page_track_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/page-track-order/page-track-order.component */ "PYyj");
/* harmony import */ var _guards_checkout_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/checkout.guard */ "qmS4");
/* harmony import */ var _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page-product/page-product.component */ "VQ5v");
/* harmony import */ var _resolvers_products_list_resolver_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resolvers/products-list-resolver.service */ "09c7");
/* harmony import */ var _resolvers_category_resolver_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resolvers/category-resolver.service */ "5+iJ");
/* harmony import */ var _resolvers_product_resolver_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resolvers/product-resolver.service */ "EBz6");
/* harmony import */ var _pages_page_order_success_page_order_success_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/page-order-success/page-order-success.component */ "ICVK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");















const categoryPageData = {
    // Number of products per row. Possible values: 3, 4, 5.
    columns: 3,
    // Shop view mode by default. Possible values: 'grid', 'grid-with-features', 'list'.
    viewMode: 'grid',
    // Sidebar position. Possible values: 'start', 'end'.
    // It does not matter if the value of the 'columns' parameter is not 3.
    // For LTR scripts "start" is "left" and "end" is "right".
    sidebarPosition: 'start'
};
const categoryPageResolvers = {
    category: _resolvers_category_resolver_service__WEBPACK_IMPORTED_MODULE_10__["CategoryResolverService"],
    products: _resolvers_products_list_resolver_service__WEBPACK_IMPORTED_MODULE_9__["ProductsListResolverService"]
};
const routes = [
    {
        path: 'catalog',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_1__["PageCategoryComponent"],
        data: categoryPageData,
        resolve: categoryPageResolvers,
    },
    {
        path: 'catalog/:categorySlug',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_1__["PageCategoryComponent"],
        data: categoryPageData,
        resolve: categoryPageResolvers,
    },
    {
        path: 'products/:productSlug',
        component: _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_8__["PageProductComponent"],
        data: {
            // Product page layout. Possible values: 'standard', 'columnar', 'sidebar'.
            layout: 'standard',
            // Sidebar position. Possible values: 'start', 'end'.
            // It does not matter if the value of the 'layout' parameter is not 'sidebar'.
            // For LTR scripts "start" is "left" and "end" is "right".
            sidebarPosition: 'start'
        },
        resolve: {
            product: _resolvers_product_resolver_service__WEBPACK_IMPORTED_MODULE_11__["ProductResolverService"]
        },
    },
    {
        path: 'cart',
        pathMatch: 'full',
        component: _pages_page_cart_page_cart_component__WEBPACK_IMPORTED_MODULE_2__["PageCartComponent"]
    },
    {
        path: 'cart/checkout',
        component: _pages_page_checkout_page_checkout_component__WEBPACK_IMPORTED_MODULE_4__["PageCheckoutComponent"],
        canActivate: [_guards_checkout_guard__WEBPACK_IMPORTED_MODULE_7__["CheckoutGuard"]],
    },
    {
        path: 'cart/checkout/success',
        component: _pages_page_order_success_page_order_success_component__WEBPACK_IMPORTED_MODULE_12__["PageOrderSuccessComponent"],
    },
    {
        path: 'wishlist',
        component: _pages_page_wishlist_page_wishlist_component__WEBPACK_IMPORTED_MODULE_3__["PageWishlistComponent"]
    },
    {
        path: 'compare',
        component: _pages_page_compare_page_compare_component__WEBPACK_IMPORTED_MODULE_5__["PageCompareComponent"]
    },
    {
        path: 'track-order',
        component: _pages_page_track_order_page_track_order_component__WEBPACK_IMPORTED_MODULE_6__["PageTrackOrderComponent"]
    },
    // --- START ---
    // The following routes are only needed to demonstrate possible layouts of some pages. You can delete them.
    {
        path: 'category-grid-4-columns-full',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_1__["PageCategoryComponent"],
        data: {
            columns: 4,
            viewMode: 'grid',
            categorySlug: 'power-tools',
        },
        resolve: {
            category: _resolvers_category_resolver_service__WEBPACK_IMPORTED_MODULE_10__["CategoryResolverService"],
            products: _resolvers_products_list_resolver_service__WEBPACK_IMPORTED_MODULE_9__["ProductsListResolverService"]
        },
    },
    {
        path: 'category-grid-5-columns-full',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_1__["PageCategoryComponent"],
        data: {
            columns: 5,
            viewMode: 'grid',
            categorySlug: 'power-tools',
        },
        resolve: {
            category: _resolvers_category_resolver_service__WEBPACK_IMPORTED_MODULE_10__["CategoryResolverService"],
            products: _resolvers_products_list_resolver_service__WEBPACK_IMPORTED_MODULE_9__["ProductsListResolverService"]
        },
    },
    {
        path: 'category-list',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_1__["PageCategoryComponent"],
        data: {
            columns: 3,
            viewMode: 'list',
            sidebarPosition: 'start',
            categorySlug: 'power-tools',
        },
        resolve: {
            category: _resolvers_category_resolver_service__WEBPACK_IMPORTED_MODULE_10__["CategoryResolverService"],
            products: _resolvers_products_list_resolver_service__WEBPACK_IMPORTED_MODULE_9__["ProductsListResolverService"]
        },
    },
    {
        path: 'category-right-sidebar',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_1__["PageCategoryComponent"],
        data: {
            columns: 3,
            viewMode: 'grid',
            sidebarPosition: 'end',
            categorySlug: 'power-tools',
        },
        resolve: {
            category: _resolvers_category_resolver_service__WEBPACK_IMPORTED_MODULE_10__["CategoryResolverService"],
            products: _resolvers_products_list_resolver_service__WEBPACK_IMPORTED_MODULE_9__["ProductsListResolverService"]
        },
    },
    {
        path: 'product-standard',
        component: _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_8__["PageProductComponent"],
        data: {
            layout: 'standard',
            sidebarPosition: 'start',
            productSlug: 'brandix-screwdriver-screw1500acc',
        },
        resolve: {
            product: _resolvers_product_resolver_service__WEBPACK_IMPORTED_MODULE_11__["ProductResolverService"]
        },
    },
    {
        path: 'product-columnar',
        component: _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_8__["PageProductComponent"],
        data: {
            layout: 'columnar',
            productSlug: 'brandix-screwdriver-screw1500acc',
        },
        resolve: {
            product: _resolvers_product_resolver_service__WEBPACK_IMPORTED_MODULE_11__["ProductResolverService"]
        },
    },
    {
        path: 'product-sidebar',
        component: _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_8__["PageProductComponent"],
        data: {
            layout: 'sidebar',
            sidebarPosition: 'start',
            productSlug: 'brandix-screwdriver-screw1500acc',
        },
        resolve: {
            product: _resolvers_product_resolver_service__WEBPACK_IMPORTED_MODULE_11__["ProductResolverService"]
        },
    },
];
class ShopRoutingModule {
}
ShopRoutingModule.??fac = function ShopRoutingModule_Factory(t) { return new (t || ShopRoutingModule)(); };
ShopRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["????defineNgModule"]({ type: ShopRoutingModule });
ShopRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["????setNgModuleScope"](ShopRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ICVK":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-order-success/page-order-success.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PageOrderSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageOrderSuccessComponent", function() { return PageOrderSuccessComponent; });
/* harmony import */ var _data_account_order_details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../data/account-order-details */ "YCrM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/root.service */ "imTr");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ "0njA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/pipes/currency-format.pipe */ "wGjQ");







function PageOrderSuccessComponent_tr_47_div_8_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](option_r5.label + ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](option_r5.value);
} }
function PageOrderSuccessComponent_tr_47_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "ul", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, PageOrderSuccessComponent_tr_47_div_8_li_2_Template, 5, 2, "li", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", item_r2.options);
} }
function PageOrderSuccessComponent_tr_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, PageOrderSuccessComponent_tr_47_div_8_Template, 3, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](13, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", ctx_r0.root.product(item_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("src", item_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", ctx_r0.root.product(item_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", (item_r2.options == null ? null : item_r2.options.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](item_r2.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](13, 7, item_r2.total));
} }
function PageOrderSuccessComponent_tbody_48_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](5, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const line_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](line_r8.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](5, 2, line_r8.total));
} }
function PageOrderSuccessComponent_tbody_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tbody", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](6, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](7, PageOrderSuccessComponent_tbody_48_tr_7_Template, 6, 4, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](6, 2, ctx_r1.order.subtotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r1.order.additionalLines);
} }
class PageOrderSuccessComponent {
    constructor(root) {
        this.root = root;
        this.order = _data_account_order_details__WEBPACK_IMPORTED_MODULE_0__["order"];
    }
}
PageOrderSuccessComponent.??fac = function PageOrderSuccessComponent_Factory(t) { return new (t || PageOrderSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"])); };
PageOrderSuccessComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: PageOrderSuccessComponent, selectors: [["app-page-order-success"]], decls: 103, vars: 25, consts: [[1, "block", "order-success"], [1, "container"], [1, "order-success__body"], [1, "order-success__header"], ["name", "check-100", "size", "100", 1, "order-success__icon"], [1, "order-success__title"], [1, "order-success__subtitle"], [1, "order-success__actions"], ["routerLink", "/", 1, "btn", "btn-xs", "btn-secondary"], [1, "order-success__meta"], [1, "order-success__meta-list"], [1, "order-success__meta-item"], [1, "order-success__meta-title"], [1, "order-success__meta-value"], [1, "card"], [1, "order-list"], [1, "order-list__header"], ["colspan", "2", 1, "order-list__column-label"], [1, "order-list__column-quantity"], [1, "order-list__column-total"], [1, "order-list__products"], [4, "ngFor", "ngForOf"], ["class", "order-list__subtotals", 4, "ngIf"], [1, "order-list__footer"], ["colspan", "3", 1, "order-list__column-label"], [1, "row", "mt-3", "no-gutters", "mx-n2"], [1, "col-sm-6", "col-12", "px-2"], [1, "card", "address-card"], [1, "address-card__body"], [1, "address-card__badge", "address-card__badge--muted"], [1, "address-card__name"], [1, "address-card__row"], [1, "address-card__row-title"], [1, "address-card__row-content"], [1, "col-sm-6", "col-12", "px-2", "mt-sm-0", "mt-3"], [1, "order-list__column-image"], [1, "product-image"], [1, "product-image__body", 3, "routerLink"], ["alt", "", 1, "product-image__img", 3, "src"], [1, "order-list__column-product"], [3, "routerLink"], ["class", "order-list__options", 4, "ngIf"], ["data-title", "Qty:", 1, "order-list__column-quantity"], [1, "order-list__options"], [1, "order-list__options-list"], ["class", "order-list__options-item", 4, "ngFor", "ngForOf"], [1, "order-list__options-item"], [1, "order-list__options-label"], [1, "order-list__options-value"], [1, "order-list__subtotals"]], template: function PageOrderSuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "app-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Thank you");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Your order has been received");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Go To Homepage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Order number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "Created at:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "Total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](29, "currencyFormat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "Payment method:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "thead", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "Qty");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "tbody", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](47, PageOrderSuccessComponent_tr_47_Template, 14, 9, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](48, PageOrderSuccessComponent_tbody_48_Template, 8, 4, "tbody", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "tfoot", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](55, "currencyFormat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](61, "Shipping Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](72, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](77, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](84, "Billing Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](95, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](100, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("#", ctx.order.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.order.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](29, 21, ctx.order.total));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.order.paymentMethod);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.order.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.order.additionalLines.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](55, 23, ctx.order.total));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.order.shippingAddress.firstName + " " + ctx.order.shippingAddress.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx.order.shippingAddress.country, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"](" ", ctx.order.shippingAddress.postcode, ", ", ctx.order.shippingAddress.city, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx.order.shippingAddress.address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.order.shippingAddress.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.order.shippingAddress.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.order.billingAddress.firstName + " " + ctx.order.billingAddress.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx.order.billingAddress.country, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"](" ", ctx.order.billingAddress.postcode, ", ", ctx.order.billingAddress.city, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx.order.billingAddress.address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.order.billingAddress.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.order.billingAddress.email);
    } }, directives: [_shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["IconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_6__["CurrencyFormatPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW9yZGVyLXN1Y2Nlc3MuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "JbOL":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-category/page-category.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PageCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCategoryComponent", function() { return PageCategoryComponent; });
/* harmony import */ var _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/shop-sidebar.service */ "D5am");
/* harmony import */ var _services_page_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/page-category.service */ "Tg9M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _resolvers_products_list_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../resolvers/products-list-resolver.service */ "09c7");
/* harmony import */ var _shared_helpers_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/helpers/filter */ "5RG6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/root.service */ "imTr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/api/shop.service */ "lFFw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ "tgey");
/* harmony import */ var _components_products_view_products_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/products-view/products-view.component */ "CtwS");
/* harmony import */ var _components_shop_sidebar_shop_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/shop-sidebar/shop-sidebar.component */ "8VvP");















function PageCategoryComponent_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](1, "app-shop-sidebar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function PageCategoryComponent_ng_container_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](1, "app-shop-sidebar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function PageCategoryComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](3, PageCategoryComponent_ng_container_1_div_3_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](6, "app-products-view", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](7, PageCategoryComponent_ng_container_1_div_7_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????classMapInterpolate1"]("shop-layout shop-layout--sidebar--", ctx_r0.sidebarPosition, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r0.sidebarPosition === "start");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("layout", ctx_r0.viewMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r0.sidebarPosition === "end");
} }
function PageCategoryComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](3, "app-products-view", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](4, "app-shop-sidebar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("layout", ctx_r1.viewMode)("grid", "grid-" + ctx_r1.columns + "-full");
} }
class PageCategoryComponent {
    constructor(root, router, route, pageService, shop, location) {
        this.root = root;
        this.router = router;
        this.route = route;
        this.pageService = pageService;
        this.shop = shop;
        this.location = location;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.columns = 3;
        this.viewMode = 'grid';
        this.sidebarPosition = 'start'; // For LTR scripts "start" is "left" and "end" is "right"
        this.breadcrumbs = [];
        this.route.data.subscribe(data => {
            this.breadcrumbs = [
                { label: 'Home', url: this.root.home() },
                { label: 'Shop', url: this.root.shop() },
            ];
            // If categorySlug is undefined then this is a root catalog page.
            if (!this.getCategorySlug()) {
                this.pageHeader = 'Shop';
            }
            else {
                this.pageHeader = data.category.name;
                this.breadcrumbs = this.breadcrumbs.concat([
                    ...data.category.parents.map(parent => ({ label: parent.name, url: this.root.category(parent) })),
                    { label: data.category.name, url: this.root.category(data.category) },
                ]);
            }
            this.pageService.setList(data.products);
            this.columns = 'columns' in data ? data.columns : this.columns;
            this.viewMode = 'viewMode' in data ? data.viewMode : this.viewMode;
            this.sidebarPosition = 'sidebarPosition' in data ? data.sidebarPosition : this.sidebarPosition;
        });
        this.route.queryParams.subscribe(queryParams => {
            this.pageService.setOptions(Object(_resolvers_products_list_resolver_service__WEBPACK_IMPORTED_MODULE_4__["parseProductsListParams"])(queryParams), false);
        });
        this.pageService.optionsChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounce"])(changedOptions => {
            return changedOptions.filterValues ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(250) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(changedOptions);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => {
            this.updateUrl();
            this.pageService.setIsLoading(true);
            return this.shop.getProductsList(this.getCategorySlug(), this.pageService.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.pageService.optionsChange$));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(list => {
            this.pageService.setList(list);
            this.pageService.setIsLoading(false);
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    updateUrl() {
        const tree = this.router.parseUrl(this.router.url);
        tree.queryParams = this.getQueryParams();
        this.location.replaceState(tree.toString());
    }
    getQueryParams() {
        const params = {};
        const options = this.pageService.options;
        const filterValues = options.filterValues;
        if ('page' in options && options.page !== 1) {
            params.page = options.page;
        }
        if ('limit' in options && options.limit !== 12) {
            params.limit = options.limit;
        }
        if ('sort' in options && options.sort !== 'default') {
            params.sort = options.sort;
        }
        if ('filterValues' in options) {
            this.pageService.filters.forEach(filter => {
                if (!(filter.slug in filterValues)) {
                    return;
                }
                const filterValue = Object(_shared_helpers_filter__WEBPACK_IMPORTED_MODULE_5__["parseFilterValue"])(filter.type, filterValues[filter.slug]);
                switch (filter.type) {
                    case 'range':
                        if (filter.min !== filterValue[0] || filter.max !== filterValue[1]) {
                            params[`filter_${filter.slug}`] = `${filterValue[0]}-${filterValue[1]}`;
                        }
                        break;
                    case 'check':
                    case 'color':
                        if (filterValue.length > 0) {
                            params[`filter_${filter.slug}`] = filterValues[filter.slug];
                        }
                        break;
                    case 'radio':
                        if (filterValue !== filter.items[0].slug) {
                            params[`filter_${filter.slug}`] = filterValue;
                        }
                        break;
                }
            });
        }
        return params;
    }
    getCategorySlug() {
        return this.route.snapshot.params.categorySlug || this.route.snapshot.data.categorySlug || null;
    }
}
PageCategoryComponent.??fac = function PageCategoryComponent_Factory(t) { return new (t || PageCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_7__["RootService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_services_page_category_service__WEBPACK_IMPORTED_MODULE_1__["PageCategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_9__["ShopService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"])); };
PageCategoryComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineComponent"]({ type: PageCategoryComponent, selectors: [["app-grid"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["????ProvidersFeature"]([
            { provide: _services_page_category_service__WEBPACK_IMPORTED_MODULE_1__["PageCategoryService"], useClass: _services_page_category_service__WEBPACK_IMPORTED_MODULE_1__["PageCategoryService"] },
            { provide: _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_0__["ShopSidebarService"], useClass: _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_0__["ShopSidebarService"] },
        ])], decls: 3, vars: 4, consts: [[3, "header", "breadcrumbs"], [4, "ngIf"], [1, "container"], ["class", "shop-layout__sidebar", 4, "ngIf"], [1, "shop-layout__content"], [1, "block"], ["grid", "grid-3-sidebar", "offcanvas", "mobile", 3, "layout"], [1, "shop-layout__sidebar"], ["offcanvas", "mobile"], ["offcanvas", "always", 3, "layout", "grid"], ["offcanvas", "always"]], template: function PageCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](1, PageCategoryComponent_ng_container_1_Template, 8, 6, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](2, PageCategoryComponent_ng_container_2_Template, 5, 2, "ng-container", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("header", ctx.pageHeader)("breadcrumbs", ctx.breadcrumbs);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.columns === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.columns > 3);
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_11__["PageHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _components_products_view_products_view_component__WEBPACK_IMPORTED_MODULE_12__["ProductsViewComponent"], _components_shop_sidebar_shop_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["ShopSidebarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "Km2g":
/*!*********************************************!*\
  !*** ./src/app/modules/shop/shop.module.ts ***!
  \*********************************************/
/*! exports provided: ShopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopModule", function() { return ShopModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blocks/blocks.module */ "hhBN");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _shop_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop-routing.module */ "GbKq");
/* harmony import */ var _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../widgets/widgets.module */ "6t2i");
/* harmony import */ var _components_products_view_products_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/products-view/products-view.component */ "CtwS");
/* harmony import */ var _components_product_tabs_product_tabs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/product-tabs/product-tabs.component */ "dMsy");
/* harmony import */ var _components_shop_sidebar_shop_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/shop-sidebar/shop-sidebar.component */ "8VvP");
/* harmony import */ var _pages_page_cart_page_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/page-cart/page-cart.component */ "3Bam");
/* harmony import */ var _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/page-category/page-category.component */ "JbOL");
/* harmony import */ var _pages_page_checkout_page_checkout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/page-checkout/page-checkout.component */ "minn");
/* harmony import */ var _pages_page_compare_page_compare_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/page-compare/page-compare.component */ "Bjd0");
/* harmony import */ var _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/page-product/page-product.component */ "VQ5v");
/* harmony import */ var _pages_page_track_order_page_track_order_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/page-track-order/page-track-order.component */ "PYyj");
/* harmony import */ var _pages_page_wishlist_page_wishlist_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/page-wishlist/page-wishlist.component */ "zjNp");
/* harmony import */ var _components_product_sidebar_product_sidebar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/product-sidebar/product-sidebar.component */ "DA1V");
/* harmony import */ var _pages_page_order_success_page_order_success_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/page-order-success/page-order-success.component */ "ICVK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");
// modules (angular)


// modules (third-party)

// modules




// components



// pages










class ShopModule {
}
ShopModule.??fac = function ShopModule_Factory(t) { return new (t || ShopModule)(); };
ShopModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineNgModule"]({ type: ShopModule });
ShopModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineInjector"]({ imports: [[
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            // modules (third-party)
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselModule"],
            // modules
            _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_3__["BlocksModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _shop_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShopRoutingModule"],
            _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_6__["WidgetsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["????setNgModuleScope"](ShopModule, { declarations: [
        // components
        _components_products_view_products_view_component__WEBPACK_IMPORTED_MODULE_7__["ProductsViewComponent"],
        _components_product_tabs_product_tabs_component__WEBPACK_IMPORTED_MODULE_8__["ProductTabsComponent"],
        _components_shop_sidebar_shop_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["ShopSidebarComponent"],
        // pages
        _pages_page_cart_page_cart_component__WEBPACK_IMPORTED_MODULE_10__["PageCartComponent"],
        _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_11__["PageCategoryComponent"],
        _pages_page_checkout_page_checkout_component__WEBPACK_IMPORTED_MODULE_12__["PageCheckoutComponent"],
        _pages_page_compare_page_compare_component__WEBPACK_IMPORTED_MODULE_13__["PageCompareComponent"],
        _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_14__["PageProductComponent"],
        _pages_page_track_order_page_track_order_component__WEBPACK_IMPORTED_MODULE_15__["PageTrackOrderComponent"],
        _pages_page_wishlist_page_wishlist_component__WEBPACK_IMPORTED_MODULE_16__["PageWishlistComponent"],
        _components_product_sidebar_product_sidebar_component__WEBPACK_IMPORTED_MODULE_17__["ProductSidebarComponent"],
        _pages_page_order_success_page_order_success_component__WEBPACK_IMPORTED_MODULE_18__["PageOrderSuccessComponent"]], imports: [
        // modules (angular)
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        // modules (third-party)
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselModule"],
        // modules
        _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_3__["BlocksModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _shop_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShopRoutingModule"],
        _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_6__["WidgetsModule"]] }); })();


/***/ }),

/***/ "MSSm":
/*!***************************************!*\
  !*** ./src/data/shop-product-spec.ts ***!
  \***************************************/
/*! exports provided: specification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specification", function() { return specification; });
const specification = [
    { name: 'General', features: [
            { name: 'Material', value: 'Aluminium, Plastic' },
            { name: 'Engine Type', value: 'Brushless' },
            { name: 'Battery Voltage', value: '18 V' },
            { name: 'Battery Type', value: 'Li-lon' },
            { name: 'Number of Speeds', value: '2' },
            { name: 'Charge Time', value: '1.08 h' },
            { name: 'Weight', value: '1.5 kg' }
        ] },
    { name: 'Dimensions', features: [
            { name: 'Length', value: '99 mm' },
            { name: 'Width', value: '207 mm' },
            { name: 'Height', value: '208 mm' }
        ] }
];


/***/ }),

/***/ "PYyj":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-track-order/page-track-order.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PageTrackOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTrackOrderComponent", function() { return PageTrackOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ "tgey");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



const _c0 = function () { return { label: "Home", url: "/" }; };
const _c1 = function () { return { label: "Track Order", url: "" }; };
const _c2 = function (a0, a1) { return [a0, a1]; };
class PageTrackOrderComponent {
    constructor() { }
}
PageTrackOrderComponent.??fac = function PageTrackOrderComponent_Factory(t) { return new (t || PageTrackOrderComponent)(); };
PageTrackOrderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PageTrackOrderComponent, selectors: [["app-track-order"]], decls: 24, vars: 6, consts: [[3, "breadcrumbs"], [1, "block"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-xl-5", "col-lg-6", "col-md-8"], [1, "card", "flex-grow-1", "mb-0", "mt-5"], [1, "card-body"], [1, "card-title", "text-center"], [1, "mb-4", "pt-2"], [1, "form-group"], ["for", "track-order-id"], ["id", "track-order-id", "type", "text", "placeholder", "Order ID", 1, "form-control"], ["for", "track-email"], ["id", "track-email", "type", "email", "placeholder", "Email address", 1, "form-control"], [1, "pt-3"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block"]], template: function PageTrackOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Track Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Vestibulum sem odio, ullamcorper a imperdiet tincidunt sed magna felis, consequat a erat ut, rutrum finibus odio. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Order ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Track");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](3, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](2, _c1)));
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXRyYWNrLW9yZGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "VQ5v":
/*!***************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-product/page-product.component.ts ***!
  \***************************************************************************/
/*! exports provided: PageProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageProductComponent", function() { return PageProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/api/shop.service */ "lFFw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ "tgey");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_product_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/product/product.component */ "E3db");
/* harmony import */ var _components_product_tabs_product_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/product-tabs/product-tabs.component */ "dMsy");
/* harmony import */ var _blocks_block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../blocks/block-products-carousel/block-products-carousel.component */ "jb21");
/* harmony import */ var _components_product_sidebar_product_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/product-sidebar/product-sidebar.component */ "DA1V");









function PageProductComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-product", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-product-tabs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "app-block-products-carousel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("product", ctx_r0.product)("layout", ctx_r0.layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("products", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](6, 4, ctx_r0.relatedProducts$))("rows", 1);
} }
function PageProductComponent_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-product-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PageProductComponent_ng_container_2_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-product-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PageProductComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, PageProductComponent_ng_container_2_div_3_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-product", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "app-product-tabs", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "app-block-products-carousel", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, PageProductComponent_ng_container_2_div_10_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("shop-layout shop-layout--sidebar--", ctx_r1.sidebarPosition, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.sidebarPosition === "start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("product", ctx_r1.product)("layout", ctx_r1.layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("withSidebar", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("products", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](9, 11, ctx_r1.relatedProducts$))("rows", 1)("withSidebar", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.sidebarPosition === "end");
} }
const _c0 = function () { return { label: "Home", url: "/" }; };
const _c1 = function () { return { label: "Screwdrivers", url: "/catalog" }; };
const _c2 = function (a0) { return { label: a0, url: "" }; };
const _c3 = function (a0, a1, a2) { return [a0, a1, a2]; };
class PageProductComponent {
    constructor(shop, route) {
        this.shop = shop;
        this.route = route;
        this.layout = 'standard';
        this.sidebarPosition = 'start'; // For LTR scripts "start" is "left" and "end" is "right"
    }
    ngOnInit() {
        this.route.data.subscribe(data => {
            this.layout = data.layout || this.layout;
            this.sidebarPosition = data.sidebarPosition || this.sidebarPosition;
            this.product = data.product;
            this.relatedProducts$ = this.shop.getRelatedProducts(data.product);
        });
    }
}
PageProductComponent.??fac = function PageProductComponent_Factory(t) { return new (t || PageProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_1__["ShopService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
PageProductComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PageProductComponent, selectors: [["app-page-product"]], decls: 3, vars: 11, consts: [[3, "breadcrumbs"], [4, "ngIf"], [1, "block"], [1, "container"], [3, "product", "layout"], ["header", "Related Products", "layout", "grid-5", 3, "products", "rows"], ["class", "shop-layout__sidebar", 4, "ngIf"], [1, "shop-layout__content"], [3, "withSidebar"], ["header", "Related Products", "layout", "grid-4-sm", 3, "products", "rows", "withSidebar"], [1, "shop-layout__sidebar"]], template: function PageProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, PageProductComponent_ng_container_1_Template, 7, 6, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, PageProductComponent_ng_container_2_Template, 11, 13, "ng-container", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction3"](7, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](3, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](4, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c2, ctx.product == null ? null : ctx.product.name)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.layout !== "sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.layout === "sidebar");
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__["PageHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_components_product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"], _components_product_tabs_product_tabs_component__WEBPACK_IMPORTED_MODULE_6__["ProductTabsComponent"], _blocks_block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_7__["BlockProductsCarouselComponent"], _components_product_sidebar_product_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["ProductSidebarComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXByb2R1Y3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZoWZ":
/*!******************************************!*\
  !*** ./src/data/shop-product-reviews.ts ***!
  \******************************************/
/*! exports provided: reviews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviews", function() { return reviews; });
const reviews = [
    {
        avatar: 'assets/images/avatars/avatar-1.jpg',
        author: 'Samantha Smith',
        rating: 4,
        date: '27 May, 2018',
        text: 'Phasellus id mattis nulla. Mauris velit nisi, imperdiet vitae sodales in, maximus ut lectus. Vivamus commodo ' +
            'scelerisque lacus, at porttitor dui iaculis id. Curabitur imperdiet ultrices fermentum.'
    },
    {
        avatar: 'assets/images/avatars/avatar-2.jpg',
        author: 'Adam Taylor',
        rating: 3,
        date: '12 April, 2018',
        text: 'Aenean non lorem nisl. Duis tempor sollicitudin orci, eget tincidunt ex semper sit amet. Nullam neque justo, ' +
            'sodales congue feugiat ac, facilisis a augue. Donec tempor sapien et fringilla facilisis. Nam maximus consectetur ' +
            'diam. Nulla ut ex mollis, volutpat tellus vitae, accumsan ligula.'
    },
    {
        avatar: 'assets/images/avatars/avatar-3.jpg',
        author: 'Helena Garcia',
        rating: 5,
        date: '2 January, 2018',
        text: 'Duis ac lectus scelerisque quam blandit egestas. Pellentesque hendrerit eros laoreet suscipit ultrices.'
    }
];


/***/ }),

/***/ "dMsy":
/*!********************************************************************************!*\
  !*** ./src/app/modules/shop/components/product-tabs/product-tabs.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProductTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTabsComponent", function() { return ProductTabsComponent; });
/* harmony import */ var _data_shop_product_spec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../data/shop-product-spec */ "MSSm");
/* harmony import */ var _data_shop_product_reviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../data/shop-product-reviews */ "ZoWZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/pagination/pagination.component */ "NhFE");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/rating/rating.component */ "gf8J");







function ProductTabsComponent_div_25_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const feature_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](feature_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](feature_r4.value);
} }
function ProductTabsComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "h4", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, ProductTabsComponent_div_25_div_3_Template, 5, 2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const section_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](section_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", section_r2.features);
} }
function ProductTabsComponent_li_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](3, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](8, "app-rating", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const review_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("src", review_r5.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](review_r5.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", review_r5.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](review_r5.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](review_r5.date);
} }
const _c0 = function (a0) { return { "product-tabs--layout--sidebar": a0 }; };
const _c1 = function (a0) { return { "product-tabs__item--active": a0 }; };
const _c2 = function (a0) { return { "product-tabs__pane--active": a0 }; };
class ProductTabsComponent {
    constructor() {
        this.withSidebar = false;
        this.tab = 'description';
        this.specification = _data_shop_product_spec__WEBPACK_IMPORTED_MODULE_0__["specification"];
        this.reviews = _data_shop_product_reviews__WEBPACK_IMPORTED_MODULE_1__["reviews"];
    }
}
ProductTabsComponent.??fac = function ProductTabsComponent_Factory(t) { return new (t || ProductTabsComponent)(); };
ProductTabsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: ProductTabsComponent, selectors: [["app-product-tabs"]], inputs: { withSidebar: "withSidebar", tab: "tab" }, decls: 73, vars: 26, consts: [[1, "product-tabs", 3, "ngClass"], [1, "product-tabs__list"], ["href", "#tab-description", 1, "product-tabs__item", 3, "ngClass", "click"], ["href", "#tab-specification", 1, "product-tabs__item", 3, "ngClass", "click"], ["href", "#tab-reviews", 1, "product-tabs__item", 3, "ngClass", "click"], [1, "product-tabs__content"], ["id", "tab-description", 1, "product-tabs__pane", 3, "ngClass"], [1, "typography"], ["id", "tab-specification", 1, "product-tabs__pane", 3, "ngClass"], [1, "spec"], [1, "spec__header"], ["class", "spec__section", 4, "ngFor", "ngForOf"], [1, "spec__disclaimer"], ["id", "tab-reviews", 1, "product-tabs__pane", 3, "ngClass"], [1, "reviews-view"], [1, "reviews-view__list"], [1, "reviews-view__header"], [1, "reviews-list"], [1, "reviews-list__content"], ["class", "reviews-list__item", 4, "ngFor", "ngForOf"], [1, "reviews-list__pagination"], [3, "current", "siblings", "total"], [1, "reviews-view__form"], [1, "row"], [1, "col-12", "col-lg-9", "col-xl-8"], [1, "form-row"], [1, "form-group", "col-md-4"], ["for", "review-stars"], ["id", "review-stars", 1, "form-control"], ["for", "review-author"], ["type", "text", "id", "review-author", "placeholder", "Your Name", 1, "form-control"], ["for", "review-email"], ["type", "text", "id", "review-email", "placeholder", "Email Address", 1, "form-control"], [1, "form-group"], ["for", "review-text"], ["id", "review-text", "rows", "6", 1, "form-control"], [1, "form-group", "mb-0"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg"], [1, "spec__section"], [1, "spec__section-title"], ["class", "spec__row", 4, "ngFor", "ngForOf"], [1, "spec__row"], [1, "spec__name"], [1, "spec__value"], [1, "reviews-list__item"], [1, "review"], [1, "review__avatar"], ["alt", "", 3, "src"], [1, "review__content"], [1, "review__author"], [1, "review__rating"], [3, "value"], [1, "review__text"], [1, "review__date"]], template: function ProductTabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ProductTabsComponent_Template_a_click_2_listener($event) { $event.preventDefault(); return ctx.tab = "description"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ProductTabsComponent_Template_a_click_4_listener($event) { $event.preventDefault(); return ctx.tab = "specification"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "Specification");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ProductTabsComponent_Template_a_click_6_listener($event) { $event.preventDefault(); return ctx.tab = "reviews"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, "Product Full Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](14, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](16, "Etiam lacus lacus mollis in mattis");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](18, " Praesent mattis eget augue ac elementum. Maecenas vel ante ut enim mollis accumsan. Vestibulum vel eros at mi suscipit feugiat. Sed tortor purus, vulputate et eros a, rhoncus laoreet orci. Proin sapien neque, commodo at porta in, vehicula eu elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur porta vulputate augue, at sollicitudin nisl molestie eget. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](20, " Nunc sollicitudin, nunc id accumsan semper, libero nunc aliquet nulla, nec pretium ipsum risus ac neque. Morbi eu facilisis purus. Quisque mi tortor, cursus in nulla ut, laoreet commodo quam. Pellentesque et ornare sapien. In ac est tempus urna tincidunt finibus. Integer erat ipsum, tristique ac lobortis sit amet, dapibus sit amet purus. Nam sed lorem nisi. Vestibulum ultrices tincidunt turpis, sit amet fringilla odio scelerisque non. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](24, "Specification");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](25, ProductTabsComponent_div_25_Template, 4, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](27, " Information on technical characteristics, the delivery set, the country of manufacture and the appearance of the goods is for reference only and is based on the latest information available at the time of publication. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](32, "Customer Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "ol", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](35, ProductTabsComponent_li_35_Template, 13, 5, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](37, "app-pagination", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "form", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](40, "Write A Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](43, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](45, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](46, "Review Stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](47, "select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](48, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](49, "5 Stars Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](51, "4 Stars Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](52, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](53, "3 Stars Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](54, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](55, "2 Stars Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](56, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](57, "1 Stars Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](59, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](60, "Your Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](61, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](62, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](63, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](64, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](65, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](66, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](67, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](68, "Your Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](69, "textarea", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](70, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](71, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](72, "Post Your Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](12, _c0, ctx.withSidebar));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](14, _c1, ctx.tab === "description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](16, _c1, ctx.tab === "specification"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](18, _c1, ctx.tab === "reviews"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](20, _c2, ctx.tab === "description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](22, _c2, ctx.tab === "specification"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.specification);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](24, _c2, ctx.tab === "reviews"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.reviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("current", 1)("siblings", 2)("total", 10);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__["PaginationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_z"], _shared_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_6__["RatingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXRhYnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "minn":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-checkout/page-checkout.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PageCheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCheckoutComponent", function() { return PageCheckoutComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/root.service */ "imTr");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ "Xgv5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ "tgey");
/* harmony import */ var _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/alert/alert.component */ "FYjP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/pipes/currency-format.pipe */ "wGjQ");











function PageCheckoutComponent_tr_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](5, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate2"]("", item_r2.product.name, " \u00D7 ", item_r2.quantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](5, 3, item_r2.product.price * item_r2.quantity));
} }
function PageCheckoutComponent_tbody_125_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](5, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const total_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](total_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](5, 2, total_r4.price));
} }
function PageCheckoutComponent_tbody_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "tbody", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](6, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](8, PageCheckoutComponent_tbody_125_tr_8_Template, 6, 4, "tr", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](6, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](7, 4, ctx_r1.cart.subtotal$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](9, 6, ctx_r1.cart.totals$));
} }
const _c0 = function (a1) { return { label: "Home", url: a1 }; };
const _c1 = function (a1) { return { label: "Shopping Cart", url: a1 }; };
const _c2 = function () { return { label: "Checkout", url: "" }; };
const _c3 = function (a0, a1, a2) { return [a0, a1, a2]; };
class PageCheckoutComponent {
    constructor(root, cart, route, router) {
        this.root = root;
        this.cart = cart;
        this.route = route;
        this.router = router;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    ngOnInit() {
        this.cart.quantity$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$)).subscribe(quantity => {
            if (!quantity) {
                this.router.navigate(['../cart'], { relativeTo: this.route }).then();
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
PageCheckoutComponent.??fac = function PageCheckoutComponent_Factory(t) { return new (t || PageCheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_3__["RootService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
PageCheckoutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: PageCheckoutComponent, selectors: [["app-checkout"]], decls: 196, vars: 24, consts: [[3, "header", "breadcrumbs"], [1, "checkout", "block"], [1, "container"], [1, "row"], [1, "col-12", "mb-3"], ["type", "primary", "size", "lg"], [3, "routerLink"], [1, "col-12", "col-lg-6", "col-xl-7"], [1, "card", "mb-lg-0"], [1, "card-body"], [1, "card-title"], [1, "form-row"], [1, "form-group", "col-md-6"], ["for", "checkout-first-name"], ["type", "text", "id", "checkout-first-name", "placeholder", "First Name", 1, "form-control"], ["for", "checkout-last-name"], ["type", "text", "id", "checkout-last-name", "placeholder", "Last Name", 1, "form-control"], [1, "form-group"], ["for", "checkout-company-name"], [1, "text-muted"], ["type", "text", "id", "checkout-company-name", "placeholder", "Company Name", 1, "form-control"], ["for", "checkout-country"], ["id", "checkout-country", 1, "form-control"], ["for", "checkout-street-address"], ["type", "text", "id", "checkout-street-address", "placeholder", "Street Address", 1, "form-control"], ["for", "checkout-address"], ["type", "text", "id", "checkout-address", 1, "form-control"], ["for", "checkout-city"], ["type", "text", "id", "checkout-city", 1, "form-control"], ["for", "checkout-state"], ["type", "text", "id", "checkout-state", 1, "form-control"], ["for", "checkout-postcode"], ["type", "text", "id", "checkout-postcode", 1, "form-control"], ["for", "checkout-email"], ["type", "email", "id", "checkout-email", "placeholder", "Email address", 1, "form-control"], ["for", "checkout-phone"], ["type", "text", "id", "checkout-phone", "placeholder", "Phone", 1, "form-control"], [1, "form-check"], [1, "form-check-input", "input-check"], [1, "input-check__body"], ["type", "checkbox", "id", "checkout-create-account", 1, "input-check__input"], [1, "input-check__box"], ["width", "9px", "height", "7px", 1, "input-check__icon"], [0, "xlink", "href", "assets/images/sprite.svg#check-9x7"], ["for", "checkout-create-account", 1, "form-check-label"], [1, "card-divider"], ["type", "checkbox", "id", "checkout-different-address", 1, "input-check__input"], ["for", "checkout-different-address", 1, "form-check-label"], ["for", "checkout-comment"], ["id", "checkout-comment", "rows", "4", 1, "form-control"], [1, "col-12", "col-lg-6", "col-xl-5", "mt-4", "mt-lg-0"], [1, "card", "mb-0"], [1, "checkout__totals"], [1, "checkout__totals-header"], [1, "checkout__totals-products"], [4, "ngFor", "ngForOf"], ["class", "checkout__totals-subtotals", 4, "ngIf"], [1, "checkout__totals-footer"], [1, "payment-methods"], [1, "payment-methods__list"], [1, "payment-methods__item", "payment-methods__item--active"], [1, "payment-methods__item-header"], [1, "payment-methods__item-radio", "input-radio"], [1, "input-radio__body"], ["name", "checkout_payment_method", "type", "radio", "checked", "", 1, "input-radio__input"], [1, "input-radio__circle"], [1, "payment-methods__item-title"], [1, "payment-methods__item-container"], [1, "payment-methods__item-description", "text-muted"], [1, "payment-methods__item"], ["name", "checkout_payment_method", "type", "radio", 1, "input-radio__input"], [1, "checkout__agree", "form-group"], ["type", "checkbox", "id", "checkout-terms", 1, "input-check__input"], ["for", "checkout-terms", 1, "form-check-label"], ["target", "_blank", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-primary", "btn-xl", "btn-block"], [1, "checkout__totals-subtotals"]], template: function PageCheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "app-alert", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Returning customer? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, "Click here to login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](13, "Billing details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](17, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](21, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](25, "Company Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](27, "(Optional)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](28, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](31, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](34, "Select a country...");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](36, "United States");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](38, "Russia");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](40, "Italy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](42, "France");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](43, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](44, "Ukraine");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](45, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](46, "Germany");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](47, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](48, "Australia");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](49, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](51, "Street Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](52, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](53, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](54, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](55, "Apartment, suite, unit etc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](56, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](57, "(Optional)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](58, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](59, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](60, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](61, "Town / City");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](62, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](63, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](64, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](65, "State / County");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](66, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](67, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](68, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](69, "Postcode / ZIP");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](70, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](71, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](72, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](73, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](74, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](75, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](76, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](77, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](78, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](79, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](80, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](81, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](82, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](83, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](84, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](85, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](86, "svg", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](87, "use", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](88, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](89, "Create an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](90, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](91, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](92, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](93, "Shipping Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](94, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](95, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](96, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](97, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](98, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](99, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](100, "svg", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](101, "use", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](102, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](103, "Ship to a different address?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](104, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](105, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](106, "Order notes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](107, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](108, "(Optional)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](109, "textarea", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](110, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](111, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](112, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](113, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](114, "Your Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](115, "table", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](116, "thead", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](117, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](118, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](119, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](120, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](121, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](122, "tbody", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](123, PageCheckoutComponent_tr_123_Template, 6, 5, "tr", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](124, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](125, PageCheckoutComponent_tbody_125_Template, 10, 8, "tbody", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](126, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](127, "tfoot", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](128, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](129, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](130, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](131, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](132);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](133, "currencyFormat");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](134, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](135, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](136, "ul", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](137, "li", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](138, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](139, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](140, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](141, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](142, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](143, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](144, "Direct bank transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](145, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](146, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](147, " Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](148, "li", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](149, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](150, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](151, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](152, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](153, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](154, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](155, "Check payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](156, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](157, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](158, " Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](159, "li", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](160, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](161, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](162, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](163, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](164, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](165, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](166, "Cash on delivery");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](167, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](168, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](169, " Pay with cash upon delivery. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](170, "li", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](171, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](172, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](173, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](174, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](175, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](176, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](177, "PayPal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](178, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](179, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](180, " Pay via PayPal; you can pay with your credit card if you don\u2019t have a PayPal account. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](181, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](182, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](183, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](184, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](185, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](186, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](187, "svg", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](188, "use", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](189, "label", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](190, " I have read and agree to the website ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](191, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](192, "terms and conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](193, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](194, "button", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](195, "Place Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("header", "Checkout")("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction3"](20, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](15, _c0, ctx.root.home()), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](17, _c1, ctx.root.cart()), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](19, _c2)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", ctx.root.login());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](124, 7, ctx.cart.items$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](126, 9, ctx.cart.totals$).length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](133, 11, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](134, 13, ctx.cart.total$)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", ctx.root.terms());
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__["PageHeaderComponent"], _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["??angular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_10__["CurrencyFormatPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWNoZWNrb3V0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "qmS4":
/*!*******************************************************!*\
  !*** ./src/app/modules/shop/guards/checkout.guard.ts ***!
  \*******************************************************/
/*! exports provided: CheckoutGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutGuard", function() { return CheckoutGuard; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/cart.service */ "Xgv5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class CheckoutGuard {
    constructor(cart, router) {
        this.cart = cart;
        this.router = router;
    }
    canActivate(route, state) {
        return this.cart.quantity$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(quantity => {
            if (quantity) {
                return true;
            }
            this.router.navigateByUrl('/cart').then();
            return false;
        }));
    }
}
CheckoutGuard.??fac = function CheckoutGuard_Factory(t) { return new (t || CheckoutGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CheckoutGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: CheckoutGuard, factory: CheckoutGuard.??fac, providedIn: 'root' });


/***/ }),

/***/ "zjNp":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PageWishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageWishlistComponent", function() { return PageWishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/root.service */ "imTr");
/* harmony import */ var _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/wishlist.service */ "aCp3");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ "Xgv5");
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ "tgey");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/rating/rating.component */ "gf8J");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ "0njA");
/* harmony import */ var _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/pipes/currency-format.pipe */ "wGjQ");










function PageWishlistComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Your wish list is empty!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PageWishlistComponent_div_3_tr_16_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const product_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", ctx_r4.root.product(product_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", product_r3.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
const _c0 = function (a0) { return { "btn-loading": a0 }; };
function PageWishlistComponent_div_3_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, PageWishlistComponent_div_3_tr_16_a_3_Template, 2, 2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "app-rating", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "In Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](16, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PageWishlistComponent_div_3_tr_16_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7); const product_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r6.addToCart(product_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Add To Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PageWishlistComponent_div_3_tr_16_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7); const product_r3 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r8.remove(product_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "app-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const product_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", product_r3.images == null ? null : product_r3.images.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", ctx_r2.root.product(product_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", product_r3.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", product_r3.reviews, " Reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](16, 8, product_r3.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](10, _c0, ctx_r2.addedToCartProducts.includes(product_r3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](12, _c0, ctx_r2.removedProducts.includes(product_r3)));
} }
function PageWishlistComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "thead", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Stock Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "tbody", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, PageWishlistComponent_div_3_tr_16_Template, 23, 14, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](17, 1, ctx_r1.wishlist.items$));
} }
const _c1 = function () { return { label: "Home", url: "/" }; };
const _c2 = function () { return { label: "Wish List", url: "" }; };
const _c3 = function (a0, a1) { return [a0, a1]; };
class PageWishlistComponent {
    constructor(root, wishlist, cart) {
        this.root = root;
        this.wishlist = wishlist;
        this.cart = cart;
        this.addedToCartProducts = [];
        this.removedProducts = [];
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
    remove(product) {
        if (this.removedProducts.includes(product)) {
            return;
        }
        this.removedProducts.push(product);
        this.wishlist.remove(product).subscribe({
            complete: () => {
                this.removedProducts = this.removedProducts.filter(eachProduct => eachProduct !== product);
            }
        });
    }
}
PageWishlistComponent.??fac = function PageWishlistComponent_Factory(t) { return new (t || PageWishlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_services_root_service__WEBPACK_IMPORTED_MODULE_1__["RootService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__["WishlistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
PageWishlistComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PageWishlistComponent, selectors: [["app-wishlist"]], decls: 5, vars: 13, consts: [[3, "header", "breadcrumbs"], ["class", "block block-empty", 4, "ngIf"], ["class", "block", 4, "ngIf"], [1, "block", "block-empty"], [1, "container"], [1, "block-empty__body"], [1, "block-empty__message"], [1, "block-empty__actions"], ["routerLink", "/", 1, "btn", "btn-primary", "btn-sm"], [1, "block"], [1, "wishlist"], [1, "wishlist__head"], [1, "wishlist__row"], [1, "wishlist__column", "wishlist__column--image"], [1, "wishlist__column", "wishlist__column--product"], [1, "wishlist__column", "wishlist__column--stock"], [1, "wishlist__column", "wishlist__column--price"], [1, "wishlist__column", "wishlist__column--tocart"], [1, "wishlist__column", "wishlist__column--remove"], [1, "wishlist__body"], ["class", "wishlist__row", 4, "ngFor", "ngForOf"], [1, "product-image"], ["class", "product-image__body", 3, "routerLink", 4, "ngIf"], [1, "wishlist__product-name", 3, "routerLink"], [1, "wishlist__product-rating"], [3, "value"], [1, "wishlist__product-rating-legend"], [1, "badge", "badge-success"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "ngClass", "click"], ["type", "button", 1, "btn", "btn-light", "btn-sm", "btn-svg-icon", 3, "ngClass", "click"], ["name", "cross-12", "size", "12"], [1, "product-image__body", 3, "routerLink"], ["alt", "", 1, "product-image__img", 3, "src"]], template: function PageWishlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, PageWishlistComponent_div_1_Template, 8, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, PageWishlistComponent_div_3_Template, 18, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("header", "Wish List")("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](10, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](8, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](9, _c2)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 4, ctx.wishlist.items$).length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 6, ctx.wishlist.items$).length);
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__["PageHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _shared_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_7__["RatingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__["IconComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _shared_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_9__["CurrencyFormatPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXdpc2hsaXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=modules-shop-shop-module.js.map