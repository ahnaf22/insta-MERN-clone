import React from 'react';
import '../../styles/profile.css';
function Profile() {
    return (
        <div className="profile">
            {/* profile div */}
            <div className="info-div-wrapper">
                <div className="profile-image">
                    <img src="https://images.unsplash.com/photo-1490119551293-c52fcfd96381?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="profile-img" style={{ width: "160px", height: "160px", borderRadius: "80px" }} />
                </div>
                <div className="profile-details">
                    <h4>Mr Stranger</h4>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: "108%" }}>
                        <h6>40 posts</h6>
                        <h6>50 followers</h6>
                        <h6>20 following</h6>
                    </div>
                </div>
            </div>
            {/* Gallery div */}
            <div className="gallery">
                <img className="gallery-item" src="https://images.unsplash.com/photo-1490119551293-c52fcfd96381?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="gallery-item" />
                <img className="gallery-item" src="https://images.unsplash.com/photo-1490119551293-c52fcfd96381?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="gallery-item" />
                <img className="gallery-item" src="https://images.unsplash.com/photo-1490119551293-c52fcfd96381?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="gallery-item" />
                <img className="gallery-item" src="https://images.unsplash.com/photo-1490119551293-c52fcfd96381?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="gallery-item" />
                <img className="gallery-item" src="https://images.unsplash.com/photo-1490119551293-c52fcfd96381?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="gallery-item" />
            </div>
        </div>
    )
}

export default Profile;
