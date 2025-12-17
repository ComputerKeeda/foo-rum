
export default function AuthNavbar() {
  return (
    <div className=" w-full h-10 flex items-center justify-between px-2">
      <div className="logo flex items-center justify-start gap-2">
        <img src="/assets/mouse.png" alt="Mouse Logo" className="h-6" />
        <p className="text-lg font-semibold ">foo-rum</p>
      </div>
      <div className="back-to-home text-md font-semibold">
        Back to home
      </div>
    </div>
  )
}
