
const getView = () => {
   
    return new Promise((resolve, reject) => {
      
        setTimeout(() => {
        console.log("Hello world")
       }, 2000)
     })
}
  
const waitForView = async () => {
const result = await getView()
}
  
 waitForView()

 