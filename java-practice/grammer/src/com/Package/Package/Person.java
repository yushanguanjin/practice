package com.Package;

/*
 * 1.关于java语言当中的包机制：引入这种机制主要是为了方便程序的管理。
 * 		不同功能的类被放到不同的软件包当中，查找比较方便，管理比较方便，易维护
 * 2.怎么定义package?
 * 		 在java源程序的第一行编写package语句
 * 		语法结构：
 * 		package包名
 * 3.包名的命名规范：
 * 		公司域名倒序+项目名+模块名+功能名
 * 		采用这种方式重名的几率较低，因为具有全球唯一性
 * 		例如：
 * 		com.bjpowernode.oa.user.service
 * 		org.apache.tomact.core
 * 4.包名要求全部小写，包名也是标识符，必须遵守标识符的命名规则
 * 5.一个包名对应的是一个目录
 * 6.使用了package机制之后，应该怎样编译？
 * 		使用了package机制，类名不再是Introduction,是com.Package.Introduction
 * 	   	  编译：javac java源文件路径(在硬盘上生成一个class文件，Introduction.class)
 * 	 	 手动方式创建目录，将Introduction.class字节码文件放到指定的目录下
 * 		运行：java  com.Package.Introduction
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
