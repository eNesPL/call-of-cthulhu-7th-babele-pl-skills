Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {

		Babele.get().register({
			module: 'call-of-cthulhu-7th-babele-pl-skills',
			lang: 'pl-PL',
			dir: 'compendium'
		});
		
		
		
	}
});
