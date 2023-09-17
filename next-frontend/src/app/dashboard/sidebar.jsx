import Link from "next/link";

function Sidebar() {
  return (
    <section id="web-job-category" className="">
      <div className=" bg-blue-300 rounded-md shadow-lg overflow-hidden">
        <div className=" bg-gray-50 px-12 py-5 space-y-4">
          <h2 className="text-lg font-bold text-black">
            <i className="fa-solid fa-bars"></i> Control Panel
          </h2>
          <Link href="/dashboard" className="block" to="/dashboard">
            <h2 className="text-lg bg-blue-500 px-2 py-1 text-white rounded-md w-fit ">
              <i className="fa-solid fa-ticket"></i> Dashboard
            </h2>
          </Link>
        </div>

        <div className="text-white">
          <div className="collapse collapse-arrow overflow-visible grid-rows-[35px_0fr]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium text-black bg-gray-100 px-12">
              <i className="fa-solid fa-users inline-block pr-2"></i> Users
            </div>
            <div className="collapse-content bg-gray-200 space-y-5 pt-6 px-0 text-black">
              <Link href="/dashboard/users/user-add" className="block hover:bg-gray-300 px-12 py-4 m-0 ac-link">
                <i className="fa-solid fa-user-plus inline-block pr-2"></i> User Add
              </Link>
              <Link href="/dashboard/users/user-view" className="block hover:bg-gray-300 px-12 py-4 m-0 ac-link">
                <i className="fa-solid fa-eye inline-block pr-2"></i> View User
              </Link>
              <a className="block hover:bg-gray-300 px-12 py-4 m-0 ac-link" href="#">
                <i className="fa-solid fa-trash-can-arrow-up inline-block pr-2"></i> Restore User
              </a>
            </div>
          </div>
          <div className="collapse collapse-arrow overflow-visible grid-rows-[35px_0fr]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium text-black bg-gray-100 px-12">
              <i className="fa-solid fa-briefcase inline-block pr-2"></i> Rooms
            </div>
            <div className="collapse-content bg-gray-200 space-y-5 pt-6 px-0 text-black">
              <Link href="/dashboard/rooms/add-room" className="block hover:bg-gray-300 px-12 py-4 m-0 ac-link">
                <i className="fa-solid fa-plus inline-block pr-2"></i> Add Room
              </Link>
              <Link href="/dashboard/rooms/view-rooms" className="block hover:bg-gray-300 px-12 py-4 m-0 ac-link">
                <i className="fa-solid fa-eye inline-block pr-2"></i> View Rooms
              </Link>
              <a className="block hover:bg-gray-300 px-12 py-4 m-0 ac-link" href="#">
                <i className="fa-solid fa-trash-can-arrow-up inline-block pr-2"></i> Restore Room
              </a>
            </div>
          </div>
          <div className="collapse collapse-arrow overflow-visible grid-rows-[35px_0fr]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium text-black bg-gray-100 px-12">
              <i className="fa-solid fa-folder-tree inline-block pr-2"></i> Beds
            </div>
            <div className="collapse-content bg-gray-200 space-y-5 pt-6 px-0 text-black">
              <Link href="/dashboard/beds/add-bed" className="block hover:bg-gray-300 px-12 py-4 m-0 ac-link">
                <i className="fa-solid fa-plus inline-block pr-2"></i> Add Bed
              </Link>
              <Link href="/dashboard/beds/view-bed" className="block hover:bg-gray-300 px-12 py-4 m-0 ac-link">
                <i className="fa-solid fa-eye inline-block pr-2"></i> View Beds
              </Link>
              <Link href="/dashboard/beds/restore-bed" className="block hover:bg-gray-300 px-12 py-4 m-0 ac-link" h>
                <i className="fa-solid fa-trash-can-arrow-up inline-block pr-2"></i> Restore Bed
              </Link>
            </div>
          </div>
          <div className="collapse collapse-arrow overflow-visible grid-rows-[35px_0fr]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium text-black bg-gray-100 px-12">
              <i className="fa-solid fa-industry inline-block pr-2"></i> Branches
            </div>
            <div className="collapse-content bg-gray-200 space-y-5 pt-6 px-0 text-black">
              <a className="block hover:bg-gray-300 px-12 py-4 m-0 ac-link" href="#">
                <i className="fa-solid fa-plus inline-block pr-2"></i> কোম্পানি যোগ
              </a>
              <a className="block hover:bg-gray-300 px-12 py-4 m-0 ac-link" href="#">
                <i className="fa-solid fa-eye inline-block pr-2"></i> কোম্পানি দেখুন
              </a>
              <a className="block hover:bg-gray-300 px-12 py-4 m-0 ac-link" href="#">
                <i className="fa-solid fa-trash-can-arrow-up inline-block pr-2"></i> কোম্পানি রিস্টোর
              </a>
            </div>
          </div>
          <div className="collapse collapse-arrow overflow-visible grid-rows-[35px_0fr]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium text-black bg-gray-100 px-12">
              <i className="fa-solid fa-file-invoice inline-block pr-2"></i> Facilities
            </div>
            <div className="collapse-content bg-gray-200 space-y-5 pt-6 px-0 text-black">
              <a className="block hover:bg-gray-300 px-12 py-4 m-0 ac-link" href="#">
                <i className="fa-solid fa-plus inline-block pr-2"></i> সিভি যোগ
              </a>
              <a className="block hover:bg-gray-300 px-12 py-4 m-0 ac-link" href="#">
                <i className="fa-solid fa-eye inline-block pr-2"></i> সিভি দেখুন
              </a>
              <a className="block hover:bg-gray-300 px-12 py-4 m-0 ac-link" href="#">
                <i className="fa-solid fa-trash-can-arrow-up inline-block pr-2"></i> সিভি রিস্টোর
              </a>
            </div>
          </div>
          <div className="collapse collapse-arrow overflow-visible grid-rows-[35px_0fr]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium text-black bg-gray-100 px-12">
              <i className="fa-solid fa-lock inline-block pr-2"></i> Payments
            </div>
            <div className="collapse-content bg-gray-200 space-y-5 pt-6 px-0 text-black">
              <a className="block hover:bg-gray-300 px-12 py-4 m-0 ac-link" href="#">
                <i className="fa-solid fa-plus inline-block pr-2"></i> রোল যোগ
              </a>
              <a className="block hover:bg-gray-300 px-12 py-4 m-0 ac-link" href="#">
                <i className="fa-solid fa-eye inline-block pr-2"></i> রোল দেখুন
              </a>
              <a className="block hover:bg-gray-300 px-12 py-4 m-0 ac-link" href="#">
                <i className="fa-solid fa-trash-can-arrow-up inline-block pr-2"></i> রোল রিস্টোর
              </a>
            </div>
          </div>
          <div className="collapse collapse-arrow overflow-visible grid-rows-[35px_0fr]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium text-black bg-gray-100 px-12">
              <i className="fa-solid fa-photo-film inline-block pr-2"></i> Reports
            </div>
            <div className="collapse-content bg-gray-200 space-y-5 pt-6 px-0 text-black">
              <a className="block hover:bg-gray-300 px-12 py-4 m-0 ac-link" href="#">
                <i className="fa-solid fa-plus inline-block pr-2"></i> ভিডিও রিজিওমি যোগ
              </a>
              <a className="block hover:bg-gray-300 px-12 py-4 m-0 ac-link" href="#">
                <i className="fa-solid fa-eye inline-block pr-2"></i> ভিডিও রিজিওমি দেখুন
              </a>
              <a className="block hover:bg-gray-300 px-12 py-4 m-0 ac-link" href="#">
                <i className="fa-solid fa-trash-can-arrow-up inline-block pr-2"></i> ভিডিও রিজিওমি রিস্টোর
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
