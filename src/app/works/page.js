import React from 'react'
import WorkPage from '../components/Work/Work'
// import WorkPage from '@/components/Work/work'


const Work = () => {
  return (
    <section className='w-[344px] sm:w-full mx-auto sm:mx-0 h-auto '>
      <div className='w-full sm:w-[856px] mx-auto'>
        <h1 className="text-3xl text-[#21243D] font-bold mb-10">Work</h1>

        <div className='flex flex-col h-auto gap-6'>

          <WorkPage title='Designing Dashboards' img='/assets/image1.png' label='Dashboard' btnContent='2020' content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' />

          <WorkPage title=' Vibrant Portraits of 2020' img='/assets/image2.png' label='Illustration' btnContent='2018' content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' />

          <WorkPage title='36 Days of Malayalam type' img='/assets/image3.png' label='Typography' btnContent='2018' content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' />
          
          <WorkPage title='Components' img='/assets/Rectangle 40.png' label='Components, Design' btnContent='2018' content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'/>
        </div>
      </div>

    </section>
  )
}

export default Work