import * as React from 'react';
import {EditorApi, useEditor} from '../hooks/useEditor';

const TextEditorContext = React.createContext<EditorApi | undefined>(undefined);

export const useEditorApi = () => {
    const context = React.useContext(TextEditorContext);
    if (context === undefined) {
        throw new Error('useEditorApi must be used within TextEditorProvider');
    }

    return context;
}

type Props = {
    children?: React.ReactNode;
}

export const TextEditorProvider = ({children}: Props) => {
    const editorApi = useEditor();

    return (
        <TextEditorContext.Provider value={editorApi}>
            {children}
        </TextEditorContext.Provider>
    )
}