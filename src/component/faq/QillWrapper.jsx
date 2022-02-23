import React, { useMemo, useEffect, useState } from "react";
const Editor = typeof window === 'object' ? require('react-quill-with-table') : () => false;
const Quill = typeof window === 'object' ? require('react-quill-with-table').Quill : () => false;
const ImageResize = typeof window === 'object' ? require('quill-image-resize').default : () => false;

export default function QillWrapper({ quillRef, ...props }) {
	const [tableFocus, setTableFocus] = useState(false);
	let editor = quillRef.current?.getEditor();
	let tableModule = editor?.getModule('table');
	window.Quill = Quill;
	Quill.register('modules/ImageResize', ImageResize);
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
		}
	},[]);

	useEffect(()=>{
		document.addEventListener('click',(e)=>{
			document.querySelector(".tb-focus")?.classList.remove('tb-focus');
			if(e.target.tagName === 'TD' || e.target.classList.contains('table_btn')){
				setTableFocus(true);
				e.target.classList.add('tb-focus');
			}else{
				setTableFocus(false);
			}
		});
	},[]);
	const addTable = useMemo((e)=>(e)=>{
		e.preventDefault();
		editor = quillRef.current?.getEditor();
		tableModule = editor?.getModule('table');
		editor.focus();
		tableModule.insertTable(1,2);
	},[editor, tableModule])
	const deleteTable =  useMemo((e)=>(e)=>{
		e.preventDefault();
		tableModule.deleteTable();
	},[tableModule])
	const addTableRow = useMemo((e)=>(e)=>{
		e.preventDefault();
		tableModule.insertRowAbove();
	},[tableModule])
	const deleteTableRow = useMemo((e)=>(e)=>{
		e.preventDefault();
		tableModule.deleteRow();
	},[tableModule])
	const addTableColumn = useMemo((e)=>(e)=>{
		e.preventDefault();
		tableModule.insertColumnRight();
	},[tableModule])
	const deleteTableColumn = useMemo((e)=>(e)=>{
		e.preventDefault();
		tableModule.deleteColumn();
	},[tableModule]);
    return Editor && (
		<>
			<button className="table_btn" onClick={addTable}>테이블추가</button>
			<div style={!tableFocus ? {display: 'none'} : {}}>
				<button className="table_btn" onClick={deleteTable}>테이블 삭제</button>
				<button className="table_btn" onClick={addTableRow}>열 추가</button>
				<button className="table_btn" onClick={deleteTableRow}>열 삭제</button>
				<button className="table_btn" onClick={addTableColumn}>행 추가</button>
				<button className="table_btn" onClick={deleteTableColumn}>행 삭제</button>
			</div>
			<Editor {...props} ref={quillRef} modules={modules} theme="snow" />
		</>
	);
}