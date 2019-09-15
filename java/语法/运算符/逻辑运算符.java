public class Operation{
    public static void main(String[] args) {
        int x = 10;
        int y = 8;
        //逻辑与
        System.out.println(x<y&++x<y);

        //短路与
        int x = 10;
        int y = 8;
        /*x<y结果是false，整个表达式结果已经确定是false，所有的后面的表达式没有再执行，这种现象称为短路现象。
        短路与才会有短路现象，逻辑与是不会存在短路现象的*/
        System.out.println(x<y&&++x<y);


        /*
            从某个角度来看，短路与更智能。由于后面的表达式可能不执行，所以执行效率高。这种方式在实际的开发中使用较多。短路与比逻辑与使用的多。短路与更常用。

            但是，在某些特殊的业务逻辑中，要求运算符两边的算子必须全部执行，此时必须使用逻辑与，不能使用短路与，使用短路与可能导致右边的表达式不执行。
        */
    }
}