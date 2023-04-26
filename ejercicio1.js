function piramide(numero) {
    for (let i = 1; i <= numero; i++) {
      let piso = "";
      for (let j = 1; j <= i; j++) {
        piso += j + " ";
      }
      console.log(piso);
    }
  }
  
  
  piramide(6);

  piramide(3);