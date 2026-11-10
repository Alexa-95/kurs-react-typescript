import { Helmet } from 'react-helmet-async';


const About = () => {
  return (
    <>
      <Helmet>
        <title>About page</title>
        <meta name="description" content="About Page content..." />
      </Helmet>
      <div className="flex container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold">About</h1>
      </div>
    </>
  );
}

export default About