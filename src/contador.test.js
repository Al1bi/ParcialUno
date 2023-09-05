import Contador from "./contador";

describe("Contador de ocurrencias", () => {
  it(" La frase \"denilson\", retorna ocurrencias -> denilson: 1 ", () => {
    const cont = new Contador("denilson");
    let esperado = {"denilson":1};
    expect(cont.verificarOcurrencias(esperado)).toEqual(true);
  });
});
