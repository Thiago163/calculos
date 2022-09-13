function criarInputs() {
    var divareaDeInputs = document.getElementById("areaDeInputs");
    for (var i = 0; i < 5; i++) {
      divareaDeInputs.innerHTML += `<input id="input${i}"/>`;
    }
    divareaDeInputs.innerHTML += "<button onclick='preencherVetores()'>Calcular</button>"
  }
  
  function preencherVetores() {
    var vetor = [];
    for (var i = 0; i < 5; i++) {
      var input = document.getElementById(`input${i}`);
      var valor = parseInt(input.value);
      var divareaDeInputs = document.getElementById('areaDeInputs');
      vetor[i] = valor;
    }

    //Maior e menor Número

    do {

      //Maior numero
  
      for (var i = 0; i < 1; i++) {
        alert(`Maior numero = ${Math.max(vetor[0],vetor[1],vetor[2],vetor[3],vetor[4])}`);
      }

      //Menor numero

      for (var i = 0; i < 1; i++) {
        alert(`Menor numero = ${Math.min(vetor[0],vetor[1],vetor[2],vetor[3],vetor[4])}`);
      }
      
    } while (i < 1);
  

    //Média

    for (var i = 0; i < 1; i++) {
      alert("Media = " + (vetor[0]+vetor[1]+vetor[2]+vetor[3]+vetor[4])/5);
    }

     //Raiz

     for (var i = 0; i < 1; i++) {
      alert(`Raiz input1 = ${Math.sqrt(vetor[0])}`);
    }

    for (var i = 0; i < 1; i++) {
      alert(`Raiz input2 = ${Math.sqrt(vetor[1])}`);
    }

    for (var i = 0; i < 1; i++) {
      alert(`Raiz input3 = ${Math.sqrt(vetor[2])}`);
    }

    for (var i = 0; i < 1; i++) {
      alert(`Raiz input4 = ${Math.sqrt(vetor[3])}`);
    }

    for (var i = 0; i < 1; i++) {
      alert(`Raiz input5 = ${Math.sqrt(vetor[4])}`);
    }

    //Potência

    for (var i = 0; i < 1; i++) {
      alert(`Potencia input1 = ${Math.pow(vetor[0], vetor[0] )}`);
    }

    for (var i = 0; i < 1; i++) {
      alert(`Potencia input2 = ${Math.pow(vetor[1], vetor[1])}`);
    }

    for (var i = 0; i < 1; i++) {
      alert(`Potencia input3 = ${Math.pow(vetor[2], vetor[2])}`);
    }

    for (var i = 0; i < 1; i++) {
      alert(`Potencia input4 = ${Math.pow(vetor[3], vetor[3])}`);
    }

    for (var i = 0; i < 1; i++) {
      alert(`Potencia input5 = ${Math.pow(vetor[4], vetor[4])}`);
    }


    //Tabuada

    for (var i = 0; i <= 10; i++) {
      divareaDeInputs.innerHTML += `<p>${vetor[0]} x ${i} = ${vetor[0]*i}</p>`;
    }

    for (var i = 0; i <= 10; i++) {
      divareaDeInputs.innerHTML += `<p>${vetor[1]} x ${i} = ${vetor[1]*i}</p>`;
    }

    for (var i = 0; i <= 10; i++) {
      divareaDeInputs.innerHTML += `<p>${vetor[2]} x ${i} = ${vetor[2]*i}</p>`;
    }

    for (var i = 0; i <= 10; i++) {
      divareaDeInputs.innerHTML += `<p>${vetor[3]} x ${i} = ${vetor[3]*i}</p>`;
    }

    for (var i = 0; i <= 10; i++) {
      divareaDeInputs.innerHTML += `<p>${vetor[4]} x ${i} = ${vetor[4]*i}</p>`;
    }

  }