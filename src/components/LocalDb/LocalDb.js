//store data to local storage
const storeDataToLocalDb = (id) => {
let productItems = {} ;
 const getLocalDb = localStorage.getItem("products-data") ;
 if(getLocalDb){
  productItems = JSON.parse(getLocalDb) ;
 } else {
productItems = {} ;
 }

 const quantity  = productItems[id] ;
 if(quantity) {
 const newQuantity = quantity + 1 ;
 productItems[id] = newQuantity ;
 }else {
  productItems[id] = 1 ;
 } 
 localStorage.setItem("products-data" , JSON.stringify(productItems)) ;
}
//

//delete data from local storage 

const deleteSingaleDataFromLocalDb = (id) => {
    const getLocalDb = localStorage.getItem("products-data") ;
    if(getLocalDb){
     const parseDataToCompaire = JSON.parse(getLocalDb) ;
     if(id in parseDataToCompaire) { //check if id present
     delete parseDataToCompaire[id] ; //delete id and quantity
     localStorage.setItem("products-data" , JSON.stringify(parseDataToCompaire)) ;
     }
    }
}
//check data to get data

const checkDataToGetData = () => {
    let productItems = {} ;
    const getLocalDb = localStorage.getItem("products-data") ;
    if(getLocalDb){
     productItems = JSON.parse(getLocalDb) ;
    }
    return productItems ;
}

//remove item all from local storage

const removeItemAllFromLocalStorage = () => {
localStorage.removeItem("products-data") ;
}

export {
    storeDataToLocalDb , deleteSingaleDataFromLocalDb ,
     checkDataToGetData , removeItemAllFromLocalStorage
    } ;