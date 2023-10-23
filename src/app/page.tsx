'use client';
// import RiveComponent from '@/Components/RiveComponent';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='m-10 w-100 min-h-screen'>
      <div className='flex flex-col items-center justify-center tracking-wide space-y-6 h-screen'>
        <div className="basis-1/2 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-violet-200 before:dark:opacity-10 after:dark:from-pink-900 after:dark:via-[#7c56dd] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
        {/* <RiveComponent /> */}
        <Image
          width={900}
          height={900}
          src={'/Think Questors.gif'}
          priority
          alt='Think Questors animation'
        />
        <h1 className='md:text-3xl md:text-center font-mono text-4xl font-bold'>
          QUEST MODE
        </h1>
        <p className='text-center font-mono text-xl font-semibold pt-2'>
          We are still in quest to reveal something exciting
        </p>
        <p className='text-center font-mono text-xl font-semibold'>
          Until then, Keep an eye out on us and you know we’ll do the same !!
        </p>
        <p className='text-center font-mono text-xl font-semibold'>
          Got questions?? Write us at{' '}
          <span>
            <a href='mailto:thinkers@thinkquestors.com' className='underline'>
              thinkers@thinkquestors.com
            </a>
          </span>
        </p>
      </div>
    </main>
  );
}
