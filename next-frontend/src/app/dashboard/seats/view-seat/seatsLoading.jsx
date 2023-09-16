function SeatsLoading() {
  return Array.from({ length: 10 }, () => ({})).map((row, index) => (
    <tr key="">
      <td className="text-center py-4">
        <div className="h-8 w-28 bg-slate-300 rounded-full animate-pulse mx-auto"></div>
      </td>
      <td className="text-center py-4">
        <div className="h-8 w-28 bg-slate-300 rounded-full animate-pulse mx-auto"></div>
      </td>
      <td className="text-center py-4">
        <div className="h-8 w-28 bg-slate-300 rounded-full animate-pulse mx-auto"></div>
      </td>
      <td className="text-center py-4">
        <div className="h-8 w-28 bg-slate-300 rounded-full animate-pulse mx-auto"></div>
      </td>

      <td className="text-center py-4">
        <div className="h-8 w-28 bg-slate-300 rounded-full animate-pulse mx-auto"></div>
      </td>
    </tr>
  ));
}

export default SeatsLoading;
