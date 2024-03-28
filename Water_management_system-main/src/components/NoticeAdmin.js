import React from 'react'
import AdminNav from './AdminNav'

function NoticeAdmin() {
  return (
        <>
        <AdminNav/>
        <h1 style={{textAlign:'center'}}>Notice</h1>
              <div class="form-floating">
  <textarea class="form-control" placeholder="Enter the Notice Detail" id="floatingTextarea" style={{height:'100%'}}></textarea>
  <label for="floatingTextarea">Enter the Notice</label>
</div>  
<br/>
<br/>
<br/>
<button className='btn btn-primary' style={{width:'20%',marginLeft:'40%'}}>Submit Notice</button>
        </>
  )
}

export default NoticeAdmin
