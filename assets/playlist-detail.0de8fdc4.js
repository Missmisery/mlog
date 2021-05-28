var t=Object.defineProperty,e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(e,n,s)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s;import{a as o,b as r,_ as a,c as l,f as c,s as u}from"./song-list.b1010235.js";import{d as m,o as h,e as d,F as f,f as p,S as y,G as g,t as v,D as _,p as w,j as $,A as j,B as b,E as M,r as D,l as x,q as Y,K as S,s as k,U as L,O,C}from"./vendor.08c6e7a1.js";import{i as H}from"./main.5b696ae8.js";var T="millisecond",I="second",A="minute",U="hour",R="day",W="week",B="month",N="quarter",E="year",z="date",F=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,P=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,J={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},Z=function(t,e,n){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},q={s:Z,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),s=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+Z(s,2,"0")+":"+Z(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var s=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(s,B),o=n-i<0,r=e.clone().add(s+(o?-1:1),B);return+(-(s+(n-i)/(o?i-r:r-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:B,y:E,w:W,d:R,D:z,h:U,m:A,s:I,ms:T,Q:N}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},V="en",G={};G[V]=J;var K=function(t){return t instanceof et},Q=function(t,e,n){var s;if(!t)return V;if("string"==typeof t)G[t]&&(s=t),e&&(G[t]=e,s=t);else{var i=t.name;G[i]=t,s=i}return!n&&s&&(V=s),s||!n&&V},X=function(t,e){if(K(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new et(n)},tt=q;tt.l=Q,tt.i=K,tt.w=function(t,e){return X(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var et=function(){function t(t){this.$L=Q(t.locale,null,!0),this.parse(t)}var e=t.prototype;return e.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(tt.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(F);if(s){var i=s[2]-1||0,o=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,o)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},e.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},e.$utils=function(){return tt},e.isValid=function(){return!("Invalid Date"===this.$d.toString())},e.isSame=function(t,e){var n=X(t);return this.startOf(e)<=n&&n<=this.endOf(e)},e.isAfter=function(t,e){return X(t)<this.startOf(e)},e.isBefore=function(t,e){return this.endOf(e)<X(t)},e.$g=function(t,e,n){return tt.u(t)?this[e]:this.set(n,t)},e.unix=function(){return Math.floor(this.valueOf()/1e3)},e.valueOf=function(){return this.$d.getTime()},e.startOf=function(t,e){var n=this,s=!!tt.u(e)||e,i=tt.p(t),o=function(t,e){var i=tt.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return s?i:i.endOf(R)},r=function(t,e){return tt.w(n.toDate()[t].apply(n.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},a=this.$W,l=this.$M,c=this.$D,u="set"+(this.$u?"UTC":"");switch(i){case E:return s?o(1,0):o(31,11);case B:return s?o(1,l):o(0,l+1);case W:var m=this.$locale().weekStart||0,h=(a<m?a+7:a)-m;return o(s?c-h:c+(6-h),l);case R:case z:return r(u+"Hours",0);case U:return r(u+"Minutes",1);case A:return r(u+"Seconds",2);case I:return r(u+"Milliseconds",3);default:return this.clone()}},e.endOf=function(t){return this.startOf(t,!1)},e.$set=function(t,e){var n,s=tt.p(t),i="set"+(this.$u?"UTC":""),o=(n={},n[R]=i+"Date",n[z]=i+"Date",n[B]=i+"Month",n[E]=i+"FullYear",n[U]=i+"Hours",n[A]=i+"Minutes",n[I]=i+"Seconds",n[T]=i+"Milliseconds",n)[s],r=s===R?this.$D+(e-this.$W):e;if(s===B||s===E){var a=this.clone().set(z,1);a.$d[o](r),a.init(),this.$d=a.set(z,Math.min(this.$D,a.daysInMonth())).$d}else o&&this.$d[o](r);return this.init(),this},e.set=function(t,e){return this.clone().$set(t,e)},e.get=function(t){return this[tt.p(t)]()},e.add=function(t,e){var n,s=this;t=Number(t);var i=tt.p(e),o=function(e){var n=X(s);return tt.w(n.date(n.date()+Math.round(e*t)),s)};if(i===B)return this.set(B,this.$M+t);if(i===E)return this.set(E,this.$y+t);if(i===R)return o(1);if(i===W)return o(7);var r=(n={},n[A]=6e4,n[U]=36e5,n[I]=1e3,n)[i]||1,a=this.$d.getTime()+t*r;return tt.w(a,this)},e.subtract=function(t,e){return this.add(-1*t,e)},e.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=tt.z(this),i=this.$locale(),o=this.$H,r=this.$m,a=this.$M,l=i.weekdays,c=i.months,u=function(t,s,i,o){return t&&(t[s]||t(e,n))||i[s].substr(0,o)},m=function(t){return tt.s(o%12||12,t,"0")},h=i.meridiem||function(t,e,n){var s=t<12?"AM":"PM";return n?s.toLowerCase():s},d={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:tt.s(a+1,2,"0"),MMM:u(i.monthsShort,a,c,3),MMMM:u(c,a),D:this.$D,DD:tt.s(this.$D,2,"0"),d:String(this.$W),dd:u(i.weekdaysMin,this.$W,l,2),ddd:u(i.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:tt.s(o,2,"0"),h:m(1),hh:m(2),a:h(o,r,!0),A:h(o,r,!1),m:String(r),mm:tt.s(r,2,"0"),s:String(this.$s),ss:tt.s(this.$s,2,"0"),SSS:tt.s(this.$ms,3,"0"),Z:s};return n.replace(P,(function(t,e){return e||d[t]||s.replace(":","")}))},e.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},e.diff=function(t,e,n){var s,i=tt.p(e),o=X(t),r=6e4*(o.utcOffset()-this.utcOffset()),a=this-o,l=tt.m(this,o);return l=(s={},s[E]=l/12,s[B]=l,s[N]=l/3,s[W]=(a-r)/6048e5,s[R]=(a-r)/864e5,s[U]=a/36e5,s[A]=a/6e4,s[I]=a/1e3,s)[i]||a,n?l:tt.a(l)},e.daysInMonth=function(){return this.endOf(B).$D},e.$locale=function(){return G[this.$L]},e.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),s=Q(t,e,!0);return s&&(n.$L=s),n},e.clone=function(){return tt.w(this.$d,this)},e.toDate=function(){return new Date(this.valueOf())},e.toJSON=function(){return this.isValid()?this.toISOString():null},e.toISOString=function(){return this.$d.toISOString()},e.toString=function(){return this.$d.toUTCString()},t}(),nt=et.prototype;X.prototype=nt,[["$ms",T],["$s",I],["$m",A],["$H",U],["$W",R],["$M",B],["$y",E],["$D",z]].forEach((function(t){nt[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),X.extend=function(t,e){return t.$i||(t(e,et,X),t.$i=!0),X},X.locale=Q,X.isDayjs=K,X.unix=function(t){return X(1e3*t)},X.en=G[V],X.Ls=G,X.p={};var st={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t,e){switch(e){case"W":return t+"周";default:return t+"日"}},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(t,e){var n=100*t+e;return n<600?"凌晨":n<900?"早上":n<1100?"上午":n<1300?"中午":n<1800?"下午":"晚上"}};X.locale(st,null,!0);X.locale(st),X.extend((function(t,e,n){t=t||{};var s=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function o(t,e,n,i){return s.fromToBase(t,e,n,i)}n.en.relativeTime=i,s.fromToBase=function(e,s,o,r,a){for(var l,c,u,m=o.$locale().relativeTime||i,h=t.thresholds||[{l:"s",r:44,d:I},{l:"m",r:89},{l:"mm",r:44,d:A},{l:"h",r:89},{l:"hh",r:21,d:U},{l:"d",r:35},{l:"dd",r:25,d:R},{l:"M",r:45},{l:"MM",r:10,d:B},{l:"y",r:17},{l:"yy",d:E}],d=h.length,f=0;f<d;f+=1){var p=h[f];p.d&&(l=r?n(e).diff(o,p.d,!0):o.diff(e,p.d,!0));var y=(t.rounding||Math.round)(Math.abs(l));if(u=l>0,y<=p.r||!p.r){y<=1&&f>0&&(p=h[f-1]);var g=m[p.l];a&&(y=a(""+y)),c="string"==typeof g?g.replace("%d",y):g(y,s,p.l,u);break}}if(s)return c;var v=u?m.future:m.past;return"function"==typeof v?v(c):v.replace("%s",c)},s.to=function(t,e){return o(t,e,this,!0)},s.from=function(t,e){return o(t,e,this)};var r=function(t){return t.$u?n.utc():n()};s.toNow=function(t){return this.to(r(this),t)},s.fromNow=function(t){return this.from(r(this),t)}}));const it={"[笑哭]":"https://s1.music.126.net/style/web2/emoji/emoji_86@2x.png","[可爱]":"https://s1.music.126.net/style/web2/emoji/emoji_85@2x.png","[憨笑]":"https://s1.music.126.net/style/web2/emoji/emoji_359@2x.png","[色]":"https://s1.music.126.net/style/web2/emoji/emoji_95@2x.png","[亲亲]":"https://s1.music.126.net/style/web2/emoji/emoji_363@2x.png","[惊恐]":"https://s1.music.126.net/style/web2/emoji/emoji_96@2x.png","[流泪]":"https://s1.music.126.net/style/web2/emoji/emoji_356@2x.png","[亲]":"https://s1.music.126.net/style/web2/emoji/emoji_362@2x.png","[呆]":"https://s1.music.126.net/style/web2/emoji/emoji_352@2x.png","[呲牙]":"https://s1.music.126.net/style/web2/emoji/emoji_343@2x.png","[吐舌]":"https://s1.music.126.net/style/web2/emoji/emoji_348@2x.png","[撇嘴]":"https://s1.music.126.net/style/web2/emoji/emoji_353@2x.png","[怒]":"https://s1.music.126.net/style/web2/emoji/emoji_361@2x.png","[奸笑]":"https://s1.music.126.net/style/web2/emoji/emoji_341@2x.png","[汗]":"https://s1.music.126.net/style/web2/emoji/emoji_97@2x.png","[痛苦]":"https://s1.music.126.net/style/web2/emoji/emoji_346@2x.png","[惶恐]":"https://s1.music.126.net/style/web2/emoji/emoji_354@2x.png","[生病]":"https://s1.music.126.net/style/web2/emoji/emoji_350@2x.png","[口罩]":"https://s1.music.126.net/style/web2/emoji/emoji_351@2x.png","[大哭]":"https://s1.music.126.net/style/web2/emoji/emoji_357@2x.png","[晕]":"https://s1.music.126.net/style/web2/emoji/emoji_355@2x.png","[发怒]":"https://s1.music.126.net/style/web2/emoji/emoji_115@2x.png","[开心]":"https://s1.music.126.net/style/web2/emoji/emoji_360@2x.png","[鬼脸]":"https://s1.music.126.net/style/web2/emoji/emoji_94@2x.png","[皱眉]":"https://s1.music.126.net/style/web2/emoji/emoji_87@2x.png","[流感]":"https://s1.music.126.net/style/web2/emoji/emoji_358@2x.png","[爱心]":"https://s1.music.126.net/style/web2/emoji/emoji_33@2x.png","[心碎]":"https://s1.music.126.net/style/web2/emoji/emoji_34@2x.png","[钟情]":"https://s1.music.126.net/style/web2/emoji/emoji_303@2x.png","[星星]":"https://s1.music.126.net/style/web2/emoji/emoji_309@2x.png","[生气]":"https://s1.music.126.net/style/web2/emoji/emoji_314@2x.png","[便便]":"https://s1.music.126.net/style/web2/emoji/emoji_89@2x.png","[强]":"https://s1.music.126.net/style/web2/emoji/emoji_13@2x.png","[弱]":"https://s1.music.126.net/style/web2/emoji/emoji_372@2x.png","[大笑]":"http://s1.music.126.net/style/web2/emoji/emoji_86@2x.png"},ot=/<img.*?(?:>|\/>)/gi,rt=/\[.*?\]+/g;function at(t){let e=t;return e=e.replaceAll(rt,(t=>it[t]?`<img src="${it[t]}" class="comment-emoji" />`:t)),e.split(ot).forEach((t=>{t&&(e=e.replace(t,`<span class="comment-text">${t}</span>`))})),e}const lt={class:"comment-reply"},ct={class:"reply-content"},ut=_("回复"),mt=_("： "),ht={class:"post-content"},dt={key:0},ft={key:1};const pt={components:{commentReply:{expose:[],props:{isReply:{type:Boolean,default:!1},replyContent:String,postAuthor:String,postContent:String},setup(t){const e=t;return(n,s)=>{const i=m("router-link");return h(),d("div",lt,[t.isReply?(h(),d(f,{key:0},[p("div",ct,[p("div",null,[ut,p(i,{to:"/mlog/",class:"user-page"},{default:y((()=>[_("@"+v(e.postAuthor),1)])),_:1}),mt,p("span",{innerHTML:g(at)(e.postContent)},null,8,["innerHTML"])])]),p("div",ht,[e.replyContent?(h(),d("div",dt,"@"+v(e.postAuthor)+"："+v(e.replyContent),1)):(h(),d("div",ft,"该评论已被删除"))])],64)):(h(),d("div",{key:1,innerHTML:g(at)(e.postContent)},null,8,["innerHTML"]))])}}}},props:{comments:{type:Array,default:()=>[]}},setup(t){const{comments:e}=j(t);return{formatDate:function(t){return t>(new Date).getTime()-6048e5?X(t).fromNow():X(t).format("YYYY年MM月DD日")},comments:e}}},yt=M();w("data-v-12ca310c");const gt={class:"comment-list-box"},vt={class:"comment-item-box"},_t={class:"comment-user"},wt={class:"comment-user-avatar"},$t={class:"comment-user-info"},jt={class:"comment-user-name"},bt={class:"comment-date"},Mt={class:"comment-favor"},Dt=p("i",{class:"cmt_likeicn"},[p("svg",{class:"u-svg u-svg-unzancmt",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"},[p("path",{fill:"#999",d:"m25.857 14.752c-.015.059-1.506 5.867-2.932 8.813-1.162 2.402-3 2.436-3.099 2.436h-12.826v-13c3 0 5.728-4 5.728-7.275 0-3.725 1.433-3.725 2.142-3.725 1.327 0 1.978 1.345 1.978 4 0 2.872-.832 4.525-.839 4.537-.161.31-.155.682.027.981.181.299.5.482.849.482h6.942c.922 0 1.551.215 1.866.64.467.626.286 1.705.164 2.112m-23.857 10.248v-10c0-1.795.659-1.981.855-2h2.145v13h-2.173c-.829 0-.827-.648-.827-1m25.309-13.54c-.713-.969-1.886-1.46-3.482-1.46h-5.519c.26-.932.519-2.285.519-4 0-5.221-2.507-6-4-6-1.909 0-4.185.993-4.185 5.725 0 2.206-1.923 5.275-3.815 5.275h-4-.011c-1.034.011-2.816.862-2.816 4v10.02c0 1.198.675 2.979 2.827 2.979h16.971.035c.364 0 3.224-.113 4.894-3.564 1.514-3.127 3.01-8.942 3.056-9.14.071-.23.664-2.289-.474-3.836"})])],-1),xt={class:"comment-desc"};$();const Yt=yt(((t,e,n,s,i,o)=>{const r=m("comment-reply");return h(),d("ul",gt,[(h(!0),d(f,null,b(s.comments,((t,e)=>(h(),d("li",{class:"comment-li",key:e},[p("div",vt,[p("div",_t,[p("div",wt,[p("img",{src:t.user.avatarUrl,alt:""},null,8,["src"])]),p("div",$t,[p("div",jt,v(t.user.nickname),1),p("div",bt,v(s.formatDate(t.time)),1),p("div",Mt,[_(v(t.likedCount)+" ",1),Dt])])]),p("div",xt,[p(r,{postContent:t.content,postAuthor:t.beReplied.length?t.beReplied[0].user.nickname:"",replyContent:t.beReplied.length?t.beReplied[0].content:"",isReply:0!==t.beReplied.length},null,8,["postContent","postAuthor","replyContent","isReply"])])])])))),128))])}));function St(t,e=20,n=0){return H.get("/comment/playlist",{params:{id:t,limit:e,offset:e*n}})}function kt(t,e,n=20,s){return H.get("/comment/hot",{params:{id:t,type:e,limit:n,offset:s}})}pt.render=Yt,pt.__scopeId="data-v-12ca310c";const Lt={components:{songList:o,commentList:pt,loadingBar:r,albumCover:a},setup(){const t=D({info:{},songs:[],commentInfo:[],dynamicInfo:{},hotComments:[]}),o=L(),r=O(),a=x(o.query.id);if(!a.value)return r.back();let m=1;const h=x(!0);Y((function(){const e=a.value;Promise.all([l(e),c(e),St(e),kt(e,2)]).then((([e,n,s,i])=>{t.info=n.playlist,t.songs=u(n.playlist.tracks||[]),t.commentInfo=s.comments,t.dynamicInfo=e,t.hotComments=i.hotComments,m=Math.round(t.dynamicInfo.commentCount/20)})).finally((()=>{h.value=!1}))}));let d=x(!1),f=1;const p=S((function(){document.documentElement.scrollHeight-window.innerHeight-3<window.pageYOffset&&!d.value&&f<=m&&(d.value=!0,St(a.value,20,f+1).then((e=>{t.commentInfo=t.commentInfo.concat(e.comments)})).finally((()=>{f+=1,d.value=!1})))}),200);return window.addEventListener("scroll",p),k((function(){window.removeEventListener("scroll",p)})),((t,o)=>{for(var r in o||(o={}))n.call(o,r)&&i(t,r,o[r]);if(e)for(var r of e(o))s.call(o,r)&&i(t,r,o[r]);return t})({loading:h,scrollLoading:d},j(t))}},Ot=M();w("data-v-cf5bdd24");const Ct={key:0,class:"loading-wrap"},Ht={class:"playlist-cover-bg"},Tt={class:"playlist-cover"},It={class:"playlist-desc"},At={class:"playlist-author"},Ut={class:"author-name"},Rt={class:"playlist-short-desc"},Wt={class:"playlist-songs"},Bt=p("div",{class:"pl-title"},"歌曲列表",-1),Nt={key:0,class:"hot-comments"},Et=p("div",{class:"pl-title"},"精彩评论",-1),zt={key:1,class:"review-comments"},Ft={class:"pl-title"};$();const Pt=Ot(((t,e,n,s,i,o)=>{const r=m("loading-bar"),a=m("albumCover"),l=m("router-link"),c=m("song-list"),u=m("comment-list"),y=m("loadingBar");return h(),d("main",null,[s.loading?(h(),d("div",Ct,[p(r)])):(h(),d(f,{key:1},[p("section",Ht,[p("div",Tt,[p("div",{class:"cover-bg-blur",style:[{"background-image":`url(${t.info.coverImgUrl})`}]},null,4),p(a,{count:t.info.playCount,coverUrl:t.info.coverImgUrl},null,8,["count","coverUrl"])]),p("div",It,[p("h2",null,v(t.info.name),1),p("div",At,[p(l,{to:"/mlog",class:"author-link"},{default:Ot((()=>[p("img",{src:t.info.creator.avatarUrl,alt:t.info.creator.nickname,class:"author-avatar"},null,8,["src","alt"]),p("span",Ut,v(t.info.creator.nickname),1)])),_:1})]),p("div",Rt,v(t.info.description),1)])]),p("section",Wt,[Bt,p(c,{songs:t.songs,isReference:""},null,8,["songs"])]),t.hotComments.length?(h(),d("section",Nt,[Et,p(u,{comments:t.hotComments},null,8,["comments"])])):C("",!0),t.commentInfo.length?(h(),d("section",zt,[p("div",Ft,"最新评论("+v(t.dynamicInfo.commentCount)+")",1),p(u,{comments:t.commentInfo},null,8,["comments"]),s.scrollLoading?(h(),d(y,{key:0})):C("",!0)])):C("",!0)],64))])}));Lt.render=Pt,Lt.__scopeId="data-v-cf5bdd24";export default Lt;
