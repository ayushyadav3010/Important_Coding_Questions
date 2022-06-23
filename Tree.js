class Node{
    constructor(value)
    {
        this.left=null;
        this.right=null;
        this.value=value;
    }
}
class BinarySearchTree
{
    constructor()
    {
        this.root=null;
    }
    insert(value)
    {
        const newNode=new Node(value)
        if(this.root===null){
            this.root=newNode;
        }
        else{
            let currentNode=this.root;
            while(true)
            {
                if(value<currentNode.value)
                {
                    if(!currentNode.left)
                    {
                        currentNode.left=newNode;
                        return this;
                    }
                    currentNode=currentNode.left;
                }
                else{
                    if(!currentNode.right){
                        currentNode.right=newNode;
                        return this;
                    }
                    currentNode=currentNode.right;
                }
            }
        }
    }
lookup(value)
{
    if(!this.root)
    {
        return false;
    }
    let currentNode=this.root;
    while(currentNode)
    {
        if(value<currentNode.value)
        {
            currentNode=currentNode.left;
        } else if(value>currentNode.value)
        {
            currentNode=currentNode.right;
        }
        else if(currentNode.value==value)
        {
            return currentNode;
        }
    }
    return false;
}
/*remove(value){
    if(!this.root){
        return false;
    }
        let currentNode=this.root;
        let parentNode=null;
        while(currentNode)
        {
            if(value<currentNode.value)
            {
                parentNode=currentNode;
                currentNode=currentNode.left;
            }
            else if(value>currentNode.value)
            {
                parentNode=currentNode;
                currentNode=currentNode.right;

            }else if(currentNode.value==value)
            {
                if(currentNode.right===null)
                {
                    if(parentNode===null){
                        this.root=currentNode.left;
                    }else{
                        if(currentNode.value<parentNode.value)
                        {
                            parentNode.left=currentNode.left;
                        }
                        else if(currentNode.value>parentNode.value)
                        {
                            parentNode.right=currentNode.left;
                        }
                    }
                }
            }
        
}*/
}

const myTree=new BinarySearchTree();
myTree.insert(9);
myTree.insert(4);
console.log(myTree)
//myTree.insert(20)
//myTree.insert(1)
//myTree.insert(6)
//myTree.insert(15)
//myTree.insert(170);

//console.log(myTree.lookup(33))
