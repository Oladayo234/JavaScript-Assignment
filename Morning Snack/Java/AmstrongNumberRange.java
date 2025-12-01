public class AmstrongNumberRange{
    public static void main(String[]args){
    
        for(int count=1; count <= 1000; count++){
        int newNumber  = count;
        String lengthOfNumbers = String.valueOf(newNumber);
        int length = lengthOfNumbers.length();
        double exponential;
        double sum = 0;
        double digit ;
        while(newNumber != 0){
               digit = newNumber % 10;
               exponential = Math.pow(digit, length);
               sum += exponential;
               newNumber = newNumber/10;  
        }
        if(sum == count){
                 System.out.println(count );
    }
    }
      
    
    }
}
