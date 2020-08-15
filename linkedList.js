module.exports = (function () {
    let linkedListModule = {};

    class Node {
        constructor(data, nextNode = null, prevNode = null) {
            this.data = data;
            this.nextNode = nextNode;
            this.prevNode = prevNode;
        }
    }

    class LinkedList {
        constructor(head = null) {
            this.head = head;
            this.deleteNode = deleteNode;
            this.getTailNode = getTailNode;
            this.getNodeCountFromList = getNodeCountFromList;
            this.isTheNodeInTheListByData = isTheNodeInTheListByData;
        }
    }

    function validateNodeArgumentForOperations(node) {
        if (node == null)
            throw "A node is required to perform operations."
    }

    function validateListArgumentForOperations(list) {
        if (list.head == null)
            throw "List hasn't been constructed. Build a list before work can be done."
    }

    function deleteNode(node) {
        let list = this;
        validateNodeArgumentForOperations(node);
        validateListArgumentForOperations(list);

        if (!list.isTheNodeInTheListByData(node))
            throw "Unable to delete node, the node was not found in the list by its data.";

        if (list.getNodeCountFromList() === 1) {
            list.head = null;
        } else {
            let nextNode = node.nextNode, prevNode = node.prevNode;
            if (node.prevNode == null) {
                nextNode.prevNode = null;
                list.head = nextNode;
            } else {
                prevNode = node.prevNode;
                prevNode.nextNode = nextNode;
                if (nextNode !== null)
                    nextNode.prevNode = prevNode;
            }
        }
        node = null;
        delete node;
    }

    function isTheNodeInTheListByData(node) {
        let list = this, found = false;
        let head = list.head;

        validateNodeArgumentForOperations(node);
        validateListArgumentForOperations(list);

        return checkForNodeInList(node, head);
    }

    function checkForNodeInList(nodeToFind, currentNode) {
        if (currentNode.data === nodeToFind.data)
            return true;

        if (currentNode.nextNode != null)
            return checkForNodeInList(nodeToFind, currentNode.nextNode);
        else
            return false;
    }

    function getTailNode() {
        let list = this;
        validateListArgumentForOperations(list);

        let node = list.head;
        while (node.nextNode != null) {
            node = node.nextNode;
        }
        return node;
    }

    function getNodeCountFromList() {
        let list = this;
        validateListArgumentForOperations(list);

        let node = list.head;
        let count = 1;
        while (node.nextNode != null) {
            node = node.nextNode;
            count++;
        }
        return count;
    }

    linkedListModule.createLinkedListFromDataArray = (dataArray) => {
        if (!Array.isArray(dataArray) || (Array.isArray(dataArray) && dataArray.length === 0))
            throw("A array of numbers is required.");

        let list = {};
        for (let i = 0; i < dataArray.length; i++) {
            if (i === 0) {
                list = new LinkedList(new Node(dataArray[i]));
            } else {
                let node = new Node(dataArray[i]);
                let tailNode = list.getTailNode();
                tailNode.nextNode = node;
                node.prevNode = tailNode;
            }
        }
        return list;
    }

    return linkedListModule;
});