({
    onPlotMapMarker: function (component,event,helper) { 
        console.log("Map.onPlotMapMarker() - Executed");
        
        var latitude  = event.getParam("lat");
        var longitude  = event.getParam("long");
        var boatname  = event.getParam("label");
        var boatid  = event.getParam("sObjectId");
        
        component.set("v.zoomLevel",10);
        component.set("v.markersTitle", boatname);
        
        component.set('v.mapMarkers', [{
            location: {
        		Latitude: latitude,
        		Longitude: longitude
            },
            title: boatname,
            value: boatid
        }]);
    }   
})

