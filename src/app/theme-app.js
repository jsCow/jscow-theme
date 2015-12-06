$(function(){
	
	console.time('all');
	
	var panel1 = jsCow.get(jsCow.res.components.panel, { 
		title: 'Panel Title'
	});

	var btn1 = jsCow.get(jsCow.res.components.button, { 
		text: 'Button 1', 
		icon: {
			name: 'user',
			direction: 'l'
		}
	});

	var btn2 = jsCow.get(jsCow.res.components.button, { 
		text: 'Button 2', 
		icon: {
			name: 'refresh',
			direction: 'l'
		}
	});

	panel1
		.add(btn1)
		.add(btn2)
		.run();
	
	console.timeEnd('all');
	console.log(jsCow.componentsObjectList.length, "components created...");
	
});
