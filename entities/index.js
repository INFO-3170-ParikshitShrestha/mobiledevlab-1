import Box from '../components/Box';
import RightBoundary from '../components/RightBoundary';
import LeftBoundary from '../components/LeftBoundary';
import BottomBoundary from '../components/BottomBoundary';
import TopBoundary from '../components/TopBoundary';
import { Dimensions } from 'react-native';
import Matter from 'matter-js';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default (gameWorld) => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  
  return {
    physics: { engine, world },
    GreenSquare: Box(world, 'green', { x: 150, y: 120 }, { width: 40, height: 40 }),
    RedSquare: Box(world, 'red', { x: 200, y: 120 }, { width: 20, height: 20 }),
    BottomBoundary: BottomBoundary(world, 'blue', { x: screenWidth / 2, y: screenHeight - 10 }, { width: screenWidth, height: 20 }),
    RightBoundary: RightBoundary(world, 'blue', { x: screenWidth - 10, y: screenHeight / 2 }, { width: 20, height: screenHeight }),
    LeftBoundary: LeftBoundary(world, 'blue', { x: 10, y: screenHeight / 2 }, { width: 20, height: screenHeight }),
    TopBoundary: TopBoundary(world, 'blue', { x: screenWidth / 2, y: 10 }, { width: screenWidth, height: 20 })
    };
    };

