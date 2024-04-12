import { extractDomain } from "./extractDomain";

const ENDPOINT = 'https://api.faviconscraper.mc.hzuccon.com/icon'

export type LogoResponse = ImageInfo[];

export type ImageInfo = {
  size: {
      width: number;
      height: number;
  };
  type: string;
  mime: string;
  src: string;
};

const validateImageInfo = (imageInfo: ImageInfo) => {
  if (typeof imageInfo.size.width !== 'number') {
    throw new Error('Invalid image info, width is not a number');
  }
  if (typeof imageInfo.size.height !== 'number') {
    throw new Error('Invalid image info, height is not a number');
  }
  if (typeof imageInfo.type !== 'string') {
    throw new Error('Invalid image info, type is not a string');
  }
  if (typeof imageInfo.mime !== 'string') {
    throw new Error('Invalid image info, mime is not a string');
  }
  if (typeof imageInfo.src !== 'string') {
    throw new Error('Invalid image info, src is not a string');
  }
}

const validateResponse = (response: LogoResponse) => {
  if (!Array.isArray(response)) {
    throw new Error('Invalid response, not an array');
  }
  response.forEach(validateImageInfo);
}

export const getLogos = async (url: string): Promise<LogoResponse> => {
  const domain = extractDomain(url)
  const response = await fetch(`${ENDPOINT}?url=${domain}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  validateResponse(data);

  return data;
};