import React, { useMemo, useEffect } from "react";
const Editor = typeof window === 'object' ? require('react-quill-with-table') : () => false;
const Quill = typeof window === 'object' ? require('react-quill-with-table').Quill : () => false;
const ImageResize = typeof window === 'object' ? require('quill-image-resize').default : () => false;
import QuillBetterTable from "quill-better-table";

export default function QillWrapper({ quillRef, ...props }) {
	window.Quill = Quill;
	Quill.register('modules/ImageResize', ImageResize);
	// Quill.register("modules/better-table", QuillBetterTable);
    const modules = useMemo(()=>{
		return {
			table: true,
			toolbar: {
				container: [
					[{ 'font': [] }],
					[{ header: [1, 2, 3] }],
					['bold', 'italic', 'underline', 'strike',],
					[{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
					['link', 'image'],
					[{ align: [] }, { color: [] }, { background: [] }],
					['clean']
				]
			},
			ImageResize: {
				parchment: Quill.import('parchment'),
			},
			// 'better-table': {
			// 	operationMenu: {
			// 		items: {
			// 		unmergeCells: {
			// 			text: 'Another unmerge cells name'
			// 		}
			// 		}
			// 	}
			// },
			// 	keyboard: {
			// 	bindings: QuillBetterTable.keyboardBindings
			// }
		}
	},[]);

	useEffect(()=>{
		const editor = quillRef.current.getEditor();
		const keyboard = editor.getModule('keyboard');
	},[])
	const addTable =()=>{
		const editor = quillRef.current.getEditor();
		editor.focus();
		const tableModule = editor.getModule('table');
		tableModule.insertTable(1,2)
	}
    return Editor && (
		<>
			<button onClick={addTable}>테이블추가</button>
			<Editor {...props} ref={quillRef} modules={modules} theme="snow" />
		</>
	);
}