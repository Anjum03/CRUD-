import React from "react";


const Home = () => {
    return (
        <div className="mt-5">
            <div className="container">
                <div className="add_btn mt-2 mb-2">
                    <button className="btn btn-primary">Add Data</button>
                </div>

                <table class="table">
                    <thead  >
                        <tr className="table-dark">
                            <th scope="col">id</th>
                            <th scope="col">name</th>
                            <th scope="col">email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ayaan Ansari</td>
                            <td>ayaanansari23@gmail.com</td>
                            <td className="d-flex justify-content-between">
                                <button className="btn btn-primary">Read </button>
                                <button className="btn btn-success">Update</button>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>

        </div>
    )
}


export default Home;
