class Floor{  
    constructor(){
        var floor_options={
            isStatic: true
        }

        this.floor = Bodies.rectangle(720, 890, 1500, 20, floor_options)
        World.add(world, this.floor)
    }
    display(){
        rectMode(CENTER);
        fill(188, 67, 67);
        rect(this.floor.position.x, this.floor.position.y, 1500, 20);
    }
}