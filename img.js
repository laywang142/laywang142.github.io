
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

        const res = await (await fetch(url)).json();
        var vision = res.vision.toLowerCase();

        var boss = filterMaterialsForCharacter(bossmat, character_name);
        var reg = filterRegionalMaterialsForCharacter(regional, character_name);
        var common = findIdsWithCharacterCommon(mats, character_name);
        var ascen = filterAscension(ascension, vision);
        //console.log(ascen[0])
 
    
        fetch(url)
        .then(res => res.json())
        .then(data => {
            document.getElementById('charimg').src = url + "/card";
            document.getElementById('bossmat').src = 'https://genshin.jmp.blue/materials/boss-material/' + boss.map(item => item.indexName);
            document.getElementById('bossmat').title = boss.map(item => item.indexName);
            document.getElementById('regimg').src = 'https://genshin.jmp.blue/materials/local-specialties/' + reg.map(item => item.materialID);
            document.getElementById('regimg').title = reg.map(item => item.materialID);
            document.getElementById('matlow').src = 'https://genshin.jmp.blue/materials/common-ascension/' + Object.values(common)[0][0];
            document.getElementById('matlow').title = + Object.values(common)[0][0];
            document.getElementById('matmed').src = 'https://genshin.jmp.blue/materials/common-ascension/' + Object.values(common)[0][1];
            document.getElementById('matmed').title = Object.values(common)[0][1];
            document.getElementById('mathigh').src = 'https://genshin.jmp.blue/materials/common-ascension/' + Object.values(common)[0][2];
            document.getElementById('mathigh').title = Object.values(common)[0][2];
            document.getElementById('sliverimg').src = 'https://genshin.jmp.blue/materials/character-ascension/' + ascen[0];
            document.getElementById('sliverimg').title = ascen[0];
            document.getElementById('fragmentimg').src = 'https://genshin.jmp.blue/materials/character-ascension/' + ascen[1];
            document.getElementById('fragmentimg').title = ascen[1];
            document.getElementById('chunkimg').src = 'https://genshin.jmp.blue/materials/character-ascension/' + ascen[2];
            document.getElementById('chunkimg').title = ascen[2];
            document.getElementById('gemimg').src = 'https://genshin.jmp.blue/materials/character-ascension/' + ascen[3];
            document.getElementById('gemimg').title = ascen[3];
    })
    .catch(error => console.error('Error fetching data:', error));


      }  
        
}


