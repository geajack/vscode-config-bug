const vscode = require("vscode");

module.exports = {
    activate,
    deactivate,
};

function activate(context)
{
    let configuration = vscode.workspace.getConfiguration("example");
    let value = configuration.get("value", "default");
    console.log(value);
    console.log(typeof value);
}

function deactivate() { }