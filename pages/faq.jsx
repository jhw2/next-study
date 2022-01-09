import { useEffect, useRef, useState } from 'react';
import { db } from '../firebase'; 
import { collection, addDoc, getDocs } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider  } from "firebase/auth";
import Editor from '../src/component/faq/Editor';
// import Test from '../src/component/faq/Test';

export default function faq() {
    const formRef = useRef();
    const titleRef = useRef();
    const contRef = useRef();
    const [faqList, setFaqList] = useState([]);

    const inSertData = async (e)=>{
        e.preventDefault()
        const title = titleRef.current.value;
        const contents = contRef.current.value;

        const ISSERVER = typeof window === "undefined";
        if(!ISSERVER) {
            console.log(localStorage.moviePosters);
        }

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
        const auth = getAuth();
        const user = auth.currentUser;
        const provider = new GoogleAuthProvider();
        
        // signInWithPopup(auth, provider)
        // .then((result) => {
        //     // This gives you a Google Access Token. You can use it to access Google APIs.
        //     const credential = GoogleAuthProvider.credentialFromResult(result);
        //     const token = credential.accessToken;

        //     // The signed-in user info.
        //     const user = result.user;
        //     console.log(user)
        // }).catch((error) => {
        //     // Handle Errors here.
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     // The email of the user's account used.
        //     const email = error.email;
        //     // The AuthCredential type that was used.
        //     const credential = GoogleAuthProvider.credentialFromError(error);
        //     console.log(errorMessage)
        //     // ...
        // });



        setFaqList(await getData());
    },[]);
    const onChangeEditor = (tag)=>{
       // console.log(tag)
    }

    return (
        <form onSubmit={inSertData} ref={formRef}>
            <p><input type="text" ref={titleRef} required/></p>
            <p><textarea ref={contRef} required></textarea></p>
            <Editor defaultValue='' onChangeEditor={onChangeEditor}  />
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

