for count in range(1, 1000):
    new_number  = count
    lengthOfNumbers = str(new_number)
    length = len(lengthOfNumbers)
    exponential = 1
    sum_of_number = 0
    digit = 1
    while(new_number != 0):
        digit = new_number % 10;
        exponential = digit**3
        sum_of_number += exponential
        new_number = new_number/10  

if(sum_of_number == count):
    System.out.println(count)
