export const imgToBase64 = (image: File) =>
  new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e: ProgressEvent<FileReader>) => resolve(e.target?.result);
  });
