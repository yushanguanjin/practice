package com.This;

public class ThisTest {
	//ʵ������������.�ķ�ʽ���ʣ�
	 int num = 10;
	public static void main(String[] args) {
		//����static�ķ�������û��this(��Ϊû��static�ķ�������ʵ������)
		//System.out.println(num);  �������
		//System.out.println(this.num);�������
		ThisTest a = new ThisTest();
		System.out.println(a.num); 
	}

}
