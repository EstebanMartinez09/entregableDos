const HandleError = ({ error }) => {
  const mensaje = error.message;
  return (
    <article className="text-[40px] p-[4%]">
      <div className="bg-custom-gray p-4 rounded-xl text-center  flex flex-col gap-4">
        <h1 className=" bg-gradient-to-tr from-[#00c6ff] to-[#0072ff] text-transparent bg-clip-text">Se presentó un error</h1>

        <p className="bg-custom-gray rounded-xl p-4 text-black">{mensaje}</p>
      </div>
    </article>
  );
};
export default HandleError;
