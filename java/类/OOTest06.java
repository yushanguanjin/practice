class  Computer{
    String brand;
    String style;
    String color;
}
class  Student{
    int no;
    String name;/*  */
    //Student对象含有Computer引用
    Computer notepad;
}

public class OOTest06{
    public static void main(String[] args) {
        Computer bijiben = new Computer();
        bijiben.brand = "联想";
        bijiben.style = "c00";
        bijiben.color = "联想";

        Student zhangsan = new Student();
        zhangsan.no = 123;
        zhangsan.name = "张三";
        zhangsan.notepad = bijiben;

        System.out.println(zhangsan.notepad.brand);

        zhangsan.notepad.brand = "苹果";
        System.out.println(zhangsan.notepad.brand);

        zhangsan.notepad = new Computer();
        System.out.println(zhangsan.notepad.brand);

    }
}