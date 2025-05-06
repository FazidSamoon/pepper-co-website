import React, { useEffect, useState } from 'react'
import blogData from "@/data/blogData.json"
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

const Index = () => {
    // const { id } = useParams<{ id: string }>();
    const [markdown, setMarkdown] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
  
    // Find the blog post in our data
    const blogPost = blogData.find(blog => blog.id === "pepper-cultivation");
  
    useEffect(() => {
      const fetchMarkdown = async () => {
        if (!blogPost) {
          setError('Blog post not found');
          setLoading(false);
          return;
        }
  
        try {
          const response = await fetch(blogPost.markdownPath);
          if (!response.ok) {
            throw new Error('Failed to fetch markdown');
          }
          const text = await response.text();
          setMarkdown(text);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching markdown:', error);
          setError('Failed to load blog post');
          setLoading(false);
        }
      };
  
      fetchMarkdown();
    }, [blogPost]);
  
    if (loading) {
      return (
        <div className="container mx-auto py-8 flex justify-center">
          <div className="animate-pulse text-2xl">Loading...</div>
        </div>
      );
    }
  
    if (error || !blogPost) {
      return (
        <div className="container mx-auto py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">{error || 'Blog post not found'}</h1>
            {/* <Button asChild>
              <Link to="/blog">Back to Blog List</Link>
            </Button> */}
          </div>
        </div>
      );
    }
  
    return (
      <div className="container mx-auto py-8 px-4 md:px-8">
        <div className="mb-6">
          {/* <Button variant="outline" asChild>
            <Link to="/blog" className="flex items-center gap-2">
              <ChevronLeft size={16} />
              Back to all posts
            </Link>
          </Button> */}
        </div>
        
        <article className="prose prose-lg max-w-none md:prose-xl lg:prose-2xl prose-img:rounded-lg prose-headings:text-amber-900 prose-a:text-amber-700">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
          >
            {markdown}
          </ReactMarkdown>
        </article>
      </div>
    );
  };

export default Index
