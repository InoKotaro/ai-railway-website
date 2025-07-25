import Image from 'next/image';
import { FaShieldAlt } from 'react-icons/fa';

export default function Safety() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 w-full">
        <Image
          src="/images/safety/safety_top.jpg"
          alt="安全・安心への取り組み"
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-cover"
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
        <div className="mt-4 text-right">詳しく見る &rarr;</div>
      </div>
    </div>
  );
}
