({
    // Check requiered fields a filled
    validateItemForm : function(component) {
        var validItem = true;
        var nameField = component.find("itemname");
        var itemname = nameField.get("v.value");
        if($A.util.isEmpty(itemname)){
            validItem = false;
            nameField.set("v.errors", [{message: "Item name cannot be blank"}]);
        }
        else{
            nameField.set("v.errors", null);
        }

        var quantityField = component.find("quantity");
        var quantity = quantityField.get("v.value");
        if($A.util.isEmpty(quantity)){
            validItem = false;
            quantityField.set("v.errors", [{message: "Item quantity cannot be blank"}]);
        }
        else{
            quantityField.set("v.errors", null);
        }

        var priceField = component.find("price");
        var price = quantityField.get("v.value");
        if($A.util.isEmpty(price)){
            validItem = false;
            priceField.set("v.errors", [{message: "Item quantity cannot be blank"}]);
        }
        else{
            priceField.set("v.errors", null);
        }
    },
    //Fire Event
    createItem: function(component, newItem) {
        var createEvent = component.getEvent("createItem");
        createEvent.setParams({ "item": newItem });
        createEvent.fire();
        component.set("v.newItem",{
            'sObjectType': 'Camping_Item__c',
            'Quantity__c': '0',
            'Price__c': '0',
            'Packed__c': false
        })
    }
})
