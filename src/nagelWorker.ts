import { Matrix, Quaternion, Vector3} from "@babylonjs/core";
import { SDFData, loadSDFFile, parseSDFFileContent} from "./sdfParser";
import { distanceToWorldpoint } from "./nagelDistanceField";
import { loadOffFile, parseOffFileContent } from "./offParser";
import { ccDelta, qqDelta } from "./contactForce";


// Worker-Thread
/**
 * Nagel-Worker für die Kollisionserkennung
 * Erhält Worldmatrix, Worldposition und oriantation des Meshes
 * Zieht Punkte und SDF von Internet bei erstellung des Workers
 * 
 * Berechnet die Distanz der Punkte zur SDF, und schickt gegebenfalls Delta-Werte zurück
 *  
 * @param position
 * @returns Delta-Werte
 */

// Setup and getting Files
const punkteInfo: Promise<string> = loadOffFile("https://raw.githubusercontent.com/P-Miha/Kyros-Zylinder/master/assets/SDFInformation/Nagel1.noff");
const offInfo = parseOffFileContent(await punkteInfo);

const sdfFileUrl = 'https://raw.githubusercontent.com/P-Miha/Kyros-Zylinder/master/assets/SDFInformation/Nagel1.sdf';
const loadFile = loadSDFFile(sdfFileUrl);

const sdfContent = parseSDFFileContent(await loadFile);



// OffInfo = Punkte auf beweglichem Objekt
// SDFContent = SDF Daten des statischen Objekts
// Prepare variables for the worker
const worldPositionMoveable =  Vector3.Zero();
const orientationMoveable =  Quaternion.Zero();
const worldPositionStatic = Vector3.Zero()
const orientationStatic = Quaternion.Zero();
let absolutePosition: Vector3[] = [];
let distanceResult: number[] = [];
let distance = 0;
let index = 0;
let contactPoint = absolutePosition[index];
let normalVector = Vector3.Zero();
let transformedNormal = Vector3.Zero();
//Listener für die Nachrichten
self.addEventListener("message", (event) => {

     const worldMatrixMoveable = Matrix.FromArray(event.data[0]);
     const worldMatrixStatic = Matrix.FromArray(event.data[1]);

    //console.log("WorldMatrixMoveable: ", worldMatrixMoveable);3

    
    // decompose WorldMatrixStatic and updates given parameters
    worldMatrixMoveable.decompose(undefined, orientationMoveable, worldPositionMoveable);
    // decompose WorldMatrix
    worldMatrixStatic.decompose(undefined, orientationStatic, worldPositionStatic);

    absolutePosition = CalculatePoints(offInfo.vertices, worldMatrixMoveable);
    //const relativePosition = CalculateLocalPoints(absolutePosition, worldMatrixStatic);
    distanceResult = CalculateDistance(absolutePosition, sdfContent, worldMatrixStatic);

    distance = distanceResult[0];
    index = distanceResult[1];
    contactPoint = absolutePosition[index];
    //empty array


    //Update Normalenvektor
    normalVector =  new Vector3(offInfo.normals[index].x, offInfo.normals[index].y, offInfo.normals[index].z);
    transformedNormal = Vector3.TransformNormal(normalVector, worldMatrixMoveable);
    //transformedNormal = transformedNormal.multiply(new Vector3(1, 1, 1));

    if (distance < 0.1) {
        //self.postMessage(distance, index);
        // Distance kleiner gleich 0, daher Kollision
        // Berechne Delta
         const positionDelta = ccDelta(distance, sdfContent.bbox.min, sdfContent.bbox.max, 
            contactPoint, transformedNormal, worldPositionMoveable);
        const orientationDelta = qqDelta(distance, sdfContent.bbox.min, sdfContent.bbox.max, 
            contactPoint, worldPositionMoveable, transformedNormal, orientationMoveable);
        // Above should send the orientation of the moveable object 
        // Send Info back to Main Thread
        //console.log("PositionDelta: ", positionDelta);
        //console.log("OrientationDelta: ", orientationDelta);
        // convert result to array
        //self.postMessage([Vector3.Zero().asArray(), Quaternion.Zero().asArray(), -1]);
        self.postMessage([positionDelta.asArray(), orientationDelta.asArray(), 1]);
    }
    else {
        //console.log("Keine Kollision");
        self.postMessage([Vector3.Zero().asArray(), Quaternion.Zero().asArray(), -1]);
    }
});

// Cleanup
 absolutePosition = [];
 distanceResult= [];
 distance = 0;
 index = 0;
 contactPoint = Vector3.Zero();
 normalVector = Vector3.Zero();
 transformedNormal = Vector3.Zero();

// Berechne die aktuelle Position der Punkte basierend auf der Worldmatrix des Meshes
function CalculatePoints(points: Vector3[], meshWorldMatrix: Matrix) {
    const newPositions: Vector3[] = [];
    points.forEach((point) => {
        newPositions.push(Vector3.TransformCoordinates(point, meshWorldMatrix));
    });
    //console.log("NewPositions: ", newPositions);
    return newPositions;
}
// Berechne die Distanz des Punktes zur SDF um zu prüfen ob Kollisionen vorliegen
function CalculateDistance(points: Vector3[], sdfData: SDFData, worldMatrixStatic: Matrix) {
    let lowestDistance = 1;
    let pointIndex = 0;
    let distance = 0;
    for (let i = 0; i < points.length; i++) {
        const point = points[i];
        const distanceIndex = distanceToWorldpoint(point, sdfData.bbox.min, sdfData.bbox.max, sdfData.cellSize, sdfData.res
            , worldMatrixStatic);
        distance = sdfData.distances[distanceIndex];
        if (distance < lowestDistance && distance != -1 && distance < 0) {
            lowestDistance = distance;
            pointIndex = i;
        }
    }

    // Return Distance and Index
    return [lowestDistance, pointIndex];
}
