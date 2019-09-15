/*
    关于浮点型数据类型：
        float单精度 4个字节
        double双进度 8个字节

        我们的（String[] args）中的String使用的是String.class字节码文件
        
        在java语言中，所有的浮点型字面值，默认被当做double类型来处理
        要想该字面值当做float类型来处理，需要在字面值后面添加F/f
          
*/
public class Test{
    public static void main(String[] args) {
        
        //强制类型转换
        float  f = (float)5.1;
        //没有类型转换
        float  f = 5.1f;
    }
}