import{u as f,a as g,_ as w,b as y}from"./useDataFetch.0c147eef.js";import{A as k,a as i,u as t,c as d,F as h,b as o,w as u,B as a,e as n,t as _,C as x,r as b,f as $,o as s}from"./entry.62a9df3c.js";const N={id:"show"},L={id:"showNavLinks",class:"grid mx-auto"},T={itemScope:"",itemType:"http://schema.org/Article"},B={class:"lastUpdated"},A=["dateTime"],C=["innerHTML"],D={key:0,class:"social"},V=["href","title"],F=["src"],H={key:1,id:"youtube"},I={class:"video"},M=["src","title"],Y={__name:"[show]",setup(S){const m=k().params.show,{data:e,pending:p}=f(`page-${m}`,()=>g(`show=${m}`));return(E,P)=>{const v=y,l=w,r=$("router-link");return s(),i("div",N,[t(p)?(s(),d(v,{key:0})):(s(),i(h,{key:1},[o("div",L,[o("div",null,[t(e).prev?(s(),d(r,{key:0,to:`/show/${t(e).prev.slug}`,class:"grid",rel:"prev",title:t(e).prev.title},{default:u(()=>[n(l,{icon:"material-symbols:arrow-left-rounded",title:"data.prev.title"})]),_:1},8,["to","title"])):a("",!0)]),n(r,{to:"/",rel:"home",class:"grid"},{default:u(()=>[n(l,{icon:"ic:baseline-list-alt",title:"Home"})]),_:1}),o("div",null,[t(e).next?(s(),d(r,{key:0,to:`/show/${t(e).next.slug}`,class:"grid",rel:"next",title:t(e).next.title},{default:u(()=>[n(l,{icon:"material-symbols:arrow-right-rounded",title:t(e).next.title},null,8,["title"])]),_:1},8,["to","title"])):a("",!0)])]),o("article",T,[o("h1",null,_(t(e).title),1),o("div",B,[x(" Last update: "),o("time",{itemProp:"dateModified",dateTime:t(e).updated},_(t(e).showDate),9,A)]),o("div",{innerHTML:t(e).content??t(e).description,id:"showContent",class:"content"},null,8,C),Array.isArray(t(e).links)?(s(),i("ul",D,[(s(!0),i(h,null,b(t(e).links,c=>(s(),i("li",null,[o("a",{href:c.url,title:`${c.platformName}: ${t(e).title}`},[o("img",{src:`/icons/${c.platformIcon}.svg`,height:"30"},null,8,F)],8,V)]))),256))])):a("",!0),t(e).videoId?(s(),i("section",H,[o("h2",null,"Latest video on YouTube: "+_(t(e).videoName),1),o("div",I,[o("iframe",{src:`https://www.youtube-nocookie.com/embed/${t(e).videoId}`,title:t(e).videoName},null,8,M)])])):a("",!0)])],64))])}}};export{Y as default};