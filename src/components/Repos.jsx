import React from 'react'
import { useSelector } from 'react-redux'

const Repos = () => {
  const repos = useSelector((state) => state.gitdata.repos)
  const isLoading = useSelector(state => state.gitdata.isLoading)
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (repos.length ? (repos.map(repo => (
        <p key={repo.id}>{repo.name}</p>
      ))) : (
        <p>No repos to show yet!</p>
      ))}
    </div>
  )
}

export default Repos