package com.polymorphic;
/*主人*/
public class DemoMaster {
	/*喂养宠物的方法
	 */
	public void feed(Pet pet) {//Pet pet是一个父类型引用
		pet.eat();
	}
}
