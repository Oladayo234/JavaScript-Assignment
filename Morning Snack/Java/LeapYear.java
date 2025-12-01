public class LeapYear{
    public static void main(String[]args){
    
        int divisorOne = 4;
        int divisorTwo = 100;
        int divisorThree = 400;
        int year;
        int count = 0;
        for (year = 1900; year <= 2025; year++){
            if(year % divisorOne == 0 && year % divisorTwo != 0 || year % divisorThree == 0){
                    System.out.println(year);
        }
    }
      
    
    }
}
