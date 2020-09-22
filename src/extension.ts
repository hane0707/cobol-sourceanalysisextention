// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { exec } from 'child_process';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('cobol-sourceanalysisextention.sourceAnalysis', () => {
		let editor = vscode.window.activeTextEditor; // エディタ取得
		let fileName = editor?.document.fileName; // ファイル名称取得

		// var dir_home = process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"]; //OneDriveがパスに含まれる可能性があるため、削除
		// var dir_desktop = require("path").join(dir_home, "Desktop");
		const EXE_FILE = "C:\\ソース解析ツール\\ExecCobolAnalysis\\ExecCobolAnalysis.exe";
		exec(EXE_FILE + " " + fileName, (error,stdout,stderr) =>
		{
			if(error)
				vscode.window.showErrorMessage("エラーが発生しました。詳細はログファイルをご確認ください。");
			else
				vscode.window.showInformationMessage("処理正常終了。");
			
			console.log(stdout);
			console.log(stderr);
		});
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
