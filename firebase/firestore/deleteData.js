import { db } from "../config";
import { doc, updateDoc, deleteField } from "firebase/firestore";

export const deleteFields = async (collection, id, fields) => {
  let docRef = doc(db, collection, id);

  let result = null;
  let error = null;

  if (typeof fields === "string") {
    fields = [fields];
  }

  const fieldsToDelete = fields.reduce((acc, field) => {
    acc[field] = deleteField();
    return acc;
  }, {});

  try {
    result = await updateDoc(docRef, fieldsToDelete);
  } catch (e) {
    error = e;
  }

  return { result, error };
};
