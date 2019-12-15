package com.This;

/*
 * this什么时候不能省略？
 * 用来区分局部变量和实例变量的时候，this不能省略
 * 
 * 
 * 默认参数
 * */
public class 不能省略this {
	//属性
	private int id;
	private String name;
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		不能省略this t =  new 不能省略this();
		t.setId(10);

	}
	public void setId(int id) {
		this.id = id;
		System.out.println("测试");
	}

}
