abstract class KucniLjubimac {
  public ime!: string
  abstract glasajSe(): string
}

class Pas extends KucniLjubimac {
  private zvuk: string
  constructor() {
    super()
    this.zvuk = 'Vauuu'
    this.ime = 'Doggo'
  }
  glasajSe(): string {
    return this.zvuk
  }
}

class Macka extends KucniLjubimac {
  private zvuk: string
  constructor() {
    super()
    this.zvuk = 'Miauuu'
    this.ime = 'Catto'
  }
  glasajSe(): string {
    return this.zvuk
  }

  //   static dohvatiIme(): string {
  //     return 'Catto'
  //   }
}

const pas = new Pas()
const macka = new Macka()
console.log(pas instanceof Pas)
console.log(pas.glasajSe())
console.log(macka instanceof Macka)
console.log(macka.glasajSe())
// console.log(Macka.dohvatiIme())
