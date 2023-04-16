let tab = []
let propertyTab = []
async function logJSONData() {
    const response = await fetch("./piwa.json")
    const jsonData = await response.json()
      let out = ""
      for(var i=0; i<jsonData.length;i++){
        if(jsonData[i].favorite){
          tab[i] = 1
        }else{
          tab[i] = 0
        }
          out += `
    <div class="card">
      <input id = "fav_${jsonData[i].id}" type="checkbox" onclick="favoriteChange('fav_${jsonData[i].id}')"></button>
      <label for="fav_${jsonData[i].id}" class="favorite"><i id = "i_${jsonData[i].id}" class="fa-solid fa-heart fa-2xl" `
      if(jsonData[i].favorite){
        out+=' style ="color:#ff0000;" '
      }
      out+=`></i></label>
        <div class="imgBx">
          <img class="bear" src="${jsonData[i].foto__url}">
        </div>
      <div class="contentBx">
        <span><img class="flag" src="/foto/flags/${jsonData[i].origin}.png" alt="Niemcy"><h2>${jsonData[i].name}</h2></span>
        <div class="beerProperty">`
          for(var j = 0;j<jsonData[i].property.length;j++){
              out += `
                <div class='beerPropertyElement'>${jsonData[i].property[j]}</div>`
          }
          out+=`
      </div>
        <button class="details" onclick='details(${jsonData[i].id})'>Pokaż szczegóły</button>
      </div>
      <div class="popUp" id = "popUp_${jsonData[i].id}" style="opacity: 0;">
        <h1>${jsonData[i].name}</h1>
        <button class="closeBNT" onclick="closeDetails(${jsonData[i].id})"><i class="fa-solid fa-xmark fa-2xl" style="color: #ffffff;"></i></button>
        <img class="bear" src="${jsonData[i].foto__url}">
        <p>${jsonData[i].info}</p>
        <div class="beerProperty"> `
        for(var j = 0;j<jsonData[i].property.length;j++){
          out += `
          <div class='beerPropertyElement'>${jsonData[i].property[j]}</div>`
        }
        out+=`
      </div>
        </div>
    </div>
          `
      }
      document.getElementById("slider").innerHTML = out
}
function details(number){
  let name = "popUp_" + number
  document.getElementById(name).style.opacity = 1
  document.getElementById(name).style.zIndex = 90
}
function closeDetails(number){
  let name = "popUp_" + number
  document.getElementById(name).style.opacity = 0
  document.getElementById(name).style.zIndex = -90
}
function favoriteChange(name){
  let chec = document.getElementById(name).checked
  let help = name.replace('fav_','i_')
  let help2 = name.replace('fav_','')
  if(chec){
    document.getElementById(help).style.color = "red"
    tab[help2] = 1
  }else{
    document.getElementById(help).style.color = "white"
    tab[help2] = 0
  }
}

