({
	chamaContato : function (component, event, helper) {
		var action = component.get('c.RetornaListinhaAcc');
        action.setCallback(this, function(response){
            
           
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set('v.contatos',response.getReturnValue());
                
                
            }
        });
         $A.enqueueAction(action);
	}
});
