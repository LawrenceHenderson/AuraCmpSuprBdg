public with sharing class BoatTileApexController {
    @AuraEnabled
    public static Boat__c getBkgrndImage()
    {
        Boat__c bt = [SELECT Id, Name, Picture__c, Contact__r.name from Boat__c limit 1];

        //return [SELECT Id, Name, Picture__c from Boat__c limit 1];
        //return bt.Picture__c;

        return bt;

    }  

    @AuraEnabled
    public static String getBtCntctNm()
    {
        Boat__c bt = [SELECT Id, Name, Picture__c, Contact__r.name from Boat__c limit 1];

        return bt.Contact__r.name;

    }  

}
