var t=Object.defineProperty,e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(e,n,s)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s;import{a as o,b as r,_ as a,c as l,f as m,s as u}from"./song-list.7fcd2e1e.js";import{f as c,o as d,d as f,F as h,e as p,S as y,G as g,t as v,E as _,p as w,j as $,A as j,B as b,D as M,r as D,J as x,l as Y,q as C,K as S,s as k,U as H,N as O,C as I}from"./vendor.74cd8eb7.js";import{i as L}from"./main.111c1e39.js";import{a as T}from"./util.6e2db632.js";const A={"[笑哭]":"https://s1.music.126.net/style/web2/emoji/emoji_86@2x.png","[可爱]":"https://s1.music.126.net/style/web2/emoji/emoji_85@2x.png","[憨笑]":"https://s1.music.126.net/style/web2/emoji/emoji_359@2x.png","[色]":"https://s1.music.126.net/style/web2/emoji/emoji_95@2x.png","[亲亲]":"https://s1.music.126.net/style/web2/emoji/emoji_363@2x.png","[惊恐]":"https://s1.music.126.net/style/web2/emoji/emoji_96@2x.png","[流泪]":"https://s1.music.126.net/style/web2/emoji/emoji_356@2x.png","[亲]":"https://s1.music.126.net/style/web2/emoji/emoji_362@2x.png","[呆]":"https://s1.music.126.net/style/web2/emoji/emoji_352@2x.png","[呲牙]":"https://s1.music.126.net/style/web2/emoji/emoji_343@2x.png","[吐舌]":"https://s1.music.126.net/style/web2/emoji/emoji_348@2x.png","[撇嘴]":"https://s1.music.126.net/style/web2/emoji/emoji_353@2x.png","[怒]":"https://s1.music.126.net/style/web2/emoji/emoji_361@2x.png","[奸笑]":"https://s1.music.126.net/style/web2/emoji/emoji_341@2x.png","[汗]":"https://s1.music.126.net/style/web2/emoji/emoji_97@2x.png","[痛苦]":"https://s1.music.126.net/style/web2/emoji/emoji_346@2x.png","[惶恐]":"https://s1.music.126.net/style/web2/emoji/emoji_354@2x.png","[生病]":"https://s1.music.126.net/style/web2/emoji/emoji_350@2x.png","[口罩]":"https://s1.music.126.net/style/web2/emoji/emoji_351@2x.png","[大哭]":"https://s1.music.126.net/style/web2/emoji/emoji_357@2x.png","[晕]":"https://s1.music.126.net/style/web2/emoji/emoji_355@2x.png","[发怒]":"https://s1.music.126.net/style/web2/emoji/emoji_115@2x.png","[开心]":"https://s1.music.126.net/style/web2/emoji/emoji_360@2x.png","[鬼脸]":"https://s1.music.126.net/style/web2/emoji/emoji_94@2x.png","[皱眉]":"https://s1.music.126.net/style/web2/emoji/emoji_87@2x.png","[流感]":"https://s1.music.126.net/style/web2/emoji/emoji_358@2x.png","[爱心]":"https://s1.music.126.net/style/web2/emoji/emoji_33@2x.png","[心碎]":"https://s1.music.126.net/style/web2/emoji/emoji_34@2x.png","[钟情]":"https://s1.music.126.net/style/web2/emoji/emoji_303@2x.png","[星星]":"https://s1.music.126.net/style/web2/emoji/emoji_309@2x.png","[生气]":"https://s1.music.126.net/style/web2/emoji/emoji_314@2x.png","[便便]":"https://s1.music.126.net/style/web2/emoji/emoji_89@2x.png","[强]":"https://s1.music.126.net/style/web2/emoji/emoji_13@2x.png","[弱]":"https://s1.music.126.net/style/web2/emoji/emoji_372@2x.png","[大笑]":"http://s1.music.126.net/style/web2/emoji/emoji_86@2x.png"},U=/<img.*?(?:>|\/>)/gi,R=/\[.*?\]+/g;function N(t){let e=t;return e=e.replaceAll(R,(t=>A[t]?`<img src="${A[t]}" class="comment-emoji" />`:t)),e.split(U).forEach((t=>{t&&(e=e.replace(t,`<span class="comment-text">${t}</span>`))})),e}const W={class:"comment-reply"},F={class:"reply-content"},B=_("回复"),E=_("： "),z={class:"post-content"},J={key:0},P={key:1},Z={props:{isReply:{type:Boolean,default:!1},replyContent:String,postAuthor:String,postContent:String},setup(t){const e=t;return(n,s)=>{const i=c("router-link");return d(),f("div",W,[t.isReply?(d(),f(h,{key:0},[p("div",F,[p("div",null,[B,p(i,{to:"/mlog/",class:"user-page"},{default:y((()=>[_("@"+v(e.postAuthor),1)])),_:1}),E,p("span",{innerHTML:g(N)(e.postContent)},null,8,["innerHTML"])])]),p("div",z,[e.replyContent?(d(),f("div",J,"@"+v(e.postAuthor)+"："+v(e.replyContent),1)):(d(),f("div",P,"该评论已被删除"))])],64)):(d(),f("div",{key:1,innerHTML:g(N)(e.postContent)},null,8,["innerHTML"]))])}}};var q="millisecond",V="second",G="minute",K="hour",Q="day",X="week",tt="month",et="quarter",nt="year",st="date",it=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,ot=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,rt={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},at=function(t,e,n){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},lt={s:at,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),s=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+at(s,2,"0")+":"+at(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var s=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(s,tt),o=n-i<0,r=e.clone().add(s+(o?-1:1),tt);return+(-(s+(n-i)/(o?i-r:r-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:tt,y:nt,w:X,d:Q,D:st,h:K,m:G,s:V,ms:q,Q:et}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},mt="en",ut={};ut[mt]=rt;var ct=function(t){return t instanceof pt},dt=function(t,e,n){var s;if(!t)return mt;if("string"==typeof t)ut[t]&&(s=t),e&&(ut[t]=e,s=t);else{var i=t.name;ut[i]=t,s=i}return!n&&s&&(mt=s),s||!n&&mt},ft=function(t,e){if(ct(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new pt(n)},ht=lt;ht.l=dt,ht.i=ct,ht.w=function(t,e){return ft(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var pt=function(){function t(t){this.$L=dt(t.locale,null,!0),this.parse(t)}var e=t.prototype;return e.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(ht.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(it);if(s){var i=s[2]-1||0,o=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,o)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},e.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},e.$utils=function(){return ht},e.isValid=function(){return!("Invalid Date"===this.$d.toString())},e.isSame=function(t,e){var n=ft(t);return this.startOf(e)<=n&&n<=this.endOf(e)},e.isAfter=function(t,e){return ft(t)<this.startOf(e)},e.isBefore=function(t,e){return this.endOf(e)<ft(t)},e.$g=function(t,e,n){return ht.u(t)?this[e]:this.set(n,t)},e.unix=function(){return Math.floor(this.valueOf()/1e3)},e.valueOf=function(){return this.$d.getTime()},e.startOf=function(t,e){var n=this,s=!!ht.u(e)||e,i=ht.p(t),o=function(t,e){var i=ht.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return s?i:i.endOf(Q)},r=function(t,e){return ht.w(n.toDate()[t].apply(n.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},a=this.$W,l=this.$M,m=this.$D,u="set"+(this.$u?"UTC":"");switch(i){case nt:return s?o(1,0):o(31,11);case tt:return s?o(1,l):o(0,l+1);case X:var c=this.$locale().weekStart||0,d=(a<c?a+7:a)-c;return o(s?m-d:m+(6-d),l);case Q:case st:return r(u+"Hours",0);case K:return r(u+"Minutes",1);case G:return r(u+"Seconds",2);case V:return r(u+"Milliseconds",3);default:return this.clone()}},e.endOf=function(t){return this.startOf(t,!1)},e.$set=function(t,e){var n,s=ht.p(t),i="set"+(this.$u?"UTC":""),o=(n={},n[Q]=i+"Date",n[st]=i+"Date",n[tt]=i+"Month",n[nt]=i+"FullYear",n[K]=i+"Hours",n[G]=i+"Minutes",n[V]=i+"Seconds",n[q]=i+"Milliseconds",n)[s],r=s===Q?this.$D+(e-this.$W):e;if(s===tt||s===nt){var a=this.clone().set(st,1);a.$d[o](r),a.init(),this.$d=a.set(st,Math.min(this.$D,a.daysInMonth())).$d}else o&&this.$d[o](r);return this.init(),this},e.set=function(t,e){return this.clone().$set(t,e)},e.get=function(t){return this[ht.p(t)]()},e.add=function(t,e){var n,s=this;t=Number(t);var i=ht.p(e),o=function(e){var n=ft(s);return ht.w(n.date(n.date()+Math.round(e*t)),s)};if(i===tt)return this.set(tt,this.$M+t);if(i===nt)return this.set(nt,this.$y+t);if(i===Q)return o(1);if(i===X)return o(7);var r=(n={},n[G]=6e4,n[K]=36e5,n[V]=1e3,n)[i]||1,a=this.$d.getTime()+t*r;return ht.w(a,this)},e.subtract=function(t,e){return this.add(-1*t,e)},e.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=ht.z(this),i=this.$locale(),o=this.$H,r=this.$m,a=this.$M,l=i.weekdays,m=i.months,u=function(t,s,i,o){return t&&(t[s]||t(e,n))||i[s].substr(0,o)},c=function(t){return ht.s(o%12||12,t,"0")},d=i.meridiem||function(t,e,n){var s=t<12?"AM":"PM";return n?s.toLowerCase():s},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:ht.s(a+1,2,"0"),MMM:u(i.monthsShort,a,m,3),MMMM:u(m,a),D:this.$D,DD:ht.s(this.$D,2,"0"),d:String(this.$W),dd:u(i.weekdaysMin,this.$W,l,2),ddd:u(i.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:ht.s(o,2,"0"),h:c(1),hh:c(2),a:d(o,r,!0),A:d(o,r,!1),m:String(r),mm:ht.s(r,2,"0"),s:String(this.$s),ss:ht.s(this.$s,2,"0"),SSS:ht.s(this.$ms,3,"0"),Z:s};return n.replace(ot,(function(t,e){return e||f[t]||s.replace(":","")}))},e.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},e.diff=function(t,e,n){var s,i=ht.p(e),o=ft(t),r=6e4*(o.utcOffset()-this.utcOffset()),a=this-o,l=ht.m(this,o);return l=(s={},s[nt]=l/12,s[tt]=l,s[et]=l/3,s[X]=(a-r)/6048e5,s[Q]=(a-r)/864e5,s[K]=a/36e5,s[G]=a/6e4,s[V]=a/1e3,s)[i]||a,n?l:ht.a(l)},e.daysInMonth=function(){return this.endOf(tt).$D},e.$locale=function(){return ut[this.$L]},e.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),s=dt(t,e,!0);return s&&(n.$L=s),n},e.clone=function(){return ht.w(this.$d,this)},e.toDate=function(){return new Date(this.valueOf())},e.toJSON=function(){return this.isValid()?this.toISOString():null},e.toISOString=function(){return this.$d.toISOString()},e.toString=function(){return this.$d.toUTCString()},t}(),yt=pt.prototype;ft.prototype=yt,[["$ms",q],["$s",V],["$m",G],["$H",K],["$W",Q],["$M",tt],["$y",nt],["$D",st]].forEach((function(t){yt[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),ft.extend=function(t,e){return t.$i||(t(e,pt,ft),t.$i=!0),ft},ft.locale=dt,ft.isDayjs=ct,ft.unix=function(t){return ft(1e3*t)},ft.en=ut[mt],ft.Ls=ut,ft.p={};var gt={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t,e){switch(e){case"W":return t+"周";default:return t+"日"}},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(t,e){var n=100*t+e;return n<600?"凌晨":n<900?"早上":n<1100?"上午":n<1300?"中午":n<1800?"下午":"晚上"}};ft.locale(gt,null,!0);function vt(t,e=20,n=0){return L.get("/comment/playlist",{params:{id:t,limit:e,offset:e*n}})}function _t(t,e,n=20,s){return L.get("/comment/hot",{params:{id:t,type:e,limit:n,offset:s}})}async function wt(t,e,n,s,i){T((async()=>{let o=!1;n=0==n?1:0;try{await function(t,e,n=1,s=2){return L.get("/comment/like",{params:{id:t,cid:e,t:n,type:s}})}(t,e,n),o=!0}catch(r){alert(r)}finally{o&&i("updateComments",e,{liked:!!n,likedCount:s+1})}}))}function $t(t){return function(e,n){let s=t.value.findIndex((t=>t.commentId===e));s>-1&&(t.value[s]=Object.assign(t.value[s],n))}}function jt(t,e="day"){return t.startOf(e).valueOf()}function bt(t,e="day"){return t.endOf(e).valueOf()}function Mt(t){const e=(new Date).getTime(),n=ft(),s=jt(n),i=bt(n),o=jt(n.subtract(1,"day")),r=bt(n.subtract(1,"day")),a=jt(n,"year"),l=bt(n,"year");return e-t<36e5?ft(t).fromNow():t>=s&&t<=i?ft(t).format("HH:mm"):t>=o&&t<=r?ft(t).format("昨天HH:mm"):t>=a&&t<=l?ft(t).format("MM月DD日"):ft(t).format("YYYY年MM月DD日")}function Dt(){return{doFavorHandler:wt,updateComments:$t,formatCommentDate:Mt}}ft.locale(gt),ft.extend((function(t,e,n){t=t||{};var s=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function o(t,e,n,i){return s.fromToBase(t,e,n,i)}n.en.relativeTime=i,s.fromToBase=function(e,s,o,r,a){for(var l,m,u,c=o.$locale().relativeTime||i,d=t.thresholds||[{l:"s",r:44,d:V},{l:"m",r:89},{l:"mm",r:44,d:G},{l:"h",r:89},{l:"hh",r:21,d:K},{l:"d",r:35},{l:"dd",r:25,d:Q},{l:"M",r:45},{l:"MM",r:10,d:tt},{l:"y",r:17},{l:"yy",d:nt}],f=d.length,h=0;h<f;h+=1){var p=d[h];p.d&&(l=r?n(e).diff(o,p.d,!0):o.diff(e,p.d,!0));var y=(t.rounding||Math.round)(Math.abs(l));if(u=l>0,y<=p.r||!p.r){y<=1&&h>0&&(p=d[h-1]);var g=c[p.l];a&&(y=a(""+y)),m="string"==typeof g?g.replace("%d",y):g(y,s,p.l,u);break}}if(s)return m;var v=u?c.future:c.past;return"function"==typeof v?v(m):v.replace("%s",m)},s.to=function(t,e){return o(t,e,this,!0)},s.from=function(t,e){return o(t,e,this)};var r=function(t){return t.$u?n.utc():n()};s.toNow=function(t){return this.to(r(this),t)},s.fromNow=function(t){return this.from(r(this),t)}}));const xt={components:{commentReply:Z},props:{playlistId:{type:Number},comments:{type:Array,default:()=>[]}},setup(t){j(t);const{formatCommentDate:e,doFavorHandler:n}=Dt();return{formatCommentDate:e,doFavorHandler:n}}},Yt=M();w("data-v-7b48f47e");const Ct={class:"comment-list-box"},St={class:"comment-item-box"},kt={class:"comment-user"},Ht={class:"comment-user-avatar"},Ot={class:"comment-user-info"},It={class:"comment-user-name"},Lt={class:"comment-date"},Tt={class:"cmt_likeicn"},At={class:"u-svg u-svg-unzancmt",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"},Ut={class:"comment-desc"};$();const Rt=Yt(((t,e,n,s,i,o)=>{const r=c("comment-reply");return d(),f("ul",Ct,[(d(!0),f(h,null,b(n.comments,((e,i)=>(d(),f("li",{class:"comment-li",key:i},[p("div",St,[p("div",kt,[p("div",Ht,[p("img",{src:e.user.avatarUrl,alt:e.user.nickname},null,8,["src","alt"])]),p("div",Ot,[p("div",It,v(e.user.nickname),1),p("div",Lt,v(s.formatCommentDate(e.time)),1),p("div",{class:"comment-favor",onClick:i=>s.doFavorHandler(n.playlistId,e.commentId,e.liked,e.likedCount,t.$emit)},[_(v(e.likedCount)+" ",1),p("i",Tt,[(d(),f("svg",At,[p("path",{fill:e.liked?"var(--mainTheme)":"#999",d:"m25.857 14.752c-.015.059-1.506 5.867-2.932 8.813-1.162 2.402-3 2.436-3.099 2.436h-12.826v-13c3 0 5.728-4 5.728-7.275 0-3.725 1.433-3.725 2.142-3.725 1.327 0 1.978 1.345 1.978 4 0 2.872-.832 4.525-.839 4.537-.161.31-.155.682.027.981.181.299.5.482.849.482h6.942c.922 0 1.551.215 1.866.64.467.626.286 1.705.164 2.112m-23.857 10.248v-10c0-1.795.659-1.981.855-2h2.145v13h-2.173c-.829 0-.827-.648-.827-1m25.309-13.54c-.713-.969-1.886-1.46-3.482-1.46h-5.519c.26-.932.519-2.285.519-4 0-5.221-2.507-6-4-6-1.909 0-4.185.993-4.185 5.725 0 2.206-1.923 5.275-3.815 5.275h-4-.011c-1.034.011-2.816.862-2.816 4v10.02c0 1.198.675 2.979 2.827 2.979h16.971.035c.364 0 3.224-.113 4.894-3.564 1.514-3.127 3.01-8.942 3.056-9.14.071-.23.664-2.289-.474-3.836"},null,8,["fill"])]))])],8,["onClick"])])]),p("div",Ut,[p(r,{postContent:e.content,postAuthor:e.beReplied.length?e.beReplied[0].user.nickname:"",replyContent:e.beReplied.length?e.beReplied[0].content:"",isReply:0!==e.beReplied.length},null,8,["postContent","postAuthor","replyContent","isReply"])])])])))),128))])}));xt.render=Rt,xt.__scopeId="data-v-7b48f47e";const Nt={components:{songList:o,commentList:xt,loadingBar:r,albumCover:a},setup(){const t=D({info:{},songs:[],commentInfo:[],dynamicInfo:{},hotComments:[]}),{updateComments:o}=Dt(),r=o(x(t,"commentInfo")),a=o(x(t,"hotComments")),c=H(),d=O(),f=Y(c.query.id);if(!f.value)return d.back();let h=1;const p=Y(!0);C((function(){const e=f.value;Promise.all([l(e),m(e),vt(e),_t(e,2)]).then((([e,n,s,i])=>{t.info=n.playlist,t.songs=u(n.playlist.tracks||[]),t.commentInfo=s.comments,t.dynamicInfo=e,t.hotComments=i.hotComments,h=Math.round(t.dynamicInfo.commentCount/20)})).finally((()=>{p.value=!1}))}));let y=Y(!1),g=1;const v=S((function(){document.documentElement.scrollHeight-window.innerHeight-3<window.pageYOffset&&!y.value&&g<=h&&(y.value=!0,vt(f.value,20,g+1).then((e=>{t.commentInfo=t.commentInfo.concat(e.comments)})).finally((()=>{g+=1,y.value=!1})))}),200);return window.addEventListener("scroll",v),k((function(){window.removeEventListener("scroll",v)})),((t,o)=>{for(var r in o||(o={}))n.call(o,r)&&i(t,r,o[r]);if(e)for(var r of e(o))s.call(o,r)&&i(t,r,o[r]);return t})({loading:p,updateHandler:r,scrollLoading:y,updateHotHandler:a},j(t))}},Wt=M();w("data-v-6485cc76");const Ft={key:0,class:"loading-wrap"},Bt={class:"playlist-cover-bg"},Et={class:"playlist-cover"},zt={class:"playlist-desc"},Jt={class:"playlist-author"},Pt={class:"author-name"},Zt={class:"playlist-short-desc"},qt={class:"playlist-songs"},Vt=p("div",{class:"pl-title"},"歌曲列表",-1),Gt={key:0,class:"hot-comments"},Kt=p("div",{class:"pl-title"},"精彩评论",-1),Qt={key:1,class:"review-comments"},Xt={class:"pl-title"};$();const te=Wt(((t,e,n,s,i,o)=>{const r=c("loading-bar"),a=c("albumCover"),l=c("router-link"),m=c("song-list"),u=c("comment-list"),y=c("loadingBar");return d(),f("main",null,[s.loading?(d(),f("div",Ft,[p(r)])):(d(),f(h,{key:1},[p("section",Bt,[p("div",Et,[p("div",{class:"cover-bg-blur",style:[{"background-image":`url(${t.info.coverImgUrl})`}]},null,4),p(a,{count:t.info.playCount,coverUrl:t.info.coverImgUrl},null,8,["count","coverUrl"])]),p("div",zt,[p("h2",null,v(t.info.name),1),p("div",Jt,[p(l,{to:"/mlog",class:"author-link"},{default:Wt((()=>[p("img",{src:t.info.creator.avatarUrl,alt:t.info.creator.nickname,class:"author-avatar"},null,8,["src","alt"]),p("span",Pt,v(t.info.creator.nickname),1)])),_:1})]),p("div",Zt,v(t.info.description),1)])]),p("section",qt,[Vt,p(m,{songs:t.songs,isReference:""},null,8,["songs"])]),t.hotComments.length?(d(),f("section",Gt,[Kt,p(u,{comments:t.hotComments,playlistId:t.info.id,onUpdateComments:s.updateHotHandler},null,8,["comments","playlistId","onUpdateComments"])])):I("",!0),t.commentInfo.length?(d(),f("section",Qt,[p("div",Xt,"最新评论("+v(t.dynamicInfo.commentCount)+")",1),p(u,{comments:t.commentInfo,playlistId:t.info.id,onUpdateComments:s.updateHandler},null,8,["comments","playlistId","onUpdateComments"]),s.scrollLoading?(d(),f(y,{key:0})):I("",!0)])):I("",!0)],64))])}));Nt.render=te,Nt.__scopeId="data-v-6485cc76";export{Nt as default};
