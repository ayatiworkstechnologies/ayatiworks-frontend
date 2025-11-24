// services/api.js
import axios from "axios";

export const Contactform = async (formData) => {
  try {
    const response = await axios.post("https://ayatiworks.com/Api/contactlead.php", formData);
    return response.data;
  } catch (error) {
    console.error("Contactform API Error:", error);
    return { success: false };
  }
};


export const Careersform = async (formData) => {
  try {
    const response = await axios.post(
      "https://ayatiworks.com/Api/carrers.php",
      formData
    );
    return response.data; // expect JSON from backend
  } catch (error) {
    console.error("Careersform API Error:", error);
    return { success: false, message: "Something went wrong" };
  }
};