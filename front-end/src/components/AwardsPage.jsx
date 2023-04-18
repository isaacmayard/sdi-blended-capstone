export default function AwardsPage() {
  return (
    <article>
      <h1 className='tw-mt-3 tw-text-center tw-text-xl tw-font-bold tw-text-stone-100'>
        Bullet Builder
      </h1>
      <div style={{ borderRadius: '10px' }}>
        <iframe
          className='tw-ml-4 tw-mt-3 tw-h-[50vh] tw-w-[84vw] tw-rounded-lg'
          title='Military Bullet Shaper'
          src='https://af-vcd.github.io/pdf-bullets/'
        />
      </div>
    </article>
  );
}
