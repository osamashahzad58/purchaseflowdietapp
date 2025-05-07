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
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 15" fill="none">
                                <path d="M0.464455 14.4596L7.19059 7.48282L0.47009 0.518555C0.290587 0.626981 0.179504 0.878028 0.179504 1.20664V13.7782C0.181912 14.1068 0.288977 14.3395 0.464455 14.4596V14.4596Z" fill="white" />
                                <path d="M7.43184 7.29261L9.43535 5.21417L1.27642 0.573555C1.13903 0.490753 0.982973 0.447017 0.824036 0.446777L7.43104 7.29177L7.43184 7.29261Z" fill="white" />
                                <path d="M7.43133 7.67773L0.803406 14.5528C0.96976 14.5556 1.13362 14.5106 1.27671 14.4226L9.45175 9.76952L7.43133 7.67773Z" fill="white" />
                                <path d="M12.3907 6.89774L9.67562 5.35059L7.61737 7.48574L9.69091 9.63423L12.3899 8.09125C12.9638 7.76348 12.9638 7.22385 12.3907 6.89774Z" fill="white" />
                            </svg>
                            Play store
                        </button>
                        <button className='btnsuccessdone' variant="primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
                                <path d="M9.78911 7.88887C9.77332 6.13378 11.2262 5.27992 11.2927 5.24017C10.4698 4.04052 9.19445 3.87661 8.74627 3.86354C7.67512 3.75082 6.63609 4.50448 6.09044 4.50448C5.5339 4.50448 4.69363 3.87443 3.78803 3.89295C2.62266 3.91092 1.53244 4.58562 0.934513 5.63334C-0.299468 7.76961 0.620845 10.909 1.80309 12.6357C2.39449 13.4814 3.08554 14.4257 3.99006 14.3925C4.87497 14.356 5.20552 13.8283 6.27341 13.8283C7.3315 13.8283 7.6419 14.3925 8.56439 14.3712C9.51411 14.356 10.112 13.5217 10.6827 12.6684C11.3662 11.6991 11.6406 10.7445 11.6515 10.6955C11.6292 10.6879 9.80708 9.99247 9.78911 7.88887Z" fill="white" />
                                <path d="M8.04668 2.72716C8.52263 2.13196 8.84828 1.32222 8.75788 0.500488C8.069 0.530983 7.2075 0.976971 6.71141 1.5591C6.27249 2.07206 5.8804 2.91285 5.98169 3.70354C6.75552 3.76126 7.55004 3.3131 8.04668 2.72716Z" fill="white" />
                            </svg>
                            App Store
                        </button>
                    </div>
                </div>







            </div >
        </>
    )
}

export default Paymentsuccess