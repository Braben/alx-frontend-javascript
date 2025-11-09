/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

const obj: RowElement = { firstName: "Guillaume", lastName: "Salva" };
console.log("Object to be inserted:", obj);

// Insert a new row and store the returned RowID
const newRowID: RowID = CRUD.insertRow(obj);
console.log(`Inserted row ID: ${newRowID}`);

// Create an updated row with age = 23
const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
};
console.log(`New row inserted with ID: ${newRowID}`);

// Update the existing row
CRUD.updateRow(newRowID, updatedRow);
console.log(`Row with ID ${newRowID} has been updated.`);
// Delete the row using its ID
CRUD.deleteRow(newRowID);
console.log(`Row with ID ${newRowID} has been deleted.`);
