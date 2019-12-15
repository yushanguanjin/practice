package com.This;

public class ThisTest2 {

	public static void main(String[] args) {
		ThisTest2.doSome();
		
		ThisTest2 tt = new ThisTest2();
		tt.doOther();
		tt.run();
	}
	//带有static
	public static void doSome(){
		System.out.println("do some!");
	}
	//实例方法
	public void doOther(){
		System.out.println("do other!");
	}
	//run是实例方法，调用run方法的一定是有对象存在的
	//一定是先创建了一个对象才能调用run方法
	public void run(){
		//在大括号的代码执行过程中一定是存在“当前对象”的，
		//也就是说这里一定是有this的
		System.out.println("run execute!");
		
		//doOther是一个实例方法，实例方法必须有对象的存在
		//以下代码的含义就是调用当前对象的doOther方法
		doOther();
		this.doOther();//比较完整的写法
	}
	

}
