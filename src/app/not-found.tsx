import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='h-screen w-full flex items-center justify-center flex-col gap-4 '>
      <h2 className='text-3xl font-bold'>Not Found</h2>
      <p className='text-gray-500'>Could not find requested resource</p>
      <Link className='bg-gray-200 text-black px-5 py-3 font-semibold ' href="/">Return Home</Link>
    </div>
  )
}