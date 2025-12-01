divisor = 1
number = 1

for number in range(1,1000):

    sum_of_number = 0

    for divisor in range(1, 500):
        if number % divisor == 0:
            sum_of_number = sum_of_number + divisor

    if sum_of_number == number:
        print(number, "is a perfect number")

