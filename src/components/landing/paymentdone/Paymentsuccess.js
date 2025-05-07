import React from 'react'
import './paymentsuccess.scss'

const Paymentsuccess = () => {
    return (
        <>
            <div className="successmain">
                
                <div className="successpaymentcard">
                    <h3 className='successtext'>Success</h3>

                    <img
                        className="img-fluid modalimg"
                        src="\assets\modalcnt.png"
                        alt=""
                    />
                    <p className='textsuccesss'>Package purchased successfully</p>
                    <h3 className='texttwoss'>Download & Login in the mobile app</h3>

                    <div className='successbtnss'>
                    <button className='btnsuccessdone' variant="secondary" >
                        Play store
                    </button>
                    <button className='btnsuccessdone' variant="primary">
                        App Store
                    </button>
                </div>
                </div>






             
        </div >
    </>
  )
}

export default Paymentsuccess