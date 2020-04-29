// 栈数据结构
// 先入后出 只能从顶部添加元素和删除元素，类似于堆盘子和取盘子
class Stack{
  constructor(){
    this.data = []
    this.top = 0 // 用于记录位置
  }

  push(value){
    this.data[this.top++] = value
  }
  
  pop(value){ // 返回栈顶元素
    return this.data[--this.top]
  }
  peek(){
    return this.data[this.top-1]
  }
}

let a = new Stack()
a.push(1)
a.push(2)
a.push(3)
console.log(a.pop())

