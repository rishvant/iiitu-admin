import { IoMdAddCircleOutline } from 'react-icons/io';

const TableJournals = ({ edit, Journal, setJournal }) => {
  const handleEdit = (index, value) => {
    const updatedJournal = [...Journal];
    updatedJournal[index] = value;
    setJournal(updatedJournal);
  };

  const handleAddJournal = () => {
    setJournal([...Journal, '']);
  };
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="py-4 px-4 font-medium text-center text-black dark:text-white">
                Journals
              </th>
            </tr>
          </thead>
          <tbody>
            {Journal.map((jor, index) => (
              <tr key={index}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {edit ? (
                      <input
                        type="text"
                        value={jor}
                        placeholder="Journal"
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        onChange={(e) => handleEdit(index, e.target.value)}
                      />
                    ) : (
                      jor
                    )}
                  </h5>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {edit && (
          <button
            className="mt-2 flex flex-row items-center gap-1 bg-primary text-white rounded-md px-4 py-2"
            onClick={handleAddJournal}
          >
            Add Journal <IoMdAddCircleOutline />
          </button>
        )}
      </div>
    </div>
  );
};

export default TableJournals;
