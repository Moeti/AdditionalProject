({
    createItem : function(component, item) {
        var campingItems = component.get("v.items");
        var newItem = JSON.parse(JSON.stringify(newItem));

        campingItems.push(newItem);
        component.set("v.items", campingItems);

        component.set("v.newItem", {
            'sObjectType':'Camping_Item__c',
            'Quantity__c':'0',
            'Price__c':'0',
            'Packed__c':false});
    }
})
