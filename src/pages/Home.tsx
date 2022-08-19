import React from 'react';
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {useEditor} from "../hooks/useEditor";

const Home = () => {
    const editorApi = useEditor();
    return (
        <div>
            <div>Home</div>
            {/*/!*<TextEditorProvider>*!/*/}
            {/*/!*    Hello*!/*/}
            {/*/!*</TextEditorProvider>*!/*/}
            {/*<Editor*/}
            {/*    editorState={editorApi.state}*/}
            {/*    toolbarClassName="toolbarClassName"*/}
            {/*    wrapperClassName="wrapperClassName"*/}
            {/*    editorClassName="editorClassName"*/}
            {/*    onEditorStateChange={editorApi.onChange}*/}
            {/*/>;*/}
        </div>
    );
};

export default Home;
