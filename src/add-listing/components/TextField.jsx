import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function TextField({item}) {
  return (
    <div>
        <Textarea name={item.name}/>
    </div>
  )
}

export default TextField