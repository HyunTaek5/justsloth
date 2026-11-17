(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,40710,e=>{"use strict";var t=e.i(57727);e.i(79467);var r=e.i(80672),i=e.i(71645),o=e.i(84364),s=e.i(22013);let a=(0,s.f)("div",{target:"e8r30qf0"})("min-height:100vh;",({theme:e})=>o.m`
    color: ${e.colors.PRIMARY.FOREGROUND};
    background: ${e.colors.PRIMARY.BACKGROUND};
  `),n=(0,s.f)("main",{target:"e8r30qf1"})("display:flex;flex-direction:column;justify-content:space-between;width:calc(100vw - 400px);min-height:calc(100vh - 43px);margin-top:43px;margin-left:400px;",({theme:e,fold:t})=>o.m`
    background: ${e.colors.PRIMARY.BACKGROUND};
    ${t&&o.m`
      width: calc(100vw - 80px);
      margin-left: 80px;
    `}
  `,"  @media screen and (max-width:1024px){margin-left:0;margin-top:123px;width:100%;}"),l=(0,s.f)("article",{target:"e8r30qf2"})(({theme:e})=>o.m`
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
  `);var d=e.i(58693),c=e.i(77391),g=e.i(39242),f=e.i(41800),p=e.i(39026);e.i(25684);var h=e.i(60072),m=e.i(45950);e.i(94866),e.S([d,0,c,"Action,Action",0,g,"Actions,Actions",0,f,"Body,Body",0,p,"Title,Title",0,h,"Header,Header",0,m,"Modal,Modal"],17257);var u=e.i(17257),u=u,T=u,x=u,R=u,v=u,b=u,w=e.i(21690),L=e.i(67449),A=e.i(40203);let y=(0,s.f)("header",{target:"e3iqp6h0"})("display:flex;justify-content:space-between;align-items:center;position:fixed;left:400px;top:0;width:calc(100% - 400px);height:43px;padding:0 1rem;box-sizing:border-box;",({theme:e,fold:t})=>o.m`
    z-index: ${e.layers.AFTER_STANDARD};
    background-color: ${e.colors.PRIMARY.ACCENT_1};
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);

    ${t&&o.m`
      width: calc(100% - 80px) !important;
      left: 80px;
    `}
  `,"  @media screen and (max-width:1024px){left:0;width:100% !important;}"),k=(0,s.f)("button",{target:"e3iqp6h1"})("cursor:pointer;border:none;background:none;outline:none;padding:0;margin:0;height:18px;transition:color 0.2s cubic-bezier(0.215,0.61,0.355,1);",({theme:e,fold:t})=>o.m`
    ${t?o.m`
          color: ${e.colors.CYAN.DEFAULT};
        `:o.m`
          &:hover {
            color: ${e.colors.PRIMARY.FOREGROUND};
          }
          color: ${e.colors.PRIMARY.ACCENT_4};
        `}
  `,"  @media screen and (max-width:1024px){display:none;& + span{display:none;}}"),I=(0,s.f)("button",{target:"e3iqp6h2"})("cursor:pointer;border:none;background:none;outline:none;padding:0;margin:0;height:18px;transition:color 0.2s cubic-bezier(0.215,0.61,0.355,1);",({theme:e,popup:t})=>o.m`
    ${t?o.m`
          color: ${e.colors.CYAN.DEFAULT};
        `:o.m`
          &:hover {
            color: ${e.colors.PRIMARY.FOREGROUND};
          }
          color: ${e.colors.PRIMARY.ACCENT_4};
        `}
  `),C=(0,s.f)("div",{target:"e3iqp6h3"})("display:flex;justify-content:center;align-items:center;",({theme:e})=>o.m`
    color: ${e.colors.PRIMARY.FOREGROUND};
  `,"  & > label{margin:0 12px;}"),N=(0,s.f)("div",{target:"e3iqp6h4"})("display:flex;flex-direction:column;align-items:flex-start;"),M=(0,s.f)("div",{target:"e3iqp6h5"})("position:relative;width:100%;height:10px;border-radius:5px;margin:0.5rem 0;",({theme:e})=>o.m`
    background-color: ${e.colors.PRIMARY.ACCENT_2};
  `),E=(0,s.f)("div",{target:"e3iqp6h6"})("position:absolute;width:12px;height:12px;border-radius:10px;transform:translate(-50%,-50%);cursor:pointer;",({theme:e,idx:t,max:r,value:i,selected:s})=>o.m`
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
  `);var P=e.i(63593),S=e.i(32832),O=e.i(84131),O=O,D=O;let $=[14,16,18,20],j=e=>{let{fold:r,folding:o,dialog:s,textSize:a,mode:n,openDialog:l,closeDialog:d,changeTheme:c,changeTextSize:g}=(e=>{let t=(0,P.useTheme)(),[r,o]=(0,i.useState)("LIGHT"),[s,a]=(0,i.useState)({visible:!1,type:"SETTING"}),[n,l]=(0,i.useState)(16);return(0,i.useEffect)(()=>{var e;let t,r;o(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"DARK":"LIGHT");let i=O.get("text-size");return i||(D.set("text-size","16"),i="16"),l(parseInt(i,10)||16),e=e=>{o(e)},t=window.matchMedia("(prefers-color-scheme: dark)"),r=t=>{e(t.matches?"DARK":"LIGHT")},t.addEventListener("change",r),()=>t.removeEventListener("change",r)},[]),(0,i.useEffect)(()=>{r&&(document.body.style.backgroundColor="DARK"===r?"#000":"#fff",t.state.changeTheme(r))},[r]),(0,i.useEffect)(()=>{if(document?.body?.parentElement){if(16===n){document.body.parentElement.style.fontSize="";return}document.body.parentElement.style.fontSize=`${n}px`}},[n]),{...e,mode:r,textSize:n,dialog:s,openDialog:function(e){a({visible:!0,type:e})},closeDialog:function(){a(e=>({...e,visible:!1}))},changeTheme:function(e){o(e)},changeTextSize:function(e){D.set("text-size",e.toString()),l(e)}}})(e);return(0,t.j)(y,{fold:r,children:[(0,t.j)("div",{children:[(0,t.s)(k,{fold:r,onClick:o,children:(0,t.j)("svg",{viewBox:"0 0 24 24",width:"18",height:"18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:[(0,t.s)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),(0,t.s)("path",{d:"M9 3v18"})]})}),(0,t.s)(w.Spacer,{}),(0,t.s)(I,{popup:s.visible,onClick:()=>f("SETTING"),children:(0,t.j)("svg",{viewBox:"0 0 24 24",width:"18",height:"18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:[(0,t.s)("circle",{cx:"12",cy:"12",r:"3"}),(0,t.s)("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"})]})})]}),(0,t.j)(C,{children:[(0,t.j)("svg",{viewBox:"0 0 24 24",width:"18",height:"18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:[(0,t.s)("circle",{cx:"12",cy:"12",r:"5"}),(0,t.s)("path",{d:"M12 1v2"}),(0,t.s)("path",{d:"M12 21v2"}),(0,t.s)("path",{d:"M4.22 4.22l1.42 1.42"}),(0,t.s)("path",{d:"M18.36 18.36l1.42 1.42"}),(0,t.s)("path",{d:"M1 12h2"}),(0,t.s)("path",{d:"M21 12h2"}),(0,t.s)("path",{d:"M4.22 19.78l1.42-1.42"}),(0,t.s)("path",{d:"M18.36 5.64l1.42-1.42"})]}),(0,t.s)(A.Toggle,{toggle:"DARK"===n,size:"medium",onChange:function(e){e?c("DARK"):c("LIGHT")},color:"pink"}),(0,t.s)("svg",{viewBox:"0 0 24 24",width:"18",height:"18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:(0,t.s)("path",{d:"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"})})]}),(0,t.j)(u.Modal,{active:s.visible,children:[(0,t.s)(T.Body,{children:(0,t.j)(x.Header,{children:[(0,t.s)(R.Title,{children:"설정"}),(0,t.s)(w.Spacer,{y:2}),(0,t.j)(N,{children:[(0,t.s)(L.Text,{weight:500,children:"텍스트 크기"}),(0,t.s)(M,{children:$.map((e,r,i)=>(0,t.s)(E,{value:e,idx:r,max:i.length,onClick:()=>{g(e)},selected:a},r))})]})]})}),(0,t.s)(v.Actions,{children:(0,t.s)(b.Action,{onClick:()=>f("SETTING"),children:(0,t.s)(L.Text,{children:"닫기"})})})]})]});function f(e){s.visible?d():l(e)}};var O=O,D=O,Z=e.i(17791),Y=e.i(22016);let U=(0,s.f)("div",{target:"e1pklqma0"})(({theme:e})=>o.m`
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
  `),F=(0,s.f)("div",{target:"e1pklqma1"})("display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:60px;",({theme:e})=>o.m`
    background: ${e.colors.PRIMARY.ACCENT_1};
    color: ${e.colors.PRIMARY.ACCENT_3};

    & a {
      color: ${e.colors.PRIMARY.FOREGROUND};
      text-decoration: none;
    }
  `),z=()=>{let e=new Date().getFullYear();return(0,t.j)("div",{children:[(0,t.s)(U,{children:(0,t.j)(Z.Footer,{children:[(0,t.j)(Z.FooterGroup,{title:"사이트 맵",children:[(0,t.s)(Z.FooterLink,{custom:!0,children:(0,t.s)(Y.default,{href:"/",children:"홈"})}),(0,t.s)(Z.FooterLink,{custom:!0,children:(0,t.s)(Y.default,{href:"/posts",children:"포스트"})}),(0,t.s)(Z.FooterLink,{custom:!0,children:(0,t.s)(Y.default,{href:"/resume",children:"이력서"})})]}),(0,t.j)(Z.FooterGroup,{title:"관련 사이트",children:[(0,t.s)(Z.FooterLink,{href:"https://eight20.tistory.com",children:"다른 블로그"}),(0,t.s)(Z.FooterLink,{href:"http://techeer.net",children:"Techeer"}),(0,t.s)(Z.FooterLink,{href:"https://medium.com/team-joon",children:"Techeer 기술블로그"})]})]})}),(0,t.j)(F,{children:[(0,t.j)(L.Text,{size:12,children:["Copyright ⓒ ",e," ",(0,t.s)(Y.default,{href:"https://justsloth.com",children:"Dylan"})," All rights reserved."]}),(0,t.s)(w.Spacer,{y:.1}),(0,t.j)(L.Text,{size:12,children:["Created by ",(0,t.s)(Y.default,{href:"https://justsloth.com",children:"@Dylan"}),". Powered By"," ",(0,t.s)("a",{href:"https://github.com/Vallista/vallista-land",children:"@Vallista-land"})]}),(0,t.s)(w.Spacer,{y:.5})]})]})};var G=e.i(2292),B=e.i(35505),_=e.i(18566);let H=(0,s.f)("aside",{target:"e6i6gow0"})("position:fixed;top:0;left:0;",({theme:e})=>o.m`
    background: ${e.colors.PRIMARY.ACCENT_2};
    z-index: ${e.layers.AFTER_STANDARD+1};
  `,"  @media screen and (min-width:1025px){min-width:80px;height:100vh;}@media screen and (max-width:1024px){top:43px;min-height:60px;width:100vw;overflow-y:hidden;overflow-x:auto;scrollbar-width:8px;scrollbar-color:var(--scrollbar-thumb) var(--scrollbar-background);&::-webkit-scrollbar{background:var(--scrollbar-background);height:8px;width:8px;}&::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb);border-radius:0;}}"),J=(0,s.f)("section",{target:"e6i6gow1"})("display:flex;justify-content:space-between;align-items:center;@media screen and (min-width:1025px){flex-direction:column;height:100vh;}@media screen and (max-width:1024px){flex-direction:row;}"),q=(0,s.f)("nav",{target:"e6i6gow2"})("@media screen and (max-width:1024px){display:flex;flex-direction:row;}"),K=(0,s.f)("a",{target:"e6i6gow3"})("position:relative;display:flex;justify-content:center;align-items:center;width:80px;height:80px;cursor:pointer;transition:background 0.2s ease;& > div > div > div > svg{width:32px;height:32px;}@media screen and (max-width:1024px){width:60px;height:60px;& > figure{width:40px;height:40px;border-radius:12px;overflow:hidden;}& > svg{width:24px;height:24px;}}& > div{width:inherit;height:inherit;& img{border-radius:12px;}}",({theme:e,checked:t})=>o.m`
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

    ${t&&o.m`
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
  `);var W=e.i(62424),V=e.i(90112);let Q=()=>{let e=(0,_.usePathname)(),r=(0,_.useRouter)(),o=(0,i.useMemo)(()=>Object.values(V.l),[]),s=(0,i.useMemo)(()=>Object.values(V.y),[]),[a,n]=(0,i.useState)(!0),l=(0,B.useWindowSize)(),d=(0,W.useSecretClicks)();return(0,i.useEffect)(()=>{n(!((l.width??0)<=1024))},[l]),(0,t.s)(H,{children:(0,t.j)(J,{children:[(0,t.s)(q,{children:o.map(r=>{var i;let o;return(0,t.s)(K,{checked:(i=r.link,(o=e=>e.length>1?e.replace(/\/+$/,""):e)(e)===o(i)),onClick:()=>{var e;(e=r)===V.l.me&&d()||c(e.link)},children:a?(0,t.s)(G.Tooltip,{text:(0,t.s)(L.Text,{children:r.name}),position:"right",children:(0,t.s)("div",{children:r.icon})}):r.icon},r.name)})}),(0,t.s)(q,{children:s.map(e=>""===e.link?void 0:(0,t.s)(K,{onClick:()=>c(e.link,!0),children:a?(0,t.s)(G.Tooltip,{text:(0,t.s)(L.Text,{children:e.name}),position:"right",children:(0,t.s)("div",{children:e.icon})}):e.icon},e.name))})]})});function c(e,t=!1){t?window.open(e,"_blank"):r.push(e)}};var X=e.i(76150),ee=e.i(63581);let et=(0,s.f)("div",{target:"e1e8n3nm0"})("position:fixed;width:320px;height:100vh;top:0;left:80px;overflow-x:hidden;overflow-y:hidden;",({theme:e,scrollState:t,fold:r})=>o.m`
    z-index: ${e.layers.AFTER_STANDARD-1};
    background: ${e.colors.PRIMARY.ACCENT_1};
    box-shadow: ${e.shadows.SMALL};

    ${"SHOW"===t&&o.m`
      &:hover > div:last-of-type {
        margin-right: -8px;
      }
    `}

    ${r&&o.m`
      left: -320px;

      & > div:first-of-type {
        left: -320px;
      }
    `}

  /* ipad Portrait and Landscape */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
      overflow-y: auto;

      ${"SHOW"===t&&o.m`
        &:hover > div:last-of-type {
          margin-right: 0;
        }
      `}
    }
  `,"  @media screen and (max-width:1024px){left:-320px;& > div:first-of-type{left:-320px;}}&:hover{overflow-y:auto;}scrollbar-width:8px;scrollbar-color:var(--scrollbar-thumb) var(--scrollbar-background);&::-webkit-scrollbar{background:var(--scrollbar-background);height:8px;width:8px;}&::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb);border-radius:0;}"),er=(0,s.f)("div",{target:"e1e8n3nm1"})("display:flex;flex-direction:column;position:fixed;top:0;left:80px;transform:translate3d(0,0,1);width:320px;padding-bottom:14px;",({theme:e,fold:t})=>o.m`
    z-index: ${e.layers.AFTER_STANDARD};
    background: ${e.colors.PRIMARY.ACCENT_1};

    ${t&&o.m`
      left: -320px;

      & > div:first-of-type {
        left: -320px;
      }
    `}
  `,"  @media screen and (max-width:1024px){left:-320px;& > div:first-of-type{left:-320px;}}");(0,s.f)("button",{target:"e1e8n3nm2"})("border:none;background:none;outline:none;cursor:pointer;padding:0;transition:color 0.2s cubic-bezier(0.215,0.61,0.355,1);",({theme:e})=>o.m`
    color: ${e.colors.PRIMARY.ACCENT_4};
    &:hover {
      color: ${e.colors.PRIMARY.FOREGROUND};
    }
  `);let ei=(0,s.f)("div",{target:"e1e8n3nm3"})("display:flex;justify-content:space-between;align-items:flex-end;height:35px;font-weight:600;font-size:14px;padding:0 28px 2px;& > button{margin:0;}"),eo=(0,s.f)("div",{target:"e1e8n3nm4"})("display:flex;align-items:flex-end;height:38px;padding:0 24px;max-width:100%;& > div{width:100%;}"),es=(0,s.f)("div",{target:"e1e8n3nm5"})("margin-top:73px;padding:16px 24px 32px;"),ea=(0,s.f)("nav",{target:"e1e8n3nm6"})("display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;"),en=(0,s.f)("a",{target:"e1e8n3nm7"})("position:relative;display:flex;justify-content:flex-end;align-items:flex-end;width:130px;height:130px;margin-bottom:12px;border-radius:12px;cursor:pointer;overflow:hidden;transform:scale(1,1);transition:transform 0.2s cubic-bezier(0.075,0.82,0.165,1);",({theme:e,image:t,text:r,isActive:i})=>o.m`
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
  `,"  &:hover{transform:scale(1.1,1.1);}"),el=(0,s.f)("nav",{target:"e1e8n3nm8"})("display:flex;flex-direction:column;margin:12px 0 0;&:first-child{margin-top:0;}"),ed=(0,s.f)("div",{target:"e1e8n3nm9"})(({theme:e})=>o.m`
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    background-color: ${e.colors.PRIMARY.ACCENT_1};
    padding: 0;
    margin: 0 0 6px 0;
    height: 30px;
  `),ec=(0,s.f)("div",{target:"e1e8n3nm10"})("display:flex;justify-content:flex-start;align-items:flex-end;& > div{& > svg{position:relative;",({fold:e})=>!e&&o.m`
          top: -2px;
          left: -2px;
        `,"}}"),eg=(0,s.f)("div",{target:"e1e8n3nm11"})("overflow-y:hidden;will-change:height;transition:height 0.2s ease;",({fold:e})=>o.m`
    height: ${e?0:"auto"};
  `),ef=(0,s.f)("a",{target:"e1e8n3nm12"})("position:relative;display:flex;justify-content:flex-start;align-items:center;cursor:pointer;padding:6px 0;transition:border 0.2s ease;",({theme:e,isActive:t})=>o.m`
    ${t&&o.m`
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
  `,"  & > svg{width:20px;height:20px;}");var O=O,D=O;let ep=[],eh=e=>{let o=(e=>{let{posts:t}=e,r=(0,_.usePathname)(),o=(0,_.useRouter)(),[s,a]=(0,i.useState)(()=>O.get("search")||""),[n,l]=(0,i.useState)(()=>{let e=O.get("view-type");return("list"===e||"card"===e)&&D.set("view-type",e.toUpperCase()),O.get("view-type")||"LIST"}),[d,c]=(0,i.useState)("HIDE"),g=(0,i.useMemo)(()=>{let e=new Set;t.forEach(t=>{t.tags.forEach(t=>{ep.includes(t)||e.add(t)})});let r={};return e.forEach(e=>{r[e]=[]}),t.forEach(e=>{e.tags.filter(e=>!ep.includes(e)).forEach(t=>{r[t]&&r[t].push(e)})}),r},[t]),f=(0,i.useMemo)(()=>Object.entries(g).reduce((e,t)=>(e[t[0]]=t[1].filter(e=>e.name.toLocaleUpperCase().includes(s.toLocaleUpperCase())),e),{}),[s,g]);return{...e,posts:f,totalPosts:t.length,scrollState:d,viewState:n,search:s,isNowPage:function(e){return decodeURIComponent(r).includes(e.slice(0,-1))},changeScrollState:function(e=0,t=0){c(e>t?"SHOW":"HIDE")},changeViewState:function(){let e="CARD"===n?"LIST":"CARD";D.set("view-type",e),l(e)},changeSearch:function(e){a(e),D.set("search","")},changeLocation:function(e){o.push(e)}}})(e),{posts:s,totalPosts:a,search:n,viewState:l,changeScrollState:d,changeSearch:c,changeLocation:g,isNowPage:f}=o,p=(0,i.useRef)(null);return(0,i.useEffect)(()=>{d(p.current?.scrollHeight,p.current?.clientHeight)},[n,s,l]),(0,t.j)("aside",{children:[(0,t.j)(er,{...o,children:[(0,t.s)(ei,{children:(0,t.j)(L.Text,{children:["글"," ",(0,t.j)(L.Text,{as:"span",color:X.Colors.PRIMARY.ACCENT_4,children:["(",a,")"]})]})}),(0,t.s)(eo,{children:(0,t.s)(ee.SearchInput,{value:n,onReset:function(){c("")},onChange:function(e){c(e)},size:"small",placeholder:"검색.."})})]}),(0,t.s)(et,{ref:p,...o,children:(0,t.s)(es,{children:(0,t.s)(r.Container,{children:Object.entries(s).map(([e,r])=>(0,t.s)(em,{title:e,posts:r,moveToLocation:h,isNowPage:f,viewState:l},e))})})})]});function h(e){g(e)}},em=({viewState:e,posts:r,title:o,isNowPage:s,moveToLocation:a})=>{let[n,l]=(0,i.useState)(!r.find(e=>s(e.slug))),d=(0,i.useMemo)(()=>"CARD"===e?ea:el,[e]),c=(0,i.useMemo)(()=>"CARD"===e?en:ef,[e]);return(0,t.j)(d,{children:[(0,t.j)(ed,{onClick:function(){l(!n)},children:[(0,t.s)(ec,{fold:n,children:n?(0,t.s)("div",{style:{width:"24px",height:"16px"},children:(0,t.s)("svg",{width:"16",height:"16",viewBox:"0 0 32 32",stroke:"currentColor",children:(0,t.s)("g",{children:(0,t.s)("g",{children:(0,t.s)("path",{d:"M17,9 L15,5 L4.00276013,5 C2.89666625,5 2,5.88967395 2,6.991155 L2,25.008845 C2,26.1085295 2.89971268,27 3.99328744,27 L29.0067126,27 C30.1075748,27 31,26.1073772 31,25.0049107 L31,10.9950893 C31,9.8932319 30.1029399,9 28.9941413,9 L17,9 L17,9 Z M16.3599854,10 L14.4000244,6 L3.99173483,6 C3.44401481,6 3,6.45530558 3,6.99180311 L3,25.0081969 C3,25.5559546 3.44610862,26 3.99296544,26 L29.0070346,26 C29.5554342,26 30,25.5553691 30,24.9991283 L30,11.0008717 C30,10.4481055 29.5461723,10 28.9970172,10 L16.3599854,10 L16.3599854,10 Z"})})})})}):(0,t.s)("div",{style:{width:"24px",height:"16px"},children:(0,t.s)("svg",{width:"20",height:"20",viewBox:"0 0 100 100",stroke:"currentColor",children:(0,t.s)("path",{fill:"currentColor",d:"M97.197,40.597C96.914,40.221,96.47,40,96,40h-8.5v-9.327c0-0.828-0.671-1.499-1.498-1.5l-44.407-0.055l-7.179-7.179c-0.281-0.281-0.663-0.439-1.061-0.439H12c-0.828,0-1.5,0.672-1.5,1.5v54c0,0.828,0.672,1.5,1.5,1.5h73.795c0.731,0,1.339-0.525,1.472-1.218c0.071-0.115,0.137-0.234,0.176-0.37l10-35C97.571,41.46,97.481,40.973,97.197,40.597z M32.734,24.5l7.178,7.178c0.28,0.281,0.661,0.438,1.059,0.439L84.5,32.171V40H22c-0.67,0-1.258,0.444-1.442,1.088L13.5,65.79V24.5H32.734z M84.726,75.5h-70.88L23.132,43h70.88L84.726,75.5z"})})})}),(0,t.s)(L.Text,{children:o})]}),(0,t.s)(eg,{fold:n,children:r.map(r=>(0,t.s)(c,{onClick:()=>a(r.slug),image:r.image,text:r.name,isActive:s(r.slug),children:"LIST"===e&&(0,t.j)(t.y,{children:[(0,t.s)("div",{children:(0,t.j)("svg",{viewBox:"0 0 24 24",width:"20",height:"20",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:[(0,t.s)("path",{d:"M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"}),(0,t.s)("path",{d:"M13 2v7h7"})]})}),(0,t.s)(L.Text,{children:r.name})]})},r.slug))})]})},eu=e=>{let{children:o,posts:s}=e,[d,c]=(0,i.useState)(!1),g=(0,i.useMemo)(()=>(0,S.h)(s).map(e=>({name:e.frontmatter.title,slug:e.fields.slug,series:e.frontmatter.series||null,image:e.frontmatter.image?.publicURL||"/profile.jpg",tags:e.frontmatter.tags||[]})),[s]);return(0,i.useEffect)(()=>{c("true"===O.get("sidebar-fold"))},[]),(0,i.useEffect)(()=>{D.set("sidebar-fold",String(d))},[d]),(0,t.s)(a,{children:(0,t.j)(r.Container,{children:[(0,t.s)(Q,{}),(0,t.s)(eh,{posts:g,fold:d}),(0,t.s)(j,{fold:d,folding:function(){c(!d)}}),(0,t.j)(n,{fold:d,children:[(0,t.s)(l,{children:o}),(0,t.s)(z,{})]})]})})};var eT=e.i(53482);e.s(["LayoutWrapper",0,function({children:e}){let r=eT.default.map(e=>({fields:{slug:e.slug},timeToRead:e.timeToRead,frontmatter:{title:e.frontmatter.title,date:e.frontmatter.date,tags:e.frontmatter.tags,image:e.frontmatter.image?{publicURL:e.frontmatter.image}:null,series:e.frontmatter.series,draft:e.frontmatter.draft},html:""}));return(0,t.s)(eu,{posts:r,children:e})}],40710)},53482,(e,t,r)=>{t.exports=JSON.parse('[{"slug":"/posts/MikroORM-배치-사용기/","timeToRead":4,"frontmatter":{"title":"MikroORM 배치 사용기","date":"2025-03-10T15:23:12.000Z","tags":["MikroORM","NestJs"],"image":"/posts/posts/MikroORM-배치-사용기/assets/1.png","series":"MikroORM 사용기","draft":false}},{"slug":"/posts/book/review/오픈-비즈니스패권의-열쇠/","timeToRead":1,"frontmatter":{"title":"오픈 비즈니스 패권의 열쇠","date":"2024-12-22T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/book/review/비전공자도-배울-수-있는-타입스크립트/","timeToRead":1,"frontmatter":{"title":"비전공자도 배울 수 있는 타입스크립트","date":"2024-11-14T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/book/review/테라폼으로-시작하는-IaC/","timeToRead":1,"frontmatter":{"title":"테라폼으로 시작하는 IaC","date":"2024-10-16T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/book/review/코드-밖-커뮤니케이션/","timeToRead":1,"frontmatter":{"title":"코드 밖 커뮤니케이션","date":"2024-09-22T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/book/review/NGINX-쿡북/","timeToRead":1,"frontmatter":{"title":"NGINX 쿡북","date":"2024-08-14T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/book/review/처음-시작하는-FastAPI/","timeToRead":2,"frontmatter":{"title":"처음 시작하는 FastAPI","date":"2024-07-23T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/book/review/업무에-활용하는-nodejs/","timeToRead":1,"frontmatter":{"title":"업무에 활용하는 Node.js","date":"2024-06-10T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/book/review/한권으로-배우는-도커&쿠버네티스/","timeToRead":1,"frontmatter":{"title":"한 권으로 배우는 도커 & 쿠버네티스","date":"2024-05-17T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/book/review/도시를-만드는-기술-이야기/","timeToRead":1,"frontmatter":{"title":"도시를 만드는 기술 이야기","date":"2024-04-10T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/book/가상-면접-사례-솔루션/1장/","timeToRead":2,"frontmatter":{"title":"사용자 수에 따른 규모 확장성","date":"2024-03-13T15:23:12.000Z","tags":["책 스터디"],"image":null,"series":"가상 면접 사례로 배우는 대규모 시스템 설계 기초","draft":true}},{"slug":"/posts/book/review/게임AI를-위한-탐색-알고리즘/","timeToRead":1,"frontmatter":{"title":"게임 AI를 위한 탐색 알고리즘","date":"2024-03-12T15:23:12.000Z","tags":["책 리뷰"],"image":null,"series":"책 리뷰","draft":false}},{"slug":"/posts/블로그-이관/","timeToRead":1,"frontmatter":{"title":"블로그 이관","date":"2024-02-15T23:45:08.000Z","tags":["블로그 이관"],"image":"/posts/posts/블로그-이관/assets/0.jpeg","series":null,"draft":false}},{"slug":"/posts/TIL/2023/2023-12/프로젝트-회고/","timeToRead":2,"frontmatter":{"title":"2023 사내 프로젝트 회고","date":"2023-12-26T15:23:12.000Z","tags":["회고"],"image":null,"series":"배포 회고","draft":false}},{"slug":"/posts/TIL/2023/2023-12/나무늘보-프롬프트/","timeToRead":1,"frontmatter":{"title":"GPT-4 나무늘보 프롬프트","date":"2023-12-16T15:23:12.000Z","tags":["GPT-4"],"image":null,"series":"프롬프트","draft":false}},{"slug":"/posts/TIL/2023/2023-12/채팅-리서치/","timeToRead":2,"frontmatter":{"title":"채팅 구현 관련 서비스 리서치","date":"2023-12-13T15:23:12.000Z","tags":["채팅"],"image":null,"series":"리서치 기록","draft":false}},{"slug":"/posts/TIL/2023/2023-12/NestJs/Request-LifeCycle/","timeToRead":2,"frontmatter":{"title":"NestJs - Request LifeCycle","date":"2023-12-11T15:23:12.000Z","tags":["NestJs"],"image":null,"series":"NestJs 개념 정리","draft":false}},{"slug":"/posts/TIL/2023/2023-12/NestJs/LifeCycle/","timeToRead":2,"frontmatter":{"title":"NestJs - LifeCycle","date":"2023-12-09T15:23:12.000Z","tags":["NestJs"],"image":null,"series":"NestJs 개념 정리","draft":false}},{"slug":"/posts/TIL/2023/2023-12/DirtyChecking/","timeToRead":1,"frontmatter":{"title":"더티 체킹","date":"2023-12-03T15:23:12.000Z","tags":["SpringJPA"],"image":null,"series":null,"draft":false}},{"slug":"/posts/TIL/2023/2023-11/NestJs/Pipes/","timeToRead":2,"frontmatter":{"title":"NestJs - Pipes","date":"2023-11-30T15:23:12.000Z","tags":["NestJs"],"image":null,"series":"NestJs 개념 정리","draft":false}},{"slug":"/posts/TIL/2023/2023-11/Nginx/","timeToRead":2,"frontmatter":{"title":"Docker-compose, Nginx와 함께하는 무중단 배포","date":"2023-11-16T15:23:12.000Z","tags":["NGINX"],"image":null,"series":"배포 회고","draft":false}},{"slug":"/posts/TIL/2023/2023-11/NestJs/MetaData/","timeToRead":1,"frontmatter":{"title":"NestJs - MetaData","date":"2023-11-09T15:23:12.000Z","tags":["NestJs"],"image":null,"series":"NestJs 개념 정리","draft":false}},{"slug":"/posts/TIL/2023/2023-11/AWS - EBS용량관리/","timeToRead":1,"frontmatter":{"title":"AWS - EBS 용량 관리","date":"2023-11-06T15:23:12.000Z","tags":["AWS"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-11/NestJs/DynamicModule/","timeToRead":1,"frontmatter":{"title":"NestJs - Dynamic Module","date":"2023-11-03T15:23:12.000Z","tags":["NestJs"],"image":null,"series":"NestJs 개념 정리","draft":false}},{"slug":"/posts/TIL/2023/2023-10/OpenTelemetry/메트릭/","timeToRead":1,"frontmatter":{"title":"OpenTelemetry  - 메트릭","date":"2023-10-30T15:23:12.000Z","tags":["관찰가능성"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/사이드프로젝트-배포-회고/","timeToRead":3,"frontmatter":{"title":"사이드 프로젝트 배포 회고","date":"2023-10-23T15:23:12.000Z","tags":["사이드 프로젝트"],"image":null,"series":"배포 회고","draft":false}},{"slug":"/posts/TIL/2023/2023-10/OpenTelemetry/시그널-분산추적/","timeToRead":2,"frontmatter":{"title":"OpenTelemetry 시그널 - 분산 추적","date":"2023-10-21T15:23:12.000Z","tags":["관찰가능성"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-10/OpenTelemetry/컨텍스트-전파/","timeToRead":1,"frontmatter":{"title":"OpenTelemetry - 컨텍스트 전파","date":"2023-10-16T15:23:12.000Z","tags":["관찰가능성"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-10/OpenTelemetry/파이프라인-리소스/","timeToRead":2,"frontmatter":{"title":"OpenTelemetry - 파이프라인, 리소스","date":"2023-10-14T15:23:12.000Z","tags":["관찰가능성"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-10/OpenTelemetry/","timeToRead":1,"frontmatter":{"title":"OpenTelemetry","date":"2023-10-11T15:23:12.000Z","tags":["관찰가능성"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-10/제3자-결제-애플/","timeToRead":5,"frontmatter":{"title":"관찰 가능성 엔지니어링 & 제 3자 결제 - 애플","date":"2023-10-10T15:23:12.000Z","tags":["관찰가능성","제3자-결제"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-10/제3자-결제-구글/","timeToRead":2,"frontmatter":{"title":"제 3자 결제 - 구글","date":"2023-10-04T15:23:12.000Z","tags":["제3자-결제"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-10/PortOne-웹훅/","timeToRead":2,"frontmatter":{"title":"PortOne - 웹훅","date":"2023-10-03T15:23:12.000Z","tags":["PortOne"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-10/PortOne-인증결제/","timeToRead":1,"frontmatter":{"title":"PortOne - 인증결제","date":"2023-10-01T15:23:12.000Z","tags":["PortOne"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/book/대용량-DB-솔루션/1장/","timeToRead":2,"frontmatter":{"title":"대용량 DB 솔루션 1장 정리","date":"2023-09-28T15:23:12.000Z","tags":["책 스터디"],"image":null,"series":"대용량 DB 솔루션","draft":false}},{"slug":"/posts/TIL/2023/2023-09/PortOne/","timeToRead":1,"frontmatter":{"title":"PortOne - 비인증결제 정리","date":"2023-09-25T15:23:12.000Z","tags":["PortOne"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-09/인앱-결제/환불/","timeToRead":1,"frontmatter":{"title":"인앱 결제 환불 정리","date":"2023-09-23T15:23:12.000Z","tags":["인앱결제"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-09/인앱-결제/","timeToRead":2,"frontmatter":{"title":"인앱 결제 정리","date":"2023-09-21T15:23:12.000Z","tags":["인앱결제"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-09/SRE/","timeToRead":1,"frontmatter":{"title":"SRE (Site Reliability Engineering) 개념","date":"2023-09-20T15:23:12.000Z","tags":["SRE"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-09/SQL-INTERSECT/","timeToRead":1,"frontmatter":{"title":"SQL - INTERSECT","date":"2023-09-19T15:23:12.000Z","tags":["SQL"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-09/SQL-UNION-ALL/","timeToRead":1,"frontmatter":{"title":"SQL - UNION / UNION ALL","date":"2023-09-17T15:23:12.000Z","tags":["SQL"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-09/MongoDB-local-참가-후기/","timeToRead":1,"frontmatter":{"title":"MongoDB.local Seoul 짧은 참가 후기","date":"2023-09-14T15:23:12.000Z","tags":["MongoDB"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-09/OLTP VS OLAP/","timeToRead":1,"frontmatter":{"title":"OLTP vs OLAP","date":"2023-09-13T15:23:12.000Z","tags":["Processing System"],"image":null,"series":"TIL","draft":false}},{"slug":"/posts/TIL/2023/2023-09/TypeORM-Upsert-중복제거/","timeToRead":1,"frontmatter":{"title":"TypeORM orIgnore 메소드 Upsert시 중복 데이터 INSERT 검증 방식 변경","date":"2023-09-12T03:23:12.000Z","tags":["TypeORM"],"image":null,"series":"TIL","draft":false}}]')},62424,e=>{"use strict";var t=e.i(18566),r=e.i(71645);let i="/desktop",o=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];e.s(["DESKTOP_PATH",0,i,"DesktopEasterEgg",0,()=>{let e=(0,t.useRouter)();return(0,r.useEffect)(()=>{console.log("%c🖥  ↑ ↑ ↓ ↓ ← → ← → B A","font-size: 13px; color: #8a93ff;");let t=0,r=r=>{var s;if((s=r.target)instanceof HTMLElement&&(s.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(s.tagName)))return;let a=1===r.key.length?r.key.toLowerCase():r.key;a===o[t]?t+=1:t=a===o[0]?2===t?2:1:0,t===o.length&&(t=0,e.push(i))};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[e]),null},"useSecretClicks",0,function(){let e=(0,t.useRouter)(),o=(0,r.useRef)([]);return(0,r.useCallback)(()=>{let t=Date.now();return o.current=[...o.current.filter(e=>t-e<2e3),t],!(o.current.length<5)&&(o.current=[],e.push(i),!0)},[e])}])},5949,e=>{"use strict";var t=e.i(57727),r=e.i(84364),i=e.i(22013);let o=(0,r.q)("from{opacity:0;}to{opacity:1;}"),s=(0,i.f)("div",{target:"e14re3yn0"})("animation:",o," 0.2s ease;");e.s(["Loader",0,({children:e})=>(0,t.s)(s,{children:e})])}]);