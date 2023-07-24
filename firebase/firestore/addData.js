import { db } from "../config";
import { doc, setDoc, updateDoc } from "firebase/firestore";

export default async function addData(colllection, id, data) {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, colllection, id), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export const updateData = async (collection, id, data) => {
  let result = null;
  let error = null;

  try {
    result = await updateDoc(doc(db, collection, id), data);
  } catch (e) {
    error = e;
  }

  return { result, error };
};
