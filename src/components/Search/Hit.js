import React from 'react'
import PostItem from '../../components/PostItem'
const Hit = ({hit}) => (

  <PostItem 
  slug={hit.fields.slug}
  title={hit.title}
  date={hit.date}
  background={hit.background}
  description={hit.description}
  category={hit.category}/>
)

export default Hit