package com.polymorphic;
/*��̬��ʵ�ʿ��������ã�����������ι������Ϊ��˵����̬�����ã�
	1.����������ι�������������Ҫʵ����Ҫ�������͵ĳ���
	���ˡ��ࡿ
	���˿���ι���������������ι�����������
	����ࡿ
	������ԳԶ��������Գ����гԶ��������������
*/
public class DemoTest {
	public static void main(String[] args) {
		//�������˶���
		DemoMaster zs = new DemoMaster();
		
		DemoCat tom = new DemoCat();
		zs.feed(tom);
		
		DemoDog erha = new DemoDog();
		zs.feed(erha);
	}
}