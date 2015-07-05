var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="comment-box">
        Hello, world! I am a Comment Box.
      </div>
    );
  }
});

React.render(
  <CommentBox />,
  document.getElementById('content')
);
