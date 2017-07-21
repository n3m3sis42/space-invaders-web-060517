let shipWithCrew = {crewMembers: [], ships: []}


function createCrewMember() {
  let crewMemberCount = 0

  return class CrewMember {
    constructor(position) {
      this.id = ++crewMemberCount
      this.position = position
      shipWithCrew.crewMembers.push(this)
    }
    currentShip() {
      return shipWithCrew.ships.filter( (ship) => {
        return ship.crewMemberId === this.id
      })
    }
  }
}

let crewMember = createCrewMember()
