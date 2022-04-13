#include <stdio.h>

int main(){

    float pie = 3.14;
    int r;

    printf("write radius of the circle\n");
    scanf("%d", &r);

    printf("area of rectangle is %.2f", pie * (r * r));

    return 0;
}