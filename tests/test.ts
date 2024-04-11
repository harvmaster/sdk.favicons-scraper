// Write a test for the compiled code
import { getLogos } from '../dist/index';

const test = async () => {
  const domain = 'https://www.facebook.com/user';
  const logo = await getLogos(domain);
  console.log(logo);
}

test();