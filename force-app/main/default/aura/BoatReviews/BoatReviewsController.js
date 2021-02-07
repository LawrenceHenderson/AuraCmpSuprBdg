({
    doInit : function(component, event, helper) {
          console.log("doInit BoatReviews ...: ");
          helper.onInit(component, event); 
     },
      onUserInfoClick : function(component, event, helper) {
          var uid = event.currentTarget.getAttribute("data-userid");
          var ntsEvent = $A.get("e.force:navigateToSObject");
          ntsEvent.setParams({
              "recordId" : uid,
          });
          ntsEvent.fire();       
      },
  })  