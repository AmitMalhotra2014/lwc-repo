({
	myMethod : function(cmp, evt, hpr) {
        alert('Yes, I get called.. from Controller');
        hpr.helperMethod(cmp,evt);
	}
})