	
/* Declared i variable with null */
var i = "";
/* Declared total variable with null */
var total = "";
/* first while loop and continued till i reaches 1000 */
while (i < 1000) {
	/* total variable get stored sum of all 1 to 1000 number */
    total = i + total;
	/* i keep counter by increaming at a time */
    i++;
	
}
/* print on console about the sum of 1000 number did by using while loop*/
console.log("Sum up of the 1000 using while loop is: " + total);
/* print on console about the counter number did by using while loop*/
console.log("i up of the 1000 using  while loop is: " + i);

/* cleared total variable by null char*/
total = "";
/* for loop with i variable initializing to 0 and max to 1000*/
for(i=1;i<1000;i++){
	/* variable total is added with i and total  */
	total = i + total;
}
/* print on console about the sum of 1000 number did by using while loop*/
console.log("Sum up of the 1000 using for loop is: " + total);
/* print on console about the counter number did by using while loop*/
console.log("i up of the 1000 using  for loop is: " + i);
/* Declared total variable with null */
total = "";
/* Declared i variable with null */
i = "";
/* do{ }while() loop to calculate sum of 1000 numbers*/
do
 {
	/* variable total is added with i and total  */
    total = i + total;
	/* i keep counter by increaming at a time */
    i++;
}
while (i < 1000); /* continue loop untill i reach to 1000 */
/* print on console about the sum of 1000 number did by using while loop*/
console.log("Sum up of the 1000 using do while loop is: " + total);
/* print on console about the counter number did by using while loop*/
console.log("i up of the 1000 using do while loop is: " + i);