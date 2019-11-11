public class OOTest05{
    public static void main(String[] args){
        Customer c = new Customer();
        System.out.println(c.id);

        c=null;
        System.out.println(c.id);

    }
}