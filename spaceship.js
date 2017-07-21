function createSpaceship() {
  let spaceshipCount = 0

  return class Spaceship {
    constructor(name, crew, phasers, shields, cloaked=false, warpDrive="disengaged", phasersCharge="uncharged") {
      this.id = ++spaceshipCount
      this.name = name
      this.crewMemberId = crewMember.id
      this.docked()
    }

    docked() {
      if (crew === null) {
        this.docked = true
      } else {
        this.docked = false
      }
    }

  }


}

let spaceship = createSpaceship()
