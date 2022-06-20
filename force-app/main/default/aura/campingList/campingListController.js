({
    // Load camping items from Salesforce
    doInit: function(component, event, helper) {
        // Create the action
        var action = component.get("c.getItems");
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.items", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    },
    //Create Item
    createItem: function(component, item) {
        // Create the action
        var action = component.get("c.saveItem");
        action.setParams({
            "item": item
        });
        // Add callback behavior for when response is received
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                let Items = component.get("v.Items");
                Items.push(response.getReturnValue());
                component.set("v.Items", Items);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    },
    //click function for Create Item
    clickCreateItem  : function(component, event, helper) {
    var validItem = component.find('newcampingform').reduce(function(validSoFar, inputCmp){
        // Show error messages for invalid fields
        inputCmp.showHelpMessageIfInvalid();
        return validSoFar && inputCmp.get('v.validity').valid;
    }, true);

    // If we pass error checking, Continue
    if(validItem){
        // Create the new item
        var newItem = component.get("v.newItem");
        console.log("Create item: " + JSON.stringify(newItem));
        helper.createItem(component, newItem);
    }},
    //Add Item
    handleAddItem: function(component, event, helper) {
        var item = event.getParam("item");
        // Create the action
        var action = component.get("c.saveItem");
        action.setParams({
            "item": item
        });
        // Add callback behavior for when response is received
        action.setCallback(this, function(response){
            var state = response.getState();
            if(component.isValid() && state=== "SUCCESS")
            var items = component.get("v.items");
            items.push(item);
            component.set("v.items", items)
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    }

})
