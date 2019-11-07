public class RecursiveSum {
     public static void main(String[] args) {
        int n = 10;
        int returnValue = sum(n);
        System.out.println(returnValue);
    }
    public static int sum(int n){
       
      
        if(n ==1) {
            return 1;
        }
        return n+sum(n-1);   
    }
}