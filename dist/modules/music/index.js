"use strict";(()=>{var r=class{constructor(t){this.faker=t;for(let e of Object.getOwnPropertyNames(r.prototype))e==="constructor"||typeof this[e]!="function"||(this[e]=this[e].bind(this))}genre(){return this.faker.helpers.arrayElement(this.faker.definitions.music.genre)}songName(){return this.faker.helpers.arrayElement(this.faker.definitions.music.song_name)}};})();
