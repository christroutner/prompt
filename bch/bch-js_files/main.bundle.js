(()=>{var ic={8325:(w,v,a)=>{const h=Symbol("SemVer ANY");class r{static get ANY(){return h}constructor(m,d){if(d=n(d),m instanceof r){if(m.loose===!!d.loose)return m;m=m.value}s("comparator",m,d),this.options=d,this.loose=!!d.loose,this.parse(m),this.semver===h?this.value="":this.value=this.operator+this.semver.version,s("comp",this)}parse(m){const d=this.options.loose?c[f.COMPARATORLOOSE]:c[f.COMPARATOR],p=m.match(d);if(!p)throw new TypeError(`Invalid comparator: ${m}`);this.operator=p[1]!==void 0?p[1]:"",this.operator==="="&&(this.operator=""),p[2]?this.semver=new u(p[2],this.options.loose):this.semver=h}toString(){return this.value}test(m){if(s("Comparator.test",m,this.options.loose),this.semver===h||m===h)return!0;if(typeof m=="string")try{m=new u(m,this.options)}catch(d){return!1}return l(m,this.operator,this.semver,this.options)}intersects(m,d){if(!(m instanceof r))throw new TypeError("a Comparator is required");if((!d||typeof d!="object")&&(d={loose:!!d,includePrerelease:!1}),this.operator==="")return this.value===""?!0:new g(m.value,d).test(this.value);if(m.operator==="")return m.value===""?!0:new g(this.value,d).test(m.semver);const p=(this.operator===">="||this.operator===">")&&(m.operator===">="||m.operator===">"),y=(this.operator==="<="||this.operator==="<")&&(m.operator==="<="||m.operator==="<"),b=this.semver.version===m.semver.version,x=(this.operator===">="||this.operator==="<=")&&(m.operator===">="||m.operator==="<="),P=l(this.semver,"<",m.semver,d)&&(this.operator===">="||this.operator===">")&&(m.operator==="<="||m.operator==="<"),S=l(this.semver,">",m.semver,d)&&(this.operator==="<="||this.operator==="<")&&(m.operator===">="||m.operator===">");return p||y||b&&x||P||S}}w.exports=r;const n=a(349),{re:c,t:f}=a(3259),l=a(5609),s=a(4903),u=a(1630),g=a(1459)},1459:(w,v,a)=>{class h{constructor(q,_){if(_=c(_),q instanceof h)return q.loose===!!_.loose&&q.includePrerelease===!!_.includePrerelease?q:new h(q.raw,_);if(q instanceof f)return this.raw=q.value,this.set=[[q]],this.format(),this;if(this.options=_,this.loose=!!_.loose,this.includePrerelease=!!_.includePrerelease,this.raw=q,this.set=q.split(/\s*\|\|\s*/).map(W=>this.parseRange(W.trim())).filter(W=>W.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${q}`);if(this.set.length>1){const W=this.set[0];if(this.set=this.set.filter(H=>!p(H[0])),this.set.length===0)this.set=[W];else if(this.set.length>1){for(const H of this.set)if(H.length===1&&y(H[0])){this.set=[H];break}}}this.format()}format(){return this.range=this.set.map(q=>q.join(" ").trim()).join("||").trim(),this.range}toString(){return this.range}parseRange(q){q=q.trim();const W=`parseRange:${Object.keys(this.options).join(",")}:${q}`,H=n.get(W);if(H)return H;const $=this.options.loose,K=$?u[g.HYPHENRANGELOOSE]:u[g.HYPHENRANGE];q=q.replace(K,B(this.options.includePrerelease)),l("hyphen replace",q),q=q.replace(u[g.COMPARATORTRIM],i),l("comparator trim",q,u[g.COMPARATORTRIM]),q=q.replace(u[g.TILDETRIM],m),q=q.replace(u[g.CARETTRIM],d),q=q.split(/\s+/).join(" ");const te=$?u[g.COMPARATORLOOSE]:u[g.COMPARATOR],oe=q.split(" ").map(Ae=>x(Ae,this.options)).join(" ").split(/\s+/).map(Ae=>N(Ae,this.options)).filter(this.options.loose?Ae=>!!Ae.match(te):()=>!0).map(Ae=>new f(Ae,this.options)),he=oe.length,Q=new Map;for(const Ae of oe){if(p(Ae))return[Ae];Q.set(Ae.value,Ae)}Q.size>1&&Q.has("")&&Q.delete("");const ve=[...Q.values()];return n.set(W,ve),ve}intersects(q,_){if(!(q instanceof h))throw new TypeError("a Range is required");return this.set.some(W=>b(W,_)&&q.set.some(H=>b(H,_)&&W.every($=>H.every(K=>$.intersects(K,_)))))}test(q){if(!q)return!1;if(typeof q=="string")try{q=new s(q,this.options)}catch(_){return!1}for(let _=0;_<this.set.length;_++)if(O(this.set[_],q,this.options))return!0;return!1}}w.exports=h;const r=a(9593),n=new r({max:1e3}),c=a(349),f=a(8325),l=a(4903),s=a(1630),{re:u,t:g,comparatorTrimReplace:i,tildeTrimReplace:m,caretTrimReplace:d}=a(3259),p=F=>F.value==="<0.0.0-0",y=F=>F.value==="",b=(F,q)=>{let _=!0;const W=F.slice();let H=W.pop();for(;_&&W.length;)_=W.every($=>H.intersects($,q)),H=W.pop();return _},x=(F,q)=>(l("comp",F,q),F=A(F,q),l("caret",F),F=S(F,q),l("tildes",F),F=C(F,q),l("xrange",F),F=L(F,q),l("stars",F),F),P=F=>!F||F.toLowerCase()==="x"||F==="*",S=(F,q)=>F.trim().split(/\s+/).map(_=>D(_,q)).join(" "),D=(F,q)=>{const _=q.loose?u[g.TILDELOOSE]:u[g.TILDE];return F.replace(_,(W,H,$,K,te)=>{l("tilde",F,W,H,$,K,te);let oe;return P(H)?oe="":P($)?oe=`>=${H}.0.0 <${+H+1}.0.0-0`:P(K)?oe=`>=${H}.${$}.0 <${H}.${+$+1}.0-0`:te?(l("replaceTilde pr",te),oe=`>=${H}.${$}.${K}-${te} <${H}.${+$+1}.0-0`):oe=`>=${H}.${$}.${K} <${H}.${+$+1}.0-0`,l("tilde return",oe),oe})},A=(F,q)=>F.trim().split(/\s+/).map(_=>T(_,q)).join(" "),T=(F,q)=>{l("caret",F,q);const _=q.loose?u[g.CARETLOOSE]:u[g.CARET],W=q.includePrerelease?"-0":"";return F.replace(_,(H,$,K,te,oe)=>{l("caret",F,H,$,K,te,oe);let he;return P($)?he="":P(K)?he=`>=${$}.0.0${W} <${+$+1}.0.0-0`:P(te)?$==="0"?he=`>=${$}.${K}.0${W} <${$}.${+K+1}.0-0`:he=`>=${$}.${K}.0${W} <${+$+1}.0.0-0`:oe?(l("replaceCaret pr",oe),$==="0"?K==="0"?he=`>=${$}.${K}.${te}-${oe} <${$}.${K}.${+te+1}-0`:he=`>=${$}.${K}.${te}-${oe} <${$}.${+K+1}.0-0`:he=`>=${$}.${K}.${te}-${oe} <${+$+1}.0.0-0`):(l("no pr"),$==="0"?K==="0"?he=`>=${$}.${K}.${te}${W} <${$}.${K}.${+te+1}-0`:he=`>=${$}.${K}.${te}${W} <${$}.${+K+1}.0-0`:he=`>=${$}.${K}.${te} <${+$+1}.0.0-0`),l("caret return",he),he})},C=(F,q)=>(l("replaceXRanges",F,q),F.split(/\s+/).map(_=>k(_,q)).join(" ")),k=(F,q)=>{F=F.trim();const _=q.loose?u[g.XRANGELOOSE]:u[g.XRANGE];return F.replace(_,(W,H,$,K,te,oe)=>{l("xRange",F,W,H,$,K,te,oe);const he=P($),Q=he||P(K),ve=Q||P(te),Ae=ve;return H==="="&&Ae&&(H=""),oe=q.includePrerelease?"-0":"",he?H===">"||H==="<"?W="<0.0.0-0":W="*":H&&Ae?(Q&&(K=0),te=0,H===">"?(H=">=",Q?($=+$+1,K=0,te=0):(K=+K+1,te=0)):H==="<="&&(H="<",Q?$=+$+1:K=+K+1),H==="<"&&(oe="-0"),W=`${H+$}.${K}.${te}${oe}`):Q?W=`>=${$}.0.0${oe} <${+$+1}.0.0-0`:ve&&(W=`>=${$}.${K}.0${oe} <${$}.${+K+1}.0-0`),l("xRange return",W),W})},L=(F,q)=>(l("replaceStars",F,q),F.trim().replace(u[g.STAR],"")),N=(F,q)=>(l("replaceGTE0",F,q),F.trim().replace(u[q.includePrerelease?g.GTE0PRE:g.GTE0],"")),B=F=>(q,_,W,H,$,K,te,oe,he,Q,ve,Ae,Ke)=>(P(W)?_="":P(H)?_=`>=${W}.0.0${F?"-0":""}`:P($)?_=`>=${W}.${H}.0${F?"-0":""}`:K?_=`>=${_}`:_=`>=${_}${F?"-0":""}`,P(he)?oe="":P(Q)?oe=`<${+he+1}.0.0-0`:P(ve)?oe=`<${he}.${+Q+1}.0-0`:Ae?oe=`<=${he}.${Q}.${ve}-${Ae}`:F?oe=`<${he}.${Q}.${+ve+1}-0`:oe=`<=${oe}`,`${_} ${oe}`.trim()),O=(F,q,_)=>{for(let W=0;W<F.length;W++)if(!F[W].test(q))return!1;if(q.prerelease.length&&!_.includePrerelease){for(let W=0;W<F.length;W++)if(l(F[W].semver),F[W].semver!==f.ANY&&F[W].semver.prerelease.length>0){const H=F[W].semver;if(H.major===q.major&&H.minor===q.minor&&H.patch===q.patch)return!0}return!1}return!0}},1630:(w,v,a)=>{const h=a(4903),{MAX_LENGTH:r,MAX_SAFE_INTEGER:n}=a(3325),{re:c,t:f}=a(3259),l=a(349),{compareIdentifiers:s}=a(7342);class u{constructor(i,m){if(m=l(m),i instanceof u){if(i.loose===!!m.loose&&i.includePrerelease===!!m.includePrerelease)return i;i=i.version}else if(typeof i!="string")throw new TypeError(`Invalid Version: ${i}`);if(i.length>r)throw new TypeError(`version is longer than ${r} characters`);h("SemVer",i,m),this.options=m,this.loose=!!m.loose,this.includePrerelease=!!m.includePrerelease;const d=i.trim().match(m.loose?c[f.LOOSE]:c[f.FULL]);if(!d)throw new TypeError(`Invalid Version: ${i}`);if(this.raw=i,this.major=+d[1],this.minor=+d[2],this.patch=+d[3],this.major>n||this.major<0)throw new TypeError("Invalid major version");if(this.minor>n||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>n||this.patch<0)throw new TypeError("Invalid patch version");d[4]?this.prerelease=d[4].split(".").map(p=>{if(/^[0-9]+$/.test(p)){const y=+p;if(y>=0&&y<n)return y}return p}):this.prerelease=[],this.build=d[5]?d[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(i){if(h("SemVer.compare",this.version,this.options,i),!(i instanceof u)){if(typeof i=="string"&&i===this.version)return 0;i=new u(i,this.options)}return i.version===this.version?0:this.compareMain(i)||this.comparePre(i)}compareMain(i){return i instanceof u||(i=new u(i,this.options)),s(this.major,i.major)||s(this.minor,i.minor)||s(this.patch,i.patch)}comparePre(i){if(i instanceof u||(i=new u(i,this.options)),this.prerelease.length&&!i.prerelease.length)return-1;if(!this.prerelease.length&&i.prerelease.length)return 1;if(!this.prerelease.length&&!i.prerelease.length)return 0;let m=0;do{const d=this.prerelease[m],p=i.prerelease[m];if(h("prerelease compare",m,d,p),d===void 0&&p===void 0)return 0;if(p===void 0)return 1;if(d===void 0)return-1;if(d===p)continue;return s(d,p)}while(++m)}compareBuild(i){i instanceof u||(i=new u(i,this.options));let m=0;do{const d=this.build[m],p=i.build[m];if(h("prerelease compare",m,d,p),d===void 0&&p===void 0)return 0;if(p===void 0)return 1;if(d===void 0)return-1;if(d===p)continue;return s(d,p)}while(++m)}inc(i,m){switch(i){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",m);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",m);break;case"prepatch":this.prerelease.length=0,this.inc("patch",m),this.inc("pre",m);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",m),this.inc("pre",m);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":if(this.prerelease.length===0)this.prerelease=[0];else{let d=this.prerelease.length;for(;--d>=0;)typeof this.prerelease[d]=="number"&&(this.prerelease[d]++,d=-2);d===-1&&this.prerelease.push(0)}m&&(this.prerelease[0]===m?isNaN(this.prerelease[1])&&(this.prerelease=[m,0]):this.prerelease=[m,0]);break;default:throw new Error(`invalid increment argument: ${i}`)}return this.format(),this.raw=this.version,this}}w.exports=u},7200:(w,v,a)=>{const h=a(8216),r=(n,c)=>{const f=h(n.trim().replace(/^[=v]+/,""),c);return f?f.version:null};w.exports=r},5609:(w,v,a)=>{const h=a(4594),r=a(3228),n=a(145),c=a(9778),f=a(5429),l=a(7888),s=(u,g,i,m)=>{switch(g){case"===":return typeof u=="object"&&(u=u.version),typeof i=="object"&&(i=i.version),u===i;case"!==":return typeof u=="object"&&(u=u.version),typeof i=="object"&&(i=i.version),u!==i;case"":case"=":case"==":return h(u,i,m);case"!=":return r(u,i,m);case">":return n(u,i,m);case">=":return c(u,i,m);case"<":return f(u,i,m);case"<=":return l(u,i,m);default:throw new TypeError(`Invalid operator: ${g}`)}};w.exports=s},9485:(w,v,a)=>{const h=a(1630),r=a(8216),{re:n,t:c}=a(3259),f=(l,s)=>{if(l instanceof h)return l;if(typeof l=="number"&&(l=String(l)),typeof l!="string")return null;s=s||{};let u=null;if(!s.rtl)u=l.match(n[c.COERCE]);else{let g;for(;(g=n[c.COERCERTL].exec(l))&&(!u||u.index+u[0].length!==l.length);)(!u||g.index+g[0].length!==u.index+u[0].length)&&(u=g),n[c.COERCERTL].lastIndex=g.index+g[1].length+g[2].length;n[c.COERCERTL].lastIndex=-1}return u===null?null:r(`${u[2]}.${u[3]||"0"}.${u[4]||"0"}`,s)};w.exports=f},7548:(w,v,a)=>{const h=a(1630),r=(n,c,f)=>{const l=new h(n,f),s=new h(c,f);return l.compare(s)||l.compareBuild(s)};w.exports=r},7317:(w,v,a)=>{const h=a(9123),r=(n,c)=>h(n,c,!0);w.exports=r},9123:(w,v,a)=>{const h=a(1630),r=(n,c,f)=>new h(n,f).compare(new h(c,f));w.exports=r},3444:(w,v,a)=>{const h=a(8216),r=a(4594),n=(c,f)=>{if(r(c,f))return null;{const l=h(c),s=h(f),u=l.prerelease.length||s.prerelease.length,g=u?"pre":"",i=u?"prerelease":"";for(const m in l)if((m==="major"||m==="minor"||m==="patch")&&l[m]!==s[m])return g+m;return i}};w.exports=n},4594:(w,v,a)=>{const h=a(9123),r=(n,c,f)=>h(n,c,f)===0;w.exports=r},145:(w,v,a)=>{const h=a(9123),r=(n,c,f)=>h(n,c,f)>0;w.exports=r},9778:(w,v,a)=>{const h=a(9123),r=(n,c,f)=>h(n,c,f)>=0;w.exports=r},288:(w,v,a)=>{const h=a(1630),r=(n,c,f,l)=>{typeof f=="string"&&(l=f,f=void 0);try{return new h(n,f).inc(c,l).version}catch(s){return null}};w.exports=r},5429:(w,v,a)=>{const h=a(9123),r=(n,c,f)=>h(n,c,f)<0;w.exports=r},7888:(w,v,a)=>{const h=a(9123),r=(n,c,f)=>h(n,c,f)<=0;w.exports=r},5254:(w,v,a)=>{const h=a(1630),r=(n,c)=>new h(n,c).major;w.exports=r},9887:(w,v,a)=>{const h=a(1630),r=(n,c)=>new h(n,c).minor;w.exports=r},3228:(w,v,a)=>{const h=a(9123),r=(n,c,f)=>h(n,c,f)!==0;w.exports=r},8216:(w,v,a)=>{const{MAX_LENGTH:h}=a(3325),{re:r,t:n}=a(3259),c=a(1630),f=a(349),l=(s,u)=>{if(u=f(u),s instanceof c)return s;if(typeof s!="string"||s.length>h||!(u.loose?r[n.LOOSE]:r[n.FULL]).test(s))return null;try{return new c(s,u)}catch(i){return null}};w.exports=l},8571:(w,v,a)=>{const h=a(1630),r=(n,c)=>new h(n,c).patch;w.exports=r},2115:(w,v,a)=>{const h=a(8216),r=(n,c)=>{const f=h(n,c);return f&&f.prerelease.length?f.prerelease:null};w.exports=r},6822:(w,v,a)=>{const h=a(9123),r=(n,c,f)=>h(c,n,f);w.exports=r},2490:(w,v,a)=>{const h=a(7548),r=(n,c)=>n.sort((f,l)=>h(l,f,c));w.exports=r},5374:(w,v,a)=>{const h=a(1459),r=(n,c,f)=>{try{c=new h(c,f)}catch(l){return!1}return c.test(n)};w.exports=r},6401:(w,v,a)=>{const h=a(7548),r=(n,c)=>n.sort((f,l)=>h(f,l,c));w.exports=r},5665:(w,v,a)=>{const h=a(8216),r=(n,c)=>{const f=h(n,c);return f?f.version:null};w.exports=r},7154:(w,v,a)=>{const h=a(3259);w.exports={re:h.re,src:h.src,tokens:h.t,SEMVER_SPEC_VERSION:a(3325).SEMVER_SPEC_VERSION,SemVer:a(1630),compareIdentifiers:a(7342).compareIdentifiers,rcompareIdentifiers:a(7342).rcompareIdentifiers,parse:a(8216),valid:a(5665),clean:a(7200),inc:a(288),diff:a(3444),major:a(5254),minor:a(9887),patch:a(8571),prerelease:a(2115),compare:a(9123),rcompare:a(6822),compareLoose:a(7317),compareBuild:a(7548),sort:a(6401),rsort:a(2490),gt:a(145),lt:a(5429),eq:a(4594),neq:a(3228),gte:a(9778),lte:a(7888),cmp:a(5609),coerce:a(9485),Comparator:a(8325),Range:a(1459),satisfies:a(5374),toComparators:a(6607),maxSatisfying:a(7530),minSatisfying:a(7527),minVersion:a(1346),validRange:a(3478),outside:a(841),gtr:a(8951),ltr:a(4666),intersects:a(6024),simplifyRange:a(2277),subset:a(8784)}},3325:w=>{const v="2.0.0",h=Number.MAX_SAFE_INTEGER||9007199254740991,r=16;w.exports={SEMVER_SPEC_VERSION:v,MAX_LENGTH:256,MAX_SAFE_INTEGER:h,MAX_SAFE_COMPONENT_LENGTH:r}},4903:w=>{const v=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...a)=>console.error("SEMVER",...a):()=>{};w.exports=v},7342:w=>{const v=/^[0-9]+$/,a=(r,n)=>{const c=v.test(r),f=v.test(n);return c&&f&&(r=+r,n=+n),r===n?0:c&&!f?-1:f&&!c?1:r<n?-1:1},h=(r,n)=>a(n,r);w.exports={compareIdentifiers:a,rcompareIdentifiers:h}},349:w=>{const v=["includePrerelease","loose","rtl"],a=h=>h?typeof h!="object"?{loose:!0}:v.filter(r=>h[r]).reduce((r,n)=>(r[n]=!0,r),{}):{};w.exports=a},3259:(w,v,a)=>{const{MAX_SAFE_COMPONENT_LENGTH:h}=a(3325),r=a(4903);v=w.exports={};const n=v.re=[],c=v.src=[],f=v.t={};let l=0;const s=(u,g,i)=>{const m=l++;r(m,g),f[u]=m,c[m]=g,n[m]=new RegExp(g,i?"g":void 0)};s("NUMERICIDENTIFIER","0|[1-9]\\d*"),s("NUMERICIDENTIFIERLOOSE","[0-9]+"),s("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),s("MAINVERSION",`(${c[f.NUMERICIDENTIFIER]})\\.(${c[f.NUMERICIDENTIFIER]})\\.(${c[f.NUMERICIDENTIFIER]})`),s("MAINVERSIONLOOSE",`(${c[f.NUMERICIDENTIFIERLOOSE]})\\.(${c[f.NUMERICIDENTIFIERLOOSE]})\\.(${c[f.NUMERICIDENTIFIERLOOSE]})`),s("PRERELEASEIDENTIFIER",`(?:${c[f.NUMERICIDENTIFIER]}|${c[f.NONNUMERICIDENTIFIER]})`),s("PRERELEASEIDENTIFIERLOOSE",`(?:${c[f.NUMERICIDENTIFIERLOOSE]}|${c[f.NONNUMERICIDENTIFIER]})`),s("PRERELEASE",`(?:-(${c[f.PRERELEASEIDENTIFIER]}(?:\\.${c[f.PRERELEASEIDENTIFIER]})*))`),s("PRERELEASELOOSE",`(?:-?(${c[f.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[f.PRERELEASEIDENTIFIERLOOSE]})*))`),s("BUILDIDENTIFIER","[0-9A-Za-z-]+"),s("BUILD",`(?:\\+(${c[f.BUILDIDENTIFIER]}(?:\\.${c[f.BUILDIDENTIFIER]})*))`),s("FULLPLAIN",`v?${c[f.MAINVERSION]}${c[f.PRERELEASE]}?${c[f.BUILD]}?`),s("FULL",`^${c[f.FULLPLAIN]}$`),s("LOOSEPLAIN",`[v=\\s]*${c[f.MAINVERSIONLOOSE]}${c[f.PRERELEASELOOSE]}?${c[f.BUILD]}?`),s("LOOSE",`^${c[f.LOOSEPLAIN]}$`),s("GTLT","((?:<|>)?=?)"),s("XRANGEIDENTIFIERLOOSE",`${c[f.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),s("XRANGEIDENTIFIER",`${c[f.NUMERICIDENTIFIER]}|x|X|\\*`),s("XRANGEPLAIN",`[v=\\s]*(${c[f.XRANGEIDENTIFIER]})(?:\\.(${c[f.XRANGEIDENTIFIER]})(?:\\.(${c[f.XRANGEIDENTIFIER]})(?:${c[f.PRERELEASE]})?${c[f.BUILD]}?)?)?`),s("XRANGEPLAINLOOSE",`[v=\\s]*(${c[f.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[f.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[f.XRANGEIDENTIFIERLOOSE]})(?:${c[f.PRERELEASELOOSE]})?${c[f.BUILD]}?)?)?`),s("XRANGE",`^${c[f.GTLT]}\\s*${c[f.XRANGEPLAIN]}$`),s("XRANGELOOSE",`^${c[f.GTLT]}\\s*${c[f.XRANGEPLAINLOOSE]}$`),s("COERCE",`(^|[^\\d])(\\d{1,${h}})(?:\\.(\\d{1,${h}}))?(?:\\.(\\d{1,${h}}))?(?:$|[^\\d])`),s("COERCERTL",c[f.COERCE],!0),s("LONETILDE","(?:~>?)"),s("TILDETRIM",`(\\s*)${c[f.LONETILDE]}\\s+`,!0),v.tildeTrimReplace="$1~",s("TILDE",`^${c[f.LONETILDE]}${c[f.XRANGEPLAIN]}$`),s("TILDELOOSE",`^${c[f.LONETILDE]}${c[f.XRANGEPLAINLOOSE]}$`),s("LONECARET","(?:\\^)"),s("CARETTRIM",`(\\s*)${c[f.LONECARET]}\\s+`,!0),v.caretTrimReplace="$1^",s("CARET",`^${c[f.LONECARET]}${c[f.XRANGEPLAIN]}$`),s("CARETLOOSE",`^${c[f.LONECARET]}${c[f.XRANGEPLAINLOOSE]}$`),s("COMPARATORLOOSE",`^${c[f.GTLT]}\\s*(${c[f.LOOSEPLAIN]})$|^$`),s("COMPARATOR",`^${c[f.GTLT]}\\s*(${c[f.FULLPLAIN]})$|^$`),s("COMPARATORTRIM",`(\\s*)${c[f.GTLT]}\\s*(${c[f.LOOSEPLAIN]}|${c[f.XRANGEPLAIN]})`,!0),v.comparatorTrimReplace="$1$2$3",s("HYPHENRANGE",`^\\s*(${c[f.XRANGEPLAIN]})\\s+-\\s+(${c[f.XRANGEPLAIN]})\\s*$`),s("HYPHENRANGELOOSE",`^\\s*(${c[f.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[f.XRANGEPLAINLOOSE]})\\s*$`),s("STAR","(<|>)?=?\\s*\\*"),s("GTE0","^\\s*>=\\s*0.0.0\\s*$"),s("GTE0PRE","^\\s*>=\\s*0.0.0-0\\s*$")},8951:(w,v,a)=>{const h=a(841),r=(n,c,f)=>h(n,c,">",f);w.exports=r},6024:(w,v,a)=>{const h=a(1459),r=(n,c,f)=>(n=new h(n,f),c=new h(c,f),n.intersects(c));w.exports=r},4666:(w,v,a)=>{const h=a(841),r=(n,c,f)=>h(n,c,"<",f);w.exports=r},7530:(w,v,a)=>{const h=a(1630),r=a(1459),n=(c,f,l)=>{let s=null,u=null,g=null;try{g=new r(f,l)}catch(i){return null}return c.forEach(i=>{g.test(i)&&(!s||u.compare(i)===-1)&&(s=i,u=new h(s,l))}),s};w.exports=n},7527:(w,v,a)=>{const h=a(1630),r=a(1459),n=(c,f,l)=>{let s=null,u=null,g=null;try{g=new r(f,l)}catch(i){return null}return c.forEach(i=>{g.test(i)&&(!s||u.compare(i)===1)&&(s=i,u=new h(s,l))}),s};w.exports=n},1346:(w,v,a)=>{const h=a(1630),r=a(1459),n=a(145),c=(f,l)=>{f=new r(f,l);let s=new h("0.0.0");if(f.test(s)||(s=new h("0.0.0-0"),f.test(s)))return s;s=null;for(let u=0;u<f.set.length;++u){const g=f.set[u];let i=null;g.forEach(m=>{const d=new h(m.semver.version);switch(m.operator){case">":d.prerelease.length===0?d.patch++:d.prerelease.push(0),d.raw=d.format();case"":case">=":(!i||n(d,i))&&(i=d);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${m.operator}`)}}),i&&(!s||n(s,i))&&(s=i)}return s&&f.test(s)?s:null};w.exports=c},841:(w,v,a)=>{const h=a(1630),r=a(8325),{ANY:n}=r,c=a(1459),f=a(5374),l=a(145),s=a(5429),u=a(7888),g=a(9778),i=(m,d,p,y)=>{m=new h(m,y),d=new c(d,y);let b,x,P,S,D;switch(p){case">":b=l,x=u,P=s,S=">",D=">=";break;case"<":b=s,x=g,P=l,S="<",D="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(f(m,d,y))return!1;for(let A=0;A<d.set.length;++A){const T=d.set[A];let C=null,k=null;if(T.forEach(L=>{L.semver===n&&(L=new r(">=0.0.0")),C=C||L,k=k||L,b(L.semver,C.semver,y)?C=L:P(L.semver,k.semver,y)&&(k=L)}),C.operator===S||C.operator===D||(!k.operator||k.operator===S)&&x(m,k.semver))return!1;if(k.operator===D&&P(m,k.semver))return!1}return!0};w.exports=i},2277:(w,v,a)=>{const h=a(5374),r=a(9123);w.exports=(n,c,f)=>{const l=[];let s=null,u=null;const g=n.sort((p,y)=>r(p,y,f));for(const p of g)h(p,c,f)?(u=p,s||(s=p)):(u&&l.push([s,u]),u=null,s=null);s&&l.push([s,null]);const i=[];for(const[p,y]of l)p===y?i.push(p):!y&&p===g[0]?i.push("*"):y?p===g[0]?i.push(`<=${y}`):i.push(`${p} - ${y}`):i.push(`>=${p}`);const m=i.join(" || "),d=typeof c.raw=="string"?c.raw:String(c);return m.length<d.length?m:c}},8784:(w,v,a)=>{const h=a(1459),r=a(8325),{ANY:n}=r,c=a(5374),f=a(9123),l=(i,m,d={})=>{if(i===m)return!0;i=new h(i,d),m=new h(m,d);let p=!1;e:for(const y of i.set){for(const b of m.set){const x=s(y,b,d);if(p=p||x!==null,x)continue e}if(p)return!1}return!0},s=(i,m,d)=>{if(i===m)return!0;if(i.length===1&&i[0].semver===n){if(m.length===1&&m[0].semver===n)return!0;d.includePrerelease?i=[new r(">=0.0.0-0")]:i=[new r(">=0.0.0")]}if(m.length===1&&m[0].semver===n){if(d.includePrerelease)return!0;m=[new r(">=0.0.0")]}const p=new Set;let y,b;for(const k of i)k.operator===">"||k.operator===">="?y=u(y,k,d):k.operator==="<"||k.operator==="<="?b=g(b,k,d):p.add(k.semver);if(p.size>1)return null;let x;if(y&&b){if(x=f(y.semver,b.semver,d),x>0)return null;if(x===0&&(y.operator!==">="||b.operator!=="<="))return null}for(const k of p){if(y&&!c(k,String(y),d)||b&&!c(k,String(b),d))return null;for(const L of m)if(!c(k,String(L),d))return!1;return!0}let P,S,D,A,T=b&&!d.includePrerelease&&b.semver.prerelease.length?b.semver:!1,C=y&&!d.includePrerelease&&y.semver.prerelease.length?y.semver:!1;T&&T.prerelease.length===1&&b.operator==="<"&&T.prerelease[0]===0&&(T=!1);for(const k of m){if(A=A||k.operator===">"||k.operator===">=",D=D||k.operator==="<"||k.operator==="<=",y){if(C&&k.semver.prerelease&&k.semver.prerelease.length&&k.semver.major===C.major&&k.semver.minor===C.minor&&k.semver.patch===C.patch&&(C=!1),k.operator===">"||k.operator===">="){if(P=u(y,k,d),P===k&&P!==y)return!1}else if(y.operator===">="&&!c(y.semver,String(k),d))return!1}if(b){if(T&&k.semver.prerelease&&k.semver.prerelease.length&&k.semver.major===T.major&&k.semver.minor===T.minor&&k.semver.patch===T.patch&&(T=!1),k.operator==="<"||k.operator==="<="){if(S=g(b,k,d),S===k&&S!==b)return!1}else if(b.operator==="<="&&!c(b.semver,String(k),d))return!1}if(!k.operator&&(b||y)&&x!==0)return!1}return!(y&&D&&!b&&x!==0||b&&A&&!y&&x!==0||C||T)},u=(i,m,d)=>{if(!i)return m;const p=f(i.semver,m.semver,d);return p>0?i:p<0||m.operator===">"&&i.operator===">="?m:i},g=(i,m,d)=>{if(!i)return m;const p=f(i.semver,m.semver,d);return p<0?i:p>0||m.operator==="<"&&i.operator==="<="?m:i};w.exports=l},6607:(w,v,a)=>{const h=a(1459),r=(n,c)=>new h(n,c).set.map(f=>f.map(l=>l.value).join(" ").trim().split(" "));w.exports=r},3478:(w,v,a)=>{const h=a(1459),r=(n,c)=>{try{return new h(n,c).range||"*"}catch(f){return null}};w.exports=r},9737:()=>{+function(w){"use strict";var v=".dropdown-backdrop",a='[data-toggle="dropdown"]',h=function(l){w(l).on("click.bs.dropdown",this.toggle)};h.VERSION="3.4.1";function r(l){var s=l.attr("data-target");s||(s=l.attr("href"),s=s&&/#[A-Za-z]/.test(s)&&s.replace(/.*(?=#[^\s]*$)/,""));var u=s!=="#"?w(document).find(s):null;return u&&u.length?u:l.parent()}function n(l){l&&l.which===3||(w(v).remove(),w(a).each(function(){var s=w(this),u=r(s),g={relatedTarget:this};!u.hasClass("open")||l&&l.type=="click"&&/input|textarea/i.test(l.target.tagName)&&w.contains(u[0],l.target)||(u.trigger(l=w.Event("hide.bs.dropdown",g)),!l.isDefaultPrevented()&&(s.attr("aria-expanded","false"),u.removeClass("open").trigger(w.Event("hidden.bs.dropdown",g))))}))}h.prototype.toggle=function(l){var s=w(this);if(!s.is(".disabled, :disabled")){var u=r(s),g=u.hasClass("open");if(n(),!g){"ontouchstart"in document.documentElement&&!u.closest(".navbar-nav").length&&w(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(w(this)).on("click",n);var i={relatedTarget:this};if(u.trigger(l=w.Event("show.bs.dropdown",i)),l.isDefaultPrevented())return;s.trigger("focus").attr("aria-expanded","true"),u.toggleClass("open").trigger(w.Event("shown.bs.dropdown",i))}return!1}},h.prototype.keydown=function(l){if(!(!/(38|40|27|32)/.test(l.which)||/input|textarea/i.test(l.target.tagName))){var s=w(this);if(l.preventDefault(),l.stopPropagation(),!s.is(".disabled, :disabled")){var u=r(s),g=u.hasClass("open");if(!g&&l.which!=27||g&&l.which==27)return l.which==27&&u.find(a).trigger("focus"),s.trigger("click");var i=" li:not(.disabled):visible a",m=u.find(".dropdown-menu"+i);if(!!m.length){var d=m.index(l.target);l.which==38&&d>0&&d--,l.which==40&&d<m.length-1&&d++,~d||(d=0),m.eq(d).trigger("focus")}}}};function c(l){return this.each(function(){var s=w(this),u=s.data("bs.dropdown");u||s.data("bs.dropdown",u=new h(this)),typeof l=="string"&&u[l].call(s)})}var f=w.fn.dropdown;w.fn.dropdown=c,w.fn.dropdown.Constructor=h,w.fn.dropdown.noConflict=function(){return w.fn.dropdown=f,this},w(document).on("click.bs.dropdown.data-api",n).on("click.bs.dropdown.data-api",".dropdown form",function(l){l.stopPropagation()}).on("click.bs.dropdown.data-api",a,h.prototype.toggle).on("keydown.bs.dropdown.data-api",a,h.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",h.prototype.keydown)}(jQuery)},6927:()=>{+function(w){"use strict";var v=function(r,n){this.init("popover",r,n)};if(!w.fn.tooltip)throw new Error("Popover requires tooltip.js");v.VERSION="3.4.1",v.DEFAULTS=w.extend({},w.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),v.prototype=w.extend({},w.fn.tooltip.Constructor.prototype),v.prototype.constructor=v,v.prototype.getDefaults=function(){return v.DEFAULTS},v.prototype.setContent=function(){var r=this.tip(),n=this.getTitle(),c=this.getContent();if(this.options.html){var f=typeof c;this.options.sanitize&&(n=this.sanitizeHtml(n),f==="string"&&(c=this.sanitizeHtml(c))),r.find(".popover-title").html(n),r.find(".popover-content").children().detach().end()[f==="string"?"html":"append"](c)}else r.find(".popover-title").text(n),r.find(".popover-content").children().detach().end().text(c);r.removeClass("fade top bottom left right in"),r.find(".popover-title").html()||r.find(".popover-title").hide()},v.prototype.hasContent=function(){return this.getTitle()||this.getContent()},v.prototype.getContent=function(){var r=this.$element,n=this.options;return r.attr("data-content")||(typeof n.content=="function"?n.content.call(r[0]):n.content)},v.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};function a(r){return this.each(function(){var n=w(this),c=n.data("bs.popover"),f=typeof r=="object"&&r;!c&&/destroy|hide/.test(r)||(c||n.data("bs.popover",c=new v(this,f)),typeof r=="string"&&c[r]())})}var h=w.fn.popover;w.fn.popover=a,w.fn.popover.Constructor=v,w.fn.popover.noConflict=function(){return w.fn.popover=h,this}}(jQuery)},3497:()=>{+function(w){"use strict";function v(r,n){this.$body=w(document.body),this.$scrollElement=w(r).is(document.body)?w(window):w(r),this.options=w.extend({},v.DEFAULTS,n),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",w.proxy(this.process,this)),this.refresh(),this.process()}v.VERSION="3.4.1",v.DEFAULTS={offset:10},v.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},v.prototype.refresh=function(){var r=this,n="offset",c=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),w.isWindow(this.$scrollElement[0])||(n="position",c=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var f=w(this),l=f.data("target")||f.attr("href"),s=/^#./.test(l)&&w(l);return s&&s.length&&s.is(":visible")&&[[s[n]().top+c,l]]||null}).sort(function(f,l){return f[0]-l[0]}).each(function(){r.offsets.push(this[0]),r.targets.push(this[1])})},v.prototype.process=function(){var r=this.$scrollElement.scrollTop()+this.options.offset,n=this.getScrollHeight(),c=this.options.offset+n-this.$scrollElement.height(),f=this.offsets,l=this.targets,s=this.activeTarget,u;if(this.scrollHeight!=n&&this.refresh(),r>=c)return s!=(u=l[l.length-1])&&this.activate(u);if(s&&r<f[0])return this.activeTarget=null,this.clear();for(u=f.length;u--;)s!=l[u]&&r>=f[u]&&(f[u+1]===void 0||r<f[u+1])&&this.activate(l[u])},v.prototype.activate=function(r){this.activeTarget=r,this.clear();var n=this.selector+'[data-target="'+r+'"],'+this.selector+'[href="'+r+'"]',c=w(n).parents("li").addClass("active");c.parent(".dropdown-menu").length&&(c=c.closest("li.dropdown").addClass("active")),c.trigger("activate.bs.scrollspy")},v.prototype.clear=function(){w(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};function a(r){return this.each(function(){var n=w(this),c=n.data("bs.scrollspy"),f=typeof r=="object"&&r;c||n.data("bs.scrollspy",c=new v(this,f)),typeof r=="string"&&c[r]()})}var h=w.fn.scrollspy;w.fn.scrollspy=a,w.fn.scrollspy.Constructor=v,w.fn.scrollspy.noConflict=function(){return w.fn.scrollspy=h,this},w(window).on("load.bs.scrollspy.data-api",function(){w('[data-spy="scroll"]').each(function(){var r=w(this);a.call(r,r.data())})})}(jQuery)},7814:()=>{+function(w){"use strict";var v=function(n){this.element=w(n)};v.VERSION="3.4.1",v.TRANSITION_DURATION=150,v.prototype.show=function(){var n=this.element,c=n.closest("ul:not(.dropdown-menu)"),f=n.data("target");if(f||(f=n.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,"")),!n.parent("li").hasClass("active")){var l=c.find(".active:last a"),s=w.Event("hide.bs.tab",{relatedTarget:n[0]}),u=w.Event("show.bs.tab",{relatedTarget:l[0]});if(l.trigger(s),n.trigger(u),!(u.isDefaultPrevented()||s.isDefaultPrevented())){var g=w(document).find(f);this.activate(n.closest("li"),c),this.activate(g,g.parent(),function(){l.trigger({type:"hidden.bs.tab",relatedTarget:n[0]}),n.trigger({type:"shown.bs.tab",relatedTarget:l[0]})})}}},v.prototype.activate=function(n,c,f){var l=c.find("> .active"),s=f&&w.support.transition&&(l.length&&l.hasClass("fade")||!!c.find("> .fade").length);function u(){l.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),n.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),s?(n[0].offsetWidth,n.addClass("in")):n.removeClass("fade"),n.parent(".dropdown-menu").length&&n.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),f&&f()}l.length&&s?l.one("bsTransitionEnd",u).emulateTransitionEnd(v.TRANSITION_DURATION):u(),l.removeClass("in")};function a(n){return this.each(function(){var c=w(this),f=c.data("bs.tab");f||c.data("bs.tab",f=new v(this)),typeof n=="string"&&f[n]()})}var h=w.fn.tab;w.fn.tab=a,w.fn.tab.Constructor=v,w.fn.tab.noConflict=function(){return w.fn.tab=h,this};var r=function(n){n.preventDefault(),a.call(w(this),"show")};w(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',r).on("click.bs.tab.data-api",'[data-toggle="pill"]',r)}(jQuery)},6278:()=>{+function(w){"use strict";var v=["sanitize","whiteList","sanitizeFn"],a=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],h=/^aria-[\w-]*$/i,r={"*":["class","dir","id","lang","role",h],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},n=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,c=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function f(i,m){var d=i.nodeName.toLowerCase();if(w.inArray(d,m)!==-1)return w.inArray(d,a)!==-1?Boolean(i.nodeValue.match(n)||i.nodeValue.match(c)):!0;for(var p=w(m).filter(function(x,P){return P instanceof RegExp}),y=0,b=p.length;y<b;y++)if(d.match(p[y]))return!0;return!1}function l(i,m,d){if(i.length===0)return i;if(d&&typeof d=="function")return d(i);if(!document.implementation||!document.implementation.createHTMLDocument)return i;var p=document.implementation.createHTMLDocument("sanitization");p.body.innerHTML=i;for(var y=w.map(m,function(L,N){return N}),b=w(p.body).find("*"),x=0,P=b.length;x<P;x++){var S=b[x],D=S.nodeName.toLowerCase();if(w.inArray(D,y)===-1){S.parentNode.removeChild(S);continue}for(var A=w.map(S.attributes,function(L){return L}),T=[].concat(m["*"]||[],m[D]||[]),C=0,k=A.length;C<k;C++)f(A[C],T)||S.removeAttribute(A[C].nodeName)}return p.body.innerHTML}var s=function(i,m){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",i,m)};s.VERSION="3.4.1",s.TRANSITION_DURATION=150,s.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:r},s.prototype.init=function(i,m,d){if(this.enabled=!0,this.type=i,this.$element=w(m),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&w(document).find(w.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var p=this.options.trigger.split(" "),y=p.length;y--;){var b=p[y];if(b=="click")this.$element.on("click."+this.type,this.options.selector,w.proxy(this.toggle,this));else if(b!="manual"){var x=b=="hover"?"mouseenter":"focusin",P=b=="hover"?"mouseleave":"focusout";this.$element.on(x+"."+this.type,this.options.selector,w.proxy(this.enter,this)),this.$element.on(P+"."+this.type,this.options.selector,w.proxy(this.leave,this))}}this.options.selector?this._options=w.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},s.prototype.getDefaults=function(){return s.DEFAULTS},s.prototype.getOptions=function(i){var m=this.$element.data();for(var d in m)m.hasOwnProperty(d)&&w.inArray(d,v)!==-1&&delete m[d];return i=w.extend({},this.getDefaults(),m,i),i.delay&&typeof i.delay=="number"&&(i.delay={show:i.delay,hide:i.delay}),i.sanitize&&(i.template=l(i.template,i.whiteList,i.sanitizeFn)),i},s.prototype.getDelegateOptions=function(){var i={},m=this.getDefaults();return this._options&&w.each(this._options,function(d,p){m[d]!=p&&(i[d]=p)}),i},s.prototype.enter=function(i){var m=i instanceof this.constructor?i:w(i.currentTarget).data("bs."+this.type);if(m||(m=new this.constructor(i.currentTarget,this.getDelegateOptions()),w(i.currentTarget).data("bs."+this.type,m)),i instanceof w.Event&&(m.inState[i.type=="focusin"?"focus":"hover"]=!0),m.tip().hasClass("in")||m.hoverState=="in"){m.hoverState="in";return}if(clearTimeout(m.timeout),m.hoverState="in",!m.options.delay||!m.options.delay.show)return m.show();m.timeout=setTimeout(function(){m.hoverState=="in"&&m.show()},m.options.delay.show)},s.prototype.isInStateTrue=function(){for(var i in this.inState)if(this.inState[i])return!0;return!1},s.prototype.leave=function(i){var m=i instanceof this.constructor?i:w(i.currentTarget).data("bs."+this.type);if(m||(m=new this.constructor(i.currentTarget,this.getDelegateOptions()),w(i.currentTarget).data("bs."+this.type,m)),i instanceof w.Event&&(m.inState[i.type=="focusout"?"focus":"hover"]=!1),!m.isInStateTrue()){if(clearTimeout(m.timeout),m.hoverState="out",!m.options.delay||!m.options.delay.hide)return m.hide();m.timeout=setTimeout(function(){m.hoverState=="out"&&m.hide()},m.options.delay.hide)}},s.prototype.show=function(){var i=w.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(i);var m=w.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(i.isDefaultPrevented()||!m)return;var d=this,p=this.tip(),y=this.getUID(this.type);this.setContent(),p.attr("id",y),this.$element.attr("aria-describedby",y),this.options.animation&&p.addClass("fade");var b=typeof this.options.placement=="function"?this.options.placement.call(this,p[0],this.$element[0]):this.options.placement,x=/\s?auto?\s?/i,P=x.test(b);P&&(b=b.replace(x,"")||"top"),p.detach().css({top:0,left:0,display:"block"}).addClass(b).data("bs."+this.type,this),this.options.container?p.appendTo(w(document).find(this.options.container)):p.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var S=this.getPosition(),D=p[0].offsetWidth,A=p[0].offsetHeight;if(P){var T=b,C=this.getPosition(this.$viewport);b=b=="bottom"&&S.bottom+A>C.bottom?"top":b=="top"&&S.top-A<C.top?"bottom":b=="right"&&S.right+D>C.width?"left":b=="left"&&S.left-D<C.left?"right":b,p.removeClass(T).addClass(b)}var k=this.getCalculatedOffset(b,S,D,A);this.applyPlacement(k,b);var L=function(){var N=d.hoverState;d.$element.trigger("shown.bs."+d.type),d.hoverState=null,N=="out"&&d.leave(d)};w.support.transition&&this.$tip.hasClass("fade")?p.one("bsTransitionEnd",L).emulateTransitionEnd(s.TRANSITION_DURATION):L()}},s.prototype.applyPlacement=function(i,m){var d=this.tip(),p=d[0].offsetWidth,y=d[0].offsetHeight,b=parseInt(d.css("margin-top"),10),x=parseInt(d.css("margin-left"),10);isNaN(b)&&(b=0),isNaN(x)&&(x=0),i.top+=b,i.left+=x,w.offset.setOffset(d[0],w.extend({using:function(k){d.css({top:Math.round(k.top),left:Math.round(k.left)})}},i),0),d.addClass("in");var P=d[0].offsetWidth,S=d[0].offsetHeight;m=="top"&&S!=y&&(i.top=i.top+y-S);var D=this.getViewportAdjustedDelta(m,i,P,S);D.left?i.left+=D.left:i.top+=D.top;var A=/top|bottom/.test(m),T=A?D.left*2-p+P:D.top*2-y+S,C=A?"offsetWidth":"offsetHeight";d.offset(i),this.replaceArrow(T,d[0][C],A)},s.prototype.replaceArrow=function(i,m,d){this.arrow().css(d?"left":"top",50*(1-i/m)+"%").css(d?"top":"left","")},s.prototype.setContent=function(){var i=this.tip(),m=this.getTitle();this.options.html?(this.options.sanitize&&(m=l(m,this.options.whiteList,this.options.sanitizeFn)),i.find(".tooltip-inner").html(m)):i.find(".tooltip-inner").text(m),i.removeClass("fade in top bottom left right")},s.prototype.hide=function(i){var m=this,d=w(this.$tip),p=w.Event("hide.bs."+this.type);function y(){m.hoverState!="in"&&d.detach(),m.$element&&m.$element.removeAttr("aria-describedby").trigger("hidden.bs."+m.type),i&&i()}if(this.$element.trigger(p),!p.isDefaultPrevented())return d.removeClass("in"),w.support.transition&&d.hasClass("fade")?d.one("bsTransitionEnd",y).emulateTransitionEnd(s.TRANSITION_DURATION):y(),this.hoverState=null,this},s.prototype.fixTitle=function(){var i=this.$element;(i.attr("title")||typeof i.attr("data-original-title")!="string")&&i.attr("data-original-title",i.attr("title")||"").attr("title","")},s.prototype.hasContent=function(){return this.getTitle()},s.prototype.getPosition=function(i){i=i||this.$element;var m=i[0],d=m.tagName=="BODY",p=m.getBoundingClientRect();p.width==null&&(p=w.extend({},p,{width:p.right-p.left,height:p.bottom-p.top}));var y=window.SVGElement&&m instanceof window.SVGElement,b=d?{top:0,left:0}:y?null:i.offset(),x={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:i.scrollTop()},P=d?{width:w(window).width(),height:w(window).height()}:null;return w.extend({},p,x,P,b)},s.prototype.getCalculatedOffset=function(i,m,d,p){return i=="bottom"?{top:m.top+m.height,left:m.left+m.width/2-d/2}:i=="top"?{top:m.top-p,left:m.left+m.width/2-d/2}:i=="left"?{top:m.top+m.height/2-p/2,left:m.left-d}:{top:m.top+m.height/2-p/2,left:m.left+m.width}},s.prototype.getViewportAdjustedDelta=function(i,m,d,p){var y={top:0,left:0};if(!this.$viewport)return y;var b=this.options.viewport&&this.options.viewport.padding||0,x=this.getPosition(this.$viewport);if(/right|left/.test(i)){var P=m.top-b-x.scroll,S=m.top+b-x.scroll+p;P<x.top?y.top=x.top-P:S>x.top+x.height&&(y.top=x.top+x.height-S)}else{var D=m.left-b,A=m.left+b+d;D<x.left?y.left=x.left-D:A>x.right&&(y.left=x.left+x.width-A)}return y},s.prototype.getTitle=function(){var i,m=this.$element,d=this.options;return i=m.attr("data-original-title")||(typeof d.title=="function"?d.title.call(m[0]):d.title),i},s.prototype.getUID=function(i){do i+=~~(Math.random()*1e6);while(document.getElementById(i));return i},s.prototype.tip=function(){if(!this.$tip&&(this.$tip=w(this.options.template),this.$tip.length!=1))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},s.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},s.prototype.enable=function(){this.enabled=!0},s.prototype.disable=function(){this.enabled=!1},s.prototype.toggleEnabled=function(){this.enabled=!this.enabled},s.prototype.toggle=function(i){var m=this;i&&(m=w(i.currentTarget).data("bs."+this.type),m||(m=new this.constructor(i.currentTarget,this.getDelegateOptions()),w(i.currentTarget).data("bs."+this.type,m))),i?(m.inState.click=!m.inState.click,m.isInStateTrue()?m.enter(m):m.leave(m)):m.tip().hasClass("in")?m.leave(m):m.enter(m)},s.prototype.destroy=function(){var i=this;clearTimeout(this.timeout),this.hide(function(){i.$element.off("."+i.type).removeData("bs."+i.type),i.$tip&&i.$tip.detach(),i.$tip=null,i.$arrow=null,i.$viewport=null,i.$element=null})},s.prototype.sanitizeHtml=function(i){return l(i,this.options.whiteList,this.options.sanitizeFn)};function u(i){return this.each(function(){var m=w(this),d=m.data("bs.tooltip"),p=typeof i=="object"&&i;!d&&/destroy|hide/.test(i)||(d||m.data("bs.tooltip",d=new s(this,p)),typeof i=="string"&&d[i]())})}var g=w.fn.tooltip;w.fn.tooltip=u,w.fn.tooltip.Constructor=s,w.fn.tooltip.noConflict=function(){return w.fn.tooltip=g,this}}(jQuery)},2027:w=>{var v=function(){this.Diff_Timeout=1,this.Diff_EditCost=4,this.Match_Threshold=.5,this.Match_Distance=1e3,this.Patch_DeleteThreshold=.5,this.Patch_Margin=4,this.Match_MaxBits=32},a=-1,h=1,r=0;v.Diff=function(n,c){return[n,c]},v.prototype.diff_main=function(n,c,f,l){typeof l=="undefined"&&(this.Diff_Timeout<=0?l=Number.MAX_VALUE:l=new Date().getTime()+this.Diff_Timeout*1e3);var s=l;if(n==null||c==null)throw new Error("Null input. (diff_main)");if(n==c)return n?[new v.Diff(r,n)]:[];typeof f=="undefined"&&(f=!0);var u=f,g=this.diff_commonPrefix(n,c),i=n.substring(0,g);n=n.substring(g),c=c.substring(g),g=this.diff_commonSuffix(n,c);var m=n.substring(n.length-g);n=n.substring(0,n.length-g),c=c.substring(0,c.length-g);var d=this.diff_compute_(n,c,u,s);return i&&d.unshift(new v.Diff(r,i)),m&&d.push(new v.Diff(r,m)),this.diff_cleanupMerge(d),d},v.prototype.diff_compute_=function(n,c,f,l){var s;if(!n)return[new v.Diff(h,c)];if(!c)return[new v.Diff(a,n)];var u=n.length>c.length?n:c,g=n.length>c.length?c:n,i=u.indexOf(g);if(i!=-1)return s=[new v.Diff(h,u.substring(0,i)),new v.Diff(r,g),new v.Diff(h,u.substring(i+g.length))],n.length>c.length&&(s[0][0]=s[2][0]=a),s;if(g.length==1)return[new v.Diff(a,n),new v.Diff(h,c)];var m=this.diff_halfMatch_(n,c);if(m){var d=m[0],p=m[1],y=m[2],b=m[3],x=m[4],P=this.diff_main(d,y,f,l),S=this.diff_main(p,b,f,l);return P.concat([new v.Diff(r,x)],S)}return f&&n.length>100&&c.length>100?this.diff_lineMode_(n,c,l):this.diff_bisect_(n,c,l)},v.prototype.diff_lineMode_=function(n,c,f){var l=this.diff_linesToChars_(n,c);n=l.chars1,c=l.chars2;var s=l.lineArray,u=this.diff_main(n,c,!1,f);this.diff_charsToLines_(u,s),this.diff_cleanupSemantic(u),u.push(new v.Diff(r,""));for(var g=0,i=0,m=0,d="",p="";g<u.length;){switch(u[g][0]){case h:m++,p+=u[g][1];break;case a:i++,d+=u[g][1];break;case r:if(i>=1&&m>=1){u.splice(g-i-m,i+m),g=g-i-m;for(var y=this.diff_main(d,p,!1,f),b=y.length-1;b>=0;b--)u.splice(g,0,y[b]);g=g+y.length}m=0,i=0,d="",p="";break}g++}return u.pop(),u},v.prototype.diff_bisect_=function(n,c,f){for(var l=n.length,s=c.length,u=Math.ceil((l+s)/2),g=u,i=2*u,m=new Array(i),d=new Array(i),p=0;p<i;p++)m[p]=-1,d[p]=-1;m[g+1]=0,d[g+1]=0;for(var y=l-s,b=y%2!=0,x=0,P=0,S=0,D=0,A=0;A<u&&!(new Date().getTime()>f);A++){for(var T=-A+x;T<=A-P;T+=2){var C=g+T,k;T==-A||T!=A&&m[C-1]<m[C+1]?k=m[C+1]:k=m[C-1]+1;for(var L=k-T;k<l&&L<s&&n.charAt(k)==c.charAt(L);)k++,L++;if(m[C]=k,k>l)P+=2;else if(L>s)x+=2;else if(b){var N=g+y-T;if(N>=0&&N<i&&d[N]!=-1){var B=l-d[N];if(k>=B)return this.diff_bisectSplit_(n,c,k,L,f)}}}for(var O=-A+S;O<=A-D;O+=2){var N=g+O,B;O==-A||O!=A&&d[N-1]<d[N+1]?B=d[N+1]:B=d[N-1]+1;for(var F=B-O;B<l&&F<s&&n.charAt(l-B-1)==c.charAt(s-F-1);)B++,F++;if(d[N]=B,B>l)D+=2;else if(F>s)S+=2;else if(!b){var C=g+y-O;if(C>=0&&C<i&&m[C]!=-1){var k=m[C],L=g+k-C;if(B=l-B,k>=B)return this.diff_bisectSplit_(n,c,k,L,f)}}}}return[new v.Diff(a,n),new v.Diff(h,c)]},v.prototype.diff_bisectSplit_=function(n,c,f,l,s){var u=n.substring(0,f),g=c.substring(0,l),i=n.substring(f),m=c.substring(l),d=this.diff_main(u,g,!1,s),p=this.diff_main(i,m,!1,s);return d.concat(p)},v.prototype.diff_linesToChars_=function(n,c){var f=[],l={};f[0]="";function s(m){for(var d="",p=0,y=-1,b=f.length;y<m.length-1;){y=m.indexOf(`
`,p),y==-1&&(y=m.length-1);var x=m.substring(p,y+1);(l.hasOwnProperty?l.hasOwnProperty(x):l[x]!==void 0)?d+=String.fromCharCode(l[x]):(b==u&&(x=m.substring(p),y=m.length),d+=String.fromCharCode(b),l[x]=b,f[b++]=x),p=y+1}return d}var u=4e4,g=s(n);u=65535;var i=s(c);return{chars1:g,chars2:i,lineArray:f}},v.prototype.diff_charsToLines_=function(n,c){for(var f=0;f<n.length;f++){for(var l=n[f][1],s=[],u=0;u<l.length;u++)s[u]=c[l.charCodeAt(u)];n[f][1]=s.join("")}},v.prototype.diff_commonPrefix=function(n,c){if(!n||!c||n.charAt(0)!=c.charAt(0))return 0;for(var f=0,l=Math.min(n.length,c.length),s=l,u=0;f<s;)n.substring(u,s)==c.substring(u,s)?(f=s,u=f):l=s,s=Math.floor((l-f)/2+f);return s},v.prototype.diff_commonSuffix=function(n,c){if(!n||!c||n.charAt(n.length-1)!=c.charAt(c.length-1))return 0;for(var f=0,l=Math.min(n.length,c.length),s=l,u=0;f<s;)n.substring(n.length-s,n.length-u)==c.substring(c.length-s,c.length-u)?(f=s,u=f):l=s,s=Math.floor((l-f)/2+f);return s},v.prototype.diff_commonOverlap_=function(n,c){var f=n.length,l=c.length;if(f==0||l==0)return 0;f>l?n=n.substring(f-l):f<l&&(c=c.substring(0,f));var s=Math.min(f,l);if(n==c)return s;for(var u=0,g=1;;){var i=n.substring(s-g),m=c.indexOf(i);if(m==-1)return u;g+=m,(m==0||n.substring(s-g)==c.substring(0,g))&&(u=g,g++)}},v.prototype.diff_halfMatch_=function(n,c){if(this.Diff_Timeout<=0)return null;var f=n.length>c.length?n:c,l=n.length>c.length?c:n;if(f.length<4||l.length*2<f.length)return null;var s=this;function u(P,S,D){for(var A=P.substring(D,D+Math.floor(P.length/4)),T=-1,C="",k,L,N,B;(T=S.indexOf(A,T+1))!=-1;){var O=s.diff_commonPrefix(P.substring(D),S.substring(T)),F=s.diff_commonSuffix(P.substring(0,D),S.substring(0,T));C.length<F+O&&(C=S.substring(T-F,T)+S.substring(T,T+O),k=P.substring(0,D-F),L=P.substring(D+O),N=S.substring(0,T-F),B=S.substring(T+O))}return C.length*2>=P.length?[k,L,N,B,C]:null}var g=u(f,l,Math.ceil(f.length/4)),i=u(f,l,Math.ceil(f.length/2)),m;if(!g&&!i)return null;i?g?m=g[4].length>i[4].length?g:i:m=i:m=g;var d,p,y,b;n.length>c.length?(d=m[0],p=m[1],y=m[2],b=m[3]):(y=m[0],b=m[1],d=m[2],p=m[3]);var x=m[4];return[d,p,y,b,x]},v.prototype.diff_cleanupSemantic=function(n){for(var c=!1,f=[],l=0,s=null,u=0,g=0,i=0,m=0,d=0;u<n.length;)n[u][0]==r?(f[l++]=u,g=m,i=d,m=0,d=0,s=n[u][1]):(n[u][0]==h?m+=n[u][1].length:d+=n[u][1].length,s&&s.length<=Math.max(g,i)&&s.length<=Math.max(m,d)&&(n.splice(f[l-1],0,new v.Diff(a,s)),n[f[l-1]+1][0]=h,l--,l--,u=l>0?f[l-1]:-1,g=0,i=0,m=0,d=0,s=null,c=!0)),u++;for(c&&this.diff_cleanupMerge(n),this.diff_cleanupSemanticLossless(n),u=1;u<n.length;){if(n[u-1][0]==a&&n[u][0]==h){var p=n[u-1][1],y=n[u][1],b=this.diff_commonOverlap_(p,y),x=this.diff_commonOverlap_(y,p);b>=x?(b>=p.length/2||b>=y.length/2)&&(n.splice(u,0,new v.Diff(r,y.substring(0,b))),n[u-1][1]=p.substring(0,p.length-b),n[u+1][1]=y.substring(b),u++):(x>=p.length/2||x>=y.length/2)&&(n.splice(u,0,new v.Diff(r,p.substring(0,x))),n[u-1][0]=h,n[u-1][1]=y.substring(0,y.length-x),n[u+1][0]=a,n[u+1][1]=p.substring(x),u++),u++}u++}},v.prototype.diff_cleanupSemanticLossless=function(n){function c(x,P){if(!x||!P)return 6;var S=x.charAt(x.length-1),D=P.charAt(0),A=S.match(v.nonAlphaNumericRegex_),T=D.match(v.nonAlphaNumericRegex_),C=A&&S.match(v.whitespaceRegex_),k=T&&D.match(v.whitespaceRegex_),L=C&&S.match(v.linebreakRegex_),N=k&&D.match(v.linebreakRegex_),B=L&&x.match(v.blanklineEndRegex_),O=N&&P.match(v.blanklineStartRegex_);return B||O?5:L||N?4:A&&!C&&k?3:C||k?2:A||T?1:0}for(var f=1;f<n.length-1;){if(n[f-1][0]==r&&n[f+1][0]==r){var l=n[f-1][1],s=n[f][1],u=n[f+1][1],g=this.diff_commonSuffix(l,s);if(g){var i=s.substring(s.length-g);l=l.substring(0,l.length-g),s=i+s.substring(0,s.length-g),u=i+u}for(var m=l,d=s,p=u,y=c(l,s)+c(s,u);s.charAt(0)===u.charAt(0);){l+=s.charAt(0),s=s.substring(1)+u.charAt(0),u=u.substring(1);var b=c(l,s)+c(s,u);b>=y&&(y=b,m=l,d=s,p=u)}n[f-1][1]!=m&&(m?n[f-1][1]=m:(n.splice(f-1,1),f--),n[f][1]=d,p?n[f+1][1]=p:(n.splice(f+1,1),f--))}f++}},v.nonAlphaNumericRegex_=/[^a-zA-Z0-9]/,v.whitespaceRegex_=/\s/,v.linebreakRegex_=/[\r\n]/,v.blanklineEndRegex_=/\n\r?\n$/,v.blanklineStartRegex_=/^\r?\n\r?\n/,v.prototype.diff_cleanupEfficiency=function(n){for(var c=!1,f=[],l=0,s=null,u=0,g=!1,i=!1,m=!1,d=!1;u<n.length;)n[u][0]==r?(n[u][1].length<this.Diff_EditCost&&(m||d)?(f[l++]=u,g=m,i=d,s=n[u][1]):(l=0,s=null),m=d=!1):(n[u][0]==a?d=!0:m=!0,s&&(g&&i&&m&&d||s.length<this.Diff_EditCost/2&&g+i+m+d==3)&&(n.splice(f[l-1],0,new v.Diff(a,s)),n[f[l-1]+1][0]=h,l--,s=null,g&&i?(m=d=!0,l=0):(l--,u=l>0?f[l-1]:-1,m=d=!1),c=!0)),u++;c&&this.diff_cleanupMerge(n)},v.prototype.diff_cleanupMerge=function(n){n.push(new v.Diff(r,""));for(var c=0,f=0,l=0,s="",u="",g;c<n.length;)switch(n[c][0]){case h:l++,u+=n[c][1],c++;break;case a:f++,s+=n[c][1],c++;break;case r:f+l>1?(f!==0&&l!==0&&(g=this.diff_commonPrefix(u,s),g!==0&&(c-f-l>0&&n[c-f-l-1][0]==r?n[c-f-l-1][1]+=u.substring(0,g):(n.splice(0,0,new v.Diff(r,u.substring(0,g))),c++),u=u.substring(g),s=s.substring(g)),g=this.diff_commonSuffix(u,s),g!==0&&(n[c][1]=u.substring(u.length-g)+n[c][1],u=u.substring(0,u.length-g),s=s.substring(0,s.length-g))),c-=f+l,n.splice(c,f+l),s.length&&(n.splice(c,0,new v.Diff(a,s)),c++),u.length&&(n.splice(c,0,new v.Diff(h,u)),c++),c++):c!==0&&n[c-1][0]==r?(n[c-1][1]+=n[c][1],n.splice(c,1)):c++,l=0,f=0,s="",u="";break}n[n.length-1][1]===""&&n.pop();var i=!1;for(c=1;c<n.length-1;)n[c-1][0]==r&&n[c+1][0]==r&&(n[c][1].substring(n[c][1].length-n[c-1][1].length)==n[c-1][1]?(n[c][1]=n[c-1][1]+n[c][1].substring(0,n[c][1].length-n[c-1][1].length),n[c+1][1]=n[c-1][1]+n[c+1][1],n.splice(c-1,1),i=!0):n[c][1].substring(0,n[c+1][1].length)==n[c+1][1]&&(n[c-1][1]+=n[c+1][1],n[c][1]=n[c][1].substring(n[c+1][1].length)+n[c+1][1],n.splice(c+1,1),i=!0)),c++;i&&this.diff_cleanupMerge(n)},v.prototype.diff_xIndex=function(n,c){var f=0,l=0,s=0,u=0,g;for(g=0;g<n.length&&(n[g][0]!==h&&(f+=n[g][1].length),n[g][0]!==a&&(l+=n[g][1].length),!(f>c));g++)s=f,u=l;return n.length!=g&&n[g][0]===a?u:u+(c-s)},v.prototype.diff_prettyHtml=function(n){for(var c=[],f=/&/g,l=/</g,s=/>/g,u=/\n/g,g=0;g<n.length;g++){var i=n[g][0],m=n[g][1],d=m.replace(f,"&amp;").replace(l,"&lt;").replace(s,"&gt;").replace(u,"&para;<br>");switch(i){case h:c[g]='<ins style="background:#e6ffe6;">'+d+"</ins>";break;case a:c[g]='<del style="background:#ffe6e6;">'+d+"</del>";break;case r:c[g]="<span>"+d+"</span>";break}}return c.join("")},v.prototype.diff_text1=function(n){for(var c=[],f=0;f<n.length;f++)n[f][0]!==h&&(c[f]=n[f][1]);return c.join("")},v.prototype.diff_text2=function(n){for(var c=[],f=0;f<n.length;f++)n[f][0]!==a&&(c[f]=n[f][1]);return c.join("")},v.prototype.diff_levenshtein=function(n){for(var c=0,f=0,l=0,s=0;s<n.length;s++){var u=n[s][0],g=n[s][1];switch(u){case h:f+=g.length;break;case a:l+=g.length;break;case r:c+=Math.max(f,l),f=0,l=0;break}}return c+=Math.max(f,l),c},v.prototype.diff_toDelta=function(n){for(var c=[],f=0;f<n.length;f++)switch(n[f][0]){case h:c[f]="+"+encodeURI(n[f][1]);break;case a:c[f]="-"+n[f][1].length;break;case r:c[f]="="+n[f][1].length;break}return c.join("	").replace(/%20/g," ")},v.prototype.diff_fromDelta=function(n,c){for(var f=[],l=0,s=0,u=c.split(/\t/g),g=0;g<u.length;g++){var i=u[g].substring(1);switch(u[g].charAt(0)){case"+":try{f[l++]=new v.Diff(h,decodeURI(i))}catch(p){throw new Error("Illegal escape in diff_fromDelta: "+i)}break;case"-":case"=":var m=parseInt(i,10);if(isNaN(m)||m<0)throw new Error("Invalid number in diff_fromDelta: "+i);var d=n.substring(s,s+=m);u[g].charAt(0)=="="?f[l++]=new v.Diff(r,d):f[l++]=new v.Diff(a,d);break;default:if(u[g])throw new Error("Invalid diff operation in diff_fromDelta: "+u[g])}}if(s!=n.length)throw new Error("Delta length ("+s+") does not equal source text length ("+n.length+").");return f},v.prototype.match_main=function(n,c,f){if(n==null||c==null||f==null)throw new Error("Null input. (match_main)");return f=Math.max(0,Math.min(f,n.length)),n==c?0:n.length?n.substring(f,f+c.length)==c?f:this.match_bitap_(n,c,f):-1},v.prototype.match_bitap_=function(n,c,f){if(c.length>this.Match_MaxBits)throw new Error("Pattern too long for this browser.");var l=this.match_alphabet_(c),s=this;function u(k,L){var N=k/c.length,B=Math.abs(f-L);return s.Match_Distance?N+B/s.Match_Distance:B?1:N}var g=this.Match_Threshold,i=n.indexOf(c,f);i!=-1&&(g=Math.min(u(0,i),g),i=n.lastIndexOf(c,f+c.length),i!=-1&&(g=Math.min(u(0,i),g)));var m=1<<c.length-1;i=-1;for(var d,p,y=c.length+n.length,b,x=0;x<c.length;x++){for(d=0,p=y;d<p;)u(x,f+p)<=g?d=p:y=p,p=Math.floor((y-d)/2+d);y=p;var P=Math.max(1,f-p+1),S=Math.min(f+p,n.length)+c.length,D=Array(S+2);D[S+1]=(1<<x)-1;for(var A=S;A>=P;A--){var T=l[n.charAt(A-1)];if(x===0?D[A]=(D[A+1]<<1|1)&T:D[A]=(D[A+1]<<1|1)&T|((b[A+1]|b[A])<<1|1)|b[A+1],D[A]&m){var C=u(x,A-1);if(C<=g)if(g=C,i=A-1,i>f)P=Math.max(1,2*f-i);else break}}if(u(x+1,f)>g)break;b=D}return i},v.prototype.match_alphabet_=function(n){for(var c={},f=0;f<n.length;f++)c[n.charAt(f)]=0;for(var f=0;f<n.length;f++)c[n.charAt(f)]|=1<<n.length-f-1;return c},v.prototype.patch_addContext_=function(n,c){if(c.length!=0){if(n.start2===null)throw Error("patch not initialized");for(var f=c.substring(n.start2,n.start2+n.length1),l=0;c.indexOf(f)!=c.lastIndexOf(f)&&f.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;)l+=this.Patch_Margin,f=c.substring(n.start2-l,n.start2+n.length1+l);l+=this.Patch_Margin;var s=c.substring(n.start2-l,n.start2);s&&n.diffs.unshift(new v.Diff(r,s));var u=c.substring(n.start2+n.length1,n.start2+n.length1+l);u&&n.diffs.push(new v.Diff(r,u)),n.start1-=s.length,n.start2-=s.length,n.length1+=s.length+u.length,n.length2+=s.length+u.length}},v.prototype.patch_make=function(n,c,f){var l,s;if(typeof n=="string"&&typeof c=="string"&&typeof f=="undefined")l=n,s=this.diff_main(l,c,!0),s.length>2&&(this.diff_cleanupSemantic(s),this.diff_cleanupEfficiency(s));else if(n&&typeof n=="object"&&typeof c=="undefined"&&typeof f=="undefined")s=n,l=this.diff_text1(s);else if(typeof n=="string"&&c&&typeof c=="object"&&typeof f=="undefined")l=n,s=c;else if(typeof n=="string"&&typeof c=="string"&&f&&typeof f=="object")l=n,s=f;else throw new Error("Unknown call format to patch_make.");if(s.length===0)return[];for(var u=[],g=new v.patch_obj,i=0,m=0,d=0,p=l,y=l,b=0;b<s.length;b++){var x=s[b][0],P=s[b][1];switch(!i&&x!==r&&(g.start1=m,g.start2=d),x){case h:g.diffs[i++]=s[b],g.length2+=P.length,y=y.substring(0,d)+P+y.substring(d);break;case a:g.length1+=P.length,g.diffs[i++]=s[b],y=y.substring(0,d)+y.substring(d+P.length);break;case r:P.length<=2*this.Patch_Margin&&i&&s.length!=b+1?(g.diffs[i++]=s[b],g.length1+=P.length,g.length2+=P.length):P.length>=2*this.Patch_Margin&&i&&(this.patch_addContext_(g,p),u.push(g),g=new v.patch_obj,i=0,p=y,m=d);break}x!==h&&(m+=P.length),x!==a&&(d+=P.length)}return i&&(this.patch_addContext_(g,p),u.push(g)),u},v.prototype.patch_deepCopy=function(n){for(var c=[],f=0;f<n.length;f++){var l=n[f],s=new v.patch_obj;s.diffs=[];for(var u=0;u<l.diffs.length;u++)s.diffs[u]=new v.Diff(l.diffs[u][0],l.diffs[u][1]);s.start1=l.start1,s.start2=l.start2,s.length1=l.length1,s.length2=l.length2,c[f]=s}return c},v.prototype.patch_apply=function(n,c){if(n.length==0)return[c,[]];n=this.patch_deepCopy(n);var f=this.patch_addPadding(n);c=f+c+f,this.patch_splitMax(n);for(var l=0,s=[],u=0;u<n.length;u++){var g=n[u].start2+l,i=this.diff_text1(n[u].diffs),m,d=-1;if(i.length>this.Match_MaxBits?(m=this.match_main(c,i.substring(0,this.Match_MaxBits),g),m!=-1&&(d=this.match_main(c,i.substring(i.length-this.Match_MaxBits),g+i.length-this.Match_MaxBits),(d==-1||m>=d)&&(m=-1))):m=this.match_main(c,i,g),m==-1)s[u]=!1,l-=n[u].length2-n[u].length1;else{s[u]=!0,l=m-g;var p;if(d==-1?p=c.substring(m,m+i.length):p=c.substring(m,d+this.Match_MaxBits),i==p)c=c.substring(0,m)+this.diff_text2(n[u].diffs)+c.substring(m+i.length);else{var y=this.diff_main(i,p,!1);if(i.length>this.Match_MaxBits&&this.diff_levenshtein(y)/i.length>this.Patch_DeleteThreshold)s[u]=!1;else{this.diff_cleanupSemanticLossless(y);for(var b=0,x,P=0;P<n[u].diffs.length;P++){var S=n[u].diffs[P];S[0]!==r&&(x=this.diff_xIndex(y,b)),S[0]===h?c=c.substring(0,m+x)+S[1]+c.substring(m+x):S[0]===a&&(c=c.substring(0,m+x)+c.substring(m+this.diff_xIndex(y,b+S[1].length))),S[0]!==a&&(b+=S[1].length)}}}}}return c=c.substring(f.length,c.length-f.length),[c,s]},v.prototype.patch_addPadding=function(n){for(var c=this.Patch_Margin,f="",l=1;l<=c;l++)f+=String.fromCharCode(l);for(var l=0;l<n.length;l++)n[l].start1+=c,n[l].start2+=c;var s=n[0],u=s.diffs;if(u.length==0||u[0][0]!=r)u.unshift(new v.Diff(r,f)),s.start1-=c,s.start2-=c,s.length1+=c,s.length2+=c;else if(c>u[0][1].length){var g=c-u[0][1].length;u[0][1]=f.substring(u[0][1].length)+u[0][1],s.start1-=g,s.start2-=g,s.length1+=g,s.length2+=g}if(s=n[n.length-1],u=s.diffs,u.length==0||u[u.length-1][0]!=r)u.push(new v.Diff(r,f)),s.length1+=c,s.length2+=c;else if(c>u[u.length-1][1].length){var g=c-u[u.length-1][1].length;u[u.length-1][1]+=f.substring(0,g),s.length1+=g,s.length2+=g}return f},v.prototype.patch_splitMax=function(n){for(var c=this.Match_MaxBits,f=0;f<n.length;f++)if(!(n[f].length1<=c)){var l=n[f];n.splice(f--,1);for(var s=l.start1,u=l.start2,g="";l.diffs.length!==0;){var i=new v.patch_obj,m=!0;for(i.start1=s-g.length,i.start2=u-g.length,g!==""&&(i.length1=i.length2=g.length,i.diffs.push(new v.Diff(r,g)));l.diffs.length!==0&&i.length1<c-this.Patch_Margin;){var d=l.diffs[0][0],p=l.diffs[0][1];d===h?(i.length2+=p.length,u+=p.length,i.diffs.push(l.diffs.shift()),m=!1):d===a&&i.diffs.length==1&&i.diffs[0][0]==r&&p.length>2*c?(i.length1+=p.length,s+=p.length,m=!1,i.diffs.push(new v.Diff(d,p)),l.diffs.shift()):(p=p.substring(0,c-i.length1-this.Patch_Margin),i.length1+=p.length,s+=p.length,d===r?(i.length2+=p.length,u+=p.length):m=!1,i.diffs.push(new v.Diff(d,p)),p==l.diffs[0][1]?l.diffs.shift():l.diffs[0][1]=l.diffs[0][1].substring(p.length))}g=this.diff_text2(i.diffs),g=g.substring(g.length-this.Patch_Margin);var y=this.diff_text1(l.diffs).substring(0,this.Patch_Margin);y!==""&&(i.length1+=y.length,i.length2+=y.length,i.diffs.length!==0&&i.diffs[i.diffs.length-1][0]===r?i.diffs[i.diffs.length-1][1]+=y:i.diffs.push(new v.Diff(r,y))),m||n.splice(++f,0,i)}}},v.prototype.patch_toText=function(n){for(var c=[],f=0;f<n.length;f++)c[f]=n[f];return c.join("")},v.prototype.patch_fromText=function(n){var c=[];if(!n)return c;for(var f=n.split(`
`),l=0,s=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;l<f.length;){var u=f[l].match(s);if(!u)throw new Error("Invalid patch string: "+f[l]);var g=new v.patch_obj;for(c.push(g),g.start1=parseInt(u[1],10),u[2]===""?(g.start1--,g.length1=1):u[2]=="0"?g.length1=0:(g.start1--,g.length1=parseInt(u[2],10)),g.start2=parseInt(u[3],10),u[4]===""?(g.start2--,g.length2=1):u[4]=="0"?g.length2=0:(g.start2--,g.length2=parseInt(u[4],10)),l++;l<f.length;){var i=f[l].charAt(0);try{var m=decodeURI(f[l].substring(1))}catch(d){throw new Error("Illegal escape in patch_fromText: "+m)}if(i=="-")g.diffs.push(new v.Diff(a,m));else if(i=="+")g.diffs.push(new v.Diff(h,m));else if(i==" ")g.diffs.push(new v.Diff(r,m));else{if(i=="@")break;if(i!=="")throw new Error('Invalid patch mode "'+i+'" in: '+m)}l++}}return c},v.patch_obj=function(){this.diffs=[],this.start1=null,this.start2=null,this.length1=0,this.length2=0},v.patch_obj.prototype.toString=function(){var n,c;this.length1===0?n=this.start1+",0":this.length1==1?n=this.start1+1:n=this.start1+1+","+this.length1,this.length2===0?c=this.start2+",0":this.length2==1?c=this.start2+1:c=this.start2+1+","+this.length2;for(var f=["@@ -"+n+" +"+c+` @@
`],l,s=0;s<this.diffs.length;s++){switch(this.diffs[s][0]){case h:l="+";break;case a:l="-";break;case r:l=" ";break}f[s+1]=l+encodeURI(this.diffs[s][1])+`
`}return f.join("").replace(/%20/g," ")},w.exports=v,w.exports.diff_match_patch=v,w.exports.DIFF_DELETE=a,w.exports.DIFF_INSERT=h,w.exports.DIFF_EQUAL=r},177:function(w){/**!

 @license
 handlebars v4.7.7

Copyright (C) 2011-2019 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/(function(v,a){w.exports=a()})(this,function(){return function(v){function a(r){if(h[r])return h[r].exports;var n=h[r]={exports:{},id:r,loaded:!1};return v[r].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}var h={};return a.m=v,a.c=h,a.p="",a(0)}([function(v,a,h){"use strict";function r(){var S=x();return S.compile=function(D,A){return g.compile(D,A,S)},S.precompile=function(D,A){return g.precompile(D,A,S)},S.AST=s.default,S.Compiler=g.Compiler,S.JavaScriptCompiler=m.default,S.Parser=u.parser,S.parse=u.parse,S.parseWithoutProcessing=u.parseWithoutProcessing,S}var n=h(1).default;a.__esModule=!0;var c=h(2),f=n(c),l=h(45),s=n(l),u=h(46),g=h(51),i=h(52),m=n(i),d=h(49),p=n(d),y=h(44),b=n(y),x=f.default.create,P=r();P.create=r,b.default(P),P.Visitor=p.default,P.default=P,a.default=P,v.exports=a.default},function(v,a){"use strict";a.default=function(h){return h&&h.__esModule?h:{default:h}},a.__esModule=!0},function(v,a,h){"use strict";function r(){var S=new l.HandlebarsEnvironment;return d.extend(S,l),S.SafeString=u.default,S.Exception=i.default,S.Utils=d,S.escapeExpression=d.escapeExpression,S.VM=y,S.template=function(D){return y.template(D,S)},S}var n=h(3).default,c=h(1).default;a.__esModule=!0;var f=h(4),l=n(f),s=h(37),u=c(s),g=h(6),i=c(g),m=h(5),d=n(m),p=h(38),y=n(p),b=h(44),x=c(b),P=r();P.create=r,x.default(P),P.default=P,a.default=P,v.exports=a.default},function(v,a){"use strict";a.default=function(h){if(h&&h.__esModule)return h;var r={};if(h!=null)for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&(r[n]=h[n]);return r.default=h,r},a.__esModule=!0},function(v,a,h){"use strict";function r(S,D,A){this.helpers=S||{},this.partials=D||{},this.decorators=A||{},s.registerDefaultHelpers(this),u.registerDefaultDecorators(this)}var n=h(1).default;a.__esModule=!0,a.HandlebarsEnvironment=r;var c=h(5),f=h(6),l=n(f),s=h(10),u=h(30),g=h(32),i=n(g),m=h(33),d="4.7.7";a.VERSION=d;var p=8;a.COMPILER_REVISION=p;var y=7;a.LAST_COMPATIBLE_COMPILER_REVISION=y;var b={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};a.REVISION_CHANGES=b;var x="[object Object]";r.prototype={constructor:r,logger:i.default,log:i.default.log,registerHelper:function(S,D){if(c.toString.call(S)===x){if(D)throw new l.default("Arg not supported with multiple helpers");c.extend(this.helpers,S)}else this.helpers[S]=D},unregisterHelper:function(S){delete this.helpers[S]},registerPartial:function(S,D){if(c.toString.call(S)===x)c.extend(this.partials,S);else{if(typeof D=="undefined")throw new l.default('Attempting to register a partial called "'+S+'" as undefined');this.partials[S]=D}},unregisterPartial:function(S){delete this.partials[S]},registerDecorator:function(S,D){if(c.toString.call(S)===x){if(D)throw new l.default("Arg not supported with multiple decorators");c.extend(this.decorators,S)}else this.decorators[S]=D},unregisterDecorator:function(S){delete this.decorators[S]},resetLoggedPropertyAccesses:function(){m.resetLoggedProperties()}};var P=i.default.log;a.log=P,a.createFrame=c.createFrame,a.logger=i.default},function(v,a){"use strict";function h(b){return g[b]}function r(b){for(var x=1;x<arguments.length;x++)for(var P in arguments[x])Object.prototype.hasOwnProperty.call(arguments[x],P)&&(b[P]=arguments[x][P]);return b}function n(b,x){for(var P=0,S=b.length;P<S;P++)if(b[P]===x)return P;return-1}function c(b){if(typeof b!="string"){if(b&&b.toHTML)return b.toHTML();if(b==null)return"";if(!b)return b+"";b=""+b}return m.test(b)?b.replace(i,h):b}function f(b){return!b&&b!==0||!(!y(b)||b.length!==0)}function l(b){var x=r({},b);return x._parent=b,x}function s(b,x){return b.path=x,b}function u(b,x){return(b?b+".":"")+x}a.__esModule=!0,a.extend=r,a.indexOf=n,a.escapeExpression=c,a.isEmpty=f,a.createFrame=l,a.blockParams=s,a.appendContextPath=u;var g={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},i=/[&<>"'`=]/g,m=/[&<>"'`=]/,d=Object.prototype.toString;a.toString=d;var p=function(b){return typeof b=="function"};p(/x/)&&(a.isFunction=p=function(b){return typeof b=="function"&&d.call(b)==="[object Function]"}),a.isFunction=p;var y=Array.isArray||function(b){return!(!b||typeof b!="object")&&d.call(b)==="[object Array]"};a.isArray=y},function(v,a,h){"use strict";function r(f,l){var s=l&&l.loc,u=void 0,g=void 0,i=void 0,m=void 0;s&&(u=s.start.line,g=s.end.line,i=s.start.column,m=s.end.column,f+=" - "+u+":"+i);for(var d=Error.prototype.constructor.call(this,f),p=0;p<c.length;p++)this[c[p]]=d[c[p]];Error.captureStackTrace&&Error.captureStackTrace(this,r);try{s&&(this.lineNumber=u,this.endLineNumber=g,n?(Object.defineProperty(this,"column",{value:i,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:m,enumerable:!0})):(this.column=i,this.endColumn=m))}catch(y){}}var n=h(7).default;a.__esModule=!0;var c=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];r.prototype=new Error,a.default=r,v.exports=a.default},function(v,a,h){v.exports={default:h(8),__esModule:!0}},function(v,a,h){var r=h(9);v.exports=function(n,c,f){return r.setDesc(n,c,f)}},function(v,a){var h=Object;v.exports={create:h.create,getProto:h.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:h.getOwnPropertyDescriptor,setDesc:h.defineProperty,setDescs:h.defineProperties,getKeys:h.keys,getNames:h.getOwnPropertyNames,getSymbols:h.getOwnPropertySymbols,each:[].forEach}},function(v,a,h){"use strict";function r(D){l.default(D),u.default(D),i.default(D),d.default(D),y.default(D),x.default(D),S.default(D)}function n(D,A,T){D.helpers[A]&&(D.hooks[A]=D.helpers[A],T||delete D.helpers[A])}var c=h(1).default;a.__esModule=!0,a.registerDefaultHelpers=r,a.moveHelperToHooks=n;var f=h(11),l=c(f),s=h(12),u=c(s),g=h(25),i=c(g),m=h(26),d=c(m),p=h(27),y=c(p),b=h(28),x=c(b),P=h(29),S=c(P)},function(v,a,h){"use strict";a.__esModule=!0;var r=h(5);a.default=function(n){n.registerHelper("blockHelperMissing",function(c,f){var l=f.inverse,s=f.fn;if(c===!0)return s(this);if(c===!1||c==null)return l(this);if(r.isArray(c))return c.length>0?(f.ids&&(f.ids=[f.name]),n.helpers.each(c,f)):l(this);if(f.data&&f.ids){var u=r.createFrame(f.data);u.contextPath=r.appendContextPath(f.data.contextPath,f.name),f={data:u}}return s(c,f)})},v.exports=a.default},function(v,a,h){(function(r){"use strict";var n=h(13).default,c=h(1).default;a.__esModule=!0;var f=h(5),l=h(6),s=c(l);a.default=function(u){u.registerHelper("each",function(g,i){function m(C,k,L){x&&(x.key=C,x.index=k,x.first=k===0,x.last=!!L,P&&(x.contextPath=P+C)),b+=d(g[C],{data:x,blockParams:f.blockParams([g[C],C],[P+C,null])})}if(!i)throw new s.default("Must pass iterator to #each");var d=i.fn,p=i.inverse,y=0,b="",x=void 0,P=void 0;if(i.data&&i.ids&&(P=f.appendContextPath(i.data.contextPath,i.ids[0])+"."),f.isFunction(g)&&(g=g.call(this)),i.data&&(x=f.createFrame(i.data)),g&&typeof g=="object")if(f.isArray(g))for(var S=g.length;y<S;y++)y in g&&m(y,y,y===g.length-1);else if(r.Symbol&&g[r.Symbol.iterator]){for(var D=[],A=g[r.Symbol.iterator](),T=A.next();!T.done;T=A.next())D.push(T.value);g=D;for(var S=g.length;y<S;y++)m(y,y,y===g.length-1)}else(function(){var C=void 0;n(g).forEach(function(k){C!==void 0&&m(C,y-1),C=k,y++}),C!==void 0&&m(C,y-1,!0)})();return y===0&&(b=p(this)),b})},v.exports=a.default}).call(a,function(){return this}())},function(v,a,h){v.exports={default:h(14),__esModule:!0}},function(v,a,h){h(15),v.exports=h(21).Object.keys},function(v,a,h){var r=h(16);h(18)("keys",function(n){return function(c){return n(r(c))}})},function(v,a,h){var r=h(17);v.exports=function(n){return Object(r(n))}},function(v,a){v.exports=function(h){if(h==null)throw TypeError("Can't call method on  "+h);return h}},function(v,a,h){var r=h(19),n=h(21),c=h(24);v.exports=function(f,l){var s=(n.Object||{})[f]||Object[f],u={};u[f]=l(s),r(r.S+r.F*c(function(){s(1)}),"Object",u)}},function(v,a,h){var r=h(20),n=h(21),c=h(22),f="prototype",l=function(s,u,g){var i,m,d,p=s&l.F,y=s&l.G,b=s&l.S,x=s&l.P,P=s&l.B,S=s&l.W,D=y?n:n[u]||(n[u]={}),A=y?r:b?r[u]:(r[u]||{})[f];y&&(g=u);for(i in g)m=!p&&A&&i in A,m&&i in D||(d=m?A[i]:g[i],D[i]=y&&typeof A[i]!="function"?g[i]:P&&m?c(d,r):S&&A[i]==d?function(T){var C=function(k){return this instanceof T?new T(k):T(k)};return C[f]=T[f],C}(d):x&&typeof d=="function"?c(Function.call,d):d,x&&((D[f]||(D[f]={}))[i]=d))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,v.exports=l},function(v,a){var h=v.exports=typeof window!="undefined"&&window.Math==Math?window:typeof self!="undefined"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=h)},function(v,a){var h=v.exports={version:"1.2.6"};typeof __e=="number"&&(__e=h)},function(v,a,h){var r=h(23);v.exports=function(n,c,f){if(r(n),c===void 0)return n;switch(f){case 1:return function(l){return n.call(c,l)};case 2:return function(l,s){return n.call(c,l,s)};case 3:return function(l,s,u){return n.call(c,l,s,u)}}return function(){return n.apply(c,arguments)}}},function(v,a){v.exports=function(h){if(typeof h!="function")throw TypeError(h+" is not a function!");return h}},function(v,a){v.exports=function(h){try{return!!h()}catch(r){return!0}}},function(v,a,h){"use strict";var r=h(1).default;a.__esModule=!0;var n=h(6),c=r(n);a.default=function(f){f.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new c.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},v.exports=a.default},function(v,a,h){"use strict";var r=h(1).default;a.__esModule=!0;var n=h(5),c=h(6),f=r(c);a.default=function(l){l.registerHelper("if",function(s,u){if(arguments.length!=2)throw new f.default("#if requires exactly one argument");return n.isFunction(s)&&(s=s.call(this)),!u.hash.includeZero&&!s||n.isEmpty(s)?u.inverse(this):u.fn(this)}),l.registerHelper("unless",function(s,u){if(arguments.length!=2)throw new f.default("#unless requires exactly one argument");return l.helpers.if.call(this,s,{fn:u.inverse,inverse:u.fn,hash:u.hash})})},v.exports=a.default},function(v,a){"use strict";a.__esModule=!0,a.default=function(h){h.registerHelper("log",function(){for(var r=[void 0],n=arguments[arguments.length-1],c=0;c<arguments.length-1;c++)r.push(arguments[c]);var f=1;n.hash.level!=null?f=n.hash.level:n.data&&n.data.level!=null&&(f=n.data.level),r[0]=f,h.log.apply(h,r)})},v.exports=a.default},function(v,a){"use strict";a.__esModule=!0,a.default=function(h){h.registerHelper("lookup",function(r,n,c){return r&&c.lookupProperty(r,n)})},v.exports=a.default},function(v,a,h){"use strict";var r=h(1).default;a.__esModule=!0;var n=h(5),c=h(6),f=r(c);a.default=function(l){l.registerHelper("with",function(s,u){if(arguments.length!=2)throw new f.default("#with requires exactly one argument");n.isFunction(s)&&(s=s.call(this));var g=u.fn;if(n.isEmpty(s))return u.inverse(this);var i=u.data;return u.data&&u.ids&&(i=n.createFrame(u.data),i.contextPath=n.appendContextPath(u.data.contextPath,u.ids[0])),g(s,{data:i,blockParams:n.blockParams([s],[i&&i.contextPath])})})},v.exports=a.default},function(v,a,h){"use strict";function r(l){f.default(l)}var n=h(1).default;a.__esModule=!0,a.registerDefaultDecorators=r;var c=h(31),f=n(c)},function(v,a,h){"use strict";a.__esModule=!0;var r=h(5);a.default=function(n){n.registerDecorator("inline",function(c,f,l,s){var u=c;return f.partials||(f.partials={},u=function(g,i){var m=l.partials;l.partials=r.extend({},m,f.partials);var d=c(g,i);return l.partials=m,d}),f.partials[s.args[0]]=s.fn,u})},v.exports=a.default},function(v,a,h){"use strict";a.__esModule=!0;var r=h(5),n={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(c){if(typeof c=="string"){var f=r.indexOf(n.methodMap,c.toLowerCase());c=f>=0?f:parseInt(c,10)}return c},log:function(c){if(c=n.lookupLevel(c),typeof console!="undefined"&&n.lookupLevel(n.level)<=c){var f=n.methodMap[c];console[f]||(f="log");for(var l=arguments.length,s=Array(l>1?l-1:0),u=1;u<l;u++)s[u-1]=arguments[u];console[f].apply(console,s)}}};a.default=n,v.exports=a.default},function(v,a,h){"use strict";function r(y){var b=s(null);b.constructor=!1,b.__defineGetter__=!1,b.__defineSetter__=!1,b.__lookupGetter__=!1;var x=s(null);return x.__proto__=!1,{properties:{whitelist:i.createNewLookupObject(x,y.allowedProtoProperties),defaultValue:y.allowProtoPropertiesByDefault},methods:{whitelist:i.createNewLookupObject(b,y.allowedProtoMethods),defaultValue:y.allowProtoMethodsByDefault}}}function n(y,b,x){return c(typeof y=="function"?b.methods:b.properties,x)}function c(y,b){return y.whitelist[b]!==void 0?y.whitelist[b]===!0:y.defaultValue!==void 0?y.defaultValue:(f(b),!1)}function f(y){p[y]!==!0&&(p[y]=!0,d.log("error",'Handlebars: Access has been denied to resolve the property "'+y+`" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`))}function l(){u(p).forEach(function(y){delete p[y]})}var s=h(34).default,u=h(13).default,g=h(3).default;a.__esModule=!0,a.createProtoAccessControl=r,a.resultIsAllowed=n,a.resetLoggedProperties=l;var i=h(36),m=h(32),d=g(m),p=s(null)},function(v,a,h){v.exports={default:h(35),__esModule:!0}},function(v,a,h){var r=h(9);v.exports=function(n,c){return r.create(n,c)}},function(v,a,h){"use strict";function r(){for(var f=arguments.length,l=Array(f),s=0;s<f;s++)l[s]=arguments[s];return c.extend.apply(void 0,[n(null)].concat(l))}var n=h(34).default;a.__esModule=!0,a.createNewLookupObject=r;var c=h(5)},function(v,a){"use strict";function h(r){this.string=r}a.__esModule=!0,h.prototype.toString=h.prototype.toHTML=function(){return""+this.string},a.default=h,v.exports=a.default},function(v,a,h){"use strict";function r(L){var N=L&&L[0]||1,B=A.COMPILER_REVISION;if(!(N>=A.LAST_COMPATIBLE_COMPILER_REVISION&&N<=A.COMPILER_REVISION)){if(N<A.LAST_COMPATIBLE_COMPILER_REVISION){var O=A.REVISION_CHANGES[B],F=A.REVISION_CHANGES[N];throw new D.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+O+") or downgrade your runtime to an older version ("+F+").")}throw new D.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+L[1]+").")}}function n(L,N){function B(_,W,H){H.hash&&(W=P.extend({},W,H.hash),H.ids&&(H.ids[0]=!0)),_=N.VM.resolvePartial.call(this,_,W,H);var $=P.extend({},H,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),K=N.VM.invokePartial.call(this,_,W,$);if(K==null&&N.compile&&(H.partials[H.name]=N.compile(_,L.compilerOptions,N),K=H.partials[H.name](W,$)),K!=null){if(H.indent){for(var te=K.split(`
`),oe=0,he=te.length;oe<he&&(te[oe]||oe+1!==he);oe++)te[oe]=H.indent+te[oe];K=te.join(`
`)}return K}throw new D.default("The partial "+H.name+" could not be compiled when running in runtime-only mode")}function O(_){function W(oe){return""+L.main(q,oe,q.helpers,q.partials,$,te,K)}var H=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],$=H.data;O._setup(H),!H.partial&&L.useData&&($=u(_,$));var K=void 0,te=L.useBlockParams?[]:void 0;return L.useDepths&&(K=H.depths?_!=H.depths[0]?[_].concat(H.depths):H.depths:[_]),(W=g(L.main,W,q,H.depths||[],$,te))(_,H)}if(!N)throw new D.default("No environment passed to template");if(!L||!L.main)throw new D.default("Unknown template object: "+typeof L);L.main.decorator=L.main_d,N.VM.checkRevision(L.compiler);var F=L.compiler&&L.compiler[0]===7,q={strict:function(_,W,H){if(!(_&&W in _))throw new D.default('"'+W+'" not defined in '+_,{loc:H});return q.lookupProperty(_,W)},lookupProperty:function(_,W){var H=_[W];return H==null||Object.prototype.hasOwnProperty.call(_,W)||k.resultIsAllowed(H,q.protoAccessControl,W)?H:void 0},lookup:function(_,W){for(var H=_.length,$=0;$<H;$++){var K=_[$]&&q.lookupProperty(_[$],W);if(K!=null)return _[$][W]}},lambda:function(_,W){return typeof _=="function"?_.call(W):_},escapeExpression:P.escapeExpression,invokePartial:B,fn:function(_){var W=L[_];return W.decorator=L[_+"_d"],W},programs:[],program:function(_,W,H,$,K){var te=this.programs[_],oe=this.fn(_);return W||K||$||H?te=c(this,_,oe,W,H,$,K):te||(te=this.programs[_]=c(this,_,oe)),te},data:function(_,W){for(;_&&W--;)_=_._parent;return _},mergeIfNeeded:function(_,W){var H=_||W;return _&&W&&_!==W&&(H=P.extend({},W,_)),H},nullContext:d({}),noop:N.VM.noop,compilerInfo:L.compiler};return O.isTop=!0,O._setup=function(_){if(_.partial)q.protoAccessControl=_.protoAccessControl,q.helpers=_.helpers,q.partials=_.partials,q.decorators=_.decorators,q.hooks=_.hooks;else{var W=P.extend({},N.helpers,_.helpers);i(W,q),q.helpers=W,L.usePartial&&(q.partials=q.mergeIfNeeded(_.partials,N.partials)),(L.usePartial||L.useDecorators)&&(q.decorators=P.extend({},N.decorators,_.decorators)),q.hooks={},q.protoAccessControl=k.createProtoAccessControl(_);var H=_.allowCallsToHelperMissing||F;T.moveHelperToHooks(q,"helperMissing",H),T.moveHelperToHooks(q,"blockHelperMissing",H)}},O._child=function(_,W,H,$){if(L.useBlockParams&&!H)throw new D.default("must pass block params");if(L.useDepths&&!$)throw new D.default("must pass parent depths");return c(q,_,L[_],W,0,H,$)},O}function c(L,N,B,O,F,q,_){function W(H){var $=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],K=_;return!_||H==_[0]||H===L.nullContext&&_[0]===null||(K=[H].concat(_)),B(L,H,L.helpers,L.partials,$.data||O,q&&[$.blockParams].concat(q),K)}return W=g(B,W,L,_,O,q),W.program=N,W.depth=_?_.length:0,W.blockParams=F||0,W}function f(L,N,B){return L?L.call||B.name||(B.name=L,L=B.partials[L]):L=B.name==="@partial-block"?B.data["partial-block"]:B.partials[B.name],L}function l(L,N,B){var O=B.data&&B.data["partial-block"];B.partial=!0,B.ids&&(B.data.contextPath=B.ids[0]||B.data.contextPath);var F=void 0;if(B.fn&&B.fn!==s&&function(){B.data=A.createFrame(B.data);var q=B.fn;F=B.data["partial-block"]=function(_){var W=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];return W.data=A.createFrame(W.data),W.data["partial-block"]=O,q(_,W)},q.partials&&(B.partials=P.extend({},B.partials,q.partials))}(),L===void 0&&F&&(L=F),L===void 0)throw new D.default("The partial "+B.name+" could not be found");if(L instanceof Function)return L(N,B)}function s(){return""}function u(L,N){return N&&"root"in N||(N=N?A.createFrame(N):{},N.root=L),N}function g(L,N,B,O,F,q){if(L.decorator){var _={};N=L.decorator(N,_,B,O&&O[0],F,q,O),P.extend(N,_)}return N}function i(L,N){p(L).forEach(function(B){var O=L[B];L[B]=m(O,N)})}function m(L,N){var B=N.lookupProperty;return C.wrapHelper(L,function(O){return P.extend({lookupProperty:B},O)})}var d=h(39).default,p=h(13).default,y=h(3).default,b=h(1).default;a.__esModule=!0,a.checkRevision=r,a.template=n,a.wrapProgram=c,a.resolvePartial=f,a.invokePartial=l,a.noop=s;var x=h(5),P=y(x),S=h(6),D=b(S),A=h(4),T=h(10),C=h(43),k=h(33)},function(v,a,h){v.exports={default:h(40),__esModule:!0}},function(v,a,h){h(41),v.exports=h(21).Object.seal},function(v,a,h){var r=h(42);h(18)("seal",function(n){return function(c){return n&&r(c)?n(c):c}})},function(v,a){v.exports=function(h){return typeof h=="object"?h!==null:typeof h=="function"}},function(v,a){"use strict";function h(r,n){if(typeof r!="function")return r;var c=function(){var f=arguments[arguments.length-1];return arguments[arguments.length-1]=n(f),r.apply(this,arguments)};return c}a.__esModule=!0,a.wrapHelper=h},function(v,a){(function(h){"use strict";a.__esModule=!0,a.default=function(r){var n=typeof h!="undefined"?h:window,c=n.Handlebars;r.noConflict=function(){return n.Handlebars===r&&(n.Handlebars=c),r}},v.exports=a.default}).call(a,function(){return this}())},function(v,a){"use strict";a.__esModule=!0;var h={helpers:{helperExpression:function(r){return r.type==="SubExpression"||(r.type==="MustacheStatement"||r.type==="BlockStatement")&&!!(r.params&&r.params.length||r.hash)},scopedId:function(r){return/^\.|this\b/.test(r.original)},simpleId:function(r){return r.parts.length===1&&!h.helpers.scopedId(r)&&!r.depth}}};a.default=h,v.exports=a.default},function(v,a,h){"use strict";function r(y,b){if(y.type==="Program")return y;s.default.yy=p,p.locInfo=function(P){return new p.SourceLocation(b&&b.srcName,P)};var x=s.default.parse(y);return x}function n(y,b){var x=r(y,b),P=new g.default(b);return P.accept(x)}var c=h(1).default,f=h(3).default;a.__esModule=!0,a.parseWithoutProcessing=r,a.parse=n;var l=h(47),s=c(l),u=h(48),g=c(u),i=h(50),m=f(i),d=h(5);a.parser=s.default;var p={};d.extend(p,m)},function(v,a){"use strict";a.__esModule=!0;var h=function(){function r(){this.yy={}}var n={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(f,l,s,u,g,i,m){var d=i.length-1;switch(g){case 1:return i[d-1];case 2:this.$=u.prepareProgram(i[d]);break;case 3:this.$=i[d];break;case 4:this.$=i[d];break;case 5:this.$=i[d];break;case 6:this.$=i[d];break;case 7:this.$=i[d];break;case 8:this.$=i[d];break;case 9:this.$={type:"CommentStatement",value:u.stripComment(i[d]),strip:u.stripFlags(i[d],i[d]),loc:u.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:i[d],value:i[d],loc:u.locInfo(this._$)};break;case 11:this.$=u.prepareRawBlock(i[d-2],i[d-1],i[d],this._$);break;case 12:this.$={path:i[d-3],params:i[d-2],hash:i[d-1]};break;case 13:this.$=u.prepareBlock(i[d-3],i[d-2],i[d-1],i[d],!1,this._$);break;case 14:this.$=u.prepareBlock(i[d-3],i[d-2],i[d-1],i[d],!0,this._$);break;case 15:this.$={open:i[d-5],path:i[d-4],params:i[d-3],hash:i[d-2],blockParams:i[d-1],strip:u.stripFlags(i[d-5],i[d])};break;case 16:this.$={path:i[d-4],params:i[d-3],hash:i[d-2],blockParams:i[d-1],strip:u.stripFlags(i[d-5],i[d])};break;case 17:this.$={path:i[d-4],params:i[d-3],hash:i[d-2],blockParams:i[d-1],strip:u.stripFlags(i[d-5],i[d])};break;case 18:this.$={strip:u.stripFlags(i[d-1],i[d-1]),program:i[d]};break;case 19:var p=u.prepareBlock(i[d-2],i[d-1],i[d],i[d],!1,this._$),y=u.prepareProgram([p],i[d-1].loc);y.chained=!0,this.$={strip:i[d-2].strip,program:y,chain:!0};break;case 20:this.$=i[d];break;case 21:this.$={path:i[d-1],strip:u.stripFlags(i[d-2],i[d])};break;case 22:this.$=u.prepareMustache(i[d-3],i[d-2],i[d-1],i[d-4],u.stripFlags(i[d-4],i[d]),this._$);break;case 23:this.$=u.prepareMustache(i[d-3],i[d-2],i[d-1],i[d-4],u.stripFlags(i[d-4],i[d]),this._$);break;case 24:this.$={type:"PartialStatement",name:i[d-3],params:i[d-2],hash:i[d-1],indent:"",strip:u.stripFlags(i[d-4],i[d]),loc:u.locInfo(this._$)};break;case 25:this.$=u.preparePartialBlock(i[d-2],i[d-1],i[d],this._$);break;case 26:this.$={path:i[d-3],params:i[d-2],hash:i[d-1],strip:u.stripFlags(i[d-4],i[d])};break;case 27:this.$=i[d];break;case 28:this.$=i[d];break;case 29:this.$={type:"SubExpression",path:i[d-3],params:i[d-2],hash:i[d-1],loc:u.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:i[d],loc:u.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:u.id(i[d-2]),value:i[d],loc:u.locInfo(this._$)};break;case 32:this.$=u.id(i[d-1]);break;case 33:this.$=i[d];break;case 34:this.$=i[d];break;case 35:this.$={type:"StringLiteral",value:i[d],original:i[d],loc:u.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(i[d]),original:Number(i[d]),loc:u.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:i[d]==="true",original:i[d]==="true",loc:u.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:u.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:u.locInfo(this._$)};break;case 40:this.$=i[d];break;case 41:this.$=i[d];break;case 42:this.$=u.preparePath(!0,i[d],this._$);break;case 43:this.$=u.preparePath(!1,i[d],this._$);break;case 44:i[d-2].push({part:u.id(i[d]),original:i[d],separator:i[d-1]}),this.$=i[d-2];break;case 45:this.$=[{part:u.id(i[d]),original:i[d]}];break;case 46:this.$=[];break;case 47:i[d-1].push(i[d]);break;case 48:this.$=[];break;case 49:i[d-1].push(i[d]);break;case 50:this.$=[];break;case 51:i[d-1].push(i[d]);break;case 58:this.$=[];break;case 59:i[d-1].push(i[d]);break;case 64:this.$=[];break;case 65:i[d-1].push(i[d]);break;case 70:this.$=[];break;case 71:i[d-1].push(i[d]);break;case 78:this.$=[];break;case 79:i[d-1].push(i[d]);break;case 82:this.$=[];break;case 83:i[d-1].push(i[d]);break;case 86:this.$=[];break;case 87:i[d-1].push(i[d]);break;case 90:this.$=[];break;case 91:i[d-1].push(i[d]);break;case 94:this.$=[];break;case 95:i[d-1].push(i[d]);break;case 98:this.$=[i[d]];break;case 99:i[d-1].push(i[d]);break;case 100:this.$=[i[d]];break;case 101:i[d-1].push(i[d])}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(f,l){throw new Error(f)},parse:function(f){function l(){var q;return q=s.lexer.lex()||1,typeof q!="number"&&(q=s.symbols_[q]||q),q}var s=this,u=[0],g=[null],i=[],m=this.table,d="",p=0,y=0,b=0;this.lexer.setInput(f),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc=="undefined"&&(this.lexer.yylloc={});var x=this.lexer.yylloc;i.push(x);var P=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);for(var S,D,A,T,C,k,L,N,B,O={};;){if(A=u[u.length-1],this.defaultActions[A]?T=this.defaultActions[A]:(S!==null&&typeof S!="undefined"||(S=l()),T=m[A]&&m[A][S]),typeof T=="undefined"||!T.length||!T[0]){var F="";if(!b){B=[];for(k in m[A])this.terminals_[k]&&k>2&&B.push("'"+this.terminals_[k]+"'");F=this.lexer.showPosition?"Parse error on line "+(p+1)+`:
`+this.lexer.showPosition()+`
Expecting `+B.join(", ")+", got '"+(this.terminals_[S]||S)+"'":"Parse error on line "+(p+1)+": Unexpected "+(S==1?"end of input":"'"+(this.terminals_[S]||S)+"'"),this.parseError(F,{text:this.lexer.match,token:this.terminals_[S]||S,line:this.lexer.yylineno,loc:x,expected:B})}}if(T[0]instanceof Array&&T.length>1)throw new Error("Parse Error: multiple actions possible at state: "+A+", token: "+S);switch(T[0]){case 1:u.push(S),g.push(this.lexer.yytext),i.push(this.lexer.yylloc),u.push(T[1]),S=null,D?(S=D,D=null):(y=this.lexer.yyleng,d=this.lexer.yytext,p=this.lexer.yylineno,x=this.lexer.yylloc,b>0&&b--);break;case 2:if(L=this.productions_[T[1]][1],O.$=g[g.length-L],O._$={first_line:i[i.length-(L||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(L||1)].first_column,last_column:i[i.length-1].last_column},P&&(O._$.range=[i[i.length-(L||1)].range[0],i[i.length-1].range[1]]),C=this.performAction.call(O,d,y,p,this.yy,T[1],g,i),typeof C!="undefined")return C;L&&(u=u.slice(0,-1*L*2),g=g.slice(0,-1*L),i=i.slice(0,-1*L)),u.push(this.productions_[T[1]][0]),g.push(O.$),i.push(O._$),N=m[u[u.length-2]][u[u.length-1]],u.push(N);break;case 3:return!0}}return!0}},c=function(){var f={EOF:1,parseError:function(l,s){if(!this.yy.parser)throw new Error(l);this.yy.parser.parseError(l,s)},setInput:function(l){return this._input=l,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var l=this._input[0];this.yytext+=l,this.yyleng++,this.offset++,this.match+=l,this.matched+=l;var s=l.match(/(?:\r\n?|\n).*/g);return s?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),l},unput:function(l){var s=l.length,u=l.split(/(?:\r\n?|\n)/g);this._input=l+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-s-1),this.offset-=s;var g=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),u.length-1&&(this.yylineno-=u.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:u?(u.length===g.length?this.yylloc.first_column:0)+g[g.length-u.length].length-u[0].length:this.yylloc.first_column-s},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-s]),this},more:function(){return this._more=!0,this},less:function(l){this.unput(this.match.slice(l))},pastInput:function(){var l=this.matched.substr(0,this.matched.length-this.match.length);return(l.length>20?"...":"")+l.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var l=this.match;return l.length<20&&(l+=this._input.substr(0,20-l.length)),(l.substr(0,20)+(l.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var l=this.pastInput(),s=new Array(l.length+1).join("-");return l+this.upcomingInput()+`
`+s+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var l,s,u,g,i;this._more||(this.yytext="",this.match="");for(var m=this._currentRules(),d=0;d<m.length&&(u=this._input.match(this.rules[m[d]]),!u||s&&!(u[0].length>s[0].length)||(s=u,g=d,this.options.flex));d++);return s?(i=s[0].match(/(?:\r\n?|\n).*/g),i&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length},this.yytext+=s[0],this.match+=s[0],this.matches=s,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(s[0].length),this.matched+=s[0],l=this.performAction.call(this,this.yy,this,m[g],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),l||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var l=this.next();return typeof l!="undefined"?l:this.lex()},begin:function(l){this.conditionStack.push(l)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(l){this.begin(l)}};return f.options={},f.performAction=function(l,s,u,g){function i(m,d){return s.yytext=s.yytext.substring(m,s.yyleng-d+m)}switch(u){case 0:if(s.yytext.slice(-2)==="\\\\"?(i(0,1),this.begin("mu")):s.yytext.slice(-1)==="\\"?(i(0,1),this.begin("emu")):this.begin("mu"),s.yytext)return 15;break;case 1:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),this.conditionStack[this.conditionStack.length-1]==="raw"?15:(i(5,9),"END_RAW_BLOCK");case 5:return 15;case 6:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:return this.popState(),44;case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:return 48;case 21:this.unput(s.yytext),this.popState(),this.begin("com");break;case 22:return this.popState(),14;case 23:return 48;case 24:return 73;case 25:return 72;case 26:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return s.yytext=i(1,2).replace(/\\"/g,'"'),80;case 32:return s.yytext=i(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:return 82;case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 41:return 72;case 42:return s.yytext=s.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},f.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],f.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},f}();return n.lexer=c,r.prototype=n,n.Parser=r,new r}();a.default=h,v.exports=a.default},function(v,a,h){"use strict";function r(){var i=arguments.length<=0||arguments[0]===void 0?{}:arguments[0];this.options=i}function n(i,m,d){m===void 0&&(m=i.length);var p=i[m-1],y=i[m-2];return p?p.type==="ContentStatement"?(y||!d?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(p.original):void 0:d}function c(i,m,d){m===void 0&&(m=-1);var p=i[m+1],y=i[m+2];return p?p.type==="ContentStatement"?(y||!d?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(p.original):void 0:d}function f(i,m,d){var p=i[m==null?0:m+1];if(p&&p.type==="ContentStatement"&&(d||!p.rightStripped)){var y=p.value;p.value=p.value.replace(d?/^\s+/:/^[ \t]*\r?\n?/,""),p.rightStripped=p.value!==y}}function l(i,m,d){var p=i[m==null?i.length-1:m-1];if(p&&p.type==="ContentStatement"&&(d||!p.leftStripped)){var y=p.value;return p.value=p.value.replace(d?/\s+$/:/[ \t]+$/,""),p.leftStripped=p.value!==y,p.leftStripped}}var s=h(1).default;a.__esModule=!0;var u=h(49),g=s(u);r.prototype=new g.default,r.prototype.Program=function(i){var m=!this.options.ignoreStandalone,d=!this.isRootSeen;this.isRootSeen=!0;for(var p=i.body,y=0,b=p.length;y<b;y++){var x=p[y],P=this.accept(x);if(P){var S=n(p,y,d),D=c(p,y,d),A=P.openStandalone&&S,T=P.closeStandalone&&D,C=P.inlineStandalone&&S&&D;P.close&&f(p,y,!0),P.open&&l(p,y,!0),m&&C&&(f(p,y),l(p,y)&&x.type==="PartialStatement"&&(x.indent=/([ \t]+$)/.exec(p[y-1].original)[1])),m&&A&&(f((x.program||x.inverse).body),l(p,y)),m&&T&&(f(p,y),l((x.inverse||x.program).body))}}return i},r.prototype.BlockStatement=r.prototype.DecoratorBlock=r.prototype.PartialBlockStatement=function(i){this.accept(i.program),this.accept(i.inverse);var m=i.program||i.inverse,d=i.program&&i.inverse,p=d,y=d;if(d&&d.chained)for(p=d.body[0].program;y.chained;)y=y.body[y.body.length-1].program;var b={open:i.openStrip.open,close:i.closeStrip.close,openStandalone:c(m.body),closeStandalone:n((p||m).body)};if(i.openStrip.close&&f(m.body,null,!0),d){var x=i.inverseStrip;x.open&&l(m.body,null,!0),x.close&&f(p.body,null,!0),i.closeStrip.open&&l(y.body,null,!0),!this.options.ignoreStandalone&&n(m.body)&&c(p.body)&&(l(m.body),f(p.body))}else i.closeStrip.open&&l(m.body,null,!0);return b},r.prototype.Decorator=r.prototype.MustacheStatement=function(i){return i.strip},r.prototype.PartialStatement=r.prototype.CommentStatement=function(i){var m=i.strip||{};return{inlineStandalone:!0,open:m.open,close:m.close}},a.default=r,v.exports=a.default},function(v,a,h){"use strict";function r(){this.parents=[]}function n(g){this.acceptRequired(g,"path"),this.acceptArray(g.params),this.acceptKey(g,"hash")}function c(g){n.call(this,g),this.acceptKey(g,"program"),this.acceptKey(g,"inverse")}function f(g){this.acceptRequired(g,"name"),this.acceptArray(g.params),this.acceptKey(g,"hash")}var l=h(1).default;a.__esModule=!0;var s=h(6),u=l(s);r.prototype={constructor:r,mutating:!1,acceptKey:function(g,i){var m=this.accept(g[i]);if(this.mutating){if(m&&!r.prototype[m.type])throw new u.default('Unexpected node type "'+m.type+'" found when accepting '+i+" on "+g.type);g[i]=m}},acceptRequired:function(g,i){if(this.acceptKey(g,i),!g[i])throw new u.default(g.type+" requires "+i)},acceptArray:function(g){for(var i=0,m=g.length;i<m;i++)this.acceptKey(g,i),g[i]||(g.splice(i,1),i--,m--)},accept:function(g){if(g){if(!this[g.type])throw new u.default("Unknown type: "+g.type,g);this.current&&this.parents.unshift(this.current),this.current=g;var i=this[g.type](g);return this.current=this.parents.shift(),!this.mutating||i?i:i!==!1?g:void 0}},Program:function(g){this.acceptArray(g.body)},MustacheStatement:n,Decorator:n,BlockStatement:c,DecoratorBlock:c,PartialStatement:f,PartialBlockStatement:function(g){f.call(this,g),this.acceptKey(g,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:n,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(g){this.acceptArray(g.pairs)},HashPair:function(g){this.acceptRequired(g,"value")}},a.default=r,v.exports=a.default},function(v,a,h){"use strict";function r(x,P){if(P=P.path?P.path.original:P,x.path.original!==P){var S={loc:x.path.loc};throw new b.default(x.path.original+" doesn't match "+P,S)}}function n(x,P){this.source=x,this.start={line:P.first_line,column:P.first_column},this.end={line:P.last_line,column:P.last_column}}function c(x){return/^\[.*\]$/.test(x)?x.substring(1,x.length-1):x}function f(x,P){return{open:x.charAt(2)==="~",close:P.charAt(P.length-3)==="~"}}function l(x){return x.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function s(x,P,S){S=this.locInfo(S);for(var D=x?"@":"",A=[],T=0,C=0,k=P.length;C<k;C++){var L=P[C].part,N=P[C].original!==L;if(D+=(P[C].separator||"")+L,N||L!==".."&&L!=="."&&L!=="this")A.push(L);else{if(A.length>0)throw new b.default("Invalid path: "+D,{loc:S});L===".."&&T++}}return{type:"PathExpression",data:x,depth:T,parts:A,original:D,loc:S}}function u(x,P,S,D,A,T){var C=D.charAt(3)||D.charAt(2),k=C!=="{"&&C!=="&",L=/\*/.test(D);return{type:L?"Decorator":"MustacheStatement",path:x,params:P,hash:S,escaped:k,strip:A,loc:this.locInfo(T)}}function g(x,P,S,D){r(x,S),D=this.locInfo(D);var A={type:"Program",body:P,strip:{},loc:D};return{type:"BlockStatement",path:x.path,params:x.params,hash:x.hash,program:A,openStrip:{},inverseStrip:{},closeStrip:{},loc:D}}function i(x,P,S,D,A,T){D&&D.path&&r(x,D);var C=/\*/.test(x.open);P.blockParams=x.blockParams;var k=void 0,L=void 0;if(S){if(C)throw new b.default("Unexpected inverse block on decorator",S);S.chain&&(S.program.body[0].closeStrip=D.strip),L=S.strip,k=S.program}return A&&(A=k,k=P,P=A),{type:C?"DecoratorBlock":"BlockStatement",path:x.path,params:x.params,hash:x.hash,program:P,inverse:k,openStrip:x.strip,inverseStrip:L,closeStrip:D&&D.strip,loc:this.locInfo(T)}}function m(x,P){if(!P&&x.length){var S=x[0].loc,D=x[x.length-1].loc;S&&D&&(P={source:S.source,start:{line:S.start.line,column:S.start.column},end:{line:D.end.line,column:D.end.column}})}return{type:"Program",body:x,strip:{},loc:P}}function d(x,P,S,D){return r(x,S),{type:"PartialBlockStatement",name:x.path,params:x.params,hash:x.hash,program:P,openStrip:x.strip,closeStrip:S&&S.strip,loc:this.locInfo(D)}}var p=h(1).default;a.__esModule=!0,a.SourceLocation=n,a.id=c,a.stripFlags=f,a.stripComment=l,a.preparePath=s,a.prepareMustache=u,a.prepareRawBlock=g,a.prepareBlock=i,a.prepareProgram=m,a.preparePartialBlock=d;var y=h(6),b=p(y)},function(v,a,h){"use strict";function r(){}function n(b,x,P){if(b==null||typeof b!="string"&&b.type!=="Program")throw new i.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+b);x=x||{},"data"in x||(x.data=!0),x.compat&&(x.useDepths=!0);var S=P.parse(b,x),D=new P.Compiler().compile(S,x);return new P.JavaScriptCompiler().compile(D,x)}function c(b,x,P){function S(){var T=P.parse(b,x),C=new P.Compiler().compile(T,x),k=new P.JavaScriptCompiler().compile(C,x,void 0,!0);return P.template(k)}function D(T,C){return A||(A=S()),A.call(this,T,C)}if(x===void 0&&(x={}),b==null||typeof b!="string"&&b.type!=="Program")throw new i.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+b);x=m.extend({},x),"data"in x||(x.data=!0),x.compat&&(x.useDepths=!0);var A=void 0;return D._setup=function(T){return A||(A=S()),A._setup(T)},D._child=function(T,C,k,L){return A||(A=S()),A._child(T,C,k,L)},D}function f(b,x){if(b===x)return!0;if(m.isArray(b)&&m.isArray(x)&&b.length===x.length){for(var P=0;P<b.length;P++)if(!f(b[P],x[P]))return!1;return!0}}function l(b){if(!b.path.parts){var x=b.path;b.path={type:"PathExpression",data:!1,depth:0,parts:[x.original+""],original:x.original+"",loc:x.loc}}}var s=h(34).default,u=h(1).default;a.__esModule=!0,a.Compiler=r,a.precompile=n,a.compile=c;var g=h(6),i=u(g),m=h(5),d=h(45),p=u(d),y=[].slice;r.prototype={compiler:r,equals:function(b){var x=this.opcodes.length;if(b.opcodes.length!==x)return!1;for(var P=0;P<x;P++){var S=this.opcodes[P],D=b.opcodes[P];if(S.opcode!==D.opcode||!f(S.args,D.args))return!1}x=this.children.length;for(var P=0;P<x;P++)if(!this.children[P].equals(b.children[P]))return!1;return!0},guid:0,compile:function(b,x){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=x,this.stringParams=x.stringParams,this.trackIds=x.trackIds,x.blockParams=x.blockParams||[],x.knownHelpers=m.extend(s(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},x.knownHelpers),this.accept(b)},compileProgram:function(b){var x=new this.compiler,P=x.compile(b,this.options),S=this.guid++;return this.usePartial=this.usePartial||P.usePartial,this.children[S]=P,this.useDepths=this.useDepths||P.useDepths,S},accept:function(b){if(!this[b.type])throw new i.default("Unknown type: "+b.type,b);this.sourceNode.unshift(b);var x=this[b.type](b);return this.sourceNode.shift(),x},Program:function(b){this.options.blockParams.unshift(b.blockParams);for(var x=b.body,P=x.length,S=0;S<P;S++)this.accept(x[S]);return this.options.blockParams.shift(),this.isSimple=P===1,this.blockParams=b.blockParams?b.blockParams.length:0,this},BlockStatement:function(b){l(b);var x=b.program,P=b.inverse;x=x&&this.compileProgram(x),P=P&&this.compileProgram(P);var S=this.classifySexpr(b);S==="helper"?this.helperSexpr(b,x,P):S==="simple"?(this.simpleSexpr(b),this.opcode("pushProgram",x),this.opcode("pushProgram",P),this.opcode("emptyHash"),this.opcode("blockValue",b.path.original)):(this.ambiguousSexpr(b,x,P),this.opcode("pushProgram",x),this.opcode("pushProgram",P),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(b){var x=b.program&&this.compileProgram(b.program),P=this.setupFullMustacheParams(b,x,void 0),S=b.path;this.useDecorators=!0,this.opcode("registerDecorator",P.length,S.original)},PartialStatement:function(b){this.usePartial=!0;var x=b.program;x&&(x=this.compileProgram(b.program));var P=b.params;if(P.length>1)throw new i.default("Unsupported number of partial arguments: "+P.length,b);P.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):P.push({type:"PathExpression",parts:[],depth:0}));var S=b.name.original,D=b.name.type==="SubExpression";D&&this.accept(b.name),this.setupFullMustacheParams(b,x,void 0,!0);var A=b.indent||"";this.options.preventIndent&&A&&(this.opcode("appendContent",A),A=""),this.opcode("invokePartial",D,S,A),this.opcode("append")},PartialBlockStatement:function(b){this.PartialStatement(b)},MustacheStatement:function(b){this.SubExpression(b),b.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(b){this.DecoratorBlock(b)},ContentStatement:function(b){b.value&&this.opcode("appendContent",b.value)},CommentStatement:function(){},SubExpression:function(b){l(b);var x=this.classifySexpr(b);x==="simple"?this.simpleSexpr(b):x==="helper"?this.helperSexpr(b):this.ambiguousSexpr(b)},ambiguousSexpr:function(b,x,P){var S=b.path,D=S.parts[0],A=x!=null||P!=null;this.opcode("getContext",S.depth),this.opcode("pushProgram",x),this.opcode("pushProgram",P),S.strict=!0,this.accept(S),this.opcode("invokeAmbiguous",D,A)},simpleSexpr:function(b){var x=b.path;x.strict=!0,this.accept(x),this.opcode("resolvePossibleLambda")},helperSexpr:function(b,x,P){var S=this.setupFullMustacheParams(b,x,P),D=b.path,A=D.parts[0];if(this.options.knownHelpers[A])this.opcode("invokeKnownHelper",S.length,A);else{if(this.options.knownHelpersOnly)throw new i.default("You specified knownHelpersOnly, but used the unknown helper "+A,b);D.strict=!0,D.falsy=!0,this.accept(D),this.opcode("invokeHelper",S.length,D.original,p.default.helpers.simpleId(D))}},PathExpression:function(b){this.addDepth(b.depth),this.opcode("getContext",b.depth);var x=b.parts[0],P=p.default.helpers.scopedId(b),S=!b.depth&&!P&&this.blockParamIndex(x);S?this.opcode("lookupBlockParam",S,b.parts):x?b.data?(this.options.data=!0,this.opcode("lookupData",b.depth,b.parts,b.strict)):this.opcode("lookupOnContext",b.parts,b.falsy,b.strict,P):this.opcode("pushContext")},StringLiteral:function(b){this.opcode("pushString",b.value)},NumberLiteral:function(b){this.opcode("pushLiteral",b.value)},BooleanLiteral:function(b){this.opcode("pushLiteral",b.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(b){var x=b.pairs,P=0,S=x.length;for(this.opcode("pushHash");P<S;P++)this.pushParam(x[P].value);for(;P--;)this.opcode("assignToHash",x[P].key);this.opcode("popHash")},opcode:function(b){this.opcodes.push({opcode:b,args:y.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(b){b&&(this.useDepths=!0)},classifySexpr:function(b){var x=p.default.helpers.simpleId(b.path),P=x&&!!this.blockParamIndex(b.path.parts[0]),S=!P&&p.default.helpers.helperExpression(b),D=!P&&(S||x);if(D&&!S){var A=b.path.parts[0],T=this.options;T.knownHelpers[A]?S=!0:T.knownHelpersOnly&&(D=!1)}return S?"helper":D?"ambiguous":"simple"},pushParams:function(b){for(var x=0,P=b.length;x<P;x++)this.pushParam(b[x])},pushParam:function(b){var x=b.value!=null?b.value:b.original||"";if(this.stringParams)x.replace&&(x=x.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),b.depth&&this.addDepth(b.depth),this.opcode("getContext",b.depth||0),this.opcode("pushStringParam",x,b.type),b.type==="SubExpression"&&this.accept(b);else{if(this.trackIds){var P=void 0;if(!b.parts||p.default.helpers.scopedId(b)||b.depth||(P=this.blockParamIndex(b.parts[0])),P){var S=b.parts.slice(1).join(".");this.opcode("pushId","BlockParam",P,S)}else x=b.original||x,x.replace&&(x=x.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",b.type,x)}this.accept(b)}},setupFullMustacheParams:function(b,x,P,S){var D=b.params;return this.pushParams(D),this.opcode("pushProgram",x),this.opcode("pushProgram",P),b.hash?this.accept(b.hash):this.opcode("emptyHash",S),D},blockParamIndex:function(b){for(var x=0,P=this.options.blockParams.length;x<P;x++){var S=this.options.blockParams[x],D=S&&m.indexOf(S,b);if(S&&D>=0)return[x,D]}}}},function(v,a,h){"use strict";function r(p){this.value=p}function n(){}function c(p,y,b,x){var P=y.popStack(),S=0,D=b.length;for(p&&D--;S<D;S++)P=y.nameLookup(P,b[S],x);return p?[y.aliasable("container.strict"),"(",P,", ",y.quotedString(b[S]),", ",JSON.stringify(y.source.currentLocation)," )"]:P}var f=h(13).default,l=h(1).default;a.__esModule=!0;var s=h(4),u=h(6),g=l(u),i=h(5),m=h(53),d=l(m);n.prototype={nameLookup:function(p,y){return this.internalNameLookup(p,y)},depthedLookup:function(p){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(p),")"]},compilerInfo:function(){var p=s.COMPILER_REVISION,y=s.REVISION_CHANGES[p];return[p,y]},appendToBuffer:function(p,y,b){return i.isArray(p)||(p=[p]),p=this.source.wrap(p,y),this.environment.isSimple?["return ",p,";"]:b?["buffer += ",p,";"]:(p.appendToBuffer=!0,p)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(p,y){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",p,",",JSON.stringify(y),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(p,y,b,x){this.environment=p,this.options=y,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!x,this.name=this.environment.name,this.isChild=!!b,this.context=b||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(p,y),this.useDepths=this.useDepths||p.useDepths||p.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||p.useBlockParams;var P=p.opcodes,S=void 0,D=void 0,A=void 0,T=void 0;for(A=0,T=P.length;A<T;A++)S=P[A],this.source.currentLocation=S.loc,D=D||S.loc,this[S.opcode].apply(this,S.args);if(this.source.currentLocation=D,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new g.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),`;
`]),this.decorators.push("return fn;"),x?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`),this.decorators.push(`}
`),this.decorators=this.decorators.merge()));var C=this.createFunctionContext(x);if(this.isChild)return C;var k={compiler:this.compilerInfo(),main:C};this.decorators&&(k.main_d=this.decorators,k.useDecorators=!0);var L=this.context,N=L.programs,B=L.decorators;for(A=0,T=N.length;A<T;A++)N[A]&&(k[A]=N[A],B[A]&&(k[A+"_d"]=B[A],k.useDecorators=!0));return this.environment.usePartial&&(k.usePartial=!0),this.options.data&&(k.useData=!0),this.useDepths&&(k.useDepths=!0),this.useBlockParams&&(k.useBlockParams=!0),this.options.compat&&(k.compat=!0),x?k.compilerOptions=this.options:(k.compiler=JSON.stringify(k.compiler),this.source.currentLocation={start:{line:1,column:0}},k=this.objectLiteral(k),y.srcName?(k=k.toStringWithSourceMap({file:y.destName}),k.map=k.map&&k.map.toString()):k=k.toString()),k},preamble:function(){this.lastContext=0,this.source=new d.default(this.options.srcName),this.decorators=new d.default(this.options.srcName)},createFunctionContext:function(p){var y=this,b="",x=this.stackVars.concat(this.registers.list);x.length>0&&(b+=", "+x.join(", "));var P=0;f(this.aliases).forEach(function(A){var T=y.aliases[A];T.children&&T.referenceCount>1&&(b+=", alias"+ ++P+"="+A,T.children[0]="alias"+P)}),this.lookupPropertyFunctionIsUsed&&(b+=", "+this.lookupPropertyFunctionVarDeclaration());var S=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&S.push("blockParams"),this.useDepths&&S.push("depths");var D=this.mergeSource(b);return p?(S.push(D),Function.apply(this,S)):this.source.wrap(["function(",S.join(","),`) {
  `,D,"}"])},mergeSource:function(p){var y=this.environment.isSimple,b=!this.forceBuffer,x=void 0,P=void 0,S=void 0,D=void 0;return this.source.each(function(A){A.appendToBuffer?(S?A.prepend("  + "):S=A,D=A):(S&&(P?S.prepend("buffer += "):x=!0,D.add(";"),S=D=void 0),P=!0,y||(b=!1))}),b?S?(S.prepend("return "),D.add(";")):P||this.source.push('return "";'):(p+=", buffer = "+(x?"":this.initializeBuffer()),S?(S.prepend("return buffer + "),D.add(";")):this.source.push("return buffer;")),p&&this.source.prepend("var "+p.substring(2)+(x?"":`;
`)),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return`
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim()},blockValue:function(p){var y=this.aliasable("container.hooks.blockHelperMissing"),b=[this.contextName(0)];this.setupHelperArgs(p,0,b);var x=this.popStack();b.splice(1,0,x),this.push(this.source.functionCall(y,"call",b))},ambiguousBlockValue:function(){var p=this.aliasable("container.hooks.blockHelperMissing"),y=[this.contextName(0)];this.setupHelperArgs("",0,y,!0),this.flushInline();var b=this.topStack();y.splice(1,0,b),this.pushSource(["if (!",this.lastHelper,") { ",b," = ",this.source.functionCall(p,"call",y),"}"])},appendContent:function(p){this.pendingContent?p=this.pendingContent+p:this.pendingLocation=this.source.currentLocation,this.pendingContent=p},append:function(){if(this.isInline())this.replaceStack(function(y){return[" != null ? ",y,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var p=this.popStack();this.pushSource(["if (",p," != null) { ",this.appendToBuffer(p,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(p){this.lastContext=p},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(p,y,b,x){var P=0;x||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(p[P++])),this.resolvePath("context",p,P,y,b)},lookupBlockParam:function(p,y){this.useBlockParams=!0,this.push(["blockParams[",p[0],"][",p[1],"]"]),this.resolvePath("context",y,1)},lookupData:function(p,y,b){p?this.pushStackLiteral("container.data(data, "+p+")"):this.pushStackLiteral("data"),this.resolvePath("data",y,0,!0,b)},resolvePath:function(p,y,b,x,P){var S=this;if(this.options.strict||this.options.assumeObjects)return void this.push(c(this.options.strict&&P,this,y,p));for(var D=y.length;b<D;b++)this.replaceStack(function(A){var T=S.nameLookup(A,y[b],p);return x?[" && ",T]:[" != null ? ",T," : ",A]})},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(p,y){this.pushContext(),this.pushString(y),y!=="SubExpression"&&(typeof p=="string"?this.pushString(p):this.pushStackLiteral(p))},emptyHash:function(p){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(p?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var p=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(p.ids)),this.stringParams&&(this.push(this.objectLiteral(p.contexts)),this.push(this.objectLiteral(p.types))),this.push(this.objectLiteral(p.values))},pushString:function(p){this.pushStackLiteral(this.quotedString(p))},pushLiteral:function(p){this.pushStackLiteral(p)},pushProgram:function(p){p!=null?this.pushStackLiteral(this.programExpression(p)):this.pushStackLiteral(null)},registerDecorator:function(p,y){var b=this.nameLookup("decorators",y,"decorator"),x=this.setupHelperArgs(y,p);this.decorators.push(["fn = ",this.decorators.functionCall(b,"",["fn","props","container",x])," || fn;"])},invokeHelper:function(p,y,b){var x=this.popStack(),P=this.setupHelper(p,y),S=[];b&&S.push(P.name),S.push(x),this.options.strict||S.push(this.aliasable("container.hooks.helperMissing"));var D=["(",this.itemsSeparatedBy(S,"||"),")"],A=this.source.functionCall(D,"call",P.callParams);this.push(A)},itemsSeparatedBy:function(p,y){var b=[];b.push(p[0]);for(var x=1;x<p.length;x++)b.push(y,p[x]);return b},invokeKnownHelper:function(p,y){var b=this.setupHelper(p,y);this.push(this.source.functionCall(b.name,"call",b.callParams))},invokeAmbiguous:function(p,y){this.useRegister("helper");var b=this.popStack();this.emptyHash();var x=this.setupHelper(0,p,y),P=this.lastHelper=this.nameLookup("helpers",p,"helper"),S=["(","(helper = ",P," || ",b,")"];this.options.strict||(S[0]="(helper = ",S.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",S,x.paramsInit?["),(",x.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",x.callParams)," : helper))"])},invokePartial:function(p,y,b){var x=[],P=this.setupParams(y,1,x);p&&(y=this.popStack(),delete P.name),b&&(P.indent=JSON.stringify(b)),P.helpers="helpers",P.partials="partials",P.decorators="container.decorators",p?x.unshift(y):x.unshift(this.nameLookup("partials",y,"partial")),this.options.compat&&(P.depths="depths"),P=this.objectLiteral(P),x.push(P),this.push(this.source.functionCall("container.invokePartial","",x))},assignToHash:function(p){var y=this.popStack(),b=void 0,x=void 0,P=void 0;this.trackIds&&(P=this.popStack()),this.stringParams&&(x=this.popStack(),b=this.popStack());var S=this.hash;b&&(S.contexts[p]=b),x&&(S.types[p]=x),P&&(S.ids[p]=P),S.values[p]=y},pushId:function(p,y,b){p==="BlockParam"?this.pushStackLiteral("blockParams["+y[0]+"].path["+y[1]+"]"+(b?" + "+JSON.stringify("."+b):"")):p==="PathExpression"?this.pushString(y):p==="SubExpression"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:n,compileChildren:function(p,y){for(var b=p.children,x=void 0,P=void 0,S=0,D=b.length;S<D;S++){x=b[S],P=new this.compiler;var A=this.matchExistingProgram(x);if(A==null){this.context.programs.push("");var T=this.context.programs.length;x.index=T,x.name="program"+T,this.context.programs[T]=P.compile(x,y,this.context,!this.precompile),this.context.decorators[T]=P.decorators,this.context.environments[T]=x,this.useDepths=this.useDepths||P.useDepths,this.useBlockParams=this.useBlockParams||P.useBlockParams,x.useDepths=this.useDepths,x.useBlockParams=this.useBlockParams}else x.index=A.index,x.name="program"+A.index,this.useDepths=this.useDepths||A.useDepths,this.useBlockParams=this.useBlockParams||A.useBlockParams}},matchExistingProgram:function(p){for(var y=0,b=this.context.environments.length;y<b;y++){var x=this.context.environments[y];if(x&&x.equals(p))return x}},programExpression:function(p){var y=this.environment.children[p],b=[y.index,"data",y.blockParams];return(this.useBlockParams||this.useDepths)&&b.push("blockParams"),this.useDepths&&b.push("depths"),"container.program("+b.join(", ")+")"},useRegister:function(p){this.registers[p]||(this.registers[p]=!0,this.registers.list.push(p))},push:function(p){return p instanceof r||(p=this.source.wrap(p)),this.inlineStack.push(p),p},pushStackLiteral:function(p){this.push(new r(p))},pushSource:function(p){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),p&&this.source.push(p)},replaceStack:function(p){var y=["("],b=void 0,x=void 0,P=void 0;if(!this.isInline())throw new g.default("replaceStack on non-inline");var S=this.popStack(!0);if(S instanceof r)b=[S.value],y=["(",b],P=!0;else{x=!0;var D=this.incrStack();y=["((",this.push(D)," = ",S,")"],b=this.topStack()}var A=p.call(this,b);P||this.popStack(),x&&this.stackSlot--,this.push(y.concat(A,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var p=this.inlineStack;this.inlineStack=[];for(var y=0,b=p.length;y<b;y++){var x=p[y];if(x instanceof r)this.compileStack.push(x);else{var P=this.incrStack();this.pushSource([P," = ",x,";"]),this.compileStack.push(P)}}},isInline:function(){return this.inlineStack.length},popStack:function(p){var y=this.isInline(),b=(y?this.inlineStack:this.compileStack).pop();if(!p&&b instanceof r)return b.value;if(!y){if(!this.stackSlot)throw new g.default("Invalid stack pop");this.stackSlot--}return b},topStack:function(){var p=this.isInline()?this.inlineStack:this.compileStack,y=p[p.length-1];return y instanceof r?y.value:y},contextName:function(p){return this.useDepths&&p?"depths["+p+"]":"depth"+p},quotedString:function(p){return this.source.quotedString(p)},objectLiteral:function(p){return this.source.objectLiteral(p)},aliasable:function(p){var y=this.aliases[p];return y?(y.referenceCount++,y):(y=this.aliases[p]=this.source.wrap(p),y.aliasable=!0,y.referenceCount=1,y)},setupHelper:function(p,y,b){var x=[],P=this.setupHelperArgs(y,p,x,b),S=this.nameLookup("helpers",y,"helper"),D=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})");return{params:x,paramsInit:P,name:S,callParams:[D].concat(x)}},setupParams:function(p,y,b){var x={},P=[],S=[],D=[],A=!b,T=void 0;A&&(b=[]),x.name=this.quotedString(p),x.hash=this.popStack(),this.trackIds&&(x.hashIds=this.popStack()),this.stringParams&&(x.hashTypes=this.popStack(),x.hashContexts=this.popStack());var C=this.popStack(),k=this.popStack();(k||C)&&(x.fn=k||"container.noop",x.inverse=C||"container.noop");for(var L=y;L--;)T=this.popStack(),b[L]=T,this.trackIds&&(D[L]=this.popStack()),this.stringParams&&(S[L]=this.popStack(),P[L]=this.popStack());return A&&(x.args=this.source.generateArray(b)),this.trackIds&&(x.ids=this.source.generateArray(D)),this.stringParams&&(x.types=this.source.generateArray(S),x.contexts=this.source.generateArray(P)),this.options.data&&(x.data="data"),this.useBlockParams&&(x.blockParams="blockParams"),x},setupHelperArgs:function(p,y,b,x){var P=this.setupParams(p,y,b);return P.loc=JSON.stringify(this.source.currentLocation),P=this.objectLiteral(P),x?(this.useRegister("options"),b.push("options"),["options=",P]):b?(b.push(P),""):P}},function(){for(var p="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),y=n.RESERVED_WORDS={},b=0,x=p.length;b<x;b++)y[p[b]]=!0}(),n.isValidJavaScriptVariableName=function(p){return!n.RESERVED_WORDS[p]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(p)},a.default=n,v.exports=a.default},function(v,a,h){"use strict";function r(s,u,g){if(f.isArray(s)){for(var i=[],m=0,d=s.length;m<d;m++)i.push(u.wrap(s[m],g));return i}return typeof s=="boolean"||typeof s=="number"?s+"":s}function n(s){this.srcFile=s,this.source=[]}var c=h(13).default;a.__esModule=!0;var f=h(5),l=void 0;try{}catch(s){}l||(l=function(s,u,g,i){this.src="",i&&this.add(i)},l.prototype={add:function(s){f.isArray(s)&&(s=s.join("")),this.src+=s},prepend:function(s){f.isArray(s)&&(s=s.join("")),this.src=s+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),n.prototype={isEmpty:function(){return!this.source.length},prepend:function(s,u){this.source.unshift(this.wrap(s,u))},push:function(s,u){this.source.push(this.wrap(s,u))},merge:function(){var s=this.empty();return this.each(function(u){s.add(["  ",u,`
`])}),s},each:function(s){for(var u=0,g=this.source.length;u<g;u++)s(this.source[u])},empty:function(){var s=this.currentLocation||{start:{}};return new l(s.start.line,s.start.column,this.srcFile)},wrap:function(s){var u=arguments.length<=1||arguments[1]===void 0?this.currentLocation||{start:{}}:arguments[1];return s instanceof l?s:(s=r(s,this,u),new l(u.start.line,u.start.column,this.srcFile,s))},functionCall:function(s,u,g){return g=this.generateList(g),this.wrap([s,u?"."+u+"(":"(",g,")"])},quotedString:function(s){return'"'+(s+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(s){var u=this,g=[];c(s).forEach(function(m){var d=r(s[m],u);d!=="undefined"&&g.push([u.quotedString(m),":",d])});var i=this.generateList(g);return i.prepend("{"),i.add("}"),i},generateList:function(s){for(var u=this.empty(),g=0,i=s.length;g<i;g++)g&&u.add(","),u.add(r(s[g],this));return u},generateArray:function(s){var u=this.generateList(s);return u.prepend("["),u.add("]"),u}},a.default=n,v.exports=a.default}])})},9414:(w,v,a)=>{var h;/*!
* Sizzle CSS Selector Engine v2.3.6
* https://sizzlejs.com/
*
* Copyright JS Foundation and other contributors
* Released under the MIT license
* https://js.foundation/
*
* Date: 2021-02-16
*/(function(r){var n,c,f,l,s,u,g,i,m,d,p,y,b,x,P,S,D,A,T,C="sizzle"+1*new Date,k=r.document,L=0,N=0,B=tn(),O=tn(),F=tn(),q=tn(),_=function(j,U){return j===U&&(p=!0),0},W={}.hasOwnProperty,H=[],$=H.pop,K=H.push,te=H.push,oe=H.slice,he=function(j,U){for(var G=0,re=j.length;G<re;G++)if(j[G]===U)return G;return-1},Q="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ve="[\\x20\\t\\r\\n\\f]",Ae="(?:\\\\[\\da-fA-F]{1,6}"+ve+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Ke="\\["+ve+"*("+Ae+")(?:"+ve+"*([*^$|!~]?=)"+ve+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Ae+"))|)"+ve+"*\\]",mt=":("+Ae+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Ke+")*)|.*)\\)|)",Rt=new RegExp(ve+"+","g"),Nt=new RegExp("^"+ve+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ve+"+$","g"),Lt=new RegExp("^"+ve+"*,"+ve+"*"),Wt=new RegExp("^"+ve+"*([>+~]|"+ve+")"+ve+"*"),ze=new RegExp(ve+"|>"),Mt=new RegExp(mt),Ve=new RegExp("^"+Ae+"$"),et={ID:new RegExp("^#("+Ae+")"),CLASS:new RegExp("^\\.("+Ae+")"),TAG:new RegExp("^("+Ae+"|[*])"),ATTR:new RegExp("^"+Ke),PSEUDO:new RegExp("^"+mt),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ve+"*(even|odd|(([+-]|)(\\d*)n|)"+ve+"*(?:([+-]|)"+ve+"*(\\d+)|))"+ve+"*\\)|)","i"),bool:new RegExp("^(?:"+Q+")$","i"),needsContext:new RegExp("^"+ve+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ve+"*((?:-\\d)?\\d*)"+ve+"*\\)|)(?=[^-]|$)","i")},Kt=/HTML$/i,Mn=/^(?:input|select|textarea|button)$/i,At=/^h\d$/i,$t=/^[^{]+\{\s*\[native \w/,bn=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,jt=/[+~]/,lt=new RegExp("\\\\[\\da-fA-F]{1,6}"+ve+"?|\\\\([^\\r\\n\\f])","g"),pt=function(j,U){var G="0x"+j.slice(1)-65536;return U||(G<0?String.fromCharCode(G+65536):String.fromCharCode(G>>10|55296,G&1023|56320))},Cn=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,nr=function(j,U){return U?j==="\0"?"\uFFFD":j.slice(0,-1)+"\\"+j.charCodeAt(j.length-1).toString(16)+" ":"\\"+j},en=function(){y()},br=ke(function(j){return j.disabled===!0&&j.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{te.apply(H=oe.call(k.childNodes),k.childNodes),H[k.childNodes.length].nodeType}catch(j){te={apply:H.length?function(U,G){K.apply(U,oe.call(G))}:function(U,G){for(var re=U.length,Y=0;U[re++]=G[Y++];);U.length=re-1}}}function tt(j,U,G,re){var Y,ie,ae,ye,Se,Be,Ie,_e=U&&U.ownerDocument,Ye=U?U.nodeType:9;if(G=G||[],typeof j!="string"||!j||Ye!==1&&Ye!==9&&Ye!==11)return G;if(!re&&(y(U),U=U||b,P)){if(Ye!==11&&(Se=bn.exec(j)))if(Y=Se[1]){if(Ye===9)if(ae=U.getElementById(Y)){if(ae.id===Y)return G.push(ae),G}else return G;else if(_e&&(ae=_e.getElementById(Y))&&T(U,ae)&&ae.id===Y)return G.push(ae),G}else{if(Se[2])return te.apply(G,U.getElementsByTagName(j)),G;if((Y=Se[3])&&c.getElementsByClassName&&U.getElementsByClassName)return te.apply(G,U.getElementsByClassName(Y)),G}if(c.qsa&&!q[j+" "]&&(!S||!S.test(j))&&(Ye!==1||U.nodeName.toLowerCase()!=="object")){if(Ie=j,_e=U,Ye===1&&(ze.test(j)||Wt.test(j))){for(_e=jt.test(j)&&xe(U.parentNode)||U,(_e!==U||!c.scope)&&((ye=U.getAttribute("id"))?ye=ye.replace(Cn,nr):U.setAttribute("id",ye=C)),Be=u(j),ie=Be.length;ie--;)Be[ie]=(ye?"#"+ye:":scope")+" "+Fe(Be[ie]);Ie=Be.join(",")}try{return te.apply(G,_e.querySelectorAll(Ie)),G}catch(ot){q(j,!0)}finally{ye===C&&U.removeAttribute("id")}}}return i(j.replace(Nt,"$1"),U,G,re)}function tn(){var j=[];function U(G,re){return j.push(G+" ")>f.cacheLength&&delete U[j.shift()],U[G+" "]=re}return U}function _t(j){return j[C]=!0,j}function pe(j){var U=b.createElement("fieldset");try{return!!j(U)}catch(G){return!1}finally{U.parentNode&&U.parentNode.removeChild(U),U=null}}function Z(j,U){for(var G=j.split("|"),re=G.length;re--;)f.attrHandle[G[re]]=U}function de(j,U){var G=U&&j,re=G&&j.nodeType===1&&U.nodeType===1&&j.sourceIndex-U.sourceIndex;if(re)return re;if(G){for(;G=G.nextSibling;)if(G===U)return-1}return j?1:-1}function Pe(j){return function(U){var G=U.nodeName.toLowerCase();return G==="input"&&U.type===j}}function ne(j){return function(U){var G=U.nodeName.toLowerCase();return(G==="input"||G==="button")&&U.type===j}}function me(j){return function(U){return"form"in U?U.parentNode&&U.disabled===!1?"label"in U?"label"in U.parentNode?U.parentNode.disabled===j:U.disabled===j:U.isDisabled===j||U.isDisabled!==!j&&br(U)===j:U.disabled===j:"label"in U?U.disabled===j:!1}}function fe(j){return _t(function(U){return U=+U,_t(function(G,re){for(var Y,ie=j([],G.length,U),ae=ie.length;ae--;)G[Y=ie[ae]]&&(G[Y]=!(re[Y]=G[Y]))})})}function xe(j){return j&&typeof j.getElementsByTagName!="undefined"&&j}c=tt.support={},s=tt.isXML=function(j){var U=j&&j.namespaceURI,G=j&&(j.ownerDocument||j).documentElement;return!Kt.test(U||G&&G.nodeName||"HTML")},y=tt.setDocument=function(j){var U,G,re=j?j.ownerDocument||j:k;return re==b||re.nodeType!==9||!re.documentElement||(b=re,x=b.documentElement,P=!s(b),k!=b&&(G=b.defaultView)&&G.top!==G&&(G.addEventListener?G.addEventListener("unload",en,!1):G.attachEvent&&G.attachEvent("onunload",en)),c.scope=pe(function(Y){return x.appendChild(Y).appendChild(b.createElement("div")),typeof Y.querySelectorAll!="undefined"&&!Y.querySelectorAll(":scope fieldset div").length}),c.attributes=pe(function(Y){return Y.className="i",!Y.getAttribute("className")}),c.getElementsByTagName=pe(function(Y){return Y.appendChild(b.createComment("")),!Y.getElementsByTagName("*").length}),c.getElementsByClassName=$t.test(b.getElementsByClassName),c.getById=pe(function(Y){return x.appendChild(Y).id=C,!b.getElementsByName||!b.getElementsByName(C).length}),c.getById?(f.filter.ID=function(Y){var ie=Y.replace(lt,pt);return function(ae){return ae.getAttribute("id")===ie}},f.find.ID=function(Y,ie){if(typeof ie.getElementById!="undefined"&&P){var ae=ie.getElementById(Y);return ae?[ae]:[]}}):(f.filter.ID=function(Y){var ie=Y.replace(lt,pt);return function(ae){var ye=typeof ae.getAttributeNode!="undefined"&&ae.getAttributeNode("id");return ye&&ye.value===ie}},f.find.ID=function(Y,ie){if(typeof ie.getElementById!="undefined"&&P){var ae,ye,Se,Be=ie.getElementById(Y);if(Be){if(ae=Be.getAttributeNode("id"),ae&&ae.value===Y)return[Be];for(Se=ie.getElementsByName(Y),ye=0;Be=Se[ye++];)if(ae=Be.getAttributeNode("id"),ae&&ae.value===Y)return[Be]}return[]}}),f.find.TAG=c.getElementsByTagName?function(Y,ie){if(typeof ie.getElementsByTagName!="undefined")return ie.getElementsByTagName(Y);if(c.qsa)return ie.querySelectorAll(Y)}:function(Y,ie){var ae,ye=[],Se=0,Be=ie.getElementsByTagName(Y);if(Y==="*"){for(;ae=Be[Se++];)ae.nodeType===1&&ye.push(ae);return ye}return Be},f.find.CLASS=c.getElementsByClassName&&function(Y,ie){if(typeof ie.getElementsByClassName!="undefined"&&P)return ie.getElementsByClassName(Y)},D=[],S=[],(c.qsa=$t.test(b.querySelectorAll))&&(pe(function(Y){var ie;x.appendChild(Y).innerHTML="<a id='"+C+"'></a><select id='"+C+"-\r\\' msallowcapture=''><option selected=''></option></select>",Y.querySelectorAll("[msallowcapture^='']").length&&S.push("[*^$]="+ve+`*(?:''|"")`),Y.querySelectorAll("[selected]").length||S.push("\\["+ve+"*(?:value|"+Q+")"),Y.querySelectorAll("[id~="+C+"-]").length||S.push("~="),ie=b.createElement("input"),ie.setAttribute("name",""),Y.appendChild(ie),Y.querySelectorAll("[name='']").length||S.push("\\["+ve+"*name"+ve+"*="+ve+`*(?:''|"")`),Y.querySelectorAll(":checked").length||S.push(":checked"),Y.querySelectorAll("a#"+C+"+*").length||S.push(".#.+[+~]"),Y.querySelectorAll("\\\f"),S.push("[\\r\\n\\f]")}),pe(function(Y){Y.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var ie=b.createElement("input");ie.setAttribute("type","hidden"),Y.appendChild(ie).setAttribute("name","D"),Y.querySelectorAll("[name=d]").length&&S.push("name"+ve+"*[*^$|!~]?="),Y.querySelectorAll(":enabled").length!==2&&S.push(":enabled",":disabled"),x.appendChild(Y).disabled=!0,Y.querySelectorAll(":disabled").length!==2&&S.push(":enabled",":disabled"),Y.querySelectorAll("*,:x"),S.push(",.*:")})),(c.matchesSelector=$t.test(A=x.matches||x.webkitMatchesSelector||x.mozMatchesSelector||x.oMatchesSelector||x.msMatchesSelector))&&pe(function(Y){c.disconnectedMatch=A.call(Y,"*"),A.call(Y,"[s!='']:x"),D.push("!=",mt)}),S=S.length&&new RegExp(S.join("|")),D=D.length&&new RegExp(D.join("|")),U=$t.test(x.compareDocumentPosition),T=U||$t.test(x.contains)?function(Y,ie){var ae=Y.nodeType===9?Y.documentElement:Y,ye=ie&&ie.parentNode;return Y===ye||!!(ye&&ye.nodeType===1&&(ae.contains?ae.contains(ye):Y.compareDocumentPosition&&Y.compareDocumentPosition(ye)&16))}:function(Y,ie){if(ie){for(;ie=ie.parentNode;)if(ie===Y)return!0}return!1},_=U?function(Y,ie){if(Y===ie)return p=!0,0;var ae=!Y.compareDocumentPosition-!ie.compareDocumentPosition;return ae||(ae=(Y.ownerDocument||Y)==(ie.ownerDocument||ie)?Y.compareDocumentPosition(ie):1,ae&1||!c.sortDetached&&ie.compareDocumentPosition(Y)===ae?Y==b||Y.ownerDocument==k&&T(k,Y)?-1:ie==b||ie.ownerDocument==k&&T(k,ie)?1:d?he(d,Y)-he(d,ie):0:ae&4?-1:1)}:function(Y,ie){if(Y===ie)return p=!0,0;var ae,ye=0,Se=Y.parentNode,Be=ie.parentNode,Ie=[Y],_e=[ie];if(!Se||!Be)return Y==b?-1:ie==b?1:Se?-1:Be?1:d?he(d,Y)-he(d,ie):0;if(Se===Be)return de(Y,ie);for(ae=Y;ae=ae.parentNode;)Ie.unshift(ae);for(ae=ie;ae=ae.parentNode;)_e.unshift(ae);for(;Ie[ye]===_e[ye];)ye++;return ye?de(Ie[ye],_e[ye]):Ie[ye]==k?-1:_e[ye]==k?1:0}),b},tt.matches=function(j,U){return tt(j,null,null,U)},tt.matchesSelector=function(j,U){if(y(j),c.matchesSelector&&P&&!q[U+" "]&&(!D||!D.test(U))&&(!S||!S.test(U)))try{var G=A.call(j,U);if(G||c.disconnectedMatch||j.document&&j.document.nodeType!==11)return G}catch(re){q(U,!0)}return tt(U,b,null,[j]).length>0},tt.contains=function(j,U){return(j.ownerDocument||j)!=b&&y(j),T(j,U)},tt.attr=function(j,U){(j.ownerDocument||j)!=b&&y(j);var G=f.attrHandle[U.toLowerCase()],re=G&&W.call(f.attrHandle,U.toLowerCase())?G(j,U,!P):void 0;return re!==void 0?re:c.attributes||!P?j.getAttribute(U):(re=j.getAttributeNode(U))&&re.specified?re.value:null},tt.escape=function(j){return(j+"").replace(Cn,nr)},tt.error=function(j){throw new Error("Syntax error, unrecognized expression: "+j)},tt.uniqueSort=function(j){var U,G=[],re=0,Y=0;if(p=!c.detectDuplicates,d=!c.sortStable&&j.slice(0),j.sort(_),p){for(;U=j[Y++];)U===j[Y]&&(re=G.push(Y));for(;re--;)j.splice(G[re],1)}return d=null,j},l=tt.getText=function(j){var U,G="",re=0,Y=j.nodeType;if(Y){if(Y===1||Y===9||Y===11){if(typeof j.textContent=="string")return j.textContent;for(j=j.firstChild;j;j=j.nextSibling)G+=l(j)}else if(Y===3||Y===4)return j.nodeValue}else for(;U=j[re++];)G+=l(U);return G},f=tt.selectors={cacheLength:50,createPseudo:_t,match:et,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(j){return j[1]=j[1].replace(lt,pt),j[3]=(j[3]||j[4]||j[5]||"").replace(lt,pt),j[2]==="~="&&(j[3]=" "+j[3]+" "),j.slice(0,4)},CHILD:function(j){return j[1]=j[1].toLowerCase(),j[1].slice(0,3)==="nth"?(j[3]||tt.error(j[0]),j[4]=+(j[4]?j[5]+(j[6]||1):2*(j[3]==="even"||j[3]==="odd")),j[5]=+(j[7]+j[8]||j[3]==="odd")):j[3]&&tt.error(j[0]),j},PSEUDO:function(j){var U,G=!j[6]&&j[2];return et.CHILD.test(j[0])?null:(j[3]?j[2]=j[4]||j[5]||"":G&&Mt.test(G)&&(U=u(G,!0))&&(U=G.indexOf(")",G.length-U)-G.length)&&(j[0]=j[0].slice(0,U),j[2]=G.slice(0,U)),j.slice(0,3))}},filter:{TAG:function(j){var U=j.replace(lt,pt).toLowerCase();return j==="*"?function(){return!0}:function(G){return G.nodeName&&G.nodeName.toLowerCase()===U}},CLASS:function(j){var U=B[j+" "];return U||(U=new RegExp("(^|"+ve+")"+j+"("+ve+"|$)"))&&B(j,function(G){return U.test(typeof G.className=="string"&&G.className||typeof G.getAttribute!="undefined"&&G.getAttribute("class")||"")})},ATTR:function(j,U,G){return function(re){var Y=tt.attr(re,j);return Y==null?U==="!=":U?(Y+="",U==="="?Y===G:U==="!="?Y!==G:U==="^="?G&&Y.indexOf(G)===0:U==="*="?G&&Y.indexOf(G)>-1:U==="$="?G&&Y.slice(-G.length)===G:U==="~="?(" "+Y.replace(Rt," ")+" ").indexOf(G)>-1:U==="|="?Y===G||Y.slice(0,G.length+1)===G+"-":!1):!0}},CHILD:function(j,U,G,re,Y){var ie=j.slice(0,3)!=="nth",ae=j.slice(-4)!=="last",ye=U==="of-type";return re===1&&Y===0?function(Se){return!!Se.parentNode}:function(Se,Be,Ie){var _e,Ye,ot,je,St,Ct,be=ie!==ae?"nextSibling":"previousSibling",ce=Se.parentNode,Ee=ye&&Se.nodeName.toLowerCase(),we=!Ie&&!ye,Re=!1;if(ce){if(ie){for(;be;){for(je=Se;je=je[be];)if(ye?je.nodeName.toLowerCase()===Ee:je.nodeType===1)return!1;Ct=be=j==="only"&&!Ct&&"nextSibling"}return!0}if(Ct=[ae?ce.firstChild:ce.lastChild],ae&&we){for(je=ce,ot=je[C]||(je[C]={}),Ye=ot[je.uniqueID]||(ot[je.uniqueID]={}),_e=Ye[j]||[],St=_e[0]===L&&_e[1],Re=St&&_e[2],je=St&&ce.childNodes[St];je=++St&&je&&je[be]||(Re=St=0)||Ct.pop();)if(je.nodeType===1&&++Re&&je===Se){Ye[j]=[L,St,Re];break}}else if(we&&(je=Se,ot=je[C]||(je[C]={}),Ye=ot[je.uniqueID]||(ot[je.uniqueID]={}),_e=Ye[j]||[],St=_e[0]===L&&_e[1],Re=St),Re===!1)for(;(je=++St&&je&&je[be]||(Re=St=0)||Ct.pop())&&!((ye?je.nodeName.toLowerCase()===Ee:je.nodeType===1)&&++Re&&(we&&(ot=je[C]||(je[C]={}),Ye=ot[je.uniqueID]||(ot[je.uniqueID]={}),Ye[j]=[L,Re]),je===Se)););return Re-=Y,Re===re||Re%re===0&&Re/re>=0}}},PSEUDO:function(j,U){var G,re=f.pseudos[j]||f.setFilters[j.toLowerCase()]||tt.error("unsupported pseudo: "+j);return re[C]?re(U):re.length>1?(G=[j,j,"",U],f.setFilters.hasOwnProperty(j.toLowerCase())?_t(function(Y,ie){for(var ae,ye=re(Y,U),Se=ye.length;Se--;)ae=he(Y,ye[Se]),Y[ae]=!(ie[ae]=ye[Se])}):function(Y){return re(Y,0,G)}):re}},pseudos:{not:_t(function(j){var U=[],G=[],re=g(j.replace(Nt,"$1"));return re[C]?_t(function(Y,ie,ae,ye){for(var Se,Be=re(Y,null,ye,[]),Ie=Y.length;Ie--;)(Se=Be[Ie])&&(Y[Ie]=!(ie[Ie]=Se))}):function(Y,ie,ae){return U[0]=Y,re(U,null,ae,G),U[0]=null,!G.pop()}}),has:_t(function(j){return function(U){return tt(j,U).length>0}}),contains:_t(function(j){return j=j.replace(lt,pt),function(U){return(U.textContent||l(U)).indexOf(j)>-1}}),lang:_t(function(j){return Ve.test(j||"")||tt.error("unsupported lang: "+j),j=j.replace(lt,pt).toLowerCase(),function(U){var G;do if(G=P?U.lang:U.getAttribute("xml:lang")||U.getAttribute("lang"))return G=G.toLowerCase(),G===j||G.indexOf(j+"-")===0;while((U=U.parentNode)&&U.nodeType===1);return!1}}),target:function(j){var U=r.location&&r.location.hash;return U&&U.slice(1)===j.id},root:function(j){return j===x},focus:function(j){return j===b.activeElement&&(!b.hasFocus||b.hasFocus())&&!!(j.type||j.href||~j.tabIndex)},enabled:me(!1),disabled:me(!0),checked:function(j){var U=j.nodeName.toLowerCase();return U==="input"&&!!j.checked||U==="option"&&!!j.selected},selected:function(j){return j.parentNode&&j.parentNode.selectedIndex,j.selected===!0},empty:function(j){for(j=j.firstChild;j;j=j.nextSibling)if(j.nodeType<6)return!1;return!0},parent:function(j){return!f.pseudos.empty(j)},header:function(j){return At.test(j.nodeName)},input:function(j){return Mn.test(j.nodeName)},button:function(j){var U=j.nodeName.toLowerCase();return U==="input"&&j.type==="button"||U==="button"},text:function(j){var U;return j.nodeName.toLowerCase()==="input"&&j.type==="text"&&((U=j.getAttribute("type"))==null||U.toLowerCase()==="text")},first:fe(function(){return[0]}),last:fe(function(j,U){return[U-1]}),eq:fe(function(j,U,G){return[G<0?G+U:G]}),even:fe(function(j,U){for(var G=0;G<U;G+=2)j.push(G);return j}),odd:fe(function(j,U){for(var G=1;G<U;G+=2)j.push(G);return j}),lt:fe(function(j,U,G){for(var re=G<0?G+U:G>U?U:G;--re>=0;)j.push(re);return j}),gt:fe(function(j,U,G){for(var re=G<0?G+U:G;++re<U;)j.push(re);return j})}},f.pseudos.nth=f.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})f.pseudos[n]=Pe(n);for(n in{submit:!0,reset:!0})f.pseudos[n]=ne(n);function Le(){}Le.prototype=f.filters=f.pseudos,f.setFilters=new Le,u=tt.tokenize=function(j,U){var G,re,Y,ie,ae,ye,Se,Be=O[j+" "];if(Be)return U?0:Be.slice(0);for(ae=j,ye=[],Se=f.preFilter;ae;){(!G||(re=Lt.exec(ae)))&&(re&&(ae=ae.slice(re[0].length)||ae),ye.push(Y=[])),G=!1,(re=Wt.exec(ae))&&(G=re.shift(),Y.push({value:G,type:re[0].replace(Nt," ")}),ae=ae.slice(G.length));for(ie in f.filter)(re=et[ie].exec(ae))&&(!Se[ie]||(re=Se[ie](re)))&&(G=re.shift(),Y.push({value:G,type:ie,matches:re}),ae=ae.slice(G.length));if(!G)break}return U?ae.length:ae?tt.error(j):O(j,ye).slice(0)};function Fe(j){for(var U=0,G=j.length,re="";U<G;U++)re+=j[U].value;return re}function ke(j,U,G){var re=U.dir,Y=U.next,ie=Y||re,ae=G&&ie==="parentNode",ye=N++;return U.first?function(Se,Be,Ie){for(;Se=Se[re];)if(Se.nodeType===1||ae)return j(Se,Be,Ie);return!1}:function(Se,Be,Ie){var _e,Ye,ot,je=[L,ye];if(Ie){for(;Se=Se[re];)if((Se.nodeType===1||ae)&&j(Se,Be,Ie))return!0}else for(;Se=Se[re];)if(Se.nodeType===1||ae)if(ot=Se[C]||(Se[C]={}),Ye=ot[Se.uniqueID]||(ot[Se.uniqueID]={}),Y&&Y===Se.nodeName.toLowerCase())Se=Se[re]||Se;else{if((_e=Ye[ie])&&_e[0]===L&&_e[1]===ye)return je[2]=_e[2];if(Ye[ie]=je,je[2]=j(Se,Be,Ie))return!0}return!1}}function De(j){return j.length>1?function(U,G,re){for(var Y=j.length;Y--;)if(!j[Y](U,G,re))return!1;return!0}:j[0]}function Me(j,U,G){for(var re=0,Y=U.length;re<Y;re++)tt(j,U[re],G);return G}function We(j,U,G,re,Y){for(var ie,ae=[],ye=0,Se=j.length,Be=U!=null;ye<Se;ye++)(ie=j[ye])&&(!G||G(ie,re,Y))&&(ae.push(ie),Be&&U.push(ye));return ae}function it(j,U,G,re,Y,ie){return re&&!re[C]&&(re=it(re)),Y&&!Y[C]&&(Y=it(Y,ie)),_t(function(ae,ye,Se,Be){var Ie,_e,Ye,ot=[],je=[],St=ye.length,Ct=ae||Me(U||"*",Se.nodeType?[Se]:Se,[]),be=j&&(ae||!U)?We(Ct,ot,j,Se,Be):Ct,ce=G?Y||(ae?j:St||re)?[]:ye:be;if(G&&G(be,ce,Se,Be),re)for(Ie=We(ce,je),re(Ie,[],Se,Be),_e=Ie.length;_e--;)(Ye=Ie[_e])&&(ce[je[_e]]=!(be[je[_e]]=Ye));if(ae){if(Y||j){if(Y){for(Ie=[],_e=ce.length;_e--;)(Ye=ce[_e])&&Ie.push(be[_e]=Ye);Y(null,ce=[],Ie,Be)}for(_e=ce.length;_e--;)(Ye=ce[_e])&&(Ie=Y?he(ae,Ye):ot[_e])>-1&&(ae[Ie]=!(ye[Ie]=Ye))}}else ce=We(ce===ye?ce.splice(St,ce.length):ce),Y?Y(null,ye,ce,Be):te.apply(ye,ce)})}function Pt(j){for(var U,G,re,Y=j.length,ie=f.relative[j[0].type],ae=ie||f.relative[" "],ye=ie?1:0,Se=ke(function(_e){return _e===U},ae,!0),Be=ke(function(_e){return he(U,_e)>-1},ae,!0),Ie=[function(_e,Ye,ot){var je=!ie&&(ot||Ye!==m)||((U=Ye).nodeType?Se(_e,Ye,ot):Be(_e,Ye,ot));return U=null,je}];ye<Y;ye++)if(G=f.relative[j[ye].type])Ie=[ke(De(Ie),G)];else{if(G=f.filter[j[ye].type].apply(null,j[ye].matches),G[C]){for(re=++ye;re<Y&&!f.relative[j[re].type];re++);return it(ye>1&&De(Ie),ye>1&&Fe(j.slice(0,ye-1).concat({value:j[ye-2].type===" "?"*":""})).replace(Nt,"$1"),G,ye<re&&Pt(j.slice(ye,re)),re<Y&&Pt(j=j.slice(re)),re<Y&&Fe(j))}Ie.push(G)}return De(Ie)}function Ge(j,U){var G=U.length>0,re=j.length>0,Y=function(ie,ae,ye,Se,Be){var Ie,_e,Ye,ot=0,je="0",St=ie&&[],Ct=[],be=m,ce=ie||re&&f.find.TAG("*",Be),Ee=L+=be==null?1:Math.random()||.1,we=ce.length;for(Be&&(m=ae==b||ae||Be);je!==we&&(Ie=ce[je])!=null;je++){if(re&&Ie){for(_e=0,!ae&&Ie.ownerDocument!=b&&(y(Ie),ye=!P);Ye=j[_e++];)if(Ye(Ie,ae||b,ye)){Se.push(Ie);break}Be&&(L=Ee)}G&&((Ie=!Ye&&Ie)&&ot--,ie&&St.push(Ie))}if(ot+=je,G&&je!==ot){for(_e=0;Ye=U[_e++];)Ye(St,Ct,ae,ye);if(ie){if(ot>0)for(;je--;)St[je]||Ct[je]||(Ct[je]=$.call(Se));Ct=We(Ct)}te.apply(Se,Ct),Be&&!ie&&Ct.length>0&&ot+U.length>1&&tt.uniqueSort(Se)}return Be&&(L=Ee,m=be),St};return G?_t(Y):Y}g=tt.compile=function(j,U){var G,re=[],Y=[],ie=F[j+" "];if(!ie){for(U||(U=u(j)),G=U.length;G--;)ie=Pt(U[G]),ie[C]?re.push(ie):Y.push(ie);ie=F(j,Ge(Y,re)),ie.selector=j}return ie},i=tt.select=function(j,U,G,re){var Y,ie,ae,ye,Se,Be=typeof j=="function"&&j,Ie=!re&&u(j=Be.selector||j);if(G=G||[],Ie.length===1){if(ie=Ie[0]=Ie[0].slice(0),ie.length>2&&(ae=ie[0]).type==="ID"&&U.nodeType===9&&P&&f.relative[ie[1].type]){if(U=(f.find.ID(ae.matches[0].replace(lt,pt),U)||[])[0],U)Be&&(U=U.parentNode);else return G;j=j.slice(ie.shift().value.length)}for(Y=et.needsContext.test(j)?0:ie.length;Y--&&(ae=ie[Y],!f.relative[ye=ae.type]);)if((Se=f.find[ye])&&(re=Se(ae.matches[0].replace(lt,pt),jt.test(ie[0].type)&&xe(U.parentNode)||U))){if(ie.splice(Y,1),j=re.length&&Fe(ie),!j)return te.apply(G,re),G;break}}return(Be||g(j,Ie))(re,U,!P,G,!U||jt.test(j)&&xe(U.parentNode)||U),G},c.sortStable=C.split("").sort(_).join("")===C,c.detectDuplicates=!!p,y(),c.sortDetached=pe(function(j){return j.compareDocumentPosition(b.createElement("fieldset"))&1}),pe(function(j){return j.innerHTML="<a href='#'></a>",j.firstChild.getAttribute("href")==="#"})||Z("type|href|height|width",function(j,U,G){if(!G)return j.getAttribute(U,U.toLowerCase()==="type"?1:2)}),(!c.attributes||!pe(function(j){return j.innerHTML="<input/>",j.firstChild.setAttribute("value",""),j.firstChild.getAttribute("value")===""}))&&Z("value",function(j,U,G){if(!G&&j.nodeName.toLowerCase()==="input")return j.defaultValue}),pe(function(j){return j.getAttribute("disabled")==null})||Z(Q,function(j,U,G){var re;if(!G)return j[U]===!0?U.toLowerCase():(re=j.getAttributeNode(U))&&re.specified?re.value:null});var vt=r.Sizzle;tt.noConflict=function(){return r.Sizzle===tt&&(r.Sizzle=vt),tt},h=function(){return tt}.call(v,a,v,w),h!==void 0&&(w.exports=h)})(window)},7178:(w,v,a)=>{var h,r;h=[a(8934),a(7792),a(2134),a(8663),a(454),a(6981),a(7661),a(8048),a(461),a(1045),a(6525),a(5385)],r=function(n,c,f,l,s,u,g){"use strict";var i=/%20/g,m=/#.*$/,d=/([?&])_=[^&]*/,p=/^(.*?):[ \t]*([^\r\n]*)$/mg,y=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,b=/^(?:GET|HEAD)$/,x=/^\/\//,P={},S={},D="*/".concat("*"),A=c.createElement("a");A.href=s.href;function T(B){return function(O,F){typeof O!="string"&&(F=O,O="*");var q,_=0,W=O.toLowerCase().match(l)||[];if(f(F))for(;q=W[_++];)q[0]==="+"?(q=q.slice(1)||"*",(B[q]=B[q]||[]).unshift(F)):(B[q]=B[q]||[]).push(F)}}function C(B,O,F,q){var _={},W=B===S;function H($){var K;return _[$]=!0,n.each(B[$]||[],function(te,oe){var he=oe(O,F,q);if(typeof he=="string"&&!W&&!_[he])return O.dataTypes.unshift(he),H(he),!1;if(W)return!(K=he)}),K}return H(O.dataTypes[0])||!_["*"]&&H("*")}function k(B,O){var F,q,_=n.ajaxSettings.flatOptions||{};for(F in O)O[F]!==void 0&&((_[F]?B:q||(q={}))[F]=O[F]);return q&&n.extend(!0,B,q),B}function L(B,O,F){for(var q,_,W,H,$=B.contents,K=B.dataTypes;K[0]==="*";)K.shift(),q===void 0&&(q=B.mimeType||O.getResponseHeader("Content-Type"));if(q){for(_ in $)if($[_]&&$[_].test(q)){K.unshift(_);break}}if(K[0]in F)W=K[0];else{for(_ in F){if(!K[0]||B.converters[_+" "+K[0]]){W=_;break}H||(H=_)}W=W||H}if(W)return W!==K[0]&&K.unshift(W),F[W]}function N(B,O,F,q){var _,W,H,$,K,te={},oe=B.dataTypes.slice();if(oe[1])for(H in B.converters)te[H.toLowerCase()]=B.converters[H];for(W=oe.shift();W;)if(B.responseFields[W]&&(F[B.responseFields[W]]=O),!K&&q&&B.dataFilter&&(O=B.dataFilter(O,B.dataType)),K=W,W=oe.shift(),W){if(W==="*")W=K;else if(K!=="*"&&K!==W){if(H=te[K+" "+W]||te["* "+W],!H){for(_ in te)if($=_.split(" "),$[1]===W&&(H=te[K+" "+$[0]]||te["* "+$[0]],H)){H===!0?H=te[_]:te[_]!==!0&&(W=$[0],oe.unshift($[1]));break}}if(H!==!0)if(H&&B.throws)O=H(O);else try{O=H(O)}catch(he){return{state:"parsererror",error:H?he:"No conversion from "+K+" to "+W}}}}return{state:"success",data:O}}return n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:s.href,type:"GET",isLocal:y.test(s.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":D,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(B,O){return O?k(k(B,n.ajaxSettings),O):k(n.ajaxSettings,B)},ajaxPrefilter:T(P),ajaxTransport:T(S),ajax:function(B,O){typeof B=="object"&&(O=B,B=void 0),O=O||{};var F,q,_,W,H,$,K,te,oe,he,Q=n.ajaxSetup({},O),ve=Q.context||Q,Ae=Q.context&&(ve.nodeType||ve.jquery)?n(ve):n.event,Ke=n.Deferred(),mt=n.Callbacks("once memory"),Rt=Q.statusCode||{},Nt={},Lt={},Wt="canceled",ze={readyState:0,getResponseHeader:function(Ve){var et;if(K){if(!W)for(W={};et=p.exec(_);)W[et[1].toLowerCase()+" "]=(W[et[1].toLowerCase()+" "]||[]).concat(et[2]);et=W[Ve.toLowerCase()+" "]}return et==null?null:et.join(", ")},getAllResponseHeaders:function(){return K?_:null},setRequestHeader:function(Ve,et){return K==null&&(Ve=Lt[Ve.toLowerCase()]=Lt[Ve.toLowerCase()]||Ve,Nt[Ve]=et),this},overrideMimeType:function(Ve){return K==null&&(Q.mimeType=Ve),this},statusCode:function(Ve){var et;if(Ve)if(K)ze.always(Ve[ze.status]);else for(et in Ve)Rt[et]=[Rt[et],Ve[et]];return this},abort:function(Ve){var et=Ve||Wt;return F&&F.abort(et),Mt(0,et),this}};if(Ke.promise(ze),Q.url=((B||Q.url||s.href)+"").replace(x,s.protocol+"//"),Q.type=O.method||O.type||Q.method||Q.type,Q.dataTypes=(Q.dataType||"*").toLowerCase().match(l)||[""],Q.crossDomain==null){$=c.createElement("a");try{$.href=Q.url,$.href=$.href,Q.crossDomain=A.protocol+"//"+A.host!=$.protocol+"//"+$.host}catch(Ve){Q.crossDomain=!0}}if(Q.data&&Q.processData&&typeof Q.data!="string"&&(Q.data=n.param(Q.data,Q.traditional)),C(P,Q,O,ze),K)return ze;te=n.event&&Q.global,te&&n.active++===0&&n.event.trigger("ajaxStart"),Q.type=Q.type.toUpperCase(),Q.hasContent=!b.test(Q.type),q=Q.url.replace(m,""),Q.hasContent?Q.data&&Q.processData&&(Q.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(Q.data=Q.data.replace(i,"+")):(he=Q.url.slice(q.length),Q.data&&(Q.processData||typeof Q.data=="string")&&(q+=(g.test(q)?"&":"?")+Q.data,delete Q.data),Q.cache===!1&&(q=q.replace(d,"$1"),he=(g.test(q)?"&":"?")+"_="+u.guid+++he),Q.url=q+he),Q.ifModified&&(n.lastModified[q]&&ze.setRequestHeader("If-Modified-Since",n.lastModified[q]),n.etag[q]&&ze.setRequestHeader("If-None-Match",n.etag[q])),(Q.data&&Q.hasContent&&Q.contentType!==!1||O.contentType)&&ze.setRequestHeader("Content-Type",Q.contentType),ze.setRequestHeader("Accept",Q.dataTypes[0]&&Q.accepts[Q.dataTypes[0]]?Q.accepts[Q.dataTypes[0]]+(Q.dataTypes[0]!=="*"?", "+D+"; q=0.01":""):Q.accepts["*"]);for(oe in Q.headers)ze.setRequestHeader(oe,Q.headers[oe]);if(Q.beforeSend&&(Q.beforeSend.call(ve,ze,Q)===!1||K))return ze.abort();if(Wt="abort",mt.add(Q.complete),ze.done(Q.success),ze.fail(Q.error),F=C(S,Q,O,ze),!F)Mt(-1,"No Transport");else{if(ze.readyState=1,te&&Ae.trigger("ajaxSend",[ze,Q]),K)return ze;Q.async&&Q.timeout>0&&(H=window.setTimeout(function(){ze.abort("timeout")},Q.timeout));try{K=!1,F.send(Nt,Mt)}catch(Ve){if(K)throw Ve;Mt(-1,Ve)}}function Mt(Ve,et,Kt,Mn){var At,$t,bn,jt,lt,pt=et;K||(K=!0,H&&window.clearTimeout(H),F=void 0,_=Mn||"",ze.readyState=Ve>0?4:0,At=Ve>=200&&Ve<300||Ve===304,Kt&&(jt=L(Q,ze,Kt)),!At&&n.inArray("script",Q.dataTypes)>-1&&n.inArray("json",Q.dataTypes)<0&&(Q.converters["text script"]=function(){}),jt=N(Q,jt,ze,At),At?(Q.ifModified&&(lt=ze.getResponseHeader("Last-Modified"),lt&&(n.lastModified[q]=lt),lt=ze.getResponseHeader("etag"),lt&&(n.etag[q]=lt)),Ve===204||Q.type==="HEAD"?pt="nocontent":Ve===304?pt="notmodified":(pt=jt.state,$t=jt.data,bn=jt.error,At=!bn)):(bn=pt,(Ve||!pt)&&(pt="error",Ve<0&&(Ve=0))),ze.status=Ve,ze.statusText=(et||pt)+"",At?Ke.resolveWith(ve,[$t,pt,ze]):Ke.rejectWith(ve,[ze,pt,bn]),ze.statusCode(Rt),Rt=void 0,te&&Ae.trigger(At?"ajaxSuccess":"ajaxError",[ze,Q,At?$t:bn]),mt.fireWith(ve,[ze,pt]),te&&(Ae.trigger("ajaxComplete",[ze,Q]),--n.active||n.event.trigger("ajaxStop")))}return ze},getJSON:function(B,O,F){return n.get(B,O,F,"json")},getScript:function(B,O){return n.get(B,void 0,O,"script")}}),n.each(["get","post"],function(B,O){n[O]=function(F,q,_,W){return f(q)&&(W=W||_,_=q,q=void 0),n.ajax(n.extend({url:F,type:O,dataType:W,data:q,success:_},n.isPlainObject(F)&&F))}}),n.ajaxPrefilter(function(B){var O;for(O in B.headers)O.toLowerCase()==="content-type"&&(B.contentType=B.headers[O]||"")}),n}.apply(v,h),r!==void 0&&(w.exports=r)},7533:(w,v,a)=>{var h,r;h=[a(8934),a(2134),a(6981),a(7661),a(7178)],r=function(n,c,f,l){"use strict";var s=[],u=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var g=s.pop()||n.expando+"_"+f.guid++;return this[g]=!0,g}}),n.ajaxPrefilter("json jsonp",function(g,i,m){var d,p,y,b=g.jsonp!==!1&&(u.test(g.url)?"url":typeof g.data=="string"&&(g.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&u.test(g.data)&&"data");if(b||g.dataTypes[0]==="jsonp")return d=g.jsonpCallback=c(g.jsonpCallback)?g.jsonpCallback():g.jsonpCallback,b?g[b]=g[b].replace(u,"$1"+d):g.jsonp!==!1&&(g.url+=(l.test(g.url)?"&":"?")+g.jsonp+"="+d),g.converters["script json"]=function(){return y||n.error(d+" was not called"),y[0]},g.dataTypes[0]="json",p=window[d],window[d]=function(){y=arguments},m.always(function(){p===void 0?n(window).removeProp(d):window[d]=p,g[d]&&(g.jsonpCallback=i.jsonpCallback,s.push(d)),y&&c(p)&&p(y[0]),y=p=void 0}),"script"})}.apply(v,h),r!==void 0&&(w.exports=r)},4581:(w,v,a)=>{var h,r;h=[a(8934),a(4552),a(2134),a(2889),a(7178),a(8482),a(2632),a(655)],r=function(n,c,f){"use strict";n.fn.load=function(l,s,u){var g,i,m,d=this,p=l.indexOf(" ");return p>-1&&(g=c(l.slice(p)),l=l.slice(0,p)),f(s)?(u=s,s=void 0):s&&typeof s=="object"&&(i="POST"),d.length>0&&n.ajax({url:l,type:i||"GET",dataType:"html",data:s}).done(function(y){m=arguments,d.html(g?n("<div>").append(n.parseHTML(y)).find(g):y)}).always(u&&function(y,b){d.each(function(){u.apply(this,m||[y.responseText,b,y])})}),this}}.apply(v,h),r!==void 0&&(w.exports=r)},5488:(w,v,a)=>{var h,r;h=[a(8934),a(7792),a(7178)],r=function(n,c){"use strict";n.ajaxPrefilter(function(f){f.crossDomain&&(f.contents.script=!1)}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(f){return n.globalEval(f),f}}}),n.ajaxPrefilter("script",function(f){f.cache===void 0&&(f.cache=!1),f.crossDomain&&(f.type="GET")}),n.ajaxTransport("script",function(f){if(f.crossDomain||f.scriptAttrs){var l,s;return{send:function(u,g){l=n("<script>").attr(f.scriptAttrs||{}).prop({charset:f.scriptCharset,src:f.url}).on("load error",s=function(i){l.remove(),s=null,i&&g(i.type==="error"?404:200,i.type)}),c.head.appendChild(l[0])},abort:function(){s&&s()}}}})}.apply(v,h),r!==void 0&&(w.exports=r)},454:(w,v,a)=>{var h;h=function(){"use strict";return window.location}.call(v,a,v,w),h!==void 0&&(w.exports=h)},6981:(w,v,a)=>{var h;h=function(){"use strict";return{guid:Date.now()}}.call(v,a,v,w),h!==void 0&&(w.exports=h)},7661:(w,v,a)=>{var h;h=function(){"use strict";return/\?/}.call(v,a,v,w),h!==void 0&&(w.exports=h)},8853:(w,v,a)=>{var h,r;h=[a(8934),a(9523),a(7178)],r=function(n,c){"use strict";n.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest}catch(s){}};var f={0:200,1223:204},l=n.ajaxSettings.xhr();c.cors=!!l&&"withCredentials"in l,c.ajax=l=!!l,n.ajaxTransport(function(s){var u,g;if(c.cors||l&&!s.crossDomain)return{send:function(i,m){var d,p=s.xhr();if(p.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(d in s.xhrFields)p[d]=s.xhrFields[d];s.mimeType&&p.overrideMimeType&&p.overrideMimeType(s.mimeType),!s.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");for(d in i)p.setRequestHeader(d,i[d]);u=function(y){return function(){u&&(u=g=p.onload=p.onerror=p.onabort=p.ontimeout=p.onreadystatechange=null,y==="abort"?p.abort():y==="error"?typeof p.status!="number"?m(0,"error"):m(p.status,p.statusText):m(f[p.status]||p.status,p.statusText,(p.responseType||"text")!=="text"||typeof p.responseText!="string"?{binary:p.response}:{text:p.responseText},p.getAllResponseHeaders()))}},p.onload=u(),g=p.onerror=p.ontimeout=u("error"),p.onabort!==void 0?p.onabort=g:p.onreadystatechange=function(){p.readyState===4&&window.setTimeout(function(){u&&g()})},u=u("abort");try{p.send(s.hasContent&&s.data||null)}catch(y){if(u)throw y}},abort:function(){u&&u()}}})}.apply(v,h),r!==void 0&&(w.exports=r)},8468:(w,v,a)=>{var h,r;h=[a(8934),a(2853),a(4043),a(4015),a(4580)],r=function(n){"use strict";return n}.apply(v,h),r!==void 0&&(w.exports=r)},2853:(w,v,a)=>{var h,r;h=[a(8934),a(7163),a(7060),a(2941),a(8663),a(655)],r=function(n,c,f,l,s){"use strict";var u,g=n.expr.attrHandle;n.fn.extend({attr:function(i,m){return c(this,n.attr,i,m,arguments.length>1)},removeAttr:function(i){return this.each(function(){n.removeAttr(this,i)})}}),n.extend({attr:function(i,m,d){var p,y,b=i.nodeType;if(!(b===3||b===8||b===2)){if(typeof i.getAttribute=="undefined")return n.prop(i,m,d);if((b!==1||!n.isXMLDoc(i))&&(y=n.attrHooks[m.toLowerCase()]||(n.expr.match.bool.test(m)?u:void 0)),d!==void 0){if(d===null){n.removeAttr(i,m);return}return y&&"set"in y&&(p=y.set(i,d,m))!==void 0?p:(i.setAttribute(m,d+""),d)}return y&&"get"in y&&(p=y.get(i,m))!==null?p:(p=n.find.attr(i,m),p==null?void 0:p)}},attrHooks:{type:{set:function(i,m){if(!l.radioValue&&m==="radio"&&f(i,"input")){var d=i.value;return i.setAttribute("type",m),d&&(i.value=d),m}}}},removeAttr:function(i,m){var d,p=0,y=m&&m.match(s);if(y&&i.nodeType===1)for(;d=y[p++];)i.removeAttribute(d)}}),u={set:function(i,m,d){return m===!1?n.removeAttr(i,d):i.setAttribute(d,d),d}},n.each(n.expr.match.bool.source.match(/\w+/g),function(i,m){var d=g[m]||n.find.attr;g[m]=function(p,y,b){var x,P,S=y.toLowerCase();return b||(P=g[S],g[S]=x,x=d(p,y,b)!=null?S:null,g[S]=P),x}})}.apply(v,h),r!==void 0&&(w.exports=r)},4015:(w,v,a)=>{var h,r;h=[a(8934),a(4552),a(2134),a(8663),a(9081),a(8048)],r=function(n,c,f,l,s){"use strict";function u(i){return i.getAttribute&&i.getAttribute("class")||""}function g(i){return Array.isArray(i)?i:typeof i=="string"?i.match(l)||[]:[]}n.fn.extend({addClass:function(i){var m,d,p,y,b,x,P,S=0;if(f(i))return this.each(function(D){n(this).addClass(i.call(this,D,u(this)))});if(m=g(i),m.length){for(;d=this[S++];)if(y=u(d),p=d.nodeType===1&&" "+c(y)+" ",p){for(x=0;b=m[x++];)p.indexOf(" "+b+" ")<0&&(p+=b+" ");P=c(p),y!==P&&d.setAttribute("class",P)}}return this},removeClass:function(i){var m,d,p,y,b,x,P,S=0;if(f(i))return this.each(function(D){n(this).removeClass(i.call(this,D,u(this)))});if(!arguments.length)return this.attr("class","");if(m=g(i),m.length){for(;d=this[S++];)if(y=u(d),p=d.nodeType===1&&" "+c(y)+" ",p){for(x=0;b=m[x++];)for(;p.indexOf(" "+b+" ")>-1;)p=p.replace(" "+b+" "," ");P=c(p),y!==P&&d.setAttribute("class",P)}}return this},toggleClass:function(i,m){var d=typeof i,p=d==="string"||Array.isArray(i);return typeof m=="boolean"&&p?m?this.addClass(i):this.removeClass(i):f(i)?this.each(function(y){n(this).toggleClass(i.call(this,y,u(this),m),m)}):this.each(function(){var y,b,x,P;if(p)for(b=0,x=n(this),P=g(i);y=P[b++];)x.hasClass(y)?x.removeClass(y):x.addClass(y);else(i===void 0||d==="boolean")&&(y=u(this),y&&s.set(this,"__className__",y),this.setAttribute&&this.setAttribute("class",y||i===!1?"":s.get(this,"__className__")||""))})},hasClass:function(i){var m,d,p=0;for(m=" "+i+" ";d=this[p++];)if(d.nodeType===1&&(" "+c(u(d))+" ").indexOf(m)>-1)return!0;return!1}})}.apply(v,h),r!==void 0&&(w.exports=r)},4043:(w,v,a)=>{var h,r;h=[a(8934),a(7163),a(2941),a(655)],r=function(n,c,f){"use strict";var l=/^(?:input|select|textarea|button)$/i,s=/^(?:a|area)$/i;n.fn.extend({prop:function(u,g){return c(this,n.prop,u,g,arguments.length>1)},removeProp:function(u){return this.each(function(){delete this[n.propFix[u]||u]})}}),n.extend({prop:function(u,g,i){var m,d,p=u.nodeType;if(!(p===3||p===8||p===2))return(p!==1||!n.isXMLDoc(u))&&(g=n.propFix[g]||g,d=n.propHooks[g]),i!==void 0?d&&"set"in d&&(m=d.set(u,i,g))!==void 0?m:u[g]=i:d&&"get"in d&&(m=d.get(u,g))!==null?m:u[g]},propHooks:{tabIndex:{get:function(u){var g=n.find.attr(u,"tabindex");return g?parseInt(g,10):l.test(u.nodeName)||s.test(u.nodeName)&&u.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),f.optSelected||(n.propHooks.selected={get:function(u){var g=u.parentNode;return g&&g.parentNode&&g.parentNode.selectedIndex,null},set:function(u){var g=u.parentNode;g&&(g.selectedIndex,g.parentNode&&g.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this})}.apply(v,h),r!==void 0&&(w.exports=r)},2941:(w,v,a)=>{var h,r;h=[a(7792),a(9523)],r=function(n,c){"use strict";return function(){var f=n.createElement("input"),l=n.createElement("select"),s=l.appendChild(n.createElement("option"));f.type="checkbox",c.checkOn=f.value!=="",c.optSelected=s.selected,f=n.createElement("input"),f.value="t",f.type="radio",c.radioValue=f.value==="t"}(),c}.apply(v,h),r!==void 0&&(w.exports=r)},4580:(w,v,a)=>{var h,r;h=[a(8934),a(4552),a(2941),a(7060),a(2134),a(8048)],r=function(n,c,f,l,s){"use strict";var u=/\r/g;n.fn.extend({val:function(g){var i,m,d,p=this[0];return arguments.length?(d=s(g),this.each(function(y){var b;this.nodeType===1&&(d?b=g.call(this,y,n(this).val()):b=g,b==null?b="":typeof b=="number"?b+="":Array.isArray(b)&&(b=n.map(b,function(x){return x==null?"":x+""})),i=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],(!i||!("set"in i)||i.set(this,b,"value")===void 0)&&(this.value=b))})):p?(i=n.valHooks[p.type]||n.valHooks[p.nodeName.toLowerCase()],i&&"get"in i&&(m=i.get(p,"value"))!==void 0?m:(m=p.value,typeof m=="string"?m.replace(u,""):m==null?"":m)):void 0}}),n.extend({valHooks:{option:{get:function(g){var i=n.find.attr(g,"value");return i!=null?i:c(n.text(g))}},select:{get:function(g){var i,m,d,p=g.options,y=g.selectedIndex,b=g.type==="select-one",x=b?null:[],P=b?y+1:p.length;for(y<0?d=P:d=b?y:0;d<P;d++)if(m=p[d],(m.selected||d===y)&&!m.disabled&&(!m.parentNode.disabled||!l(m.parentNode,"optgroup"))){if(i=n(m).val(),b)return i;x.push(i)}return x},set:function(g,i){for(var m,d,p=g.options,y=n.makeArray(i),b=p.length;b--;)d=p[b],(d.selected=n.inArray(n.valHooks.option.get(d),y)>-1)&&(m=!0);return m||(g.selectedIndex=-1),y}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(g,i){if(Array.isArray(i))return g.checked=n.inArray(n(g).val(),i)>-1}},f.checkOn||(n.valHooks[this].get=function(g){return g.getAttribute("value")===null?"on":g.value})})}.apply(v,h),r!==void 0&&(w.exports=r)},8924:(w,v,a)=>{var h,r;h=[a(8934),a(8082),a(2134),a(8663)],r=function(n,c,f,l){"use strict";function s(u){var g={};return n.each(u.match(l)||[],function(i,m){g[m]=!0}),g}return n.Callbacks=function(u){u=typeof u=="string"?s(u):n.extend({},u);var g,i,m,d,p=[],y=[],b=-1,x=function(){for(d=d||u.once,m=g=!0;y.length;b=-1)for(i=y.shift();++b<p.length;)p[b].apply(i[0],i[1])===!1&&u.stopOnFalse&&(b=p.length,i=!1);u.memory||(i=!1),g=!1,d&&(i?p=[]:p="")},P={add:function(){return p&&(i&&!g&&(b=p.length-1,y.push(i)),function S(D){n.each(D,function(A,T){f(T)?(!u.unique||!P.has(T))&&p.push(T):T&&T.length&&c(T)!=="string"&&S(T)})}(arguments),i&&!g&&x()),this},remove:function(){return n.each(arguments,function(S,D){for(var A;(A=n.inArray(D,p,A))>-1;)p.splice(A,1),A<=b&&b--}),this},has:function(S){return S?n.inArray(S,p)>-1:p.length>0},empty:function(){return p&&(p=[]),this},disable:function(){return d=y=[],p=i="",this},disabled:function(){return!p},lock:function(){return d=y=[],!i&&!g&&(p=i=""),this},locked:function(){return!!d},fireWith:function(S,D){return d||(D=D||[],D=[S,D.slice?D.slice():D],y.push(D),g||x()),this},fire:function(){return P.fireWith(this,arguments),this},fired:function(){return!!m}};return P},n}.apply(v,h),r!==void 0&&(w.exports=r)},8934:(w,v,a)=>{var h,r;h=[a(3727),a(8045),a(3623),a(3932),a(1780),a(5431),a(5949),a(7763),a(9694),a(4194),a(3),a(9523),a(2134),a(9031),a(1224),a(8082)],r=function(n,c,f,l,s,u,g,i,m,d,p,y,b,x,P,S){"use strict";var D="3.6.0",A=function(C,k){return new A.fn.init(C,k)};A.fn=A.prototype={jquery:D,constructor:A,length:0,toArray:function(){return f.call(this)},get:function(C){return C==null?f.call(this):C<0?this[C+this.length]:this[C]},pushStack:function(C){var k=A.merge(this.constructor(),C);return k.prevObject=this,k},each:function(C){return A.each(this,C)},map:function(C){return this.pushStack(A.map(this,function(k,L){return C.call(k,L,k)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(A.grep(this,function(C,k){return(k+1)%2}))},odd:function(){return this.pushStack(A.grep(this,function(C,k){return k%2}))},eq:function(C){var k=this.length,L=+C+(C<0?k:0);return this.pushStack(L>=0&&L<k?[this[L]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},A.extend=A.fn.extend=function(){var C,k,L,N,B,O,F=arguments[0]||{},q=1,_=arguments.length,W=!1;for(typeof F=="boolean"&&(W=F,F=arguments[q]||{},q++),typeof F!="object"&&!b(F)&&(F={}),q===_&&(F=this,q--);q<_;q++)if((C=arguments[q])!=null)for(k in C)N=C[k],!(k==="__proto__"||F===N)&&(W&&N&&(A.isPlainObject(N)||(B=Array.isArray(N)))?(L=F[k],B&&!Array.isArray(L)?O=[]:!B&&!A.isPlainObject(L)?O={}:O=L,B=!1,F[k]=A.extend(W,O,N)):N!==void 0&&(F[k]=N));return F},A.extend({expando:"jQuery"+(D+Math.random()).replace(/\D/g,""),isReady:!0,error:function(C){throw new Error(C)},noop:function(){},isPlainObject:function(C){var k,L;return!C||i.call(C)!=="[object Object]"?!1:(k=c(C),k?(L=m.call(k,"constructor")&&k.constructor,typeof L=="function"&&d.call(L)===p):!0)},isEmptyObject:function(C){var k;for(k in C)return!1;return!0},globalEval:function(C,k,L){P(C,{nonce:k&&k.nonce},L)},each:function(C,k){var L,N=0;if(T(C))for(L=C.length;N<L&&k.call(C[N],N,C[N])!==!1;N++);else for(N in C)if(k.call(C[N],N,C[N])===!1)break;return C},makeArray:function(C,k){var L=k||[];return C!=null&&(T(Object(C))?A.merge(L,typeof C=="string"?[C]:C):s.call(L,C)),L},inArray:function(C,k,L){return k==null?-1:u.call(k,C,L)},merge:function(C,k){for(var L=+k.length,N=0,B=C.length;N<L;N++)C[B++]=k[N];return C.length=B,C},grep:function(C,k,L){for(var N,B=[],O=0,F=C.length,q=!L;O<F;O++)N=!k(C[O],O),N!==q&&B.push(C[O]);return B},map:function(C,k,L){var N,B,O=0,F=[];if(T(C))for(N=C.length;O<N;O++)B=k(C[O],O,L),B!=null&&F.push(B);else for(O in C)B=k(C[O],O,L),B!=null&&F.push(B);return l(F)},guid:1,support:y}),typeof Symbol=="function"&&(A.fn[Symbol.iterator]=n[Symbol.iterator]),A.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(C,k){g["[object "+k+"]"]=k.toLowerCase()});function T(C){var k=!!C&&"length"in C&&C.length,L=S(C);return b(C)||x(C)?!1:L==="array"||k===0||typeof k=="number"&&k>0&&k-1 in C}return A}.apply(v,h),r!==void 0&&(w.exports=r)},1224:(w,v,a)=>{var h,r;h=[a(7792)],r=function(n){"use strict";var c={type:!0,src:!0,nonce:!0,noModule:!0};function f(l,s,u){u=u||n;var g,i,m=u.createElement("script");if(m.text=l,s)for(g in c)i=s[g]||s.getAttribute&&s.getAttribute(g),i&&m.setAttribute(g,i);u.head.appendChild(m).parentNode.removeChild(m)}return f}.apply(v,h),r!==void 0&&(w.exports=r)},7163:(w,v,a)=>{var h,r;h=[a(8934),a(8082),a(2134)],r=function(n,c,f){"use strict";var l=function(s,u,g,i,m,d,p){var y=0,b=s.length,x=g==null;if(c(g)==="object"){m=!0;for(y in g)l(s,u,y,g[y],!0,d,p)}else if(i!==void 0&&(m=!0,f(i)||(p=!0),x&&(p?(u.call(s,i),u=null):(x=u,u=function(P,S,D){return x.call(n(P),D)})),u))for(;y<b;y++)u(s[y],g,p?i:i.call(s[y],y,u(s[y],g)));return m?s:x?u.call(s):b?u(s[0],g):d};return l}.apply(v,h),r!==void 0&&(w.exports=r)},1133:(w,v)=>{var a,h;a=[],h=function(){"use strict";var r=/^-ms-/,n=/-([a-z])/g;function c(l,s){return s.toUpperCase()}function f(l){return l.replace(r,"ms-").replace(n,c)}return f}.apply(v,a),h!==void 0&&(w.exports=h)},8048:(w,v,a)=>{var h,r;h=[a(8934),a(7792),a(2134),a(5250),a(1764)],r=function(n,c,f,l){"use strict";var s,u=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,g=n.fn.init=function(i,m,d){var p,y;if(!i)return this;if(d=d||s,typeof i=="string")if(i[0]==="<"&&i[i.length-1]===">"&&i.length>=3?p=[null,i,null]:p=u.exec(i),p&&(p[1]||!m))if(p[1]){if(m=m instanceof n?m[0]:m,n.merge(this,n.parseHTML(p[1],m&&m.nodeType?m.ownerDocument||m:c,!0)),l.test(p[1])&&n.isPlainObject(m))for(p in m)f(this[p])?this[p](m[p]):this.attr(p,m[p]);return this}else return y=c.getElementById(p[2]),y&&(this[0]=y,this.length=1),this;else return!m||m.jquery?(m||d).find(i):this.constructor(m).find(i);else{if(i.nodeType)return this[0]=i,this.length=1,this;if(f(i))return d.ready!==void 0?d.ready(i):i(n)}return n.makeArray(i,this)};return g.prototype=n.fn,s=n(c),g}.apply(v,h),r!==void 0&&(w.exports=r)},70:(w,v,a)=>{var h,r;h=[a(8934),a(7730),a(655)],r=function(n,c){"use strict";var f=function(s){return n.contains(s.ownerDocument,s)},l={composed:!0};return c.getRootNode&&(f=function(s){return n.contains(s.ownerDocument,s)||s.getRootNode(l)===s.ownerDocument}),f}.apply(v,h),r!==void 0&&(w.exports=r)},7060:(w,v,a)=>{var h;h=function(){"use strict";function r(n,c){return n.nodeName&&n.nodeName.toLowerCase()===c.toLowerCase()}return r}.call(v,a,v,w),h!==void 0&&(w.exports=h)},2889:(w,v,a)=>{var h,r;h=[a(8934),a(7792),a(5250),a(3360),a(1622)],r=function(n,c,f,l,s){"use strict";return n.parseHTML=function(u,g,i){if(typeof u!="string")return[];typeof g=="boolean"&&(i=g,g=!1);var m,d,p;return g||(s.createHTMLDocument?(g=c.implementation.createHTMLDocument(""),m=g.createElement("base"),m.href=c.location.href,g.head.appendChild(m)):g=c),d=f.exec(u),p=!i&&[],d?[g.createElement(d[1])]:(d=l([u],g,p),p&&p.length&&n(p).remove(),n.merge([],d.childNodes))},n.parseHTML}.apply(v,h),r!==void 0&&(w.exports=r)},461:(w,v,a)=>{var h,r;h=[a(8934)],r=function(n){"use strict";return n.parseXML=function(c){var f,l;if(!c||typeof c!="string")return null;try{f=new window.DOMParser().parseFromString(c,"text/xml")}catch(s){}return l=f&&f.getElementsByTagName("parsererror")[0],(!f||l)&&n.error("Invalid XML: "+(l?n.map(l.childNodes,function(s){return s.textContent}).join(`
`):c)),f},n.parseXML}.apply(v,h),r!==void 0&&(w.exports=r)},5703:(w,v,a)=>{var h,r;h=[a(8934),a(7792),a(3442),a(6525)],r=function(n,c){"use strict";var f=n.Deferred();n.fn.ready=function(s){return f.then(s).catch(function(u){n.readyException(u)}),this},n.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--n.readyWait:n.isReady)||(n.isReady=!0,!(s!==!0&&--n.readyWait>0)&&f.resolveWith(c,[n]))}}),n.ready.then=f.then;function l(){c.removeEventListener("DOMContentLoaded",l),window.removeEventListener("load",l),n.ready()}c.readyState==="complete"||c.readyState!=="loading"&&!c.documentElement.doScroll?window.setTimeout(n.ready):(c.addEventListener("DOMContentLoaded",l),window.addEventListener("load",l))}.apply(v,h),r!==void 0&&(w.exports=r)},3442:(w,v,a)=>{var h,r;h=[a(8934)],r=function(n){"use strict";n.readyException=function(c){window.setTimeout(function(){throw c})}}.apply(v,h),r!==void 0&&(w.exports=r)},4552:(w,v,a)=>{var h,r;h=[a(8663)],r=function(n){"use strict";function c(f){var l=f.match(n)||[];return l.join(" ")}return c}.apply(v,h),r!==void 0&&(w.exports=r)},1622:(w,v,a)=>{var h,r;h=[a(7792),a(9523)],r=function(n,c){"use strict";return c.createHTMLDocument=function(){var f=n.implementation.createHTMLDocument("").body;return f.innerHTML="<form></form><form></form>",f.childNodes.length===2}(),c}.apply(v,h),r!==void 0&&(w.exports=r)},8082:(w,v,a)=>{var h,r;h=[a(5949),a(7763)],r=function(n,c){"use strict";function f(l){return l==null?l+"":typeof l=="object"||typeof l=="function"?n[c.call(l)]||"object":typeof l}return f}.apply(v,h),r!==void 0&&(w.exports=r)},5250:(w,v,a)=>{var h;h=function(){"use strict";return/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i}.call(v,a,v,w),h!==void 0&&(w.exports=h)},8515:(w,v,a)=>{var h,r;h=[a(8934),a(7163),a(1133),a(7060),a(6871),a(618),a(5057),a(3122),a(5410),a(610),a(7432),a(3781),a(4405),a(3997),a(8048),a(5703),a(655)],r=function(n,c,f,l,s,u,g,i,m,d,p,y,b,x){"use strict";var P=/^(none|table(?!-c[ea]).+)/,S=/^--/,D={position:"absolute",visibility:"hidden",display:"block"},A={letterSpacing:"0",fontWeight:"400"};function T(L,N,B){var O=s.exec(N);return O?Math.max(0,O[2]-(B||0))+(O[3]||"px"):N}function C(L,N,B,O,F,q){var _=N==="width"?1:0,W=0,H=0;if(B===(O?"border":"content"))return 0;for(;_<4;_+=2)B==="margin"&&(H+=n.css(L,B+g[_],!0,F)),O?(B==="content"&&(H-=n.css(L,"padding"+g[_],!0,F)),B!=="margin"&&(H-=n.css(L,"border"+g[_]+"Width",!0,F))):(H+=n.css(L,"padding"+g[_],!0,F),B!=="padding"?H+=n.css(L,"border"+g[_]+"Width",!0,F):W+=n.css(L,"border"+g[_]+"Width",!0,F));return!O&&q>=0&&(H+=Math.max(0,Math.ceil(L["offset"+N[0].toUpperCase()+N.slice(1)]-q-H-W-.5))||0),H}function k(L,N,B){var O=i(L),F=!b.boxSizingReliable()||B,q=F&&n.css(L,"boxSizing",!1,O)==="border-box",_=q,W=d(L,N,O),H="offset"+N[0].toUpperCase()+N.slice(1);if(u.test(W)){if(!B)return W;W="auto"}return(!b.boxSizingReliable()&&q||!b.reliableTrDimensions()&&l(L,"tr")||W==="auto"||!parseFloat(W)&&n.css(L,"display",!1,O)==="inline")&&L.getClientRects().length&&(q=n.css(L,"boxSizing",!1,O)==="border-box",_=H in L,_&&(W=L[H])),W=parseFloat(W)||0,W+C(L,N,B||(q?"border":"content"),_,O,W)+"px"}return n.extend({cssHooks:{opacity:{get:function(L,N){if(N){var B=d(L,"opacity");return B===""?"1":B}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(L,N,B,O){if(!(!L||L.nodeType===3||L.nodeType===8||!L.style)){var F,q,_,W=f(N),H=S.test(N),$=L.style;if(H||(N=x(W)),_=n.cssHooks[N]||n.cssHooks[W],B!==void 0){if(q=typeof B,q==="string"&&(F=s.exec(B))&&F[1]&&(B=p(L,N,F),q="number"),B==null||B!==B)return;q==="number"&&!H&&(B+=F&&F[3]||(n.cssNumber[W]?"":"px")),!b.clearCloneStyle&&B===""&&N.indexOf("background")===0&&($[N]="inherit"),(!_||!("set"in _)||(B=_.set(L,B,O))!==void 0)&&(H?$.setProperty(N,B):$[N]=B)}else return _&&"get"in _&&(F=_.get(L,!1,O))!==void 0?F:$[N]}},css:function(L,N,B,O){var F,q,_,W=f(N),H=S.test(N);return H||(N=x(W)),_=n.cssHooks[N]||n.cssHooks[W],_&&"get"in _&&(F=_.get(L,!0,B)),F===void 0&&(F=d(L,N,O)),F==="normal"&&N in A&&(F=A[N]),B===""||B?(q=parseFloat(F),B===!0||isFinite(q)?q||0:F):F}}),n.each(["height","width"],function(L,N){n.cssHooks[N]={get:function(B,O,F){if(O)return P.test(n.css(B,"display"))&&(!B.getClientRects().length||!B.getBoundingClientRect().width)?m(B,D,function(){return k(B,N,F)}):k(B,N,F)},set:function(B,O,F){var q,_=i(B),W=!b.scrollboxSize()&&_.position==="absolute",H=W||F,$=H&&n.css(B,"boxSizing",!1,_)==="border-box",K=F?C(B,N,F,$,_):0;return $&&W&&(K-=Math.ceil(B["offset"+N[0].toUpperCase()+N.slice(1)]-parseFloat(_[N])-C(B,N,"border",!1,_)-.5)),K&&(q=s.exec(O))&&(q[3]||"px")!=="px"&&(B.style[N]=O,O=n.css(B,N)),T(B,O,K)}}}),n.cssHooks.marginLeft=y(b.reliableMarginLeft,function(L,N){if(N)return(parseFloat(d(L,"marginLeft"))||L.getBoundingClientRect().left-m(L,{marginLeft:0},function(){return L.getBoundingClientRect().left}))+"px"}),n.each({margin:"",padding:"",border:"Width"},function(L,N){n.cssHooks[L+N]={expand:function(B){for(var O=0,F={},q=typeof B=="string"?B.split(" "):[B];O<4;O++)F[L+g[O]+N]=q[O]||q[O-2]||q[0];return F}},L!=="margin"&&(n.cssHooks[L+N].set=T)}),n.fn.extend({css:function(L,N){return c(this,function(B,O,F){var q,_,W={},H=0;if(Array.isArray(O)){for(q=i(B),_=O.length;H<_;H++)W[O[H]]=n.css(B,O[H],!1,q);return W}return F!==void 0?n.style(B,O,F):n.css(B,O)},L,N,arguments.length>1)}}),n}.apply(v,h),r!==void 0&&(w.exports=r)},3781:(w,v,a)=>{var h;h=function(){"use strict";function r(n,c){return{get:function(){if(n()){delete this.get;return}return(this.get=c).apply(this,arguments)}}}return r}.call(v,a,v,w),h!==void 0&&(w.exports=h)},7432:(w,v,a)=>{var h,r;h=[a(8934),a(6871)],r=function(n,c){"use strict";function f(l,s,u,g){var i,m,d=20,p=g?function(){return g.cur()}:function(){return n.css(l,s,"")},y=p(),b=u&&u[3]||(n.cssNumber[s]?"":"px"),x=l.nodeType&&(n.cssNumber[s]||b!=="px"&&+y)&&c.exec(n.css(l,s));if(x&&x[3]!==b){for(y=y/2,b=b||x[3],x=+y||1;d--;)n.style(l,s,x+b),(1-m)*(1-(m=p()/y||.5))<=0&&(d=0),x=x/m;x=x*2,n.style(l,s,x+b),u=u||[]}return u&&(x=+x||+y||0,i=u[1]?x+(u[1]+1)*u[2]:+u[2],g&&(g.unit=b,g.start=x,g.end=i)),i}return f}.apply(v,h),r!==void 0&&(w.exports=r)},610:(w,v,a)=>{var h,r;h=[a(8934),a(70),a(3151),a(618),a(3122),a(4405)],r=function(n,c,f,l,s,u){"use strict";function g(i,m,d){var p,y,b,x,P=i.style;return d=d||s(i),d&&(x=d.getPropertyValue(m)||d[m],x===""&&!c(i)&&(x=n.style(i,m)),!u.pixelBoxStyles()&&l.test(x)&&f.test(m)&&(p=P.width,y=P.minWidth,b=P.maxWidth,P.minWidth=P.maxWidth=P.width=x,x=d.width,P.width=p,P.minWidth=y,P.maxWidth=b)),x!==void 0?x+"":x}return g}.apply(v,h),r!==void 0&&(w.exports=r)},3997:(w,v,a)=>{var h,r;h=[a(7792),a(8934)],r=function(n,c){"use strict";var f=["Webkit","Moz","ms"],l=n.createElement("div").style,s={};function u(i){for(var m=i[0].toUpperCase()+i.slice(1),d=f.length;d--;)if(i=f[d]+m,i in l)return i}function g(i){var m=c.cssProps[i]||s[i];return m||(i in l?i:s[i]=u(i)||i)}return g}.apply(v,h),r!==void 0&&(w.exports=r)},2365:(w,v,a)=>{var h,r;h=[a(8934),a(655)],r=function(n){"use strict";n.expr.pseudos.hidden=function(c){return!n.expr.pseudos.visible(c)},n.expr.pseudos.visible=function(c){return!!(c.offsetWidth||c.offsetHeight||c.getClientRects().length)}}.apply(v,h),r!==void 0&&(w.exports=r)},8516:(w,v,a)=>{var h,r;h=[a(8934),a(9081),a(5626)],r=function(n,c,f){"use strict";var l={};function s(g){var i,m=g.ownerDocument,d=g.nodeName,p=l[d];return p||(i=m.body.appendChild(m.createElement(d)),p=n.css(i,"display"),i.parentNode.removeChild(i),p==="none"&&(p="block"),l[d]=p,p)}function u(g,i){for(var m,d,p=[],y=0,b=g.length;y<b;y++)d=g[y],d.style&&(m=d.style.display,i?(m==="none"&&(p[y]=c.get(d,"display")||null,p[y]||(d.style.display="")),d.style.display===""&&f(d)&&(p[y]=s(d))):m!=="none"&&(p[y]="none",c.set(d,"display",m)));for(y=0;y<b;y++)p[y]!=null&&(g[y].style.display=p[y]);return g}return n.fn.extend({show:function(){return u(this,!0)},hide:function(){return u(this)},toggle:function(g){return typeof g=="boolean"?g?this.show():this.hide():this.each(function(){f(this)?n(this).show():n(this).hide()})}}),u}.apply(v,h),r!==void 0&&(w.exports=r)},4405:(w,v,a)=>{var h,r;h=[a(8934),a(7792),a(7730),a(9523)],r=function(n,c,f,l){"use strict";return function(){function s(){if(!!x){b.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",x.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",f.appendChild(b).appendChild(x);var P=window.getComputedStyle(x);g=P.top!=="1%",y=u(P.marginLeft)===12,x.style.right="60%",d=u(P.right)===36,i=u(P.width)===36,x.style.position="absolute",m=u(x.offsetWidth/3)===12,f.removeChild(b),x=null}}function u(P){return Math.round(parseFloat(P))}var g,i,m,d,p,y,b=c.createElement("div"),x=c.createElement("div");!x.style||(x.style.backgroundClip="content-box",x.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle=x.style.backgroundClip==="content-box",n.extend(l,{boxSizingReliable:function(){return s(),i},pixelBoxStyles:function(){return s(),d},pixelPosition:function(){return s(),g},reliableMarginLeft:function(){return s(),y},scrollboxSize:function(){return s(),m},reliableTrDimensions:function(){var P,S,D,A;return p==null&&(P=c.createElement("table"),S=c.createElement("tr"),D=c.createElement("div"),P.style.cssText="position:absolute;left:-11111px;border-collapse:separate",S.style.cssText="border:1px solid",S.style.height="1px",D.style.height="9px",D.style.display="block",f.appendChild(P).appendChild(S).appendChild(D),A=window.getComputedStyle(S),p=parseInt(A.height,10)+parseInt(A.borderTopWidth,10)+parseInt(A.borderBottomWidth,10)===S.offsetHeight,f.removeChild(P)),p}}))}(),l}.apply(v,h),r!==void 0&&(w.exports=r)},5057:(w,v,a)=>{var h;h=function(){"use strict";return["Top","Right","Bottom","Left"]}.call(v,a,v,w),h!==void 0&&(w.exports=h)},3122:(w,v,a)=>{var h;h=function(){"use strict";return function(r){var n=r.ownerDocument.defaultView;return(!n||!n.opener)&&(n=window),n.getComputedStyle(r)}}.call(v,a,v,w),h!==void 0&&(w.exports=h)},5626:(w,v,a)=>{var h,r;h=[a(8934),a(70)],r=function(n,c){"use strict";return function(f,l){return f=l||f,f.style.display==="none"||f.style.display===""&&c(f)&&n.css(f,"display")==="none"}}.apply(v,h),r!==void 0&&(w.exports=r)},3151:(w,v,a)=>{var h,r;h=[a(5057)],r=function(n){"use strict";return new RegExp(n.join("|"),"i")}.apply(v,h),r!==void 0&&(w.exports=r)},618:(w,v,a)=>{var h,r;h=[a(8308)],r=function(n){"use strict";return new RegExp("^("+n+")(?!px)[a-z%]+$","i")}.apply(v,h),r!==void 0&&(w.exports=r)},5410:(w,v,a)=>{var h;h=function(){"use strict";return function(r,n,c){var f,l,s={};for(l in n)s[l]=r.style[l],r.style[l]=n[l];f=c.call(r);for(l in n)r.style[l]=s[l];return f}}.call(v,a,v,w),h!==void 0&&(w.exports=h)},1786:(w,v,a)=>{var h,r;h=[a(8934),a(7163),a(1133),a(9081),a(2109)],r=function(n,c,f,l,s){"use strict";var u=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,g=/[A-Z]/g;function i(d){return d==="true"?!0:d==="false"?!1:d==="null"?null:d===+d+""?+d:u.test(d)?JSON.parse(d):d}function m(d,p,y){var b;if(y===void 0&&d.nodeType===1)if(b="data-"+p.replace(g,"-$&").toLowerCase(),y=d.getAttribute(b),typeof y=="string"){try{y=i(y)}catch(x){}s.set(d,p,y)}else y=void 0;return y}return n.extend({hasData:function(d){return s.hasData(d)||l.hasData(d)},data:function(d,p,y){return s.access(d,p,y)},removeData:function(d,p){s.remove(d,p)},_data:function(d,p,y){return l.access(d,p,y)},_removeData:function(d,p){l.remove(d,p)}}),n.fn.extend({data:function(d,p){var y,b,x,P=this[0],S=P&&P.attributes;if(d===void 0){if(this.length&&(x=s.get(P),P.nodeType===1&&!l.get(P,"hasDataAttrs"))){for(y=S.length;y--;)S[y]&&(b=S[y].name,b.indexOf("data-")===0&&(b=f(b.slice(5)),m(P,b,x[b])));l.set(P,"hasDataAttrs",!0)}return x}return typeof d=="object"?this.each(function(){s.set(this,d)}):c(this,function(D){var A;if(P&&D===void 0)return A=s.get(P,d),A!==void 0||(A=m(P,d),A!==void 0)?A:void 0;this.each(function(){s.set(this,d,D)})},null,p,arguments.length>1,null,!0)},removeData:function(d){return this.each(function(){s.remove(this,d)})}}),n}.apply(v,h),r!==void 0&&(w.exports=r)},7172:(w,v,a)=>{var h,r;h=[a(8934),a(1133),a(8663),a(2238)],r=function(n,c,f,l){"use strict";function s(){this.expando=n.expando+s.uid++}return s.uid=1,s.prototype={cache:function(u){var g=u[this.expando];return g||(g={},l(u)&&(u.nodeType?u[this.expando]=g:Object.defineProperty(u,this.expando,{value:g,configurable:!0}))),g},set:function(u,g,i){var m,d=this.cache(u);if(typeof g=="string")d[c(g)]=i;else for(m in g)d[c(m)]=g[m];return d},get:function(u,g){return g===void 0?this.cache(u):u[this.expando]&&u[this.expando][c(g)]},access:function(u,g,i){return g===void 0||g&&typeof g=="string"&&i===void 0?this.get(u,g):(this.set(u,g,i),i!==void 0?i:g)},remove:function(u,g){var i,m=u[this.expando];if(m!==void 0){if(g!==void 0)for(Array.isArray(g)?g=g.map(c):(g=c(g),g=g in m?[g]:g.match(f)||[]),i=g.length;i--;)delete m[g[i]];(g===void 0||n.isEmptyObject(m))&&(u.nodeType?u[this.expando]=void 0:delete u[this.expando])}},hasData:function(u){var g=u[this.expando];return g!==void 0&&!n.isEmptyObject(g)}},s}.apply(v,h),r!==void 0&&(w.exports=r)},2238:(w,v,a)=>{var h;h=function(){"use strict";return function(r){return r.nodeType===1||r.nodeType===9||!+r.nodeType}}.call(v,a,v,w),h!==void 0&&(w.exports=h)},9081:(w,v,a)=>{var h,r;h=[a(7172)],r=function(n){"use strict";return new n}.apply(v,h),r!==void 0&&(w.exports=r)},2109:(w,v,a)=>{var h,r;h=[a(7172)],r=function(n){"use strict";return new n}.apply(v,h),r!==void 0&&(w.exports=r)},6525:(w,v,a)=>{var h,r;h=[a(8934),a(2134),a(3623),a(8924)],r=function(n,c,f){"use strict";function l(g){return g}function s(g){throw g}function u(g,i,m,d){var p;try{g&&c(p=g.promise)?p.call(g).done(i).fail(m):g&&c(p=g.then)?p.call(g,i,m):i.apply(void 0,[g].slice(d))}catch(y){m.apply(void 0,[y])}}return n.extend({Deferred:function(g){var i=[["notify","progress",n.Callbacks("memory"),n.Callbacks("memory"),2],["resolve","done",n.Callbacks("once memory"),n.Callbacks("once memory"),0,"resolved"],["reject","fail",n.Callbacks("once memory"),n.Callbacks("once memory"),1,"rejected"]],m="pending",d={state:function(){return m},always:function(){return p.done(arguments).fail(arguments),this},catch:function(y){return d.then(null,y)},pipe:function(){var y=arguments;return n.Deferred(function(b){n.each(i,function(x,P){var S=c(y[P[4]])&&y[P[4]];p[P[1]](function(){var D=S&&S.apply(this,arguments);D&&c(D.promise)?D.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[P[0]+"With"](this,S?[D]:arguments)})}),y=null}).promise()},then:function(y,b,x){var P=0;function S(D,A,T,C){return function(){var k=this,L=arguments,N=function(){var O,F;if(!(D<P)){if(O=T.apply(k,L),O===A.promise())throw new TypeError("Thenable self-resolution");F=O&&(typeof O=="object"||typeof O=="function")&&O.then,c(F)?C?F.call(O,S(P,A,l,C),S(P,A,s,C)):(P++,F.call(O,S(P,A,l,C),S(P,A,s,C),S(P,A,l,A.notifyWith))):(T!==l&&(k=void 0,L=[O]),(C||A.resolveWith)(k,L))}},B=C?N:function(){try{N()}catch(O){n.Deferred.exceptionHook&&n.Deferred.exceptionHook(O,B.stackTrace),D+1>=P&&(T!==s&&(k=void 0,L=[O]),A.rejectWith(k,L))}};D?B():(n.Deferred.getStackHook&&(B.stackTrace=n.Deferred.getStackHook()),window.setTimeout(B))}}return n.Deferred(function(D){i[0][3].add(S(0,D,c(x)?x:l,D.notifyWith)),i[1][3].add(S(0,D,c(y)?y:l)),i[2][3].add(S(0,D,c(b)?b:s))}).promise()},promise:function(y){return y!=null?n.extend(y,d):d}},p={};return n.each(i,function(y,b){var x=b[2],P=b[5];d[b[1]]=x.add,P&&x.add(function(){m=P},i[3-y][2].disable,i[3-y][3].disable,i[0][2].lock,i[0][3].lock),x.add(b[3].fire),p[b[0]]=function(){return p[b[0]+"With"](this===p?void 0:this,arguments),this},p[b[0]+"With"]=x.fireWith}),d.promise(p),g&&g.call(p,p),p},when:function(g){var i=arguments.length,m=i,d=Array(m),p=f.call(arguments),y=n.Deferred(),b=function(x){return function(P){d[x]=this,p[x]=arguments.length>1?f.call(arguments):P,--i||y.resolveWith(d,p)}};if(i<=1&&(u(g,y.done(b(m)).resolve,y.reject,!i),y.state()==="pending"||c(p[m]&&p[m].then)))return y.then();for(;m--;)u(p[m],b(m),y.reject);return y.promise()}}),n}.apply(v,h),r!==void 0&&(w.exports=r)},1009:(w,v,a)=>{var h,r;h=[a(8934),a(6525)],r=function(n){"use strict";var c=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;n.Deferred.exceptionHook=function(f,l){window.console&&window.console.warn&&f&&c.test(f.name)&&window.console.warn("jQuery.Deferred exception: "+f.message,f.stack,l)}}.apply(v,h),r!==void 0&&(w.exports=r)},7722:(w,v,a)=>{var h,r;h=[a(8934),a(7060),a(1133),a(8082),a(2134),a(9031),a(3623),a(7982),a(8138)],r=function(n,c,f,l,s,u,g){"use strict";var i=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;n.proxy=function(m,d){var p,y,b;if(typeof d=="string"&&(p=m[d],d=m,m=p),!!s(m))return y=g.call(arguments,2),b=function(){return m.apply(d||this,y.concat(g.call(arguments)))},b.guid=m.guid=m.guid||n.guid++,b},n.holdReady=function(m){m?n.readyWait++:n.ready(!0)},n.isArray=Array.isArray,n.parseJSON=JSON.parse,n.nodeName=c,n.isFunction=s,n.isWindow=u,n.camelCase=f,n.type=l,n.now=Date.now,n.isNumeric=function(m){var d=n.type(m);return(d==="number"||d==="string")&&!isNaN(m-parseFloat(m))},n.trim=function(m){return m==null?"":(m+"").replace(i,"")}}.apply(v,h),r!==void 0&&(w.exports=r)},7982:(w,v,a)=>{var h,r;h=[a(8934),a(7178),a(7881)],r=function(n){"use strict";n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(c,f){n.fn[f]=function(l){return this.on(f,l)}})}.apply(v,h),r!==void 0&&(w.exports=r)},8138:(w,v,a)=>{var h,r;h=[a(8934),a(7881),a(1045)],r=function(n){"use strict";n.fn.extend({bind:function(c,f,l){return this.on(c,null,f,l)},unbind:function(c,f){return this.off(c,null,f)},delegate:function(c,f,l,s){return this.on(f,c,l,s)},undelegate:function(c,f,l){return arguments.length===1?this.off(c,"**"):this.off(f,c||"**",l)},hover:function(c,f){return this.mouseenter(c).mouseleave(f||c)}}),n.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(c,f){n.fn[f]=function(l,s){return arguments.length>0?this.on(f,null,l,s):this.trigger(f)}})}.apply(v,h),r!==void 0&&(w.exports=r)},5126:(w,v,a)=>{var h,r;h=[a(8934),a(7163),a(9031),a(8515)],r=function(n,c,f){"use strict";return n.each({Height:"height",Width:"width"},function(l,s){n.each({padding:"inner"+l,content:s,"":"outer"+l},function(u,g){n.fn[g]=function(i,m){var d=arguments.length&&(u||typeof i!="boolean"),p=u||(i===!0||m===!0?"margin":"border");return c(this,function(y,b,x){var P;return f(y)?g.indexOf("outer")===0?y["inner"+l]:y.document.documentElement["client"+l]:y.nodeType===9?(P=y.documentElement,Math.max(y.body["scroll"+l],P["scroll"+l],y.body["offset"+l],P["offset"+l],P["client"+l])):x===void 0?n.css(y,b,p):n.style(y,b,x,p)},s,d?i:void 0,d)}})}),n}.apply(v,h),r!==void 0&&(w.exports=r)},7429:(w,v,a)=>{var h,r;h=[a(8934),a(1133),a(7792),a(2134),a(6871),a(8663),a(5057),a(5626),a(7432),a(9081),a(8516),a(8048),a(1387),a(6525),a(8482),a(2632),a(8515),a(8314)],r=function(n,c,f,l,s,u,g,i,m,d,p){"use strict";var y,b,x=/^(?:toggle|show|hide)$/,P=/queueHooks$/;function S(){b&&(f.hidden===!1&&window.requestAnimationFrame?window.requestAnimationFrame(S):window.setTimeout(S,n.fx.interval),n.fx.tick())}function D(){return window.setTimeout(function(){y=void 0}),y=Date.now()}function A(N,B){var O,F=0,q={height:N};for(B=B?1:0;F<4;F+=2-B)O=g[F],q["margin"+O]=q["padding"+O]=N;return B&&(q.opacity=q.width=N),q}function T(N,B,O){for(var F,q=(L.tweeners[B]||[]).concat(L.tweeners["*"]),_=0,W=q.length;_<W;_++)if(F=q[_].call(O,B,N))return F}function C(N,B,O){var F,q,_,W,H,$,K,te,oe="width"in B||"height"in B,he=this,Q={},ve=N.style,Ae=N.nodeType&&i(N),Ke=d.get(N,"fxshow");O.queue||(W=n._queueHooks(N,"fx"),W.unqueued==null&&(W.unqueued=0,H=W.empty.fire,W.empty.fire=function(){W.unqueued||H()}),W.unqueued++,he.always(function(){he.always(function(){W.unqueued--,n.queue(N,"fx").length||W.empty.fire()})}));for(F in B)if(q=B[F],x.test(q)){if(delete B[F],_=_||q==="toggle",q===(Ae?"hide":"show"))if(q==="show"&&Ke&&Ke[F]!==void 0)Ae=!0;else continue;Q[F]=Ke&&Ke[F]||n.style(N,F)}if($=!n.isEmptyObject(B),!(!$&&n.isEmptyObject(Q))){oe&&N.nodeType===1&&(O.overflow=[ve.overflow,ve.overflowX,ve.overflowY],K=Ke&&Ke.display,K==null&&(K=d.get(N,"display")),te=n.css(N,"display"),te==="none"&&(K?te=K:(p([N],!0),K=N.style.display||K,te=n.css(N,"display"),p([N]))),(te==="inline"||te==="inline-block"&&K!=null)&&n.css(N,"float")==="none"&&($||(he.done(function(){ve.display=K}),K==null&&(te=ve.display,K=te==="none"?"":te)),ve.display="inline-block")),O.overflow&&(ve.overflow="hidden",he.always(function(){ve.overflow=O.overflow[0],ve.overflowX=O.overflow[1],ve.overflowY=O.overflow[2]})),$=!1;for(F in Q)$||(Ke?"hidden"in Ke&&(Ae=Ke.hidden):Ke=d.access(N,"fxshow",{display:K}),_&&(Ke.hidden=!Ae),Ae&&p([N],!0),he.done(function(){Ae||p([N]),d.remove(N,"fxshow");for(F in Q)n.style(N,F,Q[F])})),$=T(Ae?Ke[F]:0,F,he),F in Ke||(Ke[F]=$.start,Ae&&($.end=$.start,$.start=0))}}function k(N,B){var O,F,q,_,W;for(O in N)if(F=c(O),q=B[F],_=N[O],Array.isArray(_)&&(q=_[1],_=N[O]=_[0]),O!==F&&(N[F]=_,delete N[O]),W=n.cssHooks[F],W&&"expand"in W){_=W.expand(_),delete N[F];for(O in _)O in N||(N[O]=_[O],B[O]=q)}else B[F]=q}function L(N,B,O){var F,q,_=0,W=L.prefilters.length,H=n.Deferred().always(function(){delete $.elem}),$=function(){if(q)return!1;for(var oe=y||D(),he=Math.max(0,K.startTime+K.duration-oe),Q=he/K.duration||0,ve=1-Q,Ae=0,Ke=K.tweens.length;Ae<Ke;Ae++)K.tweens[Ae].run(ve);return H.notifyWith(N,[K,ve,he]),ve<1&&Ke?he:(Ke||H.notifyWith(N,[K,1,0]),H.resolveWith(N,[K]),!1)},K=H.promise({elem:N,props:n.extend({},B),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},O),originalProperties:B,originalOptions:O,startTime:y||D(),duration:O.duration,tweens:[],createTween:function(oe,he){var Q=n.Tween(N,K.opts,oe,he,K.opts.specialEasing[oe]||K.opts.easing);return K.tweens.push(Q),Q},stop:function(oe){var he=0,Q=oe?K.tweens.length:0;if(q)return this;for(q=!0;he<Q;he++)K.tweens[he].run(1);return oe?(H.notifyWith(N,[K,1,0]),H.resolveWith(N,[K,oe])):H.rejectWith(N,[K,oe]),this}}),te=K.props;for(k(te,K.opts.specialEasing);_<W;_++)if(F=L.prefilters[_].call(K,N,te,K.opts),F)return l(F.stop)&&(n._queueHooks(K.elem,K.opts.queue).stop=F.stop.bind(F)),F;return n.map(te,T,K),l(K.opts.start)&&K.opts.start.call(N,K),K.progress(K.opts.progress).done(K.opts.done,K.opts.complete).fail(K.opts.fail).always(K.opts.always),n.fx.timer(n.extend($,{elem:N,anim:K,queue:K.opts.queue})),K}return n.Animation=n.extend(L,{tweeners:{"*":[function(N,B){var O=this.createTween(N,B);return m(O.elem,N,s.exec(B),O),O}]},tweener:function(N,B){l(N)?(B=N,N=["*"]):N=N.match(u);for(var O,F=0,q=N.length;F<q;F++)O=N[F],L.tweeners[O]=L.tweeners[O]||[],L.tweeners[O].unshift(B)},prefilters:[C],prefilter:function(N,B){B?L.prefilters.unshift(N):L.prefilters.push(N)}}),n.speed=function(N,B,O){var F=N&&typeof N=="object"?n.extend({},N):{complete:O||!O&&B||l(N)&&N,duration:N,easing:O&&B||B&&!l(B)&&B};return n.fx.off?F.duration=0:typeof F.duration!="number"&&(F.duration in n.fx.speeds?F.duration=n.fx.speeds[F.duration]:F.duration=n.fx.speeds._default),(F.queue==null||F.queue===!0)&&(F.queue="fx"),F.old=F.complete,F.complete=function(){l(F.old)&&F.old.call(this),F.queue&&n.dequeue(this,F.queue)},F},n.fn.extend({fadeTo:function(N,B,O,F){return this.filter(i).css("opacity",0).show().end().animate({opacity:B},N,O,F)},animate:function(N,B,O,F){var q=n.isEmptyObject(N),_=n.speed(B,O,F),W=function(){var H=L(this,n.extend({},N),_);(q||d.get(this,"finish"))&&H.stop(!0)};return W.finish=W,q||_.queue===!1?this.each(W):this.queue(_.queue,W)},stop:function(N,B,O){var F=function(q){var _=q.stop;delete q.stop,_(O)};return typeof N!="string"&&(O=B,B=N,N=void 0),B&&this.queue(N||"fx",[]),this.each(function(){var q=!0,_=N!=null&&N+"queueHooks",W=n.timers,H=d.get(this);if(_)H[_]&&H[_].stop&&F(H[_]);else for(_ in H)H[_]&&H[_].stop&&P.test(_)&&F(H[_]);for(_=W.length;_--;)W[_].elem===this&&(N==null||W[_].queue===N)&&(W[_].anim.stop(O),q=!1,W.splice(_,1));(q||!O)&&n.dequeue(this,N)})},finish:function(N){return N!==!1&&(N=N||"fx"),this.each(function(){var B,O=d.get(this),F=O[N+"queue"],q=O[N+"queueHooks"],_=n.timers,W=F?F.length:0;for(O.finish=!0,n.queue(this,N,[]),q&&q.stop&&q.stop.call(this,!0),B=_.length;B--;)_[B].elem===this&&_[B].queue===N&&(_[B].anim.stop(!0),_.splice(B,1));for(B=0;B<W;B++)F[B]&&F[B].finish&&F[B].finish.call(this);delete O.finish})}}),n.each(["toggle","show","hide"],function(N,B){var O=n.fn[B];n.fn[B]=function(F,q,_){return F==null||typeof F=="boolean"?O.apply(this,arguments):this.animate(A(B,!0),F,q,_)}}),n.each({slideDown:A("show"),slideUp:A("hide"),slideToggle:A("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(N,B){n.fn[N]=function(O,F,q){return this.animate(B,O,F,q)}}),n.timers=[],n.fx.tick=function(){var N,B=0,O=n.timers;for(y=Date.now();B<O.length;B++)N=O[B],!N()&&O[B]===N&&O.splice(B--,1);O.length||n.fx.stop(),y=void 0},n.fx.timer=function(N){n.timers.push(N),n.fx.start()},n.fx.interval=13,n.fx.start=function(){b||(b=!0,S())},n.fx.stop=function(){b=null},n.fx.speeds={slow:600,fast:200,_default:400},n}.apply(v,h),r!==void 0&&(w.exports=r)},8314:(w,v,a)=>{var h,r;h=[a(8934),a(3997),a(8515)],r=function(n,c){"use strict";function f(l,s,u,g,i){return new f.prototype.init(l,s,u,g,i)}n.Tween=f,f.prototype={constructor:f,init:function(l,s,u,g,i,m){this.elem=l,this.prop=u,this.easing=i||n.easing._default,this.options=s,this.start=this.now=this.cur(),this.end=g,this.unit=m||(n.cssNumber[u]?"":"px")},cur:function(){var l=f.propHooks[this.prop];return l&&l.get?l.get(this):f.propHooks._default.get(this)},run:function(l){var s,u=f.propHooks[this.prop];return this.options.duration?this.pos=s=n.easing[this.easing](l,this.options.duration*l,0,1,this.options.duration):this.pos=s=l,this.now=(this.end-this.start)*s+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),u&&u.set?u.set(this):f.propHooks._default.set(this),this}},f.prototype.init.prototype=f.prototype,f.propHooks={_default:{get:function(l){var s;return l.elem.nodeType!==1||l.elem[l.prop]!=null&&l.elem.style[l.prop]==null?l.elem[l.prop]:(s=n.css(l.elem,l.prop,""),!s||s==="auto"?0:s)},set:function(l){n.fx.step[l.prop]?n.fx.step[l.prop](l):l.elem.nodeType===1&&(n.cssHooks[l.prop]||l.elem.style[c(l.prop)]!=null)?n.style(l.elem,l.prop,l.now+l.unit):l.elem[l.prop]=l.now}}},f.propHooks.scrollTop=f.propHooks.scrollLeft={set:function(l){l.elem.nodeType&&l.elem.parentNode&&(l.elem[l.prop]=l.now)}},n.easing={linear:function(l){return l},swing:function(l){return .5-Math.cos(l*Math.PI)/2},_default:"swing"},n.fx=f.prototype.init,n.fx.step={}}.apply(v,h),r!==void 0&&(w.exports=r)},8393:(w,v,a)=>{var h,r;h=[a(8934),a(655),a(7429)],r=function(n){"use strict";n.expr.pseudos.animated=function(c){return n.grep(n.timers,function(f){return c===f.elem}).length}}.apply(v,h),r!==void 0&&(w.exports=r)},7881:(w,v,a)=>{var h,r;h=[a(8934),a(7792),a(7730),a(2134),a(8663),a(8104),a(3623),a(2238),a(9081),a(7060),a(8048),a(655)],r=function(n,c,f,l,s,u,g,i,m,d){"use strict";var p=/^([^.]*)(?:\.(.+)|)/;function y(){return!0}function b(){return!1}function x(A,T){return A===P()==(T==="focus")}function P(){try{return c.activeElement}catch(A){}}function S(A,T,C,k,L,N){var B,O;if(typeof T=="object"){typeof C!="string"&&(k=k||C,C=void 0);for(O in T)S(A,O,C,k,T[O],N);return A}if(k==null&&L==null?(L=C,k=C=void 0):L==null&&(typeof C=="string"?(L=k,k=void 0):(L=k,k=C,C=void 0)),L===!1)L=b;else if(!L)return A;return N===1&&(B=L,L=function(F){return n().off(F),B.apply(this,arguments)},L.guid=B.guid||(B.guid=n.guid++)),A.each(function(){n.event.add(this,T,L,k,C)})}n.event={global:{},add:function(A,T,C,k,L){var N,B,O,F,q,_,W,H,$,K,te,oe=m.get(A);if(!!i(A))for(C.handler&&(N=C,C=N.handler,L=N.selector),L&&n.find.matchesSelector(f,L),C.guid||(C.guid=n.guid++),(F=oe.events)||(F=oe.events=Object.create(null)),(B=oe.handle)||(B=oe.handle=function(he){return typeof n!="undefined"&&n.event.triggered!==he.type?n.event.dispatch.apply(A,arguments):void 0}),T=(T||"").match(s)||[""],q=T.length;q--;)O=p.exec(T[q])||[],$=te=O[1],K=(O[2]||"").split(".").sort(),$&&(W=n.event.special[$]||{},$=(L?W.delegateType:W.bindType)||$,W=n.event.special[$]||{},_=n.extend({type:$,origType:te,data:k,handler:C,guid:C.guid,selector:L,needsContext:L&&n.expr.match.needsContext.test(L),namespace:K.join(".")},N),(H=F[$])||(H=F[$]=[],H.delegateCount=0,(!W.setup||W.setup.call(A,k,K,B)===!1)&&A.addEventListener&&A.addEventListener($,B)),W.add&&(W.add.call(A,_),_.handler.guid||(_.handler.guid=C.guid)),L?H.splice(H.delegateCount++,0,_):H.push(_),n.event.global[$]=!0)},remove:function(A,T,C,k,L){var N,B,O,F,q,_,W,H,$,K,te,oe=m.hasData(A)&&m.get(A);if(!(!oe||!(F=oe.events))){for(T=(T||"").match(s)||[""],q=T.length;q--;){if(O=p.exec(T[q])||[],$=te=O[1],K=(O[2]||"").split(".").sort(),!$){for($ in F)n.event.remove(A,$+T[q],C,k,!0);continue}for(W=n.event.special[$]||{},$=(k?W.delegateType:W.bindType)||$,H=F[$]||[],O=O[2]&&new RegExp("(^|\\.)"+K.join("\\.(?:.*\\.|)")+"(\\.|$)"),B=N=H.length;N--;)_=H[N],(L||te===_.origType)&&(!C||C.guid===_.guid)&&(!O||O.test(_.namespace))&&(!k||k===_.selector||k==="**"&&_.selector)&&(H.splice(N,1),_.selector&&H.delegateCount--,W.remove&&W.remove.call(A,_));B&&!H.length&&((!W.teardown||W.teardown.call(A,K,oe.handle)===!1)&&n.removeEvent(A,$,oe.handle),delete F[$])}n.isEmptyObject(F)&&m.remove(A,"handle events")}},dispatch:function(A){var T,C,k,L,N,B,O=new Array(arguments.length),F=n.event.fix(A),q=(m.get(this,"events")||Object.create(null))[F.type]||[],_=n.event.special[F.type]||{};for(O[0]=F,T=1;T<arguments.length;T++)O[T]=arguments[T];if(F.delegateTarget=this,!(_.preDispatch&&_.preDispatch.call(this,F)===!1)){for(B=n.event.handlers.call(this,F,q),T=0;(L=B[T++])&&!F.isPropagationStopped();)for(F.currentTarget=L.elem,C=0;(N=L.handlers[C++])&&!F.isImmediatePropagationStopped();)(!F.rnamespace||N.namespace===!1||F.rnamespace.test(N.namespace))&&(F.handleObj=N,F.data=N.data,k=((n.event.special[N.origType]||{}).handle||N.handler).apply(L.elem,O),k!==void 0&&(F.result=k)===!1&&(F.preventDefault(),F.stopPropagation()));return _.postDispatch&&_.postDispatch.call(this,F),F.result}},handlers:function(A,T){var C,k,L,N,B,O=[],F=T.delegateCount,q=A.target;if(F&&q.nodeType&&!(A.type==="click"&&A.button>=1)){for(;q!==this;q=q.parentNode||this)if(q.nodeType===1&&!(A.type==="click"&&q.disabled===!0)){for(N=[],B={},C=0;C<F;C++)k=T[C],L=k.selector+" ",B[L]===void 0&&(B[L]=k.needsContext?n(L,this).index(q)>-1:n.find(L,this,null,[q]).length),B[L]&&N.push(k);N.length&&O.push({elem:q,handlers:N})}}return q=this,F<T.length&&O.push({elem:q,handlers:T.slice(F)}),O},addProp:function(A,T){Object.defineProperty(n.Event.prototype,A,{enumerable:!0,configurable:!0,get:l(T)?function(){if(this.originalEvent)return T(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[A]},set:function(C){Object.defineProperty(this,A,{enumerable:!0,configurable:!0,writable:!0,value:C})}})},fix:function(A){return A[n.expando]?A:new n.Event(A)},special:{load:{noBubble:!0},click:{setup:function(A){var T=this||A;return u.test(T.type)&&T.click&&d(T,"input")&&D(T,"click",y),!1},trigger:function(A){var T=this||A;return u.test(T.type)&&T.click&&d(T,"input")&&D(T,"click"),!0},_default:function(A){var T=A.target;return u.test(T.type)&&T.click&&d(T,"input")&&m.get(T,"click")||d(T,"a")}},beforeunload:{postDispatch:function(A){A.result!==void 0&&A.originalEvent&&(A.originalEvent.returnValue=A.result)}}}};function D(A,T,C){if(!C){m.get(A,T)===void 0&&n.event.add(A,T,y);return}m.set(A,T,!1),n.event.add(A,T,{namespace:!1,handler:function(k){var L,N,B=m.get(this,T);if(k.isTrigger&1&&this[T]){if(B.length)(n.event.special[T]||{}).delegateType&&k.stopPropagation();else if(B=g.call(arguments),m.set(this,T,B),L=C(this,T),this[T](),N=m.get(this,T),B!==N||L?m.set(this,T,!1):N={},B!==N)return k.stopImmediatePropagation(),k.preventDefault(),N&&N.value}else B.length&&(m.set(this,T,{value:n.event.trigger(n.extend(B[0],n.Event.prototype),B.slice(1),this)}),k.stopImmediatePropagation())}})}return n.removeEvent=function(A,T,C){A.removeEventListener&&A.removeEventListener(T,C)},n.Event=function(A,T){if(!(this instanceof n.Event))return new n.Event(A,T);A&&A.type?(this.originalEvent=A,this.type=A.type,this.isDefaultPrevented=A.defaultPrevented||A.defaultPrevented===void 0&&A.returnValue===!1?y:b,this.target=A.target&&A.target.nodeType===3?A.target.parentNode:A.target,this.currentTarget=A.currentTarget,this.relatedTarget=A.relatedTarget):this.type=A,T&&n.extend(this,T),this.timeStamp=A&&A.timeStamp||Date.now(),this[n.expando]=!0},n.Event.prototype={constructor:n.Event,isDefaultPrevented:b,isPropagationStopped:b,isImmediatePropagationStopped:b,isSimulated:!1,preventDefault:function(){var A=this.originalEvent;this.isDefaultPrevented=y,A&&!this.isSimulated&&A.preventDefault()},stopPropagation:function(){var A=this.originalEvent;this.isPropagationStopped=y,A&&!this.isSimulated&&A.stopPropagation()},stopImmediatePropagation:function(){var A=this.originalEvent;this.isImmediatePropagationStopped=y,A&&!this.isSimulated&&A.stopImmediatePropagation(),this.stopPropagation()}},n.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},n.event.addProp),n.each({focus:"focusin",blur:"focusout"},function(A,T){n.event.special[A]={setup:function(){return D(this,A,x),!1},trigger:function(){return D(this,A),!0},_default:function(){return!0},delegateType:T}}),n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(A,T){n.event.special[A]={delegateType:T,bindType:T,handle:function(C){var k,L=this,N=C.relatedTarget,B=C.handleObj;return(!N||N!==L&&!n.contains(L,N))&&(C.type=B.origType,k=B.handler.apply(this,arguments),C.type=T),k}}}),n.fn.extend({on:function(A,T,C,k){return S(this,A,T,C,k)},one:function(A,T,C,k){return S(this,A,T,C,k,1)},off:function(A,T,C){var k,L;if(A&&A.preventDefault&&A.handleObj)return k=A.handleObj,n(A.delegateTarget).off(k.namespace?k.origType+"."+k.namespace:k.origType,k.selector,k.handler),this;if(typeof A=="object"){for(L in A)this.off(L,T,A[L]);return this}return(T===!1||typeof T=="function")&&(C=T,T=void 0),C===!1&&(C=b),this.each(function(){n.event.remove(this,A,C,T)})}}),n}.apply(v,h),r!==void 0&&(w.exports=r)},6611:(w,v,a)=>{var h,r;h=[a(8934),a(9081),a(8266),a(7881),a(1045)],r=function(n,c,f){"use strict";return f.focusin||n.each({focus:"focusin",blur:"focusout"},function(l,s){var u=function(g){n.event.simulate(s,g.target,n.event.fix(g))};n.event.special[s]={setup:function(){var g=this.ownerDocument||this.document||this,i=c.access(g,s);i||g.addEventListener(l,u,!0),c.access(g,s,(i||0)+1)},teardown:function(){var g=this.ownerDocument||this.document||this,i=c.access(g,s)-1;i?c.access(g,s,i):(g.removeEventListener(l,u,!0),c.remove(g,s))}}}),n}.apply(v,h),r!==void 0&&(w.exports=r)},8266:(w,v,a)=>{var h,r;h=[a(9523)],r=function(n){"use strict";return n.focusin="onfocusin"in window,n}.apply(v,h),r!==void 0&&(w.exports=r)},1045:(w,v,a)=>{var h,r;h=[a(8934),a(7792),a(9081),a(2238),a(9694),a(2134),a(9031),a(7881)],r=function(n,c,f,l,s,u,g){"use strict";var i=/^(?:focusinfocus|focusoutblur)$/,m=function(d){d.stopPropagation()};return n.extend(n.event,{trigger:function(d,p,y,b){var x,P,S,D,A,T,C,k,L=[y||c],N=s.call(d,"type")?d.type:d,B=s.call(d,"namespace")?d.namespace.split("."):[];if(P=k=S=y=y||c,!(y.nodeType===3||y.nodeType===8)&&!i.test(N+n.event.triggered)&&(N.indexOf(".")>-1&&(B=N.split("."),N=B.shift(),B.sort()),A=N.indexOf(":")<0&&"on"+N,d=d[n.expando]?d:new n.Event(N,typeof d=="object"&&d),d.isTrigger=b?2:3,d.namespace=B.join("."),d.rnamespace=d.namespace?new RegExp("(^|\\.)"+B.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,d.result=void 0,d.target||(d.target=y),p=p==null?[d]:n.makeArray(p,[d]),C=n.event.special[N]||{},!(!b&&C.trigger&&C.trigger.apply(y,p)===!1))){if(!b&&!C.noBubble&&!g(y)){for(D=C.delegateType||N,i.test(D+N)||(P=P.parentNode);P;P=P.parentNode)L.push(P),S=P;S===(y.ownerDocument||c)&&L.push(S.defaultView||S.parentWindow||window)}for(x=0;(P=L[x++])&&!d.isPropagationStopped();)k=P,d.type=x>1?D:C.bindType||N,T=(f.get(P,"events")||Object.create(null))[d.type]&&f.get(P,"handle"),T&&T.apply(P,p),T=A&&P[A],T&&T.apply&&l(P)&&(d.result=T.apply(P,p),d.result===!1&&d.preventDefault());return d.type=N,!b&&!d.isDefaultPrevented()&&(!C._default||C._default.apply(L.pop(),p)===!1)&&l(y)&&A&&u(y[N])&&!g(y)&&(S=y[A],S&&(y[A]=null),n.event.triggered=N,d.isPropagationStopped()&&k.addEventListener(N,m),y[N](),d.isPropagationStopped()&&k.removeEventListener(N,m),n.event.triggered=void 0,S&&(y[A]=S)),d.result}},simulate:function(d,p,y){var b=n.extend(new n.Event,y,{type:d,isSimulated:!0});n.event.trigger(b,null,p)}}),n.fn.extend({trigger:function(d,p){return this.each(function(){n.event.trigger(d,p,this)})},triggerHandler:function(d,p){var y=this[0];if(y)return n.event.trigger(d,p,y,!0)}}),n}.apply(v,h),r!==void 0&&(w.exports=r)},692:(w,v,a)=>{var h,r,h,r;h=[a(8934)],r=function(n){"use strict";h=[],r=function(){return n}.apply(v,h),r!==void 0&&(w.exports=r)}.apply(v,h),r!==void 0&&(w.exports=r)},4278:(w,v,a)=>{var h,r;h=[a(8934)],r=function(n){"use strict";var c=window.jQuery,f=window.$;n.noConflict=function(l){return window.$===n&&(window.$=f),l&&window.jQuery===n&&(window.jQuery=c),n},typeof noGlobal=="undefined"&&(window.jQuery=window.$=n)}.apply(v,h),r!==void 0&&(w.exports=r)},4002:(w,v,a)=>{var h,r;h=[a(8934),a(655),a(8482),a(8924),a(6525),a(1009),a(5703),a(1786),a(1387),a(6572),a(8468),a(7881),a(6611),a(2632),a(8123),a(5594),a(8515),a(2365),a(5385),a(7178),a(8853),a(5488),a(7533),a(4581),a(461),a(2889),a(7429),a(8393),a(5356),a(5126),a(7722),a(692),a(4278)],r=function(n){"use strict";return n}.apply(v,h),r!==void 0&&(w.exports=r)},2632:(w,v,a)=>{var h,r;h=[a(8934),a(70),a(3932),a(2134),a(1780),a(8104),a(7163),a(9422),a(8950),a(5219),a(2455),a(7162),a(3360),a(8771),a(9081),a(2109),a(2238),a(1224),a(7060),a(8048),a(8482),a(655),a(7881)],r=function(n,c,f,l,s,u,g,i,m,d,p,y,b,x,P,S,D,A,T){"use strict";var C=/<script|<style|<link/i,k=/checked\s*(?:[^=]|=\s*.checked.)/i,L=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function N(H,$){return T(H,"table")&&T($.nodeType!==11?$:$.firstChild,"tr")&&n(H).children("tbody")[0]||H}function B(H){return H.type=(H.getAttribute("type")!==null)+"/"+H.type,H}function O(H){return(H.type||"").slice(0,5)==="true/"?H.type=H.type.slice(5):H.removeAttribute("type"),H}function F(H,$){var K,te,oe,he,Q,ve,Ae;if($.nodeType===1){if(P.hasData(H)&&(he=P.get(H),Ae=he.events,Ae)){P.remove($,"handle events");for(oe in Ae)for(K=0,te=Ae[oe].length;K<te;K++)n.event.add($,oe,Ae[oe][K])}S.hasData(H)&&(Q=S.access(H),ve=n.extend({},Q),S.set($,ve))}}function q(H,$){var K=$.nodeName.toLowerCase();K==="input"&&u.test(H.type)?$.checked=H.checked:(K==="input"||K==="textarea")&&($.defaultValue=H.defaultValue)}function _(H,$,K,te){$=f($);var oe,he,Q,ve,Ae,Ke,mt=0,Rt=H.length,Nt=Rt-1,Lt=$[0],Wt=l(Lt);if(Wt||Rt>1&&typeof Lt=="string"&&!x.checkClone&&k.test(Lt))return H.each(function(ze){var Mt=H.eq(ze);Wt&&($[0]=Lt.call(this,ze,Mt.html())),_(Mt,$,K,te)});if(Rt&&(oe=b($,H[0].ownerDocument,!1,H,te),he=oe.firstChild,oe.childNodes.length===1&&(oe=he),he||te)){for(Q=n.map(p(oe,"script"),B),ve=Q.length;mt<Rt;mt++)Ae=oe,mt!==Nt&&(Ae=n.clone(Ae,!0,!0),ve&&n.merge(Q,p(Ae,"script"))),K.call(H[mt],Ae,mt);if(ve)for(Ke=Q[Q.length-1].ownerDocument,n.map(Q,O),mt=0;mt<ve;mt++)Ae=Q[mt],m.test(Ae.type||"")&&!P.access(Ae,"globalEval")&&n.contains(Ke,Ae)&&(Ae.src&&(Ae.type||"").toLowerCase()!=="module"?n._evalUrl&&!Ae.noModule&&n._evalUrl(Ae.src,{nonce:Ae.nonce||Ae.getAttribute("nonce")},Ke):A(Ae.textContent.replace(L,""),Ae,Ke))}return H}function W(H,$,K){for(var te,oe=$?n.filter($,H):H,he=0;(te=oe[he])!=null;he++)!K&&te.nodeType===1&&n.cleanData(p(te)),te.parentNode&&(K&&c(te)&&y(p(te,"script")),te.parentNode.removeChild(te));return H}return n.extend({htmlPrefilter:function(H){return H},clone:function(H,$,K){var te,oe,he,Q,ve=H.cloneNode(!0),Ae=c(H);if(!x.noCloneChecked&&(H.nodeType===1||H.nodeType===11)&&!n.isXMLDoc(H))for(Q=p(ve),he=p(H),te=0,oe=he.length;te<oe;te++)q(he[te],Q[te]);if($)if(K)for(he=he||p(H),Q=Q||p(ve),te=0,oe=he.length;te<oe;te++)F(he[te],Q[te]);else F(H,ve);return Q=p(ve,"script"),Q.length>0&&y(Q,!Ae&&p(H,"script")),ve},cleanData:function(H){for(var $,K,te,oe=n.event.special,he=0;(K=H[he])!==void 0;he++)if(D(K)){if($=K[P.expando]){if($.events)for(te in $.events)oe[te]?n.event.remove(K,te):n.removeEvent(K,te,$.handle);K[P.expando]=void 0}K[S.expando]&&(K[S.expando]=void 0)}}}),n.fn.extend({detach:function(H){return W(this,H,!0)},remove:function(H){return W(this,H)},text:function(H){return g(this,function($){return $===void 0?n.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=$)})},null,H,arguments.length)},append:function(){return _(this,arguments,function(H){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var $=N(this,H);$.appendChild(H)}})},prepend:function(){return _(this,arguments,function(H){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var $=N(this,H);$.insertBefore(H,$.firstChild)}})},before:function(){return _(this,arguments,function(H){this.parentNode&&this.parentNode.insertBefore(H,this)})},after:function(){return _(this,arguments,function(H){this.parentNode&&this.parentNode.insertBefore(H,this.nextSibling)})},empty:function(){for(var H,$=0;(H=this[$])!=null;$++)H.nodeType===1&&(n.cleanData(p(H,!1)),H.textContent="");return this},clone:function(H,$){return H=H==null?!1:H,$=$==null?H:$,this.map(function(){return n.clone(this,H,$)})},html:function(H){return g(this,function($){var K=this[0]||{},te=0,oe=this.length;if($===void 0&&K.nodeType===1)return K.innerHTML;if(typeof $=="string"&&!C.test($)&&!d[(i.exec($)||["",""])[1].toLowerCase()]){$=n.htmlPrefilter($);try{for(;te<oe;te++)K=this[te]||{},K.nodeType===1&&(n.cleanData(p(K,!1)),K.innerHTML=$);K=0}catch(he){}}K&&this.empty().append($)},null,H,arguments.length)},replaceWith:function(){var H=[];return _(this,arguments,function($){var K=this.parentNode;n.inArray(this,H)<0&&(n.cleanData(p(this)),K&&K.replaceChild($,this))},H)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(H,$){n.fn[H]=function(K){for(var te,oe=[],he=n(K),Q=he.length-1,ve=0;ve<=Q;ve++)te=ve===Q?this:this.clone(!0),n(he[ve])[$](te),s.apply(oe,te.get());return this.pushStack(oe)}}),n}.apply(v,h),r!==void 0&&(w.exports=r)},8123:(w,v,a)=>{var h,r;h=[a(7178)],r=function(n){"use strict";return n._evalUrl=function(c,f,l){return n.ajax({url:c,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(s){n.globalEval(s,f,l)}})},n._evalUrl}.apply(v,h),r!==void 0&&(w.exports=r)},3360:(w,v,a)=>{var h,r;h=[a(8934),a(8082),a(70),a(9422),a(8950),a(5219),a(2455),a(7162)],r=function(n,c,f,l,s,u,g,i){"use strict";var m=/<|&#?\w+;/;function d(p,y,b,x,P){for(var S,D,A,T,C,k,L=y.createDocumentFragment(),N=[],B=0,O=p.length;B<O;B++)if(S=p[B],S||S===0)if(c(S)==="object")n.merge(N,S.nodeType?[S]:S);else if(!m.test(S))N.push(y.createTextNode(S));else{for(D=D||L.appendChild(y.createElement("div")),A=(l.exec(S)||["",""])[1].toLowerCase(),T=u[A]||u._default,D.innerHTML=T[1]+n.htmlPrefilter(S)+T[2],k=T[0];k--;)D=D.lastChild;n.merge(N,D.childNodes),D=L.firstChild,D.textContent=""}for(L.textContent="",B=0;S=N[B++];){if(x&&n.inArray(S,x)>-1){P&&P.push(S);continue}if(C=f(S),D=g(L.appendChild(S),"script"),C&&i(D),b)for(k=0;S=D[k++];)s.test(S.type||"")&&b.push(S)}return L}return d}.apply(v,h),r!==void 0&&(w.exports=r)},2455:(w,v,a)=>{var h,r;h=[a(8934),a(7060)],r=function(n,c){"use strict";function f(l,s){var u;return typeof l.getElementsByTagName!="undefined"?u=l.getElementsByTagName(s||"*"):typeof l.querySelectorAll!="undefined"?u=l.querySelectorAll(s||"*"):u=[],s===void 0||s&&c(l,s)?n.merge([l],u):u}return f}.apply(v,h),r!==void 0&&(w.exports=r)},7162:(w,v,a)=>{var h,r;h=[a(9081)],r=function(n){"use strict";function c(f,l){for(var s=0,u=f.length;s<u;s++)n.set(f[s],"globalEval",!l||n.get(l[s],"globalEval"))}return c}.apply(v,h),r!==void 0&&(w.exports=r)},8771:(w,v,a)=>{var h,r;h=[a(7792),a(9523)],r=function(n,c){"use strict";return function(){var f=n.createDocumentFragment(),l=f.appendChild(n.createElement("div")),s=n.createElement("input");s.setAttribute("type","radio"),s.setAttribute("checked","checked"),s.setAttribute("name","t"),l.appendChild(s),c.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,l.innerHTML="<textarea>x</textarea>",c.noCloneChecked=!!l.cloneNode(!0).lastChild.defaultValue,l.innerHTML="<option></option>",c.option=!!l.lastChild}(),c}.apply(v,h),r!==void 0&&(w.exports=r)},8950:(w,v,a)=>{var h;h=function(){"use strict";return/^$|^module$|\/(?:java|ecma)script/i}.call(v,a,v,w),h!==void 0&&(w.exports=h)},9422:(w,v,a)=>{var h;h=function(){"use strict";return/<([a-z][^\/\0>\x20\t\r\n\f]*)/i}.call(v,a,v,w),h!==void 0&&(w.exports=h)},5219:(w,v,a)=>{var h,r;h=[a(8771)],r=function(n){"use strict";var c={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};return c.tbody=c.tfoot=c.colgroup=c.caption=c.thead,c.th=c.td,n.option||(c.optgroup=c.option=[1,"<select multiple='multiple'>","</select>"]),c}.apply(v,h),r!==void 0&&(w.exports=r)},5356:(w,v,a)=>{var h,r;h=[a(8934),a(7163),a(7730),a(2134),a(618),a(610),a(3781),a(4405),a(9031),a(8048),a(8515),a(655)],r=function(n,c,f,l,s,u,g,i,m){"use strict";return n.offset={setOffset:function(d,p,y){var b,x,P,S,D,A,T,C=n.css(d,"position"),k=n(d),L={};C==="static"&&(d.style.position="relative"),D=k.offset(),P=n.css(d,"top"),A=n.css(d,"left"),T=(C==="absolute"||C==="fixed")&&(P+A).indexOf("auto")>-1,T?(b=k.position(),S=b.top,x=b.left):(S=parseFloat(P)||0,x=parseFloat(A)||0),l(p)&&(p=p.call(d,y,n.extend({},D))),p.top!=null&&(L.top=p.top-D.top+S),p.left!=null&&(L.left=p.left-D.left+x),"using"in p?p.using.call(d,L):k.css(L)}},n.fn.extend({offset:function(d){if(arguments.length)return d===void 0?this:this.each(function(x){n.offset.setOffset(this,d,x)});var p,y,b=this[0];if(!!b)return b.getClientRects().length?(p=b.getBoundingClientRect(),y=b.ownerDocument.defaultView,{top:p.top+y.pageYOffset,left:p.left+y.pageXOffset}):{top:0,left:0}},position:function(){if(!!this[0]){var d,p,y,b=this[0],x={top:0,left:0};if(n.css(b,"position")==="fixed")p=b.getBoundingClientRect();else{for(p=this.offset(),y=b.ownerDocument,d=b.offsetParent||y.documentElement;d&&(d===y.body||d===y.documentElement)&&n.css(d,"position")==="static";)d=d.parentNode;d&&d!==b&&d.nodeType===1&&(x=n(d).offset(),x.top+=n.css(d,"borderTopWidth",!0),x.left+=n.css(d,"borderLeftWidth",!0))}return{top:p.top-x.top-n.css(b,"marginTop",!0),left:p.left-x.left-n.css(b,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var d=this.offsetParent;d&&n.css(d,"position")==="static";)d=d.offsetParent;return d||f})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(d,p){var y=p==="pageYOffset";n.fn[d]=function(b){return c(this,function(x,P,S){var D;if(m(x)?D=x:x.nodeType===9&&(D=x.defaultView),S===void 0)return D?D[p]:x[P];D?D.scrollTo(y?D.pageXOffset:S,y?S:D.pageYOffset):x[P]=S},d,b,arguments.length)}}),n.each(["top","left"],function(d,p){n.cssHooks[p]=g(i.pixelPosition,function(y,b){if(b)return b=u(y,p),s.test(b)?n(y).position()[p]+"px":b})}),n}.apply(v,h),r!==void 0&&(w.exports=r)},1387:(w,v,a)=>{var h,r;h=[a(8934),a(9081),a(6525),a(8924)],r=function(n,c){"use strict";return n.extend({queue:function(f,l,s){var u;if(f)return l=(l||"fx")+"queue",u=c.get(f,l),s&&(!u||Array.isArray(s)?u=c.access(f,l,n.makeArray(s)):u.push(s)),u||[]},dequeue:function(f,l){l=l||"fx";var s=n.queue(f,l),u=s.length,g=s.shift(),i=n._queueHooks(f,l),m=function(){n.dequeue(f,l)};g==="inprogress"&&(g=s.shift(),u--),g&&(l==="fx"&&s.unshift("inprogress"),delete i.stop,g.call(f,m,i)),!u&&i&&i.empty.fire()},_queueHooks:function(f,l){var s=l+"queueHooks";return c.get(f,s)||c.access(f,s,{empty:n.Callbacks("once memory").add(function(){c.remove(f,[l+"queue",s])})})}}),n.fn.extend({queue:function(f,l){var s=2;return typeof f!="string"&&(l=f,f="fx",s--),arguments.length<s?n.queue(this[0],f):l===void 0?this:this.each(function(){var u=n.queue(this,f,l);n._queueHooks(this,f),f==="fx"&&u[0]!=="inprogress"&&n.dequeue(this,f)})},dequeue:function(f){return this.each(function(){n.dequeue(this,f)})},clearQueue:function(f){return this.queue(f||"fx",[])},promise:function(f,l){var s,u=1,g=n.Deferred(),i=this,m=this.length,d=function(){--u||g.resolveWith(i,[i])};for(typeof f!="string"&&(l=f,f=void 0),f=f||"fx";m--;)s=c.get(i[m],f+"queueHooks"),s&&s.empty&&(u++,s.empty.add(d));return d(),g.promise(l)}}),n}.apply(v,h),r!==void 0&&(w.exports=r)},6572:(w,v,a)=>{var h,r;h=[a(8934),a(1387),a(7429)],r=function(n){"use strict";return n.fn.delay=function(c,f){return c=n.fx&&n.fx.speeds[c]||c,f=f||"fx",this.queue(f,function(l,s){var u=window.setTimeout(l,c);s.stop=function(){window.clearTimeout(u)}})},n.fn.delay}.apply(v,h),r!==void 0&&(w.exports=r)},4338:(w,v,a)=>{var h,r;h=[a(8934),a(9414)],r=function(n,c){"use strict";n.find=c,n.expr=c.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=c.uniqueSort,n.text=c.getText,n.isXMLDoc=c.isXML,n.contains=c.contains,n.escapeSelector=c.escape}.apply(v,h),r!==void 0&&(w.exports=r)},655:(w,v,a)=>{var h,r;h=[a(4338)],r=function(){"use strict"}.apply(v,h),r!==void 0&&(w.exports=r)},5385:(w,v,a)=>{var h,r;h=[a(8934),a(8082),a(8104),a(2134),a(8048),a(8482),a(4043)],r=function(n,c,f,l){"use strict";var s=/\[\]$/,u=/\r?\n/g,g=/^(?:submit|button|image|reset|file)$/i,i=/^(?:input|select|textarea|keygen)/i;function m(d,p,y,b){var x;if(Array.isArray(p))n.each(p,function(P,S){y||s.test(d)?b(d,S):m(d+"["+(typeof S=="object"&&S!=null?P:"")+"]",S,y,b)});else if(!y&&c(p)==="object")for(x in p)m(d+"["+x+"]",p[x],y,b);else b(d,p)}return n.param=function(d,p){var y,b=[],x=function(P,S){var D=l(S)?S():S;b[b.length]=encodeURIComponent(P)+"="+encodeURIComponent(D==null?"":D)};if(d==null)return"";if(Array.isArray(d)||d.jquery&&!n.isPlainObject(d))n.each(d,function(){x(this.name,this.value)});else for(y in d)m(y,d[y],p,x);return b.join("&")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var d=n.prop(this,"elements");return d?n.makeArray(d):this}).filter(function(){var d=this.type;return this.name&&!n(this).is(":disabled")&&i.test(this.nodeName)&&!g.test(d)&&(this.checked||!f.test(d))}).map(function(d,p){var y=n(this).val();return y==null?null:Array.isArray(y)?n.map(y,function(b){return{name:p.name,value:b.replace(u,`\r
`)}}):{name:p.name,value:y.replace(u,`\r
`)}}).get()}}),n}.apply(v,h),r!==void 0&&(w.exports=r)},8482:(w,v,a)=>{var h,r;h=[a(8934),a(8045),a(5431),a(1721),a(2495),a(8020),a(7060),a(8048),a(1764),a(655)],r=function(n,c,f,l,s,u,g){"use strict";var i=/^(?:parents|prev(?:Until|All))/,m={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(p){var y=n(p,this),b=y.length;return this.filter(function(){for(var x=0;x<b;x++)if(n.contains(this,y[x]))return!0})},closest:function(p,y){var b,x=0,P=this.length,S=[],D=typeof p!="string"&&n(p);if(!u.test(p)){for(;x<P;x++)for(b=this[x];b&&b!==y;b=b.parentNode)if(b.nodeType<11&&(D?D.index(b)>-1:b.nodeType===1&&n.find.matchesSelector(b,p))){S.push(b);break}}return this.pushStack(S.length>1?n.uniqueSort(S):S)},index:function(p){return p?typeof p=="string"?f.call(n(p),this[0]):f.call(this,p.jquery?p[0]:p):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(p,y){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(p,y))))},addBack:function(p){return this.add(p==null?this.prevObject:this.prevObject.filter(p))}});function d(p,y){for(;(p=p[y])&&p.nodeType!==1;);return p}return n.each({parent:function(p){var y=p.parentNode;return y&&y.nodeType!==11?y:null},parents:function(p){return l(p,"parentNode")},parentsUntil:function(p,y,b){return l(p,"parentNode",b)},next:function(p){return d(p,"nextSibling")},prev:function(p){return d(p,"previousSibling")},nextAll:function(p){return l(p,"nextSibling")},prevAll:function(p){return l(p,"previousSibling")},nextUntil:function(p,y,b){return l(p,"nextSibling",b)},prevUntil:function(p,y,b){return l(p,"previousSibling",b)},siblings:function(p){return s((p.parentNode||{}).firstChild,p)},children:function(p){return s(p.firstChild)},contents:function(p){return p.contentDocument!=null&&c(p.contentDocument)?p.contentDocument:(g(p,"template")&&(p=p.content||p),n.merge([],p.childNodes))}},function(p,y){n.fn[p]=function(b,x){var P=n.map(this,y,b);return p.slice(-5)!=="Until"&&(x=b),x&&typeof x=="string"&&(P=n.filter(x,P)),this.length>1&&(m[p]||n.uniqueSort(P),i.test(p)&&P.reverse()),this.pushStack(P)}}),n}.apply(v,h),r!==void 0&&(w.exports=r)},1764:(w,v,a)=>{var h,r;h=[a(8934),a(5431),a(2134),a(8020),a(655)],r=function(n,c,f,l){"use strict";function s(u,g,i){return f(g)?n.grep(u,function(m,d){return!!g.call(m,d,m)!==i}):g.nodeType?n.grep(u,function(m){return m===g!==i}):typeof g!="string"?n.grep(u,function(m){return c.call(g,m)>-1!==i}):n.filter(g,u,i)}n.filter=function(u,g,i){var m=g[0];return i&&(u=":not("+u+")"),g.length===1&&m.nodeType===1?n.find.matchesSelector(m,u)?[m]:[]:n.find.matches(u,n.grep(g,function(d){return d.nodeType===1}))},n.fn.extend({find:function(u){var g,i,m=this.length,d=this;if(typeof u!="string")return this.pushStack(n(u).filter(function(){for(g=0;g<m;g++)if(n.contains(d[g],this))return!0}));for(i=this.pushStack([]),g=0;g<m;g++)n.find(u,d[g],i);return m>1?n.uniqueSort(i):i},filter:function(u){return this.pushStack(s(this,u||[],!1))},not:function(u){return this.pushStack(s(this,u||[],!0))},is:function(u){return!!s(this,typeof u=="string"&&l.test(u)?n(u):u||[],!1).length}})}.apply(v,h),r!==void 0&&(w.exports=r)},1721:(w,v,a)=>{var h,r;h=[a(8934)],r=function(n){"use strict";return function(c,f,l){for(var s=[],u=l!==void 0;(c=c[f])&&c.nodeType!==9;)if(c.nodeType===1){if(u&&n(c).is(l))break;s.push(c)}return s}}.apply(v,h),r!==void 0&&(w.exports=r)},8020:(w,v,a)=>{var h,r;h=[a(8934),a(655)],r=function(n){"use strict";return n.expr.match.needsContext}.apply(v,h),r!==void 0&&(w.exports=r)},2495:(w,v,a)=>{var h;h=function(){"use strict";return function(r,n){for(var c=[];r;r=r.nextSibling)r.nodeType===1&&r!==n&&c.push(r);return c}}.call(v,a,v,w),h!==void 0&&(w.exports=h)},3:(w,v,a)=>{var h,r;h=[a(4194)],r=function(n){"use strict";return n.call(Object)}.apply(v,h),r!==void 0&&(w.exports=r)},3727:(w,v,a)=>{var h;h=function(){"use strict";return[]}.call(v,a,v,w),h!==void 0&&(w.exports=h)},5949:(w,v,a)=>{var h;h=function(){"use strict";return{}}.call(v,a,v,w),h!==void 0&&(w.exports=h)},7792:(w,v,a)=>{var h;h=function(){"use strict";return window.document}.call(v,a,v,w),h!==void 0&&(w.exports=h)},7730:(w,v,a)=>{var h,r;h=[a(7792)],r=function(n){"use strict";return n.documentElement}.apply(v,h),r!==void 0&&(w.exports=r)},3932:(w,v,a)=>{var h,r;h=[a(3727)],r=function(n){"use strict";return n.flat?function(c){return n.flat.call(c)}:function(c){return n.concat.apply([],c)}}.apply(v,h),r!==void 0&&(w.exports=r)},4194:(w,v,a)=>{var h,r;h=[a(9694)],r=function(n){"use strict";return n.toString}.apply(v,h),r!==void 0&&(w.exports=r)},8045:(w,v,a)=>{var h;h=function(){"use strict";return Object.getPrototypeOf}.call(v,a,v,w),h!==void 0&&(w.exports=h)},9694:(w,v,a)=>{var h,r;h=[a(5949)],r=function(n){"use strict";return n.hasOwnProperty}.apply(v,h),r!==void 0&&(w.exports=r)},5431:(w,v,a)=>{var h,r;h=[a(3727)],r=function(n){"use strict";return n.indexOf}.apply(v,h),r!==void 0&&(w.exports=r)},2134:(w,v,a)=>{var h;h=function(){"use strict";return function(n){return typeof n=="function"&&typeof n.nodeType!="number"&&typeof n.item!="function"}}.call(v,a,v,w),h!==void 0&&(w.exports=h)},9031:(w,v,a)=>{var h;h=function(){"use strict";return function(n){return n!=null&&n===n.window}}.call(v,a,v,w),h!==void 0&&(w.exports=h)},8308:(w,v,a)=>{var h;h=function(){"use strict";return/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source}.call(v,a,v,w),h!==void 0&&(w.exports=h)},1780:(w,v,a)=>{var h,r;h=[a(3727)],r=function(n){"use strict";return n.push}.apply(v,h),r!==void 0&&(w.exports=r)},8104:(w,v,a)=>{var h;h=function(){"use strict";return/^(?:checkbox|radio)$/i}.call(v,a,v,w),h!==void 0&&(w.exports=h)},6871:(w,v,a)=>{var h,r;h=[a(8308)],r=function(n){"use strict";return new RegExp("^(?:([+-])=|)("+n+")([a-z%]*)$","i")}.apply(v,h),r!==void 0&&(w.exports=r)},8663:(w,v,a)=>{var h;h=function(){"use strict";return/[^\x20\t\r\n\f]+/g}.call(v,a,v,w),h!==void 0&&(w.exports=h)},3623:(w,v,a)=>{var h,r;h=[a(3727)],r=function(n){"use strict";return n.slice}.apply(v,h),r!==void 0&&(w.exports=r)},9523:(w,v,a)=>{var h;h=function(){"use strict";return{}}.call(v,a,v,w),h!==void 0&&(w.exports=h)},7763:(w,v,a)=>{var h,r;h=[a(5949)],r=function(n){"use strict";return n.toString}.apply(v,h),r!==void 0&&(w.exports=r)},5594:(w,v,a)=>{var h,r;h=[a(8934),a(2134),a(8048),a(2632),a(8482)],r=function(n,c){"use strict";return n.fn.extend({wrapAll:function(f){var l;return this[0]&&(c(f)&&(f=f.call(this[0])),l=n(f,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&l.insertBefore(this[0]),l.map(function(){for(var s=this;s.firstElementChild;)s=s.firstElementChild;return s}).append(this)),this},wrapInner:function(f){return c(f)?this.each(function(l){n(this).wrapInner(f.call(this,l))}):this.each(function(){var l=n(this),s=l.contents();s.length?s.wrapAll(f):l.append(f)})},wrap:function(f){var l=c(f);return this.each(function(s){n(this).wrapAll(l?f.call(this,s):f)})},unwrap:function(f){return this.parent(f).not("body").each(function(){n(this).replaceWith(this.childNodes)}),this}}),n}.apply(v,h),r!==void 0&&(w.exports=r)},6486:function(w,v,a){w=a.nmd(w);var h;/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/(function(){var r,n="4.17.21",c=200,f="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",s="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",g=500,i="__lodash_placeholder__",m=1,d=2,p=4,y=1,b=2,x=1,P=2,S=4,D=8,A=16,T=32,C=64,k=128,L=256,N=512,B=30,O="...",F=800,q=16,_=1,W=2,H=3,$=1/0,K=9007199254740991,te=17976931348623157e292,oe=0/0,he=4294967295,Q=he-1,ve=he>>>1,Ae=[["ary",k],["bind",x],["bindKey",P],["curry",D],["curryRight",A],["flip",N],["partial",T],["partialRight",C],["rearg",L]],Ke="[object Arguments]",mt="[object Array]",Rt="[object AsyncFunction]",Nt="[object Boolean]",Lt="[object Date]",Wt="[object DOMException]",ze="[object Error]",Mt="[object Function]",Ve="[object GeneratorFunction]",et="[object Map]",Kt="[object Number]",Mn="[object Null]",At="[object Object]",$t="[object Promise]",bn="[object Proxy]",jt="[object RegExp]",lt="[object Set]",pt="[object String]",Cn="[object Symbol]",nr="[object Undefined]",en="[object WeakMap]",br="[object WeakSet]",tt="[object ArrayBuffer]",tn="[object DataView]",_t="[object Float32Array]",pe="[object Float64Array]",Z="[object Int8Array]",de="[object Int16Array]",Pe="[object Int32Array]",ne="[object Uint8Array]",me="[object Uint8ClampedArray]",fe="[object Uint16Array]",xe="[object Uint32Array]",Le=/\b__p \+= '';/g,Fe=/\b(__p \+=) '' \+/g,ke=/(__e\(.*?\)|\b__t\)) \+\n'';/g,De=/&(?:amp|lt|gt|quot|#39);/g,Me=/[&<>"']/g,We=RegExp(De.source),it=RegExp(Me.source),Pt=/<%-([\s\S]+?)%>/g,Ge=/<%([\s\S]+?)%>/g,vt=/<%=([\s\S]+?)%>/g,j=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,U=/^\w*$/,G=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,re=/[\\^$.*+?()[\]{}|]/g,Y=RegExp(re.source),ie=/^\s+/,ae=/\s/,ye=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Se=/\{\n\/\* \[wrapped with (.+)\] \*/,Be=/,? & /,Ie=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,_e=/[()=,{}\[\]\/\s]/,Ye=/\\(\\)?/g,ot=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,je=/\w*$/,St=/^[-+]0x[0-9a-f]+$/i,Ct=/^0b[01]+$/i,be=/^\[object .+?Constructor\]$/,ce=/^0o[0-7]+$/i,Ee=/^(?:0|[1-9]\d*)$/,we=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Re=/($^)/,st=/['\n\r\u2028\u2029\\]/g,Oe="\\ud800-\\udfff",qt="\\u0300-\\u036f",An="\\ufe20-\\ufe2f",Sn="\\u20d0-\\u20ff",Dn=qt+An+Sn,ht="\\u2700-\\u27bf",gt="a-z\\xdf-\\xf6\\xf8-\\xff",Ei="\\xac\\xb1\\xd7\\xf7",Ls="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Bs="\\u2000-\\u206f",rr=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Is="A-Z\\xc0-\\xd6\\xd8-\\xde",js="\\ufe0e\\ufe0f",_s=Ei+Ls+Bs+rr,Ai="['\u2019]",sc="["+Oe+"]",Fs="["+_s+"]",Ir="["+Dn+"]",Ms="\\d+",ac="["+ht+"]",Os="["+gt+"]",Hs="[^"+Oe+_s+Ms+ht+gt+Is+"]",Si="\\ud83c[\\udffb-\\udfff]",oc="(?:"+Ir+"|"+Si+")",qs="[^"+Oe+"]",wi="(?:\\ud83c[\\udde6-\\uddff]){2}",Ti="[\\ud800-\\udbff][\\udc00-\\udfff]",ir="["+Is+"]",Us="\\u200d",zs="(?:"+Os+"|"+Hs+")",cc="(?:"+ir+"|"+Hs+")",Ws="(?:"+Ai+"(?:d|ll|m|re|s|t|ve))?",Ks="(?:"+Ai+"(?:D|LL|M|RE|S|T|VE))?",$s=oc+"?",Gs="["+js+"]?",lc="(?:"+Us+"(?:"+[qs,wi,Ti].join("|")+")"+Gs+$s+")*",uc="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",fc="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Xs=Gs+$s+lc,dc="(?:"+[ac,wi,Ti].join("|")+")"+Xs,pc="(?:"+[qs+Ir+"?",Ir,wi,Ti,sc].join("|")+")",hc=RegExp(Ai,"g"),gc=RegExp(Ir,"g"),Pi=RegExp(Si+"(?="+Si+")|"+pc+Xs,"g"),mc=RegExp([ir+"?"+Os+"+"+Ws+"(?="+[Fs,ir,"$"].join("|")+")",cc+"+"+Ks+"(?="+[Fs,ir+zs,"$"].join("|")+")",ir+"?"+zs+"+"+Ws,ir+"+"+Ks,fc,uc,Ms,dc].join("|"),"g"),bc=RegExp("["+Us+Oe+Dn+js+"]"),vc=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,yc=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],xc=-1,xt={};xt[_t]=xt[pe]=xt[Z]=xt[de]=xt[Pe]=xt[ne]=xt[me]=xt[fe]=xt[xe]=!0,xt[Ke]=xt[mt]=xt[tt]=xt[Nt]=xt[tn]=xt[Lt]=xt[ze]=xt[Mt]=xt[et]=xt[Kt]=xt[At]=xt[jt]=xt[lt]=xt[pt]=xt[en]=!1;var yt={};yt[Ke]=yt[mt]=yt[tt]=yt[tn]=yt[Nt]=yt[Lt]=yt[_t]=yt[pe]=yt[Z]=yt[de]=yt[Pe]=yt[et]=yt[Kt]=yt[At]=yt[jt]=yt[lt]=yt[pt]=yt[Cn]=yt[ne]=yt[me]=yt[fe]=yt[xe]=!0,yt[ze]=yt[Mt]=yt[en]=!1;var Ec={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Ac={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Sc={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},wc={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Tc=parseFloat,Pc=parseInt,Ys=typeof a.g=="object"&&a.g&&a.g.Object===Object&&a.g,Cc=typeof self=="object"&&self&&self.Object===Object&&self,Ot=Ys||Cc||Function("return this")(),Vs=v&&!v.nodeType&&v,vr=Vs&&!0&&w&&!w.nodeType&&w,Js=vr&&vr.exports===Vs,Ci=Js&&Ys.process,ln=function(){try{var V=vr&&vr.require&&vr.require("util").types;return V||Ci&&Ci.binding&&Ci.binding("util")}catch(se){}}(),Zs=ln&&ln.isArrayBuffer,Qs=ln&&ln.isDate,ea=ln&&ln.isMap,ta=ln&&ln.isRegExp,na=ln&&ln.isSet,ra=ln&&ln.isTypedArray;function nn(V,se,ee){switch(ee.length){case 0:return V.call(se);case 1:return V.call(se,ee[0]);case 2:return V.call(se,ee[0],ee[1]);case 3:return V.call(se,ee[0],ee[1],ee[2])}return V.apply(se,ee)}function Dc(V,se,ee,Ce){for(var $e=-1,ct=V==null?0:V.length;++$e<ct;){var Bt=V[$e];se(Ce,Bt,ee(Bt),V)}return Ce}function un(V,se){for(var ee=-1,Ce=V==null?0:V.length;++ee<Ce&&se(V[ee],ee,V)!==!1;);return V}function kc(V,se){for(var ee=V==null?0:V.length;ee--&&se(V[ee],ee,V)!==!1;);return V}function ia(V,se){for(var ee=-1,Ce=V==null?0:V.length;++ee<Ce;)if(!se(V[ee],ee,V))return!1;return!0}function On(V,se){for(var ee=-1,Ce=V==null?0:V.length,$e=0,ct=[];++ee<Ce;){var Bt=V[ee];se(Bt,ee,V)&&(ct[$e++]=Bt)}return ct}function jr(V,se){var ee=V==null?0:V.length;return!!ee&&sr(V,se,0)>-1}function Di(V,se,ee){for(var Ce=-1,$e=V==null?0:V.length;++Ce<$e;)if(ee(se,V[Ce]))return!0;return!1}function Et(V,se){for(var ee=-1,Ce=V==null?0:V.length,$e=Array(Ce);++ee<Ce;)$e[ee]=se(V[ee],ee,V);return $e}function Hn(V,se){for(var ee=-1,Ce=se.length,$e=V.length;++ee<Ce;)V[$e+ee]=se[ee];return V}function ki(V,se,ee,Ce){var $e=-1,ct=V==null?0:V.length;for(Ce&&ct&&(ee=V[++$e]);++$e<ct;)ee=se(ee,V[$e],$e,V);return ee}function Nc(V,se,ee,Ce){var $e=V==null?0:V.length;for(Ce&&$e&&(ee=V[--$e]);$e--;)ee=se(ee,V[$e],$e,V);return ee}function Ni(V,se){for(var ee=-1,Ce=V==null?0:V.length;++ee<Ce;)if(se(V[ee],ee,V))return!0;return!1}var Rc=Ri("length");function Lc(V){return V.split("")}function Bc(V){return V.match(Ie)||[]}function sa(V,se,ee){var Ce;return ee(V,function($e,ct,Bt){if(se($e,ct,Bt))return Ce=ct,!1}),Ce}function _r(V,se,ee,Ce){for(var $e=V.length,ct=ee+(Ce?1:-1);Ce?ct--:++ct<$e;)if(se(V[ct],ct,V))return ct;return-1}function sr(V,se,ee){return se===se?Kc(V,se,ee):_r(V,aa,ee)}function Ic(V,se,ee,Ce){for(var $e=ee-1,ct=V.length;++$e<ct;)if(Ce(V[$e],se))return $e;return-1}function aa(V){return V!==V}function oa(V,se){var ee=V==null?0:V.length;return ee?Bi(V,se)/ee:oe}function Ri(V){return function(se){return se==null?r:se[V]}}function Li(V){return function(se){return V==null?r:V[se]}}function ca(V,se,ee,Ce,$e){return $e(V,function(ct,Bt,bt){ee=Ce?(Ce=!1,ct):se(ee,ct,Bt,bt)}),ee}function jc(V,se){var ee=V.length;for(V.sort(se);ee--;)V[ee]=V[ee].value;return V}function Bi(V,se){for(var ee,Ce=-1,$e=V.length;++Ce<$e;){var ct=se(V[Ce]);ct!==r&&(ee=ee===r?ct:ee+ct)}return ee}function Ii(V,se){for(var ee=-1,Ce=Array(V);++ee<V;)Ce[ee]=se(ee);return Ce}function _c(V,se){return Et(se,function(ee){return[ee,V[ee]]})}function la(V){return V&&V.slice(0,pa(V)+1).replace(ie,"")}function rn(V){return function(se){return V(se)}}function ji(V,se){return Et(se,function(ee){return V[ee]})}function yr(V,se){return V.has(se)}function ua(V,se){for(var ee=-1,Ce=V.length;++ee<Ce&&sr(se,V[ee],0)>-1;);return ee}function fa(V,se){for(var ee=V.length;ee--&&sr(se,V[ee],0)>-1;);return ee}function Fc(V,se){for(var ee=V.length,Ce=0;ee--;)V[ee]===se&&++Ce;return Ce}var Mc=Li(Ec),Oc=Li(Ac);function Hc(V){return"\\"+wc[V]}function qc(V,se){return V==null?r:V[se]}function ar(V){return bc.test(V)}function Uc(V){return vc.test(V)}function zc(V){for(var se,ee=[];!(se=V.next()).done;)ee.push(se.value);return ee}function _i(V){var se=-1,ee=Array(V.size);return V.forEach(function(Ce,$e){ee[++se]=[$e,Ce]}),ee}function da(V,se){return function(ee){return V(se(ee))}}function qn(V,se){for(var ee=-1,Ce=V.length,$e=0,ct=[];++ee<Ce;){var Bt=V[ee];(Bt===se||Bt===i)&&(V[ee]=i,ct[$e++]=ee)}return ct}function Fr(V){var se=-1,ee=Array(V.size);return V.forEach(function(Ce){ee[++se]=Ce}),ee}function Wc(V){var se=-1,ee=Array(V.size);return V.forEach(function(Ce){ee[++se]=[Ce,Ce]}),ee}function Kc(V,se,ee){for(var Ce=ee-1,$e=V.length;++Ce<$e;)if(V[Ce]===se)return Ce;return-1}function $c(V,se,ee){for(var Ce=ee+1;Ce--;)if(V[Ce]===se)return Ce;return Ce}function or(V){return ar(V)?Xc(V):Rc(V)}function vn(V){return ar(V)?Yc(V):Lc(V)}function pa(V){for(var se=V.length;se--&&ae.test(V.charAt(se)););return se}var Gc=Li(Sc);function Xc(V){for(var se=Pi.lastIndex=0;Pi.test(V);)++se;return se}function Yc(V){return V.match(Pi)||[]}function Vc(V){return V.match(mc)||[]}var Jc=function V(se){se=se==null?Ot:Mr.defaults(Ot.Object(),se,Mr.pick(Ot,yc));var ee=se.Array,Ce=se.Date,$e=se.Error,ct=se.Function,Bt=se.Math,bt=se.Object,Fi=se.RegExp,Zc=se.String,fn=se.TypeError,Or=ee.prototype,Qc=ct.prototype,cr=bt.prototype,Hr=se["__core-js_shared__"],qr=Qc.toString,dt=cr.hasOwnProperty,el=0,ha=function(){var e=/[^.]+$/.exec(Hr&&Hr.keys&&Hr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Ur=cr.toString,tl=qr.call(bt),nl=Ot._,rl=Fi("^"+qr.call(dt).replace(re,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),zr=Js?se.Buffer:r,Un=se.Symbol,Wr=se.Uint8Array,ga=zr?zr.allocUnsafe:r,Kr=da(bt.getPrototypeOf,bt),ma=bt.create,ba=cr.propertyIsEnumerable,$r=Or.splice,va=Un?Un.isConcatSpreadable:r,xr=Un?Un.iterator:r,Xn=Un?Un.toStringTag:r,Gr=function(){try{var e=Qn(bt,"defineProperty");return e({},"",{}),e}catch(t){}}(),il=se.clearTimeout!==Ot.clearTimeout&&se.clearTimeout,sl=Ce&&Ce.now!==Ot.Date.now&&Ce.now,al=se.setTimeout!==Ot.setTimeout&&se.setTimeout,Xr=Bt.ceil,Yr=Bt.floor,Mi=bt.getOwnPropertySymbols,ol=zr?zr.isBuffer:r,ya=se.isFinite,cl=Or.join,ll=da(bt.keys,bt),It=Bt.max,Ut=Bt.min,ul=Ce.now,fl=se.parseInt,xa=Bt.random,dl=Or.reverse,Oi=Qn(se,"DataView"),Er=Qn(se,"Map"),Hi=Qn(se,"Promise"),lr=Qn(se,"Set"),Ar=Qn(se,"WeakMap"),Sr=Qn(bt,"create"),Vr=Ar&&new Ar,ur={},pl=er(Oi),hl=er(Er),gl=er(Hi),ml=er(lr),bl=er(Ar),Jr=Un?Un.prototype:r,wr=Jr?Jr.valueOf:r,Ea=Jr?Jr.toString:r;function I(e){if(Tt(e)&&!Xe(e)&&!(e instanceof rt)){if(e instanceof dn)return e;if(dt.call(e,"__wrapped__"))return So(e)}return new dn(e)}var fr=function(){function e(){}return function(t){if(!wt(t))return{};if(ma)return ma(t);e.prototype=t;var o=new e;return e.prototype=r,o}}();function Zr(){}function dn(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=r}I.templateSettings={escape:Pt,evaluate:Ge,interpolate:vt,variable:"",imports:{_:I}},I.prototype=Zr.prototype,I.prototype.constructor=I,dn.prototype=fr(Zr.prototype),dn.prototype.constructor=dn;function rt(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=he,this.__views__=[]}function vl(){var e=new rt(this.__wrapped__);return e.__actions__=Vt(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Vt(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Vt(this.__views__),e}function yl(){if(this.__filtered__){var e=new rt(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function xl(){var e=this.__wrapped__.value(),t=this.__dir__,o=Xe(e),E=t<0,R=o?e.length:0,M=Lu(0,R,this.__views__),z=M.start,X=M.end,J=X-z,le=E?X:z-1,ue=this.__iteratees__,ge=ue.length,Te=0,Ne=Ut(J,this.__takeCount__);if(!o||!E&&R==J&&Ne==J)return Ka(e,this.__actions__);var qe=[];e:for(;J--&&Te<Ne;){le+=t;for(var Ze=-1,Ue=e[le];++Ze<ge;){var nt=ue[Ze],at=nt.iteratee,on=nt.type,Yt=at(Ue);if(on==W)Ue=Yt;else if(!Yt){if(on==_)continue e;break e}}qe[Te++]=Ue}return qe}rt.prototype=fr(Zr.prototype),rt.prototype.constructor=rt;function Yn(e){var t=-1,o=e==null?0:e.length;for(this.clear();++t<o;){var E=e[t];this.set(E[0],E[1])}}function El(){this.__data__=Sr?Sr(null):{},this.size=0}function Al(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function Sl(e){var t=this.__data__;if(Sr){var o=t[e];return o===u?r:o}return dt.call(t,e)?t[e]:r}function wl(e){var t=this.__data__;return Sr?t[e]!==r:dt.call(t,e)}function Tl(e,t){var o=this.__data__;return this.size+=this.has(e)?0:1,o[e]=Sr&&t===r?u:t,this}Yn.prototype.clear=El,Yn.prototype.delete=Al,Yn.prototype.get=Sl,Yn.prototype.has=wl,Yn.prototype.set=Tl;function kn(e){var t=-1,o=e==null?0:e.length;for(this.clear();++t<o;){var E=e[t];this.set(E[0],E[1])}}function Pl(){this.__data__=[],this.size=0}function Cl(e){var t=this.__data__,o=Qr(t,e);if(o<0)return!1;var E=t.length-1;return o==E?t.pop():$r.call(t,o,1),--this.size,!0}function Dl(e){var t=this.__data__,o=Qr(t,e);return o<0?r:t[o][1]}function kl(e){return Qr(this.__data__,e)>-1}function Nl(e,t){var o=this.__data__,E=Qr(o,e);return E<0?(++this.size,o.push([e,t])):o[E][1]=t,this}kn.prototype.clear=Pl,kn.prototype.delete=Cl,kn.prototype.get=Dl,kn.prototype.has=kl,kn.prototype.set=Nl;function Nn(e){var t=-1,o=e==null?0:e.length;for(this.clear();++t<o;){var E=e[t];this.set(E[0],E[1])}}function Rl(){this.size=0,this.__data__={hash:new Yn,map:new(Er||kn),string:new Yn}}function Ll(e){var t=fi(this,e).delete(e);return this.size-=t?1:0,t}function Bl(e){return fi(this,e).get(e)}function Il(e){return fi(this,e).has(e)}function jl(e,t){var o=fi(this,e),E=o.size;return o.set(e,t),this.size+=o.size==E?0:1,this}Nn.prototype.clear=Rl,Nn.prototype.delete=Ll,Nn.prototype.get=Bl,Nn.prototype.has=Il,Nn.prototype.set=jl;function Vn(e){var t=-1,o=e==null?0:e.length;for(this.__data__=new Nn;++t<o;)this.add(e[t])}function _l(e){return this.__data__.set(e,u),this}function Fl(e){return this.__data__.has(e)}Vn.prototype.add=Vn.prototype.push=_l,Vn.prototype.has=Fl;function yn(e){var t=this.__data__=new kn(e);this.size=t.size}function Ml(){this.__data__=new kn,this.size=0}function Ol(e){var t=this.__data__,o=t.delete(e);return this.size=t.size,o}function Hl(e){return this.__data__.get(e)}function ql(e){return this.__data__.has(e)}function Ul(e,t){var o=this.__data__;if(o instanceof kn){var E=o.__data__;if(!Er||E.length<c-1)return E.push([e,t]),this.size=++o.size,this;o=this.__data__=new Nn(E)}return o.set(e,t),this.size=o.size,this}yn.prototype.clear=Ml,yn.prototype.delete=Ol,yn.prototype.get=Hl,yn.prototype.has=ql,yn.prototype.set=Ul;function Aa(e,t){var o=Xe(e),E=!o&&tr(e),R=!o&&!E&&Gn(e),M=!o&&!E&&!R&&gr(e),z=o||E||R||M,X=z?Ii(e.length,Zc):[],J=X.length;for(var le in e)(t||dt.call(e,le))&&!(z&&(le=="length"||R&&(le=="offset"||le=="parent")||M&&(le=="buffer"||le=="byteLength"||le=="byteOffset")||In(le,J)))&&X.push(le);return X}function Sa(e){var t=e.length;return t?e[Ji(0,t-1)]:r}function zl(e,t){return di(Vt(e),Jn(t,0,e.length))}function Wl(e){return di(Vt(e))}function qi(e,t,o){(o!==r&&!xn(e[t],o)||o===r&&!(t in e))&&Rn(e,t,o)}function Tr(e,t,o){var E=e[t];(!(dt.call(e,t)&&xn(E,o))||o===r&&!(t in e))&&Rn(e,t,o)}function Qr(e,t){for(var o=e.length;o--;)if(xn(e[o][0],t))return o;return-1}function Kl(e,t,o,E){return zn(e,function(R,M,z){t(E,R,o(R),z)}),E}function wa(e,t){return e&&Tn(t,Ft(t),e)}function $l(e,t){return e&&Tn(t,Zt(t),e)}function Rn(e,t,o){t=="__proto__"&&Gr?Gr(e,t,{configurable:!0,enumerable:!0,value:o,writable:!0}):e[t]=o}function Ui(e,t){for(var o=-1,E=t.length,R=ee(E),M=e==null;++o<E;)R[o]=M?r:As(e,t[o]);return R}function Jn(e,t,o){return e===e&&(o!==r&&(e=e<=o?e:o),t!==r&&(e=e>=t?e:t)),e}function pn(e,t,o,E,R,M){var z,X=t&m,J=t&d,le=t&p;if(o&&(z=R?o(e,E,R,M):o(e)),z!==r)return z;if(!wt(e))return e;var ue=Xe(e);if(ue){if(z=Iu(e),!X)return Vt(e,z)}else{var ge=zt(e),Te=ge==Mt||ge==Ve;if(Gn(e))return Xa(e,X);if(ge==At||ge==Ke||Te&&!R){if(z=J||Te?{}:ho(e),!X)return J?Su(e,$l(z,e)):Au(e,wa(z,e))}else{if(!yt[ge])return R?e:{};z=ju(e,ge,X)}}M||(M=new yn);var Ne=M.get(e);if(Ne)return Ne;M.set(e,z),zo(e)?e.forEach(function(Ue){z.add(pn(Ue,t,o,Ue,e,M))}):qo(e)&&e.forEach(function(Ue,nt){z.set(nt,pn(Ue,t,o,nt,e,M))});var qe=le?J?cs:os:J?Zt:Ft,Ze=ue?r:qe(e);return un(Ze||e,function(Ue,nt){Ze&&(nt=Ue,Ue=e[nt]),Tr(z,nt,pn(Ue,t,o,nt,e,M))}),z}function Gl(e){var t=Ft(e);return function(o){return Ta(o,e,t)}}function Ta(e,t,o){var E=o.length;if(e==null)return!E;for(e=bt(e);E--;){var R=o[E],M=t[R],z=e[R];if(z===r&&!(R in e)||!M(z))return!1}return!0}function Pa(e,t,o){if(typeof e!="function")throw new fn(l);return Lr(function(){e.apply(r,o)},t)}function Pr(e,t,o,E){var R=-1,M=jr,z=!0,X=e.length,J=[],le=t.length;if(!X)return J;o&&(t=Et(t,rn(o))),E?(M=Di,z=!1):t.length>=c&&(M=yr,z=!1,t=new Vn(t));e:for(;++R<X;){var ue=e[R],ge=o==null?ue:o(ue);if(ue=E||ue!==0?ue:0,z&&ge===ge){for(var Te=le;Te--;)if(t[Te]===ge)continue e;J.push(ue)}else M(t,ge,E)||J.push(ue)}return J}var zn=Qa(wn),Ca=Qa(Wi,!0);function Xl(e,t){var o=!0;return zn(e,function(E,R,M){return o=!!t(E,R,M),o}),o}function ei(e,t,o){for(var E=-1,R=e.length;++E<R;){var M=e[E],z=t(M);if(z!=null&&(X===r?z===z&&!an(z):o(z,X)))var X=z,J=M}return J}function Yl(e,t,o,E){var R=e.length;for(o=Je(o),o<0&&(o=-o>R?0:R+o),E=E===r||E>R?R:Je(E),E<0&&(E+=R),E=o>E?0:Ko(E);o<E;)e[o++]=t;return e}function Da(e,t){var o=[];return zn(e,function(E,R,M){t(E,R,M)&&o.push(E)}),o}function Ht(e,t,o,E,R){var M=-1,z=e.length;for(o||(o=Fu),R||(R=[]);++M<z;){var X=e[M];t>0&&o(X)?t>1?Ht(X,t-1,o,E,R):Hn(R,X):E||(R[R.length]=X)}return R}var zi=eo(),ka=eo(!0);function wn(e,t){return e&&zi(e,t,Ft)}function Wi(e,t){return e&&ka(e,t,Ft)}function ti(e,t){return On(t,function(o){return jn(e[o])})}function Zn(e,t){t=Kn(t,e);for(var o=0,E=t.length;e!=null&&o<E;)e=e[Pn(t[o++])];return o&&o==E?e:r}function Na(e,t,o){var E=t(e);return Xe(e)?E:Hn(E,o(e))}function Gt(e){return e==null?e===r?nr:Mn:Xn&&Xn in bt(e)?Ru(e):Wu(e)}function Ki(e,t){return e>t}function Vl(e,t){return e!=null&&dt.call(e,t)}function Jl(e,t){return e!=null&&t in bt(e)}function Zl(e,t,o){return e>=Ut(t,o)&&e<It(t,o)}function $i(e,t,o){for(var E=o?Di:jr,R=e[0].length,M=e.length,z=M,X=ee(M),J=1/0,le=[];z--;){var ue=e[z];z&&t&&(ue=Et(ue,rn(t))),J=Ut(ue.length,J),X[z]=!o&&(t||R>=120&&ue.length>=120)?new Vn(z&&ue):r}ue=e[0];var ge=-1,Te=X[0];e:for(;++ge<R&&le.length<J;){var Ne=ue[ge],qe=t?t(Ne):Ne;if(Ne=o||Ne!==0?Ne:0,!(Te?yr(Te,qe):E(le,qe,o))){for(z=M;--z;){var Ze=X[z];if(!(Ze?yr(Ze,qe):E(e[z],qe,o)))continue e}Te&&Te.push(qe),le.push(Ne)}}return le}function Ql(e,t,o,E){return wn(e,function(R,M,z){t(E,o(R),M,z)}),E}function Cr(e,t,o){t=Kn(t,e),e=vo(e,t);var E=e==null?e:e[Pn(gn(t))];return E==null?r:nn(E,e,o)}function Ra(e){return Tt(e)&&Gt(e)==Ke}function eu(e){return Tt(e)&&Gt(e)==tt}function tu(e){return Tt(e)&&Gt(e)==Lt}function Dr(e,t,o,E,R){return e===t?!0:e==null||t==null||!Tt(e)&&!Tt(t)?e!==e&&t!==t:nu(e,t,o,E,Dr,R)}function nu(e,t,o,E,R,M){var z=Xe(e),X=Xe(t),J=z?mt:zt(e),le=X?mt:zt(t);J=J==Ke?At:J,le=le==Ke?At:le;var ue=J==At,ge=le==At,Te=J==le;if(Te&&Gn(e)){if(!Gn(t))return!1;z=!0,ue=!1}if(Te&&!ue)return M||(M=new yn),z||gr(e)?uo(e,t,o,E,R,M):ku(e,t,J,o,E,R,M);if(!(o&y)){var Ne=ue&&dt.call(e,"__wrapped__"),qe=ge&&dt.call(t,"__wrapped__");if(Ne||qe){var Ze=Ne?e.value():e,Ue=qe?t.value():t;return M||(M=new yn),R(Ze,Ue,o,E,M)}}return Te?(M||(M=new yn),Nu(e,t,o,E,R,M)):!1}function ru(e){return Tt(e)&&zt(e)==et}function Gi(e,t,o,E){var R=o.length,M=R,z=!E;if(e==null)return!M;for(e=bt(e);R--;){var X=o[R];if(z&&X[2]?X[1]!==e[X[0]]:!(X[0]in e))return!1}for(;++R<M;){X=o[R];var J=X[0],le=e[J],ue=X[1];if(z&&X[2]){if(le===r&&!(J in e))return!1}else{var ge=new yn;if(E)var Te=E(le,ue,J,e,t,ge);if(!(Te===r?Dr(ue,le,y|b,E,ge):Te))return!1}}return!0}function La(e){if(!wt(e)||Ou(e))return!1;var t=jn(e)?rl:be;return t.test(er(e))}function iu(e){return Tt(e)&&Gt(e)==jt}function su(e){return Tt(e)&&zt(e)==lt}function au(e){return Tt(e)&&vi(e.length)&&!!xt[Gt(e)]}function Ba(e){return typeof e=="function"?e:e==null?Qt:typeof e=="object"?Xe(e)?_a(e[0],e[1]):ja(e):nc(e)}function Xi(e){if(!Rr(e))return ll(e);var t=[];for(var o in bt(e))dt.call(e,o)&&o!="constructor"&&t.push(o);return t}function ou(e){if(!wt(e))return zu(e);var t=Rr(e),o=[];for(var E in e)E=="constructor"&&(t||!dt.call(e,E))||o.push(E);return o}function Yi(e,t){return e<t}function Ia(e,t){var o=-1,E=Jt(e)?ee(e.length):[];return zn(e,function(R,M,z){E[++o]=t(R,M,z)}),E}function ja(e){var t=us(e);return t.length==1&&t[0][2]?mo(t[0][0],t[0][1]):function(o){return o===e||Gi(o,e,t)}}function _a(e,t){return ds(e)&&go(t)?mo(Pn(e),t):function(o){var E=As(o,e);return E===r&&E===t?Ss(o,e):Dr(t,E,y|b)}}function ni(e,t,o,E,R){e!==t&&zi(t,function(M,z){if(R||(R=new yn),wt(M))cu(e,t,z,o,ni,E,R);else{var X=E?E(hs(e,z),M,z+"",e,t,R):r;X===r&&(X=M),qi(e,z,X)}},Zt)}function cu(e,t,o,E,R,M,z){var X=hs(e,o),J=hs(t,o),le=z.get(J);if(le){qi(e,o,le);return}var ue=M?M(X,J,o+"",e,t,z):r,ge=ue===r;if(ge){var Te=Xe(J),Ne=!Te&&Gn(J),qe=!Te&&!Ne&&gr(J);ue=J,Te||Ne||qe?Xe(X)?ue=X:Dt(X)?ue=Vt(X):Ne?(ge=!1,ue=Xa(J,!0)):qe?(ge=!1,ue=Ya(J,!0)):ue=[]:Br(J)||tr(J)?(ue=X,tr(X)?ue=$o(X):(!wt(X)||jn(X))&&(ue=ho(J))):ge=!1}ge&&(z.set(J,ue),R(ue,J,E,M,z),z.delete(J)),qi(e,o,ue)}function Fa(e,t){var o=e.length;if(!!o)return t+=t<0?o:0,In(t,o)?e[t]:r}function Ma(e,t,o){t.length?t=Et(t,function(M){return Xe(M)?function(z){return Zn(z,M.length===1?M[0]:M)}:M}):t=[Qt];var E=-1;t=Et(t,rn(He()));var R=Ia(e,function(M,z,X){var J=Et(t,function(le){return le(M)});return{criteria:J,index:++E,value:M}});return jc(R,function(M,z){return Eu(M,z,o)})}function lu(e,t){return Oa(e,t,function(o,E){return Ss(e,E)})}function Oa(e,t,o){for(var E=-1,R=t.length,M={};++E<R;){var z=t[E],X=Zn(e,z);o(X,z)&&kr(M,Kn(z,e),X)}return M}function uu(e){return function(t){return Zn(t,e)}}function Vi(e,t,o,E){var R=E?Ic:sr,M=-1,z=t.length,X=e;for(e===t&&(t=Vt(t)),o&&(X=Et(e,rn(o)));++M<z;)for(var J=0,le=t[M],ue=o?o(le):le;(J=R(X,ue,J,E))>-1;)X!==e&&$r.call(X,J,1),$r.call(e,J,1);return e}function Ha(e,t){for(var o=e?t.length:0,E=o-1;o--;){var R=t[o];if(o==E||R!==M){var M=R;In(R)?$r.call(e,R,1):es(e,R)}}return e}function Ji(e,t){return e+Yr(xa()*(t-e+1))}function fu(e,t,o,E){for(var R=-1,M=It(Xr((t-e)/(o||1)),0),z=ee(M);M--;)z[E?M:++R]=e,e+=o;return z}function Zi(e,t){var o="";if(!e||t<1||t>K)return o;do t%2&&(o+=e),t=Yr(t/2),t&&(e+=e);while(t);return o}function Qe(e,t){return gs(bo(e,t,Qt),e+"")}function du(e){return Sa(mr(e))}function pu(e,t){var o=mr(e);return di(o,Jn(t,0,o.length))}function kr(e,t,o,E){if(!wt(e))return e;t=Kn(t,e);for(var R=-1,M=t.length,z=M-1,X=e;X!=null&&++R<M;){var J=Pn(t[R]),le=o;if(J==="__proto__"||J==="constructor"||J==="prototype")return e;if(R!=z){var ue=X[J];le=E?E(ue,J,X):r,le===r&&(le=wt(ue)?ue:In(t[R+1])?[]:{})}Tr(X,J,le),X=X[J]}return e}var qa=Vr?function(e,t){return Vr.set(e,t),e}:Qt,hu=Gr?function(e,t){return Gr(e,"toString",{configurable:!0,enumerable:!1,value:Ts(t),writable:!0})}:Qt;function gu(e){return di(mr(e))}function hn(e,t,o){var E=-1,R=e.length;t<0&&(t=-t>R?0:R+t),o=o>R?R:o,o<0&&(o+=R),R=t>o?0:o-t>>>0,t>>>=0;for(var M=ee(R);++E<R;)M[E]=e[E+t];return M}function mu(e,t){var o;return zn(e,function(E,R,M){return o=t(E,R,M),!o}),!!o}function ri(e,t,o){var E=0,R=e==null?E:e.length;if(typeof t=="number"&&t===t&&R<=ve){for(;E<R;){var M=E+R>>>1,z=e[M];z!==null&&!an(z)&&(o?z<=t:z<t)?E=M+1:R=M}return R}return Qi(e,t,Qt,o)}function Qi(e,t,o,E){var R=0,M=e==null?0:e.length;if(M===0)return 0;t=o(t);for(var z=t!==t,X=t===null,J=an(t),le=t===r;R<M;){var ue=Yr((R+M)/2),ge=o(e[ue]),Te=ge!==r,Ne=ge===null,qe=ge===ge,Ze=an(ge);if(z)var Ue=E||qe;else le?Ue=qe&&(E||Te):X?Ue=qe&&Te&&(E||!Ne):J?Ue=qe&&Te&&!Ne&&(E||!Ze):Ne||Ze?Ue=!1:Ue=E?ge<=t:ge<t;Ue?R=ue+1:M=ue}return Ut(M,Q)}function Ua(e,t){for(var o=-1,E=e.length,R=0,M=[];++o<E;){var z=e[o],X=t?t(z):z;if(!o||!xn(X,J)){var J=X;M[R++]=z===0?0:z}}return M}function za(e){return typeof e=="number"?e:an(e)?oe:+e}function sn(e){if(typeof e=="string")return e;if(Xe(e))return Et(e,sn)+"";if(an(e))return Ea?Ea.call(e):"";var t=e+"";return t=="0"&&1/e==-$?"-0":t}function Wn(e,t,o){var E=-1,R=jr,M=e.length,z=!0,X=[],J=X;if(o)z=!1,R=Di;else if(M>=c){var le=t?null:Cu(e);if(le)return Fr(le);z=!1,R=yr,J=new Vn}else J=t?[]:X;e:for(;++E<M;){var ue=e[E],ge=t?t(ue):ue;if(ue=o||ue!==0?ue:0,z&&ge===ge){for(var Te=J.length;Te--;)if(J[Te]===ge)continue e;t&&J.push(ge),X.push(ue)}else R(J,ge,o)||(J!==X&&J.push(ge),X.push(ue))}return X}function es(e,t){return t=Kn(t,e),e=vo(e,t),e==null||delete e[Pn(gn(t))]}function Wa(e,t,o,E){return kr(e,t,o(Zn(e,t)),E)}function ii(e,t,o,E){for(var R=e.length,M=E?R:-1;(E?M--:++M<R)&&t(e[M],M,e););return o?hn(e,E?0:M,E?M+1:R):hn(e,E?M+1:0,E?R:M)}function Ka(e,t){var o=e;return o instanceof rt&&(o=o.value()),ki(t,function(E,R){return R.func.apply(R.thisArg,Hn([E],R.args))},o)}function ts(e,t,o){var E=e.length;if(E<2)return E?Wn(e[0]):[];for(var R=-1,M=ee(E);++R<E;)for(var z=e[R],X=-1;++X<E;)X!=R&&(M[R]=Pr(M[R]||z,e[X],t,o));return Wn(Ht(M,1),t,o)}function $a(e,t,o){for(var E=-1,R=e.length,M=t.length,z={};++E<R;){var X=E<M?t[E]:r;o(z,e[E],X)}return z}function ns(e){return Dt(e)?e:[]}function rs(e){return typeof e=="function"?e:Qt}function Kn(e,t){return Xe(e)?e:ds(e,t)?[e]:Ao(ut(e))}var bu=Qe;function $n(e,t,o){var E=e.length;return o=o===r?E:o,!t&&o>=E?e:hn(e,t,o)}var Ga=il||function(e){return Ot.clearTimeout(e)};function Xa(e,t){if(t)return e.slice();var o=e.length,E=ga?ga(o):new e.constructor(o);return e.copy(E),E}function is(e){var t=new e.constructor(e.byteLength);return new Wr(t).set(new Wr(e)),t}function vu(e,t){var o=t?is(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.byteLength)}function yu(e){var t=new e.constructor(e.source,je.exec(e));return t.lastIndex=e.lastIndex,t}function xu(e){return wr?bt(wr.call(e)):{}}function Ya(e,t){var o=t?is(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.length)}function Va(e,t){if(e!==t){var o=e!==r,E=e===null,R=e===e,M=an(e),z=t!==r,X=t===null,J=t===t,le=an(t);if(!X&&!le&&!M&&e>t||M&&z&&J&&!X&&!le||E&&z&&J||!o&&J||!R)return 1;if(!E&&!M&&!le&&e<t||le&&o&&R&&!E&&!M||X&&o&&R||!z&&R||!J)return-1}return 0}function Eu(e,t,o){for(var E=-1,R=e.criteria,M=t.criteria,z=R.length,X=o.length;++E<z;){var J=Va(R[E],M[E]);if(J){if(E>=X)return J;var le=o[E];return J*(le=="desc"?-1:1)}}return e.index-t.index}function Ja(e,t,o,E){for(var R=-1,M=e.length,z=o.length,X=-1,J=t.length,le=It(M-z,0),ue=ee(J+le),ge=!E;++X<J;)ue[X]=t[X];for(;++R<z;)(ge||R<M)&&(ue[o[R]]=e[R]);for(;le--;)ue[X++]=e[R++];return ue}function Za(e,t,o,E){for(var R=-1,M=e.length,z=-1,X=o.length,J=-1,le=t.length,ue=It(M-X,0),ge=ee(ue+le),Te=!E;++R<ue;)ge[R]=e[R];for(var Ne=R;++J<le;)ge[Ne+J]=t[J];for(;++z<X;)(Te||R<M)&&(ge[Ne+o[z]]=e[R++]);return ge}function Vt(e,t){var o=-1,E=e.length;for(t||(t=ee(E));++o<E;)t[o]=e[o];return t}function Tn(e,t,o,E){var R=!o;o||(o={});for(var M=-1,z=t.length;++M<z;){var X=t[M],J=E?E(o[X],e[X],X,o,e):r;J===r&&(J=e[X]),R?Rn(o,X,J):Tr(o,X,J)}return o}function Au(e,t){return Tn(e,fs(e),t)}function Su(e,t){return Tn(e,fo(e),t)}function si(e,t){return function(o,E){var R=Xe(o)?Dc:Kl,M=t?t():{};return R(o,e,He(E,2),M)}}function dr(e){return Qe(function(t,o){var E=-1,R=o.length,M=R>1?o[R-1]:r,z=R>2?o[2]:r;for(M=e.length>3&&typeof M=="function"?(R--,M):r,z&&Xt(o[0],o[1],z)&&(M=R<3?r:M,R=1),t=bt(t);++E<R;){var X=o[E];X&&e(t,X,E,M)}return t})}function Qa(e,t){return function(o,E){if(o==null)return o;if(!Jt(o))return e(o,E);for(var R=o.length,M=t?R:-1,z=bt(o);(t?M--:++M<R)&&E(z[M],M,z)!==!1;);return o}}function eo(e){return function(t,o,E){for(var R=-1,M=bt(t),z=E(t),X=z.length;X--;){var J=z[e?X:++R];if(o(M[J],J,M)===!1)break}return t}}function wu(e,t,o){var E=t&x,R=Nr(e);function M(){var z=this&&this!==Ot&&this instanceof M?R:e;return z.apply(E?o:this,arguments)}return M}function to(e){return function(t){t=ut(t);var o=ar(t)?vn(t):r,E=o?o[0]:t.charAt(0),R=o?$n(o,1).join(""):t.slice(1);return E[e]()+R}}function pr(e){return function(t){return ki(ec(Qo(t).replace(hc,"")),e,"")}}function Nr(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var o=fr(e.prototype),E=e.apply(o,t);return wt(E)?E:o}}function Tu(e,t,o){var E=Nr(e);function R(){for(var M=arguments.length,z=ee(M),X=M,J=hr(R);X--;)z[X]=arguments[X];var le=M<3&&z[0]!==J&&z[M-1]!==J?[]:qn(z,J);if(M-=le.length,M<o)return ao(e,t,ai,R.placeholder,r,z,le,r,r,o-M);var ue=this&&this!==Ot&&this instanceof R?E:e;return nn(ue,this,z)}return R}function no(e){return function(t,o,E){var R=bt(t);if(!Jt(t)){var M=He(o,3);t=Ft(t),o=function(X){return M(R[X],X,R)}}var z=e(t,o,E);return z>-1?R[M?t[z]:z]:r}}function ro(e){return Bn(function(t){var o=t.length,E=o,R=dn.prototype.thru;for(e&&t.reverse();E--;){var M=t[E];if(typeof M!="function")throw new fn(l);if(R&&!z&&ui(M)=="wrapper")var z=new dn([],!0)}for(E=z?E:o;++E<o;){M=t[E];var X=ui(M),J=X=="wrapper"?ls(M):r;J&&ps(J[0])&&J[1]==(k|D|T|L)&&!J[4].length&&J[9]==1?z=z[ui(J[0])].apply(z,J[3]):z=M.length==1&&ps(M)?z[X]():z.thru(M)}return function(){var le=arguments,ue=le[0];if(z&&le.length==1&&Xe(ue))return z.plant(ue).value();for(var ge=0,Te=o?t[ge].apply(this,le):ue;++ge<o;)Te=t[ge].call(this,Te);return Te}})}function ai(e,t,o,E,R,M,z,X,J,le){var ue=t&k,ge=t&x,Te=t&P,Ne=t&(D|A),qe=t&N,Ze=Te?r:Nr(e);function Ue(){for(var nt=arguments.length,at=ee(nt),on=nt;on--;)at[on]=arguments[on];if(Ne)var Yt=hr(Ue),cn=Fc(at,Yt);if(E&&(at=Ja(at,E,R,Ne)),M&&(at=Za(at,M,z,Ne)),nt-=cn,Ne&&nt<le){var kt=qn(at,Yt);return ao(e,t,ai,Ue.placeholder,o,at,kt,X,J,le-nt)}var En=ge?o:this,Fn=Te?En[e]:e;return nt=at.length,X?at=Ku(at,X):qe&&nt>1&&at.reverse(),ue&&J<nt&&(at.length=J),this&&this!==Ot&&this instanceof Ue&&(Fn=Ze||Nr(Fn)),Fn.apply(En,at)}return Ue}function io(e,t){return function(o,E){return Ql(o,e,t(E),{})}}function oi(e,t){return function(o,E){var R;if(o===r&&E===r)return t;if(o!==r&&(R=o),E!==r){if(R===r)return E;typeof o=="string"||typeof E=="string"?(o=sn(o),E=sn(E)):(o=za(o),E=za(E)),R=e(o,E)}return R}}function ss(e){return Bn(function(t){return t=Et(t,rn(He())),Qe(function(o){var E=this;return e(t,function(R){return nn(R,E,o)})})})}function ci(e,t){t=t===r?" ":sn(t);var o=t.length;if(o<2)return o?Zi(t,e):t;var E=Zi(t,Xr(e/or(t)));return ar(t)?$n(vn(E),0,e).join(""):E.slice(0,e)}function Pu(e,t,o,E){var R=t&x,M=Nr(e);function z(){for(var X=-1,J=arguments.length,le=-1,ue=E.length,ge=ee(ue+J),Te=this&&this!==Ot&&this instanceof z?M:e;++le<ue;)ge[le]=E[le];for(;J--;)ge[le++]=arguments[++X];return nn(Te,R?o:this,ge)}return z}function so(e){return function(t,o,E){return E&&typeof E!="number"&&Xt(t,o,E)&&(o=E=r),t=_n(t),o===r?(o=t,t=0):o=_n(o),E=E===r?t<o?1:-1:_n(E),fu(t,o,E,e)}}function li(e){return function(t,o){return typeof t=="string"&&typeof o=="string"||(t=mn(t),o=mn(o)),e(t,o)}}function ao(e,t,o,E,R,M,z,X,J,le){var ue=t&D,ge=ue?z:r,Te=ue?r:z,Ne=ue?M:r,qe=ue?r:M;t|=ue?T:C,t&=~(ue?C:T),t&S||(t&=~(x|P));var Ze=[e,t,R,Ne,ge,qe,Te,X,J,le],Ue=o.apply(r,Ze);return ps(e)&&yo(Ue,Ze),Ue.placeholder=E,xo(Ue,e,t)}function as(e){var t=Bt[e];return function(o,E){if(o=mn(o),E=E==null?0:Ut(Je(E),292),E&&ya(o)){var R=(ut(o)+"e").split("e"),M=t(R[0]+"e"+(+R[1]+E));return R=(ut(M)+"e").split("e"),+(R[0]+"e"+(+R[1]-E))}return t(o)}}var Cu=lr&&1/Fr(new lr([,-0]))[1]==$?function(e){return new lr(e)}:Ds;function oo(e){return function(t){var o=zt(t);return o==et?_i(t):o==lt?Wc(t):_c(t,e(t))}}function Ln(e,t,o,E,R,M,z,X){var J=t&P;if(!J&&typeof e!="function")throw new fn(l);var le=E?E.length:0;if(le||(t&=~(T|C),E=R=r),z=z===r?z:It(Je(z),0),X=X===r?X:Je(X),le-=R?R.length:0,t&C){var ue=E,ge=R;E=R=r}var Te=J?r:ls(e),Ne=[e,t,o,E,R,ue,ge,M,z,X];if(Te&&Uu(Ne,Te),e=Ne[0],t=Ne[1],o=Ne[2],E=Ne[3],R=Ne[4],X=Ne[9]=Ne[9]===r?J?0:e.length:It(Ne[9]-le,0),!X&&t&(D|A)&&(t&=~(D|A)),!t||t==x)var qe=wu(e,t,o);else t==D||t==A?qe=Tu(e,t,X):(t==T||t==(x|T))&&!R.length?qe=Pu(e,t,o,E):qe=ai.apply(r,Ne);var Ze=Te?qa:yo;return xo(Ze(qe,Ne),e,t)}function co(e,t,o,E){return e===r||xn(e,cr[o])&&!dt.call(E,o)?t:e}function lo(e,t,o,E,R,M){return wt(e)&&wt(t)&&(M.set(t,e),ni(e,t,r,lo,M),M.delete(t)),e}function Du(e){return Br(e)?r:e}function uo(e,t,o,E,R,M){var z=o&y,X=e.length,J=t.length;if(X!=J&&!(z&&J>X))return!1;var le=M.get(e),ue=M.get(t);if(le&&ue)return le==t&&ue==e;var ge=-1,Te=!0,Ne=o&b?new Vn:r;for(M.set(e,t),M.set(t,e);++ge<X;){var qe=e[ge],Ze=t[ge];if(E)var Ue=z?E(Ze,qe,ge,t,e,M):E(qe,Ze,ge,e,t,M);if(Ue!==r){if(Ue)continue;Te=!1;break}if(Ne){if(!Ni(t,function(nt,at){if(!yr(Ne,at)&&(qe===nt||R(qe,nt,o,E,M)))return Ne.push(at)})){Te=!1;break}}else if(!(qe===Ze||R(qe,Ze,o,E,M))){Te=!1;break}}return M.delete(e),M.delete(t),Te}function ku(e,t,o,E,R,M,z){switch(o){case tn:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case tt:return!(e.byteLength!=t.byteLength||!M(new Wr(e),new Wr(t)));case Nt:case Lt:case Kt:return xn(+e,+t);case ze:return e.name==t.name&&e.message==t.message;case jt:case pt:return e==t+"";case et:var X=_i;case lt:var J=E&y;if(X||(X=Fr),e.size!=t.size&&!J)return!1;var le=z.get(e);if(le)return le==t;E|=b,z.set(e,t);var ue=uo(X(e),X(t),E,R,M,z);return z.delete(e),ue;case Cn:if(wr)return wr.call(e)==wr.call(t)}return!1}function Nu(e,t,o,E,R,M){var z=o&y,X=os(e),J=X.length,le=os(t),ue=le.length;if(J!=ue&&!z)return!1;for(var ge=J;ge--;){var Te=X[ge];if(!(z?Te in t:dt.call(t,Te)))return!1}var Ne=M.get(e),qe=M.get(t);if(Ne&&qe)return Ne==t&&qe==e;var Ze=!0;M.set(e,t),M.set(t,e);for(var Ue=z;++ge<J;){Te=X[ge];var nt=e[Te],at=t[Te];if(E)var on=z?E(at,nt,Te,t,e,M):E(nt,at,Te,e,t,M);if(!(on===r?nt===at||R(nt,at,o,E,M):on)){Ze=!1;break}Ue||(Ue=Te=="constructor")}if(Ze&&!Ue){var Yt=e.constructor,cn=t.constructor;Yt!=cn&&"constructor"in e&&"constructor"in t&&!(typeof Yt=="function"&&Yt instanceof Yt&&typeof cn=="function"&&cn instanceof cn)&&(Ze=!1)}return M.delete(e),M.delete(t),Ze}function Bn(e){return gs(bo(e,r,Po),e+"")}function os(e){return Na(e,Ft,fs)}function cs(e){return Na(e,Zt,fo)}var ls=Vr?function(e){return Vr.get(e)}:Ds;function ui(e){for(var t=e.name+"",o=ur[t],E=dt.call(ur,t)?o.length:0;E--;){var R=o[E],M=R.func;if(M==null||M==e)return R.name}return t}function hr(e){var t=dt.call(I,"placeholder")?I:e;return t.placeholder}function He(){var e=I.iteratee||Ps;return e=e===Ps?Ba:e,arguments.length?e(arguments[0],arguments[1]):e}function fi(e,t){var o=e.__data__;return Mu(t)?o[typeof t=="string"?"string":"hash"]:o.map}function us(e){for(var t=Ft(e),o=t.length;o--;){var E=t[o],R=e[E];t[o]=[E,R,go(R)]}return t}function Qn(e,t){var o=qc(e,t);return La(o)?o:r}function Ru(e){var t=dt.call(e,Xn),o=e[Xn];try{e[Xn]=r;var E=!0}catch(M){}var R=Ur.call(e);return E&&(t?e[Xn]=o:delete e[Xn]),R}var fs=Mi?function(e){return e==null?[]:(e=bt(e),On(Mi(e),function(t){return ba.call(e,t)}))}:ks,fo=Mi?function(e){for(var t=[];e;)Hn(t,fs(e)),e=Kr(e);return t}:ks,zt=Gt;(Oi&&zt(new Oi(new ArrayBuffer(1)))!=tn||Er&&zt(new Er)!=et||Hi&&zt(Hi.resolve())!=$t||lr&&zt(new lr)!=lt||Ar&&zt(new Ar)!=en)&&(zt=function(e){var t=Gt(e),o=t==At?e.constructor:r,E=o?er(o):"";if(E)switch(E){case pl:return tn;case hl:return et;case gl:return $t;case ml:return lt;case bl:return en}return t});function Lu(e,t,o){for(var E=-1,R=o.length;++E<R;){var M=o[E],z=M.size;switch(M.type){case"drop":e+=z;break;case"dropRight":t-=z;break;case"take":t=Ut(t,e+z);break;case"takeRight":e=It(e,t-z);break}}return{start:e,end:t}}function Bu(e){var t=e.match(Se);return t?t[1].split(Be):[]}function po(e,t,o){t=Kn(t,e);for(var E=-1,R=t.length,M=!1;++E<R;){var z=Pn(t[E]);if(!(M=e!=null&&o(e,z)))break;e=e[z]}return M||++E!=R?M:(R=e==null?0:e.length,!!R&&vi(R)&&In(z,R)&&(Xe(e)||tr(e)))}function Iu(e){var t=e.length,o=new e.constructor(t);return t&&typeof e[0]=="string"&&dt.call(e,"index")&&(o.index=e.index,o.input=e.input),o}function ho(e){return typeof e.constructor=="function"&&!Rr(e)?fr(Kr(e)):{}}function ju(e,t,o){var E=e.constructor;switch(t){case tt:return is(e);case Nt:case Lt:return new E(+e);case tn:return vu(e,o);case _t:case pe:case Z:case de:case Pe:case ne:case me:case fe:case xe:return Ya(e,o);case et:return new E;case Kt:case pt:return new E(e);case jt:return yu(e);case lt:return new E;case Cn:return xu(e)}}function _u(e,t){var o=t.length;if(!o)return e;var E=o-1;return t[E]=(o>1?"& ":"")+t[E],t=t.join(o>2?", ":" "),e.replace(ye,`{
/* [wrapped with `+t+`] */
`)}function Fu(e){return Xe(e)||tr(e)||!!(va&&e&&e[va])}function In(e,t){var o=typeof e;return t=t==null?K:t,!!t&&(o=="number"||o!="symbol"&&Ee.test(e))&&e>-1&&e%1==0&&e<t}function Xt(e,t,o){if(!wt(o))return!1;var E=typeof t;return(E=="number"?Jt(o)&&In(t,o.length):E=="string"&&t in o)?xn(o[t],e):!1}function ds(e,t){if(Xe(e))return!1;var o=typeof e;return o=="number"||o=="symbol"||o=="boolean"||e==null||an(e)?!0:U.test(e)||!j.test(e)||t!=null&&e in bt(t)}function Mu(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function ps(e){var t=ui(e),o=I[t];if(typeof o!="function"||!(t in rt.prototype))return!1;if(e===o)return!0;var E=ls(o);return!!E&&e===E[0]}function Ou(e){return!!ha&&ha in e}var Hu=Hr?jn:Ns;function Rr(e){var t=e&&e.constructor,o=typeof t=="function"&&t.prototype||cr;return e===o}function go(e){return e===e&&!wt(e)}function mo(e,t){return function(o){return o==null?!1:o[e]===t&&(t!==r||e in bt(o))}}function qu(e){var t=mi(e,function(E){return o.size===g&&o.clear(),E}),o=t.cache;return t}function Uu(e,t){var o=e[1],E=t[1],R=o|E,M=R<(x|P|k),z=E==k&&o==D||E==k&&o==L&&e[7].length<=t[8]||E==(k|L)&&t[7].length<=t[8]&&o==D;if(!(M||z))return e;E&x&&(e[2]=t[2],R|=o&x?0:S);var X=t[3];if(X){var J=e[3];e[3]=J?Ja(J,X,t[4]):X,e[4]=J?qn(e[3],i):t[4]}return X=t[5],X&&(J=e[5],e[5]=J?Za(J,X,t[6]):X,e[6]=J?qn(e[5],i):t[6]),X=t[7],X&&(e[7]=X),E&k&&(e[8]=e[8]==null?t[8]:Ut(e[8],t[8])),e[9]==null&&(e[9]=t[9]),e[0]=t[0],e[1]=R,e}function zu(e){var t=[];if(e!=null)for(var o in bt(e))t.push(o);return t}function Wu(e){return Ur.call(e)}function bo(e,t,o){return t=It(t===r?e.length-1:t,0),function(){for(var E=arguments,R=-1,M=It(E.length-t,0),z=ee(M);++R<M;)z[R]=E[t+R];R=-1;for(var X=ee(t+1);++R<t;)X[R]=E[R];return X[t]=o(z),nn(e,this,X)}}function vo(e,t){return t.length<2?e:Zn(e,hn(t,0,-1))}function Ku(e,t){for(var o=e.length,E=Ut(t.length,o),R=Vt(e);E--;){var M=t[E];e[E]=In(M,o)?R[M]:r}return e}function hs(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var yo=Eo(qa),Lr=al||function(e,t){return Ot.setTimeout(e,t)},gs=Eo(hu);function xo(e,t,o){var E=t+"";return gs(e,_u(E,$u(Bu(E),o)))}function Eo(e){var t=0,o=0;return function(){var E=ul(),R=q-(E-o);if(o=E,R>0){if(++t>=F)return arguments[0]}else t=0;return e.apply(r,arguments)}}function di(e,t){var o=-1,E=e.length,R=E-1;for(t=t===r?E:t;++o<t;){var M=Ji(o,R),z=e[M];e[M]=e[o],e[o]=z}return e.length=t,e}var Ao=qu(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(G,function(o,E,R,M){t.push(R?M.replace(Ye,"$1"):E||o)}),t});function Pn(e){if(typeof e=="string"||an(e))return e;var t=e+"";return t=="0"&&1/e==-$?"-0":t}function er(e){if(e!=null){try{return qr.call(e)}catch(t){}try{return e+""}catch(t){}}return""}function $u(e,t){return un(Ae,function(o){var E="_."+o[0];t&o[1]&&!jr(e,E)&&e.push(E)}),e.sort()}function So(e){if(e instanceof rt)return e.clone();var t=new dn(e.__wrapped__,e.__chain__);return t.__actions__=Vt(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}function Gu(e,t,o){(o?Xt(e,t,o):t===r)?t=1:t=It(Je(t),0);var E=e==null?0:e.length;if(!E||t<1)return[];for(var R=0,M=0,z=ee(Xr(E/t));R<E;)z[M++]=hn(e,R,R+=t);return z}function Xu(e){for(var t=-1,o=e==null?0:e.length,E=0,R=[];++t<o;){var M=e[t];M&&(R[E++]=M)}return R}function Yu(){var e=arguments.length;if(!e)return[];for(var t=ee(e-1),o=arguments[0],E=e;E--;)t[E-1]=arguments[E];return Hn(Xe(o)?Vt(o):[o],Ht(t,1))}var Vu=Qe(function(e,t){return Dt(e)?Pr(e,Ht(t,1,Dt,!0)):[]}),Ju=Qe(function(e,t){var o=gn(t);return Dt(o)&&(o=r),Dt(e)?Pr(e,Ht(t,1,Dt,!0),He(o,2)):[]}),Zu=Qe(function(e,t){var o=gn(t);return Dt(o)&&(o=r),Dt(e)?Pr(e,Ht(t,1,Dt,!0),r,o):[]});function Qu(e,t,o){var E=e==null?0:e.length;return E?(t=o||t===r?1:Je(t),hn(e,t<0?0:t,E)):[]}function ef(e,t,o){var E=e==null?0:e.length;return E?(t=o||t===r?1:Je(t),t=E-t,hn(e,0,t<0?0:t)):[]}function tf(e,t){return e&&e.length?ii(e,He(t,3),!0,!0):[]}function nf(e,t){return e&&e.length?ii(e,He(t,3),!0):[]}function rf(e,t,o,E){var R=e==null?0:e.length;return R?(o&&typeof o!="number"&&Xt(e,t,o)&&(o=0,E=R),Yl(e,t,o,E)):[]}function wo(e,t,o){var E=e==null?0:e.length;if(!E)return-1;var R=o==null?0:Je(o);return R<0&&(R=It(E+R,0)),_r(e,He(t,3),R)}function To(e,t,o){var E=e==null?0:e.length;if(!E)return-1;var R=E-1;return o!==r&&(R=Je(o),R=o<0?It(E+R,0):Ut(R,E-1)),_r(e,He(t,3),R,!0)}function Po(e){var t=e==null?0:e.length;return t?Ht(e,1):[]}function sf(e){var t=e==null?0:e.length;return t?Ht(e,$):[]}function af(e,t){var o=e==null?0:e.length;return o?(t=t===r?1:Je(t),Ht(e,t)):[]}function of(e){for(var t=-1,o=e==null?0:e.length,E={};++t<o;){var R=e[t];E[R[0]]=R[1]}return E}function Co(e){return e&&e.length?e[0]:r}function cf(e,t,o){var E=e==null?0:e.length;if(!E)return-1;var R=o==null?0:Je(o);return R<0&&(R=It(E+R,0)),sr(e,t,R)}function lf(e){var t=e==null?0:e.length;return t?hn(e,0,-1):[]}var uf=Qe(function(e){var t=Et(e,ns);return t.length&&t[0]===e[0]?$i(t):[]}),ff=Qe(function(e){var t=gn(e),o=Et(e,ns);return t===gn(o)?t=r:o.pop(),o.length&&o[0]===e[0]?$i(o,He(t,2)):[]}),df=Qe(function(e){var t=gn(e),o=Et(e,ns);return t=typeof t=="function"?t:r,t&&o.pop(),o.length&&o[0]===e[0]?$i(o,r,t):[]});function pf(e,t){return e==null?"":cl.call(e,t)}function gn(e){var t=e==null?0:e.length;return t?e[t-1]:r}function hf(e,t,o){var E=e==null?0:e.length;if(!E)return-1;var R=E;return o!==r&&(R=Je(o),R=R<0?It(E+R,0):Ut(R,E-1)),t===t?$c(e,t,R):_r(e,aa,R,!0)}function gf(e,t){return e&&e.length?Fa(e,Je(t)):r}var mf=Qe(Do);function Do(e,t){return e&&e.length&&t&&t.length?Vi(e,t):e}function bf(e,t,o){return e&&e.length&&t&&t.length?Vi(e,t,He(o,2)):e}function vf(e,t,o){return e&&e.length&&t&&t.length?Vi(e,t,r,o):e}var yf=Bn(function(e,t){var o=e==null?0:e.length,E=Ui(e,t);return Ha(e,Et(t,function(R){return In(R,o)?+R:R}).sort(Va)),E});function xf(e,t){var o=[];if(!(e&&e.length))return o;var E=-1,R=[],M=e.length;for(t=He(t,3);++E<M;){var z=e[E];t(z,E,e)&&(o.push(z),R.push(E))}return Ha(e,R),o}function ms(e){return e==null?e:dl.call(e)}function Ef(e,t,o){var E=e==null?0:e.length;return E?(o&&typeof o!="number"&&Xt(e,t,o)?(t=0,o=E):(t=t==null?0:Je(t),o=o===r?E:Je(o)),hn(e,t,o)):[]}function Af(e,t){return ri(e,t)}function Sf(e,t,o){return Qi(e,t,He(o,2))}function wf(e,t){var o=e==null?0:e.length;if(o){var E=ri(e,t);if(E<o&&xn(e[E],t))return E}return-1}function Tf(e,t){return ri(e,t,!0)}function Pf(e,t,o){return Qi(e,t,He(o,2),!0)}function Cf(e,t){var o=e==null?0:e.length;if(o){var E=ri(e,t,!0)-1;if(xn(e[E],t))return E}return-1}function Df(e){return e&&e.length?Ua(e):[]}function kf(e,t){return e&&e.length?Ua(e,He(t,2)):[]}function Nf(e){var t=e==null?0:e.length;return t?hn(e,1,t):[]}function Rf(e,t,o){return e&&e.length?(t=o||t===r?1:Je(t),hn(e,0,t<0?0:t)):[]}function Lf(e,t,o){var E=e==null?0:e.length;return E?(t=o||t===r?1:Je(t),t=E-t,hn(e,t<0?0:t,E)):[]}function Bf(e,t){return e&&e.length?ii(e,He(t,3),!1,!0):[]}function If(e,t){return e&&e.length?ii(e,He(t,3)):[]}var jf=Qe(function(e){return Wn(Ht(e,1,Dt,!0))}),_f=Qe(function(e){var t=gn(e);return Dt(t)&&(t=r),Wn(Ht(e,1,Dt,!0),He(t,2))}),Ff=Qe(function(e){var t=gn(e);return t=typeof t=="function"?t:r,Wn(Ht(e,1,Dt,!0),r,t)});function Mf(e){return e&&e.length?Wn(e):[]}function Of(e,t){return e&&e.length?Wn(e,He(t,2)):[]}function Hf(e,t){return t=typeof t=="function"?t:r,e&&e.length?Wn(e,r,t):[]}function bs(e){if(!(e&&e.length))return[];var t=0;return e=On(e,function(o){if(Dt(o))return t=It(o.length,t),!0}),Ii(t,function(o){return Et(e,Ri(o))})}function ko(e,t){if(!(e&&e.length))return[];var o=bs(e);return t==null?o:Et(o,function(E){return nn(t,r,E)})}var qf=Qe(function(e,t){return Dt(e)?Pr(e,t):[]}),Uf=Qe(function(e){return ts(On(e,Dt))}),zf=Qe(function(e){var t=gn(e);return Dt(t)&&(t=r),ts(On(e,Dt),He(t,2))}),Wf=Qe(function(e){var t=gn(e);return t=typeof t=="function"?t:r,ts(On(e,Dt),r,t)}),Kf=Qe(bs);function $f(e,t){return $a(e||[],t||[],Tr)}function Gf(e,t){return $a(e||[],t||[],kr)}var Xf=Qe(function(e){var t=e.length,o=t>1?e[t-1]:r;return o=typeof o=="function"?(e.pop(),o):r,ko(e,o)});function No(e){var t=I(e);return t.__chain__=!0,t}function Yf(e,t){return t(e),e}function pi(e,t){return t(e)}var Vf=Bn(function(e){var t=e.length,o=t?e[0]:0,E=this.__wrapped__,R=function(M){return Ui(M,e)};return t>1||this.__actions__.length||!(E instanceof rt)||!In(o)?this.thru(R):(E=E.slice(o,+o+(t?1:0)),E.__actions__.push({func:pi,args:[R],thisArg:r}),new dn(E,this.__chain__).thru(function(M){return t&&!M.length&&M.push(r),M}))});function Jf(){return No(this)}function Zf(){return new dn(this.value(),this.__chain__)}function Qf(){this.__values__===r&&(this.__values__=Wo(this.value()));var e=this.__index__>=this.__values__.length,t=e?r:this.__values__[this.__index__++];return{done:e,value:t}}function ed(){return this}function td(e){for(var t,o=this;o instanceof Zr;){var E=So(o);E.__index__=0,E.__values__=r,t?R.__wrapped__=E:t=E;var R=E;o=o.__wrapped__}return R.__wrapped__=e,t}function nd(){var e=this.__wrapped__;if(e instanceof rt){var t=e;return this.__actions__.length&&(t=new rt(this)),t=t.reverse(),t.__actions__.push({func:pi,args:[ms],thisArg:r}),new dn(t,this.__chain__)}return this.thru(ms)}function rd(){return Ka(this.__wrapped__,this.__actions__)}var id=si(function(e,t,o){dt.call(e,o)?++e[o]:Rn(e,o,1)});function sd(e,t,o){var E=Xe(e)?ia:Xl;return o&&Xt(e,t,o)&&(t=r),E(e,He(t,3))}function ad(e,t){var o=Xe(e)?On:Da;return o(e,He(t,3))}var od=no(wo),cd=no(To);function ld(e,t){return Ht(hi(e,t),1)}function ud(e,t){return Ht(hi(e,t),$)}function fd(e,t,o){return o=o===r?1:Je(o),Ht(hi(e,t),o)}function Ro(e,t){var o=Xe(e)?un:zn;return o(e,He(t,3))}function Lo(e,t){var o=Xe(e)?kc:Ca;return o(e,He(t,3))}var dd=si(function(e,t,o){dt.call(e,o)?e[o].push(t):Rn(e,o,[t])});function pd(e,t,o,E){e=Jt(e)?e:mr(e),o=o&&!E?Je(o):0;var R=e.length;return o<0&&(o=It(R+o,0)),yi(e)?o<=R&&e.indexOf(t,o)>-1:!!R&&sr(e,t,o)>-1}var hd=Qe(function(e,t,o){var E=-1,R=typeof t=="function",M=Jt(e)?ee(e.length):[];return zn(e,function(z){M[++E]=R?nn(t,z,o):Cr(z,t,o)}),M}),gd=si(function(e,t,o){Rn(e,o,t)});function hi(e,t){var o=Xe(e)?Et:Ia;return o(e,He(t,3))}function md(e,t,o,E){return e==null?[]:(Xe(t)||(t=t==null?[]:[t]),o=E?r:o,Xe(o)||(o=o==null?[]:[o]),Ma(e,t,o))}var bd=si(function(e,t,o){e[o?0:1].push(t)},function(){return[[],[]]});function vd(e,t,o){var E=Xe(e)?ki:ca,R=arguments.length<3;return E(e,He(t,4),o,R,zn)}function yd(e,t,o){var E=Xe(e)?Nc:ca,R=arguments.length<3;return E(e,He(t,4),o,R,Ca)}function xd(e,t){var o=Xe(e)?On:Da;return o(e,bi(He(t,3)))}function Ed(e){var t=Xe(e)?Sa:du;return t(e)}function Ad(e,t,o){(o?Xt(e,t,o):t===r)?t=1:t=Je(t);var E=Xe(e)?zl:pu;return E(e,t)}function Sd(e){var t=Xe(e)?Wl:gu;return t(e)}function wd(e){if(e==null)return 0;if(Jt(e))return yi(e)?or(e):e.length;var t=zt(e);return t==et||t==lt?e.size:Xi(e).length}function Td(e,t,o){var E=Xe(e)?Ni:mu;return o&&Xt(e,t,o)&&(t=r),E(e,He(t,3))}var Pd=Qe(function(e,t){if(e==null)return[];var o=t.length;return o>1&&Xt(e,t[0],t[1])?t=[]:o>2&&Xt(t[0],t[1],t[2])&&(t=[t[0]]),Ma(e,Ht(t,1),[])}),gi=sl||function(){return Ot.Date.now()};function Cd(e,t){if(typeof t!="function")throw new fn(l);return e=Je(e),function(){if(--e<1)return t.apply(this,arguments)}}function Bo(e,t,o){return t=o?r:t,t=e&&t==null?e.length:t,Ln(e,k,r,r,r,r,t)}function Io(e,t){var o;if(typeof t!="function")throw new fn(l);return e=Je(e),function(){return--e>0&&(o=t.apply(this,arguments)),e<=1&&(t=r),o}}var vs=Qe(function(e,t,o){var E=x;if(o.length){var R=qn(o,hr(vs));E|=T}return Ln(e,E,t,o,R)}),jo=Qe(function(e,t,o){var E=x|P;if(o.length){var R=qn(o,hr(jo));E|=T}return Ln(t,E,e,o,R)});function _o(e,t,o){t=o?r:t;var E=Ln(e,D,r,r,r,r,r,t);return E.placeholder=_o.placeholder,E}function Fo(e,t,o){t=o?r:t;var E=Ln(e,A,r,r,r,r,r,t);return E.placeholder=Fo.placeholder,E}function Mo(e,t,o){var E,R,M,z,X,J,le=0,ue=!1,ge=!1,Te=!0;if(typeof e!="function")throw new fn(l);t=mn(t)||0,wt(o)&&(ue=!!o.leading,ge="maxWait"in o,M=ge?It(mn(o.maxWait)||0,t):M,Te="trailing"in o?!!o.trailing:Te);function Ne(kt){var En=E,Fn=R;return E=R=r,le=kt,z=e.apply(Fn,En),z}function qe(kt){return le=kt,X=Lr(nt,t),ue?Ne(kt):z}function Ze(kt){var En=kt-J,Fn=kt-le,rc=t-En;return ge?Ut(rc,M-Fn):rc}function Ue(kt){var En=kt-J,Fn=kt-le;return J===r||En>=t||En<0||ge&&Fn>=M}function nt(){var kt=gi();if(Ue(kt))return at(kt);X=Lr(nt,Ze(kt))}function at(kt){return X=r,Te&&E?Ne(kt):(E=R=r,z)}function on(){X!==r&&Ga(X),le=0,E=J=R=X=r}function Yt(){return X===r?z:at(gi())}function cn(){var kt=gi(),En=Ue(kt);if(E=arguments,R=this,J=kt,En){if(X===r)return qe(J);if(ge)return Ga(X),X=Lr(nt,t),Ne(J)}return X===r&&(X=Lr(nt,t)),z}return cn.cancel=on,cn.flush=Yt,cn}var Dd=Qe(function(e,t){return Pa(e,1,t)}),kd=Qe(function(e,t,o){return Pa(e,mn(t)||0,o)});function Nd(e){return Ln(e,N)}function mi(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new fn(l);var o=function(){var E=arguments,R=t?t.apply(this,E):E[0],M=o.cache;if(M.has(R))return M.get(R);var z=e.apply(this,E);return o.cache=M.set(R,z)||M,z};return o.cache=new(mi.Cache||Nn),o}mi.Cache=Nn;function bi(e){if(typeof e!="function")throw new fn(l);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function Rd(e){return Io(2,e)}var Ld=bu(function(e,t){t=t.length==1&&Xe(t[0])?Et(t[0],rn(He())):Et(Ht(t,1),rn(He()));var o=t.length;return Qe(function(E){for(var R=-1,M=Ut(E.length,o);++R<M;)E[R]=t[R].call(this,E[R]);return nn(e,this,E)})}),ys=Qe(function(e,t){var o=qn(t,hr(ys));return Ln(e,T,r,t,o)}),Oo=Qe(function(e,t){var o=qn(t,hr(Oo));return Ln(e,C,r,t,o)}),Bd=Bn(function(e,t){return Ln(e,L,r,r,r,t)});function Id(e,t){if(typeof e!="function")throw new fn(l);return t=t===r?t:Je(t),Qe(e,t)}function jd(e,t){if(typeof e!="function")throw new fn(l);return t=t==null?0:It(Je(t),0),Qe(function(o){var E=o[t],R=$n(o,0,t);return E&&Hn(R,E),nn(e,this,R)})}function _d(e,t,o){var E=!0,R=!0;if(typeof e!="function")throw new fn(l);return wt(o)&&(E="leading"in o?!!o.leading:E,R="trailing"in o?!!o.trailing:R),Mo(e,t,{leading:E,maxWait:t,trailing:R})}function Fd(e){return Bo(e,1)}function Md(e,t){return ys(rs(t),e)}function Od(){if(!arguments.length)return[];var e=arguments[0];return Xe(e)?e:[e]}function Hd(e){return pn(e,p)}function qd(e,t){return t=typeof t=="function"?t:r,pn(e,p,t)}function Ud(e){return pn(e,m|p)}function zd(e,t){return t=typeof t=="function"?t:r,pn(e,m|p,t)}function Wd(e,t){return t==null||Ta(e,t,Ft(t))}function xn(e,t){return e===t||e!==e&&t!==t}var Kd=li(Ki),$d=li(function(e,t){return e>=t}),tr=Ra(function(){return arguments}())?Ra:function(e){return Tt(e)&&dt.call(e,"callee")&&!ba.call(e,"callee")},Xe=ee.isArray,Gd=Zs?rn(Zs):eu;function Jt(e){return e!=null&&vi(e.length)&&!jn(e)}function Dt(e){return Tt(e)&&Jt(e)}function Xd(e){return e===!0||e===!1||Tt(e)&&Gt(e)==Nt}var Gn=ol||Ns,Yd=Qs?rn(Qs):tu;function Vd(e){return Tt(e)&&e.nodeType===1&&!Br(e)}function Jd(e){if(e==null)return!0;if(Jt(e)&&(Xe(e)||typeof e=="string"||typeof e.splice=="function"||Gn(e)||gr(e)||tr(e)))return!e.length;var t=zt(e);if(t==et||t==lt)return!e.size;if(Rr(e))return!Xi(e).length;for(var o in e)if(dt.call(e,o))return!1;return!0}function Zd(e,t){return Dr(e,t)}function Qd(e,t,o){o=typeof o=="function"?o:r;var E=o?o(e,t):r;return E===r?Dr(e,t,r,o):!!E}function xs(e){if(!Tt(e))return!1;var t=Gt(e);return t==ze||t==Wt||typeof e.message=="string"&&typeof e.name=="string"&&!Br(e)}function ep(e){return typeof e=="number"&&ya(e)}function jn(e){if(!wt(e))return!1;var t=Gt(e);return t==Mt||t==Ve||t==Rt||t==bn}function Ho(e){return typeof e=="number"&&e==Je(e)}function vi(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=K}function wt(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function Tt(e){return e!=null&&typeof e=="object"}var qo=ea?rn(ea):ru;function tp(e,t){return e===t||Gi(e,t,us(t))}function np(e,t,o){return o=typeof o=="function"?o:r,Gi(e,t,us(t),o)}function rp(e){return Uo(e)&&e!=+e}function ip(e){if(Hu(e))throw new $e(f);return La(e)}function sp(e){return e===null}function ap(e){return e==null}function Uo(e){return typeof e=="number"||Tt(e)&&Gt(e)==Kt}function Br(e){if(!Tt(e)||Gt(e)!=At)return!1;var t=Kr(e);if(t===null)return!0;var o=dt.call(t,"constructor")&&t.constructor;return typeof o=="function"&&o instanceof o&&qr.call(o)==tl}var Es=ta?rn(ta):iu;function op(e){return Ho(e)&&e>=-K&&e<=K}var zo=na?rn(na):su;function yi(e){return typeof e=="string"||!Xe(e)&&Tt(e)&&Gt(e)==pt}function an(e){return typeof e=="symbol"||Tt(e)&&Gt(e)==Cn}var gr=ra?rn(ra):au;function cp(e){return e===r}function lp(e){return Tt(e)&&zt(e)==en}function up(e){return Tt(e)&&Gt(e)==br}var fp=li(Yi),dp=li(function(e,t){return e<=t});function Wo(e){if(!e)return[];if(Jt(e))return yi(e)?vn(e):Vt(e);if(xr&&e[xr])return zc(e[xr]());var t=zt(e),o=t==et?_i:t==lt?Fr:mr;return o(e)}function _n(e){if(!e)return e===0?e:0;if(e=mn(e),e===$||e===-$){var t=e<0?-1:1;return t*te}return e===e?e:0}function Je(e){var t=_n(e),o=t%1;return t===t?o?t-o:t:0}function Ko(e){return e?Jn(Je(e),0,he):0}function mn(e){if(typeof e=="number")return e;if(an(e))return oe;if(wt(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=wt(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=la(e);var o=Ct.test(e);return o||ce.test(e)?Pc(e.slice(2),o?2:8):St.test(e)?oe:+e}function $o(e){return Tn(e,Zt(e))}function pp(e){return e?Jn(Je(e),-K,K):e===0?e:0}function ut(e){return e==null?"":sn(e)}var hp=dr(function(e,t){if(Rr(t)||Jt(t)){Tn(t,Ft(t),e);return}for(var o in t)dt.call(t,o)&&Tr(e,o,t[o])}),Go=dr(function(e,t){Tn(t,Zt(t),e)}),xi=dr(function(e,t,o,E){Tn(t,Zt(t),e,E)}),gp=dr(function(e,t,o,E){Tn(t,Ft(t),e,E)}),mp=Bn(Ui);function bp(e,t){var o=fr(e);return t==null?o:wa(o,t)}var vp=Qe(function(e,t){e=bt(e);var o=-1,E=t.length,R=E>2?t[2]:r;for(R&&Xt(t[0],t[1],R)&&(E=1);++o<E;)for(var M=t[o],z=Zt(M),X=-1,J=z.length;++X<J;){var le=z[X],ue=e[le];(ue===r||xn(ue,cr[le])&&!dt.call(e,le))&&(e[le]=M[le])}return e}),yp=Qe(function(e){return e.push(r,lo),nn(Xo,r,e)});function xp(e,t){return sa(e,He(t,3),wn)}function Ep(e,t){return sa(e,He(t,3),Wi)}function Ap(e,t){return e==null?e:zi(e,He(t,3),Zt)}function Sp(e,t){return e==null?e:ka(e,He(t,3),Zt)}function wp(e,t){return e&&wn(e,He(t,3))}function Tp(e,t){return e&&Wi(e,He(t,3))}function Pp(e){return e==null?[]:ti(e,Ft(e))}function Cp(e){return e==null?[]:ti(e,Zt(e))}function As(e,t,o){var E=e==null?r:Zn(e,t);return E===r?o:E}function Dp(e,t){return e!=null&&po(e,t,Vl)}function Ss(e,t){return e!=null&&po(e,t,Jl)}var kp=io(function(e,t,o){t!=null&&typeof t.toString!="function"&&(t=Ur.call(t)),e[t]=o},Ts(Qt)),Np=io(function(e,t,o){t!=null&&typeof t.toString!="function"&&(t=Ur.call(t)),dt.call(e,t)?e[t].push(o):e[t]=[o]},He),Rp=Qe(Cr);function Ft(e){return Jt(e)?Aa(e):Xi(e)}function Zt(e){return Jt(e)?Aa(e,!0):ou(e)}function Lp(e,t){var o={};return t=He(t,3),wn(e,function(E,R,M){Rn(o,t(E,R,M),E)}),o}function Bp(e,t){var o={};return t=He(t,3),wn(e,function(E,R,M){Rn(o,R,t(E,R,M))}),o}var Ip=dr(function(e,t,o){ni(e,t,o)}),Xo=dr(function(e,t,o,E){ni(e,t,o,E)}),jp=Bn(function(e,t){var o={};if(e==null)return o;var E=!1;t=Et(t,function(M){return M=Kn(M,e),E||(E=M.length>1),M}),Tn(e,cs(e),o),E&&(o=pn(o,m|d|p,Du));for(var R=t.length;R--;)es(o,t[R]);return o});function _p(e,t){return Yo(e,bi(He(t)))}var Fp=Bn(function(e,t){return e==null?{}:lu(e,t)});function Yo(e,t){if(e==null)return{};var o=Et(cs(e),function(E){return[E]});return t=He(t),Oa(e,o,function(E,R){return t(E,R[0])})}function Mp(e,t,o){t=Kn(t,e);var E=-1,R=t.length;for(R||(R=1,e=r);++E<R;){var M=e==null?r:e[Pn(t[E])];M===r&&(E=R,M=o),e=jn(M)?M.call(e):M}return e}function Op(e,t,o){return e==null?e:kr(e,t,o)}function Hp(e,t,o,E){return E=typeof E=="function"?E:r,e==null?e:kr(e,t,o,E)}var Vo=oo(Ft),Jo=oo(Zt);function qp(e,t,o){var E=Xe(e),R=E||Gn(e)||gr(e);if(t=He(t,4),o==null){var M=e&&e.constructor;R?o=E?new M:[]:wt(e)?o=jn(M)?fr(Kr(e)):{}:o={}}return(R?un:wn)(e,function(z,X,J){return t(o,z,X,J)}),o}function Up(e,t){return e==null?!0:es(e,t)}function zp(e,t,o){return e==null?e:Wa(e,t,rs(o))}function Wp(e,t,o,E){return E=typeof E=="function"?E:r,e==null?e:Wa(e,t,rs(o),E)}function mr(e){return e==null?[]:ji(e,Ft(e))}function Kp(e){return e==null?[]:ji(e,Zt(e))}function $p(e,t,o){return o===r&&(o=t,t=r),o!==r&&(o=mn(o),o=o===o?o:0),t!==r&&(t=mn(t),t=t===t?t:0),Jn(mn(e),t,o)}function Gp(e,t,o){return t=_n(t),o===r?(o=t,t=0):o=_n(o),e=mn(e),Zl(e,t,o)}function Xp(e,t,o){if(o&&typeof o!="boolean"&&Xt(e,t,o)&&(t=o=r),o===r&&(typeof t=="boolean"?(o=t,t=r):typeof e=="boolean"&&(o=e,e=r)),e===r&&t===r?(e=0,t=1):(e=_n(e),t===r?(t=e,e=0):t=_n(t)),e>t){var E=e;e=t,t=E}if(o||e%1||t%1){var R=xa();return Ut(e+R*(t-e+Tc("1e-"+((R+"").length-1))),t)}return Ji(e,t)}var Yp=pr(function(e,t,o){return t=t.toLowerCase(),e+(o?Zo(t):t)});function Zo(e){return ws(ut(e).toLowerCase())}function Qo(e){return e=ut(e),e&&e.replace(we,Mc).replace(gc,"")}function Vp(e,t,o){e=ut(e),t=sn(t);var E=e.length;o=o===r?E:Jn(Je(o),0,E);var R=o;return o-=t.length,o>=0&&e.slice(o,R)==t}function Jp(e){return e=ut(e),e&&it.test(e)?e.replace(Me,Oc):e}function Zp(e){return e=ut(e),e&&Y.test(e)?e.replace(re,"\\$&"):e}var Qp=pr(function(e,t,o){return e+(o?"-":"")+t.toLowerCase()}),eh=pr(function(e,t,o){return e+(o?" ":"")+t.toLowerCase()}),th=to("toLowerCase");function nh(e,t,o){e=ut(e),t=Je(t);var E=t?or(e):0;if(!t||E>=t)return e;var R=(t-E)/2;return ci(Yr(R),o)+e+ci(Xr(R),o)}function rh(e,t,o){e=ut(e),t=Je(t);var E=t?or(e):0;return t&&E<t?e+ci(t-E,o):e}function ih(e,t,o){e=ut(e),t=Je(t);var E=t?or(e):0;return t&&E<t?ci(t-E,o)+e:e}function sh(e,t,o){return o||t==null?t=0:t&&(t=+t),fl(ut(e).replace(ie,""),t||0)}function ah(e,t,o){return(o?Xt(e,t,o):t===r)?t=1:t=Je(t),Zi(ut(e),t)}function oh(){var e=arguments,t=ut(e[0]);return e.length<3?t:t.replace(e[1],e[2])}var ch=pr(function(e,t,o){return e+(o?"_":"")+t.toLowerCase()});function lh(e,t,o){return o&&typeof o!="number"&&Xt(e,t,o)&&(t=o=r),o=o===r?he:o>>>0,o?(e=ut(e),e&&(typeof t=="string"||t!=null&&!Es(t))&&(t=sn(t),!t&&ar(e))?$n(vn(e),0,o):e.split(t,o)):[]}var uh=pr(function(e,t,o){return e+(o?" ":"")+ws(t)});function fh(e,t,o){return e=ut(e),o=o==null?0:Jn(Je(o),0,e.length),t=sn(t),e.slice(o,o+t.length)==t}function dh(e,t,o){var E=I.templateSettings;o&&Xt(e,t,o)&&(t=r),e=ut(e),t=xi({},t,E,co);var R=xi({},t.imports,E.imports,co),M=Ft(R),z=ji(R,M),X,J,le=0,ue=t.interpolate||Re,ge="__p += '",Te=Fi((t.escape||Re).source+"|"+ue.source+"|"+(ue===vt?ot:Re).source+"|"+(t.evaluate||Re).source+"|$","g"),Ne="//# sourceURL="+(dt.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++xc+"]")+`
`;e.replace(Te,function(Ue,nt,at,on,Yt,cn){return at||(at=on),ge+=e.slice(le,cn).replace(st,Hc),nt&&(X=!0,ge+=`' +
__e(`+nt+`) +
'`),Yt&&(J=!0,ge+=`';
`+Yt+`;
__p += '`),at&&(ge+=`' +
((__t = (`+at+`)) == null ? '' : __t) +
'`),le=cn+Ue.length,Ue}),ge+=`';
`;var qe=dt.call(t,"variable")&&t.variable;if(!qe)ge=`with (obj) {
`+ge+`
}
`;else if(_e.test(qe))throw new $e(s);ge=(J?ge.replace(Le,""):ge).replace(Fe,"$1").replace(ke,"$1;"),ge="function("+(qe||"obj")+`) {
`+(qe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(X?", __e = _.escape":"")+(J?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ge+`return __p
}`;var Ze=tc(function(){return ct(M,Ne+"return "+ge).apply(r,z)});if(Ze.source=ge,xs(Ze))throw Ze;return Ze}function ph(e){return ut(e).toLowerCase()}function hh(e){return ut(e).toUpperCase()}function gh(e,t,o){if(e=ut(e),e&&(o||t===r))return la(e);if(!e||!(t=sn(t)))return e;var E=vn(e),R=vn(t),M=ua(E,R),z=fa(E,R)+1;return $n(E,M,z).join("")}function mh(e,t,o){if(e=ut(e),e&&(o||t===r))return e.slice(0,pa(e)+1);if(!e||!(t=sn(t)))return e;var E=vn(e),R=fa(E,vn(t))+1;return $n(E,0,R).join("")}function bh(e,t,o){if(e=ut(e),e&&(o||t===r))return e.replace(ie,"");if(!e||!(t=sn(t)))return e;var E=vn(e),R=ua(E,vn(t));return $n(E,R).join("")}function vh(e,t){var o=B,E=O;if(wt(t)){var R="separator"in t?t.separator:R;o="length"in t?Je(t.length):o,E="omission"in t?sn(t.omission):E}e=ut(e);var M=e.length;if(ar(e)){var z=vn(e);M=z.length}if(o>=M)return e;var X=o-or(E);if(X<1)return E;var J=z?$n(z,0,X).join(""):e.slice(0,X);if(R===r)return J+E;if(z&&(X+=J.length-X),Es(R)){if(e.slice(X).search(R)){var le,ue=J;for(R.global||(R=Fi(R.source,ut(je.exec(R))+"g")),R.lastIndex=0;le=R.exec(ue);)var ge=le.index;J=J.slice(0,ge===r?X:ge)}}else if(e.indexOf(sn(R),X)!=X){var Te=J.lastIndexOf(R);Te>-1&&(J=J.slice(0,Te))}return J+E}function yh(e){return e=ut(e),e&&We.test(e)?e.replace(De,Gc):e}var xh=pr(function(e,t,o){return e+(o?" ":"")+t.toUpperCase()}),ws=to("toUpperCase");function ec(e,t,o){return e=ut(e),t=o?r:t,t===r?Uc(e)?Vc(e):Bc(e):e.match(t)||[]}var tc=Qe(function(e,t){try{return nn(e,r,t)}catch(o){return xs(o)?o:new $e(o)}}),Eh=Bn(function(e,t){return un(t,function(o){o=Pn(o),Rn(e,o,vs(e[o],e))}),e});function Ah(e){var t=e==null?0:e.length,o=He();return e=t?Et(e,function(E){if(typeof E[1]!="function")throw new fn(l);return[o(E[0]),E[1]]}):[],Qe(function(E){for(var R=-1;++R<t;){var M=e[R];if(nn(M[0],this,E))return nn(M[1],this,E)}})}function Sh(e){return Gl(pn(e,m))}function Ts(e){return function(){return e}}function wh(e,t){return e==null||e!==e?t:e}var Th=ro(),Ph=ro(!0);function Qt(e){return e}function Ps(e){return Ba(typeof e=="function"?e:pn(e,m))}function Ch(e){return ja(pn(e,m))}function Dh(e,t){return _a(e,pn(t,m))}var kh=Qe(function(e,t){return function(o){return Cr(o,e,t)}}),Nh=Qe(function(e,t){return function(o){return Cr(e,o,t)}});function Cs(e,t,o){var E=Ft(t),R=ti(t,E);o==null&&!(wt(t)&&(R.length||!E.length))&&(o=t,t=e,e=this,R=ti(t,Ft(t)));var M=!(wt(o)&&"chain"in o)||!!o.chain,z=jn(e);return un(R,function(X){var J=t[X];e[X]=J,z&&(e.prototype[X]=function(){var le=this.__chain__;if(M||le){var ue=e(this.__wrapped__),ge=ue.__actions__=Vt(this.__actions__);return ge.push({func:J,args:arguments,thisArg:e}),ue.__chain__=le,ue}return J.apply(e,Hn([this.value()],arguments))})}),e}function Rh(){return Ot._===this&&(Ot._=nl),this}function Ds(){}function Lh(e){return e=Je(e),Qe(function(t){return Fa(t,e)})}var Bh=ss(Et),Ih=ss(ia),jh=ss(Ni);function nc(e){return ds(e)?Ri(Pn(e)):uu(e)}function _h(e){return function(t){return e==null?r:Zn(e,t)}}var Fh=so(),Mh=so(!0);function ks(){return[]}function Ns(){return!1}function Oh(){return{}}function Hh(){return""}function qh(){return!0}function Uh(e,t){if(e=Je(e),e<1||e>K)return[];var o=he,E=Ut(e,he);t=He(t),e-=he;for(var R=Ii(E,t);++o<e;)t(o);return R}function zh(e){return Xe(e)?Et(e,Pn):an(e)?[e]:Vt(Ao(ut(e)))}function Wh(e){var t=++el;return ut(e)+t}var Kh=oi(function(e,t){return e+t},0),$h=as("ceil"),Gh=oi(function(e,t){return e/t},1),Xh=as("floor");function Yh(e){return e&&e.length?ei(e,Qt,Ki):r}function Vh(e,t){return e&&e.length?ei(e,He(t,2),Ki):r}function Jh(e){return oa(e,Qt)}function Zh(e,t){return oa(e,He(t,2))}function Qh(e){return e&&e.length?ei(e,Qt,Yi):r}function e0(e,t){return e&&e.length?ei(e,He(t,2),Yi):r}var t0=oi(function(e,t){return e*t},1),n0=as("round"),r0=oi(function(e,t){return e-t},0);function i0(e){return e&&e.length?Bi(e,Qt):0}function s0(e,t){return e&&e.length?Bi(e,He(t,2)):0}return I.after=Cd,I.ary=Bo,I.assign=hp,I.assignIn=Go,I.assignInWith=xi,I.assignWith=gp,I.at=mp,I.before=Io,I.bind=vs,I.bindAll=Eh,I.bindKey=jo,I.castArray=Od,I.chain=No,I.chunk=Gu,I.compact=Xu,I.concat=Yu,I.cond=Ah,I.conforms=Sh,I.constant=Ts,I.countBy=id,I.create=bp,I.curry=_o,I.curryRight=Fo,I.debounce=Mo,I.defaults=vp,I.defaultsDeep=yp,I.defer=Dd,I.delay=kd,I.difference=Vu,I.differenceBy=Ju,I.differenceWith=Zu,I.drop=Qu,I.dropRight=ef,I.dropRightWhile=tf,I.dropWhile=nf,I.fill=rf,I.filter=ad,I.flatMap=ld,I.flatMapDeep=ud,I.flatMapDepth=fd,I.flatten=Po,I.flattenDeep=sf,I.flattenDepth=af,I.flip=Nd,I.flow=Th,I.flowRight=Ph,I.fromPairs=of,I.functions=Pp,I.functionsIn=Cp,I.groupBy=dd,I.initial=lf,I.intersection=uf,I.intersectionBy=ff,I.intersectionWith=df,I.invert=kp,I.invertBy=Np,I.invokeMap=hd,I.iteratee=Ps,I.keyBy=gd,I.keys=Ft,I.keysIn=Zt,I.map=hi,I.mapKeys=Lp,I.mapValues=Bp,I.matches=Ch,I.matchesProperty=Dh,I.memoize=mi,I.merge=Ip,I.mergeWith=Xo,I.method=kh,I.methodOf=Nh,I.mixin=Cs,I.negate=bi,I.nthArg=Lh,I.omit=jp,I.omitBy=_p,I.once=Rd,I.orderBy=md,I.over=Bh,I.overArgs=Ld,I.overEvery=Ih,I.overSome=jh,I.partial=ys,I.partialRight=Oo,I.partition=bd,I.pick=Fp,I.pickBy=Yo,I.property=nc,I.propertyOf=_h,I.pull=mf,I.pullAll=Do,I.pullAllBy=bf,I.pullAllWith=vf,I.pullAt=yf,I.range=Fh,I.rangeRight=Mh,I.rearg=Bd,I.reject=xd,I.remove=xf,I.rest=Id,I.reverse=ms,I.sampleSize=Ad,I.set=Op,I.setWith=Hp,I.shuffle=Sd,I.slice=Ef,I.sortBy=Pd,I.sortedUniq=Df,I.sortedUniqBy=kf,I.split=lh,I.spread=jd,I.tail=Nf,I.take=Rf,I.takeRight=Lf,I.takeRightWhile=Bf,I.takeWhile=If,I.tap=Yf,I.throttle=_d,I.thru=pi,I.toArray=Wo,I.toPairs=Vo,I.toPairsIn=Jo,I.toPath=zh,I.toPlainObject=$o,I.transform=qp,I.unary=Fd,I.union=jf,I.unionBy=_f,I.unionWith=Ff,I.uniq=Mf,I.uniqBy=Of,I.uniqWith=Hf,I.unset=Up,I.unzip=bs,I.unzipWith=ko,I.update=zp,I.updateWith=Wp,I.values=mr,I.valuesIn=Kp,I.without=qf,I.words=ec,I.wrap=Md,I.xor=Uf,I.xorBy=zf,I.xorWith=Wf,I.zip=Kf,I.zipObject=$f,I.zipObjectDeep=Gf,I.zipWith=Xf,I.entries=Vo,I.entriesIn=Jo,I.extend=Go,I.extendWith=xi,Cs(I,I),I.add=Kh,I.attempt=tc,I.camelCase=Yp,I.capitalize=Zo,I.ceil=$h,I.clamp=$p,I.clone=Hd,I.cloneDeep=Ud,I.cloneDeepWith=zd,I.cloneWith=qd,I.conformsTo=Wd,I.deburr=Qo,I.defaultTo=wh,I.divide=Gh,I.endsWith=Vp,I.eq=xn,I.escape=Jp,I.escapeRegExp=Zp,I.every=sd,I.find=od,I.findIndex=wo,I.findKey=xp,I.findLast=cd,I.findLastIndex=To,I.findLastKey=Ep,I.floor=Xh,I.forEach=Ro,I.forEachRight=Lo,I.forIn=Ap,I.forInRight=Sp,I.forOwn=wp,I.forOwnRight=Tp,I.get=As,I.gt=Kd,I.gte=$d,I.has=Dp,I.hasIn=Ss,I.head=Co,I.identity=Qt,I.includes=pd,I.indexOf=cf,I.inRange=Gp,I.invoke=Rp,I.isArguments=tr,I.isArray=Xe,I.isArrayBuffer=Gd,I.isArrayLike=Jt,I.isArrayLikeObject=Dt,I.isBoolean=Xd,I.isBuffer=Gn,I.isDate=Yd,I.isElement=Vd,I.isEmpty=Jd,I.isEqual=Zd,I.isEqualWith=Qd,I.isError=xs,I.isFinite=ep,I.isFunction=jn,I.isInteger=Ho,I.isLength=vi,I.isMap=qo,I.isMatch=tp,I.isMatchWith=np,I.isNaN=rp,I.isNative=ip,I.isNil=ap,I.isNull=sp,I.isNumber=Uo,I.isObject=wt,I.isObjectLike=Tt,I.isPlainObject=Br,I.isRegExp=Es,I.isSafeInteger=op,I.isSet=zo,I.isString=yi,I.isSymbol=an,I.isTypedArray=gr,I.isUndefined=cp,I.isWeakMap=lp,I.isWeakSet=up,I.join=pf,I.kebabCase=Qp,I.last=gn,I.lastIndexOf=hf,I.lowerCase=eh,I.lowerFirst=th,I.lt=fp,I.lte=dp,I.max=Yh,I.maxBy=Vh,I.mean=Jh,I.meanBy=Zh,I.min=Qh,I.minBy=e0,I.stubArray=ks,I.stubFalse=Ns,I.stubObject=Oh,I.stubString=Hh,I.stubTrue=qh,I.multiply=t0,I.nth=gf,I.noConflict=Rh,I.noop=Ds,I.now=gi,I.pad=nh,I.padEnd=rh,I.padStart=ih,I.parseInt=sh,I.random=Xp,I.reduce=vd,I.reduceRight=yd,I.repeat=ah,I.replace=oh,I.result=Mp,I.round=n0,I.runInContext=V,I.sample=Ed,I.size=wd,I.snakeCase=ch,I.some=Td,I.sortedIndex=Af,I.sortedIndexBy=Sf,I.sortedIndexOf=wf,I.sortedLastIndex=Tf,I.sortedLastIndexBy=Pf,I.sortedLastIndexOf=Cf,I.startCase=uh,I.startsWith=fh,I.subtract=r0,I.sum=i0,I.sumBy=s0,I.template=dh,I.times=Uh,I.toFinite=_n,I.toInteger=Je,I.toLength=Ko,I.toLower=ph,I.toNumber=mn,I.toSafeInteger=pp,I.toString=ut,I.toUpper=hh,I.trim=gh,I.trimEnd=mh,I.trimStart=bh,I.truncate=vh,I.unescape=yh,I.uniqueId=Wh,I.upperCase=xh,I.upperFirst=ws,I.each=Ro,I.eachRight=Lo,I.first=Co,Cs(I,function(){var e={};return wn(I,function(t,o){dt.call(I.prototype,o)||(e[o]=t)}),e}(),{chain:!1}),I.VERSION=n,un(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){I[e].placeholder=I}),un(["drop","take"],function(e,t){rt.prototype[e]=function(o){o=o===r?1:It(Je(o),0);var E=this.__filtered__&&!t?new rt(this):this.clone();return E.__filtered__?E.__takeCount__=Ut(o,E.__takeCount__):E.__views__.push({size:Ut(o,he),type:e+(E.__dir__<0?"Right":"")}),E},rt.prototype[e+"Right"]=function(o){return this.reverse()[e](o).reverse()}}),un(["filter","map","takeWhile"],function(e,t){var o=t+1,E=o==_||o==H;rt.prototype[e]=function(R){var M=this.clone();return M.__iteratees__.push({iteratee:He(R,3),type:o}),M.__filtered__=M.__filtered__||E,M}}),un(["head","last"],function(e,t){var o="take"+(t?"Right":"");rt.prototype[e]=function(){return this[o](1).value()[0]}}),un(["initial","tail"],function(e,t){var o="drop"+(t?"":"Right");rt.prototype[e]=function(){return this.__filtered__?new rt(this):this[o](1)}}),rt.prototype.compact=function(){return this.filter(Qt)},rt.prototype.find=function(e){return this.filter(e).head()},rt.prototype.findLast=function(e){return this.reverse().find(e)},rt.prototype.invokeMap=Qe(function(e,t){return typeof e=="function"?new rt(this):this.map(function(o){return Cr(o,e,t)})}),rt.prototype.reject=function(e){return this.filter(bi(He(e)))},rt.prototype.slice=function(e,t){e=Je(e);var o=this;return o.__filtered__&&(e>0||t<0)?new rt(o):(e<0?o=o.takeRight(-e):e&&(o=o.drop(e)),t!==r&&(t=Je(t),o=t<0?o.dropRight(-t):o.take(t-e)),o)},rt.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},rt.prototype.toArray=function(){return this.take(he)},wn(rt.prototype,function(e,t){var o=/^(?:filter|find|map|reject)|While$/.test(t),E=/^(?:head|last)$/.test(t),R=I[E?"take"+(t=="last"?"Right":""):t],M=E||/^find/.test(t);!R||(I.prototype[t]=function(){var z=this.__wrapped__,X=E?[1]:arguments,J=z instanceof rt,le=X[0],ue=J||Xe(z),ge=function(nt){var at=R.apply(I,Hn([nt],X));return E&&Te?at[0]:at};ue&&o&&typeof le=="function"&&le.length!=1&&(J=ue=!1);var Te=this.__chain__,Ne=!!this.__actions__.length,qe=M&&!Te,Ze=J&&!Ne;if(!M&&ue){z=Ze?z:new rt(this);var Ue=e.apply(z,X);return Ue.__actions__.push({func:pi,args:[ge],thisArg:r}),new dn(Ue,Te)}return qe&&Ze?e.apply(this,X):(Ue=this.thru(ge),qe?E?Ue.value()[0]:Ue.value():Ue)})}),un(["pop","push","shift","sort","splice","unshift"],function(e){var t=Or[e],o=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",E=/^(?:pop|shift)$/.test(e);I.prototype[e]=function(){var R=arguments;if(E&&!this.__chain__){var M=this.value();return t.apply(Xe(M)?M:[],R)}return this[o](function(z){return t.apply(Xe(z)?z:[],R)})}}),wn(rt.prototype,function(e,t){var o=I[t];if(o){var E=o.name+"";dt.call(ur,E)||(ur[E]=[]),ur[E].push({name:t,func:o})}}),ur[ai(r,P).name]=[{name:"wrapper",func:r}],rt.prototype.clone=vl,rt.prototype.reverse=yl,rt.prototype.value=xl,I.prototype.at=Vf,I.prototype.chain=Jf,I.prototype.commit=Zf,I.prototype.next=Qf,I.prototype.plant=td,I.prototype.reverse=nd,I.prototype.toJSON=I.prototype.valueOf=I.prototype.value=rd,I.prototype.first=I.prototype.head,xr&&(I.prototype[xr]=ed),I},Mr=Jc();Ot._=Mr,h=function(){return Mr}.call(v,a,v,w),h!==r&&(w.exports=h)}).call(this)},9593:(w,v,a)=>{"use strict";const h=a(4411),r=Symbol("max"),n=Symbol("length"),c=Symbol("lengthCalculator"),f=Symbol("allowStale"),l=Symbol("maxAge"),s=Symbol("dispose"),u=Symbol("noDisposeOnSet"),g=Symbol("lruList"),i=Symbol("cache"),m=Symbol("updateAgeOnGet"),d=()=>1;class p{constructor(T){if(typeof T=="number"&&(T={max:T}),T||(T={}),T.max&&(typeof T.max!="number"||T.max<0))throw new TypeError("max must be a non-negative number");const C=this[r]=T.max||1/0,k=T.length||d;if(this[c]=typeof k!="function"?d:k,this[f]=T.stale||!1,T.maxAge&&typeof T.maxAge!="number")throw new TypeError("maxAge must be a number");this[l]=T.maxAge||0,this[s]=T.dispose,this[u]=T.noDisposeOnSet||!1,this[m]=T.updateAgeOnGet||!1,this.reset()}set max(T){if(typeof T!="number"||T<0)throw new TypeError("max must be a non-negative number");this[r]=T||1/0,x(this)}get max(){return this[r]}set allowStale(T){this[f]=!!T}get allowStale(){return this[f]}set maxAge(T){if(typeof T!="number")throw new TypeError("maxAge must be a non-negative number");this[l]=T,x(this)}get maxAge(){return this[l]}set lengthCalculator(T){typeof T!="function"&&(T=d),T!==this[c]&&(this[c]=T,this[n]=0,this[g].forEach(C=>{C.length=this[c](C.value,C.key),this[n]+=C.length})),x(this)}get lengthCalculator(){return this[c]}get length(){return this[n]}get itemCount(){return this[g].length}rforEach(T,C){C=C||this;for(let k=this[g].tail;k!==null;){const L=k.prev;D(this,T,k,C),k=L}}forEach(T,C){C=C||this;for(let k=this[g].head;k!==null;){const L=k.next;D(this,T,k,C),k=L}}keys(){return this[g].toArray().map(T=>T.key)}values(){return this[g].toArray().map(T=>T.value)}reset(){this[s]&&this[g]&&this[g].length&&this[g].forEach(T=>this[s](T.key,T.value)),this[i]=new Map,this[g]=new h,this[n]=0}dump(){return this[g].map(T=>b(this,T)?!1:{k:T.key,v:T.value,e:T.now+(T.maxAge||0)}).toArray().filter(T=>T)}dumpLru(){return this[g]}set(T,C,k){if(k=k||this[l],k&&typeof k!="number")throw new TypeError("maxAge must be a number");const L=k?Date.now():0,N=this[c](C,T);if(this[i].has(T)){if(N>this[r])return P(this,this[i].get(T)),!1;const F=this[i].get(T).value;return this[s]&&(this[u]||this[s](T,F.value)),F.now=L,F.maxAge=k,F.value=C,this[n]+=N-F.length,F.length=N,this.get(T),x(this),!0}const B=new S(T,C,N,L,k);return B.length>this[r]?(this[s]&&this[s](T,C),!1):(this[n]+=B.length,this[g].unshift(B),this[i].set(T,this[g].head),x(this),!0)}has(T){if(!this[i].has(T))return!1;const C=this[i].get(T).value;return!b(this,C)}get(T){return y(this,T,!0)}peek(T){return y(this,T,!1)}pop(){const T=this[g].tail;return T?(P(this,T),T.value):null}del(T){P(this,this[i].get(T))}load(T){this.reset();const C=Date.now();for(let k=T.length-1;k>=0;k--){const L=T[k],N=L.e||0;if(N===0)this.set(L.k,L.v);else{const B=N-C;B>0&&this.set(L.k,L.v,B)}}}prune(){this[i].forEach((T,C)=>y(this,C,!1))}}const y=(A,T,C)=>{const k=A[i].get(T);if(k){const L=k.value;if(b(A,L)){if(P(A,k),!A[f])return}else C&&(A[m]&&(k.value.now=Date.now()),A[g].unshiftNode(k));return L.value}},b=(A,T)=>{if(!T||!T.maxAge&&!A[l])return!1;const C=Date.now()-T.now;return T.maxAge?C>T.maxAge:A[l]&&C>A[l]},x=A=>{if(A[n]>A[r])for(let T=A[g].tail;A[n]>A[r]&&T!==null;){const C=T.prev;P(A,T),T=C}},P=(A,T)=>{if(T){const C=T.value;A[s]&&A[s](C.key,C.value),A[n]-=C.length,A[i].delete(C.key),A[g].removeNode(T)}};class S{constructor(T,C,k,L,N){this.key=T,this.value=C,this.length=k,this.now=L,this.maxAge=N||0}}const D=(A,T,C,k)=>{let L=C.value;b(A,L)&&(P(A,C),A[f]||(L=void 0)),L&&T.call(k,L.value,L.key,A)};w.exports=p},7874:()=>{(function(w){var v="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",a={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},h={bash:a,environment:{pattern:RegExp("\\$"+v),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+v),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};w.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+v),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:h},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:a}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:h},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:h.entity}}],environment:{pattern:RegExp("\\$?"+v),alias:"constant"},variable:h.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},a.inside=w.languages.bash;for(var r=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],n=h.variable[1].inside,c=0;c<r.length;c++)n[r[c]]=w.languages.bash[r[c]];w.languages.shell=w.languages.bash})(Prism)},57:()=>{(function(w){function v(s){return RegExp("(^(?:"+s+"):[ 	]*(?![ 	]))[^]+","i")}w.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:w.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:v(/Content-Security-Policy/.source),lookbehind:!0,alias:["csp","languages-csp"],inside:w.languages.csp},{pattern:v(/Public-Key-Pins(?:-Report-Only)?/.source),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:w.languages.hpkp},{pattern:v(/Strict-Transport-Security/.source),lookbehind:!0,alias:["hsts","languages-hsts"],inside:w.languages.hsts},{pattern:v(/[^:]+/.source),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var a=w.languages,h={"application/javascript":a.javascript,"application/json":a.json||a.javascript,"application/xml":a.xml,"text/xml":a.xml,"text/html":a.html,"text/css":a.css,"text/plain":a.plain},r={"application/json":!0,"application/xml":!0};function n(s){var u=s.replace(/^[a-z]+\//,""),g="\\w+/(?:[\\w.-]+\\+)+"+u+"(?![+\\w.-])";return"(?:"+s+"|"+g+")"}var c;for(var f in h)if(h[f]){c=c||{};var l=r[f]?n(f):f;c[f.replace(/\//g,"-")]={pattern:RegExp("("+/content-type:\s*/.source+l+/(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source+")"+/[^ \t\w-][\s\S]*/.source,"i"),lookbehind:!0,inside:h[f]}}c&&w.languages.insertBefore("http","header",c)})(Prism)},4277:()=>{Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json},366:()=>{Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},5660:(w,v,a)=>{var h=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var r=function(n){var c=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,f=0,l={},s={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function S(D){return D instanceof u?new u(D.type,S(D.content),D.alias):Array.isArray(D)?D.map(S):D.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(S){return Object.prototype.toString.call(S).slice(8,-1)},objId:function(S){return S.__id||Object.defineProperty(S,"__id",{value:++f}),S.__id},clone:function S(D,A){A=A||{};var T,C;switch(s.util.type(D)){case"Object":if(C=s.util.objId(D),A[C])return A[C];T={},A[C]=T;for(var k in D)D.hasOwnProperty(k)&&(T[k]=S(D[k],A));return T;case"Array":return C=s.util.objId(D),A[C]?A[C]:(T=[],A[C]=T,D.forEach(function(L,N){T[N]=S(L,A)}),T);default:return D}},getLanguage:function(S){for(;S;){var D=c.exec(S.className);if(D)return D[1].toLowerCase();S=S.parentElement}return"none"},setLanguage:function(S,D){S.className=S.className.replace(RegExp(c,"gi"),""),S.classList.add("language-"+D)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(T){var S=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(T.stack)||[])[1];if(S){var D=document.getElementsByTagName("script");for(var A in D)if(D[A].src==S)return D[A]}return null}},isActive:function(S,D,A){for(var T="no-"+D;S;){var C=S.classList;if(C.contains(D))return!0;if(C.contains(T))return!1;S=S.parentElement}return!!A}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(S,D){var A=s.util.clone(s.languages[S]);for(var T in D)A[T]=D[T];return A},insertBefore:function(S,D,A,T){T=T||s.languages;var C=T[S],k={};for(var L in C)if(C.hasOwnProperty(L)){if(L==D)for(var N in A)A.hasOwnProperty(N)&&(k[N]=A[N]);A.hasOwnProperty(L)||(k[L]=C[L])}var B=T[S];return T[S]=k,s.languages.DFS(s.languages,function(O,F){F===B&&O!=S&&(this[O]=k)}),k},DFS:function S(D,A,T,C){C=C||{};var k=s.util.objId;for(var L in D)if(D.hasOwnProperty(L)){A.call(D,L,D[L],T||L);var N=D[L],B=s.util.type(N);B==="Object"&&!C[k(N)]?(C[k(N)]=!0,S(N,A,null,C)):B==="Array"&&!C[k(N)]&&(C[k(N)]=!0,S(N,A,L,C))}}},plugins:{},highlightAll:function(S,D){s.highlightAllUnder(document,S,D)},highlightAllUnder:function(S,D,A){var T={callback:A,container:S,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",T),T.elements=Array.prototype.slice.apply(T.container.querySelectorAll(T.selector)),s.hooks.run("before-all-elements-highlight",T);for(var C=0,k;k=T.elements[C++];)s.highlightElement(k,D===!0,T.callback)},highlightElement:function(S,D,A){var T=s.util.getLanguage(S),C=s.languages[T];s.util.setLanguage(S,T);var k=S.parentElement;k&&k.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(k,T);var L=S.textContent,N={element:S,language:T,grammar:C,code:L};function B(F){N.highlightedCode=F,s.hooks.run("before-insert",N),N.element.innerHTML=N.highlightedCode,s.hooks.run("after-highlight",N),s.hooks.run("complete",N),A&&A.call(N.element)}if(s.hooks.run("before-sanity-check",N),k=N.element.parentElement,k&&k.nodeName.toLowerCase()==="pre"&&!k.hasAttribute("tabindex")&&k.setAttribute("tabindex","0"),!N.code){s.hooks.run("complete",N),A&&A.call(N.element);return}if(s.hooks.run("before-highlight",N),!N.grammar){B(s.util.encode(N.code));return}if(D&&n.Worker){var O=new Worker(s.filename);O.onmessage=function(F){B(F.data)},O.postMessage(JSON.stringify({language:N.language,code:N.code,immediateClose:!0}))}else B(s.highlight(N.code,N.grammar,N.language))},highlight:function(S,D,A){var T={code:S,grammar:D,language:A};if(s.hooks.run("before-tokenize",T),!T.grammar)throw new Error('The language "'+T.language+'" has no grammar.');return T.tokens=s.tokenize(T.code,T.grammar),s.hooks.run("after-tokenize",T),u.stringify(s.util.encode(T.tokens),T.language)},tokenize:function(S,D){var A=D.rest;if(A){for(var T in A)D[T]=A[T];delete D.rest}var C=new m;return d(C,C.head,S),i(S,C,D,C.head,0),y(C)},hooks:{all:{},add:function(S,D){var A=s.hooks.all;A[S]=A[S]||[],A[S].push(D)},run:function(S,D){var A=s.hooks.all[S];if(!(!A||!A.length))for(var T=0,C;C=A[T++];)C(D)}},Token:u};n.Prism=s;function u(S,D,A,T){this.type=S,this.content=D,this.alias=A,this.length=(T||"").length|0}u.stringify=function S(D,A){if(typeof D=="string")return D;if(Array.isArray(D)){var T="";return D.forEach(function(B){T+=S(B,A)}),T}var C={type:D.type,content:S(D.content,A),tag:"span",classes:["token",D.type],attributes:{},language:A},k=D.alias;k&&(Array.isArray(k)?Array.prototype.push.apply(C.classes,k):C.classes.push(k)),s.hooks.run("wrap",C);var L="";for(var N in C.attributes)L+=" "+N+'="'+(C.attributes[N]||"").replace(/"/g,"&quot;")+'"';return"<"+C.tag+' class="'+C.classes.join(" ")+'"'+L+">"+C.content+"</"+C.tag+">"};function g(S,D,A,T){S.lastIndex=D;var C=S.exec(A);if(C&&T&&C[1]){var k=C[1].length;C.index+=k,C[0]=C[0].slice(k)}return C}function i(S,D,A,T,C,k){for(var L in A)if(!(!A.hasOwnProperty(L)||!A[L])){var N=A[L];N=Array.isArray(N)?N:[N];for(var B=0;B<N.length;++B){if(k&&k.cause==L+","+B)return;var O=N[B],F=O.inside,q=!!O.lookbehind,_=!!O.greedy,W=O.alias;if(_&&!O.pattern.global){var H=O.pattern.toString().match(/[imsuy]*$/)[0];O.pattern=RegExp(O.pattern.source,H+"g")}for(var $=O.pattern||O,K=T.next,te=C;K!==D.tail&&!(k&&te>=k.reach);te+=K.value.length,K=K.next){var oe=K.value;if(D.length>S.length)return;if(!(oe instanceof u)){var he=1,Q;if(_){if(Q=g($,te,S,q),!Q||Q.index>=S.length)break;var mt=Q.index,ve=Q.index+Q[0].length,Ae=te;for(Ae+=K.value.length;mt>=Ae;)K=K.next,Ae+=K.value.length;if(Ae-=K.value.length,te=Ae,K.value instanceof u)continue;for(var Ke=K;Ke!==D.tail&&(Ae<ve||typeof Ke.value=="string");Ke=Ke.next)he++,Ae+=Ke.value.length;he--,oe=S.slice(te,Ae),Q.index-=te}else if(Q=g($,0,oe,q),!Q)continue;var mt=Q.index,Rt=Q[0],Nt=oe.slice(0,mt),Lt=oe.slice(mt+Rt.length),Wt=te+oe.length;k&&Wt>k.reach&&(k.reach=Wt);var ze=K.prev;Nt&&(ze=d(D,ze,Nt),te+=Nt.length),p(D,ze,he);var Mt=new u(L,F?s.tokenize(Rt,F):Rt,W,Rt);if(K=d(D,ze,Mt),Lt&&d(D,K,Lt),he>1){var Ve={cause:L+","+B,reach:Wt};i(S,D,A,K.prev,te,Ve),k&&Ve.reach>k.reach&&(k.reach=Ve.reach)}}}}}}function m(){var S={value:null,prev:null,next:null},D={value:null,prev:S,next:null};S.next=D,this.head=S,this.tail=D,this.length=0}function d(S,D,A){var T=D.next,C={value:A,prev:D,next:T};return D.next=C,T.prev=C,S.length++,C}function p(S,D,A){for(var T=D.next,C=0;C<A&&T!==S.tail;C++)T=T.next;D.next=T,T.prev=D,S.length-=C}function y(S){for(var D=[],A=S.head.next;A!==S.tail;)D.push(A.value),A=A.next;return D}if(!n.document)return n.addEventListener&&(s.disableWorkerMessageHandler||n.addEventListener("message",function(S){var D=JSON.parse(S.data),A=D.language,T=D.code,C=D.immediateClose;n.postMessage(s.highlight(T,s.languages[A],A)),C&&n.close()},!1)),s;var b=s.util.currentScript();b&&(s.filename=b.src,b.hasAttribute("data-manual")&&(s.manual=!0));function x(){s.manual||s.highlightAll()}if(!s.manual){var P=document.readyState;P==="loading"||P==="interactive"&&b&&b.defer?document.addEventListener("DOMContentLoaded",x):window.requestAnimationFrame?window.requestAnimationFrame(x):window.setTimeout(x,16)}return s}(h);w.exports&&(w.exports=r),typeof a.g!="undefined"&&(a.g.Prism=r),r.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},r.languages.markup.tag.inside["attr-value"].inside.entity=r.languages.markup.entity,r.languages.markup.doctype.inside["internal-subset"].inside=r.languages.markup,r.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(r.languages.markup.tag,"addInlined",{value:function(c,f){var l={};l["language-"+f]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:r.languages[f]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};s["language-"+f]={pattern:/[\s\S]+/,inside:r.languages[f]};var u={};u[c]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return c}),"i"),lookbehind:!0,greedy:!0,inside:s},r.languages.insertBefore("markup","cdata",u)}}),Object.defineProperty(r.languages.markup.tag,"addAttribute",{value:function(n,c){r.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[c,"language-"+c],inside:r.languages[c]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),r.languages.html=r.languages.markup,r.languages.mathml=r.languages.markup,r.languages.svg=r.languages.markup,r.languages.xml=r.languages.extend("markup",{}),r.languages.ssml=r.languages.xml,r.languages.atom=r.languages.xml,r.languages.rss=r.languages.xml,function(n){var c=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+c.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+c.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+c.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:c,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var f=n.languages.markup;f&&(f.tag.addInlined("style","css"),f.tag.addAttribute("style","css"))}(r),r.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},r.languages.javascript=r.languages.extend("clike",{"class-name":[r.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),r.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,r.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:r.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:r.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:r.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:r.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:r.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),r.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:r.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),r.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),r.languages.markup&&(r.languages.markup.tag.addInlined("script","javascript"),r.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),r.languages.js=r.languages.javascript,function(){if(typeof r=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var n="Loading\u2026",c=function(b,x){return"\u2716 Error "+b+" while fetching file: "+x},f="\u2716 Error: File does not exist or is empty",l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",u="loading",g="loaded",i="failed",m="pre[data-src]:not(["+s+'="'+g+'"]):not(['+s+'="'+u+'"])';function d(b,x,P){var S=new XMLHttpRequest;S.open("GET",b,!0),S.onreadystatechange=function(){S.readyState==4&&(S.status<400&&S.responseText?x(S.responseText):S.status>=400?P(c(S.status,S.statusText)):P(f))},S.send(null)}function p(b){var x=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(b||"");if(x){var P=Number(x[1]),S=x[2],D=x[3];return S?D?[P,Number(D)]:[P,void 0]:[P,P]}}r.hooks.add("before-highlightall",function(b){b.selector+=", "+m}),r.hooks.add("before-sanity-check",function(b){var x=b.element;if(x.matches(m)){b.code="",x.setAttribute(s,u);var P=x.appendChild(document.createElement("CODE"));P.textContent=n;var S=x.getAttribute("data-src"),D=b.language;if(D==="none"){var A=(/\.(\w+)$/.exec(S)||[,"none"])[1];D=l[A]||A}r.util.setLanguage(P,D),r.util.setLanguage(x,D);var T=r.plugins.autoloader;T&&T.loadLanguages(D),d(S,function(C){x.setAttribute(s,g);var k=p(x.getAttribute("data-range"));if(k){var L=C.split(/\r\n?|\n/g),N=k[0],B=k[1]==null?L.length:k[1];N<0&&(N+=L.length),N=Math.max(0,Math.min(N-1,L.length)),B<0&&(B+=L.length),B=Math.max(0,Math.min(B,L.length)),C=L.slice(N,B).join(`
`),x.hasAttribute("data-start")||x.setAttribute("data-start",String(N+1))}P.textContent=C,r.highlightElement(P)},function(C){x.setAttribute(s,i),P.textContent=C})}}),r.plugins.fileHighlight={highlight:function(x){for(var P=(x||document).querySelectorAll(m),S=0,D;D=P[S++];)r.highlightElement(D)}};var y=!1;r.fileHighlight=function(){y||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),y=!0),r.plugins.fileHighlight.highlight.apply(this,arguments)}}()},7129:(w,v)=>{"use strict";var a=Object.prototype.hasOwnProperty,h;function r(l){try{return decodeURIComponent(l.replace(/\+/g," "))}catch(s){return null}}function n(l){try{return encodeURIComponent(l)}catch(s){return null}}function c(l){for(var s=/([^=?#&]+)=?([^&]*)/g,u={},g;g=s.exec(l);){var i=r(g[1]),m=r(g[2]);i===null||m===null||i in u||(u[i]=m)}return u}function f(l,s){s=s||"";var u=[],g,i;typeof s!="string"&&(s="?");for(i in l)if(a.call(l,i)){if(g=l[i],!g&&(g===null||g===h||isNaN(g))&&(g=""),i=n(i),g=n(g),i===null||g===null)continue;u.push(i+"="+g)}return u.length?s+u.join("&"):""}v.stringify=f,v.parse=c},7418:w=>{"use strict";w.exports=function(a,h){if(h=h.split(":")[0],a=+a,!a)return!1;switch(h){case"http":case"ws":return a!==80;case"https":case"wss":return a!==443;case"ftp":return a!==21;case"gopher":return a!==70;case"file":return!1}return a!==0}},4564:(w,v,a)=>{"use strict";var h=a(7418),r=a(7129),n=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,c=/[\n\r\t]/g,f=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,l=/:\d+$/,s=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,u=/^[a-zA-Z]:/;function g(D){return(D||"").toString().replace(n,"")}var i=[["#","hash"],["?","query"],function(A,T){return p(T.protocol)?A.replace(/\\/g,"/"):A},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],m={hash:1,query:1};function d(D){var A;typeof window!="undefined"?A=window:typeof a.g!="undefined"?A=a.g:typeof self!="undefined"?A=self:A={};var T=A.location||{};D=D||T;var C={},k=typeof D,L;if(D.protocol==="blob:")C=new x(unescape(D.pathname),{});else if(k==="string"){C=new x(D,{});for(L in m)delete C[L]}else if(k==="object"){for(L in D)L in m||(C[L]=D[L]);C.slashes===void 0&&(C.slashes=f.test(D.href))}return C}function p(D){return D==="file:"||D==="ftp:"||D==="http:"||D==="https:"||D==="ws:"||D==="wss:"}function y(D,A){D=g(D),D=D.replace(c,""),A=A||{};var T=s.exec(D),C=T[1]?T[1].toLowerCase():"",k=!!T[2],L=!!T[3],N=0,B;return k?L?(B=T[2]+T[3]+T[4],N=T[2].length+T[3].length):(B=T[2]+T[4],N=T[2].length):L?(B=T[3]+T[4],N=T[3].length):B=T[4],C==="file:"?N>=2&&(B=B.slice(2)):p(C)?B=T[4]:C?k&&(B=B.slice(2)):N>=2&&p(A.protocol)&&(B=T[4]),{protocol:C,slashes:k||p(C),slashesCount:N,rest:B}}function b(D,A){if(D==="")return A;for(var T=(A||"/").split("/").slice(0,-1).concat(D.split("/")),C=T.length,k=T[C-1],L=!1,N=0;C--;)T[C]==="."?T.splice(C,1):T[C]===".."?(T.splice(C,1),N++):N&&(C===0&&(L=!0),T.splice(C,1),N--);return L&&T.unshift(""),(k==="."||k==="..")&&T.push(""),T.join("/")}function x(D,A,T){if(D=g(D),D=D.replace(c,""),!(this instanceof x))return new x(D,A,T);var C,k,L,N,B,O,F=i.slice(),q=typeof A,_=this,W=0;for(q!=="object"&&q!=="string"&&(T=A,A=null),T&&typeof T!="function"&&(T=r.parse),A=d(A),k=y(D||"",A),C=!k.protocol&&!k.slashes,_.slashes=k.slashes||C&&A.slashes,_.protocol=k.protocol||A.protocol||"",D=k.rest,(k.protocol==="file:"&&(k.slashesCount!==2||u.test(D))||!k.slashes&&(k.protocol||k.slashesCount<2||!p(_.protocol)))&&(F[3]=[/(.*)/,"pathname"]);W<F.length;W++){if(N=F[W],typeof N=="function"){D=N(D,_);continue}L=N[0],O=N[1],L!==L?_[O]=D:typeof L=="string"?(B=L==="@"?D.lastIndexOf(L):D.indexOf(L),~B&&(typeof N[2]=="number"?(_[O]=D.slice(0,B),D=D.slice(B+N[2])):(_[O]=D.slice(B),D=D.slice(0,B)))):(B=L.exec(D))&&(_[O]=B[1],D=D.slice(0,B.index)),_[O]=_[O]||C&&N[3]&&A[O]||"",N[4]&&(_[O]=_[O].toLowerCase())}T&&(_.query=T(_.query)),C&&A.slashes&&_.pathname.charAt(0)!=="/"&&(_.pathname!==""||A.pathname!=="")&&(_.pathname=b(_.pathname,A.pathname)),_.pathname.charAt(0)!=="/"&&p(_.protocol)&&(_.pathname="/"+_.pathname),h(_.port,_.protocol)||(_.host=_.hostname,_.port=""),_.username=_.password="",_.auth&&(B=_.auth.indexOf(":"),~B?(_.username=_.auth.slice(0,B),_.username=encodeURIComponent(decodeURIComponent(_.username)),_.password=_.auth.slice(B+1),_.password=encodeURIComponent(decodeURIComponent(_.password))):_.username=encodeURIComponent(decodeURIComponent(_.auth)),_.auth=_.password?_.username+":"+_.password:_.username),_.origin=_.protocol!=="file:"&&p(_.protocol)&&_.host?_.protocol+"//"+_.host:"null",_.href=_.toString()}function P(D,A,T){var C=this;switch(D){case"query":typeof A=="string"&&A.length&&(A=(T||r.parse)(A)),C[D]=A;break;case"port":C[D]=A,h(A,C.protocol)?A&&(C.host=C.hostname+":"+A):(C.host=C.hostname,C[D]="");break;case"hostname":C[D]=A,C.port&&(A+=":"+C.port),C.host=A;break;case"host":C[D]=A,l.test(A)?(A=A.split(":"),C.port=A.pop(),C.hostname=A.join(":")):(C.hostname=A,C.port="");break;case"protocol":C.protocol=A.toLowerCase(),C.slashes=!T;break;case"pathname":case"hash":if(A){var k=D==="pathname"?"/":"#";C[D]=A.charAt(0)!==k?k+A:A}else C[D]=A;break;case"username":case"password":C[D]=encodeURIComponent(A);break;case"auth":var L=A.indexOf(":");~L?(C.username=A.slice(0,L),C.username=encodeURIComponent(decodeURIComponent(C.username)),C.password=A.slice(L+1),C.password=encodeURIComponent(decodeURIComponent(C.password))):C.username=encodeURIComponent(decodeURIComponent(A))}for(var N=0;N<i.length;N++){var B=i[N];B[4]&&(C[B[1]]=C[B[1]].toLowerCase())}return C.auth=C.password?C.username+":"+C.password:C.username,C.origin=C.protocol!=="file:"&&p(C.protocol)&&C.host?C.protocol+"//"+C.host:"null",C.href=C.toString(),C}function S(D){(!D||typeof D!="function")&&(D=r.stringify);var A,T=this,C=T.host,k=T.protocol;k&&k.charAt(k.length-1)!==":"&&(k+=":");var L=k+(T.protocol&&T.slashes||p(T.protocol)?"//":"");return T.username?(L+=T.username,T.password&&(L+=":"+T.password),L+="@"):T.password?(L+=":"+T.password,L+="@"):T.protocol!=="file:"&&p(T.protocol)&&!C&&T.pathname!=="/"&&(L+="@"),(C[C.length-1]===":"||l.test(T.hostname)&&!T.port)&&(C+=":"),L+=C+T.pathname,A=typeof T.query=="object"?D(T.query):T.query,A&&(L+=A.charAt(0)!=="?"?"?"+A:A),T.hash&&(L+=T.hash),L}x.prototype={set:P,toString:S},x.extractProtocol=y,x.location=d,x.trimLeft=g,x.qs=r,w.exports=x},9602:w=>{"use strict";w.exports=function(v){v.prototype[Symbol.iterator]=function*(){for(let a=this.head;a;a=a.next)yield a.value}}},4411:(w,v,a)=>{"use strict";w.exports=h,h.Node=f,h.create=h;function h(l){var s=this;if(s instanceof h||(s=new h),s.tail=null,s.head=null,s.length=0,l&&typeof l.forEach=="function")l.forEach(function(i){s.push(i)});else if(arguments.length>0)for(var u=0,g=arguments.length;u<g;u++)s.push(arguments[u]);return s}h.prototype.removeNode=function(l){if(l.list!==this)throw new Error("removing node which does not belong to this list");var s=l.next,u=l.prev;return s&&(s.prev=u),u&&(u.next=s),l===this.head&&(this.head=s),l===this.tail&&(this.tail=u),l.list.length--,l.next=null,l.prev=null,l.list=null,s},h.prototype.unshiftNode=function(l){if(l!==this.head){l.list&&l.list.removeNode(l);var s=this.head;l.list=this,l.next=s,s&&(s.prev=l),this.head=l,this.tail||(this.tail=l),this.length++}},h.prototype.pushNode=function(l){if(l!==this.tail){l.list&&l.list.removeNode(l);var s=this.tail;l.list=this,l.prev=s,s&&(s.next=l),this.tail=l,this.head||(this.head=l),this.length++}},h.prototype.push=function(){for(var l=0,s=arguments.length;l<s;l++)n(this,arguments[l]);return this.length},h.prototype.unshift=function(){for(var l=0,s=arguments.length;l<s;l++)c(this,arguments[l]);return this.length},h.prototype.pop=function(){if(!!this.tail){var l=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,l}},h.prototype.shift=function(){if(!!this.head){var l=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,l}},h.prototype.forEach=function(l,s){s=s||this;for(var u=this.head,g=0;u!==null;g++)l.call(s,u.value,g,this),u=u.next},h.prototype.forEachReverse=function(l,s){s=s||this;for(var u=this.tail,g=this.length-1;u!==null;g--)l.call(s,u.value,g,this),u=u.prev},h.prototype.get=function(l){for(var s=0,u=this.head;u!==null&&s<l;s++)u=u.next;if(s===l&&u!==null)return u.value},h.prototype.getReverse=function(l){for(var s=0,u=this.tail;u!==null&&s<l;s++)u=u.prev;if(s===l&&u!==null)return u.value},h.prototype.map=function(l,s){s=s||this;for(var u=new h,g=this.head;g!==null;)u.push(l.call(s,g.value,this)),g=g.next;return u},h.prototype.mapReverse=function(l,s){s=s||this;for(var u=new h,g=this.tail;g!==null;)u.push(l.call(s,g.value,this)),g=g.prev;return u},h.prototype.reduce=function(l,s){var u,g=this.head;if(arguments.length>1)u=s;else if(this.head)g=this.head.next,u=this.head.value;else throw new TypeError("Reduce of empty list with no initial value");for(var i=0;g!==null;i++)u=l(u,g.value,i),g=g.next;return u},h.prototype.reduceReverse=function(l,s){var u,g=this.tail;if(arguments.length>1)u=s;else if(this.tail)g=this.tail.prev,u=this.tail.value;else throw new TypeError("Reduce of empty list with no initial value");for(var i=this.length-1;g!==null;i--)u=l(u,g.value,i),g=g.prev;return u},h.prototype.toArray=function(){for(var l=new Array(this.length),s=0,u=this.head;u!==null;s++)l[s]=u.value,u=u.next;return l},h.prototype.toArrayReverse=function(){for(var l=new Array(this.length),s=0,u=this.tail;u!==null;s++)l[s]=u.value,u=u.prev;return l},h.prototype.slice=function(l,s){s=s||this.length,s<0&&(s+=this.length),l=l||0,l<0&&(l+=this.length);var u=new h;if(s<l||s<0)return u;l<0&&(l=0),s>this.length&&(s=this.length);for(var g=0,i=this.head;i!==null&&g<l;g++)i=i.next;for(;i!==null&&g<s;g++,i=i.next)u.push(i.value);return u},h.prototype.sliceReverse=function(l,s){s=s||this.length,s<0&&(s+=this.length),l=l||0,l<0&&(l+=this.length);var u=new h;if(s<l||s<0)return u;l<0&&(l=0),s>this.length&&(s=this.length);for(var g=this.length,i=this.tail;i!==null&&g>s;g--)i=i.prev;for(;i!==null&&g>l;g--,i=i.prev)u.push(i.value);return u},h.prototype.splice=function(l,s,...u){l>this.length&&(l=this.length-1),l<0&&(l=this.length+l);for(var g=0,i=this.head;i!==null&&g<l;g++)i=i.next;for(var m=[],g=0;i&&g<s;g++)m.push(i.value),i=this.removeNode(i);i===null&&(i=this.tail),i!==this.head&&i!==this.tail&&(i=i.prev);for(var g=0;g<u.length;g++)i=r(this,i,u[g]);return m},h.prototype.reverse=function(){for(var l=this.head,s=this.tail,u=l;u!==null;u=u.prev){var g=u.prev;u.prev=u.next,u.next=g}return this.head=s,this.tail=l,this};function r(l,s,u){var g=s===l.head?new f(u,null,s,l):new f(u,s,s.next,l);return g.next===null&&(l.tail=g),g.prev===null&&(l.head=g),l.length++,g}function n(l,s){l.tail=new f(s,l.tail,null,l),l.head||(l.head=l.tail),l.length++}function c(l,s){l.head=new f(s,null,l.head,l),l.tail||(l.tail=l.head),l.length++}function f(l,s,u,g){if(!(this instanceof f))return new f(l,s,u,g);this.list=g,this.value=l,s?(s.next=this,this.prev=s):this.prev=null,u?(u.prev=this,this.next=u):this.next=null}try{a(9602)(h)}catch(l){}}},Rs={};function ft(w){var v=Rs[w];if(v!==void 0)return v.exports;var a=Rs[w]={id:w,loaded:!1,exports:{}};return ic[w].call(a.exports,a,a.exports,ft),a.loaded=!0,a.exports}ft.n=w=>{var v=w&&w.__esModule?()=>w.default:()=>w;return ft.d(v,{a:v}),v},ft.d=(w,v)=>{for(var a in v)ft.o(v,a)&&!ft.o(w,a)&&Object.defineProperty(w,a,{enumerable:!0,get:v[a]})},ft.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(w){if(typeof window=="object")return window}}(),ft.o=(w,v)=>Object.prototype.hasOwnProperty.call(w,v),ft.nmd=w=>(w.paths=[],w.children||(w.children=[]),w);var a0={};(()=>{var _t;"use strict";var w=ft(4002),v=ft.n(w),a=ft(6486),h=ft(7154),r=ft.n(h),n=ft(177),c=ft.n(n),f=ft(9737),l=ft(6278),s=ft(6927),u=ft(3497),g=ft(7814),i=ft(5660),m=ft.n(i),d=ft(7874),p=ft(4277),y=ft(57),b=ft(366),x=ft(4564);function P(pe){for(var Z=[],de=0;de<pe.length;){var Pe=pe[de];if(Pe==="*"||Pe==="+"||Pe==="?"){Z.push({type:"MODIFIER",index:de,value:pe[de++]});continue}if(Pe==="\\"){Z.push({type:"ESCAPED_CHAR",index:de++,value:pe[de++]});continue}if(Pe==="{"){Z.push({type:"OPEN",index:de,value:pe[de++]});continue}if(Pe==="}"){Z.push({type:"CLOSE",index:de,value:pe[de++]});continue}if(Pe===":"){for(var ne="",me=de+1;me<pe.length;){var fe=pe.charCodeAt(me);if(fe>=48&&fe<=57||fe>=65&&fe<=90||fe>=97&&fe<=122||fe===95){ne+=pe[me++];continue}break}if(!ne)throw new TypeError("Missing parameter name at "+de);Z.push({type:"NAME",index:de,value:ne}),de=me;continue}if(Pe==="("){var xe=1,Le="",me=de+1;if(pe[me]==="?")throw new TypeError('Pattern cannot start with "?" at '+me);for(;me<pe.length;){if(pe[me]==="\\"){Le+=pe[me++]+pe[me++];continue}if(pe[me]===")"){if(xe--,xe===0){me++;break}}else if(pe[me]==="("&&(xe++,pe[me+1]!=="?"))throw new TypeError("Capturing groups are not allowed at "+me);Le+=pe[me++]}if(xe)throw new TypeError("Unbalanced pattern at "+de);if(!Le)throw new TypeError("Missing pattern at "+de);Z.push({type:"PATTERN",index:de,value:Le}),de=me;continue}Z.push({type:"CHAR",index:de,value:pe[de++]})}return Z.push({type:"END",index:de,value:""}),Z}function S(pe,Z){Z===void 0&&(Z={});for(var de=P(pe),Pe=Z.prefixes,ne=Pe===void 0?"./":Pe,me="[^"+k(Z.delimiter||"/#?")+"]+?",fe=[],xe=0,Le=0,Fe="",ke=function(Y){if(Le<de.length&&de[Le].type===Y)return de[Le++].value},De=function(Y){var ie=ke(Y);if(ie!==void 0)return ie;var ae=de[Le],ye=ae.type,Se=ae.index;throw new TypeError("Unexpected "+ye+" at "+Se+", expected "+Y)},Me=function(){for(var Y="",ie;ie=ke("CHAR")||ke("ESCAPED_CHAR");)Y+=ie;return Y};Le<de.length;){var We=ke("CHAR"),it=ke("NAME"),Pt=ke("PATTERN");if(it||Pt){var Ge=We||"";ne.indexOf(Ge)===-1&&(Fe+=Ge,Ge=""),Fe&&(fe.push(Fe),Fe=""),fe.push({name:it||xe++,prefix:Ge,suffix:"",pattern:Pt||me,modifier:ke("MODIFIER")||""});continue}var vt=We||ke("ESCAPED_CHAR");if(vt){Fe+=vt;continue}Fe&&(fe.push(Fe),Fe="");var j=ke("OPEN");if(j){var Ge=Me(),U=ke("NAME")||"",G=ke("PATTERN")||"",re=Me();De("CLOSE"),fe.push({name:U||(G?xe++:""),pattern:U&&!G?me:G,prefix:Ge,suffix:re,modifier:ke("MODIFIER")||""});continue}De("END")}return fe}function D(pe,Z){return A(S(pe,Z),Z)}function A(pe,Z){Z===void 0&&(Z={});var de=L(Z),Pe=Z.encode,ne=Pe===void 0?function(Le){return Le}:Pe,me=Z.validate,fe=me===void 0?!0:me,xe=pe.map(function(Le){if(typeof Le=="object")return new RegExp("^(?:"+Le.pattern+")$",de)});return function(Le){for(var Fe="",ke=0;ke<pe.length;ke++){var De=pe[ke];if(typeof De=="string"){Fe+=De;continue}var Me=Le?Le[De.name]:void 0,We=De.modifier==="?"||De.modifier==="*",it=De.modifier==="*"||De.modifier==="+";if(Array.isArray(Me)){if(!it)throw new TypeError('Expected "'+De.name+'" to not repeat, but got an array');if(Me.length===0){if(We)continue;throw new TypeError('Expected "'+De.name+'" to not be empty')}for(var Pt=0;Pt<Me.length;Pt++){var Ge=ne(Me[Pt],De);if(fe&&!xe[ke].test(Ge))throw new TypeError('Expected all "'+De.name+'" to match "'+De.pattern+'", but got "'+Ge+'"');Fe+=De.prefix+Ge+De.suffix}continue}if(typeof Me=="string"||typeof Me=="number"){var Ge=ne(String(Me),De);if(fe&&!xe[ke].test(Ge))throw new TypeError('Expected "'+De.name+'" to match "'+De.pattern+'", but got "'+Ge+'"');Fe+=De.prefix+Ge+De.suffix;continue}if(!We){var vt=it?"an array":"a string";throw new TypeError('Expected "'+De.name+'" to be '+vt)}}return Fe}}function T(pe,Z){var de=[],Pe=q(pe,de,Z);return C(Pe,de,Z)}function C(pe,Z,de){de===void 0&&(de={});var Pe=de.decode,ne=Pe===void 0?function(me){return me}:Pe;return function(me){var fe=pe.exec(me);if(!fe)return!1;for(var xe=fe[0],Le=fe.index,Fe=Object.create(null),ke=function(Me){if(fe[Me]===void 0)return"continue";var We=Z[Me-1];We.modifier==="*"||We.modifier==="+"?Fe[We.name]=fe[Me].split(We.prefix+We.suffix).map(function(it){return ne(it,We)}):Fe[We.name]=ne(fe[Me],We)},De=1;De<fe.length;De++)ke(De);return{path:xe,index:Le,params:Fe}}}function k(pe){return pe.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function L(pe){return pe&&pe.sensitive?"":"i"}function N(pe,Z){if(!Z)return pe;for(var de=/\((?:\?<(.*?)>)?(?!\?)/g,Pe=0,ne=de.exec(pe.source);ne;)Z.push({name:ne[1]||Pe++,prefix:"",suffix:"",modifier:"",pattern:""}),ne=de.exec(pe.source);return pe}function B(pe,Z,de){var Pe=pe.map(function(ne){return q(ne,Z,de).source});return new RegExp("(?:"+Pe.join("|")+")",L(de))}function O(pe,Z,de){return F(S(pe,de),Z,de)}function F(pe,Z,de){de===void 0&&(de={});for(var Pe=de.strict,ne=Pe===void 0?!1:Pe,me=de.start,fe=me===void 0?!0:me,xe=de.end,Le=xe===void 0?!0:xe,Fe=de.encode,ke=Fe===void 0?function(Y){return Y}:Fe,De="["+k(de.endsWith||"")+"]|$",Me="["+k(de.delimiter||"/#?")+"]",We=fe?"^":"",it=0,Pt=pe;it<Pt.length;it++){var Ge=Pt[it];if(typeof Ge=="string")We+=k(ke(Ge));else{var vt=k(ke(Ge.prefix)),j=k(ke(Ge.suffix));if(Ge.pattern)if(Z&&Z.push(Ge),vt||j)if(Ge.modifier==="+"||Ge.modifier==="*"){var U=Ge.modifier==="*"?"?":"";We+="(?:"+vt+"((?:"+Ge.pattern+")(?:"+j+vt+"(?:"+Ge.pattern+"))*)"+j+")"+U}else We+="(?:"+vt+"("+Ge.pattern+")"+j+")"+Ge.modifier;else We+="("+Ge.pattern+")"+Ge.modifier;else We+="(?:"+vt+j+")"+Ge.modifier}}if(Le)ne||(We+=Me+"?"),We+=de.endsWith?"(?="+De+")":"$";else{var G=pe[pe.length-1],re=typeof G=="string"?Me.indexOf(G[G.length-1])>-1:G===void 0;ne||(We+="(?:"+Me+"(?="+De+"))?"),re||(We+="(?="+Me+"|"+De+")")}return new RegExp(We,L(de))}function q(pe,Z,de){return pe instanceof RegExp?N(pe,Z):Array.isArray(pe)?B(pe,Z,de):O(pe,Z,de)}class _{hydrate(Z,de){const Pe=Z,ne=new x(Z),me=[];return q(ne.pathname,me),me.forEach(fe=>{Z=Z.replace(":"+fe.name,encodeURIComponent(de[fe.name]))}),Z+=Z.indexOf("?")===-1?"?":"&",Object.keys(de).forEach(fe=>{Pe.indexOf(":"+fe)===-1&&(Z+=fe+"="+encodeURIComponent(de[fe])+"&")}),Z.replace(/[?&]$/,"")}}function W(){v()(".sample-request-send").off("click"),v()(".sample-request-send").on("click",function(pe){pe.preventDefault();const Z=v()(this).parents("article"),de=Z.data("group"),Pe=Z.data("name"),ne=Z.data("version");te(de,Pe,ne,v()(this).data("type"))}),v()(".sample-request-clear").off("click"),v()(".sample-request-clear").on("click",function(pe){pe.preventDefault();const Z=v()(this).parents("article"),de=Z.data("group"),Pe=Z.data("name"),ne=Z.data("version");oe(de,Pe,ne)})}function H(pe){return pe.replace(/{(.+?)}/g,":$1")}function $(pe,Z){const de=pe.find(".sample-request-url").val(),Pe=new _,ne=H(de);return Pe.hydrate(ne,Z)}function K(pe){const Z={};["header","query","body"].forEach(Pe=>{const ne={};try{pe.find(v()(`[data-family="${Pe}"]:visible`)).each((me,fe)=>{const xe=fe.dataset.name;let Le=fe.value;if(fe.type==="checkbox")if(fe.checked)Le="on";else return!0;if(!Le&&!fe.dataset.optional&&fe.type!=="checkbox")return v()(fe).addClass("border-danger"),!0;ne[xe]=Le})}catch(me){return}Z[Pe]=ne});const de=pe.find(v()('[data-family="body-json"]'));return de.is(":visible")?(Z.body=de.val(),Z.header["Content-Type"]="application/json"):Z.header["Content-Type"]="multipart/form-data",Z}function te(pe,Z,de,Pe){const ne=v()(`article[data-group="${pe}"][data-name="${Z}"][data-version="${de}"]`),me=K(ne),fe={};if(fe.url=$(ne,me.query),fe.headers=me.header,fe.headers["Content-Type"]==="application/json")fe.data=me.body;else if(fe.headers["Content-Type"]==="multipart/form-data"){const Fe=new FormData;for(const[ke,De]of Object.entries(me.body))Fe.append(ke,De);fe.data=Fe,fe.processData=!1,(Pe==="get"||Pe==="delete")&&delete fe.headers["Content-Type"]}fe.type=Pe,fe.success=xe,fe.error=Le,v().ajax(fe),ne.find(".sample-request-response").fadeTo(200,1),ne.find(".sample-request-response-json").html("Loading...");function xe(Fe,ke,De){let Me;try{Me=JSON.parse(De.responseText),Me=JSON.stringify(Me,null,4)}catch(We){Me=De.responseText}ne.find(".sample-request-response-json").text(Me),m().highlightAll()}function Le(Fe,ke,De){let Me="Error "+Fe.status+": "+De,We;try{We=JSON.parse(Fe.responseText),We=JSON.stringify(We,null,4)}catch(it){We=Fe.responseText}We&&(Me+=`
`+We),ne.find(".sample-request-response").is(":visible")&&ne.find(".sample-request-response").fadeTo(1,.1),ne.find(".sample-request-response").fadeTo(250,1),ne.find(".sample-request-response-json").text(Me),m().highlightAll()}}function oe(pe,Z,de){const Pe=v()('article[data-group="'+pe+'"][data-name="'+Z+'"][data-version="'+de+'"]');Pe.find(".sample-request-response-json").html(""),Pe.find(".sample-request-response").hide(),Pe.find(".sample-request-input").each((me,fe)=>{fe.value=fe.placeholder!==fe.dataset.name?fe.placeholder:""});const ne=Pe.find(".sample-request-url");ne.val(ne.prop("defaultValue"))}const Kt={ca:{"Allowed values:":"Valors permesos:","Compare all with predecessor":"Comparar tot amb versi\xF3 anterior","compare changes to:":"comparar canvis amb:","compared to":"comparat amb","Default value:":"Valor per defecte:",Description:"Descripci\xF3",Field:"Camp",General:"General","Generated with":"Generat amb",Name:"Nom","No response values.":"Sense valors en la resposta.",optional:"opcional",Parameter:"Par\xE0metre","Permission:":"Permisos:",Response:"Resposta",Send:"Enviar","Send a Sample Request":"Enviar una petici\xF3 d'exemple","show up to version:":"mostrar versi\xF3:","Size range:":"Tamany de rang:",Type:"Tipus",url:"url"},cs:{"Allowed values:":"Povolen\xE9 hodnoty:","Compare all with predecessor":"Porovnat v\u0161e s p\u0159edchoz\xEDmi verzemi","compare changes to:":"porovnat zm\u011Bny s:","compared to":"porovnat s","Default value:":"V\xFDchoz\xED hodnota:",Description:"Popis",Field:"Pole",General:"Obecn\xE9","Generated with":"Vygenerov\xE1no pomoc\xED",Name:"N\xE1zev","No response values.":"Nebyly vr\xE1ceny \u017E\xE1dn\xE9 hodnoty.",optional:"voliteln\xE9",Parameter:"Parametr","Permission:":"Opr\xE1vn\u011Bn\xED:",Response:"Odpov\u011B\u010F",Send:"Odeslat","Send a Sample Request":"Odeslat uk\xE1zkov\xFD po\u017Eadavek","show up to version:":"zobrazit po verzi:","Size range:":"Rozsah velikosti:",Type:"Typ",url:"url"},de:{"Allowed values:":"Erlaubte Werte:","Compare all with predecessor":"Vergleiche alle mit ihren Vorg\xE4ngern","compare changes to:":"vergleiche \xC4nderungen mit:","compared to":"verglichen mit","Default value:":"Standardwert:",Description:"Beschreibung",Field:"Feld",General:"Allgemein","Generated with":"Erstellt mit",Name:"Name","No response values.":"Keine R\xFCckgabewerte.",optional:"optional",Parameter:"Parameter","Permission:":"Berechtigung:",Response:"Antwort",Send:"Senden","Send a Sample Request":"Eine Beispielanfrage senden","show up to version:":"zeige bis zur Version:","Size range:":"Gr\xF6\xDFenbereich:",Type:"Typ",url:"url"},es:{"Allowed values:":"Valores permitidos:","Compare all with predecessor":"Comparar todo con versi\xF3n anterior","compare changes to:":"comparar cambios con:","compared to":"comparado con","Default value:":"Valor por defecto:",Description:"Descripci\xF3n",Field:"Campo",General:"General","Generated with":"Generado con",Name:"Nombre","No response values.":"Sin valores en la respuesta.",optional:"opcional",Parameter:"Par\xE1metro","Permission:":"Permisos:",Response:"Respuesta",Send:"Enviar","Send a Sample Request":"Enviar una petici\xF3n de ejemplo","show up to version:":"mostrar a versi\xF3n:","Size range:":"Tama\xF1o de rango:",Type:"Tipo",url:"url"},en:{},fr:{"Allowed values:":"Valeurs autoris\xE9es :",Body:"Corps","Compare all with predecessor":"Tout comparer avec ...","compare changes to:":"comparer les changements \xE0 :","compared to":"comparer \xE0","Default value:":"Valeur par d\xE9faut :",Description:"Description",Field:"Champ",General:"G\xE9n\xE9ral","Generated with":"G\xE9n\xE9r\xE9 avec",Header:"En-t\xEAte",Headers:"En-t\xEAtes",Name:"Nom","No response values.":"Aucune valeur de r\xE9ponse.","No value":"Aucune valeur",optional:"optionnel",Parameter:"Param\xE8tre",Parameters:"Param\xE8tres","Permission:":"Permission :","Query Parameter(s)":"Param\xE8tre(s) de la requ\xEAte","Query Parameters":"Param\xE8tres de la requ\xEAte","Request Body":"Corps de la requ\xEAte",required:"requis",Response:"R\xE9ponse",Send:"Envoyer","Send a Sample Request":"Envoyer une requ\xEAte repr\xE9sentative","show up to version:":"Montrer \xE0 partir de la version :","Size range:":"Ordre de grandeur :",Type:"Type",url:"url"},it:{"Allowed values:":"Valori permessi:","Compare all with predecessor":"Confronta tutto con versioni precedenti","compare changes to:":"confronta modifiche con:","compared to":"confrontato con","Default value:":"Valore predefinito:",Description:"Descrizione",Field:"Campo",General:"Generale","Generated with":"Creato con",Name:"Nome","No response values.":"Nessun valore di risposta.",optional:"opzionale",Parameter:"Parametro","Permission:":"Permessi:",Response:"Risposta",Send:"Invia","Send a Sample Request":"Invia una richiesta di esempio","show up to version:":"mostra alla versione:","Size range:":"Intervallo dimensione:",Type:"Tipo",url:"url"},nl:{"Allowed values:":"Toegestane waarden:","Compare all with predecessor":"Vergelijk alle met voorgaande versie","compare changes to:":"vergelijk veranderingen met:","compared to":"vergelijk met","Default value:":"Standaard waarde:",Description:"Omschrijving",Field:"Veld",General:"Algemeen","Generated with":"Gegenereerd met",Name:"Naam","No response values.":"Geen response waardes.",optional:"optioneel",Parameter:"Parameter","Permission:":"Permissie:",Response:"Antwoorden",Send:"Sturen","Send a Sample Request":"Stuur een sample aanvragen","show up to version:":"toon tot en met versie:","Size range:":"Maatbereik:",Type:"Type",url:"url"},pl:{"Allowed values:":"Dozwolone warto\u015Bci:","Compare all with predecessor":"Por\xF3wnaj z poprzednimi wersjami","compare changes to:":"por\xF3wnaj zmiany do:","compared to":"por\xF3wnaj do:","Default value:":"Warto\u015B\u0107 domy\u015Blna:",Description:"Opis",Field:"Pole",General:"Generalnie","Generated with":"Wygenerowano z",Name:"Nazwa","No response values.":"Brak odpowiedzi.",optional:"opcjonalny",Parameter:"Parametr","Permission:":"Uprawnienia:",Response:"Odpowied\u017A",Send:"Wy\u015Blij","Send a Sample Request":"Wy\u015Blij przyk\u0142adowe \u017C\u0105danie","show up to version:":"poka\u017C do wersji:","Size range:":"Zakres rozmiaru:",Type:"Typ",url:"url"},pt:{"Allowed values:":"Valores permitidos:","Compare all with predecessor":"Compare todos com antecessores","compare changes to:":"comparar altera\xE7\xF5es com:","compared to":"comparado com","Default value:":"Valor padr\xE3o:",Description:"Descri\xE7\xE3o",Field:"Campo",General:"Geral","Generated with":"Gerado com",Name:"Nome","No response values.":"Sem valores de resposta.",optional:"opcional",Parameter:"Par\xE2metro","Permission:":"Permiss\xE3o:",Response:"Resposta",Send:"Enviar","Send a Sample Request":"Enviar um Exemplo de Pedido","show up to version:":"aparecer para a vers\xE3o:","Size range:":"Faixa de tamanho:",Type:"Tipo",url:"url"},ro:{"Allowed values:":"Valori permise:","Compare all with predecessor":"Compar\u0103 toate cu versiunea precedent\u0103","compare changes to:":"compar\u0103 cu versiunea:","compared to":"comparat cu","Default value:":"Valoare implicit\u0103:",Description:"Descriere",Field:"C\xE2mp",General:"General","Generated with":"Generat cu",Name:"Nume","No response values.":"Nici o valoare returnat\u0103.",optional:"op\u021Bional",Parameter:"Parametru","Permission:":"Permisiune:",Response:"R\u0103spuns",Send:"Trimite","Send a Sample Request":"Trimite o cerere de prob\u0103","show up to version:":"arat\u0103 p\xE2n\u0103 la versiunea:","Size range:":"Interval permis:",Type:"Tip",url:"url"},ru:{"Allowed values:":"\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F:","Compare all with predecessor":"\u0421\u0440\u0430\u0432\u043D\u0438\u0442\u044C \u0441 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0435\u0439","compare changes to:":"\u0441\u0440\u0430\u0432\u043D\u0438\u0442\u044C \u0441:","compared to":"\u0432 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0438 \u0441","Default value:":"\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E:",Description:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",Field:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",General:"\u041E\u0431\u0449\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F","Generated with":"\u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E",Name:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435","No response values.":"\u041D\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0434\u043B\u044F \u043E\u0442\u0432\u0435\u0442\u0430.",optional:"\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439",Parameter:"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440","Permission:":"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u043E:",Response:"\u041E\u0442\u0432\u0435\u0442",Send:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C","Send a Sample Request":"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u0441\u0442\u043E\u0432\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441","show up to version:":"\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0435\u0440\u0441\u0438\u044E:","Size range:":"\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F:",Type:"\u0422\u0438\u043F",url:"URL"},tr:{"Allowed values:":"\u0130zin verilen de\u011Ferler:","Compare all with predecessor":"T\xFCm\xFCn\xFC \xF6ncekiler ile kar\u015F\u0131la\u015Ft\u0131r","compare changes to:":"de\u011Fi\u015Fiklikleri kar\u015F\u0131la\u015Ft\u0131r:","compared to":"kar\u015F\u0131la\u015Ft\u0131r","Default value:":"Varsay\u0131lan de\u011Fer:",Description:"A\xE7\u0131klama",Field:"Alan",General:"Genel","Generated with":"Olu\u015Fturan",Name:"\u0130sim","No response values.":"D\xF6n\xFC\u015F verisi yok.",optional:"opsiyonel",Parameter:"Parametre","Permission:":"\u0130zin:",Response:"D\xF6n\xFC\u015F",Send:"G\xF6nder","Send a Sample Request":"\xD6rnek istek g\xF6nder","show up to version:":"bu versiyona kadar g\xF6ster:","Size range:":"Boyut aral\u0131\u011F\u0131:",Type:"Tip",url:"url"},vi:{"Allowed values:":"Gi\xE1 tr\u1ECB ch\u1EA5p nh\u1EADn:","Compare all with predecessor":"So s\xE1nh v\u1EDBi t\u1EA5t c\u1EA3 phi\xEAn b\u1EA3n tr\u01B0\u1EDBc","compare changes to:":"so s\xE1nh s\u1EF1 thay \u0111\u1ED5i v\u1EDBi:","compared to":"so s\xE1nh v\u1EDBi","Default value:":"Gi\xE1 tr\u1ECB m\u1EB7c \u0111\u1ECBnh:",Description:"Ch\xFA th\xEDch",Field:"Tr\u01B0\u1EDDng d\u1EEF li\u1EC7u",General:"T\u1ED5ng quan","Generated with":"\u0110\u01B0\u1EE3c t\u1EA1o b\u1EDFi",Name:"T\xEAn","No response values.":"Kh\xF4ng c\xF3 k\u1EBFt qu\u1EA3 tr\u1EA3 v\u1EC1.",optional:"T\xF9y ch\u1ECDn",Parameter:"Tham s\u1ED1","Permission:":"Quy\u1EC1n h\u1EA1n:",Response:"K\u1EBFt qu\u1EA3",Send:"G\u1EEDi","Send a Sample Request":"G\u1EEDi m\u1ED9t y\xEAu c\u1EA7u m\u1EABu","show up to version:":"hi\u1EC3n th\u1ECB phi\xEAn b\u1EA3n:","Size range:":"K\xEDch c\u1EE1:",Type:"Ki\u1EC3u",url:"li\xEAn k\u1EBFt"},zh:{"Allowed values:":"\u5141\u8BB8\u503C:",Body:"\u8BF7\u6C42\u4F53","Compare all with predecessor":"\u4E0E\u6240\u6709\u4E4B\u524D\u7684\u7248\u672C\u6BD4\u8F83","compare changes to:":"\u5C06\u5F53\u524D\u7248\u672C\u4E0E\u6307\u5B9A\u7248\u672C\u6BD4\u8F83:","compared to":"\u76F8\u6BD4\u4E8E","Default value:":"\u9ED8\u8BA4\u503C:",Description:"\u63CF\u8FF0",Field:"\u5B57\u6BB5",General:"\u6982\u8981","Generated with":"\u6784\u5EFA\u4E8E",Name:"\u540D\u79F0","No response values.":"\u65E0\u8FD4\u56DE\u503C.",optional:"\u53EF\u9009",Parameter:"\u53C2\u6570",Parameters:"\u53C2\u6570",Headers:"\u8BF7\u6C42\u5934","Permission:":"\u6743\u9650:",Response:"\u8FD4\u56DE",required:"\u5FC5\u9700\u7684",Send:"\u53D1\u9001","Send a Sample Request":"\u53D1\u9001\u793A\u4F8B\u8BF7\u6C42","show up to version:":"\u663E\u793A\u6307\u5B9A\u7248\u672C:","Size range:":"\u53D6\u503C\u8303\u56F4:",Type:"\u7C7B\u578B",url:"\u5730\u5740"}},Mn=((_t=window.navigator.language)!=null?_t:"en-GB").toLowerCase().substr(0,2);let At=Kt[Mn]?Kt[Mn]:Kt.en;function $t(pe){const Z=At[pe];return Z===void 0?pe:Z}function bn(pe){At=Kt[pe]}const{defaultsDeep:jt}=a,lt=(pe,Z)=>{const de=(Pe,ne,me,fe)=>({[ne]:me+1<fe.length?Pe:Z});return pe.reduceRight(de,{})},pt=pe=>{let Z={};return pe.forEach(de=>{const Pe=lt(de[0].split("."),de[1]);Z=jt(Z,Pe)}),Cn(Z)};function Cn(pe){return JSON.stringify(pe,null,4)}function nr(pe){const Z=[];return pe.forEach(de=>{let Pe;switch(de.type.toLowerCase()){case"string":Pe=de.defaultValue||"";break;case"boolean":Pe=Boolean(de.defaultValue)||!1;break;case"number":Pe=parseInt(de.defaultValue||0,10);break;case"date":Pe=de.defaultValue||new Date().toLocaleDateString(window.navigator.language);break}Z.push([de.field,Pe])}),pt(Z)}var en=ft(2027);class br extends en{constructor(Z){super();this.testMode=Z}diffMain(Z,de,Pe,ne){return super.diff_main(this._stripHtml(Z),this._stripHtml(de),Pe,ne)}diffPrettyHtml(Z){const de=[],Pe=/&/g,ne=/</g,me=/>/g,fe=/\n/g;for(let xe=0;xe<Z.length;xe++){const Le=Z[xe][0],ke=Z[xe][1].replace(Pe,"&amp;").replace(ne,"&lt;").replace(me,"&gt;").replace(fe,"&para;<br>");switch(Le){case en.DIFF_INSERT:de[xe]="<ins>"+ke+"</ins>";break;case en.DIFF_DELETE:de[xe]="<del>"+ke+"</del>";break;case en.DIFF_EQUAL:de[xe]="<span>"+ke+"</span>";break}}return de.join("")}diffCleanupSemantic(Z){return this.diff_cleanupSemantic(Z)}_stripHtml(Z){if(this.testMode)return Z;const de=document.createElement("div");return de.innerHTML=Z,de.textContent||de.innerText||""}}function tt(){c().registerHelper("markdown",function(ne){return ne&&(ne=ne.replace(/((\[(.*?)\])?\(#)((.+?):(.+?))(\))/mg,function(me,fe,xe,Le,Fe,ke,De){const Me=Le||ke+"/"+De;return'<a href="#api-'+ke+"-"+De+'">'+Me+"</a>"}),ne)}),c().registerHelper("setInputType",function(ne){switch(ne){case"File":case"Email":case"Color":case"Number":case"Date":return ne[0].toLowerCase()+ne.substring(1);case"Boolean":return"checkbox";default:return"text"}});let pe;c().registerHelper("startTimer",function(ne){return pe=new Date,""}),c().registerHelper("stopTimer",function(ne){return console.log(new Date-pe),""}),c().registerHelper("__",function(ne){return $t(ne)}),c().registerHelper("cl",function(ne){return console.log(ne),""}),c().registerHelper("underscoreToSpace",function(ne){return ne.replace(/(_+)/g," ")}),c().registerHelper("removeDblQuotes",function(ne){return ne.replace(/"/g,"")}),c().registerHelper("assign",function(ne){if(arguments.length>0){const me=typeof arguments[1];let fe=null;(me==="string"||me==="number"||me==="boolean")&&(fe=arguments[1]),c().registerHelper(ne,function(){return fe})}return""}),c().registerHelper("nl2br",function(ne){return de(ne)}),c().registerHelper("ifCond",function(ne,me,fe,xe){switch(me){case"==":return ne==fe?xe.fn(this):xe.inverse(this);case"===":return ne===fe?xe.fn(this):xe.inverse(this);case"!=":return ne!=fe?xe.fn(this):xe.inverse(this);case"!==":return ne!==fe?xe.fn(this):xe.inverse(this);case"<":return ne<fe?xe.fn(this):xe.inverse(this);case"<=":return ne<=fe?xe.fn(this):xe.inverse(this);case">":return ne>fe?xe.fn(this):xe.inverse(this);case">=":return ne>=fe?xe.fn(this):xe.inverse(this);case"&&":return ne&&fe?xe.fn(this):xe.inverse(this);case"||":return ne||fe?xe.fn(this):xe.inverse(this);default:return xe.inverse(this)}});const Z={};c().registerHelper("subTemplate",function(ne,me){Z[ne]||(Z[ne]=c().compile(document.getElementById("template-"+ne).innerHTML));const fe=Z[ne],xe=v().extend({},this,me.hash);return new(c()).SafeString(fe(xe))}),c().registerHelper("toLowerCase",function(ne){return ne&&typeof ne=="string"?ne.toLowerCase():""}),c().registerHelper("splitFill",function(ne,me,fe){const xe=ne.split(me);return new Array(xe.length).join(fe)+xe[xe.length-1]});function de(ne){return(""+ne).replace(/(?:^|<\/pre>)[^]*?(?:<pre>|$)/g,me=>me.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1<br>$2"))}c().registerHelper("each_compare_list_field",function(ne,me,fe){const xe=fe.hash.field,Le=[];ne&&ne.forEach(function(ke){const De=ke;De.key=ke[xe],Le.push(De)});const Fe=[];return me&&me.forEach(function(ke){const De=ke;De.key=ke[xe],Fe.push(De)}),Pe("key",Le,Fe,fe)}),c().registerHelper("each_compare_keys",function(ne,me,fe){const xe=[];ne&&Object.keys(ne).forEach(function(ke){const De={};De.value=ne[ke],De.key=ke,xe.push(De)});const Le=[];return me&&Object.keys(me).forEach(function(ke){const De={};De.value=me[ke],De.key=ke,Le.push(De)}),Pe("key",xe,Le,fe)}),c().registerHelper("body2json",function(ne,me){return nr(ne)}),c().registerHelper("each_compare_field",function(ne,me,fe){return Pe("field",ne,me,fe)}),c().registerHelper("each_compare_title",function(ne,me,fe){return Pe("title",ne,me,fe)}),c().registerHelper("reformat",function(ne,me){if(me==="json")try{return JSON.stringify(JSON.parse(ne.trim()),null,"    ")}catch(fe){}return ne}),c().registerHelper("showDiff",function(ne,me,fe){let xe="";if(ne===me)xe=ne;else{if(!ne)return me;if(!me)return ne;const Le=new br,Fe=Le.diffMain(me,ne);Le.diffCleanupSemantic(Fe),xe=Le.diffPrettyHtml(Fe),xe=xe.replace(/&para;/gm,"")}return fe==="nl2br"&&(xe=de(xe)),xe});function Pe(ne,me,fe,xe){const Le=[];let Fe=0;me&&me.forEach(function(Me){let We=!1;if(fe&&fe.forEach(function(it){if(Me[ne]===it[ne]){const Pt={typeSame:!0,source:Me,compare:it,index:Fe};Le.push(Pt),We=!0,Fe++}}),!We){const it={typeIns:!0,source:Me,index:Fe};Le.push(it),Fe++}}),fe&&fe.forEach(function(Me){let We=!1;if(me&&me.forEach(function(it){it[ne]===Me[ne]&&(We=!0)}),!We){const it={typeDel:!0,compare:Me,index:Fe};Le.push(it),Fe++}});let ke="";const De=Le.length;for(const Me in Le)parseInt(Me,10)===De-1&&(Le[Me]._last=!0),ke=ke+xe.fn(Le[Me]);return ke}}document.addEventListener("DOMContentLoaded",()=>{tn(),W(),m().highlightAll()});function tn(){var Ct;let pe=[{type:"",url:"Address.detectAddressFormat()",title:"detectAddressFormat()",name:"detectAddressFormat",group:"Address",description:"<p>Detect address format.</p>",examples:[{title:"Example usage:",content:` // cashaddr
bchjs.Address.detectAddressFormat('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// cashaddr

// cashaddr w/ no prefix
bchjs.Address.detectAddressFormat('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// cashaddr

// legacy
bchjs.Address.detectAddressFormat('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74')
// legacy

// cashaddr testnet
bchjs.Address.detectAddressFormat('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// cashaddr

// cashaddr testnet w/ no prefix
bchjs.Address.detectAddressFormat('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// cashaddr

// legacy testnet
bchjs.Address.detectAddressFormat('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// legacy`,type:"json"}],version:"0.0.0",filename:"address.js",groupTitle:"Address"},{type:"",url:"Address.detectAddressNetwork()",title:"detectAddressNetwork()",name:"detectAddressNetwork",group:"Address",description:"<p>Detect address network.</p>",examples:[{title:"Example usage:",content:` // cashaddr
bchjs.Address.detectAddressNetwork('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// mainnet

// cashaddr w/ no prefix
bchjs.Address.detectAddressNetwork('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// mainnet

// legacy
bchjs.Address.detectAddressNetwork('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74')
// mainnet

// cashaddr testnet
bchjs.Address.detectAddressNetwork('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// testnet

// cashaddr testnet w/ no prefix
bchjs.Address.detectAddressNetwork('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// testnet

// legacy testnet
bchjs.Address.detectAddressNetwork('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// testnet`,type:"json"}],version:"0.0.0",filename:"address.js",groupTitle:"Address"},{type:"",url:"Address.detectAddressType()",title:"detectAddressType()",name:"detectAddressType",group:"Address",description:"<p>Detect address type.</p>",examples:[{title:"Example usage:",content:` // cashaddr
bchjs.Address.detectAddressType('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s');
// p2pkh

// cashaddr w/ no prefix
bchjs.Address.detectAddressType('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s');
// p2pkh

// legacy
bchjs.Address.detectAddressType('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74');
// p2pkh

// cashaddr testnet
bchjs.Address.detectAddressType('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy');
// p2pkh

// cashaddr testnet w/ no prefix
bchjs.Address.detectAddressType('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy');
// p2pkh

// legacy testnet
bchjs.Address.detectAddressType('mqc1tmwY2368LLGktnePzEyPAsgADxbksi');
// p2pkh`,type:"json"}],version:"0.0.0",filename:"address.js",groupTitle:"Address"},{type:"",url:"Address.ecashtoCashAddress()",title:"ecashtoCashAddress()",name:"ecashtoCashAddress",group:"Address",description:"<p>Convert legacy to cashAddress format</p>",examples:[{title:"Example usage:",content:`// mainnet
bchjs.Address.ecashtoCashAddress('ecash:qq50d800hgunr8u4trz3uuppspk3mds0dyug2v69da')
// bitcoincash:qq50d800hgunr8u4trz3uuppspk3mds0dy9978plt2

// mainnet no prefix
bchjs.Address.ecashtoCashAddress('ecash:qq50d800hgunr8u4trz3uuppspk3mds0dyug2v69da', false)
// qq50d800hgunr8u4trz3uuppspk3mds0dy9978plt2`,type:"json"}],version:"0.0.0",filename:"address.js",groupTitle:"Address"},{type:"",url:"Address.fromOutputScript()",title:"fromOutputScript()",name:"fromOutputScript",group:"Address",description:"<p>Detect an addess from an OutputScript..</p>",examples:[{title:"Example usage:",content:`const scriptBuffer = bchjs.Script.encode([
  Buffer.from("BOX", "ascii"),
  bchjs.Script.opcodes.OP_CAT,
  Buffer.from("BITBOX", "ascii"),
  bchjs.Script.opcodes.OP_EQUAL
]);
const p2sh_hash160 = bchjs.Crypto.hash160(scriptBuffer);
const scriptPubKey = bchjs.Script.scriptHash.output.encode(p2sh_hash160);

// mainnet address from output script
bchjs.Address.fromOutputScript(scriptPubKey);
// bitcoincash:pz0qcslrqn7hr44hsszwl4lw5r6udkg6zqncnufkrl

// testnet address from output script
bchjs.Address.fromOutputScript(scriptPubKey, 'testnet');
// bchtest:pz0qcslrqn7hr44hsszwl4lw5r6udkg6zqh2hmtpyr`,type:"json"}],version:"0.0.0",filename:"address.js",groupTitle:"Address"},{type:"",url:"Address.fromXPub()",title:"fromXPub()",name:"fromXPub",group:"Address",description:"<p>Generates an address for an extended public key (xpub).</p>",examples:[{title:"Example usage:",content:` // generate 5 mainnet external change addresses for xpub6DTNmB7gWa8RtQAfmy8wSDikM5mky4fhsnqQd9AqoCaLcekqNgRZW5JCSXwXkLDkABHTD1qx7kqrbGzT6xBGfAvCJSj2rwvKWP8eZBR2EVA
let xpub = 'xpub6DTNmB7gWa8RtQAfmy8wSDikM5mky4fhsnqQd9AqoCaLcekqNgRZW5JCSXwXkLDkABHTD1qx7kqrbGzT6xBGfAvCJSj2rwvKWP8eZBR2EVA';
for(let i = 0; i <= 4; i++) {
  console.log(bchjs.Address.fromXPub(xpub, "0/" + i))
}
// bitcoincash:qptnmya5wkly7xf97wm5ak23yqdsz3l2cyj7k9vyyh
// bitcoincash:qrr2suh9yjsrkl2qp3p967uhfg6u0r6xxsn9h5vuvr
// bitcoincash:qpkfg4kck99wksyss6nvaqtafeahfnyrpsj0ed372t
// bitcoincash:qppgmuuwy07g0x39sx2z0x2u8e34tvfdxvy0c2jvx7
// bitcoincash:qryj8x4s7vfsc864jm0xaak9qfe8qgk245y9ska57l

// generate 5 testnet external change addresses for tpubDCrnMSKwDMAbxg82yqDt97peMvftCXk3EfBb9WgZh27mPbHGkysU3TW7qX5AwydmnVQfaGeNhUR6okQ3dS5AJTP9gEP7jk2Wcj6Xntc6gNh
let xpub = 'tpubDCrnMSKwDMAbxg82yqDt97peMvftCXk3EfBb9WgZh27mPbHGkysU3TW7qX5AwydmnVQfaGeNhUR6okQ3dS5AJTP9gEP7jk2Wcj6Xntc6gNh';
for(let i = 0; i <= 4; i++) {
  console.log(bchjs.Address.fromXPub(xpub, "0/" + i))
}
// bchtest:qrth8470sc9scek9u0jj2d0349t62gxzdstw2jukl8
// bchtest:qpm56zc5re0nhms96r7p985aajthp0vxvg6e4ux3kc
// bchtest:qqtu3tf6yyd73ejhk3a2ylqynpl3mzzhwuzt299jfd
// bchtest:qzd7dvlnfukggjqsf5ju0qqwwltakfumjsck33js6m
// bchtest:qq322ataqeas4n0pdn4gz2sdereh5ae43ylk4qdvus`,type:"json"}],version:"0.0.0",filename:"address.js",groupTitle:"Address"},{type:"",url:"Address.hash160ToCash()",title:"hash160ToCash()",name:"hash160ToCash",group:"Address",description:"<p>Convert hash160 to cash address. Accepts either hexadecimal or buffer.</p>",examples:[{title:"Example usage:",content:`bchjs.Address.hash160ToCash("573d93b475be4f1925f3b74ed951201b0147eac1")
'bitcoincash:qptnmya5wkly7xf97wm5ak23yqdsz3l2cyj7k9vyyh'
bchjs.Address.hash160ToCash("7dc85da64d1d93ef01ef62e0221c02f512e3942f", 0x05)
'bitcoincash:pp7ushdxf5we8mcpaa3wqgsuqt639cu59ur5xu5fug'
bchjs.Address.hash160ToCash("155187a3283b08b30519db50bc23bbba9f4b6657", 0x6f)
'bchtest:qq24rpar9qas3vc9r8d4p0prhwaf7jmx2u22nzt946'`,type:"json"}],version:"0.0.0",filename:"address.js",groupTitle:"Address"},{type:"",url:"Address.hash160ToLegacy()",title:"hash160ToLegacy()",name:"hash160ToLegacy",group:"Address",description:"<p>Convert hash160 to legacy address.</p>",examples:[{title:"Example usage:",content:`// legacy mainnet p2pkh
bchjs.Address.hash160ToLegacy("573d93b475be4f1925f3b74ed951201b0147eac1")
// 18xHZ8g2feo4ceejGpvzHkvXT79fi2ZdTG

// legacy mainnet p2sh
bchjs.Address.hash160ToLegacy("7dc85da64d1d93ef01ef62e0221c02f512e3942f", 0x05)
// 3DA6RBcFgLwLTpnF6BRAee8w6a9H6JQLCm

// legacy testnet p2pkh
bchjs.Address.hash160ToLegacy("155187a3283b08b30519db50bc23bbba9f4b6657", 0x6f)
// mhTg9sgNgvAGfmJs192oUzQWqAXHH5nqLE`,type:"json"}],version:"0.0.0",filename:"address.js",groupTitle:"Address"},{type:"",url:"Address.isCashAddress()",title:"isCashAddress()",name:"isCashAddress",group:"Address",description:"<p>Detect if cashAddr encoded address.</p>",examples:[{title:"Example usage:",content:`// mainnet cashaddr
bchjs.Address.isCashAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// true

// mainnet w/ no cashaddr prefix
bchjs.Address.isCashAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// true

// mainnet legacy
bchjs.Address.isCashAddress('18HEMuar5ZhXDFep1gEiY1eoPPcBLxfDxj')
// false

// testnet w/ cashaddr prefix
bchjs.Address.isCashAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// true

// testnet w/ no cashaddr prefix
bchjs.Address.isCashAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// true

// testnet legacy
bchjs.Address.isCashAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// false`,type:"json"}],version:"0.0.0",filename:"address.js",groupTitle:"Address"},{type:"",url:"Address.isHash160()",title:"isHash160()",name:"isHash160",group:"Address",description:"<p>Detect if an addess is a hash160.</p>",examples:[{title:"Example usage:",content:`let hash160Address = '428df38e23fc879a25819427995c3e6355b12d33';
bchjs.Address.isHash160(hash160Address);
// true

let notHash160Address = 'bitcoincash:pz8a837lttkvjksg0jjmmulqvfkgpqrcdgufy8ns5s';
bchjs.Address.isHash160(notHash160Address);
// false`,type:"json"}],version:"0.0.0",filename:"address.js",groupTitle:"Address"},{type:"",url:"Address.isLegacyAddress()",title:"isLegacyAddress()",name:"isLegacyAddress",group:"Address",description:"<p>Detect if legacy base58check encoded address.</p>",examples:[{title:"Example usage:",content:` // cashaddr
bchjs.Address.isLegacyAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// false

// w/ no cashaddr prefix
bchjs.Address.isLegacyAddress('qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
// false

// legacy
bchjs.Address.isLegacyAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN')
// true

// testnet w/ cashaddr prefix
bchjs.Address.isLegacyAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// false

// testnet w/ no cashaddr prefix
bchjs.Address.isLegacyAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// false

// legacy testnet
bchjs.Address.isLegacyAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// true`,type:"json"}],version:"0.0.0",filename:"address.js",groupTitle:"Address"},{type:"",url:"Address.isMainnetAddress()",title:"isMainnetAddress()",name:"isMainnetAddress",group:"Address",description:"<p>Detect if mainnet address .</p>",examples:[{title:"Example usage:",content:` // mainnet cashaddr
bchjs.Address.isMainnetAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// true

// mainnet cashaddr w/ no prefix
bchjs.Address.isMainnetAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// true

// mainnet legacy
bchjs.Address.isMainnetAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
// true

// testnet cashaddr
bchjs.Address.isMainnetAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// false

// testnet w/ no cashaddr prefix
bchjs.Address.isMainnetAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// false

// testnet legacy
bchjs.Address.isMainnetAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// false`,type:"json"}],version:"0.0.0",filename:"address.js",groupTitle:"Address"},{type:"",url:"Address.isP2PKHAddress()",title:"isP2PKHAddress()",name:"isP2PKHAddress",group:"Address",description:"<p>Detect if p2pkh address.</p>",examples:[{title:"Example usage:",content:` // cashaddr
bchjs.Address.isP2PKHAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// true

// w/ no cashaddr prefix
bchjs.Address.isP2PKHAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// true

// legacy
bchjs.Address.isP2PKHAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
// true

// legacy testnet
bchjs.Address.isP2PKHAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// true

// testnet w/ no cashaddr prefix
bchjs.Address.isP2PKHAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// true

// legacy testnet
bchjs.Address.isP2PKHAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// true`,type:"json"}],version:"0.0.0",filename:"address.js",groupTitle:"Address"},{type:"",url:"Address.isP2SHAddress()",title:"isP2SHAddress()",name:"isP2SHAddress",group:"Address",description:"<p>Detect if p2sh address.</p>",examples:[{title:"Example usage:",content:` // cashaddr
bchjs.Address.isP2SHAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// false

// cashaddr w/ no prefix
bchjs.Address.isP2SHAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// false

// legacy
bchjs.Address.isP2SHAddress('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74')
// false

// cashaddr testnet
bchjs.Address.isP2SHAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// false

// cashaddr testnet w/ no prefix
bchjs.Address.isP2SHAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// false

// legacy testnet
bchjs.Address.isP2SHAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// false`,type:"json"}],version:"0.0.0",filename:"address.js",groupTitle:"Address"},{type:"",url:"Address.isRegTestAddress()",title:"isRegTestAddress()",name:"isRegTestAddress",group:"Address",description:"<p>Detect if regtest address.</p>",examples:[{title:"Example usage:",content:`  // regtest
bchjs.Address.isRegTestAddress('bchreg:qzq9je6pntpva3wf6scr7mlnycr54sjgequ54zx9lh')
// true

// regtest w/ no prefix
bchjs.Address.isRegTestAddress('qzq9je6pntpva3wf6scr7mlnycr54sjgequ54zx9lh')
// true

// cashaddr mainnet
bchjs.Address.isRegTestAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
//false

// w/ no cashaddr prefix
bchjs.Address.isRegTestAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// false

// legacy mainnet
bchjs.Address.isRegTestAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
// false

// cashaddr testnet
bchjs.Address.isRegTestAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// false

// testnet w/ no cashaddr prefix
bchjs.Address.isRegTestAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// false`,type:"json"}],version:"0.0.0",filename:"address.js",groupTitle:"Address"},{type:"",url:"Address.isTestnetAddress()",title:"isTestnetAddress()",name:"isTestnetAddress",group:"Address",description:"<p>Detect if testnet address.</p>",examples:[{title:"Example usage:",content:`  // cashaddr mainnet
bchjs.Address.isTestnetAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
//false

// w/ no cashaddr prefix
bchjs.Address.isTestnetAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// false

// legacy mainnet
bchjs.Address.isTestnetAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
// false

// cashaddr testnet
bchjs.Address.isTestnetAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// true

// testnet w/ no cashaddr prefix
bchjs.Address.isTestnetAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// true

// testnet legacy
bchjs.Address.isTestnetAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// true`,type:"json"}],version:"0.0.0",filename:"address.js",groupTitle:"Address"},{type:"",url:"Address.toCashAddress()",title:"toCashAddress()",name:"toCashAddress",group:"Address",description:"<p>Convert legacy to cashAddress format</p>",examples:[{title:"Example usage:",content:`// mainnet
bchjs.Address.toCashAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN')
// bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl

// mainnet no prefix
bchjs.Address.toCashAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN', false)
// qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl

// tesnet
bchjs.Address.toCashAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx')
// bchtest:qzq9je6pntpva3wf6scr7mlnycr54sjgeqxgrr9ku3

// testnet no prefix
bchjs.Address.toCashAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx', false)
// qzq9je6pntpva3wf6scr7mlnycr54sjgeqxgrr9ku3`,type:"json"}],version:"0.0.0",filename:"address.js",groupTitle:"Address"},{type:"",url:"Address.toEcashAddress()",title:"toEcashAddress()",name:"toEcashAddress",group:"Address",description:"<p>Convert legacy to eCash (XEC) format</p>",examples:[{title:"Example usage:",content:`// mainnet
bchjs.Address.toEcashAddress('bitcoincash:qq50d800hgunr8u4trz3uuppspk3mds0dy9978plt2')
// ecash:qq50d800hgunr8u4trz3uuppspk3mds0dyug2v69da

// mainnet no prefix
bchjs.Address.toEcashAddress('bitcoincash:qq50d800hgunr8u4trz3uuppspk3mds0dy9978plt2', false)
// qq50d800hgunr8u4trz3uuppspk3mds0dyug2v69da`,type:"json"}],version:"0.0.0",filename:"address.js",groupTitle:"Address"},{type:"",url:"Address.toEtokenAddress()",title:"toEtokenAddress()",name:"toEtokenAddress",group:"Address",description:"<p>Convert legacy to eToken (XEC) format</p>",examples:[{title:"Example usage:",content:`// mainnet
bchjs.Address.toEtokenAddress('bitcoincash:qq50d800hgunr8u4trz3uuppspk3mds0dy9978plt2')
// etoken:qq50d800hgunr8u4trz3uuppspk3mds0dyug2v69da

// mainnet no prefix
bchjs.Address.toEtokenAddress('bitcoincash:qq50d800hgunr8u4trz3uuppspk3mds0dy9978plt2', false)
// qq50d800hgunr8u4trz3uuppspk3mds0dyug2v69da`,type:"json"}],version:"0.0.0",filename:"address.js",groupTitle:"Address"},{type:"",url:"Address.toHash160()",title:"toHash160()",name:"toHash160",group:"Address",description:"<p>Converts any address format to hash160</p>",examples:[{title:"Example usage:",content:`// cash address mainnet p2pkh
bchjs.Address.toHash160("bitcoincash:qptnmya5wkly7xf97wm5ak23yqdsz3l2cyj7k9vyyh")
// 573d93b475be4f1925f3b74ed951201b0147eac1

// cash address mainnet p2sh
bchjs.Address.toHash160("bitcoincash:pp7ushdxf5we8mcpaa3wqgsuqt639cu59ur5xu5fug")
// 7dc85da64d1d93ef01ef62e0221c02f512e3942f`,type:"json"}],version:"0.0.0",filename:"address.js",groupTitle:"Address"},{type:"",url:"Address.toLegacyAddress()",title:"toLegacyAddress()",name:"toLegacyAddress",group:"Address",description:"<p>Convert cashaddr to legacy address format</p>",examples:[{title:"Example usage:",content:`// mainnet w/ prefix
bchjs.Address.toLegacyAddress('bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
// 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN

// mainnet w/ no prefix
bchjs.Address.toLegacyAddress('qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
// 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN

// testnet w/ prefix
bchjs.Address.toLegacyAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// mqc1tmwY2368LLGktnePzEyPAsgADxbksi

// testnet w/ no prefix
bchjs.Address.toLegacyAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// mqc1tmwY2368LLGktnePzEyPAsgADxbksi`,type:"json"}],version:"0.0.0",filename:"address.js",groupTitle:"Address"},{type:"",url:"BitcoinCash.decodeBIP21()",title:"decodeBIP21()",name:"decodeBIP21",group:"BitcoinCash",description:"<p>Decodes BIP21 uri.</p>",examples:[{title:"Example usage:",content:`let bip21 =
'bitcoincash:qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s?amount=1&label=%23BCHForEveryone'
bchjs.BitcoinCash.decodeBIP21(bip21)
// { address: 'qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s', options: { amount: 1, label: '#BCHForEveryone' } }

let bip21 =
'bitcoincash:qpum6dwnqmmysdggrprse8ccjq7ldcrfqgmmtgcmny?amount=12.5&label=coinbase%20donation&message=and%20ya%20don%27t%20stop'
bchjs.BitcoinCash.decodeBIP21(bip21)
// { address: 'qpum6dwnqmmysdggrprse8ccjq7ldcrfqgmmtgcmny',
//   options:
//    { amount: 12.5,
//      label: 'coinbase donation',
//      message: 'and ya don\\'t stop'
//    }
// }

let bip21 =
'bitcoincash:qzw6tfrh8p0jh834uf9rhg77pjg5rgnt3qw0e54u03?amount=42&label=no%20prefix'
bchjs.BitcoinCash.decodeBIP21(bip21)
// { address: 'qzw6tfrh8p0jh834uf9rhg77pjg5rgnt3qw0e54u03', options: { amount: 42, label: 'no prefix' } }`,type:"json"}],version:"0.0.0",filename:"bitcoincash.js",groupTitle:"BitcoinCash"},{type:"",url:"BitcoinCash.decodeBase58Check()",title:"decodeBase58Check()",name:"decodeBase58Check",group:"BitcoinCash",description:"<p>Decodes base58Check encoded string to hex.</p>",examples:[{title:"Example usage:",content:`// decode 1C6hRmfzvWst5WA7bFRCVAqHt5gE2g7Qar to hex
let base58check = '1C6hRmfzvWst5WA7bFRCVAqHt5gE2g7Qar'
bchjs.BitcoinCash.decodeBase58Check(base58check)
// 0079bd35d306f648350818470c9f18903df6e06902a026f2a7

// decode 1Azo2JBz2JswboeY9xSMcp14BAfhjnD9SK to hex
let base58check = '1Azo2JBz2JswboeY9xSMcp14BAfhjnD9SK'
bchjs.BitcoinCash.decodeBase58Check(base58check)
// 006da742680accf2282df5fade8e9b7a01a517e779289b52cc

// decode 1K6ncAmMEyQrKUYosZRD9swyZNXECu2aKs to hex
let base58check = '1K6ncAmMEyQrKUYosZRD9swyZNXECu2aKs'
bchjs.BitcoinCash.decodeBase58Check(base58check)
// 00c68a6a07ccdaf1669cfd8d244d80ff36b713551c6208f672

// decode 1L2FG9hH3bwchhxHaCs5cg1QNbhmbaeAs6 to hex
let base58check = '1L2FG9hH3bwchhxHaCs5cg1QNbhmbaeAs6'
bchjs.BitcoinCash.decodeBase58Check(base58check)
// 00d0a6b5e3dd43d0fb895b3b3df565bb8266c5ab00a25dbeb5

// decode 1Ly4gqPddveYHMNkfjoXHanVszXpD3duKg to hex
let base58check = '1Ly4gqPddveYHMNkfjoXHanVszXpD3duKg'
bchjs.BitcoinCash.decodeBase58Check(base58check)
// 00db04c2e6f104997cb04c956bf25da6078e559d303127f08b`,type:"json"}],version:"0.0.0",filename:"bitcoincash.js",groupTitle:"BitcoinCash"},{type:"",url:"BitcoinCash.decryptBIP38()",title:"decryptBIP38()",name:"decryptBIP38",group:"BitcoinCash",description:"<p>BIP38 encrypt privkey WIFs.</p>",examples:[{title:"Example usage:",content:`// mainnet
bchjs.BitcoinCash.decryptBIP38(
'6PYU2fDHRVF2194gKDGkbFbeu4mFgkWtVvg2RPd2Sp6KmZx3RCHFpgBB2G',
'9GKVkabAHBMyAf',
'mainnet'
)
// L1phBREbhL4vb1uHHHCAse8bdGE5c7ic2PFjRxMawLzQCsiFVbvu

// testnet
bchjs.BitcoinCash.decryptBIP38(
'6PYUAPLwLSEjWSAfoe9NTSPkMZXnJA8j8EFJtKaeSnP18RCouutBrS2735',
'1EBPIyj55eR8bVUov9',
'testnet'
)
// cSx7KzdH9EcvDEireu2WYpGnXdFYpta7sJUNt5kVCJgA7kcAU8Gm`,type:"json"}],version:"0.0.0",filename:"bitcoincash.js",groupTitle:"BitcoinCash"},{type:"",url:"BitcoinCash.encodeBIP21()",title:"encodeBIP21()",name:"encodeBIP21",group:"BitcoinCash",description:"<p>Encodes address and options as BIP21 uri.</p>",examples:[{title:"Example usage:",content:`let address = 'bitcoincash:qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s'
let options = {
amount: 1,
label: '#BCHForEveryone',
}
bchjs.BitcoinCash.encodeBIP21(address, options)
// bitcoincash:qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s?amount=1&label=%23BCHForEveryone

let address = '1C6hRmfzvWst5WA7bFRCVAqHt5gE2g7Qar'
let options = {
amount: 12.5,
label: 'coinbase donation',
message: "and ya don't stop",
}
bchjs.BitcoinCash.encodeBIP21(address, options)
// bitcoincash:qpum6dwnqmmysdggrprse8ccjq7ldcrfqgmmtgcmny?amount=12.5&label=coinbase%20donation&message=and%20ya%20don%27t%20stop

let address = 'qzw6tfrh8p0jh834uf9rhg77pjg5rgnt3qw0e54u03'
let options = {
 amount: 42,
 label: 'no prefix',
}
bchjs.BitcoinCash.encodeBIP21(address, options)
// bitcoincash:qzw6tfrh8p0jh834uf9rhg77pjg5rgnt3qw0e54u03?amount=42&label=no%20prefix`,type:"json"}],version:"0.0.0",filename:"bitcoincash.js",groupTitle:"BitcoinCash"},{type:"",url:"BitcoinCash.encodeBase58Check()",title:"encodeBase58Check()",name:"encodeBase58Check",group:"BitcoinCash",description:"<p>Encodes hex string as base58Check.</p>",examples:[{title:"Example usage:",content:`// encode 0079bd35d306f648350818470c9f18903df6e06902a026f2a7 as base58check
let hex = '0079bd35d306f648350818470c9f18903df6e06902a026f2a7'
bchjs.BitcoinCash.encodeBase58Check(hex)
// 1C6hRmfzvWst5WA7bFRCVAqHt5gE2g7Qar

// encode 006da742680accf2282df5fade8e9b7a01a517e779289b52cc as base58check
let hex = '006da742680accf2282df5fade8e9b7a01a517e779289b52cc'
bchjs.BitcoinCash.encodeBase58Check(hex)
// 1Azo2JBz2JswboeY9xSMcp14BAfhjnD9SK

// encode 00c68a6a07ccdaf1669cfd8d244d80ff36b713551c6208f672 as base58check
let hex = '00c68a6a07ccdaf1669cfd8d244d80ff36b713551c6208f672'
bchjs.BitcoinCash.encodeBase58Check(hex)
// 1K6ncAmMEyQrKUYosZRD9swyZNXECu2aKs

// encode 00d0a6b5e3dd43d0fb895b3b3df565bb8266c5ab00a25dbeb5 as base58check
let hex = '00d0a6b5e3dd43d0fb895b3b3df565bb8266c5ab00a25dbeb5'
bchjs.BitcoinCash.encodeBase58Check(hex)
// 1L2FG9hH3bwchhxHaCs5cg1QNbhmbaeAs6

// encode 00db04c2e6f104997cb04c956bf25da6078e559d303127f08b as base58check
let hex = '00db04c2e6f104997cb04c956bf25da6078e559d303127f08b'
bchjs.BitcoinCash.encodeBase58Check(hex)
// 1Ly4gqPddveYHMNkfjoXHanVszXpD3duKg`,type:"json"}],version:"0.0.0",filename:"bitcoincash.js",groupTitle:"BitcoinCash"},{type:"",url:"BitcoinCash.encryptBIP38()",title:"encryptBIP38()",name:"encryptBIP38",group:"BitcoinCash",description:"<p>BIP38 encrypt privkey WIFs.</p>",examples:[{title:"Example usage:",content:`// mainnet
bchjs.BitcoinCash.encryptBIP38(
 'L1phBREbhL4vb1uHHHCAse8bdGE5c7ic2PFjRxMawLzQCsiFVbvu',
'9GKVkabAHBMyAf'
)
// 6PYU2fDHRVF2194gKDGkbFbeu4mFgkWtVvg2RPd2Sp6KmZx3RCHFpgBB2G

// testnet
bchjs.BitcoinCash.encryptBIP38(
 'cSx7KzdH9EcvDEireu2WYpGnXdFYpta7sJUNt5kVCJgA7kcAU8Gm',
'1EBPIyj55eR8bVUov9'
)
// 6PYUAPLwLSEjWSAfoe9NTSPkMZXnJA8j8EFJtKaeSnP18RCouutBrS2735`,type:"json"}],version:"0.0.0",filename:"bitcoincash.js",groupTitle:"BitcoinCash"},{type:"",url:"BitcoinCash.getByteCount()",title:"getByteCount()",name:"getByteCount",group:"BitcoinCash",description:"<p>Get byte count of transaction.</p>",examples:[{title:"Example usage:",content:`// 1 P2PKH input
let inputs = {
P2PKH: 1,
}
// 1 P2SH output
let outputs = {
 P2SH: 1,
}
bchjs.BitcoinCash.getByteCount(inputs, outputs)
// 190

// 4 MULTISIG-P2SH 2-of-4 and 10 P2PKH inputs
let inputs = {
'MULTISIG-P2SH:2-4': 4,
P2PKH: 10,
}
// 23 P2PKH outputs
let outputs = {
P2PKH: 23,
}
bchjs.BitcoinCash.getByteCount(inputs, outputs)
// 2750

// 2 MULTISIG-P2SH 3-of-5 inputs
let inputs = {
'MULTISIG-P2SH:3-5': 2,
}
// 2 P2PKH outputs
let outputs = {
P2PKH: 2,
}
bchjs.BitcoinCash.getByteCount(inputs, outputs)
// 565

// 111 P2PKH inputs
let inputs = {
P2PKH: 111,
}
// 2 P2PKH outputs
let outputs = {
P2PKH: 2,
}
bchjs.BitcoinCash.getByteCount(inputs, outputs)
// 16506

// 10 P2PKH and 1 MULTISIG-P2SH 1-of-2 input
let inputs = {
P2PKH: 10,
'MULTISIG-P2SH:1-2': 1,
}
// 2 P2PKH and 1 P2SH outputs
let outputs = {
P2PKH: 2,
P2SH: 1,
}
bchjs.BitcoinCash.getByteCount(inputs, outputs)
// 1780`,type:"json"}],version:"0.0.0",filename:"bitcoincash.js",groupTitle:"BitcoinCash"},{type:"",url:"BitcoinCash.signMessageWithPrivKey()",title:"signMessageWithPrivKey()",name:"signMessageWithPrivKey",group:"BitcoinCash",description:"<p>Sign message with private key.</p>",examples:[{title:"Example usage:",content:`bchjs.BitcoinCash.signMessageWithPrivKey(
'KxtpRDUJDiutLaTV8Vuavhb6h7zq9YV9ZKA3dU79PCgYmNVmkkvS',
'EARTH'
)
// IIYVhlo2Z6TWFjYX1+YM+7vQKz0m+zYdSe4eYpFLuAQDEZXqll7lZC8Au22VI2LLP5x+IerZckVk3QQPsA3e8/8=`,type:"json"}],version:"0.0.0",filename:"bitcoincash.js",groupTitle:"BitcoinCash"},{type:"",url:"BitcoinCash.toBitcoinCash()",title:"toBitcoinCash()",name:"toBitcoinCash",group:"BitcoinCash",description:"<p>Converting satoshi units to Bitcoin Cash units.</p>",examples:[{title:"Example usage:",content:`// convert 900000000 satoshis to $BCH
bchjs.BitcoinCash.toBitcoinCash(900000000)
// 9

// convert 100000000 satoshis to $BCH
bchjs.BitcoinCash.toBitcoinCash(100000000)
// 1

// convert 10000000000 satoshis to $BCH
bchjs.BitcoinCash.toBitcoinCash(10000000000)
// 100

// convert 4200000000 satoshis to $BCH
bchjs.BitcoinCash.toBitcoinCash(4200000000)
// 42

// convert 50700000000 satoshis to $BCH
bchjs.BitcoinCash.toBitcoinCash(50700000000)
// 507`,type:"json"}],version:"0.0.0",filename:"bitcoincash.js",groupTitle:"BitcoinCash"},{type:"",url:"BitcoinCash.toBits()",title:"toBits()",name:"toBits",group:"BitcoinCash",description:"<p>Converting satoshi units to Bits denomination.</p>",examples:[{title:"Example usage:",content:`// convert 4242323400 satoshis to 42423.234 bits
bchjs.BitcoinCash.toBits(4242323400)
// 42423.234
// convert 100000000 satoshis to 1000 bits
bchjs.BitcoinCash.toBits(100000000)
// 1000
// convert 314000000 satoshis to 3140 bits
bchjs.BitcoinCash.toBits(314000000)
// 3140
// convert 987600000000 satoshis to 9876000 bits
bchjs.BitcoinCash.toBits(987600000000)
// 9876000
// convert 12300 satoshis to 0.123 bits
bchjs.BitcoinCash.toBits(12300)
// 0.123`,type:"json"}],version:"0.0.0",filename:"bitcoincash.js",groupTitle:"BitcoinCash"},{type:"",url:"BitcoinCash.toSatoshi()",title:"toSatoshi()",name:"toSatoshi",group:"BitcoinCash",description:"<p>Converting Bitcoin Cash units to satoshi units.</p>",examples:[{title:"Example usage:",content:`// convert 9 $BCH to satoshis
bchjs.BitcoinCash.toSatoshi(9)
// 900000000

// convert 1 $BCH to satoshis
bchjs.BitcoinCash.toSatoshi(1)
// 100000000

// convert 100 $BCH to satoshis
bchjs.BitcoinCash.toSatoshi(100)
// 10000000000

// convert 42 $BCH to satoshis
bchjs.BitcoinCash.toSatoshi(42)
// 4200000000

// convert 507 $BCH to satoshis
bchjs.BitcoinCash.toSatoshi(507)
// 50700000000`,type:"json"}],version:"0.0.0",filename:"bitcoincash.js",groupTitle:"BitcoinCash"},{type:"",url:"BitcoinCash.verifyMessage()",title:"verifyMessage()",name:"verifyMessage",group:"BitcoinCash",description:"<p>Verify message.</p>",examples:[{title:"Example usage:",content:`bchjs.BitcoinCash.verifyMessage(
'bitcoincash:qp2zvw3zpk5xx43w4tve7mtekd9kaxwj4uenq9eupv',
'IIYVhlo2Z6TWFjYX1+YM+7vQKz0m+zYdSe4eYpFLuAQDEZXqll7lZC8Au22VI2LLP5x+IerZckVk3QQPsA3e8/8=',
'EARTH'
)
// true`,type:"json"}],version:"0.0.0",filename:"bitcoincash.js",groupTitle:"BitcoinCash"},{type:"",url:"Blockchain.getBestBlockHash()",title:"getBestBlockHash()",name:"getBestBlockHash",group:"Blockchain",description:"<p>Returns the hash of the best (tip) block in the longest blockchain.</p>",examples:[{title:"Example usage:",content:`(async () => {
try {
let getBestBlockHash = await bchjs.Blockchain.getBestBlockHash();
console.log(getBestBlockHash);
} catch(error) {
console.error(error)
}
})()
// 241decef88889efac8e6ce428a8ac696fdde5972eceed97e1fb58d6106af31d5`,type:"json"}],version:"0.0.0",filename:"blockchain.js",groupTitle:"Blockchain"},{type:"",url:"Blockchain.getBlock()",title:"getBlock()",name:"getBlock",group:"Blockchain",description:"<p>If verbose is 0, returns a string that is serialized, hex-encoded data for block 'hash'. If verbose is 1, returns an Object with information about block hash. If verbose is 2, returns an Object with information about block hash and information about tx.</p>",examples:[{title:"Example usage:",content:`(async () => {
try {
let getBlock = await bchjs.Blockchain.getBlock("00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09");
console.log(getBlock);
} catch(error) {
console.error(error)
}
})()

// {
//  hash: '00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09',
//  confirmations: 528236,
//  size: 216,
//  height: 1000,
//  version: 1,
//  versionHex: '00000001',
//  merkleroot: 'fe28050b93faea61fa88c4c630f0e1f0a1c24d0082dd0e10d369e13212128f33',
//  tx:
//   [ 'fe28050b93faea61fa88c4c630f0e1f0a1c24d0082dd0e10d369e13212128f33' ],
//  time: 1232346882,
//  mediantime: 1232344831,
//  nonce: 2595206198,
//  bits: '1d00ffff',
//  difficulty: 1,
//  chainwork: '000000000000000000000000000000000000000000000000000003e903e903e9',
//  previousblockhash: '0000000008e647742775a230787d66fdf92c46a48c896bfbc85cdc8acc67e87d',
//  nextblockhash: '00000000a2887344f8db859e372e7e4bc26b23b9de340f725afbf2edb265b4c6'
// }`,type:"json"}],version:"0.0.0",filename:"blockchain.js",groupTitle:"Blockchain"},{type:"",url:"Blockchain.getBlockCount()",title:"getBlockCount()",name:"getBlockCount",group:"Blockchain",description:"<p>Returns the number of blocks in the longest blockchain.</p>",examples:[{title:"Example usage:",content:`(async () => {
try {
let getBlockCount = await bchjs.Blockchain.getBlockCount();
console.log(getBlockCount);
} catch(error) {
console.error(error)
}
})()
// 529235`,type:"json"}],version:"0.0.0",filename:"blockchain.js",groupTitle:"Blockchain"},{type:"",url:"Blockchain.getBlockHash()",title:"getBlockHash()",name:"getBlockHash",group:"Blockchain",description:"<p>Returns hash of block in best-block-chain at height provided.</p>",examples:[{title:"Example usage:",content:`(async () => {
try {
let getBlockHash = await bchjs.Blockchain.getBlockHash([0]);
console.log(getBlockHash);
} catch(error) {
console.error(error)
}
})()
// [ '000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f' ]`,type:"json"}],version:"0.0.0",filename:"blockchain.js",groupTitle:"Blockchain"},{type:"",url:"Blockchain.getBlockHeader()",title:"getBlockHeader()",name:"getBlockHeader",group:"Blockchain",description:"<p>If verbose is false, returns a string that is serialized, hex-encoded data for blockheader 'hash'. If verbose is true, returns an Object with information about blockheader hash.</p>",examples:[{title:"Example usage:",content:`(async () => {
try {
let getBlockHeader = await bchjs.Blockchain.getBlockHeader(["00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09"]);
console.log(getBlockHeader);
} catch(error) {
console.error(error)
}
})()

// [{ hash: '00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09',
// confirmations: 528236,
// height: 1000,
// version: 1,
// versionHex: '00000001',
// merkleroot: 'fe28050b93faea61fa88c4c630f0e1f0a1c24d0082dd0e10d369e13212128f33',
// time: 1232346882,
// mediantime: 1232344831,
// nonce: 2595206198,
// bits: '1d00ffff',
// difficulty: 1,
// chainwork: '000000000000000000000000000000000000000000000000000003e903e903e9',
// previousblockhash: '0000000008e647742775a230787d66fdf92c46a48c896bfbc85cdc8acc67e87d',
// nextblockhash: '00000000a2887344f8db859e372e7e4bc26b23b9de340f725afbf2edb265b4c6' }]`,type:"json"}],version:"0.0.0",filename:"blockchain.js",groupTitle:"Blockchain"},{type:"",url:"Blockchain.getBlockchainInfo()",title:"getBlockchainInfo()",name:"getBlockchainInfo",group:"Blockchain",description:"<p>Returns an object containing various state info regarding blockchain processing.</p>",examples:[{title:"Example usage:",content:`(async () => {
try {
let getBlockchainInfo = await bchjs.Blockchain.getBlockchainInfo();
console.log(getBlockchainInfo);
} catch(error) {
console.error(error)
}
})()

// { chain: 'main',
// blocks: 529235,
// headers: 529235,
// bestblockhash: '00000000000000000108641af52e01a447b1f9d801571f93a0f20a8cbf80c236',
// difficulty: 702784497476.8376,
// mediantime: 1525727823,
// verificationprogress: 0.9999892037620548,
// chainwork: '00000000000000000000000000000000000000000099f5e1cf7d4e462a493a51',
// pruned: false,
// softforks:
//  [ { id: 'bip34', version: 2, reject: [Object] },
//    { id: 'bip66', version: 3, reject: [Object] },
//    { id: 'bip65', version: 4, reject: [Object] } ],
// bip9_softforks:
//  { csv:
//     { status: 'active',
//       startTime: 1462060800,
//       timeout: 1493596800,
//       since: 419328 } } }`,type:"json"}],version:"0.0.0",filename:"blockchain.js",groupTitle:"Blockchain"},{type:"",url:"Blockchain.getChainTips()",title:"getChainTips()",name:"getChainTips",group:"Blockchain",description:"<p>Return information about all known tips in the block tree, including the main chain as well as orphaned branches.</p>",examples:[{title:"Example usage:",content:`(async () => {
try {
let getChainTips = await bchjs.Blockchain.getChainTips();
console.log(getChainTips);
} catch(error) {
console.error(error)
}
})()

// [ { height: 529235,
//   hash: '00000000000000000108641af52e01a447b1f9d801571f93a0f20a8cbf80c236',
//   branchlen: 0,
//   status: 'active' },
// { height: 527442,
//   hash: '0000000000000000014cbf7b7aa12e52dd97db4b1ba5f39dccae37773af9272e',
//   branchlen: 1,
//   status: 'invalid' },
// { height: 526861,
//   hash: '00000000000000000225b070818bbafd95842ecbd25edf39bff54a7aa5c8fd10',
//   branchlen: 1,
//   status: 'valid-headers' } ]`,type:"json"}],version:"0.0.0",filename:"blockchain.js",groupTitle:"Blockchain"},{type:"",url:"Blockchain.getDifficulty()",title:"getDifficulty()",name:"getDifficulty",group:"Blockchain",description:"<p>Returns the proof-of-work difficulty as a multiple of the minimum difficulty.</p>",examples:[{title:"Example usage:",content:`(async () => {
try {
let getDifficulty = await bchjs.Blockchain.getDifficulty();
console.log(getDifficulty);
} catch(error) {
console.error(error)
}
})()

// 702784497476.8376`,type:"json"}],version:"0.0.0",filename:"blockchain.js",groupTitle:"Blockchain"},{type:"",url:"Blockchain.getMempoolEntry()",title:"getMempoolEntry()",name:"getMempoolEntry",group:"Blockchain",description:"<p>Returns mempool data for given transaction.</p>",examples:[{title:"Example usage:",content:`(async () => {
try {
let getMempoolEntry = await bchjs.Blockchain.getMempoolEntry("fe28050b93faea61fa88c4c630f0e1f0a1c24d0082dd0e10d369e13212128f33");
console.log(getMempoolEntry);
} catch(error) {
console.error(error)
}
})()

// {
//   "size": 372,
//   "fee": 0.00000374,
//   "modifiedfee": 0.00000374,
//   "time": 1547738850,
//   "height": 565716,
//   "startingpriority": 26524545.3974359,
//   "currentpriority": 26524545.3974359,
//   "descendantcount": 1,
//   "descendantsize": 372,
//   "descendantfees": 374,
//   "ancestorcount": 1,
//   "ancestorsize": 372,
//   "ancestorfees": 374,
//   "depends": []
// }

(async () => {
try {
let getMempoolEntry = await bchjs.Blockchain.getMempoolEntry([
  "fe28050b93faea61fa88c4c630f0e1f0a1c24d0082dd0e10d369e13212128f33",
  "defea04c38ee00cf73ad402984714ed22dc0dd99b2ae5cb50d791d94343ba79b"
  ]);
console.log(getMempoolEntry);
} catch(error) {
console.error(error)
}
})()

// [
//   {
//     "size": 372,
//     "fee": 0.00000374,
//     "modifiedfee": 0.00000374,
//     "time": 1547738850,
//     "height": 565716,
//     "startingpriority": 26524545.3974359,
//     "currentpriority": 26524545.3974359,
//     "descendantcount": 1,
//     "descendantsize": 372,
//     "descendantfees": 374,
//     "ancestorcount": 1,
//     "ancestorsize": 372,
//     "ancestorfees": 374,
//     "depends": []
//   },
//   {
//     "size": 372,
//     "fee": 0.00000374,
//     "modifiedfee": 0.00000374,
//     "time": 1547738850,
//     "height": 565716,
//     "startingpriority": 26524545.3974359,
//     "currentpriority": 26524545.3974359,
//     "descendantcount": 1,
//     "descendantsize": 372,
//     "descendantfees": 374,
//     "ancestorcount": 1,
//     "ancestorsize": 372,
//     "ancestorfees": 374,
//     "depends": []
//   }
// ]`,type:"json"}],version:"0.0.0",filename:"blockchain.js",groupTitle:"Blockchain"},{type:"",url:"Blockchain.getMempoolInfo()",title:"getMempoolInfo()",name:"getMempoolInfo",group:"Blockchain",description:"<p>Returns details on the active state of the TX memory pool.</p>",examples:[{title:"Example usage:",content:`(async () => {
try {
let getMempoolInfo = await bchjs.Blockchain.getMempoolInfo();
console.log(getMempoolInfo);
} catch(error) {
console.error(error)
}
})()

// { size: 257,
// bytes: 98257,
// usage: 365840,
// maxmempool: 300000000,
// mempoolminfee: 0 }`,type:"json"}],version:"0.0.0",filename:"blockchain.js",groupTitle:"Blockchain"},{type:"",url:"Blockchain.getRawMempool()",title:"getRawMempool()",name:"getRawMempool",group:"Blockchain",description:"<p>Returns all transaction ids in memory pool as a json array of string transaction ids.</p>",examples:[{title:"Example usage:",content:`(async () => {
try {
let getRawMempool = await bchjs.Blockchain.getRawMempool(true);
console.log(getRawMempool);
} catch(error) {
console.error(error)
}
})()

// [  {'2ae541af20db6f2b50410f418af56e349d08877d685f6cf54df54658e892db7a':
//  { size: 237,
//    fee: 0.00000238,
//    modifiedfee: 0.00000238,
//    time: 1525732015,
//    height: 529235,
//    startingpriority: 0,
//    currentpriority: 0,
//    descendantcount: 10,
//    descendantsize: 2376,
//    descendantfees: 2380,
//    ancestorcount: 3,
//    ancestorsize: 712,
//    ancestorfees: 714,
//    depends:
//     [ 'e25682caafc7000645d59f4c11d8d594b2943979b9d8fafb9f946e2b35c21b7e' ] },]`,type:"json"}],version:"0.0.0",filename:"blockchain.js",groupTitle:"Blockchain"},{type:"",url:"Blockchain.getTxOut()",title:"getTxOut()",name:"getTxOut",group:"Blockchain",description:"<p>Returns details about an unspent transaction output.</p>",examples:[{title:"Example usage:",content:`(async () => {
try {
let getTxOut = await bchjs.Blockchain.getTxOut("e25682caafc7000645d59f4c11d8d594b2943979b9d8fafb9f946e2b35c21b7e", 1);
console.log(getTxOut);
} catch(error) {
console.error(error)
}
})()

// null`,type:"json"}],version:"0.0.0",filename:"blockchain.js",groupTitle:"Blockchain"},{type:"",url:"Blockchain.getTxOutProof()",title:"getTxOutProof()",name:"getTxOutProof",group:"Blockchain",description:"<p>Returns a hex-encoded proof that &quot;txid&quot; was included in a block.</p>",examples:[{title:"Example usage:",content:`(async () => {
try {
let getTxOutProof = await bchjs.Blockchain.getTxOutProof("e25682caafc7000645d59f4c11d8d594b2943979b9d8fafb9f946e2b35c21b7e");
console.log(getTxOutProof);
} catch(error) {
console.error(error)
}
})()

// "0000002086a4a3161f9ba2174883ec0b93acceac3b2f37b36ed1f90000000000000000009cb02406d1094ecf3e0b4c0ca7c585125e721147c39daf6b48c90b512741e13a12333e5cb38705180f441d8c7100000008fee9b60f1edb57e5712839186277ed39e0a004a32be9096ee47472efde8eae62f789f9d7a9f59d0ea7093dea1e0c65ff0b953f1d8cf3d47f92e732ca0295f603c272d5f4a63509f7a887f2549d78af7444aa0ecbb4f66d9cbe13bc6a89f59e05a199df8325d490818ffefe6b6321d32d7496a68580459836c0183f89082fc1b491cc91b23ecdcaa4c347bf599a62904d61f1c15b400ebbd5c90149010c139d9c1e31b774b796977393a238080ab477e1d240d0c4f155d36f519668f49bae6bd8cd5b8e40522edf76faa09cca6188d83ff13af6967cc6a569d1a5e9aeb1fdb7f531ddd2d0cbb81879741d5f38166ac1932136264366a4065cc96a42e41f96294f02df01"

(async () => {
try {
let getTxOutProof = await bchjs.Blockchain.getTxOutProof([
  "e25682caafc7000645d59f4c11d8d594b2943979b9d8fafb9f946e2b35c21b7e",
  "d16662463fd98eb96c8f6898d58a4461ac3d0120f4d0aea601d72b37759f261c"
]);
console.log(getTxOutProof);
} catch(error) {
console.error(error)
}
})()

// [
//   "010000007de867cc8adc5cc8fb6b898ca4462cf9fd667d7830a275277447e60800000000338f121232e169d3100edd82004dc2a1f0e1f030c6c488fa61eafa930b0528fe021f7449ffff001d36b4af9a0100000001338f121232e169d3100edd82004dc2a1f0e1f030c6c488fa61eafa930b0528fe0101",
//   "010000007de867cc8adc5cc8fb6b898ca4462cf9fd667d7830a275277447e60800000000338f121232e169d3100edd82004dc2a1f0e1f030c6c488fa61eafa930b0528fe021f7449ffff001d36b4af9a0100000001338f121232e169d3100edd82004dc2a1f0e1f030c6c488fa61eafa930b0528fe0101"
// ]`,type:"json"}],version:"0.0.0",filename:"blockchain.js",groupTitle:"Blockchain"},{type:"",url:"Blockchain.verifyTxOutProof()",title:"verifyTxOutProof()",name:"verifyTxOutProof",group:"Blockchain",description:"<p>Verifies that a proof points to a transaction in a block, returning the transaction it commits to and throwing an RPC error if the block is not in our best chain.</p>",examples:[{title:"Example usage:",content:`(async () => {
try {
const proof = "0000002086a4a3161f9ba2174883ec0b93acceac3b2f37b36ed1f90000000000000000009cb02406d1094ecf3e0b4c0ca7c585125e721147c39daf6b48c90b512741e13a12333e5cb38705180f441d8c7100000008fee9b60f1edb57e5712839186277ed39e0a004a32be9096ee47472efde8eae62f789f9d7a9f59d0ea7093dea1e0c65ff0b953f1d8cf3d47f92e732ca0295f603c272d5f4a63509f7a887f2549d78af7444aa0ecbb4f66d9cbe13bc6a89f59e05a199df8325d490818ffefe6b6321d32d7496a68580459836c0183f89082fc1b491cc91b23ecdcaa4c347bf599a62904d61f1c15b400ebbd5c90149010c139d9c1e31b774b796977393a238080ab477e1d240d0c4f155d36f519668f49bae6bd8cd5b8e40522edf76faa09cca6188d83ff13af6967cc6a569d1a5e9aeb1fdb7f531ddd2d0cbb81879741d5f38166ac1932136264366a4065cc96a42e41f96294f02df01"
let verifyTxOutProof = await bchjs.Blockchain.verifyTxOutProof(proof);
console.log(verifyTxOutProof);
} catch(error) {
console.error(error)
}
})()

// [
//   "03f69502ca32e7927fd4f38c1d3f950bff650c1eea3d09a70e9df5a9d7f989f7"
// ]

(async () => {
try {
const proof = "0000002086a4a3161f9ba2174883ec0b93acceac3b2f37b36ed1f90000000000000000009cb02406d1094ecf3e0b4c0ca7c585125e721147c39daf6b48c90b512741e13a12333e5cb38705180f441d8c7100000008fee9b60f1edb57e5712839186277ed39e0a004a32be9096ee47472efde8eae62f789f9d7a9f59d0ea7093dea1e0c65ff0b953f1d8cf3d47f92e732ca0295f603c272d5f4a63509f7a887f2549d78af7444aa0ecbb4f66d9cbe13bc6a89f59e05a199df8325d490818ffefe6b6321d32d7496a68580459836c0183f89082fc1b491cc91b23ecdcaa4c347bf599a62904d61f1c15b400ebbd5c90149010c139d9c1e31b774b796977393a238080ab477e1d240d0c4f155d36f519668f49bae6bd8cd5b8e40522edf76faa09cca6188d83ff13af6967cc6a569d1a5e9aeb1fdb7f531ddd2d0cbb81879741d5f38166ac1932136264366a4065cc96a42e41f96294f02df01"
let verifyTxOutProof = await bchjs.Blockchain.verifyTxOutProof([proof, proof]);
console.log(verifyTxOutProof);
} catch(error) {
console.error(error)
}
})()

// [
//   "03f69502ca32e7927fd4f38c1d3f950bff650c1eea3d09a70e9df5a9d7f989f7",
//   "03f69502ca32e7927fd4f38c1d3f950bff650c1eea3d09a70e9df5a9d7f989f7"
// ]`,type:"json"}],version:"0.0.0",filename:"blockchain.js",groupTitle:"Blockchain"},{type:"",url:"Control.getNetworkInfo()",title:"getNetworkInfo()",name:"getNetworkInfo",group:"Control",description:"<p>Returns an object containing various network info.</p>",examples:[{title:"Example usage:",content:`(async () => {
  try {
    let getInfo = await bchjs.Control.getNetworkInfo();
    console.log(getInfo);
  } catch(error) {
   console.error(error)
  }
})()

// returns
{ version: 190500,
  subversion: '/Bitcoin ABC:0.19.5(EB32.0)/',
  protocolversion: 70015,
  localservices: '0000000000000425',
  localrelay: true,
  timeoffset: 0,
  networkactive: true,
  connections: 17,
  networks:
  [ { name: 'ipv4',
      limited: false,
      reachable: true,
      proxy: '',
      proxy_randomize_credentials: false },
    { name: 'ipv6',
      limited: false,
      reachable: true,
      proxy: '',
      proxy_randomize_credentials: false },
    { name: 'onion',
      limited: true,
      reachable: false,
      proxy: '',
      proxy_randomize_credentials: false } ],
  relayfee: 0.00001,
  excessutxocharge: 0,
  warnings:
  'Warning: Unknown block versions being mined! It\\'s possible unknown rules are in effect' }}`,type:"json"}],version:"0.0.0",filename:"control.js",groupTitle:"Control"},{type:"",url:"Crypto.hash160()",title:"hash160()",name:"hash160",group:"Crypto",description:"<p>Utility for creating ripemd160(sha256()) hash digests of buffer encoded data.</p>",examples:[{title:"Example usage:",content:`// buffer from hex
let buffer = Buffer.from('0101010101010101', 'hex')
bchjs.Crypto.hash160(buffer)
// <Buffer ab af 11 19 f8 3e 38 42 10 fe 8e 22 2e ac 76 e2 f0 da 39 dc>

// buffer from hex
let buffer = Buffer.from('031ad329b3117e1d1e2974406868e575d48cff88e8128ba0eedb10da053785033b', 'hex')
bchjs.Crypto.hash160(buffer)
// <Buffer 88 74 ef 88 8a 9b cb d8 3b 87 d0 6f f7 bc 21 3c 51 49 73 62>

// buffer from hex
let buffer = Buffer.from('03123464075c7a5fa6b8680afa2c962a02e7bf071c6b2395b0ac711d462cac9354', 'hex')
bchjs.Crypto.hash160(buffer)`,type:"json"}],version:"0.0.0",filename:"crypto.js",groupTitle:"Crypto"},{type:"",url:"Crypto.hash256()",title:"hash256()",name:"hash256",group:"Crypto",description:"<p>Utility for creating double sha256 hash digests of buffer encoded data.</p>",examples:[{title:"Example usage:",content:` // buffer from hex
let buffer = Buffer.from('0101010101010101', 'hex')
bchjs.Crypto.hash256(buffer)
// <Buffer 72 83 38 d9 9f 35 61 75 c4 94 5e f5 cc cf a6 1b 7b 56 14 3c bb f4 26 dd d0 e0 fc 7c fe 8c 3c 23>

// buffer from hex
let buffer = Buffer.from('031ad329b3117e1d1e2974406868e575d48cff88e8128ba0eedb10da053785033b', 'hex')
bchjs.Crypto.hash256(buffer)
// <Buffer 7a d2 a7 4b d5 96 98 71 4a 29 91 a8 2b 71 73 6f 35 42 b2 82 8b 6a c2 4d e4 27 c4 40 da 89 d0 1a>

// buffer from hex
let buffer = Buffer.from('03123464075c7a5fa6b8680afa2c962a02e7bf071c6b2395b0ac711d462cac9354', 'hex')
bchjs.Crypto.hash256(buffer)
// <Buffer 68 8f 1d 02 9e d5 4c 34 d0 32 0b 83 8b f6 fc 64 f6 2f 38 a6 e9 30 a0 af 5b db 4e 27 d1 a6 84 cd>`,type:"json"}],version:"0.0.0",filename:"crypto.js",groupTitle:"Crypto"},{type:"",url:"Crypto.randomBytes()",title:"randomBytes()",name:"randomBytes",group:"Crypto",description:"<p>Generates cryptographically strong pseudo-random data. The size argument is a number indicating the number of bytes to generate.</p>",examples:[{title:"Example usage:",content:`bchjs.Crypto.randomBytes(16)
// <Buffer 0e 87 d2 7b c4 c3 d0 06 ef bb f3 a4 e5 ea 87 02>

bchjs.Crypto.randomBytes(20)
// <Buffer 8b 42 7d ca 52 c0 77 69 a3 f2 32 90 6b a5 a8 50 56 e2 47 0f>

bchjs.Crypto.randomBytes(24)
// <Buffer 28 69 fc 81 f7 a8 dd 5e 25 92 c4 7b 87 31 02 e8 b3 4c 92 fa c4 c9 1a e2>

bchjs.Crypto.randomBytes(28)
// <Buffer 80 53 dd 21 b6 02 a9 c7 8f 1c 1d 64 1b 6e 21 3e 3f 01 e1 0f aa 6c 59 50 3a b3 41 a6>

bchjs.Crypto.randomBytes(32)
// <Buffer ec 44 73 72 ea 48 3e 08 a5 0a 62 b8 40 0f 69 64 a7 75 35 af 20 3d e1 6d ce 3b f9 37 11 19 2b c6>`,type:"json"}],version:"0.0.0",filename:"crypto.js",groupTitle:"Crypto"},{type:"",url:"Crypto.ripemd160()",title:"ripemd160()",name:"ripemd160",group:"Crypto",description:"<p>Utility for creating ripemd160 hash digests of data</p>",examples:[{title:"Example usage:",content:`  // buffer from hex
let buffer = Buffer.from('0101010101010101', 'hex')
bchjs.Crypto.ripemd160(buffer)
// <Buffer 58 25 70 1b 4b 97 67 fd 35 06 3b 28 6d ca 35 82 85 3e 06 30>

// buffer from hex
let buffer = Buffer.from('75618d82d1f6251f2ef1f42f5f0d5040330948a707ff6d69720dbdcb00b48aab', 'hex')
bchjs.Crypto.ripemd160(buffer)
// <Buffer 88 74 ef 88 8a 9b cb d8 3b 87 d0 6f f7 bc 21 3c 51 49 73 62>

// buffer from hex
let buffer = Buffer.from('978c09dd46091d1922fa01e9f4a975b91a371f26ba8399de27d53801152121de', 'hex')
bchjs.Crypto.ripemd160(buffer)
// <Buffer 5f 95 6a 88 86 30 51 ea 52 15 d8 97 0c ed 8e 21 8e b6 15 cf>`,type:"json"}],version:"0.0.0",filename:"crypto.js",groupTitle:"Crypto"},{type:"",url:"Crypto.sha256()",title:"sha256()",name:"sha256",group:"Crypto",description:"<p>Utility for creating sha256 hash digests of data</p>",examples:[{title:"Example usage:",content:` // buffer from hex
let buffer = Buffer.from('0101010101010101', 'hex')
bchjs.Crypto.sha256(buffer)
// <Buffer c0 35 7a 32 ed 1f 6a 03 be 92 dd 09 44 76 f7 f1 a2 e2 14 ec>

// buffer from hex
let buffer = Buffer.from('031ad329b3117e1d1e2974406868e575d48cff88e8128ba0eedb10da053785033b', 'hex')
bchjs.Crypto.sha256(buffer)
// <Buffer 98 ee ed 79 8e e9 58 d1 65 3e df 2d 85 7d 4a ea ba 97 19 32>

// buffer from hex
let buffer = Buffer.from('03123464075c7a5fa6b8680afa2c962a02e7bf071c6b2395b0ac711d462cac9354', 'hex')
bchjs.Crypto.sha256(buffer)
// <Buffer 97 8c 09 dd 46 09 1d 19 22 fa 01 e9 f4 a9 75 b9 1a 37 1f 26 ba 83 99 de 27 d5 38 01 15 21 21 de>`,type:"json"}],version:"0.0.0",filename:"crypto.js",groupTitle:"Crypto"},{type:"",url:"DSProof.getDSProof()",title:"getDSProof()",name:"getDSProof",group:"DSProof",description:"<p>Checks if a transaction generated a double-spend proof.</p> <p>If a double-spend is attempted, one of the transactions will generate a 'double spend proof'. This call can be used to check if a transaction generated such a proof.</p> <p>Merchants should wait 3-5 seconds after receiving notification of a transaction before calling this endpoint, to see if the TXID generated a proof. If this method returns no data, then the TX can be considered 'safe' and not a double spend. If proof data is returned by this method, then the transaction generated a proof and can be considered a 'double spend'.</p>",examples:[{title:"Example usage:",content:`(async () => {
  try {
    const txid = 'ee0df780b58f6f24467605b2589c44c3a50fc849fb8f91b89669a4ae0d86bc7e'
    const result = await bchjs.DSProof.getDSProof(txid)
    console.log(result);
  } catch(error) {
   console.error(error)
  }
})()

// returns
null`,type:"json"}],version:"0.0.0",filename:"dsproof.js",groupTitle:"DSProof"},{type:"",url:"Ecpair.fromPublicKey()",title:"fromPublicKey()",name:"fromPublicKey",group:"ECPair",description:"<p>Generates an ECPair from a public key buffer.</p>",examples:[{title:"Example usage:",content:`// create ECPair from mainnet pubkeyBuffer
let pubkeyBuffer = Buffer.from("02fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb", 'hex');
bchjs.ECPair.fromPublicKey(pubkeyBuffer);

// create ECPair from testnet pubkeyBuffer
let pubkeyBuffer = Buffer.from("024a6d0737a23c472d078d78c1cbc3c2bbf8767b48e72684ff03a911b463da7fa6", 'hex');
bchjs.ECPair.fromPublicKey(pubkeyBuffer);`,type:"json"}],version:"0.0.0",filename:"ecpair.js",groupTitle:"ECPair"},{type:"",url:"Ecpair.fromWIF()",title:"fromWIF()",name:"fromWIF",group:"ECPair",description:"<p>Generates an ECPair from a private key in wallet import format (WIF). Follow these steps to go from a private key to a WIF. This method only works with a compressed private key.</p>",examples:[{title:"Example usage:",content:`// mainnet WIF
let wif = 'L4vmKsStbQaCvaKPnCzdRArZgdAxTqVx8vjMGLW5nHtWdRguiRi1';
bchjs.ECPair.fromWIF(wif);

// testnet WIF
let wif = 'cSNLj6xeg3Yg2rfcgKoWNx4MiAgn9ugCUUro37UDEhn6CzeYqjWW'
bchjs.ECPair.fromWIF(wif)`,type:"json"}],version:"0.0.0",filename:"ecpair.js",groupTitle:"ECPair"},{type:"",url:"Ecpair.toCashAddress()",title:"toCashAddress()",name:"toCashAddress",group:"ECPair",description:"<p>Get cash address of ECPair.</p>",examples:[{title:"Example usage:",content:`// mainnet wif
let wif = 'L5GPEGxCmojgzFoBLUUqT2GegLGqobiYhTZzfLtpkLTfTb9E9NRn';
// ecpair from wif
let ecpair = bchjs.ECPair.fromWIF(wif);
// to legacy address
bchjs.ECPair.toCashAddress(ecpair);
// bitcoincash:qz9nq206kteyv2t7trhdr4vzzkej60kqtytn7sxkxm

// testnet wif
let wif = 'cSNLj6xeg3Yg2rfcgKoWNx4MiAgn9ugCUUro37UDEhn6CzeYqjWW';
// ecpair from wif
let ecpair = bchjs.ECPair.fromWIF(wif);
// to legacy address
bchjs.ECPair.toCashAddress(ecpair);
// bchtest:qqzly4vrcxcjw62u4yq4nv86ltk2mc9v0yvq8mvj6m`,type:"json"}],version:"0.0.0",filename:"ecpair.js",groupTitle:"ECPair"},{type:"",url:"Ecpair.toLegacyAddress()",title:"toLegacyAddress()",name:"toLegacyAddress",group:"ECPair",description:"<p>Get legacy address of ECPair.</p>",examples:[{title:"Example usage:",content:`// mainnet wif
let wif = 'L5GPEGxCmojgzFoBLUUqT2GegLGqobiYhTZzfLtpkLTfTb9E9NRn';
// ecpair from wif
let ecpair = bchjs.ECPair.fromWIF(wif);
// to legacy address
bchjs.ECPair.toLegacyAddress(ecpair);
// 1DgxdA5bbMcCNWg3yB2MgKqFazV92BXgxK

// testnet wif
let wif = 'cSNLj6xeg3Yg2rfcgKoWNx4MiAgn9ugCUUro37UDEhn6CzeYqjWW';
// ecpair from wif
let ecpair = bchjs.ECPair.fromWIF(wif);
// to legacy address
bchjs.ECPair.toLegacyAddress(ecpair);
// mg4PygFcXoyNJGJkM2Dcpe25av9wXzz1My`,type:"json"}],version:"0.0.0",filename:"ecpair.js",groupTitle:"ECPair"},{type:"",url:"Ecpair.toPublicKey()",title:"toPublicKey()",name:"toPublicKey",group:"ECPair",description:"<p>Get the public key of an ECPair as a buffer.</p>",examples:[{title:"Example usage:",content:`// create ecpair from mainnet public key buffer
let ecpair = bchjs.ECPair.fromPublicKey(Buffer.from('02d305772e0873fba6c1c7ff353ce374233316eb5820acd7ff3d7d9b82d514126b', 'hex'));
// create public key buffer
bchjs.ECPair.toPublicKey(ecpair);
//

// create ecpair from testnet public key buffer
let ecpair = bchjs.ECPair.fromPublicKey(Buffer.from('024a6d0737a23c472d078d78c1cbc3c2bbf8767b48e72684ff03a911b463da7fa6', 'hex'));
// create public key buffer
bchjs.ECPair.toPublicKey(ecpair);
//`,type:"json"}],version:"0.0.0",filename:"ecpair.js",groupTitle:"ECPair"},{type:"",url:"Ecpair.toWIF()",title:"toWIF()",name:"toWIF",group:"ECPair",description:"<p>Gets a private key in wallet import format from an ECPair.</p>",examples:[{title:"Example usage:",content:`// mainnet wif
let wif = 'L4vmKsStbQaCvaKPnCzdRArZgdAxTqVx8vjMGLW5nHtWdRguiRi1';
// ecpair from wif
let ecpair = bchjs.ECPair.fromWIF(wif);
// wif from ecpair
bchjs.ECPair.toWIF(ecpair);
// L4vmKsStbQaCvaKPnCzdRArZgdAxTqVx8vjMGLW5nHtWdRguiRi1

// testnet wif
let wif = 'cT3tJP7BnjFJSAHbooMXrY8E9t2AFj37amSBAYFMeHfqPqPgD4ZA';
// ecpair from wif
let ecpair = bchjs.ECPair.fromWIF(wif);
// wif from ecpair
bchjs.ECPair.toWIF(ecpair);
// cT3tJP7BnjFJSAHbooMXrY8E9t2AFj37amSBAYFMeHfqPqPgD4ZA`,type:"json"}],version:"0.0.0",filename:"ecpair.js",groupTitle:"ECPair"},{type:"",url:"Electrumx.balance()",title:"balance()",name:"ElectrumX_Balance",group:"ElectrumX",description:"<p>Return a list of balances for an address.</p>",examples:[{title:"Example usage:",content:`(async () => {
  try {
    let balance = await bchjs.Electrumx.balance('bitcoincash:qrdka2205f4hyukutc2g0s6lykperc8nsu5u2ddpqf');
    console.log(balance);
  } catch(error) {
   console.error(error)
  }
})()

  balance = {
    "success": true,
    "balance": {
      "confirmed": 1000,
      "unconfirmed": 0
    }
  }

(async () => {
  try {
    let balance = await bchjs.Electrumx.balance(['bitcoincash:qrdka2205f4hyukutc2g0s6lykperc8nsu5u2ddpqf', 'bitcoincash:qpdh9s677ya8tnx7zdhfrn8qfyvy22wj4qa7nwqa5v']);
    console.log(balance);
  } catch(error) {
   console.error(error)
  }
})()

  balance = {
    "success": true,
    "balances": [
      {
        "balance": {
          "confirmed": 7000,
          "unconfirmed": 0
        },
        "address": "bitcoincash:qrdka2205f4hyukutc2g0s6lykperc8nsu5u2ddpqf"
      },
      {
        "balance": {
          "confirmed": 0,
          "unconfirmed": 0
        },
        "address": "bitcoincash:qpdh9s677ya8tnx7zdhfrn8qfyvy22wj4qa7nwqa5v"
      }
    ]
  }`,type:"json"}],version:"0.0.0",filename:"electrumx.js",groupTitle:"ElectrumX"},{type:"",url:"Electrumx.blockHeader()",title:"blockHeader()",name:"ElectrumX_Block_headers",group:"ElectrumX",description:"<p>Return block headers for a given height</p>",examples:[{title:"Example usage:",content:`(async () => {
  try {
    let headers = await bchjs.Electrumx.blockHeaders(42);
    console.log(headers);
  } catch(error) {
   console.error(error)
  }
})()

headers = {
 "success": true,
 "headers": [
   "010000008b52bbd72c2f49569059f559c1b1794de5192e4f7d6d2b03c7482bad0000000083e4f8a9d502ed0c419075c1abb5d56f878a2e9079e5612bfb76a2dc37d9c42741dd6849ffff001d2b909dd6",
   "01000000f528fac1bcb685d0cd6c792320af0300a5ce15d687c7149548904e31000000004e8985a786d864f21e9cbb7cbdf4bc9265fe681b7a0893ac55a8e919ce035c2f85de6849ffff001d385ccb7c"
 ]
}

(async () => {
  try {
    let headers = await bchjs.Electrumx.blockHeaders(42, 1);
    console.log(headers);
  } catch(error) {
   console.error(error)
  }
})()

headers = {
 "success": true,
 "headers": [
   "010000008b52bbd72c2f49569059f559c1b1794de5192e4f7d6d2b03c7482bad0000000083e4f8a9d502ed0c419075c1abb5d56f878a2e9079e5612bfb76a2dc37d9c42741dd6849ffff001d2b909dd6"
 ]
}`,type:"json"}],version:"0.0.0",filename:"electrumx.js",groupTitle:"ElectrumX"},{type:"",url:"Electrumx.broadcast()",title:"broadcast()",name:"ElectrumX_Broadcast",group:"ElectrumX",description:"<p>Broadcast a raw transaction and return the transaction ID on success or error on failure.</p> <p>(async () =&gt; { try { const txHex = &quot;020000000265d13ef402840c8a51f39779afb7ae4d49e4b0a3c24a3d0e7742038f2c679667010000006441dd1dd72770cadede1a7fd0363574846c48468a398ddfa41a9677c74cac8d2652b682743725a3b08c6c2021a629011e11a264d9036e9d5311e35b5f4937ca7b4e4121020797d8fd4d2fa6fd7cdeabe2526bfea2b90525d6e8ad506ec4ee3c53885aa309ffffffff65d13ef402840c8a51f39779afb7ae4d49e4b0a3c24a3d0e7742038f2c679667000000006441347d7f218c11c04487c1ad8baac28928fb10e5054cd4494b94d078cfa04ccf68e064fb188127ff656c0b98e9ce87f036d183925d0d0860605877d61e90375f774121028a53f95eb631b460854fc836b2e5d31cad16364b4dc3d970babfbdcc3f2e4954ffffffff035ac355000000000017a914189ce02e332548f4804bac65cba68202c9dbf822878dfd0800000000001976a914285bb350881b21ac89724c6fb6dc914d096cd53b88acf9ef3100000000001976a91445f1f1c4a9b9419a5088a3e9c24a293d7a150e6488ac00000000&quot; let result = await bchjs.Electrumx.broadcast(txHex) console.log(result); } catch(error) { console.error(error) } })()</p> <p>result = { &quot;success&quot;: true, &quot;txid&quot;: &quot;...&quot; }</p>",version:"0.0.0",filename:"electrumx.js",groupTitle:"ElectrumX"},{type:"",url:"Electrumx.transactions()",title:"transactions()",name:"ElectrumX_Transactions",group:"ElectrumX",description:"<p>Return a transaction history for an address.</p>",examples:[{title:"Example usage:",content:`(async () => {
  try {
    let transactions = await bchjs.Electrumx.transactions('bitcoincash:qpdh9s677ya8tnx7zdhfrn8qfyvy22wj4qa7nwqa5v');
    console.log(utxo);
  } catch(error) {
   console.error(error)
  }
})()

  {
    "success": true,
    "transactions": [
      {
        "height": 560430,
        "tx_hash": "3e1f3e882be9c03897eeb197224bf87f312be556a89f4308fabeeeabcf9bc851"
      },
      {
        "height": 560534,
        "tx_hash": "4ebbeaac51ce141e262964e3a0ce11b96ca72c0dffe9b4127ce80135f503a280"
      }
    ]
  }

(async () => {
  try {
    let transactions = await bchjs.Electrumx.transactions(['bitcoincash:qrl2nlsaayk6ekxn80pq0ks32dya8xfclyktem2mqj', 'bitcoincash:qpdh9s677ya8tnx7zdhfrn8qfyvy22wj4qa7nwqa5v']);
    console.log(utxo);
  } catch(error) {
   console.error(error)
  }
})()

  transactions = {
    "success": true,
    "transactions": [
      {
        "transactions": [
          {
            "height": 631219,
            "tx_hash": "ae2daa01c8172545b5edd205ea438706bcb74e63d4084a26b9ff2a46d46dc97f"
          }
        ],
        "address": "bitcoincash:qrl2nlsaayk6ekxn80pq0ks32dya8xfclyktem2mqj"
      },
      {
        "transactions": [
          {
            "height": 560430,
            "tx_hash": "3e1f3e882be9c03897eeb197224bf87f312be556a89f4308fabeeeabcf9bc851"
          },
          {
            "height": 560534,
            "tx_hash": "4ebbeaac51ce141e262964e3a0ce11b96ca72c0dffe9b4127ce80135f503a280"
          }
        ],
        "address": "bitcoincash:qpdh9s677ya8tnx7zdhfrn8qfyvy22wj4qa7nwqa5v"
      }
    ]
  }`,type:"json"}],version:"0.0.0",filename:"electrumx.js",groupTitle:"ElectrumX"},{type:"",url:"Electrumx.unconfirmed()",title:"unconfirmed()",name:"ElectrumX_Unconfirmed",group:"ElectrumX",description:"<p>Return a list of unconfirmed uxtos (mempool) for an address.</p>",examples:[{title:"Example usage:",content:`   (async () => {
  try {
    let mempool = await bchjs.Electrumx.unconfirmed('bitcoincash:qqh793x9au6ehvh7r2zflzguanlme760wuzehgzjh9');
    console.log(mempool);
  } catch(error) {
   console.error(error)
  }
})()

mempool = {
 "success": true,
 "utxos": [
   {
     "height": 602405,
     "tx_hash": "2b37bdb3b63dd0bca720437754a36671431a950e684b64c44ea910ea9d5297c7",
     "fee": 24310
   }
 ]
}

(async () => {
  try {
    let mempool = await bchjs.Electrumx.unconfirmed(['bitcoincash:qrdka2205f4hyukutc2g0s6lykperc8nsu5u2ddpqf', 'bitcoincash:qpdh9s677ya8tnx7zdhfrn8qfyvy22wj4qa7nwqa5v']);
    console.log(mempool);
  } catch(error) {
   console.error(error)
  }
})()

  mempool = {
    "success": true,
    "utxos": [
      {
        "utxos": [
          {
            "height": 604392,
            "tx_hash": "7774e449c5a3065144cefbc4c0c21e6b69c987f095856778ef9f45ddd8ae1a41",
            "fee": 24310
          },
          {
            "height": 630834,
            "tx_hash": "4fe60a51e0d8f5134bfd8e5f872d6e502d7f01b28a6afebb27f4438a4f638d53",
            "fee": 3000
          }
        ],
        "address": "bitcoincash:qrdka2205f4hyukutc2g0s6lykperc8nsu5u2ddpqf"
      },
      {
        "utxos": [],
        "address": "bitcoincash:qpdh9s677ya8tnx7zdhfrn8qfyvy22wj4qa7nwqa5v"
      }
    ]
  }`,type:"json"}],version:"0.0.0",filename:"electrumx.js",groupTitle:"ElectrumX"},{type:"",url:"Electrumx.utxo()",title:"utxo()",name:"ElectrumX_Utxo",group:"ElectrumX",description:"<p>Return a list of uxtos for an address.</p>",examples:[{title:"Example usage:",content:`(async () => {
  try {
    let utxo = await bchjs.Electrumx.utxo('bitcoincash:qqh793x9au6ehvh7r2zflzguanlme760wuzehgzjh9');
    console.log(utxo);
  } catch(error) {
   console.error(error)
  }
})()

utxo = {
 "success": true,
 "utxos": [
   {
     "height": 602405,
    "tx_hash": "2b37bdb3b63dd0bca720437754a36671431a950e684b64c44ea910ea9d5297c7",
     "tx_pos": 0,
     "value": 1000
   }
 ]
}

(async () => {
  try {
    let utxo = await bchjs.Electrumx.utxo(['bitcoincash:qrdka2205f4hyukutc2g0s6lykperc8nsu5u2ddpqf', 'bitcoincash:qpdh9s677ya8tnx7zdhfrn8qfyvy22wj4qa7nwqa5v']);
    console.log(utxo);
  } catch(error) {
   console.error(error)
  }
})()

  utxos = {
    "success": true,
    "utxos": [
      {
        "utxos": [
          {
            "height": 604392,
            "tx_hash": "7774e449c5a3065144cefbc4c0c21e6b69c987f095856778ef9f45ddd8ae1a41",
            "tx_pos": 0,
            "value": 1000
          },
          {
            "height": 630834,
            "tx_hash": "4fe60a51e0d8f5134bfd8e5f872d6e502d7f01b28a6afebb27f4438a4f638d53",
            "tx_pos": 0,
            "value": 6000
          }
        ],
        "address": "bitcoincash:qrdka2205f4hyukutc2g0s6lykperc8nsu5u2ddpqf"
      },
      {
        "utxos": [],
        "address": "bitcoincash:qpdh9s677ya8tnx7zdhfrn8qfyvy22wj4qa7nwqa5v"
      }
    ]
  }`,type:"json"}],version:"0.0.0",filename:"electrumx.js",groupTitle:"ElectrumX"},{type:"",url:"Electrumx.sortAllTxs()",title:"sortAllTxs()",name:"ElectrumX_sortAllTxs",group:"ElectrumX",description:"<p>Sort the output of Electrum.transactions() by block height.</p> <p>A simple sort function for the output of Electrum.transactions(). Assumes that unconfirmed transactions will make it into the next block. Any unconfirmed transactions have their block height with the height of the next block. Returns a Promise.</p> <p>Sorts in 'ASCENDING' order by default, or 'DESCENDING' can be specified.</p>",examples:[{title:"Example usage:",content:`   (async () => {
     const txs = await bchjs.Electrumx.transactions('bitcoincash:qpdh9s677ya8tnx7zdhfrn8qfyvy22wj4qa7nwqa5v')
     const sortedTxs = await bchjs.Electrumx.sortAllTxs(txs.transactions, 'ASCENDING')
     console.log(sortedTxs)
   })()

//   [
//     {
//       "height": 560430,
//       "tx_hash": "3e1f3e882be9c03897eeb197224bf87f312be556a89f4308fabeeeabcf9bc851"
//     },
//     {
//       "height": 560534,
//       "tx_hash": "4ebbeaac51ce141e262964e3a0ce11b96ca72c0dffe9b4127ce80135f503a280"
//     }
//   ]`,type:"json"}],version:"0.0.0",filename:"electrumx.js",groupTitle:"ElectrumX"},{type:"",url:"Electrumx.sortConfTxs()",title:"sortConfTxs()",name:"ElectrumX_sortConfTxs",group:"ElectrumX",description:"<p>Sort the output of Electrum.transactions() by block height.</p> <p>A simple sort function for the output of Electrum.transactions(). Ignores unconfirmed transactions.</p> <p>Sorts in 'DESCENDING' order by default, or 'ASCENDING' can be specified. Descending makes the first element the newest (largest block height).</p>",examples:[{title:"Example usage:",content:`   (async () => {
     const txs = await bchjs.Electrumx.transactions('bitcoincash:qpdh9s677ya8tnx7zdhfrn8qfyvy22wj4qa7nwqa5v')
     const sortedTxs = bchjs.Electrumx.sortConfTxs(txs.transactions, 'ASCENDING')
     console.log(sortedTxs)
   })()

//   [
//     {
//       "height": 560430,
//       "tx_hash": "3e1f3e882be9c03897eeb197224bf87f312be556a89f4308fabeeeabcf9bc851"
//     },
//     {
//       "height": 560534,
//       "tx_hash": "4ebbeaac51ce141e262964e3a0ce11b96ca72c0dffe9b4127ce80135f503a280"
//     }
//   ]`,type:"json"}],version:"0.0.0",filename:"electrumx.js",groupTitle:"ElectrumX"},{type:"",url:"Electrumx.txData()",title:"txData()",name:"ElectrumX_txData",group:"ElectrumX",description:"<p>Returns an object with transaction details of the TXID</p>",examples:[{title:"Example usage:",content:`   (async () => {
  try {
    let result = await bchjs.Electrumx.txData('4db095f34d632a4daf942142c291f1f2abb5ba2e1ccac919d85bdc2f671fb251')
    console.log(result);
  } catch(error) {
   console.error(error)
  }
})()

result = {
  "success": true,
  "details": {
     "blockhash": "0000000000000000002aaf94953da3b487317508ebd1003a1d75d6d6ec2e75cc",
     "blocktime": 1578327094,
     "confirmations": 31861,
     "hash": "4db095f34d632a4daf942142c291f1f2abb5ba2e1ccac919d85bdc2f671fb251",
     ...
     "vin": [
       {
         "scriptSig": {
         ...
     "vout": [
       {
         "n": 0,
         "scriptPubKey": {
         "addresses": [
            "bitcoincash: pqvfecpwxvj53ayqfwkxtjaxsgpvnklcyg8xewk9hl"
         ],
       }
     ...
}

   (async () => {
  try {
    let result = await bchjs.Electrumx.txData(['4db095f34d632a4daf942142c291f1f2abb5ba2e1ccac919d85bdc2f671fb251', '4db095f34d632a4daf942142c291f1f2abb5ba2e1ccac919d85bdc2f671fb251'])
    console.log(result);
  } catch(error) {
   console.error(error)
  }
})()

result = {
  "transactions": [
    {
       "txid": "4db095f34d632a4daf942142c291f1f2abb5ba2e1ccac919d85bdc2f671fb251",
       "details": {
          "blockhash": "0000000000000000002aaf94953da3b487317508ebd1003a1d75d6d6ec2e75cc",
          "blocktime": 1578327094,
          "confirmations": 31861,
          "hash": "4db095f34d632a4daf942142c291f1f2abb5ba2e1ccac919d85bdc2f671fb251",
          ...
       }
    },
    {
       "txid": "4db095f34d632a4daf942142c291f1f2abb5ba2e1ccac919d85bdc2f671fb251",
       "details": {
          "blockhash": "0000000000000000002aaf94953da3b487317508ebd1003a1d75d6d6ec2e75cc",
          "blocktime": 1578327094,
       ...
    }
  ]
}`,type:"json"}],version:"0.0.0",filename:"electrumx.js",groupTitle:"ElectrumX"},{type:"",url:"encryption.getPubKey()",title:"getPubKey()",name:"Encryption_getPubKey()",group:"Encryption",description:"<p>Get the public key for an address Given an address, the command will search the blockchain for a public key associated with that address. The address needs to have made at least one spend transaction, in order for its public key to be retrievable.</p>",examples:[{title:"Example usage:",content:`(async () => {
 try {
   const addr = 'bitcoincash:qqlrzp23w08434twmvr4fxw672whkjy0py26r63g3d'
   const pubkey = await bchjs.encryption.getPubKey(addr);
   console.log(pubkey);
 } catch(err) {
  console.error(err)
 }
})()`,type:"json"}],version:"0.0.0",filename:"encryption.js",groupTitle:"Encryption"},{type:"",url:"HDNode.createAccount()",title:"createAccount()",name:"createAccount",group:"HDNode",description:"<p>Has getChainAddress and nextChainAddress helper methods.</p>",examples:[{title:"Example usage:",content:`// create mnemonic
let mnemonic = bchjs.Mnemonic.generate(128);
// create root seed buffer
let rootSeedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create master hd node
let masterHDNode = bchjs.HDNode.fromSeed(rootSeedBuffer);
// derive child node
let childNode = masterHDNode.derivePath("m/44'/145'/0'/0");
// create account
let account = bchjs.HDNode.createAccount([childNode]);`,type:"json"}],version:"0.0.0",filename:"hdnode.js",groupTitle:"HDNode"},{type:"",url:"HDNode.derive()",title:"derive()",name:"derive",group:"HDNode",description:"<p>Derive non hardened child HDNode</p>",examples:[{title:"Example usage:",content:`// create mnemonic
let mnemonic = bchjs.Mnemonic.generate(128);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// derive unhardened child HDNode
bchjs.HDNode.derive(hdNode, 0);`,type:"json"}],version:"0.0.0",filename:"hdnode.js",groupTitle:"HDNode"},{type:"",url:"HDNode.deriveHardened()",title:"deriveHardened()",name:"deriveHardened",group:"HDNode",description:"<p>Derive hardened child HDNode</p>",examples:[{title:"Example usage:",content:`// create mnemonic
let mnemonic = bchjs.Mnemonic.generate(128);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// derive hardened child HDNode
bchjs.HDNode.deriveHardened(hdNode, 0);`,type:"json"}],version:"0.0.0",filename:"hdnode.js",groupTitle:"HDNode"},{type:"",url:"HDNode.derivePath()",title:"derivePath()",name:"derivePath",group:"HDNode",description:"<p>Derive child HDNode from path</p>",examples:[{title:"Example usage:",content:`// create mnemonic
let mnemonic = bchjs.Mnemonic.generate(128);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// derive hardened child HDNode
bchjs.HDNode.derivePath(hdNode, "m/44'/145'/0'");`,type:"json"}],version:"0.0.0",filename:"hdnode.js",groupTitle:"HDNode"},{type:"",url:"HDNode.fromSeed()",title:"fromSeed()",name:"fromSeed",group:"HDNode",description:"<p>HDNode stands for Hierarchically Deterministic node which can be used to create a HD wallet.</p>",examples:[{title:"Example usage:",content:`// create mnemonic
let mnemonic = bchjs.Mnemonic.generate(128);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
bchjs.HDNode.fromSeed(seedBuffer);

// generate entropy
let entropy = bchjs.Crypto.randomBytes(32);
// create mnemonic from entropy
let mnemonic = bchjs.Mnemonic.fromEntropy(entropy);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
bchjs.HDNode.fromSeed(seedBuffer);`,type:"json"}],version:"0.0.0",filename:"hdnode.js",groupTitle:"HDNode"},{type:"",url:"HDNode.fromXPriv()",title:"fromXPriv()",name:"fromXPriv",group:"HDNode",description:"<p>Generate HDNode from extended private key.</p>",examples:[{title:"Example usage:",content:`// mainnet xpriv
bchjs.HDNode.fromXPriv('xprv9s21ZrQH143K2b5GPP6zHz22E6LeCgQXJtwNbC3MA3Kz7Se7tveKo96EhqwFtSkYWkyenVcMqM7uq35PcUNG8cUdpsJEgwKG3dvfP7TmL3v');

// testnet xpriv
bchjs.HDNode.fromXPriv('tprv8gQ3zr1F5pRHMebqqhorrorYNvUG3XkcZjSWVs2cEtRwwJy1TRhgRx4XcF8dYHM2eyTbTCcdKYNhqgyBQphxwRoVyVKr9zuyoA8WxNDRvom');`,type:"json"}],version:"0.0.0",filename:"hdnode.js",groupTitle:"HDNode"},{type:"",url:"HDNode.fromXPub()",title:"fromXPub()",name:"fromXPub",group:"HDNode",description:"<p>Generate HDNode from extended public key.</p>",examples:[{title:"Example usage:",content:`// mainnet xpub
bchjs.HDNode.fromXPub('xpub661MyMwAqRbcFuMLeHkSbTNwNHG9MQyrAZqV1Q4MEAsmj9MYa5sxg8WC2LKqW6EHviHVucBjWi1n38juZpDDeX3U6YrsMeACdcNSTHkM8BQ');

// testnet xpub
bchjs.HDNode.fromXPub('tpubDD669G3VEC6xF7ddjMUTGDWewwzCCrwX933HnP4ufAELmoDn5pXGcSgPnLodjFvWQwRXkG94f77BatEDA8dfQ99yy97kRYynUpNLENEqTBo');`,type:"json"}],version:"0.0.0",filename:"hdnode.js",groupTitle:"HDNode"},{type:"",url:"HDNode.isPrivate()",title:"isPrivate()",name:"isPrivate",group:"HDNode",description:"<p>Check if an HDNode can derive both public and private keys and children</p>",examples:[{title:"Example usage:",content:`// mainnet xpub
let xpub = 'xpub6DWfGUo4cjC8oWmgZdpyFMH6v3oeyADfdUPhsehzn5jX44zpazivha3JxUtkcCvBEB1c6DGaiUmpyz2m1DRfGDEVZ5VxLLW2UNEbZ5iTRvi';
let node = bchjs.HDNode.fromXPub(xpub);
bchjs.HDNode.isPrivate(node);
// false

// mainnet xpriv
let xpriv = 'xprv9ys4cvcoU8RoxqkZ7Fgt33te4LPHgcsKwyoZYVorkzp9uonWxWgP9wiSQhPeBUqVHbdAyov4Yi55RywBkDfZKdJFRqA51Anz6v72zGaMGZp';
let node = bchjs.HDNode.fromXPriv(xpriv);
bchjs.HDNode.isPrivate(node);
// true

// testnet xpub
let xpub = 'tpubDCxmZ3qLVVphg6NpsnAjQFqDPwr9HYqSgoAcUYAfqSgo32dL6NA8QXqWsS6XTjoGggohZKvujsAv2F2ugej9qfUYau2jSUB4JaYnfMsx3MJ';
let node = bchjs.HDNode.fromXPub(xpub);
bchjs.HDNode.isPrivate(node);
// false

// testnet xpriv
let xpriv = 'tprv8ggxJ8SG5EdqakzVUeLa9Gr7sqCdEcJPUNDmtdJscNxfmxoXvU36ZguiUWukJVEWEixAUr8pJabJkCt33wzxFQA587gqN51Lxdxx97zAzuG';
let node = bchjs.HDNode.fromXPriv(xpriv);
bchjs.HDNode.isPrivate(node);
// true`,type:"json"}],version:"0.0.0",filename:"hdnode.js",groupTitle:"HDNode"},{type:"",url:"HDNode.isPublic()",title:"isPublic()",name:"isPublic",group:"HDNode",description:"<p>Check if an HDNode can only derive public keys and children</p>",examples:[{title:"Example usage:",content:`// mainnet xpub
let xpub = 'xpub6DWfGUo4cjC8oWmgZdpyFMH6v3oeyADfdUPhsehzn5jX44zpazivha3JxUtkcCvBEB1c6DGaiUmpyz2m1DRfGDEVZ5VxLLW2UNEbZ5iTRvi';
let node = bchjs.HDNode.fromXPub(xpub);
bchjs.HDNode.isPublic(node);
// true

// mainnet xpriv
let xpriv = 'xprv9ys4cvcoU8RoxqkZ7Fgt33te4LPHgcsKwyoZYVorkzp9uonWxWgP9wiSQhPeBUqVHbdAyov4Yi55RywBkDfZKdJFRqA51Anz6v72zGaMGZp';
let node = bchjs.HDNode.fromXPriv(xpriv);
bchjs.HDNode.isPublic(node);
// false

// testnet xpub
let xpub = 'tpubDCxmZ3qLVVphg6NpsnAjQFqDPwr9HYqSgoAcUYAfqSgo32dL6NA8QXqWsS6XTjoGggohZKvujsAv2F2ugej9qfUYau2jSUB4JaYnfMsx3MJ';
let node = bchjs.HDNode.fromXPub(xpub);
bchjs.HDNode.isPublic(node);
// true

// testnet xpriv
let xpriv = 'tprv8ggxJ8SG5EdqakzVUeLa9Gr7sqCdEcJPUNDmtdJscNxfmxoXvU36ZguiUWukJVEWEixAUr8pJabJkCt33wzxFQA587gqN51Lxdxx97zAzuG';
let node = bchjs.HDNode.fromXPriv(xpriv);
bchjs.HDNode.isPublic(node);
// false`,type:"json"}],version:"0.0.0",filename:"hdnode.js",groupTitle:"HDNode"},{type:"",url:"HDNode.sign()",title:"sign()",name:"sign",group:"HDNode",description:"<p>Sign 32 byte hash encoded as a buffer.</p>",examples:[{title:"Example usage:",content:`// mainnet xpriv
let xpriv = 'xprv9z2uWrGjbYPxc728rvtMi4jt4SudRiSfYn6Tdif5XN17pJ1NTbHoHK6JePkPLY1NHXLaQcA6sWudpZDm7DwKhbsGQieAp9wx46Wbio4iXg9';
// hdnode from xpriv
let hdnode = bchjs.HDNode.fromXPriv(xpriv);
// 32 byte buffer
let buf = Buffer.from(bchjs.Crypto.sha256('EARTH'), 'hex');
// sign
bchjs.HDNode.sign(hdnode, buf);

// testnet xpriv
let xpriv = 'tprv8ggxJ8SG5EdqakzVUeLa9Gr7sqCdEcJPUNDmtdJscNxfmxoXvU36ZguiUWukJVEWEixAUr8pJabJkCt33wzxFQA587gqN51Lxdxx97zAzuG';
// hdnode from xpriv
let hdnode = bchjs.HDNode.fromXPriv(xpriv);
// 32 byte buffer
let buf = Buffer.from(bchjs.Crypto.sha256('EARTH'), 'hex');
// sign
bchjs.HDNode.sign(hdnode, buf);`,type:"json"}],version:"0.0.0",filename:"hdnode.js",groupTitle:"HDNode"},{type:"",url:"HDNode.toCashAddress()",title:"toCashAddress()",name:"toCashAddress",group:"HDNode",description:"<p>Get cash address of HDNode.</p>",examples:[{title:"Example usage:",content:`// create mnemonic
let mnemonic = bchjs.Mnemonic.generate(128);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// to cash address
bchjs.HDNode.toCashAddress(hdNode);
// bitcoincash:qqrz6kqw6nvhwgwrt4g7fggepvewtkr7nukkeqf4rw

// generate entropy
let entropy = bchjs.Crypto.randomBytes(32);
// create mnemonic from entropy
let mnemonic = bchjs.Mnemonic.fromEntropy(entropy);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// to cash address
bchjs.HDNode.toCashAddress(hdNode);
// bitcoincash:qq549jxsjv66kw0smdju4es2axnk7hhe9cquhjg4gt`,type:"json"}],version:"0.0.0",filename:"hdnode.js",groupTitle:"HDNode"},{type:"",url:"HDNode.toIdentifier()",title:"toIdentifier()",name:"toIdentifier",group:"HDNode",description:"<p>hash160 of Node\u2019s public key. The same value you would see in a scriptPubKey.</p>",examples:[{title:"Example usage:",content:`// mainnet
let xpub = 'xpub6DWfGUo4cjC8oWmgZdpyFMH6v3oeyADfdUPhsehzn5jX44zpazivha3JxUtkcCvBEB1c6DGaiUmpyz2m1DRfGDEVZ5VxLLW2UNEbZ5iTRvi';
let node = bchjs.HDNode.fromXPub(xpub);
bchjs.HDNode.toIdentifier(node);
// <Buffer cd d4 84 1d 2e 96 bf bf f7 9c d1 f4 a6 75 22 1c 7f 67 88 9c>
// the same as if we hash160ed it's publicKey
let publicKeyBuffer = bchjs.HDNode.toPublicKey(node);
bchjs.Crypto.hash160(publicKeyBuffer);
// <Buffer cd d4 84 1d 2e 96 bf bf f7 9c d1 f4 a6 75 22 1c 7f 67 88 9c>

// testnet
let xpub = 'tpubDCxmZ3qLVVphg6NpsnAjQFqDPwr9HYqSgoAcUYAfqSgo32dL6NA8QXqWsS6XTjoGggohZKvujsAv2F2ugej9qfUYau2jSUB4JaYnfMsx3MJ';
let node = bchjs.HDNode.fromXPub(xpub);
bchjs.HDNode.toIdentifier(node);
// <Buffer e1 8e 20 e3 f8 f1 c0 53 e6 1f 9e 3a 58 8e 71 f5 0b 8d 2d c4>
// the same as if we hash160ed it's publicKey
let publicKeyBuffer = bchjs.HDNode.toPublicKey(node);
bchjs.Crypto.hash160(publicKeyBuffer);
// <Buffer e1 8e 20 e3 f8 f1 c0 53 e6 1f 9e 3a 58 8e 71 f5 0b 8d 2d c4>`,type:"json"}],version:"0.0.0",filename:"hdnode.js",groupTitle:"HDNode"},{type:"",url:"HDNode.toKeyPair()",title:"toKeyPair()",name:"toKeyPair",group:"HDNode",description:"<p>Get the ECPair of an HDNode.</p>",examples:[{title:"Example usage:",content:`// create mnemonic
let mnemonic = bchjs.Mnemonic.generate(128);
// create root seed buffer from mnemonic
let rootSeed= await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from root seed
let hdNode = bchjs.HDNode.fromSeed(rootSeed);
// create public key buffer from HDNode
bchjs.HDNode.toKeyPair(hdNode);

// generate entropy
let entropy = bchjs.Crypto.randomBytes(32);
// create mnemonic from entropy
let mnemonic = bchjs.Mnemonic.fromEntropy(entropy);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// create public key buffer from HDNode
bchjs.HDNode.toKeyPair(hdNode);`,type:"json"}],version:"0.0.0",filename:"hdnode.js",groupTitle:"HDNode"},{type:"",url:"HDNode.toLegacyAddress()",title:"toLegacyAddress()",name:"toLegacyAddress",group:"HDNode",description:"<p>Get legacy address of HDNode</p>",examples:[{title:"Example usage:",content:`// create mnemonic
let mnemonic = bchjs.Mnemonic.generate(128);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// to legacy address
bchjs.HDNode.toLegacyAddress(hdNode);
// 14apxtw2LDQmXWsS5k4JEhG93Jzjswhvma

// generate entropy
let entropy = bchjs.Crypto.randomBytes(32);
// create mnemonic from entropy
let mnemonic = bchjs.Mnemonic.fromEntropy(entropy);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// to cash address
bchjs.HDNode.toLegacyAddress(hdNode);
// 14mVsq3H5Ep2Jb6AqoKsmY1BFHKCBGPDLi`,type:"json"}],version:"0.0.0",filename:"hdnode.js",groupTitle:"HDNode"},{type:"",url:"HDNode.toPublicKey()",title:"toPublicKey()",name:"toPublicKey",group:"HDNode",description:"<p>Get the public key of an HDNode as a buffer.</p>",examples:[{title:"Example usage:",content:`// create mnemonic
let mnemonic = bchjs.Mnemonic.generate(128);
// create root seed buffer from mnemonic
let rootSeed= await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from root seed
let hdNode = bchjs.HDNode.fromSeed(rootSeed);
// create public key buffer from HDNode
bchjs.HDNode.toPublicKey(hdNode);
// <Buffer 03 86 d6 d3 db ec 1a 93 8c 2c a2 63 c9 79 8f eb e9 16 09 c5 a2 9b 07 65 c4 79 1f d9 0f fa 4d 27 20>

// generate entropy
let entropy = bchjs.Crypto.randomBytes(32);
// create mnemonic from entropy
let mnemonic = bchjs.Mnemonic.fromEntropy(entropy);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// create public key buffer from HDNode
bchjs.HDNode.toPublicKey(hdNode);
// <Buffer 02 d2 26 74 6e 78 03 ac 11 e0 96 c6 24 de e8 dd 62 52 e7 8e 51 56 8a c1 18 62 aa 2a 72 50 1d ea 7d>`,type:"json"}],version:"0.0.0",filename:"hdnode.js",groupTitle:"HDNode"},{type:"",url:"SLP.HDNode.toSLPAddress()",title:"toSLPAddress()",name:"toSLPAddress",group:"HDNode",description:"<p>Get slp address of HDNode.</p>",examples:[{title:"Example usage:",content:`// create mnemonic
let mnemonic = bchjs.Mnemonic.generate(128);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.SLP.HDNode.fromSeed(seedBuffer);
// to cash address
bchjs.SLP.HDNode.toSLPAddress(hdNode);
// simpleledger:qpst7ganm0ucmj3yl7jxvdqrm7tg3zhveg89xjh25d

// generate entropy
let entropy = bchjs.Crypto.randomBytes(32);
// create mnemonic from entropy
let mnemonic = bchjs.Mnemonic.fromEntropy(entropy);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.SLP.HDNode.fromSeed(seedBuffer);
// to cash address
bchjs.SLP.HDNode.toSLPAddress(hdNode);
// simpleledger:qqxh2z2z397m4c6u9s5x6wjtku742q8rpvm6al2nrf`,type:"json"}],version:"0.0.0",filename:"hdnode.js",groupTitle:"HDNode"},{type:"",url:"HDNode.toWIF()",title:"toWIF()",name:"toWIF",group:"HDNode",description:"<p>Get private key in wallet import format (WIF) of HDNode.</p>",examples:[{title:"Example usage:",content:`// create mnemonic
let mnemonic = bchjs.Mnemonic.generate(128);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// to WIF
bchjs.HDNode.toWIF(hdNode);
// L5E8QjFnLukp8BuF4uu9gmvvSrbafioURGdBve5tA3Eq5ptzbMCJ

// generate entropy
let entropy = bchjs.Crypto.randomBytes(32);
// create mnemonic from entropy
let mnemonic = bchjs.Mnemonic.fromEntropy(entropy);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// to WIF
bchjs.HDNode.toWIF(hdNode);
// KwobPFhv3AuXc3ps6YtWfMVRpLBDBA7jnJddurfELTyTNcFhZYpJ`,type:"json"}],version:"0.0.0",filename:"hdnode.js",groupTitle:"HDNode"},{type:"",url:"HDNode.toXPriv()",title:"toXPriv()",name:"toXPriv",group:"HDNode",description:"<p>Get extended private key of HDNode.</p>",examples:[{title:"Example usage:",content:`// create mnemonic
let mnemonic = bchjs.Mnemonic.generate(128);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// to extended private key
bchjs.HDNode.toXPriv(hdNode);
// xprv9s21ZrQH143K2eMCcbT4qwwRhw6qZaPaEDWB792bnrxQZPoP2JUk4kfEx9eeV1uGTAWAfCqYr4wDWo52qALiukizKwQzvEyNR1fWZJi97Kv

// generate entropy
let entropy = bchjs.Crypto.randomBytes(32);
// create mnemonic from entropy
let mnemonic = bchjs.Mnemonic.fromEntropy(entropy);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// to extended private key
bchjs.HDNode.toXPriv(hdNode);
// xprv9s21ZrQH143K2b5GPP6zHz22E6LeCgQXJtwNbC3MA3Kz7Se7tveKo96EhqwFtSkYWkyenVcMqM7uq35PcUNG8cUdpsJEgwKG3dvfP7TmL3v`,type:"json"}],version:"0.0.0",filename:"hdnode.js",groupTitle:"HDNode"},{type:"",url:"HDNode.toXPub()",title:"toXPub()",name:"toXPub",group:"HDNode",description:"<p>Get extended public key of HDNode.</p>",examples:[{title:"Example usage:",content:`// create mnemonic
let mnemonic = bchjs.Mnemonic.generate(128);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// to extended public key
bchjs.HDNode.toXPub(hdNode);
// xpub661MyMwAqRbcG4CnhNYoK1r1TKLwQQ1UdC3LHoWFK61rsnzh7Hx35qQ9Z53ucYcE5WvA7GEDXhqqKjSY2e6Y8n7WNVLYHpXCuuX945VPuYn

// generate entropy
let entropy = bchjs.Crypto.randomBytes(32);
// create mnemonic from entropy
let mnemonic = bchjs.Mnemonic.fromEntropy(entropy);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// to extended public key
bchjs.HDNode.toXPub(hdNode);
// xpub661MyMwAqRbcFuMLeHkSbTNwNHG9MQyrAZqV1Q4MEAsmj9MYa5sxg8WC2LKqW6EHviHVucBjWi1n38juZpDDeX3U6YrsMeACdcNSTHkM8BQ`,type:"json"}],version:"0.0.0",filename:"hdnode.js",groupTitle:"HDNode"},{type:"",url:"HDNode.verify()",title:"verify()",name:"verify",group:"HDNode",description:"<p>Verify signed 32 byte hash encoded as a buffer.</p>",examples:[{title:"Example usage:",content:`// mainnet xprivs
let xpriv1 = 'xprv9ys4cvcoU8RoqvzxGj886r4Ey3w1WfVNYH8sMnVPVzyQtaPPM6Q8pHm3D9WPWvEupGEgcJ1xLaGaZDcvKfoAurE2AzHRRRup5FuHzDr8n15';
let xpriv2 = 'xprv9ys4cvcoU8RoxqkZ7Fgt33te4LPHgcsKwyoZYVorkzp9uonWxWgP9wiSQhPeBUqVHbdAyov4Yi55RywBkDfZKdJFRqA51Anz6v72zGaMGZp';
// hdnodes from xprivs
let hdnode1 = bchjs.HDNode.fromXPriv(xpriv1);
let hdnode2 = bchjs.HDNode.fromXPriv(xpriv2);
// 32 byte buffer
let buf = Buffer.from(bchjs.Crypto.sha256('EARTH'), 'hex');
// sign
let signature = bchjs.HDNode.sign(hdnode1, buf);
// verify
bchjs.HDNode.verify(hdnode1, buf, signature);
// true
bchjs.HDNode.verify(hdnode2, buf, signature);
// false

// testnet xprivs
let xpriv1 = 'tprv8ggxJ8SG5EdqakzVUeLa9Gr7sqCdEcJPUNDmtdJscNxfmxoXvU36ZguiUWukJVEWEixAUr8pJabJkCt33wzxFQA587gqN51Lxdxx97zAzuG';
let xpriv2 = 'tprv8ggxJ8SG5EdqiM6Dn63QwHScQ7HS5hXqUMxSD1NEbDyPw6VtoUMFZBAohpTMsPz9cYbpHELmA4Zm79NKRvEvFdhWRX2bSmu7V7PiNb364nv';
// hdnodes from xprivs
let hdnode1 = bchjs.HDNode.fromXPriv(xpriv1);
let hdnode2 = bchjs.HDNode.fromXPriv(xpriv2);
// 32 byte buffer
let buf = Buffer.from(bchjs.Crypto.sha256('EARTH'), 'hex');
// sign
let signature = bchjs.ECPair.sign(hdnode1, buf);
// verify
bchjs.HDNode.verify(hdnode1, buf, signature);
// true
bchjs.HDNode.verify(hdnode2, buf, signature);
// false`,type:"json"}],version:"0.0.0",filename:"hdnode.js",groupTitle:"HDNode"},{type:"",url:"Mnemonic.findNearestWord()",title:"findNearestWord()",name:"findNearestWord",group:"Mnemonic",description:"<p>Returns nearest matching word from provided word list.</p>",examples:[{title:"Example usage:",content:`// english
let word = 'ab';
let wordlist = bchjs.Mnemonic.wordLists().english;
bchjs.Mnemonic.findNearestWord(word, wordlist);
// abandon

// french
let word = 'octu';
let wordlist = bchjs.Mnemonic.wordLists().french;
bchjs.Mnemonic.findNearestWord(word, wordlist);
// octupler

// spanish
let word = 'foobaro';
let wordlist = bchjs.Mnemonic.wordLists().spanish;
bchjs.Mnemonic.findNearestWord(word, wordlist);
// forro

// italian
let word = 'nv';
let wordlist = bchjs.Mnemonic.wordLists().italian;
bchjs.Mnemonic.findNearestWord(word, wordlist);
// neve`,type:"json"}],version:"0.0.0",filename:"mnemonic.js",groupTitle:"Mnemonic"},{type:"",url:"Mnemonic.fromEntropy()",title:"fromEntropy()",name:"fromEntropy",group:"Mnemonic",description:"<p>Create mnemonic from entropy.</p>",examples:[{title:"Example usage:",content:`// generate 16 bytes of entropy
let entropy = bchjs.Crypto.randomBytes(16);
//
// turn entropy to 12 word mnemonic
bchjs.Mnemonic.fromEntropy(entropy)
// security question relief cruel nephew jump chest copper axis assist gift correct

// generate 20 bytes of entropy
let entropy = bchjs.Crypto.randomBytes(20);
//
// turn entropy to 15 word mnemonic
bchjs.Mnemonic.fromEntropy(entropy)
// impact hub pattern turkey cruel adult short moment make toe one actress roast yellow hurt

// generate 24 bytes of entropy
let entropy = bchjs.Crypto.randomBytes(24);
//
// turn entropy to 18 word mnemonic
bchjs.Mnemonic.fromEntropy(entropy)
// bid quantum chronic marriage swing affair record amateur enhance heart object mind spoon speak toast piece chef real

// generate 28 bytes of entropy
let entropy = bchjs.Crypto.randomBytes(28);
//
// turn entropy to 21 word mnemonic
bchjs.Mnemonic.fromEntropy(entropy)
// orchard rural giant okay tape pipe luggage clap bring wear ticket slot fiscal seminar crazy robot distance current dizzy swarm barrel

// generate 32 bytes of entropy
let entropy = bchjs.Crypto.randomBytes(32);
//
// turn entropy to 24 word mnemonic
bchjs.Mnemonic.fromEntropy(entropy)
// vibrant solution level obtain cheap damage october giant chalk cushion assist fossil spawn artist rice edit proof hotel process survey gas sausage mouse property

// generate 16 bytes of entropy
let entropy = bchjs.Crypto.randomBytes(16);
//`,type:"json"}],version:"0.0.0",filename:"mnemonic.js",groupTitle:"Mnemonic"},{type:"",url:"Mnemonic.generate()",title:"generate()",name:"generate",group:"Mnemonic",description:"<p>Generate BIP39 mnemonic from entropy.</p>",examples:[{title:"Example usage:",content:`// generate 12 word mnemonic
bchjs.Mnemonic.generate(128);
// boil lonely casino manage habit where total glory muffin name limit mansion

// generate 15 word mnemonic
bchjs.Mnemonic.generate(160);
// steak prevent estate save dance design close noise cheap season among train sleep ketchup gas

// generate 18 word mnemonic
bchjs.Mnemonic.generate(192);
// fever endorse purpose normal fashion desert blood robust prevent clean guard display raise virtual again unit banana rich

// generate 21 word mnemonic
bchjs.Mnemonic.generate(224);
// scan pink shock describe chicken edit budget exit camera morning awesome silk inner pair sea few flock walnut write mountain surface

// generate 24 word mnemonic
bchjs.Mnemonic.generate(256);
// disagree tide elbow citizen jazz cinnamon bridge certain april settle pact film always inmate border inform solution that submit produce cloth balcony upper maid

// generate 12 french word mnemonic
bchjs.Mnemonic.generate(128, bitbox.Mnemonic.wordLists().french);
// annonce ampleur sanglier peser acheter cultiver abroger embellir r\xE9soudre dialogue grappin lanterne

// generate 256 bit korean word mnemonic
bchjs.Mnemonic.generate(256, bitbox.Mnemonic.wordLists().korean)
// \u1100\u1175\u1102\u1173\u11BC \u1103\u1161\u11AB\u110E\u116E \u1100\u116D\u110B\u1172\u11A8 \u1107\u1175\u1102\u1161\u11AB \u1109\u1175\u110C\u1175\u11B8 \u1100\u1173\u11AB\u110B\u1172\u11A8 \u110B\u116E\u11AB\u1103\u1169\u11BC \u110F\u1169\u1106\u1175\u1103\u1175 \u1109\u116E\u11AE\u1100\u1161\u1105\u1161\u11A8 \u1100\u116A\u1106\u1169\u11A8 \u1112\u1161\u11AB\u1103\u1169\u11BC\u110B\u1161\u11AB \u110B\u1172\u110C\u1165\u11A8 \u1109\u1175\u1105\u1175\u110C\u1173 \u1109\u1161\u11B7\u110B\u116F\u11AF \u110B\u1161\u11C1\u1102\u1161\u11AF \u110B\u1172\u1102\u1161\u11AB\u1112\u1175 \u1112\u1174\u11AB\u1109\u1162\u11A8 \u1109\u1161\u1109\u1175\u11AF \u1102\u1169\u11AB\u1106\u116E\u11AB \u110C\u1161\u11BC\u1109\u1161 \u110B\u1165\u1105\u1173\u11AB \u1102\u1169\u11AB\u1106\u116E\u11AB \u110B\u1174\u1102\u1169\u11AB \u110C\u1161\u11BC\u110E\u1161`,type:"json"}],version:"0.0.0",filename:"mnemonic.js",groupTitle:"Mnemonic"},{type:"",url:"Mnemonic.toEntropy()",title:"toEntropy()",name:"toEntropy",group:"Mnemonic",description:"<p>Turn mnemonic to entropy.</p>",examples:[{title:"Example usage:",content:`// turn 12 word mnemonic to entropy
let mnemonic = 'security question relief cruel nephew jump chest copper axis assist gift correct';
bchjs.Mnemonic.toEntropy(mnemonic)
// <Buffer c2 d5 f2 d5 1a 49 44 f1 c9 e1 7f 10 e1 b9 87 18>

// turn 15 word mnemonic to entropy
let mnemonic = 'impact hub pattern turkey cruel adult short moment make toe one actress roast yellow hurt';
bchjs.Mnemonic.toEntropy(mnemonic)
// <Buffer 71 cd d2 85 75 53 48 07 b1 b4 77 86 9c 72 6a 81 6b b1 fe 1b>

// turn 18 word mnemonic to entropy
let mnemonic = 'bid quantum chronic marriage swing affair record amateur enhance heart object mind spoon speak toast piece chef real';
bchjs.Mnemonic.toEntropy(mnemonic)
// <Buffer 16 15 e8 a1 c4 2d c0 08 ac f0 3d 4a 8d 4a 60 46 7d 29 a1 b8 c5 23 27 56>

// turn 21 word mnemonic to entropy
let mnemonic = 'orchard rural giant okay tape pipe luggage clap bring wear ticket slot fiscal seminar crazy robot distance current dizzy swarm barrel';
bchjs.Mnemonic.toEntropy(mnemonic)
// <Buffer 9c 17 b1 86 cc fd dd 4a a1 31 4e 1c 3f 0f 86 e6 05 79 87 0c b5 d9 3f a6 c1 00 ed b1>

// turn 24 word mnemonic to entropy
let mnemonic = 'vibrant solution level obtain cheap damage october giant chalk cushion assist fossil spawn artist rice edit proof hotel process survey gas sausage mouse property';
bchjs.Mnemonic.toEntropy(mnemonic)
// <Buffer f3 79 da 02 cc 42 6e 6e 26 43 0d 25 e6 cc 37 2d fd 0a 1a 2e 4a 33 ac 4d c6 ae 6d 56 01 7f 64 2d>`,type:"json"}],version:"0.0.0",filename:"mnemonic.js",groupTitle:"Mnemonic"},{type:"",url:"Mnemonic.toKeypairs()",title:"toKeypairs()",name:"toKeypairs",group:"Mnemonic",description:"<p>Returns an array of privateKeyWIF/publicAddress pairs. It generates the addresses as the nth external change address of the first account from that mnemonic w/ this derivation path: m/44\u2019/145\u2019/0\u2019/0/n</p>",examples:[{title:"Example usage:",content:`// First create a mnemonic from 32 bytes of random entropy
let entropy = bchjs.Crypto.randomBytes(32);
// <Buffer bd 94 ad 86 be 19 5e 6c 51 b1 aa 52 b3 61 0b f8 9a 5d db 43 ac ee 8a ea 3a 38 6c ac 75 9e b5 42>
let mnemonic = bchjs.Mnemonic.fromEntropy(entropy);
// rural pistol giant label nominee curtain egg crystal famous only drill van place unit attitude oven memory fade mix sun shrug soon steak easily

// Then call toKeypairs and pass in your mnemonic and how many keypairs you'd like
bchjs.Mnemonic.toKeypairs(mnemonic, 5)
// [ { privateKeyWIF: 'KwuSgSuV6m3U1oahRQEhSQ6e4gRE6LZXNGDTETGPGotKQJdH7ADd',
//     address: 'bitcoincash:qqvk7aculs8r6t29pj23de35t43tupks2ua6wmc2hy' },
//   { privateKeyWIF: 'L34pfoBm2swLBX5vAx1ReeYbSnpsvu7DRVaiLW8e9wNEJw5p3mV5',
//     address: 'bitcoincash:qzt8ju6au2075cpzrhzwe5n96ycqnurarur5k92nd5' },
//   { privateKeyWIF: 'L2nCRgDzmTRrQzSssFvVA7xiYHBJyfj62jdDwu1bTjHKVoLGxsqs',
//     address: 'bitcoincash:qpdjwtyvqqaapykxr3pr6cty4gpww30aucam9l0qzn' },
//   { privateKeyWIF: 'KyDLLa4RZKhnBP78Ue6557B55Jmffu1y8mH8p8WKA12knJUjiq4u',
//     address: 'bitcoincash:qq8kee4k4h9fn22xya9p5u203vg69aat3usqdvkdkn' },
//   { privateKeyWIF: 'L5gB66JqhfouEtZG5aRMQ9JaVS2ggkK3YozGfzZegBupaPXqdfaz',
//     address: 'bitcoincash:qphwlpu2wzjxrjts94pn4wh778fwsu2afg2aj5her9' } ]`,type:"json"}],version:"0.0.0",filename:"mnemonic.js",groupTitle:"Mnemonic"},{type:"",url:"Mnemonic.toSeed()",title:"toSeed()",name:"toSeed",group:"Mnemonic",description:"<p>Create root seed from mnemonic. Returns a Promise.</p>",examples:[{title:"Example usage:",content:`await bchjs.Mnemonic.toSeed('enable stem left method one submit coach bid inspire cluster armed bracket')
// <Buffer 0a fa b7 46 8f 0c df 79 0f 0e 44 37 45 0c 33 c3 c8 27 17 42 75 d6 13 02 c3 55 de ef 2e 69 57 e4 f5 dd 55 b6 a8 73 78 6d b8 09 36 75 af 4f 6b 2c 52 63 ... >

await bchjs.Mnemonic.toSeed('vendor talk alone sick balance tissue number armor frequent plug transfer chest', 'password');
// <Buffer 2d a5 46 52 36 a4 1c 90 bf c5 38 c9 78 16 03 26 1f 70 7c 67 44 aa e0 97 fa 96 1b a1 23 16 a0 e2 0c f6 ac b6 09 cc 2f af 9a 99 50 b3 f9 a9 be c9 f4 19 ... >

await bchjs.Mnemonic.toSeed('idea relax weird defense body bronze champion ancient vocal peanut similar dose grit company peasant gate sunset deal library act include penalty annual main', '');
// <Buffer c1 56 36 5b 0f 2a 16 04 dd 6f 53 ad 7d 0a 4c 14 ba 38 f9 81 fb 18 0f df c3 14 6e 6a fc d8 af 2f 1f c4 2c b2 d3 65 8a 31 2e a8 48 59 12 bd f0 f1 8d e4 ... >

await bchjs.Mnemonic.toSeed('bus aware census desk orphan zebra fashion host try muscle pig close jealous slice elegant prison reject ship great program trumpet syrup tray remove', '');
// <Buffer f4 2c e8 e1 88 d1 5a 66 5c 18 c0 cf ae df 09 3c 75 d2 4c 47 9d 52 87 f4 be c0 6b 13 e7 da 04 01 a3 50 36 87 22 1f ee cf c8 57 e8 6e ae bb 17 4b 83 60 ... >

await bchjs.Mnemonic.toSeed('frost deliver coin clutch upon round scene wonder various wise luggage country', 'yayayayay');
// <Buffer 1d 00 9f a3 a8 86 51 a4 04 d5 03 3d eb 6d b1 01 e2 f1 3b c3 c8 6d 1f b9 93 b4 d1 33 dc 84 21 12 2c 9b 52 10 ba d8 96 15 e0 b0 9a 34 33 52 f8 07 c8 c4 ... >`,type:"json"}],version:"0.0.0",filename:"mnemonic.js",groupTitle:"Mnemonic"},{type:"",url:"Mnemonic.validate()",title:"validate()",name:"validate",group:"Mnemonic",description:"<p>Validate mnemonic.</p>",examples:[{title:"Example usage:",content:`bchjs.Mnemonic.validate('ca', bchjs.Mnemonic.wordLists().english)
// ca is not in wordlist, did you mean cabbage?

bchjs.Mnemonic.validate('boil lonely casino manage habit where total glory muffin name limit mansion', bitbox.Mnemonic.wordLists().english)
// Valid mnemonic

bchjs.Mnemonic.validate('boil lonely casino manage habit where total glory muffin name limit mansion boil lonely casino manage habit where total glory muffin name limit mansion', bitbox.Mnemonic.wordLists().english)
// Invalid mnemonic`,type:"json"}],version:"0.0.0",filename:"mnemonic.js",groupTitle:"Mnemonic"},{type:"",url:"Mnemonic.wordLists()",title:"wordLists()",name:"wordLists",group:"Mnemonic",description:"<p>Return mnemonic word lists.</p>",examples:[{title:"Example usage:",content:`bchjs.Mnemonic.wordLists();
// {
//   EN: [],
//   JA: [],
//   chinese_simplified: [],
//   chinese_traditional: [],
//   english: [],
//   french: [],
//   italian: [],
//   japanese: [],
//   korean: [],
//   spanish: []
// }`,type:"json"}],version:"0.0.0",filename:"mnemonic.js",groupTitle:"Mnemonic"},{type:"",url:"PsfSlpIndexer.balance()",title:"balance()",name:"SLP_Balance",group:"PSF_SLP",description:"<p>Return slp balance for a single address.</p>",examples:[{title:"Example usage:",content:`(async () => {
  try {
    let balance = await bchjs.PsfSlpIndexer.balance('bitcoincash:qzmd5vxgh9m22m6fgvm57yd6kjnjl9qnwywsf3583n')
    console.log(balance)
  } catch(error) {
   console.error(error)
  }
})()

 {
   balance: {
     utxos: [
       {
         txid: 'a24a6a4abf06fabd799ecea4f8fac6a9ff21e6a8dd6169a3c2ebc03665329db9',
         vout: 1,
         type: 'token',
         qty: '1800',
         tokenId: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
         address: 'bitcoincash:qrqy3kj7r822ps6628vwqq5k8hyjl6ey3y4eea2m4s'
       }
     ],
     txs: [
       {
         txid: '078b2c48ed1db0d5d5996f2889b8d847a49200d0a781f6aa6752f740f312688f',
         height: 717796
       },
       {
         txid: 'a24a6a4abf06fabd799ecea4f8fac6a9ff21e6a8dd6169a3c2ebc03665329db9',
         height: 717832
       }
     ],
     balances: [
       {
         tokenId: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
         qty: '1800'
       }
     ]
   }
 }`,type:"json"}],version:"0.0.0",filename:"psf-slp-indexer.js",groupTitle:"PSF_SLP"},{type:"",url:"PsfSlpIndexer.tx()",title:"tx()",name:"SLP_Transaction_Data",group:"PSF_SLP",description:"<p>Return slp transaction data.</p>",examples:[{title:"Example usage:",content:`(async () => {
  try {
    let txData = await bchjs.PsfSlpIndexer.tx('a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2')
    console.log(txData)
  } catch(error) {
   console.error(error)
  }
})()

{
  txData: {
    txid: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
    hash: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
    version: 2,
    size: 339,
    locktime: 0,
    vin: [
      {
        txid: '8370db30d94761ab9a11b71ecd22541151bf6125c8c613f0f6fab8ab794565a7',
        vout: 0,
        scriptSig: {
          asm: '304402207e9631c53dfc8a9a793d1916469628c6b7c5780c01c2f676d51ef21b0ba4926f022069feb471ec869a49f8d108d0aaba04e7cd36e60a7500109d86537f55698930d4[ALL|FORKID] 02791b19a39165dbd83403d6df268d44fd621da30581b0b6e5cb15a7101ed58851',
          hex: '47304402207e9631c53dfc8a9a793d1916469628c6b7c5780c01c2f676d51ef21b0ba4926f022069feb471ec869a49f8d108d0aaba04e7cd36e60a7500109d86537f55698930d4412102791b19a39165dbd83403d6df268d44fd621da30581b0b6e5cb15a7101ed58851'
        },
        sequence: 4294967295,
        address: 'bitcoincash:qpvsg9vl9a5mlf37a7n3yce6pktdctn73qwgaqm3wq',
        value: 0.00051303,
        tokenQty: 0,
        tokenQtyStr: '0',
        tokenId: null
      }
    ],
    vout: [
      {
        value: 0,
        n: 0,
        scriptPubKey: {
          asm: 'OP_RETURN 5262419 1 47454e45534953 54524f5554 54726f75742773207465737420746f6b656e 74726f757473626c6f672e636f6d 0 2 2 000000174876e800',
          hex: '6a04534c500001010747454e455349530554524f55541254726f75742773207465737420746f6b656e0e74726f757473626c6f672e636f6d4c000102010208000000174876e800',
          type: 'nulldata'
        },
        tokenQtyStr: '0',
        tokenQty: 0
      }
    ],
    hex: '0200000001a7654579abb8faf6f013c6c82561bf51115422cd1eb7119aab6147d930db7083000000006a47304402207e9631c53dfc8a9a793d1916469628c6b7c5780c01c2f676d51ef21b0ba4926f022069feb471ec869a49f8d108d0aaba04e7cd36e60a7500109d86537f55698930d4412102791b19a39165dbd83403d6df268d44fd621da30581b0b6e5cb15a7101ed58851ffffffff040000000000000000476a04534c500001010747454e455349530554524f55541254726f75742773207465737420746f6b656e0e74726f757473626c6f672e636f6d4c000102010208000000174876e80022020000000000001976a914db4d39ceb7794ffe5d06855f249e1d3a7f1b024088ac22020000000000001976a914db4d39ceb7794ffe5d06855f249e1d3a7f1b024088accec20000000000001976a9145904159f2f69bfa63eefa712633a0d96dc2e7e8888ac00000000',
    blockhash: '0000000000000000009f65225a3e12e23a7ea057c869047e0f36563a1f410267',
    confirmations: 97398,
    time: 1581773131,
    blocktime: 1581773131,
    blockheight: 622414,
    isSlpTx: true,
    tokenTxType: 'GENESIS',
    tokenId: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
    tokenType: 1,
    tokenTicker: 'TROUT',
    tokenName: "Trout's test token",
    tokenDecimals: 2,
    tokenUri: 'troutsblog.com',
    tokenDocHash: '',
    isValidSlp: true
  }
}`,type:"json"}],version:"0.0.0",filename:"psf-slp-indexer.js",groupTitle:"PSF_SLP"},{type:"",url:"PsfSlpIndexer.status()",title:"status()",name:"Status",group:"PSF_SLP",description:"<p>Return status from psf slp indexer.</p>",examples:[{title:"Example usage:",content:`(async () => {
  try {
    let status = await bchjs.PsfSlpIndexer.status()
    console.log(status)
  } catch(error) {
   console.error(error)
  }
})()

 {
   "status": {
     "startBlockHeight": 543376,
     "syncedBlockHeight": 723249,
     "chainBlockHeight": 722679
    }
 }`,type:"json"}],version:"0.0.0",filename:"psf-slp-indexer.js",groupTitle:"PSF_SLP"},{type:"",url:"PsfSlpIndexer.getTokenData()",title:"getTokenData()",name:"Token_Data",group:"PSF_SLP",description:"<p>Get mutable and immutable data if the token contains them.</p>",examples:[{title:"Example usage:",content:`(async () => {
  try {
    let tokenData = await bchjs.PsfSlpIndexer.getTokenData('a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2')
    console.log(tokenData)
  } catch(error) {
   console.error(error)
  }
})()

{
  genesisData: {
    type: 1,
    ticker: 'TROUT',
    name: "Trout's test token",
    tokenId: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
    documentUri: 'troutsblog.com',
    documentHash: '',
    decimals: 2,
    mintBatonIsActive: true,
    tokensInCirculationBN: '100098953386',
    tokensInCirculationStr: '100098953386',
    blockCreated: 622414,
    totalBurned: '1046614',
    totalMinted: '100100000000'
    ]
  },
 immutableData :{
    issuer:"FullStack.cash.",
    website:"https://fullstack.cash/",
    dateCreated:"2022-01-11"
  },
 mutableData :{
   "tokenIcon":"https://gateway.ipfs.io/ipfs/bafybeiehitanirn5gmhqjg44xrmdtomn4n5lu5yjoepsvgpswk5mggaw6i/LP_logo-1.png",
   "about":"Mutable data managed with npm package: https://www.npmjs.com/package/slp-mutable-data"
  }
}`,type:"json"}],version:"0.0.0",filename:"psf-slp-indexer.js",groupTitle:"PSF_SLP"},{type:"",url:"PsfSlpIndexer.getTokenData2()",title:"getTokenData2()",name:"Token_Data",group:"PSF_SLP",description:"<p>Get token icon and other media associated with a token.</p> <p>Get the icon for a token, given it's token ID. This function expects a string input of a token ID property. This function returns an object with a tokenIcon property that contains the URL to the icon.</p> <p>The output object always have these properties:</p> <ul> <li>tokenIcon: A url to the token icon, if it exists.</li> <li>tokenStats: Data about the token from psf-slp-indexer.</li> <li>optimizedTokenIcon: An alternative, potentially more optimal, url to the token icon, if it exists.</li> <li>iconRepoCompatible: true if the token icon is available via token.bch.sx</li> <li>ps002Compatible: true if the token icon is compatible with PS007 specification.</li> </ul>",examples:[{title:"Example usage:",content:`(async () => {
  try {
    let tokenData = await bchjs.PsfSlpIndexer.getTokenData2('a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2')
    console.log(tokenData)
  } catch(error) {
   console.error(error)
  }
})()

{
  tokenStats: {
    type: 1,
    ticker: 'CTAIA006',
    name: 'CTAIA006 - AI Art by Chris Troutner',
    tokenId: '0e4543f820699294ab57e02ee2b1815a8bbc7b17a4333e4a138034e4b2324a61',
    documentUri: 'ipfs://bafybeia5yuq7rg6jmwquako7t277cwrobcunz7cumqrv4wn6bgfvthemku',
    documentHash: '78a00e9db312b8fff4e5c37cf592be83e6bab7f3bd5a54c9545bad5d4f3ee0f5',
    decimals: 0,
    mintBatonIsActive: false,
    tokensInCirculationBN: '1',
    tokensInCirculationStr: '1',
    blockCreated: 757507,
    totalBurned: '0',
    totalMinted: '1'
  },
  mutableData: {
    tokenIcon: 'https://bafybeihiv5jvlhoymmbous3h2akotogj6b7hruhjcj3zq7dsfteimuuttm.ipfs.w3s.link/whale-night-sky-01.png',
    fullSizedUrl: '',
    about: 'This NFT was created using the PSF Token Studio at https://nft-creator.fullstack.cash',
    userData: ''
  },
  immutableData: {
    issuer: 'http://psfoundation.cash',
    website: 'https://nft-creator.fullstack.cash',
    dateCreated: '9/12/2022, 5:17:38 PM',
    userData: '{\\n' +
      '  "title": "CTAIA006 - AI Art by Chris Troutner",\\n' +
      '  "about": "AI generated art. Generated from DALL-E at https://labs.openai.com",\\n' +
      '  "prompt": "whale swimming through a sky full of stars",\\n' +
      '  "algorithm": "DALL-E (stable diffusion)",\\n' +
      '  "set": "1-of-2"\\n' +
      '}'
  },
  tokenIcon: 'https://bafybeihiv5jvlhoymmbous3h2akotogj6b7hruhjcj3zq7dsfteimuuttm.ipfs.w3s.link/whale-night-sky-01.png',
  fullSizedUrl: '',
  optimizedTokenIcon: 'https://p2wdb-gateway-678.fullstack.cash/ipfs/bafybeihiv5jvlhoymmbous3h2akotogj6b7hruhjcj3zq7dsfteimuuttm/whale-night-sky-01.png',
  optimizedFullSizedUrl: '',
  iconRepoCompatible: false,
  ps002Compatible: true
}`,type:"json"}],version:"0.0.0",filename:"psf-slp-indexer.js",groupTitle:"PSF_SLP"},{type:"",url:"PsfSlpIndexer.tokenStats()",title:"tokenStats()",name:"Token_Stats",group:"PSF_SLP",description:"<p>Return list stats for a single slp token. The second input is a Boolean, which determins the the transaction history of the token is included in the returned data. The default is false.</p>",examples:[{title:"Example usage:",content:`(async () => {
  try {
    let tokenStats = await bchjs.PsfSlpIndexer.tokenStats('a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2', true)
    console.log(tokenStats)
  } catch(error) {
   console.error(error)
  }
})()

{
  tokenData: {
    type: 1,
    ticker: 'TROUT',
    name: "Trout's test token",
    tokenId: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
    documentUri: 'troutsblog.com',
    documentHash: '',
    decimals: 2,
    mintBatonIsActive: true,
    tokensInCirculationBN: '100098953386',
    tokensInCirculationStr: '100098953386',
    blockCreated: 622414,
    totalBurned: '1046614',
    totalMinted: '100100000000'
    txs: [
      {
        txid: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
        height: 622414,
        type: 'GENESIS',
        qty: '100000000000'
      }
    ]
  }
}`,type:"json"}],version:"0.0.0",filename:"psf-slp-indexer.js",groupTitle:"PSF_SLP"},{type:"",url:"price.getBchUsd()",title:"getBchUsd()",name:"Price_getBchUsd()",group:"Price",description:"<p>Return current price of BCH in USD. This endpoint gets the USD price of BCH from the Coinex API. The price comes from bch-api, so it has a better chance of working in Tor.</p>",examples:[{title:"Example usage:",content:`(async () => {
 try {
   let current = await bchjs.Price.getBchUsd();
   console.log(current);
 } catch(err) {
  console.error(err)
 }
})()

// 512.81`,type:"json"}],version:"0.0.0",filename:"price.js",groupTitle:"Price"},{type:"",url:"price.getBchaUsd()",title:"getBchaUsd()",name:"Price_getBchaUsd()",group:"Price",description:"<p>Return current price of BCHA in USD. This endpoint gets the USD price of XEC from the Coinex API. The price denominated in BCHA comes from bch-api, so it has a better chance of working in Tor.</p>",examples:[{title:"Example usage:",content:`(async () => {
 try {
   let current = await bchjs.Price.getBchaUsd();
   console.log(current);
 } catch(err) {
  console.error(err)
 }
})()

// 212.34`,type:"json"}],version:"0.0.0",filename:"price.js",groupTitle:"Price"},{type:"",url:"price.getUsd()",title:"getUsd()",name:"Price_getUsd()",group:"Price",description:"<p>Return current price of BCH in USD. This endpoint gets the USD price of BCH from the Coinbase API. The price comes from bch-api, so it has a better chance of working in Tor.</p>",examples:[{title:"Example usage:",content:`(async () => {
 try {
   let current = await bchjs.Price.getUsd();
   console.log(current);
 } catch(err) {
  console.error(err)
 }
})()

// 266.81`,type:"json"}],version:"0.0.0",filename:"price.js",groupTitle:"Price"},{type:"",url:"price.getXecUsd()",title:"getXecUsd()",name:"Price_getXecUsd()",group:"Price",description:"<p>Return current price of XEC in USD. This endpoint gets the USD price of XEC from the Coinex API. The price comes from bch-api, so it has a better chance of working in Tor.</p>",examples:[{title:"Example usage:",content:`(async () => {
 try {
   let current = await bchjs.Price.getXecUsd();
   console.log(current);
 } catch(err) {
  console.error(err)
 }
})()

// 0.00021234`,type:"json"}],version:"0.0.0",filename:"price.js",groupTitle:"Price"},{type:"",url:"price.rates()",title:"rates()",name:"Price_rates()",group:"Price",description:"<p>Return current price of BCH in several different currencies. This endpoint gets the price of BCH from the Coinbase API in many different currencies. The price comes from bch-api, so it has a better chance of working in Tor.</p>",examples:[{title:"Example usage:",content:`(async () => {
 try {
   let current = await bchjs.Price.rates();
   console.log(current);
 } catch(err) {
  console.error(err)
 }
})()

{
  AED: "915.049218",
  AFN: "19144.48874646",
  ALGO: "826.6633482661356600405",
  ...
  ZRX: "644.844402797695193656",
  ZWL: "80215.03"
}`,type:"json"}],version:"0.0.0",filename:"price.js",groupTitle:"Price"},{type:"",url:"RawTransactions.decodeRawTransaction()",title:"decodeRawTransaction()",name:"decodeRawTransaction",group:"RawTransactions",description:"<p>Return an Array of JSON objects representing the serialized, hex-encoded transactions.</p>",examples:[{title:"Example usage:",content:`(async () => {
try {
let decodeRawTransaction = await bchjs.RawTransactions.decodeRawTransaction('01000000013ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a000000006a4730440220540986d1c58d6e76f8f05501c520c38ce55393d0ed7ed3c3a82c69af04221232022058ea43ed6c05fec0eccce749a63332ed4525460105346f11108b9c26df93cd72012103083dfc5a0254613941ddc91af39ff90cd711cdcde03a87b144b883b524660c39ffffffff01807c814a000000001976a914d7e7c4e0b70eaa67ceff9d2823d1bbb9f6df9a5188ac00000000');
console.log(decodeRawTransaction);
} catch(error) {
console.error(error)
}
})()

// { txid: 'd86c34adaeae19171fd98fe0ffd89bfb92a1e6f0339f5e4f18d837715fd25758',
//   hash:
//    'd86c34adaeae19171fd98fe0ffd89bfb92a1e6f0339f5e4f18d837715fd25758',
//   size: 191,
//   version: 1,
//   locktime: 0,
//   vin:
//    [ { txid:
//         '4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b',
//        vout: 0,
//        scriptSig: [Object],
//        sequence: 4294967295 } ],
//   vout: [ { value: 12.5, n: 0, scriptPubKey: [Object] } ] }

(async () => {
 try {
   let decodeRawTransaction = await bchjs.RawTransactions.decodeRawTransaction([
     '01000000013ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a000000006a4730440220540986d1c58d6e76f8f05501c520c38ce55393d0ed7ed3c3a82c69af04221232022058ea43ed6c05fec0eccce749a63332ed4525460105346f11108b9c26df93cd72012103083dfc5a0254613941ddc91af39ff90cd711cdcde03a87b144b883b524660c39ffffffff01807c814a000000001976a914d7e7c4e0b70eaa67ceff9d2823d1bbb9f6df9a5188ac00000000',
     '01000000013ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a000000006a4730440220540986d1c58d6e76f8f05501c520c38ce55393d0ed7ed3c3a82c69af04221232022058ea43ed6c05fec0eccce749a63332ed4525460105346f11108b9c26df93cd72012103083dfc5a0254613941ddc91af39ff90cd711cdcde03a87b144b883b524660c39ffffffff01807c814a000000001976a914d7e7c4e0b70eaa67ceff9d2823d1bbb9f6df9a5188ac00000000'
   ]);
   console.log(decodeRawTransaction);
 } catch(error) {
  console.error(error)
 }
})()

// [ { txid:
//    'd86c34adaeae19171fd98fe0ffd89bfb92a1e6f0339f5e4f18d837715fd25758',
//   hash:
//    'd86c34adaeae19171fd98fe0ffd89bfb92a1e6f0339f5e4f18d837715fd25758',
//   size: 191,
//   version: 1,
//   locktime: 0,
//   vin: [ [Object] ],
//   vout: [ [Object] ] },
// { txid:
//    'd86c34adaeae19171fd98fe0ffd89bfb92a1e6f0339f5e4f18d837715fd25758',
//   hash:
//    'd86c34adaeae19171fd98fe0ffd89bfb92a1e6f0339f5e4f18d837715fd25758',
//   size: 191,
//   version: 1,
//   locktime: 0,
//   vin: [ [Object] ],
//   vout: [ [Object] ] } ]`,type:"json"}],version:"0.0.0",filename:"raw-transactions.js",groupTitle:"RawTransactions"},{type:"",url:"RawTransactions.decodeScript()",title:"decodeScript()",name:"decodeScript",group:"RawTransactions",description:"<p>Decode hex-encoded scripts.</p>",examples:[{title:"Example usage:",content:`(async () => {
try {
 let decodeScript = await bchjs.RawTransactions.decodeScript('4830450221009a51e00ec3524a7389592bc27bea4af5104a59510f5f0cfafa64bbd5c164ca2e02206c2a8bbb47eabdeed52f17d7df668d521600286406930426e3a9415fe10ed592012102e6e1423f7abde8b70bca3e78a7d030e5efabd3eb35c19302542b5fe7879c1a16');
 console.log(decodeScript);
} catch(error) {
 console.error(error)
}
})()

// { asm: '30450221009a51e00ec3524a7389592bc27bea4af5104a59510f5f0cfafa64bbd5c164ca2e02206c2a8bbb47eabdeed52f17d7df668d521600286406930426e3a9415fe10ed59201 02e6e1423f7abde8b70bca3e78a7d030e5efabd3eb35c19302542b5fe7879c1a16', type: 'nonstandard', p2sh: 'bitcoincash:pqwndulzwft8dlmqrteqyc9hf823xr3lcc7ypt74ts' }


(async () => {
try {
 let decodeScript = await bchjs.RawTransactions.decodeScript(['4830450221009a51e00ec3524a7389592bc27bea4af5104a59510f5f0cfafa64bbd5c164ca2e02206c2a8bbb47eabdeed52f17d7df668d521600286406930426e3a9415fe10ed592012102e6e1423f7abde8b70bca3e78a7d030e5efabd3eb35c19302542b5fe7879c1a16']);
 console.log(decodeScript);
} catch(error) {
console.error(error)
}
})()

// [{ asm: '30450221009a51e00ec3524a7389592bc27bea4af5104a59510f5f0cfafa64bbd5c164ca2e02206c2a8bbb47eabdeed52f17d7df668d521600286406930426e3a9415fe10ed59201 02e6e1423f7abde8b70bca3e78a7d030e5efabd3eb35c19302542b5fe7879c1a16',
// type: 'nonstandard',
// p2sh: 'bitcoincash:pqwndulzwft8dlmqrteqyc9hf823xr3lcc7ypt74ts' }]`,type:"json"}],version:"0.0.0",filename:"raw-transactions.js",groupTitle:"RawTransactions"},{type:"",url:"RawTransactions.getRawTransaction()",title:"getRawTransaction()",name:"getRawTransaction",group:"RawTransactions",description:"<p>Return the raw transaction data. If verbose is 'true', returns an Object with information about 'txid'. If verbose is 'false' or omitted, returns a string that is serialized, hex-encoded data for 'txid'.</p>",examples:[{title:"Example usage:",content:`(async () => {
try {
 let getRawTransaction = await bchjs.RawTransactions.getRawTransaction("0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098");
 console.log(getRawTransaction);
} catch(error) {
console.error(error)
}
})()

//  01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0704ffff001d0104ffffffff0100f2052a0100000043410496b538e853519c726a2c91e61ec11600ae1390813a627c66fb8be7947be63c52da7589379515d4e0a604f8141781e62294721166bf621e73a82cbf2342c858eeac00000000

(async () => {
try {
 let getRawTransaction = await bchjs.RawTransactions.getRawTransaction([
   "0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098",
   "b25d24fbb42d84812ed2cb55797f10fdec41afc7906ab563d1ec8c8676a2037f"
 ], true);
 console.log(getRawTransaction);
} catch(error) {
console.error(error)
}
})()

// [ { hex:
//  '01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0704ffff001d0104ffffffff0100f2052a0100000043410496b538e853519c726a2c91e61ec11600ae1390813a627c66fb8be7947be63c52da7589379515d4e0a604f8141781e62294721166bf621e73a82cbf2342c858eeac00000000',
//   txid:
//    '0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098',
//   hash:
//    '0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098',
//   size: 134,
//   version: 1,
//   locktime: 0,
//   vin: [ [Object] ],
//   vout: [ [Object] ],
//   blockhash:
//    '00000000839a8e6886ab5951d76f411475428afc90947ee320161bbf18eb6048',
//   confirmations: 581882,
//   time: 1231469665,
//   blocktime: 1231469665 },
// { hex:
//    '01000000010f3cb469bc82f931ee77d80b3dd495d02f9ed7cdc455cea3e7baa4bdeea6a78d000000006a47304402205ce3e1dfe4b5207818ce27035bc7cc03a5631f806d351535b32ce77c8d136aed02204e66e1fa4c2e12feab0d41a5593aff9629cdbc6ccb6126bc3d1a20404be7760c412103d44946d17e00179bbfc3b723aedc1831d8604e6a04bbd91170f1d894d04657bbffffffff02e6ec8500000000001976a914b5befddad83d9180fd4082c5528cf5a779b0fa6688acdf220000000000001976a9142c21a1be4239eeed678a456627a08d5f813d5c9288ac00000000',
//   txid:
//    'b25d24fbb42d84812ed2cb55797f10fdec41afc7906ab563d1ec8c8676a2037f',
//   hash:
//    'b25d24fbb42d84812ed2cb55797f10fdec41afc7906ab563d1ec8c8676a2037f',
//   size: 225,
//   version: 1,
//   locktime: 0,
//   vin: [ [Object] ],
//   vout: [ [Object], [Object] ],
//   blockhash:
//    '000000000000000003a09a7d68a0d62fd0ab51c368372e46bac84277e2df47e2',
//   confirmations: 16151,
//   time: 1547752564,
//   blocktime: 1547752564 } ]`,type:"json"}],version:"0.0.0",filename:"raw-transactions.js",groupTitle:"RawTransactions"},{type:"",url:"RawTransactions.getTxData()",title:"getTxData()",name:"getTxData",group:"RawTransactions",description:"<p>Returns an object of transaction data, including addresses for input UTXOs.</p> <p>This function is equivalent to running <code>getRawTransaction (txid, true)</code>, execept the <code>vin</code> array will be populated with an <code>address</code> property that contains the <code>bitcoincash:</code> address of the sender for each input.</p> <p>This function will only work with a single txid. It does not yet support an array of TXIDs.</p>",examples:[{title:"Example usage:",content:`(async () => {
try {
 let txData = await bchjs.RawTransactions.getTxData("0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098");
 console.log(txData);
} catch(error) {
console.error(error)
}
})()`,type:"json"}],version:"0.0.0",filename:"raw-transactions.js",groupTitle:"RawTransactions"},{type:"",url:"RawTransactions.sendRawTransaction()",title:"sendRawTransaction()",name:"sendRawTransaction",group:"RawTransactions",description:"<p>Submits raw transaction (serialized, hex-encoded) to local node and network. Also see createrawtransaction and signrawtransaction calls.</p> <p>For bulk uploads, transactions must use different UTXOs.</p>",examples:[{title:"Example usage:",content:`// single tx
(async () => {
try {
 let sendRawTransaction = await bchjs.RawTransactions.sendRawTransaction("01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0704ffff001d0104ffffffff0100f2052a0100000043410496b538e853519c726a2c91e61ec11600ae1390813a627c66fb8be7947be63c52da7589379515d4e0a604f8141781e62294721166bf621e73a82cbf2342c858eeac00000000");
 console.log(sendRawTransaction);
} catch(error) {
 console.error(error)
}
})()
// 0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098

// single tx as array
(async () => {
try {
 let sendRawTransaction = await bchjs.RawTransactions.sendRawTransaction(["01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0704ffff001d0104ffffffff0100f2052a0100000043410496b538e853519c726a2c91e61ec11600ae1390813a627c66fb8be7947be63c52da7589379515d4e0a604f8141781e62294721166bf621e73a82cbf2342c858eeac00000000"]);
 console.log(sendRawTransaction);
} catch(error) {
 console.error(error)
}
})()
// ['0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098']`,type:"json"}],version:"0.0.0",filename:"raw-transactions.js",groupTitle:"RawTransactions"},{type:"",url:"SLP.NFT1.generateNFTChildGenesisOpReturn()",title:"generateNFTChildGenesisOpReturn()",name:"generateNFTChildGenesisOpReturn",group:"SLP_NFT1",description:"<p>Generate the OP_RETURN value needed to create an SLP NFT Child token. It's assumed all elements in the tokenUtxos array belong to the same token.</p> <p>Returns a Buffer representing a transaction output, ready to be added to the Transaction Builder.</p>",examples:[{title:"Example usage:",content:`
 const configObj = {
   name: "NFT Child",
   ticker: "NFTC",
   documentUrl: "https://FullStack.cash",
 }

 const result = await bchjs.SLP.NFT1.generateNFTChildGenesisOpReturn(
   configObj
 )

...
// Add OP_RETURN as first output.
transactionBuilder.addOutput(slpData, 0);

// See additional code here:
// https://github.com/Permissionless-Software-Foundation/bch-js-examples/tree/master/applications/slp/nft`,type:"json"}],version:"0.0.0",filename:"slp/nft1.js",groupTitle:"SLP_NFT1"},{type:"",url:"SLP.NFT1.generateNFTChildSendOpReturn()",title:"generateNFTChildSendOpReturn()",name:"generateNFTChildSendOpReturn",group:"SLP_NFT1",description:"<p>Generate the OP_RETURN value needed to send an SLP NFT Child token to another address. It's assumed all elements in the tokenUtxos array belong to the same token.</p> <p>Returns a Buffer representing a transaction output, ready to be added to the Transaction Builder.</p>",examples:[{title:"Example usage:",content:`
const addr = "bitcoincash:qq6xz6wwcy78uh79vgjvfyahj4arq269w5an8pcjak"
const utxos = await bchjs.Blockbook.utxos(addr)

// Identify the SLP token UTXOs.
let tokenUtxos = await bchjs.SLP.Utils.tokenUtxoDetails(utxos);

// Filter out the token UTXOs that match the user-provided token ID.
tokenUtxos = tokenUtxos.filter((utxo, index) => {
  if (
    utxo && // UTXO is associated with a token.
    utxo.tokenId === TOKENID && // UTXO matches the token ID.
    utxo.tokenType === "token" && // UTXO is not a minting baton.
    utxo.tokenType === 65 // UTXO is for an NFT Child
  )
  return true;
});

// Generate the SEND OP_RETURN
const slpData = bchjs.SLP.NFT1.generateNFTChildSendOpReturn(
  tokenUtxos,
  TOKENQTY
);

...
// Add OP_RETURN as first output.
transactionBuilder.addOutput(slpData, 0);

// See additional code here:
// https://github.com/Permissionless-Software-Foundation/bch-js-examples/tree/master/applications/slp/nft`,type:"json"}],version:"0.0.0",filename:"slp/nft1.js",groupTitle:"SLP_NFT1"},{type:"",url:"SLP.NFT1.generateNFTGroupSendOpReturn()",title:"generateNFTGroupSendOpReturn()",name:"generateNFTGroupSendOpReturn",group:"SLP_NFT1",description:"<p>Generate the OP_RETURN value needed to send an SLP NFT Group token to another address. It's assumed all elements in the tokenUtxos array belong to the same token.</p> <p>Returns a Buffer representing a transaction output, ready to be added to the Transaction Builder.</p>",examples:[{title:"Example usage:",content:`
const addr = "bitcoincash:qq6xz6wwcy78uh79vgjvfyahj4arq269w5an8pcjak"
const utxos = await bchjs.Blockbook.utxos(addr)

// Identify the SLP token UTXOs.
let tokenUtxos = await bchjs.SLP.Utils.tokenUtxoDetails(utxos);

// Filter out the token UTXOs that match the user-provided token ID.
tokenUtxos = tokenUtxos.filter((utxo, index) => {
  if (
    utxo && // UTXO is associated with a token.
    utxo.tokenId === TOKENID && // UTXO matches the token ID.
    utxo.tokenType === "token" && // UTXO is not a minting baton.
    utxo.tokenType === 129 // UTXO is for an NFT Group
  )
  return true;
});

// Generate the SEND OP_RETURN
const slpData = bchjs.SLP.NFT1.generateNFTGroupSendOpReturn(
  tokenUtxos,
  TOKENQTY
);

...
// Add OP_RETURN as first output.
transactionBuilder.addOutput(slpData, 0);

// See additional code here:
// https://github.com/Permissionless-Software-Foundation/bch-js-examples/tree/master/applications/slp/nft`,type:"json"}],version:"0.0.0",filename:"slp/nft1.js",groupTitle:"SLP_NFT1"},{type:"",url:"SLP.NFT1.mintNFTGroupOpReturn()",title:"mintNFTGroupOpReturn()",name:"mintNFTGroupOpReturn",group:"SLP_NFT1",description:"<p>Generate the OP_RETURN value needed to create an SLP Mint transaction for an NFT Group token. It's assumed all elements in the tokenUtxos array belong to the same token.</p> <p>Returns a Buffer representing a transaction output, ready to be added to the Transaction Builder.</p>",examples:[{title:"Example usage:",content:`
const addr = "bitcoincash:qq6xz6wwcy78uh79vgjvfyahj4arq269w5an8pcjak"
const utxos = await bchjs.Blockbook.utxos(addr)

// Identify the SLP token UTXOs.
let tokenUtxos = await bchjs.SLP.Utils.tokenUtxoDetails(utxos);

// Filter out the minting baton.
tokenUtxos = tokenUtxos.filter((utxo, index) => {
  if (
    utxo && // UTXO is associated with a token.
    utxo.tokenId === TOKENID && // UTXO matches the token ID.
    utxo.utxoType === "minting-baton" && // UTXO is not a minting baton.
    utxo.tokenType === 129 // UTXO is for NFT Group
  )
  return true;
});

// Generate the SLP OP_RETURN
const slpData = bchjs.SLP.NFT1.mintNFTGroupOpReturn(
  tokenUtxos,
  1 // Mint 1 new token.
);

...
// Add OP_RETURN as first output.
transactionBuilder.addOutput(slpData, 0);

// See additional code here:
// https://github.com/Permissionless-Software-Foundation/bch-js-examples/tree/master/applications/slp/nft`,type:"json"}],version:"0.0.0",filename:"slp/nft1.js",groupTitle:"SLP_NFT1"},{type:"",url:"SLP.NFT1.newNFTGroupOpReturn()",title:"newNFTGroupOpReturn()",name:"newNFTGroupOpReturn",group:"SLP_NFT1",description:"<p>Generate the OP_RETURN value needed to create an SLP NFT Group token. It's assumed all elements in the tokenUtxos array belong to the same token.</p> <p>Returns a Buffer representing a transaction output, ready to be added to the Transaction Builder.</p>",examples:[{title:"Example usage:",content:`
 const configObj = {
   name: "SLP Test Token",
   ticker: "SLPTEST",
   documentUrl: "https://FullStack.cash",
   initialQty: 1
 }

 const result = await bchjs.SLP.NFT1.newNFTGroupOpReturn(
   configObj
 )

...
// Add OP_RETURN as first output.
transactionBuilder.addOutput(slpData, 0);

// See additional code here:
// https://github.com/Permissionless-Software-Foundation/bch-js-examples/tree/master/applications/slp/nft`,type:"json"}],version:"0.0.0",filename:"slp/nft1.js",groupTitle:"SLP_NFT1"},{type:"",url:"SLP.TokenType1.generateBurnOpReturn()",title:"generateBurnOpReturn()",name:"generateBurnOpReturn",group:"SLP_TokenType1",description:"<p>Generate the OP_RETURN value needed to create a SLP Send transaction that burns tokens. This is a slight variation of generateSendOpReturn(). It generates a SLP SEND transaction designed to burn a select quantity of tokens.</p> <p>It's assumed all elements in the tokenUtxos array belong to the same token.</p> <p>Returns a Buffer representing a transaction output, ready to be added to the Transaction Builder.</p>",examples:[{title:"Example usage:",content:`
const addr = "bitcoincash:qq6xz6wwcy78uh79vgjvfyahj4arq269w5an8pcjak"
const utxos = await bchjs.Blockbook.utxos(addr)

// Identify the SLP token UTXOs.
let tokenUtxos = await bchjs.SLP.Utils.tokenUtxoDetails(utxos);

// Filter out the token UTXOs that match the user-provided token ID.
tokenUtxos = tokenUtxos.filter((utxo, index) => {
  if (
    utxo && // UTXO is associated with a token.
    utxo.tokenId === TOKENID && // UTXO matches the token ID.
    utxo.tokenType === "token" // UTXO is not a minting baton.
  )
  return true;
});

// Generate the SEND OP_RETURN
const slpData = bchjs.SLP.TokenType1.generateBurnOpReturn(
  tokenUtxos,
  10 // Burn 10 tokens
);

...
// Add OP_RETURN as first output.
transactionBuilder.addOutput(slpData, 0);

// See additional code here:
// https://github.com/Permissionless-Software-Foundation/bch-js-examples/blob/master/applications/slp/burn-tokens/burn-tokens.js`,type:"json"}],version:"0.0.0",filename:"slp/tokentype1.js",groupTitle:"SLP_TokenType1"},{type:"",url:"SLP.TokenType1.generateGenesisOpReturn()",title:"generateGenesisOpReturn()",name:"generateGenesisOpReturn",group:"SLP_TokenType1",description:"<p>Generate the OP_RETURN value needed to create a new SLP token class.</p> <p>Expects a config object as input, see the example for properties.:</p> <p>Returns a Buffer representing a transaction output, ready to be added to the Transaction Builder.</p>",examples:[{title:"Example usage:",content:`
 const configObj = {
   name: "SLP Test Token",
   ticker: "SLPTEST",
   documentUrl: "https://FullStack.cash",
   documentHash: "",
   decimals: 8,
   initialQty: 10
 }

 const result = await bchjs.SLP.TokenType1.generateGenesisOpReturn(
   configObj
 )

...
// Add OP_RETURN as first output.
transactionBuilder.addOutput(slpData, 0);

// See additional code here:
// https://github.com/Permissionless-Software-Foundation/bch-js-examples/blob/master/applications/slp/create-token/create-token.js`,type:"json"}],version:"0.0.0",filename:"slp/tokentype1.js",groupTitle:"SLP_TokenType1"},{type:"",url:"SLP.TokenType1.generateMintOpReturn()",title:"generateMintOpReturn()",name:"generateMintOpReturn",group:"SLP_TokenType1",description:"<p>Generate the OP_RETURN value needed to create an SLP Mint transaction. It's assumed all elements in the tokenUtxos array belong to the same token.</p> <p>Returns a Buffer representing a transaction output, ready to be added to the Transaction Builder.</p>",examples:[{title:"Example usage:",content:`
const addr = "bitcoincash:qq6xz6wwcy78uh79vgjvfyahj4arq269w5an8pcjak"
const utxos = await bchjs.Blockbook.utxos(addr)

// Identify the SLP token UTXOs.
let tokenUtxos = await bchjs.SLP.Utils.tokenUtxoDetails(utxos);

// Filter out the minting baton.
tokenUtxos = tokenUtxos.filter((utxo, index) => {
  if (
    utxo && // UTXO is associated with a token.
    utxo.tokenId === TOKENID && // UTXO matches the token ID.
    utxo.utxoType === "minting-baton" // UTXO is not a minting baton.
  )
  return true;
});

// Generate the SLP OP_RETURN
const slpData = bchjs.SLP.TokenType1.generateMintOpReturn(
  tokenUtxos,
  100 // Mint 100 new tokens.
);

...
// Add OP_RETURN as first output.
transactionBuilder.addOutput(slpData, 0);

// See additional code here:
// https://github.com/Permissionless-Software-Foundation/bch-js-examples/blob/master/applications/slp/mint-token/mint-token.js`,type:"json"}],version:"0.0.0",filename:"slp/tokentype1.js",groupTitle:"SLP_TokenType1"},{type:"",url:"SLP.TokenType1.generateSendOpReturn()",title:"generateSendOpReturn()",name:"generateSendOpReturn",group:"SLP_TokenType1",description:"<p>Generate the OP_RETURN value needed to create an SLP Send transaction. It's assumed all elements in the tokenUtxos array belong to the same token.</p> <p>Returns a Buffer representing a transaction output, ready to be added to the Transaction Builder.</p>",examples:[{title:"Example usage:",content:`
const addr = "bitcoincash:qq6xz6wwcy78uh79vgjvfyahj4arq269w5an8pcjak"
const utxos = await bchjs.Blockbook.utxos(addr)

// Identify the SLP token UTXOs.
let tokenUtxos = await bchjs.SLP.Utils.tokenUtxoDetails(utxos);

// Filter out the token UTXOs that match the user-provided token ID.
tokenUtxos = tokenUtxos.filter((utxo, index) => {
  if (
    utxo && // UTXO is associated with a token.
    utxo.tokenId === TOKENID && // UTXO matches the token ID.
    utxo.tokenType === "token" // UTXO is not a minting baton.
  )
  return true;
});

// Generate the SEND OP_RETURN
const slpData = bchjs.SLP.TokenType1.generateSendOpReturn(
  tokenUtxos,
  TOKENQTY
);

...
// Add OP_RETURN as first output.
transactionBuilder.addOutput(slpData, 0);

// See additional code here:
// https://github.com/Permissionless-Software-Foundation/bch-js-examples/blob/master/applications/slp/send-token/send-token.js`,type:"json"}],version:"0.0.0",filename:"slp/tokentype1.js",groupTitle:"SLP_TokenType1"},{type:"",url:"SLP.TokenType1.getHexOpReturn()",title:"getHexOpReturn()",name:"getHexOpReturn",group:"SLP_TokenType1",description:"<p>Get hex representation of an SLP OP_RETURN This command returns a hex encoded OP_RETURN for SLP Send (Token Type 1) transactions. Rather than computing it directly, it calls bch-api to do the heavy lifting. This is easier and lighter weight for web apps.</p>",examples:[{title:"Example usage:",content:`
const tokenUtxos = [{
 tokenId: "0a321bff9761f28e06a268b14711274bb77617410a16807bd0437ef234a072b1",
 decimals: 0,
 tokenQty: 2
}]

const sendQty = 1.5

const result = await bchjs.SLP.TokenType1.getHexOpReturn(tokenUtxos, sendQty)

// result:
{
  "script": "6a04534c500001010453454e44200a321bff9761f28e06a268b14711274bb77617410a16807bd0437ef234a072b1080000000000000001080000000000000000",
  "outputs": 2
}`,type:"json"}],version:"0.0.0",filename:"slp/tokentype1.js",groupTitle:"SLP_TokenType1"},{type:"",url:"SLP.Utils.decodeOpReturn()",title:"decodeOpReturn()",name:"decodeOpReturn",group:"SLP_Utils",description:"<p>Retrieves transactions data from a txid and decodes the SLP OP_RETURN data.</p> <p>Throws an error if given a non-SLP txid.</p> <p>If optional associative array parameter cache is used, will cache and reuse responses for the same input.</p> <p>A third optional input, <code>usrObj</code>, is used by bch-api for managing rate limits. It can be safely ignored when writing apps using this call.</p>",examples:[{title:"Example usage:",content:`
(async () => {
try {
 const txid =
  "266844d53e46bbd7dd37134688dffea6e54d944edff27a0add63dd0908839bc1"

 const data = await bchjs.SLP.Utils.decodeOpReturn(txid)

 console.log(\`Decoded OP_RETURN data: \${JSON.stringify(data,null,2)}\`)
} catch (error) {
 console.error(error)
}
})()

// returns
{
 "tokenType": 1,
 "txType": "SEND",
 "tokenId": "497291b8a1dfe69c8daea50677a3d31a5ef0e9484d8bebb610dac64bbc202fb7"
 "amounts": [
   "100000000",
   "99883300000000"
 ]
}`,type:"json"}],version:"0.0.0",filename:"slp/utils.js",groupTitle:"SLP_Utils"},{type:"",url:"SLP.Address.detectAddressFormat()",title:"detectAddressFormat()",name:"detectAddressFormat",group:"SLP",description:"<p>Detect address format.</p>",examples:[{title:"Example usage:",content:`// mainnet cashaddr
bchjs.SLP.Address.detectAddressFormat('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// cashaddr

// mainnet cashaddr w/ no prefix
bchjs.SLP.Address.detectAddressFormat('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// cashaddr

// mainnet slpaddr
bchjs.SLP.Address.detectAddressFormat('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
// slpaddr

// mainnet slpaddr w/ no prefix
bchjs.SLP.Address.detectAddressFormat('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
// slpaddr

// mainnet legacy
bchjs.SLP.Address.detectAddressFormat('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74')
// legacy

// cashaddr testnet
bchjs.SLP.Address.detectAddressFormat('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// cashaddr

// cashaddr testnet w/ no prefix
bchjs.SLP.Address.detectAddressFormat('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// cashaddr

// slpaddr testnet
bchjs.SLP.Address.detectAddressFormat('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// slpaddr

// slpaddr testnet w/ no prefix
bchjs.SLP.Address.detectAddressFormat('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// slpaddr

// legacy testnet
bchjs.SLP.Address.detectAddressFormat('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// legacy`,type:"json"}],version:"0.0.0",filename:"slp/address.js",groupTitle:"SLP"},{type:"",url:"SLP.Address.detectAddressNetwork()",title:"detectAddressNetwork()",name:"detectAddressNetwork",group:"SLP",description:"<p>Detect address network.</p>",examples:[{title:"Example usage:",content:`// mainnet cashaddr
bchjs.SLP.Address.detectAddressNetwork('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// mainnet

// mainnet cashaddr w/ no prefix
bchjs.SLP.Address.detectAddressNetwork('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// mainnet

// mainnet slpaddr
bchjs.SLP.Address.detectAddressNetwork('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
// mainnet

// mainnet slpaddr w/ no prefix
bchjs.SLP.Address.detectAddressNetwork('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
// mainnet

// mainnet legacy
bchjs.SLP.Address.detectAddressNetwork('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74')
// mainnet

// cashaddr testnet
bchjs.SLP.Address.detectAddressNetwork('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// testnet

// cashaddr testnet w/ no prefix
bchjs.SLP.Address.detectAddressNetwork('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// testnet

// slpaddr testnet
bchjs.SLP.Address.detectAddressNetwork('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// testnet

// slpaddr testnet w/ no prefix
bchjs.SLP.Address.detectAddressNetwork('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// testnet

// legacy testnet
bchjs.SLP.Address.detectAddressNetwork('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// testnet`,type:"json"}],version:"0.0.0",filename:"slp/address.js",groupTitle:"SLP"},{type:"",url:"SLP.Address.detectAddressType()",title:"detectAddressType()",name:"detectAddressType",group:"SLP",description:"<p>Detect address type.</p>",examples:[{title:"Example usage:",content:`// mainet cashaddr
bchjs.SLP.Address.detectAddressType('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s');
// p2pkh

// mainet cashaddr w/ no prefix
bchjs.SLP.Address.detectAddressType('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s');
// p2pkh

// mainet slpaddr
bchjs.SLP.Address.detectAddressType('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w');
// p2pkh

// mainet slpaddr w/ no prefix
bchjs.SLP.Address.detectAddressType('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w');
// p2pkh

// mainet legacy
bchjs.SLP.Address.detectAddressType('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74');
// p2pkh

// cashaddr testnet
bchjs.SLP.Address.detectAddressType('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy');
// p2pkh

// cashaddr testnet w/ no prefix
bchjs.SLP.Address.detectAddressType('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy');
// p2pkh

// slpaddr testnet
bchjs.SLP.Address.detectAddressType('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse');
// p2pkh

// slpaddr testnet w/ no prefix
bchjs.SLP.Address.detectAddressType('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse');
// p2pkh

// legacy testnet
bchjs.SLP.Address.detectAddressType('mqc1tmwY2368LLGktnePzEyPAsgADxbksi');
// p2pkh`,type:"json"}],version:"0.0.0",filename:"slp/address.js",groupTitle:"SLP"},{type:"",url:"SLP.Address.isMainnetAddress()",title:"isMainnetAddress()",name:"isMainnetAddress",group:"SLP",description:"<p>Detect if mainnet address.</p>",examples:[{title:"Example usage:",content:`
// mainnet cashaddr
bchjs.SLP.Address.isMainnetAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// true

// mainnet cashaddr w/ no prefix
bchjs.SLP.Address.isMainnetAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// true

// mainnet slpaddr
bchjs.SLP.Address.isMainnetAddress('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
// true

// mainnet slpaddr w/ no prefix
bchjs.SLP.Address.isMainnetAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
// true

// mainnet legacy
bchjs.SLP.Address.isMainnetAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
// true

// testnet cashaddr
bchjs.SLP.Address.isMainnetAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// false

// testnet w/ no cashaddr prefix
bchjs.SLP.Address.isMainnetAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// false

// testnet slpaddr
bchjs.SLP.Address.isMainnetAddress('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// false

// testnet w/ no slpaddr prefix
bchjs.SLP.Address.isMainnetAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// false

// testnet legacy
bchjs.SLP.Address.isMainnetAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// false`,type:"json"}],version:"0.0.0",filename:"slp/address.js",groupTitle:"SLP"},{type:"",url:"SLP.Address.isP2PKHAddress()",title:"isP2PKHAddress()",name:"isP2PKHAddress",group:"SLP",description:"<p>Detect if p2pkh address.</p>",examples:[{title:"Example usage:",content:`// mainnet cashaddr
bchjs.SLP.Address.isP2PKHAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// true

// mainnet w/ no cashaddr prefix
bchjs.SLP.Address.isP2PKHAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// true

// mainnet slpaddr
bchjs.SLP.Address.isP2PKHAddress('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
// true

// mainnet w/ no slpaddr prefix
bchjs.SLP.Address.isP2PKHAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
// true

// legacy
bchjs.SLP.Address.isP2PKHAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
// true

// cashaddr testnet
bchjs.SLP.Address.isP2PKHAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// true

// testnet w/ no cashaddr prefix
bchjs.SLP.Address.isP2PKHAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// true

// slpaddr testnet
bchjs.SLP.Address.isP2PKHAddress('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// true

// testnet w/ no slpaddr prefix
bchjs.SLP.Address.isP2PKHAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// true

// legacy testnet
bchjs.SLP.Address.isP2PKHAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// true`,type:"json"}],version:"0.0.0",filename:"slp/address.js",groupTitle:"SLP"},{type:"",url:"SLP.Address.isP2SHAddress()",title:"isP2SHAddress()",name:"isP2SHAddress",group:"SLP",description:"<p>Detect if p2sh address.</p>",examples:[{title:"Example usage:",content:`// mainnet cashaddr
bchjs.SLP.Address.isP2SHAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// false

// mainnet cashaddr w/ no prefix
bchjs.SLP.Address.isP2SHAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// false

// mainnet slpaddr
bchjs.SLP.Address.isP2SHAddress('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
// false

// mainnet slpaddr w/ no prefix
bchjs.SLP.Address.isP2SHAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
// false

// mainnet legacy
bchjs.SLP.Address.isP2SHAddress('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74')
// false

// cashaddr testnet
bchjs.SLP.Address.isP2SHAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// false

// cashaddr testnet w/ no prefix
bchjs.SLP.Address.isP2SHAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// false

// slpaddr testnet
bchjs.SLP.Address.isP2SHAddress('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// false

// slpaddr testnet w/ no prefix
bchjs.SLP.Address.isP2SHAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// false

// legacy testnet
bchjs.SLP.Address.isP2SHAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// false`,type:"json"}],version:"0.0.0",filename:"slp/address.js",groupTitle:"SLP"},{type:"",url:"SLP.Address.isSLPAddress()",title:"isSLPAddress()",name:"isSLPAddress",group:"SLP",description:"<p>Detect if slpAddr encoded address.</p>",examples:[{title:"Example usage:",content:`
// mainnet slpaddr
bchjs.SLP.Address.isSLPAddress('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
// true

// mainnet w/ no slpaddr prefix
bchjs.SLP.Address.isSLPAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
// true

// mainnet legacy
bchjs.SLP.Address.isSLPAddress('18HEMuar5ZhXDFep1gEiY1eoPPcBLxfDxj')
// false

// testnet w/ slpaddr prefix
bchjs.SLP.Address.isSLPAddress('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// true

// testnet w/ no slpaddr prefix
bchjs.SLP.Address.isSLPAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// true

// testnet legacy
bchjs.SLP.Address.isSLPAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// false`,type:"json"}],version:"0.0.0",filename:"slp/address.js",groupTitle:"SLP"},{type:"",url:"SLP.Address.isTestnetAddress()",title:"isTestnetAddress()",name:"isTestnetAddress",group:"SLP",description:"<p>Detect if testnet address.</p>",examples:[{title:"Example usage:",content:`// cashaddr mainnet
bchjs.SLP.Address.isTestnetAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
//false

// w/ no cashaddr prefix
bchjs.SLP.Address.isTestnetAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// false

// slpaddr mainnet
bchjs.SLP.Address.isTestnetAddress('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
//false

// w/ no slpaddr prefix
bchjs.SLP.Address.isTestnetAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
// false

// legacy mainnet
bchjs.SLP.Address.isTestnetAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
// false

// cashaddr testnet
bchjs.SLP.Address.isTestnetAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// true

// testnet w/ no cashaddr prefix
bchjs.SLP.Address.isTestnetAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// true

// slpaddr testnet
bchjs.SLP.Address.isTestnetAddress('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// true

// testnet w/ no slpaddr prefix
bchjs.SLP.Address.isTestnetAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// true

// testnet legacy
bchjs.SLP.Address.isTestnetAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// true`,type:"json"}],version:"0.0.0",filename:"slp/address.js",groupTitle:"SLP"},{type:"",url:"SLP.Address.toCashAddress()",title:"toCashAddress()",name:"toCashAddress",group:"SLP",description:"<p>Converting legacy or slpaddr to cashAddress format.</p>",examples:[{title:"Example usage:",content:`// mainnet legacy
bchjs.SLP.Address.toCashAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN')
// bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl

// mainnet legacy return no prefix
bchjs.SLP.Address.toCashAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN', false)
// qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl

// mainnet slpaddr
bchjs.SLP.Address.toCashAddress('simpleledger:qzm47qz5ue99y9yl4aca7jnz7dwgdenl857dzayzdp')
// bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl

// mainnet slpaddr no prefix
bchjs.SLP.Address.toCashAddress('qzm47qz5ue99y9yl4aca7jnz7dwgdenl857dzayzdp')
// qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl

// tesnet legacy
bchjs.SLP.Address.toCashAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx')
// bchtest:qzq9je6pntpva3wf6scr7mlnycr54sjgeqxgrr9ku3

// testnet legacy return no prefix
bchjs.SLP.Address.toCashAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx', false)
// qzq9je6pntpva3wf6scr7mlnycr54sjgeqxgrr9ku3

// tesnet cashaddr
bchjs.SLP.Address.toCashAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx')
// bchtest:qzq9je6pntpva3wf6scr7mlnycr54sjgeqxgrr9ku3

// testnet cashaddr no prefix
bchjs.SLP.Address.toCashAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx', false)
// qzq9je6pntpva3wf6scr7mlnycr54sjgeqxgrr9ku3`,type:"json"}],version:"0.0.0",filename:"slp/address.js",groupTitle:"SLP"},{type:"",url:"SLP.Address.toLegacyAddress()",title:"toLegacyAddress()",name:"toLegacyAddress",group:"SLP",description:"<p>Converting cashaddr or slpaddr to legacy address format.</p>",examples:[{title:"Example usage:",content:`
// mainnet cashaddr w/ prefix
bchjs.SLP.Address.toLegacyAddress('bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
// 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN

// mainnet cashaddr w/ no prefix
bchjs.SLP.Address.toLegacyAddress('qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
// 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN

// mainnet slpaddr w/ prefix
bchjs.SLP.Address.toLegacyAddress('simpleledger:qzm47qz5ue99y9yl4aca7jnz7dwgdenl857dzayzdp')
// 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN

// mainnet slpaddr w/ no prefix
bchjs.SLP.Address.toLegacyAddress('qzm47qz5ue99y9yl4aca7jnz7dwgdenl857dzayzdp')
// 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN

// testnet cashaddr w/ prefix
bchjs.SLP.Address.toLegacyAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// mqc1tmwY2368LLGktnePzEyPAsgADxbksi

// testnet cashaddr w/ no prefix
bchjs.SLP.Address.toLegacyAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// mqc1tmwY2368LLGktnePzEyPAsgADxbksi

// testnet slpaddr w/ prefix
bchjs.SLP.Address.toLegacyAddress('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// mqc1tmwY2368LLGktnePzEyPAsgADxbksi

// testnet slpaddr w/ no prefix
bchjs.SLP.Address.toLegacyAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// mqc1tmwY2368LLGktnePzEyPAsgADxbksi`,type:"json"}],version:"0.0.0",filename:"slp/address.js",groupTitle:"SLP"},{type:"",url:"SLP.Address.toSLPAddress()",title:"toSLPAddress()",name:"toSLPAddress",group:"SLP",description:"<p>Converting legacy or cashaddr to slpAddress format.</p>",examples:[{title:"Example usage:",content:`// mainnet legacy
bchjs.SLP.Address.toSLPAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN')
// simpleledger:qzm47qz5ue99y9yl4aca7jnz7dwgdenl857dzayzd

// mainnet legacy return no prefix
bchjs.SLP.Address.toSLPAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN', false)
// qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl

// mainnet cashaddr
bchjs.SLP.Address.toSLPAddress('bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
// simpleledger:qzm47qz5ue99y9yl4aca7jnz7dwgdenl857dzayzdp

// mainnet slpaddr no prefix
bchjs.SLP.Address.toSLPAddress('qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
// simpleledger:qzm47qz5ue99y9yl4aca7jnz7dwgdenl857dzayzdp

// testnet legacy
bchjs.SLP.Address.toSLPAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx')
// slptest:qzq9je6pntpva3wf6scr7mlnycr54sjgeqauyclpwv

// testnet legacy return no prefix
bchjs.SLP.Address.toSLPAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx', false)
// qzq9je6pntpva3wf6scr7mlnycr54sjgeqauyclpwv

// tesnet cashaddr
bchjs.SLP.Address.toSLPAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx')
// slptest:qzq9je6pntpva3wf6scr7mlnycr54sjgeqauyclpwv

// testnet cashaddr no prefix
bchjs.SLP.Address.toSLPAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx', false)
// qzq9je6pntpva3wf6scr7mlnycr54sjgeqauyclpwv`,type:"json"}],version:"0.0.0",filename:"slp/address.js",groupTitle:"SLP"},{type:"",url:"SLP.ECPair.toSLPAddress()",title:"toSLPAddress()",name:"toSLPAddress",group:"SLP",description:"<p>Get slp address of ECPair.</p>",examples:[{title:"Example usage:",content:`// create ecpair from wif
let ecpair = bchjs.SLP.ECPair.fromWIF('cUCSrdhu7mCzx4sWqL6irqzprkofxPmLHYgkSnG2WaWVqJDXtWRS')
// to slp address
bchjs.SLP.ECPair.toSLPAddress(ecpair);
// slptest:qq835u5srlcqwrtwt6xm4efwan30fxg9hcqag6fk03`,type:"json"}],version:"0.0.0",filename:"slp/ecpair.js",groupTitle:"SLP"},{type:"",url:"Schnorr.batchVerify()",title:"batchVerify()",name:"batchVerify",group:"Schnorr",description:"<p>Verify a list of 64-byte signatures as a batch operation. Throws an Error if verification fails.</p>",examples:[{title:"Example usage:",content:`const Buffer = require("safe-buffer").Buffer
const publicKeys = [
Buffer.from(
"02DFF1D77F2A671C5F36183726DB2341BE58FEAE1DA2DECED843240F7B502BA659",
"hex"
),
Buffer.from(
"03FAC2114C2FBB091527EB7C64ECB11F8021CB45E8E7809D3C0938E4B8C0E5F84B",
"hex"
),
Buffer.from(
"026D7F1D87AB3BBC8BC01F95D9AECE1E659D6E33C880F8EFA65FACF83E698BBBF7",
"hex"
)
]
const messages = [
Buffer.from(
"243F6A8885A308D313198A2E03707344A4093822299F31D0082EFA98EC4E6C89",
"hex"
),
Buffer.from(
"5E2D58D8B3BCDF1ABADEC7829054F90DDA9805AAB56C77333024B9D0A508B75C",
"hex"
),
Buffer.from(
"B2F0CD8ECB23C1710903F872C31B0FD37E15224AF457722A87C5E0C7F50FFFB3",
"hex"
)
]
const signatures = [
Buffer.from(
"2A298DACAE57395A15D0795DDBFD1DCB564DA82B0F269BC70A74F8220429BA1D1E51A22CCEC35599B8F266912281F8365FFC2D035A230434A1A64DC59F7013FD",
"hex"
),
Buffer.from(
"00DA9B08172A9B6F0466A2DEFD817F2D7AB437E0D253CB5395A963866B3574BE00880371D01766935B92D2AB4CD5C8A2A5837EC57FED7660773A05F0DE142380",
"hex"
),
Buffer.from(
"68CA1CC46F291A385E7C255562068357F964532300BEADFFB72DD93668C0C1CAC8D26132EB3200B86D66DE9C661A464C6B2293BB9A9F5B966E53CA736C7E504F",
"hex"
)
]
try {
bchjs.Schnorr.batchVerify(publicKeys, messages, signatures)
console.log("The signatures are valid.")
} catch (e) {
console.error("The signature verification failed: " + e)
}`,type:"json"}],version:"0.0.0",filename:"schnorr.js",groupTitle:"Schnorr"},{type:"",url:"Schnorr.computeEll()",title:"computeEll()",name:"computeEll",group:"Schnorr",description:"<p>Generate ell which is the hash over all public keys participating in a session.</p>",examples:[{title:"Example usage:",content:`const Buffer = require("safe-buffer").Buffer
const BigInteger = require("bigi")

const publicData = {
pubKeys: [
Buffer.from(
  "03846f34fdb2345f4bf932cb4b7d278fb3af24f44224fb52ae551781c3a3cad68a",
  "hex"
),
Buffer.from(
  "02cd836b1d42c51d80cef695a14502c21d2c3c644bc82f6a7052eb29247cf61f4f",
  "hex"
),
Buffer.from(
  "03b8c1765111002f09ba35c468fab273798a9058d1f8a4e276f45a1f1481dd0bdb",
  "hex"
)
],
message: bchjs.Schnorr.hash(Buffer.from("muSig is awesome!", "utf8")),
pubKeyHash: null,
pubKeyCombined: null,
commitments: [],
nonces: [],
nonceCombined: null,
partialSignatures: [],
signature: null
}

// data only known by the individual party, these values are never shared
// between the signers!
const signerPrivateData = [
// signer 1
{
privateKey: BigInteger.fromHex(
  "add2b25e2d356bec3770305391cbc80cab3a40057ad836bcb49ef3eed74a3fee"
),
session: null
},
// signer 2
{
privateKey: BigInteger.fromHex(
  "0a1645eef5a10e1f5011269abba9fd85c4f0cc70820d6f102fb7137f2988ad78"
),
session: null
},
// signer 3
{
privateKey: BigInteger.fromHex(
  "2031e7fed15c770519707bb092a6337215530e921ccea42030c15d86e8eaf0b8"
),
session: null
}
]

// -----------------------------------------------------------------------
// Step 1: Combine the public keys
// The public keys P_i are combined into the combined public key P.
// This can be done by every signer individually or by the initializing
// party and then be distributed to every participant.
// -----------------------------------------------------------------------
publicData.pubKeyHash = bchjs.Schnorr.computeEll(publicData.pubKeys)`,type:"json"}],version:"0.0.0",filename:"schnorr.js",groupTitle:"Schnorr"},{type:"",url:"Schnorr.nonInteractive()",title:"nonInteractive()",name:"nonInteractive",group:"Schnorr",description:"<p>Aggregates multiple signatures of different private keys over the same message into a single 64-byte signature using a scheme that is safe from rogue-key attacks.</p> <p>This non-interactive scheme requires the knowledge of all private keys that are participating in the multi-signature creation.</p>",examples:[{title:"Example usage:",content:`const Buffer = require("safe-buffer").Buffer
const BigInteger = require("bigi")

const privateKey1 = BigInteger.fromHex(
"B7E151628AED2A6ABF7158809CF4F3C762E7160F38B4DA56A784D9045190CFEF"
)
const privateKey2 = BigInteger.fromHex(
"C90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B14E5C7"
)
const message = Buffer.from(
"243F6A8885A308D313198A2E03707344A4093822299F31D0082EFA98EC4E6C89",
"hex"
)
const aggregatedSignature = bchjs.Schnorr.nonInteractive(
[privateKey1, privateKey2],
message
)

// verifying an aggregated signature
const publicKey1 = Buffer.from(
"02DFF1D77F2A671C5F36183726DB2341BE58FEAE1DA2DECED843240F7B502BA659",
"hex"
)
const publicKey2 = Buffer.from(
"03FAC2114C2FBB091527EB7C64ECB11F8021CB45E8E7809D3C0938E4B8C0E5F84B",
"hex"
)
const X = bchjs.Schnorr.publicKeyCombine([publicKey1, publicKey2])
try {
bchjs.Schnorr.verify(X, message, aggregatedSignature)
console.log("The signature is valid.")
} catch (e) {
console.error("The signature verification failed: " + e)
}`,type:"json"}],version:"0.0.0",filename:"schnorr.js",groupTitle:"Schnorr"},{type:"",url:"Schnorr.partialSign()",title:"partialSign()",name:"partialSign",group:"Schnorr",description:"<p>Creates a partial signature s_i for a participant.</p>",examples:[{title:"Example usage:",content:`// continued from above
// -----------------------------------------------------------------------
// Step 6: Generate partial signatures
// Every participant can now create their partial signature s_i over the
// given message.
// -----------------------------------------------------------------------
signerPrivateData.forEach(data => {
data.session.partialSignature = bchjs.Schnorr.partialSign(
data.session,
publicData.message,
publicData.nonceCombined,
publicData.pubKeyCombined
)
})`,type:"json"}],version:"0.0.0",filename:"schnorr.js",groupTitle:"Schnorr"},{type:"",url:"Schnorr.partialSignatureVerify()",title:"partialSignatureVerify()",name:"partialSignatureVerify",group:"Schnorr",description:"<p>Verifies a partial signature s_i against the participant's public key P_i. Throws an Error if verification fails.</p>",examples:[{title:"Example usage:",content:`// continued from above
// -----------------------------------------------------------------------
// Step 7: Exchange partial signatures (communication round 3)
// The partial signature of each signer is exchanged with the other
// participants. Simulated here by copying.
// -----------------------------------------------------------------------
for (let i = 0; i < publicData.pubKeys.length; i++) {
publicData.partialSignatures[i] =
signerPrivateData[i].session.partialSignature
}

// -----------------------------------------------------------------------
// Step 8: Verify individual partial signatures
// Every participant should verify the partial signatures received by the
// other participants.
// -----------------------------------------------------------------------
for (let i = 0; i < publicData.pubKeys.length; i++) {
bchjs.Schnorr.partialSignatureVerify(
signerSession,
publicData.partialSignatures[i],
publicData.nonceCombined,
i,
publicData.pubKeys[i],
publicData.nonces[i]
)
}`,type:"json"}],version:"0.0.0",filename:"schnorr.js",groupTitle:"Schnorr"},{type:"",url:"Schnorr.partialSignaturesCombine()",title:"partialSignaturesCombine()",name:"partialSignaturesCombine",group:"Schnorr",description:"<p>Combines multiple partial signatures into a Schnorr signature (s, R) that can be verified against the combined public key P.</p>",examples:[{title:"Example usage:",content:`// continued from above
// -----------------------------------------------------------------------
// Step 9: Combine partial signatures
// Finally, the partial signatures can be combined into the full signature
// (s, R) that can be verified against combined public key P.
// -----------------------------------------------------------------------
publicData.signature = bchjs.Schnorr.partialSignaturesCombine(
publicData.nonceCombined,
publicData.partialSignatures
)

// -----------------------------------------------------------------------
// Step 10: Verify signature
// The resulting signature can now be verified as a normal Schnorr
// signature (s, R) over the message m and public key P.
// -----------------------------------------------------------------------
bchjs.Schnorr.verify(
publicData.pubKeyCombined,
publicData.message,
publicData.signature
)`,type:"json"}],version:"0.0.0",filename:"schnorr.js",groupTitle:"Schnorr"},{type:"",url:"Schnorr.publicKeyCombine()",title:"publicKeyCombine()",name:"publicKeyCombine",group:"Schnorr",description:"<p>Creates the special rogue-key-resistant combined public key P by applying the MuSig coefficient to each public key P_i before adding them together.</p>",examples:[{title:"Example usage:",content:`// continued from above
publicData.pubKeyCombined = bchjs.Schnorr.publicKeyCombine(
publicData.pubKeys,
publicData.pubKeyHash
)`,type:"json"}],version:"0.0.0",filename:"schnorr.js",groupTitle:"Schnorr"},{type:"",url:"Schnorr.sessionInitialize()",title:"sessionInitialize()",name:"sessionInitialize",group:"Schnorr",description:"<p>Creates a signing session. Each participant must create a session and must not share the content of the session apart from the commitment and later the nonce.</p>",examples:[{title:"Example usage:",content:`// continued from above
// -----------------------------------------------------------------------
// Step 2: Create the private signing session
// Each signing party does this in private. The session ID *must* be
// unique for every call to sessionInitialize, otherwise it's trivial for
// an attacker to extract the secret key!
// -----------------------------------------------------------------------
signerPrivateData.forEach((data, idx) => {
const sessionId = bchjs.Crypto.randomBytes(32) // must never be reused between sessions!
data.session = bchjs.Schnorr.sessionInitialize(
sessionId,
data.privateKey,
publicData.message,
publicData.pubKeyCombined,
publicData.pubKeyHash,
idx
)
})
const signerSession = signerPrivateData[0].session`,type:"json"}],version:"0.0.0",filename:"schnorr.js",groupTitle:"Schnorr"},{type:"",url:"Schnorr.sessionNonceCombine()",title:"sessionNonceCombine()",name:"sessionNonceCombine",group:"Schnorr",description:"<p>Combines multiple nonces R_i into the combined nonce R.</p>",examples:[{title:"Example usage:",content:`// continued from above
// -----------------------------------------------------------------------
// Step 3: Exchange commitments (communication round 1)
// The signers now exchange the commitments H(R_i). This is simulated here
// by copying the values from the private data to public data array.
// -----------------------------------------------------------------------
for (let i = 0; i < publicData.pubKeys.length; i++) {
publicData.commitments[i] = signerPrivateData[i].session.commitment
}

// -----------------------------------------------------------------------
// Step 4: Get nonces (communication round 2)
// Now that everybody has commited to the session, the nonces (R_i) can be
// exchanged. Again, this is simulated by copying.
// -----------------------------------------------------------------------
for (let i = 0; i < publicData.pubKeys.length; i++) {
publicData.nonces[i] = signerPrivateData[i].session.nonce
}

// -----------------------------------------------------------------------
// Step 5: Combine nonces
// The nonces can now be combined into R. Each participant should do this
// and keep track of whether the nonce was negated or not. This is needed
// for the later steps.
// -----------------------------------------------------------------------
publicData.nonceCombined = bchjs.Schnorr.sessionNonceCombine(
signerSession,
publicData.nonces
)
signerPrivateData.forEach(
data => (data.session.nonceIsNegated = signerSession.nonceIsNegated)
)`,type:"json"}],version:"0.0.0",filename:"schnorr.js",groupTitle:"Schnorr"},{type:"",url:"Schnorr.sign()",title:"sign()",name:"sign",group:"Schnorr",description:"<p>Sign a 32-byte message with the private key, returning a 64-byte signature.</p>",examples:[{title:"Example usage:",content:`const Buffer = require("safe-buffer").Buffer
const BigInteger = require("bigi")

// signing
const privateKey = BigInteger.fromHex(
"B7E151628AED2A6ABF7158809CF4F3C762E7160F38B4DA56A784D9045190CFEF"
)
const message = Buffer.from(
"243F6A8885A308D313198A2E03707344A4093822299F31D0082EFA98EC4E6C89",
"hex"
)
const createdSignature = bchjs.Schnorr.sign(privateKey, message)
console.log("The signature is: " + createdSignature.toString("hex"))
// The signature is: 2a298dacae57395a15d0795ddbfd1dcb564da82b0f269bc70a74f8220429ba1d1e51a22ccec35599b8f266912281f8365ffc2d035a230434a1a64dc59f7013fd`,type:"json"}],version:"0.0.0",filename:"schnorr.js",groupTitle:"Schnorr"},{type:"",url:"Schnorr.verify()",title:"verify()",name:"verify",group:"Schnorr",description:"<p>Verify a 64-byte signature of a 32-byte message against the public key. Throws an Error if verification fails.</p>",examples:[{title:"Example usage:",content:`const Buffer = require("safe-buffer").Buffer
const publicKey = Buffer.from(
"02DFF1D77F2A671C5F36183726DB2341BE58FEAE1DA2DECED843240F7B502BA659",
"hex"
)
const message = Buffer.from(
"243F6A8885A308D313198A2E03707344A4093822299F31D0082EFA98EC4E6C89",
"hex"
)
const signatureToVerify = Buffer.from(
"2A298DACAE57395A15D0795DDBFD1DCB564DA82B0F269BC70A74F8220429BA1D1E51A22CCEC35599B8F266912281F8365FFC2D035A230434A1A64DC59F7013FD",
"hex"
)
try {
bchjs.Schnorr.verify(publicKey, message, signatureToVerify)
console.log("The signature is valid.")
} catch (e) {
console.error("The signature verification failed: " + e)
}`,type:"json"}],version:"0.0.0",filename:"schnorr.js",groupTitle:"Schnorr"},{type:"",url:"Script.classifyInput()",title:"classifyInput()",name:"classifyInput",group:"Script",description:"<p>Classify transaction input.</p>",examples:[{title:"Example usage:",content:`let pubkeyInput = "3045022100ba2c3b717e023966cb16df65ca83f77029e2a5b80c47c47b6956474ac9ff281302201d48ee3292439e284a6654a0e79ac2b8f7fff5c6b0d715260aa296501a239c6441";
bchjs.Script.classifyInput(bchjs.Script.fromASM(pubkeyInput));
// pubkey

let pubkeyhashInput = "30440220280d4a9954c5afe24089bdd545466bd7a8caad8b295e30de9d3cb5e56fccf64e022036663b2c53b5fac674b4b935b53e2a4ea88dfc71c9b879870976d82887542ab441 02969479fa9bea3082697dce683ac05b13ae63016b41d5ca1a450ad40f6c543751";
bchjs.Script.classifyInput(bchjs.Script.fromASM(pubkeyhashInput));
// pubkeyhash

let multisigInput = "OP_0 3045022100fe324541215798b2df68cbd44039615e23c506d4ec1a05572064392a98196b82022068c849fa6699206da2fc6d7848efc1d3804a5816d6293615fe34c1a7f34e1c2f01 3044022001ab168e80b863fdec694350b587339bb72a37108ac3c989849251444d13ebba02201811272023e3c1038478eb972a82d3ad431bfc2408e88e4da990f1a7ecbb263901 3045022100aaeb7204c17eee2f2c4ff1c9f8b39b79e75e7fbf33e92cc67ac51be8f15b75f90220659eee314a4943a6384d2b154fa5821ef7a084814d7ee2c6f9f7f0ffb53be34b01";
bchjs.Script.classifyInput(bchjs.Script.fromASM(multisigInput));
// multisig

let scripthashInput = "OP_0 304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801 3045022100ef253c1faa39e65115872519e5f0a33bbecf430c0f35cf562beabbad4da24d8d02201742be8ee49812a73adea3007c9641ce6725c32cd44ddb8e3a3af460015d140501 522102359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1210395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a52ae";
bchjs.Script.classifyInput(bchjs.Script.fromASM(scripthashInput));
// scripthash`,type:"json"}],version:"0.0.0",filename:"script.js",groupTitle:"Script"},{type:"",url:"Script.classifyOutput()",title:"classifyOutput()",name:"classifyOutput",group:"Script",description:"<p>Classify transaction output.</p>",examples:[{title:"Example usage:",content:`let nullDataOutput = "OP_RETURN 424348466f7245766572796f6e65";
bchjs.Script.classifyOutput(bchjs.Script.fromASM(nullDataOutput));
// nulldata

let pubkeyOutput = "02359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1 OP_CHECKSIG";
bchjs.Script.classifyOutput(bchjs.Script.fromASM(pubkeyOutput));
// pubkey

let pubkeyhashOutput = "OP_DUP OP_HASH160 aa4d7985c57e011a8b3dd8e0e5a73aaef41629c5 OP_EQUALVERIFY OP_CHECKSIG";
bchjs.Script.classifyOutput(bchjs.Script.fromASM(pubkeyhashOutput));
// pubkeyhash

let multisigOutput = "OP_2 02359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1 0395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a OP_2 OP_CHECKMULTISIG";
bchjs.Script.classifyOutput(bchjs.Script.fromASM(multisigOutput));
// multisig

let scripthashOutput = "OP_HASH160 722ff0bc2c3f47b35c20df646c395594da24e90e OP_EQUAL";
bchjs.Script.classifyOutput(bchjs.Script.fromASM(scripthashOutput));
// scripthash`,type:"json"}],version:"0.0.0",filename:"script.js",groupTitle:"Script"},{type:"",url:"Script.decode()",title:"decode()",name:"decode",group:"Script",description:"<p>Decode a Script buffer.</p>",examples:[{title:"Example usage:",content:`// decode P2PKH scriptSig buffer
let scriptSigBuffer = Buffer.from("483045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a6012102fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb", 'hex');
bchjs.Script.decode(scriptSigBuffer);
// [ <Buffer 30 45 02 21 00 87 7e 2f 9c 28 42 1f 0a 85 0c c8 ff 66 ba 1d 0f 6c 8d be 9e 63 e1 99 c2 c2 60 0c 9c 15 bf 9d 44 02 20 4d 35 b1 3d 3c c2 02 aa 25 72 2b ... >, <Buffer 02 fb 72 1b 92 02 5e 77 5b 1b 84 77 4e 65 d5 68 d2 46 45 cb 63 32 75 f5 c2 6f 5c 31 01 b2 14 a8 fb> ]

// decode P2PKH scriptPubKey buffer
let scriptPubKeyBuffer = Buffer.from("76a91424e9c07804d0ee7e5bda934e0a3ae8710fc007dd88ac", 'hex');
bchjs.Script.decode(scriptPubKeyBuffer);
// [ 118,
// 169,
// <Buffer 24 e9 c0 78 04 d0 ee 7e 5b da 93 4e 0a 3a e8 71 0f c0 07 dd>,
// 136,
// 172 ]`,type:"json"}],version:"0.0.0",filename:"script.js",groupTitle:"Script"},{type:"",url:"Script.encode()",title:"encode()",name:"encode",group:"Script",description:"<p>Encode a Script buffer with minimal push data. This function is used for Script files like CashScript. However, it will mangle the OP_RETURN of an SLP token transaction and will burn the tokens as a result. Use encode2() instead for that.</p>",examples:[{title:"Example usage:",content:`// encode P2PKH scriptSig to buffer
let scriptSig = [
Buffer.from('3045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a601', 'hex'),
Buffer.from('02fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb', 'hex')
]
bchjs.Script.encode(scriptSig);
// <Buffer 48 30 45 02 21 00 87 7e 2f 9c 28 42 1f 0a 85 0c c8 ff 66 ba 1d 0f 6c 8d be 9e 63 e1 99 c2 c2 60 0c 9c 15 bf 9d 44 02 20 4d 35 b1 3d 3c c2 02 aa 25 72 ... >

// encode P2PKH scriptPubKey to buffer
let scriptPubKey = [
118,
169,
Buffer.from('24e9c07804d0ee7e5bda934e0a3ae8710fc007dd', 'hex'),
136,
172
];
bchjs.Script.encode(scriptPubKey);
// <Buffer 76 a9 14 24 e9 c0 78 04 d0 ee 7e 5b da 93 4e 0a 3a e8 71 0f c0 07 dd 88 ac>`,type:"json"}],version:"0.0.0",filename:"script.js",groupTitle:"Script"},{type:"",url:"Script.encode2()",title:"encode2()",name:"encode2",group:"Script",description:"<p>Encode a Script buffer without minimal push data. This should be used if encode() does not produce the desired results. This should be used for compiling SLP OP_RETURNs.</p>",examples:[{title:"Example usage:",content:`// encode P2PKH scriptSig to buffer
let scriptSig = [
Buffer.from('3045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a601', 'hex'),
Buffer.from('02fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb', 'hex')
]
bchjs.Script.encode2(scriptSig);
// <Buffer 48 30 45 02 21 00 87 7e 2f 9c 28 42 1f 0a 85 0c c8 ff 66 ba 1d 0f 6c 8d be 9e 63 e1 99 c2 c2 60 0c 9c 15 bf 9d 44 02 20 4d 35 b1 3d 3c c2 02 aa 25 72 ... >

// encode P2PKH scriptPubKey to buffer
let scriptPubKey = [
118,
169,
Buffer.from('24e9c07804d0ee7e5bda934e0a3ae8710fc007dd', 'hex'),
136,
172
];
bchjs.Script.encode2(scriptPubKey);
// <Buffer 76 a9 14 24 e9 c0 78 04 d0 ee 7e 5b da 93 4e 0a 3a e8 71 0f c0 07 dd 88 ac>`,type:"json"}],version:"0.0.0",filename:"script.js",groupTitle:"Script"},{type:"",url:"Script.fromASM()",title:"fromASM()",name:"fromASM",group:"Script",description:"<p>Script ASM to buffer.</p>",examples:[{title:"Example usage:",content:`// P2PKH scriptSig
let scriptSigASM = "3045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a601 02fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb";
bchjs.Script.fromASM(scriptSigASM);
// <Buffer 48 30 45 02 21 00 87 7e 2f 9c 28 42 1f 0a 85 0c c8 ff 66 ba 1d 0f 6c 8d be 9e 63 e1 99 c2 c2 60 0c 9c 15 bf 9d 44 02 20 4d 35 b1 3d 3c c2 02 aa 25 72 ... >

// P2PKH scriptPubKey
let scriptPubKeyASM = "OP_DUP OP_HASH160 bee4182d9fbc8931a728410a0cd3e0f340f2995a OP_EQUALVERIFY OP_CHECKSIG";
bchjs.Script.fromASM(scriptPubKeyASM);
// <Buffer 76 a9 14 be e4 18 2d 9f bc 89 31 a7 28 41 0a 0c d3 e0 f3 40 f2 99 5a 88 ac>`,type:"json"}],version:"0.0.0",filename:"script.js",groupTitle:"Script"},{type:"",url:"Script.toASM()",title:"toASM()",name:"toASM",group:"Script",description:"<p>Script buffer to ASM.</p>",examples:[{title:"Example usage:",content:`// P2PKH scriptSig
let scriptSigBuffer = Buffer.from('483045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a6012102fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb', 'hex');
bchjs.Script.toASM(scriptSigBuffer);
// 3045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a601 02fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb

// P2PKH scriptPubKey
let scriptBuffer = Buffer.from("76a914bee4182d9fbc8931a728410a0cd3e0f340f2995a88ac", 'hex');
bchjs.Script.toASM(scriptBuffer);
// OP_DUP OP_HASH160 bee4182d9fbc8931a728410a0cd3e0f340f2995a OP_EQUALVERIFY OP_CHECKSIG`,type:"json"}],version:"0.0.0",filename:"script.js",groupTitle:"Script"},{type:"",url:"Transaction-Builder.addInput()",title:"addInput()",name:"AddInput",group:"TransactionBuilder",description:"<p>Add input to transaction.</p>",examples:[{title:"Example usage:",content:`// txid of vout
let txid = 'f7890915febe580920df2681d2bac0909ae89bd0cc1d3ed763e5eeba7f337f0e';
// add input with txid and index of vout
transactionBuilder.addInput(txid, 0);`,type:"json"}],version:"0.0.0",filename:"transaction-builder.js",groupTitle:"TransactionBuilder"},{type:"",url:"Transaction-Builder.addOutput()",title:"addOutput()",name:"AddOutput",group:"TransactionBuilder",description:"<p>Add output to transaction.</p>",examples:[{title:"Example usage:",content:`let originalAmount = 100000;
let byteCount = bchjs.BitcoinCash.getByteCount({ P2PKH: 1 }, { P2PKH: 1 });
// amount to send to receiver. It's the original amount - 1 sat/byte for tx size
let sendAmount = originalAmount - byteCount;
// add output w/ address and amount to send
transactionBuilder.addOutput('bitcoincash:qpuax2tarq33f86wccwlx8ge7tad2wgvqgjqlwshpw', sendAmount);`,type:"json"}],version:"0.0.0",filename:"transaction-builder.js",groupTitle:"TransactionBuilder"},{type:"",url:"Transaction-Builder.build()",title:"build()",name:"Build.",group:"TransactionBuilder",description:"<p>Build transaction.</p>",examples:[{title:"Example usage:",content:`// build tx
let tx = bchjs.transactionBuilder.build();`,type:"json"}],version:"0.0.0",filename:"transaction-builder.js",groupTitle:"TransactionBuilder"},{type:"",url:"Transaction-Builder.setLockTime()",title:"setLockTime()",name:"SetLockTime",group:"TransactionBuilder",description:"<p>Set locktime.</p>",examples:[{title:"Example usage:",content:`let originalAmount = 100000;
let byteCount = bchjs.BitcoinCash.getByteCount({ P2PKH: 1 }, { P2PKH: 1 });
// amount to send to receiver. It's the original amount - 1 sat/byte for tx size
let sendAmount = originalAmount - byteCount;
// add output w/ address and amount to send
transactionBuilder.addOutput('bitcoincash:qpuax2tarq33f86wccwlx8ge7tad2wgvqgjqlwshpw', sendAmount);
transactionBuilder.setLockTime(50000)`,type:"json"}],version:"0.0.0",filename:"transaction-builder.js",groupTitle:"TransactionBuilder"},{type:"",url:"Transaction-Builder.sign()",title:"sign()",name:"Sign.",group:"TransactionBuilder",description:"<p>Sign transaction. It creates the unlocking script needed to spend an input. Each input has its own script and thus 'sign' must be called for each input even if the keyPair is the same..</p>",examples:[{title:"Example usage:",content:`let originalAmount = 100000;
// node of address which is going to spend utxo
let hdnode = bchjs.HDNode.fromXPriv("xprvA3eaDg64MwDr72PVGJ7CkvshNAzCDRz7rn98sYrZVAtDSWCAmNGQhEQeCLDcnmcpSkfjhHevXmu4ZL8ZcT9D4vEbG8LpiToZETrHZttw9Yw");
// keypair
let keyPair = bchjs.HDNode.toKeyPair(hdnode);
// empty redeemScript variable
let redeemScript;
// sign w/ keyPair
transactionBuilder.sign(0, keyPair, redeemScript, transactionBuilder.hashTypes.SIGHASH_ALL, originalAmount, transactionBuilder.signatureAlgorithms.SCHNORR);`,type:"json"}],version:"0.0.0",filename:"transaction-builder.js",groupTitle:"TransactionBuilder"},{type:"",url:"Transaction.get()",title:"get()",name:"get",group:"Transaction",description:"<p>Returns an object of transaction data, including addresses for input UTXOs. If it is a SLP token transaction, the token information for inputs and outputs will also be included.</p>",examples:[{title:"Example usage:",content:`(async () => {
try {
 let txData = await bchjs.Transaction.get("0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098");
 console.log(txData);
} catch(error) {
console.error(error)
}
})()`,type:"json"}],version:"0.0.0",filename:"transaction.js",groupTitle:"Transaction"},{type:"",url:"Transaction.getTokenInfo()",title:"getTokenInfo()",name:"getTokenInfo",group:"Transaction",description:"<p>Given the TXID of a token transaction, it will return data about that token by retrieving the data from the Genesis transaction and docoding the OP_RETURN.</p>",examples:[{title:"Example usage:",content:`(async () => {
try {
 let txData = await bchjs.Transaction.getTokenInfo("0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098");
 console.log(txData);
} catch(error) {
console.error(error)
}
})()`,type:"json"}],version:"0.0.0",filename:"transaction.js",groupTitle:"Transaction"},{type:"",url:"Utxo.findBiggestUtxo()",title:"findBiggestUtxo()",name:"findBiggestUtxo",group:"UTXO",description:"<p>Get the biggest UTXO in an array.</p> <p>Given an array of BCH UTXOs, this method will return the biggest UTXO. This is often the simplest way to pick a UTXO for generating a transaction.</p>",examples:[{title:"Example usage:",content:`(async () => {
  try {
    const utxos = await bchjs.Utxo.get('bitcoincash:qq54fgjn3hz0357n8a6guy4demw9xfkjk5jcj0xr0z');
    const utxo = bchjs.Utxo.findBiggestUtxo(utxos[0].bchUtxos)
    console.log(utxo);
  } catch(error) {
   console.error(error)
  }
})()

// returns
 {
  "height": 655431,
  "tx_hash": "7a091716f8137e94f87e7760648cd34a17e32754ef95f7c7bda38a635c9b2b1b",
  "tx_pos": 0,
  "value": 800,
  "txid": "7a091716f8137e94f87e7760648cd34a17e32754ef95f7c7bda38a635c9b2b1b",
  "vout": 0,
  "isValid": false,
  "satoshis": 800
 }`,type:"json"}],version:"0.0.0",filename:"utxo.js",groupTitle:"UTXO"},{type:"",url:"Utxo.get()",title:"get()",name:"get",group:"UTXO",description:"<p>Get UTXOs for an address (from psf-slp-indexer)</p> <p>Given an address, this function will return an object with thre following properties:</p> <ul> <li>address: &quot;&quot; - the address these UTXOs are associated with</li> <li>bchUtxos: [] - UTXOs confirmed to be spendable as normal BCH</li> <li>infoUtxos: [] - UTXOs under of 1000 sats or less that can not be categorized as another type of UTXO (like a token).</li> <li>nullUtxo: [] - UTXOs that did not pass SLP validation. Should be ignored and not spent, to be safe.</li> <li>slpUtxos: {} - UTXOs confirmed to be colored as valid SLP tokens <ul> <li>type1: {} <ul> <li>tokens: [] - SLP token Type 1 tokens.</li> <li>mintBatons: [] - SLP token Type 1 mint batons.</li> </ul> </li> <li>nft: {} <ul> <li>tokens: [] - NFT tokens</li> <li>groupTokens: [] - NFT Group tokens, used to create NFT tokens.</li> <li>groupMintBatons: [] - Minting baton to create more NFT Group tokens.</li> </ul> </li> </ul> </li> </ul>",examples:[{title:"Example usage:",content:`(async () => {
  try {
    let utxos = await bchjs.Utxo.get('simpleledger:qrm0c67wwqh0w7wjxua2gdt2xggnm90xwsr5k22euj');
    console.log(utxos);
  } catch(error) {
   console.error(error)
  }
})()

// returns
[
 {
  "address": "bitcoincash:qrm0c67wwqh0w7wjxua2gdt2xggnm90xws00a3lezv",
  "bchUtxos": [
   {
     "height": 674513,
     "tx_hash": "705bcc442e5a2770e560b528f52a47b1dcc9ce9ab6a8de9dfdefa55177f00d04",
     "tx_pos": 3,
     "value": 38134,
     "txid": "705bcc442e5a2770e560b528f52a47b1dcc9ce9ab6a8de9dfdefa55177f00d04",
     "vout": 3,
     "isValid": false
   }
  ],`,type:"json"}],version:"0.0.0",filename:"utxo.js",groupTitle:"UTXO"},{type:"",url:"Utxo.isValid()",title:"isValid()",name:"isValid",group:"UTXO",description:"<p>Validate that UTXO exists and is still spendable.</p> <p>Given a UTXO, this method will return true if the UTXO is still in the mempool and still valid for spending. It will return false if the UTXO has been spent.</p>",examples:[{title:"Example usage:",content:`(async () => {
  try {
    const utxos = await bchjs.Utxo.get('bitcoincash:qq54fgjn3hz0357n8a6guy4demw9xfkjk5jcj0xr0z');
    const isValid = bchjs.Utxo.isValid(utxos.bchUtxos[0])
    console.log(isValid);
  } catch(error) {
   console.error(error)
  }
})()

// returns
 true`,type:"json"}],version:"0.0.0",filename:"utxo.js",groupTitle:"UTXO"},{type:"",url:"Util.validateAddress()",title:"validateAddress()",name:"Validate_Address.",group:"Util",description:"<p>Return information about the given bitcoin address.</p>",examples:[{title:"Example usage:",content:`(async () => {
  try {
    let validateAddress = await bchjs.Util.validateAddress("bitcoincash:qzc86hrdufhcwlyzk7k82x77kfs2myekn57nv9cw5f");
    console.log(validateAddress);
  } catch(error) {
   console.error(error)
  }
})()

// { isvalid: true,
// address: '17fshh33qUze2yifiJ2sXgijSMzJ2KNEwu',
// scriptPubKey: '76a914492ae280d70af33acf0ae7cd329b961e65e9cbd888ac',
// ismine: true,
// iswatchonly: false,
// isscript: false,
// pubkey: '0312eeb9ae5f14c3cf43cece11134af860c2ef7d775060e3a578ceec888acada31',
// iscompressed: true,
// account: 'Test' }

(async () => {
  try {
    let validateAddress = await bchjs.Util.validateAddress(["bitcoincash:qzc86hrdufhcwlyzk7k82x77kfs2myekn57nv9cw5f"]);
    console.log(validateAddress);
  } catch(error) {
   console.error(error)
  }
})()

// [{ isvalid: true,
// address: '17fshh33qUze2yifiJ2sXgijSMzJ2KNEwu',
// scriptPubKey: '76a914492ae280d70af33acf0ae7cd329b961e65e9cbd888ac',
// ismine: true,
// iswatchonly: false,
// isscript: false,
// pubkey: '0312eeb9ae5f14c3cf43cece11134af860c2ef7d775060e3a578ceec888acada31',
// iscompressed: true,
// account: 'Test' }]`,type:"json"}],version:"0.0.0",filename:"util.js",groupTitle:"Util"},{type:"",url:"Util.chunk100()",title:"chunk100()",name:"chunk100",group:"Util",description:"<p>chunk up an array into multiple arrays of 100 elements each. Input: arrayToSlice - a one-dimensional array of elements. Returns a two-dimensional array. An array of 100-element arrays.</p>",examples:[{title:"Example usage:",content:`(async () => {
  try {
     const bigArray = [0,1,2,3,4,5,6,7,8,9,10,...,148, 149, 150]

     const chunked = bchjs.Util.chunk20(bigArray)
     console.log(chunked)
  } catch(error) {
     console.error(error)
  }
})()

// returns
 [
   [0,1,2,3,4,5,6,7,8,9,10,11,...,98,99],
   [100,101,102,...,148,149,150]
 ]`,type:"json"}],version:"0.0.0",filename:"util.js",groupTitle:"Util"},{type:"",url:"Util.chunk20()",title:"chunk20()",name:"chunk20",group:"Util",description:"<p>chunk up an array into multiple arrays of 20 elements each. Input: arrayToSlice - a one-dimensional array of elements. Returns a two-dimensional array. An array of 20-element arrays.</p>",examples:[{title:"Example usage:",content:`(async () => {
  try {
     const bigArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]

     const chunked = bchjs.Util.chunk20(bigArray)
     console.log(chunked)
  } catch(error) {
     console.error(error)
  }
})()

// returns
 [
   [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
   [20,21,22,23,24,25,26]
 ]`,type:"json"}],version:"0.0.0",filename:"util.js",groupTitle:"Util"},{type:"",url:"Util.floor2()",title:"floor2()",name:"floor2",group:"Util",description:"<p>Round a number down to 2 decimal places.</p>",examples:[{title:"Example usage:",content:`(async () => {
  try {
    const num = 1.234567891111
    const result = bchjs.Util.floor2(num)
    console.log(result)
  } catch(error) {
   console.error(error)
  }
})()

// returns
 1.23`,type:"json"}],version:"0.0.0",filename:"util.js",groupTitle:"Util"},{type:"",url:"Util.floor8()",title:"floor8()",name:"floor8",group:"Util",description:"<p>Round a number down to 8 decimal places.</p>",examples:[{title:"Example usage:",content:`(async () => {
  try {
    const num = 1.234567891111
    const result = bchjs.Util.floor8(num)
    console.log(result)
  } catch(error) {
   console.error(error)
  }
})()

// returns
 1.23456789`,type:"json"}],version:"0.0.0",filename:"util.js",groupTitle:"Util"},{type:"",url:"Util.sleep()",title:"sleep()",name:"sleep",group:"Util",description:"<p>Promise-based delay. Expects an integer as input, which represents milliseconds. This function will return a Promise that resolves that many milliseconds later.</p>",examples:[{title:"Example usage:",content:`(async () => {
  try {
    const tenSeconds = 10000
    await bchjs.Util.sleep(tenSeconds)
  } catch(error) {
   console.error(error)
  }
})()`,type:"json"}],version:"0.0.0",filename:"util.js",groupTitle:"Util"},{type:"",url:"eCash.toSatoshi()",title:"toSatoshi()",name:"toSatoshi",group:"eCash",description:"<p>Convert XEC units into satoshi units</p>",examples:[{title:"Example usage:",content:`// convert 10,704.35 XEC to satoshis:
bchjs.eCash.toSatoshi(10704.35)
// 1070435`,type:"json"}],version:"0.0.0",filename:"ecash.js",groupTitle:"eCash"},{type:"",url:"eCash.toXec()",title:"toXec()",name:"toXec",group:"eCash",description:"<p>Convert satoshi units to XEC units</p>",examples:[{title:"Example usage:",content:`// convert 1,070,435 satoshis to XEC:
bchjs.eCash.toSatoshi(1070435)
// 10704.35`,type:"json"}],version:"0.0.0",filename:"ecash.js",groupTitle:"eCash"}];const Z={name:"@psf/bch-js",version:"6.0.0",description:"A JavaScript library for working with Bitcoin Cash, eCash, and SLP Tokens",title:"bch-js",url:"bchjs.",sampleUrl:!1,defaultVersion:"0.0.0",apidoc:"0.3.0",generator:{name:"apidoc",time:"Fri Jun 02 2023 15:28:41 GMT+0200 (Central European Summer Time)",url:"https://apidocjs.com",version:"0.50.5"}};tt();const de=c().compile(v()("#template-header").html()),Pe=c().compile(v()("#template-footer").html()),ne=c().compile(v()("#template-article").html()),me=c().compile(v()("#template-compare-article").html()),fe=c().compile(v()("#template-generator").html()),xe=c().compile(v()("#template-project").html()),Le=c().compile(v()("#template-sections").html()),Fe=c().compile(v()("#template-sidenav").html()),ke={aloneDisplay:!1,showRequiredLabels:!1,withGenerator:!0,withCompare:!0};Z.template=Object.assign(ke,(Ct=Z.template)!=null?Ct:{}),Z.template.forceLanguage&&bn(Z.template.forceLanguage);const De=(0,a.groupBy)(pe,be=>be.group),Me={};v().each(De,(be,ce)=>{Me[be]=(0,a.groupBy)(ce,Ee=>Ee.name)});const We=[];v().each(Me,(be,ce)=>{let Ee=[];v().each(ce,(we,Re)=>{const st=Re[0].title;st&&Ee.push(st.toLowerCase()+"#~#"+we)}),Ee.sort(),Z.order&&(Ee=je(Ee,Z.order,"#~#")),Ee.forEach(we=>{const st=we.split("#~#")[1];ce[st].forEach(Oe=>{We.push(Oe)})})}),pe=We;let it={};const Pt={};let Ge={};Ge[Z.version]=1,v().each(pe,(be,ce)=>{it[ce.group]=1,Pt[ce.group]=ce.groupTitle||ce.group,Ge[ce.version]=1}),it=Object.keys(it),it.sort(),Z.order&&(it=St(Pt,Z.order)),Ge=Object.keys(Ge),Ge.sort(r().compare),Ge.reverse();const vt=[];it.forEach(be=>{vt.push({group:be,isHeader:!0,title:Pt[be]});let ce="";pe.forEach(Ee=>{Ee.group===be&&(ce!==Ee.name?vt.push({title:Ee.title,group:be,name:Ee.name,type:Ee.type,version:Ee.version,url:Ee.url}):vt.push({title:Ee.title,group:be,hidden:!0,name:Ee.name,type:Ee.type,version:Ee.version,url:Ee.url}),ce=Ee.name)})});function j(be,ce,Ee){let we=!1;if(!ce)return we;const Re=ce.match(/<h(1|2).*?>(.+?)<\/h(1|2)>/gi);return Re&&Re.forEach(function(st){const Oe=st.substring(2,3),qt=st.replace(/<.+?>/g,""),An=st.match(/id="api-([^-]+)(?:-(.+))?"/),Sn=An?An[1]:null,Dn=An?An[2]:null;Oe==="1"&&qt&&Sn&&(be.splice(Ee,0,{group:Sn,isHeader:!0,title:qt,isFixed:!0}),Ee++,we=!0),Oe==="2"&&qt&&Sn&&Dn&&(be.splice(Ee,0,{group:Sn,name:Dn,isHeader:!1,title:qt,isFixed:!1,version:"1.0"}),Ee++)}),we}let U;if(Z.header&&(U=j(vt,Z.header.content,0),U||vt.unshift({group:"_header",isHeader:!0,title:Z.header.title==null?$t("General"):Z.header.title,isFixed:!0})),Z.footer){const be=vt.length;U=j(vt,Z.footer.content,vt.length),!U&&Z.footer.title!=null&&vt.splice(be,0,{group:"_footer",isHeader:!0,title:Z.footer.title,isFixed:!0})}const G=Z.title?Z.title:"apiDoc: "+Z.name+" - "+Z.version;v()(document).attr("title",G),v()("#loader").remove();const re={nav:vt};v()("#sidenav").append(Fe(re)),v()("#generator").append(fe(Z)),(0,a.extend)(Z,{versions:Ge}),v()("#project").append(xe(Z)),Z.header&&v()("#header").append(de(Z.header)),Z.footer&&(v()("#footer").append(Pe(Z.footer)),Z.template.aloneDisplay&&document.getElementById("api-_footer").classList.add("hide"));const Y={};let ie="";it.forEach(function(be){const ce=[];let Ee="",we={},Re=be,st="";Y[be]={},pe.forEach(function(Oe){be===Oe.group&&(Ee!==Oe.name?(pe.forEach(function(qt){be===qt.group&&Oe.name===qt.name&&(Object.prototype.hasOwnProperty.call(Y[Oe.group],Oe.name)||(Y[Oe.group][Oe.name]=[]),Y[Oe.group][Oe.name].push(qt.version))}),we={article:Oe,versions:Y[Oe.group][Oe.name]}):we={article:Oe,hidden:!0,versions:Y[Oe.group][Oe.name]},Z.sampleUrl&&Z.sampleUrl===!0&&(Z.sampleUrl=window.location.origin),Z.url&&we.article.url.substr(0,4).toLowerCase()!=="http"&&(we.article.url=Z.url+we.article.url),_e(we,Oe),Oe.groupTitle&&(Re=Oe.groupTitle),Oe.groupDescription&&(st=Oe.groupDescription),ce.push({article:ne(we),group:Oe.group,name:Oe.name,aloneDisplay:Z.template.aloneDisplay}),Ee=Oe.name)}),we={group:be,title:Re,description:st,articles:ce,aloneDisplay:Z.template.aloneDisplay},ie+=Le(we)}),v()("#sections").append(ie),Z.template.aloneDisplay||(document.body.dataset.spy="scroll",v()("body").scrollspy({target:"#scrollingNav"})),v()(".form-control").on("focus change",function(){v()(this).removeClass("border-danger")}),v()(".sidenav").find("a").on("click",function(be){be.preventDefault();const ce=this.getAttribute("href");if(Z.template.aloneDisplay){const Ee=document.querySelector(".sidenav > li.active");Ee&&Ee.classList.remove("active"),this.parentNode.classList.add("active")}else{const Ee=document.querySelector(ce);Ee&&v()("html,body").animate({scrollTop:Ee.offsetTop},400)}window.location.hash=ce});function ae(be){let ce=!1;return v().each(be,Ee=>{ce=ce||(0,a.some)(be[Ee],we=>we.type)}),ce}function ye(){v()('button[data-toggle="popover"]').popover().click(function(ce){ce.preventDefault()});const be=v()("#version strong").html();if(v()("#sidenav li").removeClass("is-new"),Z.template.withCompare&&v()("#sidenav li[data-version='"+be+"']").each(function(){const ce=v()(this).data("group"),Ee=v()(this).data("name"),we=v()("#sidenav li[data-group='"+ce+"'][data-name='"+Ee+"']").length,Re=v()("#sidenav li[data-group='"+ce+"'][data-name='"+Ee+"']").index(v()(this));(we===1||Re===we-1)&&v()(this).addClass("is-new")}),v()(".nav-tabs-examples a").click(function(ce){ce.preventDefault(),v()(this).tab("show")}),v()(".nav-tabs-examples").find("a:first").tab("show"),v()(".sample-request-content-type-switch").change(function(){v()(this).val()==="body-form-data"?(v()("#sample-request-body-json-input-"+v()(this).data("id")).hide(),v()("#sample-request-body-form-input-"+v()(this).data("id")).show()):(v()("#sample-request-body-form-input-"+v()(this).data("id")).hide(),v()("#sample-request-body-json-input-"+v()(this).data("id")).show())}),Z.template.aloneDisplay&&(v()(".show-group").click(function(){const ce="."+v()(this).attr("data-group")+"-group",Ee="."+v()(this).attr("data-group")+"-article";v()(".show-api-group").addClass("hide"),v()(ce).removeClass("hide"),v()(".show-api-article").addClass("hide"),v()(Ee).removeClass("hide")}),v()(".show-api").click(function(){const ce=this.getAttribute("href").substring(1),Ee=document.getElementById("version").textContent.trim(),we=`.${this.dataset.name}-article`,Re=`[id="${ce}-${Ee}"]`,st=`.${this.dataset.group}-group`;v()(".show-api-group").addClass("hide"),v()(st).removeClass("hide"),v()(".show-api-article").addClass("hide");let Oe=v()(we);v()(Re).length&&(Oe=v()(Re).parent()),Oe.removeClass("hide"),ce.match(/_(header|footer)/)&&document.getElementById(ce).classList.remove("hide")})),Z.template.aloneDisplay||v()("body").scrollspy("refresh"),Z.template.aloneDisplay){const ce=window.location.hash;if(ce!=null&&ce.length!==0){const Ee=document.getElementById("version").textContent.trim(),we=document.querySelector(`li .${ce.slice(1)}-init`),Re=document.querySelector(`li[data-version="${Ee}"] .show-api.${ce.slice(1)}-init`);let st=we;Re&&(st=Re),st.click()}}}function Se(be){typeof be=="undefined"?be=v()("#version strong").html():v()("#version strong").html(be),v()("article").addClass("hide"),v()("#sidenav li:not(.nav-fixed)").addClass("hide");const ce={};document.querySelectorAll("article[data-version]").forEach(Ee=>{const we=Ee.dataset.group,Re=Ee.dataset.name,st=Ee.dataset.version,Oe=we+Re;!ce[Oe]&&r().lte(st,be)&&(ce[Oe]=!0,document.querySelector(`article[data-group="${we}"][data-name="${Re}"][data-version="${st}"]`).classList.remove("hide"),document.querySelector(`#sidenav li[data-group="${we}"][data-name="${Re}"][data-version="${st}"]`).classList.remove("hide"),document.querySelector(`#sidenav li.nav-header[data-group="${we}"]`).classList.remove("hide"))}),v()("article[data-version]").each(function(Ee){const we=v()(this).data("group");v()("section#api-"+we).removeClass("hide"),v()("section#api-"+we+" article:visible").length===0?v()("section#api-"+we).addClass("hide"):v()("section#api-"+we).removeClass("hide")})}if(Se(),v()("#versions li.version a").on("click",function(be){be.preventDefault(),Se(v()(this).html())}),v()("#compareAllWithPredecessor").on("click",Ie),v()("article .versions li.version a").on("click",Be),v().urlParam=function(be){const ce=new RegExp("[\\?&amp;]"+be+"=([^&amp;#]*)").exec(window.location.href);return ce&&ce[1]?ce[1]:null},v().urlParam("compare")&&v()("#compareAllWithPredecessor").trigger("click"),window.location.hash){const be=decodeURI(window.location.hash);v()(be).length>0&&v()("html,body").animate({scrollTop:parseInt(v()(be).offset().top)},0)}v()("#scrollingNav .sidenav-search input.search").focus(),v()('[data-action="filter-search"]').on("keyup",be=>{const ce=be.currentTarget.value.toLowerCase();v()(".sidenav").find("a.nav-list-item").each((Ee,we)=>{v()(we).show(),we.innerText.toLowerCase().includes(ce)||v()(we).hide()})}),v()("span.search-reset").on("click",function(){v()("#scrollingNav .sidenav-search input.search").val("").focus(),v()(".sidenav").find("a.nav-list-item").show()});function Be(be){be.preventDefault();const ce=v()(this).parents("article"),Ee=v()(this).html(),we=ce.find(".version"),Re=we.find("strong").html();we.find("strong").html(Ee);const st=ce.data("group"),Oe=ce.data("name"),qt=ce.data("version"),An=ce.data("compare-version");if(An!==Ee&&!(!An&&qt===Ee)){if(An&&Y[st][Oe][0]===Ee||qt===Ee)ot(st,Oe,qt);else{let Sn={},Dn={};v().each(Me[st][Oe],function(Bs,rr){rr.version===qt&&(Sn=rr),rr.version===Ee&&(Dn=rr)});const ht={article:Sn,compare:Dn,versions:Y[st][Oe]};ht.article.id=ht.article.group+"-"+ht.article.name+"-"+ht.article.version,ht.article.id=ht.article.id.replace(/\./g,"_"),ht.compare.id=ht.compare.group+"-"+ht.compare.name+"-"+ht.compare.version,ht.compare.id=ht.compare.id.replace(/\./g,"_");let gt=Sn;gt.parameter&&gt.parameter.fields&&(ht._hasTypeInParameterFields=ae(gt.parameter.fields)),gt.error&&gt.error.fields&&(ht._hasTypeInErrorFields=ae(gt.error.fields)),gt.success&&gt.success.fields&&(ht._hasTypeInSuccessFields=ae(gt.success.fields)),gt.info&&gt.info.fields&&(ht._hasTypeInInfoFields=ae(gt.info.fields)),gt=Dn,ht._hasTypeInParameterFields!==!0&&gt.parameter&&gt.parameter.fields&&(ht._hasTypeInParameterFields=ae(gt.parameter.fields)),ht._hasTypeInErrorFields!==!0&&gt.error&&gt.error.fields&&(ht._hasTypeInErrorFields=ae(gt.error.fields)),ht._hasTypeInSuccessFields!==!0&&gt.success&&gt.success.fields&&(ht._hasTypeInSuccessFields=ae(gt.success.fields)),ht._hasTypeInInfoFields!==!0&&gt.info&&gt.info.fields&&(ht._hasTypeInInfoFields=ae(gt.info.fields));const Ei=me(ht);ce.after(Ei),ce.next().find(".versions li.version a").on("click",Be),v()("#sidenav li[data-group='"+st+"'][data-name='"+Oe+"'][data-version='"+Re+"']").addClass("has-modifications"),ce.remove()}m().highlightAll()}}function Ie(be){be.preventDefault(),v()("article:visible .versions").each(function(){const Ee=v()(this).parents("article").data("version");let we=null;v()(this).find("li.version a").each(function(){v()(this).html()<Ee&&!we&&(we=v()(this))}),we&&we.trigger("click")})}function _e(be,ce){be.id=be.article.group+"-"+be.article.name+"-"+be.article.version,be.id=be.id.replace(/\./g,"_"),ce.header&&ce.header.fields&&(be._hasTypeInHeaderFields=ae(ce.header.fields)),ce.parameter&&ce.parameter.fields&&(be._hasTypeInParameterFields=ae(ce.parameter.fields)),ce.error&&ce.error.fields&&(be._hasTypeInErrorFields=ae(ce.error.fields)),ce.success&&ce.success.fields&&(be._hasTypeInSuccessFields=ae(ce.success.fields)),ce.info&&ce.info.fields&&(be._hasTypeInInfoFields=ae(ce.info.fields)),be.template=Z.template}function Ye(be,ce,Ee){let we={};v().each(Me[be][ce],function(st,Oe){Oe.version===Ee&&(we=Oe)});const Re={article:we,versions:Y[be][ce]};return _e(Re,we),ne(Re)}function ot(be,ce,Ee){const we=v()("article[data-group='"+be+"'][data-name='"+ce+"']:visible"),Re=Ye(be,ce,Ee);we.after(Re),we.next().find(".versions li.version a").on("click",Be),v()("#sidenav li[data-group='"+be+"'][data-name='"+ce+"'][data-version='"+Ee+"']").removeClass("has-modifications"),we.remove()}function je(be,ce,Ee){const we=[];return ce.forEach(function(Re){Ee?be.forEach(function(st){const Oe=st.split(Ee);(Oe[0]===Re||Oe[1]===Re)&&we.push(st)}):be.forEach(function(st){st===Re&&we.push(Re)})}),be.forEach(function(Re){we.indexOf(Re)===-1&&we.push(Re)}),we}function St(be,ce){const Ee=[];return ce.forEach(we=>{Object.keys(be).forEach(Re=>{be[Re].replace(/_/g," ")===we&&Ee.push(Re)})}),Object.keys(be).forEach(we=>{Ee.indexOf(we)===-1&&Ee.push(we)}),Ee}ye()}})()})();
