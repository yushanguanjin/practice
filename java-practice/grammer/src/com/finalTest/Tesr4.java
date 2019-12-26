package com.finalTest;

public class Tesr4 {
	public static void main(String[] args) {
		
	}
}
class Math{
	public static final double PI = 3.1415926;
}
class Chinese{
	//国籍，每一个中国人的国籍都是中国，而且国籍不会发生改变，为了防止国籍被修改，建议加final修饰符
	//final修饰的实例变量是不可变的，这种变量一般和static使用，被称为常量
	//常量的语法格式：public static final 类型 变量名 = 值
	//java规范中要求所有常量的名字全部大写，每个单词之间用下划线连接
	public static final String GUO_JI = "中国";
}