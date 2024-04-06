
function init(input) {
    var character_name = input.value.toLowerCase();

    if(character_name != null ){
        let url = 'https://genshin.jmp.blue/characters/' + character_name ;
    
        fetch(url)
        .then(res => res.json())
        .then(data => {
            document.getElementById('charimg').src = url + "/card";
          })
    
    }

//   // Listen for when the input changes.
//   input.addEventListener('change', onInputChange)
//   function onInputChange(e) {
//     reader.readAsDataURL(this.files[0]);
//   }
}




