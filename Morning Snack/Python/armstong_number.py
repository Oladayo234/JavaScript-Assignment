user_input = int(input("Enter a number: "))
sum_of_number = 0
newuser_input = user_input

while(newuser_input != 0):
    digit = newuser_input % 10
    exponential = digit**3
    sum_of_number += exponential
    newuser_input = newuser_input//10
#print(newuser_input)


if(sum_of_number == user_input):
    print(user_input, " is an armstrong number");
else:
    print(user_input, " is not an armstrong number");    
