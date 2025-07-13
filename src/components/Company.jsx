import Link from 'next/link';
import Image from 'next/image';
import { FaInfoCircle } from 'react-icons/fa';

const Company = ({ siteColor }) => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 w-full">
        <Image
          src="/images/company/company_top.jpg"
          alt="会社案内"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-grow flex-col p-6 text-gray-700">
        <h3 className="mb-3 flex items-center text-xl font-bold">
          <FaInfoCircle className="mr-2" />
          会社案内
        </h3>

        <p className="mt-3 flex-grow">
          AI電鉄の企業理念、事業内容、沿革などをご紹介します。私たちは、交通インフラを通じて、地域社会の発展に貢献します。
        </p>
        <div className="mt-4 text-right">
          <Link
            href="/company"
            className="font-bold"
            style={{ color: siteColor.primary }}
          >
            詳しく見る &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Company;
