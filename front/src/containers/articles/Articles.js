import React from 'react';
import './Articles.scss';
import {getArticles} from '../../hooks/ApiArticles'
import {useQuery} from 'react-query';
import Post from '../../components/post/Post';

function Articles({onEditPost}) {
  const {data: response, isLoading} = useQuery('articleList', () => getArticles());
  const articlList = response?.data;
  
  if (isLoading) return 'Loading...'

  return (
    <div className="articles page">
      Articles
      <div className="articles__list">
        {
          articlList.map((item,index) => <Post content={item} key={index} hendlersEdit={(id) => onEditPost(id)}/>)
        }
      </div>
    </div>
  )
}

export default Articles;
