import type { IFile } from "../interface"


export const doseFilesObjectExits = (arr : IFile[] , id:string) => {
    return arr.some( obj => obj.id === id )
}