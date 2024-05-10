"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[303],{79303:function(e,t,r){r.r(t);var a=r(3827),n=r(21270),s=r(82670),l=r(30248),o=r(47907),i=r(47934),d=r(85754),c=r(92894),u=r(45179),f=r(23444),m=r(98593),x=r(64090),p=r(10963),h=r(24234);let g=l.z.object({title:l.z.string().min(2).max(20),description:l.z.string().min(2).max(500).trim(),image:l.z.string()});t.default=e=>{let{initialData:t}=e,r=(0,o.useRouter)(),[l,b]=(0,x.useState)(!1),j=(0,s.cI)({resolver:(0,n.F)(g),defaultValues:t||{title:"",description:"",image:""}}),y=e=>{"Enter"===e.key&&e.preventDefault()},N=async e=>{try{b(!0);let a=t?"/api/collections/".concat(t._id):"/api/collections";(await fetch(a,{method:"POST",body:JSON.stringify(e)})).ok&&(b(!1),p.ZP.success("Collection ".concat(t?"updated":"created")),window.location.href="/collections",r.push("/collections"))}catch(e){console.log("[collections_POST]",e),p.ZP.error("Something went wrong! Please try again.")}};return(0,a.jsxs)("div",{className:"p-10",children:[t?(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("p",{className:"text-heading2-bold",children:"Edit Collection"}),(0,a.jsx)(h.Z,{id:t._id,item:"collection"})]}):(0,a.jsx)("p",{className:"text-heading2-bold",children:"Create Collection"}),(0,a.jsx)(i.Separator,{className:"bg-grey-1 mt-4 mb-7"}),(0,a.jsx)(c.l0,{...j,children:(0,a.jsxs)("form",{onSubmit:j.handleSubmit(N),className:"space-y-8",children:[(0,a.jsx)(c.Wi,{control:j.control,name:"title",render:e=>{let{field:t}=e;return(0,a.jsxs)(c.xJ,{children:[(0,a.jsx)(c.lX,{children:"Title"}),(0,a.jsx)(c.NI,{children:(0,a.jsx)(u.I,{placeholder:"Title",...t,onKeyDown:y})}),(0,a.jsx)(c.zG,{})]})}}),(0,a.jsx)(c.Wi,{control:j.control,name:"description",render:e=>{let{field:t}=e;return(0,a.jsxs)(c.xJ,{children:[(0,a.jsx)(c.lX,{children:"Description"}),(0,a.jsx)(c.NI,{children:(0,a.jsx)(f.g,{placeholder:"Description",...t,rows:5,onKeyDown:y})}),(0,a.jsx)(c.zG,{})]})}}),(0,a.jsx)(c.Wi,{control:j.control,name:"image",render:e=>{let{field:t}=e;return(0,a.jsxs)(c.xJ,{children:[(0,a.jsx)(c.lX,{children:"Image"}),(0,a.jsx)(c.NI,{children:(0,a.jsx)(m.Z,{value:t.value?[t.value]:[],onChange:e=>t.onChange(e),onRemove:()=>t.onChange("")})}),(0,a.jsx)(c.zG,{})]})}}),(0,a.jsxs)("div",{className:"flex gap-10",children:[(0,a.jsx)(d.z,{type:"submit",className:"bg-blue-1 text-white",children:"Submit"}),(0,a.jsx)(d.z,{type:"button",onClick:()=>r.push("/collections"),className:"bg-blue-1 text-white",children:"Discard"})]})]})})]})}},24234:function(e,t,r){r.d(t,{Z:function(){return N}});var a=r(3827),n=r(64090),s=r(66806),l=r(65687),o=r(1657),i=r(85754);let d=l.fC,c=l.xz,u=l.h_,f=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(l.aV,{className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",r),...n,ref:t})});f.displayName=l.aV.displayName;let m=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsxs)(u,{children:[(0,a.jsx)(f,{}),(0,a.jsx)(l.VY,{ref:t,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",r),...n})]})});m.displayName=l.VY.displayName;let x=e=>{let{className:t,...r}=e;return(0,a.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...r})};x.displayName="AlertDialogHeader";let p=e=>{let{className:t,...r}=e;return(0,a.jsx)("div",{className:(0,o.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...r})};p.displayName="AlertDialogFooter";let h=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(l.Dx,{ref:t,className:(0,o.cn)("text-lg font-semibold",r),...n})});h.displayName=l.Dx.displayName;let g=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(l.dk,{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",r),...n})});g.displayName=l.dk.displayName;let b=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(l.aU,{ref:t,className:(0,o.cn)((0,i.d)(),r),...n})});b.displayName=l.aU.displayName;let j=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(l.$j,{ref:t,className:(0,o.cn)((0,i.d)({variant:"outline"}),"mt-2 sm:mt-0",r),...n})});j.displayName=l.$j.displayName;var y=r(10963),N=e=>{let{item:t,id:r}=e,[l,o]=(0,n.useState)(!1),u=async()=>{try{o(!0);let e="product"===t?"products":"collections";(await fetch("/api/".concat(e,"/").concat(r),{method:"DELETE"})).ok&&(o(!1),window.location.href="/".concat(e),y.ZP.success("".concat(t," deleted")))}catch(e){console.log(e),y.ZP.error("Something went wrong! Please try again.")}};return(0,a.jsxs)(d,{children:[(0,a.jsx)(c,{children:(0,a.jsx)(i.z,{className:"bg-red-1 text-white",children:(0,a.jsx)(s.Z,{className:"h-4 w-4"})})}),(0,a.jsxs)(m,{className:"bg-white text-grey-1",children:[(0,a.jsxs)(x,{children:[(0,a.jsx)(h,{className:"text-red-1",children:"Are you absolutely sure?"}),(0,a.jsxs)(g,{children:["This action cannot be undone. This will permanently delete your ",t,"."]})]}),(0,a.jsxs)(p,{children:[(0,a.jsx)(j,{children:"Cancel"}),(0,a.jsx)(b,{className:"bg-red-1 text-white",onClick:u,children:"Delete"})]})]})]})}},98593:function(e,t,r){var a=r(3827),n=r(25366),s=r(66806),l=r(70094),o=r(85754),i=r(20703);t.Z=e=>{let{onChange:t,onRemove:r,value:d}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"mb-4 flex flex-wrap items-center gap-4",children:d.map(e=>(0,a.jsxs)("div",{className:"relative w-[200px] h-[200px]",children:[(0,a.jsx)("div",{className:"absolute top-0 right-0 z-10",children:(0,a.jsx)(o.z,{type:"button",onClick:()=>r(e),size:"sm",className:"bg-red-1 text-white",children:(0,a.jsx)(s.Z,{className:"h-4 w-4"})})}),(0,a.jsx)(i.default,{src:e,alt:"collection",className:"object-cover rounded-lg",fill:!0})]},e))}),(0,a.jsx)(n.ZF,{uploadPreset:"ne1harij",onUpload:e=>{t(e.info.secure_url)},children:e=>{let{open:t}=e;return(0,a.jsxs)(o.z,{type:"button",onClick:()=>t(),className:"bg-grey-1 text-white",children:[(0,a.jsx)(l.Z,{className:"h-4 w-4 mr-2"}),"Upload Image"]})}})]})}},85754:function(e,t,r){r.d(t,{d:function(){return i},z:function(){return d}});var a=r(3827),n=r(64090),s=r(59143),l=r(57742),o=r(1657);let i=(0,l.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,t)=>{let{className:r,variant:n,size:l,asChild:d=!1,...c}=e,u=d?s.g7:"button";return(0,a.jsx)(u,{className:(0,o.cn)(i({variant:n,size:l,className:r})),ref:t,...c})});d.displayName="Button"},92894:function(e,t,r){r.d(t,{l0:function(){return u},NI:function(){return b},Wi:function(){return m},xJ:function(){return h},lX:function(){return g},zG:function(){return j}});var a=r(3827),n=r(64090),s=r(59143),l=r(82670),o=r(1657),i=r(24602);let d=(0,r(57742).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(i.f,{ref:t,className:(0,o.cn)(d(),r),...n})});c.displayName=i.f.displayName;let u=l.RV,f=n.createContext({}),m=e=>{let{...t}=e;return(0,a.jsx)(f.Provider,{value:{name:t.name},children:(0,a.jsx)(l.Qr,{...t})})},x=()=>{let e=n.useContext(f),t=n.useContext(p),{getFieldState:r,formState:a}=(0,l.Gc)(),s=r(e.name,a);if(!e)throw Error("useFormField should be used within <FormField>");let{id:o}=t;return{id:o,name:e.name,formItemId:"".concat(o,"-form-item"),formDescriptionId:"".concat(o,"-form-item-description"),formMessageId:"".concat(o,"-form-item-message"),...s}},p=n.createContext({}),h=n.forwardRef((e,t)=>{let{className:r,...s}=e,l=n.useId();return(0,a.jsx)(p.Provider,{value:{id:l},children:(0,a.jsx)("div",{ref:t,className:(0,o.cn)("space-y-2",r),...s})})});h.displayName="FormItem";let g=n.forwardRef((e,t)=>{let{className:r,...n}=e,{error:s,formItemId:l}=x();return(0,a.jsx)(c,{ref:t,className:(0,o.cn)(s&&"text-destructive",r),htmlFor:l,...n})});g.displayName="FormLabel";let b=n.forwardRef((e,t)=>{let{...r}=e,{error:n,formItemId:l,formDescriptionId:o,formMessageId:i}=x();return(0,a.jsx)(s.g7,{ref:t,id:l,"aria-describedby":n?"".concat(o," ").concat(i):"".concat(o),"aria-invalid":!!n,...r})});b.displayName="FormControl",n.forwardRef((e,t)=>{let{className:r,...n}=e,{formDescriptionId:s}=x();return(0,a.jsx)("p",{ref:t,id:s,className:(0,o.cn)("text-sm text-muted-foreground",r),...n})}).displayName="FormDescription";let j=n.forwardRef((e,t)=>{let{className:r,children:n,...s}=e,{error:l,formMessageId:i}=x(),d=l?String(null==l?void 0:l.message):n;return d?(0,a.jsx)("p",{ref:t,id:i,className:(0,o.cn)("text-sm font-medium text-destructive",r),...s,children:d}):null});j.displayName="FormMessage"},45179:function(e,t,r){r.d(t,{I:function(){return l}});var a=r(3827),n=r(64090),s=r(1657);let l=n.forwardRef((e,t)=>{let{className:r,type:n,...l}=e;return(0,a.jsx)("input",{type:n,className:(0,s.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...l})});l.displayName="Input"},47934:function(e,t,r){r.r(t),r.d(t,{Separator:function(){return o}});var a=r(3827),n=r(64090),s=r(51014),l=r(1657);let o=n.forwardRef((e,t)=>{let{className:r,orientation:n="horizontal",decorative:o=!0,...i}=e;return(0,a.jsx)(s.f,{ref:t,decorative:o,orientation:n,className:(0,l.cn)("shrink-0 bg-border","horizontal"===n?"h-[1px] w-full":"h-full w-[1px]",r),...i})});o.displayName=s.f.displayName},23444:function(e,t,r){r.d(t,{g:function(){return l}});var a=r(3827),n=r(64090),s=r(1657);let l=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("textarea",{className:(0,s.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...n})});l.displayName="Textarea"},1657:function(e,t,r){r.d(t,{cn:function(){return s}});var a=r(75504),n=r(51367);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,a.W)(t))}}}]);