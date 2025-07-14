import Image from 'next/image';
import Link from 'next/link';
import { FaShieldAlt } from 'react-icons/fa';

const Safety = ({ siteColor }) => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 w-full">
        <Image
          src="/images/safety/safety_top.png"
          alt="安全・安心への取り組み"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-grow flex-col p-6 text-gray-700">
        <h3 className="mb-3 flex items-center text-xl font-bold">
          <FaShieldAlt className="mr-2" />
          安全・安心への取り組み
        </h3>

        <p className="mt-3 flex-grow">
          AI電鉄では、お客様に安心してご利用いただくため、最新の技術と徹底した管理体制で、日々の安全運行に努めています。
        </p>
        <div className="mt-4 text-right font-bold">詳しく見る &rarr;</div>
      </div>
    </div>
  );
};

export default Safety;
