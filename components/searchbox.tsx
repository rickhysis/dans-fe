import { useState } from 'react'

interface IProps {
    handleFilter: Function;
}

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function SearchBox(props: IProps) {
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    const [fullTime, setFullTime] = useState(false)

    const handleSearch = (event: any) => {
        props.handleFilter({
            description,
            location,
            full_time: fullTime
        });
    };

    return (
        <div>
            <div className="grid grid-cols-12 gap-4 content-start">
                <div className="col-span-4 py-1">
                    <label htmlFor="description" className="font-bold">Job Description</label>
                    <div className="mt-2 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center border border-r-0 border-gray-300 border-4 px-3 text-gray-500 bg-white sm:text-sm">
                            <svg className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>
                        <input type="text" name="description" className="block w-full pl-0 flex-1 rounded-none border-gray-200 border-l-0 border-gray-300 border-4 text-gray-900 placeholder:text-gray-400 focus:border-gray-200 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Filter by title, benefits, comapanies, expertise" onChange={(e: any) => setDescription(e.target.value)} />
                    </div>
                </div>
                <div className="col-span-4 py-1">
                    <label htmlFor="location" className="font-bold">Job Location</label>
                    <div className="mt-2 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center border border-r-0 border-gray-300 border-4 px-1 text-gray-500 bg-white sm:text-sm">
                            <svg className="h-6 w-6 text-gray-300" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="9" />  <line x1="3.6" y1="9" x2="20.4" y2="9" />  <line x1="3.6" y1="15" x2="20.4" y2="15" />  <path d="M11.5 3a17 17 0 0 0 0 18" />  <path d="M12.5 3a17 17 0 0 1 0 18" /></svg>
                        </span>
                        <input type="text" name="location" className="block w-full pl-0 flex-1 rounded-none border-gray-200 border-l-0 border-gray-300 border-4 text-gray-900 placeholder:text-gray-400 focus:border-gray-200 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Filter by city, state, zip code or country" onChange={(e: any) => setLocation(e.target.value)} />
                    </div>
                </div>
                <div className="col-span-2 top-5 right-6 flex items-center">
                    <input name="full_time" type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 mt-5" onChange={(e: any) => setFullTime(e.target.checked)}  />
                    <label htmlFor="Full Time only" className="text-gray-900 ml-2 font-bold mt-5">Full Time Only</label>
                </div>
                <div className="col-span-1 top-5 flex items-center">
                    <button role="button-search" type="button" className="relative rounded-sm border border-transparent bg-slate-400 py-2 px-10 text-md font-medium text-white mt-5" onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}
