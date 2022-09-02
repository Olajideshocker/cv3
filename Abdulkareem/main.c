#include <stdio.h>
#include <stdlib.h>

/*
int maximum(int num1, int num2, int num3) {

    if(num1 > num2 || num1 > num3){
        printf("1st number is the biggest \n");
    } else if (num2 > num1 || num2 > num3){
    printf("2nd number is the biggest \n");
    } else if(num3 > num1 ||  num3 > num2);{
    printf("3rd number is the biggest");
    }

    return maximum;

}
*/

struct Student{
char name[50];
char major[50];
int age[50];
double grade[50];
};

 int main()
{

    char line[265];

    FILE * fPointer = fopen("Abdulkareem.txt", "r");

    fgets(line, 265, fPointer);
    printf("%s", line);

    fprintf(fPointer, "Hello, this is Olajide\n");

    fclose(fPointer);

    printf("Hello World \n");

    int age = 30;
    double gpa = 3.4;
    char grade = "A";
    int * pAge = &age;
    double * pGpa = &gpa;
    char * aGrade = &grade;

    printf("%d \n", *pAge);

    printf("age's memory address: %p\n", &age);

    int index = 6;
    do{
 printf("%d\n",index);
    index++;
     } while(index<=5);
    struct Student student1;

    strcpy(student1.name, "Abdulkareem");
    strcpy(student1.major,"Business");
    printf( "%s", student1.name);
/*
    maximum(1,2,3);

    char Char_name[] = "Son";
    int Char_age = 20;

    int decNum = 9;

    printf("My Favorite football number is %d, %f the %s",decNum ,10., "number" );

    printf( "There was a man named %s\n", Char_name);
    printf("he was %d years old.\n", Char_age);

    Char_age = 41;

    printf("He really liked the name %s\n", Char_name);
    printf("but did not like being %d\n", Char_age);




    double decimal = 3.5;
    char nameE = 'q';
    printf("his name is %s\n", nameE);

    printf("%f", floor(90.920));



    char name[30];
    printf("What is your name? ");
    fgets(name, 30, stdin);
    printf("Your name is %s", name);


    double num1;
    double num2;
    printf("Enter First Number: ");
    scanf("%lf", &num1);

    printf("Enter Second Number: ");
    scanf("%lf", &num2);

    printf("Answer: %f",num1 + num2 );


    char colorR[20];
    char colorB[20];
    char p_n[20];
    char alive[20];
    char joke[20];

    printf("Enter a color: ");
    scanf("%s%s", colorR, colorB );

    printf("Enter a p-n: ");
    scanf("%s", p_n );

    printf("Enter a alive: ");
   scanf("%s", alive );

    printf("Enter a joke: ");
    scanf("%s", joke);

    printf("Roses are %s %s\n", colorR,colorB);
    printf("%s are blue \n", p_n);
    printf("My heart is %s \n", alive);
    printf("I'm Such a %s \n", joke);


    sopeHi("Shocker",24 );
    sopeHi("Shocke", 88);
    sopeHi("Shock", 45);
    */


    return 0;



}

void sopeHi(char number[], int age) {
    printf("Hi %s you are %d years old \n", number, age);

    return 0;
}



