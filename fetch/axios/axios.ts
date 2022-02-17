import axios from "axios";

export const axiosFetch = async (axiosConfig: any) => {
  try {
    const data = await axios({
      method: "GET",
      ...axiosConfig,
    });

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const axiosSender = async(axiosConfig:any) => {
    try {
        const data = await axios({
          method: "POST",
          ...axiosConfig,
        });
    
        return data;
      } catch (err) {
        console.error(err);
      }
}