class Node{
    constructor(value)
    {
        this.value=value;
        this.next=null;
    }
}
class LinkedList2{
    constructor(value)
{
    this.head={
        value:value,
        next:null
    }
    this.tail=this.head
    this.length=1;
}
append(value)
{
    const newNode={
        value:value,
        next:null
    };
    this.tail.next=newNode;
    this.tail=newNode;
    this.length++
    return this;

}
prepend(value)
{
    const newNode={
        value:value,
        next:null
    };
    newNode.next=this.head;
    this.head=newNode;
    this.length++
    return this;
}
printList()
{
    const array=[]
    let currentNode=this.head;
    while(currentNode!=null)
    {
        array.push(currentNode.value)
        currentNode=currentNode.next;

    }
    return array;
}
insert(index,value)
{
    if(index>=this.length)
    {
            return this.appendd(value)
    }
    const newNode={
        value:value,
        next:null
    };
    const leader=this.traverseToIndex(index-1)
    const holdingPointer=leader.next;
    leader.next=newNode;
    newNode.next=holdingPointer;
    this.length++
    return this.printList()
}

traverseToIndex(index)
{
    let counter=0;
    let currentNode=this.head;
    while(counter!==index)
    {
        currentNode=currentNode.next;
        counter++;
    }
    return currentNode;
}
remove(index)
{
    const leader=this.traverseToIndex(index-1)
    const unwantedNode=leader.next;
    leader.next=unwantedNode.next;
    this.length--;
    return this.printList()
}

}
const myLinkedList=new LinkedList2(10);
myLinkedList.append(5)
myLinkedList.prepend(20)
//myLinkedList.printList()
myLinkedList.insert(2,99)
//myLinkedList.remove(2)
console.log(myLinkedList)
