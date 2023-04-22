let dateStamp = 0
function set() {
  x = document.getElementById('x').value*1
  let d = document.getElementById('d').value*86400
  let h = document.getElementById('h').value*3600
  let m = document.getElementById('m').value*60
  let s = document.getElementById('s').value*1
  if (x === '') x = 0 
  if (d === '') d = 0 
  if (h === '') h = 0 
  if (m === '') m = 0 
  if (s === '') s = 0 
  dateStamp = JSON.parse(d+h+m+s)
}

function shownext() {
  document.getElementById('next').innerHTML = " "
  for (let i = 0; i < 15; i++) {
      dateStamp += x
      document.getElementById('next').innerHTML += 
      //style="user-select:none"
      '<div class='+(i%2==1?"":"light")+">" + 
      (dateStamp>=86400?Math.floor(dateStamp/86400)+":":"") +

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