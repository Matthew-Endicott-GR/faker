"use strict";(()=>{var g=["video","audio","image","text","application"],x=["application/pdf","audio/mpeg","audio/wav","image/png","image/jpeg","image/gif","video/mp4","video/mpeg","text/html"],E=["en","wl","ww"],y={index:"o",slot:"s",mac:"x",pci:"p"},$=["SUN","MON","TUE","WED","THU","FRI","SAT"],h=class{constructor(e){this.faker=e;for(let t of Object.getOwnPropertyNames(h.prototype))t==="constructor"||typeof this[t]!="function"||(this[t]=this[t].bind(this))}fileName(e={}){let{extensionCount:t=1}=e,a=this.faker.random.words().toLowerCase().replace(/\W/g,"_");if(t<=0)return a;let r=Array.from({length:t}).map(()=>this.fileExt()).join(".");return`${a}.${r}`}commonFileName(e){return`${this.fileName({extensionCount:0})}.${e||this.commonFileExt()}`}mimeType(){let e=Object.keys(this.faker.definitions.system.mimeTypes);return this.faker.helpers.arrayElement(e)}commonFileType(){return this.faker.helpers.arrayElement(g)}commonFileExt(){return this.fileExt(this.faker.helpers.arrayElement(x))}fileType(){let e=new Set,t=this.faker.definitions.system.mimeTypes;Object.keys(t).forEach(r=>{let s=r.split("/")[0];e.add(s)});let a=Array.from(e);return this.faker.helpers.arrayElement(a)}fileExt(e){if(typeof e=="string"){let s=this.faker.definitions.system.mimeTypes;return this.faker.helpers.arrayElement(s[e].extensions)}let t=this.faker.definitions.system.mimeTypes,a=new Set;Object.keys(t).forEach(s=>{t[s].extensions instanceof Array&&t[s].extensions.forEach(n=>{a.add(n)})});let r=Array.from(a);return this.faker.helpers.arrayElement(r)}directoryPath(){let e=this.faker.definitions.system.directoryPaths;return this.faker.helpers.arrayElement(e)}filePath(){return`${this.directoryPath()}/${this.fileName()}`}semver(){return[this.faker.datatype.number(9),this.faker.datatype.number(9),this.faker.datatype.number(9)].join(".")}networkInterface(e={}){var n,i,o,m,f;let{interfaceType:t=this.faker.helpers.arrayElement(E),interfaceSchema:a=this.faker.helpers.objectKey(y)}=e,r,s="";switch(a){case"index":r=this.faker.datatype.number(9).toString();break;case"slot":r=`${this.faker.datatype.number(9)}${(n=this.faker.helpers.maybe(()=>`f${this.faker.datatype.number(9)}`))!=null?n:""}${(i=this.faker.helpers.maybe(()=>`d${this.faker.datatype.number(9)}`))!=null?i:""}`;break;case"mac":r=this.faker.internet.mac("");break;case"pci":s=(o=this.faker.helpers.maybe(()=>`P${this.faker.datatype.number(9)}`))!=null?o:"",r=`${this.faker.datatype.number(9)}s${this.faker.datatype.number(9)}${(m=this.faker.helpers.maybe(()=>`f${this.faker.datatype.number(9)}`))!=null?m:""}${(f=this.faker.helpers.maybe(()=>`d${this.faker.datatype.number(9)}`))!=null?f:""}`;break}return`${s}${t}${y[a]}${r}`}cron(e={}){let{includeYear:t=!1,includeNonStandard:a=!1}=e,r=[this.faker.datatype.number({min:0,max:59}),"*"],s=[this.faker.datatype.number({min:0,max:23}),"*"],n=[this.faker.datatype.number({min:1,max:31}),"*","?"],i=[this.faker.datatype.number({min:1,max:12}),"*"],o=[this.faker.datatype.number({min:0,max:6}),this.faker.helpers.arrayElement($),"*","?"],m=[this.faker.datatype.number({min:1970,max:2099}),"*"],f=this.faker.helpers.arrayElement(r),p=this.faker.helpers.arrayElement(s),l=this.faker.helpers.arrayElement(n),k=this.faker.helpers.arrayElement(i),d=this.faker.helpers.arrayElement(o),u=this.faker.helpers.arrayElement(m),c=`${f} ${p} ${l} ${k} ${d}`;t&&(c+=` ${u}`);let b=["@annually","@daily","@hourly","@monthly","@reboot","@weekly","@yearly"];return!a||this.faker.datatype.boolean()?c:this.faker.helpers.arrayElement(b)}};})();