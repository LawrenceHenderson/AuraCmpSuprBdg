({
    onFormSubmit : function(component, event, helper) {
        var evtData = event.getParam("formData");
        var boatTypeId = evtData.boatTypeId;
        
        console.log("BoatSearch.onFormSubmit Event.formData.boatTypeId: " + boatTypeId);
        
        /* */
        var fm = {"formData": 
            {"boatTypeId" : boatTypeId}
        };
        
/*      
Pass formData.boatTypeId from the controller to a public method on
the BoatSearchResults component called search.
  
*/
        var bsi = component.find("boatSearchId");
        bsi.search(fm);

    },    

})
