(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+FNG":function(t,a,n){"use strict";n.r(a);var r=n("o0o1"),e=n.n(r);function s(t,a,n,r,e,s,i){try{var o=t[s](i),u=o.value}catch(t){return void n(t)}o.done?a(u):Promise.resolve(u).then(r,e)}function i(t){return function(){var a=this,n=arguments;return new Promise((function(r,e){var i=t.apply(a,n);function o(t){s(i,r,e,o,u,"next",t)}function u(t){s(i,r,e,o,u,"throw",t)}o(void 0)}))}}function o(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,a){if(!t)return;if("string"==typeof t)return u(t,a);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,a)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,a){(null==a||a>t.length)&&(a=t.length);for(var n=0,r=new Array(a);n<a;n++)r[n]=t[n];return r}var p={name:"RialGatewaySettings",data:function(){return{payApi:this.$page.props.user.donation.payir_api,savingPayApi:!1,showPayApiHelp:!0,amounts:o(this.$page.props.user.donation.amounts),savingAmounts:!1,amount:""}},methods:{updatePayApi:function(){var t=this;return i(e.a.mark((function a(){return e.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.savingPayApi=!0,a.next=3,t.$inertia.post(route("donation.settings.gateway-rial.payir-api"),{payir_api:t.payApi},{preserveScroll:!0});case 3:t.savingPayApi=!1;case 4:case"end":return a.stop()}}),a)})))()},addAmount:function(){this.amount&&""!==this.amount&&(this.amounts.push(this.amount),this.updateAmounts())},removeAmount:function(t){this.amounts.splice(t,1),this.updateAmounts()},updateAmounts:function(){var t=this;return i(e.a.mark((function a(){return e.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.savingAmounts=!0,a.next=3,t.$inertia.post(route("donation.settings.gateway-rial.amounts"),{amounts:t.amounts},{preserveScroll:!0});case 3:t.amount="",t.savingAmounts=!1;case 5:case"end":return a.stop()}}),a)})))()}}},l=n("KHd+"),c=Object(l.a)(p,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("donation",[n("div",{staticClass:"bg-yellow-50 border-r-4 border-yellow-500 text-yellow-700 p-4 rounded-sm mb-5"},[n("p",{staticClass:"leading-loose"},[t._v("تمامی پرداخت های ریالی از طریق pay.ir انجام میشه و مبالغ واریزی به کیف پول شما در pay.ir واریز خواهد شد. بنابراین برای انتقال حمایت های دریافتی به حساب بانکیتون باید از طریق پنل کاربری pay.ir اقدام کنید.")])]),t._v(" "),n("v-card",{staticClass:"mb-5"},[n("v-title",{staticClass:"mb-5",attrs:{small:""}},[t._v("تنظیمات درگاه پرداخت")]),t._v(" "),n("div",{staticClass:"bg-blue-50 border-r-4 border-blue-500 text-blue-700 p-4 rounded-sm mb-5"},[n("p",{staticClass:"cursor-pointer",on:{click:function(a){t.showPayApiHelp=!0}}},[t._v("راهنمای دریافت API-Key شبکه پردخت پِی")]),t._v(" "),n("ul",{staticClass:"pr-10 list-disc mt-3",class:{hidden:!t.showPayApiHelp}},[n("li",{staticClass:"mb-2"},[t._v("ابتدا وارد وبسایت\n                    "),n("a",{attrs:{href:"https://pay.ir",target:"_blank"}},[t._v("pay.ir")]),t._v("\n                    بشید و ثبت نام کنید\n                ")]),t._v(" "),n("li",{staticClass:"mb-2"},[t._v("مدارکتون رو ارسال کنید و منتظر بمونید تا تایید بشه")]),t._v(" "),n("li",{staticClass:"mb-2"},[t._v("حساب بانکیتون رو ثبت کنید و منتظر بمونید تا تایید بشه")]),t._v(" "),n("li",{staticClass:"mb-2"},[t._v("درخواست درگاه بدید برای آدرس http://ibio.link و منتظر بمونید تا توسط شاپرک تایید بشه")]),t._v(" "),n("li",{staticClass:"mb-2"},[t._v("بعد از تایید درگاه API-Key دریافت شده رو توی فیلد زیر وارد کنید")]),t._v(" "),n("li",[t._v("راهنمایی بیشتر در اینجا\n                    "),n("a",{attrs:{href:"https://pay.ir/help-center",target:"_blank"}},[t._v("pay.ir/help-center")])])])]),t._v(" "),n("form",{on:{submit:function(a){return a.preventDefault(),t.updatePayApi(a)}}},[n("v-input",{staticClass:"mb-4",attrs:{"input-class":"ltr",name:"name",label:"API-Key شبکه پردخت پِی",error:t.$page.props.errors.payApi&&t.$page.props.errors.payApi.payir_api},model:{value:t.payApi,callback:function(a){t.payApi=a},expression:"payApi"}}),t._v(" "),n("v-button",{staticClass:"mt-5",attrs:{loading:t.savingPayApi},on:{click:t.updatePayApi}},[t._v("ذخیره")])],1)],1),t._v(" "),n("v-card",{staticClass:"mb-5"},[n("v-title",{staticClass:"mb-5",attrs:{small:""}},[t._v("مبالغ حمایتی")]),t._v(" "),n("p",{staticClass:"mb-5"},[t._v("گزینه مبلغ دلخواه بصورت پیشفرض از قبل وجود دارد و در صفحه حمایت نمایش داده میشود")]),t._v(" "),n("div",{staticClass:"mb-5"},t._l(t.$page.props.user.donation.amounts,(function(a,r){return n("div",{staticClass:"inline-flex p-2 rounded-lg items-center justify-between bg-purple-100 text-purple-600 ml-2 mb-2"},[n("div",{staticClass:"ml-4"},[t._v(t._s(t._f("xmoney")(a))+" تومان")]),t._v(" "),n("fa-icon",{staticClass:"cursor-pointer",attrs:{icon:["fas","times"]},on:{click:function(a){return t.removeAmount(r)}}})],1)})),0),t._v(" "),n("form",{on:{submit:function(a){return a.preventDefault(),t.addAmount(a)}}},[n("v-input",{staticClass:"mb-4",attrs:{money:"","input-class":"ltr",name:"amount",label:"مبلغ جدید (تومان)",error:t.$page.props.errors.amounts&&t.$page.props.errors.amounts.amounts},model:{value:t.amount,callback:function(a){t.amount=a},expression:"amount"}}),t._v(" "),n("v-button",{staticClass:"mt-5",attrs:{loading:t.savingAmounts},on:{click:t.addAmount}},[t._v("افزودن مبلغ")])],1)],1)],1)}),[],!1,null,null,null);a.default=c.exports}}]);