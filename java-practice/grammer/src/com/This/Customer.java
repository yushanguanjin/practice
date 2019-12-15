package com.This;
/*
 * 1.this是一个关键字，翻译为：这个
 * 2.this是一个引用，this是一个变量，this变量中保存了内存地址指向了自身，this存储在JVM内存java对象内部
 * 3.创建100个Java对象，每一个对象都有一个this,也就是说有100个不同的this
 * 4.this可以出现在“实例方法”中，this指向当前正在执行这个动作的对象（this代表当前对象）
 * 5.this在多数情况下都是可以省略不写的
 * 6，this不能使用在带有static的方法当中
 * */
public class Customer {
	// 没有static关键字的变量被称为"实例变量"
	//没有static关键字的方法被称为"实例方法"
	//当一个行为/动作执行的过程中需要对象参与，那么这个方法一定要定义为“实例方法”，不要带static关键字
	 String name;
	
	public Customer() {
		
	}
	
	public  void shopping(){
		System.out.println(name+"在购物");
		System.out.println(this.name+"在购物");
	}
	public  static void doSome(){
		
	}
	
}
