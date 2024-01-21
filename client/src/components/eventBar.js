import React, { useEffect, useState } from "react";
import $ from "jquery";
import handledarkmode from "./handledarkmode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Eventbar = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);
  useEffect(() => {
    handledarkmode();
    fetch("/event-forms") // Change the URL to match your API endpoint
      .then((response) => response.json())
      .then((data) => {
        const reversedData = data.reverse();
        setEvents(reversedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setLoading(false);
      });

    /* Totally unnecessary swiping gestures*/
    var gestureZone = document;
    var touchstartX = 0,
      touchstartY = 0;
    gestureZone.addEventListener(
      "touchstart",
      function (event) {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
      },
      false
    );

    gestureZone.addEventListener(
      "touchend",
      function (event) {
        var touchendX = event.changedTouches[0].screenX;
        var touchendY = event.changedTouches[0].screenY;
        handleGesture(touchendX, touchendY);
      },
      false
    );

    function handleGesture(touchendX, touchendY) {
      var acceptableYTravel =
        touchendY - touchstartY < 15 && touchendY - touchstartY > -15;

      var swiped = "swiped: ";
      if (touchendX < touchstartX && acceptableYTravel) {
        openSidebar();
        console.log(swiped + "left!");
      }
      if (touchendX > touchstartX && acceptableYTravel) {
        closeSidebar();
        console.log(swiped + "right!");
      }
    }
    function openSidebar() {
      $("#event-sidebar").addClass("move-to-left");
      $("#event-sidebar-tab").addClass("move-to-left");
      $(".arrow").addClass("active");
    }
    function closeSidebar() {
      $("#event-sidebar").removeClass("move-to-left");

      $("#event-sidebar-tab").removeClass("move-to-left");
      $(".arrow").removeClass("active");
    }
    /* End of totally unnecessary swiping gestures*/
  }, []);
  useEffect(() => {
    // Filter events based on searchInput
    const filtered = events.filter(
      (event) =>
        event.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        event.description.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredEvents(filtered);
  }, [searchInput, events]);
  function formatTimestamp(eventTimestamp) {
    const eventDate = new Date(eventTimestamp);
    const currentDate = new Date();

    const timeDiff = currentDate - eventDate;

    if (timeDiff < 60 * 1000) {
      // Less than 1 minute
      return `${Math.floor(timeDiff / 1000)} seconds ago`;
    } else if (timeDiff < 60 * 60 * 1000) {
      // Less than 1 hour
      return `${Math.floor(timeDiff / (60 * 1000))} minutes ago`;
    } else if (timeDiff < 24 * 60 * 60 * 1000) {
      // Less than 24 hours
      return `${Math.floor(timeDiff / (60 * 60 * 1000))} hours ago`;
    } else if (eventDate.toDateString() === currentDate.toDateString()) {
      return "Today";
    } else if (
      eventDate.toDateString() ===
      new Date(currentDate - 24 * 60 * 60 * 1000).toDateString()
    ) {
      return "Yesterday";
    } else {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return eventDate.toLocaleDateString("en-US", options);
    }
  }

  function toggleSidebar() {
    $("#event-sidebar").toggleClass("move-to-left");
    $("#event-sidebar-tab").toggleClass("move-to-left");

    $(".arrow").toggleClass("active");
  }

  return (
    <>
      {loading ? (
        <div className="spinner">
          {/* Use a loading spinner here */}
          <div className="spinner-icon"></div>
        </div>
      ) : (
        <>
          <div className="event-sidebar-tab" id="event-sidebar-tab">
            <div
              className=" text-center announcement-icon"
              id="sidebar-tab-text"
              
            >
              <div className="announcement-icon">
                <FontAwesomeIcon icon={faBullhorn}  onClick={toggleSidebar} />
              </div>
            </div>
          </div>

          <div
            className="event-sidebar"
            id="event-sidebar"
            style={{
              height: "100vh",
              maxHeight: "100vh",
              overflowY: "auto",
            }}
          >
            <div className="container-liner">
              <div className="event-container">
                <div className="column">
                  <form className="event-searchbar">
                    <input
                      type="text"
                      name="search_box"
                      required
                      placeholder="Search Event"
                      maxLength="100"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button type="submit" className="fa fa-search "></button>
                  </form>
                  <h2 className="demo-title">Upcoming Events 🔥</h2>
                  {filteredEvents.length === 0 ? (
                    <p className="event-nofound">No events found.</p>
                  ) : (
                    filteredEvents.map((event) => (
                      <>
                        <div className="post-module">
                          <div className="thumbnail">
                            <div className="date">
                              <div className="day">
                                {new Date(event.date).getDate()}
                              </div>
                              <div className="month">
                                {" "}
                                {new Intl.DateTimeFormat("en-US", {
                                  month: "short",
                                }).format(new Date(event.date))}
                              </div>
                            </div>
                            <img
                              src={
                                event?.profilePic ||
                                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"
                              }
                              alt="City Lights in New York"
                            />
                          </div>

                          <div className="post-content">
                            <h1 className="title">{event.title}</h1>
                            <h2 className="sub_title">{event.description}</h2>
                            {/* <p className="description">
                          New York, the largest city in the U.S., is an
                          architectural marvel with plenty of historic
                          monuments, magnificent buildings and countless
                          dazzling skyscrapers.
                        </p> */}
                            <div className="post-meta">
                              <span className="timestamp">
                                <i className="fa fa-clock-o"></i>
                                {formatTimestamp(event.timestamp)}
                              </span>
                              <Link to={event.link} target="_blank">
                                <button className="eventbtn">
                                  <span>Read More</span>
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <br />
                        <br />
                      </>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Eventbar;
