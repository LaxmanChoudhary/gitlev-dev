import React from 'react'
import { useSelector } from 'react-redux'
import RepoDisplay from './display/RepoDisplay'

const Starred = () => {
  const starred = useSelector(state => state.gitdata.starred)
  const isLoading = useSelector((state) => state.gitdata.isLoading);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (starred.length ? (starred.map(each => (
        <RepoDisplay repo={each} key={each.id} />
      ))) : (
        <p>No starred to show yet!</p>
      ))}
    </div>
  )
}

export default Starred