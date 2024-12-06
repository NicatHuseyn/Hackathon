

export const handleError = (error) => {
    console.error("API Error: ", error);
    return { success: false, message: error.message || "Something went wrong" };
  };