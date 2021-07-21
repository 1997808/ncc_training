export const Policy = ({ Icon, title, desc }) => {
  return (
    <>
      <div className="col-span-1 grid grid-cols-4 gap-2">
        <Icon className="col-span-1 w-8 h-8 stroke-1 text-gray-500" />
        <div className="flex flex-col h-full col-span-3">
          <p className="text-gray-800 text-sm font-semibold uppercase">{title}</p>
          <p className="text-gray-500 text-sm mt-2 mb-4">{desc}</p>
        </div>
      </div>
    </>
  );
}