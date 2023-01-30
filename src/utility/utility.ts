

let store:{[key:string]:string} = {
};
const modifyStore = (key:string, payload:string) => {
    store = { ...store, [key]: payload };
    return store;
}
const getStore = (key:string) => {
    return store[key];
}


export const fakeApiCall = (expectedResponse: any) => {
    console.log(new Promise((resolve, reject) =>
    setTimeout(() => resolve(expectedResponse), 500)))
    return new Promise((resolve, reject) =>
      setTimeout(() => resolve(expectedResponse), 500)
    );
  };
  
export default{
    modifyStore,
    getStore
}