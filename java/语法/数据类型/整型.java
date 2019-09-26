1.java语言当中的“整数型字面值”被默认当做int类型来处理。要让这个“整数型字面值“被当做long类型来处理的话，需要在”整数型字面值“后面添加l/L。建议使用大写的L.
2.java语言当中的整数型字面值有三种表示方式：
第一种：十进制【是一种缺省默认的方式】常用
第二种：八进制【在编写八进制整数型字面值的时候需要以0开始】
第三种：十六进制【在编写十六进制整数型字面值的时候需要以0x开始】


public class Test{
    public static void main(String[] args) {




        //小容量可以自动转换成大容量，称为自动类型转换机制
        long x = 456;
        System.out.println(x);


        long z = 21477483647L;
        System.out.println(z);







        //字面值没有超出byte类型的，自动转换int类型，只要没超出byte范围的，不报错
        byte b = 50;//可以
        byte c = 127;//可以
        byte d = 50;//不可以
        //纠正错误，需要使用强制类型转换符，但是一定会损失精度
        byte e = (byte)128;
    }
}