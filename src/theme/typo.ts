interface Font {
    font: string;
    weight: number;
    size: number;
    letterSpacing?: string;
    lineHeight: number | string;
  }
  
const FONT = ({ font, weight, size, letterSpacing, lineHeight }: Font): string => {
  return `
      font-family : "${font}";
      font-weight : ${weight};
      font-size : ${size}px;
      letter-spacing: ${letterSpacing ? `${letterSpacing}px`: 'normal'};
      line-height : ${typeof lineHeight === 'string' ? lineHeight : lineHeight + 'px'};
      `;
};
  
export const typo = {
  heading1: FONT({
    font: 'HyundaiSansHeadKR',
    weight: 400,
    size: 58,
    lineHeight: 51,
  }),
  heading2: FONT({
    font: 'HyundaiSansHeadKR',
    size: 16,
    letterSpacing: '-.4',
    lineHeight: 'normal',
    weight: 500,
  }),
  label: FONT({
    font: 'HyundaiSansTextKR',
    size: 16,
    letterSpacing: '.016',
    lineHeight: '100%',
    weight: 500,
  }),
  body1: FONT({
    font: 'HyundaiSansTextKR',
    size: 20,
    letterSpacing: '-.4',
    lineHeight: 34,
    weight: 400,
  }),
}
