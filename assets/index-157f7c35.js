import{ad as f,L as g,K as C,A as P,E as S,a4 as z,Q as x,g as y,C as r,d,I as B,a5 as D}from"./index-ed287d35.js";const I={name:f,shape:g("round"),disabled:Boolean,iconSize:C,modelValue:f,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var L=P({props:S({},I,{bem:z(Function),role:String,parent:Object,checked:Boolean,bindGroup:x}),emits:["click","toggle"],setup(e,{emit:s,slots:c}){const u=y(),l=n=>{if(e.parent&&e.bindGroup)return e.parent.props[n]},a=r(()=>l("disabled")||e.disabled),m=r(()=>l("direction")),v=r(()=>{const n=e.checkedColor||l("checkedColor");if(n&&e.checked&&!a.value)return{borderColor:n,backgroundColor:n}}),h=n=>{const{target:i}=n,o=u.value,t=o===i||(o==null?void 0:o.contains(i));!a.value&&(t||!e.labelDisabled)&&s("toggle"),s("click",n)},b=()=>{const{bem:n,shape:i,checked:o}=e,t=e.iconSize||l("iconSize");return d("div",{ref:u,class:n("icon",[i,{disabled:a.value,checked:o}]),style:{fontSize:D(t)}},[c.icon?c.icon({checked:o,disabled:a.value}):d(B,{name:"success",style:v.value},null)])},k=()=>{if(c.default)return d("span",{class:e.bem("label",[e.labelPosition,{disabled:a.value}])},[c.default()])};return()=>{const n=e.labelPosition==="left"?[k(),b()]:[b(),k()];return d("div",{role:e.role,class:e.bem([{disabled:a.value,"label-disabled":e.labelDisabled},m.value]),tabindex:a.value?void 0:0,"aria-checked":e.checked,onClick:h},[n])}}});export{I as c,L as s};
