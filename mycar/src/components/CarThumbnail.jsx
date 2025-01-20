export default function CarThubnail(props) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img className='' src={props.imageLink}></img>
      <h3>{props.carName}</h3>
      <p>{props.carPrice}</p>
    </div>
  );
}
