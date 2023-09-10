({
	helperMethod : function(cmp,evt) {
        alert('From Helper');
        var studentName = cmp.get('v.sName');
        var studentFaterName = cmp.get('v.sFatherName');
        
        var mid = cmp.find('myId');
        alert('Find-->' + mid.get('v.value'));
        
        
        alert('studentName = ' + studentName);
        alert('studentFaterName = ' + studentFaterName);
        
        
         var action = cmp.get('c.insertStudent'); 
        // method name i.e. insertStudent should be same as defined in apex class
        // params name i.e. nm and fnm should be same as defined in insertStudent  method
        action.setParams({
            "nm" : studentName,
            "fnm" : studentFaterName
        });
        action.setCallback(this, function(a){
            var state = a.getState(); // get the response state
            if(state == 'SUCCESS') {
                alert('Record Inserted Successfully..');
            }
        });
        $A.enqueueAction(action);
		
	}
})