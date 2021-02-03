class String{
	constructor(body,point)
	{
		
		var options={ bodyA:body,			 
			pointB:point, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=point
		this.launcher=Constraint.create(options)
		World.add(world,this.launcher)
	}

	attach(body){
		this.launcher.bodyA=body;
	}

	fly()
	{
		this.launcher.bodyA=null;
	}

	display()
	{
		if(this.launcher.bodyA)
		{
			var point1=this.bodyA.position;
			var point2=this.pointB

			strokeWeight(2);		
			line(point1.x,point1.y,point2.x,point2.y);
		}
	}
}