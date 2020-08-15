module.exports = (function (){
    let linkedListModule = {};
    class Node {
        constructor(data, nextNode = null, prevNode = null){
            this.data = data;
            this.nextNode = nextNode;
            this.prevNode = prevNode;
        }
    }

    class LinkedList {
        constructor(head = null) {
            this.head = head
        }
    }

    function deleteNode (node){
        if(node == null)
            throw "Unable to delete node, node was not given."
        let nextNode = node.nextNode;
        let prevNode = node.prevNode;
        prevNode.nextNode = nextNode;
        nextNode.prevNode = prevNode;
        delete node;
    }

    function getTailNode () {
        if(this.list == null)
            throw "List hasn't been constructed. Build a list before work can be done."

        let node = this.head;
        let tailNode;
        while(node.nextNode != null) {
            tailNode = node;
            node = node.nextNode;
        }
        return node;
    }

    function getNodeCountFromList () {
        if(this.list == null)
            throw "List hasn't been constructed. Build a list before work can be done."

        let node = this.head;
        let count = 1;
        while(node.nextNode != null) {
            node = node.nextNode;
            count++;
        }
        return count;
    }

    linkedListModule.createNewListWithNumArray = function(numberArray){
        if(Array.isArray(numberArray) && numberArray.length > 0)
            throw("A array of numbers is required.");

        let list = {};
        for(let i = 0; i < numberArray.length; i++){
            if(i === 0) {
                list = new LinkedList(new Node(numberArray[i]));
                list.deleteNode = deleteNode;
                list.getTailNode = getTailNode;
                list.getNodeCountFromList = getNodeCountFromList;
            } else {
                let node = new Node(numberArray[i]);
                let tailNode = list.getTailNode();
                tailNode.nextNode = node;
                node.prevNode = tailNode;
            }
        }
        return list;
    }

    return linkedListModule;
});
