let dateStamp = 0
function getPosition(string, index) {
  return string.split(':', index).join(':').length;
}
const wh = ['timein','x']
function set() {
for (let g=0; g<2; g++){  
  let str = document.getElementById(wh[g]).value
    str = ":".concat(str)
  smhd = str.match(new RegExp(':', 'g')).length;
  let s = 0
  let m = 0
  let h = 0
  let d = 0
  let y = 0
  for (let i=0; i<smhd; i++){
  if (i===0){
    s = (str.substring(getPosition(str, smhd)+1, str.length))*1
  }
  if (i===1){
    m = (str.substring(getPosition(str, smhd-1)+1, getPosition(str, smhd)))*60
  }
  if (i===2){
    h = (str.substring(getPosition(str, smhd-2)+1, getPosition(str, smhd-1)))*3600
  }
  if (i===3){
    d = (str.substring(getPosition(str, smhd-3)+1, getPosition(str, smhd-2)))*86400
  }
  if (i===4){
    d = (str.substring(getPosition(str, smhd-3)+1, getPosition(str, smhd-2)))*31536000
  }
}
if(g===0){dateStamp = (d+h+m+s)}
else{x = (y+d+h+m+s)}
}
}
function shownext() {
  document.getElementById('next').innerHTML = " "
  for (let i = 0; i < 16; i++) {
      dateStamp += x
      document.getElementById('next').innerHTML += 
          //vvv  style="user-select:none"
      '<div     class='+(i%2==1?"":"light")+">" + 
      (dateStamp>=31536000?Math.floor(dateStamp/31536000)+":":"") +
      (dateStamp>=86400?Math.floor(dateStamp/86400%365)+":":"") +

      (Math.floor(dateStamp/3600)%24<10?"0":"") +
      Math.floor(dateStamp/3600)%24 + ":" +

      (Math.floor(dateStamp/60)%60<10?"0":"") +
      Math.floor(dateStamp/60)%60 + ":" +

        (dateStamp%60<10?"0":"") +
      dateStamp%60 + 
      "</div>"  
  }
  document.getElementById('next').innerHTML += "</br>" + "<button onclick='shownext()'>show next</button>"
}