
function init(input) {
    var character_name = input.value.toLowerCase();

    if(character_name != null ){
        let url = 'https://genshin.jmp.blue/characters/' + character_name ;
        let msg = "Materials for" + character_name + ":";
    
        fetch(url)
        .then(res => res.json())
        .then(data => {
            document.getElementById('charimg').src = url + "/card";

        // Filter data for "Venti"
        const bossmats = data.filter(material => material.characters.includes(character_name));

        // Output filtered materials
        console.log(msg, bossmats);
    })
    .catch(error => console.error('Error fetching data:', error));
          })
    
    }

//   // Listen for when the input changes.
//   input.addEventListener('change', onInputChange)
//   function onInputChange(e) {
//     reader.readAsDataURL(this.files[0]);
//   }
}




