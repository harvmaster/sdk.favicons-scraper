import { extractDomain } from "./extractDomain";

const ENDPOINT = 'https://api.faviconscraper.mc.hzuccon.com/icon'

export type LogoResponse = ImageInfo[];

const sourceDevices = ['desktop', 'mobile'] as const;
type SourceDevice = typeof sourceDevices[number];
type SourceDeviceOptions = `${SourceDevice}` | `${SourceDevice} ${SourceDevice}`;


export type ImageInfo = {
  size: {
      width: number;
      height: number;
  };
  type: string;
  mime: string;
  src: string;
  device: SourceDevice;
};

export type Options = {
  devices?: SourceDeviceOptions
}

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

export const getLogos = async (url: string, options?: Options): Promise<LogoResponse> => {
  const domain = extractDomain(url)
  const requestURL = new URL(`${ENDPOINT}?url=${domain}`);

  if (options?.devices) {
    requestURL.searchParams.append('devices', options.devices);
  }

  const response = await fetch(requestURL.toString());
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  validateResponse(data);

  return data;
};