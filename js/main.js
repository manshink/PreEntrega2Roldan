class GeneradorContraseña {
    constructor() {
      this.caracteres = {
        letras: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        numeros: "0123456789",
        caracteresEspeciales: "!@#$%^&*()-_=+[]{}|;:,.<>?"
      };
    }
  
    generarContraseña(length) {
      const contraseña = [];
      for (let i = 0; i < length; i++) {
        const tipoDeCaracter = Math.floor(Math.random() * 3);
        let letra;
        switch (tipoDeCaracter) {
          case 0:
            letra = this.caracteres.letras.charAt(Math.floor(Math.random() * this.caracteres.letras.length));
            break;
          case 1:
            letra = this.caracteres.numeros.charAt(Math.floor(Math.random() * this.caracteres.numeros.length));
            break;
          case 2:
            letra = this.caracteres.caracteresEspeciales.charAt(Math.floor(Math.random() * this.caracteres.caracteresEspeciales.length));
            break;
        }
        contraseña.push(letra);
      }
      return contraseña.join("");
    }
  }
  
  const contraseñaElMaster = new GeneradorContraseña();
  
  while (true) {
    const longitud = prompt("Ingresa la longitud deseada de la contraseña (Entre 1 y 20)");
    if (longitud < 1 || longitud > 20 || longitud === null || longitud === "" || isNaN(longitud)) {
      alert("La longitud de la contraseña debe ser mayor a cero y menor o igual a 20. Solo se aceptan valores numericos.");
    } else {
      const contraseña = contraseñaElMaster.generarContraseña(parseInt(longitud));
      alert(`La contraseña generada es: ${contraseña}`);
      break;
    }
  }