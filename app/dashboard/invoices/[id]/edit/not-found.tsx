import Link from 'next/link';
import { GlobeAmericasIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import notFoundImage from '../../../../../public/Christ-in-the-Wilderness.jpg'; // 请根据你的项目结构更新路径

export default function NotFound() {
    return (
        <main className="flex h-full flex-col items-center justify-center bg-gradient-to-b from-yellow-100 to-yellow-200 p-6">
            <Image
                src={notFoundImage} // 用你自己的404图像替换
                alt="Not Found illustration"
                width={300}
                height={200}
                className="mb-4"
            />
            <GlobeAmericasIcon className="w-12 text-gray-500 mb-2" />
            <h2 className="text-2xl font-bold text-gray-800">404 - Page Not Found</h2>
            <p className="text-center text-lg text-gray-600 mb-4">
                Oops! We couldn&apos;t find the invoice you were looking for. It might have been moved or deleted.
            </p>
            <Link
                href="/dashboard/invoices"
                className="mt-4 rounded-md bg-blue-600 px-6 py-2 text-sm text-white transition-colors hover:bg-blue-500"
            >
                Go Back to Invoices
            </Link>
            <p className="mt-4 text-sm text-gray-500">
                If you think this is an error, please contact support.
            </p>
        </main>
    );
}
