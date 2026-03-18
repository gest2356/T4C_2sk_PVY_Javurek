export class Equipment{
    constructor(data){
        this.id = data.equipment_id;
        this.name = data.name;
        this.description = data.description
        this.quantity = data.Quantity
        this.imgURL = data.img_url
        this.roomId = data.room_id;

    }
}