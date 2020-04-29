
class Graph {
  constructor(nodeSum){
    this.size = nodeSum
    this.edge = 0
    this.visited = []
    this.adj = {}
    this.hasMinPath= false
    this.result = []
    this.nodeParents = {}
    for(let i=0;i<nodeSum;i++){
      this.adj[i] = []
    }
  }

  addEdge(start,end){
    this.adj[start].push(end)
    this.adj[end].push(start)
    this.edge ++
  }

  print(){
    for(let i=0;i<this.adj.length;i++){
      for(let j=0;j<this.adj[i].length;j++){
        console.log(`${i} -->${this.adj[i][j]}`)
      }
    }
  }

  dfs(startNode,callback){ // 深度遍历
    const arr = this.adj[startNode]
    this.visited[startNode] = true
    callback(startNode)
    for(let i =0;i<arr.length;i++){ 
      if(!this.visited[arr[i]]){     
        this.dfs(arr[i],callback)
      }  
    }
  }

  bfs(startNode,callback){
    var queue = []
    queue.push(startNode)
    this.visited[startNode] = true
    while(queue.length>0){
      let node = queue.shift()
      callback(node)
      const arr = this.adj[node]
      for(let i=0;i<arr.length;i++){
        if(!this.visited[arr[i]]){
          this.visited[arr[i]] = true
          this.nodeParents[arr[i]] = node
          queue.push(arr[i])
        }
      }
    }
  }

  dfsMinPath(start,end){
    this.minPath(start,end,[start])
    return this.result
  }

  bfsMinPath(start,end){
    let result = []
    let queue = []
    queue.push(start)
    let flag = true
    this.visited[start] = true
    this.nodeParents[start] = start
    while(queue.length>0 && flag){
      let current = queue.shift()
      let childs = this.adj[current]
      for(let i =0;i<childs.length;i++){
        this.nodeParents[childs[i]] = current
        if(!this.visited[this.adj[current]]){
          if(childs[i] === end){ // 找到了
            let node = end
            while(node!==start){
              result.unshift(node)
              node = this.nodeParents[node]
            }
            result.unshift(start)
            flag= false
            break;

          }else{
            this.visited[childs[i]] = true
            queue.push(childs[i])
          }
        }
        
      }
    }
    return result
  }

  minPath(start,end,pathArr){
    const startNode = this.adj[start]
    // 开始的节点是孤立的节点的话就不需要搜索了
    if(!startNode || startNode.length==0){ 
      return 
    }
    // 如果有一条路径,而其他节点的遍历路径已经超过了这条路径长度，可以跳过。
    if(this.hasMinPath && this.result[0].length<pathArr.length){
      return 
    }
    startNode.forEach(item=>{
      if(pathArr.includes(item)){
        return 
      }
      // 连接上一层节点
      let newPathArr = pathArr.concat(item)
      if(item === end){
        if(this.hasMinPath){
          // 发现了更短的，替换原先找到的
          if(newPathArr.length<this.result[0].length){
            this.result = [newPathArr]
          }else if(newPathArr.length === this.result[0].length){ // 一样长度
            this.result.push(newPathArr)
          }

        }else{
          this.hasMinPath = true
          this.result = [newPathArr]
        }
      }else{
        this.minPath(item,end,newPathArr)
      }
    })
  }
}

let g =  new Graph(5)
g.addEdge(0,1)
g.addEdge(0,2)
g.addEdge(2,4)
g.addEdge(1,3)
g.addEdge(1,4)
g.addEdge(3,4)
//console.log(g.adj)
//g.minPath(0,4)
console.log(g.bfsMinPath(0,4))
//graph.print()
// g.dfs(0,(node)=>{
//   console.log("访问了"+node)
// })

// g.bfs(0,(node)=>{
//   console.log("访问了"+node)
// })
// console.log(g.nodeParents)
