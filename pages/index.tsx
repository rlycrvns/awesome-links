import Head from 'next/head';
import { AwesomeLink } from '../components/AwesomeLink';
import { gql, useQuery } from '@apollo/client';

const AllLinksQuery = gql`
  query {
    links {
      id
      title
      url
      description
      imageUrl
  }
  }
`;

export default function Home() {

  const { data, error, loading } = useQuery(AllLinksQuery);
  console.log(data);

  if (loading) return <p>Loading...</p>

  if(error) return <p>Error: {error.message}</p>

  return (
    <div>
      <Head>
        <title>Awesome Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto max-w-5xl my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.links.map((link) => (
            <AwesomeLink
              key={link.id}
              title={link.title}
              category={link.category}
              url={link.url}
              id={link.id}
              description={link.description}
              imageUrl={link.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
