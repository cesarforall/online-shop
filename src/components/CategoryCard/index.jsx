function Card ({ category }) {
  const { name, image } = category
  return (
    <div className='h-[200px]'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='w-full absolute bottom-1/2 left-0 font-semibold text-2xl bg-white/60 rounded-lg text-gray-300'>{name}</span>
        <img className='w-full h-full object-cover rounded-lg border' src={image} alt={name} />
      </figure>
    </div>
  )
}

export default Card
