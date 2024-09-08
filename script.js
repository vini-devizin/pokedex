function showinfo(datas) { // mostra as informações
    document.querySelector('#name').innerHTML = datas.name;
    document.querySelector('#n').innerHTML = datas.id;
    document.querySelector('#pkm-img').src = datas.sprites.versions['generation-v']['black-white'].animated['front_default'];
  }
  
  async function callapi(pokemon) { // chama a API
    dados = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(resp => resp.json());
    showinfo(dados);
  }
  
  function getpkm() { // busca o pokemon pelo nome ou numero
    const pkm = document.getElementById('search-input').value;
    callapi(pkm);
  }