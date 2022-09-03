import Card from 'react-bootstrap/Card';
import IPostData from '../../types/post.type';
import './Post.css';

type PostProps = { post: IPostData };

function Post({ post }: PostProps) {
  const {
    post_description,
    post_img_url_src,
    post_title,
    post_url,
    template_hashtag_links,
    username,
  } = post;

  return (
    <Card className="card">
        <div className="d-flex m-3">
          <div className="avatar">
            <button
              className="avatarBtn"
              data-toggle="tooltip" data-placement="top"
              title={username}
            >
            {username[0].toUpperCase()}
            </button>
          </div>
        <p className="postTitle">{post_title}</p>
        </div>
      <Card.Img variant="bottom" src={post_img_url_src} />
      <Card.Body>
        <Card.Text className='postDescription'>
          {post_description}
        </Card.Text>
        <div dangerouslySetInnerHTML={{__html: template_hashtag_links}} className="hashtagLinks"/>
        <a id="viewBtn" className="btn btn-primary" href={post_url} target="blank" role="button">View Recipe</a>
      </Card.Body>
    </Card>
  );
}

export default Post;