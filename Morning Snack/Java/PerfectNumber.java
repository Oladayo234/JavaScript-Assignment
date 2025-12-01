import java.util.Scanner;
public class PerfectNumber{
    public static void main(String[]args){
    Scanner input = new Scanner(System.in);

    System.out.print("Enter a number: ");
    int userInput = input.nextInt();
   
    int sum = 0;
    int count;

    for(count = 1; count < userInput; count++){
            if(userInput % count == 0)
                    sum = sum + count;
    }
          System.out.println(sum);

        if(sum == userInput)
             System.out.println(userInput + " is a perfect number");
        else
            System.out.println(userInput + " is not a perfect number");    

    }
}
