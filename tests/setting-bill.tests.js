describe('Bill with settings factory function' , function(){
    it('should be able to set the call cost' , function(){
        
        let settingsBill = billWithSettings();
        settingsBill.setCallCost(1.85)
        assert.equal(1.85, settingsBill.getCallCost())

        let settingsBill2 = billWithSettings();
        settingsBill2.setCallCost(3.15)

        assert.equal(3.15, settingsBill2.getCallCost())

    });

});