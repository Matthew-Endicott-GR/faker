"use strict";(()=>{var d=class extends Error{};var x={},l=[];function K(r,t){return r[t]===void 0?-1:0}function R(r,t,e,o,n){throw console.error("Error",e),console.log(`Found ${Object.keys(o).length} unique entries before throwing error.
retried: ${n}
total time: ${t-r}ms`),new d(`${e} for uniqueness check.

May not be able to generate any more unique values with current settings.
Try adjusting maxTime or maxRetries parameters for faker.helpers.unique().`)}function f(r,t,e={}){var y;let o=new Date().getTime(),{startTime:n=new Date().getTime(),maxTime:s=50,maxRetries:i=50,compare:m=K,store:a=x}=e,{exclude:c=l}=e;if(e.currentIterations=(y=e.currentIterations)!=null?y:0,Array.isArray(c)||(c=[c]),o-n>=s)return R(n,o,`Exceeded maxTime: ${s}`,a,e.currentIterations);if(e.currentIterations>=i)return R(n,o,`Exceeded maxRetries: ${i}`,a,e.currentIterations);let u=r.apply(this,t);return m(a,u)===-1&&c.indexOf(u)===-1?(a[u]=u,e.currentIterations=0,u):(e.currentIterations++,f(r,t,{...e,startTime:n,maxTime:s,maxRetries:i,compare:m,exclude:c}))}})();
