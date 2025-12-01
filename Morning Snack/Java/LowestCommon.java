import java.util.Scanner;
public class LowestCommon{
    public static void main(String[]args){
    Scanner input = new Scanner(System.in);

    System.out.print("Enter a number: ");
    int userInputOne = input.nextInt();
    System.out.print("Enter a number: ");
    int userInputTwo = input.nextInt();

    int lowestCommon = 1;
    int highestCommon = 1;
    int count;

    for(count = 1; count <= userInputOne && count <= userInputTwo; count++){
        if(userInputOne % count == 0 && userInputTwo % count == 0){
        highestCommon = count;

        }
      } 

    lowestCommon = (userInputOne * userInputTwo) / highestCommon;
            System.out.println(lowestCommon);
    }
}
