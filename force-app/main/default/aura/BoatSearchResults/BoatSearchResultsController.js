({
    doSearch : function(component, event, helper){
        var fd;
        var params = event.getParam('arguments');

        console.log("doSearch - getParam() params1: " + JSON.stringify(params));
        console.log("doSearch - getParam() params2: " + params.formData.formData["boatTypeId"]);

        if (params) {
            fd = params.formData;
            var bt = params.formData.formData["boatTypeId"];
            helper.onSearch(component, bt);
        }

    },
    onBoatSelect : function(component, event, helper){
        var selectedBoatId  = event.getParam("boatId");
        console.log("onBoatSelect selectedBoatId: " + selectedBoatId);
        component.set("v.selectedBoatId", selectedBoatId);
        
    },
    onRender : function(component, event, helper){
console.log("onRender Executed ... : ");
        
    },
})
