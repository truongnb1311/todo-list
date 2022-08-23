import React from "react"
import Footer from "../Footer"
import Header from "../Header"
import "./Layout.module.css"

function  Layout({ children} : { children: React.ReactNode}) {

    return (
      <>

        <Header />
       {children}   
        <Footer />

      </>
    )
  }
export default Layout