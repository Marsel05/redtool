import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToDo, deleteToDo, checkToDO} from "../../Store/Reducers/todoSlice";

const ToDo = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState("")
    const handleChange = (e) => setValue(e.target.value)
    console.log(value)
    const {todo} = useSelector(s => s.todos)

    const addTask = () => {
        dispatch(addToDo(value))
    }
    return (
        <div className="py-32">
            <div className="flex w-[450px] justify-between items-center mx-auto my-10">
                <input onChange={handleChange} className="block outline-0 w-80 mx-auto p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       type="text"/>
                <button onClick={addTask} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add
                </button>
                </div>
                <div className="relative  overflow-x-auto w-1/2 mx-auto ">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead
                            className="text-xs bg-gray-800 text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                action
                            </th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            todo.map(el => (
                                <tr className="bg-gray-900 text-gray-400">
                                    <td className="px-6 py-4">
                                          <span className={el.isDone ? "line-through" : ""}>
                                        <input type="checkbox" onClick={()=> dispatch(checkToDO(el.id))}/>
                                              {el.title}
                                    </span>
                                    </td>
                                      <td className="px-2 py-4">
                                          <button onClick={()=> dispatch(deleteToDo(el.id))}
                                                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                              DELETE
                                          </button>

                                      </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
        </div>
    );
};

export default ToDo;