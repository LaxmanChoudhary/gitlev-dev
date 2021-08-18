import React from 'react'
import { useSelector } from 'react-redux'

const Starred = () => {
  const starred = useSelector(state => state.gitdata.starred)
  const isLoading = useSelector((state) => state.gitdata.isLoading);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (starred.length ? (starred.map(each => (
        <p key={each.id}>{each.name}</p>
      ))) : (
        <p>No starred to show yet!</p>
      ))}
    </div>
  )
}

export default Starred