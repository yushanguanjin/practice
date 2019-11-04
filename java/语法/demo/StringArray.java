public class StringArray {
    public static void main(String[] args) {
        String[] strArr = { "1", "2", "3" };
        for (int i = 0; i < strArr.length; i++) {
            System.out.println(strArr[i]);
        }
        strArr[1] = "a";
        System.out.println(strArr[1]);
    }
}