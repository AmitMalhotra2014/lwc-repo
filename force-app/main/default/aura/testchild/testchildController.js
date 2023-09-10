({
	mymethod : function(cmp, evt, hpr) {
        alert('From Child');
        var e = cmp.getEvent('myevt');
        alert('Get the Event ->' + e);
        e.setParams({"msg" : "Love you Salesforce"});
        e.fire();
		
	}
})