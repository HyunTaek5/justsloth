(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,58347,e=>{"use strict";var i=e.i(57727),r=e.i(22013),t=e.i(71645);e.i(79467);var n=e.i(80672),s=e.i(21690),a=e.i(67449),l=e.i(63581),o=e.i(42678);let c=(0,r.f)("section",{target:"e11rfx8x0"})("margin:0 auto;width:100%;max-width:900px;padding:2rem;");e.s(["PostsClient",0,function({groupedByYear:e,posts:r}){let[d,h]=(0,t.useState)(""),p=Object.keys(e).sort((e,i)=>Number(i)-Number(e)),u=(0,t.useMemo)(()=>r.filter(e=>e.name.toLocaleUpperCase().includes(d.toLocaleUpperCase())),[r,d]),m=0!==d.length;return(0,i.s)(n.Container,{children:(0,i.j)(c,{children:[(0,i.j)(n.Container,{children:[(0,i.s)("div",{children:(0,i.s)(l.SearchInput,{value:d,onChange:h,size:"large",placeholder:"검색할 텍스트를 입력하세요."})}),(0,i.s)(s.Spacer,{y:2})]}),m?0===u.length?(0,i.j)(i.y,{children:[(0,i.s)(a.Text,{size:20,weight:600,children:"검색된 결과가 없어요 :("}),(0,i.s)(a.Text,{size:20,weight:600,children:"다른 결과를 검색해보시겠어요?"})]}):(0,i.s)(o.f,{underline:!0,title:"검색결과",list:u}):p.map(r=>(0,i.j)(n.Container,{children:[(0,i.s)("div",{children:(0,i.s)(o.f,{title:r,list:e[r],underline:!0})}),(0,i.s)(s.Spacer,{y:2})]},r))]})})}])},42678,e=>{"use strict";var i=e.i(57727);e.i(79467);var r=e.i(80672),t=e.i(21690),n=e.i(67449),s=e.i(18566),a=e.i(84364),l=e.i(22013);let o=(0,l.f)("header",{target:"epgb23r0"})(({theme:e,underline:i})=>a.m`
    ${i&&a.m`
      border-bottom: 1px solid ${e.colors.PRIMARY.ACCENT_4};
    `}
  `),c=(0,l.f)("div",{target:"epgb23r1"})(),d=(0,l.f)("a",{target:"epgb23r2"})("display:flex;justify-content:space-between;align-items:center;border:none !important;border-radius:6px;padding:0.625rem 1.5rem;margin:0 -1.5rem;",({theme:e})=>a.m`
    color: ${e.colors.PRIMARY.ACCENT_6} !important;

    &:hover {
      background: ${e.colors.PRIMARY.ACCENT_2} !important;
      color: ${e.colors.PRIMARY.FOREGROUND} !important;
    }

    & > span:first-of-type {
      max-width: 85%;
    }

    & > span:last-of-type {
      max-width: 15%;
      white-space: nowrap;
    }

    &:last-of-type {
      color: ${e.colors.PRIMARY.ACCENT_3};
    }
  `);e.s(["f",0,e=>{let{title:a,list:l,underline:h=!1}=e,p=(0,s.useRouter)();return(0,i.j)(r.Container,{children:[(0,i.s)(o,{underline:h,children:(0,i.s)(n.Text,{as:"h3",size:32,weight:800,children:a})}),(0,i.s)(t.Spacer,{y:1}),(0,i.s)(c,{children:l.map(e=>(0,i.j)(d,{onClick:()=>p.push(e.slug),children:[(0,i.s)(n.Text,{as:"span",size:16,weight:600,children:e.name}),(0,i.s)(n.Text,{as:"span",size:14,weight:300,children:e.date})]},e.slug))})]})}],42678)}]);