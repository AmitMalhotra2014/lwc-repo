public class F1 {
    
    @future
    public static void getSalary() {
        System.debug('From F1 Method..');
        System.enqueueJob(new F2());
            }

}