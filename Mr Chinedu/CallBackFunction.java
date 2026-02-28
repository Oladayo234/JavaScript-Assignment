import java.util.Arrays;
public class CallBackFunction {

    public static void main(String[] args) {

    int[] numbers = {2,3,4,5,6,8,10};
  System.out.println(Arrays.toString(manipulateArray(numbers, CallBackFunction::filterEvenNumbers)));
    System.out.println(Arrays.toString(manipulateArray(numbers, CallBackFunction::filterOddNumbers)));



    }

    public static int[] manipulateArray(int[] array, java.util.function.Function<int[], int[]> callbackFunction){
        return callbackFunction.apply(array);

    }

    public static int[] filterEvenNumbers(int[] numbers){
        int[] evenNumbers = new int[numbers.length];
        int count = 0;
        for(int number : numbers){
            if(number % 2 == 0){
                evenNumbers[count++] = number;
            }
        }    
        return evenNumbers;
    }

    public static int[] filterOddNumbers(int[] numbers){
        int[] oddNumbers = new int[numbers.length];
        int count = 0;
        for(int number : numbers){
            if(number % 2 != 0){
                oddNumbers[count++] = number;
            }
        }    
        return oddNumbers;
    }

    
}
