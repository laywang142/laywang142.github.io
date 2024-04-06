
// Filtering function
function filterMaterialsForCharacter(materials, characterName) {
    const filteredMaterials = [];
    for (const materialKey in materials) {
        if (materials.hasOwnProperty(materialKey)) {
            const material = materials[materialKey];
            if (material.characters && material.characters.includes(characterName)) {
                // filteredMaterials[materialKey] = material;
                filteredMaterials.push({
                    indexName: materialKey,
                    materialName: material.name
                })
            }
        }
    }
    return filteredMaterials;
}


// Putting everything into images
async function init(input) {
    var character_name = input.value.toLowerCase();

    // boss materials
    const response = await fetch('https://genshin.jmp.blue/materials/boss-material');
    const bossmat = await response.json();
    //console.log(bossmat)

    // Filter data for character
    const boss = filterMaterialsForCharacter(bossmat, character_name);
    //console.log(boss.map(item => item.indexName))

    if(character_name != null ){
        let url = 'https://genshin.jmp.blue/characters/' + character_name ;
        let msg = "Materials for" + character_name + ":";
    
        fetch(url)
        .then(res => res.json())
        .then(data => {
            document.getElementById('charimg').src = url + "/card";
            document.getElementById('bossmat').src = 'https://genshin.jmp.blue/materials/boss-material/' + boss.map(item => item.indexName);
    })
    .catch(error => console.error('Error fetching data:', error));


      }  
        
//   // Listen for when the input changes.
//   input.addEventListener('change', onInputChange)
//   function onInputChange(e) {
//     reader.readAsDataURL(this.files[0]);
//   }
}


