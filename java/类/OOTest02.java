public class OOTest02{
    public static void main(String[] args) {
        //创建User对象
        //u是局部变量
        //u保存内存地址指向堆内存的User对象
        User u = new User();
        //输出User对象内部实例变量的值
        System.out.println(u.no);//0
        System.out.println(u.name);//null
        System.out.println(u.addr);//null

        //修改User对象内部实例变量的值
        u.no = 110;
        u.name="Jack";//字符串比较特别，不需要new。"Jack"是一个java对象，属于string对象
        u.addr= new Address();
        System.out.println(u.name+"居住在哪个城市"+u.addr.city);


        u.addr.city = "北京";
        u.addr.street="朝阳";
        u.addr.zipcode="1111";


        System.out.println(u.no);//0
        System.out.println(u.name);//null
        System.out.println(u.addr);//null
    }
}