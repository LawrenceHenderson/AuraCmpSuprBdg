({
    doInit : function(component, event, helper){

        helper.loadBoatTypes(component);
        helper.isLightningDesktop(component);
        
    },

    addNewBoat : function(component, event, helper) {
        //var bt = component.get("v.newBoat");
        //console.log("v.newBoat: " + bt);

        //var selbt = component.get("v.selectedBoatType");
        //var selectedBoatTypeId = component.get("v.selectedBoatTypeId");

        var selectedBoatTypeId = component.find("boatTypes").get("v.value");
        //var ddTypeList = component.find("btSelect");
        //selbt.Name = ddTypeList;
        //console.log("ddTypeList.value: " + ddTypeList);
        console.log("selectedBoatTypeId: " + selectedBoatTypeId);

       var createRecordEvent = $A.get("e.force:createRecord");
       createRecordEvent.setParams({"entityApiName": "Boat__c", 
            "defaultFieldValues": {
               // 'BoatType__c': JSON.stringify(selbt)
                'BoatType__c': selectedBoatTypeId
             }
        });
       createRecordEvent.fire();

    }

})
