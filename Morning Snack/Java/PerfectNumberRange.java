public class PerfectNumberRange{
    public static void main(String[]args){
    
int count;
int divisor = 1;
int number = 1;

for(number = 1; number <= 1000; number++){

    int sum = 0;

   for(divisor = 1; divisor <= number/2; divisor++){
      if(number % divisor == 0){
            sum = sum + divisor;

        }
    }    
          if(sum == number && number != 0){
             System.out.println(number + " is a perfect number");
        }
    }

    
    }
}
