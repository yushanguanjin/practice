package com.hoko;
/*
 * ���췽���������һ������ķ������������з���ֵ������void��
 * ��Ҫ�����������ڴ�������ʱ��ʼ������ ��Ϊ�����Ա��������ʼֵ��
 * ����new�����һ��ʹ���ڴ������������С�
 * 
 * */
public class Constructor {

	public static void main(String[] args) {
		User u = new User(20);
		add(u);
		System.out.println("main->"+u.age);
	}
	public static void add(User u) {
		u.age++;
		System.out.println("add->"+u.age);
	}

}

class User{
	int age;
	public User(int i){
		age = i;
	}
	
}
