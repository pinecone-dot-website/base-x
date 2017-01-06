"use strict";

module.exports = new function(){
	this.BASE2  = "01";
	this.BASE8  = "01234567";
	this.BASE10 = "0123456789";
	this.BASE16 = "0123456789ABCDEF";
	this.BASE32 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	this.BASE62 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	this.BASE75 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_.,!=-*(){}[]";

	/**
	*
	*	@param string
	*	@param string
	*	@param string
	*	@return string | false
	*/
	this.convert = function( src = '', srctable = '', desttable = '' ){
		src = src.toString();

		var srclen = srctable.length,
			destlen = desttable.length,
			val = 0,
			numlen = src.length;

		//
		if( srctable.length < 1 || desttable.length < 1 )
			return false;

		// first convert to base 10
		for( var i = 0; i < numlen; i ++ ){
			val = val * srclen + srctable.indexOf( src.charAt(i) );
		}
		
		if( val < 0 )
			return false;
		
		// then covert to any base
		var r = val % destlen;
		var res = desttable.charAt(r);
		var q = Math.floor(val / destlen);
		while( q ){
			r = q % destlen;
			q = Math.floor(q / destlen);
			res = desttable.charAt(r) + res;
		}
		
		return res;
	}
};