public class StudentRecords {
    
    @auraEnabled
    public static void insertStudent(String nm, String fnm) {
        Student__c s = new Student__c();
        s.Name = nm;
        s.Student_Father_Name__c = fnm;
        insert s;
        
    }

}