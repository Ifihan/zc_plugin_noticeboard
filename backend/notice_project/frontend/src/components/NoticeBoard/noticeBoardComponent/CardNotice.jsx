import React from "react";
import viewIcon from "../../../assets/Seen.svg";
import Button from "@material-ui/core/Button";
import UserMenu from "./UserMenu/UserMenu";
import moment from "moment";
import imgPlaceholder from "../../../assets/noticePlaceholderImage.svg";

const CardNotice = ({
  notice,
  bookmarkDetails,
  toggleBookmark,
  setToggleBookmark,
}) => {
  const id = String(notice._id);

  const OpenModal = (event) => {
    const clickedButton = event.currentTarget.getAttribute("id");
    const modal_id = `modal_${clickedButton}`;
    document.getElementById(modal_id).style.display = "block";
  };

  return (
    <div className="user-notice-card">
      <div className="card-top">
        <div className="avatar-grp">
          <div className="avatar">
            <img
              alt="img"
              src={
                notice.author_img_url !== "null"
                  ? notice.author_img_url
                  : "https://images.unsplash.com/photo-1582233479366-6d38bc390a08?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              }
            />
          </div>

          <div className="avatar-info">
            <div className="avatar-name">{notice.author_username}</div>

            <div className="time-stamp">{moment(notice.created).fromNow()}</div>
          </div>
        </div>
        <div className="info-icon">
          <UserMenu
            noticeID={notice._id}
            bookmarkDetails={bookmarkDetails}
            setToggleBookmark={setToggleBookmark}
            toggleBookmark={toggleBookmark}
          />
        </div>
      </div>
      <div className="card-body">
        <div className="notice-title">{notice.title}</div>
        <div className="notice-message">
          {notice.message.substring(0, 100)}...
        </div>
      </div>

      <div className="card-buttons-grp">
        <div className="view-icon-grp">
          <div>
            <img src={viewIcon} alt="" />
          </div>

          <div className="views-num">30</div>
        </div>

        <div>
          <Button
            className="view-btn MuiButtonBase-root"
            id={id}
            variant="outlined"
            onClick={(event) => OpenModal(event)}
          >
            View notice
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardNotice;
