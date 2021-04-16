class Rope{
    constructor(bodyA, bodyB, X, Y){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {X,Y},
            
            stiffness: 0.04,
            length: 100
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(10);
        fill("blue");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}