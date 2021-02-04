import formFocus from "../helpers/formFocus";
import flatpickr from "flatpickr";
import "../../../../../node_modules/flatpickr/dist/flatpickr.min.css";

const reservationForm = function() {
    // reservation form
    const form = document.createElement("form");
    form.id = "reservation-form";

    // table size form group
    const formGroupTableSize = document.createElement("div");
    formGroupTableSize.classList.add("form-group");
    form.append(formGroupTableSize);
    // label
    const formGroupTableSizeLabel = document.createElement("label");
    formGroupTableSizeLabel.classList.add("control-label");
    formGroupTableSizeLabel.setAttribute("name", "table-size");
    formGroupTableSizeLabel.innerHTML = "Table Size";
    formGroupTableSize.append(formGroupTableSizeLabel);
    // select
    const formGroupTableSizeSelect = document.createElement("select");
    formGroupTableSizeSelect.id = "table-size";
    formGroupTableSizeSelect.classList.add("form-control");
    formGroupTableSizeSelect.setAttribute("name", "table-size");
    formGroupTableSize.append(formGroupTableSizeSelect);
    // select options
    for (let i = 1; i <= 14; i++) {
        const tableSelectOption = document.createElement("option");
        tableSelectOption.value = [i];
        if (i === 1) {
            tableSelectOption.innerHTML = `${[i]} Person`;
        } else {
            if (i === 2) {
                tableSelectOption.setAttribute("selected", "true");
            }
            tableSelectOption.innerHTML = `${[i]} People`;
        }
        formGroupTableSizeSelect.append(tableSelectOption);
    }

    // date form group
    const formGroupDate = document.createElement("div");
    formGroupDate.classList.add("form-group");
    form.append(formGroupDate);
    // label
    const formGroupDateLabel = document.createElement("label");
    formGroupDateLabel.classList.add("control-label");
    formGroupDateLabel.setAttribute("name", "date");
    formGroupDateLabel.innerHTML = "Date";
    formGroupDate.append(formGroupDateLabel);
    // input
    const formGroupDateInput = document.createElement("input");
    formGroupDateInput.id = "date";
    formGroupDateInput.classList.add("form-control");
    formGroupDateInput.setAttribute("name", "date");
    formGroupDateInput.setAttribute("type", "text");
    formGroupDate.append(formGroupDateInput);

    // time form group
    const formGroupTime = document.createElement("div");
    formGroupTime.classList.add("form-group");
    form.append(formGroupTime);
    // label
    const formGroupTimeLabel = document.createElement("label");
    formGroupTimeLabel.classList.add("control-label");
    formGroupTimeLabel.setAttribute("name", "time");
    formGroupTimeLabel.innerHTML = "Time";
    formGroupTime.append(formGroupTimeLabel);
    // select
    const formGroupTimeSelect = document.createElement("select");
    formGroupTimeSelect.id = "time";
    formGroupTimeSelect.classList.add("form-control");
    formGroupTimeSelect.setAttribute("name", "time");
    formGroupTime.append(formGroupTimeSelect);
    // select options
    const availableTimes = [
        {
            time: "12:30 PM",
            value: "12:30"
        },
        {
            time: "1:00 PM",
            value: "13:00"
        },
        {
            time: "2:00 PM",
            value: "14:00"
        },
        {
            time: "2:30 PM",
            value: "14:30"
        },
        {
            time: "3:00 PM",
            value: "15:00"
        },
        {
            time: "6:30 PM",
            value: "18:30"
        },
        {
            time: "7:30 PM",
            value: "19:30"
        },
        {
            time: "8:30 PM",
            value: "20:30"
        },
        {
            time: "9:00 PM",
            value: "21:00"
        }
    ];
    for (let i = 0; i < availableTimes.length; i++) {
        const tableSelectOption = document.createElement("option");
        tableSelectOption.value = availableTimes[i].value;
        tableSelectOption.innerHTML = availableTimes[i].time;
        formGroupTimeSelect.append(tableSelectOption);
    }

    // form submit button
    const formSubmitButton = document.createElement("button");
    formSubmitButton.classList.add("btn", "btn-solid");
    formSubmitButton.setAttribute("type", "submit");
    formSubmitButton.innerHTML = "<span>Send</span>";
    form.append(formSubmitButton);

    // flatpickr
    flatpickr(formGroupDateInput, {
        dateFormat: "Y-m-d",
        altInput: true,
        altFormat: "d M, Y",
        defaultDate: new Date(),
        minDate: new Date(),
        disableMobile: true
    });

    // form focus
    formFocus(form);


    return form;
};

export default reservationForm;