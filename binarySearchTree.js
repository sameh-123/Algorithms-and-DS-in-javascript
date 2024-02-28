class Node{
    constructor(value=null){
        this.value=value
        this.left=null
        this.right=null
    }
}
class Tree{
    constructor(){
        this.root=null
        this.size=0
    }
    buildTree(data){
        let n=data.length
        this.size=n
        this.root=this.buildHelper(data,0,n-1)
    }
    buildHelper(ar,s,e){
        if(s>e){
            return null
        }
        let mid=Math.floor((s+e)/2)
        let root=new Node(ar[mid])
        root.left=this.buildHelper(ar,s,mid-1)
        root.right=this.buildHelper(ar,mid+1,e)
        return root
    }
    insert(value){
        if(this.root==null){
            this.root=new Node(value)
            this.size++
            return
        }
        if(this.find(value)!=null)return
        this.size++
        this.root=this.insertHelper(value,this.root)
    }
    insertHelper(value,root){
        if(root==null){
            root=new Node(value)
        }
        else if(value<root.value){
            root.left=this.insertHelper(value,root.left)
        }
        else if(value>root.value){
            root.right=this.insertHelper(value,root.right)
        }
        return root
    }
    remove(value){
        if(this.root==null){
            return
        }
        if(this.find(value)==null)return
        this.size--
        this.root=this.removeHelper(value,this.root)
    }
    removeHelper(value,root){
        if(root==null){
            return root
        }
        if(value<root.value){
            root.left=this.removeHelper(value,root.left)
            return root
        }
        if(value>root.value){
            root.right=this.removeHelper(value,root.right)
            return root
        }
        if(root.left==null){
            root=root.right
            return root
        }
        else if(root.right==null){
            root=root.left
            return root
        }
        else{
            let succNode=root.right
            while(succNode.left!=null){
                succNode=succNode.left
            }
            root.value=succNode.value
            root.right=this.removeHelper(succNode.value,root.right)
            return root
        }
    }
    find(value){
        let cur=this.root
        while(cur!=null){
            if(value<cur.value){
                cur=cur.left
            }
            else if(value>cur.value){
                cur=cur.right
            }
            else{
                return cur
            }
        }
        return null
    }
    levelOrder(){
        let cur=this.root
        if(cur==null){
            return []
        }
        let order=[]
        let q=[]
        q.push(cur)
        order.push(cur.value)
        while(q.length>0){
            let u=q.shift()
            if(u.left!=null){
                order.push(u.left.value)
                q.push(u.left)
            }
            if(u.right!=null){
                order.push(u.right.value)
                q.push(u.right)
            }
        }
        return order
    }
    print(){
        this.printHelper(this.root)
    }
    printHelper(node, prefix = "", isLeft = true){
        if (node === null) {
          return
        }
        if (node.right !== null) {
            this.printHelper(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
        if (node.left !== null) {
            this.printHelper(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }
    inOrder(){
        let ar=new Array()
        this.inOrderHelper(ar,this.root)
        return ar
    }
    inOrderHelper(ar,node){
        if(node!=null){
            this.inOrderHelper(ar,node.left)
            ar.push(node.value)
            this.inOrderHelper(ar,node.right)
        }
        
    }
    preOrder(){
        let ar=new Array()
        this.preOrderHelper(ar,this.root)
        return ar
    }
    preOrderHelper(ar,node){
        if(node!=null){
            ar.push(node.value)
            this.preOrderHelper(ar,node.left)
            this.preOrderHelper(ar,node.right)
        }
        
    }
    postOrder(){
        let ar=new Array()
        this.postOrderHelper(ar,this.root)
        return ar
    }
    postOrderHelper(ar,node){
        if(node!=null){
            this.postOrderHelper(ar,node.left)
            this.postOrderHelper(ar,node.right)
            ar.push(node.value)
        }
        
    }
    height(value){
        return Math.max(this.heightHelper(this.find(value))-1,0)
    }
    heightHelper(node){
        if(node==null){
            return 0
        }
        return Math.max(this.heightHelper(node.right)+1,this.heightHelper(node.left)+1)
    }
    depth(value){
        if(this.find(value)==null){
            return Infinity
        }
        let cur=this.root
        let d=0
        while(cur!=null){
            d++
            if(value<cur.value){
                cur=cur.left
            }
            else if(value>cur.value){
                cur=cur.right
            }
            else break
        }
        return d
    }
    isBalanced(){
        if(this.root==null){
            return true
        }
        let h1=this.heightHelper(this.root.left)
        let h2=this.heightHelper(this.root.right)
        return Math.abs(h1-h2) <= 1
    }
    rebalance(){
        let data=this.inOrder()
        this.clear()
        this.buildTree(data)
    }
    clear(){
        this.clearHelper(this.root)
        this.root=null
        this.size=0
    }
    clearHelper(node){
        if(node!=null){
            this.clearHelper(node.left)
            this.clearHelper(node.right)
            node=null
        }
    }
}
