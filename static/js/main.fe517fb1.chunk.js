(this["webpackJsonpflexbox-guide"]=this["webpackJsonpflexbox-guide"]||[]).push([[0],{18:function(e,t,i){},2:function(e,t,i){e.exports={root:"App_root__2QjaE",containerSection:"App_containerSection__1d2A_",hoverStyle:"App_hoverStyle__pansl",singleItem:"App_singleItem__3cNs-",otherSection:"App_otherSection__gHFWz",hLine:"App_hLine__2dH3Y",rootFlexAttributes:"App_rootFlexAttributes__-U5r6",heading:"App_heading__3I1U5",pageHeading:"App_pageHeading__1Suhq",pageSubHeading:"App_pageSubHeading__2Hn5R",link:"App_link__3VkJt",pageDescription:"App_pageDescription__2i069",githublink:"App_githublink__3l8Ed",attributesContainer:"App_attributesContainer__1_VqQ",eachAttributeColumn:"App_eachAttributeColumn__1ItT5",itemOperationsContainer:"App_itemOperationsContainer__15GcZ",attribute:"App_attribute__3OBR_",value:"App_value__2ylly",itemOperations:"App_itemOperations__2pwCJ",rootFlexCode:"App_rootFlexCode__vxurB",rootFlexHeading:"App_rootFlexHeading__2xjGc"}},22:function(e,t,i){"use strict";i.r(t);var a=i(1),s=i(0),n=i.n(s),r=i(3),o=i.n(r),c=(i(18),i(10)),l=i(2),u=i.n(l);var b=function(e){return Object(a.jsxs)("div",{className:u.a.rootFlexCode,children:[Object(a.jsxs)("div",{children:[". Container ","{"]}),Object(a.jsx)("div",{children:"display : flex,"}),Object.keys(e.attributes).map((function(t,i){return""!==e.attributes[t]?Object(a.jsxs)("div",{children:[t.split(/(?=[A-Z])/)[0].toLowerCase()+"-"+t.split(/(?=[A-Z])/)[1].toLowerCase()," : ",e.attributes[t],","]},i):null})),Object(a.jsx)("div",{children:"}"})]})};var d=function(e){var t={};return Object.keys(e.attributes).map((function(i){console.log(i+" : "+e.attributes[i]),t["".concat(i)]=e.attributes[i]})),console.log("heights",e.heights),Object(a.jsx)("div",{style:t,className:u.a.hoverStyle,children:e.heights.map((function(e,t){return Object(a.jsx)("div",{className:u.a.singleItem,style:{height:"".concat(e,"px")},children:t+1},t)}))})},p=i(6),h=i(9),j=i(11),g=i(7);i(19);function x(e){return Object(a.jsx)("div",{className:u.a.value,style:e.attributes["".concat(e.attributeName)]===e.value?{backgroundColor:"#ffa500",color:"#fff"}:{},onClick:function(){e.setattributes(Object(h.a)(Object(h.a)({},e.attributes),{},Object(p.a)({},"".concat(e.attributeName),e.attributes["".concat(e.attributeName)]===e.value?"":e.value)))},children:e.value})}var m=function(e){var t={flexDirection:["row","row-reverse","column","column-reverse"],flexWrap:["nowrap","wrap","wrap-reverse"],justifyContent:["flex-start","flex-end","center","space-between","space-around","space-evenly"],alignItems:["flex-start","flex-end","center","baseline","stretch"],alignContent:["flex-start","flex-end","center","space-between","space-around","space-evenly"]};return Object(a.jsxs)("div",{className:u.a.rootFlexAttributes,children:[Object(a.jsx)(g.a,{position:"top-center",autoClose:3e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!1,pauseOnHover:!1}),Object(a.jsx)("div",{className:u.a.heading,children:"Attributes"}),Object(a.jsxs)("div",{className:u.a.attributesContainer,children:[Object.keys(e.attributes).map((function(i,s){return Object(a.jsxs)("div",{className:u.a.eachAttributeColumn,children:[Object(a.jsx)("div",{className:u.a.attribute,children:i.split(/(?=[A-Z])/)[0].toLowerCase()+"-"+i.split(/(?=[A-Z])/)[1].toLowerCase()}),t["".concat(i)].map((function(t,s){return Object(a.jsx)(x,{value:t,attributes:e.attributes,attributeName:i,setattributes:e.setattributes},s)}))]},s)})),Object(a.jsx)("div",{})]}),Object(a.jsxs)("div",{className:u.a.itemOperationsContainer,children:[Object(a.jsx)("div",{className:u.a.attribute,children:"Flex Items"}),Object(a.jsx)("div",{className:u.a.itemOperations,onClick:function(){e.heights.length<25?e.setheights([].concat(Object(j.a)(e.heights),[60])):Object(g.b)("Maximum of 25 items can be added!",{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0})},children:"add item"}),Object(a.jsx)("div",{className:u.a.itemOperations,onClick:function(){e.heights.length>1?e.setheights(Object(j.a)(e.heights.slice(0,e.heights.length-1))):Object(g.b)("Cannot remove anymore items!",{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0})},children:"remove item"})]})]})};var O=function(e){return Object(a.jsxs)("div",{className:u.a.rootFlexHeading,children:[Object(a.jsx)("div",{className:u.a.pageHeading,children:"FlexBox-Guide"}),Object(a.jsxs)("div",{className:u.a.pageSubHeading,children:["By ",Object(a.jsx)("a",{className:u.a.link,href:"https://github.com/Souravdey777",children:"Sourav Dey"})]}),Object(a.jsx)("div",{className:u.a.pageDescription,children:"CSS Flexible Box Layout is a module of CSS that defines a CSS box model optimized for user interface design, and the layout of items in one dimension."}),Object(a.jsx)("div",{className:u.a.githublink,children:Object(a.jsx)("a",{href:"https://github.com/Souravdey777/flexbox-guide",children:Object(a.jsx)("img",{title:"FlexBox-Guide Github Repo.",src:"https://img.shields.io/badge/-Github-333?style=flat&logo=github&logoColor=fff"})})})]})};var _=function(){var e=Object(s.useState)({flexDirection:"",flexWrap:"",justifyContent:"",alignItems:"",alignContent:""}),t=Object(c.a)(e,2),i=t[0],n=t[1],r=Object(s.useState)([60,60,60,60]),o=Object(c.a)(r,2),l=o[0],p=o[1];return Object(a.jsxs)("div",{className:u.a.root,children:[Object(a.jsxs)("div",{className:u.a.containerSection,children:[Object(a.jsx)(d,{heights:l,attributes:i}),Object(a.jsx)(O,{})]}),Object(a.jsxs)("div",{className:u.a.otherSection,children:[Object(a.jsx)(m,{attributes:i,setattributes:n,heights:l,setheights:p}),Object(a.jsx)(b,{attributes:i})]})]})},v=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,25)).then((function(t){var i=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;i(e),a(e),s(e),n(e),r(e)}))};o.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(_,{})}),document.getElementById("root")),v()}},[[22,1,2]]]);
//# sourceMappingURL=main.fe517fb1.chunk.js.map