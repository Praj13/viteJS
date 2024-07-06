import React, {useEffect} from 'react'

const Navbar = (props) => {
  // Example of Cleanup function, runs if the navbar is removed.
  useEffect(() => {
    alert("Hey welcome to my page. This is the first render of app.jsx")

    return () => {
      alert("component was unmounted")
    }
  }, [])

  
 
  
   
  return (
    <div>
      <nav>
        Its a nav bar of color {props.color}
      </nav>
    </div>
  )
}

export default Navbar
