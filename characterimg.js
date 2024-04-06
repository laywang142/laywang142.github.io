
var character_name = document.getElementById('inputName');

if(character_name != null){
    let url = 'https://genshin-app-api.herokuapp.com/api/characters/info/' + character_name + '?infoDataSize=minimal';

    fetch(url)
    .then(res => res.json())
    .then(data => {
        document.getElementById('charimg').src = data.cardImageURL;
      })

}
