/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class n{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:r,defineProperty:o,getOwnPropertyDescriptor:h,getOwnPropertyNames:c,getOwnPropertySymbols:d,getPrototypeOf:l}=Object,p=globalThis,u=p.trustedTypes,f=u?u.emptyScript:"",g=p.reactiveElementPolyfillSupport,b=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},m=(t,e)=>!r(t,e),x={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:m};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&o(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const a=s?.call(this);n.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=l(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...c(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of s){const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=s,this[s]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??m)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[b("elementProperties")]=new Map,y[b("finalized")]=new Map,g?.({ReactiveElement:y}),(p.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,S=w.trustedTypes,$=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",U=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+U,C=`<${k}>`,z=document,T=()=>z.createComment(""),I=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,M="[ \t\n\f\r]",_=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,E=/>/g,H=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),O=/'/g,F=/"/g,R=/^(?:script|style|textarea|title)$/i,P=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),L=new WeakMap,W=z.createTreeWalker(z,129);function V(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(e):e}const J=(t,e)=>{const i=t.length-1,s=[];let n,a=2===e?"<svg>":"",r=_;for(let e=0;e<i;e++){const i=t[e];let o,h,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,h=r.exec(i),null!==h);)d=r.lastIndex,r===_?"!--"===h[1]?r=j:void 0!==h[1]?r=E:void 0!==h[2]?(R.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=H):void 0!==h[3]&&(r=H):r===H?">"===h[0]?(r=n??_,c=-1):void 0===h[1]?c=-2:(c=r.lastIndex-h[2].length,o=h[1],r=void 0===h[3]?H:'"'===h[3]?F:O):r===F||r===O?r=H:r===j||r===E?r=_:(r=H,n=void 0);const l=r===H&&t[e+1].startsWith("/>")?" ":"";a+=r===_?i+C:c>=0?(s.push(o),i.slice(0,c)+A+i.slice(c)+U+l):i+U+(-2===c?e:l)}return[V(t,a+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,a=0;const r=t.length-1,o=this.parts,[h,c]=J(t,e);if(this.el=K.createElement(h,i),W.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=W.nextNode())&&o.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(A)){const e=c[a++],i=s.getAttribute(t).split(U),r=/([.?@])?(.*)/.exec(e);o.push({type:1,index:n,name:r[2],strings:i,ctor:"."===r[1]?Q:"?"===r[1]?Y:"@"===r[1]?tt:Z}),s.removeAttribute(t)}else t.startsWith(U)&&(o.push({type:6,index:n}),s.removeAttribute(t));if(R.test(s.tagName)){const t=s.textContent.split(U),e=t.length-1;if(e>0){s.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],T()),W.nextNode(),o.push({type:2,index:++n});s.append(t[e],T())}}}else if(8===s.nodeType)if(s.data===k)o.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(U,t+1));)o.push({type:7,index:n}),t+=U.length-1}n++}}static createElement(t,e){const i=z.createElement("template");return i.innerHTML=t,i}}function X(t,e,i=t,s){if(e===B)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const a=I(e)?void 0:e._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=X(t,n._$AS(t,e.values),n,s)),e}class q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??z).importNode(e,!0);W.currentNode=s;let n=W.nextNode(),a=0,r=0,o=i[0];for(;void 0!==o;){if(a===o.index){let e;2===o.type?e=new G(n,n.nextSibling,this,t):1===o.type?e=new o.ctor(n,o.name,o.strings,this,t):6===o.type&&(e=new et(n,this,t)),this._$AV.push(e),o=i[++r]}a!==o?.index&&(n=W.nextNode(),a++)}return W.currentNode=z,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),I(t)?t===D||null==t||""===t?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==D&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(z.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(V(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new q(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new K(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new G(this.S(T()),this.S(T()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=D}_$AI(t,e=this,i,s){const n=this.strings;let a=!1;if(void 0===n)t=X(this,t,e,0),a=!I(t)||t!==this._$AH&&t!==B,a&&(this._$AH=t);else{const s=t;let r,o;for(t=n[0],r=0;r<n.length-1;r++)o=X(this,s[i+r],e,r),o===B&&(o=this._$AH[r]),a||=!I(o)||o!==this._$AH[r],o===D?t=D:t!==D&&(t+=(o??"")+n[r+1]),this._$AH[r]=o}a&&!s&&this.j(t)}j(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Q extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===D?void 0:t}}class Y extends Z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==D)}}class tt extends Z{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??D)===B)return;const i=this._$AH,s=t===D&&i!==D||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==D&&(i===D||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class et{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const it=w.litHtmlPolyfillSupport;it?.(K,G),(w.litHtmlVersions??=[]).push("3.1.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class st extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new G(e.insertBefore(T(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}st._$litElement$=!0,st.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:st});const nt=globalThis.litElementPolyfillSupport;nt?.({LitElement:st}),(globalThis.litElementVersions??=[]).push("4.0.5");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:m},rt=(t=at,e,i)=>{const{kind:s,metadata:n}=i;let a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),a.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t)},init(e){return void 0!==e&&this.P(s,void 0,t),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ot(t){return(e,i)=>"object"==typeof i?rt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}var ht=function(t,e,i,s){for(var n,a=arguments.length,r=a<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(a<3?n(r):a>3?n(e,i,r):n(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r};let ct=class extends st{constructor(){super(...arguments),this.currentIndex=0,this.carouselItems=[{title:"",contents:"",adImageUrl:""}],this.bannerData={title:"",imageUrl:"",header:"",subHeader:"",description:"",ctaText:""},this.bannerType="banner",this.noOfVisibleCards=4,this.language="en-us",this.dataSource="hackathon",this.isMB=!1,this.carouselTitle="",this.cardType="Freedom",this._isScrolling=!1,this._mb=""}render(){switch(this.bannerType){case"Banner With Text":return P` ${this.getBannerWithText()} `;case"Banner With Image And Text":return P` ${this.getBannerWithImageAndText()} `;case"Carousel":return P` ${this.getCarousel()} `;default:return P`<h2 class="message">Please select banner type</h2>`}}firstUpdated(){this._setCurrentIndexCSSVariable()}_setCurrentIndexCSSVariable(){this.style.setProperty("--current-index",this.currentIndex.toString())}updated(t){t.forEach(((t,e)=>{"bannerData"!==e&&"carouselItems"!==e&&this.propertyValueChanged(t,e)&&("Cms"===this.dataSource?this.getCmsContent():"Kevel"===this.dataSource?this.getKevelContent():"hackathon"===this.dataSource&&this.getHackathonData())})),this.carouselTitle=this.isMB?"es-es"===this.language?"Recomendado para ti":"Recommended for you":"es-es"===this.language?"Propiedades destacadas de The Edit":"Featured properties from The Edit",this._mb=this.isMB?"-mb":"";const e=this.shadowRoot?.querySelector(".contents");e&&this.style.setProperty("--item-width",(parseFloat(getComputedStyle(e)?.getPropertyValue("width")?.replace("px",""))-20*this.noOfVisibleCards)/this.noOfVisibleCards+"px"),this.style.setProperty("--no-of-card-swap",this.noOfVisibleCards.toString())}propertyValueChanged(t,e){return"language"===e?t!=this.language:"dataSource"===e?t!=this.dataSource:"cardType"===e?t!=this.cardType:"noOfVisibleCards"===e?t!=this.noOfVisibleCards:"bannerType"===e&&t!=this.bannerType}getKevelContent(){const t=[],e=this.isMB?"1190311":"1281012",i="Carousel"===this.bannerType?this.isMB?4575:8398:11281,s=this.isMB?259097:311706,n=this.isMB;fetch("https://e-10870.adzerk.net/api/v2",{method:"POST",headers:{"Accept-Language":this.language,"X-Adzerk-Apikey":"03427B90aFAFAa4B95aA003a03BFCDE7B079"},body:JSON.stringify({placements:[{divName:"kevelEntry",siteId:e,count:10,adTypes:[i],zoneIds:[s]}],keywords:[this.cardType]})}).then((t=>t.json())).then((e=>{"Carousel"===this.bannerType?(e?.decisions?.kevelEntry?.forEach((function(e){t.push({title:n?e.contents[0].data.ctadTitle:e.contents[0].data.ctaHeadline,contents:n?e.contents[0].data.ctadSubTitle:e.contents[0].data.ctaDescription,adImageUrl:`https://static.adzerk.net/Advertisers/${n?e.contents[0].data.ctimageUpload:e.contents[0].data.ctImage}`})})),this.carouselItems=t):this.bannerData={title:e?.decisions?.kevelEntry?.[0]?.contents[0]?.data.ctadTitle,imageUrl:`https://static.adzerk.net/Advertisers/${e?.decisions?.kevelEntry?.[0].contents[0].data.ctimageUpload}`,header:e?.decisions?.kevelEntry?.[0]?.contents[0].data.ctadditionalInformation,subHeader:e?.decisions?.kevelEntry?.[0]?.contents[0].data.ctadSubTitle,description:e?.decisions?.kevelEntry?.[0]?.contents[0].data.ctvalidityDescription,ctaText:e?.decisions?.kevelEntry?.[0].contents[0].data.ctaTitle}}))}getHackathonData(){console.log(this.cardType),"Ink"===this.cardType?this.carouselItems=[{contents:"Santa Fé, New Mexico, United States",title:"Rosewood Inn Of The Anasazi",adImageUrl:"https://static.adzerk.net/Advertisers/503dca9a2f844e5a8475be41ea55fe57.jpg"},{contents:"Taos, New Mexico, United States",title:"Hacienda Tepich Casa Vargas",adImageUrl:"https://static.adzerk.net/Advertisers/a4395158adf94d47a576b8022a970827.jpg"},{contents:"Ranchos De Taos, New Mexico, United States",title:"Adobe And Pines Inn Bed And Breakfast",adImageUrl:"https://static.adzerk.net/Advertisers/3f69eeb2bcd14d2daa0c51a7dcac978b.jpg"},{contents:"Artesia, New Mexico, United States",title:"W Mexico City",adImageUrl:"https://static.adzerk.net/Advertisers/c1e03be1394f466199cf1ac84b6c1afa.jpg"},{contents:"Las Cruces, New Mexico, United States",title:"Casa Kearney Holiday Home",adImageUrl:"https://static.adzerk.net/Advertisers/34c9472ee7c34aa39fe38eeea1904ddf.jpg"}]:"Sapphire"===this.cardType?this.carouselItems=[{contents:"Ruidoso, New Mexico, United States",title:"Wine N Pines Holiday Home",adImageUrl:"https://static.adzerk.net/Advertisers/e89c0956718b4107827555b8f29d128f.jpg"},{contents:"Taos, New Mexico, United States",title:"Hummingbird Retreat Hot Tub Foosball Table Wifi",adImageUrl:"https://static.adzerk.net/Advertisers/015b1f759b2d49c987ed7ede010dc6db.jpg"},{contents:"Santa Fé, New Mexico, United States",title:"Bishops Lodge Ranch Resort and Spa",adImageUrl:"https://static.adzerk.net/Advertisers/a8d255315e3144fda6ca17fcc80ab820.jpg"},{contents:"Artesia, New Mexico, United States",title:"Hotel Artesia",adImageUrl:"https://static.adzerk.net/Advertisers/31a11fffc3a44d619b7f334830fb1b37.jpg"},{contents:"Las Cruces, New Mexico, United States",title:"Bellagio Villas",adImageUrl:"https://static.adzerk.net/Advertisers/0b683c0fc8854ca3a7e39b01b70fcf41.jpg"}]:"Freedom"===this.cardType?this.carouselItems=[{contents:"Ruidoso, New Mexico, United States",title:"Casa Del Rey Fireplace Hot Tub Foosball Private",adImageUrl:"https://static.adzerk.net/Advertisers/1083f98bcc814b11a1dc0d5e0b297970.jpg"},{contents:"Taos, New Mexico, United States",title:"Angel Fire Resort",adImageUrl:"https://static.adzerk.net/Advertisers/503dca9a2f844e5a8475be41ea55fe57.jpg"},{contents:"Santa Fé, New Mexico, United States",title:"Camino Cabra Home",adImageUrl:"https://static.adzerk.net/Advertisers/b3cb50e5b39843b9b3bda8e2b9083690.jpg"},{contents:"Angel Fire, New Mexico, United States",title:"Angel Fire Resort",adImageUrl:"https://static.adzerk.net/Advertisers/a4395158adf94d47a576b8022a970827.jpg"},{contents:"Angel Fire, New Mexico, United States",title:"Alpine Gardens",adImageUrl:"https://static.adzerk.net/Advertisers/18edf51894ba4e5381921301de2eb2a6.jpg"}]:"Reserve"===this.cardType&&(this.carouselItems=[{contents:"Ruidoso, New Mexico, United States",title:"Rosewood Inn Of The Anasazi",adImageUrl:"https://static.adzerk.net/Advertisers/f27c28c1c1f24ab382033bcc82566cef.jpg"},{contents:"Taos, New Mexico, United States",title:"Hacienda Sacnicte",adImageUrl:"https://static.adzerk.net/Advertisers/f6070d5478794ffe9c093358eb14aaf2.jpg"},{contents:"Ranchos De Taos, New Mexico, United States",title:"Hotel El Conquistador Del Paseo De Montejo",adImageUrl:"https://static.adzerk.net/Advertisers/d5159bdf7230449ba120fbe49cf04c77.jpg"},{contents:"Artesia, New Mexico, United States",title:"New Downtown LA Luxury Jr. Penthouse",adImageUrl:"https://static.adzerk.net/Advertisers/c1e03be1394f466199cf1ac84b6c1afa.jpg"},{contents:"Las Cruces, New Mexico, United States",title:"Beverly Hills Modern Guesthouse",adImageUrl:"https://static.adzerk.net/Advertisers/b8805a7475634321994dd7cae334b087.jpg"}])}getCmsContent(){const t=[],e="Carousel"===this.bannerType?"Middle Banner":"Bottom Banner",i=this.isMB;fetch(`https://cdn.contentstack.io/v3/content_types/web_component_poc/entries?query={"$and":[{"ad_type": "${e}"},{"program_id": "${this.cardType}"}]}&locale=${this.language}`,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json",api_key:"blt9f0879b5f414c2d0",access_token:"csa82e24fd95deaecf72c60d45",skip:"0",limit:"10",include_count:"true",locale:this.language}}).then((t=>t.json())).then((e=>{"Carousel"===this.bannerType?(e?.entries?.forEach((function(e){t.push({title:e.ad_title,contents:e.ad_sub_title,adImageUrl:i?`${e.image.url}?width=396&height=224`:e.image.url})})),this.carouselItems=t):this.bannerData={title:e?.entries[0]?.title,imageUrl:e?.entries[0]?.image.url,header:e?.entries[0]?.ad_title,subHeader:e?.entries[0]?.ad_sub_title,description:e?.entries[0]?.validity_description,ctaText:e?.entries[0]?.call_to_action_title}}))}getCarousel(){return this.isMB?P` ${this.getCarouselForLF()} `:P` ${this.getCarouselForUF()} `}getCarouselForUF(){return P`
      <div class="main-header-container">
        <div class="main-header">${this.carouselTitle}</div>
        <div class="button">
          <button
            class="btn-prev ${this.currentIndex?"":"hidden"}"
            @click=${()=>this._move("left")}
          >
            <
          </button>
          <button
            class="btn-next ${this.currentIndex*this.noOfVisibleCards>=this.carouselItems?.length-this.noOfVisibleCards?"hidden":""}"
            @click=${()=>this._move("right")}
          >
            >
          </button>
        </div>
      </div>

      <div class="contents" @wheel=${this._swipe}>
        ${this.carouselItems.map((({contents:t,title:e,adImageUrl:i})=>P`
            <article class="article">
              <img class="image" src="${i}" alt="" />
              <div class="carousel-header">${e}</div>
              <div class="carousel-description">${t}</div>
            </article>
          `))}
      </div>
    `}getCarouselForLF(){return P`
      <div class="main-header-container">
        <div class="main-header-mb">${this.carouselTitle}</div>
      </div>
      <div class="container-mb">
        <button
          class="btn-prev-mb ${this.currentIndex?"":"hidden"+this._mb}"
          @click=${()=>this._move("left")}
        >
          <
        </button>
        <div class="contents" @wheel=${this._swipe}>
          ${this.carouselItems?.map((({contents:t,title:e,adImageUrl:i})=>P`
              <article class="article-mb">
                <img class="image-mb" src="${i}" alt="" />
                <div class="carousel-header-mb">${e}</div>
                <div class="carousel-description-mb">${t}</div>
              </article>
            `))}
        </div>
        <button
          class="btn-next-mb ${this.currentIndex*this.noOfVisibleCards>=this.carouselItems?.length-this.noOfVisibleCards?"hidden"+this._mb:""}"
          @click=${()=>this._move("right")}
        >
          >
        </button>
      </div>
    `}getBannerWithText(){return P`
      <div class="container">
        <div class="banner-container">
          <div>${this.bannerData.title}</div>
        </div>
      </div>
    `}getBannerWithImageAndText(){return P`
      <div class="image-text-container">
        <div class="banner-text">
          <div class="header">${this.bannerData.header}</div>
          <div class="sub-header">${this.bannerData.subHeader}</div>
          <p class="description">${this.bannerData.description}</p>
          <a class="cta-text" href="#">${this.bannerData.ctaText}</a>
        </div>
        <div class="banner-image">
          <img src="${this.bannerData.imageUrl}" alt="" style="width:100%;" />
        </div>
      </div>
    `}_move(t){"left"===t?this.currentIndex=this.currentIndex-1>=0?this.currentIndex-1:0:this.currentIndex*this.noOfVisibleCards<this.carouselItems?.length-this.noOfVisibleCards&&(this.currentIndex=this.currentIndex+1<this.carouselItems?.length?this.currentIndex+1:this.carouselItems?.length-1),this._setCurrentIndexCSSVariable()}_swipe(t){const{deltaX:e}=t;if(!this._isScrolling&&0!==e){this._isScrolling=!0;const t=e>0?"right":"left";this._move(t),setTimeout((()=>{this._isScrolling=!1}),500)}}};ct.styles=((t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(s,t,i)})`
    :host {
      --current-index: 0;
      --item-margin: 10px;
      --item-width: 315px;
      --bg-color-override: var(--bg-color, cadetblue);
      --no-of-card-swap: 1;
      font: normal 14px/1.4 Helvetica, Arial, sans-serif;
    }

    .btn-next,
    .btn-prev {
      background: none;
      color: #05257D;
      cursor: pointer;
      font-size: 20px;
      outline: none;
      border-radius: 50%;
      padding: 2px 8px;
      border: 2px solid #05257D;
      margin-bottom: 8px;
    }

    .hidden {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .contents {
      display: flex;
      flex: 1;
      overflow: hidden;
      position: relative;
    }

    .contents::after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
    }

    .article {
      flex-shrink: 0;
      padding: 10px;
      transform: translateX(
        calc(
          var(--current-index) *
            ((var(--item-width) + (2 * var(--item-margin))) * -1) * var(--no-of-card-swap)
        )
      );
      transition: transform 300ms;
      width: var(--item-width);
    }

    .message {
    text-align: center;
    }

    .image {
      width: 100%;
      border-radius: 4px;
    }

    .banner-container {
      font-family: math;
      font-size: 28px;
      line-height: 36px;
      font-weight: 300;
      color: #101820;
      background-color: var(--bg-color-override);
      padding: 12px 24px;
      border-radius: 8px;
    }

    .container {
      width: 100%;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
    }

    .image-text-container {
      display: flex;
      background: #FFF8E8;
      padding: 54px 100px;
    }
    .banner-text {
      padding: 24px 100px 0 0;
    }
    .header {
      padding-bottom: 24px;
      font-family: 'Open Sans', 'Helvetica Neue', helvetica, arial, sans-serif;
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      color: #101820;
    }
    .sub-header {
      padding-bottom: 24px;
      font-family: math;
      font-size: 28px;
      line-height: 36px;
      font-weight: 300;
      color: #101820;
    }
    .description {
      padding-bottom: 24px;
      font-family: 'Open Sans', 'Helvetica Neue', helvetica, arial, sans-serif;
      font-size: 16px;
      line-height: 24px;
    }
    .cta-text {
      padding-bottom: 24px;
      font-family: 'Open Sans', 'Helvetica Neue', helvetica, arial, sans-serif;
      color: #05257D,
      font-size: 16px;
      line-height: 24px;
      font-weight: 600
    }
    .banner-image {
      width: 100%
    }
      .carousel-header {
      font-family: 'Open Sans', 'Helvetica Neue', helvetica, arial, sans-serif;
      font-size: 20px;
      line-height: 30px;
      font-weight: 600;
      color: #31373d;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      padding-top: 12px;
    }
    .carousel-description {
      padding-bottom: 12px;
      font-family: 'Open Sans', 'Helvetica Neue', helvetica, arial, sans-serif;
      font-size: 16px;
      line-height: 24px;
      font-weight: 600;
      color: gray;
    }

    .main-header-container {
      display: flex;
      padding: 12px 0;
    }
    .main-header {
      font-family: Queens-Light, serif;;
      font-size: 32px;
      line-height: 40px;
      font-weight: 400;
      padding: 0 8px;
      flex-grow: 1;
    }
    .button {
       padding-right: 24px;
       display: flex;
       gap: 12px;
    }

    .hidden-mb {
      visibility: hidden;
    }

    .container-mb {
      display: flex;
      flex-direction: row;
    }
        .btn-next-mb,
    .btn-prev-mb {
      background: none;
      color: #757575;
      cursor: pointer;
      font-size: 20px;
      outline: none;
      padding: 2px 8px;
      margin-bottom: 8px;
      border: 1px solid #757575;;
      outline: none;
      border-radius: 4px;
      height: 28px;
      align-self: center;
    }

    .article-mb {
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      border: 1px solid #e1e6ed;
      box-sizing: border-box;
      flex-shrink: 0;
      margin: var(--item-margin);
      transform: translateX(
        calc(
          var(--current-index) *
            ((var(--item-width) + (2 * var(--item-margin))) * -1) * var(--no-of-card-swap)
        )
      );
      transition: transform 300ms;
      width: var(--item-width);
      border-radius: 4px;
    }

    .image-mb {
      width: 100%;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    .carousel-header-mb {
      font-family: 'Open Sans', 'Helvetica Neue', helvetica, arial, sans-serif;
      font-size: 24px;
      line-height: 32px;
      font-weight: 600;
      color: #101820;
      overflow: hidden;
      padding: 24px 24px 0;
    }
    .carousel-description-mb {
      padding: 16px 24px 24px;
      font-family: 'Open Sans', 'Helvetica Neue', helvetica, arial, sans-serif;
      color: #101820;
      font-size: 16px;
      line-height: 24px;
      font-weight: 600;
    }
    .main-header-mb {
      font-family: "Open sans", sans-serif;
      font-size: 28px;
      line-height: 42px;
      font-weight: 600;
      padding: 0 32px;
      flex-grow: 1;
    }
  `,ht([ot()],ct.prototype,"currentIndex",void 0),ht([ot()],ct.prototype,"carouselItems",void 0),ht([ot()],ct.prototype,"bannerData",void 0),ht([ot({type:String,reflect:!0,attribute:"banner-type"})],ct.prototype,"bannerType",void 0),ht([ot({type:Number,reflect:!0,attribute:"no-of-visible-cards"})],ct.prototype,"noOfVisibleCards",void 0),ht([ot({type:String,reflect:!0,attribute:"language"})],ct.prototype,"language",void 0),ht([ot({type:String,reflect:!0,attribute:"data-source"})],ct.prototype,"dataSource",void 0),ht([ot({type:Boolean,reflect:!0,attribute:"is-mb"})],ct.prototype,"isMB",void 0),ht([ot({type:String,reflect:!0,attribute:"carousel-title"})],ct.prototype,"carouselTitle",void 0),ht([ot({type:String,reflect:!0,attribute:"card-type"})],ct.prototype,"cardType",void 0),ct=ht([(t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)})("web-component")],ct);export{ct as WebComponent};
