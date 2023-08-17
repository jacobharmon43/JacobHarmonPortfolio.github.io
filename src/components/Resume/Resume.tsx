import React from 'react';
import file from '../../Resume.pdf'
import { Document, Page, pdfjs } from 'react-pdf';
import { PageGeneric } from '../PageGeneric/PageGeneric';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export class Resume extends PageGeneric{
  render(): React.ReactNode {   
    return(
      <div className="flex flex-col m-8 justify-center overflow-x-hidden">
        <div id='holder' className='w-5/6 min-w-fit m-auto'>
          <Document file={file} className='flex flex-col align-center'>
            <Page className="shadow-sm mb-8" pageNumber={1}  width={document.getElementById('holder')?.clientWidth} renderAnnotationLayer={false} renderTextLayer={false} renderForms={false}/>
          </Document>
        </div>
        <div className='h-4'/>
        <a href={file} target='_blank' rel='noreferrer' className = 'block w-inherit text-center' download="JacobHarmonResume"> Download PDF </a>
        <div className ='h-4'/>
      </div>
    );
  }
}