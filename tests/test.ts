// Write a test for the compiled code
import { getLogos } from '../dist/index';

const test = async () => {
  const domain = 'https://www.facebook.com/user';
  const logo = await getLogos(domain);
  console.log(logo);

  const domain2 = 'web.dev';
  const logo2 = await getLogos(domain2, { devices: 'mobile' });
  console.log(logo2);
}

test();