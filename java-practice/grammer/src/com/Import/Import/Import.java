package com.Import;

import com.Package.*;
public class Import {
	/*���ս��ۣ�
	 * 	 ʲôʱ����Ҫimport?
	 * 		����java.lang���£����Ҳ���ͬһ�����µ�ʱ����Ҫʹ��import��������
	 * */
	public static void main(String[] args) {
		com.Package.Person p = new com.Package.Person();
		
		System.out.println(p.getAge());
		
		p.setAge(20);
		System.out.println(p.getAge());
		
		
		System.out.println(p.getName());
		
	}
}
