import React from "react";
function RightsideBar() {
    return (
        <>
            <aside>
                <div>
                    <h3>Bootcamps</h3>

                    <div className="bootcamp-card">
                        <span className="bestseller">Bestseller</span>
                        <h4>Full Stack Development Course</h4>
                        <p>Start Date: <span className="highlight">Aug 09, 2025</span></p>
                        <p>Duration: <span className="highlight">4 Months</span></p>
                        <button className="view-btn">View Program</button>
                    </div>

                    <div className="bootcamp-card">
                        <span className="bestseller">Bestseller</span>
                        <h4>Digital Marketing Course</h4>
                        <p>Start Date: <span className="highlight">Aug 09, 2025</span></p>
                        <p>Duration: <span className="highlight">4 Months</span></p>
                        <button className="view-btn">View Program</button>
                    </div>
                </div>

                <div className="suggested-section">
                    <h3>Suggested Blogs</h3>
                    <p>More related articles will appear here.</p>
                </div>
            </aside>
        </>
    );
}
export default RightsideBar;