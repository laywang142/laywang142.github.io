// Check Input Values
function isNumeric(value) {
  return isNaN(value);
}

function showWarning(fieldName) {
  alert("Please enter a numeric value for " + fieldName);
}

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

// Filtering common ascension
function findIdsWithCharacterCommon(data, characterName) {
    const ids = {};
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const characters = data[key].characters;
      if (characters && characters.includes(characterName)) {
        const items = data[key].items;
        if (items) {
          ids[key] = items.map(item => item.id);
        }
      }
    }
  }
  return ids;
}

// Filtering Ascension materials

function filterAscension(data, category) {
    if (data[category] && typeof data[category] === 'object') {
        const categoryIDs = Object.values(data[category]).map(item => item.id);
        return categoryIDs;
      } else {
        return [];
      }
    }

    