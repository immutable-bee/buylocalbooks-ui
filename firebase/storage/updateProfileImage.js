import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { storage, auth } from "../config";

/**
 * Uploads a file to Firebase Storage and updates the current user's profile image URL.
 *
 * @param {File} file - The file to upload.
 * @returns {Promise<string>} - A promise that resolves to the download URL of the uploaded file.
 */
export async function updateProfileImage(file, onUserUpdate) {
  const user = auth.currentUser;
  if (!user) throw new Error("No user is currently signed in.");

  const storageRef = ref(storage, `profileImages/${user.uid}`);
  let downloadURL;

  try {
    const uploadTask = uploadBytesResumable(storageRef, file);

    await new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          console.error("Error during upload:", error);
          reject(error);
        },
        () => resolve()
      );
    });

    downloadURL = await getDownloadURL(storageRef);
    await updateProfile(user, { photoURL: downloadURL });
  } catch (error) {
    console.error("Failed to upload file or get download URL:", error);
    throw error;
  }

  onUserUpdate({ ...user, photoURL: downloadURL });
  return downloadURL;
}
