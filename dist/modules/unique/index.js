"use strict";(()=>{function n(r){let t=`[@faker-js/faker]: ${r.deprecated} is deprecated`;r.since&&(t+=` since v${r.since}`),r.until&&(t+=` and will be removed in v${r.until}`),r.proposed&&(t+=`. Please use ${r.proposed} instead`),console.warn(`${t}.`)}var o=class{constructor(t){this.faker=t;for(let e of Object.getOwnPropertyNames(o.prototype))e==="constructor"||e==="maxTime"||e==="maxRetries"||typeof this[e]!="function"||(this[e]=this[e].bind(this))}unique(t,e,i={}){return n({deprecated:"faker.unique()",proposed:"faker.helpers.unique()",since:"7.5",until:"8.0"}),this.faker.helpers.unique(t,e,i)}};})();
