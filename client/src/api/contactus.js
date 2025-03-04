const API_URL = "https://digiflow-backend-2.onrender.com/api/v1/contact/contact-us"; // Update with your backend URL

export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, message: data.message };
    } else {
      return { success: false, message: data.message || "Something went wrong!" };
    }
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, message: "Network error. Please try again later." };
  }
};