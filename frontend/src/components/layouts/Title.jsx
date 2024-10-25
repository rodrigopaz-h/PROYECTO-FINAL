
export default function Title({ title, text }) {
  return (
    <div className="w-full mx-auto px-4 bg-naranjal">
      <div className="grid grid-cols-1 gap-4">
        <div className="px-20 pt-10 pb-10 flex items-center justify-center ">
          <h2 className="text-5xl font-semibold tracking-tight sm:text-7xl">{title}</h2>
          <p className="mt-8 text-pretty text-lg font-medium  sm:text-xl/8">{text}</p>
        </div>
      </div>
    </div>
  )
}
