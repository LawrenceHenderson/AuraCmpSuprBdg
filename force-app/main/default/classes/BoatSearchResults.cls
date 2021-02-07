public with sharing class BoatSearchResults {
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId)
    {
        String soqlq = 'SELECT Id, Name, Contact__r.Name, Picture__c from Boat__c';
        if(!String.isEmpty(boatTypeId)){
            soqlq = 'SELECT Id, Name, Contact__r.Name, Picture__c from Boat__c where BoatType__c = \'' + boatTypeId + '\'';
        }

        System.debug('BoatSearchResults.getBoats() - soqlq: ' + soqlq);
        List<Boat__c> bts = Database.query(soqlq);

        return bts;

    } 

}