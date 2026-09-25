(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,61316,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function({html:e,height:t=null,width:r=null,children:s,dataNtpc:a=""}){return(0,o.useEffect)(()=>{a&&performance.mark("mark_feature_usage",{detail:{feature:`next-third-parties-${a}`}})},[a]),(0,i.jsxs)(i.Fragment,{children:[s,e?(0,i.jsx)("div",{style:{height:null!=t?`${t}px`:"auto",width:null!=r?`${r}px`:"auto"},"data-ntpc":a,dangerouslySetInnerHTML:{__html:e}}):null]})};let i=e.r(43476),o=e.r(71645)},8341,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={cancelIdleCallback:function(){return a},requestIdleCallback:function(){return s}};for(var o in i)Object.defineProperty(r,o,{enumerable:!0,get:i[o]});let s="u">typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},a="u">typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},79520,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return v},handleClientScriptLoad:function(){return m},initScriptLoader:function(){return x}};for(var o in i)Object.defineProperty(r,o,{enumerable:!0,get:i[o]});let s=e.r(55682),a=e.r(90809),n=e.r(43476),l=s._(e.r(74080)),d=a._(e.r(71645)),c=e.r(42732),u=e.r(22737),f=e.r(8341),h=new Map,g=new Set,p=e=>{let{src:t,id:r,onLoad:i=()=>{},onReady:o=null,dangerouslySetInnerHTML:s,children:a="",strategy:n="afterInteractive",onError:d,stylesheets:c}=e,f=r||t;if(f&&g.has(f))return;if(h.has(t)){g.add(f),h.get(t).then(i,d);return}let p=()=>{o&&o(),g.add(f)},m=document.createElement("script"),x=new Promise((e,t)=>{m.addEventListener("load",function(t){e(),i&&i.call(this,t),p()}),m.addEventListener("error",function(e){t(e)})}).catch(function(e){d&&d(e)});s?(m.innerHTML=s.__html||"",p()):a?(m.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",p()):t&&(m.src=t,h.set(t,x)),(0,u.setAttributesFromProps)(m,e),"worker"===n&&m.setAttribute("type","text/partytown"),m.setAttribute("data-nscript",n),c&&(e=>{if(l.default.preinit)return e.forEach(e=>{l.default.preinit(e,{as:"style"})});if("u">typeof window){let t=document.head;e.forEach(e=>{let r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,t.appendChild(r)})}})(c),document.body.appendChild(m)};function m(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,f.requestIdleCallback)(()=>p(e))}):p(e)}function x(e){e.forEach(m),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");g.add(t)})}function T(e){let{id:t,src:r="",onLoad:i=()=>{},onReady:o=null,strategy:s="afterInteractive",onError:a,stylesheets:u,...h}=e,{updateScripts:m,scripts:x,getIsSsr:T,appDir:v,nonce:w}=(0,d.useContext)(c.HeadManagerContext);w=h.nonce||w;let C=(0,d.useRef)(!1);(0,d.useEffect)(()=>{let e=t||r;C.current||(o&&e&&g.has(e)&&o(),C.current=!0)},[o,t,r]);let R=(0,d.useRef)(!1);if((0,d.useEffect)(()=>{if(!R.current){if("afterInteractive"===s)p(e);else"lazyOnload"===s&&("complete"===document.readyState?(0,f.requestIdleCallback)(()=>p(e)):window.addEventListener("load",()=>{(0,f.requestIdleCallback)(()=>p(e))}));R.current=!0}},[e,s]),("beforeInteractive"===s||"worker"===s)&&(m?(x[s]=(x[s]||[]).concat([{id:t,src:r,onLoad:i,onReady:o,onError:a,...h,nonce:w}]),m(x)):T&&T()?g.add(t||r):T&&!T()&&p({...e,nonce:w})),v){if(u&&u.forEach(e=>{l.default.preinit(e,{as:"style"})}),"beforeInteractive"===s)if(!r)return h.dangerouslySetInnerHTML&&(h.children=h.dangerouslySetInnerHTML.__html,delete h.dangerouslySetInnerHTML),(0,n.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${JSON.stringify([0,{...h,id:t}])})`}});else return l.default.preload(r,h.integrity?{as:"script",integrity:h.integrity,nonce:w,crossOrigin:h.crossOrigin}:{as:"script",nonce:w,crossOrigin:h.crossOrigin}),(0,n.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${JSON.stringify([r,{...h,id:t}])})`}});"afterInteractive"===s&&r&&l.default.preload(r,h.integrity?{as:"script",integrity:h.integrity,nonce:w,crossOrigin:h.crossOrigin}:{as:"script",nonce:w,crossOrigin:h.crossOrigin})}return null}Object.defineProperty(T,"__nextScript",{value:!0});let v=T;("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},3303,(e,t,r)=>{t.exports=e.r(79520)},19598,(e,t,r)=>{"use strict";var i=e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.sendGTMEvent=void 0,r.GoogleTagManager=function(e){let{gtmId:t,gtmScriptUrl:r,dataLayerName:i="dataLayer",auth:l,preview:d,dataLayer:c,nonce:u}=e;n=i;let f=new URL(r||"https://www.googletagmanager.com/gtm.js");return t&&f.searchParams.set("id",t),"dataLayer"!==i&&f.searchParams.set("l",i),l&&f.searchParams.set("gtm_auth",l),d&&(f.searchParams.set("gtm_preview",d),f.searchParams.set("gtm_cookies_win","x")),(0,s.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:`
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${c?`w[l].push(${JSON.stringify(c)})`:""}
      })(window,'${i}');`},nonce:u}),(0,o.jsx)(a.default,{id:"_next-gtm","data-ntpc":"GTM",src:f.href,nonce:u})]})};let o=e.r(43476),s=e.r(71645),a=i(e.r(3303)),n="dataLayer";r.sendGTMEvent=(e,t)=>{let r=t||n;window[r]=window[r]||[],window[r].push(e)}},54576,(e,t,r)=>{"use strict";let i;var o=e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.GoogleAnalytics=function(e){let{gaId:t,debugMode:r,dataLayerName:o="dataLayer",nonce:l}=e;return void 0===i&&(i=o),(0,a.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:`
          window['${o}'] = window['${o}'] || [];
          function gtag(){window['${o}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t}' ${r?",{ 'debug_mode': true }":""});`},nonce:l}),(0,s.jsx)(n.default,{id:"_next-ga",src:`https://www.googletagmanager.com/gtag/js?id=${t}`,nonce:l})]})},r.sendGAEvent=function(){void 0===i?console.warn("@next/third-parties: GA has not been initialized"):window[i]?window[i].push(arguments):console.warn(`@next/third-parties: GA dataLayer ${i} does not exist`)};let s=e.r(43476),a=e.r(71645),n=o(e.r(3303))},11349,e=>{"use strict";var t=e.i(57727),r=e.i(71645),i=e.i(18566),o=e.i(98533),o=o,s=e.i(48203);e.s(["default",0,function({children:e}){let[{cache:a,flush:n}]=(0,r.useState)(()=>{let e=(0,s.default)({key:"css"});e.compat=!0;let t=e.insert,r=[];return e.insert=(...i)=>{let o=i[1];return void 0===e.inserted[o.name]&&r.push(o.name),t(...i)},{cache:e,flush:()=>{let e=r;return r=[],e}}});return(0,i.useServerInsertedHTML)(()=>{let e=n();if(0===e.length)return null;let r="";for(let t of e){let e=a.inserted[t];"string"==typeof e&&(r+=e)}return(0,t.jsx)("style",{"data-emotion":`${a.key} ${e.join(" ")}`,dangerouslySetInnerHTML:{__html:r}},a.key)}),(0,t.jsx)(o.C,{value:a,children:e})}],11349)},17257,e=>{"use strict";e.i(58693);var t=e.i(77391),r=e.i(39242),i=e.i(41800),o=e.i(39026),s=e.i(25684),a=e.i(60072),n=e.i(45950),l=e.i(94866);e.s(["Action",()=>t.Action,"Actions",()=>r.Actions,"Body",()=>i.Body,"Header",()=>a.Header,"Inset",()=>l.Inset,"Modal",()=>n.Modal,"SubTitle",()=>s.SubTitle,"Title",()=>o.Title])},8499,e=>{"use strict";e.i(79467),e.i(74070);var t=e.i(63593),r=e.i(76150);e.s(["Colors",()=>r.Colors,"Layers",()=>r.Layers,"Shadows",()=>r.Shadows,"ThemeProvider",()=>t.ThemeProvider,"useTheme",()=>t.useTheme],59797),e.i(59797),e.i(7826);var i=e.i(67449);e.s([],13477),e.i(13477),e.s(["Text",()=>i.Text],17527),e.i(17527),e.i(50764);var o=e.i(21580);e.s([],42814),e.i(42814),e.s(["Spinner",()=>o.Spinner],80663),e.i(80663),e.i(20610);var s=e.i(99966),a=e.i(61895);e.s(["Button",()=>s.Button,"createColorSets",()=>a.createColorSets],16040),e.i(16040),e.i(16173);var n=e.i(17257),l=e.i(49714),d=e.i(84289);e.s(["Modal",0,n,"ModalAnimationState",()=>l.ModalAnimationState,"useModal",()=>d.useModal],8835),e.i(8835);var c=e.i(80672),u=e.i(40203),f=e.i(58918),h=e.i(21690);e.i(41267);var g=e.i(51063),p=e.i(23358);e.s(["Radio",()=>g.Radio,"RadioGroup",()=>p.RadioGroup],20226);var m=e.i(20226);e.i(19905),e.s([],86658),e.i(86658),e.i(65194);var x=e.i(9131),T=e.i(19575),v=e.i(68370),w=e.i(42668),C=e.i(86615),R=e.i(8619),b=e.i(63161),y=e.i(78070),j=e.i(73733),A=e.i(17945),L=e.i(67092),k=e.i(61084),I=e.i(10725),M=e.i(32858),S=e.i(70634),O=e.i(50920),P=e.i(75967),N=e.i(8290),_=e.i(1922),E=e.i(14557),D=e.i(84392),$=e.i(38686),B=e.i(60008),U=e.i(25643),z=e.i(57732),F=e.i(82335),Z=e.i(83739),Y=e.i(803),G=e.i(91247),H=e.i(56948),J=e.i(19525),W=e.i(54972),q=e.i(87095),V=e.i(80600),K=e.i(32751),Q=e.i(90962),X=e.i(22815),ee=e.i(81423),et=e.i(26494),er=e.i(24445),ei=e.i(1543),eo=e.i(98743),es=e.i(92445),ea=e.i(72481),en=e.i(98421),el=e.i(79263),ed=e.i(14585),ec=e.i(52232),eu=e.i(85985),ef=e.i(21496),eh=e.i(84482),eg=e.i(27539),ep=e.i(44449),em=e.i(40031),ex=e.i(85280),eT=e.i(84753),ev=e.i(34756),ew=e.i(51409),eC=e.i(66679),eR=e.i(47628),eb=e.i(69478),ey=e.i(81034),ej=e.i(18408),eA=e.i(99456),eL=e.i(10378),ek=e.i(61268),eI=e.i(84920),eM=e.i(11454),eS=e.i(63977),eO=e.i(19282),eP=e.i(49622),eN=e.i(98147);e.s(["Activity",()=>x.Activity,"Airplay",()=>T.Airplay,"AlertCircle",()=>v.AlertCircle,"AlertOctagon",()=>w.AlertOctagon,"AlertTriangle",()=>C.AlertTriangle,"AlignCenter",()=>R.AlignCenter,"AlignJustify",()=>b.AlignJustify,"AlignLeft",()=>y.AlignLeft,"AlignRight",()=>j.AlignRight,"Anchor",()=>A.Anchor,"Aperture",()=>L.Aperture,"Archive",()=>k.Archive,"ArrowDown",()=>I.ArrowDown,"ArrowDownCircle",()=>M.ArrowDownCircle,"ArrowDownLeft",()=>S.ArrowDownLeft,"ArrowDownRight",()=>O.ArrowDownRight,"ArrowLeft",()=>P.ArrowLeft,"ArrowLeftCircle",()=>N.ArrowLeftCircle,"ArrowRight",()=>_.ArrowRight,"ArrowRightCircle",()=>E.ArrowRightCircle,"ArrowUp",()=>D.ArrowUp,"ArrowUpCircle",()=>$.ArrowUpCircle,"ArrowUpLeft",()=>B.ArrowUpLeft,"ArrowUpRight",()=>U.ArrowUpRight,"AtSign",()=>z.AtSign,"Award",()=>F.Award,"BarChart",()=>Z.BarChart,"BarChart2",()=>Y.BarChart2,"Battery",()=>G.Battery,"BatteryCharging",()=>H.BatteryCharging,"Bell",()=>J.Bell,"BellOff",()=>W.BellOff,"Bluethooth",()=>q.Bluethooth,"Bold",()=>V.Bold,"Book",()=>K.Book,"BookMark",()=>Q.BookMark,"BookOpen",()=>X.BookOpen,"Box",()=>ee.Box,"Briefcase",()=>et.Briefcase,"Calendar",()=>er.Calendar,"Camera",()=>ei.Camera,"CameraOff",()=>eo.CameraOff,"Cast",()=>es.Cast,"Check",()=>ea.Check,"CheckBox",()=>en.CheckBox,"CheckCircle",()=>el.CheckCircle,"CheckInCircle",()=>ed.CheckInCircle,"CheckSquare",()=>ec.CheckSquare,"ChevronDown",()=>eu.ChevronDown,"ChevronDownCircle",()=>ef.ChevronDownCircle,"ChevronLeft",()=>eh.ChevronLeft,"ChevronLeftCircle",()=>eg.ChevronLeftCircle,"ChevronRight",()=>ep.ChevronRight,"ChevronRightCircle",()=>em.ChevronRightCircle,"ChevronUp",()=>ex.ChevronUp,"ChevronUpCircle",()=>eT.ChevronUpCircle,"ChevronUpDown",()=>ev.ChevronUpDown,"ChevronsDown",()=>ew.ChevronsDown,"ChevronsLeft",()=>eC.ChevronsLeft,"ChevronsRight",()=>eR.ChevronsRight,"ChevronsUp",()=>eb.ChevronsUp,"Chrome",()=>ey.Chrome,"Circle",()=>ej.Circle,"Clipboard",()=>eA.Clipboard,"Clock",()=>eL.Clock,"Cloud",()=>ek.Cloud,"CloudDrizzle",()=>eI.CloudDrizzle,"CloudLightning",()=>eM.CloudLightning,"CloudOff",()=>eS.CloudOff,"CloudRain",()=>eO.CloudRain,"CloudSnow",()=>eP.CloudSnow,"X",()=>eN.X],72600);var e_=e.i(72600);e.s(["Icon",0,e_],66755),e.i(66755);var eE=e.i(46864),eD=e.i(42884),e$=e.i(76151);e.i(55959);var eB=e.i(26978);e.s([],4638),e.i(4638),e.s(["Checkbox",()=>eB.Checkbox],5541),e.i(5541);var eU=e.i(1955),ez=e.i(7177),eF=e.i(36308),eZ=e.i(40450),eY=e.i(56621);e.i(76579);var eG=e.i(30478);e.s([],84883),e.i(84883),e.s(["Switch",()=>eG.Switch],8559),e.i(8559),e.i(29303);var eH=e.i(26709);e.s([],37427),e.i(37427),e.s(["Video",()=>eH.Video],93924),e.i(93924);var eJ=e.i(71886),eW=e.i(91268),eq=e.i(96584),eV=e.i(17791),eK=e.i(2292);e.i(65960);var eQ=e.i(60031),eX=e.i(63581);e.s(["Input",()=>eQ.Input,"SearchInput",()=>eX.SearchInput],6792),e.i(6792),e.i(99930);var e0=e.i(58317),e2=e.i(41606);e.s(["Toast",()=>e0.Toast,"ToastProvider",()=>e2.ToastProvider,"useToasts",()=>e2.useToasts],26813),e.i(26813);var e1=e.i(21801);e.i(50019);var e3=e.i(95222),e5=e.i(61680),e4=e.i(38168),e6=e.i(49731),e9=e.i(35505),e8=e.i(74416);e.s(["useControlledState",()=>e3.useControlledState,"useDebounce",()=>e5.useDebounce,"useMount",()=>e8.useMount,"useRect",()=>e4.useRect,"useUniqueId",()=>e6.useUniqueId,"useWindowSize",()=>e9.useWindowSize],34444),e.i(34444),e.s(["Badge",()=>eq.Badge,"Button",()=>s.Button,"Capacity",()=>eW.Capacity,"Checkbox",()=>eB.Checkbox,"Collapse",()=>eJ.Collapse,"CollapseGroup",()=>eJ.CollapseGroup,"Colors",()=>r.Colors,"Container",()=>c.Container,"Footer",()=>eV.Footer,"FooterGroup",()=>eV.FooterGroup,"FooterLink",()=>eV.FooterLink,"Icon",()=>e_,"Image",()=>e1.ImageComponent,"Input",()=>eQ.Input,"Layers",()=>r.Layers,"LoadingDots",()=>eZ.LoadingDots,"Modal",()=>n,"ModalAnimationState",()=>l.ModalAnimationState,"Note",()=>eY.Note,"Progress",()=>eF.Progress,"Radio",0,m,"SearchInput",()=>eX.SearchInput,"Select",()=>f.Select,"Shadows",()=>r.Shadows,"ShowMore",()=>eU.ShowMore,"Snippet",()=>ez.Snippet,"Spacer",()=>h.Spacer,"Spinner",()=>o.Spinner,"Switch",()=>eG.Switch,"Tabs",()=>eE.Tabs,"Tag",()=>eD.Tag,"Tags",()=>e$.Tags,"Text",()=>i.Text,"ThemeProvider",()=>t.ThemeProvider,"Toast",()=>e0.Toast,"ToastProvider",()=>e2.ToastProvider,"Toggle",()=>u.Toggle,"Tooltip",()=>eK.Tooltip,"Video",()=>eH.Video,"createColorSets",()=>a.createColorSets,"useCollapseContext",()=>eJ.useCollapseContext,"useControlledState",()=>e3.useControlledState,"useDebounce",()=>e5.useDebounce,"useModal",()=>d.useModal,"useMount",()=>e8.useMount,"useRect",()=>e4.useRect,"useTheme",()=>t.useTheme,"useToasts",()=>e2.useToasts,"useUniqueId",()=>e6.useUniqueId,"useWindowSize",()=>e9.useWindowSize],8499)},5949,e=>{"use strict";var t=e.i(57727),r=e.i(84364),i=e.i(22013);let o=(0,r.keyframes)("from{opacity:0;}to{opacity:1;}"),s=(0,i.default)("div",{target:"e5ef8y20"})("animation:",o," 0.2s ease;");e.s(["Loader",0,({children:e})=>(0,t.jsx)(s,{children:e})])},53482,(e,t,r)=>{t.exports=JSON.parse('[{"slug":"/posts/MikroORM-배치-사용기/","timeToRead":4,"frontmatter":{"title":"MikroORM 배치 사용기","date":"2025-03-10T15:23:12.000Z","tags":["MikroORM","NestJs"],"image":"/posts/posts/MikroORM-배치-사용기/assets/1.png","series":"MikroORM 사용기","draft":false}},{"slug":"/posts/book/review/오픈-비즈니스패권의-열쇠/","timeToRead":1,"frontmatter":{"title":"오픈 비즈니스 패권의 열쇠","date":"2024-12-22T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/book/review/비전공자도-배울-수-있는-타입스크립트/","timeToRead":1,"frontmatter":{"title":"비전공자도 배울 수 있는 타입스크립트","date":"2024-11-14T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/book/review/테라폼으로-시작하는-IaC/","timeToRead":1,"frontmatter":{"title":"테라폼으로 시작하는 IaC","date":"2024-10-16T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/book/review/코드-밖-커뮤니케이션/","timeToRead":1,"frontmatter":{"title":"코드 밖 커뮤니케이션","date":"2024-09-22T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/book/review/NGINX-쿡북/","timeToRead":1,"frontmatter":{"title":"NGINX 쿡북","date":"2024-08-14T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/book/review/처음-시작하는-FastAPI/","timeToRead":2,"frontmatter":{"title":"처음 시작하는 FastAPI","date":"2024-07-23T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/book/review/업무에-활용하는-nodejs/","timeToRead":1,"frontmatter":{"title":"업무에 활용하는 Node.js","date":"2024-06-10T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/book/review/한권으로-배우는-도커&쿠버네티스/","timeToRead":1,"frontmatter":{"title":"한 권으로 배우는 도커 & 쿠버네티스","date":"2024-05-17T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/book/review/도시를-만드는-기술-이야기/","timeToRead":1,"frontmatter":{"title":"도시를 만드는 기술 이야기","date":"2024-04-10T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/book/가상-면접-사례-솔루션/1장/","timeToRead":2,"frontmatter":{"title":"사용자 수에 따른 규모 확장성","date":"2024-03-13T15:23:12.000Z","tags":["책 스터디"],"image":null,"series":"가상 면접 사례로 배우는 대규모 시스템 설계 기초","draft":true}},{"slug":"/posts/book/review/게임AI를-위한-탐색-알고리즘/","timeToRead":1,"frontmatter":{"title":"게임 AI를 위한 탐색 알고리즘","date":"2024-03-12T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/블로그-이관/","timeToRead":1,"frontmatter":{"title":"블로그 이관","date":"2024-02-15T23:45:08.000Z","tags":["블로그 이관"],"image":"/posts/posts/블로그-이관/assets/0.jpeg","series":null,"draft":false}},{"slug":"/posts/TIL/2023/2023-12/프로젝트-회고/","timeToRead":2,"frontmatter":{"title":"2023 사내 프로젝트 회고","date":"2023-12-26T15:23:12.000Z","tags":["회고"],"image":null,"series":"배포 회고","draft":false}},{"slug":"/posts/TIL/2023/2023-12/나무늘보-프롬프트/","timeToRead":1,"frontmatter":{"title":"GPT-4 나무늘보 프롬프트","date":"2023-12-16T15:23:12.000Z","tags":["GPT-4"],"image":null,"series":"프롬프트","draft":false}},{"slug":"/posts/TIL/2023/2023-12/채팅-리서치/","timeToRead":2,"frontmatter":{"title":"채팅 구현 관련 서비스 리서치","date":"2023-12-13T15:23:12.000Z","tags":["채팅"],"image":null,"series":"리서치 기록","draft":false}},{"slug":"/posts/TIL/2023/2023-12/NestJs/Request-LifeCycle/","timeToRead":2,"frontmatter":{"title":"NestJs - Request LifeCycle","date":"2023-12-11T15:23:12.000Z","tags":["NestJs"],"image":null,"series":"NestJs 개념 정리","draft":false}},{"slug":"/posts/TIL/2023/2023-12/NestJs/LifeCycle/","timeToRead":2,"frontmatter":{"title":"NestJs - LifeCycle","date":"2023-12-09T15:23:12.000Z","tags":["NestJs"],"image":null,"series":"NestJs 개념 정리","draft":false}},{"slug":"/posts/TIL/2023/2023-12/DirtyChecking/","timeToRead":1,"frontmatter":{"title":"더티 체킹","date":"2023-12-03T15:23:12.000Z","tags":["SpringJPA"],"image":null,"series":null,"draft":false}},{"slug":"/posts/TIL/2023/2023-11/NestJs/Pipes/","timeToRead":2,"frontmatter":{"title":"NestJs - Pipes","date":"2023-11-30T15:23:12.000Z","tags":["NestJs"],"image":null,"series":"NestJs 개념 정리","draft":false}},{"slug":"/posts/TIL/2023/2023-11/Nginx/","timeToRead":2,"frontmatter":{"title":"Docker-compose, Nginx와 함께하는 무중단 배포","date":"2023-11-16T15:23:12.000Z","tags":["NGINX"],"image":null,"series":"배포 회고","draft":false}},{"slug":"/posts/TIL/2023/2023-11/NestJs/MetaData/","timeToRead":1,"frontmatter":{"title":"NestJs - MetaData","date":"2023-11-09T15:23:12.000Z","tags":["NestJs"],"image":null,"series":"NestJs 개념 정리","draft":false}},{"slug":"/posts/TIL/2023/2023-11/AWS - EBS용량관리/","timeToRead":1,"frontmatter":{"title":"AWS - EBS 용량 관리","date":"2023-11-06T15:23:12.000Z","tags":["AWS"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-11/NestJs/DynamicModule/","timeToRead":1,"frontmatter":{"title":"NestJs - Dynamic Module","date":"2023-11-03T15:23:12.000Z","tags":["NestJs"],"image":null,"series":"NestJs 개념 정리","draft":false}},{"slug":"/posts/TIL/2023/2023-10/OpenTelemetry/메트릭/","timeToRead":1,"frontmatter":{"title":"OpenTelemetry  - 메트릭","date":"2023-10-30T15:23:12.000Z","tags":["관찰가능성"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/사이드프로젝트-배포-회고/","timeToRead":3,"frontmatter":{"title":"사이드 프로젝트 배포 회고","date":"2023-10-23T15:23:12.000Z","tags":["사이드 프로젝트"],"image":null,"series":"배포 회고","draft":false}},{"slug":"/posts/TIL/2023/2023-10/OpenTelemetry/시그널-분산추적/","timeToRead":2,"frontmatter":{"title":"OpenTelemetry 시그널 - 분산 추적","date":"2023-10-21T15:23:12.000Z","tags":["관찰가능성"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-10/OpenTelemetry/컨텍스트-전파/","timeToRead":1,"frontmatter":{"title":"OpenTelemetry - 컨텍스트 전파","date":"2023-10-16T15:23:12.000Z","tags":["관찰가능성"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-10/OpenTelemetry/파이프라인-리소스/","timeToRead":2,"frontmatter":{"title":"OpenTelemetry - 파이프라인, 리소스","date":"2023-10-14T15:23:12.000Z","tags":["관찰가능성"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-10/OpenTelemetry/","timeToRead":1,"frontmatter":{"title":"OpenTelemetry","date":"2023-10-11T15:23:12.000Z","tags":["관찰가능성"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-10/제3자-결제-애플/","timeToRead":5,"frontmatter":{"title":"관찰 가능성 엔지니어링 & 제 3자 결제 - 애플","date":"2023-10-10T15:23:12.000Z","tags":["관찰가능성","제3자-결제"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-10/제3자-결제-구글/","timeToRead":2,"frontmatter":{"title":"제 3자 결제 - 구글","date":"2023-10-04T15:23:12.000Z","tags":["제3자-결제"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-10/PortOne-웹훅/","timeToRead":2,"frontmatter":{"title":"PortOne - 웹훅","date":"2023-10-03T15:23:12.000Z","tags":["PortOne"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-10/PortOne-인증결제/","timeToRead":1,"frontmatter":{"title":"PortOne - 인증결제","date":"2023-10-01T15:23:12.000Z","tags":["PortOne"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/book/대용량-DB-솔루션/1장/","timeToRead":2,"frontmatter":{"title":"대용량 DB 솔루션 1장 정리","date":"2023-09-28T15:23:12.000Z","tags":["책 스터디"],"image":null,"series":"대용량 DB 솔루션","draft":false}},{"slug":"/posts/TIL/2023/2023-09/PortOne/","timeToRead":1,"frontmatter":{"title":"PortOne - 비인증결제 정리","date":"2023-09-25T15:23:12.000Z","tags":["PortOne"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-09/인앱-결제/환불/","timeToRead":1,"frontmatter":{"title":"인앱 결제 환불 정리","date":"2023-09-23T15:23:12.000Z","tags":["인앱결제"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-09/인앱-결제/","timeToRead":2,"frontmatter":{"title":"인앱 결제 정리","date":"2023-09-21T15:23:12.000Z","tags":["인앱결제"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-09/SRE/","timeToRead":1,"frontmatter":{"title":"SRE (Site Reliability Engineering) 개념","date":"2023-09-20T15:23:12.000Z","tags":["SRE"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-09/SQL-INTERSECT/","timeToRead":1,"frontmatter":{"title":"SQL - INTERSECT","date":"2023-09-19T15:23:12.000Z","tags":["SQL"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-09/SQL-UNION-ALL/","timeToRead":1,"frontmatter":{"title":"SQL - UNION / UNION ALL","date":"2023-09-17T15:23:12.000Z","tags":["SQL"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-09/MongoDB-local-참가-후기/","timeToRead":1,"frontmatter":{"title":"MongoDB.local Seoul 짧은 참가 후기","date":"2023-09-14T15:23:12.000Z","tags":["MongoDB"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-09/OLTP VS OLAP/","timeToRead":1,"frontmatter":{"title":"OLTP vs OLAP","date":"2023-09-13T15:23:12.000Z","tags":["Processing System"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-09/TypeORM-Upsert-중복제거/","timeToRead":1,"frontmatter":{"title":"TypeORM orIgnore 메소드 Upsert시 중복 데이터 INSERT 검증 방식 변경","date":"2023-09-12T03:23:12.000Z","tags":["TypeORM"],"image":null,"series":"TIL","draft":false}}]')},40710,e=>{"use strict";var t=e.i(57727);e.i(79467);var r=e.i(80672),i=e.i(71645),o=e.i(84364),s=e.i(22013);let a=(0,s.default)("div",{target:"ec9pp6w0"})("min-height:100vh;",({theme:e})=>o.css`
    color: ${e.colors.PRIMARY.FOREGROUND};
    background: ${e.colors.PRIMARY.BACKGROUND};
  `),n=(0,s.default)("main",{target:"ec9pp6w1"})("display:flex;flex-direction:column;justify-content:space-between;width:calc(100vw - 400px);min-height:calc(100vh - 43px);margin-top:43px;margin-left:400px;",({theme:e,fold:t})=>o.css`
    background: ${e.colors.PRIMARY.BACKGROUND};
    ${t&&o.css`
      width: calc(100vw - 80px);
      margin-left: 80px;
    `}
  `,"  @media screen and (max-width:1024px){margin-left:0;margin-top:123px;width:100%;}"),l=(0,s.default)("article",{target:"ec9pp6w2"})(({theme:e})=>o.css`
    a {
      cursor: pointer;
      border-bottom: 2px solid ${e.colors.CYAN.DEFAULT};
      font-weight: 600;
      text-decoration: none;
      color: ${e.colors.PRIMARY.FOREGROUND};
      transition: all 0.1s ease-out;

      &:hover {
        background: ${e.colors.CYAN.DEFAULT};
        border-top: 2px solid ${e.colors.CYAN.DEFAULT};
        color: ${e.colors.PRIMARY.BACKGROUND};
      }
    }
  `);var d=e.i(17257),d=d,c=e.i(21690),u=e.i(67449),f=e.i(40203);let h=(0,s.default)("header",{target:"eg4ejn30"})("display:flex;justify-content:space-between;align-items:center;position:fixed;left:400px;top:0;width:calc(100% - 400px);height:43px;padding:0 1rem;box-sizing:border-box;",({theme:e,fold:t})=>o.css`
    z-index: ${e.layers.AFTER_STANDARD};
    background-color: ${e.colors.PRIMARY.ACCENT_1};
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);

    ${t&&o.css`
      width: calc(100% - 80px) !important;
      left: 80px;
    `}
  `,"  @media screen and (max-width:1024px){left:0;width:100% !important;}"),g=(0,s.default)("button",{target:"eg4ejn31"})("cursor:pointer;border:none;background:none;outline:none;padding:0;margin:0;height:18px;transition:color 0.2s cubic-bezier(0.215,0.61,0.355,1);",({theme:e,fold:t})=>o.css`
    ${t?o.css`
          color: ${e.colors.CYAN.DEFAULT};
        `:o.css`
          &:hover {
            color: ${e.colors.PRIMARY.FOREGROUND};
          }
          color: ${e.colors.PRIMARY.ACCENT_4};
        `}
  `,"  @media screen and (max-width:1024px){display:none;& + span{display:none;}}"),p=(0,s.default)("button",{target:"eg4ejn32"})("cursor:pointer;border:none;background:none;outline:none;padding:0;margin:0;height:18px;transition:color 0.2s cubic-bezier(0.215,0.61,0.355,1);",({theme:e,popup:t})=>o.css`
    ${t?o.css`
          color: ${e.colors.CYAN.DEFAULT};
        `:o.css`
          &:hover {
            color: ${e.colors.PRIMARY.FOREGROUND};
          }
          color: ${e.colors.PRIMARY.ACCENT_4};
        `}
  `),m=(0,s.default)("div",{target:"eg4ejn33"})("display:flex;justify-content:center;align-items:center;",({theme:e})=>o.css`
    color: ${e.colors.PRIMARY.FOREGROUND};
  `,"  & > label{margin:0 12px;}"),x=(0,s.default)("div",{target:"eg4ejn34"})("display:flex;flex-direction:column;align-items:flex-start;"),T=(0,s.default)("div",{target:"eg4ejn35"})("position:relative;width:100%;height:10px;border-radius:5px;margin:0.5rem 0;",({theme:e})=>o.css`
    background-color: ${e.colors.PRIMARY.ACCENT_2};
  `),v=(0,s.default)("div",{target:"eg4ejn36"})("position:absolute;width:12px;height:12px;border-radius:10px;transform:translate(-50%,-50%);cursor:pointer;",({theme:e,idx:t,max:r,value:i,selected:s})=>o.css`
    left: ${t/(r-1)*100}%;
    top: 50%;
    background-color: ${s===i?e.colors.CYAN.DEFAULT:e.colors.PRIMARY.ACCENT_8};

    &:first-of-type {
      left: 1.5%;
    }

    &:last-of-type {
      right: 95%;
    }

    &::after {
      content: '${i}';
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      top: 30px;
    }
  `);var w=e.i(63593),C=e.i(32832);e.s(["get",0,function(e){return window.localStorage.getItem(e)},"set",0,function(e,t){window.localStorage.setItem(e,t)}],84131);var R=e.i(84131),R=R;let b=[14,16,18,20],y=e=>{let{fold:r,folding:o,dialog:s,textSize:a,mode:n,openDialog:l,closeDialog:C,changeTheme:y,changeTextSize:j}=(e=>{let t=(0,w.useTheme)(),[r,o]=(0,i.useState)("LIGHT"),[s,a]=(0,i.useState)({visible:!1,type:"SETTING"}),[n,l]=(0,i.useState)(16);return(0,i.useEffect)(()=>{var e;let t,r;o(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"DARK":"LIGHT");let i=R.get("text-size");return i||(R.set("text-size","16"),i="16"),l(parseInt(i,10)||16),e=e=>{o(e)},t=window.matchMedia("(prefers-color-scheme: dark)"),r=t=>{e(t.matches?"DARK":"LIGHT")},t.addEventListener("change",r),()=>t.removeEventListener("change",r)},[]),(0,i.useEffect)(()=>{r&&(document.body.style.backgroundColor="DARK"===r?"#000":"#fff",t.state.changeTheme(r))},[r]),(0,i.useEffect)(()=>{if(document?.body?.parentElement){if(16===n){document.body.parentElement.style.fontSize="";return}document.body.parentElement.style.fontSize=`${n}px`}},[n]),{...e,mode:r,textSize:n,dialog:s,openDialog:function(e){a({visible:!0,type:e})},closeDialog:function(){a(e=>({...e,visible:!1}))},changeTheme:function(e){o(e)},changeTextSize:function(e){R.set("text-size",e.toString()),l(e)}}})(e);return(0,t.jsxs)(h,{fold:r,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(g,{fold:r,onClick:o,children:(0,t.jsxs)("svg",{viewBox:"0 0 24 24",width:"18",height:"18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:[(0,t.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),(0,t.jsx)("path",{d:"M9 3v18"})]})}),(0,t.jsx)(c.Spacer,{}),(0,t.jsx)(p,{popup:s.visible,onClick:()=>A("SETTING"),children:(0,t.jsxs)("svg",{viewBox:"0 0 24 24",width:"18",height:"18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"3"}),(0,t.jsx)("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"})]})})]}),(0,t.jsxs)(m,{children:[(0,t.jsxs)("svg",{viewBox:"0 0 24 24",width:"18",height:"18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"5"}),(0,t.jsx)("path",{d:"M12 1v2"}),(0,t.jsx)("path",{d:"M12 21v2"}),(0,t.jsx)("path",{d:"M4.22 4.22l1.42 1.42"}),(0,t.jsx)("path",{d:"M18.36 18.36l1.42 1.42"}),(0,t.jsx)("path",{d:"M1 12h2"}),(0,t.jsx)("path",{d:"M21 12h2"}),(0,t.jsx)("path",{d:"M4.22 19.78l1.42-1.42"}),(0,t.jsx)("path",{d:"M18.36 5.64l1.42-1.42"})]}),(0,t.jsx)(f.Toggle,{toggle:"DARK"===n,size:"medium",onChange:function(e){e?y("DARK"):y("LIGHT")},color:"pink"}),(0,t.jsx)("svg",{viewBox:"0 0 24 24",width:"18",height:"18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:(0,t.jsx)("path",{d:"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"})})]}),(0,t.jsxs)(d.Modal,{active:s.visible,children:[(0,t.jsx)(d.Body,{children:(0,t.jsxs)(d.Header,{children:[(0,t.jsx)(d.Title,{children:"설정"}),(0,t.jsx)(c.Spacer,{y:2}),(0,t.jsxs)(x,{children:[(0,t.jsx)(u.Text,{weight:500,children:"텍스트 크기"}),(0,t.jsx)(T,{children:b.map((e,r,i)=>(0,t.jsx)(v,{value:e,idx:r,max:i.length,onClick:()=>{j(e)},selected:a},r))})]})]})}),(0,t.jsx)(d.Actions,{children:(0,t.jsx)(d.Action,{onClick:()=>A("SETTING"),children:(0,t.jsx)(u.Text,{children:"닫기"})})})]})]});function A(e){s.visible?C():l(e)}};var R=R,j=e.i(17791),A=e.i(22016);let L=(0,s.default)("div",{target:"edxgfyy0"})(({theme:e})=>o.css`
    @media screen and (min-width: 1025px) {
      width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      border-top: 1px solid ${e.colors.PRIMARY.ACCENT_2};

      & > footer {
        width: 900px;
        box-sizing: border-box;
        padding: 2rem 2rem 1rem 2rem;
        border-top: none;

        & > nav {
          justify-content: flex-start;
          gap: 2rem;
        }
      }
      background: ${e.colors.PRIMARY.ACCENT_1};
    }
  `),k=(0,s.default)("div",{target:"edxgfyy1"})("display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:60px;",({theme:e})=>o.css`
    background: ${e.colors.PRIMARY.ACCENT_1};
    color: ${e.colors.PRIMARY.ACCENT_3};

    & a {
      color: ${e.colors.PRIMARY.FOREGROUND};
      text-decoration: none;
    }
  `),I=()=>{let e=new Date().getFullYear();return(0,t.jsxs)("div",{children:[(0,t.jsx)(L,{children:(0,t.jsxs)(j.Footer,{children:[(0,t.jsxs)(j.FooterGroup,{title:"사이트 맵",children:[(0,t.jsx)(j.FooterLink,{custom:!0,children:(0,t.jsx)(A.default,{href:"/",children:"홈"})}),(0,t.jsx)(j.FooterLink,{custom:!0,children:(0,t.jsx)(A.default,{href:"/posts",children:"포스트"})}),(0,t.jsx)(j.FooterLink,{custom:!0,children:(0,t.jsx)(A.default,{href:"/resume",children:"이력서"})})]}),(0,t.jsxs)(j.FooterGroup,{title:"관련 사이트",children:[(0,t.jsx)(j.FooterLink,{href:"https://eight20.tistory.com",children:"다른 블로그"}),(0,t.jsx)(j.FooterLink,{href:"http://techeer.net",children:"Techeer"}),(0,t.jsx)(j.FooterLink,{href:"https://medium.com/team-joon",children:"Techeer 기술블로그"})]})]})}),(0,t.jsxs)(k,{children:[(0,t.jsxs)(u.Text,{size:12,children:["Copyright ⓒ ",e," ",(0,t.jsx)(A.default,{href:"https://justsloth.com",children:"Dylan"})," All rights reserved."]}),(0,t.jsx)(c.Spacer,{y:.1}),(0,t.jsxs)(u.Text,{size:12,children:["Created by ",(0,t.jsx)(A.default,{href:"https://justsloth.com",children:"@Dylan"}),". Powered By"," ",(0,t.jsx)("a",{href:"https://github.com/Vallista/vallista-land",children:"@Vallista-land"})]}),(0,t.jsx)(c.Spacer,{y:.5})]})]})};var M=e.i(2292),S=e.i(35505),O=e.i(18566);let P=(0,s.default)("aside",{target:"e1buqd4v0"})("position:fixed;top:0;left:0;",({theme:e})=>o.css`
    background: ${e.colors.PRIMARY.ACCENT_2};
    z-index: ${e.layers.AFTER_STANDARD+1};
  `,"  @media screen and (min-width:1025px){min-width:80px;height:100vh;}@media screen and (max-width:1024px){top:43px;min-height:60px;width:100vw;overflow-y:hidden;overflow-x:auto;scrollbar-width:8px;scrollbar-color:var(--scrollbar-thumb) var(--scrollbar-background);&::-webkit-scrollbar{background:var(--scrollbar-background);height:8px;width:8px;}&::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb);border-radius:0;}}"),N=(0,s.default)("section",{target:"e1buqd4v1"})("display:flex;justify-content:space-between;align-items:center;@media screen and (min-width:1025px){flex-direction:column;height:100vh;}@media screen and (max-width:1024px){flex-direction:row;}"),_=(0,s.default)("nav",{target:"e1buqd4v2"})("@media screen and (max-width:1024px){display:flex;flex-direction:row;}"),E=(0,s.default)("a",{target:"e1buqd4v3"})("position:relative;display:flex;justify-content:center;align-items:center;width:80px;height:80px;cursor:pointer;transition:background 0.2s ease;& > div > div > div > svg{width:32px;height:32px;}@media screen and (max-width:1024px){width:60px;height:60px;& > figure{width:40px;height:40px;border-radius:12px;overflow:hidden;}& > svg{width:24px;height:24px;}}& > div{width:inherit;height:inherit;& img{border-radius:12px;}}",({theme:e,checked:t})=>o.css`
    & > div > div:first-of-type {
      width: inherit;
      height: inherit;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${e.colors.PRIMARY.FOREGROUND};
    }

    &:hover {
      background: ${e.colors.PRIMARY.ACCENT_3};
    }

    &:hover > div > div:first-of-type {
      color: ${e.colors.PRIMARY.BACKGROUND};
    }

    ${t&&o.css`
      &:before {
        position: absolute;
        left: 0;
        top: 0;
        width: 80px;
        height: 80px;
        content: '';
        border-left: 3px solid ${e.colors.CYAN.DEFAULT};
        box-sizing: border-box;

        @media screen and (max-width: 1024px) {
          width: 60px;
          height: 60px;
          border-left: none;

          border-bottom: 3px solid ${e.colors.CYAN.DEFAULT};
        }
      }
    `}
  `);var D=e.i(21801);let $={me:{name:"제가 궁금하세요?",icon:(0,t.jsx)(D.ImageComponent,{src:"/profile.jpg",width:55,height:55}),link:"/resume"},home:{name:"홈으로 갑니다!",icon:(0,t.jsxs)("svg",{viewBox:"0 0 24 24",width:"32",height:"32",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:[(0,t.jsx)("path",{d:"M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"}),(0,t.jsx)("path",{d:"M9 22V12h6v10"})]}),link:"/"},posts:{name:"제가 쓴 글을 보세요!",icon:(0,t.jsx)("svg",{viewBox:"0 0 24 24",width:"32",height:"32",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:(0,t.jsx)("path",{d:"M2.707 7.454V5.62C2.707 4.725 3.469 4 4.409 4h4.843c.451 0 .884.17 1.204.474l.49.467c.126.12.296.186.473.186h8.399c.94 0 1.55.695 1.55 1.59v.737m-18.661 0h-.354a.344.344 0 00-.353.35l.508 11.587c.015.34.31.609.668.609h17.283c.358 0 .652-.269.667-.61L22 7.805a.344.344 0 00-.353-.35h-.278m-18.662 0h18.662"})}),link:"/posts"}},B={github:{name:"Github",icon:(0,t.jsx)("svg",{viewBox:"0 0 24 24",width:"32",height:"32",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:(0,t.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"})}),link:"https://github.com/HyunTaek5"},secondary:{name:"LinkedIn",icon:(0,t.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 24 24",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",strokeWidth:"1.55",shapeRendering:"geometricPrecision",children:[(0,t.jsx)("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),(0,t.jsx)("rect",{x:"2",y:"9",width:"4",height:"12"}),(0,t.jsx)("circle",{cx:"4",cy:"4",r:"2"})]}),link:"https://www.linkedin.com/in/dylanoh"}},U=()=>{let e=(0,O.usePathname)(),r=(0,O.useRouter)(),o=(0,i.useMemo)(()=>Object.values($),[]),s=(0,i.useMemo)(()=>Object.values(B),[]),[a,n]=(0,i.useState)(!0),l=(0,S.useWindowSize)();return(0,i.useEffect)(()=>{n(!((l.width??0)<=1024))},[l]),(0,t.jsx)(P,{children:(0,t.jsxs)(N,{children:[(0,t.jsx)(_,{children:o.map(r=>{var i;let o;return(0,t.jsx)(E,{checked:(i=r.link,(o=e=>e.length>1?e.replace(/\/+$/,""):e)(e)===o(i)),onClick:()=>d(r.link),children:a?(0,t.jsx)(M.Tooltip,{text:(0,t.jsx)(u.Text,{children:r.name}),position:"right",children:(0,t.jsx)("div",{children:r.icon})}):r.icon},r.name)})}),(0,t.jsx)(_,{children:s.map(e=>""===e.link?void 0:(0,t.jsx)(E,{onClick:()=>d(e.link,!0),children:a?(0,t.jsx)(M.Tooltip,{text:(0,t.jsx)(u.Text,{children:e.name}),position:"right",children:(0,t.jsx)("div",{children:e.icon})}):e.icon},e.name))})]})});function d(e,t=!1){t?window.open(e,"_blank"):r.push(e)}};var z=e.i(76150),F=e.i(63581);let Z=(0,s.default)("div",{target:"e1l2ftyn0"})("position:fixed;width:320px;height:100vh;top:0;left:80px;overflow-x:hidden;overflow-y:hidden;",({theme:e,scrollState:t,fold:r})=>o.css`
    z-index: ${e.layers.AFTER_STANDARD-1};
    background: ${e.colors.PRIMARY.ACCENT_1};
    box-shadow: ${e.shadows.SMALL};

    ${"SHOW"===t&&o.css`
      &:hover > div:last-of-type {
        margin-right: -8px;
      }
    `}

    ${r&&o.css`
      left: -320px;

      & > div:first-of-type {
        left: -320px;
      }
    `}

  /* ipad Portrait and Landscape */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
      overflow-y: auto;

      ${"SHOW"===t&&o.css`
        &:hover > div:last-of-type {
          margin-right: 0;
        }
      `}
    }
  `,"  @media screen and (max-width:1024px){left:-320px;& > div:first-of-type{left:-320px;}}&:hover{overflow-y:auto;}scrollbar-width:8px;scrollbar-color:var(--scrollbar-thumb) var(--scrollbar-background);&::-webkit-scrollbar{background:var(--scrollbar-background);height:8px;width:8px;}&::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb);border-radius:0;}"),Y=(0,s.default)("div",{target:"e1l2ftyn1"})("display:flex;flex-direction:column;position:fixed;top:0;left:80px;transform:translate3d(0,0,1);width:320px;padding-bottom:14px;",({theme:e,fold:t})=>o.css`
    z-index: ${e.layers.AFTER_STANDARD};
    background: ${e.colors.PRIMARY.ACCENT_1};

    ${t&&o.css`
      left: -320px;

      & > div:first-of-type {
        left: -320px;
      }
    `}
  `,"  @media screen and (max-width:1024px){left:-320px;& > div:first-of-type{left:-320px;}}");(0,s.default)("button",{target:"e1l2ftyn2"})("border:none;background:none;outline:none;cursor:pointer;padding:0;transition:color 0.2s cubic-bezier(0.215,0.61,0.355,1);",({theme:e})=>o.css`
    color: ${e.colors.PRIMARY.ACCENT_4};
    &:hover {
      color: ${e.colors.PRIMARY.FOREGROUND};
    }
  `);let G=(0,s.default)("div",{target:"e1l2ftyn3"})("display:flex;justify-content:space-between;align-items:flex-end;height:35px;font-weight:600;font-size:14px;padding:0 28px 2px;& > button{margin:0;}"),H=(0,s.default)("div",{target:"e1l2ftyn4"})("display:flex;align-items:flex-end;height:38px;padding:0 24px;max-width:100%;& > div{width:100%;}"),J=(0,s.default)("div",{target:"e1l2ftyn5"})("margin-top:73px;padding:16px 24px 32px;"),W=(0,s.default)("nav",{target:"e1l2ftyn6"})("display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;"),q=(0,s.default)("a",{target:"e1l2ftyn7"})("position:relative;display:flex;justify-content:flex-end;align-items:flex-end;width:130px;height:130px;margin-bottom:12px;border-radius:12px;cursor:pointer;overflow:hidden;transform:scale(1,1);transition:transform 0.2s cubic-bezier(0.075,0.82,0.165,1);",({theme:e,image:t,text:r,isActive:i})=>o.css`
    background-image: url(${t});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: ${e.shadows.SMALL};
    color: ${e.colors.PRIMARY.BACKGROUND};

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: inherit;
      height: inherit;
      background: ${i?e.colors.CYAN.DEFAULT:e.colors.PRIMARY.FOREGROUND};
      opacity: ${i?.5:.3};
      border-radius: 12px;
    }

    &::after {
      content: '${r}';
      position: absolute;
      right: 0;
      bottom: 0;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.1;
      color: ${e.colors.PRIMARY.BACKGROUND};
      text-align: right;
      margin: 6px 6px 12px;
      word-break: keep-all;
      letter-spacing: -0.02rem;
    }
  `,"  &:hover{transform:scale(1.1,1.1);}"),V=(0,s.default)("nav",{target:"e1l2ftyn8"})("display:flex;flex-direction:column;margin:12px 0 0;&:first-child{margin-top:0;}"),K=(0,s.default)("div",{target:"e1l2ftyn9"})(({theme:e})=>o.css`
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    background-color: ${e.colors.PRIMARY.ACCENT_1};
    padding: 0;
    margin: 0 0 6px 0;
    height: 30px;
  `),Q=(0,s.default)("div",{target:"e1l2ftyn10"})("display:flex;justify-content:flex-start;align-items:flex-end;& > div{& > svg{position:relative;",({fold:e})=>!e&&o.css`
          top: -2px;
          left: -2px;
        `,"}}"),X=(0,s.default)("div",{target:"e1l2ftyn11"})("overflow-y:hidden;will-change:height;transition:height 0.2s ease;",({fold:e})=>o.css`
    height: ${e?0:"auto"};
  `),ee=(0,s.default)("a",{target:"e1l2ftyn12"})("position:relative;display:flex;justify-content:flex-start;align-items:center;cursor:pointer;padding:6px 0;transition:border 0.2s ease;",({theme:e,isActive:t})=>o.css`
    ${t&&o.css`
      border-left: 6px solid ${e.colors.CYAN.DEFAULT};
      padding-left: 12px;
    `};

    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 6px;
      color: ${e.colors.PRIMARY.ACCENT_4};
    }

    &:hover {
      background-color: ${e.colors.PRIMARY.ACCENT_2};
    }

    /* &::before {
    content: '';
    transform: translateY(-50%);
    
    font-size: 1rem;
  } */
  `,"  & > svg{width:20px;height:20px;}");var R=R;let et=[],er=e=>{let o=(e=>{let{posts:t}=e,r=(0,O.usePathname)(),o=(0,O.useRouter)(),[s,a]=(0,i.useState)(()=>R.get("search")||""),[n,l]=(0,i.useState)(()=>{let e=R.get("view-type");return("list"===e||"card"===e)&&R.set("view-type",e.toUpperCase()),R.get("view-type")||"LIST"}),[d,c]=(0,i.useState)("HIDE"),u=(0,i.useMemo)(()=>{let e=new Set;t.forEach(t=>{t.tags.forEach(t=>{et.includes(t)||e.add(t)})});let r={};return e.forEach(e=>{r[e]=[]}),t.forEach(e=>{e.tags.filter(e=>!et.includes(e)).forEach(t=>{r[t]&&r[t].push(e)})}),r},[t]),f=(0,i.useMemo)(()=>Object.entries(u).reduce((e,t)=>(e[t[0]]=t[1].filter(e=>e.name.toLocaleUpperCase().includes(s.toLocaleUpperCase())),e),{}),[s,u]);return{...e,posts:f,totalPosts:t.length,scrollState:d,viewState:n,search:s,isNowPage:function(e){return decodeURIComponent(r).includes(e.slice(0,-1))},changeScrollState:function(e=0,t=0){c(e>t?"SHOW":"HIDE")},changeViewState:function(){let e="CARD"===n?"LIST":"CARD";R.set("view-type",e),l(e)},changeSearch:function(e){a(e),R.set("search","")},changeLocation:function(e){o.push(e)}}})(e),{posts:s,totalPosts:a,search:n,viewState:l,changeScrollState:d,changeSearch:c,changeLocation:f,isNowPage:h}=o,g=(0,i.useRef)(null);return(0,i.useEffect)(()=>{d(g.current?.scrollHeight,g.current?.clientHeight)},[n,s,l]),(0,t.jsxs)("aside",{children:[(0,t.jsxs)(Y,{...o,children:[(0,t.jsx)(G,{children:(0,t.jsxs)(u.Text,{children:["글"," ",(0,t.jsxs)(u.Text,{as:"span",color:z.Colors.PRIMARY.ACCENT_4,children:["(",a,")"]})]})}),(0,t.jsx)(H,{children:(0,t.jsx)(F.SearchInput,{value:n,onReset:function(){c("")},onChange:function(e){c(e)},size:"small",placeholder:"검색.."})})]}),(0,t.jsx)(Z,{ref:g,...o,children:(0,t.jsx)(J,{children:(0,t.jsx)(r.Container,{children:Object.entries(s).map(([e,r])=>(0,t.jsx)(ei,{title:e,posts:r,moveToLocation:p,isNowPage:h,viewState:l},e))})})})]});function p(e){f(e)}},ei=({viewState:e,posts:r,title:o,isNowPage:s,moveToLocation:a})=>{let[n,l]=(0,i.useState)(!r.find(e=>s(e.slug))),d=(0,i.useMemo)(()=>"CARD"===e?W:V,[e]),c=(0,i.useMemo)(()=>"CARD"===e?q:ee,[e]);return(0,t.jsxs)(d,{children:[(0,t.jsxs)(K,{onClick:function(){l(!n)},children:[(0,t.jsx)(Q,{fold:n,children:n?(0,t.jsx)("div",{style:{width:"24px",height:"16px"},children:(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 32 32",stroke:"currentColor",children:(0,t.jsx)("g",{children:(0,t.jsx)("g",{children:(0,t.jsx)("path",{d:"M17,9 L15,5 L4.00276013,5 C2.89666625,5 2,5.88967395 2,6.991155 L2,25.008845 C2,26.1085295 2.89971268,27 3.99328744,27 L29.0067126,27 C30.1075748,27 31,26.1073772 31,25.0049107 L31,10.9950893 C31,9.8932319 30.1029399,9 28.9941413,9 L17,9 L17,9 Z M16.3599854,10 L14.4000244,6 L3.99173483,6 C3.44401481,6 3,6.45530558 3,6.99180311 L3,25.0081969 C3,25.5559546 3.44610862,26 3.99296544,26 L29.0070346,26 C29.5554342,26 30,25.5553691 30,24.9991283 L30,11.0008717 C30,10.4481055 29.5461723,10 28.9970172,10 L16.3599854,10 L16.3599854,10 Z"})})})})}):(0,t.jsx)("div",{style:{width:"24px",height:"16px"},children:(0,t.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 100 100",stroke:"currentColor",children:(0,t.jsx)("path",{fill:"currentColor",d:"M97.197,40.597C96.914,40.221,96.47,40,96,40h-8.5v-9.327c0-0.828-0.671-1.499-1.498-1.5l-44.407-0.055l-7.179-7.179c-0.281-0.281-0.663-0.439-1.061-0.439H12c-0.828,0-1.5,0.672-1.5,1.5v54c0,0.828,0.672,1.5,1.5,1.5h73.795c0.731,0,1.339-0.525,1.472-1.218c0.071-0.115,0.137-0.234,0.176-0.37l10-35C97.571,41.46,97.481,40.973,97.197,40.597z M32.734,24.5l7.178,7.178c0.28,0.281,0.661,0.438,1.059,0.439L84.5,32.171V40H22c-0.67,0-1.258,0.444-1.442,1.088L13.5,65.79V24.5H32.734z M84.726,75.5h-70.88L23.132,43h70.88L84.726,75.5z"})})})}),(0,t.jsx)(u.Text,{children:o})]}),(0,t.jsx)(X,{fold:n,children:r.map(r=>(0,t.jsx)(c,{onClick:()=>a(r.slug),image:r.image,text:r.name,isActive:s(r.slug),children:"LIST"===e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{children:(0,t.jsxs)("svg",{viewBox:"0 0 24 24",width:"20",height:"20",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:[(0,t.jsx)("path",{d:"M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"}),(0,t.jsx)("path",{d:"M13 2v7h7"})]})}),(0,t.jsx)(u.Text,{children:r.name})]})},r.slug))})]})},eo=e=>{let{children:o,posts:s}=e,[d,c]=(0,i.useState)(!1),u=(0,i.useMemo)(()=>(0,C.filteredByDraft)(s).map(e=>({name:e.frontmatter.title,slug:e.fields.slug,series:e.frontmatter.series||null,image:e.frontmatter.image?.publicURL||"/profile.jpg",tags:e.frontmatter.tags||[]})),[s]);return(0,i.useEffect)(()=>{c("true"===R.get("sidebar-fold"))},[]),(0,i.useEffect)(()=>{R.set("sidebar-fold",String(d))},[d]),(0,t.jsx)(a,{children:(0,t.jsxs)(r.Container,{children:[(0,t.jsx)(U,{}),(0,t.jsx)(er,{posts:u,fold:d}),(0,t.jsx)(y,{fold:d,folding:function(){c(!d)}}),(0,t.jsxs)(n,{fold:d,children:[(0,t.jsx)(l,{children:o}),(0,t.jsx)(I,{})]})]})})};var es=e.i(53482);e.s(["LayoutWrapper",0,function({children:e}){let r=es.default.map(e=>({fields:{slug:e.slug},timeToRead:e.timeToRead,frontmatter:{title:e.frontmatter.title,date:e.frontmatter.date,tags:e.frontmatter.tags,image:e.frontmatter.image?{publicURL:e.frontmatter.image}:null,series:e.frontmatter.series,draft:e.frontmatter.draft},html:""}));return(0,t.jsx)(eo,{posts:r,children:e})}],40710)}]);