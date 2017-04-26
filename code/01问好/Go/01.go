/*
   2017-04-26 by Jimmy Xiang
 */

package main
import "fmt"


func main() {

    var name string

    fmt.Printf("What is your name?")

    fmt.Scanf("%s", &name)

    fmt.Printf("Hello, %s, nice to meet you!\n", name)

}
