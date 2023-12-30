export default function Header() {
  return (
    <div>
      <div className=" flex flex-col bg-slate-000 py-6  border-stone-400 py_-9">
        {/* <div className="px-8 flex flex-col justify-center items-center lg:flex-row lg:pr-16 ">
                    <CiFacebook className="text-4xl hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"/>
                    <button className='hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'><CiInstagram className="text-4xl" /></button>
                    <CiInstagram className="text-4xl" />
                </div> */}
        {/* <div className="hidden lg:flex flex-col gap-2 justify-center items-center ml-8">
          <TfiFacebook className="text-3xl  border-black-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" />
          <TfiInstagram className="text-3xl hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" />
        </div> */}
        <div className="flex-auto px-6 uppercase text-center leading-normal tracking-wider">
          <h1 className="lg:text-6xl">
            Anastasiia Yalovets <br />
            Photography
          </h1>
          <p className="italic text-base pt-2 normal-case">
            &ldquo;A photograph is a secret about secret. The more it tells you
            the less you know&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
