//Supported file types
const supportedFileTypes = ["png", "PNG", "jpg", "JPG", "jpeg", "JPEG", "svg", "SVG"];

// Function to handle file selection
export const validateFile = (file?: File | null) => {
  if (file && !supportedFileTypes?.includes(file?.type?.split("/")[1])) {
    return "Only png and jpg files are allowed";
  } else if (file && file?.size > 6e6) {
    return "Please select a file upto 6MB";
  } else {
    return "ok";
  }
};
