package com.This;

/*
 * thisʲôʱ����ʡ�ԣ�
 * �������־ֲ�������ʵ��������ʱ��this����ʡ��
 * 
 * 
 * Ĭ�ϲ���
 * */
public class ����ʡ��this {
	//����
	private int id;
	private String name;
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		����ʡ��this t =  new ����ʡ��this();
		t.setId(10);

	}
	public void setId(int id) {
		this.id = id;
		System.out.println("����");
	}

}
