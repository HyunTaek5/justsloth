(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s={formatUrl:function(){return a},formatWithValidation:function(){return d},urlObjectKeys:function(){return l}};for(var o in s)Object.defineProperty(r,o,{enumerable:!0,get:s[o]});let i=e.r(90809)._(e.r(98183)),n=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:r}=e,s=e.protocol||"",o=e.pathname||"",a=e.hash||"",l=e.query||"",d=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?d=t+e.host:r&&(d=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(d+=":"+e.port)),l&&"object"==typeof l&&(l=String(i.urlQueryToSearchParams(l)));let c=e.search||l&&`?${l}`||"";return s&&!s.endsWith(":")&&(s+=":"),e.slashes||(!s||n.test(s))&&!1!==d?(d="//"+(d||""),o&&"/"!==o[0]&&(o="/"+o)):d||(d=""),a&&"#"!==a[0]&&(a="#"+a),c&&"?"!==c[0]&&(c="?"+c),o=o.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${s}${d}${o}${c}${a}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function d(e){return a(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let s=e.r(71645);function o(e,t){let r=(0,s.useRef)(null),o=(0,s.useRef)(null);return(0,s.useCallback)(s=>{if(null===s){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=i(e,s)),t&&(o.current=i(t,s))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return i}});let s=e.r(18967),o=e.r(52817);function i(e){if(!(0,s.isAbsoluteUrl)(e))return!0;try{let t=(0,s.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return s}});let s=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s={default:function(){return x},useLinkStatus:function(){return v}};for(var o in s)Object.defineProperty(r,o,{enumerable:!0,get:s[o]});let i=e.r(90809),n=e.r(43476),a=i._(e.r(71645)),l=e.r(95057),d=e.r(8372),c=e.r(18581),u=e.r(18967),f=e.r(5550);e.r(33525);let p=e.r(88540),h=e.r(91949),g=e.r(73668),m=e.r(9396);function x(t){var r,s;let o,i,x,[v,R]=(0,a.useOptimistic)(h.IDLE_LINK_STATUS),b=(0,a.useRef)(null),{href:y,as:j,children:w,prefetch:L=null,passHref:k,replace:A,shallow:C,scroll:I,onClick:N,onMouseEnter:M,onTouchStart:E,legacyBehavior:P=!1,onNavigate:S,transitionTypes:O,ref:D,unstable_dynamicOnHover:$,..._}=t;o=w,P&&("string"==typeof o||"number"==typeof o)&&(o=(0,n.jsx)("a",{children:o}));let U=a.default.useContext(d.AppRouterContext),Z=!1!==L,Y=!1!==L?null===(s=L)||"auto"===s?m.FetchStrategy.PPR:m.FetchStrategy.Full:m.FetchStrategy.PPR,F="string"==typeof(r=j||y)?r:(0,l.formatUrl)(r);if(P){if(o?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});i=a.default.Children.only(o)}let z=P?i&&"object"==typeof i&&i.ref:D,B=a.default.useCallback(e=>(null!==U&&(b.current=(0,h.mountLinkInstance)(e,F,U,Y,Z,R)),()=>{b.current&&((0,h.unmountLinkForCurrentNavigation)(b.current),b.current=null),(0,h.unmountPrefetchableInstance)(e)}),[Z,F,U,Y,R]),G={ref:(0,c.useMergedRef)(B,z),onClick(t){P||"function"!=typeof N||N(t),P&&i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),!U||t.defaultPrevented||function(t,r,s,o,i,n,l){if("u">typeof window){let d,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((d=t.currentTarget.getAttribute("target"))&&"_self"!==d||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,g.isLocalURL)(r)){o&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),n){let e=!1;if(n({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(99781);a.default.startTransition(()=>{u(r,o?"replace":"push",!1===i?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,s.current,l)})}}(t,F,b,A,I,S,O)},onMouseEnter(e){P||"function"!=typeof M||M(e),P&&i.props&&"function"==typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),U&&Z&&(0,h.onNavigationIntent)(e.currentTarget,!0===$)},onTouchStart:function(e){P||"function"!=typeof E||E(e),P&&i.props&&"function"==typeof i.props.onTouchStart&&i.props.onTouchStart(e),U&&Z&&(0,h.onNavigationIntent)(e.currentTarget,!0===$)}};return(0,u.isAbsoluteUrl)(F)?G.href=F:P&&!k&&("a"!==i.type||"href"in i.props)||(G.href=(0,f.addBasePath)(F)),x=P?a.default.cloneElement(i,G):(0,n.jsx)("a",{..._,...G,children:o}),(0,n.jsx)(T.Provider,{value:v,children:x})}e.r(84508);let T=(0,a.createContext)(h.IDLE_LINK_STATUS),v=()=>(0,a.useContext)(T);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},90112,e=>{"use strict";var t=e.i(57727),r=e.i(21801);let s={me:{name:"제가 궁금하세요?",icon:(0,t.jsx)(r.ImageComponent,{src:"/profile.jpg",width:55,height:55}),link:"/resume"},home:{name:"홈으로 갑니다!",icon:(0,t.jsxs)("svg",{viewBox:"0 0 24 24",width:"32",height:"32",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:[(0,t.jsx)("path",{d:"M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"}),(0,t.jsx)("path",{d:"M9 22V12h6v10"})]}),link:"/"},posts:{name:"제가 쓴 글을 보세요!",icon:(0,t.jsx)("svg",{viewBox:"0 0 24 24",width:"32",height:"32",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:(0,t.jsx)("path",{d:"M2.707 7.454V5.62C2.707 4.725 3.469 4 4.409 4h4.843c.451 0 .884.17 1.204.474l.49.467c.126.12.296.186.473.186h8.399c.94 0 1.55.695 1.55 1.59v.737m-18.661 0h-.354a.344.344 0 00-.353.35l.508 11.587c.015.34.31.609.668.609h17.283c.358 0 .652-.269.667-.61L22 7.805a.344.344 0 00-.353-.35h-.278m-18.662 0h18.662"})}),link:"/posts"}},o={github:{name:"Github",icon:(0,t.jsx)("svg",{viewBox:"0 0 24 24",width:"32",height:"32",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:(0,t.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"})}),link:"https://github.com/HyunTaek5"},secondary:{name:"LinkedIn",icon:(0,t.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 24 24",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",strokeWidth:"1.55",shapeRendering:"geometricPrecision",children:[(0,t.jsx)("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),(0,t.jsx)("rect",{x:"2",y:"9",width:"4",height:"12"}),(0,t.jsx)("circle",{cx:"4",cy:"4",r:"2"})]}),link:"https://www.linkedin.com/in/dylanoh"}};e.s(["NavCategory",0,s,"NavFooter",0,o])},62424,e=>{"use strict";var t=e.i(18566),r=e.i(71645);let s="/desktop",o=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];e.s(["DESKTOP_PATH",0,s,"DesktopEasterEgg",0,()=>{let e=(0,t.useRouter)();return(0,r.useEffect)(()=>{console.log("%c🖥  ↑ ↑ ↓ ↓ ← → ← → B A","font-size: 13px; color: #8a93ff;");let t=0,r=r=>{var i;if((i=r.target)instanceof HTMLElement&&(i.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(i.tagName)))return;let n=1===r.key.length?r.key.toLowerCase():r.key;n===o[t]?t+=1:t=n===o[0]?2===t?2:1:0,t===o.length&&(t=0,e.push(s))};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[e]),null},"useSecretClicks",0,function(){let e=(0,t.useRouter)(),o=(0,r.useRef)([]);return(0,r.useCallback)(()=>{let t=Date.now();return o.current=[...o.current.filter(e=>t-e<2e3),t],!(o.current.length<5)&&(o.current=[],e.push(s),!0)},[e])}])},5949,e=>{"use strict";var t=e.i(57727),r=e.i(84364),s=e.i(22013);let o=(0,r.keyframes)("from{opacity:0;}to{opacity:1;}"),i=(0,s.default)("div",{target:"e5ef8y20"})("animation:",o," 0.2s ease;");e.s(["Loader",0,({children:e})=>(0,t.jsx)(i,{children:e})])},53482,(e,t,r)=>{t.exports=JSON.parse('[{"slug":"/posts/MikroORM-배치-사용기/","timeToRead":4,"frontmatter":{"title":"MikroORM 배치 사용기","date":"2025-03-10T15:23:12.000Z","tags":["MikroORM","NestJs"],"image":"/posts/posts/MikroORM-배치-사용기/assets/1.png","series":"MikroORM 사용기","draft":false}},{"slug":"/posts/book/review/오픈-비즈니스패권의-열쇠/","timeToRead":1,"frontmatter":{"title":"오픈 비즈니스 패권의 열쇠","date":"2024-12-22T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/book/review/비전공자도-배울-수-있는-타입스크립트/","timeToRead":1,"frontmatter":{"title":"비전공자도 배울 수 있는 타입스크립트","date":"2024-11-14T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/book/review/테라폼으로-시작하는-IaC/","timeToRead":1,"frontmatter":{"title":"테라폼으로 시작하는 IaC","date":"2024-10-16T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/book/review/코드-밖-커뮤니케이션/","timeToRead":1,"frontmatter":{"title":"코드 밖 커뮤니케이션","date":"2024-09-22T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/book/review/NGINX-쿡북/","timeToRead":1,"frontmatter":{"title":"NGINX 쿡북","date":"2024-08-14T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/book/review/처음-시작하는-FastAPI/","timeToRead":2,"frontmatter":{"title":"처음 시작하는 FastAPI","date":"2024-07-23T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/book/review/업무에-활용하는-nodejs/","timeToRead":1,"frontmatter":{"title":"업무에 활용하는 Node.js","date":"2024-06-10T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/book/review/한권으로-배우는-도커&쿠버네티스/","timeToRead":1,"frontmatter":{"title":"한 권으로 배우는 도커 & 쿠버네티스","date":"2024-05-17T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/book/review/도시를-만드는-기술-이야기/","timeToRead":1,"frontmatter":{"title":"도시를 만드는 기술 이야기","date":"2024-04-10T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/book/가상-면접-사례-솔루션/1장/","timeToRead":2,"frontmatter":{"title":"사용자 수에 따른 규모 확장성","date":"2024-03-13T15:23:12.000Z","tags":["책 스터디"],"image":null,"series":"가상 면접 사례로 배우는 대규모 시스템 설계 기초","draft":true}},{"slug":"/posts/book/review/게임AI를-위한-탐색-알고리즘/","timeToRead":1,"frontmatter":{"title":"게임 AI를 위한 탐색 알고리즘","date":"2024-03-12T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/블로그-이관/","timeToRead":1,"frontmatter":{"title":"블로그 이관","date":"2024-02-15T23:45:08.000Z","tags":["블로그 이관"],"image":"/posts/posts/블로그-이관/assets/0.jpeg","series":null,"draft":false}},{"slug":"/posts/TIL/2023/2023-12/프로젝트-회고/","timeToRead":2,"frontmatter":{"title":"2023 사내 프로젝트 회고","date":"2023-12-26T15:23:12.000Z","tags":["회고"],"image":null,"series":"배포 회고","draft":false}},{"slug":"/posts/TIL/2023/2023-12/나무늘보-프롬프트/","timeToRead":1,"frontmatter":{"title":"GPT-4 나무늘보 프롬프트","date":"2023-12-16T15:23:12.000Z","tags":["GPT-4"],"image":null,"series":"프롬프트","draft":false}},{"slug":"/posts/TIL/2023/2023-12/채팅-리서치/","timeToRead":2,"frontmatter":{"title":"채팅 구현 관련 서비스 리서치","date":"2023-12-13T15:23:12.000Z","tags":["채팅"],"image":null,"series":"리서치 기록","draft":false}},{"slug":"/posts/TIL/2023/2023-12/NestJs/Request-LifeCycle/","timeToRead":2,"frontmatter":{"title":"NestJs - Request LifeCycle","date":"2023-12-11T15:23:12.000Z","tags":["NestJs"],"image":null,"series":"NestJs 개념 정리","draft":false}},{"slug":"/posts/TIL/2023/2023-12/NestJs/LifeCycle/","timeToRead":2,"frontmatter":{"title":"NestJs - LifeCycle","date":"2023-12-09T15:23:12.000Z","tags":["NestJs"],"image":null,"series":"NestJs 개념 정리","draft":false}},{"slug":"/posts/TIL/2023/2023-12/DirtyChecking/","timeToRead":1,"frontmatter":{"title":"더티 체킹","date":"2023-12-03T15:23:12.000Z","tags":["SpringJPA"],"image":null,"series":null,"draft":false}},{"slug":"/posts/TIL/2023/2023-11/NestJs/Pipes/","timeToRead":2,"frontmatter":{"title":"NestJs - Pipes","date":"2023-11-30T15:23:12.000Z","tags":["NestJs"],"image":null,"series":"NestJs 개념 정리","draft":false}},{"slug":"/posts/TIL/2023/2023-11/Nginx/","timeToRead":2,"frontmatter":{"title":"Docker-compose, Nginx와 함께하는 무중단 배포","date":"2023-11-16T15:23:12.000Z","tags":["NGINX"],"image":null,"series":"배포 회고","draft":false}},{"slug":"/posts/TIL/2023/2023-11/NestJs/MetaData/","timeToRead":1,"frontmatter":{"title":"NestJs - MetaData","date":"2023-11-09T15:23:12.000Z","tags":["NestJs"],"image":null,"series":"NestJs 개념 정리","draft":false}},{"slug":"/posts/TIL/2023/2023-11/AWS - EBS용량관리/","timeToRead":1,"frontmatter":{"title":"AWS - EBS 용량 관리","date":"2023-11-06T15:23:12.000Z","tags":["AWS"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-11/NestJs/DynamicModule/","timeToRead":1,"frontmatter":{"title":"NestJs - Dynamic Module","date":"2023-11-03T15:23:12.000Z","tags":["NestJs"],"image":null,"series":"NestJs 개념 정리","draft":false}},{"slug":"/posts/TIL/2023/2023-10/OpenTelemetry/메트릭/","timeToRead":1,"frontmatter":{"title":"OpenTelemetry  - 메트릭","date":"2023-10-30T15:23:12.000Z","tags":["관찰가능성"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/사이드프로젝트-배포-회고/","timeToRead":3,"frontmatter":{"title":"사이드 프로젝트 배포 회고","date":"2023-10-23T15:23:12.000Z","tags":["사이드 프로젝트"],"image":null,"series":"배포 회고","draft":false}},{"slug":"/posts/TIL/2023/2023-10/OpenTelemetry/시그널-분산추적/","timeToRead":2,"frontmatter":{"title":"OpenTelemetry 시그널 - 분산 추적","date":"2023-10-21T15:23:12.000Z","tags":["관찰가능성"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-10/OpenTelemetry/컨텍스트-전파/","timeToRead":1,"frontmatter":{"title":"OpenTelemetry - 컨텍스트 전파","date":"2023-10-16T15:23:12.000Z","tags":["관찰가능성"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-10/OpenTelemetry/파이프라인-리소스/","timeToRead":2,"frontmatter":{"title":"OpenTelemetry - 파이프라인, 리소스","date":"2023-10-14T15:23:12.000Z","tags":["관찰가능성"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-10/OpenTelemetry/","timeToRead":1,"frontmatter":{"title":"OpenTelemetry","date":"2023-10-11T15:23:12.000Z","tags":["관찰가능성"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-10/제3자-결제-애플/","timeToRead":5,"frontmatter":{"title":"관찰 가능성 엔지니어링 & 제 3자 결제 - 애플","date":"2023-10-10T15:23:12.000Z","tags":["관찰가능성","제3자-결제"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-10/제3자-결제-구글/","timeToRead":2,"frontmatter":{"title":"제 3자 결제 - 구글","date":"2023-10-04T15:23:12.000Z","tags":["제3자-결제"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-10/PortOne-웹훅/","timeToRead":2,"frontmatter":{"title":"PortOne - 웹훅","date":"2023-10-03T15:23:12.000Z","tags":["PortOne"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-10/PortOne-인증결제/","timeToRead":1,"frontmatter":{"title":"PortOne - 인증결제","date":"2023-10-01T15:23:12.000Z","tags":["PortOne"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/book/대용량-DB-솔루션/1장/","timeToRead":2,"frontmatter":{"title":"대용량 DB 솔루션 1장 정리","date":"2023-09-28T15:23:12.000Z","tags":["책 스터디"],"image":null,"series":"대용량 DB 솔루션","draft":false}},{"slug":"/posts/TIL/2023/2023-09/PortOne/","timeToRead":1,"frontmatter":{"title":"PortOne - 비인증결제 정리","date":"2023-09-25T15:23:12.000Z","tags":["PortOne"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-09/인앱-결제/환불/","timeToRead":1,"frontmatter":{"title":"인앱 결제 환불 정리","date":"2023-09-23T15:23:12.000Z","tags":["인앱결제"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-09/인앱-결제/","timeToRead":2,"frontmatter":{"title":"인앱 결제 정리","date":"2023-09-21T15:23:12.000Z","tags":["인앱결제"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-09/SRE/","timeToRead":1,"frontmatter":{"title":"SRE (Site Reliability Engineering) 개념","date":"2023-09-20T15:23:12.000Z","tags":["SRE"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-09/SQL-INTERSECT/","timeToRead":1,"frontmatter":{"title":"SQL - INTERSECT","date":"2023-09-19T15:23:12.000Z","tags":["SQL"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-09/SQL-UNION-ALL/","timeToRead":1,"frontmatter":{"title":"SQL - UNION / UNION ALL","date":"2023-09-17T15:23:12.000Z","tags":["SQL"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-09/MongoDB-local-참가-후기/","timeToRead":1,"frontmatter":{"title":"MongoDB.local Seoul 짧은 참가 후기","date":"2023-09-14T15:23:12.000Z","tags":["MongoDB"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-09/OLTP VS OLAP/","timeToRead":1,"frontmatter":{"title":"OLTP vs OLAP","date":"2023-09-13T15:23:12.000Z","tags":["Processing System"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-09/TypeORM-Upsert-중복제거/","timeToRead":1,"frontmatter":{"title":"TypeORM orIgnore 메소드 Upsert시 중복 데이터 INSERT 검증 방식 변경","date":"2023-09-12T03:23:12.000Z","tags":["TypeORM"],"image":null,"series":"TIL","draft":false}}]')},40710,e=>{"use strict";var t=e.i(57727);e.i(79467);var r=e.i(80672),s=e.i(71645),o=e.i(84364),i=e.i(22013);let n=(0,i.default)("div",{target:"ec9pp6w0"})("min-height:100vh;",({theme:e})=>o.css`
    color: ${e.colors.PRIMARY.FOREGROUND};
    background: ${e.colors.PRIMARY.BACKGROUND};
  `),a=(0,i.default)("main",{target:"ec9pp6w1"})("display:flex;flex-direction:column;justify-content:space-between;width:calc(100vw - 400px);min-height:calc(100vh - 43px);margin-top:43px;margin-left:400px;",({theme:e,fold:t})=>o.css`
    background: ${e.colors.PRIMARY.BACKGROUND};
    ${t&&o.css`
      width: calc(100vw - 80px);
      margin-left: 80px;
    `}
  `,"  @media screen and (max-width:1024px){margin-left:0;margin-top:123px;width:100%;}"),l=(0,i.default)("article",{target:"ec9pp6w2"})(({theme:e})=>o.css`
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
  `);var d=e.i(17257),d=d,c=e.i(21690),u=e.i(67449),f=e.i(40203);let p=(0,i.default)("header",{target:"eg4ejn30"})("display:flex;justify-content:space-between;align-items:center;position:fixed;left:400px;top:0;width:calc(100% - 400px);height:43px;padding:0 1rem;box-sizing:border-box;",({theme:e,fold:t})=>o.css`
    z-index: ${e.layers.AFTER_STANDARD};
    background-color: ${e.colors.PRIMARY.ACCENT_1};
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);

    ${t&&o.css`
      width: calc(100% - 80px) !important;
      left: 80px;
    `}
  `,"  @media screen and (max-width:1024px){left:0;width:100% !important;}"),h=(0,i.default)("button",{target:"eg4ejn31"})("cursor:pointer;border:none;background:none;outline:none;padding:0;margin:0;height:18px;transition:color 0.2s cubic-bezier(0.215,0.61,0.355,1);",({theme:e,fold:t})=>o.css`
    ${t?o.css`
          color: ${e.colors.CYAN.DEFAULT};
        `:o.css`
          &:hover {
            color: ${e.colors.PRIMARY.FOREGROUND};
          }
          color: ${e.colors.PRIMARY.ACCENT_4};
        `}
  `,"  @media screen and (max-width:1024px){display:none;& + span{display:none;}}"),g=(0,i.default)("button",{target:"eg4ejn32"})("cursor:pointer;border:none;background:none;outline:none;padding:0;margin:0;height:18px;transition:color 0.2s cubic-bezier(0.215,0.61,0.355,1);",({theme:e,popup:t})=>o.css`
    ${t?o.css`
          color: ${e.colors.CYAN.DEFAULT};
        `:o.css`
          &:hover {
            color: ${e.colors.PRIMARY.FOREGROUND};
          }
          color: ${e.colors.PRIMARY.ACCENT_4};
        `}
  `),m=(0,i.default)("div",{target:"eg4ejn33"})("display:flex;justify-content:center;align-items:center;",({theme:e})=>o.css`
    color: ${e.colors.PRIMARY.FOREGROUND};
  `,"  & > label{margin:0 12px;}"),x=(0,i.default)("div",{target:"eg4ejn34"})("display:flex;flex-direction:column;align-items:flex-start;"),T=(0,i.default)("div",{target:"eg4ejn35"})("position:relative;width:100%;height:10px;border-radius:5px;margin:0.5rem 0;",({theme:e})=>o.css`
    background-color: ${e.colors.PRIMARY.ACCENT_2};
  `),v=(0,i.default)("div",{target:"eg4ejn36"})("position:absolute;width:12px;height:12px;border-radius:10px;transform:translate(-50%,-50%);cursor:pointer;",({theme:e,idx:t,max:r,value:s,selected:i})=>o.css`
    left: ${t/(r-1)*100}%;
    top: 50%;
    background-color: ${i===s?e.colors.CYAN.DEFAULT:e.colors.PRIMARY.ACCENT_8};

    &:first-of-type {
      left: 1.5%;
    }

    &:last-of-type {
      right: 95%;
    }

    &::after {
      content: '${s}';
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      top: 30px;
    }
  `);var R=e.i(63593),b=e.i(32832);e.s(["get",0,function(e){return window.localStorage.getItem(e)},"set",0,function(e,t){window.localStorage.setItem(e,t)}],84131);var y=e.i(84131),y=y;let j=[14,16,18,20],w=e=>{let{fold:r,folding:o,dialog:i,textSize:n,mode:a,openDialog:l,closeDialog:b,changeTheme:w,changeTextSize:L}=(e=>{let t=(0,R.useTheme)(),[r,o]=(0,s.useState)("LIGHT"),[i,n]=(0,s.useState)({visible:!1,type:"SETTING"}),[a,l]=(0,s.useState)(16);return(0,s.useEffect)(()=>{var e;let t,r;o(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"DARK":"LIGHT");let s=y.get("text-size");return s||(y.set("text-size","16"),s="16"),l(parseInt(s,10)||16),e=e=>{o(e)},t=window.matchMedia("(prefers-color-scheme: dark)"),r=t=>{e(t.matches?"DARK":"LIGHT")},t.addEventListener("change",r),()=>t.removeEventListener("change",r)},[]),(0,s.useEffect)(()=>{r&&(document.body.style.backgroundColor="DARK"===r?"#000":"#fff",t.state.changeTheme(r))},[r]),(0,s.useEffect)(()=>{if(document?.body?.parentElement){if(16===a){document.body.parentElement.style.fontSize="";return}document.body.parentElement.style.fontSize=`${a}px`}},[a]),{...e,mode:r,textSize:a,dialog:i,openDialog:function(e){n({visible:!0,type:e})},closeDialog:function(){n(e=>({...e,visible:!1}))},changeTheme:function(e){o(e)},changeTextSize:function(e){y.set("text-size",e.toString()),l(e)}}})(e);return(0,t.jsxs)(p,{fold:r,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(h,{fold:r,onClick:o,children:(0,t.jsxs)("svg",{viewBox:"0 0 24 24",width:"18",height:"18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:[(0,t.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),(0,t.jsx)("path",{d:"M9 3v18"})]})}),(0,t.jsx)(c.Spacer,{}),(0,t.jsx)(g,{popup:i.visible,onClick:()=>k("SETTING"),children:(0,t.jsxs)("svg",{viewBox:"0 0 24 24",width:"18",height:"18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"3"}),(0,t.jsx)("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"})]})})]}),(0,t.jsxs)(m,{children:[(0,t.jsxs)("svg",{viewBox:"0 0 24 24",width:"18",height:"18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"5"}),(0,t.jsx)("path",{d:"M12 1v2"}),(0,t.jsx)("path",{d:"M12 21v2"}),(0,t.jsx)("path",{d:"M4.22 4.22l1.42 1.42"}),(0,t.jsx)("path",{d:"M18.36 18.36l1.42 1.42"}),(0,t.jsx)("path",{d:"M1 12h2"}),(0,t.jsx)("path",{d:"M21 12h2"}),(0,t.jsx)("path",{d:"M4.22 19.78l1.42-1.42"}),(0,t.jsx)("path",{d:"M18.36 5.64l1.42-1.42"})]}),(0,t.jsx)(f.Toggle,{toggle:"DARK"===a,size:"medium",onChange:function(e){e?w("DARK"):w("LIGHT")},color:"pink"}),(0,t.jsx)("svg",{viewBox:"0 0 24 24",width:"18",height:"18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:(0,t.jsx)("path",{d:"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"})})]}),(0,t.jsxs)(d.Modal,{active:i.visible,children:[(0,t.jsx)(d.Body,{children:(0,t.jsxs)(d.Header,{children:[(0,t.jsx)(d.Title,{children:"설정"}),(0,t.jsx)(c.Spacer,{y:2}),(0,t.jsxs)(x,{children:[(0,t.jsx)(u.Text,{weight:500,children:"텍스트 크기"}),(0,t.jsx)(T,{children:j.map((e,r,s)=>(0,t.jsx)(v,{value:e,idx:r,max:s.length,onClick:()=>{L(e)},selected:n},r))})]})]})}),(0,t.jsx)(d.Actions,{children:(0,t.jsx)(d.Action,{onClick:()=>k("SETTING"),children:(0,t.jsx)(u.Text,{children:"닫기"})})})]})]});function k(e){i.visible?b():l(e)}};var y=y,L=e.i(17791),k=e.i(22016);let A=(0,i.default)("div",{target:"edxgfyy0"})(({theme:e})=>o.css`
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
  `),C=(0,i.default)("div",{target:"edxgfyy1"})("display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:60px;",({theme:e})=>o.css`
    background: ${e.colors.PRIMARY.ACCENT_1};
    color: ${e.colors.PRIMARY.ACCENT_3};

    & a {
      color: ${e.colors.PRIMARY.FOREGROUND};
      text-decoration: none;
    }
  `),I=()=>{let e=new Date().getFullYear();return(0,t.jsxs)("div",{children:[(0,t.jsx)(A,{children:(0,t.jsxs)(L.Footer,{children:[(0,t.jsxs)(L.FooterGroup,{title:"사이트 맵",children:[(0,t.jsx)(L.FooterLink,{custom:!0,children:(0,t.jsx)(k.default,{href:"/",children:"홈"})}),(0,t.jsx)(L.FooterLink,{custom:!0,children:(0,t.jsx)(k.default,{href:"/posts",children:"포스트"})}),(0,t.jsx)(L.FooterLink,{custom:!0,children:(0,t.jsx)(k.default,{href:"/resume",children:"이력서"})})]}),(0,t.jsxs)(L.FooterGroup,{title:"관련 사이트",children:[(0,t.jsx)(L.FooterLink,{href:"https://eight20.tistory.com",children:"다른 블로그"}),(0,t.jsx)(L.FooterLink,{href:"http://techeer.net",children:"Techeer"}),(0,t.jsx)(L.FooterLink,{href:"https://medium.com/team-joon",children:"Techeer 기술블로그"})]})]})}),(0,t.jsxs)(C,{children:[(0,t.jsxs)(u.Text,{size:12,children:["Copyright ⓒ ",e," ",(0,t.jsx)(k.default,{href:"https://justsloth.com",children:"Dylan"})," All rights reserved."]}),(0,t.jsx)(c.Spacer,{y:.1}),(0,t.jsxs)(u.Text,{size:12,children:["Created by ",(0,t.jsx)(k.default,{href:"https://justsloth.com",children:"@Dylan"}),". Powered By"," ",(0,t.jsx)("a",{href:"https://github.com/Vallista/vallista-land",children:"@Vallista-land"})]}),(0,t.jsx)(c.Spacer,{y:.5})]})]})};var N=e.i(2292),M=e.i(35505),E=e.i(18566);let P=(0,i.default)("aside",{target:"e1buqd4v0"})("position:fixed;top:0;left:0;",({theme:e})=>o.css`
    background: ${e.colors.PRIMARY.ACCENT_2};
    z-index: ${e.layers.AFTER_STANDARD+1};
  `,"  @media screen and (min-width:1025px){min-width:80px;height:100vh;}@media screen and (max-width:1024px){top:43px;min-height:60px;width:100vw;overflow-y:hidden;overflow-x:auto;scrollbar-width:8px;scrollbar-color:var(--scrollbar-thumb) var(--scrollbar-background);&::-webkit-scrollbar{background:var(--scrollbar-background);height:8px;width:8px;}&::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb);border-radius:0;}}"),S=(0,i.default)("section",{target:"e1buqd4v1"})("display:flex;justify-content:space-between;align-items:center;@media screen and (min-width:1025px){flex-direction:column;height:100vh;}@media screen and (max-width:1024px){flex-direction:row;}"),O=(0,i.default)("nav",{target:"e1buqd4v2"})("@media screen and (max-width:1024px){display:flex;flex-direction:row;}"),D=(0,i.default)("a",{target:"e1buqd4v3"})("position:relative;display:flex;justify-content:center;align-items:center;width:80px;height:80px;cursor:pointer;transition:background 0.2s ease;& > div > div > div > svg{width:32px;height:32px;}@media screen and (max-width:1024px){width:60px;height:60px;& > figure{width:40px;height:40px;border-radius:12px;overflow:hidden;}& > svg{width:24px;height:24px;}}& > div{width:inherit;height:inherit;& img{border-radius:12px;}}",({theme:e,checked:t})=>o.css`
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
  `);var $=e.i(62424),_=e.i(90112);let U=()=>{let e=(0,E.usePathname)(),r=(0,E.useRouter)(),o=(0,s.useMemo)(()=>Object.values(_.NavCategory),[]),i=(0,s.useMemo)(()=>Object.values(_.NavFooter),[]),[n,a]=(0,s.useState)(!0),l=(0,M.useWindowSize)(),d=(0,$.useSecretClicks)();return(0,s.useEffect)(()=>{a(!((l.width??0)<=1024))},[l]),(0,t.jsx)(P,{children:(0,t.jsxs)(S,{children:[(0,t.jsx)(O,{children:o.map(r=>{var s;let o;return(0,t.jsx)(D,{checked:(s=r.link,(o=e=>e.length>1?e.replace(/\/+$/,""):e)(e)===o(s)),onClick:()=>{var e;(e=r)===_.NavCategory.me&&d()||c(e.link)},children:n?(0,t.jsx)(N.Tooltip,{text:(0,t.jsx)(u.Text,{children:r.name}),position:"right",children:(0,t.jsx)("div",{children:r.icon})}):r.icon},r.name)})}),(0,t.jsx)(O,{children:i.map(e=>""===e.link?void 0:(0,t.jsx)(D,{onClick:()=>c(e.link,!0),children:n?(0,t.jsx)(N.Tooltip,{text:(0,t.jsx)(u.Text,{children:e.name}),position:"right",children:(0,t.jsx)("div",{children:e.icon})}):e.icon},e.name))})]})});function c(e,t=!1){t?window.open(e,"_blank"):r.push(e)}};var Z=e.i(76150),Y=e.i(63581);let F=(0,i.default)("div",{target:"e1l2ftyn0"})("position:fixed;width:320px;height:100vh;top:0;left:80px;overflow-x:hidden;overflow-y:hidden;",({theme:e,scrollState:t,fold:r})=>o.css`
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
  `,"  @media screen and (max-width:1024px){left:-320px;& > div:first-of-type{left:-320px;}}&:hover{overflow-y:auto;}scrollbar-width:8px;scrollbar-color:var(--scrollbar-thumb) var(--scrollbar-background);&::-webkit-scrollbar{background:var(--scrollbar-background);height:8px;width:8px;}&::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb);border-radius:0;}"),z=(0,i.default)("div",{target:"e1l2ftyn1"})("display:flex;flex-direction:column;position:fixed;top:0;left:80px;transform:translate3d(0,0,1);width:320px;padding-bottom:14px;",({theme:e,fold:t})=>o.css`
    z-index: ${e.layers.AFTER_STANDARD};
    background: ${e.colors.PRIMARY.ACCENT_1};

    ${t&&o.css`
      left: -320px;

      & > div:first-of-type {
        left: -320px;
      }
    `}
  `,"  @media screen and (max-width:1024px){left:-320px;& > div:first-of-type{left:-320px;}}");(0,i.default)("button",{target:"e1l2ftyn2"})("border:none;background:none;outline:none;cursor:pointer;padding:0;transition:color 0.2s cubic-bezier(0.215,0.61,0.355,1);",({theme:e})=>o.css`
    color: ${e.colors.PRIMARY.ACCENT_4};
    &:hover {
      color: ${e.colors.PRIMARY.FOREGROUND};
    }
  `);let B=(0,i.default)("div",{target:"e1l2ftyn3"})("display:flex;justify-content:space-between;align-items:flex-end;height:35px;font-weight:600;font-size:14px;padding:0 28px 2px;& > button{margin:0;}"),G=(0,i.default)("div",{target:"e1l2ftyn4"})("display:flex;align-items:flex-end;height:38px;padding:0 24px;max-width:100%;& > div{width:100%;}"),J=(0,i.default)("div",{target:"e1l2ftyn5"})("margin-top:73px;padding:16px 24px 32px;"),H=(0,i.default)("nav",{target:"e1l2ftyn6"})("display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;"),K=(0,i.default)("a",{target:"e1l2ftyn7"})("position:relative;display:flex;justify-content:flex-end;align-items:flex-end;width:130px;height:130px;margin-bottom:12px;border-radius:12px;cursor:pointer;overflow:hidden;transform:scale(1,1);transition:transform 0.2s cubic-bezier(0.075,0.82,0.165,1);",({theme:e,image:t,text:r,isActive:s})=>o.css`
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
      background: ${s?e.colors.CYAN.DEFAULT:e.colors.PRIMARY.FOREGROUND};
      opacity: ${s?.5:.3};
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
  `,"  &:hover{transform:scale(1.1,1.1);}"),W=(0,i.default)("nav",{target:"e1l2ftyn8"})("display:flex;flex-direction:column;margin:12px 0 0;&:first-child{margin-top:0;}"),V=(0,i.default)("div",{target:"e1l2ftyn9"})(({theme:e})=>o.css`
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    background-color: ${e.colors.PRIMARY.ACCENT_1};
    padding: 0;
    margin: 0 0 6px 0;
    height: 30px;
  `),q=(0,i.default)("div",{target:"e1l2ftyn10"})("display:flex;justify-content:flex-start;align-items:flex-end;& > div{& > svg{position:relative;",({fold:e})=>!e&&o.css`
          top: -2px;
          left: -2px;
        `,"}}"),Q=(0,i.default)("div",{target:"e1l2ftyn11"})("overflow-y:hidden;will-change:height;transition:height 0.2s ease;",({fold:e})=>o.css`
    height: ${e?0:"auto"};
  `),X=(0,i.default)("a",{target:"e1l2ftyn12"})("position:relative;display:flex;justify-content:flex-start;align-items:center;cursor:pointer;padding:6px 0;transition:border 0.2s ease;",({theme:e,isActive:t})=>o.css`
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
  `,"  & > svg{width:20px;height:20px;}");var y=y;let ee=[],et=e=>{let o=(e=>{let{posts:t}=e,r=(0,E.usePathname)(),o=(0,E.useRouter)(),[i,n]=(0,s.useState)(()=>y.get("search")||""),[a,l]=(0,s.useState)(()=>{let e=y.get("view-type");return("list"===e||"card"===e)&&y.set("view-type",e.toUpperCase()),y.get("view-type")||"LIST"}),[d,c]=(0,s.useState)("HIDE"),u=(0,s.useMemo)(()=>{let e=new Set;t.forEach(t=>{t.tags.forEach(t=>{ee.includes(t)||e.add(t)})});let r={};return e.forEach(e=>{r[e]=[]}),t.forEach(e=>{e.tags.filter(e=>!ee.includes(e)).forEach(t=>{r[t]&&r[t].push(e)})}),r},[t]),f=(0,s.useMemo)(()=>Object.entries(u).reduce((e,t)=>(e[t[0]]=t[1].filter(e=>e.name.toLocaleUpperCase().includes(i.toLocaleUpperCase())),e),{}),[i,u]);return{...e,posts:f,totalPosts:t.length,scrollState:d,viewState:a,search:i,isNowPage:function(e){return decodeURIComponent(r).includes(e.slice(0,-1))},changeScrollState:function(e=0,t=0){c(e>t?"SHOW":"HIDE")},changeViewState:function(){let e="CARD"===a?"LIST":"CARD";y.set("view-type",e),l(e)},changeSearch:function(e){n(e),y.set("search","")},changeLocation:function(e){o.push(e)}}})(e),{posts:i,totalPosts:n,search:a,viewState:l,changeScrollState:d,changeSearch:c,changeLocation:f,isNowPage:p}=o,h=(0,s.useRef)(null);return(0,s.useEffect)(()=>{d(h.current?.scrollHeight,h.current?.clientHeight)},[a,i,l]),(0,t.jsxs)("aside",{children:[(0,t.jsxs)(z,{...o,children:[(0,t.jsx)(B,{children:(0,t.jsxs)(u.Text,{children:["글"," ",(0,t.jsxs)(u.Text,{as:"span",color:Z.Colors.PRIMARY.ACCENT_4,children:["(",n,")"]})]})}),(0,t.jsx)(G,{children:(0,t.jsx)(Y.SearchInput,{value:a,onReset:function(){c("")},onChange:function(e){c(e)},size:"small",placeholder:"검색.."})})]}),(0,t.jsx)(F,{ref:h,...o,children:(0,t.jsx)(J,{children:(0,t.jsx)(r.Container,{children:Object.entries(i).map(([e,r])=>(0,t.jsx)(er,{title:e,posts:r,moveToLocation:g,isNowPage:p,viewState:l},e))})})})]});function g(e){f(e)}},er=({viewState:e,posts:r,title:o,isNowPage:i,moveToLocation:n})=>{let[a,l]=(0,s.useState)(!r.find(e=>i(e.slug))),d=(0,s.useMemo)(()=>"CARD"===e?H:W,[e]),c=(0,s.useMemo)(()=>"CARD"===e?K:X,[e]);return(0,t.jsxs)(d,{children:[(0,t.jsxs)(V,{onClick:function(){l(!a)},children:[(0,t.jsx)(q,{fold:a,children:a?(0,t.jsx)("div",{style:{width:"24px",height:"16px"},children:(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 32 32",stroke:"currentColor",children:(0,t.jsx)("g",{children:(0,t.jsx)("g",{children:(0,t.jsx)("path",{d:"M17,9 L15,5 L4.00276013,5 C2.89666625,5 2,5.88967395 2,6.991155 L2,25.008845 C2,26.1085295 2.89971268,27 3.99328744,27 L29.0067126,27 C30.1075748,27 31,26.1073772 31,25.0049107 L31,10.9950893 C31,9.8932319 30.1029399,9 28.9941413,9 L17,9 L17,9 Z M16.3599854,10 L14.4000244,6 L3.99173483,6 C3.44401481,6 3,6.45530558 3,6.99180311 L3,25.0081969 C3,25.5559546 3.44610862,26 3.99296544,26 L29.0070346,26 C29.5554342,26 30,25.5553691 30,24.9991283 L30,11.0008717 C30,10.4481055 29.5461723,10 28.9970172,10 L16.3599854,10 L16.3599854,10 Z"})})})})}):(0,t.jsx)("div",{style:{width:"24px",height:"16px"},children:(0,t.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 100 100",stroke:"currentColor",children:(0,t.jsx)("path",{fill:"currentColor",d:"M97.197,40.597C96.914,40.221,96.47,40,96,40h-8.5v-9.327c0-0.828-0.671-1.499-1.498-1.5l-44.407-0.055l-7.179-7.179c-0.281-0.281-0.663-0.439-1.061-0.439H12c-0.828,0-1.5,0.672-1.5,1.5v54c0,0.828,0.672,1.5,1.5,1.5h73.795c0.731,0,1.339-0.525,1.472-1.218c0.071-0.115,0.137-0.234,0.176-0.37l10-35C97.571,41.46,97.481,40.973,97.197,40.597z M32.734,24.5l7.178,7.178c0.28,0.281,0.661,0.438,1.059,0.439L84.5,32.171V40H22c-0.67,0-1.258,0.444-1.442,1.088L13.5,65.79V24.5H32.734z M84.726,75.5h-70.88L23.132,43h70.88L84.726,75.5z"})})})}),(0,t.jsx)(u.Text,{children:o})]}),(0,t.jsx)(Q,{fold:a,children:r.map(r=>(0,t.jsx)(c,{onClick:()=>n(r.slug),image:r.image,text:r.name,isActive:i(r.slug),children:"LIST"===e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{children:(0,t.jsxs)("svg",{viewBox:"0 0 24 24",width:"20",height:"20",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:[(0,t.jsx)("path",{d:"M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"}),(0,t.jsx)("path",{d:"M13 2v7h7"})]})}),(0,t.jsx)(u.Text,{children:r.name})]})},r.slug))})]})},es=e=>{let{children:o,posts:i}=e,[d,c]=(0,s.useState)(!1),u=(0,s.useMemo)(()=>(0,b.filteredByDraft)(i).map(e=>({name:e.frontmatter.title,slug:e.fields.slug,series:e.frontmatter.series||null,image:e.frontmatter.image?.publicURL||"/profile.jpg",tags:e.frontmatter.tags||[]})),[i]);return(0,s.useEffect)(()=>{c("true"===y.get("sidebar-fold"))},[]),(0,s.useEffect)(()=>{y.set("sidebar-fold",String(d))},[d]),(0,t.jsx)(n,{children:(0,t.jsxs)(r.Container,{children:[(0,t.jsx)(U,{}),(0,t.jsx)(et,{posts:u,fold:d}),(0,t.jsx)(w,{fold:d,folding:function(){c(!d)}}),(0,t.jsxs)(a,{fold:d,children:[(0,t.jsx)(l,{children:o}),(0,t.jsx)(I,{})]})]})})};var eo=e.i(53482);e.s(["LayoutWrapper",0,function({children:e}){let r=eo.default.map(e=>({fields:{slug:e.slug},timeToRead:e.timeToRead,frontmatter:{title:e.frontmatter.title,date:e.frontmatter.date,tags:e.frontmatter.tags,image:e.frontmatter.image?{publicURL:e.frontmatter.image}:null,series:e.frontmatter.series,draft:e.frontmatter.draft},html:""}));return(0,t.jsx)(es,{posts:r,children:e})}],40710)}]);