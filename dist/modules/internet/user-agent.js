"use strict";(()=>{function y(n){let p=e=>{let r=n.datatype.number({min:0,max:100})/100,i=0,a=0,c;for(let s in e)if(Object.prototype.hasOwnProperty.call(e,s)){if(a=e[s]+i,c=s,r>=i&&r<=a)break;i=i+e[s]}return c},m=()=>n.helpers.arrayElement(["AB","AF","AN","AR","AS","AZ","BE","BG","BN","BO","BR","BS","CA","CE","CO","CS","CU","CY","DA","DE","EL","EN","EO","ES","ET","EU","FA","FI","FJ","FO","FR","FY","GA","GD","GL","GV","HE","HI","HR","HT","HU","HY","ID","IS","IT","JA","JV","KA","KG","KO","KU","KW","KY","LA","LB","LI","LN","LT","LV","MG","MK","MN","MO","MS","MT","MY","NB","NE","NL","NN","NO","OC","PL","PT","RM","RO","RU","SC","SE","SK","SL","SO","SQ","SR","SV","SW","TK","TR","TY","UK","UR","UZ","VI","VO","YI","ZH"]),u=()=>{let e=p({chrome:.45132810566,iexplorer:.27477061836,firefox:.19384170608,safari:.06186781118,opera:.01574236955}),r=p({chrome:{win:.89,mac:.09,lin:.02},firefox:{win:.83,mac:.16,lin:.01},opera:{win:.91,mac:.03,lin:.06},safari:{win:.04,mac:.96},iexplorer:{win:1}}[e]);return[e,r]},o=e=>{let i={lin:["i686","x86_64"],mac:{Intel:.48,PPC:.01,"U; Intel":.48,"U; PPC":.01},win:["","WOW64","Win64; x64"]}[e];return Array.isArray(i)?n.helpers.arrayElement(i):p(i)},$=e=>{let r="";for(let i=0;i<e;i++)r+=`.${n.datatype.number({min:0,max:9})}`;return r},t={net(){return[n.datatype.number({min:1,max:4}),n.datatype.number({min:0,max:9}),n.datatype.number({min:1e4,max:99999}),n.datatype.number({min:0,max:9})].join(".")},nt(){return[n.datatype.number({min:5,max:6}),n.datatype.number({min:0,max:3})].join(".")},ie(){return n.datatype.number({min:7,max:11})},trident(){return[n.datatype.number({min:3,max:7}),n.datatype.number({min:0,max:1})].join(".")},osx(e){return[10,n.datatype.number({min:5,max:10}),n.datatype.number({min:0,max:9})].join(e||".")},chrome(){return[n.datatype.number({min:13,max:39}),0,n.datatype.number({min:800,max:899}),0].join(".")},presto(){return`2.9.${n.datatype.number({min:160,max:190})}`},presto2(){return`${n.datatype.number({min:10,max:12})}.00`},safari(){return[n.datatype.number({min:531,max:538}),n.datatype.number({min:0,max:2}),n.datatype.number({min:0,max:2})].join(".")}},x={firefox(e){let r=`${n.datatype.number({min:5,max:15})}${$(2)}`,i=`Gecko/20100101 Firefox/${r}`,a=o(e);return`Mozilla/5.0 ${e==="win"?`(Windows NT ${t.nt()}${a?`; ${a}`:""}`:e==="mac"?`(Macintosh; ${a} Mac OS X ${t.osx()}`:`(X11; Linux ${a}`}; rv:${r.slice(0,-2)}) ${i}`},iexplorer(){let e=t.ie();return e>=11?`Mozilla/5.0 (Windows NT 6.${n.datatype.number({min:1,max:3})}; Trident/7.0; ${n.datatype.boolean()?"Touch; ":""}rv:11.0) like Gecko`:`Mozilla/5.0 (compatible; MSIE ${e}.0; Windows NT ${t.nt()}; Trident/${t.trident()}${n.datatype.boolean()?`; .NET CLR ${t.net()}`:""})`},opera(e){let r=` Presto/${t.presto()} Version/${t.presto2()})`,i=e==="win"?`(Windows NT ${t.nt()}; U; ${m()}${r}`:e==="lin"?`(X11; Linux ${o(e)}; U; ${m()}${r}`:`(Macintosh; Intel Mac OS X ${t.osx()} U; ${m()} Presto/${t.presto()} Version/${t.presto2()})`;return`Opera/${n.datatype.number({min:9,max:14})}.${n.datatype.number({min:0,max:99})} ${i}`},safari(e){let r=t.safari(),i=`${n.datatype.number({min:4,max:7})}.${n.datatype.number({min:0,max:1})}.${n.datatype.number({min:0,max:10})}`;return`Mozilla/5.0 ${e==="mac"?`(Macintosh; ${o("mac")} Mac OS X ${t.osx("_")} rv:${n.datatype.number({min:2,max:6})}.0; ${m()}) `:`(Windows; U; Windows NT ${t.nt()})`}AppleWebKit/${r} (KHTML, like Gecko) Version/${i} Safari/${r}`},chrome(e){let r=t.safari();return`Mozilla/5.0 ${e==="mac"?`(Macintosh; ${o("mac")} Mac OS X ${t.osx("_")}) `:e==="win"?`(Windows; U; Windows NT ${t.nt()})`:`(X11; Linux ${o(e)}`} AppleWebKit/${r} (KHTML, like Gecko) Chrome/${t.chrome()} Safari/${r}`}},[d,l]=u();return x[d](l)}})();