import Contador from "./contador";

describe("Contador de ocurrencias", () => {
  it(" La frase \"denilson\", retorna ocurrencias -> denilson: 1 ", () => {
    const cont = new Contador("denilson");
    let palabras = ["denilson"];
    let cantidad = [1];
    expect(cont.verificarOcurrencias(palabras, cantidad)).toEqual(true);
  });

  it(" La frase \"denilson\", no retorna ocurrencias -> denilson: 7 ", () => {
    const cont = new Contador("denilson");
    let palabras = ["denilson"];
    let cantidad = [7];

    expect(cont.verificarOcurrencias(palabras, cantidad)).toEqual(false);
  });

  it(" La frase \"denilson, denilson\", retorna ocurrencias -> denilson: 2 ", () => {
    const cont = new Contador("denilson, denilson");
    let palabras = ["denilson"];
    let cantidad = [2];

    expect(cont.verificarOcurrencias(palabras, cantidad)).toEqual(true);
  });

  it(" La frase \"denilson, DENILSON\", retorna ocurrencias -> denilson: 2 ", () => {
    const cont = new Contador("DENILSON, denilson");
    let palabras = ["denilson"];
    let cantidad = [2];

    expect(cont.verificarOcurrencias(palabras, cantidad)).toEqual(true);
  });

  it(" La frase \"denilson fiesta inocente\", retorna ocurrencias -> denilson: 1, fiesta: 1, inocente:1 ", () => {
    const cont = new Contador("denilson fiesta inocente");
    let palabras = ["denilson", "fiesta", "inocente"];
    let cantidad = [1, 1, 1];

    expect(cont.verificarOcurrencias(palabras, cantidad)).toEqual(true);
  });
  it(" La frase \"denilson-fiesta-inocente\", retorna ocurrencias -> denilson: 1, fiesta: 1, inocente:1 ", () => {
    const cont = new Contador("denilson-fiesta-inocente");
    let palabras = ["denilson", "fiesta", "inocente"];
    let cantidad = [1, 1, 1];

    expect(cont.verificarOcurrencias(palabras, cantidad)).toEqual(true);
  });

  it(" La frase \"El password de mi cuenta es PASSWORD. Es un password de poco cuidado\", retorna ocurrencias -> El: 1, password: 3, de:2, mi:1, cuenta:1, es:2, un: 1, poco:1, cuidado:1 ", () => {
    const cont = new Contador("El password de mi cuenta es PASSWORD. Es un password de poco cuidado");
    let palabras = ["El", "password", "de", "mi", "cuenta", "es", "un", "poco", "cuidado"];
    let cantidad = [1, 3, 2, 1, 1, 2, 1, 1, 1];

    expect(cont.verificarOcurrencias(palabras, cantidad)).toEqual(true);
  });

});
