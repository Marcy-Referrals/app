

function Button({text}: {text: string}) {
  return (
    <div className="m-auto border-[0.2rem] hover:text-white cursor-pointer duration-300 hover:bg-[#261f1d] backdrop-blur w-[12rem] border-[#261f1d] py-2  font-bold text-center">{text}</div>
  )
}

export default Button