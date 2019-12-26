package com.polymorphic;
/*多态在实际开发的作用：以下以主人喂养宠物为例说明多态的作用：
	1.分析：主人喂养宠物这个场景要实现需要进行类型的抽象
	主人【类】
	主人可以喂养宠物，所以主人有喂养的这个动作
	宠物【类】
	宠物可以吃东西，所以宠物有吃东西的这个动作。
*/
public class DemoTest {
	public static void main(String[] args) {
		//创建主人对象
		DemoMaster zs = new DemoMaster();
		
		DemoCat tom = new DemoCat();
		zs.feed(tom);
		
		DemoDog erha = new DemoDog();
		zs.feed(erha);
	}
}