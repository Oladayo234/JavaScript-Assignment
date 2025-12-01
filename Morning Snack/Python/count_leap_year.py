divisorOne = 4;
divisorTwo = 100;
divisorThree = 400;
count = 0;
for year in range (1900, 2025):
    if year % divisorOne == 0 and year % divisorTwo != 0 or year % divisorThree == 0:
        count +=1
        print(count)

