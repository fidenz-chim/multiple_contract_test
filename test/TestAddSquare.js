var Add = artifacts.require("./Add.sol");
var Math = artifacts.require("./Math.sol");

contract('Math', (accounts) => {

    var mathInstance;
    var addInstance;

    beforeEach('setup contract for each test', async() => {
        addInstance  = await Add.new();
        mathInstance = await Math.new(addInstance.address);
    })

    it("should be 2 the current value ", async() =>  {
        await addInstance.addValue(2);
        var x = await addInstance.getValue()
        assert.equal(x.valueOf(), 2, "2 wasn't the");
    });

    it("should be 5 the current value ", async() =>  {
        await addInstance.addValue(2);
        await addInstance.addValue(3);
        var x = await addInstance.getValue()
        assert.equal(x.valueOf(), 5, "5 wasn't the");
    });

    it("should be 9 when square 3 ", async() =>  {
        await mathInstance.squareValue(3);
        var x = await mathInstance.getValue()
        assert.equal(x.valueOf(), 9, "9 wasn't the");
    });

    it("should be 16 when square 4 ", async() =>  {
        await mathInstance.squareValue(4);
        var x = await mathInstance.getValue()
        assert.equal(x.valueOf(), 16, "16 wasn't the");
    });
    it("should be 0 when reset ", async() =>  {
        await mathInstance.squareValue(5);
        await mathInstance.resetValue();
        var x = await mathInstance.getValue()
        assert.equal(x.valueOf(), 0, "0 wasn't the");
    });

});
