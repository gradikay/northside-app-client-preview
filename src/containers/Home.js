// This file is exported to ---> src/Routes.js
// React required
import React, { useState, useEffect } from "react"; 
// Getting - user status (user login - true or false) - from useAppContext
import { useAppContext } from "../libs/contextLib"; 
// Dummy Images 
import img5 from "../img/img1.jpg";
// CSS
import "../css/Home.css";
// Dummy data
import { data as dummyPosts } from "../DummyData/data";
// -------------- Application Begins Bellow ------------ //

// Main Application
export default function Home() { 

    // Important variables
    const [search, setSearch] = useState("");
    const { isAuthenticated } = useAppContext();
    const [isLoading, setIsLoading] = useState(false);  

    // Handling search
    async function handleSearch(event) {
        event.preventDefault();

        try {
            // if there is no data return "all" data
            window.location.href = `/filter/${search === "" ? "all" : search.toLowerCase()}`;

        } catch (e) {
            alert(e);
        }
    }

    // Retreiving data from database
    useEffect(() => {

        // Cleanup variable
        let unmounted = false;

        async function onLoad() {

            setIsLoading(true);

            try {
                 

                if (!unmounted) {  
                }
                setIsLoading(false);

            } catch (e) {
                alert(e);
                setIsLoading(false);
            }
        }

        // Returning onLoad Function
        onLoad();

        // Avoid data leaks by cleaning up useEffect : unmounted
        return () => {
            unmounted = true; 
        };

    }, [isAuthenticated]);  

    // Return UI
    return (
        <main id="Home" className="border-bottom"> 

            <Header handleSearch={handleSearch} setSearch={setSearch} search={search} />

            <SectionA />

            <SectionB />

            <SectionC/>
            
        </main>
        );
}

// Header & Search field block
function Header(props) {

    // Important variables
    const { handleSearch, setSearch, search } = props;

    // Return UI
    return (

        <header id="Header" className="container-fluid row m-0 p-0" style={{ backgroundImage: `url(${img5})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionY: "center", backgroundPositionX: "center", height: "calc(100vh - 100px)", backgroundAttachment: "fixed" }}> 

            {/* Div - Start */}
            <div className="col-sm-6 align-self-center mx-auto text-center text-white py-5">

                <h1> Retail and ECommerce Application </h1>

                <p>Built to get you where you need to be.</p>

                <button type="button" className="btn btn-light mb-5">Men</button>
                <button type="button" className="btn btn-warning ml-3 mb-5">Women</button>
                <button type="button" className="btn btn-light ml-3 mb-5">Kids</button>


                { /* Search field block - Start */}
                <Search handleSearch={handleSearch} setSearch={setSearch} search={search} />
                { /* Search field block - End */}

            </div>
            {/* Div - End */} 

        </header>
        );
}

// Search field
function Search(props) {

    // Important variables
    const { handleSearch, setSearch, search } = props;

    // Return UI
    return (
        <div className="display-large nav-item">

            { /* Form - Start */}
            <form onSubmit={handleSearch}>
                <div className="input-group input-group-lg">

                    { /* Input - Start */}
                    <input
                        id="search"
                        type="search"
                        name="search"
                        value={search}
                        placeholder="search"
                        className="form-control"
                        onChange={e => setSearch(e.target.value)}
                    />
                    { /* Input - End */}

                    { /* Button - Start */}
                    <div className="input-group-append">

                        <button className="btn btn-warning" type="submit">
                           <i className='fa fa-search' role="img" aria-label="search"></i>
                        </button>

                    </div>
                    { /* Button - End */}

                </div>
            </form>
            { /* Form - End */}

        </div>
    );
}

// Other sections
function SectionA() {

    // Return UI
    return (
        <section id="SectionA" className="container-fluid row py-5 border-bottom bg-white m-0">

            {/* Heading - Start */}
            <div className="col-sm-4 align-self-center">
                <h2><small>INTRODUCING</small></h2>
                <h3 style={{ fontSize:"3.2rem" }}>NORTHSIDE</h3>
                <h2><small>BUILD SERVERLESS APPLICATION ON THE GO!</small></h2>
                <button type="button" className="btn btn-outline-dark rounded-0 mt-4">HERE NOW</button>

            </div>
            {/* Heading - End */}

            {/* Image - End */}
            <div className="col-sm-6 align-self-center py-5">
                <img className="rounded shadow-lg" src={img5} />
            </div>
            {/* Image - End */}

        </section>
        );
}

function SectionB() {
    return (
        <section id="SectionB" className="container-fluid row border-top m-0 pb-5">
            <header className="col-sm-12 my-5">
                <h2> New Arrivals</h2>
            </header>

            {/* Dummy Posts - Start */}
            {
                dummyPosts.map((post, i) => {


                    // Important variables
                    const { imageA } = post.images;
                    const { postState } = post.address;
                    const { postId, userId, postStatus, postTitle } = post;
                    const convertDate = new Date(post.createdAt);
                    const postedOn = convertDate.toDateString();
                    const price = Number(post.postPrice).toLocaleString();


                    // Return UI
                    return (
                        <div className="col-sm-6 col-md-4 col-lg-3 p-2" key={i++}>

                            <a href={ `/view/${postId}`}>
                                <div className="card text-center shadow-sm h-100">
                                    <img className="card-img-top p-3" src={imageA} alt={`Home ${imageA}`} />
                                    <div className="card-img-overlay">
                                        <div className="overlay-top">
                                            <span className="badge badge-light border rounded float-left px-2 m-2"> -25% </span>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p className="m-0" >
                                            <i className="fa fa-star-o" role="img" aria-label="star"></i>
                                            <i className="fa fa-star-o" role="img" aria-label="star"></i>
                                            <i className="fa fa-star-o" role="img" aria-label="star"></i>
                                            <i className="fa fa-star-o" role="img" aria-label="star"></i>
                                            <i className="fa fa-star-half-full" role="img" aria-label="star"></i>
                                        </p>
                                        <p className="m-0" style={{ fontSize: "1.3rem" }}><small>{postTitle}</small></p>
                                        <p>
                                            <b className="text-danger"> $3,550 </b>
                                            <del className="text-secondary"> $4,988 </del>
                                        </p>
                                    </div>
                                </div>
                            </a>

                        </div>
                    );
                })
            }
            {/* Dummy Posts - End */}
        </section>
    );
}

function SectionC() {
    return (
        <section id="SectionC" className="container-fluid border-top row bg-white m-0" >

            {/* Background Image - Start */}
            <div className="col-sm-5 mx-5" style={{ backgroundImage: `url(${img5})`, height: "calc(100vh)", backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPositionY: "center" , backgroundPositionX: "center" }}>
            </div>
            {/* Background Image - End */}

            {/* Description - Start */}
            <div className="col-sm-5 align-self-center">
                <h2><small>INTRODUCING</small></h2>
                <h3 style={{ fontSize: "3.2rem" }}>NORTHSIDE</h3>
                <h2><small>UNLISH YOUR CREATIVITY AND BUILD APPLICATION FAST</small></h2>
                <button type="button" className="btn btn-outline-dark rounded-0 mt-4">NOW HERE</button>

            </div>
            {/* Description - End */}

        </section>
        );
}