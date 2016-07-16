require.config({
	paths: {
		'index': 'index',
		'jquery.ba-resize': 'jquery.ba-resize',
		'jquery.tabs+accordion': 'jquery.tabs+accordion',
	},
	shim: {
		'jquery.ba-resize': ['jquery'],
	},
});

require(['jquery.tabs+accordion'], function() {

	$('.accordion, .tabs')
	.TabsAccordion({
		hashWatch: true,
		pauseMedia: true,
		responsiveSwitch: 'tablist',
		saveState: sessionStorage,
	});
});

// demo only
if(document.body.querySelector('.theme .color-scheme')) require(['../demo/js/demo']);