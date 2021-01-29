import{d as e,h as t,o as i,i as s,j as o,w as r,m as d,l as n}from"./index.25b7b5fc.js";import{T as m}from"./index.eefcbda4.js";import{_ as a,T as p}from"./index.486c49cc.js";import{d as l}from"./table.2ca02097.js";import{u as j}from"./useTable.a82e3e31.js";import"./vendor.3b1829c7.js";import"./colors.e7a38d90.js";import"./index.290ee578.js";import"./SearchOutlined.b66fbfbe.js";import"./CheckOutlined.858b435e.js";import"./DownOutlined.8796a279.js";import"./index.60b3070f.js";import"./index.3e59d4ea.js";import"./responsiveObserve.c545f1cc.js";import"./index.7d0dbe6d.js";import"./findIndex.159bea82.js";import"./isEqual.ef398636.js";import"./_baseProperty.74f89655.js";import"./toInteger.34e54435.js";import"./index.e5942447.js";import"./index.6346a568.js";import"./index.f418f493.js";import"./UpOutlined.2e609594.js";import"./index.013441f2.js";import"./EyeOutlined.bbf9afc6.js";import"./RightOutlined.80d69337.js";import"./RedoOutlined.e878d1f7.js";import"./index.10a2e5b4.js";import"./EllipsisOutlined.3ddff257.js";import"./types.75b2061b.js";import"./Tree.4dd17072.js";import"./util.e01c1bab.js";import"./useAttrs.cecee0af.js";import"./index.95c10fda.js";import"./index.617b1909.js";import"./uuid.07519bd8.js";import"./index.3186655d.js";import"./DeleteOutlined.04eb5723.js";import"./index.341c3125.js";import"./useTimeout.4101b58e.js";import"./useWindowSizeFn.b36958a0.js";import"./index.6c4bbdf5.js";import"./index.d317f8e9.js";import"./domUtils.7252317e.js";import"./_stringToArray.fd7cea8c.js";import"./useScrollTo.3e27ea8f.js";import"./animation.5c6ea99a.js";import"./FullscreenOutlined.b884f50f.js";import"./index.071f175b.js";import"./index.463e2338.js";import"./index.ec6a717d.js";import"./LeftOutlined.06ccfb10.js";import"./download.6995c76c.js";import"./index.2ed87d0a.js";import"./DoubleLeftOutlined.fe18de41.js";import"./DoubleRightOutlined.ee82da45.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.6bbddf74.js";import"./CaretDownFilled.c59e8ff5.js";import"./clickOutside.516198a9.js";import"./useSortable.9390d1f5.js";import"./SettingOutlined.e89633d9.js";import"./useExpose.fcd4b669.js";import"./useForm.78d22a3e.js";const c=[{title:"ID",dataIndex:"id",slots:{customRender:"id"}},{title:"分类",dataIndex:"category",width:80,align:"center",defaultHidden:!0,slots:{customRender:"category"}},{title:"姓名",dataIndex:"name",width:120},{title:"头像",dataIndex:"img",width:120,slots:{customRender:"img"}},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",slots:{customRender:"no"}},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime"}];var u=e({components:{BasicTable:a,TableImg:p,Tag:m},setup(){const[e]=j({title:"自定义列内容",api:l,columns:c,bordered:!0,showTableSetting:!0});return{registerTable:e}}});const f={class:"p-4"};u.render=function(e,m,a,p,l,j){const c=t("Tag"),u=t("TableImg"),b=t("BasicTable");return i(),s("div",f,[o(b,{onRegister:e.registerTable},{id:r((({record:e})=>[d(" ID: "+n(e.id),1)])),no:r((({record:e})=>[o(c,{color:"green"},{default:r((()=>[d(n(e.no),1)])),_:2},1024)])),img:r((()=>[o(u,{imgList:["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216"]},null,8,["imgList"])])),category:r((({record:e})=>[o(c,{color:"green"},{default:r((()=>[d(n(e.no),1)])),_:2},1024)])),_:1},8,["onRegister"])])};export default u;
