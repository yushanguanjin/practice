package com.finalTest;

public class Test2 {
	//��Ա����֮ʵ������
	/* ʵ��������Ĭ��ֵ��final���εı���һ����ֵ�������¸�ֵ
	 * �ۺϿ��ǣ�java�������չ涨ʵ������ʹ��final���η�֮�󣬱����ֶ���ֵ��
	 * ���ܲ���ϵͳĬ��ֵ
	 * final int age;//�������
	 * */
	//��һ�ֽ������
	final int age = 10;
	
	
	//�ڶ��ֽ������
	final int num;
	public Test2(){
		this.num = 20;
	}
	//���ϵ����ֽ����������ʵ�����Ͼ���һ�ַ�ʽ�������ڹ��췽��ִ�й��̵��и�ʵ��������ֵ
	public static void main(String[] args) {
		final int a;
		a=100;
		//���ɶ��θ�ֵ
		//a=200
	}
}
