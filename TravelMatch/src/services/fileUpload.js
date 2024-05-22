const fileUpload = async (file) => {
  const cloudName = "dpxuuhmwm";
  const uploadPreset = "TravelMatch";
  const urlCloudinary = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  try {
    const resp = await fetch(urlCloudinary, {
      method: "post",
      body: formData,
    });

    if (!resp.ok) return null;

    const data = await resp.json();
    return data.secure_url;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default fileUpload;