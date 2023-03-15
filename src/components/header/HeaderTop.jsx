import React from 'react'

const HeaderTop = (setToggle , toggle) => {
  return (
      <div className="header-top">
        <div onClick={() => setToggle(prev => !prev)} className="header-top-menu"> 
        {/* prev => !prev هاي يعني اذا التوقل كان فالس اعملو ترو واذا كان ترو اعملو فولس , صفر و واحد يعني*/}
        { toggle ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i> } 
        {/* جملة شرطية  */}
        </div>
        <div className="header-top-phone">
        <i className="bi bi-telephone-fill"></i> 
          +962781841055
        </div>
        <div className="header-top-text">
          Welcome To Online Book Store
        </div>
        <div className="header-top-link">
          <i className="bi bi-person-fill"></i>
          Login
        </div>
      </div>
  )
}

export default HeaderTop;
