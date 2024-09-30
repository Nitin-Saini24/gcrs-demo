import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/Slices/postSlice";
import Table2 from "../Components/table/Table2";

const Page6 = ({ data, columns }) => {
  const [loading, setLoading] = useState(null);

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  return (
    <div className="col-span-12">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6 lg:col-span-7">
          <div className="border-l-2 border-b-2 border-r-2  border-[#0060AB] rounded-lg bg-white  shadow-default dark:border-strokedark dark:bg-boxdark w-full">
            <div className="max-w-full overflow-x-auto">
              <div className="border-b border-stroke bg-gradient-to-t from-[#0060AB] to-[#008FFF] py-2 px-2 flex justify-between rounded-md">
                <h1 className="text-lg font-semibold text-white ">Overview</h1>
                <button className="mr-5 text-[#0060AB] font-bold border-[#0060AB] bg-white border px-2 py-1 rounded">
                  View All
                </button>
              </div>
              <div className="flex flex-col  max-h-[12rem] overflow-auto no-scrollbar-w ">
                {status === "loading" && <h1>Loading...</h1>}
                {status === "failed" && <h1>{error}</h1>}
                {status === "succeeded" &&
                  posts?.slice(0, 10).map((post) => (
                    <div
                      key={post.id}
                      className="border border-[#0060AB] bg-gray-2 dark:bg-boxdark dark:text-white pl-2 py-2 my-1 mx-2 rounded-sm shadow-md"
                    >
                      <p className="text-sm text-[#0060AB] font-semibold border-b border-[#0060AB] mr-2">
                        {post.title}
                      </p>
                      {/* <p className="text-xs">{post.body}</p> */}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-5">
          <div className=" bg-gray-100 dark:bg-boxdark dark:text-white rounded-lg border-l-2 border-b-2 border-r-2 border-[#3C4459]">
            <div className="border-b border-stroke bg-[#61888E]  py-2 px-2 flex justify-between rounded-md">
              <h1 className="text-lg font-semibold text-white ">New Request</h1>
              <button className="mr-5 text-[#0060AB] font-bold border-[#0060AB] bg-white border px-2 py-1 rounded">
                View All
              </button>
            </div>

            <div className="flex flex-col max-h-[12rem] overflow-auto no-scrollbar-w">
              <table className="bg-[#3C4459] h-10">
                <thead>
                  <tr>
                    <th className="w-[20%]">Client Name</th>
                    <th className="w-[50%]">Company Name</th>
                    <th className="w-[30%]">Action</th>
                  </tr>
                </thead>
              </table>
              <table className="">
                <tbody>
                  <tr>
                    <td className="">Client Name</td>
                    <td className="">Company Name</td>
                    <td className="">Action</td>
                  </tr>
                </tbody>
              </table>
              {/* <Table2 data={data} columns={columns} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6;
