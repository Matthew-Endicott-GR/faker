"use strict";(()=>{function m(a){let e=`[@faker-js/faker]: ${a.deprecated} is deprecated`;a.since&&(e+=` since v${a.since}`),a.until&&(e+=` and will be removed in v${a.until}`),a.proposed&&(e+=`. Please use ${a.proposed} instead`),console.warn(`${e}.`)}var o=class{constructor(e){this.faker=e}image(e,r,n,t){return this.imageUrl(e,r,n,t)}imageGrayscale(e,r,n){return this.imageUrl(e,r,n)}imageBlurred(e,r,n){return this.imageUrl(e,r,void 0,n)}imageRandomSeeded(e,r,n,t,s){return this.imageUrl(e,r,n,t,s)}avatar(){return m({deprecated:"faker.image.lorempicsum.avatar()",proposed:"faker.internet.avatar()",since:"7.3",until:"8.0"}),this.faker.internet.avatar()}imageUrl(e,r,n,t,s){e=e||640,r=r||480;let i="https://picsum.photos";return s&&(i+=`/seed/${s}`),i+=`/${e}/${r}`,n&&t?`${i}?grayscale&blur=${t}`:n?`${i}?grayscale`:t?`${i}?blur=${t}`:i}};})();
