package com.This;

public class ThisTest {
	//实例变量（引用.的方式访问）
	 int num = 10;
	public static void main(String[] args) {
		//带有static的方法里面没有this(因为没有static的方法才是实例方法)
		//System.out.println(num);  编译错误
		//System.out.println(this.num);编译错误
		ThisTest a = new ThisTest();
		System.out.println(a.num); 
	}

}
