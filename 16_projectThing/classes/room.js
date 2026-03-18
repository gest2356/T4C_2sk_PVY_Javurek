export class Room {
    constructor(data) {
        this.id = data.Id;
        this.roomNumber = data.RoomNumber;
        this.building = data.Building;
        this.type = data.Type;
        this.capacity = data.Capacity;
    }

    getRoomNames() {
        return this.roomNumber;
    }
}