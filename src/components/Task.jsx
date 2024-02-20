import { CheckCircle } from '@phosphor-icons/react'

export function CreatedTask() {
  return (
    <div className='flex justify-center mx-auto gap-2 w-[46rem] border-2'>
      <input type="radio" name="check" />
      {/* <CheckCircle size={30} color='white' /> */}
      <p className='text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat hic similique et iure, dicta nihil sequi, odit ab error commodi porro aliquid. Quis at voluptatum iste vel aperiam voluptatibus officiis.</p>
    </div>
  )
}