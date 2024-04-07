// Getting options for select field 

$(document).ready(function () {
  $.getJSON('https://genshin.jmp.blue/characters', function (jsonData) {
    // Populate datalist with options
    var datalist = $('#opts');
    $.each(jsonData, function (index, value) {
      datalist.append(`<option value="${value}">`);
    });
  });
});

// Hiding tables + character image until character name filled
const inputField = document.getElementById('inputName');
const HideTbl = document.getElementById('itmtbl');
const HideImg = document.getElementById('charimg');
const HideForm = document.getElementById('myForm');

inputField.addEventListener('input', async function () {

  const charnames = await (await fetch('https://genshin.jmp.blue/characters')).json();
  const inputValue = inputField.value.trim().toLowerCase();

  if (charnames.includes(inputValue)) {
    // Show the hidden content
    HideTbl.classList.remove('d-none');
    HideImg.classList.remove('d-none');
    HideForm.classList.remove('d-none');
  } else {
    // Hide the content if the input is empty
    HideTbl.classList.add('d-none');
    HideImg.classList.add('d-none');
    HideForm.classList.add('d-none');

    resetFormIfEmpty();
  }
});

// Reset character input 

function resetCharacterInput() {
  var inputs = document.querySelectorAll('input[type="text"]');
  inputs.forEach(function (input) {
    input.value = ''; // Clear the value of each text input
  });

  resetFormIfEmpty();
}

// Get the reset button to also hide the other elements

document.getElementById("rstbtn").addEventListener("click", function () {
  const HideTbl = document.getElementById('itmtbl');
  const HideImg = document.getElementById('charimg');
  const HideForm = document.getElementById('myForm');

  // Hide the content if the input is empty
  HideTbl.classList.add('d-none');
  HideImg.classList.add('d-none');
  HideForm.classList.add('d-none');

});

// Reset input form if the character form is empty
function resetFormIfEmpty() {

  document.getElementById("myForm").reset(); // Reset the form

  var selectedOption = document.querySelector('input[name="gridRadios"]:checked').value;

  //Reset Table
  var startVals = {}
  if (selectedOption === "option1") {
    startVals.boss = 0;
    startVals.matlow = 0;
    startVals.matmed = 0;
    startVals.mathigh = 0;
    startVals.regsp = 0;
    startVals.sliver = 0;
    startVals.fragment = 0;
    startVals.chunk = 0;
    startVals.gem = 0;
  } else if (selectedOption === "option2") {
    startVals.boss = 0;
    startVals.matlow = 3;
    startVals.matmed = 0;
    startVals.mathigh = 0;
    startVals.regsp = 3;
    startVals.sliver = 1;
    startVals.fragment = 0;
    startVals.chunk = 0;
    startVals.gem = 0;
  } else if (selectedOption === "option3") {
    startVals.boss = 2;
    startVals.matlow = 18;
    startVals.matmed = 0;
    startVals.mathigh = 0;
    startVals.regsp = 13;
    startVals.sliver = 1;
    startVals.fragment = 3;
    startVals.chunk = 0;
    startVals.gem = 0;
  } else if (selectedOption === "option4") {
    startVals.boss = 6;
    startVals.matlow = 18;
    startVals.matmed = 12;
    startVals.mathigh = 0;
    startVals.regsp = 33;
    startVals.sliver = 1;
    startVals.fragment = 9;
    startVals.chunk = 0;
    startVals.gem = 0;
  } else if (selectedOption === "option5") {
    startVals.boss = 14;
    startVals.matlow = 18;
    startVals.matmed = 30;
    startVals.mathigh = 0;
    startVals.regsp = 63;
    startVals.sliver = 1;
    startVals.fragment = 9;
    startVals.chunk = 3;
    startVals.gem = 0;
  } else if (selectedOption === "option6") {
    startVals.boss = 26;
    startVals.matlow = 18;
    startVals.matmed = 30;
    startVals.mathigh = 12;
    startVals.regsp = 108;
    startVals.sliver = 1;
    startVals.fragment = 9;
    startVals.chunk = 9;
    startVals.gem = 0;
  } else if (selectedOption === "option7") {
    startVals.boss = 46;
    startVals.matlow = 18;
    startVals.matmed = 30;
    startVals.mathigh = 36;
    startVals.regsp = 168;
    startVals.sliver = 1;
    startVals.fragment = 9;
    startVals.chunk = 9;
    startVals.gem = 6;
  }

  document.getElementById('boss').textContent = startVals.boss;
  document.getElementById('low').textContent = startVals.matlow;
  document.getElementById('med').textContent = startVals.matmed;
  document.getElementById('high').textContent = startVals.mathigh;
  document.getElementById('reg').textContent = startVals.regsp;
  document.getElementById('sliver').textContent = startVals.sliver;
  document.getElementById('fragment').textContent = startVals.fragment;
  document.getElementById('chunk').textContent = startVals.chunk;
  document.getElementById('gem').textContent = startVals.gem;
}

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
          materialName: material.name
        })
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

