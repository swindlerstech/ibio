(window.webpackJsonp=window.webpackJsonp||[]).push([[8,16,17],{PHEE:function(e,t,a){"use strict";a.r(t);var s=a("o0o1"),r=a.n(s);function n(e,t,a,s,r,n,i){try{var o=e[n](i),c=o.value}catch(e){return void a(e)}o.done?t(c):Promise.resolve(c).then(s,r)}function i(e){return function(){var t=this,a=arguments;return new Promise((function(s,r){var i=e.apply(t,a);function o(e){n(i,s,r,o,c,"next",e)}function c(e){n(i,s,r,o,c,"throw",e)}o(void 0)}))}}var o={name:"Username",data:function(){return{searchQuery:this.$page.props.user.username,isTyping:!1,isLoading:!1,keyUp:!1,saving:!1,checked:!1}},watch:{searchQuery:_.debounce((function(){this.isTyping=!1}),700),isTyping:function(e){!e&&this.keyUp&&this.searchQuery.length>0&&this.search(this.searchQuery)}},methods:{search:function(e){var t=this;return i(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.isLoading=!0,a.next=3,t.$inertia.post(route("page-settings.info.check-username"),{username:e});case 3:t.keyUp=!1,t.isLoading=!1,t.checked=!0;case 6:case"end":return a.stop()}}),a)})))()},save:function(){var e=this;return i(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.saving=!0,t.next=3,e.$inertia.post(route("page-settings.info.username"),{username:e.searchQuery},{preserveScroll:!0});case 3:e.saving=!1;case 4:case"end":return t.stop()}}),t)})))()}}},c=a("KHd+"),l=Object(c.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-title",{staticClass:"mb-5",attrs:{small:""}},[e._v("نام کاربری")]),e._v(" "),a("form",[a("v-input",{staticClass:"mb-2",attrs:{"input-class":"ltr",name:"username",label:"این فیلد همان آدرس صفحه شماست که به صورت ibio.link/yourname خواهد بود"},on:{keyup:function(t){e.keyUp=!0},input:function(t){e.isTyping=!0}},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}}),e._v(" "),a("div",{staticClass:"text-sm mb-5"},[e.isLoading?a("span",{staticClass:"text-gray-500"},[e._v("درحال بررسی...")]):e.$page.props.errors.username?a("span",{staticClass:"text-red-500"},[e._v(e._s(e.$page.props.errors.username.username))]):e.checked?a("span",{staticClass:"text-green-500"},[e._v("تبریک! نام کاربری مورد نظر موجوده")]):e._e()]),e._v(" "),a("v-button",{attrs:{loading:e.saving,disabled:e.saving||e.isLoading},on:{click:e.save}},[e._v("ذخیره")])],1)],1)}),[],!1,null,null,null);t.default=l.exports},m7kC:function(e,t,a){"use strict";a.r(t);var s=a("o0o1"),r=a.n(s);function n(e,t,a,s,r,n,i){try{var o=e[n](i),c=o.value}catch(e){return void a(e)}o.done?t(c):Promise.resolve(c).then(s,r)}var i={name:"Info",data:function(){return{form:{name:this.$page.props.user.name,name_en:this.$page.props.user.name_en,bio:this.$page.props.user.bio,bio_en:this.$page.props.user.bio_en},saving:!1,fa:!0}},methods:{save:function(){var e,t=this;return(e=r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.saving=!0,e.next=3,t.$inertia.post(route("page-settings.info"),t.form,{preserveScroll:!0,preserveState:!0});case 3:t.saving=!1;case 4:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(s,r){var i=e.apply(t,a);function o(e){n(i,s,r,o,c,"next",e)}function c(e){n(i,s,r,o,c,"throw",e)}o(void 0)}))})()}}},o=a("KHd+"),c=Object(o.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-card",{staticClass:"mb-5"},[a("v-title",{staticClass:"mb-5",attrs:{small:""}},[e._v("تصویر پروفایل")]),e._v(" "),a("div",{staticClass:"flex items-center mb-5"},[a("v-avatar",{ref:"avatar",staticClass:"ml-3 md:ml-5",attrs:{user:e.$page.props.user,size:"w-16 h-16 md:w-20 md:h-20",font:"text-md md:text-2xl",upload:""}}),e._v(" "),a("div",{staticClass:"flex items-center"},[a("v-button",{attrs:{type:"secondary",small:""},on:{click:function(t){return e.$refs.avatar.selectFile()}}},[e._v("آپلود")]),e._v(" "),e.$page.props.user.avatar?a("v-button",{staticClass:"mr-2",attrs:{type:"color",color:"red",small:""},on:{click:function(t){e.$inertia.visit(e.route("page-settings.info.avatar"),{method:"delete"})}}},[a("span",{staticClass:"md:hidden"},[e._v("حذف")]),e._v(" "),a("span",{staticClass:"hidden md:block"},[e._v("حذف تصویر")])]):e._e()],1)],1)],1),e._v(" "),a("v-card",[a("div",{staticClass:"flex items-center justify-between mb-5"},[a("v-title",{attrs:{small:""}},[e._v("اطلاعات عمومی")]),e._v(" "),a("div",{staticClass:"flex items-center justify-end"},[a("span",{staticClass:"w-16 text-left"},[e._v("فارسی")]),e._v(" "),a("label",{staticClass:"switch mx-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.fa,expression:"fa"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.fa)?e._i(e.fa,null)>-1:e.fa},on:{change:function(t){var a=e.fa,s=t.target,r=!!s.checked;if(Array.isArray(a)){var n=e._i(a,null);s.checked?n<0&&(e.fa=a.concat([null])):n>-1&&(e.fa=a.slice(0,n).concat(a.slice(n+1)))}else e.fa=r}}}),e._v(" "),a("span",{staticClass:"slider active"})]),e._v(" "),a("span",{staticClass:"w-16 text-right"},[e._v("انگلیسی")])])],1),e._v(" "),a("form",[e.fa?[a("v-input",{staticClass:"mb-4",attrs:{name:"name",label:"نام من",error:e.$page.props.errors.info&&e.$page.props.errors.info.name},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),a("v-textarea",{attrs:{name:"bio",label:"درباره من",error:e.$page.props.errors.bio&&e.$page.props.errors.info.bio},model:{value:e.form.bio,callback:function(t){e.$set(e.form,"bio",t)},expression:"form.bio"}})]:a("div",{staticClass:"ltr"},[a("v-input",{staticClass:"mb-4",attrs:{name:"name_en",label:"Name",error:e.$page.props.errors.info&&e.$page.props.errors.info.name_en},model:{value:e.form.name_en,callback:function(t){e.$set(e.form,"name_en",t)},expression:"form.name_en"}}),e._v(" "),a("v-textarea",{attrs:{name:"bio_en",label:"Bio",error:e.$page.props.errors.bio_en&&e.$page.props.errors.info.bio_en},model:{value:e.form.bio_en,callback:function(t){e.$set(e.form,"bio_en",t)},expression:"form.bio_en"}})],1),e._v(" "),a("v-button",{staticClass:"mt-5",attrs:{loading:e.saving},on:{click:e.save}},[e._v("ذخیره")])],2)])],1)}),[],!1,null,null,null);t.default=c.exports},wWGE:function(e,t,a){"use strict";a.r(t);var s=a("PHEE"),r={name:"PageInfo",components:{Info:a("m7kC").default,Username:s.default}},n=a("KHd+"),i=Object(n.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("page-settings",[t("username",{staticClass:"mb-5"}),this._v(" "),t("info",{staticClass:"mb-5"})],1)}),[],!1,null,null,null);t.default=i.exports}}]);