public class ProductTest{
    public static void main(String[] args) {
        
        //iphonex是引用
        Product iphonex = new Product();

        //访问实例变量的语法：引用、变量名
        System.out.println("商品的编号："+iphonex.productNo);
        System.out.println("商品的单价："+iphonex.price);
        
        /*
            编译错误:实例变量必须先创建对象，通过引用.的方式访问，不能直接使用类名.的方式访问

            System.out.println(ProductTest.productNo);
            System.out.println(ProductTest.price);

        */
    }
}