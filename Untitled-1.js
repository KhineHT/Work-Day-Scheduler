function updateTime() {
    let today = moment();

}
    $("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm.ss"));

    
    let now = moment().format("kk");
for (let i = 0; i < scheduleElArray.length; i++) {
    scheduleElArray[i].removeClass("future past present");

    function color(time) {
        return time.text === currentTime.text
            ? "bg-red-300"
            : time.hour < now
                ? "bg-gray-300"
                : "bg-green-200";
    }
    hoursOfTheDay.forEach((hr) => {
        const grid = $(
            `<form data-name="${hr.text}" class="grid grid-cols-12  border-gray-500 "></form>.`
        );

        const time = $(
            `<div class="flex items-center justify-center col-span-2 h-16">${hr.text}</div>`
        );

        const textArea = $(
            `<textarea name="${hr.text
            }" maxLength="50" style="resize: none; overflow: hidden;" class="col-span-8 h-16 p-6 ${color(
                hr
            )}">${store.getItem(hr.text) || ""}</textarea>`
        );
    });

    textArea.keydown((e) => {
        if (e.keyCode == 13 && !e.shiftKey) {
            e.preventDefault();
            return false;
        }
    });



    let saveBttn = $("#save-icon");
    let containerEl = $("#container");
    let schedule9am = $("#9AM");
    let schedule10am = $("#10AM");
    let schedule11am = $("#11AM");
    let schedule12pm = $("#12PM");
    let schedule1pm = $("#1PM");
    let schedule2pm = $("#2PM");
    let schedule3pm = $("#3PM");
    let schedule4pm = $("#4PM");
    let schedule5pm = $("#5PM");

    let scheduleElArray = [
        schedule9am,
        schedule10am,
        schedule11am,
        schedule12pm,
        schedule1pm,
        schedule2pm,
        schedule3pm,
        schedule4pm,
        schedule5pm,
    ];

    renderLastRegistered();
    updateTime();
    setInterval(updateTime, 1000);


    function renderLastRegistered() {
        for (let el of scheduleElArray) {
            el.val(localStorage.getItem("time block " + el.data("hour")));

        }
    }



    function handleFormSubmit(event) {
        event.preventDefault();

        let btnClicked = $(event.currentTarget);

        let targetText = btnClicked.siblings("textarea");
 
        let targetTimeBlock = targetText.data("hour");

        localStorage.setItem("time block " + targetTimeBlock, targetText.val());
    }

    saveBttn.on("click", handleFormSubmit);

}
