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
    let disposable = vscode.commands.registerCommand('cobol-sourceanalysisextention.sourceAnalysis', () => {
        let editor = vscode.window.activeTextEditor; // エディタ取得
        let fileName = editor === null || editor === void 0 ? void 0 : editor.document.fileName; // ファイル名称取得
        // var dir_home = process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"]; //OneDriveがパスに含まれる可能性があるため、削除
        // var dir_desktop = require("path").join(dir_home, "Desktop");
        const EXE_FILE = "C:\\ソース解析ツール\\ExecCobolAnalysis\\ExecCobolAnalysis.exe";
        child_process_1.exec(EXE_FILE + " " + fileName, (error, stdout, stderr) => {
            if (error)
                vscode.window.showErrorMessage("エラーが発生しました。詳細はログファイルをご確認ください。");
            else
                vscode.window.showInformationMessage("処理正常終了。");
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