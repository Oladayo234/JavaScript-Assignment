import java.util.Scanner;
public class FactorialOf{
    public static void main(String[]args){
    Scanner input = new Scanner(System.in);

    System.out.print("Enter a number: ");
    int userInput = input.nextInt();
    int result;
    int factorial = 1;
    int number;

    for(number = 1; number <= userInput; number++){
        result = number;
        factorial *= result;        
    }

    System.out.println(factorial);  


    }
}
