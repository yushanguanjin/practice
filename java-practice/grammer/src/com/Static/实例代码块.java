package com.Static;
/*
 * 实例语句块
 * 	1.实例代码块可以编写多个，也是遵循自上而下的顺序依次执行
 * 	2实例代码块在构造方法执行前执行，构造方法执行依次.实例代码块对应执行一次
 * 	3.实例代码块也是java语言为程序员准备一个特殊的时机，这个特殊时机被称为：对象初始化时机
 * */
public class 实例代码块 {

	
	public 实例代码块(){
		System.out.println("实例代码块类的缺省构造器执行");
	}
	//实例代码块
	{
		System.out.println(1);
	}
	//实例代码块
	{
		System.out.println(2);
	}
		
	//实例代码块
	{
		System.out.println(3);
	}
	public static void main(String[] args) {
		System.out.println("main begin");
		 new 实例代码块();
		 new 实例代码块();
	}
	
}
