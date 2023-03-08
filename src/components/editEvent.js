import React from "react";
import {Link} from "react-router-dom";


export default function EditEvent() {
    return (
        <>
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="container my-4">
                    <div className="primary-btn">
                        <Link exact className="btn btn-primary" to="/myevents">
                            Go Back
                        </Link>
                    </div>
                    <fieldset>
                        <form className="row g-3">
                            <div className="col-md-6">
                                <label
                                    htmlFor="inputEmail4"
                                    className="form-label"
                                >
                                    Name of Event
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputEmail4"
                                />
                            </div>
                            <div className="col-md-6">
                                <label
                                    htmlFor="inputPassword4"
                                    className="form-label"
                                >
                                    Location
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputPassword4"
                                />
                            </div>
                            <div className="col-md-6">
                                <label
                                    htmlFor="inputEmail4"
                                    className="form-label"
                                >
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="inputEmail4"
                                />
                            </div>
                            <div className="col-md-6">
                                <label
                                    htmlFor="inputPassword4"
                                    className="form-label"
                                >
                                    Start Time
                                </label>
                                <input
                                    type="time"
                                    className="form-control"
                                    id="inputPassword4"
                                />
                            </div>
                            <div className="col-md-6">
                                <label
                                    htmlFor="inputEmail4"
                                    className="form-label"
                                >
                                    End Date
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="inputEmail4"
                                />
                            </div>
                            <div className="col-md-6">
                                <label
                                    htmlFor="inputPassword4"
                                    className="form-label"
                                >
                                    End Time
                                </label>
                                <input
                                    type="time"
                                    className="form-control"
                                    id="inputPassword4"
                                />
                            </div>
                            <div class="mb-3">
                                <label
                                    for="exampleFormControlTextarea1"
                                    class="form-label"
                                >
                                    Description
                                </label>
                                <textarea
                                    class="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                ></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="formFile" class="form-label">
                                    Add file (optional)
                                </label>
                                <input
                                    class="form-control"
                                    type="file"
                                    id="formFile"
                                />
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="gridCheck"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="gridCheck"
                                    >
                                        Request as special event
                                    </label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Add Event
                                </button>
                            </div>
                        </form>
                    </fieldset>
                </div>
            </main>
        </>
    );
}
