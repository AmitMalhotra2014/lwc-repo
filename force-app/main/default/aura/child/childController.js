({
	mymethod : function(cmp, evt, hpr) {
        alert('I called..');
        var e = cmp.getEvent('myevt');
        alert('Event ' + e);
        e.setParams({"message" : "See The Magic"});
        e.fire();
        
		
	}
})