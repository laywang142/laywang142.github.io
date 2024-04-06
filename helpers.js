
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
        data[region].forEach(material => {
            if (material.characters.includes(characterName)) {
                // filteredMaterials[materialKey] = material;
                filteredMaterials.push({
                    indexName: region,
                    materialID: material.id,
                    materialName: material.name})
                }
            });
        }
    return filteredMaterials;
}