(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{T:()=>w});var t={baseUrl:"https://nomoreparties.co/v1/wff-cohort-18",headers:{authorization:"0c3b66f3-c15a-464e-aede-6f266e12a29d","Content-Type":"application/json"}},n=function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))};function r(e){var t=w.querySelector(".places__item").cloneNode(!0),n=t.querySelector(".card__delete-button"),r=t.querySelector(".number__likes"),o=t.querySelector(".card__image"),c=t.querySelector(".card__like-button");return o.src=e.card.link,o.alt=e.card.name,t.querySelector(".card__title").textContent=e.card.name,r.textContent=e.card.likes.length,e.card.likes.some((function(t){return t._id===e.userId}))&&c.classList.add("card__like-button_is-active"),e.card.owner._id!==e.userId?n.style.display="none":n.addEventListener("click",(function(){e.deleteCard(t,e.card._id)})),c.addEventListener("click",(function(){e.likeTheCard(c,r,e.card._id)})),o.addEventListener("click",(function(){e.openImg(e.card)})),t}function o(e,r){(function(e){return fetch("".concat(t.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:t.headers}).then((function(e){return n(e)}))})(r).then((function(){e.remove()})).catch((function(e){console.log(e)}))}function c(e,r,o){var c;e.classList.contains("card__like-button_is-active")?(c=o,fetch("".concat(t.baseUrl,"/cards/likes/").concat(c),{method:"DELETE",headers:t.headers}).then((function(e){return n(e)}))).then((function(t){e.classList.remove("card__like-button_is-active"),r.textContent=t.likes.length})).catch((function(e){console.log(e)})):function(e){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:t.headers}).then((function(e){return n(e)}))}(o).then((function(t){e.classList.add("card__like-button_is-active"),r.textContent=t.likes.length})).catch((function(e){console.log(e)}))}function a(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",l)}function u(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",l)}function i(e){u(e.target)}function l(e){"Escape"===e.key&&u(document.querySelector(".popup_is-opened"))}function s(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n),o.classList.remove(r),o.textContent=""}function d(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n)):(t.disabled=!0,t.classList.add(n))}function p(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);r.disabled=!0,d(n,r,t.inactiveButtonClass),n.forEach((function(n){s(e,n,t.inputErrorClass,t.errorClass),n.setCustomValidity(""),n.value=""}))}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var _,y={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},m=document.forms["new-place"],h=document.forms["new-avatar"],v=document.querySelector(".popup_type_new-avatar"),b=m.querySelector(".popup__input_type_card-name"),S=document.querySelector(".profile__image_container"),q=v.querySelector(".popup__input_type_url"),g=m.querySelector(".popup__input_type_url"),C=document.querySelector(".profile__image"),k=document.querySelector(".popup_type_new-card"),E=document.querySelector(".profile__title"),L=document.querySelector(".profile__description"),x=document.forms["edit-profile"],A=x.querySelector(".popup__input_type_name"),I=x.querySelector(".popup__input_type_description"),w=document.querySelector("#card-template").content,T=document.querySelector(".places__list"),U=document.querySelector(".profile__edit-button"),O=document.querySelector(".profile__add-button"),j=document.querySelectorAll(".popup"),P=document.querySelector(".popup_type_edit"),B=document.querySelector(".popup_type_image"),D=B.querySelector(".popup__image"),M=B.querySelector(".popup__caption"),N=v.querySelector(".popup__button");function J(e,t){t.textContent=e?"Сохранение...":"Сохранение"}function V(e){D.src=e.link,D.alt=e.name,M.textContent=e.name,a(B)}U.addEventListener("click",(function(){a(P),p(x,y),I.value=L.textContent,A.value=E.textContent})),S.addEventListener("click",(function(){a(v),p(h,y)})),O.addEventListener("click",(function(){a(k),p(m,y)})),j.forEach((function(e){e.addEventListener("click",i),e.querySelector(".popup__close").addEventListener("click",(function(){u(e)}))})),x.addEventListener("submit",(function(e){e.preventDefault();var r=A.value,o=I.value;J(!0,P.querySelector(".popup__button")),function(e,r){return fetch("".concat(t.baseUrl,"/users/me"),{method:"PATCH",headers:t.headers,body:JSON.stringify({name:e,about:r})}).then((function(e){return n(e)}))}(r,o).then((function(e){E.textContent=e.name,L.textContent=e.about,u(P)})).catch((function(e){console.log(e)})).finally((function(){J(!1,P.querySelector(".popup__button"))}))})),m.addEventListener("submit",(function(e){e.preventDefault(),J(!0,k.querySelector(".popup__button")),function(e,r){return fetch("".concat(t.baseUrl,"/cards"),{method:"POST",headers:t.headers,body:JSON.stringify({name:e,link:r})}).then((function(e){return n(e)}))}(b.value,g.value).then((function(t){var n=r({card:t,deleteCard:o,likeTheCard:c,openImg:V,userId:_});T.prepend(n),u(k),e.target.reset()})).catch((function(e){console.log(e)})).finally((function(){J(!1,k.querySelector(".popup__button"))}))})),N.addEventListener("click",(function(e){e.preventDefault(),J(!0,h.querySelector(".popup__button"));var r,o=q.value;C.style.backgroundImage=o,N.disabled=!0,(r=o,fetch("".concat(t.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:t.headers,body:JSON.stringify({avatar:r})}).then((function(e){return n(e)}))).then((function(e){C.style.backgroundImage="url('".concat(e.avatar,"')"),u(v),p(h,y)})).catch((function(e){console.log(e)})).finally((function(){J(!1,h.querySelector(".popup__button"))}))})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t,n,r,o,c){var a=Array.from(e.querySelectorAll(t)),u=e.querySelector(o);d(a,u,c),a.forEach((function(t){t.addEventListener("input",(function(){!function(e,t,n,r){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?s(e,t,n,r):function(e,t,n,r,o){var c=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r),c.classList.add(o),c.textContent=n}(e,t,t.validationMessage,n,r)}(e,t,n,r),d(a,u,c)}))}))}(t,e.inputSelector,e.inputErrorClass,e.errorClass,e.submitButtonSelector,e.inactiveButtonClass)}))}(y),Promise.all([fetch("".concat(t.baseUrl,"/users/me"),{headers:t.headers}).then((function(e){return n(e)})),fetch("".concat(t.baseUrl,"/cards"),{headers:t.headers}).then((function(e){return n(e)}))]).then((function(e){var t,n,a=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=a[0],i=a[1];E.textContent=u.name,L.textContent=u.about,C.style.backgroundImage="url('"+u.avatar+"')",function(e,t){e.forEach((function(e){!function(e,t,n,o,c){var a=r({card:e,deleteCard:t,likeTheCard:n,openImg:o,userId:c});T.append(a)}(e,o,c,V,t)}))}(i,_=u._id)})).catch((function(e){console.log(e)}))})();