
const makeUrl = "http://localhost:8080/api/makes";
const modelUrl = "http://localhost:8080/api/models?make=";
const vehiclesUrl = "http://localhost:8080/api/vehicles?make="

//retrying to fetch data from api if request doesn't return ok status
const getDataFromApi = async (url, maxRetry, make = null, model = null) => {
  if(make && model){
   url = url + `${make}&model=${model}`;
  } else if (make){
    url =  url + make;
  }
  return await fetch(url)
    .then((res) => {
      if (!res.ok && maxRetry > 0) {
        console.log("Got non 200 response. Retry left = " + maxRetry);
        maxRetry--;
        return getDataFromApi(url, maxRetry);
      } else {
        return res.json();
      }
    })
    .catch((err) => err);
};

//fetch all makes available
export const getMakes = (maxRetry) => getDataFromApi(makeUrl, maxRetry);

//fetch all models available for a make
export const getModels = (maxRetry, make) => getDataFromApi(modelUrl, maxRetry, make);

//fetch all vehicles available for a make and model provided by the user
export const getVehicles = (maxRetry, make, model) => getDataFromApi(vehiclesUrl, maxRetry, make, model,);
