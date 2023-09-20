import React from 'react'
import { TagAcademy } from '../Tag/Tag'

export const TagsAcademy = ({ tags, color }) => {
    return (
        <div className='tags_academia'>
            {tags.map(tag => (
                <TagAcademy key={tag.tag_id}
                name={tag.tag_name}
                color={color} 
                />
            ))}
        </div>
    )
}
