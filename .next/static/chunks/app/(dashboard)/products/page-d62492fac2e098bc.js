(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[393],{4481:function(e,t,a){Promise.resolve().then(a.bind(a,34921))},34921:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var r=a(3827),s=a(47907),l=a(64090),n=a(70094),o=a(23662),i=a(85754),d=a(47934),c=a(72706),u=a(24234),f=a(8792);let m=[{accessorKey:"title",header:"Title",cell:e=>{let{row:t}=e;return(0,r.jsx)(f.default,{href:"/products/".concat(t.original._id),className:"hover:text-red-1",children:t.original.title})}},{accessorKey:"category",header:"Category"},{accessorKey:"collections",header:"Collections",cell:e=>{let{row:t}=e;return t.original.collections.map(e=>e.title).join(", ")}},{accessorKey:"price",header:"Price ($)"},{accessorKey:"expense",header:"Expense ($)"},{id:"actions",cell:e=>{let{row:t}=e;return(0,r.jsx)(u.Z,{item:"product",id:t.original._id})}}];var x=()=>{let e=(0,s.useRouter)(),[t,a]=(0,l.useState)(!0),[u,f]=(0,l.useState)([]),x=async()=>{try{let e=await fetch("/api/products",{method:"GET"}),t=await e.json();f(t),a(!1)}catch(e){console.log("[products_GET]",e)}};return(0,l.useEffect)(()=>{x()},[]),t?(0,r.jsx)(o.Z,{}):(0,r.jsxs)("div",{className:"px-10 py-5",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("p",{className:"text-heading2-bold",children:"Products"}),(0,r.jsxs)(i.z,{className:"bg-blue-1 text-white",onClick:()=>e.push("/products/new"),children:[(0,r.jsx)(n.Z,{className:"h-4 w-4 mr-2"}),"Create Product"]})]}),(0,r.jsx)(d.Separator,{className:"bg-grey-1 my-4"}),(0,r.jsx)(c.DataTable,{columns:m,data:u,searchKey:"title"})]})}},72706:function(e,t,a){"use strict";a.r(t),a.d(t,{DataTable:function(){return p}});var r=a(3827),s=a(85754),l=a(81006),n=a(63280),o=a(64090),i=a(1657);let d=o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("div",{className:"relative w-full overflow-auto",children:(0,r.jsx)("table",{ref:t,className:(0,i.cn)("w-full caption-bottom text-sm",a),...s})})});d.displayName="Table";let c=o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("thead",{ref:t,className:(0,i.cn)("[&_tr]:border-b",a),...s})});c.displayName="TableHeader";let u=o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tbody",{ref:t,className:(0,i.cn)("[&_tr:last-child]:border-0",a),...s})});u.displayName="TableBody",o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tfoot",{ref:t,className:(0,i.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",a),...s})}).displayName="TableFooter";let f=o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tr",{ref:t,className:(0,i.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",a),...s})});f.displayName="TableRow";let m=o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("th",{ref:t,className:(0,i.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",a),...s})});m.displayName="TableHead";let x=o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("td",{ref:t,className:(0,i.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",a),...s})});x.displayName="TableCell",o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("caption",{ref:t,className:(0,i.cn)("mt-4 text-sm text-muted-foreground",a),...s})}).displayName="TableCaption";var h=a(45179);function p(e){var t,a,i;let{columns:p,data:g,searchKey:b}=e,[y,v]=(0,o.useState)([]),N=(0,l.b7)({data:g,columns:p,getCoreRowModel:(0,n.sC)(),onColumnFiltersChange:v,getPaginationRowModel:(0,n.G_)(),getFilteredRowModel:(0,n.vL)(),state:{columnFilters:y}});return(0,r.jsxs)("div",{className:"py-5",children:[(0,r.jsx)("div",{className:"flex items-center py-4",children:(0,r.jsx)(h.I,{placeholder:"Search...",value:null!==(i=null===(t=N.getColumn(b))||void 0===t?void 0:t.getFilterValue())&&void 0!==i?i:"",onChange:e=>{var t;return null===(t=N.getColumn(b))||void 0===t?void 0:t.setFilterValue(e.target.value)},className:"max-w-sm"})}),(0,r.jsx)("div",{className:"rounded-md border",children:(0,r.jsxs)(d,{children:[(0,r.jsx)(c,{children:N.getHeaderGroups().map(e=>(0,r.jsx)(f,{children:e.headers.map(e=>(0,r.jsx)(m,{children:e.isPlaceholder?null:(0,l.ie)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,r.jsx)(u,{children:(null===(a=N.getRowModel().rows)||void 0===a?void 0:a.length)?N.getRowModel().rows.map(e=>(0,r.jsx)(f,{"data-state":e.getIsSelected()&&"selected",children:e.getVisibleCells().map(e=>(0,r.jsx)(x,{children:(0,l.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,r.jsx)(f,{children:(0,r.jsx)(x,{colSpan:p.length,className:"h-24 text-center",children:"No results."})})})]})}),(0,r.jsxs)("div",{className:"flex items-center justify-end space-x-2 py-4",children:[(0,r.jsx)(s.z,{variant:"outline",size:"sm",onClick:()=>N.previousPage(),disabled:!N.getCanPreviousPage(),children:"Previous"}),(0,r.jsx)(s.z,{variant:"outline",size:"sm",onClick:()=>N.nextPage(),disabled:!N.getCanNextPage(),children:"Next"})]})]})}},24234:function(e,t,a){"use strict";a.d(t,{Z:function(){return N}});var r=a(3827),s=a(64090),l=a(66806),n=a(65687),o=a(1657),i=a(85754);let d=n.fC,c=n.xz,u=n.h_,f=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(n.aV,{className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...s,ref:t})});f.displayName=n.aV.displayName;let m=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsxs)(u,{children:[(0,r.jsx)(f,{}),(0,r.jsx)(n.VY,{ref:t,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...s})]})});m.displayName=n.VY.displayName;let x=e=>{let{className:t,...a}=e;return(0,r.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...a})};x.displayName="AlertDialogHeader";let h=e=>{let{className:t,...a}=e;return(0,r.jsx)("div",{className:(0,o.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...a})};h.displayName="AlertDialogFooter";let p=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(n.Dx,{ref:t,className:(0,o.cn)("text-lg font-semibold",a),...s})});p.displayName=n.Dx.displayName;let g=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(n.dk,{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",a),...s})});g.displayName=n.dk.displayName;let b=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(n.aU,{ref:t,className:(0,o.cn)((0,i.d)(),a),...s})});b.displayName=n.aU.displayName;let y=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(n.$j,{ref:t,className:(0,o.cn)((0,i.d)({variant:"outline"}),"mt-2 sm:mt-0",a),...s})});y.displayName=n.$j.displayName;var v=a(10963),N=e=>{let{item:t,id:a}=e,[n,o]=(0,s.useState)(!1),u=async()=>{try{o(!0);let e="product"===t?"products":"collections";(await fetch("/api/".concat(e,"/").concat(a),{method:"DELETE"})).ok&&(o(!1),window.location.href="/".concat(e),v.ZP.success("".concat(t," deleted")))}catch(e){console.log(e),v.ZP.error("Something went wrong! Please try again.")}};return(0,r.jsxs)(d,{children:[(0,r.jsx)(c,{children:(0,r.jsx)(i.z,{className:"bg-red-1 text-white",children:(0,r.jsx)(l.Z,{className:"h-4 w-4"})})}),(0,r.jsxs)(m,{className:"bg-white text-grey-1",children:[(0,r.jsxs)(x,{children:[(0,r.jsx)(p,{className:"text-red-1",children:"Are you absolutely sure?"}),(0,r.jsxs)(g,{children:["This action cannot be undone. This will permanently delete your ",t,"."]})]}),(0,r.jsxs)(h,{children:[(0,r.jsx)(y,{children:"Cancel"}),(0,r.jsx)(b,{className:"bg-red-1 text-white",onClick:u,children:"Delete"})]})]})]})}},23662:function(e,t,a){"use strict";var r=a(3827);t.Z=()=>(0,r.jsx)("div",{className:"flex items-center justify-center h-screen",children:(0,r.jsx)("div",{className:"animate-spin rounded-full border-t-4 border-blue-500 border-solid h-12 w-12"})})},85754:function(e,t,a){"use strict";a.d(t,{d:function(){return i},z:function(){return d}});var r=a(3827),s=a(64090),l=a(59143),n=a(57742),o=a(1657);let i=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:a,variant:s,size:n,asChild:d=!1,...c}=e,u=d?l.g7:"button";return(0,r.jsx)(u,{className:(0,o.cn)(i({variant:s,size:n,className:a})),ref:t,...c})});d.displayName="Button"},45179:function(e,t,a){"use strict";a.d(t,{I:function(){return n}});var r=a(3827),s=a(64090),l=a(1657);let n=s.forwardRef((e,t)=>{let{className:a,type:s,...n}=e;return(0,r.jsx)("input",{type:s,className:(0,l.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...n})});n.displayName="Input"},47934:function(e,t,a){"use strict";a.r(t),a.d(t,{Separator:function(){return o}});var r=a(3827),s=a(64090),l=a(51014),n=a(1657);let o=s.forwardRef((e,t)=>{let{className:a,orientation:s="horizontal",decorative:o=!0,...i}=e;return(0,r.jsx)(l.f,{ref:t,decorative:o,orientation:s,className:(0,n.cn)("shrink-0 bg-border","horizontal"===s?"h-[1px] w-full":"h-full w-[1px]",a),...i})});o.displayName=l.f.displayName},1657:function(e,t,a){"use strict";a.d(t,{cn:function(){return l}});var r=a(75504),s=a(51367);function l(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.m6)((0,r.W)(t))}}},function(e){e.O(0,[387,893,18,6,792,971,69,744],function(){return e(e.s=4481)}),_N_E=e.O()}]);