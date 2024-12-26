import { useState } from "react";
import { Check, Pen } from "lucide-react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "./features/postslice";

function App() {
  const dispatch = useDispatch();
  const [data, setData] = useState("");

  const postData = useSelector((state) => state.posts);
  console.log(postData);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(add(data));
    setData("");
  }

  function handleUpdate(post) {
    dispatch(remove(post.id));
    setData(post.name);
  }

  function handleDelete(id) {
    console.log(id);
    dispatch(remove(id));
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">Add Todo</h1>

        <div className="flex flex-col items-center space-y-4 mb-6">
          {postData.map((post) => (
            <div
              className="flex justify-between items-center bg-white shadow-md p-4 w-full max-w-md rounded-lg"
              key={post.id}
            >
              <div className="space-x-4">
                <span className="text-gray-700 font-semibold">{post.id}</span>
                <span className="text-gray-500">{post.name}</span>
              </div>
              <div className="space-x-4">
                <button
                  onClick={() => handleUpdate(post)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Pen size="27" strokeWidth="4" className="pt-2" />
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="text-green-500 hover:text-green-700"
                >
                  <Check size="27" strokeWidth="4" className="pt-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 shadow-md rounded-lg max-w-md mx-auto">
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              required
              placeholder="Enter Name"
              className="border-2 border-gray-300 rounded-lg p-2 focus:ring focus:ring-green-200"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
