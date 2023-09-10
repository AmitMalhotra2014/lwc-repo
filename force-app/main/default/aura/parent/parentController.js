({
	handleEvent : function(cmp, evt, hpr) {
        alert('From Parent');
       var val = evt.getParam('message');
        alert(val);
		
	}
})