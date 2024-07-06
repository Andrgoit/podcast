import sp from "../../../../assets/images/spring.svg";
import stars from "../../../../assets/images/stars.png";
import BlackButton from "../../../../components/BlackButton/BlackButton";

export default function Subscribe() {
  return (
    <div className="cont reletive">
      <img
        src={sp}
        alt="spring"
        className=" absolute top-[70px] left-[-120px]"
      />
      <img src={stars} alt="stars" className=" absolute right-16 top-[235px]" />
      <div className="flex flex-col gap-10 max-w-[513px] items-center text-center">
        <p className=" text-8xl font-bold text-black ">
          Your Daily
          <span className="text-[#CD4631]"> Podcast</span>
        </p>
        <p className="w-[300px] text-[#4D4D4D] text-base">
          We cover all kinds of categories and a weekly special guest.
        </p>
        <BlackButton>subscribe</BlackButton>
      </div>
    </div>
  );
}
