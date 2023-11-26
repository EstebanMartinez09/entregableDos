const Loading = () => {
  return (
    <section className="bg-black w-[100%] flex items-center justify-center h-screen">
    <div className="text-center flex flex-col justify-center items-center gap-4">
        <img src="/loanding/nube.svg" alt="" />
        <p className="text-white">...Cargando</p>
        <div className="bg-white px-4 py-1 rounded-xl">
            <img src="/loanding/grupo.png" alt="" />
        </div>
    </div>
    </section>
  )
}
export default Loading