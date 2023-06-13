import { AiFillStar } from "react-icons/ai";

const image = 'https://th.bing.com/th/id/OIP.lpdGzPED_bhAvb3Tp5yfrgHaI3?pid=ImgDet&rs=1'

const CardMovie = () => {
  return (
    <div className="w-full relative  ease-in-out duration-300 hover:scale-110 hover:cursor-pointer">
      <img src={image} alt={""} className="w-full h-96 flex-1 object-cover" />
      <div className="absolute top-5 left-5 bg-indigo-500 rounded-full">
        <div className="flex flex-row items-center py-1 px-[10px]">
          <span className="text-yellow-500 text-sm">
            <AiFillStar />
          </span>
          <span className="text-white text-sm ml-1">8.9</span>
        </div>
      </div>
      <div className="flex flex-col py-4 ml-4 flex-1">
        <h4 className="font-semibold text-[20px]">Title</h4>
        <p className="text-sm text-black">Tahun</p>
      </div>
    </div>
  );
};

export default CardMovie;
