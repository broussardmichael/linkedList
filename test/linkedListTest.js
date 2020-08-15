const linkedListModule = require("../linkedList");
let expect = require('chai').expect

let linkedListClass = linkedListModule();

describe('List', function () {
    describe("#buildList", function () {
        it("should throw error if number array is not given", function () {
            try {
                let list = linkedListClass.createLinkedListFromDataArray();
            } catch (e) {
                expect(e).to.equal("A array of numbers is required.");
            }
        });

        it('should return a list of 3 nodes', function () {
            let list = linkedListClass.createLinkedListFromDataArray([1, 2, 3]);
            let count = 1;
            let node = list.head;
            while(node.nextNode != null){
                node = node.nextNode;
                count++;
            }
            expect(count).to.equal(3);
        });
    });

    describe("List functions", function () {
        it('#getNodeCountFromList should return a count of 2', function () {
            let list = linkedListClass.createLinkedListFromDataArray([1, 2]);
            let count = list.getNodeCountFromList();
            expect(count).to.equal(2);
        });

        it('#getTailNode should return the tail node', function () {
            let list = linkedListClass.createLinkedListFromDataArray([1, 2]);
            let node = list.getTailNode();
            expect(node.data).to.equal(2);
        });

        it('#getTailNode should throw error if a lists head does not exist', function () {
            let list = linkedListClass.createLinkedListFromDataArray([1, 2]);
            list.head = null;
            try {
                list.getNodeCountFromList();
            } catch (e) {
                expect(e).to.equal("List hasn't been constructed. Build a list before work can be done.");
            }
        });

        it('#isTheNodeInTheListByData should throw error if node isnt passed', function () {
            let list = linkedListClass.createLinkedListFromDataArray([1, 2]);
            try{
                list.isTheNodeInTheListByData();
            } catch (e) {
                expect(e).to.equal("A node is required to perform operations.");
            }
        });

        it('#isTheNodeInTheListByData should find the node if it exists', function () {
            let list = linkedListClass.createLinkedListFromDataArray([1, 2]);
            let tailNode = list.getTailNode();
            let found = list.isTheNodeInTheListByData(tailNode);
            expect(found).to.be.true;
            found = list.isTheNodeInTheListByData({data:5});
            expect(found).to.be.false;
        });

        it('#isTheNodeInTheListByData should find the node in a list of 1', function () {
            let list = linkedListClass.createLinkedListFromDataArray([1]);
            let found = list.isTheNodeInTheListByData({data:1});
            expect(found).to.be.true;
        });

        it('#isTheNodeInTheListByData should find node if its the head node', function () {
            let list = linkedListClass.createLinkedListFromDataArray([1, 2, 3]);
            let found = list.isTheNodeInTheListByData({data:1});
            expect(found).to.be.true;
        });

        it('#isTheNodeInTheListByData should find node if its the tail node', function () {
            let list = linkedListClass.createLinkedListFromDataArray([1, 2, 3]);
            let found = list.isTheNodeInTheListByData({data:3});
            expect(found).to.be.true;
        });

        it("#deleteNode should check if a node exists by it's data component", function () {

            let list = linkedListClass.createLinkedListFromDataArray([1, 2, 3]);
            try {
                list.deleteNode({data:5});
            } catch (e) {
                expect(e).to.equal("Unable to delete node, the node was not found in the list by its data.");
            }
        });

        it("#deleteNode should remove the middle node in an array of 3", function () {

                let list = linkedListClass.createLinkedListFromDataArray([1, 2, 3]);
                let tailNode = list.getTailNode();
                //get middle node
                let middleNode = tailNode.prevNode;
                list.deleteNode(middleNode);
                let count = list.getNodeCountFromList();
                expect(count).to.equal(2);
                expect(list.head.data).to.equal(1);
                expect(tailNode.data).to.equal(3);
        });

        it("#deleteNode should remove the head node in an array of 3", function () {

            let list = linkedListClass.createLinkedListFromDataArray([1, 2, 3]);
            list.deleteNode(list.head);
            let tailNode = list.getTailNode();
            let count = list.getNodeCountFromList();
            expect(count).to.equal(2);
            expect(list.head.data).to.equal(2);
            expect(tailNode.data).to.equal(3);
        });

        it("#deleteNode should remove the head node and set head to null in a 1 node list", function () {
            let list = linkedListClass.createLinkedListFromDataArray([1]);
            list.deleteNode(list.head);
            expect(list.head).to.be.null;
        });

        it("#deleteNode should remove the tail node in an array of 3", function () {

            let list = linkedListClass.createLinkedListFromDataArray([1, 2, 3]);
            let tailNode = list.getTailNode();
            list.deleteNode(tailNode);
            let count = list.getNodeCountFromList();
            expect(count).to.equal(2);
            expect(list.head.data).to.equal(1);
            tailNode = list.getTailNode();
            expect(tailNode.data).to.equal(2);
        });

        it('#deleteNode should throw error if node isnt passed', function () {
            let list = linkedListClass.createLinkedListFromDataArray([1, 2]);
            try{
                list.deleteNode();
            } catch (e) {
                expect(e).to.equal("A node is required to perform operations.");
            }
        });
    });
});