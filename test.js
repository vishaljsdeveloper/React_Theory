var head =null;
var arr=[1,2,3,4,5]
class node {
    constructor(value){
        this.value=value,
        this.next=null
    }
}
var head =null;
function createLinkedlist(arr){
 head=new node(arr[0]);
 let curr = head;
 for(i=1;i<arr.length;i++){
    curr.next=new node([arr[i]]);
    curr = curr.next;

 }
}
obj2=new node(arr[1])
head.next=obj2
obj3=new node(arr[1])
obj2.next=obj2
