"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const child_process_1 = require("child_process");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "cobol-sourceanalysisextention" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('cobol-sourceanalysisextention.helloWorld', () => {
        let editor = vscode.window.activeTextEditor; // エディタ取得
        let fileName = editor === null || editor === void 0 ? void 0 : editor.document.fileName; // ファイル名称取得
        var dir_home = process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"];
        var dir_desktop = require("path").join(dir_home, "Desktop");
        const EXE_FILE = dir_desktop + "\\ソース解析ツール\\ExecCobolAnalysis\\ExecCobolAnalysis.exe";
        child_process_1.exec(EXE_FILE + " " + fileName, (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
        });
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map