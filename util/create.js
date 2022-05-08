const fs = require("fs");
const colours = require("./colours");
const templates = require("./templates");
// create a folder for the project name src
if (!fs.existsSync("./src/components")) {
  fs.mkdirSync("./src/components", { recursive: false });
  console.log(colours.fg.green, "src created");
}

//get file name from console
let name = process.argv[2];
if (!name) {
    console.error(colours.fg.red,"Please supply a valid component name");
    process.exit(1);
  }
  console.log("Creating Component Templates with name: " + name);
// name the file with js extension
const componentDirectory = `./src/components/${name}`;


if (fs.existsSync(componentDirectory)) {
    console.error(colours.fg.red,`Component ${name} already exists.`);
    process.exit(1);
  }
// create the directory
  fs.mkdirSync(componentDirectory);


const generatedTemplates = templates.map((template) => template(name));
generatedTemplates.forEach((template) => {
  fs.writeFileSync(
    `${componentDirectory}/${name}${template.extension}`,
    template.content
  );
});

console.log(colours.fg.green,"Successfully created component under: " + componentDirectory);

