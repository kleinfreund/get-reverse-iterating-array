function t(t){if(Array.isArray(t))return new Proxy(t,r);throw new TypeError(`Expected “array” parameter to be of type “array” but got ${typeof t}.`)}const r={get:(t,r)=>r===Symbol.iterator?e.bind(t):Reflect.get(t,r)};function e(){let t=this.length-1;return{[Symbol.iterator](){return this},next:()=>{const r=this[t];return t-=1,{value:r,done:void 0===r}}}}export{t as default};
