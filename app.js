"use strict";

// To see if it's linked properly
// alert("AJJJJJJ")

// We are listening for the whole page to load, once the whole page has been loaded to the callback function
// Then we are getting the form 
window.addEventListener("load", () => {

    // Here we are selecting the form and storing it into a variable. Because it's an id we need that # in front
    // We are also selecting other elements.
    const form = document.querySelector("#add_a_task_form");
    const input = document.querySelector("#new_task_added");
    const list_element = document.querySelector("#tasks_container");

    // Here we are adding an event listener to form. (This comes from the variable we created above) The second parameter is a callback function 
    form.addEventListener("submit", e => {
        // The below stopes it from reloading the page when you submit a form 
        e.preventDefault();

        // Below we are creating a variable for whatever the user inputs 
        const task = input.value;

        if (!task) {
            alert("Please type a task to add.")
            return;
        } else {
            console.log(`Added task: ${task}`);
        }

        // Below we are telling it that we want to create a div element and store it in task_element, that task_element will then have the .task class added to it.
        const task_element = document.createElement("div");
        task_element.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("task_content");
        // This set the inner value to our child

        // In the below, we are saying to put the task_content_el div into the task_element div.
        task_element.appendChild(task_content_el);

        // In the below we are creating a variable and then creating an input.
        const task_input_element = document.createElement("input");

        // we take that input and add the task_text class to it, we make the type "text" and we set the value to the task that was inputed.
        // We also set it to read only
        task_input_element.classList.add("task_text")
        task_input_element.type = "text";
        task_input_element.value = task;
        task_input_element.setAttribute("readonly", "readonly")

        // Below were are making the task_input_element a child of task_content_el 
        task_content_el.appendChild(task_input_element);

        // We are creating another div for the action buttons 
        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("action_buttons");

        const task_edit_element = document.createElement("button");
        task_edit_element.classList.add("edit");
        task_edit_element.innerHTML = "Edit";

        const task_delete_element = document.createElement("button");
        task_delete_element.classList.add("delete");
        task_delete_element.innerHTML = "Delete";

        task_actions_el.appendChild(task_edit_element);
        task_actions_el.appendChild(task_delete_element);
        task_element.appendChild(task_actions_el)

        list_element.appendChild(task_element);

        input.value = "";

        // The is the start of the functionality for the edit button 
        // We have an event listener for the edit buttom to see if it's clicked
        task_edit_element.addEventListener("click", () => {

            //conditional, if it's clicked and the innertext is equal to edit then do the following - Set it to save 
            if (task_edit_element.innerText.toLowerCase() == "edit") {
                task_input_element.removeAttribute("readonly");
                task_input_element.focus();
                task_edit_element.innerText = "Save";
            } else {
                task_input_element.setAttribute("readonly", "readonly");
                task_edit_element.innerText = "Edit";
            }
        }

        )

    })
})