import { Component } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./footer";
import '../../assets/style.css';


class Visitor extends Component{

    render(){
        return(
            <div>
                <Header />

                <Outlet />

                <Footer />
            
            </div>
        )
    }
}



export default Visitor;