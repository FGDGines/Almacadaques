import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NarbarAdmin } from "../NarbarAdmin/NarbarAdmin";
import { BarSession } from "../barSession/barSession";
import "./BlogBienestar.css";

const BlogBienestar = () => {
  const [editorData, setEditorData] = useState('');

  const handleEditorChange = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _event: any,
    editor: { getData: () => string }
  ) => {
    const data = editor.getData();
    setEditorData(data);
  };

  return (
    <div className="BlogBienestar">
      <NarbarAdmin />
      <div className="containerBlogBienestar">
        <BarSession tituloVista='Blog' segundoTitulo='Tips Bienestar' nombre='Kristine' img='../../../../src/assets/Dashboard-almacadaques/users/user.svg' />
        <div className="editordeLibro">
          {/* Agrega el componente CKEditor aquí */}
          <CKEditor
            editor={ClassicEditor}
            data={editorData}
            onChange={(event, editor) => handleEditorChange(event, editor)}
          />
        </div>

      </div>
    </div>
  );
};

export { BlogBienestar };
