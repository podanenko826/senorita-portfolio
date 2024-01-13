export default function Journal() {
  return (
    <div className="min-w-full px-8 flex gap-4 overflow-hidden py-8 bg-gray-50 journal">
      <div className="flex flex-col min-w-full xl:px-72 mb-6 items-between">
        <p className="text-6xl text-center uppercase font-semibold border-b-4 border-black p-10">
          News
        </p>
        <h1 className="text-3xl md:text-4xl font-times text-center md:p-8 mt-8 mb-12 md:mb-4">
          &quot;Discover the attractiveness and power of female form through the
          lens of my camera&quot;
        </h1>
        <h1 className="leading-5 text-sm font-courier pl-6 text-left">
          <strong className="text-3xl font-semibold">Y</strong>ou'll embark on a
          journey through time, emotion, and the wonders of our world. This is
          not just a photography portfolio; it's a window into moments, dreams,
          and the beauty that surrounds us. Let the images tell their stories,
          as you explore the visual symphony that awaits. Join me on this
          voyage, and together, we'll create visual magic one click at a time.
          <br /> <br />
        </h1>
        <h1 className="leading-5 text-sm font-courier pl-6 text-left">
          <strong className="text-3xl font-semibold">E</strong>xplore moments,
          emotions, and the beauty of our world. Join me on this visual journey,
          and let the images speak. <br /> <br />
        </h1>
        <h1 className="leading-5 text-sm font-courier pl-6 text-left hidden md:block">
          <strong className="text-3xl font-semibold">S</strong>tep into a realm
          where images speak louder than words, where every frame holds a story
          waiting to be discovered. This is a sanctuary for visual storytellers,
          a place where the world is seen through the lens of creativity. Join
          me on a voyage through light, color, and emotions, as we explore the
          artistry of photography. The moments frozen in time are waiting to
          take you on a visual adventure. Welcome to my photography portfolio,
          where every click unlocks a new chapter in the narrative of life.{' '}
        </h1>
      </div>
      <div className="w-3/4 h-96 bg-transparent"></div>
    </div>
  );
}
