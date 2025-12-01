import java.util.Scanner;
public class ArmstongNumber{
    public static void main(String[]args){
    Scanner input = new Scanner(System.in);

    System.out.print("Enter a number: ");
    int userInput = input.nextInt();
    
    int sum = 0;
    int newUserInput = userInput;
    int exponential = 1;
    int count;
    int digit = 1;

    while(newUserInput != 0){
           digit = newUserInput % 10;
           exponential = (int)Math.pow(digit, 3);
           sum += exponential;
           newUserInput = newUserInput / 10;

    }

        if(sum == userInput)
             System.out.print(userInput + " is an armstrong number");
        else
            System.out.print(userInput + " is not an armstrong number"); 
    }
}
