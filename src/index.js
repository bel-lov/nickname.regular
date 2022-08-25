export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    if (this.name.search(/^[\w-]+$/i) === -1) {
      throw new Error('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
    }
    if (this.name.match(/^[\d\-_]/) !== null) {
      throw new Error('Имя не должно начинаться цифрами, символами подчёркивания или тире');
    }
    if (this.name.match(/[\d_-]$/) !== null) {
      throw new Error('Имя не должно  заканчиваться цифрами, символами подчёркивания или тире');
    }
    if (/(\d{3,})/.test(this.name)) {
      throw new Error('Имя не должно содержать подряд более трёх цифр');
    }
    return this.name;
  }
}
