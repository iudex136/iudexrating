let data = []
let found = false
let haslooked = JSON.parse(localStorage.getItem("found")) || false
const inputEl = document.getElementById("input")
const img = document.getElementById("img")
const rating = document.getElementById("rating")

//if (haslooked){
   // document.getElementById("btn").disabled = true
    //document.getElementById("btn").style.disabled = true
    //rating.textContent =" معرفة التقييم مرة وحده يا بعد روحي"
//}
async function getdata(){
 fetch("data.json")
    .then(res => res.json())
    .then(jsondata => {
        data = jsondata
        
    })

}
 getdata()

function check(){
    
    if (inputEl.value != ""){
        for (let i = 0; i < data.length; i++){
            if(inputEl.value.toLowerCase() === data[i].name.toLowerCase()){
                img.src = data[i].picture
                rating.textContent = data[i].rating + "/10"
                haslooked = true
                localStorage.setItem("found", haslooked)
                found = true
                break
            }
        }
        if(found === false){
            rating.textContent = "تتم الاضافة لاحقا"            
        }
        else{
            return
        }
    }
}