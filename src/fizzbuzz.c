#include <stdio.h>
#include <math.h>

int main(){

    int n;

    printf("write a number\n");
    scanf("%d", &n);

    if(n%3==0){
        printf("your numebr is divisible by 3\n");
    }else if(n%5==0){
        printf("your number is divisible by 5\n");
    }else{
        printf("your number is not divisible by 3 nor 5\n");
    }
    if(n%3==0 && n%5==0){
        printf("your numebr is divisible by 3 and 5 both\n");
    }
    
    return 0;
}