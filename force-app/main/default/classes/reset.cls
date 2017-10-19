public with sharing class reset {

    @AuraEnabled
    public static void reset(){
        //wipe dealer feedback
        delete [select id from Feedback__c where createdDate >: System.now().addHours(-24)];
        //wipe all the chatter posts
        delete [select id from feeditem];
    }
}
