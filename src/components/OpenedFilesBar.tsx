import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../app/store'
import OpenedFilesBarTab from './OpenedFilesBarTab'


export default function OpenedFilesBar() {
  const {openFiles} =  useSelector((state : RootState)=> state.tree);

  return (
    <div className='w-full'>
      <ul className='flex items-start my-1'>
        {
            openFiles.map( (file) => (
                <OpenedFilesBarTab key={file.id} file={file} />
            ))
        }

      </ul>
       

    </div>
  )
}
