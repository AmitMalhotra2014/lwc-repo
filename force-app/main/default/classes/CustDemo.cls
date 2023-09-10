public class CustDemo {
    
     public static final String abc= 'abc';
    
    
    public  void getinfo() {
        
        System.debug(System.Label.Save);
       
            
           
        
        mysetting__c ms1 = mysetting__c.getInstance('mydataset');
        mysetting__c ms2 = mysetting__c.getvalues('mydataset');
        System.debug(ms1.States__c);
        System.debug(ms2.States__c);
        System.debug(mysetting__c.getall().values());
        List<mysetting__c> aa = mysetting__c.getall().values();
       
        
        my_metadt__mdt md = my_metadt__mdt.getInstance('my_custom_metadata');
        System.debug(md.status__c);
        System.debug(my_metadt__mdt.getall());
        
        
    }

}