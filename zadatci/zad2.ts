import Osoba from './zad1'

class Student extends Osoba {
  constructor(
    ime: string,
    dob: number,
    sport: string,
    private brojIndexa: number,
  ) {
    super(ime, dob, sport)
  }
}

export default Student
