function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_base_component_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/base-component/base-component */
    "./src/app/shared/base-component/base-component.ts");
    /* harmony import */


    var _shared_components_scroll_btn_scroll_btn_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/components/scroll-btn/scroll-btn.component */
    "./src/app/shared/components/scroll-btn/scroll-btn.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var AboutComponent = /*#__PURE__*/function (_shared_base_componen) {
      _inherits(AboutComponent, _shared_base_componen);

      var _super = _createSuper(AboutComponent);

      function AboutComponent() {
        _classCallCheck(this, AboutComponent);

        return _super.call(this);
      }

      _createClass(AboutComponent, [{
        key: "scroll",
        value: function scroll(element) {
          element.scrollIntoView();
        }
      }]);

      return AboutComponent;
    }(_shared_base_component_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 45,
      vars: 3,
      consts: [[1, "about-container"], [1, "about-header"], [1, "subheaders-container"], [1, "subheader-box"], [1, "subheader-text", 3, "click"], [1, "d-flex", "flex-row", "information"], [1, "d-flex", "flex-column"], [1, "text-container"], [1, "paragraph"], ["subheader1", ""], [1, "text-header"], [1, "text-content"], ["subheader2", ""], ["subheader3", ""], ["subheader4", ""]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_a_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

            return ctx.scroll(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "subheader1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_a_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

            return ctx.scroll(_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "subheader2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_a_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);

            return ctx.scroll(_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "subheader3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_a_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);

            return ctx.scroll(_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "subheader4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "subheader1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean libero justo, pulvinar elementum quam eu, laoreet consectetur leo. Morbi feugiat laoreet pharetra. Praesent sit amet tincidunt tortor. Sed condimentum id magna sit amet ullamcorper. Cras pharetra massa sit amet quam euismod sagittis sit amet a lacus. Aenean placerat lacus risus, sed vestibulum eros finibus nec. Ut erat sapien, pellentesque vel dictum ut, molestie rutrum est. Donec non justo eget justo tempus dignissim ac vitae ipsum. Sed sed mauris nisi. Duis rhoncus mi condimentum diam dignissim commodo. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "subheader2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Aenean nulla neque, mollis sit amet magna a, scelerisque accumsan leo. Suspendisse et ante urna. Etiam ornare orci sed est hendrerit pellentesque. Praesent ut semper elit. Integer consequat sit amet neque eget faucibus. Sed vulputate pretium viverra. Fusce ut tempus lectus, fermentum egestas nunc. Nunc tempus purus eu ligula aliquam, non dictum felis volutpat. Nulla libero felis, sagittis sed augue vitae, vehicula rhoncus leo. Vivamus in rhoncus risus, id facilisis ante. Nullam vulputate nisl congue sapien consequat laoreet. Morbi pharetra porttitor porttitor ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "subheader3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Pellentesque diam nulla, gravida molestie quam at, efficitur sodales mi. Sed eget justo interdum, cursus magna lobortis, egestas tellus. Fusce non efficitur ipsum. Sed sed posuere enim, viverra egestas neque. Nullam et feugiat nibh. Aenean mattis, arcu non luctus molestie, urna lectus egestas turpis, vel congue turpis velit non dui. Fusce id finibus ante. Maecenas sit amet urna eget arcu scelerisque vehicula in nec felis. Morbi interdum volutpat velit vitae semper. Suspendisse quis congue leo. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "subheader4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Integer ac velit a sapien bibendum volutpat sit amet a purus. Pellentesque fringilla quam et ante malesuada, tempor bibendum est sollicitudin. Mauris luctus egestas justo, sit amet euismod libero hendrerit nec. Proin mi nulla, dignissim a elementum ac, molestie nec magna. Etiam eu mi eget leo fermentum condimentum sodales ac lorem. Sed euismod molestie dapibus. Morbi ultricies ante eros, a gravida justo tincidunt a. Sed eget aliquam nulla. Nulla facilisi. Aenean ligula sapien, cursus ac nunc dapibus, ornare convallis turpis. Sed velit ligula, rutrum sit amet dui vel, convallis iaculis ante. Nam nec tellus cursus felis consequat dapibus. Curabitur purus diam, eleifend ac mauris vitae, venenatis laoreet mauris. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-scroll-btn");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.translations.know_us));
        }
      },
      directives: [_shared_components_scroll_btn_scroll_btn_component__WEBPACK_IMPORTED_MODULE_2__["ScrollBtnComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
      styles: ["@media only screen and (min-width: 1900px){\n\n    .about-header[_ngcontent-%COMP%]{\n        color:  rgb(224, 129, 25);\n        position: absolute;\n        top: 40%;\n        font-size: 230px;\n    }\n\n    .subheader-text[_ngcontent-%COMP%]{\n        cursor: pointer;\n        color: white;\n        font-size: 60px;\n    }\n}\n\n@media only screen and (min-width: 1200px) and (max-width: 1900px){\n\n    .about-header[_ngcontent-%COMP%]{\n        color:  rgb(224, 129, 25);\n        position: absolute;\n        top: 40%;\n        font-size: 12vw;\n    }\n\n    .subheader-text[_ngcontent-%COMP%]{\n        cursor: pointer;\n        color: white;\n        font-size: 3vw;\n    }\n}\n\n@media only screen and (min-width: 1200px){\n\n    .subheaders-container[_ngcontent-%COMP%]{\n        width: 100%;\n        display: flex;\n        justify-content: left;\n        position: relative;\n        top: 75%;\n    }\n\n    .text-container[_ngcontent-%COMP%]{\n        flex-grow: 1;\n        padding: 50px 300px 300px 300px;\n        color:black;\n        height: -webkit-fit-content;\n        height: -moz-fit-content;\n        height: fit-content;\n    }\n\n    .paragraph[_ngcontent-%COMP%]{\n        margin-top: 150px;\n        width: 100%;\n    }\n\n    .text-header[_ngcontent-%COMP%]{\n        font-size:45px;\n    }\n\n    .text-content[_ngcontent-%COMP%]{\n        padding: 0px 50px;\n        font-size: 22px;\n        margin-top: 50px;\n        word-wrap: break-word;\n        width: 45rem;\n    }\n}\n\n@media only screen and (min-width: 900px) and (max-width: 1200px){\n\n    .about-header[_ngcontent-%COMP%]{\n        color:  rgb(224, 129, 25);\n        position: absolute;\n        top: 40%;\n        font-size: 120px;\n    }\n\n    .subheaders-container[_ngcontent-%COMP%]{\n        width: 100%;\n        display: flex;\n        justify-content: left;\n        position: relative;\n        top: 75%;\n    }\n\n    .subheader-text[_ngcontent-%COMP%]{\n        cursor: pointer;\n        color: white;\n        font-size: 30px;\n    }\n\n    .text-container[_ngcontent-%COMP%]{\n        width: 100%;\n        padding: 50px 150px 200px 150px;\n        color:black;\n        height: -webkit-fit-content;\n        height: -moz-fit-content;\n        height: fit-content;\n\n    }\n\n    .paragraph[_ngcontent-%COMP%]{\n        margin-top: 120px;\n        width: 100%;\n    }\n\n    .text-header[_ngcontent-%COMP%]{\n        font-size:35px;\n    }\n\n    .text-content[_ngcontent-%COMP%]{\n        padding: 0px 50px;\n        font-size: 20px;\n        margin-top: 50px;\n        word-wrap: break-word;\n        width: 30rem;\n    }\n}\n\n@media only screen and (max-width: 900px){\n\n    .about-header[_ngcontent-%COMP%]{\n        color:  rgb(224, 129, 25);\n        position: relative;\n        top: 100px;\n        width: 250px;\n        font-size: 60px;\n        margin: auto;\n        text-align: center;\n    }\n\n    .subheader-text[_ngcontent-%COMP%]{\n        cursor: pointer;\n        color: white;\n        font-size: 30px;\n    }\n\n    .subheaders-container[_ngcontent-%COMP%]{\n        width: 100%;\n        display: flex;\n        justify-content: left;\n        position: relative;\n        top: 170px;\n        flex-direction: column;\n        text-align: center;\n    }\n\n    .text-container[_ngcontent-%COMP%]{\n        width: 100%;\n        padding: 50px 20px 100px;\n        color:black;\n        height: -webkit-fit-content;\n        height: -moz-fit-content;\n        height: fit-content;\n    }\n\n    .paragraph[_ngcontent-%COMP%]{\n        margin-top: 90px;\n        width: 100%;\n    }\n\n    .text-header[_ngcontent-%COMP%]{\n        font-size:30px;\n    }\n\n    .text-content[_ngcontent-%COMP%]{\n        padding: 0px 00px;\n        font-size: 18px;\n        margin-top: 50px;\n        word-wrap: break-word;\n        width: 20rem;\n    }\n}\n\n.about-container[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    background-color: rgb(25, 25, 25);\n}\n\n.subheader-box[_ngcontent-%COMP%]{\n    padding: 10px 25px;\n}\n\n.arrow[_ngcontent-%COMP%]{\n    height: 40px;\n    padding: 6px 0px;\n    -webkit-filter: invert(1);\n            filter: invert(1);\n}\n\n.information[_ngcontent-%COMP%] {\n  background-color: rgb(188,188,190);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSTtRQUNJLHlCQUF5QjtRQUN6QixrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixZQUFZO1FBQ1osZUFBZTtJQUNuQjtBQUNKOztBQUVBOztJQUVJO1FBQ0kseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixZQUFZO1FBQ1osY0FBYztJQUNsQjtBQUNKOztBQUdBOztJQUVJO1FBQ0ksV0FBVztRQUNYLGFBQWE7UUFDYixxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLFFBQVE7SUFDWjs7SUFFQTtRQUNJLFlBQVk7UUFDWiwrQkFBK0I7UUFDL0IsV0FBVztRQUNYLDJCQUFtQjtRQUFuQix3QkFBbUI7UUFBbkIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsWUFBWTtJQUNoQjtBQUNKOztBQUVBOztJQUVJO1FBQ0kseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGFBQWE7UUFDYixxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLFFBQVE7SUFDWjs7SUFFQTtRQUNJLGVBQWU7UUFDZixZQUFZO1FBQ1osZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCwrQkFBK0I7UUFDL0IsV0FBVztRQUNYLDJCQUFtQjtRQUFuQix3QkFBbUI7UUFBbkIsbUJBQW1COztJQUV2Qjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLHlCQUF5QjtRQUN6QixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFlBQVk7UUFDWixlQUFlO1FBQ2YsWUFBWTtRQUNaLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGVBQWU7UUFDZixZQUFZO1FBQ1osZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxhQUFhO1FBQ2IscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1Ysc0JBQXNCO1FBQ3RCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFdBQVc7UUFDWCx3QkFBd0I7UUFDeEIsV0FBVztRQUNYLDJCQUFtQjtRQUFuQix3QkFBbUI7UUFBbkIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHlCQUFpQjtZQUFqQixpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTAwcHgpe1xuXG4gICAgLmFib3V0LWhlYWRlcntcbiAgICAgICAgY29sb3I6ICByZ2IoMjI0LCAxMjksIDI1KTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDQwJTtcbiAgICAgICAgZm9udC1zaXplOiAyMzBweDtcbiAgICB9XG5cbiAgICAuc3ViaGVhZGVyLXRleHR7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE5MDBweCl7XG5cbiAgICAuYWJvdXQtaGVhZGVye1xuICAgICAgICBjb2xvcjogIHJnYigyMjQsIDEyOSwgMjUpO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNDAlO1xuICAgICAgICBmb250LXNpemU6IDEydnc7XG4gICAgfVxuXG4gICAgLnN1YmhlYWRlci10ZXh0e1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAzdnc7XG4gICAgfVxufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KXtcblxuICAgIC5zdWJoZWFkZXJzLWNvbnRhaW5lcntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDc1JTtcbiAgICB9XG5cbiAgICAudGV4dC1jb250YWluZXJ7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgcGFkZGluZzogNTBweCAzMDBweCAzMDBweCAzMDBweDtcbiAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgfVxuXG4gICAgLnBhcmFncmFwaHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC50ZXh0LWhlYWRlcntcbiAgICAgICAgZm9udC1zaXplOjQ1cHg7XG4gICAgfVxuXG4gICAgLnRleHQtY29udGVudHtcbiAgICAgICAgcGFkZGluZzogMHB4IDUwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICB3aWR0aDogNDVyZW07XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KXtcblxuICAgIC5hYm91dC1oZWFkZXJ7XG4gICAgICAgIGNvbG9yOiAgcmdiKDIyNCwgMTI5LCAyNSk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA0MCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTIwcHg7XG4gICAgfVxuXG4gICAgLnN1YmhlYWRlcnMtY29udGFpbmVye1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogNzUlO1xuICAgIH1cblxuICAgIC5zdWJoZWFkZXItdGV4dHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG5cbiAgICAudGV4dC1jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiA1MHB4IDE1MHB4IDIwMHB4IDE1MHB4O1xuICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcblxuICAgIH1cblxuICAgIC5wYXJhZ3JhcGh7XG4gICAgICAgIG1hcmdpbi10b3A6IDEyMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAudGV4dC1oZWFkZXJ7XG4gICAgICAgIGZvbnQtc2l6ZTozNXB4O1xuICAgIH1cblxuICAgIC50ZXh0LWNvbnRlbnR7XG4gICAgICAgIHBhZGRpbmc6IDBweCA1MHB4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgd2lkdGg6IDMwcmVtO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCl7XG5cbiAgICAuYWJvdXQtaGVhZGVye1xuICAgICAgICBjb2xvcjogIHJnYigyMjQsIDEyOSwgMjUpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgZm9udC1zaXplOiA2MHB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuc3ViaGVhZGVyLXRleHR7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuXG4gICAgLnN1YmhlYWRlcnMtY29udGFpbmVye1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMTcwcHg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAudGV4dC1jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiA1MHB4IDIwcHggMTAwcHg7XG4gICAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIH1cblxuICAgIC5wYXJhZ3JhcGh7XG4gICAgICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC50ZXh0LWhlYWRlcntcbiAgICAgICAgZm9udC1zaXplOjMwcHg7XG4gICAgfVxuXG4gICAgLnRleHQtY29udGVudHtcbiAgICAgICAgcGFkZGluZzogMHB4IDAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICB3aWR0aDogMjByZW07XG4gICAgfVxufVxuXG4uYWJvdXQtY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUsIDI1LCAyNSk7XG59XG5cbi5zdWJoZWFkZXItYm94e1xuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcbn1cblxuLmFycm93e1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwYWRkaW5nOiA2cHggMHB4O1xuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xufVxuXG4uaW5mb3JtYXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg4LDE4OCwxOTApO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _shared_base_component_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/base-component/base-component */
    "./src/app/shared/base-component/base-component.ts");
    /* harmony import */


    var src_assets_enum_Languages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/assets/enum/Languages */
    "./src/assets/enum/Languages.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_13_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r2.changeLang();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.currentLang.toUpperCase());
      }
    }

    function AppComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_14_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r4.changeLang();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.currentLang.toUpperCase());
      }
    }

    var AppComponent = /*#__PURE__*/function (_shared_base_componen2) {
      _inherits(AppComponent, _shared_base_componen2);

      var _super2 = _createSuper(AppComponent);

      function AppComponent(router, translate) {
        var _this;

        _classCallCheck(this, AppComponent);

        _this = _super2.call(this);
        _this.router = router;
        _this.translate = translate;
        _this.title = 'vipa';
        _this.availableLang = src_assets_enum_Languages__WEBPACK_IMPORTED_MODULE_4__["Languages"].EN;
        _this.isOpen = true;
        return _this;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.innerWidth = window.innerWidth;
          this.isOpen = this.innerWidth > 700;
          this.translationsInit();
          console.log(this.translate);
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          this.innerWidth = window.innerWidth;

          if (this.innerWidth > 700) {
            this.isOpen = true;
          } else {
            this.isOpen = false;
          }
        }
      }, {
        key: "routeChange",
        value: function routeChange() {
          if (this.innerWidth <= 700 && this.isOpen) {
            this.toggleBurger();
          }
        }
      }, {
        key: "toggleBurger",
        value: function toggleBurger() {
          this.isOpen = !this.isOpen;
        }
      }, {
        key: "translationsInit",
        value: function translationsInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.translate.use(src_assets_enum_Languages__WEBPACK_IMPORTED_MODULE_4__["Languages"].EN).toPromise();

                  case 2:
                    this.currentLang = this.translate.currentLang;

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "changeLang",
        value: function changeLang() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.translate.use(this.translate.currentLang === src_assets_enum_Languages__WEBPACK_IMPORTED_MODULE_4__["Languages"].BG ? src_assets_enum_Languages__WEBPACK_IMPORTED_MODULE_4__["Languages"].EN : src_assets_enum_Languages__WEBPACK_IMPORTED_MODULE_4__["Languages"].BG).toPromise();

                  case 2:
                    this.currentLang = src_assets_enum_Languages__WEBPACK_IMPORTED_MODULE_4__["Languages"][this.translate.currentLang.toUpperCase()];

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return AppComponent;
    }(_shared_base_component_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]);

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      hostBindings: function AppComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 19,
      vars: 17,
      consts: [[1, "nav-bar"], ["routerLink", "home", 1, "nav-link", 3, "click"], ["routerLink", "about", 1, "nav-link", 3, "click"], ["routerLink", "projects", 1, "nav-link", 3, "click"], ["routerLink", "contacts", 1, "nav-link", 3, "click"], ["class", "nav-language-button", 3, "click", 4, "ngIf"], ["class", "language-button", 3, "click", 4, "ngIf"], ["type", "button", 1, "burger", "hamburger", "hamburger--spin-r", 3, "click"], [1, "hamburger-box"], [1, "hamburger-inner"], [1, "nav-language-button", 3, "click"], [1, "language-button", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_a_click_1_listener() {
            return ctx.routeChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_a_click_4_listener() {
            return ctx.routeChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_a_click_7_listener() {
            return ctx.routeChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_a_click_10_listener() {
            return ctx.routeChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AppComponent_div_13_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AppComponent_div_14_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_15_listener() {
            return ctx.toggleBurger();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@openClose", ctx.isOpen ? "open" : "closed");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 9, ctx.translations.home));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 11, ctx.translations.about_us));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 13, ctx.translations.projects));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 15, ctx.translations.contacts));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentLang);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentLang);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-active", ctx.isOpen);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
      styles: ["@media only screen and (max-width: 900px){\n\n    .nav-bar[_ngcontent-%COMP%]{\n        width: 100%;\n        height: -webkit-fit-content;\n        height: -moz-fit-content;\n        height: fit-content;\n        background-color: rgb(40,40,40);\n        text-align: center;\n        position: fixed;\n        bottom: 0px;\n        padding: 10px 0px;\n        z-index: 100;\n    }\n\n    .nav-link[_ngcontent-%COMP%]{\n        color: white;\n        text-decoration: none;\n        text-align: center;\n        font-size: 16px;\n        padding: 5px 10px;\n        margin: 0px 20px;\n    }\n\n    .burger[_ngcontent-%COMP%]{\n        display: none;\n    }\n}\n@media only screen and (min-width: 900px){\n\n    .nav-bar[_ngcontent-%COMP%]{\n        width: 100%;\n        height: -webkit-fit-content;\n        height: -moz-fit-content;\n        height: fit-content;\n        background-color: rgb(40,40,40);\n        text-align: center;\n        position: fixed;\n        bottom: 0px;\n        padding: 10px 0px;\n        z-index: 100;\n    }\n\n    .nav-link[_ngcontent-%COMP%]{\n        color: white;\n        text-decoration: none;\n        text-align: center;\n        width: 80px;\n        height: 35px;\n        font-size: 22px;\n        padding: 10px 25px;\n        margin: 0px 20px;\n    }\n\n    .burger[_ngcontent-%COMP%]{\n        display: none;\n    }\n}\n@media only screen and (max-width: 700px){\n\n    .nav-bar[_ngcontent-%COMP%]{\n        width: -moz-available;\n        width: -webkit-fill-available;\n        height: 100%;\n        background-color: rgba(40,40,40,0.7);\n        text-align: center;\n        position: fixed;\n        top: 0px;\n        padding: 30px 50px;\n        z-index: 100;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n    }\n\n    .nav-link[_ngcontent-%COMP%]{\n        color: white;\n        text-decoration: none;\n        text-align: center;\n        font-size: 24px;\n        margin: 10px 0px;\n    }\n\n    .burger[_ngcontent-%COMP%]{\n        width: 100px;\n        height: 100px;\n        position: absolute;\n        top: 0px;\n        z-index: 100;\n        display: block;\n    }\n\n    .language-button[_ngcontent-%COMP%]{\n        display: none!important;\n    }\n\n    .nav-language-button[_ngcontent-%COMP%]{\n        display: block!important;\n        width: 100px;\n        height: 20px;\n        padding-top: 5px;\n        background-color: white;\n        margin: 40px auto 0px auto;\n        cursor: pointer;\n    }\n}\n.language-button[_ngcontent-%COMP%]{\n    position: absolute;\n    right: 50px;\n    top: 0px;\n    padding: 0px;\n    padding-top: 20px;\n    height: 50px;\n    width: 35px;\n    text-align: center;\n    background-color: white;\n    color: black;\n    border-radius: 0px 0px 15px 15px;\n    cursor: pointer;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    z-index:10;\n}\n.nav-language-button[_ngcontent-%COMP%]{\n    display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUk7UUFDSSxXQUFXO1FBQ1gsMkJBQW1CO1FBQW5CLHdCQUFtQjtRQUFuQixtQkFBbUI7UUFDbkIsK0JBQStCO1FBQy9CLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsV0FBVztRQUNYLGlCQUFpQjtRQUNqQixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLHFCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7QUFDQTs7SUFFSTtRQUNJLFdBQVc7UUFDWCwyQkFBbUI7UUFBbkIsd0JBQW1CO1FBQW5CLG1CQUFtQjtRQUNuQiwrQkFBK0I7UUFDL0Isa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsWUFBWTtRQUNaLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKO0FBRUE7O0lBRUk7UUFDSSxxQkFBcUI7UUFDckIsNkJBQTZCO1FBQzdCLFlBQVk7UUFDWixvQ0FBb0M7UUFDcEMsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixRQUFRO1FBQ1Isa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsWUFBWTtRQUNaLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSx1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSx3QkFBd0I7UUFDeEIsWUFBWTtRQUNaLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsdUJBQXVCO1FBQ3ZCLDBCQUEwQjtRQUMxQixlQUFlO0lBQ25CO0FBQ0o7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFFekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsVUFBVTtBQUNkO0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KXtcblxuICAgIC5uYXYtYmFye1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLDQwLDQwKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgICAgei1pbmRleDogMTAwO1xuICAgIH1cblxuICAgIC5uYXYtbGlua3tcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgbWFyZ2luOiAwcHggMjBweDtcbiAgICB9XG5cbiAgICAuYnVyZ2Vye1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpe1xuXG4gICAgLm5hdi1iYXJ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsNDAsNDApO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgfVxuXG4gICAgLm5hdi1saW5re1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgICAgICAgbWFyZ2luOiAwcHggMjBweDtcbiAgICB9XG5cbiAgICAuYnVyZ2Vye1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCl7XG5cbiAgICAubmF2LWJhcntcbiAgICAgICAgd2lkdGg6IC1tb3otYXZhaWxhYmxlO1xuICAgICAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQwLDQwLDQwLDAuNyk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgcGFkZGluZzogMzBweCA1MHB4O1xuICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5uYXYtbGlua3tcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIH1cblxuICAgIC5idXJnZXJ7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAubGFuZ3VhZ2UtYnV0dG9ue1xuICAgICAgICBkaXNwbGF5OiBub25lIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubmF2LWxhbmd1YWdlLWJ1dHRvbntcbiAgICAgICAgZGlzcGxheTogYmxvY2shaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbjogNDBweCBhdXRvIDBweCBhdXRvO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG4ubGFuZ3VhZ2UtYnV0dG9ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNTBweDtcbiAgICB0b3A6IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxNXB4IDE1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB6LWluZGV4OjEwO1xufVxuXG4ubmF2LWxhbmd1YWdlLWJ1dHRvbntcbiAgICBkaXNwbGF5OiBub25lO1xufVxuIl19 */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('openClose', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          left: '0%'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          left: '100%'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('closed => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s')])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('openClose', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            left: '0%'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            left: '100%'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('closed => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s')])])]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }];
      }, {
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: HttpLoaderFactory, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./contacts/contacts.component */
    "./src/app/contacts/contacts.component.ts");
    /* harmony import */


    var _certificates_certificates_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./certificates/certificates.component */
    "./src/app/certificates/certificates.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _shared_components_loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./shared/components/loading-screen/loading-screen.component */
    "./src/app/shared/components/loading-screen/loading-screen.component.ts");
    /* harmony import */


    var _shared_components_scroll_btn_scroll_btn_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./shared/components/scroll-btn/scroll-btn.component */
    "./src/app/shared/components/scroll-btn/scroll-btn.component.ts");
    /* harmony import */


    var _shared_components_image_lightbox_image_lightbox_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./shared/components/image-lightbox/image-lightbox.component */
    "./src/app/shared/components/image-lightbox/image-lightbox.component.ts");

    var routes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
    }, {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"]
    }, {
      path: 'projects',
      component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"]
    }, {
      path: 'certificate',
      component: _certificates_certificates_component__WEBPACK_IMPORTED_MODULE_12__["CertificatesComponent"]
    }, {
      path: 'contacts',
      component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_11__["ContactsComponent"]
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }];

    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__["TranslateHttpLoader"](http);
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebase), _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"].forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"]]
        }
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"], _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_11__["ContactsComponent"], _certificates_certificates_component__WEBPACK_IMPORTED_MODULE_12__["CertificatesComponent"], _shared_components_loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_17__["LoadingScreenComponent"], _shared_components_scroll_btn_scroll_btn_component__WEBPACK_IMPORTED_MODULE_18__["ScrollBtnComponent"], _shared_components_image_lightbox_image_lightbox_component__WEBPACK_IMPORTED_MODULE_19__["ImageLightboxComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"], _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_11__["ContactsComponent"], _certificates_certificates_component__WEBPACK_IMPORTED_MODULE_12__["CertificatesComponent"], _shared_components_loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_17__["LoadingScreenComponent"], _shared_components_scroll_btn_scroll_btn_component__WEBPACK_IMPORTED_MODULE_18__["ScrollBtnComponent"], _shared_components_image_lightbox_image_lightbox_component__WEBPACK_IMPORTED_MODULE_19__["ImageLightboxComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebase), _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"].forRoot({
            defaultLanguage: 'en',
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateLoader"],
              useFactory: HttpLoaderFactory,
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"]]
            }
          })],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/certificates/certificates.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/certificates/certificates.component.ts ***!
    \********************************************************/

  /*! exports provided: CertificatesComponent */

  /***/
  function srcAppCertificatesCertificatesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CertificatesComponent", function () {
      return CertificatesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_base_component_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/base-component/base-component */
    "./src/app/shared/base-component/base-component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var CertificatesComponent = /*#__PURE__*/function (_shared_base_componen3) {
      _inherits(CertificatesComponent, _shared_base_componen3);

      var _super3 = _createSuper(CertificatesComponent);

      function CertificatesComponent() {
        _classCallCheck(this, CertificatesComponent);

        return _super3.call(this);
      }

      _createClass(CertificatesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CertificatesComponent;
    }(_shared_base_component_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

    CertificatesComponent.ɵfac = function CertificatesComponent_Factory(t) {
      return new (t || CertificatesComponent)();
    };

    CertificatesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CertificatesComponent,
      selectors: [["app-certificates"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 12,
      vars: 6,
      consts: [[1, "component-container"], [1, "header-box"], [1, "header"], [1, "highlight"], [1, "certificate-box"], [1, "description"]],
      template: function CertificatesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean libero justo, pulvinar elementum quam eu, laoreet consectetur leo. Morbi feugiat laoreet pharetra. Praesent sit amet tincidunt tortor. Sed condimentum id magna sit amet ullamcorper. Cras pharetra massa sit amet quam euismod sagittis sit amet a lacus.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx.translations.our), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, ctx.translations.certificates));
        }
      },
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
      styles: [".component-container[_ngcontent-%COMP%]{\n    background-color:rgb(220,220,220);\n    height: 100%;\n}\n\n.header-box[_ngcontent-%COMP%]{\n    background-color: rgb(40,40,40);\n    padding: 70px 300px;\n    color:white;\n}\n\n.header[_ngcontent-%COMP%]{\n    font-size: 50px;\n}\n\n.certificate-box[_ngcontent-%COMP%]{\n    padding: 50px 300px;   \n}\n\n.description[_ngcontent-%COMP%]{\n    font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2VydGlmaWNhdGVzL2NlcnRpZmljYXRlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY2VydGlmaWNhdGVzL2NlcnRpZmljYXRlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBvbmVudC1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjIwLDIyMCwyMjApO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmhlYWRlci1ib3h7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLDQwLDQwKTtcbiAgICBwYWRkaW5nOiA3MHB4IDMwMHB4O1xuICAgIGNvbG9yOndoaXRlO1xufVxuXG4uaGVhZGVye1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuLmNlcnRpZmljYXRlLWJveHtcbiAgICBwYWRkaW5nOiA1MHB4IDMwMHB4OyAgIFxufVxuXG4uZGVzY3JpcHRpb257XG4gICAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CertificatesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-certificates',
          templateUrl: './certificates.component.html',
          styleUrls: ['./certificates.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contacts/contacts.component.ts":
  /*!************************************************!*\
    !*** ./src/app/contacts/contacts.component.ts ***!
    \************************************************/

  /*! exports provided: ContactsComponent */

  /***/
  function srcAppContactsContactsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsComponent", function () {
      return ContactsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_base_component_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/base-component/base-component */
    "./src/app/shared/base-component/base-component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var ContactsComponent = /*#__PURE__*/function (_shared_base_componen4) {
      _inherits(ContactsComponent, _shared_base_componen4);

      var _super4 = _createSuper(ContactsComponent);

      function ContactsComponent() {
        _classCallCheck(this, ContactsComponent);

        return _super4.call(this);
      }

      _createClass(ContactsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactsComponent;
    }(_shared_base_component_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

    ContactsComponent.ɵfac = function ContactsComponent_Factory(t) {
      return new (t || ContactsComponent)();
    };

    ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactsComponent,
      selectors: [["app-contacts"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 39,
      vars: 27,
      consts: [[1, "component-container"], ["container", ""], [1, "header-box"], [1, "header"], [1, "highlight"], [1, "subheader"], [1, "contacts-box"], [1, "phone"], [1, "email"], [1, "form-house"], [1, "input-box"], [1, "input"], [1, "textbox-box"], [1, "textbox-label"], [1, "textbox"], [1, "send-button"], [1, "back-img"]],
      template: function ContactsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "textarea", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 16);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 9, ctx.translations.lets_build), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 11, ctx.translations.together));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 13, ctx.translations.contact_us));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 15, ctx.translations.our_phone), " : +359 87 870 6364");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 17, ctx.translations.our_mail), " : vipabg@abv.bg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 19, ctx.translations.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 21, ctx.translations.email));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 23, ctx.translations.idea));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 25, ctx.translations.send));
        }
      },
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
      styles: ["@media only screen and (max-width: 1400px){\n\n    .component-container[_ngcontent-%COMP%]{\n        width: 100%;\n        min-height: 100%;\n        padding: 40px 0px 100px 0px;\n        box-sizing: border-box;\n        background-color: rgb(220,220,220);\n    }\n\n    .header-box[_ngcontent-%COMP%]{\n        text-align: center;\n        margin-bottom: 25px;\n    }\n    \n    .subheader[_ngcontent-%COMP%]{\n        display: none;\n        font-size: 28px;\n    }\n\n    .contacts-box[_ngcontent-%COMP%]{\n        padding: 15px 30px;\n        font-weight: 200;\n        font-size: 18px;\n        margin: auto;\n        width: -webkit-max-content;\n        width: -moz-max-content;\n        width: max-content;\n        border-radius: 15px;\n        border: solid;\n        border-color: rgb(224, 129, 25);\n    }\n\n    .back-img[_ngcontent-%COMP%]{\n        background-image: url('form-back.svg');\n        background-position: center center;\n        background-size: cover;\n        position: fixed;\n        bottom: 30px;\n        right: 0px;\n        width: 450px;\n        height: 330px;\n        z-index: 1;\n    }\n}\n\n@media only screen and (min-width: 1400px){\n\n    .component-container[_ngcontent-%COMP%]{\n        width: 100%;\n        min-height: 100%;\n        padding: 90px 230px 50px 250px;\n        box-sizing: border-box;\n        background-color: rgb(220,220,220);\n    }\n\n    .header-box[_ngcontent-%COMP%]{\n        text-align: center;\n        margin-bottom: 50px;\n    }\n\n    .subheader[_ngcontent-%COMP%]{\n        display: block;\n        font-size: 28px;\n    }\n\n    .contacts-box[_ngcontent-%COMP%]{\n        padding: 15px 30px;\n        font-weight: 200;\n        font-size: 18px;\n        position: absolute;\n        width: -webkit-max-content;\n        width: -moz-max-content;\n        width: max-content;\n        border-radius: 15px;\n        border: solid;\n        border-color: rgb(224, 129, 25);\n    }\n\n    .back-img[_ngcontent-%COMP%]{\n        background-image: url('form-back.svg');\n        background-position: center center;\n        background-size: cover;\n        position: fixed;\n        bottom: 30px;\n        right: 0px;\n        width:600px;\n        height: 450px;\n        z-index: 1;\n    }\n}\n\n@media only screen and (max-width: 700px){\n    .header-box[_ngcontent-%COMP%]{\n        text-align: center;\n        margin-top: 40px;\n    }\n\n    .header[_ngcontent-%COMP%]{\n        font-size: 35px;\n    }\n\n    .form-house[_ngcontent-%COMP%]{\n        width: 280px;\n        text-align: center;\n        margin: auto;\n        position: relative;\n        z-index: 10;\n    }\n\n    .textbox[_ngcontent-%COMP%]{\n        height: 200px;\n        width: 360px;\n        font-size: 15px;\n        resize: none;\n        padding: 18px 10px;\n    }\n\n    label[_ngcontent-%COMP%]{\n        text-align: left;\n        font-size: 16px;\n        padding-left: 8px;\n    }\n\n    .send-button[_ngcontent-%COMP%]{\n        margin: auto;\n        margin-top: 15px;\n        background-color: rgb(224, 129, 25);\n        color: white;\n        width: 180px;\n        padding: 15px;\n        font-size: 16px;\n        text-align: center;\n        border-radius: 20px;\n        cursor: pointer;\n        position: relative;\n        z-index: 10;\n    }\n}\n\n@media only screen and (min-width: 700px){\n\n    .header[_ngcontent-%COMP%]{\n        font-size: 50px;\n    }\n\n    .subheader[_ngcontent-%COMP%]{\n        font-size: 28px;\n    }\n\n    .form-house[_ngcontent-%COMP%]{\n        width: 350px;\n        text-align: center;\n        margin: auto;\n        position: relative;\n        z-index: 10;\n    }\n\n    .textbox[_ngcontent-%COMP%]{\n        height: 200px;\n        width: 450px;\n        font-size: 17px;\n        resize: none;\n        padding: 20px 12px;\n    }\n\n    label[_ngcontent-%COMP%]{\n        text-align: left;\n        font-size: 20px;\n        padding-left: 10px;\n    }\n\n    .send-button[_ngcontent-%COMP%]{\n        margin: auto;\n        margin-top: 30px;\n        background-color: rgb(224, 129, 25);\n        color: white;\n        width: 200px;\n        padding: 20px;\n        text-align: center;\n        border-radius: 20px;\n        cursor: pointer;\n        position: relative;\n        z-index: 10;\n    }\n}\n\n@media only screen and (max-width: 500px){\n    .header[_ngcontent-%COMP%]{\n        font-size: 25px;\n    }\n\n    .form-house[_ngcontent-%COMP%]{\n        width: 220px;\n        text-align: center;\n        margin: auto;\n        position: relative;\n        z-index: 10;\n    }\n\n    label[_ngcontent-%COMP%]{\n        text-align: left;\n        font-size: 14px;\n        padding-left: 8px;\n    }\n\n    .input-box[_ngcontent-%COMP%]{\n        margin-top: 15px;\n        width: auto;\n        display: flex;\n        flex-direction: column;\n    }\n\n    .input[_ngcontent-%COMP%]{\n        font-size: 14px;\n    }\n\n    .textbox[_ngcontent-%COMP%]{\n        height: 260px;\n        width: 280px;\n        font-size: 14px;\n        resize: none;\n        padding: 10px 8px;\n    }\n\n    .textbox-label[_ngcontent-%COMP%]{\n        margin: auto;\n        font-size: 15px;\n    }\n\n    .contacts-box[_ngcontent-%COMP%]{\n        padding: 10px 20px;\n        font-weight: 100;\n        font-size: 15px;\n        margin: auto;\n        width: -webkit-max-content;\n        width: -moz-max-content;\n        width: max-content;\n        border-radius: 15px;\n        border: solid;\n        border-color: rgb(224, 129, 25);\n    }\n\n    .send-button[_ngcontent-%COMP%]{\n        margin: auto;\n        margin-top: 30px;\n        background-color: rgb(224, 129, 25);\n        color: white;\n        width: 160px;\n        padding: 16px;\n        font-size: 15px;\n        text-align: center;\n        border-radius: 20px;\n        cursor: pointer;\n        position: relative;\n        z-index: 10;\n    }\n\n    .back-img[_ngcontent-%COMP%]{\n        background-image: url('form-back.svg');\n        background-position: center center;\n        background-size: cover;\n        position: fixed;\n        bottom: 0px;\n        left: 0px;\n        width: 260px;\n        height: 200px;\n        z-index: 1;\n    }\n}\n\n@media only screen and (min-width: 500px){\n\n    .input[_ngcontent-%COMP%]{\n        font-size: 15px;\n    }\n\n    .textbox-label[_ngcontent-%COMP%]{\n        padding-left: 70px;\n    }\n\n    .input-box[_ngcontent-%COMP%]{\n        margin-top: 30px;\n        width: auto;\n        display: flex;\n        flex-direction: column;\n    }\n}\n\n.textbox-box[_ngcontent-%COMP%]{\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    width: -webkit-min-content;\n    width: -moz-min-content;\n    width: min-content;\n    margin-top: 40px;\n    position: relative;\n    z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSTtRQUNJLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsMkJBQTJCO1FBQzNCLHNCQUFzQjtRQUN0QixrQ0FBa0M7SUFDdEM7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixZQUFZO1FBQ1osMEJBQWtCO1FBQWxCLHVCQUFrQjtRQUFsQixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYiwrQkFBK0I7SUFDbkM7O0lBRUE7UUFDSSxzQ0FBMEQ7UUFDMUQsa0NBQWtDO1FBQ2xDLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsWUFBWTtRQUNaLFVBQVU7UUFDVixZQUFZO1FBQ1osYUFBYTtRQUNiLFVBQVU7SUFDZDtBQUNKOztBQUVBOztJQUVJO1FBQ0ksV0FBVztRQUNYLGdCQUFnQjtRQUNoQiw4QkFBOEI7UUFDOUIsc0JBQXNCO1FBQ3RCLGtDQUFrQztJQUN0Qzs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQiwwQkFBa0I7UUFBbEIsdUJBQWtCO1FBQWxCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLCtCQUErQjtJQUNuQzs7SUFFQTtRQUNJLHNDQUEwRDtRQUMxRCxrQ0FBa0M7UUFDbEMsc0JBQXNCO1FBQ3RCLGVBQWU7UUFDZixZQUFZO1FBQ1osVUFBVTtRQUNWLFdBQVc7UUFDWCxhQUFhO1FBQ2IsVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGFBQWE7UUFDYixZQUFZO1FBQ1osZUFBZTtRQUNmLFlBQVk7UUFDWixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsbUNBQW1DO1FBQ25DLFlBQVk7UUFDWixZQUFZO1FBQ1osYUFBYTtRQUNiLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsV0FBVztJQUNmO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsWUFBWTtRQUNaLGVBQWU7UUFDZixZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLG1DQUFtQztRQUNuQyxZQUFZO1FBQ1osWUFBWTtRQUNaLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsV0FBVztJQUNmOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLGFBQWE7UUFDYixzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksYUFBYTtRQUNiLFlBQVk7UUFDWixlQUFlO1FBQ2YsWUFBWTtRQUNaLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixlQUFlO0lBQ25COztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsWUFBWTtRQUNaLDBCQUFrQjtRQUFsQix1QkFBa0I7UUFBbEIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsK0JBQStCO0lBQ25DOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixtQ0FBbUM7UUFDbkMsWUFBWTtRQUNaLFlBQVk7UUFDWixhQUFhO1FBQ2IsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxzQ0FBMEQ7UUFDMUQsa0NBQWtDO1FBQ2xDLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsV0FBVztRQUNYLFNBQVM7UUFDVCxZQUFZO1FBQ1osYUFBYTtRQUNiLFVBQVU7SUFDZDtBQUNKOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsYUFBYTtRQUNiLHNCQUFzQjtJQUMxQjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpe1xuXG4gICAgLmNvbXBvbmVudC1jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiA0MHB4IDBweCAxMDBweCAwcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjAsMjIwLDIyMCk7XG4gICAgfVxuXG4gICAgLmhlYWRlci1ib3h7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICB9XG4gICAgXG4gICAgLnN1YmhlYWRlcntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgIH1cblxuICAgIC5jb250YWN0cy1ib3h7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgYm9yZGVyOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMjI0LCAxMjksIDI1KTtcbiAgICB9XG5cbiAgICAuYmFjay1pbWd7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvZm9ybS1iYWNrLnN2Z1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IDMwcHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIHdpZHRoOiA0NTBweDtcbiAgICAgICAgaGVpZ2h0OiAzMzBweDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KXtcblxuICAgIC5jb21wb25lbnQtY29udGFpbmVye1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogOTBweCAyMzBweCA1MHB4IDI1MHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLDIyMCwyMjApO1xuICAgIH1cblxuICAgIC5oZWFkZXItYm94e1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgfVxuXG4gICAgLnN1YmhlYWRlcntcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB9XG5cbiAgICAuY29udGFjdHMtYm94e1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIGJvcmRlcjogc29saWQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiKDIyNCwgMTI5LCAyNSk7XG4gICAgfVxuXG4gICAgLmJhY2staW1ne1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2Zvcm0tYmFjay5zdmdcIik7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAzMHB4O1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICB3aWR0aDo2MDBweDtcbiAgICAgICAgaGVpZ2h0OiA0NTBweDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xuICAgIC5oZWFkZXItYm94e1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgfVxuXG4gICAgLmhlYWRlcntcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgIH1cblxuICAgIC5mb3JtLWhvdXNle1xuICAgICAgICB3aWR0aDogMjgwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgIH1cblxuICAgIC50ZXh0Ym94e1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICB3aWR0aDogMzYwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAxOHB4IDEwcHg7XG4gICAgfVxuXG4gICAgbGFiZWx7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgfVxuXG4gICAgLnNlbmQtYnV0dG9ue1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDEyOSwgMjUpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpe1xuXG4gICAgLmhlYWRlcntcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgIH1cblxuICAgIC5zdWJoZWFkZXJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB9XG5cbiAgICAuZm9ybS1ob3VzZXtcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICB9XG5cbiAgICAudGV4dGJveHtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgd2lkdGg6IDQ1MHB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMjBweCAxMnB4O1xuICAgIH1cblxuICAgIGxhYmVse1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB9XG5cbiAgICAuc2VuZC1idXR0b257XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMTI5LCAyNSk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xuICAgIC5oZWFkZXJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB9XG5cbiAgICAuZm9ybS1ob3VzZXtcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICB9XG5cbiAgICBsYWJlbHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICB9XG5cbiAgICAuaW5wdXQtYm94e1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuaW5wdXR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAudGV4dGJveHtcbiAgICAgICAgaGVpZ2h0OiAyNjBweDtcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMTBweCA4cHg7XG4gICAgfVxuXG4gICAgLnRleHRib3gtbGFiZWx7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cblxuICAgIC5jb250YWN0cy1ib3h7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgYm9yZGVyOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMjI0LCAxMjksIDI1KTtcbiAgICB9XG5cbiAgICAuc2VuZC1idXR0b257XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMTI5LCAyNSk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgIH1cblxuICAgIC5iYWNrLWltZ3tcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9mb3JtLWJhY2suc3ZnXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIHdpZHRoOiAyNjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpe1xuXG4gICAgLmlucHV0e1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuXG4gICAgLnRleHRib3gtbGFiZWx7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNzBweDtcbiAgICB9XG5cbiAgICAuaW5wdXQtYm94e1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG59XG5cbi50ZXh0Ym94LWJveHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contacts',
          templateUrl: './contacts.component.html',
          styleUrls: ['./contacts.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_base_component_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/base-component/base-component */
    "./src/app/shared/base-component/base-component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var HomeComponent = /*#__PURE__*/function (_shared_base_componen5) {
      _inherits(HomeComponent, _shared_base_componen5);

      var _super5 = _createSuper(HomeComponent);

      function HomeComponent(router) {
        var _this2;

        _classCallCheck(this, HomeComponent);

        _this2 = _super5.call(this);
        _this2.router = router;
        return _this2;
      }

      _createClass(HomeComponent, [{
        key: "goTo",
        value: function goTo(path) {
          this.router.navigateByUrl("/about");
        }
      }]);

      return HomeComponent;
    }(_shared_base_component_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 16,
      vars: 12,
      consts: [[1, "home-container"], [1, "text-container"], [1, "header"], [1, "left-header"], [1, "right-header"], [1, "subheader"], [1, "start-button", 3, "click"], [1, "shadow"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_12_listener() {
            return ctx.goTo("about");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 7);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx.translations.home_header_first));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, ctx.translations.home_header_second));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 8, ctx.translations.home_header_third), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 10, ctx.translations.start));
        }
      },
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
      styles: ["@media only screen and (min-width: 1400px){\n\n    .text-container[_ngcontent-%COMP%]{\n        position: absolute;\n        color: white;\n        top: 15%;\n        right: 0px;\n        z-index: 10;\n    }\n    \n    .header[_ngcontent-%COMP%]{\n        position: relative;\n        right: 200px;\n    }\n    \n    .left-header[_ngcontent-%COMP%]{\n        font-size: 90px;\n    }\n    \n    .right-header[_ngcontent-%COMP%]{\n        color:rgb(224, 129, 25);\n        font-size: 260px;\n    }\n    \n    .subheader[_ngcontent-%COMP%]{\n        position: relative;\n        right: 0px;\n        font-size: 36px;\n        width: 200px;\n    }\n\n    .start-button[_ngcontent-%COMP%] {\n        display: none;\n    }\n}\n@media only screen and (min-width: 901px) and (max-width: 1400px){\n\n    .text-container[_ngcontent-%COMP%]{\n        position: absolute;\n        color: white;\n        top: 15%;\n        right: 0px;\n        z-index: 10;\n    }\n    \n    .header[_ngcontent-%COMP%]{\n        position: relative;\n        right: 60px;\n    }\n    \n    .left-header[_ngcontent-%COMP%]{\n        font-size: 70px;\n    }\n    \n    .right-header[_ngcontent-%COMP%]{\n        color:rgb(224, 129, 25);\n        font-size: 220px;\n    }\n    \n    .subheader[_ngcontent-%COMP%]{\n        position: relative;\n        right: 0px;\n        font-size: 28px;\n        width: 400px;\n    }\n\n    .start-button[_ngcontent-%COMP%] {\n        display: none;\n    }\n}\n@media only screen and (min-width: 501px) and (max-width: 900px){\n\n    .text-container[_ngcontent-%COMP%]{\n        position: absolute;\n        color: white;\n        top: 15%;\n        left: 50px;\n        z-index: 10;\n    }\n    \n    .left-header[_ngcontent-%COMP%]{\n        font-size: 60px;\n    }\n    \n    .right-header[_ngcontent-%COMP%]{\n        color:rgb(224, 129, 25);\n        font-size: 180px;\n    }\n    \n    .subheader[_ngcontent-%COMP%]{\n        position: relative;\n        right: 0px;\n        font-size: 26px;\n        width: 400px;\n    }\n\n    .start-button[_ngcontent-%COMP%] {\n        margin-top: 100px;\n        background-color: rgb(224, 129, 25);\n        color: white;\n        width: 160px;\n        padding: 16px;\n        font-size: 17px;\n        text-align: center;\n        border-radius: 20px;\n        cursor: pointer;\n    }\n}\n@media only screen and (max-width: 600px) {\n    .header[_ngcontent-%COMP%]{\n        display: flex;\n        flex-direction: column;\n    }\n}\n@media only screen and (max-width: 500px) {\n\n    .text-container[_ngcontent-%COMP%]{\n        position: absolute;\n        color: white;\n        top: 15%;\n        z-index: 10;\n        left: 40px;\n    }\n    \n    .left-header[_ngcontent-%COMP%]{\n        font-size: 45px;\n    }\n    \n    .right-header[_ngcontent-%COMP%]{\n        color:rgb(224, 129, 25);\n        font-size: 120px;\n    }\n    \n    .subheader[_ngcontent-%COMP%]{\n        position: relative;\n        right: 0px;\n        font-size: 24px;\n        width: 300px;\n    }\n\n    .start-button[_ngcontent-%COMP%] {\n        margin-top: 100px;\n        background-color: rgb(224, 129, 25);\n        color: white;\n        width: 160px;\n        padding: 16px;\n        font-size: 17px;\n        text-align: center;\n        border-radius: 20px;\n        cursor: pointer;\n    }\n}\n.home-container[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    background-color: rgb(53, 53, 53);\n    background-image: url('home2.JPG');\n    background-position: center center;\n    background-size: cover;\n}\n.shadow[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    background-color: rgba(0,0,0,0.6);\n    position: absolute;\n    top: 0px;\n}\n.logo[_ngcontent-%COMP%]{\n    width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUk7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFFBQVE7UUFDUixVQUFVO1FBQ1YsV0FBVztJQUNmOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksdUJBQXVCO1FBQ3ZCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsZUFBZTtRQUNmLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7QUFDQTs7SUFFSTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osUUFBUTtRQUNSLFVBQVU7UUFDVixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsV0FBVztJQUNmOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLHVCQUF1QjtRQUN2QixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLGVBQWU7UUFDZixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKO0FBRUE7O0lBRUk7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFFBQVE7UUFDUixVQUFVO1FBQ1YsV0FBVztJQUNmOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLHVCQUF1QjtRQUN2QixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLGVBQWU7UUFDZixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLG1DQUFtQztRQUNuQyxZQUFZO1FBQ1osWUFBWTtRQUNaLGFBQWE7UUFDYixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixlQUFlO0lBQ25CO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtJQUMxQjtBQUNKO0FBRUE7O0lBRUk7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFFBQVE7UUFDUixXQUFXO1FBQ1gsVUFBVTtJQUNkOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLHVCQUF1QjtRQUN2QixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLGVBQWU7UUFDZixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLG1DQUFtQztRQUNuQyxZQUFZO1FBQ1osWUFBWTtRQUNaLGFBQWE7UUFDYixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixlQUFlO0lBQ25CO0FBQ0o7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLGtDQUFzRDtJQUN0RCxrQ0FBa0M7SUFDbEMsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVixpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBOztHQUVHIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCl7XG5cbiAgICAudGV4dC1jb250YWluZXJ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0b3A6IDE1JTtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgfVxuICAgIFxuICAgIC5oZWFkZXJ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDIwMHB4O1xuICAgIH1cbiAgICBcbiAgICAubGVmdC1oZWFkZXJ7XG4gICAgICAgIGZvbnQtc2l6ZTogOTBweDtcbiAgICB9XG4gICAgXG4gICAgLnJpZ2h0LWhlYWRlcntcbiAgICAgICAgY29sb3I6cmdiKDIyNCwgMTI5LCAyNSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjYwcHg7XG4gICAgfVxuICAgIFxuICAgIC5zdWJoZWFkZXJ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgfVxuXG4gICAgLnN0YXJ0LWJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDFweCkgYW5kIChtYXgtd2lkdGg6IDE0MDBweCl7XG5cbiAgICAudGV4dC1jb250YWluZXJ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0b3A6IDE1JTtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgfVxuICAgIFxuICAgIC5oZWFkZXJ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDYwcHg7XG4gICAgfVxuICAgIFxuICAgIC5sZWZ0LWhlYWRlcntcbiAgICAgICAgZm9udC1zaXplOiA3MHB4O1xuICAgIH1cbiAgICBcbiAgICAucmlnaHQtaGVhZGVye1xuICAgICAgICBjb2xvcjpyZ2IoMjI0LCAxMjksIDI1KTtcbiAgICAgICAgZm9udC1zaXplOiAyMjBweDtcbiAgICB9XG4gICAgXG4gICAgLnN1YmhlYWRlcntcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICB9XG5cbiAgICAuc3RhcnQtYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAxcHgpIGFuZCAobWF4LXdpZHRoOiA5MDBweCl7XG5cbiAgICAudGV4dC1jb250YWluZXJ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0b3A6IDE1JTtcbiAgICAgICAgbGVmdDogNTBweDtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgfVxuICAgIFxuICAgIC5sZWZ0LWhlYWRlcntcbiAgICAgICAgZm9udC1zaXplOiA2MHB4O1xuICAgIH1cbiAgICBcbiAgICAucmlnaHQtaGVhZGVye1xuICAgICAgICBjb2xvcjpyZ2IoMjI0LCAxMjksIDI1KTtcbiAgICAgICAgZm9udC1zaXplOiAxODBweDtcbiAgICB9XG4gICAgXG4gICAgLnN1YmhlYWRlcntcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICB9XG5cbiAgICAuc3RhcnQtYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDEyOSwgMjUpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuaGVhZGVye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuXG4gICAgLnRleHQtY29udGFpbmVye1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdG9wOiAxNSU7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICBsZWZ0OiA0MHB4O1xuICAgIH1cbiAgICBcbiAgICAubGVmdC1oZWFkZXJ7XG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICB9XG4gICAgXG4gICAgLnJpZ2h0LWhlYWRlcntcbiAgICAgICAgY29sb3I6cmdiKDIyNCwgMTI5LCAyNSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTIwcHg7XG4gICAgfVxuICAgIFxuICAgIC5zdWJoZWFkZXJ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgfVxuXG4gICAgLnN0YXJ0LWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAxMjksIDI1KTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG4uaG9tZS1jb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MywgNTMsIDUzKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWUyLkpQR1wiKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5zaGFkb3d7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbn1cbiAgICBcbi5sb2dve1xuICAgIHdpZHRoOiAyNTBweDtcbn1cblxuLyogLnN0YXJ0LWJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkwLCAxMDcsIDE3KTtcbn0gKi8iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/projects.component.ts":
  /*!************************************************!*\
    !*** ./src/app/projects/projects.component.ts ***!
    \************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_base_component_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/base-component/base-component */
    "./src/app/shared/base-component/base-component.ts");
    /* harmony import */


    var _services_fileService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/fileService */
    "./src/app/services/fileService.ts");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _shared_components_image_lightbox_image_lightbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/components/image-lightbox/image-lightbox.component */
    "./src/app/shared/components/image-lightbox/image-lightbox.component.ts");
    /* harmony import */


    var _shared_components_scroll_btn_scroll_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/components/scroll-btn/scroll-btn.component */
    "./src/app/shared/components/scroll-btn/scroll-btn.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/components/loading-screen/loading-screen.component */
    "./src/app/shared/components/loading-screen/loading-screen.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var _c0 = ["container"];
    var _c1 = ["header"];
    var _c2 = ["options"];

    function ProjectsComponent_app_loading_screen_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-loading-screen");
      }
    }

    var ProjectsComponent = /*#__PURE__*/function (_shared_base_componen6) {
      _inherits(ProjectsComponent, _shared_base_componen6);

      var _super6 = _createSuper(ProjectsComponent);

      function ProjectsComponent(fileService, db) {
        var _this3;

        _classCallCheck(this, ProjectsComponent);

        _this3 = _super6.call(this);
        _this3.fileService = fileService;
        _this3.db = db;
        _this3.activeOption = "construction";
        _this3.items = [];
        return _this3;
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.fileService.getImageDetailList();
                    this.imgFiles = this.fileService.getConstructionImages();
                    this._imageSubscription = this.imgFiles.subscribe(function (item) {
                      _this4.items = item;
                    });

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "getConstructions",
        value: function getConstructions() {
          var _this5 = this;

          if (this.activeOption != 'construction') {
            this._imageSubscription.unsubscribe();

            this.items = [];
            this.activeOption = 'construction';
            this.imgFiles = this.fileService.getConstructionImages();
            this._imageSubscription = this.imgFiles.subscribe(function (item) {
              _this5.items = item;
            });
          }
        }
      }, {
        key: "getRepairs",
        value: function getRepairs() {
          var _this6 = this;

          if (this.activeOption != 'repair') {
            this._imageSubscription.unsubscribe();

            this.items = [];
            this.activeOption = 'repair';
            this.imgFiles = this.fileService.getRepairImages();
            this._imageSubscription = this.imgFiles.subscribe(function (item) {
              _this6.items = item;
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._imageSubscription.unsubscribe();
        }
      }]);

      return ProjectsComponent;
    }(_shared_base_component_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

    ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_fileService__WEBPACK_IMPORTED_MODULE_3__["FileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]));
    };

    ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects"]],
      viewQuery: function ProjectsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.header = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.options = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 22,
      vars: 18,
      consts: [[1, "component-container"], ["container", ""], [1, "header"], ["header", ""], [1, "highlight"], [1, "d-flex", "flex-row", "space-evenly", "text-center", "show-options"], ["options", ""], [1, "option", 3, "click"], [1, "lightbox-container", "d-flex", "flex-wrap", "justify-center"], [3, "images"], [4, "ngIf"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_div_click_12_listener() {
            return ctx.getConstructions();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_div_click_15_listener() {
            return ctx.getRepairs();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "app-image-lightbox", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "app-scroll-btn");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ProjectsComponent_app_loading_screen_21_Template, 1, 0, "app-loading-screen", 10);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 10, ctx.translations.our), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 12, ctx.translations.projects));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeOption == "construction");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 14, ctx.translations.construction));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeOption == "repair");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 16, ctx.translations.repair));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.items.length);
        }
      },
      directives: [_shared_components_image_lightbox_image_lightbox_component__WEBPACK_IMPORTED_MODULE_5__["ImageLightboxComponent"], _shared_components_scroll_btn_scroll_btn_component__WEBPACK_IMPORTED_MODULE_6__["ScrollBtnComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_components_loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_8__["LoadingScreenComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]],
      styles: ["@media only screen and (min-width: 1200px){\n\n  .header[_ngcontent-%COMP%]{\n    font-size: 120px;\n    color: black;\n    text-align: right;\n    margin-bottom: 80px;\n    padding: 0px 100px;\n  }\n\n  .show-options[_ngcontent-%COMP%]{\n    font-size: 30px;\n    cursor: pointer;\n  }\n\n  .component-container[_ngcontent-%COMP%]{\n    padding: 80px 50px 60px;\n    background-color: rgb(220,220,220);\n  }\n\n}\n\n@media only screen and (min-width: 710px) and (max-width: 1200px){\n\n  .header[_ngcontent-%COMP%]{\n    font-size: 80px;\n    color: black;\n    text-align: right;\n    margin-bottom: 50px;\n    padding: 0px 70px;\n  }\n\n  .show-options[_ngcontent-%COMP%]{\n    font-size: 20px;\n    cursor: pointer;\n  }\n\n  .component-container[_ngcontent-%COMP%]{\n    padding: 100px 50px;\n    background-color: rgb(220,220,220);\n  }\n}\n\n@media only screen and (max-width: 710px){\n\n  .header[_ngcontent-%COMP%]{\n    font-size: 25px;\n    color: black;\n    text-align: center;\n    margin-bottom: 30px;\n    padding: 0px 20px;\n  }\n\n  .show-options[_ngcontent-%COMP%]{\n    font-size: 16px;\n    cursor: pointer;\n  }\n\n  .component-container[_ngcontent-%COMP%]{\n    padding: 50px 30px;\n    background-color: rgb(220,220,220);\n  }\n}\n\n.option[_ngcontent-%COMP%] {\n  border: transparent solid 6px;\n}\n\n.active[_ngcontent-%COMP%]{\n  border-color: transparent;\n  border-bottom: rgb(224, 129, 25) solid 4px;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  overflow:hidden;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin:3px;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 200px;\n  transition-duration: .3s;\n  overflow:hidden;\n  cursor:pointer;\n}\n\n.image-container[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\n  transform: scale(1.2);\n  transition-duration: .3s;\n  -webkit-filter: grayscale(50%);\n          filter: grayscale(50%);\n  opacity: .7;\n}\n\n.lightbox-container[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  background-color: rgb(180,180,180);\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixrQ0FBa0M7RUFDcEM7O0FBRUY7O0FBRUE7O0VBRUU7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsa0NBQWtDO0VBQ3BDO0FBQ0Y7O0FBRUE7O0VBRUU7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsa0NBQWtDO0VBQ3BDO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4Qiw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KXtcblxuICAuaGVhZGVye1xuICAgIGZvbnQtc2l6ZTogMTIwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gICAgcGFkZGluZzogMHB4IDEwMHB4O1xuICB9XG5cbiAgLnNob3ctb3B0aW9uc3tcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmNvbXBvbmVudC1jb250YWluZXJ7XG4gICAgcGFkZGluZzogODBweCA1MHB4IDYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMCwyMjAsMjIwKTtcbiAgfVxuXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzEwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpe1xuXG4gIC5oZWFkZXJ7XG4gICAgZm9udC1zaXplOiA4MHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIHBhZGRpbmc6IDBweCA3MHB4O1xuICB9XG5cbiAgLnNob3ctb3B0aW9uc3tcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmNvbXBvbmVudC1jb250YWluZXJ7XG4gICAgcGFkZGluZzogMTAwcHggNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLDIyMCwyMjApO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzEwcHgpe1xuXG4gIC5oZWFkZXJ7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgfVxuXG4gIC5zaG93LW9wdGlvbnN7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5jb21wb25lbnQtY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDUwcHggMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLDIyMCwyMjApO1xuICB9XG59XG5cbi5vcHRpb24ge1xuICBib3JkZXI6IHRyYW5zcGFyZW50IHNvbGlkIDZweDtcbn1cblxuLmFjdGl2ZXtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogcmdiKDIyNCwgMTI5LCAyNSkgc29saWQgNHB4O1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6aGlkZGVuO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtYXJnaW46M3B4O1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gIG92ZXJmbG93OmhpZGRlbjtcbiAgY3Vyc29yOnBvaW50ZXI7XG59XG5cbi5pbWFnZS1jb250YWluZXI6aG92ZXIgaW1ne1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgZmlsdGVyOiBncmF5c2NhbGUoNTAlKTtcbiAgb3BhY2l0eTogLjc7XG59XG5cbi5saWdodGJveC1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgwLDE4MCwxODApO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-projects',
          templateUrl: './projects.component.html',
          styleUrls: ['./projects.component.css']
        }]
      }], function () {
        return [{
          type: _services_fileService__WEBPACK_IMPORTED_MODULE_3__["FileService"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]
        }];
      }, {
        container: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['container']
        }],
        header: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['header']
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['options']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/fileService.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/fileService.ts ***!
    \*****************************************/

  /*! exports provided: FileService */

  /***/
  function srcAppServicesFileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileService", function () {
      return FileService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");

    var FileService = /*#__PURE__*/function () {
      function FileService(firebase) {
        _classCallCheck(this, FileService);

        this.firebase = firebase;
        this.dataSet = {
          id: '',
          type: '',
          url: ''
        };
        this.msg = 'error';
      }

      _createClass(FileService, [{
        key: "getImageDetailList",
        value: function getImageDetailList() {
          this.constructionsImg = this.firebase.list('constructions');
          this.repairImg = this.firebase.list('repair');
        }
      }, {
        key: "insertImageDetails",
        value: function insertImageDetails(id, type, url) {
          this.dataSet = {
            id: id,
            type: type,
            url: url
          };

          if (type == "construction") {
            this.constructionsImg.push(this.dataSet);
          } else if (type == "repair") {
            this.constructionsImg.push(this.dataSet);
          } else {
            console.log("Error!");
          }
        }
      }, {
        key: "getImage",
        value: function getImage(id) {
          var _this7 = this;

          this.constructionsImg.snapshotChanges().subscribe(function (list) {
            _this7.fileList = list.map(function (item) {
              return item.payload.val();
            });

            _this7.fileList.forEach(function (element) {
              if (element.id === id) _this7.msg = element.url;
            });

            if (_this7.msg === 'error') alert('No record found');else {
              window.open(_this7.msg);
              _this7.msg = 'error';
            }
          });
        }
      }, {
        key: "getConstructionImages",
        value: function getConstructionImages() {
          return this.constructionsImg.valueChanges();
        }
      }, {
        key: "getRepairImages",
        value: function getRepairImages() {
          return this.repairImg.valueChanges();
        }
      }]);

      return FileService;
    }();

    FileService.ɵfac = function FileService_Factory(t) {
      return new (t || FileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]));
    };

    FileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FileService,
      factory: FileService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/base-component/base-component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/base-component/base-component.ts ***!
    \*********************************************************/

  /*! exports provided: BaseComponent */

  /***/
  function srcAppSharedBaseComponentBaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseComponent", function () {
      return BaseComponent;
    });
    /* harmony import */


    var _assets_i18n_translations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../../assets/i18n/translations */
    "./src/assets/i18n/translations.ts");

    var BaseComponent = function BaseComponent() {
      _classCallCheck(this, BaseComponent);

      this.translations = _assets_i18n_translations__WEBPACK_IMPORTED_MODULE_0__["default"];
    };
    /***/

  },

  /***/
  "./src/app/shared/components/image-lightbox/image-lightbox.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/components/image-lightbox/image-lightbox.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ImageLightboxComponent */

  /***/
  function srcAppSharedComponentsImageLightboxImageLightboxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageLightboxComponent", function () {
      return ImageLightboxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ImageLightboxComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageLightboxComponent_div_1_Template_img_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var i_r3 = ctx.index;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r4.openModal();
          return ctx_r4.currentSlide(i_r3 + 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", image_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ImageLightboxComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", image_r6.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var ImageLightboxComponent = /*#__PURE__*/function () {
      function ImageLightboxComponent() {
        _classCallCheck(this, ImageLightboxComponent);

        this.images = [];
        this.slideIndex = 0;
        this.isModalOpen = false;
      }

      _createClass(ImageLightboxComponent, [{
        key: "openModal",
        value: function openModal() {
          document.getElementById('imgModal').style.display = "flex";
          document.getElementById('body').style.overflow = "hidden";
          this.isModalOpen = true;
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          document.getElementById('imgModal').style.display = "none";
          document.getElementById('body').style.overflow = "";
          this.isModalOpen = false;
        }
      }, {
        key: "plusSlides",
        value: function plusSlides(n) {
          this.showSlides(this.slideIndex += n);
        }
      }, {
        key: "currentSlide",
        value: function currentSlide(n) {
          this.showSlides(this.slideIndex = n);
        }
      }, {
        key: "showSlides",
        value: function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("img-slides");
          var dots = document.getElementsByClassName("images");

          if (n > slides.length) {
            this.slideIndex = 1;
          }

          if (n < 1) {
            this.slideIndex = slides.length;
          }

          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }

          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }

          slides[this.slideIndex - 1].style.display = "block";

          if (dots && dots.length > 0) {
            dots[this.slideIndex - 1].className += " active";
          }
        }
      }]);

      return ImageLightboxComponent;
    }();

    ImageLightboxComponent.ɵfac = function ImageLightboxComponent_Factory(t) {
      return new (t || ImageLightboxComponent)();
    };

    ImageLightboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImageLightboxComponent,
      selectors: [["app-image-lightbox"]],
      inputs: {
        images: "images"
      },
      decls: 17,
      vars: 2,
      consts: [[1, "d-flex", "flex-wrap", "justify-center"], ["class", "image-container", 4, "ngFor", "ngForOf"], ["id", "imgModal", 1, "slide-modal", "justify-center"], [1, "background", 3, "click"], [1, "close", 3, "click"], [1, "slide-modal-content", "d-flex", "flex-column", "justify-center"], ["class", "img-slides", 4, "ngFor", "ngForOf"], [1, "prev", 3, "click"], [1, "next", 3, "click"], [1, "d-flex", "flex-row", "justify-center", "img-nav"], [1, "arrow", 3, "click"], [1, "image-container"], [1, "hover-shadow", 3, "src", "click"], [1, "img-slides"], [1, "modal-img", 3, "src"]],
      template: function ImageLightboxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageLightboxComponent_div_1_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageLightboxComponent_Template_div_click_3_listener() {
            return ctx.closeModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageLightboxComponent_Template_span_click_4_listener() {
            return ctx.closeModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ImageLightboxComponent_div_7_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageLightboxComponent_Template_a_click_8_listener() {
            return ctx.plusSlides(0 - 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u276E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageLightboxComponent_Template_a_click_10_listener() {
            return ctx.plusSlides(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u276F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageLightboxComponent_Template_a_click_13_listener() {
            return ctx.plusSlides(0 - 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u276E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageLightboxComponent_Template_a_click_15_listener() {
            return ctx.plusSlides(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u276F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".image-container[_ngcontent-%COMP%] {\n  overflow:hidden;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin:3px;\n  padding: 5px 10px;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 200px;\n}\n\n.modal-img[_ngcontent-%COMP%] {\n  max-height: 100%;\n}\n\n.slide-modal[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  z-index: 20;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.background[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 20;\n  background-color: rgba(0,0,0,0.5);\n}\n\n.slide-modal-content[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n\n.close[_ngcontent-%COMP%] {\n  color: white;\n  position: absolute;\n  top: 32px;\n  right: 32px;\n  font-size: 120px;\n  line-height: 55px;\n  z-index: 30;\n  cursor: pointer;\n}\n\n.img-slides[_ngcontent-%COMP%] {\n  display: none;\n  z-index: 20;\n}\n\n@media only screen and (min-width: 600px){\n  .prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: absolute;\n    padding: 18px;\n    color: white;\n    font-weight: bold;\n    font-size: 20px;\n    transition: 0.8s ease;\n    -moz-user-select: none;\n     -ms-user-select: none;\n         user-select: none;\n    -webkit-user-select: none;\n    z-index: 20;\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n\n  .prev[_ngcontent-%COMP%] {\n    left: 0;\n    border-radius: 0 12px 12px 0;\n  }\n\n  .next[_ngcontent-%COMP%] {\n    right: 0;\n    border-radius: 12px 0 0 12px;\n  }\n\n  .img-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media only screen and (max-width: 600px){\n  .prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .img-nav[_ngcontent-%COMP%] {\n    cursor: pointer;\n    color: white;\n    font-weight: bold;\n    font-size: 20px;\n    z-index: 20;\n    position: absolute;\n    bottom: 90px;\n    width: 100%;\n  }\n\n  .arrow[_ngcontent-%COMP%] {\n    padding: 18px;\n    background-color: rgba(0, 0, 0, 0.9);\n  }\n}\n\n.hover-shadow[_ngcontent-%COMP%] {\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.hover-shadow[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW1hZ2UtbGlnaHRib3gvaW1hZ2UtbGlnaHRib3guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZiwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0U7O0lBRUUsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLHNCQUFpQjtLQUFqQixxQkFBaUI7U0FBakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0UsT0FBTztJQUNQLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLFFBQVE7SUFDUiw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFOztJQUVFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isb0NBQW9DO0VBQ3RDO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDJFQUEyRTtBQUM3RSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ltYWdlLWxpZ2h0Ym94L2ltYWdlLWxpZ2h0Ym94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2UtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6aGlkZGVuO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtYXJnaW46M3B4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbn1cblxuLm1vZGFsLWltZyB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5zbGlkZS1tb2RhbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjA7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJhY2tncm91bmQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDIwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XG59XG5cbi5zbGlkZS1tb2RhbC1jb250ZW50IHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG59XG5cbi5jbG9zZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMycHg7XG4gIHJpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDEyMHB4O1xuICBsaW5lLWhlaWdodDogNTVweDtcbiAgei1pbmRleDogMzA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmltZy1zbGlkZXMge1xuICBkaXNwbGF5OiBub25lO1xuICB6LWluZGV4OiAyMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCl7XG4gIC5wcmV2LFxuICAubmV4dCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiAxOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdHJhbnNpdGlvbjogMC44cyBlYXNlO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgei1pbmRleDogMjA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICB9XG5cbiAgLnByZXYge1xuICAgIGxlZnQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMCAxMnB4IDEycHggMDtcbiAgfVxuXG4gIC5uZXh0IHtcbiAgICByaWdodDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4IDAgMCAxMnB4O1xuICB9XG5cbiAgLmltZy1uYXYge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XG4gIC5wcmV2LFxuICAubmV4dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5pbWctbmF2IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB6LWluZGV4OiAyMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA5MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmFycm93IHtcbiAgICBwYWRkaW5nOiAxOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgfVxufVxuXG4uaG92ZXItc2hhZG93IHtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaG92ZXItc2hhZG93OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageLightboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-image-lightbox',
          templateUrl: './image-lightbox.component.html',
          styleUrls: ['./image-lightbox.component.css']
        }]
      }], function () {
        return [];
      }, {
        images: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/loading-screen/loading-screen.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/components/loading-screen/loading-screen.component.ts ***!
    \******************************************************************************/

  /*! exports provided: LoadingScreenComponent */

  /***/
  function srcAppSharedComponentsLoadingScreenLoadingScreenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingScreenComponent", function () {
      return LoadingScreenComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _base_component_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../base-component/base-component */
    "./src/app/shared/base-component/base-component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var LoadingScreenComponent = /*#__PURE__*/function (_base_component_base_) {
      _inherits(LoadingScreenComponent, _base_component_base_);

      var _super7 = _createSuper(LoadingScreenComponent);

      function LoadingScreenComponent() {
        _classCallCheck(this, LoadingScreenComponent);

        return _super7.apply(this, arguments);
      }

      return LoadingScreenComponent;
    }(_base_component_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

    LoadingScreenComponent.ɵfac = function LoadingScreenComponent_Factory(t) {
      return ɵLoadingScreenComponent_BaseFactory(t || LoadingScreenComponent);
    };

    LoadingScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoadingScreenComponent,
      selectors: [["app-loading-screen"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 4,
      vars: 3,
      consts: [[1, "loading-screen-wrapper"], [1, "loading-screen-icon"]],
      template: function LoadingScreenComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.translations.loading), " ");
        }
      },
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
      styles: [".loading-screen-wrapper[_ngcontent-%COMP%] {\n  z-index: 100;\n  position: absolute;\n  top: 0;\n  background-color: rgba(0,0,0, 0.6);\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.loading-screen-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  font-size: 30px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGluZy1zY3JlZW4vbG9hZGluZy1zY3JlZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLGtDQUFrQztFQUNsQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRpbmctc2NyZWVuL2xvYWRpbmctc2NyZWVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZy1zY3JlZW4td3JhcHBlciB7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsIDAuNik7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9hZGluZy1zY3JlZW4taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuIl19 */"]
    });

    var ɵLoadingScreenComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](LoadingScreenComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-loading-screen',
          templateUrl: './loading-screen.component.html',
          styleUrls: ['./loading-screen.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/scroll-btn/scroll-btn.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/components/scroll-btn/scroll-btn.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ScrollBtnComponent */

  /***/
  function srcAppSharedComponentsScrollBtnScrollBtnComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollBtnComponent", function () {
      return ScrollBtnComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ScrollBtnComponent = /*#__PURE__*/function () {
      function ScrollBtnComponent() {
        _classCallCheck(this, ScrollBtnComponent);

        this.showButton = false;
      }

      _createClass(ScrollBtnComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          document.onscroll = function () {
            _this8.showButton = window.scrollY > 800;
            console.log(_this8.showButton);
          };
        }
      }, {
        key: "scrollTop",
        value: function scrollTop() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }
      }]);

      return ScrollBtnComponent;
    }();

    ScrollBtnComponent.ɵfac = function ScrollBtnComponent_Factory(t) {
      return new (t || ScrollBtnComponent)();
    };

    ScrollBtnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ScrollBtnComponent,
      selectors: [["app-scroll-btn"]],
      decls: 2,
      vars: 2,
      consts: [[1, "scroll-button", 3, "click"], ["src", "./assets/icons/arrow.svg", 1, "arrow"]],
      template: function ScrollBtnComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollBtnComponent_Template_div_click_0_listener() {
            return ctx.scrollTop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", !ctx.showButton);
        }
      },
      styles: [".scroll-button[_ngcontent-%COMP%]{\n  width: 52px;\n  height: 52px;\n  border-radius: 30px;\n  background-color: rgb(224, 129, 25);\n  position: fixed;\n  bottom: 60px;\n  right: 20px;\n  z-index: 10;\n  text-align: center;\n  cursor: pointer;\n  display: block;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  position: relative;\n  top: 8px;\n}\n\n.hidden[_ngcontent-%COMP%]{\n  display: none!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2Nyb2xsLWJ0bi9zY3JvbGwtYnRuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zY3JvbGwtYnRuL3Njcm9sbC1idG4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwtYnV0dG9ue1xuICB3aWR0aDogNTJweDtcbiAgaGVpZ2h0OiA1MnB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAxMjksIDI1KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDYwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICB6LWluZGV4OiAxMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYXJyb3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogOHB4O1xufVxuXG4uaGlkZGVue1xuICBkaXNwbGF5OiBub25lIWltcG9ydGFudDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollBtnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-scroll-btn',
          templateUrl: './scroll-btn.component.html',
          styleUrls: ['./scroll-btn.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/assets/enum/Languages.ts":
  /*!**************************************!*\
    !*** ./src/assets/enum/Languages.ts ***!
    \**************************************/

  /*! exports provided: Languages */

  /***/
  function srcAssetsEnumLanguagesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Languages", function () {
      return Languages;
    });

    var Languages;

    (function (Languages) {
      Languages["EN"] = "en";
      Languages["BG"] = "bg";
    })(Languages || (Languages = {}));
    /***/

  },

  /***/
  "./src/assets/i18n/translations.ts":
  /*!*****************************************!*\
    !*** ./src/assets/i18n/translations.ts ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAssetsI18nTranslationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = {
      apply: "apply",
      home_header_first: "home_header_first",
      home_header_second: "home_header_second",
      home_header_third: "home_header_third",
      start: "start",
      home: "home",
      about_us: "about_us",
      projects: "projects",
      certificates: "certificates",
      contacts: "contacts",
      know_us: "know_us",
      our: "our",
      construction: "construction",
      repair: "repair",
      lets_build: "lets_build",
      together: "together",
      contact_us: "contact_us",
      our_phone: "our_phone",
      our_mail: "our_mail",
      name: "name",
      email: "email",
      idea: "idea",
      send: "send",
      loading: "loading"
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyA-qp6ARD09Wxq-7c35Nax1J13a5UE_sk0",
        authDomain: "vipa-e7d32.firebaseapp.com",
        databaseURL: "https://vipa-e7d32.firebaseio.com",
        projectId: "vipa-e7d32",
        storageBucket: "vipa-e7d32.appspot.com",
        messagingSenderId: "97468280608",
        appId: "1:97468280608:web:dc09cc87a9358e92cf7145"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/vasilandreev/work/vipa/ui/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map