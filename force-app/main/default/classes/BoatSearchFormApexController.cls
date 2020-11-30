public with sharing class BoatSearchFormApexController {
     public BoatSearchFormApexController() {
        // constructor

    }

    @AuraEnabled
    public static List<BoatType__c> getBoatTypes()
    {
        return [SELECT Id, Name from BoatType__c ORDER BY Name];
    }    

    @AuraEnabled
    public static Boolean getTeams()
    {
        Boolean retVal = false;
        String displayed = UserInfo.getUiThemeDisplayed();
        if(displayed.equalsIgnoreCase('Theme4d')){
            retVal = true;

        }
        return retVal;

    }    
    
}
