package com.polymorphic;


public class Bird  extends Animal{
	//重写从父类中继承过来的方法
	public void move(){
		System.out.println("鸟在移动");
	}
	public void fly(){
		System.out.println("Bird Fly");
	}
}