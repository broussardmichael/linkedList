const linkedListModule = require("./linkedList");
let assert = require("assert");
let linkedListClass = linkedListModule();

describe('List', function () {
    describe("#buildList", function () {
        it("should throw error if number array is not given", function () {
            try {
                let list = linkedListClass.createNewListWithNumArray();
            } catch (e) {
                assert.strictEqual(e, "A array of numbers is required.");
            }
        });

        it('should return a list of 3 nodes', function () {
            let list = linkedListClass.createNewListWithNumArray([1, 2, 3]);
            let count = 1;
            let node = list.head;
            while(node.nextNode != null){
                node = node.nextNode;
                count++;
            }
            count.should.equal(3);
        });

        it('#getNodeCountFromList should return a count of 2', function () {
            let list = linkedListClass.createNewListWithNumArray([1, 2]);
            let count = list.getNodeCountFromList();
            count.should.equal(2);
        });
    });
});