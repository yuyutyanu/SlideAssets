import * as React from 'react'

export default ({posts}) => (
  <div>
    {posts.map(({title, description, content, createdAt}) => (
      <div>
        <p>{title}</p>
        <p>{description}</p>
        <p>{content}</p>
        <p>{createdAt}</p>
      </div>
    ))}
  </div>
)

