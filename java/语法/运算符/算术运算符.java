++出现在变量后
规则：先做赋值运算，再对变量中保存的值进行自加1
int a = 100;
int b = a++;
System.out.println(a);//101
System.out.println(b);//100



++i出现在变量前
int m = 20;
int n = ++m;
System.out.println(m);//21
System.out.println(n);//21
