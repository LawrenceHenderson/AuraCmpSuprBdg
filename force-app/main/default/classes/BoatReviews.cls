public with sharing class BoatReviews {
    @AuraEnabled
    public static List<BoatReview__c> getBoatReviews()
    {
        List<BoatReview__c> br = new List<BoatReview__c>();
        
        return br;
    }
    
    @AuraEnabled
    public static List<BoatReview__c> getAll(ID boatId){
        System.debug('getAll() boatId: ' + boatId);
         List<BoatReview__c> br = new List<BoatReview__c>();
        /*  
           Id, Name, Comment__c, Rating__c, LastModifiedDate, CreatedDate, CreatedBy.Name, CreatedBy.SmallPhotoUrl, CreatedBy.CompanyName
*/
        br = [select Id, Name, Comment__c, Rating__c, LastModifiedDate, CreatedDate, 
              CreatedBy.Name, CreatedBy.SmallPhotoUrl, CreatedBy.CompanyName from BoatReview__c where Boat__c =:boatId order by CreatedDate];
        for(BoatReview__c bt: br){
            bt.Name = bt.Name.toUpperCase();
            //bt.Rating__c = 3;
            
        }
        
        
        return br;
        
    }

}

