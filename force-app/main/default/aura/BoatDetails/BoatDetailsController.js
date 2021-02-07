({
    doInit : function(component, event, helper) {
         console.log("BoatDetails doInit executed...: ");
 },    
     onBoatReviewAdded : function(component, event, helper){
         console.log("BoatDetails onBoatReviewAdded - Event Handled ...: ");
         //var selTab = event.getParam("boatReviewTabId");
         //component.set("v.tabId", "boatreviewtab");
                       
         component.find("tabs").set("v.selectedTabId", "boatreviewtab" );
         
         var br = component.find("btreviews");
         if(br){
             console.log("BoatDetails onBoatReviewAdded - Before Refresh ...: ");
             br.refresh();
             console.log("BoatDetails onBoatReviewAdded - after Refresh ...: ");
         }
         console.log("BoatDetails onBoatReviewAdded - method End ...: ");
         
     },
     onBoatSelected : function(component, event, helper){
         var selectedBoat  = event.getParam("boat");
 
 
         
        console.log("BoatDetails onBoatSelected - selectedBoatId: " + selectedBoat.Id);
  
         if(selectedBoat.Id != ""){
             component.set("v.boat", selectedBoat);
             component.set("v.Id", selectedBoat.Id);
             
             //var service = component.find("service");
     
             //service.reloadRecord() ;
                //console.log("BoatDetails onBoatSelected - service.reloadedRecord ...: ");
             
         }
         
     },
     onRecordUpdated: function(component, event, helper) {
         console.log("BoatDetails onRecordUpdated boatvar: " + component.get("v.boat"));
         //        var boat = component.get("v.boat");
         //console.log("onRecordUpdated called | boat: " + boat.Id);
         
         /*
         var changeType = event.getParams().changeType;
         
         console.log("Loaded Boat Record - changeType: " + eventParams.changeType);
  
         if (changeType === "ERROR") 
         { 
             //handle error; do this first! 
     
             // there’s an error while loading, saving, or deleting the record
             console.log("Error processing Boat Record");
             
         } else if (changeType === "LOADED") 
         { 
             // handle record load 
             
             // record is loaded (render other component which needs record data value)
             console.log("Record is loaded successfully.");
             console.log("Loaded Boat Record - Name: " + component.get("v.boat.Name"));    
             
         } else if (changeType === "REMOVED") 
         { 
             // handle record removal 
             
             // record is deleted
             console.log("Removed Boat Record - Name: " + component.get("v.boat.Name"));
             
         } else if (changeType === "CHANGED") 
         { 
             // handle record change 
             // record is changed
             console.log("Changed Boat Record - Name: " + component.get("v.boat.Name"));
             
         }        
         */
         var br = component.find("btreviews");
         if(br){
             console.log("BoatDetails onRecordUpdated - Before Refresh ...: ");
             br.refresh();
             console.log("BoatDetails onRecordUpdated - after Refresh ...: ");
         }
         console.log("BoatDetails onRecordUpdated - method End ...: ");        
     },
     
 }) 