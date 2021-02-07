public with sharing class BoatTileApexController {
    @AuraEnabled
    public static Boat__c getBkgrndImage()
    {
        Boat__c bt = [SELECT Id, Name, Picture__c, Contact__r.name from Boat__c limit 1];

        return bt;

    }  

}