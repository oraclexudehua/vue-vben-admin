import{u as e}from"./useContextMenu.adfc6dcd.js";import{a as t}from"./index.6c4bbdf5.js";import{d as i,g as n,h as o,o as s,i as l,w as a,j as r,m as p}from"./index.25b7b5fc.js";import{_ as d}from"./index.751a0b92.js";import"./index.071f175b.js";import"./index.10a2e5b4.js";import"./RightOutlined.80d69337.js";import"./EllipsisOutlined.3ddff257.js";import"./types.75b2061b.js";import"./isEqual.ef398636.js";import"./toInteger.34e54435.js";import"./index.95c10fda.js";import"./index.d317f8e9.js";import"./domUtils.7252317e.js";import"./_stringToArray.fd7cea8c.js";import"./useTimeout.4101b58e.js";import"./useScrollTo.3e27ea8f.js";import"./animation.5c6ea99a.js";import"./vendor.3b1829c7.js";import"./index.1a47fee9.js";import"./DownOutlined.8796a279.js";import"./index.fc4261e4.js";import"./usePageContext.003372c7.js";import"./transButton.6bbddf74.js";import"./ArrowLeftOutlined.5053e10e.js";var m=i({components:{CollapseContainer:t,PageWrapper:d},setup(){const[t]=e(),{createMessage:i}=n();return{handleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",handler:()=>{i.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{i.success("click open")}}]})},handleMultipleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{i.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}}}});const c=p("Right Click on me"),u=p("Right Click on me");m.render=function(e,t,i,n,p,d){const m=o("a-button"),f=o("CollapseContainer"),b=o("PageWrapper");return s(),l(b,{title:"右键菜单示例"},{default:a((()=>[r(f,{title:"Simple"},{default:a((()=>[r(m,{type:"primary",onContextmenu:e.handleContext},{default:a((()=>[c])),_:1},8,["onContextmenu"])])),_:1}),r(f,{title:"Multiple",class:"mt-4"},{default:a((()=>[r(m,{type:"primary",onContextmenu:e.handleMultipleContext},{default:a((()=>[u])),_:1},8,["onContextmenu"])])),_:1})])),_:1})};export default m;
