/*
   2017-04-26 by Jimmy Xiang
 */

#include <stdio.h>

 int main()
 {

    char name[128]={0};

    printf("What is your name?");
    scanf("%s",name);   //stackoverflow
    printf("Hello, %s, nice to meet you!\n", name);

    return 0;
 }

