"use strict";var n=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var u=n(function(m,t){
var s=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),v=require('@stdlib/ndarray-base-numel-dimension/dist'),d=require('@stdlib/ndarray-base-clip-upper-index/dist'),q=require('@stdlib/ndarray-base-stride/dist'),f=require('@stdlib/ndarray-base-offset/dist'),l=require('@stdlib/ndarray-base-data-buffer/dist'),x=require('@stdlib/blas-ext-base-slast-index-of-falsy/dist').ndarray;function c(i){var r,e,a;return a=i[0],r=s(i[1]),e=v(a,0),r=d(r,r<0?e:e-1),r<0?-1:x(r+1,l(a),q(a,0),f(a))}t.exports=c
});var o=u();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
