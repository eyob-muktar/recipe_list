import { LegacyRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import IPostData from '../../types/post.type';
import Post from '../Post/Post';

type PostListProp = { posts: IPostData[], lastPostRef: LegacyRef<HTMLDivElement>}

const PostList = ({ posts, lastPostRef }: PostListProp) => {

  return (
    <Row xs={1} sm={1} md={2} lg={3} className="justify-content-evenly">
        {posts.map((post, index) => {
          const isLastPost: boolean = posts.length === index + 1;
          return isLastPost ? (
            <Col key={index} className="mt-3 d-flex justify-content-center">
              <div ref={lastPostRef}>
                <Post post={post} />
              </div>
            </Col>) :
            (<Col key={index} className="mt-3 d-flex justify-content-center">
              <Post post={post} />
            </Col>)
            
          })
        }
      </Row>
  )
}

export default PostList