/*
作用域：在同一个大括号内。在不同的作用域内，变量名是可以相同的
局部变量：在方法体当中声明的变量
成员变量：在方法体外【类体内】声明的变量叫做成员变量



类体中不能直接编写java语句【除声明变量之外】
*/
public class Variable{
    //成员变量
    int k = 100;
    public static void main(String[] args) {
        for(int a= 0;a<10;a++) {//a变量的作用域是整个for循环，for循环结束之后，a变量的内存就释放了
        }
        //这里无法访问a变量
        System.out.println(a);
    }
    public static void doSome() {
        //
        int i = 90;
    }
}