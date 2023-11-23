import Image from 'next/image';
import profilePic from '../public/senorita.png';

export default function About() {
  return (
    <>
      <div className="flex flex-col justify-center ">
        <div className="relative h-screen w-screen overflow-hidden">
          <Image src={profilePic} fill className="object-contain" alt="" />
        </div>
        <div className="bg-gray-100">hello</div>
      </div>
    </>
  );
}
