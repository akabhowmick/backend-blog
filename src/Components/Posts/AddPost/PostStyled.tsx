import styled from 'styled-components';

export const PostContainer = styled.article`
  line-height: 1.6;
  font-size: 1.125em;
`;

export const PostTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 10px;
`;

export const PostDate = styled.p`
  font-size: 0.9em;
  color: #888;
  margin-bottom: 20px;
`;

export const PostContent = styled.div`
  img {
    max-width: 100%;
    height: auto;
    margin: 20px 0;
  }

  blockquote {
    border-left: 4px solid #ddd;
    padding-left: 20px;
    color: #666;
    margin: 20px 0;
  }

  pre {
    background: #f6f8fa;
    padding: 20px;
    overflow-x: auto;
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

![Sample Image](https://via.placeholder.com/800x400)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. 

\`\`\`js
console.log('Hello, world!');
\`\`\`

> This is a quote.

More content...
`;