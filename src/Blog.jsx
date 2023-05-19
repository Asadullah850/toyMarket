import React from 'react';
import useTitle from './hooks/useTitle';

const Blog = () => {
    useTitle('Blogs')
    return (
        <div>
            blog
        </div>
    );
};

export default Blog;