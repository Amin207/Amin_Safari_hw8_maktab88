const headTag = document.getElementsByTagName("head");
const scriptTag = document.getElementById("mainScript");

// Implementation of style tag

const styleTag = document.createElement("style");
headTag[0].appendChild(styleTag);
styleTag.innerHTML += `
* {
  padding: 0;
  margin: 0;
}
html {
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#mainDiv {
  width: 350px;
  height: 300px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
}
#tasksHeader {
  color: red;
  padding: 25px 30px;
}
#tasksList {
  padding: 0px 45px;
}
#tasksInput {
  display: flex;
  padding: 15px 30px;
}
`;

// Implementation of mainDiv tag

const mainDiv = document.createElement("div");
mainDiv.id = "mainDiv";
scriptTag.before(mainDiv);

// Within mainDiv

//// Tasks Header
const tasksHeader = document.createElement("h1");
tasksHeader.id = "tasksHeader";
tasksHeader.innerHTML = "My Tasks";

//// Tasks List
const tasksList = document.createElement("div");
tasksList.id = "tasksList";

const tasksListItems = [
  { type: "item", model: "normal", prefix: "I", text: "user dashboard" },
  { type: "item", model: "normal", prefix: "II", text: "admin dashboard" },
  { type: "item", model: "normal", prefix: "III", text: "authentication" },
  {
    type: "sub_item",
    items: [
      { text: "login", model: "normal" },
      { text: "register", model: "strike_through" },
      { text: "logout", model: "normal" },
    ],
  },
  { type: "item", prefix: "IV", model: "normal", text: "about page" },
  {
    type: "item",
    prefix: "V",
    model: "strike_through",
    text: "content page",
  },
];

////// Tasks List Table
const tasksListTable = document.createElement("table");

tasksListItems.forEach((item) => {
  const listItemTableRow = document.createElement("tr");
  const listItemNumber = document.createElement("td");
  const listItemText = document.createElement("td");

  if (item["type"] === "item") {
    listItemNumber.innerHTML = item["prefix"] + ".";
    listItemNumber.style = "text-align: end;";
    listItemText.innerHTML = item["text"];

    if (item["model"] === "strike_through")
      listItemText.style = "text-decoration: line-through";

    listItemTableRow.appendChild(listItemNumber);
    listItemTableRow.appendChild(listItemText);
  }
  if (item["type"] === "sub_item") {
    const listItemUL = document.createElement("ul");
    listItemUL.style = "list-style-position: inside; list-style-type: circle;";

    item["items"].forEach((subItem) => {
      const listItemLI = document.createElement("li");
      listItemLI.innerHTML = subItem["text"];
      if (subItem["model"] === "strike_through")
        listItemLI.style = "text-decoration: line-through;";

      listItemText.style = "padding-left: 25px;";

      listItemUL.appendChild(listItemLI);
      listItemText.appendChild(listItemUL);
    });

    listItemTableRow.appendChild(listItemNumber);
    listItemTableRow.appendChild(listItemText);
  }

  tasksListTable.appendChild(listItemTableRow);
});

tasksList.appendChild(tasksListTable);

// Tasks input
const tasksInput = document.createElement("div");
tasksInput.id = "tasksInput";

const input = document.createElement("input");
const button = document.createElement("button");
button.innerHTML = "add task";
button.style = "padding: 0 5px; margin-left: 5px;";

tasksInput.appendChild(input);
tasksInput.appendChild(button);

// Final injection of child nodes to mainDiv

const appendRequeries = ["tasksHeader", "tasksList", "tasksInput"];
const appendObject = {
  tasksHeader: tasksHeader,
  tasksList: tasksList,
  tasksInput: tasksInput,
};

appendRequeries.forEach((t) => {
  mainDiv.appendChild(appendObject[t]);
});

console.log(headTag);
console.log(headTag[0].innerHTML);
