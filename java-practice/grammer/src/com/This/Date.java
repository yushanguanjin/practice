package com.This;

/*
 * this�������ڹ��췽���У�ͨ����ǰ�Ĺ��췽�����������Ĺ��췽�����﷨��ʽ��this(����)����
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
