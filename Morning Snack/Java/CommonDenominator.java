import java.util.Scanner;
public class CommonDenominator{
    public static void main(String[]args){
    Scanner input = new Scanner(System.in);

    System.out.print("Enter a number: ");
    int userInputOne = input.nextInt();
    System.out.print("Enter a number: ");
    int userInputTwo = input.nextInt();
    
    int highestcommon = 0;
    int count;

for(count = 1; count <= userInputOne && count <= userInputTwo; count++){
    if(userInputOne % count == 0 && userInputTwo % count == 0){
        
                highestcommon = count;

        }
      }
         System.out.println(highestcommon);
    }
}
