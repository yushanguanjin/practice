public class OOTest03{
    public static void main(String[] args) {
        //u是引用，是局部变量
        User u = new User();
        //a是引用，是局部变量
        Address a = new Address();
        u.addr = a;
        System.out.println(u.addr.city);
        a.city = "天津";
        System.out.println(u.addr.city);
    }
}