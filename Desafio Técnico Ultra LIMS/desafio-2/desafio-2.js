document.addEventListener("DOMContentLoaded", function () {
  fetchAddressList(getAddressList());
});

const cepInput = document.querySelector("#cep");

cepInput.addEventListener("input", function () {
  const cepValue = cepInput.value;

  if (cepValue.length == 8) {
    updateInputsState(true);

    getAddressByCep(cepValue);
    console.log(cepValue);
  }
});

const selectPlace = document.querySelector("#selectPlace");
const selectSort = document.querySelector("#selectSort");

selectPlace.addEventListener("change", sortAddressList);
selectSort.addEventListener("change", sortAddressList);

function updateInputsState(disabled) {
  const inputs = document.querySelectorAll("input");

  inputs.forEach((element) => {
    element.readOnly = disabled;
    element.style.backgroundColor = disabled ? "rgba(0, 0, 0, 0.3)" : "";
  });
}

async function getAddressByCep(cepValue) {
  fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
    .then((response) => response.json())
    .then((data) => {
      updateInputValues(data);
      updateInputsState(false);
    })
    .catch((error) => {
      console.error("API error:", error);
    });
}

function updateInputValues(data) {
  document.querySelector("#rua").value = data.logradouro;
  document.querySelector("#bairro").value = data.bairro;
  document.querySelector("#cidade").value = data.localidade;
  document.querySelector("#estado").value = data.uf;
}

function saveForm() {
  const cep = document.querySelector("#cep").value;
  const rua = document.querySelector("#rua").value;
  const bairro = document.querySelector("#bairro").value;
  const cidade = document.querySelector("#cidade").value;
  const estado = document.querySelector("#estado").value;
  const numero = document.querySelector("#numero").value;

  const address = {
    cep: cep,
    rua: rua,
    bairro: bairro,
    cidade: cidade,
    estado: estado,
    numero: numero,
  };

  if (verifyForm()) {
    saveAddress(address);
  }
}

function verifyForm() {
  const inputs = document.querySelectorAll("input");

  inputs.forEach(function (e) {
    if (e.value == "") {
      return false;
    }
  });
  return true;
}

function getAddressList() {
  var addressList = JSON.parse(localStorage.getItem("addressList")) || [];
  return addressList;
}

function saveAddress(address) {
  var addressList = getAddressList();
  addressList.push(address);

  localStorage.setItem("addressList", JSON.stringify(addressList));

  fetchAddressList(addressList);
}

function clearAddressList() {
  localStorage.removeItem("addressList");

  fetchAddressList(getAddressList());
}

function fetchAddressList(addressList) {
  var div = document.querySelector("#addressList");
  div.innerHTML = "";

  if (addressList.length !== 0) {
    addressList.forEach(function (e) {
      div.innerHTML += `
      <div class="address">
        <p><b>${e.cep}</b> - ${e.rua} nº: ${e.numero} </p>
        <p><b>Bairro:</b> ${e.bairro}</p>
        <p>${e.cidade} - ${e.estado}</p>
        <hr>
      </div>
      `;
    });
  } else {
    div.innerHTML = `
    <div class="emptyList">
      <p>Sem endereços cadastrados<p/>
    <div/>
    `;
  }
}

function sortAddressList() {
  const addressList = getAddressList();
  const optionPlace = selectPlace.value;
  const optionSort = selectSort.value;

  const sortOptions = {
    Bairro: sortByBairro,
    Cidade: sortByCidade,
    Estado: sortByEstado,
  };

  addressList.sort(sortOptions[optionPlace]);

  var reverse = false;

  if (optionSort == "Crescente" && reverse == true) {
    addressList.reverse();
    reverse = false;
  } else if (optionSort == "Decrescente" && reverse == false) {
    addressList.reverse();
    reverse = true;
  }

  fetchAddressList(addressList);
}

function sortByBairro(a, b) {
  return a.bairro.localeCompare(b.bairro);
}

function sortByCidade(a, b) {
  return a.cidade.localeCompare(b.cidade);
}

function sortByEstado(a, b) {
  return a.estado.localeCompare(b.estado);
}
