(function($){
  const username = "mbazanlp.community@gmail.com";
  const key = "AIzaSyBxDGuEdlEgMyPbyjNjymNwI10vSdByrhs";
  const limit = 4;
  function injectCalendarEvents(title, uri, location, start, end, time) {
      return `
            <li>
              <div class="post d-sm-flex align-items-center mb-20">
                <div class="post__img mr-20">
                  <!-- <img src="assets/img/blog/14.jpg" alt="" /> -->
                </div>
                <div class="post__text">
                  <h4><a href="${uri}">${start}</a></h4>
                  <span class='h6 text-dark'><i class='far fa-rocket' aria-hidden='true'></i> <b>${title}</b></span><br/>
                  <span class='ml-3'><i class="far fa-map-marker-alt"></i> ${location}</span> <br />
                  <span class='ml-3'><i class="far fa-calendar-alt"></i> ${end}</span> <br />
                  <span class='ml-3'><i class="far fa-watch"></i> ${time}</span>
                </div>
              </div>
            </li>
          `;
    }
    function getDate(time) {
      return time === undefined ? "" : time.split("T")[0];
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
    function checkDateOrDateTime(item){
      if(item.date!==undefined){
        return item.date;
      }else if(item.dateTime){
        return item.dateTime;
      }else{
        return undefined;
      }
    }
    function getMonthName(n){
      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      return months[n-1];
    }
    function getDateAdd(n){
      var dates = ['st','nd','rd','th','th','th','th','th','th','th','th','th','th','th','th','th','th','th','th','th','st','nd','rd','th','th','th','th','th','th','th','st'];
      return n+dates[n-1];
    }
    function formatDate(text){
      var t = text.split('-');
      var formattedDate = getMonthName(parseInt(t[1]))+' '+getDateAdd(parseInt(t[2]))+', '+t[0]; 
      return formattedDate;
    }
    $(window).on('load',async function () {
      
      $.ajax({
        url:
          "https://www.googleapis.com/calendar/v3/calendars/" +
          username +
          "/events?key=" +
          key 
          +
          "&singleEvents=true&orderBy=startTime"
          // + '&timeMin='+
          // getTodayDate() +
          // "T00:00:00.000Z"
          ,
        success: await function (data) {
          var calendarUl = document.getElementById("calendar-post-list");
          let htmlCode = ``;
          function compareDates(date){
            var dateSplit = date.split('-');
            var currentSplit = getDate(getTodayDate()).split('-');
            if(new Date(dateSplit[0],dateSplit[1],dateSplit[2])>=new Date(currentSplit[0],currentSplit[1],currentSplit[2])){
              return true;
            }else{
              return false;
            }
          }
          function fromPresent(data) {
            const last = data.length - 1;
            if(data[last].start.dateTime>=getTodayDate()){
              return true;
            }
            return false;
          }
          var temp = [];
          if(compareDates(getDate(checkDateOrDateTime(data.items[data.items.length-1].start)))===true){
            data.items.forEach(function(item){
              if(compareDates(getDate(checkDateOrDateTime(item.start)))===true){
                temp.push(item);
              }
            });
          }else{
            temp = data.items.slice(-limit);
          }
          for(var i=0;i<temp.length;i++){
            var item = temp[i];
            var dat = "";
            if(i>0){
              var compare = getDate(checkDateOrDateTime(item.start)).localeCompare(getDate(checkDateOrDateTime(temp[i-1].start)));
              if(compare!==0){
                dat = formatDate(getDate(checkDateOrDateTime(item.start)));
              }else{
                dat = "";
              }
            }else{
              dat = formatDate(getDate(checkDateOrDateTime(item.start)));
            }
            item.summary === undefined
            ? ""
            : (htmlCode =
                htmlCode +
                injectCalendarEvents(
                  item.summary,
                  undefinedCase(item.htmlLink),
                  undefinedCase(item.location),
                  dat,
                  checkDateOrDateTime(item.start) === undefined
                    ? "<i>Pending</i>"
                    : formatDate(getDate(checkDateOrDateTime(item.start))) +
                        " to " +
                        formatDate(getDate(checkDateOrDateTime(item.start))),
                  getTime(item.start.dateTime) +
                    " " +
                    undefinedCase(item.start.timeZone)
                ));
          }
          
          calendarUl.innerHTML = htmlCode;
          
        },
        error: function (err) {
          console.log(err);
        },
      });
    });
})(jQuery);