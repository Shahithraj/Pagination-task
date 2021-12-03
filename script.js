let tbody = document.querySelector('#tbody')
let pagesize = 10;
let currentpage =0
let totalpage = 50/pagesize;

let users = fetch('https://614eac05b4f6d30017b482de.mockapi.io/users').then((data) => data.json())
.then((data) => {
    users = data
    for(let i=0;i<10;i++){
 insertNewRow(users[i])
    }
})
// console.log(users);
function insertNewRow(data){
    let row = tbody.insertRow();
    let cell0 = row.insertCell(0)
    let cell1 = row.insertCell(1)
    let cell2 = row.insertCell(2)
    
    cell1.innerHTML = data.name;
    cell2.innerHTML = data.avatar;
    cell0.innerHTML = data.id;
}
function changepage(direction){
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].includes(direction)
) {
   
    if(direction==="next" && currentpage<totalpage-1){
       
  currentpage++;
  printrecord()
    }

      else if(direction==="prev"  && currentpage>0){
       
       currentpage--;
       printrecord()
       
        }
      
}
function printrecord(){
    tbody.innerHTML = "";
    for(let i=currentpage * pagesize ;i<currentpage * pagesize + pagesize;i++){
        insertNewRow(users[i])
           }
       
}