package com.finalTest;

/*
 * final关键字：
 * 1.final是一个关键字，表示最终的，不可变的
 * 2.final修饰的类无法被继承
 * 3.final修饰的方法无法被覆盖
 * 4.final修饰的变量一旦赋值之后，不可重新赋值【不可二次赋值】
 * 5.final修饰的实例变量，必须手动赋值，不能采用系统默认值
 * 6.final修饰的引用，一旦指向某个对象之后，不能再指向其它对象，那么被指向的对象无法被垃圾回收器回收
 * final修饰符的引用，一旦指向某个对象之后，不能指向其它对象，但是所指向的对象内部的内存是可以被修改的
 * 7.final修饰的实例变量，一般和static联合使用，被称为常量
 * */
public class Test1 {

	public static void main(String[] args) {
		int i = 10;
		System.out.println(i);
		i = 20;
		System.out.println(i);
		/*
		 编译错误：无法为最终变量k分配值
		final int k = 100;
		k=200;
		*/
		

	}

}
