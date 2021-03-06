编译器只检查语法，不运行程序，编译器发现b+5的类型是int类型，b变量的数据类型是byte
大容量向小容量转换需要加强制类型转换符。所以在以下程序编译报错
//b=b+5
纠正错误：
b = (byte)(b+5);
System.out.println(b);//15

byte x = 10;
x+=5;//等同于：x=(byte)(x+5) 

byte z = 0;
z+=128;//等同于：z=(byte)(x+128) 
System.out.println(z);//-128【损失精度】

z+=10000;//等同于：z=(byte)(x+10000) 
System.out.println(z);//-112【损失精度】



重要结论：扩展类的赋值运算符不改变运算结果类型，假设最初这个变量的类型是byte类型，无论怎么进行追加或追减，最终该变量的数据类型还是byte类型