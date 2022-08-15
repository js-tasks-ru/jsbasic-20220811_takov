function checkSpam(str) {
  if (str.includes('1XbeT') || str.includes('free')){
    return true;
  }else{
    return false;
  }
}

checkSpam('1XbeT now')
checkSpam('free xxxxx')
checkSpam('innocent rabbit')