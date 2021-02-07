({
    onSearch: function(component, btId){
       var action = component.get("c.getBoats");
       action.setParams({"boatTypeId": btId });

       //add the callback behavior for when the response is received
       action.setCallback(this,function(response){
           var state = response.getState();
           if (state === "SUCCESS"){
               component.set("v.boats", response.getReturnValue());
               //console.log("onSearchhelper success Response:" + response.getReturnValue());

           } else {
               console.log("onSearchhelper Response Failed with state: " + state);

           }
           
           var xy = component.get("v.boats");
           if(xy == "")
           {
             //component.set("v.noboatsMsg", "\"No boats found\"");
               component.set("v.noboatsMsg", "No boats found");
               console.log("onSearchhelper empty boats");
           } else {
               component.set("v.noboatsMsg", "");
            }
       });

       //send action off to be executed
       $A.enqueueAction(action);
   },
})
