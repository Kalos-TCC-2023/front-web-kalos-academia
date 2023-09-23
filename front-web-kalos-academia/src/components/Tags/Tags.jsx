import React from 'react'
import { TagAcademy } from '../Tag/Tag'

export const TagsAcademy = ({ tags, color, tagsKey, updateFielHandler}) => {

    return (
        <div className='tags_academia'>
            {tags.map(tag => (
                <TagAcademy 
                tags={tags} 
                key={tag.tag_id}
                idTag={tag.tag_id}
                name={tag.tag_name}
                color={color} 
                tagsKey={tagsKey}
                updateFielHandler={updateFielHandler}
                />
            ))}
        </div>
    )
}
