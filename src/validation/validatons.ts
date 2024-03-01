import { Ifile } from "../interfaces/Interfaces";

export const doesFileFounded = (arr:Ifile[] , id:number)=>{
  return  arr.some(obj=>obj.id === id)
}