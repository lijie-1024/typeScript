function add(x:number=2,y:number=3):number{
    console.log(x+y)
    return x+y
}
add() //5
add(6) //9
add(6,5)  //11
add(undefined,5)  //7
function edit(x?:number,...y:number[]):void{
    let num:number = x? x:1
    for (const ele of y) {
        num += ele
    }
    console.log(num)
}
edit()//1
edit(3)//3
edit(1,2,3,4,5)

class Demo2 {
    x:string|number;
    y:string|number;
    constructor(x:string|number,y:string|number) {
        this.x = x
        this.y = y
    }
    test():string{
        return `${this.x}是X的值，${this.y}是Y 的值`
    }
    static chanage():string {
        return '测试是否能被继承'
    }
}
let str2 = new Demo2(5, 6).test()
let str3 = Demo2.chanage()
console.log(str2)//5是X的值，6是Y 的值
console.log(str3)//测试是否能被继承

