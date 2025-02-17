import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function TextField({item, handleInputChange}) {
  return (
    <div>
        <Textarea name={item.name} onChange={(e) => handleInputChange(item.name, e.target.value)}/>
    </div>
  )
}

export default TextField