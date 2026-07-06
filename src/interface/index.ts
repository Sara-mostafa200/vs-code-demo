export interface IFile {
    id:string,
    name: string;
    isFolder: boolean;
    children ? : IFile[];
    content ? : string | IProjectContent | undefined;
}


export interface IProjectContent {
    img: string ,
    sDescription:string,
    description:string,
    tech:string[],
}