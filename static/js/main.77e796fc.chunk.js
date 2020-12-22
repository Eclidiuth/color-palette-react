(this["webpackJsonpcolor-palette-react"]=this["webpackJsonpcolor-palette-react"]||[]).push([[0],{23:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(1),a=n.n(r),c=n(13),l=n.n(c),i=(n(23),n(2)),s=n(5),d=n(6),u=n(4),j=n(9),b=n(8);var p=function(){return[{name:"bs-gray",palette:[{color:"f8f9fa",note:"gray-100"},{color:"e9ecef",note:"gray-200"},{color:"dee2e6",note:"gray-300"},{color:"ced4da",note:"gray-400"},{color:"adb5bd",note:"gray-500"},{color:"6c757d",note:"gray-600"},{color:"495057",note:"gray-700"},{color:"343a40",note:"gray-800"},{color:"212529",note:"gray-900"},{color:"000000",note:"black"}]},{name:"Color",palette:[{color:"007bff",note:"blue"},{color:"6610f2",note:"indigo"},{color:"6f42c1",note:"purple"},{color:"e83e8c",note:"pink"},{color:"dc3545",note:"red"},{color:"fd7e14",note:"orange"},{color:"ffc107",note:"yellow"},{color:"28a745",note:"green"},{color:"20c997",note:"teal"},{color:"17a2b8",note:"cyan"}]}]},h=n(3);function f(){var e=Object(i.a)(['\n  h2 {\n    font-weight: 300;\n    padding: 0 16px;\n  }\n\n    label {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    span {\n      display: block;\n      padding: 16px;\n    }\n\n    input[type="text"], select {\n      background: #f2f2f2;\n      border: 0;\n      border: none;\n      border-radius: 0;\n      box-sizing: border-box;\n      display: block;\n      width: 120px;\n      padding: 8px 16px;\n    }\n\n    select {\n      appearance: none;\n\n      option {\n        border: 0;\n      }\n    }\n  }\n\n']);return f=function(){return e},e}var x=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).state={newColor:"252525",newColorNote:"Text black primary",selectedPaletteName:null},o.handleAddNewColor=o.handleAddNewColor.bind(Object(u.a)(o)),o}return Object(d.a)(n,[{key:"handleAddNewColor",value:function(){this.state.selectedPaletteName&&this.props.addNewColor(this.state.selectedPaletteName,this.state.newColor,this.state.newColorNote)}},{key:"render",value:function(){var e=this;return Object(o.jsxs)(O,{children:[Object(o.jsx)("h2",{children:"Add new color"}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Color:"}),Object(o.jsx)("input",{type:"text",value:this.state.newColor,onChange:function(t){return e.setState({newColor:t.target.value})}})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Note:"}),Object(o.jsx)("input",{type:"text",value:this.state.newColorNote,onChange:function(t){return e.setState({newColorNote:t.target.value})}})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Palette:"}),Object(o.jsxs)("select",{onChange:function(t){return e.setState({selectedPaletteName:t.target.value})},defaultValue:"",children:[Object(o.jsx)("option",{value:"",children:"Select"}),this.props.palettes.map((function(e,t){return Object(o.jsx)("option",{value:e.name,children:e.name},t)}))]})]}),Object(o.jsx)("button",{onClick:this.handleAddNewColor,children:"Add color"})]})}}]),n}(a.a.Component),O=h.a.div(f()),v=n(17);function g(){var e=Object(i.a)(["\n  font-size: 14px;\n"]);return g=function(){return e},e}function C(){var e=Object(i.a)(["\n  flex: 0 1 10%;\n  transition: transform .15s;\n  padding: 32px;\n  width: 10%;\n\n  &:hover {\n    transform: scale(.9);\n  }\n"]);return C=function(){return e},e}function w(e){var t=e.color,n=e.note;return Object(o.jsx)(v.CopyToClipboard,{text:t,children:Object(o.jsxs)(y,{style:{backgroundColor:t},children:[Object(o.jsxs)(m,{children:["Color ",t]}),Object(o.jsxs)(m,{children:["Note ",n]})]})})}var y=h.a.div(C()),m=h.a.p(g());function N(){var e=Object(i.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return N=function(){return e},e}function k(e){var t=e.palettes;return Object(o.jsx)("div",{children:t.map((function(e,t){return Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{className:"paletteName",children:e.name}),Object(o.jsx)(A,{children:e.palette.map((function(e,t){var n="#".concat(e.color),r=e.note;return Object(o.jsx)(w,{color:n,note:r},t)}))})]},t)}))})}var A=h.a.div(N());function P(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return P=function(){return e},e}function L(){var e=Object(i.a)(["\n  font-weight: normal;\n"]);return L=function(){return e},e}var S=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).state={paletteList:p()},o.handleAddNewColor=o.handleAddNewColor.bind(Object(u.a)(o)),o}return Object(d.a)(n,[{key:"handleAddNewColor",value:function(e,t,n){var o=this.state,r=this.state.paletteList.findIndex((function(t){return t.name===e}));r>=0&&(o.paletteList[r].palette.push({color:t,note:n}),this.setState({state:o}))}},{key:"render",value:function(){return Object(o.jsxs)("div",{id:"app",children:[Object(o.jsx)(F,{children:"Color Palettes"}),Object(o.jsxs)(T,{children:[Object(o.jsx)("div",{style:{width:"25%"},children:Object(o.jsx)(x,{palettes:this.state.paletteList,addNewColor:this.handleAddNewColor})}),Object(o.jsx)("div",{style:{width:"70%",marginRight:"2.5%"},children:Object(o.jsx)(k,{palettes:this.state.paletteList})})]})]})}}]),n}(a.a.Component),F=h.a.h1(L()),T=h.a.div(P()),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),o(e),r(e),a(e),c(e)}))};l.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(S,{})}),document.getElementById("root")),I()}},[[29,1,2]]]);
//# sourceMappingURL=main.77e796fc.chunk.js.map