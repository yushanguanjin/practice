package com.Static;
/*
 * 1.什么时候成员变量声明为实例变量呢？
 * 所有对象都有这个属性，但是这个属性的值会随着对象的变化而变化【不同对象的这个属性具体的值不同】
 * 2。什么时候成员变量声明为静态变量呢？
 * 所有对象都有这个属性，并且所有对象的这个属性的值是一定的。建议定义为静态变量，节省内存的开销
 * */
public class Chinese {

	String id;
	
	String name;
	//所有的中国人的国籍都是中国，这里声明为实例变量显然是不合适的，太浪费内存空间，没必要让每一个对象都保留一份"国籍"内存
	//String country;
	
	//静态变量在类加载的时候初始化，不需要创建对象，内存就开辟了
	//静态变量存储在方法区内存中
	static String country = "中国";
	
	
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
