public class Student{
    public static void main(String[] args) {
        //new是java语言当中的一个运算符
        //new运算符的作用是创建对象，在JVM内存当中开辟新的内存空间
        //方法区内存：在类加载的时候，class字节码代码片段被加载到该内存空间当中
        //栈内存（局部变量）：方法代码片段执行的时候，会给该方法分配内存空间，在栈内存中压栈
        //堆内存：new的对象在堆内存中存储
        
        Student s = new Student();
    }
}