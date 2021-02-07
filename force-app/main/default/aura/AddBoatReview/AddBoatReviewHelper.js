({
	onInit : function(component, event, helper) {
        console.log("onInit AddBoatReviewHelper ...: ");
        
        // Prepare a new record from template
        component.find("service").getNewRecord(
            "BoatReview__c", // sObject type (objectApiName)
            null,      // recordTypeId
            false,     // skip cache?
            $A.getCallback(function() {
                var rec = component.get("v.newBoatReview");
                var error = component.get("v.newBoatError");
                if(error || (rec === null)) {
                    console.log("onInit Error initializing record template: " + error);
                    return;
                } else {
                    component.set("v.boatReview.Boat__c", component.get("v.boat.Id"));
                }
                console.log("onInit Record template initialized: " + rec.apiName);
            })
        );		
	},
    selectBoatReviewTab : function(component, event) {
       /* Fire Event */
        var addedBoatReviewEvent = component.getEvent("addedBoatReview");
        addedBoatReviewEvent.setParams({"boatReviewTabId" : "boatreviewtab"} );

        // Notify All Handlers
        addedBoatReviewEvent.fire();
        console.log("selectBoatReviewTab fired event addedBoatReview ...: ");

    }, 
})