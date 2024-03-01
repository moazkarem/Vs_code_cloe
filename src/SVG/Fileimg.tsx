interface Iprops {
  src: string;
  className?: string;
}
const Fileimg = ({ src, className = "w-5 h-5" }: Iprops) => {
  return (
    <div>
      <img src={src} className={className} />
    </div>
  );
};

export default Fileimg;
