({
    doInit : function(component, event, helper){
        helper.loadBoatTypes(component, event, helper);
        helper.isLightningDesktop(component, event, helper);
    },
   onFormSubmit : function(component, event) {
       /* Fire Event */
        var selectedBoatTypeId = component.find("boatTypes").get("v.value");
        console.log("BoatSearchForm.onFormSubmit() - selectedBoatTypeId: " + selectedBoatTypeId);

        var formSubmitEvent = component.getEvent("formSubmit");
        formSubmitEvent.setParams({"formData":
               {"boatTypeId" : selectedBoatTypeId}
        });
        // Notify All Handlers
        formSubmitEvent.fire();
    },
    addNewBoat : function(component, event, helper) {
        var selectedBoatTypeId = component.find("boatTypes").get("v.value");
        console.log("addNewBoat() - selectedBoatTypeId: " + selectedBoatTypeId);

       var createRecordEvent = $A.get("e.force:createRecord");
       createRecordEvent.setParams({"entityApiName": "Boat__c", 
            "defaultFieldValues": {
                'BoatType__c': selectedBoatTypeId
             }
        });
       createRecordEvent.fire();
    },
})
