function billWithSettings() {
  var theCallCost = 0;
  var theSmsCost = 0;
  var theWarningLevel = 0;
  var theCriticalLevel = 0;
  var callCostTotal = 0;
  var smsCostTotal = 0;

  function setCallCost(callCost) {
    theCallCost = callCost;
  }

  function getCallCost() {
    return theCallCost;
  }

  function setSmsCost(smsCost) {
    theSmsCost = smsCost;
  }

  function getSmsCost() {
    return theSmsCost;
  }

  function setWarningLevel(warningLevel) {
    theWarningLevel = warningLevel;
  }

  function getWarningLevel() {
    return theWarningLevel;
  }
  function setCriticalLevel(criticalLevel) {
    theCriticalLevel = criticalLevel;
  }
  function getCriticalLevel() {
    return theCriticalLevel;
  }
  function makeCall() {
    if (!hasReachedCriticalLevel()) {
      callCostTotal = callCostTotal + theCallCost;
    }
  }
  function getTotalCallCost() {
    return callCostTotal;
  }
  function sendSms() {
    if (!hasReachedCriticalLevel()) {
      smsCostTotal = smsCostTotal + theSmsCost;
    }
  }
  function getTotalSmsCost() {
    return smsCostTotal;
  }

  function getTotalCost() {
    return smsCostTotal + callCostTotal;
  }
  function hasReachedCriticalLevel() {
    return getTotalCost() >= getCriticalLevel();
  }
  function totalClassName() {
    if (hasReachedCriticalLevel()) {
      return "critical";
    }else if (getTotalCost() >= getWarningLevel()) {
      return "warning";
    }
  }

  return {
    setCallCost,
    setSmsCost,
    getCallCost,
    getSmsCost,
    setWarningLevel,
    getWarningLevel,
    setCriticalLevel,
    getCriticalLevel,
    makeCall,
    getTotalCallCost,
    getTotalSmsCost,
    getTotalCost,
    sendSms,
    totalClassName,
  };
}
