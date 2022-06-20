({
    doInit : function(component) {
        // Create action
        var action = component.get("c.getPickListValuesIntoList");
        action.setParams({
            objectType: component.get("v.sObjectName"),
            selectedField: component.get("v.fieldName")
        });
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            var list = response.getReturnValue();
            component.set("v.picklistValues", list);
        })
        // Send action off to be executed
        $A.enqueueAction(action);
    }
})
