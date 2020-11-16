## while & do..while vs for Loop

These are the reasons I would choose one over the other:

For-loop Syntax:

```
for( let i = 0; i < 10; i++)
{
    //Some code here
}

```

I would use a for loop for the reason that I may KNOW the NUMBER OF ITERATIONS I need to do and I have an INCREMENTING variable which can be handy sometimes.

While-loop Syntax:

```
while(!done)
{
    //Some code goes here
}

```

I would use this loop when I am NOT SURE how many ITERATIONS I might need to carry out. Examples: Waiting for user to input correct input values and keep looping until he/she inputs the proper value.

Do-While loop Syntax:

```
do
{
    //Some code here
}
while(!done);

```

This loop is almost the same as a while-loop but I would prefer this when I need something done ATLEAST ONCE before I start verifying whatever it is that would make me wanna loop and do that code again. Example: ask a user for an input for the first time and then validate it. If wrong input given then loop back and ask for input again
