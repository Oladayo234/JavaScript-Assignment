user_input_one = int(input("Enter a number: "))
user_input_two = int(input("Enter a number: "))

lowest_common = 1
highest_common = 1

for count in range (1, user_input_one and user_input_two):
    if(user_input_one % count == 0 and user_input_two % count == 0):        
        highest_common = count

lowest_common = (user_input_one * user_input_two) // highest_common;
print(lowest_common);
