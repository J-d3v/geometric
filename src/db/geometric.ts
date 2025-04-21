  interface TriangleData {
    base: number;
    height: number;
  }
  
  interface CircleData {
    radius: number;
  }
  
  interface RhombusData {
    diagonalMajor: number;
    diagonalMinor: number;
  }
  
  const triangleData: { [key: number]: TriangleData } = {
    1: { base: 10, height: 5 },
    2: { base: 7, height: 12 },
    3: { base: 15, height: 8 },
  };
  
  const circleData: { [key: number]: CircleData } = {
    1: { radius: 5 },
    2: { radius: 8 },
    3: { radius: 12.5 },
  };
  
  const rhombusData: { [key: number]: RhombusData } = {
    1: { diagonalMajor: 6, diagonalMinor: 8 },
    2: { diagonalMajor: 10, diagonalMinor: 4 },
    3: { diagonalMajor: 9, diagonalMinor: 7 },
  };
  
  export const TRIANGLE_DATA = triangleData;
  export const CIRCLE_DATA = circleData;
  export const RHOMBUS_DATA = rhombusData;
