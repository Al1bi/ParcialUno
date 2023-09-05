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

});