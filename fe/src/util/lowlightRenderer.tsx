import java from 'highlight.js/lib/languages/java';
import javascript from 'highlight.js/lib/languages/javascript';
import Lowlight from 'react-lowlight';

Lowlight.registerLanguage('js', javascript);
Lowlight.registerLanguage('javascript', javascript);
Lowlight.registerLanguage('java', java);

const lowlightRenderer = {
  code(snippet, lang) {
    return <Lowlight language={lang} value={snippet} />;
  },
};

export default lowlightRenderer;
