import React from 'react'
import IconImg from './IconImg';
import { extensionIconPaths } from '../const';
import FileIcon from './SVG/FileIcon';

interface IProps{
    fileName: string;
    isFolder?: boolean;
    isOpen?: boolean;
}


export default function RenderFileIcon({ fileName , isFolder, isOpen }: IProps) {
    const extension = fileName.split('.').pop();

    if( extension && Object.prototype.hasOwnProperty.call(extensionIconPaths, extension) ){ 
        const iconPath = isFolder ?
         isOpen ?  `${extensionIconPaths[extension]}-open.svg` :
         `${extensionIconPaths[extension]}.svg`:
         `${extensionIconPaths[extension]}.svg`;              
  
    
    return <IconImg src={iconPath} />;
    }

    if(isFolder && isOpen) return <IconImg src={`/icons/folder-default-open.svg`} />;
    if(isFolder && !isOpen) return <IconImg src={`/icons/folder-default.svg`} />;

    return <FileIcon />;
}
