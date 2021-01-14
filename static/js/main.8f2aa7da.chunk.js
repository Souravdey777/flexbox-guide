(this["webpackJsonpFlexbox-Guide"]=this["webpackJsonpFlexbox-Guide"]||[]).push([[0],{16:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var i=a(1),s=a(0),n=a.n(s),o=a(3),r=a.n(o),c=(a(16),a(8)),l=a(2),u=a.n(l),p=a(4);a(9);var d=function(e){var t=Object(s.useRef)();return Object(i.jsxs)("div",{className:u.a.rootFlexCode,children:[Object(i.jsx)(p.a,{position:"top-center",autoClose:2e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!1,pauseOnHover:!1}),document.queryCommandSupported("copy")&&Object(i.jsxs)("div",{onClick:function(){return Object(p.b)("Copied!",{position:"top-center",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0}),void navigator.clipboard.writeText(t.current.innerText)},className:u.a.copyIcon,children:[Object(i.jsx)("i",{style:{fontSize:"16px"},className:"material-icons",children:"content_copy"}),Object(i.jsx)("span",{className:u.a.tooltiptext,children:"Click to Copy"})]}),Object(i.jsxs)("div",{ref:t,children:[Object(i.jsxs)("div",{children:[".Container ","{"]}),Object(i.jsx)("div",{children:"display : flex;"}),Object.keys(e.attributes).map((function(t,a){return""!==e.attributes[t]?Object(i.jsxs)("div",{children:[t.split(/(?=[A-Z])/)[0].toLowerCase()+"-"+t.split(/(?=[A-Z])/)[1].toLowerCase()," : ",e.attributes[t],";"]},a):null})),Object(i.jsx)("div",{children:"}"})]})]})};var b=function(e){var t={};Object.keys(e.attributes).forEach((function(a){t["".concat(a)]=e.attributes[a]}));for(var a=[],s=0;s<e.count;s++)a.push(Object(i.jsx)("div",{className:u.a.singleItem,children:s+1},s));return Object(i.jsx)("div",{style:t,className:u.a.hoverStyle,children:a})},j=a(5),x=a(7);function O(e){return Object(i.jsx)("div",{className:u.a.value,style:e.attributes["".concat(e.attributeName)]===e.value?{backgroundColor:"#ffa500",color:"#fff"}:{},onClick:function(){e.setattributes(Object(x.a)(Object(x.a)({},e.attributes),{},Object(j.a)({},"".concat(e.attributeName),e.attributes["".concat(e.attributeName)]===e.value?"":e.value)))},children:e.value})}var h=function(e){var t={flexDirection:["row","row-reverse","column","column-reverse"],flexWrap:["nowrap","wrap","wrap-reverse"],justifyContent:["flex-start","flex-end","center","space-between","space-around","space-evenly"],alignItems:["flex-start","flex-end","center","stretch","baseline"],alignContent:["flex-start","flex-end","center","space-between","space-around","stretch"]};return Object(i.jsxs)("div",{className:u.a.rootFlexAttributes,children:[Object(i.jsx)(p.a,{position:"top-center",autoClose:2e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!1,pauseOnHover:!1}),Object(i.jsx)("div",{className:u.a.heading,children:"Attributes"}),Object(i.jsxs)("div",{className:u.a.attributesContainer,children:[Object.keys(e.attributes).map((function(a,s){return Object(i.jsxs)("div",{className:u.a.eachAttributeColumn,children:[Object(i.jsx)("div",{className:u.a.attribute,children:a.split(/(?=[A-Z])/)[0].toLowerCase()+"-"+a.split(/(?=[A-Z])/)[1].toLowerCase()}),t["".concat(a)].map((function(t,s){return Object(i.jsx)(O,{value:t,attributes:e.attributes,attributeName:a,setattributes:e.setattributes},s)}))]},s)})),Object(i.jsx)("div",{})]}),Object(i.jsx)("div",{className:u.a.hLine}),Object(i.jsxs)("div",{className:u.a.itemOperationsContainer,children:[Object(i.jsx)("div",{className:u.a.attribute,children:"flex items"}),Object(i.jsx)("div",{className:u.a.itemOperations,onClick:function(){e.count<24?e.setcount(e.count+1):Object(p.b)("Maximum of 24 items can be added!",{position:"top-center",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0})},children:"add item"}),Object(i.jsx)("div",{className:u.a.itemOperations,onClick:function(){e.count>1?e.setcount(e.count-1):Object(p.b)("Cannot remove anymore items!",{position:"top-center",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0})},children:"remove item"})]})]})};var m=function(e){return Object(i.jsxs)("div",{className:u.a.rootFlexHeading,children:[Object(i.jsx)("div",{className:u.a.pageHeading,children:"Flexbox-Guide"}),Object(i.jsxs)("div",{className:u.a.pageSubHeading,children:["By ",Object(i.jsx)("a",{className:u.a.link,href:"https://github.com/Souravdey777",children:"Sourav Dey"})]}),Object(i.jsx)("div",{className:u.a.pageDescription,children:"CSS Flexible Box Layout is a module of CSS that defines a CSS box model optimized for user interface design, and the layout of items in one dimension."}),Object(i.jsxs)("div",{className:u.a.pageDescription,children:["Source Code ",Object(i.jsx)("a",{href:"https://github.com/Souravdey777/Flexbox-Guide",children:Object(i.jsx)("img",{title:"FlexBox-Guide Github Repo",alt:"Flexbox-Guide Github Repo",src:"https://img.shields.io/badge/-Github-333?style=flat&logo=github&logoColor=fff"})})]})]})};var _=function(){var e=Object(s.useState)({flexDirection:"",flexWrap:"",justifyContent:"",alignItems:"",alignContent:""}),t=Object(c.a)(e,2),a=t[0],n=t[1],o=Object(s.useState)(5),r=Object(c.a)(o,2),l=r[0],p=r[1];return Object(i.jsxs)("div",{className:u.a.root,children:[Object(i.jsxs)("div",{className:u.a.containerSection,children:[Object(i.jsx)(b,{count:l,attributes:a}),Object(i.jsx)(m,{})]}),Object(i.jsxs)("div",{className:u.a.otherSection,children:[Object(i.jsx)(h,{attributes:a,setattributes:n,count:l,setcount:p}),Object(i.jsx)(d,{attributes:a})]})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),i(e),s(e),n(e),o(e)}))};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(_,{})}),document.getElementById("root")),v()},2:function(e,t,a){e.exports={root:"App_root__2QjaE",containerSection:"App_containerSection__1d2A_",hoverStyle:"App_hoverStyle__pansl",singleItem:"App_singleItem__3cNs-",otherSection:"App_otherSection__gHFWz",hLine:"App_hLine__2dH3Y",rootFlexAttributes:"App_rootFlexAttributes__-U5r6",heading:"App_heading__3I1U5",pageHeading:"App_pageHeading__1Suhq",pageSubHeading:"App_pageSubHeading__2Hn5R",link:"App_link__3VkJt",pageDescription:"App_pageDescription__2i069",githublink:"App_githublink__3l8Ed",attributesContainer:"App_attributesContainer__1_VqQ",eachAttributeColumn:"App_eachAttributeColumn__1ItT5",itemOperationsContainer:"App_itemOperationsContainer__15GcZ",attribute:"App_attribute__3OBR_",value:"App_value__2ylly",itemOperations:"App_itemOperations__2pwCJ",rootFlexCode:"App_rootFlexCode__vxurB",copyIcon:"App_copyIcon__1oAgt",tooltiptext:"App_tooltiptext__10GoP",rootFlexHeading:"App_rootFlexHeading__2xjGc"}}},[[19,1,2]]]);
//# sourceMappingURL=main.8f2aa7da.chunk.js.map