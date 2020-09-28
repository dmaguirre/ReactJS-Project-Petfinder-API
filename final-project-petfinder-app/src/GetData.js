import axios from 'axios';
import petData from './sampleJSON';

  export const getDataFromAPI = async (accessToken) => {

            if (accessToken === null) {
                console.log("Token is null");
            } else {
                    const petFinderRequest = await axios.get(
                        "https://api.petfinder.com/v2/animals",
                        {
                            headers: {
                                Authorization: `Bearer ${accessToken}`
                            }
                        });
                    return petFinderRequest.data;    
                    //console.log(petFinderRequest.data); 

    }
}

  export const getDataFromFile = async (acessToken) => {
      const filteredPetData = petData.filter(petData.animals.type.includes("dog"));
            return filteredPetData;
    }
