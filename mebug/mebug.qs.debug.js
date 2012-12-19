// use something like this to add the MEBUG class to the body element
// when your location bar has a query string with `debug` in it
;!function() {
	if ( !!~location.search.toLowerCase().indexOf( 'debug' ) && !~document.body.className.indexOf( 'MEBUG' ) )
		document.body.className += ' MEBUG';
}();
