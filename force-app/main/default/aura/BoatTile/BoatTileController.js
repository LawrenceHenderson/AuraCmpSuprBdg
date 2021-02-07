({
	doInit : function(component, event, helper) {
		 // Keep
		 //console.log("BoatTile.doInit() - executed");
		 
 },
 onBoatClick : function(component, event, helper) {
		 var selectedBoat = component.get("v.boat");
		 var selectedBoatId = selectedBoat.Id;
 
		 var aVar = component.get("v.selected");
		 console.log("BoatTile.onBoatClick() - aVar: " + aVar.valueOf());
		 if(aVar.toString() === "false"){
			 console.log("BoatTile.onBoatClick() - aVar is FALSE");
		 } else {
			 console.log("BoatTile.onBoatClick() - aVar is True");
			 selectedBoatId = "";
		 }
 
		 console.log("BoatTile.onBoatClick() - selectedBoatId: " + selectedBoatId);
 
		 var boatIdEvent = component.getEvent("boatId");
		 boatIdEvent.setParams({"boatId" : selectedBoatId});
 //
		 var selVar = component.get("v.selected");
		 console.log("BoatTile.onBoatClick() - selVar: " + selVar);
 
 //
		 // Notify All Handlers
		 // Handler on BoatSearchResults
		 boatIdEvent.fire();
 
		 console.log("BoatTile.onBoatClick() - boatIdEvent.fired: " + boatIdEvent.getParam("boatId"));
	 
		 // ...  Fire Event 2
 /*   
   The $A namespace is the entry point for using the framework in JavaScript code.
   For all the methods available in $A, 
   ***  see the JavaScript API at https://MyDomainName.lightning.force.com/auradocs/reference.app ***
   A component bundle can contain JavaScript code in a client-side controller, helper, or renderer. 
   Client-side controllers are the most commonly used of these JavaScript resources.  
   
   */
		 var selBt = component.get("v.boat");
		 
		 // did not work -- var boatEvent = component.getEvent("selboat");
		 // Changed to Application event
		 var boatEvent = $A.get("e.c:BoatSelected");
		 boatEvent.setParams({"boat" : selBt});
 
		 //console.log("BoatTile.onBoatClick() - boatEvent.getParam: " + boatEvent.getParam("boat"));
		 
		 //console.log("BoatTile.onBoatClick() - get(v.selected): " + component.get("v.selected"));
		 //console.log("BoatTile.onBoatClick() - selVar: " + selVar);
 
		 component.set("v.selected", selVar);
 
		 // Notify All Handlers
		 boatEvent.fire();
		 
		 // Handler on BoatDetails
		 console.log("BoatTile.onBoatClick() - boatEvent.fired");
		 
		 // Map Application event
		 var mapEvent = $A.get("e.c:PlotMapMarker");
		 mapEvent.setParams({
				"sObjectId": selBt.Id,
				"lat": selBt.Geolocation__Latitude__s,
				"long": selBt.Geolocation__Longitude__s,
				"label": selBt.Name
		 });
		 
		 // Notify All Handlers
		 mapEvent.fire();
		 
		 // Handler on BoatDetails
		 console.log("BoatTile.onBoatClick() - mapEvent.fired");
	}
 })
 