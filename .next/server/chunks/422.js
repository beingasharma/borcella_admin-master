exports.id=422,exports.ids=[422],exports.modules={21169:(e,r,t)=>{Promise.resolve().then(t.bind(t,84680)),Promise.resolve().then(t.bind(t,47319)),Promise.resolve().then(t.bind(t,73822)),Promise.resolve().then(t.bind(t,37182)),Promise.resolve().then(t.bind(t,65102)),Promise.resolve().then(t.bind(t,22315)),Promise.resolve().then(t.bind(t,34910))},32914:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,2583,23)),Promise.resolve().then(t.t.bind(t,26840,23)),Promise.resolve().then(t.t.bind(t,38771,23)),Promise.resolve().then(t.t.bind(t,13225,23)),Promise.resolve().then(t.t.bind(t,9295,23)),Promise.resolve().then(t.t.bind(t,43982,23))},24063:(e,r,t)=>{"use strict";t.r(r),t.d(r,{DataTable:()=>h});var l=t(95344),s=t(16212),a=t(90491),o=t(60563),i=t(3729),n=t(91626);let d=i.forwardRef(({className:e,...r},t)=>l.jsx("div",{className:"relative w-full overflow-auto",children:l.jsx("table",{ref:t,className:(0,n.cn)("w-full caption-bottom text-sm",e),...r})}));d.displayName="Table";let c=i.forwardRef(({className:e,...r},t)=>l.jsx("thead",{ref:t,className:(0,n.cn)("[&_tr]:border-b",e),...r}));c.displayName="TableHeader";let u=i.forwardRef(({className:e,...r},t)=>l.jsx("tbody",{ref:t,className:(0,n.cn)("[&_tr:last-child]:border-0",e),...r}));u.displayName="TableBody",i.forwardRef(({className:e,...r},t)=>l.jsx("tfoot",{ref:t,className:(0,n.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",e),...r})).displayName="TableFooter";let m=i.forwardRef(({className:e,...r},t)=>l.jsx("tr",{ref:t,className:(0,n.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",e),...r}));m.displayName="TableRow";let f=i.forwardRef(({className:e,...r},t)=>l.jsx("th",{ref:t,className:(0,n.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",e),...r}));f.displayName="TableHead";let x=i.forwardRef(({className:e,...r},t)=>l.jsx("td",{ref:t,className:(0,n.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",e),...r}));x.displayName="TableCell",i.forwardRef(({className:e,...r},t)=>l.jsx("caption",{ref:t,className:(0,n.cn)("mt-4 text-sm text-muted-foreground",e),...r})).displayName="TableCaption";var b=t(92549);function h({columns:e,data:r,searchKey:t}){let[n,h]=(0,i.useState)([]),g=(0,a.b7)({data:r,columns:e,getCoreRowModel:(0,o.sC)(),onColumnFiltersChange:h,getPaginationRowModel:(0,o.G_)(),getFilteredRowModel:(0,o.vL)(),state:{columnFilters:n}});return(0,l.jsxs)("div",{className:"py-5",children:[l.jsx("div",{className:"flex items-center py-4",children:l.jsx(b.I,{placeholder:"Search...",value:g.getColumn(t)?.getFilterValue()??"",onChange:e=>g.getColumn(t)?.setFilterValue(e.target.value),className:"max-w-sm"})}),l.jsx("div",{className:"rounded-md border",children:(0,l.jsxs)(d,{children:[l.jsx(c,{children:g.getHeaderGroups().map(e=>l.jsx(m,{children:e.headers.map(e=>l.jsx(f,{children:e.isPlaceholder?null:(0,a.ie)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),l.jsx(u,{children:g.getRowModel().rows?.length?g.getRowModel().rows.map(e=>l.jsx(m,{"data-state":e.getIsSelected()&&"selected",children:e.getVisibleCells().map(e=>l.jsx(x,{children:(0,a.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):l.jsx(m,{children:l.jsx(x,{colSpan:e.length,className:"h-24 text-center",children:"No results."})})})]})}),(0,l.jsxs)("div",{className:"flex items-center justify-end space-x-2 py-4",children:[l.jsx(s.z,{variant:"outline",size:"sm",onClick:()=>g.previousPage(),disabled:!g.getCanPreviousPage(),children:"Previous"}),l.jsx(s.z,{variant:"outline",size:"sm",onClick:()=>g.nextPage(),disabled:!g.getCanNextPage(),children:"Next"})]})]})}},84680:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d});var l=t(95344),s=t(30290),a=t(89410),o=t(56506),i=t(8428),n=t(26059);let d=()=>{let e=(0,i.usePathname)();return(0,l.jsxs)("div",{className:"h-screen left-0 top-0 sticky p-10 flex flex-col gap-16 bg-blue-2 shadow-xl max-lg:hidden",children:[l.jsx(a.default,{src:"/logo.png",alt:"logo",width:150,height:70}),l.jsx("div",{className:"flex flex-col gap-12",children:n.F.map(r=>(0,l.jsxs)(o.default,{href:r.url,className:`flex gap-4 text-body-medium ${e===r.url?"text-blue-1":"text-grey-1"}`,children:[r.icon," ",l.jsx("p",{children:r.label})]},r.label))}),(0,l.jsxs)("div",{className:"flex gap-4 text-body-medium items-center",children:[l.jsx(s.l8,{}),l.jsx("p",{children:"Edit Profile"})]})]})}},47319:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>u});var l=t(95344),s=t(30290),a=t(89410),o=t(56506),i=t(3729),n=t(8428),d=t(98200),c=t(26059);let u=()=>{let[e,r]=(0,i.useState)(!1),t=(0,n.usePathname)();return(0,l.jsxs)("div",{className:"sticky top-0 z-20 w-full flex justify-between items-center px-8 py-4 bg-blue-2 shadow-xl lg:hidden",children:[l.jsx(a.default,{src:"/logo.png",alt:"logo",width:150,height:70}),l.jsx("div",{className:"flex gap-8 max-md:hidden",children:c.F.map(e=>l.jsx(o.default,{href:e.url,className:`flex gap-4 text-body-medium ${t===e.url?"text-blue-1":"text-grey-1"}`,children:l.jsx("p",{children:e.label})},e.label))}),(0,l.jsxs)("div",{className:"relative flex gap-4 items-center",children:[l.jsx(d.Z,{className:"cursor-pointer md:hidden",onClick:()=>r(!e)}),e&&l.jsx("div",{className:"absolute top-10 right-6 flex flex-col gap-8 p-5 bg-white shadow-xl rounded-lg",children:c.F.map(e=>(0,l.jsxs)(o.default,{href:e.url,className:"flex gap-4 text-body-medium",children:[e.icon," ",l.jsx("p",{children:e.label})]},e.label))}),l.jsx(s.l8,{})]})]})}},16212:(e,r,t)=>{"use strict";t.d(r,{d:()=>n,z:()=>d});var l=t(95344),s=t(3729),a=t(32751),o=t(88720),i=t(91626);let n=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef(({className:e,variant:r,size:t,asChild:s=!1,...o},d)=>{let c=s?a.g7:"button";return l.jsx(c,{className:(0,i.cn)(n({variant:r,size:t,className:e})),ref:d,...o})});d.displayName="Button"},92549:(e,r,t)=>{"use strict";t.d(r,{I:()=>o});var l=t(95344),s=t(3729),a=t(91626);let o=s.forwardRef(({className:e,type:r,...t},s)=>l.jsx("input",{type:r,className:(0,a.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:s,...t}));o.displayName="Input"},73822:(e,r,t)=>{"use strict";t.r(r),t.d(r,{ToasterProvider:()=>a});var l=t(95344),s=t(44669);let a=()=>l.jsx(s.x7,{})},26059:(e,r,t)=>{"use strict";t.d(r,{F:()=>d});var l=t(95344),s=t(2273),a=t(30648),o=t(36341),i=t(73714),n=t(54052);let d=[{url:"/",icon:l.jsx(s.Z,{}),label:"Dashboard"},{url:"/collections",icon:l.jsx(a.Z,{}),label:"Collections"},{url:"/products",icon:l.jsx(o.Z,{}),label:"Products"},{url:"/orders",icon:l.jsx(i.Z,{}),label:"Orders"},{url:"/customers",icon:l.jsx(n.Z,{}),label:"Customers"}]},91626:(e,r,t)=>{"use strict";t.d(r,{cn:()=>a});var l=t(56815),s=t(79377);function a(...e){return(0,s.m6)((0,l.W)(e))}},19302:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>y,metadata:()=>j});var l=t(25036),s=t(7819),a=t.n(s);t(67272);var o=t(93183),i=t(86843);let n=(0,i.createProxy)(String.raw`C:\Users\ASharma\Documents\New folder\borcella_admin-master\components\layout\LeftSideBar.tsx`),{__esModule:d,$$typeof:c}=n,u=n.default,m=(0,i.createProxy)(String.raw`C:\Users\ASharma\Documents\New folder\borcella_admin-master\components\layout\TopBar.tsx`),{__esModule:f,$$typeof:x}=m,b=m.default,h=(0,i.createProxy)(String.raw`C:\Users\ASharma\Documents\New folder\borcella_admin-master\lib\ToasterProvider.tsx`),{__esModule:g,$$typeof:p}=h;h.default;let v=(0,i.createProxy)(String.raw`C:\Users\ASharma\Documents\New folder\borcella_admin-master\lib\ToasterProvider.tsx#ToasterProvider`),j={title:"Borcelle - Admin Dashboard",description:"Admin dashboard to manage Borcelle's data"};function y({children:e}){return l.jsx(o.El,{children:l.jsx("html",{lang:"en",children:(0,l.jsxs)("body",{className:a().className,children:[l.jsx(v,{}),(0,l.jsxs)("div",{className:"flex max-lg:flex-col text-grey-1",children:[l.jsx(u,{}),l.jsx(b,{}),l.jsx("div",{className:"flex-1",children:e})]})]})})})}},19331:(e,r,t)=>{"use strict";t.d(r,{w:()=>i});var l=t(86843);let s=(0,l.createProxy)(String.raw`C:\Users\ASharma\Documents\New folder\borcella_admin-master\components\custom ui\DataTable.tsx`),{__esModule:a,$$typeof:o}=s;s.default;let i=(0,l.createProxy)(String.raw`C:\Users\ASharma\Documents\New folder\borcella_admin-master\components\custom ui\DataTable.tsx#DataTable`)},57481:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});var l=t(70337);let s=e=>[{type:"image/x-icon",sizes:"256x256",url:(0,l.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},67272:()=>{},88720:(e,r,t)=>{"use strict";t.d(r,{j:()=>a});let l=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,s=function(){for(var e,r,t=0,l="";t<arguments.length;)(e=arguments[t++])&&(r=function e(r){var t,l,s="";if("string"==typeof r||"number"==typeof r)s+=r;else if("object"==typeof r){if(Array.isArray(r))for(t=0;t<r.length;t++)r[t]&&(l=e(r[t]))&&(s&&(s+=" "),s+=l);else for(t in r)r[t]&&(s&&(s+=" "),s+=t)}return s}(e))&&(l&&(l+=" "),l+=r);return l},a=(e,r)=>t=>{var a;if((null==r?void 0:r.variants)==null)return s(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:o,defaultVariants:i}=r,n=Object.keys(o).map(e=>{let r=null==t?void 0:t[e],s=null==i?void 0:i[e];if(null===r)return null;let a=l(r)||l(s);return o[e][a]}),d=t&&Object.entries(t).reduce((e,r)=>{let[t,l]=r;return void 0===l||(e[t]=l),e},{});return s(e,n,null==r?void 0:null===(a=r.compoundVariants)||void 0===a?void 0:a.reduce((e,r)=>{let{class:t,className:l,...s}=r;return Object.entries(s).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...i,...d}[r]):({...i,...d})[r]===t})?[...e,t,l]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)}}};