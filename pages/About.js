import Image from 'next/image';
import Head from 'next/head';
// import profilePic from '../public/senorita.png';

export default function About() {
  return (
    <>
      <Head>
        <title>SENORITA PHOTOGRAPHY</title>
        <meta name="description" content="Anastasiia Yalovets Photography" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-center ">
        {/* <div className="relative h-screen w-screen overflow-hidden">
          <Image src={profilePic} fill className="object-contain" alt="" />
        </div> */}
        <div className="bg-gray-100">hello</div>
      </div>
    </>
  );
}
