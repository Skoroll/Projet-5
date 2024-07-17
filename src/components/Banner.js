import '../styles/Banner.css';

function Banner({ version }) {
  const imageUrl = version === 'cliff' 
    ? 'https://s3-alpha-sig.figma.com/img/4706/e7dd/e270fc8fc902a1eb738458e7b29c1899?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aH2bY6cNrrbLsCGnEZS1lVTKeS9fP3eUDnKLvYhYjAOd9UmG3jf7d688kCI5Q741zNYlawlESmjGerHeNf5-TAcbFVluJZ8TAWQRnz3W72TyZ9pR51LWxS9deL~rHHF0sNXuJNpvph1mpRwvpbKH1w2QDw5VrsPT-ZNRIr9CVirzDNBjhXUjVe88PuhLpI8M-6f2vgVWYKLid-qHwRi12re2aClKvDnNHo6d7A-B9VGOAqOugjz1~wAPS1WNHLdZ5SyTwNYSGv-JoWLTG~5p7okKg2x0ZgU2bAjcqhH0L4zW3WINlwe16I1Qq4ZD3ZIdhE4ZY8tjvCUBOgk3wtzrKw__' 
    : 'https://s3-alpha-sig.figma.com/img/56fa/e17e/b9995860bb6384a77ca7dc9bf52da3be?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mI2jputeVs0mIg0vpDTX1ICthIaZ2ZmC-yYCC6grV9M3JT3ZD2xZDBZtHzIfvEHj861L5EQW7Nn-kOoLj0AR72rKnCUmjJOvI0zmEb9HXFGWYSVGGcgxfTLH4Xvl3qHuG6bnDDc8FMBRyn2B4n7kjnWpZW-0F3U4pufSJouXVj6LhbCyJ2ox3WjrEOwV-ZKy83yKke5d3nSIHECEanuSiiaMc8W7u8uJ76mnvxFlxHsxmJZ0aKCGzfME14jpo4YyQzw6bbIY~QINEvmfivWLZFT1s5o4XzKOaSp3zDpwjKYX4WeXhM4zd8PgaWovJdjDEAzbtBNFaWILuG4NdpzXVg__';

  const showText = version === 'cliff';

  return (
    <div className='banner'>
      <img src={imageUrl} alt='Banner' className='banner__image' />
      <div className='banner__overlay'></div>
      {showText && <p className='banner__text'>Chez vous, partout et ailleurs</p>}
    </div>
  );
}

export default Banner;
