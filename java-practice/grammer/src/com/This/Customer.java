package com.This;
/*
 * 1.this��һ���ؼ��֣�����Ϊ�����
 * 2.this��һ�����ã�this��һ��������this�����б������ڴ��ַָ��������this�洢��JVM�ڴ�java�����ڲ�
 * 3.����100��Java����ÿһ��������һ��this,Ҳ����˵��100����ͬ��this
 * 4.this���Գ����ڡ�ʵ���������У�thisָ��ǰ����ִ����������Ķ���this����ǰ����
 * 5.this�ڶ�������¶��ǿ���ʡ�Բ�д��
 * 6��this����ʹ���ڴ���static�ķ�������
 * */
public class Customer {
	// û��static�ؼ��ֵı�������Ϊ"ʵ������"
	//û��static�ؼ��ֵķ�������Ϊ"ʵ������"
	//��һ����Ϊ/����ִ�еĹ�������Ҫ������룬��ô�������һ��Ҫ����Ϊ��ʵ������������Ҫ��static�ؼ���
	 String name;
	
	public Customer() {
		
	}
	
	public  void shopping(){
		System.out.println(name+"�ڹ���");
		System.out.println(this.name+"�ڹ���");
	}
	public  static void doSome(){
		
	}
	
}
