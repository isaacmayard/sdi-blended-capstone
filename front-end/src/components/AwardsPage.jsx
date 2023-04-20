import { Row } from 'react-bootstrap';

import TextEditor from './TextEditor';

export default function AwardsPage() {
  return (
    <article className='tw-h-[100vh]'>
      <h1 className='tw-mt-3 tw-text-center tw-text-xl tw-font-bold tw-text-stone-100'>
        Bullet Builder
      </h1>
      <div style={{ borderRadius: '10px' }}>
        <iframe
          className='tw-ml-4 tw-mt-3 tw-h-[35vh] tw-w-[88vw] tw-rounded-lg'
          title='Military Bullet Shaper'
          src='https://af-vcd.github.io/pdf-bullets/'
        />
      </div>
      <br />
      <TextEditor />
      <Row>
        <p className='tw-text-center tw-text-xl tw-font-extrabold tw-text-stone-100'>
          Helpful Links
        </p>
        <a
          href='https://www.eprbullets.com/'
          className='tw-text-l tw-mt-3 tw-text-center tw-font-medium tw-text-stone-100 hover:tw-text-black'
          onClick={(e) => {
            e.preventDefault();
            window.open('https://www.eprbullets.com/', '_blank');
          }}
        >
          EPR Bullet Bank
        </a>
        <a
          href='https://www.e-publishing.af.mil/'
          className='tw-text-l tw-mt-3 tw-text-center tw-font-medium tw-text-stone-100 hover:tw-text-black'
          onClick={(e) => {
            e.preventDefault();
            window.open('https://www.e-publishing.af.mil/', '_blank');
          }}
        >
          AF E-Publishing
        </a>
        <a
          href='https://www.eprbulletsafsc.com/'
          className='tw-text-l tw-mt-3 tw-text-center tw-font-medium tw-text-stone-100 hover:tw-text-black'
          onClick={(e) => {
            e.preventDefault();
            window.open('https://www.eprbulletsafsc.com/', '_blank');
          }}
        >
          Bullets By AFSC
        </a>
        <a
          href='https://www.lightningwithinfive.com/'
          className='tw-text-l tw-mt-3 tw-text-center tw-font-medium tw-text-stone-100 hover:tw-text-black'
          onClick={(e) => {
            e.preventDefault();
            window.open('https://www.lightningwithinfive.com/', '_blank');
          }}
        >
          Lightning Within Five
        </a>
        <a
          href='https://www.airforcewriter.com/EPR/bullets/pri.shtml'
          className='tw-text-l tw-mt-3 tw-text-center tw-font-medium tw-text-stone-100 hover:tw-text-black'
          onClick={(e) => {
            e.preventDefault();
            window.open(
              'https://www.airforcewriter.com/EPR/bullets/pri.shtml',
              '_blank',
            );
          }}
        >
          Air Force Writer
        </a>
      </Row>
    </article>
  );
}
