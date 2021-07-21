export const SortProduct = ({ value, handleSort }) => {
  return (
    <select value={value} onChange={e => handleSort(e)} className="h-10 w-48 flex justify-center items-center text-sm text-gray-800 p-2 border border-gray-200 focus:outline-none">
      <option value="" className="h-10 w-48 flex items-center">Default</option>
      <option value="grapefruit" className="h-10 w-48 flex items-center">Grapefruit</option>
      <option value="lime" className="h-10 w-48 flex items-center">Lime</option>
      <option value="coconut" className="h-10 w-48 flex items-center">Coconut</option>
      <option value="mango" className="h-10 w-48 flex items-center">Mango</option>
    </select>
  );
}