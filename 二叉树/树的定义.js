
// 由一个一个节点构成，节点有三个属性，节点值，左边指向和右边指向。
class Node {
  constructor(data,left,right){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}


class BST {
  constructor(){
    this.root = null
  }

  insert(data){
    let newNode = new Node(data,null,null) 
    if(this.root === null) { // 第一次插入时候
      this.root = newNode
    } else {
      let current = this.root;
      let parent = null
      while(true) {
        parent = current
        if(data < current.data){
          current = current.left
          if(current == null){ // 终止条件
            parent.left = newNode
            break
          }
        }else{
          current = current.right
          if(current==null){
            parent.right = newNode
            break
          }
        }
      }
    }
  }

  // 中序遍历
  inOrder(node,callback){
    if(node !== null){
      this.inOrder(node.left,callback)
      callback(node)
      this.inOrder(node.right,callback)
    }
  }

  // 前序排序
  preOrder(node){
    if(node !== null){
      console.log(node.data)
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  }

  // 后序排序
  postOrder(node){
    if(node !== null){    
      this.preOrder(node.left)
      this.preOrder(node.right)
      console.log(node.data)
    }
  }

  getMin(){
    let current = this.root
    if(!current){
      throw new Error("the bst has no root element")
    } else {
      let val = null
      while(true){
        if(current.left){
          current = current.left
        }else{
          val = current.data
          break
        }
      }
      return val
    }
    
  }

  // 获取最大值
  getMax(){
    let current = this.root
    if(!current){
      throw new Error("the bst has no root element")
    } else {
      let val = null
      while(true){
        if(current.right){
          current = current.right
        }else{
          val = current.data
          break
        }
      }
      return val
    }
  }

  // 拥有某个元素
  has(value){
    let flag = false
    this.inOrder(this.root,(node)=>{
      if(node.data === value){
        flag = true
      }
    })
    return flag
  }

}

let bst = new BST()
bst.insert(3)
bst.insert(7)
bst.insert(6)
bst.insert(1)
bst.insert(2)
bst.insert(9)
bst.insert(8)
bst.insert(5)
console.log(bst.getMin())
console.log(bst.getMax())
bst.inOrder(bst.root,(node)=>{
  console.log(node.data)
})