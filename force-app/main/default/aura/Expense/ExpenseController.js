({
    //Reimbursed Click Function
    clickReimbursed: function(component, event, helper) {
        // Create expense
        let expense = component.get("v.expense");
        // Create updateEvent
        let updateEvent = component.getEvent("updateExpense");
        updateEvent.setParams({ "expense": expense });
        // Fire Event
        updateEvent.fire();
    }
})
