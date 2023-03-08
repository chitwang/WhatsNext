import React from 'react'


const Superadmin_eventitem = (props) => {
   const {event} = props;
    const handleapprove = () => {
        event.isSpecial = true;
        event.reqsp = false;
    }
    const handledeny = () => {
        event.isSpecial = false;
        event.reqsp = false;
    }
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{event.title}</h5>
                       {/* <i className="far fa-trash-alt mx-2" onClick={()=>{deleteEvent(event._id)}}></i>
                        <i className="far fa-edit mx-2" onClick={()=>{updateEvent(event)}}></i>  */}
                        <span >{event.startTime}</span><br/>
                       <span>{event.endTime}</span>
                        <h6> {event.tag}</h6>
                    </div>
                    <p className="card-text">{event.description}</p>
                    <p className="card-text">Likes: {event.like}</p>
                    <p className="card-text">{event.reqsp && <p>special</p>}</p>
                    <p className="card-text">{!(event.reqsp) && <p>not special</p>}</p>
                    <button onClick={handleapprove}>Approve</button>
                    <button onClick={handledeny}>Deny</button>
                </div>
            </div>
        </div>
    )
}

export default Superadmin_eventitem
