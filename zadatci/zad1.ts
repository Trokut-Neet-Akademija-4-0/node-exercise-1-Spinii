class Osoba {
  constructor(
    private _ime: string,
    private dob: number,
    private sport: string,
  ) {}

  public setIme(ime: string): void {
    this._ime = ime
  }

  public getIme(): string {
    return `${this._ime}`
  }

  public setDob(dob: number): void {
    this.dob = dob
  }

  public getDob(): number {
    return this.dob
  }

  public setSport(sport: string): void {
    this.sport = sport
  }

  public getSport() {
    return `${this.sport}`
  }

  public get imeIDob() {
    return `Moje ime je ${this._ime} i imam ${this.dob} godina`
  }

  public predstaviSe() {
    return `Ja sma ${this._ime} i jako volim igrat ${this.sport}`
  }
}

const osoba = new Osoba('test ime', 99, 'kosarku')
osoba.setIme('testtttttt')
osoba.setDob(22)
osoba.setSport('nogomet')
// console.log(osoba)
// console.log(osoba.imeIDob())
console.log(osoba.imeIDob)
console.log(osoba.predstaviSe())
export default Osoba
