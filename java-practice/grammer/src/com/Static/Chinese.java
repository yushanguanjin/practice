package com.Static;
/*
 * 1.ʲôʱ���Ա��������Ϊʵ�������أ�
 * ���ж�����������ԣ�����������Ե�ֵ�����Ŷ���ı仯���仯����ͬ�����������Ծ����ֵ��ͬ��
 * 2��ʲôʱ���Ա��������Ϊ��̬�����أ�
 * ���ж�����������ԣ��������ж����������Ե�ֵ��һ���ġ����鶨��Ϊ��̬��������ʡ�ڴ�Ŀ���
 * */
public class Chinese {

	String id;
	
	String name;
	//���е��й��˵Ĺ��������й�����������Ϊʵ��������Ȼ�ǲ����ʵģ�̫�˷��ڴ�ռ䣬û��Ҫ��ÿһ�����󶼱���һ��"����"�ڴ�
	//String country;
	
	//��̬����������ص�ʱ���ʼ��������Ҫ���������ڴ�Ϳ�����
	//��̬�����洢�ڷ������ڴ���
	static String country = "�й�";
	
	
	public Chinese(){
		
	}
//	public Chinese(String id,String name,String country){
//		this.id =id;
//		this.name =name;
//		this.country = country;
//	}
	public  Chinese(String id,String name){
		this.id =id;
		this.name =name;
	}
}
