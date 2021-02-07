({
    onInit : function(component, event) {
        console.log("BoatReviewsHelper - onInit: ");
        
        var action = component.get("c.getAll");
        action.setParams({ "boatId" : component.get("v.boat.Id") });
        
        console.log("BoatReviewsHelper - onInit after get c.getBoatReviews ...: ");

        //add the callback behavior for when the response is received
        action.setCallback(this,function(response){
            var state = response.getState();
            if (state === "SUCCESS"){
                component.set("v.boatReviews", response.getReturnValue());
                console.log("BoatReviewsHelper - response: " + response.getReturnValue());

            } else {
                console.log("BoatReviewsHelper - Failed with state: " + state);

            }
        });

        //send action off to be executed
        $A.enqueueAction(action);
         }
})

