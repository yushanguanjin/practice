package com.This;

public class ThisTest2 {

	public static void main(String[] args) {
		ThisTest2.doSome();
		
		ThisTest2 tt = new ThisTest2();
		tt.doOther();
		tt.run();
	}
	//����static
	public static void doSome(){
		System.out.println("do some!");
	}
	//ʵ������
	public void doOther(){
		System.out.println("do other!");
	}
	//run��ʵ������������run������һ�����ж�����ڵ�
	//һ�����ȴ�����һ��������ܵ���run����
	public void run(){
		//�ڴ����ŵĴ���ִ�й�����һ���Ǵ��ڡ���ǰ���󡱵ģ�
		//Ҳ����˵����һ������this��
		System.out.println("run execute!");
		
		//doOther��һ��ʵ��������ʵ�����������ж���Ĵ���
		//���´���ĺ�����ǵ��õ�ǰ�����doOther����
		doOther();
		this.doOther();//�Ƚ�������д��
	}
	

}
