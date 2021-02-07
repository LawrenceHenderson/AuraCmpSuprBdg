({
	doInit : function(component, event, helper) {
        console.log("doInit AddBoatReviewHelper ...: ");
        helper.onInit(component, event); 
	},
    onSave : function(component, event, helper) {
			console.log("onSave AddBoatReview - Boat__c: " + component.get("v.boatReview").Boat__c);                                
            var cr = component.get("v.boatReview");
            console.log('onSave BoatReview - Name: ' + cr.Name);
            console.log('onSave BoatReview - Comment__c: ' + cr.Comment__c);
        
            component.find("service").saveRecord(function(saveResult) {
                if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                    // record is saved successfully
                    // 
                    var resultsToast = $A.get("e.force:showToast");
                    if (resultsToast){
                        //fire the toast event in Salesforce app and Lightning Experience
                        resultsToast.setParams({
                            "title": "Saved",
                            "message": "The record was saved."
                        });
                        resultsToast.fire();
                    } else {
                        //your toast implementation for a standalone app here
                        alert("The record was saved.");
                    }
                    
                    helper.onInit(component, event);
                    
                    //helper.selectBoatReviewTab(component, event);
                    var addedBoatReviewEvent = component.getEvent("BoatReviewAdded");
                    addedBoatReviewEvent.setParams({"boatReviewTabId" : "boatreviewtab"} );

                    // Notify All Handlers
                    addedBoatReviewEvent.fire();
                    console.log("onSave AddBoatReview fired event addedBoatReview ...: ");
 
                } else if (saveResult.state === "INCOMPLETE") {
                    // handle the incomplete state
                    console.log("User is offline, device doesn't support drafts.");
                } else if (saveResult.state === "ERROR") {
                    // handle the error state
                    //console.log('Problem saving BoatReview, error: ' + JSON.stringify(saveResult.error));
                    console.log('Problem saving BoatReview, error: ' + JSON.stringify(saveResult));
                } else {
                    console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
                }
            });

        //}        
    },
    onRecordUpdated : function(component, event, helper) {
    },
})
