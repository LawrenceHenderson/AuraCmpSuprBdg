({
	doInit : function(component, event, helper) {
        console.log("BoatDetail.doInit() - executed boatvar: " + component.get("v.boat"));
	    var navEvent = $A.get("e.force:navigateToSObject");
        if(navEvent){
            component.set("v.dspFullDtls",true);
        }
    },
	onFullDetails : function(component, event, helper) {
        console.log("BoatDetail.onFullDetails() - executed ...");
         
        var navEvent = $A.get("e.force:navigateToSObject");
        var boat = component.get("v.boat");
        if(boat){
            navEvent.setParams({"recordId" : boat.Id});
            navEvent.fire();
        }	
	}
})
