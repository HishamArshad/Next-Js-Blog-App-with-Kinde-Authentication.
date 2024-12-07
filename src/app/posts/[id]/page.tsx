import SinglePost from '@/components/singlePost'
import { Suspense } from 'react'
 
const page = async ({ params }) => {

 
  return (
    <div>
        <Suspense fallback="Loading Post Please Stand by.....">
      <SinglePost params={params}/>
        </Suspense>
    </div>
  )
}

export default page

