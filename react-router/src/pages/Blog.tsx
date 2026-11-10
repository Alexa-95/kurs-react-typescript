import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Blog = () => {
  const { category, id } = useParams()

  return (
    <>
      <Helmet>
        <title>Blog page</title>
        <meta name="description" content='My Page content...' />
      </Helmet>
      <div className="flex flex-col container mx-auto py-8 px-4">
        <h1 className='text-3xl font-bold'>Blog Page</h1>
        <p className=''>{category} - {id}</p>
      </div>
    </>
  );
};

export default Blog;
