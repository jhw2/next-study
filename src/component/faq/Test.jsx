import React, { useEffect, useState, useRef } from "react";
import ReactQuill, { Quill } from "react-quill-with-table";
import QuillBetterTable from "quill-better-table";
import { Parser as HtmlToReactParser } from "html-to-react";

import "react-quill-with-table/dist/quill.snow.css";
import "react-quill-with-table/dist/quill.bubble.css";
import * as QuillTableUI from "quill-table-ui";

var htmlToReactParser = new HtmlToReactParser();

Quill.register("modules/better-table", QuillBetterTable);

const editorModules = {
  table: false, // disable table module
  "better-table": {
    operationMenu: {
      items: {
        unmergeCells: {
          text: "Another unmerge cells name"
        }
      }
    }
  },
  keyboard: {
    bindings: QuillBetterTable.keyboardBindings
  }
};

export default function Text() {
  const editor = useRef();
  const [text, setText] = useState("");
  var reactElement = htmlToReactParser.parse(text);
  useEffect(() => {
    const editon = editor.current.getEditor();
    let tableModule = editon.getModule("better-table");
    tableModule.insertTable(3, 3);
    console.log(tableModule);
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ReactQuill
        ref={editor}
        value={text}
        modules={editorModules}
        onChange={(value) => setText(value)}
        theme="snow"
      />

    </div>
  );
}