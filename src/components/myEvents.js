import React from "react";
import {Link} from "react-router-dom";

export default function MyEvents() {
    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <link
                    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                    rel="stylesheet"
                />

                <div className="event-schedule-area-two bg-color pad100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <div className="title-text">
                                        <h2>Event Schedule</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <ul
                                    className="nav custom-tab"
                                    id="myTab"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active show"
                                            id="home-taThursday"
                                            data-toggle="tab"
                                            href="#home"
                                            role="tab"
                                            aria-controls="home"
                                            aria-selected="true"
                                        >
                                            Upcoming Events
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="profile-tab"
                                            data-toggle="tab"
                                            href="#profile"
                                            role="tab"
                                            aria-controls="profile"
                                            aria-selected="false"
                                        >
                                            Past Events
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div
                                        className="tab-pane fade active show"
                                        id="home"
                                        role="tabpanel"
                                    >
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th
                                                            className="text-center"
                                                            scope="col"
                                                        >
                                                            Date and Time
                                                        </th>
                                                        <th scope="col">
                                                            Location
                                                        </th>
                                                        <th scope="col">
                                                            Title
                                                        </th>
                                                        <th
                                                            className="text-center"
                                                            scope="col"
                                                        >
                                                            Read More
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="inner-box">
                                                        <th scope="row">
                                                            <div className="event-date">
                                                                <span>16</span>
                                                                <p>Novembar</p>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            OAT
                                                        </td>
                                                        <td>
                                                                Antaragini
                                                        </td>
                                                        <td>
                                                            <div className="primary-btn">
                                                                <Link
                                                                    exact
                                                                    className="btn btn-primary"
                                                                    to = "/editevent"
                                                                >
                                                                    Read More
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="inner-box">
                                                        <th scope="row">
                                                            <div className="event-date">
                                                                <span>16</span>
                                                                <p>Novembar</p>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            OAT
                                                        </td>
                                                        <td>
                                                                Antaragini
                                                        </td>
                                                        <td>
                                                            <div className="primary-btn">
                                                                <a
                                                                    className="btn btn-primary"
                                                                    href="#"
                                                                >
                                                                    Read More
                                                                </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="primary-btn text-center">
                                    <a href="#" className="btn btn-primary">
                                        Download Schedule
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
