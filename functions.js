function add( a, b ){
    if ( a === "" ){
        a = 0;
    }
    if ( b === "" ){
        b = 0;
    }
    if ( typeof a !== "number" ){
        a = parseFloat( a );
    }
    if ( typeof b !== "number" ){
        b = parseFloat( b );
    }
    return a + b;
}
function sub( a, b ){
}
