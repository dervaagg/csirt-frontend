

export default function EditLayananT() {
  return (
    <div className="flex flex-col bg-white min-h-full rounded-lg p-4 shadow-sm">
      <h2 className="mt-4 mb-5 text-black font-bold text-3xl">Edit Layanan Tambahan</h2>

      <div className="mt-4">
          <label className="text-black" id="name">Layanan Tambahan : </label>
          <input placeholder="" className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1" type="text"></input>
      </div>

      <div className="mt-4 flex justify-end">
          <button className="bg-black text-white rounded-md px-4 py-1 hover:bg-blue-500 hover:text-white transition-all duration-200" type="submit">Tambah</button>
      </div>

      <div className="mt-5 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-black uppercase bg-zinc-300">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50 border-b">
              <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                Apple MacBook Pro 17
              </th>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 hover:underline">Delete</a>
              </td>
            </tr>                
          </tbody>
        </table>
      </div>
    </div>
  )
}
