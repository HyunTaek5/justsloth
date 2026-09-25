(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,42678,e=>{"use strict";var t=e.i(57727);e.i(79467);var i=e.i(80672),s=e.i(21690),r=e.i(67449),n=e.i(18566),a=e.i(84364),l=e.i(22013);let o=(0,l.default)("header",{target:"e1yd8gm80"})(({theme:e,underline:t})=>a.css`
    ${t&&a.css`
      border-bottom: 1px solid ${e.colors.PRIMARY.ACCENT_4};
    `}
  `),c=(0,l.default)("div",{target:"e1yd8gm81"})(),d=(0,l.default)("a",{target:"e1yd8gm82"})("display:flex;justify-content:space-between;align-items:center;border:none !important;border-radius:6px;padding:0.625rem 1.5rem;margin:0 -1.5rem;",({theme:e})=>a.css`
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
  `);e.s(["ListTable",0,e=>{let{title:a,list:l,underline:h=!1}=e,p=(0,n.useRouter)();return(0,t.jsxs)(i.Container,{children:[(0,t.jsx)(o,{underline:h,children:(0,t.jsx)(r.Text,{as:"h3",size:32,weight:800,children:a})}),(0,t.jsx)(s.Spacer,{y:1}),(0,t.jsx)(c,{children:l.map(e=>(0,t.jsxs)(d,{onClick:()=>p.push(e.slug),children:[(0,t.jsx)(r.Text,{as:"span",size:16,weight:600,children:e.name}),(0,t.jsx)(r.Text,{as:"span",size:14,weight:300,children:e.date})]},e.slug))})]})}],42678)},69338,e=>{"use strict";var t=e.i(57727),i=e.i(22013),s=e.i(71645);e.i(79467);var r=e.i(80672),n=e.i(21690),a=e.i(67449),l=e.i(63581),o=e.i(42678);let c=(0,i.default)("section",{target:"e1tn79ul0"})("margin:0 auto;width:100%;max-width:900px;padding:2rem;");e.s(["PostsClient",0,function({groupedByYear:e,posts:i}){let[d,h]=(0,s.useState)(""),p=Object.keys(e).sort((e,t)=>Number(t)-Number(e)),x=(0,s.useMemo)(()=>i.filter(e=>e.name.toLocaleUpperCase().includes(d.toLocaleUpperCase())),[i,d]),u=0!==d.length;return(0,t.jsx)(r.Container,{children:(0,t.jsxs)(c,{children:[(0,t.jsxs)(r.Container,{children:[(0,t.jsx)("div",{children:(0,t.jsx)(l.SearchInput,{value:d,onChange:h,size:"large",placeholder:"검색할 텍스트를 입력하세요."})}),(0,t.jsx)(n.Spacer,{y:2})]}),u?0===x.length?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.Text,{size:20,weight:600,children:"검색된 결과가 없어요 :("}),(0,t.jsx)(a.Text,{size:20,weight:600,children:"다른 결과를 검색해보시겠어요?"})]}):(0,t.jsx)(o.ListTable,{underline:!0,title:"검색결과",list:x}):p.map(i=>(0,t.jsxs)(r.Container,{children:[(0,t.jsx)("div",{children:(0,t.jsx)(o.ListTable,{title:i,list:e[i],underline:!0})}),(0,t.jsx)(n.Spacer,{y:2})]},i))]})})}])}]);