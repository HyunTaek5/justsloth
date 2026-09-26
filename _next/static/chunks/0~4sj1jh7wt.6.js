(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,42678,e=>{"use strict";var t=e.i(57727);e.i(79467);var i=e.i(80672),r=e.i(21690),s=e.i(67449),a=e.i(18566),n=e.i(84364),o=e.i(22013);let l=(0,o.default)("header",{target:"e1yd8gm80"})(({theme:e,underline:t})=>n.css`
    ${t&&n.css`
      border-bottom: 1px solid ${e.colors.PRIMARY.ACCENT_4};
    `}
  `),d=(0,o.default)("div",{target:"e1yd8gm81"})(),h=(0,o.default)("a",{target:"e1yd8gm82"})("display:flex;justify-content:space-between;align-items:center;border:none !important;border-radius:6px;padding:0.625rem 1.5rem;margin:0 -1.5rem;",({theme:e})=>n.css`
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
  `);e.s(["ListTable",0,e=>{let{title:n,list:o,underline:c=!1}=e,m=(0,a.useRouter)();return(0,t.jsxs)(i.Container,{children:[(0,t.jsx)(l,{underline:c,children:(0,t.jsx)(s.Text,{as:"h3",size:32,weight:800,children:n})}),(0,t.jsx)(r.Spacer,{y:1}),(0,t.jsx)(d,{children:o.map(e=>(0,t.jsxs)(h,{onClick:()=>m.push(e.slug),children:[(0,t.jsx)(s.Text,{as:"span",size:16,weight:600,children:e.name}),(0,t.jsx)(s.Text,{as:"span",size:14,weight:300,children:e.date})]},e.slug))})]})}],42678)},22569,e=>{"use strict";var t=e.i(57727),i=e.i(84364),r=e.i(22013),s=e.i(18566);e.i(79467);var a=e.i(99966),n=e.i(80672),o=e.i(67449),l=e.i(42678),d=e.i(32832);let h=(0,i.keyframes)("0%{transform:rotateZ(0);}50%{transform:rotateZ(30deg);}100%{transform:rotateZ(0deg);}"),c=(0,r.default)("div",{target:"e1yc1phh0"})("margin-left:auto;margin-right:auto;max-width:900px;padding:2rem;"),m=(0,r.default)("header",{target:"e1yc1phh1"})("padding:2rem 0;"),g=(0,r.default)("div",{target:"e1yc1phh2"})("margin-bottom:1.5rem;max-width:550px;& > span:first-of-type{position:relative;&::after{position:absolute;right:-4rem;top:-0.5rem;content:'✋';display:block;animation:",h," 1s ease-in-out infinite;}}"),p=(0,r.default)("div",{target:"e1yc1phh3"})("max-width:550px;margin-bottom:2rem;"),u=(0,r.default)("section",{target:"e1yc1phh4"})("width:100%;margin-left:auto;margin-right:auto;max-width:900px;padding:2rem;");e.s(["HomeClient",0,function({posts:e}){let i=(0,s.useRouter)();return(0,t.jsxs)(n.Container,{children:[(0,t.jsx)(m,{children:(0,t.jsxs)(c,{children:[(0,t.jsxs)(g,{children:[(0,t.jsx)(o.Text,{as:"span",size:48,weight:800,children:"어서오세요!"}),(0,t.jsx)(o.Text,{as:"h1",size:48,weight:800,lineHeight:56,children:"저는 오현택입니다."})]}),(0,t.jsx)(p,{children:(0,t.jsxs)(o.Text,{as:"p",size:20,weight:400,lineHeight:40,children:["대한민국 서울에서 ",(0,t.jsx)("strong",{children:"소프트웨어 엔지니어"}),"로 일하고 있어요. 한 분야에 국한되지 않고, 다양한 도메인을 접해보는 것에 즐거움을 느낍니다. 공부하면서, 또는 이슈 대응하면서 알게된 점 위주로 블로그에 글을 작성하고 있어요. 최근에는 Go 언어 생태계에 관심이 많아, 많은 시간을 투자하고 있어요."]})}),(0,t.jsx)(a.Button,{size:"large",color:"alert",onClick:()=>i.push("/posts"),children:(0,t.jsx)(o.Text,{size:16,weight:800,children:"블로그 글 보러갈까요?"})})]})}),(0,t.jsx)(u,{children:(0,t.jsx)(l.ListTable,{title:"최근 글",list:e.map(e=>({name:e.name,slug:e.slug,date:function(e){let[,t,i]=(0,d.getTime)(e);return`${Number(t)}월 ${Number(i)}일`}(e.date)}))})})]})}])}]);