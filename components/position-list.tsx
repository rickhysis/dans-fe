import { useEffect, useState } from "react";
import { listPosition } from "../api/indexApi";
//import PositionQuickviews from "./position-quickviews";
import SearchBox from "./searchbox";

export default function PositionList() {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({});
  const [positions, setPosition] = useState([]);

  const fetchPositions = async () => {
    const response = await listPosition({}, page, 8)
    setPage(response.data.currentPage)
    setPosition(response.data.data.rows)
  }

  const handleFilter = async (filters: any) => {
    console.log(filters)
    const response = await listPosition(filters, 1, 8)
    setPage(response.data.currentPage)
    setFilter(filters)
    setPosition(response.data.data.rows)
  }

  const handleMore = async (e: any) => {
    const response = await listPosition(filter, page + 1, 8)
    setPage(response.data.currentPage)
    //positions.push(response.data.data.rows)
    setPosition( prevState => [...prevState, ...response.data.data.rows])
  }



  const diffDate = (posted: string) => {
    let createdDate = new Date(posted);
    let currentDate = new Date();
    let difference = createdDate.getTime() - currentDate.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));

    return `${Math.abs(TotalDays || 0)} day ago`;
  }
  useEffect(() => {
    fetchPositions()
  }, [])

  return (
    <div className="bg-gray-200">
      <div className="mx-auto py-4 px-4">
        <SearchBox handleFilter={handleFilter}  />
        <div className="overflow-hidden bg-white shadow border mt-4 border-gray-300 border-4 px-4 pl-4">
          <div className="py-6 mt-2 sm:px-2">
            <h2 className="font-bold text-2xl leading-6 text-gray-900">Job List</h2>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              {positions.map((position: any) => (
                <div className="g-gray-50 px-4 py-5 sm:grid sm:px-6 border-y border-gray-200">
                  <a href={`/view/${position.id}`} key={position.id} className="group">
                    <dt className="mt-1 sm:mt-0 grid grid-cols-12">
                      <p className="font-bold text-md text-blue-500 col-span-10">{position.title}</p>
                      <span className="col-span-2 text-right text-gray-500">{position.location}</span>
                    </dt>
                    <dd className="grid grid-cols-12">
                      <p className="col-span-10 text-sm font-medium text-gray-300">{position.company} - <span className="text-green-600">{position.type}</span></p>
                      <span className="col-span-2 text-right text-gray-300">{diffDate(position.created_at)}</span>
                    </dd>
                  </a>
                </div>
              ))}
            </dl>
            <div className="border-t border-gray-200 flex py-5 px-1">
                <button className="block bg-sky-600 text-white font-bold rounded w-full py-1" onClick={handleMore}>More Jobs</button>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}
