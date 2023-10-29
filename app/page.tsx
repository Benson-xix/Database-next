
import Head from 'next/head';
import ManhwaSearch from './components/ManhwaSearch';



const Page = () => {
  

  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title className="mt-3 ">Manhwa Database</title>
        <meta name="description" content="A simple Manhwa Database for users" />
      </Head>
      <main className="container mx-auto py-18 px-4 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-white ">Manhwa Database</h1>
            <ManhwaSearch />
      </main>
    </div>
  );
};

export default Page;
