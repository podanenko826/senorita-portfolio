import { IoMdHeartEmpty } from 'react-icons/io';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex min-w-full justify-center pb-3">
      <h3 className="font-mono">@2023 Made with</h3>

      <IoMdHeartEmpty className="text-red-500 ml-1.5 mr-1.5 text-xl mt-0.5" />

      <h3 className="font-mono mr-2">by</h3>

      <a
        href="https://twitter.com/denys_podanenko"
        target="_blank"
        className="flex"
      >
        <h3 className="font-extrabold font-mono">Denys Podanenko</h3>
        <FaExternalLinkAlt className="mt-0.5 ml-1.5" />
      </a>
    </div>
  );
};

export default Footer;
