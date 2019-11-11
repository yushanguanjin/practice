public class OOtest04{
    public static void main() {
        Husband huangXiaoMing = new Husband();
        huangXiaoMing.name = "黄晓明";
        huangXiaoMing.w = baby;


        Wife baby = new Wife();
        baby.name = "baby";
        baby.h=huangXiaoMing;

        System.out.println(huangXiaoMing.name+"的妻子名字叫"+huangXiaoMing.w.name);
        System.out.println(huangXiaoMing.name+"的妻子名字叫"+baby.name);

        System.out.println(baby.name+"的丈夫名字叫"+baby.h.name);
        System.out.println(baby.name+"的丈夫名字叫"+huangXiaoMing.name);
    }
}