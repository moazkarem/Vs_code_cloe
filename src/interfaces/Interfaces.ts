export interface Ifile {
    id:number
    name:string ;
    isFolder:boolean ;
    children?:Ifile[] ;
    content?:string ;
}