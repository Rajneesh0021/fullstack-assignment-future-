export default function Navbar(){
  return (
    <nav className="navbar bg-black text-white">
    <div className="container">
      <p className="text-white heading">Abstract | Help center</p>
      <form className="d-flex" role="search">
       
        <button className="btn btn-outline-secondary text-white" type="submit">Submit a request</button>
      </form>
    </div>
  </nav>
  )
}