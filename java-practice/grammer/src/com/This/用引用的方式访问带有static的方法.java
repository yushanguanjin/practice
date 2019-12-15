package com.This;

public class 用引用的方式访问带有static的方法 {

	public static void main(String[] args) {
		用引用的方式访问带有static的方法.doSome();
		doSome();
		用引用的方式访问带有static的方法 t = new 用引用的方式访问带有static的方法();
		t.doSome();
		//引用是空
		t=null;
		/*带有static的方法，其实既可以采用类名.的方式访问，也可以用引用.的方式访问
		 * 但是即使采用引用的方式去访问，实际上执行的时候和引用执行的对象无关
		 * 在eclipse中开发的时候，使用引用的方式访问带有static的方法，程序会出现警告
		 * 所以带有static的方法还是建议使用类名.的方式访问 
		 * 
		 * 
		 * */
		t.doSome();//这里不会出现空指针异常

	}
	public static void doSome(){
		System.out.println("do some!");
	}

}
