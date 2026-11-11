/** @license Apache-2.0 */

'use strict';

/**
* Return the index of the last falsy element in a one-dimensional single-precision floating-point ndarray.
*
* @module @stdlib/blas-ext-base-ndarray-slast-index-of-falsy
*
* @example
* var Float32Vector = require( '@stdlib/ndarray-vector-float32' );
* var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
* var slastIndexOfFalsy = require( '@stdlib/blas-ext-base-ndarray-slast-index-of-falsy' );
*
* var x = new Float32Vector( [ 1.0, 0.0, 3.0, 0.0 ] );
*
* var fromIndex = scalar2ndarray( 3, {
*     'dtype': 'generic'
* });
*
* var v = slastIndexOfFalsy( [ x, fromIndex ] );
* // returns 3
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
