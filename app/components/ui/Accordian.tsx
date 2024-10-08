

function Accordian({title, body}: {title: string, body: string}) {
  return (
    <div className="border-y  border-black">
      <h1 className="text-[2rem]">{title}</h1>
    </div>
  )
}

export default Accordian