"use strict";(()=>{var t={};t.id=146,t.ids=[146],t.modules={11185:t=>{t.exports=require("mongoose")},30517:t=>{t.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},45462:(t,e,n)=>{n.r(e),n.d(e,{headerHooks:()=>_,originalPathname:()=>K,patchFetch:()=>tt,requestAsyncStorage:()=>J,routeModule:()=>$,serverHooks:()=>Z,staticGenerationAsyncStorage:()=>U,staticGenerationBailout:()=>V});var r={};n.r(r),n.d(r,{GET:()=>I,dynamic:()=>R});var a=n(95419),i=n(69108),o=n(99678),u=n(57838),s=n(31228),d=n(18237),c=n(78070);let l={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function h(t){return (e={})=>{let n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}let m={date:h({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:h({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:h({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},f={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function g(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){let e=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):e;r=t.formattingValues[a]||t.formattingValues[e]}else{let e=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;r=t.values[a]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function w(t){return(e,n={})=>{let r;let a=n.width,i=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(i);if(!o)return null;let u=o[0],s=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(s)?function(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}(s,t=>t.test(u)):function(t,e){for(let n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}(s,t=>t.test(u));return r=t.valueCallback?t.valueCallback(d):d,{value:r=n.valueCallback?n.valueCallback(r):r,rest:e.slice(u.length)}}}let b={code:"en-US",formatDistance:(t,e,n)=>{let r;let a=l[t];return(r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),n?.addSuffix)?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:m,formatRelative:(t,e,n,r)=>f[t],localize:{ordinalNumber:(t,e)=>{let n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:g({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:g({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:g({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:g({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:g({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:function(t){return(e,n={})=>{let r=e.match(t.matchPattern);if(!r)return null;let a=r[0],i=e.match(t.parsePattern);if(!i)return null;let o=t.valueCallback?t.valueCallback(i[0]):i[0];return{value:o=n.valueCallback?n.valueCallback(o):o,rest:e.slice(a.length)}}}({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)}),era:w({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:w({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:w({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:w({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:w({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}},y={};function p(t){let e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):new Date("number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?t:NaN)}function M(t){let e=p(t);return e.setHours(0,0,0,0),e}function v(t){let e=p(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function S(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function k(t,e){let n=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??y.weekStartsOn??y.locale?.options?.weekStartsOn??0,r=p(t),a=r.getDay();return r.setDate(r.getDate()-((a<n?7:0)+a-n)),r.setHours(0,0,0,0),r}function P(t){return k(t,{weekStartsOn:1})}function x(t){let e=p(t),n=e.getFullYear(),r=S(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);let a=P(r),i=S(t,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);let o=P(i);return e.getTime()>=a.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function D(t,e){let n=p(t),r=n.getFullYear(),a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??y.firstWeekContainsDate??y.locale?.options?.firstWeekContainsDate??1,i=S(t,0);i.setFullYear(r+1,0,a),i.setHours(0,0,0,0);let o=k(i,e),u=S(t,0);u.setFullYear(r,0,a),u.setHours(0,0,0,0);let s=k(u,e);return n.getTime()>=o.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function T(t,e){let n=Math.abs(t).toString().padStart(e,"0");return(t<0?"-":"")+n}let W={y(t,e){let n=t.getFullYear(),r=n>0?n:1-n;return T("yy"===e?r%100:r,e.length)},M(t,e){let n=t.getMonth();return"M"===e?String(n+1):T(n+1,2)},d:(t,e)=>T(t.getDate(),e.length),a(t,e){let n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>T(t.getHours()%12||12,e.length),H:(t,e)=>T(t.getHours(),e.length),m:(t,e)=>T(t.getMinutes(),e.length),s:(t,e)=>T(t.getSeconds(),e.length),S(t,e){let n=e.length;return T(Math.trunc(t.getMilliseconds()*Math.pow(10,n-3)),e.length)}},C={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},O={G:function(t,e,n){let r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){let e=t.getFullYear();return n.ordinalNumber(e>0?e:1-e,{unit:"year"})}return W.y(t,e)},Y:function(t,e,n,r){let a=D(t,r),i=a>0?a:1-a;return"YY"===e?T(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):T(i,e.length)},R:function(t,e){return T(x(t),e.length)},u:function(t,e){return T(t.getFullYear(),e.length)},Q:function(t,e,n){let r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return T(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){let r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return T(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){let r=t.getMonth();switch(e){case"M":case"MM":return W.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){let r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return T(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){let a=function(t,e){let n=p(t);return Math.round((+k(n,e)-+function(t,e){let n=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??y.firstWeekContainsDate??y.locale?.options?.firstWeekContainsDate??1,r=D(t,e),a=S(t,0);return a.setFullYear(r,0,n),a.setHours(0,0,0,0),k(a,e)}(n,e))/6048e5)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):T(a,e.length)},I:function(t,e,n){let r=function(t){let e=p(t);return Math.round((+P(e)-+function(t){let e=x(t),n=S(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),P(n)}(e))/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):T(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):W.d(t,e)},D:function(t,e,n){let r=function(t){let e=p(t);return function(t,e){let n=M(t),r=M(e);return Math.round((+n-v(n)-(+r-v(r)))/864e5)}(e,function(t){let e=p(t),n=S(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):T(r,e.length)},E:function(t,e,n){let r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){let a=t.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return T(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){let a=t.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return T(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){let r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return T(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){let r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){let r;let a=t.getHours();switch(r=12===a?C.noon:0===a?C.midnight:a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){let r;let a=t.getHours();switch(r=a>=17?C.evening:a>=12?C.afternoon:a>=4?C.morning:C.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return W.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):W.H(t,e)},K:function(t,e,n){let r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):T(r,e.length)},k:function(t,e,n){let r=t.getHours();return(0===r&&(r=24),"ko"===e)?n.ordinalNumber(r,{unit:"hour"}):T(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):W.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):W.s(t,e)},S:function(t,e){return W.S(t,e)},X:function(t,e,n){let r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return N(r);case"XXXX":case"XX":return q(r);default:return q(r,":")}},x:function(t,e,n){let r=t.getTimezoneOffset();switch(e){case"x":return N(r);case"xxxx":case"xx":return q(r);default:return q(r,":")}},O:function(t,e,n){let r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Y(r,":");default:return"GMT"+q(r,":")}},z:function(t,e,n){let r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Y(r,":");default:return"GMT"+q(r,":")}},t:function(t,e,n){return T(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return T(t.getTime(),e.length)}};function Y(t,e=""){let n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),i=r%60;return 0===i?n+String(a):n+String(a)+e+T(i,2)}function N(t,e){return t%60==0?(t>0?"-":"+")+T(Math.abs(t)/60,2):q(t,e)}function q(t,e=""){let n=Math.abs(t);return(t>0?"-":"+")+T(Math.trunc(n/60),2)+e+T(n%60,2)}let A=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},j=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},E={p:j,P:(t,e)=>{let n;let r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return A(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",A(a,e)).replace("{{time}}",j(i,e))}},F=/^D+$/,H=/^Y+$/,z=["D","DD","YY","YYYY"],G=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,B=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,L=/^'([^]*?)'?$/,Q=/''/g,X=/[a-zA-Z]/,I=async t=>{try{await (0,d.P)();let t=await s.Z.find().sort({createdAt:"desc"}),e=await Promise.all(t.map(async t=>{let e=await u.Z.findOne({clerkId:t.customerClerkId});return{_id:t._id,customer:e.name,products:t.products.length,totalAmount:t.totalAmount,createdAt:function(t,e,n){let r=n?.locale??y.locale??b,a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??y.firstWeekContainsDate??y.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??y.weekStartsOn??y.locale?.options?.weekStartsOn??0,o=p(t);if(!((o instanceof Date||"object"==typeof o&&"[object Date]"===Object.prototype.toString.call(o)||"number"==typeof o)&&!isNaN(Number(p(o)))))throw RangeError("Invalid time value");let u=e.match(B).map(t=>{let e=t[0];return"p"===e||"P"===e?(0,E[e])(t,r.formatLong):t}).join("").match(G).map(t=>{if("''"===t)return{isToken:!1,value:"'"};let e=t[0];if("'"===e)return{isToken:!1,value:function(t){let e=t.match(L);return e?e[1].replace(Q,"'"):t}(t)};if(O[e])return{isToken:!0,value:t};if(e.match(X))throw RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}});r.localize.preprocessor&&(u=r.localize.preprocessor(o,u));let s={firstWeekContainsDate:a,weekStartsOn:i,locale:r};return u.map(a=>{if(!a.isToken)return a.value;let i=a.value;return(!n?.useAdditionalWeekYearTokens&&H.test(i)||!n?.useAdditionalDayOfYearTokens&&F.test(i))&&function(t,e,n){let r=function(t,e,n){let r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),z.includes(t))throw RangeError(r)}(i,e,String(t)),(0,O[i[0]])(o,i,r.localize,s)}).join("")}(t.createdAt,"MMM do, yyyy")}}));return c.Z.json(e,{status:200})}catch(t){return console.log("[orders_GET]",t),new c.Z("Internal Server Error",{status:500})}},R="force-dynamic",$=new a.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/orders/route",pathname:"/api/orders",filename:"route",bundlePath:"app/api/orders/route"},resolvedPagePath:"C:\\Users\\ASharma\\Documents\\New folder\\borcella_admin-master\\app\\api\\orders\\route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:J,staticGenerationAsyncStorage:U,serverHooks:Z,headerHooks:_,staticGenerationBailout:V}=$,K="/api/orders/route";function tt(){return(0,o.patchFetch)({serverHooks:Z,staticGenerationAsyncStorage:U})}},57838:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(11185),a=n.n(r);let i=new(a()).Schema({clerkId:String,name:String,email:String,orders:{type:[{type:a().Schema.Types.ObjectId,ref:"Order"}]},createdAt:{type:Date,default:Date.now},updatedAt:{type:Date,default:Date.now}}),o=a().models.Customer||a().model("Customer",i)},31228:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(11185),a=n.n(r);let i=new(a()).Schema({customerClerkId:String,products:[{product:{type:a().Schema.Types.ObjectId,ref:"Product"},color:String,size:String,quantity:Number}],shippingAddress:{street:String,city:String,state:String,postalCode:String,country:String},shippingRate:String,totalAmount:Number,createdAt:{type:Date,default:Date.now}}),o=a().models.Order||a().model("Order",i)},18237:(t,e,n)=>{n.d(e,{P:()=>o});var r=n(11185),a=n.n(r);let i=!1,o=async()=>{if(a().set("strictQuery",!0),i){console.log("MongoDB is already connected");return}try{await a().connect(process.env.MONGODB_URL||"",{dbName:"Borcelle_Admin"}),i=!0,console.log("MongoDB is connected")}catch(t){console.log(t)}}},95419:(t,e,n)=>{t.exports=n(30517)}};var e=require("../../../webpack-runtime.js");e.C(t);var n=t=>e(e.s=t),r=e.X(0,[638,70],()=>n(45462));module.exports=r})();