'use strict';

var expect = require( 'chai' ).expect;
var base_x = require( '../index' );

describe('#numFormatter', function() {
	it( 'should convert 10 in base 10 to A in base 62', function(){
        var result = base_x.convert( '10', base_x.BASE10, base_x.BASE62 );

        expect( result ).to.equal( 'A' );
    } );

    it( 'should convert A in base 62 to 10 in base 10', function(){
        var result = base_x.convert( 'A', base_x.BASE62, base_x.BASE10 );

        expect( result ).to.equal( '10' );
    } );

    it( 'should convert 62 in base 10 to A in base 62', function(){
        var result = base_x.convert( '62', base_x.BASE10, base_x.BASE62 );

        expect( result ).to.equal( '10' );
    } );
    
    it( 'should convert 10 in base 62 to 62 in base 10', function(){
        var result = base_x.convert( '10', base_x.BASE62, base_x.BASE10 );

        expect( result ).to.equal( '62' );
    } );
} );