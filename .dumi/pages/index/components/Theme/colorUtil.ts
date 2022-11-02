import { TinyColor } from '@ctrl/tinycolor';

export const COLOR_IMAGES = [
  {
    color: '#1677FF',
    // url: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*QEAoSL8uVi4AAAAAAAAAAAAAARQnAQ',
    url: null,
  },
  {
    color: '#5A54F9',
    url: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*MtVDSKukKj8AAAAAAAAAAAAAARQnAQ',
  },
  {
    color: '#9E339F',
    url: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*FMluR4vJhaQAAAAAAAAAAAAAARQnAQ',
  },
  {
    color: '#FB7299',
    url: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*xJOWQZDpSjkAAAAAAAAAAAAAARQnAQ',
  },
  {
    color: '#E0282E',
    url: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*w6xcR7MriwEAAAAAAAAAAAAAARQnAQ',
  },
  {
    color: '#F4801A',
    url: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*VWFOTbEyU9wAAAAAAAAAAAAAARQnAQ',
  },
  {
    color: '#F2BD27',
    url: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*1yydQLzw5nYAAAAAAAAAAAAAARQnAQ',
  },
  {
    color: '#00B96B',
    url: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*XpGeRoZKGycAAAAAAAAAAAAAARQnAQ',
  },
] as const;

export const PRESET_COLORS = COLOR_IMAGES.map(({ color }) => color);

const DISTANCE = 33;
export function getClosetColor(colorPrimary?: string) {
  const colorPrimaryRGB = new TinyColor(colorPrimary).toRgb();

  const distance = COLOR_IMAGES.map(({ color }) => {
    const colorObj = new TinyColor(color).toRgb();
    const dist = Math.sqrt(
      Math.pow(colorObj.r - colorPrimaryRGB.r, 2) +
        Math.pow(colorObj.g - colorPrimaryRGB.g, 2) +
        Math.pow(colorObj.b - colorPrimaryRGB.b, 2),
    );

    return { color, dist };
  });

  const firstMatch = distance.sort((a, b) => a.dist - b.dist)[0];

  return firstMatch.dist <= DISTANCE ? firstMatch.color : null;
}
