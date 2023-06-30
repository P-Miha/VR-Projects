import { Mesh, float, int } from "@babylonjs/core";
import { Matrix, Vector3 } from "@babylonjs/core/Maths/math.vector";
import { SDFData } from "./sdfParser";


export function index2(x: int, y: int, z: int, resolution: Vector3): number {
    return x + (resolution.x * (y + (z * resolution.y)))
}

export function index(point: Vector3, sdfFile: SDFData): number{
    const o = sdfFile.bbox.min;
    if (!inBox(point, sdfFile.bbox.min, sdfFile.bbox.max)) {
        //console.log("Nicht in Box", point)
        return -1; // Nicht in BoundingBox, daher trivialer Fall
    }
    console.log("In Box, keine -1", point)
    let calculatedPoint = point.subtract(o);
    calculatedPoint = calculatedPoint.divide(new Vector3(sdfFile.cellSize, sdfFile.cellSize, sdfFile.cellSize));
    const roundedPoint = new Vector3(
        Math.round(calculatedPoint.x),
        Math.round(calculatedPoint.y),
        Math.round(calculatedPoint.z)
    );
    //return index2(calculatedPoint.x, calculatedPoint.y, calculatedPoint.z, sdfFile.res);
    return index2(roundedPoint.x, roundedPoint.y, roundedPoint.z, sdfFile.res);
}

export function point(x: int, y: int, z: int, sdfFile: SDFData): Vector3{
    const o = sdfFile.bbox.min;
    return o.add(new Vector3((x + 0.5) * sdfFile.cellSize, (y + 0.5) * sdfFile.cellSize, (z + 0.5) * sdfFile.cellSize));
}
/**
 * Ist im gegebenen Codeabschnitt aufgerufen, jedoch nicht dabei gewesen, daher selbst implementiert.
 * @param vector
 * @param bboxMin
 * @param bboxMax
 * @returns true, wenn Point: Vector3 in BoundingBox liegt, sonst false
 */
function inBox(vector: Vector3, bboxMin: Vector3, bboxMax: Vector3): boolean{
    return vector.x >= bboxMin.x && vector.y >= bboxMin.y && vector.z >= bboxMin.z && vector.x <= bboxMax.x && vector.y <= bboxMax.y && vector.z <= bboxMax.z;
}
/**
 *  Gegeben ein Punkt und ein Mesh, wird der Punkt in das lokale Koordinatensystem des Meshes transformiert,
 *  indem die WorldMatrix des Meshes invertiert wird und der Punkt mit der invertierten Matrix transformiert wird. 
 * @param point 
 * @param mesh 
 * @returns localpoint vom Mesh
 */

// export function calculateLocalPoint(point: Vector3, meshInvertedWorldMatrix: Matrix): Vector3 {
//     const localPoint = Vector3.TransformCoordinates(point, meshInvertedWorldMatrix);
//     return localPoint;
// }

export function distanceToWorldpoint(point: Vector3, meshInvertedWorldMatrix: Matrix, sdfFile: SDFData): float {
    let localPoint = new Vector3(0,0,0);
    try{
        let temppoint = new Vector3(point._x, point._y, point._z)
        console.log("Point: ", temppoint.x)
        let tempMatrix = meshInvertedWorldMatrix 
    localPoint = Vector3.TransformCoordinates(temppoint, tempMatrix)
}   catch (e) {
    console.log("Fehler bei der Transformation des Punktes in das lokale Koordinatensystem des Meshes")
    console.log(e)
}
    //console.log("localPoint: ", localPoint)
    const indexofPoint = index(localPoint, sdfFile);
    if (indexofPoint === -1) {
        return -1;
    }
    return sdfFile.distances[indexofPoint];
}   