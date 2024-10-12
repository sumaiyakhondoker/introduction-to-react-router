import {Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);
    return (
        <div>
          
            <h2>Oops!! <br />{error.status}</h2>
            <p><i>
                {error.statusText || error.message}
            </i></p>
            {
                error.status === 404 && <div>
                    <p>Go back where you from.</p>
                    <Link to= '/'><button>Home</button></Link>

                </div>
            }
        </div>
    );
};

export default ErrorPage;