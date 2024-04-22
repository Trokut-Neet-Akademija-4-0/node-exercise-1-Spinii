import Student from './zad2'

class Kutija<T> {
  sadrzaj: T[]

  constructor() {
    this.sadrzaj = []
  }

  dodajStvar(stvar: T) {
    this.sadrzaj.push(stvar)
  }
}

const kutijaBrojeva = new Kutija<number>()

kutijaBrojeva.dodajStvar(1)
kutijaBrojeva.dodajStvar(2)
kutijaBrojeva.dodajStvar(55)

const kutijaStringova = new Kutija<string>()
kutijaStringova.dodajStvar('Alo')
kutijaStringova.dodajStvar('Alo')
kutijaStringova.dodajStvar('Stani')
kutijaStringova.dodajStvar('Malo')

console.log(kutijaBrojeva.sadrzaj)
console.log(kutijaStringova.sadrzaj)

const kutijaStudenata = new Kutija<Student>()
kutijaStudenata.dodajStvar(new Student('Matko', 35, 'nogomet', 1332))
console.log(kutijaStudenata.sadrzaj)
