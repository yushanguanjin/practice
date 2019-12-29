package com.Import;

import com.Package.*;
public class Import {
	/*最终结论：
	 * 	 什么时候需要import?
	 * 		不是java.lang包下，并且不在同一个包下的时候，需要使用import进行引入
	 * */
	public static void main(String[] args) {
		com.Package.Person p = new com.Package.Person();
		
		System.out.println(p.getAge());
		
		p.setAge(20);
		System.out.println(p.getAge());
		
		
		System.out.println(p.getName());
		
	}
}
