package com.finalTest;

public class Test3 {

	public static void main(String[] args) {
		User u = new User(100);
		u = new User(200);
		
		final User user = new User(30);
		//user = new User(50); final修饰的引用，一旦指向某个对象之后，不能指向其它对象，那么
		//被指向的对象无法被垃圾回收期回收
		
		user.id = 50;//final修饰的引用虽然指向某个对象之后不能指向其他对象，但是指向的对象的内部的内存是可以修改的
		
	}

}
