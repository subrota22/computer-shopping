import { checkDataToGetData } from "../LocalDb/LocalDb";

export const Loaders = async () => {
 const getData = await fetch("computer.json") ;
 const products = await getData.json() ;
 const getLocalData = checkDataToGetData() ;
 let initialCart  = [] ;
 for(const id in getLocalData) {
 const addedProducts = products.find(product => product._id === id ) ;
 if(addedProducts) {
  const newQuantity = getLocalData[id] ;
  addedProducts.quantity = newQuantity ;
 }
 initialCart.push(addedProducts) ;
 }
 return {products , initialCart } ;
}