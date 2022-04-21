//Creating a Linked List for Testing Purposes
class Node {
    constructor(val){
        this.value = val;
        this.nextNode = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.nextNode = b;
b.nextNode = c;
c.nextNode = d;

//       A --> B --> C --> D --> null
//    current                 
//------------------------

//Create a travesal algorithm, that iterates through every node of the linked list 
//and does something (prints it out)

const printLinkedList = (head) => {
    let current = head;
    while(current !== null) {
        console.log(current.value);
        current = current.nextNode;
    }
}

printLinkedList(a);

//Now do it recursively

const printLinkedListRec = (head) => {
    if(head === null) return;
    console.log(head.value)
    printLinkedList(head.nextNode)
}

printLinkedListRec(a);