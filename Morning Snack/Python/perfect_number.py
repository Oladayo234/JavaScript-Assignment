user_input = int(input("Enter a number: "))
sum_of_numbers = 0

for count in range(1, user_input):
    if (user_input % count == 0):
        sum_of_numbers = sum_of_numbers + count;

print(sum_of_numbers)

if(sum_of_numbers == user_input):
    print(user_input, "is a perfect number")
else:
    print(user_input,  "is not a perfect number")
