import Matter, { Sleeping } from 'matter-js';

const Physics = (entities, { touches, time }) => {
  
  let engine = entities.physics.engine;
  
  // engine.world.gravity.x = 0.01; //to move horizontally
  // engine.world.gravity.y = 0.01; //to move vertically 
  
  engine.world.gravity.y = 0; //no gravity - no fall 
  
  touches
    .filter((t) => t.type === 'press')
    .forEach((t) => {
      Matter.Body.setVelocity(entities.GreenSquare.body, {
        x: 0, //move along x-axis with given velocity
        y: 10, //move along y-axis with given velocity
      });
      Matter.Body.setVelocity(entities.RedSquare.body, {
        x: 0, //move along x-axis with given velocity
        y: 5, //move along y-axis with given velocity
      });
  });
 
 Matter.Engine.update(engine, time.delta);

 Matter.Events.on(engine, "collisionStart", (event) => {
  var pairs = event.pairs;

  var objALabel = pairs[0].bodyA.label;
  var objBLabel = pairs[0].bodyB.label;

  if (objALabel === "Box" && objBLabel === "BottomBoundary") {
    Matter.Body.setVelocity(entities.Square.body, {
      x: 10,
      y: 0,
    });
  }
  else if (objALabel === "Box" && objBLabel === "RightBoundary") {
    Matter.Body.setVelocity(entities.Square.body, {
      x: 0,
      y: -10,
    });
  }
  else if (objALabel === "Box" && objBLabel === "TopBoundary") {
    Matter.Body.setVelocity(entities.Square.body, {
      x: -10,
      y: 0,
    });
  }
  else if (objALabel === "Box" && objBLabel === "LeftBoundary") {
    Matter.Body.setVelocity(entities.Square.body, {
      x: 0,
      y: 10,
    });
  }
});

  return entities;
};

export default Physics;
