import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";

const useDiary = (id) => {
  const [diary, setDiary] = useState();
  const data = useContext(DiaryStateContext);
  const navigate = useNavigate();

  useEffect(() => {
    const matchDiary = data.find((it) => String(it.id) === String(id));
    if (matchDiary) {
      setDiary(matchDiary);
    } else {
      alert("일기가 존재하지 않습니다.");
      navigate("/", { replace: true });
    }
  }, [id, data]);

  return diary;
};
export default useDiary;
