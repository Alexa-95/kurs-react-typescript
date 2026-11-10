import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Homepage page</title>
        <meta name="description" content="Home Page content..." />
      </Helmet>
      <div className="flex container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold">Home page</h1>
      </div>
    </>
  );
}

export default Home