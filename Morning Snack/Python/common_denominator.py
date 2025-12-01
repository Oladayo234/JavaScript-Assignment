user_input_one = int(input("Enter a number: "))
user_input_two = int(input("Enter a number: "))
highestcommon = 0;

for count in range (1, user_input_one and user_input_two):
    if(user_input_one % count == 0 and user_input_two % count == 0):        
        highestcommon = count;

print(highestcommon);   
