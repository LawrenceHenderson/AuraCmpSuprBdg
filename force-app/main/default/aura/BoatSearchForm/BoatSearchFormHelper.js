({
    loadBoatTypes: function(component, event, helper){
        var action = component.get("c.getBoatTypes");
        //add the callback behavior for when the response is received
        action.setCallback(this,function(response){
            var state = response.getState();
            if (state === "SUCCESS"){
                component.set("v.BoatTypes", response.getReturnValue());
                //console.log("BoatSearchFormHelper - response: " + response.getReturnValue());

            } else {
                console.log("BoatSearchFormHelper - Failed with state: " + state);
            }
    
        });
        //send action off to be executed
        $A.enqueueAction(action);
     },
    isLightningDesktop: function (component, event, helper) {
        //create the action
        // get theme UserInfo.getUiThemeDisplayed()
        var action = component.get("c.getTeams");

        //add the callback behavior for when the response is received
        action.setCallback(this,function(response){
            var state = response.getState();
            if (state === "SUCCESS"){
                component.set("v.teams", response.getReturnValue());
                //console.log("BoatSearchFormHelper.isLightningDesktop - response: " + response.getReturnValue());

            } else {
                console.log("BoatSearchFormHelper.isLightningDesktop - Failed with state: " + state);
            }
            });

        //send action off to be executed
        $A.enqueueAction(action);
    },
})