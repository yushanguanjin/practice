package com.This;

public class �����õķ�ʽ���ʴ���static�ķ��� {

	public static void main(String[] args) {
		�����õķ�ʽ���ʴ���static�ķ���.doSome();
		doSome();
		�����õķ�ʽ���ʴ���static�ķ��� t = new �����õķ�ʽ���ʴ���static�ķ���();
		t.doSome();
		//�����ǿ�
		t=null;
		/*����static�ķ�������ʵ�ȿ��Բ�������.�ķ�ʽ���ʣ�Ҳ����������.�ķ�ʽ����
		 * ���Ǽ�ʹ�������õķ�ʽȥ���ʣ�ʵ����ִ�е�ʱ�������ִ�еĶ����޹�
		 * ��eclipse�п�����ʱ��ʹ�����õķ�ʽ���ʴ���static�ķ������������־���
		 * ���Դ���static�ķ������ǽ���ʹ������.�ķ�ʽ���� 
		 * 
		 * 
		 * */
		t.doSome();//���ﲻ����ֿ�ָ���쳣

	}
	public static void doSome(){
		System.out.println("do some!");
	}

}
