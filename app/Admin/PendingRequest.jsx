import React, { useEffect, useState } from 'react'
import Axios from '../axios'

function PendingRequest() {

const [pendingRequsts,setPendingReuests]=useState([])


useEffect(()=>{
     
    const fetchPendingRequest=async()=>{
        try {
            const response=await Axios.get("/api/admin/pending")
         if(response.status===200){
            setPendingReuests(response.data.data)
         }
        } catch (error) {
            console.log(error,'error')
        }
        
    }
    fetchPendingRequest()
},[])


const handleApproveRequest=async(RequestId)=>{
  try {
    const response=await Axios.post(`/api/admin/approve/${RequestId}`)
    if(response.status===200){
      console.log("success",response);
      window.location.reload();

    }
    
  } catch (error) {
    console.log(error,'error approving pending request');
  }
}



const handleRejectRequest=async(RequestId)=>{
try {
  const response=await Axios.delete(`/api/admin/reject/${RequestId}`)
  if(response.status===200){
    console.log("successfully rejected pending requests");
    window.location.reload();
  }
  
} catch (error) {
  console.log(error,'error rejecting pending request')
}
}

useEffect(()=>{
   handleApproveRequest()
   handleRejectRequest()
   
},[])

    return (
      <div className="w-full bg-slate-700 rounded-lg p-2 overflow-y-auto max-h-full h-[26rem]">
        <div className="w-full ">
          <h1 className="flex justify-center font-extrabold text-2xl text-white">Pending Requests</h1>
        </div>
        {pendingRequsts.length > 0 ? (
          pendingRequsts.map((pending) => (
            <div className="w-full bg-slate-500 flex justify-between p-2 items-center rounded-lg gap-2 mt-2" key={pending._id}>
              <div className="flex items-center gap-1">
                <img className="w-12 h-12 rounded-full" src={pending.image} alt={pending.name} />
                <h1>{pending.name}</h1>
              </div>
              <div className="flex gap-2 font-bold">
                <button className="p-2 flex items-center justify-center rounded-lg bg-green-600 hover:bg-green-400" onClick={() => handleApproveRequest(pending._id)}>
                  Approve
                </button>
                <button className="p-2 flex items-center justify-center rounded-lg bg-red-600 hover:bg-red-400" onClick={()=>handleRejectRequest(pending._id)}>
                  Reject
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center mt-4">
            <p className="text-xl font-semibold text-gray-400">No pending requests</p>
          </div>
        )}
      </div>
    );
}

export default PendingRequest
