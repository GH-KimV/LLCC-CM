import React, { useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repo from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {

  const githubContext = useContext(GithubContext);

  const { getUser, user, loading, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    company,
    location,
    bio,
    blog,
    login,
    htm_url,
    followers,
    following,
    public_repos,
    public_gist,
    hireable
  } = user

  if (loading) return <Spinner />;

  return (
    <>
      <Link to='/' className='btn btn-light'>
        Back 2 Search
      </Link>
      Hireable:{' '}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            alt=''
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <>
              <h3>Bio</h3>
              <p>{bio}</p>
            </>
          )}
          <a href={htm_url} className=' btn btn-dark my-1'>
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <>
                  <strong>User Name: </strong> {login}
                </>
              )}
            </li>

            <li>
              {company && (
                <>
                  <strong>Company: </strong> {company}
                </>
              )}
            </li>

            <li>
              {blog && (
                <>
                  <strong>Website: </strong> {blog}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-dark'>Public Repos: {public_repos}</div>
        <div className='badge badge-light'>Public Gist: {public_gist}</div>
      </div>
      <Repo repos={repos} />
    </>
  );
};

export default User;