import React from 'react';
import Markdown from 'react-markdown';
import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';

const style = {
  card: {
    position: 'relative',
    left: '50%',
    transform: 'translate(-50%, 0)',
    width: '80%',
    marginTop: 32,
    marginBottom: 32
  }
};

const BlogPost = (props) => {
  const { author, title, avatar, image, content, zDepth } = props;

  return (
    <Card
      style={style.card}
      zDepth={zDepth}
    >
      <CardHeader
        title={title}
        subtitle={author}
        avatar={avatar}
      />
      <CardMedia
        overlay={
          <CardTitle title={title}/>
        }
      >
        <img src={image}/>
      </CardMedia>
      <CardText>
        <Markdown
          source={content}
          escapeHtml={true}
        />
      </CardText>
    </Card>
  );
};

export default BlogPost;
