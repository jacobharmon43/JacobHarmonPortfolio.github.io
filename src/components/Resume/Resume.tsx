import React from 'react';
import file from '../../Resume.pdf'
import { Document, Page, pdfjs } from 'react-pdf';


export class Resume extends React.Component{
  componentDidMount() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  };

  render(): React.ReactNode {
    return(
      <div id = "PDFContainer" className = "absolute left-1/2 -translate-x-1/2 overflow-x-hidden">
        <Document file = {file}>
          <Page 
            pageNumber={1} 
            renderTextLayer={false} 
            renderAnnotationLayer={false}
          />
        </Document>
        <div className='h-4'/>
        <a href={file} target='_blank' rel='noreferrer' className = 'block w-inherit text-center text-monokaiYellow' download="JacobHarmonResume"> Download PDF </a>
        <div className ='h-4'/>
      </div>

    );
  }
}