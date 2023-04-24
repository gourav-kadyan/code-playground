import React, { useEffect, useRef } from 'react';
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import ACTION from '../Action';


const Editor = ({socketRef, roomId, oncodechange}) => {
    
    const editorRef = useRef(null);

    useEffect(() => {
        async function init(){
            editorRef.current = Codemirror.fromTextArea(document.getElementById('realtimeEditor'),{
                mode: { name: 'javascript', json: true },
                theme: 'dracula',
                autoCloseTags: true,
                autoCloseBrackets: true,
                lineNumbers: true,
            })
            
            //sync code startup
            editorRef.current.on('change',(instance,changes) => {
                console.log(changes);
                const {origin} = changes;
                const code = instance.getValue();
                oncodechange(code);
                if(origin !== 'setValue' ){
                    socketRef.current.emit(ACTION.CODE_CHANGE, {
                        roomId,
                        code,
                    })
                }
                console.log(code);
            })

            //get the code 
           

        }
        init();
    },[])

    useEffect(() => {
        if (socketRef.current) {
            socketRef.current.on(ACTION.CODE_CHANGE, ({ code }) => {
                if (code !== null) {
                    editorRef.current.setValue(code);
                }
            });
        }

        return () => {
            socketRef.current.off(ACTION.CODE_CHANGE);
        };
    }, [socketRef.current]);


    return <textarea id="realtimeEditor"></textarea>;
};

export default Editor;