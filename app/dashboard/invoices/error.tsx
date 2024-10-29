'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import errorImage from '../../../public/Christ-in-the-Wilderness.jpg';

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Optionally log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <main className="flex h-full flex-col items-center justify-center bg-gradient-to-b from-red-100 to-red-200 p-6">
            <Image
                src={errorImage}
                alt="Error illustration"
                width={300}
                height={200}
                className="mb-4"
            />
            <h2 className="text-2xl font-bold text-red-600 text-center mb-2">Oops! Something went wrong.</h2>
            <p className="text-center text-lg text-gray-700 mb-4">
                We encountered an unexpected error. Don’t worry, it happens to the best of us!
            </p>
            <button
                className="mt-4 rounded-md bg-red-500 px-6 py-2 text-sm text-white transition-colors hover:bg-red-400"
                onClick={() => reset()}
            >
                Give it another shot!
            </button>
            <p className="mt-4 text-sm text-gray-500">
                If the problem persists, please contact support.
            </p>
        </main>
    );
}
