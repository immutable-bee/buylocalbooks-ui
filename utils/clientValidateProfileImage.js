const validateImageFile = (file) => {
  if (!file) {
    throw new Error("No file was selected.");
  }

  if (!file.type.startsWith("image/")) {
    throw new Error("Please select an image file.");
  }

  const maxFileSize = 5 * 1024 * 1024; // 5MB in bytes
  if (file.size > maxFileSize) {
    throw new Error("Please select a file that is less than 5MB.");
  }

  const allowedFileTypes = ["image/jpeg", "image/png"];
  if (!allowedFileTypes.includes(file.type)) {
    throw new Error("Please select a JPEG or PNG image.");
  }
};

export default validateImageFile;
