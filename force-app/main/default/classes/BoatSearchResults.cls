public with sharing class BoatSearchResults {
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId)
    {
/*                         fields="Id,Name,Description__c,Price__c,Length__c,Contact__r.Name,
                                  Contact__r.Email,Contact__r.HomePhone,BoatType__r.Name,Picture__c"
*/        
        String soqlq = 'SELECT Id, Name,Description__c,Price__c,Length__c,Contact__r.Name, ' + 
            'Contact__r.Email,Contact__r.HomePhone,BoatType__r.Name,Picture__c, ' + 
            'Geolocation__Latitude__s, Geolocation__Longitude__s from Boat__c';
        
        if(!String.isEmpty(boatTypeId)){
            soqlq += ' where BoatType__c = \'' + boatTypeId + '\'';
        }

        System.debug('BoatSearchResults.getBoats() - soqlq: ' + soqlq);
        List<Boat__c> bts = Database.query(soqlq);

        return bts;

    } 

}
