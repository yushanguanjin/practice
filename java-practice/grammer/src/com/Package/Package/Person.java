package com.Package;

/*
 * 1.����java���Ե��еİ����ƣ��������ֻ�����Ҫ��Ϊ�˷������Ĺ���
 * 		��ͬ���ܵ��౻�ŵ���ͬ����������У����ұȽϷ��㣬����ȽϷ��㣬��ά��
 * 2.��ô����package?
 * 		 ��javaԴ����ĵ�һ�б�дpackage���
 * 		�﷨�ṹ��
 * 		package����
 * 3.�����������淶��
 * 		��˾��������+��Ŀ��+ģ����+������
 * 		�������ַ�ʽ�����ļ��ʽϵͣ���Ϊ����ȫ��Ψһ��
 * 		���磺
 * 		com.bjpowernode.oa.user.service
 * 		org.apache.tomact.core
 * 4.����Ҫ��ȫ��Сд������Ҳ�Ǳ�ʶ�����������ر�ʶ������������
 * 5.һ��������Ӧ����һ��Ŀ¼
 * 6.ʹ����package����֮��Ӧ���������룿
 * 		ʹ����package���ƣ�����������Introduction,��com.Package.Introduction
 * 	   	  ���룺javac javaԴ�ļ�·��(��Ӳ��������һ��class�ļ���Introduction.class)
 * 	 	 �ֶ���ʽ����Ŀ¼����Introduction.class�ֽ����ļ��ŵ�ָ����Ŀ¼��
 * 		���У�java  com.Package.Introduction
 * 
 * */
public class Person {
	public final static String MY_NAME = "ZS";
	public int age = 18;

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getName() {
		return MY_NAME;
	}

	public Person() {

	}
}
