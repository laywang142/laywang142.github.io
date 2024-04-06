
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

// Filtering function
function filterRegionalMaterialsForCharacter(data, characterName) {
    const filteredMaterials = [];

    for (const region in data) {
        if (data.hasOwnProperty(region)) {
            const materials = data[region];
            for (const material of materials) {
                if (material.characters.includes(characterName)) {
                // filteredMaterials[materialKey] = material;
                filteredMaterials.push({
                    indexName: region,
                    materialID: material.id,
                    materialName: material.name
                })
            }
        }
    }
    return filteredMaterials;
}
}


// Putting everything into images
async function init(input) {
    var character_name = input.value.toLowerCase();

    // boss materials
    const response = await fetch('https://genshin.jmp.blue/materials/boss-material');
    const bossmat = await response.json();

    // regional specialities
    const regional = await (await fetch('https://genshin.jmp.blue/materials/local-specialties')).json()

    // ascesion materials
    const ascension = await (await fetch('https://genshin.jmp.blue/materials/character-ascension')).json();

    // common ascension materials 
    const mats = await (await fetch('https://genshin.jmp.blue/materials/common-ascension')).json();

    if(character_name != null ){
        let url = 'https://genshin.jmp.blue/characters/' + character_name ;
        const boss = filterMaterialsForCharacter(bossmat, character_name);
        const reg = filterRegionalMaterialsForCharacter(regional, character_name);
    
        fetch(url)
        .then(res => res.json())
        .then(data => {
            document.getElementById('charimg').src = url + "/card";
            document.getElementById('bossmat').src = 'https://genshin.jmp.blue/materials/boss-material/' + boss.map(item => item.indexName);
            document.getElementById('regimg').src = 'https://genshin.jmp.blue/materials/local-specialties/' + reg.map(item => item.materialID);
    })
    .catch(error => console.error('Error fetching data:', error));


      }  
        
}


