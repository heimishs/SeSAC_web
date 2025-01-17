import { useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

export default function Student() {
  const params = useParams("name");
  const [queryName, setQueryName] = useSearchParams(); //쿼리값을 가져오기위한 훅
  const realName = queryName.get("name");
  return (
    <>
      <div>
        <h3>
          학생 이름은 <span style={{ color: "green" }}>{params.name}</span>
          입니다.
        </h3>

        <div>
          <h3>
            {realName ? (
              <>
                실제 이름은 <span style={{ color: "red" }}>{realName}</span>
              </>
            ) : (
              ""
            )}
          </h3>
        </div>
      </div>
    </>
  );
}
