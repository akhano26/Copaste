import { Dimensions } from "react-native";


let windowHeight=(Dimensions.get("window").height)
let windowWidth=(Dimensions.get("window").width)
let windowAverage=windowHeight+windowWidth

export const responsiveHeight=(e)=>{
  return (windowHeight/100)*e
}

export const responsiveWidth=(e)=>{
  return (windowWidth/100)*e
}

export const responsiveAverage=(e)=>{
 return (windowAverage/100)*e
}
export const dp=(e)=>{
  let px_1=(responsiveAverage(2.6)/28)
  return px_1 * e
}