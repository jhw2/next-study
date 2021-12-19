import { useEffect, useRef, useState } from 'react';
import { db } from '../firebase'; 
import { collection, addDoc, getDocs } from "firebase/firestore";
import { async } from '@firebase/util';

export default function faq() {
    const formRef = useRef();
    const titleRef = useRef();
    const contRef = useRef();
    const [faqList, setFaqList] = useState([]);

    const inSertData = async (e)=>{
        e.preventDefault()
        const title = titleRef.current.value;
        const contents = contRef.current.value;

        try {
            const docRef = await addDoc(collection(db, "faq"), {title, contents});
            console.log("Document written with ID: ", docRef.id);
            setFaqList(await getData());
            formRef.current.reset();
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const getData = async ()=>{
        let faqList = [];
        const querySnapshot = await getDocs(collection(db, "faq"));
        querySnapshot.forEach((doc) => {
            faqList.push({id: doc.id, ...doc.data()})
        });
        return faqList;
    }

    useEffect(async()=>{
        setFaqList(await getData());
    },[]);

    return (
        <form onSubmit={inSertData} ref={formRef}>
            <p><input type="text" ref={titleRef} required/></p>
            <p><textarea ref={contRef} required></textarea></p>
            <input type='submit' value="등록" />

            {faqList.map(item=>{
                return (
                    <div key={item.id}>
                        <p>{item.title}</p>
                        <p>{item.contents}</p>
                    </div>
                )
            })}
        </form>
    )
}

