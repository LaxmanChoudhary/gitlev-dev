import React from 'react'
import { useSelector } from 'react-redux'
import RepoDisplay from './display/RepoDisplay'

const Repos = () => {
  const repos = useSelector((state) => state.gitdata.repos)
  const isLoading = useSelector(state => state.gitdata.isLoading)
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (repos.length ? (repos.map(repo => (
        <RepoDisplay repo={repo} key={repo.id} />
      ))) : (
        <p>No repos to show yet!</p>
      ))}
    </div>
  )
}

export default Repos