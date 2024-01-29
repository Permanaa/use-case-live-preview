"use client"

import Preview from "@/components/preview";
import { useFormik } from "formik";

export interface IForm {
  title: string;
  description: string;
}

export default function Home() {
  const { handleSubmit, values, handleChange } = useFormik<IForm>({
    initialValues: {
      title: "Boost your productivity. Start using our app today.",
      description: "Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.",
    },
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <main className="grid grid-cols-1 lg:grid-cols-3 min-h-full">
      <div className="p-8 flex items-center justify-center bg-slate-800">
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
              value={values.title}
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              id="description"
              rows={2}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
              value={values.description}
            ></textarea>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center col-span-2">
        <Preview data={values} />
      </div>
    </main>
  );
}
