import axios from "axios";
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID RD4c5WtqT5AtlGm_VBQ_F3jheMlKKnnMgHlvoJdUsIA",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};
export default searchImages;
