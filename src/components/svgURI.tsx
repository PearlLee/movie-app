import { ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

export function svgURI(svg: ReactElement): string {
    const encodeSVG = encodeURIComponent(renderToStaticMarkup(svg).replace("<svg ","<svg xmlns=\"http://www.w3.org/2000/svg\" "));
    return `url("data:image/svg+xml, ${encodeSVG}")`;
}