describe('Calculate-bill factory function', function(){

   describe('Set bill', function(){
    it('should be able to set the string bill', function(){
        let calculateBill = calculateBillWidget()

        calculateBill.setStringBill('sms,call,sms,call,call')
        calculateBill.convertStringBill()
        assert.equal("sms,call,sms,call,call", calculateBill.getStringBill())
    })
    it('should be able to convert sringbill to array ', function(){
        let calculateBill = calculateBillWidget()

        calculateBill.setStringBill('sms,call,sms')
        calculateBill.convertStringBill()
        assert.deepEqual(["sms","call","sms"], calculateBill.getStringBill())
    })

    it('should be able to calculate total cost of the string bill ', function(){
        let calculateBill = calculateBillWidget()

        calculateBill.setStringBill('sms,call,sms')
        calculateBill.convertStringBill()
        calculateBill.calculateBillTotalCost();
        assert.equal(4.9, calculateBill.getBillTotalCost())
    })
    it('should return "warning" when warning level is reached, warning level = 10" ', function(){
        let calculateBill = calculateBillWidget()

        calculateBill.setStringBill('sms,call,sms,call,call,sms')
        calculateBill.convertStringBill()
        calculateBill.calculateBillTotalCost();
        assert.equal(11.1, calculateBill.getBillTotalCost())
        assert.equal("warning", calculateBill.totalClass())
    })
    it('should return "critical" when critical level is reached, critical level = 15" ', function(){
        let calculateBill = calculateBillWidget()

        calculateBill.setStringBill('sms,call,sms,call,call,sms,call,call')
        calculateBill.convertStringBill()
        calculateBill.calculateBillTotalCost();
        assert.equal(16.1, calculateBill.getBillTotalCost())
        assert.equal("critical", calculateBill.totalClass())
    })
   })
})