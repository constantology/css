var box = {
		cls_base    : 'test bbox box',
		cls_item    : 'box-item',
		cls_combos  : [],
		config      : {
			align   : ' baseline end start stretch',
			content : ' around between center start stretch',
			pack    : ' around between center start stretch'
		},
		item_count  : m8.range( 1, 7 ),
		prefix      : 'box',
		orient      : 'box-h box-v'.split( ' ' )
	};

;!function() {
	function to_cls_array( prefix, props ) {
		return props.split( ' ' ).join( ' ' + prefix + '-' ).split( ' ' ).slice( 1 );
	}

	box.cls_combos = Object.reduce( box.config, function( res, props, prefix ) {
		return res.concat( box.config[prefix] = to_cls_array( box.prefix + '-' + prefix, props ) );
	}, box.cls_combos );
	box.cls_combos = box.config.align.reduce( function( res, align ) {
		box.config.content.reduce( function( res, content ) {
			res.push( align + ' ' + content );
			box.config.pack.reduce( function( res, pack ) {
				res.push( align + ' ' + pack, content + ' ' + pack, align + ' ' + content + ' ' + pack );
				return res;
			}, res );
			return res;
		}, res );
		return res;
	}, box.cls_combos ).uniq().sort();

	box.tpl = new Templ8( {
		compiled : true,
		title    : function( config ) { return config.replace( /box-/g, '' ).split( ' ' ).join( ', ' ).split( '-' ).join( ' : ' ); }
	},
	'<div class="panel">',
		'<h1>{{ orient }}</h1>\n',
		'<div class="panel-ct">',
		'{% for config in box.cls_combos %}',
		'<div class="{{ box.prefix }}-eg">',
			'<h2>{{ orient }} | {{ config|title }}</h2>\n',
			'<div class="{{ box.cls_base }} {{ orient }} {{ config }}">{% for item in box.item_count %}\n',
				'<div class="{{ box.cls_item }}">{{ box.prefix }} {{ iter.index1 }}</div>\n',
			'{% endfor %}</div>\n',
		'</div>',
		'{% endfor %}',
	'</div></div>' );

	box.html = box.orient.map( function( orient ) {
		return box.tpl.parse( { orient : orient, box : box } );
	} );
}();

window.addEventListener( 'DOMContentLoaded', function() {
	document.body.querySelector( '.panels-ct' ).innerHTML += box.html;
} );
