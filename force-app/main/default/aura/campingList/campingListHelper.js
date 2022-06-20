({
    //Create Item
    createItem: function(component, item) {
        // Create the action
        var action = component.get("c.saveItem");
        action.setParams({
            "item": item
        });
        // Add callback behavior for when response is received
        action.setCallback(this, function(response){
            let state = response.getState();
            if (state === "SUCCESS") {
                var items = component.get("v.items");
                items.push(response.getReturnValue());
                component.set("v.items", items);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    },
})
