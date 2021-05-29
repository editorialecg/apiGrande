import { Schema, model } from 'mongoose';

const blog = Schema({
    title: {
        type: String
    },
    content: {
        type: String,
        
    },
    date: {
        type: String
    }

});

const Blog = model('blog', blog);

export default Blog