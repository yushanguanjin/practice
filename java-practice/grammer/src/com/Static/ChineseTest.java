package com.Static;

public class ChineseTest {

	public static void main(String[] args) {
		/*//�����й��˶���1
		Chinese zhangsan = new Chinese("1","����","�й�");
		System.out.println(zhangsan.id+","+zhangsan.name+","+zhangsan.country);
		
		//�����й��˶���2
		Chinese lisi = new Chinese("2","����","�й�");
		System.out.println(lisi.id+","+lisi.name+","+lisi.country);
		
		//�����й��˶���3
		Chinese wangwu = new Chinese("3","����","�й�");
		System.out.println(wangwu.id+","+wangwu.name+","+wangwu.country);
		*/
		
		Chinese zhangsan = new Chinese("1","����");
		System.out.println(zhangsan.id+","+zhangsan.name+","+Chinese.country);
		
		//�����й��˶���2
		Chinese lisi = new Chinese("2","����");
		System.out.println(lisi.id+","+lisi.name+","+Chinese.country);
		
		//�����й��˶���3
		Chinese wangwu = new Chinese("3","����");
		System.out.println(wangwu.id+","+wangwu.name+","+Chinese.country);

	}

}