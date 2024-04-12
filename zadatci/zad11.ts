class Auto {
  constructor(
    private model: string,
    private year: number,
    private manufacturer: string,
  ) {}
}

class AutoBuilder {
  private model!: string
  private year!: number
  private manufacturer!: string

  setModel(model: string): AutoBuilder {
    this.model = model
    return this
  }

  setYear(year: number): AutoBuilder {
    this.year = year
    return this
  }

  setManufacturer(manufacturer: string) {
    this.manufacturer = manufacturer
    return this
  }

  build(): Auto {
    return new Auto(this.model, this.year, this.manufacturer)
  }
}

const auto = new AutoBuilder()
  .setManufacturer('BMT')
  .setModel('M3')
  .setYear(2022)

console.log(auto)
