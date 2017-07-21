let shipWithCrew = {crewMembers: [], ships: []}


function createCrewMember() {
  let crewMemberCount = 0

  return class CrewMember {
    constructor(position) {
      this.id = ++crewMemberCount
      this.position = position

    }
    currentShip() {
      return shipWithCrew.ships.filter( (ship) => {
        return ship. === this.id
      })
    }
  }



}
