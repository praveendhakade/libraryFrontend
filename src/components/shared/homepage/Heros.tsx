import { Button, Typography } from "@mui/material";
import { BoxType } from "../../../types/heros";
import { useAuthState } from "../../../hooks/authHook";

const FIRST_BOX: BoxType = {
  title: "What have you been reading?",
  showBtn: true,
  content:
    "The library team would love to know what you have been reading. Whether it is to learn a new skill or grow within one, we will be able to provide the top content for you!",
};

const SECOND_BOX: BoxType = {
  title: "Our collection is always changing!",
  showBtn: false,
  content:
    " Try to check in daily as our collection is always changing! We work nonstop to provide the most accurate book selection possible for our Luv 2 Read students! We are diligent about our book selection  and our books are always going to be our top priority.",
};
export const Heros = () => {
  return (
    <div className="my-4 ">
      <div className="flex flex-col md:flex-row items-center md:items-stretch">
        <div className="w-1/2 home-img left-img  h-[250px]" />
        <TextContainer
          title={FIRST_BOX.title}
          content={FIRST_BOX.content}
          showBtn={true}
        />
      </div>
      <div className="flex flex-col md:flex-row  items-center">
        <TextContainer
          title={SECOND_BOX.title}
          content={SECOND_BOX.content}
          showBtn={false}
        />
        <div className=" w-1/2 home-img right-img h-[250px]" />
      </div>
    </div>
  );
};

const TextContainer = ({ title, content, showBtn }: BoxType) => {
  const { isLoggedIn } = useAuthState();
  return (
    <div className="w-1/2 md:px-6 px-0 py-8 flex flex-col items-start justify-start gap-4">
      <Typography component={"h4"} variant="h4">
        {title}
      </Typography>
      <Typography component={"p"} variant="body2">
        {content}
      </Typography>
      {showBtn && !isLoggedIn && <Button variant="contained">Sigun up</Button>}
    </div>
  );
};
