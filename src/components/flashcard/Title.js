import React from "react";

const Title = ({ formik }) => {
  return (
    <div className="mt-5 sm:px-14 px-10 py-7 bg-white rounded-md shadow-lg">
      <div className="flex flex-col mb-4">
        {/* Heading for Create Group input box */}
        <label htmlFor="groupname" className="text-gray-600 pb-3 font-medium">
          Create Group*
        </label>

        {/* Input box for Create Group*/}
        <input
          type="text"
          name="groupName"
          id="groupname"
          value={formik.values.groupName}
          onChange={formik.handleChange}
          placeholder="Please, specify the group name here."
          className="py-4 px-5 focus:outline-green-500 outline-blue-100 outline outline-2 focus:outline-7 rounded md:w-96"
        />

        {formik.errors.groupName ? (
          <div className="text-red-600 text-sm">{formik.errors.groupName}</div>
        ) : null}
      </div>
      <div className="flex flex-col">
        {/* Heading for Add description */}
        <label htmlFor="role" className="text-gray-600 pb-3 font-medium">
          Add description
        </label>

        {/* Input box for Add description  */}
        <textarea
          type="textarea"
          name="description"
          id="role"
          value={formik.values.description}
          onChange={formik.handleChange}
          placeholder="Describe the group."
          className="py-4 focus:outline-green-500 outline-blue-100 px-5 outline outline-2 rounded h-35"
        ></textarea>
        {formik.errors.description ? (
          <div className="text-red-600 text-sm">
            {formik.errors.description}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Title;
