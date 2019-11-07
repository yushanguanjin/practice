/*在返回类型是void的方法当中使用return语句 
    return 语句出现在返回值为void的方法当中主要是为了用来结束当前方法

*/ 
public class Method1{

    public static void main(String[] args){
        m();
        n();
    }
    //编译错误：对于结果类型为空的方法，无返回值
    // public static void m(){
    //     return 10;
    // }

    public static void m(){
        return ;
    }
    public static void n(){
        for(int i =0;i<10;i++) {
            if(i==5) {
                return;//不是终止for循环，终止的是n方法
                //break;//终止的是for循环
            }
            System.out.println("i-->"+i);
        }
        System.out.println("a");
    }
}