import React, { useState, memo, useRef, forwardRef, useMemo } from "react";
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { useEffect } from "react";
const ReactQuill = dynamic(import('./QillWrapper'), {ssr: false});

const ForwardRefEditor = forwardRef((props, ref) => 
  <ReactQuill {...props} quillRef={ref}/>
);
ForwardRefEditor.displayName = 'ForwardRefEditor';
export default memo(function Editor({onChangeEditor, defaultValue}) {
    const quillRef = useRef();
	const [value, setValue] = useState(defaultValue);
	const inputFile = useRef(null);
	const onChange = (tag)=>{
		setValue(tag)
		onChangeEditor(tag);
	}
	return (
		<>
			<ForwardRefEditor ref={quillRef} value={value} onChange={onChange}/>
		</>
		
	);
});