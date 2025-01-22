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
    font: 'NanumHumanTTFBold',
    weight: 400,
    size: 58,
    lineHeight: 51,
  }),
  heading2: FONT({
    font: 'NanumHumanTTFBold',
    size: 16,
    letterSpacing: '-.4',
    lineHeight: 'normal',
    weight: 500,
  }),
  heading3: FONT({
    font: 'NanumHumanTTFBold',
    size: 26,
    letterSpacing: '-.4',
    lineHeight: 'normal',
    weight: 500,
  }),
  heading4: FONT({
    font: 'NanumHumanTTFBold',
    size: 22,
    letterSpacing: '-.4',
    lineHeight: 'normal',
    weight: 500,
  }),
  label: FONT({
    font: 'NanumHumanTTFBold',
    size: 16,
    letterSpacing: '.016',
    lineHeight: '100%',
    weight: 500,
  }),
  body1: FONT({
    font: 'NanumHumanTTFBold',
    size: 20,
    letterSpacing: '-.4',
    lineHeight: 34,
    weight: 400,
  }),
  body2: FONT({
    font: 'NanumHumanTTFBold',
    size: 14,
    lineHeight: 28,
    letterSpacing: '-.4',
    weight: 400,
  }),
}
