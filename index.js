
// const getView = () => {
   
//     return new Promise((resolve, reject) => {
      
//         setTimeout(() => {
//         console.log("Hello world")
//        }, 2000)
//      })
// }
  
// const waitForView = async () => {
// const result = await getView()
// }
  
//  waitForView()

 


const getTemperature = () => {
     return new Promise((resolve, reject) => {
      setTimeout(() => {
      
        const Temperature  = 15
        
        if (Temperature <= 10) {
          resolve("Il fait froid!")
      
        } else {
          reject("Il fait chaud !")
        }
      }, 4000)
     
    })
  }
  
    const waitForTemperature = async () => {
   
    try {
          const result = await getTemperature() 
          console.log(result)
    } catch(error) {
          console.log("la promesse est rejetée")
        console.log(error)
      }
   
  } 
  
  waitForTemperature()