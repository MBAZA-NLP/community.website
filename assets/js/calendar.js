(function($){
  function injectCalendarEvents(title, uri, location, date, time) {
      return `
            <li>
              <div class="post d-sm-flex align-items-center mb-20">
                <div class="post__img mr-20">
                  <!-- <img src="assets/img/blog/14.jpg" alt="" /> -->
                </div>
                <div class="post__text">
                  <h5><a href="${uri}">${title}</a></h5>
                  <span><i class="far fa-map-marker-alt"></i> ${location}</span> <br />
                  <span><i class="far fa-calendar-alt"></i> ${date}</span> <br />
                  <span><i class="far fa-watch"></i> ${time}</span>
                </div>
              </div>
            </li>
          `;
    }
    function getDate(time) {
      return time === undefined ? "" : "<b>" + time.split("T")[0] + "</b>";
    }
    function getTime(time) {
      return time === undefined ? "" : time.split("T")[1];
    }
    function undefinedCase(text) {
      return text === undefined ? "" : text;
    }
    function getTodayDate() {
      var date = new Date();
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }
    $(window).on('load',async function () {
      const username = "";
      const key = "";
      $.ajax({
        url:
          "https://www.googleapis.com/calendar/v3/calendars/" +
          username +
          "/events?key=" +
          key +
          "&singleEvents=true&orderBy=startTime&timeMin=" +
          getTodayDate() +
          "T00:00:00.000Z",
        success: await function (data) {
          var calendarUl = document.getElementById("calendar-post-list");
          let htmlCode = ``;
          data.items.forEach(function (item) {
            item.summary === undefined
              ? ""
              : (htmlCode =
                  htmlCode +
                  injectCalendarEvents(
                    item.summary,
                    undefinedCase(item.htmlLink),
                    undefinedCase(item.location),
                    item.start.dateTime === undefined
                      ? "<i>Pending</i>"
                      : getDate(item.start.dateTime) +
                          " to " +
                          getDate(item.end.dateTime),
                    getTime(item.start.dateTime) +
                      " " +
                      undefinedCase(item.start.timeZone)
                  ));
              });
          calendarUl.innerHTML = htmlCode;
        },
        error: function (err) {
          console.log(err);
        },
      });
    });
})(jQuery);