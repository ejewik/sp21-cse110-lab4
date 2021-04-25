# Part 1a
1. values added: 20
2. final result: 20
3. values added: 20
4. The code returns an error because the result variable is only scoped in the if block due to the let keyword. 
5. Because of the const keyword the result variable cannot be reassigned to after it is assigned a value, so the code returns an error.
6. Same answer as 5.
# Part 2a
1. 3 will be printed because i is incremented for each element of the array prices.
2. 150 will be printed. The loop sets the variable discountedPrice to the element at index position i multiplied by 1 minus the discount percentage. Since the last element of the prices array to be evaluated to calculate discountedPrice is 300, and 300 * (1 - .5) = 150, 150 will be printed to the console. 
3. 150 will also be printed for this line. Similar to the last question the last element of the prices array to be evaluated to calculate discountedPrice is 300, and discountedPrice is evaluated to 150 in line 7. In line 8, 150 is multiplied by 100 to get 15000, rounded to the nearest integer, and then divided by 100 so the result is still 150. Additionally the var keyword makes it so that discountedPrice can be accessed outside of the for block. 
4. [50, 100, 150]. The discounted price of each element is calculated and then pushed to the discounted array. The discount is 50%, so each element is at half price. 
5. The code causes an error because i is only defined within the for block due to the let keyword. 
6. Similar to question 5, discountedPrice is only scoped within the for block due to the let keyword so an error occurs.
7. 150 will be printed. Unlike in the questions 5 and 6 above, finalPrice is scoped within the entire function block so printing the value of finalPrice to the console will not result in an error.
8. [50, 100, 150]. Though the var keyword is changed to let for each variable declaration, this does not change what is returned because we are not trying to access any variables out of scope. The answer is similar to number 4. 
9. The code causes an error because i is only defined within the for block due to the let keyword.
10. The code prints 3. length is set to the length of the prices array, and since the value is not overwritten no error occurs (due to length being const).
11. [50, 100, 150]. Changing the keyword to const for discounted, length, and discountedPrice does not change the result. In particular const only prevents reassignment, so pushing elements to discounted does not change the result.
12. 
a. student.name\
b. student["Grad Year"] \
c. student.greeting() \
d. student["Favorite Teacher"].name \
e. student.courseLoad[1] \

13. 
a. '32'. With the '+' operator, the integer is concatenated to the string. \
b. 1. The '+' operator is the only operator that supports string concatenation. Other operators work only with numbers and always convert their operands to numbers. \
c. 3. null maps to 0 so the integer 3 + null = 3. \
d. '3null'. null maps to 'null' so the string '3' is concatenated to 'null' to get '3null'. \
e. 4. true maps to 1 so true + the integer 3 evaluates to 4.\
f. 0. null maps to the integer 0 and false maps to the integer 0 so false + null is 0. \
g. '3undefined'. \
h. NaN. undefined maps to NaN so '3' - undefined is also NaN. String concatenation is not supported with the '-' operator so both operands are converted to numbers, which is why the overall result is NaN. 

14. 
a. true. The string '2' becomes the number 2. \
b. false. The strings '2' and '12' are compared letter by letter lexicographically. Since '1' is less than '2' this is false. \
c. true. The string '2' becomes the number 2. \
d. false. '===' is the strict equality operator which immediately returns false if the operands are of different types, and the operands are integer and string.

e. false. true maps to 1, and 1 is not equal to 2. \
f. true. Boolean(2) creates a boolean object with an initial value of true. Thus using the strict equality operator to compare true and true results in true. 

15. The '===' operator is the strict equality operator. It checks the equality without type conversion, while the '==' operator does type conversion before comparison. 
17. [2, 4, 6]. Each element at array position i is passed into the callback function, and the element returned from the function doSomething is pushed to newArr. Since the callback function multiplies each array element by 2, each element in the original array is doubled before being pushed to newArr. 
19. \
1\
4\
3\
2

