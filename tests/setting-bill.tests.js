describe('Bill with settings factory function' , function(){
  
    describe('Set values', function(){
        it('should be able to set the call cost' , function(){
        
            let settingsBill = billWithSettings();
            settingsBill.setCallCost(1.85)
            assert.equal(1.85, settingsBill.getCallCost())
    
            let settingsBill2 = billWithSettings();
            settingsBill2.setCallCost(3.15)
    
            assert.equal(3.15, settingsBill2.getCallCost())
    
        });
    
        it('should be able to set the sms cost' , function(){
            
            let settingsBill = billWithSettings();
            settingsBill.setSmsCost(1.85)
            assert.equal(1.85, settingsBill.getSmsCost())
    
            let settingsBill2 = billWithSettings();
            settingsBill2.setSmsCost(2.1)
            assert.equal(2.1, settingsBill2.getSmsCost())
    
        });
    
        it('should be able to set the sms and call cost ' , function(){
            
            let settingsBill = billWithSettings();
            settingsBill.setSmsCost(2.55)
            assert.equal(2.55, settingsBill.getSmsCost())
    
            let settingsBill2 = billWithSettings();
            settingsBill2.setCallCost(3.99)
            assert.equal(3.99, settingsBill2.getCallCost())
    
        });
    
        it('should be able to set the warning level' , function(){
            
            let settingsBill = billWithSettings();
            settingsBill.setWarningLevel(15)
            assert.equal(15, settingsBill.getWarningLevel())
    
            let settingsBill2 = billWithSettings();
            settingsBill2.setWarningLevel(30)
            assert.equal(30, settingsBill2.getWarningLevel())
    
        });
    
        it('should be able to set the critical level' , function(){
            
            let settingsBill = billWithSettings();
            settingsBill.setCriticalLevel(35)
            assert.equal(35, settingsBill.getCriticalLevel())
    
            let settingsBill2 = billWithSettings();
            settingsBill2.setCriticalLevel(55)
            assert.equal(55, settingsBill2.getCriticalLevel())
    
        });
    
    
        it('should be able to set the warning and critical level' , function(){
            
            let settingsBill = billWithSettings();
            settingsBill.setWarningLevel(22.5)
            assert.equal(22.5, settingsBill.getWarningLevel())
    
            let settingsBill2 = billWithSettings();
            settingsBill2.setCriticalLevel(34.5)
            assert.equal(34.5, settingsBill2.getCriticalLevel())
    
        });
    })

    describe('Use values', function(){
        it('should be able to use the call cost setting @R2.5 and @R3.1 respectively', function(){

            let settingsBill = billWithSettings();
            let settingsBill2 = billWithSettings()

            settingsBill.setCallCost(2.5)
            settingsBill2.setCallCost(3.1);
            settingsBill.setCriticalLevel(15)
            settingsBill2.setCriticalLevel(15)

            settingsBill.makeCall()
            settingsBill.makeCall()

            settingsBill2.makeCall()
            settingsBill2.makeCall()
            settingsBill2.makeCall()
            


            assert.equal(5, settingsBill.getTotalCallCost())

            assert.equal(9.3, settingsBill2.getTotalCost())
        
        })

        it('should be able to use the sms cost setting @0.8 amd @R0.25 respectively', function(){

            let settingsBill = billWithSettings();
            let settingsBill2 = billWithSettings()

            settingsBill.setSmsCost(0.8)
            settingsBill2.setSmsCost(0.25);
        
            settingsBill.setCriticalLevel(10);
            settingsBill2.setCriticalLevel(10);

            settingsBill.sendSms()
            settingsBill.sendSms()

            settingsBill2.sendSms()
            settingsBill2.sendSms()
            settingsBill2.sendSms()
            


            assert.equal(1.6, settingsBill.getTotalSmsCost())
            assert.equal(0.75, settingsBill2.getTotalCost())
            assert.equal(1.6, settingsBill.getTotalCost())
        
        })

        it('should be able to use the total cost setting  2xcalls and 3xsms, sms=R1.5 and call=R3.2 each', function(){

            let settingsBill = billWithSettings();
          
            settingsBill.setWarningLevel(5)
            settingsBill.setCriticalLevel(10)
            settingsBill.setCallCost(3.2)
            settingsBill.setSmsCost(1.5);


            settingsBill.makeCall()
            settingsBill.makeCall()

            settingsBill.sendSms()
            settingsBill.sendSms()
            settingsBill.sendSms()
            


            assert.equal(6.4, settingsBill.getTotalCallCost())
            assert.equal(4.5, settingsBill.getTotalSmsCost())
            assert.equal(10.9, settingsBill.getTotalCost())
            
        
        })

    })

    describe('warning and critical level', function(){
        it('should return a class name of warning if warning is reached', function(){
            let settingsBill = billWithSettings();

            settingsBill.setCallCost(3.2)
            settingsBill.setSmsCost(1.5)
            settingsBill.setWarningLevel(10)
            settingsBill.setCriticalLevel(20)
            

            settingsBill.makeCall()
            settingsBill.makeCall()
            settingsBill.makeCall()
            
            settingsBill.sendSms()
            settingsBill.sendSms()
        

            assert.equal("warning", settingsBill.totalClassName())
            
        })

        it('should return a class name of critical if critical level is reached', function(){
            let settingsBill = billWithSettings();

            settingsBill.setCallCost(3.2)
            settingsBill.setSmsCost(1.5)
            settingsBill.setWarningLevel(10)
            settingsBill.setCriticalLevel(20)
            

            settingsBill.makeCall()
            settingsBill.makeCall()
            settingsBill.makeCall()
            settingsBill.makeCall()
            settingsBill.makeCall()
            settingsBill.makeCall()
            
            settingsBill.sendSms()
            settingsBill.sendSms()
            settingsBill.sendSms()

            assert.equal("critical", settingsBill.totalClassName())
            
        })
    })


});