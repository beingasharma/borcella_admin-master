(()=>{var e={};e.id=345,e.ids=[345],e.modules={11185:e=>{"use strict";e.exports=require("mongoose")},47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},72254:e=>{"use strict";e.exports=require("node:buffer")},6005:e=>{"use strict";e.exports=require("node:crypto")},87561:e=>{"use strict";e.exports=require("node:fs")},88849:e=>{"use strict";e.exports=require("node:http")},22286:e=>{"use strict";e.exports=require("node:https")},87503:e=>{"use strict";e.exports=require("node:net")},49411:e=>{"use strict";e.exports=require("node:path")},97742:e=>{"use strict";e.exports=require("node:process")},84492:e=>{"use strict";e.exports=require("node:stream")},72477:e=>{"use strict";e.exports=require("node:stream/web")},41041:e=>{"use strict";e.exports=require("node:url")},47261:e=>{"use strict";e.exports=require("node:util")},65628:e=>{"use strict";e.exports=require("node:zlib")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},57310:e=>{"use strict";e.exports=require("url")},71267:e=>{"use strict";e.exports=require("worker_threads")},82059:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>l});var s=t(50482),o=t(69108),a=t(62563),n=t.n(a),i=t(68300),c={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>i[e]);t.d(r,c);let l=["",{children:["(dashboard)",{children:["customers",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,49883)),"C:\\Users\\ASharma\\Documents\\New folder\\borcella_admin-master\\app\\(dashboard)\\customers\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,19302)),"C:\\Users\\ASharma\\Documents\\New folder\\borcella_admin-master\\app\\(dashboard)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(t.t.bind(t,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\ASharma\\Documents\\New folder\\borcella_admin-master\\app\\(dashboard)\\customers\\page.tsx"],u="/(dashboard)/customers/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/(dashboard)/customers/page",pathname:"/customers",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},75213:(e,r,t)=>{Promise.resolve().then(t.bind(t,24063)),Promise.resolve().then(t.bind(t,19391)),Promise.resolve().then(t.bind(t,66868))},19391:(e,r,t)=>{"use strict";t.r(r),t.d(r,{columns:()=>s});let s=[{accessorKey:"clerkId",header:"Clerk ID"},{accessorKey:"name",header:"Name"},{accessorKey:"email",header:"Email"}]},66868:(e,r,t)=>{"use strict";t.r(r),t.d(r,{Separator:()=>i});var s=t(95344),o=t(3729),a=t(80195),n=t(91626);let i=o.forwardRef(({className:e,orientation:r="horizontal",decorative:t=!0,...o},i)=>s.jsx(a.f,{ref:i,decorative:t,orientation:r,className:(0,n.cn)("shrink-0 bg-border","horizontal"===r?"h-[1px] w-full":"h-full w-[1px]",e),...o}));i.displayName=a.f.displayName},49883:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>x,dynamic:()=>m});var s=t(25036),o=t(19331),a=t(86843);let n=(0,a.createProxy)(String.raw`C:\Users\ASharma\Documents\New folder\borcella_admin-master\components\customers\CustomerColumns.tsx`),{__esModule:i,$$typeof:c}=n;n.default;let l=(0,a.createProxy)(String.raw`C:\Users\ASharma\Documents\New folder\borcella_admin-master\components\customers\CustomerColumns.tsx#columns`);var d=t(35675),u=t(57838),p=t(18237);let m="force-dynamic",x=async()=>{await (0,p.P)();let e=await u.Z.find().sort({createdAt:"desc"});return(0,s.jsxs)("div",{className:"px-10 py-5",children:[s.jsx("p",{className:"text-heading2-bold",children:"Customers"}),s.jsx(d.Z,{className:"bg-grey-1 my-5"}),s.jsx(o.w,{columns:l,data:e,searchKey:"name"})]})}},35675:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});var s=t(86843);let o=(0,s.createProxy)(String.raw`C:\Users\ASharma\Documents\New folder\borcella_admin-master\components\ui\separator.tsx`),{__esModule:a,$$typeof:n}=o;o.default;let i=(0,s.createProxy)(String.raw`C:\Users\ASharma\Documents\New folder\borcella_admin-master\components\ui\separator.tsx#Separator`)},57838:(e,r,t)=>{"use strict";t.d(r,{Z:()=>n});var s=t(11185),o=t.n(s);let a=new(o()).Schema({clerkId:String,name:String,email:String,orders:{type:[{type:o().Schema.Types.ObjectId,ref:"Order"}]},createdAt:{type:Date,default:Date.now},updatedAt:{type:Date,default:Date.now}}),n=o().models.Customer||o().model("Customer",a)},18237:(e,r,t)=>{"use strict";t.d(r,{P:()=>n});var s=t(11185),o=t.n(s);let a=!1,n=async()=>{if(o().set("strictQuery",!0),a){console.log("MongoDB is already connected");return}try{await o().connect(process.env.MONGODB_URL||"",{dbName:"Borcelle_Admin"}),a=!0,console.log("MongoDB is connected")}catch(e){console.log(e)}}},62409:(e,r,t)=>{"use strict";t.d(r,{WV:()=>i,jH:()=>c});var s=t(65651),o=t(3729),a=t(81202),n=t(32751);let i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=(0,o.forwardRef)((e,t)=>{let{asChild:a,...i}=e,c=a?n.g7:r;return(0,o.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,o.createElement)(c,(0,s.Z)({},i,{ref:t}))});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function c(e,r){e&&(0,a.flushSync)(()=>e.dispatchEvent(r))}},80195:(e,r,t)=>{"use strict";t.d(r,{f:()=>d});var s=t(65651),o=t(3729),a=t(62409);let n="horizontal",i=["horizontal","vertical"],c=(0,o.forwardRef)((e,r)=>{let{decorative:t,orientation:i=n,...c}=e,d=l(i)?i:n;return(0,o.createElement)(a.WV.div,(0,s.Z)({"data-orientation":d},t?{role:"none"}:{"aria-orientation":"vertical"===d?d:void 0,role:"separator"},c,{ref:r}))});function l(e){return i.includes(e)}c.propTypes={orientation(e,r,t){let s=e[r],o=String(s);return s&&!l(s)?Error(`Invalid prop \`orientation\` of value \`${o}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${n}\`.`):null}};let d=c}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,70,183,356,770,101,491,422],()=>t(82059));module.exports=s})();