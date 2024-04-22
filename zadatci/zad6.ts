class Automobil {
  static instanceNumber: number
  constructor(
    private marka: string,
    private godiste: number,
  ) {
    Automobil.instanceNumber = Automobil.instanceNumber ?? 0
    Automobil.instanceNumber += 1
  }

  static GetCreatedInstances() {
    return Automobil.instanceNumber
  }
}

console.log(Automobil.GetCreatedInstances())
console.log(new Automobil('BMW', 2023))
console.log(Automobil.GetCreatedInstances())
console.log(new Automobil('WW', 2013))
console.log(Automobil.GetCreatedInstances())
console.log(new Automobil('Supra', 2020))
console.log(Automobil.GetCreatedInstances())
console.log(Automobil.GetCreatedInstances())
