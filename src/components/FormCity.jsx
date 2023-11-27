const FormCity = ({ handleSubmit }) => {
  return (
    <>
      <form
        className="flex gap-4 justify-center items-center mt-4 select-none p-[3%] "
        onSubmit={handleSubmit}
      >
        <input
          className="shadow appearance-none border rounded-3xl w-full  h-[34px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="city"
          placeholder="Nombre de la ciudad"
          autoComplete="off"
        />
        <button
          className="select-none bg-white text-[#4580BA] font-semibold w-[120px] h-[34px] rounded-3xl hover:bg-[#4580BA] hover:text-white transform hover:scale-110 transition-transform duration-300 shadow-md"
          type="submit"
        >
          Buscar
        </button>
      </form>
    </>
  );
};
export default FormCity;
