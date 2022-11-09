

const ShowMyReview = ({review,handleDelete,handleStatusUpdate}) => {
    console.log(review)
    const {service,name, email,message,imageURL,_id,status} = review;
    


    return (
        <tr>
        <th>
          <label>
          <button  onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
            <div className="rounded w-24 h-24">
                            
                                
                <img src={imageURL} alt="Avatar Tailwind CSS Component" />
                </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{email}</div>
            </div>
          </div>
        </td>
        <td>
         {service}
          <br/>
          <span className="badge badge-ghost badge-sm">{message}</span>
        </td>
        
        <th>
          <button onClick={() => handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">{status? status : 'pending'}</button>
        </th>
      </tr>
    );
};

export default ShowMyReview;