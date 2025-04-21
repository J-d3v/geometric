import { TRIANGLE_DATA, CIRCLE_DATA, RHOMBUS_DATA } from "../db/geometric";

interface CalculationResult {
    id: number;
  area: number;
  [key: string]: number | string;
}
export const calculateTriangleArea = (triangleId: number): [CalculationResult | null, string | null] => {
    const data = TRIANGLE_DATA[triangleId];
    if (!data) {
      return [null, `No se encontraron datos para el triángulo con ID ${triangleId}`];
    }
    const area = 0.5 * data.base * data.height;
    return [{ id: triangleId, base: data.base, height: data.height, area }, null];
  };
  
  export const calculateCircleArea = (circleId: number): [CalculationResult | null, string | null] => {
    const data = CIRCLE_DATA[circleId];
    if (!data) {
      return [null, `No se encontraron datos para el círculo con ID ${circleId}`];
    }
    const area = Math.PI * data.radius * data.radius;
    return [{ id: circleId, radius: data.radius, area }, null];
  };
  
  export const calculateRhombusArea = (rhombusId: number): [CalculationResult | null, string | null] => {
    const data = RHOMBUS_DATA[rhombusId];
    if (!data) {
      return [null, `No se encontraron datos para el rombo con ID ${rhombusId}`];
    }
    const area = 0.5 * data.diagonalMajor * data.diagonalMinor;
    return [{ id: rhombusId, diagonalMajor: data.diagonalMajor, diagonalMinor: data.diagonalMinor, area }, null];
  };