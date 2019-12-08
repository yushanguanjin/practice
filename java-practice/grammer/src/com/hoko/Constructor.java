package com.hoko;
/*
 * 构造方法是类里的一个特殊的方法，他不能有返回值（包括void）
 * 主要功能是用来在创建对象时初始化对象， 即为对象成员变量赋初始值，
 * 总与new运算符一起使用在创建对象的语句中。
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
