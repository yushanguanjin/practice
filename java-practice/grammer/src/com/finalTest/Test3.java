package com.finalTest;

public class Test3 {

	public static void main(String[] args) {
		User u = new User(100);
		u = new User(200);
		
		final User user = new User(30);
		//user = new User(50); final���ε����ã�һ��ָ��ĳ������֮�󣬲���ָ������������ô
		//��ָ��Ķ����޷������������ڻ���
		
		user.id = 50;//final���ε�������Ȼָ��ĳ������֮����ָ���������󣬵���ָ��Ķ�����ڲ����ڴ��ǿ����޸ĵ�
		
	}

}
