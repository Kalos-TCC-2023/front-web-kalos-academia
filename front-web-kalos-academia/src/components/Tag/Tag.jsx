import React from 'react'
import { Tag } from 'antd'

export const TagAcademy = ({ color, name, idTag, tags, tagsKey, updateFielHandler }) => {

  const handleClose = (removedTag, keyRemoved) => {
    console.log(idTag, removedTag)
    const newTags = tags.filter((tag) => tag.tag_name !== removedTag)
    const newKeys = tagsKey.filter((tagkey) => tagkey !== keyRemoved)
    updateFielHandler('tags', newKeys)
    console.log(newKeys)
    console.log(newTags)
  }

  console.log(tags)
  return <Tag color={color} onClose={(e) => handleClose(name, idTag)} closable>{name}</Tag>
}
