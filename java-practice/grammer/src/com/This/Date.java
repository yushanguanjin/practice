package com.This;

/*
 * this可以用在构造方法中，通过当前的构造方法调用其他的构造方法【语法格式：this(参数)：】
 * 
 * */
public class Date {
	
	private int year;
	private int month;
	private int day;
	
	public Date(int year, int month, int day) {
		this.year = year;
		this.month = month;
		this.day = day;
	}
	public Date(){
		this(1970,1,1);
	}
	public void println(){
		System.out.println(this.year);
	}
}
