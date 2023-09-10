function MemberAdd() {
  return (
    <div className="text-gray-700 space-y-6 lg:px-20">
      <h3 className="text-2xl font-medium">
        Member Add <i className="fa-solid fa-user-plus"></i>
      </h3>
      <form className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label className="text-lg">Name :</label>
          <input className="border-2 border-blue-200 px-2 rounded-md py-2" type="text" placeholder="Enter Your Name" name="name" />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-lg">Email :</label>
          <input className="border-2 border-blue-200 px-2 rounded-md py-2" type="text" placeholder="Enter Your Email" name="email" />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-lg">Username :</label>
          <input className="border-2 border-blue-200 px-2 rounded-md py-2" type="text" placeholder="Enter Username" name="username" />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-lg">Password :</label>
          <input className="border-2 border-blue-200 px-2 rounded-md py-2" type="password" placeholder="Enter Password" name="password" />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-lg">Role :</label>
          <select className="text-lg" name="role">
            <option disabled selected value="0">
              Select Role
            </option>
            <option value="1">Admin</option>
            <option value="2">Member</option>
            <option value="2">Auditor</option>
          </select>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-lg">Image :</label>
          <input className="py-1 px-2 rounded-md" type="file" name="image" />
        </div>
        <h2 className="text-center text-2xl text-green-700"> </h2>
        <h2 className="text-center text-2xl text-green-700"></h2>
        <button className="block mx-auto bg-blue-500 text-white py-2 px-4 rounded-md">
          <i className="fa-solid fa-plus"></i> Add User
        </button>
      </form>
    </div>
  );
}

export default MemberAdd;
