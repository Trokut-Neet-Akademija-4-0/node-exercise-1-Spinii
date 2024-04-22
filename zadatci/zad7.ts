interface Oblik {
  povrsina(): number
  obujam(): number
}

class Krug implements Oblik {
  constructor(public radius: number) {}

  povrsina(): number {
    return this.radius * Math.PI
  }

  obujam(): number {
    return 2 * this.radius * Math.PI
  }
}

// const krug = new Krug(2)
// console.log(krug.obujam())
// console.log(krug.povrsina())

class Pravokutnik implements Oblik {
  constructor(
    public visina: number,
    public sirina: number,
  ) {}
  povrsina(): number {
    return this.visina * this.sirina
  }

  obujam(): number {
    return 2 * (this.sirina + this.visina)
  }
}

const pravokutnik = new Pravokutnik(2, 2)
console.log(pravokutnik.povrsina())
console.log(pravokutnik.obujam())
