class BankovniRacun {
  private stanje: number
  constructor(private pocetnoStanje: number) {
    this.stanje = pocetnoStanje
  }

  uplata(iznos: number) {
    this.stanje += iznos
  }

  isplata(iznos: number) {
    if (iznos <= 0) {
      this.stanje -= iznos
      return true
    } else {
      return false
    }
  }

  dohvatiStanje() {
    return this.stanje
  }
}
