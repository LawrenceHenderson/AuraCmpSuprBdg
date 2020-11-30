({
    getbkrndImg: function(component){
        //create the action
        console.log("BoatTileHelper started");
        var action = component.get("c.getBkgrndImage");

        //add the callback behavior for when the response is received
        action.setCallback(this,function(response){
            var state = response.getState();
            if (state === "SUCCESS"){
                component.set("v.boat", response.getReturnValue());
                //component.set("v.cntctnm", response.getReturnValue());
                //component.set("v.boaturl", response.getReturnValue());
                console.log(response.getReturnValue());

            } else {
                console.log("Failed with state: " + state);

            }
    
        });

        //send action off to be executed
        $A.enqueueAction(action);
           
    },
 
    getbtcntctNm: function(component){
        //create the action
        console.log("BoatTileHelper started");
        var action = component.get("c.getBtCntctNm");

        //add the callback behavior for when the response is received
        action.setCallback(this,function(response){
            var state = response.getState();
            if (state === "SUCCESS"){
                 //component.set("v.boat", response.getReturnValue());
                component.set("v.cntctnm", response.getReturnValue());
                //component.set("v.boaturl", response.getReturnValue());
                console.log(response.getReturnValue());

            } else {
                console.log("Failed with state: " + state);

            }
    
        });

        //send action off to be executed
        $A.enqueueAction(action);
           
    },
 
})
