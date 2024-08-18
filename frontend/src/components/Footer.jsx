export default function Footer(){
  return (
    <div className=" bg-black text-white pb-3 pt-4">
    <div className="row row-cols-1 row-cols-sm-3 row-cols-md-5 m-2 text-sm-start text-center ">
      <div className="col lh-1">
        <h5>Abstract</h5>
        <p>Branches</p>
      </div>
      <div className="col lh-1">
       
        <h5>Resources</h5>
        <p>Blog</p>
        <p>Help Center</p>
        <p>Release Notes</p>
        <p>status</p>
    
        
      </div>
      <div className="col lh-1">
      <h5>Community</h5>
      <p>Twitter</p>
      <p>Linkedin</p>
      <p>Facebook</p>
      <p>Dribble</p>
      <p>Podcast</p>
      </div>
      <div className="col lh-1">
        <h5>Company</h5>
        <p>About Us</p>
        <p>Careers</p>
        <p>Legal</p>
        <div>
        <h6>Contact Us</h6>
        <p>info@abstract.com</p>
        </div>
      </div>
      <div className="col align-self-end">
        <p className="">

        
        © Copyright 2022 <br />
        Abstract Studio Design, inc. <br />
        All rights reserved
        </p>
      </div>
    </div>
  </div>
  )
}