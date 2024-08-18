
export default function Cards({data}) {
 
  return (
  
   <div className="container">
    {data.length===0 ? <h1 className="text-center p-5">No data Found !</h1>: 
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2  m-auto">
        {data.map(item => (
          <div key={item._id} className="col pb-3 pt-3">
            <div className="card">
              <div className="card-header">
                <h5>{item.title}</h5>  
              </div>
              <div className="card-body">
                <p className="card-text">{item.description}</p>  
              </div>
            </div>
          </div>
        ))}
      </div>
}
    </div>
   

  )
}