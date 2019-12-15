package com.Static;

/*
 * 可以使用static关键字来定义静态代码块
 * 1.语法格式：
 * 	 static{
 * 		java语句
 *   }
 * 2.静态代码块在类加载是执行，并且只执行一次
 * 3.静态代码块在一个类中可以编写多个，并且遵循自上而下的顺序依次执行
 * */
public class 静态代码块 {

	static{
		System.out.println("类加载-->1");
	}
	static{
		System.out.println("类加载-->2");
	}
	static{
		System.out.println("类加载-->3");
	}
	public static void main(String[] args) {
		System.out.println("main begin");

	}

}
