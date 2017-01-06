'use strict';

var expect = require( 'chai' ).expect;
var base_x = require( '../index' );

describe('#numFormatter', function() {
    it( 'should convert 1001 in base 2 to 9 in base 10', function(){
        var result = base_x.convert( '1001', base_x.BASE2, base_x.BASE10 );

        expect( result ).to.equal( '9' );
    } );

    it( 'should convert 9 in base 10 to 1001 in base 2', function(){
        var result = base_x.convert( '9', base_x.BASE10, base_x.BASE2 );

        expect( result ).to.equal( '1001' );
    } );

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