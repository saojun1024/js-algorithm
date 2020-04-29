// 链表数据结构
// 链表不通过像数组那样通过下标来存储，而是关系，即前继和后继


class Node {
  constructor(element){ // 存储本身值和下一个指向
    this.element = element
    this.next = null
  }
}

class LinkedList{

  // 初始化后默认生成一个头节点
  constructor(){
    this.head = new Node('head')
  }

  // 遍历查找方法
  find(value){
    let currentNode = this.head
    while(currentNode.element!== value){
      currentNode = currentNode.next
    }
    return currentNode
  }

  // 向链表中某个元素插入一个元素
  insert(beforeVal,currentVal){
    let current = new Node(currentVal)
    let before = this.find(beforeVal)
    current.next = before.next
    before.next = current
  }
  
  // 打印链表上每个元素
  display(){
    let current = this.head
    while(current.next!==null){
      console.log(current.next.element)
      current = current.next
    }
  }

  // 查找前一个节点
  findPrevious(element){
    let current = this.head
    while(current.next !== null && current.next.element !== element){
      current = current.next
    }
    return current
  }

  // 删除一个节点
  delete(value){
    let previous = this.findPrevious(value)
    if(previous.next!==null){
      previous.next = previous.next.next
    }
  }


}

let a =  new LinkedList()
a.insert("head","luoj")
a.insert("luoj","jack")
a.insert("jack","lisa")
a.insert("luoj","demaxiya")
a.delete("jack")
a.display()
