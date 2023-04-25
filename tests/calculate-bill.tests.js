describe('Calculate-bill factory function', function(){

   describe('Set bill', function(){
    it('should be able to set the string bill', function(){
        let calculateBill = calculateBillWidget()

        calculateBill.setStringBill('sms,call,sms')
        calculateBill.convertStringBill()
        assert.equal("sms,call,sms", calculateBill.getStringBill())
    })
    it('should be able to convert sringbill to array ', function(){
        let calculateBill = calculateBillWidget()

        calculateBill.setStringBill('sms,call,sms')
        calculateBill.convertStringBill()
        assert.deepEqual(["sms","call","sms"], calculateBill.getStringBill())
    })
   })
})