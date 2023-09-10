import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#279EFF] py-6 text-white">
      <div className="flex container justify-between">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold pb-4 uppercase">About Us</h3>
          <Link href="#">Super Hostel BD</Link> flex-col
          <Link href="#">Terms & Condition</Link>
          <Link href="#">Partners</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Feedback</Link>
          <Link href="#">Contact</Link>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-bold pb-4 uppercase">Members</h3>
          <Link href="#">Create Account</Link>
          <Link href="#">Super Hostel Bd Panel</Link>
          <Link href="#">Test</Link>
          <Link href="#">FAQ</Link>
          <Link href="#">Instructions</Link>
          <Link href="#">Career</Link>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-bold pb-4 uppercase">Sponser</h3>
          <Link href="#">Create Account</Link>
          <Link href="#">Products</Link>
          <Link href="#">Assets</Link>
          <Link href="#">FAQ</Link>
          <Link href="#">Instructions</Link>
          <Link href="#">Policy</Link>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-bold pb-4 uppercase">Tools and Social</h3>
          <Link href="#">Our Android Apps</Link>
          <Link href="#">Our iOS App</Link>
          <Link href="#">Facebook</Link>
          <Link href="#">Instagram</Link>
          <Link href="#">Google</Link>
          <Link href="#">Youtube</Link>
          <Link href="#">Linkedin</Link>
        </div>
      </div>
    </div>
  );
}
