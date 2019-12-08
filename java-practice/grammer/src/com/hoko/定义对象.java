package com.hoko;

public class 定义对象 {

	// 主函数
	public static void main(String[] args) {
		定义对象 obj = new 定义对象(0, 0);
		obj.func();
		定义对象 obj2 = new 定义对象(1, 5);
	}

	public void func() {
		System.out.println("如何定义一个对象");
	}

	定义对象(int a, int b) {
		System.out.println(a + b);
	}
}