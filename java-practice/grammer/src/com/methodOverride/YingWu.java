package com.methodOverride;

public class YingWu extends Bird {

	//这里的move方法覆盖的是Bird中的move方法
	@Override
	public void move() {
		System.out.println("鹦鹉飞起来!");	
	}

	
}
