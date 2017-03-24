import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import BlogPost from '../components/BlogPost';

const style = {
  container: {
    position: 'absolute',
    width: '100%'
  }
};

export default class App extends React.Component {

  static renderBlogPost(post) {
    const { author, title, avatar, image, content } = post;

    return (
      <BlogPost
        key={title}
        author={author}
        title={title}
        avatar={avatar}
        image={image}
        content={content}
        zDepth={2}
      />
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          author: 'ReActor',
          title: 'React is awesome!',
          avatar: 'http://www.gravatar.com/avatar',
          image: 'http://etc.usf.edu/clipart/46100/46157/46157_cat_banner_lg.gif',
          content: '**Lorem ipsum** dolor sit amet, _consectetur adipiscing_ elit.'
        },
        {
          author: 'FunFact',
          title: 'The Good, The Bad and Node.js',
          avatar: 'http://www.gravatar.com/avatar',
          image: 'http://www.fairytailsdaycare.com/images/dog_banner.jpg',
          content: '### Vestibulum ante ipsum primis in faucibus\n\n- orci luctus et ultrices\n\n- posuere cubilia Curae'
        }
      ]
    };
  }

  render() {
    const { posts } = this.state;

    const postElements = posts
      ? posts.map((post) => App.renderBlogPost(post))
      : null;

    return (
      <MuiThemeProvider>
        <Paper style={style.container} zDepth={0}>
          <AppBar title="React and Node.js tutorials"/>
          <div>
            {postElements}
          </div>
        </Paper>
      </MuiThemeProvider>
    );
  }

}
