import { useEffect, useState } from "react";
import { detailPosition } from "../api/indexApi";

interface IProps {
    detail: string;
}

export default function PositionList(props: IProps) {
    const [position, setPosition] = useState({} as any);

    const fetchPosition = async () => {
        const response = await detailPosition(props.detail)
        setPosition(response.data)

    }

    useEffect(() => {
        fetchPosition()
    }, [])

    return (
        <div className="bg-gray-200">
            <div className="mx-auto py-4 px-4">
                <a href="/" className="text-sm text-blue-600 font-bold flex">
                    <svg className="h-6 w-6 flex text-gray-300" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="5" y1="12" x2="9" y2="16" />  <line x1="5" y1="12" x2="9" y2="8" /></svg>
                    <span className="px-1">Back</span>
                </a>
                {position ? (<div className="overflow-hidden bg-white shadow border mt-4 border-gray-300 border-4 px-4 pl-4">
                    <div className="py-6 mt-2 sm:px-2">
                        <p className="text-sm text-gray-300">{position.type} / {position.location}</p>
                        <h2 className="font-bold text-2xl leading-6 text-gray-900">{position.title}</h2>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="g-gray-50 px-4 py-5 sm:grid sm:px-6 border-y border-gray-200">
                                <dt className="mt-1 sm:mt-0 grid grid-cols-12 detail-position">
                                    <div className="col-span-9" dangerouslySetInnerHTML={{ __html: position.description }} />
                                    <span className="col-span-3 text-right text-gray-500">
                                        <div className="overflow-hidden bg-white shadow border border-gray-300 border-4">
                                            <div className="flex justify-between py-2 px-2">
                                                <p className="font-bold text-sm text-left text-gray-900">{position.company}</p>
                                                <button className="text-sm bg-gray-200 text-blue-500 font-bold px-2">1 other job</button>
                                            </div>
                                            <div className="border-t border-gray-200">
                                                <dl>
                                                    <div className="g-gray-50 px-4 py-5 sm:grid sm:px-6 border-y border-gray-200">
                                                        <dt className="mt-1 sm:mt-0 detail-position">
                                                            <img src={position.company_logo ? position.company_logo : '/img/empty.png'} className="h-full w-full object-cover object-center" />
                                                        </dt>
                                                        <dd className="grid grid-cols-12">
                                                            <a href={position.company_url} className="text-sm text-blue-500 font-bold px-2 py-5">{position.company_url}</a>
                                                        </dd>
                                                    </div>
                                                </dl>
                                            </div>
                                        </div>
                                        <div className="overflow-hidden bg-yellow-100 shadow border border-gray-300 border-4 mt-4">
                                            <div className="flex justify-between py-2 px-2">
                                                <p className="font-bold text-sm text-left text-gray-900">How to apply</p>
                                            </div>
                                            <div className="border-t border-gray-200 py-2 px-2">
                                                <dl>
                                                    <dt className="mt-1 text-left detail-position">
                                                        <div dangerouslySetInnerHTML={{ __html: position.how_to_apply }} />
                                                    </dt>
                                                </dl>
                                            </div>
                                        </div>
                                    </span>
                                </dt>
                                <dd className="grid grid-cols-12">

                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>) : null}
            </div >
        </div >
    )
}
