({
    kill : function(component) {
        var action = component.get("c.reset");
        action.setCallback(this, function(a){
            var state = a.getState();
            if (state === "SUCCESS") {
                console.log(a);
                $A.get("e.force:showToast")
                    .setParams({"message":"Demo Reset!", "type":"success"})
                    .fire();

            } else if (state === "ERROR") {
                console.log(a.getError());
                $A.get("e.force:showToast")
                .setParams({"message":"Something bad happened--see the browser logs for more info", "type":"error"})
                .fire();
            }
        });
        $A.enqueueAction(action);
    }
})
