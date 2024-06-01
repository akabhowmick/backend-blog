import styled from 'styled-components';
//! need to be edited
export const PostContainer = styled.article`
  line-height: 1.6;
  font-size: 1.125em;
  background-color: white;
`;

export const PostContent = styled.div`
  img {
    max-width: 100%;
    height: auto;
    margin: 20px 0;
  }

  blockquote {
    border-left: 4px solid #fff;
    padding-left: 20px;
    color: black;
    margin: 20px 0;
  }

  code {
    font-family: 'Courier New', Courier, monospace;
    background: #f6f8fa;
    padding: 2px 4px;
  }
`;

export const EditContainer = styled.div`
  margin: 20px 0;
`;

export const EditTextarea = styled.textarea`
  width: 100%;
  height: 200px;
  font-size: 1em;
  line-height: 1.5;
  font-family: 'Courier New', Courier, monospace;
  padding: 10px;
  margin-top: 10px;
`;

export const initialMarkdownContent = `
# Your Post Title

This is a sample blog post.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. 

\`\`\`js
console.log('Hello, world!');
\`\`\`

> This is a quote.

More content...
`;

// ! redo this to use a form (?)
// ! should be an add button that allows to add a paragraph