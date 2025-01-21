export default function CarThubnail({imageLink, carName, carPrice, onClick}) {
  return (
    <div className='flex flex-col justify-center items-center' onClick={onClick}>
      <img src={imageLink}></img>
      <h3 className="font-bold">{carName}</h3>
      <p>{carPrice}</p>
    </div>
  );
}
